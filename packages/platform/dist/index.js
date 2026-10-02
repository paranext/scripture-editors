import { jsx as M, jsxs as _e, Fragment as Pn } from "react/jsx-runtime";
import { forwardRef as hn, useState as fe, useRef as Y, useCallback as me, useEffect as K, useMemo as Ve, memo as sb, createContext as lp, useContext as up, Children as ob, isValidElement as ab, cloneElement as cb, useImperativeHandle as $o, useLayoutEffect as As } from "react";
import { assertSafeKey as Qe, isValidBookCode as lb, MARKER_OBJECT_PROPS as ub, USJ_VERSION as kr, USJ_TYPE as xr, isUsjTextContentLocation as db, indexesFromUsjJsonPath as dp, isUsjAttributeKeyLocation as fb, isUsjAttributeMarkerLocation as pb, isUsjClosingAttributeMarkerLocation as hb, isUsjMarkerLocation as gb, isUsjClosingMarkerLocation as mb, isUsjPropertyValueLocation as yb, getUsjDocumentLocationTypeName as bb, usjJsonPathFromIndexes as xn, EMPTY_USJ as fp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ge, $parseSerializedNode as Ps, DecoratorNode as Ns, ElementNode as rr, isHTMLElement as Kn, createState as Io, $getState as ie, $setState as Ct, $isRangeSelection as A, $isElementNode as q, $isTextNode as E, $getSelection as w, $isNodeSelection as Lo, ParagraphNode as rl, TextNode as We, $createTextNode as ke, $getCommonAncestor as kb, $isLineBreakNode as Bn, NODE_STATE_KEY as ws, $getEditor as an, $hasUpdateTag as xb, $getNodeByKey as oe, $getRoot as Ke, $createRangeSelection as Os, $createPoint as hr, $setSelection as Nn, SELECTION_CHANGE_COMMAND as Kt, $getCharacterOffsets as nl, KEY_DOWN_COMMAND as Sr, COMMAND_PRIORITY_HIGH as we, HISTORY_MERGE_TAG as il, CLICK_COMMAND as Do, COMMAND_PRIORITY_EDITOR as wn, isDOMNode as pp, $getNearestNodeFromDOMNode as Pi, CONTROLLED_TEXT_INSERTION_COMMAND as Uo, PASTE_COMMAND as gr, COMMAND_PRIORITY_CRITICAL as Ne, CUT_COMMAND as Tr, DROP_COMMAND as sl, DELETE_CHARACTER_COMMAND as ol, DELETE_WORD_COMMAND as hp, DELETE_LINE_COMMAND as gp, $isDecoratorNode as jn, COPY_COMMAND as yi, COMMAND_PRIORITY_LOW as vt, COMMAND_PRIORITY_NORMAL as Or, getDOMSelection as Tb, isSelectionWithinEditor as mp, $createRangeSelectionFromDom as yp, isDOMTextNode as Cb, BLUR_COMMAND as al, $addUpdateTag as Tt, SKIP_DOM_SELECTION_TAG as Pr, CLEAR_HISTORY_COMMAND as _b, INSERT_PARAGRAPH_COMMAND as us, INSERT_LINE_BREAK_COMMAND as Sb, REMOVE_TEXT_COMMAND as vb, $getPreviousSelection as Mb, $isRootOrShadowRoot as Eb, CAN_UNDO_COMMAND as Ab, CAN_REDO_COMMAND as Pb, DRAGSTART_COMMAND as Nb, $createNodeSelection as bp, getDOMSelectionFromTarget as wb, $onUpdate as kp, KEY_ENTER_COMMAND as xp, LineBreakNode as Tp, $copyNode as Ob, FOCUS_COMMAND as Rb, createEditor as qb, SELECT_ALL_COMMAND as $b, isExactShortcutMatch as Ib, getDOMTextNode as Lb, $isRootNode as Db, KEY_ESCAPE_COMMAND as Cp, createCommand as _p, HISTORIC_TAG as cl, UNDO_COMMAND as Sp, REDO_COMMAND as vp, CLEAR_EDITOR_COMMAND as Ub } from "lexical";
import { addClassNamesToElement as ri, removeClassNamesFromElement as ba, $findMatchingParent as Xe, $dfsIterator as Fo, $dfs as Vn, mergeRegister as $e, registerNestedElementResolver as Mp, $unwrapNode as ec, IS_APPLE as bi } from "@lexical/utils";
import { useLexicalNodeSelection as Fb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as It } from "fast-equals";
import Zi from "quill-delta";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as zb } from "unicode-segmenter/grapheme";
import { copyToClipboard as Kb, $getLexicalContent as Bb } from "@lexical/clipboard";
import { TreeView as jb } from "@lexical/react/LexicalTreeView";
import * as Vb from "react-dom";
import { createPortal as An } from "react-dom";
import { LexicalComposer as Ep } from "@lexical/react/LexicalComposer";
import { ContentEditable as Ap } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Pp } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Np } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as wp } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Wb } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Hb, createDOMRange as Gb, createRectsFromDOMRange as Jb } from "@lexical/selection";
import { autoUpdate as Yb, computePosition as Xb, shift as Qb, flip as Zb } from "@floating-ui/dom";
import { $generateNodesFromDOM as ek } from "@lexical/html";
import { AutoFocusPlugin as tk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as rk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Op, LexicalCollaboration as nk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as ik } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as sk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as ok, $isRootTextContentEmpty as ak } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as ck } from "@lexical/yjs";
import { Array as Xu, Map as Qu, YArrayEvent as lk } from "yjs";
const ka = (e) => Ge(Ps(e)), uk = {
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
function Rp(e) {
  return uk[e];
}
const I = " ", oo = "​", Bt = I, ll = `${I}|`, mr = "p", ds = "+", qp = "-", ao = "chapter", tc = "verse", Zu = "invalid", dk = "text-spacing", fk = "formatted-font", pk = "marker-", ul = "external-usj-mutation", $p = "selection-change", _t = "cursor-change", rc = "annotation-change", fs = "delta-change", Ip = "marker-settle", hk = [
  ul,
  $p,
  _t,
  rc,
  fs
], On = "zmsc-s", hi = "zmsc-e", gk = [On, hi], mk = [
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
  On,
  hi
], Lp = 1, dl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], yk = dl.filter((e) => e !== "sid" && e !== "eid");
class er extends Ns {
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
    return Up().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (mk.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Lp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Dp(e) {
  return gk.includes(e);
}
function Up(e, t, r, n, i) {
  return Ge(new er(e, t, r, n, void 0, i));
}
function Ye(e) {
  return e instanceof er;
}
const fl = "f", bk = [
  // Footnote
  fl,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function es(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const kk = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Fp = 1;
class Me extends rr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = fl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (es(t) === "crossref" ? qp : ds), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Tk(t) ? {
        conversion: xk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return pl().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (bk.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", es(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", es(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Kn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", es(this.getMarker()))), { element: r };
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
      version: Fp
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
function xk(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: pl(t, r, n) };
}
function pl(e, t, r, n, i) {
  return Ge(new Me(e, t, r, n, i));
}
function Tk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Me.isValidMarker(t) && e.classList.contains(Me.getType());
}
function F(e) {
  return e instanceof Me;
}
var x;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(x || (x = {}));
var k;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(k || (k = {}));
const nc = {
  id: {
    category: x.FileIdentification,
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
    category: x.FileIdentification,
    type: k.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: x.FileIdentification,
    type: k.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: x.Headers,
    type: k.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: x.Headers,
    type: k.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: x.Headers,
    type: k.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: x.Headers,
    type: k.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: x.Headers,
    type: k.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: x.Headers,
    type: k.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: x.Headers,
    type: k.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: x.Headers,
    type: k.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: x.Headers,
    type: k.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: x.Headers,
    type: k.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: x.Remarks,
    type: k.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: x.Remarks,
    type: k.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: x.Remarks,
    type: k.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: x.Introduction,
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
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
    type: k.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: x.Introduction,
    type: k.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: x.Introduction,
    type: k.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: x.DivisionMarks,
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
    category: x.DivisionMarks,
    type: k.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: x.DivisionMarks,
    type: k.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: x.DivisionMarks,
    type: k.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: x.DivisionMarks,
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
    category: x.DivisionMarks,
    type: k.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: x.DivisionMarks,
    type: k.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: x.DivisionMarks,
    type: k.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
    type: k.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
    type: k.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: x.Poetry,
    type: k.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: x.Poetry,
    type: k.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
    type: k.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: x.TitlesHeadings,
    type: k.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
    type: k.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: x.Lists,
    type: k.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: x.Lists,
    type: k.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: x.Lists,
    type: k.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: x.Lists,
    type: k.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: x.Lists,
    type: k.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: x.Lists,
    type: k.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: x.Lists,
    type: k.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: x.Footnotes,
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
    category: x.Footnotes,
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
    category: x.Footnotes,
    type: k.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: x.Footnotes,
    type: k.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: x.Footnotes,
    type: k.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: x.Footnotes,
    type: k.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: x.Footnotes,
    type: k.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: x.Footnotes,
    type: k.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: x.Footnotes,
    type: k.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: x.Footnotes,
    type: k.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: x.Footnotes,
    type: k.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: x.Footnotes,
    type: k.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: x.Footnotes,
    type: k.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: x.CrossReferences,
    type: k.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: x.CrossReferences,
    type: k.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: x.CrossReferences,
    type: k.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: x.CrossReferences,
    type: k.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: x.CrossReferences,
    type: k.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: x.CrossReferences,
    type: k.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: x.CrossReferences,
    type: k.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: x.CrossReferences,
    type: k.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: x.CrossReferences,
    type: k.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: x.CrossReferences,
    type: k.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: x.CrossReferences,
    type: k.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: x.SpecialText,
    type: k.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: x.SpecialText,
    type: k.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: x.SpecialText,
    type: k.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: x.SpecialText,
    type: k.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: x.SpecialText,
    type: k.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: x.SpecialText,
    type: k.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: x.SpecialText,
    type: k.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: x.SpecialText,
    type: k.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: x.SpecialText,
    type: k.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: x.SpecialText,
    type: k.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: x.SpecialText,
    type: k.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: x.SpecialText,
    type: k.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: x.SpecialText,
    type: k.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: x.SpecialText,
    type: k.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: x.SpecialText,
    type: k.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: x.CharacterStyling,
    type: k.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: x.CharacterStyling,
    type: k.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: x.CharacterStyling,
    type: k.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: x.CharacterStyling,
    type: k.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: x.CharacterStyling,
    type: k.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: x.CharacterStyling,
    type: k.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: x.CharacterStyling,
    type: k.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: x.Breaks,
    type: k.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, Tn = {
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
}, ed = {
  p: { children: Tn },
  q: { children: Tn },
  q1: { children: Tn },
  q2: { children: Tn },
  q3: { children: Tn },
  q4: { children: Tn },
  b: { children: Tn },
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
    category: x.SpecialFeatures,
    type: k.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: x.SpecialFeatures,
    type: k.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: x.SpecialFeatures,
    type: k.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: x.SpecialFeatures,
    type: k.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function yr(e) {
  const t = Object.hasOwn(nc, e) ? nc[e] : void 0, r = Object.hasOwn(ed, e) ? ed[e] : void 0;
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
const zp = "v", Kp = "c", Cn = "fig", td = "tr", ic = "esb", Bp = "esbe", rd = "periph", nd = "alt", id = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Ck = {
  "": "start",
  c: "center",
  r: "end"
};
function sd(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function od(e) {
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
const _k = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Sk(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === oo && s + 1 < e.length && od(e[s + 1]) || (od(o) ? (r || (i = t.length, t += o), r = !0) : _k.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function vk(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Mk(e, t) {
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
const Ek = /^(?:qt[1-5]?|ts)-[se]$/;
function hl(e) {
  return Ek.test(e) || Dp(e);
}
function xa(e, t) {
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
function Ak(e, t, r) {
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
      const h = e.indexOf("\\", i), m = h === -1 ? e.length : h;
      a(Sk(e.slice(i, m))), i = m;
      continue;
    }
    const c = i, { name: l, next: d } = Mk(e, i + 1);
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
    if (l === zp) {
      const { word: h, next: m } = xa(e, i);
      i = m, n.push({ kind: "verse", number: h });
      continue;
    }
    if (l === Kp) {
      const { word: h, next: m } = xa(e, i);
      i = m, s = void 0, n.push({ kind: "chapter", number: h });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, g = t(p)?.type;
    if (g === k.Note || g === void 0 && Me.isValidMarker(l)) {
      const { word: h, next: m } = xa(e, i);
      i = m, s = l, n.push({ kind: "note", marker: l, caller: h || "+" });
      continue;
    }
    if (g === k.Milestone || g === void 0 && hl(l)) {
      const h = Ik(e, c, l, i);
      if (h)
        n.push(h.token), h.ejectedText && o(h.ejectedText), i = h.next;
      else {
        const m = e.indexOf("\\", i), b = m === -1 ? e.length : m;
        o(e.slice(c, b)), i = b;
      }
      continue;
    }
    g === k.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : g === k.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : co(p) ? (u(), co(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === ic || l === Bp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const ad = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function co(e) {
  return Object.hasOwn(ad, e) ? ad[e] : void 0;
}
function Pk(e) {
  return co(e) !== void 0;
}
const Nk = /([-\w]+)\s*=\s*"(.*?)"/g, wk = /[\s\u200B]*[\n\r][\s\u200B]*/g, jp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function zo(e) {
  return jp[e];
}
const Ok = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Rk(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ps(e, t, r = jp[t]) {
  const n = e.replace(wk, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Nk)];
  if (s.length > 0) {
    if (!Rk(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Ok.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Ko(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function qk(e) {
  const t = Dr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function $k(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ps(e.slice(n + 1, i), r, Ko(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Ik(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ps(s.slice(o + 1), r, Ko(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = $k(e, i + 2, r);
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
function Zr(e) {
  return e.content || (e.content = []), e.content;
}
function Dr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d, u;
  const f = () => d ? Zr(d) : u ? Zr(u) : r;
  let p = !1;
  const g = () => {
    if (s)
      return o.length > a ? Zr(o[o.length - 1].object) : Zr(s);
    if (o.length > 0)
      return Zr(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: mr, content: [] }, f().push(i);
    }
    return Zr(i);
  }, h = (Z) => {
    const N = g();
    typeof Z == "string" && typeof N[N.length - 1] == "string" ? N[N.length - 1] = N[N.length - 1] + Z : N.push(Z);
  }, m = (Z) => {
    for (let N = Z; N < o.length; N += 1) {
      const ee = o[N].object;
      ee.closed = "false";
    }
  }, b = () => {
    m(0), o.length = 0;
  }, T = (Z) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, Z || (s.closed = "false"), s = void 0);
  }, C = () => {
    c = void 0, l = void 0;
  }, R = (Z, N, ee) => {
    b();
    const [, ce, Ee, st] = ee, te = {
      type: "table:cell",
      marker: st ? N.slice(0, N.indexOf("-")) : N,
      align: Ck[ce],
      content: []
    };
    st && (te.colspan = String(Number(st) + 1 - Number(Ee))), Zr(Z).push(te), i = te;
  }, S = (Z) => {
    d && (Z || (d.closed = "false"), d = void 0);
  }, $ = () => {
    u = void 0;
  };
  let W, B = "", _;
  const V = () => {
    B && h(dr(B)), B = "";
  }, H = (Z = !1) => {
    W?.type === "sidebar" ? B = "" : Z && B.endsWith(`
`) && (B = B.slice(0, -1)), W = void 0, V();
  }, ge = () => {
    if (!_)
      return;
    const Z = { type: "char", marker: _.marker, content: [] };
    _.value && (Z.content = [dr(_.value)]), g().push(Z), o.push({ object: Z }), _ = void 0;
  }, Q = (Z, N) => {
    p = !1, C(), b(), T(!1), i = { type: "para", marker: Z, content: [] }, N && (i.content = [dr(N)]), f().push(i);
  }, Ie = () => {
    _ && (Q(_.marker, _.value), _ = void 0);
  };
  let xe;
  const ir = (Z) => {
    if (!xe)
      return;
    let { value: N } = xe;
    xe = void 0, Z && N.endsWith(`
`) && (N = N.slice(0, -1));
    const ee = N.indexOf("|"), ce = ee >= 0 ? ps(N.slice(ee + 1), rd) : void 0, Ee = ee >= 0 ? N.slice(0, ee) : N, st = ee >= 0 && (!ce || !!Ee && !!ce[nd]), te = st ? void 0 : ce, Je = st ? N : Ee, sr = {
      type: "periph",
      ...Je ? { [nd]: dr(Je) } : {},
      ...te
    };
    sr.content = [], f().push(sr), u = sr, i = void 0;
  };
  let Be;
  const Wr = () => {
    if (Be) {
      if (Be.shape === "para")
        Q(Cn, Be.value);
      else {
        const Z = { type: "char", marker: Cn, content: [] };
        Be.value && (Z.content = [dr(Be.value)]), g().push(Z), o.push({ object: Z });
      }
      Be = void 0;
    }
  }, Hr = Ak(e, t?.getMarker ?? yr, n);
  for (let Z = 0; Z < Hr.length; Z++) {
    const N = Hr[Z];
    if (_) {
      if (N.kind === "text") {
        _.value += N.text;
        continue;
      }
      if (_.shape === "char" && N.kind === "end" && N.marker.replace(/^\+/, "") === _.marker) {
        if (_.value.trim() === "") {
          g().push({ type: "char", marker: _.marker, content: [] }), _ = void 0, H();
          continue;
        }
        Object.assign(_.target, {
          [_.attrName]: dr(_.value.trim())
        });
        const ee = _.marker;
        if (_ = void 0, ee === "ca") {
          const ce = Hr[Z + 1];
          ce?.kind === "text" && /^[\s\u200B]*$/.test(ce.text) && Z++;
        }
        continue;
      }
      if (_.shape === "para" && (N.kind === "para" || N.kind === "chapter")) {
        const ee = _.value.replace(/[\s\u200B]+$/, "");
        ee === "" ? (Q(_.marker), _ = void 0) : (Object.assign(_.target, { [_.attrName]: dr(ee) }), _ = void 0);
      } else {
        W = void 0, (N.kind === "para" || N.kind === "chapter") && _.value.endsWith(`
`) && (_.value = _.value.slice(0, -1)), _.shape === "para" ? Ie() : ge(), Z--;
        continue;
      }
    }
    if (xe) {
      if (N.kind === "text" || N.kind === "optbreak") {
        xe.value += N.kind === "text" ? N.text : "//";
        continue;
      }
      ir(N.kind === "para" || N.kind === "chapter"), Z--;
      continue;
    }
    if (Be) {
      if (N.kind === "text" || N.kind === "optbreak") {
        Be.value += N.kind === "text" ? N.text : "//";
        continue;
      }
      if (N.kind === "end" && N.marker.replace(/^\+/, "") === Cn) {
        const ee = Be.value.indexOf("|"), ce = ee >= 0 ? ps(Be.value.slice(ee + 1), Cn) : void 0;
        if (ce) {
          const Ee = {};
          for (const [Je, sr] of Object.entries(ce))
            Ee[Je === "src" ? "file" : Je] = sr;
          const st = {
            type: "figure",
            marker: Cn,
            ...Ee
          }, te = Be.value.slice(0, ee);
          te && (st.content = [dr(te)]), h(st), Be = void 0;
          continue;
        }
      }
      Wr(), Z--;
      continue;
    }
    if (W)
      if (N.kind === "text") {
        if (N.text.includes(`
`) && /^[\s\u200B]*$/.test(N.text)) {
          B += N.text;
          continue;
        }
        H();
      } else if (N.kind === "charOpen" || N.kind === "para") {
        const ee = N.kind === "para" || !N.isNested ? co(N.marker) : void 0;
        if (ee && ee.targetTypes.includes(W.type)) {
          B = "", _ = {
            target: W,
            attrName: ee.attrName,
            marker: N.marker,
            shape: ee.shape,
            value: ""
          };
          continue;
        }
        H(N.kind === "para");
      } else
        H(N.kind === "chapter");
    if (!s && !n && (N.kind === "charOpen" && !N.isNested && N.marker === Cn || N.kind === "para" && N.marker === Cn)) {
      b(), Be = { shape: N.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (N.kind) {
      case "text": {
        let ee = N.text;
        if (!s && ee.endsWith(`
`)) {
          const ce = Hr[Z + 1];
          (ce === void 0 || ce.kind === "para" || ce.kind === "chapter") && (ee = ee.slice(0, -1));
        }
        ee && h(dr(ee));
        break;
      }
      case "para": {
        const ee = !s && !n;
        if (ee && N.marker === td) {
          b(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: td, content: [] }, Zr(c).push(l), i = l, p = !1;
          break;
        }
        if (ee && l) {
          const ce = id.exec(N.marker);
          if (ce && sd(ce)) {
            R(l, N.marker, ce);
            break;
          }
        }
        if (C(), !n && N.marker === ic) {
          b(), T(!1), S(!1);
          const ce = {
            type: "sidebar",
            marker: ic,
            content: []
          };
          f().push(ce), d = ce, i = void 0, W = d, p = !1;
          break;
        }
        if (N.marker === Bp && d) {
          b(), T(!1), S(!0), i = void 0;
          break;
        }
        if (!n && N.marker === rd) {
          b(), T(!1), S(!1), $(), xe = { value: "" }, i = void 0, p = !1;
          break;
        }
        Q(N.marker);
        break;
      }
      case "verse": {
        T(!1);
        const ee = { type: "verse", marker: zp, number: N.number };
        h(ee), W = ee;
        break;
      }
      case "chapter": {
        b(), T(!1), C(), S(!1), $(), i = void 0;
        const ee = {
          type: "chapter",
          marker: Kp,
          number: N.number
        };
        r.push(ee), W = ee, p = !0;
        break;
      }
      case "note": {
        T(!1);
        const ee = g();
        s = { type: "note", marker: N.marker, caller: N.caller, content: [] }, a = o.length, ee.push(s), W = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !N.isNested) {
          const Ee = id.exec(N.marker);
          if (Ee && sd(Ee)) {
            R(l, N.marker, Ee);
            break;
          }
        }
        if (!N.isNested) {
          const Ee = s ? a : 0;
          m(Ee), o.length = Ee;
        }
        const ee = g(), ce = { type: "char", marker: N.marker, content: [] };
        ee.push(ce), o.push({ object: ce });
        break;
      }
      case "end": {
        const ee = N.marker.replace(/^\+/, ""), ce = s ? a : 0, Ee = o.findLastIndex((st, te) => te >= ce && st.object.marker === ee);
        Ee >= 0 ? (Lk(o[Ee].object), m(Ee + 1), o.length = Ee) : s && s.marker === ee ? T(!0) : (m(ce), o.length = ce, h({ type: "unmatched", marker: `${N.marker}*` }));
        break;
      }
      case "milestone":
        h({ type: "ms", marker: N.marker, ...N.attributes });
        break;
      case "optbreak":
        h({ type: "optbreak" });
        break;
    }
  }
  if (xe && ir(!0), Be && Wr(), _)
    if (_.shape === "para") {
      const Z = _.value.replace(/[\s\u200B]+$/, "");
      Z === "" ? Q(_.marker) : Object.assign(_.target, { [_.attrName]: dr(Z) }), _ = void 0;
    } else
      _.value.endsWith(`
`) && (_.value = _.value.slice(0, -1)), ge();
  b(), T(!1), S(!1);
  const mn = (Z) => {
    for (const N of Z)
      typeof N != "string" && N.content && (mn(N.content), N.content.length === 0 && delete N.content);
  };
  return mn(r), r;
}
function Lk(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ps(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Rn = Io("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), cn = Io("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), le = Io("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), vr = "marker-trailing-space", Vp = 1, Dk = "marker", gl = Io("isGutterMarker", {
  parse: (e) => e === !0
});
class Ur extends Ns {
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
    return new Ur(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Kk(t) ? {
        conversion: Uk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Rr().updateFromJSON(t);
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
    return r && Kn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Vp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Uk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Rr(t, r) };
}
function Rr(e, t) {
  return Ge(new Ur(e, t));
}
function Fk(e) {
  return Ct(Rr(Dk, e), gl, !0);
}
function zk(e) {
  return jt(e) && ie(e, gl);
}
function Kk(e) {
  return e?.tagName === "span";
}
function jt(e) {
  return e instanceof Ur;
}
function Wp(e) {
  return e?.type === Ur.getType();
}
const on = "internal-comment", Bk = [on], Hp = Object.freeze({}), sc = Object.freeze({}), oc = Object.freeze({}), ac = Object.freeze({}), cc = Object.freeze({}), jk = 1, ni = /* @__PURE__ */ new Map(), Vi = /* @__PURE__ */ new Map(), ii = /* @__PURE__ */ new Map(), si = /* @__PURE__ */ new Map();
class nt extends rr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Hp, r, n, i, s, o) {
    super(o), this.__typedIDs = Ys(t), this.__typedOnClicks = Ta(r), this.__typedOnRemoves = Ca(n), this.__typedOnMouseEnters = _a(i), this.__typedOnMouseLeaves = Sa(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Ys(t.__typedIDs), n = Ta(t.__typedOnClicks), i = Ca(t.__typedOnRemoves), s = _a(t.__typedOnMouseEnters), o = Sa(t.__typedOnMouseLeaves);
    return new nt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Bk.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return hs().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: jk
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      ri(n, _n(t.theme.typedMark, a)), c.length > 1 && ri(n, _n(t.theme.typedMarkOverlap, a));
      for (const l of c)
        ri(n, _n("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = _n(n.theme.typedMark, s), u = _n(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && ri(r, d) : l === 0 && ba(r, d), c === 1 ? l === 2 && ri(r, u) : l === 1 && ba(r, u));
      const f = new Set(o), p = new Set(a);
      for (const g of o)
        p.has(g) || ba(r, _n("annotationId", g));
      for (const g of a)
        f.has(g) || ri(r, _n("annotationId", g));
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
    const r = this.getWritable(), n = Ys(r.__typedIDs);
    r.__typedIDs = Ys(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && lo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Ta(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Se(t) ? ni.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ca(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Se(t) ? Vi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = _a(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Se(t) ? ii.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Sa(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Se(t) ? si.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Se(a))
      return;
    Qe(t), Qe(r);
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && lo(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = hs(this.__typedIDs, this.getTypedOnClicks());
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
    if (!A(r) || n === "html")
      return !1;
    const i = r.anchor, s = r.focus, o = i.getNode(), a = s.getNode(), l = r.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const r = this.getWritable(), n = this.getTypedIDs();
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), ni.delete(r.getKey()), Vi.delete(r.getKey()), ii.delete(r.getKey()), si.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = ni.get(this.getKey());
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
    const n = ii.get(this.getKey());
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
    const n = si.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === sc) {
      const t = ni.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      ni.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    ni.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    Qe(t), Qe(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = en(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = en(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === sc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === oc) {
      const t = Vi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Vi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Vi.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    Qe(t), Qe(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = en(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = en(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === oc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === ac) {
      const t = ii.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      ii.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    ii.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    Qe(t), Qe(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = en(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = en(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === ac) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === cc) {
      const t = si.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      si.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    si.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    Qe(t), Qe(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = en(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = en(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === cc) {
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
    const i = Vk(t, r);
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
    for (; Se(t) && ld(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Se(r) && ld(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Wk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Hk(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Gk(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Jk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Ys(e = Hp) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Qe(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Qe(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Ta(e) {
  if (!e || e === sc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Qe(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Qe(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ca(e) {
  if (!e || e === oc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Qe(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Qe(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function _a(e) {
  if (!e || e === ac)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Qe(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Qe(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Sa(e) {
  if (!e || e === cc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Qe(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Qe(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function en(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function cd(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Vk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function ld(e, t) {
  const r = cd(e), n = cd(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Wk(e, t) {
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
function Hk(e, t) {
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
function Gk(e, t) {
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
function Jk(e, t) {
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
function _n(e, t) {
  return `${e}-${t}`;
}
function ud(e) {
  return `external-${e}`;
}
function hs(e, t, r, n, i) {
  return Ge(new nt(e, t, r, n, i));
}
function Se(e) {
  return e instanceof nt;
}
function Gp(e) {
  return e?.type === nt.getType();
}
function lo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Jp(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let g, h;
  for (let m = 0; m < d; m++) {
    const b = a[m];
    if (q(h) && h.isParentOf(b))
      continue;
    const T = m === 0, C = m === d - 1;
    let R = null;
    if (E(b)) {
      const S = b.getTextContentSize(), $ = T ? f : 0, W = C ? p : S;
      if ($ === 0 && W === 0)
        continue;
      const B = b.splitText($, W);
      R = B.length > 1 && (B.length === 3 || T && !C || W === S) ? B[1] : B[0];
    } else {
      if (Se(b))
        continue;
      q(b) && b.isInline() && (R = b);
    }
    if (R !== null) {
      if (R && R.is(g))
        continue;
      const S = R.getParent();
      (S == null || !S.is(g)) && (h = void 0), g = S, h === void 0 && (h = hs(), h.addID(t, r, n, i, s, o), R.insertBefore(h)), h.append(R);
    } else
      g = void 0, h = void 0;
  }
  t === on && q(h) && (u ? h.selectStart() : h.selectEnd());
}
function Yk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Se(n))
      return n.getTypedIDs()[t];
    if (E(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Se(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Xk = ["type", "marker", "content"], lc = "unknown", Yp = 1, Qk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Wn extends rr {
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
    return new Wn(r, n, i, s);
  }
  static importDOM() {
    return {
      [lc]: (t) => ex(t) ? {
        conversion: Zk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ml().updateFromJSON(t);
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
    return Qk.has(this.getTag());
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
    const t = document.createElement(lc);
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
      version: Yp
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
    if (Lo(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function Zk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: ml(t, r) };
}
function ml(e, t, r) {
  return Ge(new Wn(e, t, r));
}
function ex(e) {
  return e?.tagName.toLowerCase() === lc;
}
function Fe(e) {
  return e instanceof Wn;
}
const Xp = 1, tx = "attribute-run";
function va(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Fr extends rr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Fr(r, n);
  }
  static importJSON(t) {
    return Qp(t.runKind).updateFromJSON(t);
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
    t.classList.add(tx);
    const r = va(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = va(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = va(this.__runKind);
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
      version: Xp
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
function Qp(e) {
  return Ge(new Fr(e));
}
function Re(e) {
  return e instanceof Fr;
}
const gs = "id", Zp = 1, rx = [
  "type",
  "marker",
  "code",
  "content"
];
class Vt extends rr {
  __marker = gs;
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
    return new Vt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return eh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return lb(t);
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
      version: Zp
    };
  }
}
function eh(e, t) {
  return Ge(new Vt(e, t));
}
function bt(e) {
  return e instanceof Vt;
}
function th(e) {
  return e?.type === Vt.getType();
}
const uo = "c", rh = 1, nx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class qt extends rr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = uo, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new qt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return nh().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(ao, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: rh
    };
  }
}
function nh(e, t, r, n, i) {
  return Ge(new qt(e, t, r, n, i));
}
function Ae(e) {
  return e instanceof qt;
}
function ix(e) {
  return e?.type === qt.getType();
}
const ih = [
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
], sh = [
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
], sx = [
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
  ...ih,
  ...sh
], oh = 1, ox = ["type", "marker", "content"];
class be extends rr {
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
    return t !== void 0 && (sx.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && ih.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && sh.includes(t);
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
      span: (t) => cx(t) ? {
        conversion: ax,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return qr().updateFromJSON(t);
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
    return dd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), dd(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Kn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: oh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = qr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function dd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function ax(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: qr(t) };
}
function qr(e, t) {
  return Ge(new be(e, t));
}
function cx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return be.isValidMarker(t) && e.classList.contains(be.getType());
}
function U(e) {
  return e instanceof be;
}
function lx(e) {
  return e?.type === be.getType();
}
const ah = 1, ux = "c", ch = "span";
class Mr extends Ns {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = ux, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Mr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => lh(t) ? {
        conversion: dx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return yl().updateFromJSON(t);
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
    const t = document.createElement(ch);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(ao, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Kn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(ao, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? zt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: ah
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
function dx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: yl(t) };
}
function yl(e, t, r, n, i, s) {
  return Ge(new Mr(e, t, r, n, i, s));
}
function lh(e) {
  return e ? e.classList.contains(ao) && e.tagName.toLowerCase() === ch : !1;
}
function Rs(e) {
  return e instanceof Mr;
}
function fx(e) {
  return e?.type === Mr.getType();
}
const uh = 1;
class ln extends rl {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new ln(t.__key);
  }
  static importJSON(t) {
    return Qt().updateFromJSON(t);
  }
  getMarker() {
    return mr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: uh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Qt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Qt() {
  return Ge(new ln());
}
function Cr(e) {
  return e instanceof ln;
}
function Bo(e) {
  return e?.type === ln.getType();
}
const px = [
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
  mr,
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
], dh = 1, hx = ["type", "marker", "content"];
class it extends rl {
  __marker;
  __unknownAttributes;
  constructor(t = mr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new it(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (px.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: gx,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ms().updateFromJSON(t);
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
    return r && Kn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: dh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ms(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function gx(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ms(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ms(e, t) {
  return Ge(new it(e, t));
}
function ue(e) {
  return e instanceof it;
}
function bl(e) {
  return e?.type === it.getType();
}
const fo = "v", fh = 1, mx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class mt extends We {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = fo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new mt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return ph().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(tc, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: fh
    };
  }
}
function ph(e, t, r, n, i, s) {
  return Ge(new mt(e, t, r, n, i, s));
}
function Oe(e) {
  return e instanceof mt;
}
function hh(e) {
  return e?.type === mt.getType();
}
const yx = "​", ki = yx;
var fd;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(fd || (fd = {}));
var pd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(pd || (pd = {}));
function bx() {
  return ke(ki);
}
function kx(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ki, ""));
}
function qs(e) {
  return e.length > 0 && e.includes(ki) && e.replaceAll(ki, "") === "";
}
function $s(e) {
  return E(e) && qs(e.getTextContent());
}
function gh(e) {
  return ix(e) || fx(e);
}
function He(e) {
  return Ae(e) || Rs(e);
}
function mh(e, t) {
  return e.find((r) => He(r) && r.getNumber() === t.toString());
}
function xx(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && He(r));
}
function uc(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Tx(e) {
  if (!e)
    return;
  if (He(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !He(t); )
    t = t.getPreviousSibling();
  if (t && He(t))
    return t;
}
function Nt(e) {
  return Xe(e, F) ?? void 0;
}
function Cx(e) {
  return bt(e) || Ae(e) || U(e) || Rs(e) || Cr(e) || Ye(e) || ue(e) || F(e) || Oe(e) || Fe(e);
}
function yh(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function _x(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function wt(e) {
  return ve(e) || bt(e);
}
function ve(e) {
  return ue(e) || Cr(e);
}
function Sx(e) {
  return bl(e) || Bo(e);
}
function po(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function qn(e, t) {
  const r = ie(t, Rn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function vx(e, t) {
  const r = q(e) ? e : e.getParent(), n = q(t) ? t : t.getParent(), i = r && n ? kb(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Mx(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function xi(e) {
  return e?.type === We.getType();
}
function Ex(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Ax(e, t) {
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
function bh(e, t, r) {
  const n = qe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function zt(e, t) {
  let r = qe(e);
  return t && (r += `${I}${t}`), r += " ", r;
}
function Px(e) {
  const t = e[ws];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function kh(e) {
  return Tl(e) || Wp(e) && e.textType === "marker" || xi(e) && Px(e) === "attribute" ? "" : xi(e) && e.text !== I ? e.text : lx(e) ? e.children.map((t) => kh(t)).join("") : "";
}
function Nx(e) {
  return e.map((r) => kh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Ot(e) {
  return " " + e + I;
}
function kl(e) {
  const t = [];
  for (const r of e) {
    if (!U(r))
      continue;
    const n = xh(r);
    n !== Bt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function xh(e) {
  return P(e) || Er(e) || E(e) && ie(e, le) === "attribute" ? "" : E(e) ? e.getTextContent() : q(e) ? e.getChildren().map((t) => xh(t)).join("") : "";
}
function Er(e) {
  return jt(e) && e.getTextType() === "marker";
}
function Wt(e) {
  return P(e) || Er(e);
}
function hd(e, t) {
  wx(e, t), e.setMarker(t);
}
function wx(e, t) {
  const r = e.getMarker(), n = qe(r), i = qe(r, !0), s = et(r), o = et(r, !0), a = be.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Wt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (Er(c)) {
        const f = l.startsWith(qe("", !0));
        c.setTextContent(d ? qe(t, f) : et(t, f));
      }
    }
  });
}
function ze(e, t = ub) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Pe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Th(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Ch(e) {
  if (!A(e))
    return gd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !q(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return gd(e) ?? t ?? void 0;
  } catch (n) {
    if (Th(n))
      return t ?? void 0;
    throw n;
  }
}
function Ox(e, t) {
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
function xl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Rx(e) {
  return !!e && e.includes("-");
}
function _h(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function gd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Is(e) {
  if (!e)
    return !1;
  if (Bn(e) || P(e) || Er(e) || Re(e) || jt(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = ie(e, le);
    if (t === vr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === I || qs(r))
      return !0;
  }
  return !1;
}
function Ls() {
  const e = ke(I);
  return Ct(e, le, vr), e.setMode("token"), e;
}
function qx(e) {
  const t = e.getTextContent();
  t.startsWith(I) || e.setTextContent(I + t);
}
function zr(e) {
  return E(e) && ie(e, le) === vr;
}
function Sh(e) {
  const t = e.getFirstChild();
  if (!Wt(t) || t === null || zr(t.getNextSibling()))
    return !1;
  const r = w();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Ni(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Is(s)) {
      if (Se(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (E(s) && s.getType() === We.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function jo(e) {
  let t = e.getParent();
  for (; t && Se(t); )
    t = t.getParent();
  return t;
}
function $x(e, t) {
  return Ni(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Ix(e, t) {
  const r = jo(e);
  if (!r)
    return;
  const n = Ni(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function Lx(e, t) {
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
function vh(e, t) {
  const r = Ni(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Is(n))
    return vh(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || po(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || po(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function Dx(e, t) {
  if (t <= 0)
    return 0;
  const r = Ni(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? Ux(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function Ux(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const Fx = 1;
class Ar extends We {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Mn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Ar(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || Mn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Mn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Mn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Mn(r.__marker, r.__markerSyntax, t), r;
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
      version: Fx
    };
  }
}
function ft(e, t, r) {
  return Ge(new Ar(e, t, void 0, r));
}
function P(e) {
  return e instanceof Ar;
}
function Tl(e) {
  return e?.type === Ar.getType();
}
function Kr(e) {
  return e.getTextContent() === Mn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function zx(e) {
  e.setTextContent(Mn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Mn(e, t, r = !1) {
  return t === "closing" ? et(e, r) : t === "selfClosing" ? et("") : qe(e, r);
}
const Kx = /* @__PURE__ */ new Set(["closed"]);
function pr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Kx.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Mh(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Eh(e) {
  const t = Object.keys(e).filter((n) => !yk.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Ah(e, t, r, n) {
  return Mh(
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
function is(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Bx(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : is(e) === void 0 && Ph(e) === void 0;
}
function Ph(e) {
  return e.getChildren().find((t) => E(t) && ie(t, le) === "attribute");
}
function ys(e, t) {
  return Ds(e.getNextSibling(), t);
}
const jx = /^[ \u00A0]+$/;
function Cl(e) {
  if (Kr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = qe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && jx.test(r.slice(t.length));
}
function Ds(e, t) {
  let r, n, i, s;
  return Re(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Cl(e) && (r = e, e = e.getNextSibling()), E(e) && ie(e, le) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Kr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function $r(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (E(n) && n.getTextContent() === Ot(e.getCaller()))
    return n;
}
function _l(e) {
  const t = $r(e);
  return t ? Ds(t.getNextSibling(), "cat") : {};
}
function Vo(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || P(t)) && ie(t, le) !== "attribute")
    return t;
}
function Nh(e) {
  const t = Vo(e);
  return t ? Ds(t.getNextSibling(), "ca") : {};
}
function wh(e) {
  const t = Vo(e);
  if (!t)
    return;
  const r = Ds(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Oh(e) {
  const t = wh(e);
  return t ? Ds(t.getNextSibling(), "cp") : {};
}
function Rh(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Oe(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && ie(n, le) === "attribute" || U(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Re(n)))
        return;
    }
}
function Wo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Re(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Cl(s) && (t = s, s = s.getNextSibling()), E(s) && ie(s, le) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && Kr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Sl(e) {
  return U(jo(e));
}
function vl(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Sl(t) : t.getChildren().some((i) => U(i) && i.getMarker() === r) ? !0 : void 0;
}
function Vx(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = vl(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function wi(e) {
  return E(e) && e.getType() === We.getType() && ie(e, le) !== "attribute";
}
function Ho(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !P(t) || !U(r) || !qh(t, r) || !wi(e) ? 0 : e.getTextContent().startsWith(I) ? I.length : 0;
}
function qh(e, t) {
  return e.getMarkerSyntax() === "opening" && vl(e, t) !== void 0;
}
function Ml(e, t) {
  if (!qh(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? vl(r, t) === !0 ? "spacer" : void 0 : wi(r) ? r.getTextContent().startsWith(I) ? void 0 : "prefix" : "spacer";
}
function Wx(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Ml(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function $h(e, t) {
  const r = w();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Ih(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Ml(t, e);
    if (r !== void 0 && !$h(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(I + n.getTextContent());
      } else
        t.insertAfter(ke(I));
  });
}
function Lh(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Ml(t, e) !== void 0 && $h(t, e)) : !1;
}
const Hx = "file", Gx = "src", Jx = "colspan", Yx = "category", Xx = "alt", Qx = "closed", Zx = "false";
function eT(e) {
  return e[Qx] !== Zx;
}
function tT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === Hx ? Gx : t,
    r
  ]));
}
function Dh(e, t) {
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
function Uh(e, t, r) {
  const n = r ?? {}, i = eT(n);
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
        opening: `\\${Dh(t, n[Jx])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: pr(tT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [Yx]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + pr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [Xx]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: pr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: pr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const Mt = { wantsRun: !1, valueText: void 0 }, Br = {};
function Ma(e, t) {
  if (t === "va")
    return e;
  const r = ys(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function El(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (q(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function Go(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = w();
  if (!A(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function rT(e) {
  return Re(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && ie(e, le) === "attribute";
}
function nT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!E(e) || ie(e, le) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Ea(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Oe(t))
      return t;
    if (!rT(t))
      return;
  }
}
function md(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Oe(t),
    ownerOf: (t) => {
      if (Re(t))
        return t.getRunKind() === e ? Ea(t) : void 0;
      const r = t.getParent();
      return Re(r) ? r.getRunKind() === e ? Ea(r) : void 0 : nT(t) === e ? Ea(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Oe(t))
        return Mt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Mt : { wantsRun: !0, valueText: I + r };
    },
    scanPieces: (t) => Oe(t) ? ys(Ma(t, e), e) : Br,
    graceSite: (t, r) => Oe(t) ? !r.opener && !r.closer ? El(Ma(t, e)) : Go(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Oe(t) ? Ma(t, e) : void 0
    }
  };
}
const iT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => Mt,
  scanPieces: () => Br,
  graceSite: (e) => U(e) && Lh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, sT = {
  kind: "char",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (!E(e) || ie(e, le) !== "attribute")
      return;
    const t = e.getParent();
    return U(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || is(e) === void 0)
      return Mt;
    const t = pr(e.getUnknownAttributes() ?? {}, zo(e.getMarker()));
    return t === "" ? Mt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => U(e) ? { value: Ph(e) } : Br,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const r = is(e);
    if (!r)
      return !1;
    const n = w();
    if (!A(n) || !n.isCollapsed())
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
    insertRunBefore: (e) => U(e) ? is(e) : void 0
  }
};
function Fh(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!E(e) || ie(e, le) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function oT(e) {
  const t = e.getParent();
  if (!F(t))
    return;
  const r = $r(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Fh(n))
        return;
    }
}
const aT = {
  kind: "cat",
  ownerPredicate: (e) => F(e),
  ownerOf: (e) => {
    if (Re(e))
      return e.getRunKind() === "cat" && F(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Re(t) ? t.getRunKind() === "cat" && F(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Fh(e) ? oT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!F(e) || e.getIsCollapsed() !== !1)
      return Mt;
    const t = e.getCategory();
    return t === void 0 ? Mt : { wantsRun: !0, valueText: I + t };
  },
  scanPieces: (e) => F(e) ? _l(e) : Br,
  graceSite: (e, t) => {
    if (!F(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = $r(e);
      return r !== void 0 && El(r);
    }
    return Go(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => F(e) ? $r(e) : void 0
  }
};
function cT(e) {
  return Re(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && ie(e, le) === "attribute";
}
function lT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!E(e) || ie(e, le) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function uT(e) {
  const t = e.getParent();
  if (!Ae(t))
    return;
  const r = Vo(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!cT(n))
        return;
    }
}
function yd(e) {
  const t = (r) => Ae(r) ? e === "ca" ? Vo(r) : wh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ae(r),
    ownerOf: (r) => {
      if (Re(r))
        return r.getRunKind() === e && Ae(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Re(n) ? n.getRunKind() === e && Ae(n.getParent()) ? n.getParent() ?? void 0 : void 0 : lT(r) === e ? uT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ae(r))
        return Mt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Mt : { wantsRun: !0, valueText: I + n };
    },
    scanPieces: (r) => Ae(r) ? e === "ca" ? Nh(r) : Oh(r) : Br,
    graceSite: (r, n) => {
      if (!Ae(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && El(i);
      }
      return Go(n);
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
function zh(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && ie(e, le) === "attribute";
}
function dT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ye(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!zh(t))
      return;
  }
}
const fT = {
  kind: "milestone",
  ownerPredicate: (e) => Ye(e),
  ownerOf: (e) => {
    const t = Re(e) ? e.getRunKind() === "milestone" ? e : void 0 : Re(e.getParent()) ? e.getParent() : zh(e) ? e : void 0;
    if (!t || Re(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Re(t) ? Ye(r) ? r : void 0 : dT(t);
  },
  expectedPieces: (e) => {
    if (!Ye(e))
      return Mt;
    const t = Ah(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = pr(t, Ko(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : I + r };
  },
  scanPieces: (e) => {
    if (!Ye(e))
      return Br;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Wo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ye(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = w();
      if (!A(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Go(t);
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
}, pT = Uh("optbreak", void 0, void 0).opening, hT = {
  kind: "optbreak",
  ownerPredicate: (e) => Fe(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Fe(t) || t.getTag() !== "optbreak"))
      return E(e) || jt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: pT }),
  scanPieces: (e) => Fe(e) ? { value: e.getFirstChild() ?? void 0 } : Br,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, gT = {
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
  expectedPieces: () => Mt,
  scanPieces: () => Br,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, mT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => Mt,
  scanPieces: () => Br,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, bs = [
  iT,
  sT,
  md("va"),
  md("vp"),
  aT,
  yd("ca"),
  yd("cp"),
  fT,
  hT,
  gT,
  mT
], yT = new Map(bs.map((e) => [e.kind, e]));
function $n(e) {
  const t = yT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function In(e) {
  for (const t of bs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Kh(e) {
  return In(e) !== void 0;
}
const ho = "unmatched", Bh = 2;
function ss(e) {
  return `\\${e}`;
}
class jr extends We {
  __marker;
  constructor(t = "", r) {
    super(ss(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new jr(r, n);
  }
  static importDOM() {
    return {
      [ho]: (t) => kT(t) ? {
        conversion: bT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Al().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? ss(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ss(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Zu), r.title = bd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = bd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(ho);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Zu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Bh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function jh(e) {
  return e.getTextContent() === ss(e.getMarker());
}
function bd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function bT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Al(t) };
}
function Al(e) {
  return Ge(new jr(e));
}
function kT(e) {
  return e?.tagName.toLowerCase() === ho;
}
function Vr(e) {
  return e instanceof jr;
}
const Vh = "table", dc = "immutable-table", Wh = 1, xT = ["type", "marker", "content"];
class Hn extends rr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return dc;
  }
  static clone(t) {
    return new Hn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return TT().updateFromJSON(t);
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
      type: dc,
      ...t !== void 0 && { unknownAttributes: t },
      version: Wh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function TT(e) {
  return Ge(new Hn(e));
}
function Hh(e) {
  return e instanceof Hn;
}
function CT(e) {
  return e?.type === dc;
}
const Gh = "table:row", kd = "immutable-table-row", Jh = 1, fc = "tr", _T = ["type", "marker", "content"];
class Oi extends rr {
  __marker;
  __unknownAttributes;
  constructor(t = fc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return kd;
  }
  static clone(t) {
    return new Oi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return ST().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? fc).setUnknownAttributes(t.unknownAttributes);
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
      type: kd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Jh
    };
  }
}
function ST(e, t) {
  return Ge(new Oi(e, t));
}
const Yh = "table:cell", xd = "immutable-table-cell", Xh = 1, pc = "tc1", vT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function MT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Ri extends rr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = pc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return xd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Ri(r, n, i, s, o);
  }
  static importJSON(t) {
    return ET().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? pc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = MT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: xd,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Xh
    };
  }
}
function ET(e, t, r, n) {
  return Ge(new Ri(e, t, r, n));
}
function Jo(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function tr(e, t) {
  const r = Jo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function ks(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function AT(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function PT(e) {
  return ks(e) ? void 0 : { closed: "false" };
}
function NT(e, t, r, n) {
  const i = t.getMarker(), s = Sl(t), o = AT(t);
  if (n) {
    e.append(ft(i, "opening", s));
    const [a] = r;
    wi(a) && !a.getTextContent().startsWith(I) && a.setTextContent(I + a.getTextContent());
  }
  e.append(...r), o && e.append(ft(i, "closing", s));
}
function Ln(e) {
  return Xe(e, U) ?? void 0;
}
function Pl(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function hc(e) {
  const t = Qh(e);
  return e.getChildren().every((r) => P(r) || t && ie(r, le) === "attribute" || E(r) && r.getTextContent().replaceAll(I, "") === "");
}
function Qh(e) {
  return ks(e);
}
function wT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? pr(r, zo(e.getMarker())) : "";
  n !== "" && t.insertAfter(ke(n)), e.remove();
}
function OT(e, t) {
  if (ks(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ft(e.getMarker(), "closing", Sl(e)));
}
function RT(e, t) {
  return U(e) && !ks(e) && !ks(t);
}
function qT(e, t, r) {
  hc(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && wi(n) && !n.getTextContent().startsWith(I) && n.setTextContent(I + n.getTextContent()), e.append(...t);
}
function $T(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Qh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = P(l) && l.getMarkerSyntax() === "closing", f = s && ie(l, le) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = RT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      qT(e, o, n);
    else {
      const l = qr(t.getMarker(), PT(t));
      NT(l, t, o, n), e.insertAfter(l), hc(l) ? l.remove() : c = l;
    }
  i && !a && OT(t, n), hc(t) && wT(t, c);
}
function Ti(e, t) {
  let r = e.getParent();
  for (; U(r); )
    $T(e, r, t), r = e.getParent();
}
function Nl(e) {
  if (E(e) && !P(e)) {
    const t = Ho(e);
    e.select(t, t);
    return;
  }
  if (q(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      Nl(t);
      return;
    }
    e.selectEnd();
  }
}
const gi = /* @__PURE__ */ new WeakMap();
function IT(e, t) {
  return gi.set(e, t), () => {
    gi.get(e) === t && gi.delete(e);
  };
}
function Td(e) {
  return gi.get(e);
}
function LT(e) {
  return gi.get(an())?.has(e.getKey()) ?? !1;
}
function DT(e) {
  gi.get(an())?.add(e.getKey());
}
function UT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function gc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Cd(e) {
  return /^\s/.test(e);
}
function wl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Cd(t) || !Cd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Yo(e, t, r) {
  return r.wantsRun ? wl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : UT(t);
}
function FT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return wl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Zh(e, t) {
  return !gc(e.scanPieces(t));
}
function Us(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Yo(e, n, r))
    return !1;
  const i = w();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || po(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function zT(e, t, r, n) {
  return !r.wantsRun || gc(n) || xb(fs) ? !1 : an().getEditorState().read(() => {
    const i = oe(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : gc(e.scanPieces(i));
  });
}
function KT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function _d(e) {
  const t = ke(e);
  return Ct(t, le, "attribute"), t;
}
function BT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Qp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function jT(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(_d(n.valueText));
    return;
  }
  const l = BT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = ft(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : E(u) ? wl(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = _d(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(ft(a === "selfClosing" ? "" : o(t), a));
}
function xs(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Yo(e, i, n) && !LT(t)) {
    if (zT(e, t, n, i)) {
      DT(t);
      return;
    }
    if (!Us(e, t)) {
      if (!n.wantsRun) {
        KT(i);
        return;
      }
      jT(e, t, i, n);
    }
  }
}
function VT(e, t, r) {
  xs(e, t), t.isAttached() && Us(e, t) && r.add(t.getKey());
}
function Fs(e) {
  if (!E(e))
    return !1;
  if (P(e) || Oe(e) || Vr(e))
    return !0;
  const t = ie(e, le);
  return t === "attribute" || t === vr;
}
function Ol(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Kr(e) && U(e.getParent())) : !1;
}
function WT() {
  const e = w();
  return A(e) ? Ol(e.focus.getNode(), e.focus.offset) : !1;
}
function eg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && Fs(t) ? t : void 0;
}
function HT(e) {
  const t = eg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function GT(e) {
  const t = eg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Sd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function vd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function JT(e, t) {
  let r = GT(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!Fs(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Md(e, t) {
  const r = JT(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function tg(e) {
  if (e.isCollapsed()) {
    const a = HT(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Sd(r), Sd(n)], s = Md(r, "next"), o = Md(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (vd(r, i[0]), vd(n, i[1]), !1) : !0;
}
const go = "verse-block", rg = 1, YT = "verse-block";
class qi extends rr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return go;
  }
  static clone(t) {
    return new qi(t.__number, t.__key);
  }
  static importJSON(t) {
    return XT().updateFromJSON(t);
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
    return _h(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(YT), Ed(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Ed(r, this.__number), !1;
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
      type: go,
      number: this.getNumber(),
      version: rg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Ed(e, t) {
  const { start: r, end: n } = _h(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Ad(e, "data-verse-start", i ? r : NaN), Ad(e, "data-verse-end", i ? n : NaN);
}
function Ad(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function XT(e) {
  return Ge(new qi(e));
}
function Ts(e) {
  return e instanceof qi;
}
function QT(e) {
  return e?.type === go;
}
const ZT = [
  Vt,
  Mr,
  qt,
  mt,
  be,
  Me,
  er,
  Ar,
  Wn,
  Ur,
  jr,
  it,
  ln,
  Hn,
  Oi,
  Ri,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Fr,
  {
    replace: rl,
    with: () => Qt(),
    withKlass: ln
  }
], mo = {
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
}, eC = {
  paragraph: k.Paragraph,
  character: k.Character,
  note: k.Note,
  milestone: k.Milestone
};
function tC(e) {
  if (!e)
    return yr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: yr(r)?.category ?? x.Uncategorized,
      type: eC[n.styleType] ?? k.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: yr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Pd(e, t, r) {
  const n = {
    type: xr,
    version: kr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Bo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const ng = "v", ig = 1, rC = "verse-selected";
class At extends Ns {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = ng, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new At(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => sC(t) ? {
        conversion: iC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Rl().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(tc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Kn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(tc, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? zt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      oo + this.getNumber() + oo
    );
    return M(nC, { nodeKey: this.getKey(), text: t });
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
      version: ig
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Th(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function nC({ nodeKey: e, text: t }) {
  const [r] = Fb(e);
  return M("span", { className: r ? rC : void 0, children: t });
}
function iC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Rl(t) };
}
function Rl(e, t, r, n, i, s) {
  return Ge(new At(e, t, r, n, i, s));
}
function sC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === ng;
}
function Gn(e) {
  return e instanceof At;
}
function oC(e) {
  return e?.type === At.getType();
}
function he(e) {
  return Oe(e) || Gn(e);
}
function sg(e) {
  return hh(e) || oC(e);
}
function aC(e) {
  return cC(e).find((t) => ue(t));
}
function cC(e) {
  return e.some(Ts) ? e.flatMap((t) => Ts(t) ? t.getChildren() : t) : e;
}
function Xo(e) {
  return q(e) ? Ts(e) ? e.getChildren().flatMap(Xo) : e.getChildren() : [];
}
function lC(e, t) {
  return Xo(e).find((i) => he(i) && xl(t, i.getNumber()));
}
function uC(e, t) {
  return t === 0 ? aC(e) : e.map((r) => lC(r, t)).filter((r) => r)[0];
}
function yo(e) {
  return Xo(e).find((r) => he(r));
}
function og(e, t) {
  if (!q(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (he(i))
      return i;
  }
}
function dC(e) {
  const t = e.getParent();
  if (t && q(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (he(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !He(r); ) {
    const n = yo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function bo(e) {
  return Xo(e).findLast((t) => he(t));
}
function fC(e) {
  if (!Oe(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function pC(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && q(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function hC(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return pC(t, e, r);
  if (E(e)) {
    const n = fC(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Aa(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function gC(e) {
  const t = uc(e);
  if (!(!t || He(t)))
    return he(t) ? t : bo(t) ?? Il(t);
}
function mC(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!A(t))
    return Aa(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (hC(e, t)) {
    const i = gC(e);
    return i ? Aa(i) : { verseNum: n };
  }
  return Aa(e);
}
function yC(e) {
  return Cx(e) || Gn(e);
}
function ql(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(I) && e.setTextContent(`${t} `);
  }
}
function ag(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function mc(e, t) {
  return e.getEditorState().read(() => !oe(t));
}
function bC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = $l(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && q(i) && q(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && q(i)) {
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
      let s = Nd(i);
      for (; s && !He(s); ) {
        const o = yo(s);
        if (o) {
          n = o;
          break;
        }
        s = Nd(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = yo(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && He(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function kC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = $l(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && q(i) && (n = og(i, r.getIndexWithinParent())), !n && i) {
      let o = wd(i);
      for (; o && !He(o); ) {
        const a = bo(o);
        if (a) {
          n = a;
          break;
        }
        o = wd(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !He(s); ) {
      const o = bo(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Nd(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function wd(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function $l(e, t) {
  if (q(e) && A(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && he(n))
      return n;
    const i = og(e, t.anchor.offset);
    if (i)
      return i;
    const s = yo(e);
    if (s)
      return s;
  }
  return Il(e);
}
function Il(e) {
  if (!e || He(e))
    return;
  if (he(e))
    return e;
  let t = uc(e);
  for (; t; ) {
    if (He(t))
      return;
    if (he(t))
      return t;
    const r = bo(t);
    if (r)
      return r;
    t = uc(t);
  }
}
const xC = ["style"], TC = ["style", "code"], ko = ["style", "cid"], CC = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], _C = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], SC = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], vC = ["style", "caller", "category", "contents"], MC = ["tag", "marker", "contents"], EC = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Cs = `
`;
function AC(e, t) {
  const r = oe(e);
  if (!Rt(r))
    return;
  const n = Ll(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function Ll(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Fo();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Ci(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Ci(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Ir(l) || Rt(l))
        return n;
      wt(l) && (a = l);
    }
    if (wt(l) && (i.includes(l) || i.push(l)), cg(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Dl(l, t);
  }
  if (a)
    return n;
}
function Od(e, t, r = "delta-doc") {
  if (e.length < 2 || !wC(e[0]) || !NC(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => PC(n, r)?.getKey());
}
function PC(e, t = "delta-doc") {
  const r = Fo();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Ci(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Ci(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (wt(a) && (i.includes(a) || i.push(a)), cg(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Dl(a, t);
    if (Ir(a) && l > 0 && e >= n && e < n + l || Rt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Ci(e, t) {
  return e ? t ? !po(t.node, e.getKey()) : !0 : !1;
}
function Ir(e) {
  return E(e) && !Rt(e);
}
function Rt(e) {
  return He(e) || he(e) || Ye(e) || F(e) || Fe(e) || Vr(e);
}
function nn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function NC(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && EC.includes(t);
}
function wC(e) {
  return e.retain != null && typeof e.retain == "number";
}
function cg(e, t) {
  return F(e) || Fe(e) ? !0 : t === "apply" && q(e) && Rt(e);
}
function lg(e) {
  const t = e.getParent();
  return Wt(e) && ue(t) && t.getFirstChild() === e;
}
function yc(e) {
  const t = e.getParent();
  return t !== null && Xe(t, Re) !== null;
}
function OC(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === Bt && t.getChildrenSize() === 1;
}
function RC(e) {
  const t = e.getParent();
  if (!F(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === Ot(t.getCaller());
}
function qC(e) {
  return !Kh(e) && Dl(e, "delta-doc") === e.getTextContentSize();
}
function Dl(e, t) {
  if (Rt(e))
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
    ($s(e) || lg(e) || ie(e, le) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ie(e, le) === "attribute" || yc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(ll) || OC(e) || RC(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function bc(e, t) {
  const r = { insert: e.__text }, n = ie(e, cn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = ug(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Rd(e) {
  const t = new Zi();
  return e.isEmpty() || e.read(() => {
    const r = Ke();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Cr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = $C();
    for (const s of i)
      t.push(s);
  }), t;
}
function Qo(e, t) {
  const r = [], n = Vn(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...qd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...qd(c, n.length, n, i, s, o, a));
  return r;
}
function $C() {
  return Qo();
}
function qd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return IC(e, a, n), LC(e, a, i, s, o), DC(e, t, r, i, o, s, a), He(e) && a.push(KC(e)), he(e) && a.push(jC(e)), Ye(e) && a.push(VC(e)), Vr(e) && a.push(WC(e)), FC(e, a, s), UC(e, a, s), YC(c, s), a;
}
function IC(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    bt(n) ? t.push(zC(n)) : ue(n) ? t.push(BC(n)) : Cr(n) && t.push({ insert: Cs });
  }
  wt(e) && (r.includes(e) || r.push(e));
}
function LC(e, t, r, n, i) {
  if (!E(e) || Oe(e) || Vr(e))
    return;
  const s = e.getParent();
  if (F(s) && s.getFirstChild() === e)
    return;
  const o = Nt(e) !== void 0;
  if (P(e) && (o || lg(e) || yc(e) || Kh(e)) || ie(e, le) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (qs(a))
    return;
  const c = e.getPreviousSibling();
  if (F(s) && P(c) && c === s.getFirstChild() && a === Ot(s.getCaller()))
    return;
  const l = U(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(Ho(e)));
  const d = a.startsWith(ll) || ie(e, le) === "attribute" || yc(e), u = !!l && a === Bt && l.getChildrenSize() === 1, f = Zo(e, n), p = f ? r.filter((m) => f.children.includes(m)) : r, g = bc(e, p);
  if (g.insert = a, f) {
    if (!a || a === I || d)
      return;
    f.contentsOps?.push(g);
  } else
    u || d || t.push(g);
  const h = a !== "" && !u && !(d && l);
  if (r.length > 0 && h)
    for (const m of r)
      i.add(m);
}
function DC(e, t, r, n, i, s, o) {
  U(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Ci(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = GC(c), d = Zo(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function UC(e, t, r) {
  if (!F(e))
    return;
  const n = HC(e), i = Zo(e, r), s = {
    node: e,
    children: Vn(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function FC(e, t, r) {
  if (!Fe(e))
    return;
  const n = JC(e), i = Zo(e, r), s = {
    node: e,
    children: Vn(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function gn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function zC(e) {
  const t = { style: gs, code: e.__code };
  return gn(t, e), { insert: Cs, attributes: { book: t } };
}
function KC(e) {
  const t = { style: uo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), gn(t, e), { insert: { chapter: t } };
}
function BC(e) {
  const t = { style: e.__marker };
  return gn(t, e), { insert: Cs, attributes: { para: t } };
}
function jC(e) {
  const t = { style: fo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), gn(t, e), { insert: { verse: t } };
}
function VC(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), gn(t, e), { insert: { milestone: t } };
}
function WC(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function HC(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), gn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ie(e, cn);
  return n && (r.attributes = { segment: n }), r;
}
function GC(e) {
  const t = { insert: "" }, r = ug([e]);
  return r && (t.attributes = { char: r }), t;
}
function JC(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), gn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Zo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function YC(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Ci(t[r].node, e) && t.splice(r, 1);
}
function ug(e) {
  if (e.length === 0)
    return;
  const t = e.map(XC);
  return t.length === 1 ? t[0] : t;
}
function XC(e) {
  const t = { style: e.__marker }, r = ie(e, Rn);
  return r && (t.cid = r), gn(t, e), t;
}
function Ul(e) {
  let t = 0;
  for (const { node: r } of Fo())
    if (F(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function QC(e) {
  let t = 0;
  for (const { node: r } of Fo())
    if (F(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const dg = 1;
class Zt extends Ns {
  __caller;
  __previewText;
  __onClick;
  constructor(t = ds, r = "", n, i) {
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
      span: (t) => e_(t) ? {
        conversion: ZC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Fl().updateFromJSON(t);
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
    return r && Kn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => t_(t, n), (l) => r_(t, n, s, l), () => n_(t, n), () => i_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return M("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === ds && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === qp && i ? (
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
      version: dg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function ZC(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Fl(t, r) };
}
function Fl(e, t, r) {
  return Ge(new Zt(e, t, r));
}
function e_(e) {
  return e ? e.classList.contains(Zt.getType()) : !1;
}
function ht(e) {
  return e instanceof Zt;
}
function t_(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!F(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function r_(e, t, r, n) {
  e.update(() => {
    const i = oe(t);
    if (!F(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = oe(r);
    if (!ht(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function n_(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!F(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Qo(r);
  });
}
function i_(e, t) {
  return e.getEditorState().read(() => Ul(t));
}
const s_ = [
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
], o_ = ["†"];
function ea(e) {
  if (fg())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = $d(t), [s, o] = $d(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Id(n, i), [s, o] = Id(s, o);
  const a = Os();
  return a.anchor = hr(n.getKey(), i, Ld(n)), a.focus = hr(s.getKey(), o, Ld(s)), a;
}
function zl() {
  if (fg())
    return;
  const e = w();
  if (!e || !A(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = xo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = xo(i, s);
  return { start: n, end: o };
}
function $d(e) {
  if (db(e)) {
    const t = dp(e.jsonPath);
    let r = Ke();
    for (let n = 0; n < t.length; n++) {
      if (!r || !q(r))
        return [void 0, void 0];
      const i = Ni(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : Lx(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && q(r) ? [r, Dx(r, e.offset)] : [void 0, void 0];
  }
  if (fb(e) || pb(e)) {
    const t = Wi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (q(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && q(r) ? [r, 0] : [void 0, void 0];
  }
  if (hb(e)) {
    const t = Wi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (q(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && q(r) ? [r, 0] : [void 0, void 0];
  }
  if (gb(e)) {
    const t = Wi(e.jsonPath);
    if (!t || !q(t))
      return [void 0, void 0];
    const r = Pa(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (mb(e)) {
    const t = Wi(e.jsonPath);
    if (!t || !q(t))
      return [void 0, void 0];
    const r = Pa(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (yb(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Wi(e.jsonPath);
    if (!n || !q(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = Pa(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${bb(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Id(e, t) {
  if (!Er(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !q(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function Ld(e) {
  return q(e) ? "element" : "text";
}
function Pa(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (P(n) && n.getMarkerSyntax() === t || t === "closing" && P(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Er(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Wi(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = dp(r);
  let i = Ke();
  for (const s of n) {
    if (!i || !q(i))
      return;
    const o = Ni(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function xo(e, t) {
  if (P(e)) {
    const r = e.getMarkerSyntax(), n = a_(e), i = n ? xn(Sn(n)) : xn(Sn(e));
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
    if (E(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return xo(n, s);
    }
    const i = jo(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return xo(i, o);
    }
  }
  if (q(e)) {
    const r = e.getChildAtIndex(t);
    if (Er(r)) {
      const i = r.getTextContent().endsWith("*"), s = xn(Sn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = vh(e, t);
    return n.type === "text" ? {
      jsonPath: xn([...Sn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: xn(Sn(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = Ix(e, t);
    if (r)
      return {
        jsonPath: xn([
          ...Sn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: xn(Sn(e)), offset: t };
}
function a_(e) {
  const t = e.getParent();
  if (!t || !q(t))
    return;
  const r = c_(e);
  return r && !wt(r) && !E(r) && !Se(r) ? r : t;
}
function c_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Is(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Sn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = jo(r);
    if (!n)
      break;
    const i = $x(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function fg() {
  for (let e = Ke().getFirstChild(); e; e = e.getNextSibling())
    if (Ts(e))
      return !0;
  return !1;
}
function pg(e, t, r, n, i, s, o) {
  if (!Me.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? ea(r) : w();
  if (!A(a))
    return;
  const c = d_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (es(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = hg(e, l, c, i, s, void 0, void 0);
  return u_(d, a, i), d;
}
function Kl(e) {
  return e !== "expanded";
}
function l_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!E(r) || !U(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function u_(e, t, r) {
  const n = Kl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Mx(t), tg(t);
  const i = l_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(U)?.selectEnd();
}
function oi(e, t, r) {
  const n = qr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ft(e)) : r?.markerMode === "visible" && n.append(Rr("marker", qe(e)));
  const s = t === "" ? Bt : i ? I + t : t;
  return n.append(ke(s)), n;
}
function d_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(oi("fr", f, n)), !e.isCollapsed()) {
        const p = Ud(e);
        p.length > 0 && o.push(oi("fq", p, n));
      }
      o.push(oi("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(oi("xo", f, n)), !e.isCollapsed()) {
        const p = Ud(e);
        p.length > 0 && o.push(oi("xq", p, n));
      }
      o.push(oi("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function hg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Kl(n?.noteMode), l = pl(e, t, c);
  s && Ct(l, cn, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = ft(e), d && u.setMode("token"), a || (f = ft(e, "closing"))) : n?.markerMode === "visible" && (u = Rr("marker", qe(e) + " "), a || (f = Rr("marker", et(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    p = ke(Ot(l.__caller)), d && p.setMode("token"), l.append(p, ...r);
  else {
    const g = () => Ls(), h = r.flatMap(k_(g));
    if (t === "")
      l.append(...h);
    else {
      const m = kl(r);
      let b = () => {
      };
      i?.noteCallerOnClick && (b = i.noteCallerOnClick), p = Fl(l.__caller, m, b), l.append(p, g(), ...h);
    }
  }
  return f && l.append(f), l;
}
function fr(e) {
  if (typeof e == "string") {
    const t = oe(e);
    return F(t) ? t : void 0;
  }
  return QC(e);
}
function kc(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Gn(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else {
    const n = e.getChildren(), i = n.slice().reverse().find(U);
    if (i)
      f_(i);
    else {
      const s = Bl(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function Bl(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return P(r) && r.getMarkerSyntax() === "closing" || Er(r) && r.getTextContent() === et(e.getMarker()) ? t : -1;
}
function f_(e) {
  const t = Bl(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  E(r) && !Is(r) ? r.selectEnd() : e.select(t, t);
}
function gg(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (E(r) && !Fs(r)) {
    r.select(0, 0);
    return;
  }
  const n = e.getParent();
  if (!n)
    return;
  const i = e.getIndexWithinParent() + 1;
  n.canBeEmpty() ? n.select(i, i) : jl(n, i, { announce: !t });
}
function jl(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!F(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Os();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Nn(i), r && an().dispatchCommand(Kt, void 0);
}
function Dd(e, t, r) {
  const n = $r(e), i = p_(e, n);
  if (r && yg(i, t, r, mg(e, n)))
    return !0;
  let s = Math.max(t, 0), o;
  for (const { node: c, isGlyph: l, dataStart: d } of i) {
    if (l)
      continue;
    const u = c.getTextContentSize() - d;
    if (s < u) {
      const f = d + s;
      return c.select(f, f), !0;
    }
    s -= u, o = c;
  }
  if (!o)
    return !1;
  const a = o.getTextContentSize();
  return o.select(a, a), !0;
}
function p_(e, t) {
  const r = [];
  for (const { node: n } of Vn(e))
    !E(n) || Xe(n, Re) || (Vl(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: Ho(n) }) : h_(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function h_(e, t) {
  return Vr(e) ? !0 : P(e) && !t.is(e.getParent());
}
function mg(e, t) {
  return (r) => {
    let n = r;
    for (; !n.getPreviousSibling(); ) {
      const o = n.getParent();
      if (!o || o.is(e))
        return;
      n = o;
    }
    const i = n.getPreviousSibling(), s = q(i) ? i.getLastDescendant() : i;
    if (E(s) && (t?.is(s) || Vl(s, t)))
      return s;
  };
}
function yg(e, t, r, n) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === r.index)
      return g_(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function g_(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function m_(e, t, r) {
  const { opener: n, value: i, closer: s } = _l(e);
  if (!i)
    return !1;
  const o = y_(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = $r(e);
    if (yg(c, t, r, mg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function y_(e) {
  return e.getTextContent().startsWith(I) ? I.length : 0;
}
function Vl(e, t) {
  return !E(e) || Is(e) || Fs(e) ? !1 : !t || !e.is(t);
}
function b_(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(U))
    return;
  const t = $r(e);
  for (const { node: n } of Vn(e))
    if (Vl(n, t))
      return;
  const r = Bl(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function k_(e) {
  return (t) => jt(t) ? [t] : [t, e()];
}
function x_(e) {
  const t = e.getParent();
  return t !== null && Xe(t, F) !== null;
}
function Ud(e) {
  if (!A(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = nl(e);
  let a = "";
  for (const c of t)
    if (!(F(c) || ht(c) || x_(c)) && !P(c) && !Vr(c) && ie(c, le) !== "attribute") {
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
const Wl = [
  Zt,
  At,
  ...ZT
], T_ = [
  qi,
  ...Wl
], C_ = hn((e, t) => {
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
function __() {
  const [e, t] = fe(void 0), [r, n] = fe(), i = Y(null), s = me((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Yb(l, c, () => {
      Xb(l, c, {
        placement: "bottom-start",
        middleware: [Qb(), Zb()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = me(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return K(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function S_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = __();
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
const v_ = sb(C_);
function bg({ isOpen: e = !1, children: t }) {
  const r = Y(null), { coords: n, placement: i } = S_({ isOpen: e, floatingBoxRef: r }), s = Ve(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return An(
    M(v_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const kg = lp(void 0);
function Hl() {
  const e = up(kg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function M_(e, t) {
  const [r, n] = fe(0), [i, s] = fe(-1), o = Ve(() => e ?? [], [e]), a = {
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
function E_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = M_(t, r);
  return M(kg.Provider, { value: i, children: M("div", { ...n, children: e }) });
}
const xg = hn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Hl(), d = me((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = me((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return M("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function A_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Y(null), { state: { activeIndex: i, menuItems: s } } = Hl(), o = Ve(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ve(() => {
    const c = o(s);
    return t ? ob.map(c, (l, d) => ab(l) && l.type === xg && l.props.index === void 0 ? cb(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return K(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), M("div", { ref: n, role: "menu", ...r, children: a });
}
const P_ = (e, t, r) => ro(e, r).toLowerCase().includes(t.toLowerCase()), Fd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", ro = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function N_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? Fd(r[0]) : "") : (d = n || (r.length > 0 ? Fd(r[0]) : ""), u = (g, h) => P_(g, h, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((g) => {
    try {
      return u(g, t);
    } catch (h) {
      return console.warn("Error filtering item:", g, h), !1;
    }
  }).sort((g, h) => {
    const m = (C) => (p.has(C) || p.set(C, ro(C, f).toLowerCase()), p.get(C) ?? ""), b = a ? ro(g, f) : m(g), T = a ? ro(h, f) : m(h);
    for (const C of c)
      switch (C) {
        case "exact":
          if (b === l && T !== l)
            return -1;
          if (T === l && b !== l)
            return 1;
          break;
        case "startsWith":
          if (b.startsWith(l) && !T.startsWith(l))
            return -1;
          if (T.startsWith(l) && !b.startsWith(l))
            return 1;
          break;
        case "contains": {
          const R = b.indexOf(l), S = T.indexOf(l);
          if (R !== -1 && S === -1)
            return -1;
          if (S !== -1 && R === -1)
            return 1;
          if (R !== -1 && S !== -1)
            return R - S;
          break;
        }
      }
    return b.localeCompare(T);
  });
}
const Na = {
  Root: E_,
  Options: A_,
  Option: xg
};
function w_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ve(() => N_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function O_() {
  const { moveUp: e, moveDown: t, select: r } = Hl();
  return Ve(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const R_ = () => {
  const e = O_(), [t] = ae();
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
    return t.registerCommand(Sr, r, we);
  }, [t, e]);
};
function q_() {
  return R_(), null;
}
const $_ = ["Shift", "Control", "Alt", "Meta"];
function Tg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), d = s !== void 0, [u, f] = fe(""), p = d ? s ?? "" : u, g = w_({ query: p, items: t, filterBy: "name" }), h = (m) => {
    n?.(), r ? r(m) : m.action(l);
  };
  return K(() => {
    a?.(p, g);
  }, [a, p, g]), K(() => l.registerCommand(Sr, (m) => {
    if (d || c?.includes(m.key) || $_.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return n?.(), !1;
    const T = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((C) => C.slice(0, -1));
      }
    }[m.key];
    return T ? (m.stopPropagation(), m.preventDefault(), T(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && f((C) => C + m.key), !0) : !1;
  }, we), [l, d, p, o, n, c]), _e(Na.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: g, onSelectOption: (m) => h(m), children: [!d && M("input", { value: p, type: "text", disabled: !0 }), M(q_, {}), M(Na.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((T, C) => _e(Na.Option, { index: C, children: [M("span", { className: "label", children: T.label ?? T.name }), M("span", { className: "description", children: T.description })] }, T.name)) })] });
}
function I_({ trigger: e, items: t }) {
  const [r] = ae(), [n, i] = fe(!1), s = me((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return K(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), K(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = w();
      if (A(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !A(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && M(bg, { isOpen: n, children: ({ placement: o }) => M(Tg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function L_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Ve(() => {
    if (!t || !e)
      return;
    const i = yr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = yr(o), { action: c } = r(o, a);
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
function os(e, t) {
  return `${e}:${t}`;
}
function D_(e, t) {
  K(() => {
    if (!e.hasNodes([nt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return $e(Mp(e, nt, (n) => hs(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], g = a[l]?.[u], h = c[l]?.[u];
          i.addID(l, u, f, p, g, h);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(nt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = oe(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Se(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!nt.isReservedType(c))
              for (const d of l) {
                let u = t.get(os(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(os(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(os(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const U_ = hn(function({ logger: t }, r) {
  const [n] = ae(), i = Ve(() => /* @__PURE__ */ new Map(), []);
  D_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(os(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = oe(d);
        Se(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && lo(u));
      }
  };
  return $o(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (nt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = ea(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Jp(p, a, c, l, d, u, f);
      }, { tag: rc });
    },
    removeAnnotation(o, a) {
      if (nt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(os(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: rc });
    }
  })), null;
}), F_ = [];
function z_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = F_, onChange: n }) {
  const [i] = ae();
  return As(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(il) && !d.has(Ip) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = K_(i, s);
        u.length !== 0 && n(o, i, d, u, l);
      });
  }, [i, e, t, r, n]), null;
}
function K_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Zi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = oe(i), o = s !== null && Nt(s) !== void 0;
    if (t.size === 1 && E(s) && !o && qC(s)) {
      const a = Ll(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = oe(i);
          return new Zi([E(u) ? bc(u) : { insert: "" }]);
        }), l = new Zi([bc(s)]), d = new Zi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = Rd(r), c = Rd(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const Gl = "formatted", Cg = "unformatted", _g = "paragraph-structure", Jl = "standard", Sg = "block-verse", B_ = {
  [Gl]: "Formatted",
  [Cg]: "Unformatted",
  [_g]: "Paragraph Structure",
  [Jl]: "Standard",
  [Sg]: "Block Verse"
};
function $i(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Yl, Xl;
function j_(e) {
  const t = Ql(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Yl = e, Xl = t;
}
j_(Gl);
const gN = () => Yl, ta = () => Xl;
function Ql(e) {
  let t;
  switch (e ?? Yl) {
    case Gl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Cg:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case _g:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Jl:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Sg:
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
function mN(e) {
  if (!e)
    return;
  const t = zd(e);
  return Object.keys(B_).find((r) => It(zd(Ql(r)), t));
}
const V_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function zd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...V_, ...t };
}
function zs(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function W_(e) {
  if (e)
    return _s(e) ? At : e.markerMode === "editable" ? mt : At;
}
function _s(e) {
  return e?.verseLayout === "block";
}
function H_(e) {
  const t = [], r = e ?? Xl;
  return r && (t.push(`${pk}${r.markerMode}`), r.hasSpacing && t.push(dk), r.isFormattedFont && t.push(fk)), t;
}
function G_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += J_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), X_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += Q_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), eS(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function J_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), Y_(t, e.retain, e.attributes, r, n)), e.retain);
}
function Y_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ke();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Ir(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, g = Math.min(s, p);
        if (g > 0) {
          let h = d;
          const m = f > 0, b = g < u - f;
          if (m && b) {
            const [, T] = d.splitText(f);
            [h] = T.splitText(g);
          } else m ? [, h] = d.splitText(f) : b && ([h] = d.splitText(g));
          if (un(r)) {
            const T = h.getParent();
            if (U(T)) {
              const C = r.char;
              let R;
              Array.isArray(C) ? a >= 0 && a <= C.length - 1 && (R = C[a]) : a === 0 && (R = C);
              const S = R ? qn(R, T) : !1;
              if (S && Array.isArray(C) && C.length > 1) {
                const $ = ke("");
                h.replace($);
                const W = typeof r.segment == "string" ? r.segment : void 0, B = Ii(C.slice(1), n, h, W);
                let _ = $;
                for (const V of B)
                  _.insertAfter(V), _ = V;
                $.remove(), Lt(r, h);
              } else if (S)
                Lt(r, h);
              else {
                h.remove();
                const $ = Kd(h, r, n, i);
                if ($ && $.length > 0) {
                  let W = T;
                  for (const B of $)
                    W.insertAfter(B), W = B;
                }
              }
            } else {
              const C = ke("");
              h.replace(C);
              const R = Kd(h, r, n, i);
              if (R && R.length > 0) {
                let S = C;
                for (const $ of R)
                  S.insertAfter($), S = $;
                C.remove();
              } else
                C.replace(h);
            }
          } else
            Lt(r, h);
          s -= g;
        }
      }
      o += u;
    } else if (Rt(d))
      e <= o && o < e + t && s > 0 && (Bd(d, r), s -= 1), o += 1;
    else if (U(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (un(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            xc(d, p.style), typeof p.cid == "string" && Ct(d, Rn, () => p.cid);
            const g = ze(p, ko);
            g && Object.keys(g).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...g
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || lS(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && ec(d), !0;
        }
      }
      u && ec(d), a -= 1;
    } else if (wt(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Cr(d))
          Bd(d, r);
        else if (Zl(r)) {
          const p = Eg(r.para, n);
          p && d.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (q(d)) {
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
function Kd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Ii(t.char, r, e, i), o = s.find(U);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Lt(t, e);
    return;
  }
  const a = {};
  wg.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Lt(t, e), s;
}
function vg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(qe(t))) : jt(r) && r.getTextType() === "marker" && r.setTextContent(qe(t) + I);
}
function xc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = U(e.getParent()), i = e.getFirstChild();
  jt(i) && i.getTextType() === "marker" && i.getTextContent() === qe(r, n) && i.setTextContent(qe(t, n));
  const s = e.getLastChild();
  jt(s) && s.getTextType() === "marker" && s.getTextContent() === et(r, n) && s.setTextContent(et(t, n));
}
function Bd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && U(e) && un(t)) {
      const i = Tc(n);
      if (xc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Ct(e, Rn, () => o);
      }
      const s = ze(i, ko);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (He(e) || he(e) || Ye(e) || F(e) || Fe(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (bt(e) || ue(e) || U(e)) && (r === "style" && ue(e) ? vg(e, n) : r === "style" && U(e) ? xc(e, n) : r === "code" && bt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Ct(e, cn, () => n));
  }
}
function X_(e, t, r) {
  if (t <= 0)
    return;
  const n = Ke();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Ir(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Rt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (wt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && wt(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Qt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && ve(p)) {
            let g = i + 1;
            const h = p.getChildren();
            for (const b of h) {
              if (s <= 0)
                break;
              const T = i;
              if (i = g, o(b)) {
                i = T;
                break;
              }
              Ir(b) ? g += b.getTextContentSize() : Rt(b) && (g += 1), i = T;
            }
            const m = p.getChildren();
            for (const b of m)
              b.remove(), a.append(b);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Qt(), !0);
        } else ue(a) ? a.replace(Qt(), !0) : a.remove();
      }
      i += 1;
    } else if (q(a)) {
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
function Q_(e, t, r, n, i) {
  if (t === Cs)
    return jd(e, r, n, i);
  if (t.endsWith(Cs) && !Zl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (un(r))
        throw new Error("Text + LF should not have char attributes");
      o += To(e, s, r, i);
    }
    return o += jd(e + o, r, n, i), o;
  } else return un(r) ? Z_(e, t, r, n, i) : To(e, t, r, i);
}
function Z_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ke(t === "" ? Bt : t);
  Lt(r, s);
  let o;
  {
    let m = function(b) {
      if (Ir(b)) {
        const T = b.getTextContentSize();
        if (e >= h && e < h + T) {
          const C = b.getParent();
          return U(C) && (o = C), !0;
        }
        h += T;
      } else if (Rt(b))
        h += 1;
      else if (U(b)) {
        const T = b.getChildren();
        for (const C of T)
          if (m(C))
            return !0;
      } else if (q(b)) {
        const T = b.getChildren();
        for (const C of T)
          if (m(C))
            return !0;
        wt(b) && (h += 1);
      }
      return !1;
    };
    const g = Ke();
    let h = 0;
    m(g);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const g = a[0];
      g && qn(g, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (qn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Ii(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(U);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), To(e, t, void 0, i);
  const f = {};
  for (const [g, h] of Object.entries(r))
    g !== "char" && g !== "segment" && typeof h == "string" && (f[g] = h);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const g of d)
    if (!Mg(e, g, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), To(e, t, void 0, i));
}
function To(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ke();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Ir(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = ke(t);
        if (Lt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          U(f) && !un(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Rt(c))
      s += 1;
    else if (U(c)) {
      if (!o && e === s) {
        const u = ke(t);
        Lt(r, u);
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
        const u = ke(t);
        return Lt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (wt(c)) {
      if (!o && e === s) {
        const u = ke(t);
        Lt(r, u);
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
        const u = ke(t);
        return Lt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (q(c)) {
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
    const c = ke(t);
    Lt(r, c);
    const l = Qt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Mg(e, t, r) {
  const n = Ke();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Qt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!q(a))
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
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Qt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Ir(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (Rt(l))
        i += 1;
      else if (U(l)) {
        if (o(l))
          return !0;
      } else if (wt(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (Cr(d) && wt(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (q(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return q(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Qt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      ve(a) ? Cr(a) && ue(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ve(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ve(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function eS(e, t, r, n, i) {
  let s;
  return nn("chapter", t) ? s = rS(t.insert.chapter, r) : nn("verse", t) ? s = nS(t.insert.verse, r) : nn("ms", t) ? s = iS(t.insert.ms) : nn("note", t) ? s = Ag(t, r, n) : nn("unknown", t) ? s = Pg(t, r, n, i) : nn("unmatched", t) && (s = oS(t.insert.unmatched, r)), s ? Mg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function jd(e, t, r, n) {
  let i;
  Zl(t) ? i = Eg(t.para, r) : cS(t) && (i = tS(t.book)), i ??= Qt();
  const s = i, o = ue(s), a = Cr(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Ir(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (ue(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const g = e - c, [h] = g > 0 ? u.splitText(g) : [void 0];
          let m, b = h?.getPreviousSibling();
          for (; b; ) {
            const T = b;
            b = b.getPreviousSibling(), m ? m.insertBefore(T) : s.append(T), m = T;
          }
          return h && s.append(h), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Rt(u))
      c += 1;
    else if (wt(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Cr(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (ue(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ue(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (q(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
    }
    return l;
  }
  return d(Ke()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function tS(e) {
  const { style: t, code: r } = e;
  if (!t || t !== gs || !r || !Vt.isValidBookCode(r))
    return;
  const n = ze(e, TC);
  return eh(r, n);
}
function Eg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = ze(e, xC), i = ms(r, n);
  if (!$i(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ft(r), Ls());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = qe(r) + I;
    i.append(t.hasGutterParaMarkers ? Fk(s) : Rr("marker", s));
  }
  return i;
}
function rS(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = ze(e, CC);
  let a;
  if (t.markerMode === "editable")
    a = nh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = yl(r, c, n, i, s, o);
  }
  return a;
}
function nS(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = ze(e, _C);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = zt(r, n);
    c = ph(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Rl(n, l, i, s, o, a);
  }
  return c;
}
function iS(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = ze(e, SC);
  return Up(t, r, n, s, i);
}
function Ag(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = ze(n.note, vC), l = typeof c?.closed == "string" ? c.closed : void 0, d = e.attributes?.segment;
  let u;
  d && typeof d == "string" && (u = d);
  const f = [];
  for (const g of a?.ops ?? [])
    if (typeof g.insert == "string")
      if (un(g.attributes)) {
        const h = Ii(g.attributes.char, t, ke(g.insert), void 0, Ng(g.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...h);
      } else
        f.push(ke(g.insert));
  return hg(i, s, f, t, r, u, l).setCategory(o).setUnknownAttributes(c);
}
function Pg(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = ze(i, MC), l = ml(s, o, c), d = a?.ops ?? [];
  d.length > 0 && sS(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && Ct(l, cn, () => u), l;
}
function sS(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (un(s.attributes)) {
        const o = ke(s.insert), a = Ii(s.attributes.char, t, o, void 0, Ng(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ke(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (nn("unknown", s)) {
        const o = Pg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (nn("note", s)) {
        const o = Ag(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function oS(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Al(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Ng(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Tc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Ii(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(Bt);
  const a = () => {
    o && E(r) && r.getTextContent() !== Bt && r.setTextContent(I + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Tc), l = c[0], d = i?.[i.length - 1];
    if (U(d) && qn(l, d)) {
      if (c.length > 1) {
        const f = Ii(c.slice(1), t, r, void 0, void 0, !0, o);
        wa(d, f);
      } else
        r && wa(d, [r]);
      return [];
    }
    a();
    const u = c.reduceRight((f, p, g) => {
      const h = qr(p.style, ze(p, ko));
      return typeof p.cid == "string" && Ct(h, Rn, () => p.cid), n && g === c.length - 1 && Ct(h, cn, () => n), f && (U(f) && (Ra(f.getMarker(), f, t, !0), Oa(f, f, t, !0)), h.append(f)), h;
    }, r);
    return Ra(l.style, u, t, s), Oa(u, u, t, s), [u];
  } else {
    const c = Tc(e), l = i?.[i.length - 1];
    if (U(l) && qn(c, l))
      return r && wa(l, [r]), [];
    a();
    const d = qr(c.style, ze(c, ko));
    return typeof c.cid == "string" && Ct(d, Rn, () => c.cid), n && Ct(d, cn, () => n), r && d.append(r), Ra(c.style, d, t, s), Oa(d, d, t, s), [d];
  }
}
function wa(e, t) {
  const r = e.getLastChild();
  P(r) && r.getMarkerSyntax() === "closing" || jt(r) && r.getTextType() === "marker" && r.getTextContent() === et(e.getMarker(), U(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function Oa(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && aS(e.getMarker(), t, r, !1, n);
}
function Ra(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ft(e, "opening", n) : r?.markerMode === "visible" && (i = Rr("marker", qe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function aS(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ft("", "selfClosing") : s = ft(e, "closing", i) : r?.markerMode === "visible" && (s = Rr("marker", n ? et("") : et(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function cS(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Zl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function un(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function lS(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Lt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Ct(t, cn, () => n);
        continue;
      }
      if (uS(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const wg = [
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
function uS(e) {
  return wg.includes(e);
}
function dS() {
  const [e] = ae();
  return K(() => e.registerCommand(Do, (t) => (fS(t), !1), wn), [e]), null;
}
function fS(e) {
  if (pS(e.target))
    return;
  const t = w();
  A(t) && hS(t);
}
function Li(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Wt(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === I && (r++, t = t.getNextSibling());
    else if (he(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (tr(e, r), !0);
}
function pS(e) {
  if (!pp(e))
    return !1;
  const t = Pi(e);
  if (!zk(t))
    return !1;
  const r = t.getParent();
  return r ? ve(r) ? Li(r) : (tr(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function hS(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = oe(t.key);
  if (!ve(r))
    return !1;
  const n = r.getFirstChild();
  return !Er(n) && !Gn(n) ? !1 : Li(r);
}
function gS() {
  const [e] = ae();
  return K(() => {
    const t = (r) => r instanceof KeyboardEvent && !mS(r) || !ra() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return $e(
      e.registerCommand(Sr, t, we),
      e.registerCommand(Uo, t, we),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(gr, t, Ne),
      e.registerCommand(Tr, t, Ne),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(sl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Pi(r.target);
        return !n || !dn(n) ? !1 : (r.preventDefault(), !0);
      }, we),
      e.registerCommand(ol, t, we),
      e.registerCommand(hp, t, we),
      e.registerCommand(gp, t, we)
    );
  }, [e]), null;
}
function mS(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function dn(e) {
  return Xe(e, eu) ?? void 0;
}
function eu(e) {
  return Fe(e) || Hh(e);
}
function ra() {
  const e = w();
  return A(e) ? dn(e.anchor.getNode()) !== void 0 || dn(e.focus.getNode()) !== void 0 : !1;
}
function yS(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function bS(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), yS(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function kS(e, t, r, n) {
  if (!RS(t) || bS(e, r))
    return !1;
  const i = r === "up" ? kC(t) : bC(t);
  return i && n.preventDefault(), i;
}
function xS({ viewOptions: e }) {
  const [t] = ae();
  return TS(t, e), null;
}
function TS(e, t) {
  K(() => {
    if (!e.hasNodes([Mr, At, Me]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!A(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = Vd(o), u = AS(i, Wd(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return kS(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Vd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Wd(a, n.key) ? l = !c && Jd(i, "next") || !c && _S(i) || wS(i) || !c && s && Gd(i, "next") : CS(a, n.key) && (l = !c && Jd(i, "previous") || !c && SS(i) || OS(i, t) || !c && s && Gd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Sr, r, we);
  }, [e, t]);
}
function Vd(e) {
  return e.dir || "ltr";
}
function Wd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function CS(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Cc(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = Nt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function _S(e) {
  const t = Cc(yh(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (tr(t, 0), !0);
}
function SS(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Cc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Hd(n);
  }
  if (t.offset === 0) {
    const n = Cc(r);
    return n ? Hd(n) : !1;
  }
  return !1;
}
function Hd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (E(t))
    return t.select(), !0;
  if (q(t)) {
    const i = t.getLastDescendant();
    return E(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Co = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function vS(e) {
  if (Co)
    for (const { segment: r } of Co.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function MS(e) {
  if (Co) {
    let n = 0;
    for (const { index: i } of Co.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Og(e) {
  for (let t = e; t; t = t.getParent())
    if (q(t) && !t.isInline())
      return t;
}
function Rg(e) {
  return !!e && P(e) && dn(e) !== void 0;
}
function _i(e) {
  return E(e) && !e.isToken() && !Rg(e) && e.getTextContentSize() > 0;
}
function qg(e) {
  return Bn(e) ? !0 : F(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || Rg(e)) && e.getTextContentSize() > 0 : jn(e) ? !Ye(e) : !1;
}
function Si(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function na(e, t, r) {
  for (let n = e; n; ) {
    if (qg(n))
      return n;
    if (q(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Si(n, t, r);
      continue;
    }
    if (_i(n))
      return n;
    n = Si(n, t, r);
  }
}
function tu(e, t, r, n, i) {
  return r === "element" && q(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Si(e, n, i) : r === "text" && qg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Si(e, n, i);
}
function qa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = tu(e.node, e.offset, e.kind, "previous", t), n = na(r, "previous", t);
  if (!n)
    return e;
  if (_i(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function ES(e, t) {
  const r = e.getNode(), n = Og(r);
  if (!n)
    return;
  if (e.type === "text" && _i(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return qa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = tu(r, e.offset, e.type, t, n), s = na(i, t, n);
  if (!s)
    return;
  if (_i(s)) {
    const c = s.getTextContent(), l = t === "next" ? vS(c) : MS(c);
    return qa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return qa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function $g(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = ES(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && q(i.node) ? jl(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Gd(e, t) {
  return $g(e, t, "collapse");
}
function AS(e, t) {
  return $g(e, t, "extend");
}
function PS(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && _i(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = tu(n, e.offset, e.type, t, r);
  return na(i, t, r) === void 0;
}
function NS(e, t) {
  const r = Ke();
  for (let n = e; n; ) {
    const i = Si(n, t, r), s = i && na(i, t, r);
    if (!s)
      return;
    if (n = dn(s), !n)
      return s;
  }
}
function Jd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (dn(n))
    return !1;
  const i = Og(n);
  if (!i || !PS(r, t, i))
    return !1;
  const s = Si(i, t, Ke()), o = s && dn(s);
  if (!o)
    return !1;
  const a = NS(o, t);
  if (!a)
    return !0;
  if (_i(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Yd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  jl(t, r);
}
function wS(e) {
  const t = e.anchor.getNode(), r = yh(e);
  if (F(r) && !P(r.getFirstChild())) {
    if (ve(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(ve(i) && Li(i)) && i.selectStart(), !0;
      }
    } else return jt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (ve(t) && F(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Yd(r), !0;
  }
  const n = r?.getParent();
  if (jt(r) && F(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Yd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function OS(e, t) {
  const r = _x(e);
  if (Rs(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (bt(i.getParent()))
    return !0;
  if (F(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Gn(o))
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
    const a = Xe(o, (c) => F(c));
    if (F(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Nt(i);
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
function RS(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return he(t) && jn(t);
}
function qS() {
  const [e] = ae();
  return $S(e), null;
}
function $S(e) {
  K(() => {
    if (!e.hasNodes([be]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return $e(
      e.registerNodeTransform(be, DS),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(be, Vx),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(be, Ih),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(be, (t) => xs($n("char"), t)),
      e.registerNodeTransform(We, US)
    );
  }, [e]);
}
function $a(e) {
  return e.getChildren().some(P);
}
function IS(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (wi(n)) {
    const i = n.getTextContent();
    i.startsWith(I) && (i === I ? n.remove() : n.setTextContent(i.slice(I.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function LS(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function DS(e) {
  if (!U(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if ($a(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ie(e, Rn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && qn({ style: t, cid: r }, i) && It(n, i.getUnknownAttributes()))
    if ($a(i)) {
      if (IS(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && qn({ style: t, cid: r }, s) && It(n, s.getUnknownAttributes()) && ($a(s) ? LS(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function US(e) {
  const t = e.getParent();
  if (!U(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(Bt)) {
    const n = w();
    if (A(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function Ig(e) {
  return e.replaceAll("	", " ");
}
function Lg() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function Dg(e) {
  const t = () => !Lg();
  return $e(e.registerCommand(yi, t, vt), e.registerCommand(Tr, t, vt));
}
const ru = (e) => {
  e.dispatchCommand(yi, null);
}, nu = (e) => {
  e.dispatchCommand(Tr, null);
}, iu = (e) => {
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
      n.setData(o, Ig(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(gr, s);
  });
}, su = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Ig(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(gr, i);
  });
};
function FS() {
  const [e] = ae();
  return K(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(bi ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), ru(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), nu(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? su(e) : iu(e)));
    };
    return $e(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Dg(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function zS({ logger: e }) {
  const [t] = ae();
  return K(() => $e(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Sr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Or),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(gr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Or),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(sl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Or)
  ), [t, e]), null;
}
function KS({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), M("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: M("span", { className: "text", children: i.title }) });
}
function BS({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return M("div", { className: "typeahead-popover", children: M("ul", { children: e.map((i, s) => M(KS, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let jS = 0;
class Hi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${jS++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function VS({ options: e } = {}) {
  const [t] = ae(), [r, n] = fe(() => !t.isEditable()), [i, s] = fe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = fe(void 0), c = Ve(() => {
    const u = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new Hi("Cut", {
        onSelect: () => {
          nu(t);
        },
        isDisabled: r
      }),
      new Hi("Copy", {
        onSelect: () => {
          ru(t);
        }
      }),
      new Hi("Paste", {
        onSelect: () => {
          iu(t);
        },
        isDisabled: r
      }),
      new Hi("Paste as Plain Text", {
        onSelect: () => {
          su(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Hi(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = me(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  K(() => Dg(t), [t]), K(() => {
    const u = (f) => {
      const p = f.target;
      t.getRootElement() === p || lh(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", u), f && f.addEventListener("contextmenu", u);
    });
  }, [t]), K(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return globalThis.addEventListener("scroll", u, !0), () => globalThis.removeEventListener("scroll", u, !0);
  }, [i.isOpen, l]), K(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return document.addEventListener("pointerdown", u), () => document.removeEventListener("pointerdown", u);
  }, [i.isOpen, l]), K(() => {
    if (!i.isOpen)
      return;
    const u = (f) => {
      if (f.key === "Escape")
        f.preventDefault(), l();
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
    return document.addEventListener("keydown", u, !0), () => document.removeEventListener("keydown", u, !0);
  }, [i.isOpen, l, c, o, t]), K(() => t.registerEditableListener((u) => {
    n(!u);
  }), [t]);
  const d = Y(null);
  return As(() => {
    const u = d.current;
    if (!u)
      return;
    const { width: f, height: p } = u.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), h = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    u.style.left = `${g}px`, u.style.top = `${h}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Vb.createPortal(M("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: M(BS, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function WS(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function HS(e) {
  if (!Cb(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function GS(e) {
  return ht(e);
}
function Ia(e, t, r) {
  const n = Pi(t.node);
  if (!jn(n) || GS(n))
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
function JS(e, t) {
  if (w())
    return !1;
  const r = e.getRootElement(), n = Tb(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !mp(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let d, u;
  if (n.isCollapsed)
    d = Ia(e, c, HS(c)), u = d;
  else {
    const m = WS(n.getRangeAt(0), c);
    d = Ia(e, c, m ? "before" : "after"), u = Ia(e, l, m ? "after" : "before");
  }
  if (!d && !u)
    return !1;
  const f = d ?? c, p = u ?? l, g = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, h = yp(g, e);
  return h ? (Nn(h), h.dirty = !t, t) : !1;
}
function YS() {
  const [e] = ae(), t = Y(!1), r = Y(!1);
  return K(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = w();
        A(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), K(() => e.registerCommand(Kt, () => (JS(e, t.current) && (r.current = !0), !1), Ne), [e]), null;
}
function XS() {
  const [e] = ae();
  return K(() => e.registerCommand(Sr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(bi ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Ne), [e]), null;
}
function QS({ isEditable: e }) {
  const [t] = ae();
  return As(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Ug(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function wr(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function La(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = w();
    if (!A(i))
      return !1;
    const s = yp(r, e);
    return !!s && i.is(s);
  }, { editor: e }) || r.removeAllRanges();
}
function ui(e, t) {
  let r;
  try {
    r = an();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function Xd(e) {
  return !!e && $s(oe(e));
}
function ou(e) {
  const [t] = ae(), r = Y(void 0), n = me((i) => {
    const s = w(), o = A(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Xd(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = Jo(d, u), p = $s(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const g = bx();
        i.insertAfter(g), r.current = g.getKey(), l = g.getKey();
      }
      tr(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = oe(a);
      E(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return K(() => {
    const i = () => {
      const a = e(), c = w(), l = A(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (Tt(_t), wr(t, _t), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (qs(c) || !c.includes(ki))
        return;
      const l = w(), d = A(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (kx(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(ki).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = $e(t.registerCommand(Kt, () => (i(), !1), wn), t.registerCommand(al, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Xd(a);
      }), c && t.update(() => {
        const l = oe(a);
        E(l) && l.remove();
      }, { tag: _t }), r.current = void 0, !1;
    }, wn), t.registerNodeTransform(We, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function ZS() {
  const e = w();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = F(r) ? r : r.getParent();
  if (!F(n))
    return;
  const i = b_(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && $s(s); )
    s = s.getPreviousSibling();
  if (!s || E(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (r.is(n))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (r.is(s))
    return E(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = r.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function ev() {
  return ou(ZS), null;
}
function tv() {
  const e = w();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!q(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!he(i) || Jo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || he(s))
    return i;
}
function rv() {
  return ou(tv), null;
}
function nv({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
        const d = Ug(o);
        o.update(() => {
          d || Tt(Pr), o.setEditorState(l), o.dispatchCommand(_b, void 0);
        }, { tag: ul });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const Da = "caller_highlight", iv = hn(function(t, r) {
  const [n] = ae(), i = Y(void 0), s = Y(void 0), o = me(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const d = fr(a);
      return d ? (d.getChildren().find(ht) ?? $r(d))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(Da), l?.classList.add(Da), s.current = l;
  }, [n]);
  return $o(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : ui(n, () => fr(a)?.getKey()), o();
    }
  }), [n, o]), K(() => $e(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Me, (a, { prevEditorState: c, updateTags: l }) => {
      const d = i.current;
      if (d === void 0 || a.get(d) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const u = l.has(ul) ? void 0 : c.read(() => Ul(d)), f = u === void 0 ? void 0 : n.getEditorState().read(() => fr(u)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), K(() => () => s.current?.classList.remove(Da), []), null;
});
function sv({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return ov(t, n), av(i, e, r, n), null;
}
function ov(e, t) {
  const r = Y(void 0), n = Y(void 0), i = e.noteCallers, s = e.crossRefCallers;
  K(() => {
    let o = i;
    (!o || o.length <= 0) && (o = s_), r.current !== o && (r.current = o, Qd("note-callers", o, t));
  }, [t, i]), K(() => {
    let o = s;
    (!o || o.length <= 0) && (o = o_), n.current !== o && (n.current = o, Qd("cross-ref-callers", o, t));
  }, [t, s]);
}
function av(e, t, r, n) {
  K(() => {
    if (!e.hasNodes([be, Me, Zt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => hv(s));
    return $e(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Me, (s) => cv(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(be, lv),
      e.registerNodeTransform(We, uv),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Zt, dv),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Zt, (s, { prevEditorState: o }) => fv(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Kt, () => pv(e, t, r, n), vt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function cv(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => ht(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !P(i) && i.getTextContent() !== Ot(e.getCaller()) && e.insertBefore(i);
  }
}
function lv(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => ht(s));
  if (!U(e) || !F(t) || !n)
    return;
  const i = kl(r);
  n.getPreviewText() !== i && n.setPreviewText(i), zg(e);
}
function Fg(e) {
  const t = w();
  if (!A(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function zg(e) {
  const t = e.getNextSibling();
  if (E(t) && !P(t)) {
    if (t.getTextContent() === I || Fg(t))
      return;
    if (zr(t)) {
      t.setTextContent(I);
      return;
    }
  }
  e.insertAfter(Ls());
}
function uv(e) {
  const t = Nt(e), r = t?.getChildren(), n = r?.find((a) => ht(a));
  if (!E(e) || !F(t) || !n || !r)
    return;
  const i = e.getParent(), s = zr(e) || Fg(e);
  if (!P(e) && F(i) && s && e.getTextContent() !== I && (e.setTextContent(I), e.selectEnd()), U(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(Bt) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = kl(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function dv(e) {
  ht(e) && zg(e);
}
function fv(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = oe(r), a = o?.getParent();
      return ht(o) && F(a) && a.getCaller() === ds;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function pv(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Xe(o, (c) => F(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = oe(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Gi(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (F(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Gi(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (F(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Gi(e, c, n);
    } else if (!a) {
      const c = Xe(o, (l) => F(l));
      if (c && c.getIsCollapsed() && ve(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Gi(e, l, n);
      }
    }
  }
  if (ve(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Gn(c) && F(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Gi(e, l, n);
    }
  }
  return !1;
}
function Gi(e, t, r) {
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
function hv(e) {
  const t = w();
  if (!A(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (F(i) && E(s)) {
    e.preventDefault();
    const o = Os();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Nn(o);
  }
}
function Qd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (gv(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function gv(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function br(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = $r(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function mv(e) {
  const t = e.getParent();
  if (F(t))
    return br(t).some((r) => r.is(e)) ? t : void 0;
}
function Dn(e) {
  const t = br(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function yv(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function bv(e) {
  const t = Mb();
  if (!A(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Dn(e);
  const i = yv(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Dn(e);
}
function pi(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = mv(t);
  if (r)
    return Kg(r, t, e.offset) ? void 0 : r;
}
function Kg(e, t, r) {
  const n = br(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function kv(e) {
  const t = br(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : tr(e, Dn(e));
}
function xv(e = !1) {
  const t = w();
  if (!A(t))
    return !1;
  if (!t.isCollapsed())
    return Wg(t);
  const r = Bg(t.anchor);
  if (r) {
    const i = So(r);
    return t.anchor.is(i) ? !1 : (jg(t, i), !0);
  }
  const n = pi(t.anchor);
  if (!n)
    return !1;
  if (!e && bv(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    tr(i, n.getIndexWithinParent());
  } else
    kv(n);
  return !0;
}
function _o(e) {
  const t = br(e), r = t[t.length - 1];
  return E(r) ? hr(r.getKey(), r.getTextContentSize(), "text") : hr(e.getKey(), Dn(e), "element");
}
function vi(e) {
  const t = e.getLastChild();
  return P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function Ua(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === vi(e) && P(r) && t.offset > 0;
}
function _c(e) {
  const t = vi(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function So(e) {
  const t = vi(e);
  if (t > Dn(e)) {
    const r = e.getChildAtIndex(t - 1), n = q(r) ? r.getLastDescendant() : r;
    if (E(n))
      return hr(n.getKey(), n.getTextContentSize(), "text");
  }
  return _o(e);
}
function Bg(e) {
  const t = e.getNode(), r = t.getParent();
  if (F(r) && br(r).length > 0 && _c(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (F(t) && br(t).length > 0 && _c(t))
    return e.offset > vi(t) || e.offset === vi(t) && e.offset > Dn(t) ? t : void 0;
  if (!q(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return F(n) && br(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function jg(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function Vg(e) {
  const t = Nt(e);
  return t && br(t).length > 0 ? t : void 0;
}
function Tv(e) {
  const t = [], r = (n) => {
    const i = Vg(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function Wg(e) {
  const t = Tv(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => hr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const d = hr(l.getKey(), Dn(l), "element"), u = hr(l.getKey(), vi(l), "element"), f = i.type === "text" && Kg(l, i.getNode(), i.offset), p = i.isBefore(d) && !f;
    (pi(i) || Ua(l, i) || p) && (!s.isBefore(d) || pi(s)) && (i = Ua(l, i) ? So(l) : _o(l), o = !0), (pi(s) || Ua(l, s) || u.isBefore(s)) && (i.isBefore(u) || i.is(u)) && (s = pi(s) ? _o(l) : So(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function Zd(e, t) {
  const r = Os();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function ef(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r)
    return;
  const n = r.ownerDocument.createRange(), i = t.type === "text" ? r.firstChild : r;
  if (!i)
    return;
  const s = i.nodeType === 3 ? i.textContent?.length ?? 0 : i.childNodes.length;
  if (n.setStart(i, Math.min(t.offset, s)), n.collapse(!0), typeof n.getClientRects != "function")
    return;
  const [o] = Array.from(n.getClientRects());
  return o?.top;
}
function tf(e, t, r) {
  const n = ef(e, t), i = ef(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function Cv(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return q(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function _v(e, t, r, n) {
  const i = t.anchor, s = Bg(i);
  if (s)
    return jg(t, So(s)), !0;
  const o = Vg(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const u = Cv(t.focus);
    return F(u) && br(u).length > 0;
  }
  if (pi(i))
    return !0;
  const a = _o(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const u = Zd(a, i);
    return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && tf(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = _c(o);
  if (!c)
    return !1;
  const l = hr(c.getKey(), 0, "text"), d = Zd(i, l);
  return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && tf(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function Sv() {
  const [e] = ae(), t = Y(!1);
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
  }, [e]), K(() => {
    const r = (o) => () => {
      const a = w();
      return !A(a) || a.isCollapsed() || !Wg(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = w();
      return A(c) ? c.isCollapsed() ? _v(e, c, a, o) : i() : !1;
    };
    return $e(e.registerCommand(Uo, n, Ne), e.registerCommand(gr, n, Ne), e.registerCommand(us, n, Ne), e.registerCommand(Sb, n, Ne), e.registerCommand(ol, s("character"), Ne), e.registerCommand(hp, s("word"), Ne), e.registerCommand(gp, s("line"), Ne), e.registerCommand(vb, i, Ne), e.registerCommand(Tr, i, Ne));
  }, [e]), K(() => e.registerCommand(Kt, () => (xv(t.current) && (Tt(_t), wr(e, _t)), !1), wn), [e]), null;
}
function vv({ onChange: e }) {
  const [t] = ae();
  return K(() => t.registerCommand(Kt, () => {
    const r = zl();
    return e?.(r), !1;
  }, vt), [t, e]), null;
}
function Mv() {
  const [e] = ae();
  return Ev(e), null;
}
function Ev(e) {
  K(() => {
    if (!e.hasNodes([it]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(it, (t) => Av(t, e));
  }, [e]);
}
function Av(e, t) {
  mc(t, e.getKey()) && ag(e.getFirstChild()), !(!ue(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = oe(e.getKey());
    return ue(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Hg({ onStateChange: e }) {
  const [t] = ae(), [r, n] = fe(t), i = Y(!1), s = Y(!1), o = Y(void 0), a = Y(void 0), c = me(() => {
    const l = w();
    let d;
    if (A(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : Xe(u, (b) => {
        const T = b.getParent();
        return T !== null && Eb(T);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Ts(p) && (p = Xe(u, ue) ?? p);
      const g = p.getKey(), h = r.getElementByKey(g), m = vx(u, f);
      if (m && yC(m) && (d = m.getMarker()), h !== null && (ue(p) || bt(p) || Rs(p))) {
        o.current = p.getMarker(), a.current = d, e?.({
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
  return K(() => t.registerCommand(Kt, (l, d) => (c(), n(d), !1), Ne), [t, c]), K(() => $e(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Ab, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Ne), r.registerCommand(Pb, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Ne)), [c, r, e]), null;
}
function Gg(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function fn(e) {
  return e ? ve(e) ? e : Xe(e, (r) => ve(r)) ?? void 0 : void 0;
}
function Jg(e) {
  if (!A(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = fn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function au(e) {
  return A(e) && e.isCollapsed() && e.anchor.type === "element" || !A(e) && !Lo(e) ? !1 : e.getNodes().some((t) => he(t));
}
function Yg(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = fn(r);
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
function Xg(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = fn(r);
  if (!n)
    return !1;
  if (q(r)) {
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
function rf(e, t) {
  return !!Sc(e, t);
}
function Sc(e, t) {
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && q(n)) {
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
function vo(e, t) {
  if (!A(e))
    return !1;
  const r = fn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function mi(e) {
  return au(e) || Jg(e);
}
function Qg(e, t) {
  if (au(e) || Jg(e))
    return !0;
  if (!A(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Yg(e) && vo(e, "backward") || rf(e, "backward");
    case "deleteForward":
      return Xg(e) && vo(e, "forward") || rf(e, "forward");
    case "insertText":
      return !1;
  }
}
function Pv(e, t) {
  if (!(!A(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Sc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Yg(e) && vo(e, "backward")) {
        const n = fn(e.anchor.getNode());
        if (ve(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Sc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Xg(e) && vo(e, "forward")) {
        const i = fn(e.anchor.getNode())?.getNextSibling();
        if (ve(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function nf(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Lo(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!A(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!A(e) || e.isCollapsed())
    return !1;
  const r = fn(e.anchor.getNode()), n = fn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Zg(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else q(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function Nv(e) {
  const t = e.getPreviousSibling();
  if (!ve(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Zg(r) : Li(t) || t.selectStart();
}
function em(e) {
  return he(e) || He(e) ? [] : ve(e) ? e.getChildren().flatMap(em) : [e];
}
function wv(e) {
  const t = [];
  for (const r of e) {
    const n = em(r);
    n.length !== 0 && (ve(r) && t.length > 0 && t.push(ke(" ")), t.push(...n));
  }
  return t;
}
function sf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ov(e) {
  if (Array.isArray(e)) return e;
}
function Rv(e, t) {
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
function qv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $v(e, t) {
  return Ov(e) || Rv(e, t) || Iv(e, t) || qv();
}
function Iv(e, t) {
  if (e) {
    if (typeof e == "string") return sf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? sf(e, t) : void 0;
  }
}
const tm = Object.entries, of = Object.setPrototypeOf, Lv = Object.isFrozen, Dv = Object.getPrototypeOf, Uv = Object.getOwnPropertyDescriptor;
let at = Object.freeze, lt = Object.seal, di = Object.create, rm = typeof Reflect < "u" && Reflect, vc = rm.apply, Mc = rm.construct;
at || (at = function(t) {
  return t;
});
lt || (lt = function(t) {
  return t;
});
vc || (vc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Mc || (Mc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const ai = Ze(Array.prototype.forEach), Fv = Ze(Array.prototype.lastIndexOf), af = Ze(Array.prototype.pop), ci = Ze(Array.prototype.push), zv = Ze(Array.prototype.splice), sn = Array.isArray, ts = Ze(String.prototype.toLowerCase), Fa = Ze(String.prototype.toString), cf = Ze(String.prototype.match), Ji = Ze(String.prototype.replace), lf = Ze(String.prototype.indexOf), Kv = Ze(String.prototype.trim), Bv = Ze(Number.prototype.toString), jv = Ze(Boolean.prototype.toString), uf = typeof BigInt > "u" ? null : Ze(BigInt.prototype.toString), df = typeof Symbol > "u" ? null : Ze(Symbol.prototype.toString), rt = Ze(Object.prototype.hasOwnProperty), Yi = Ze(Object.prototype.toString), tt = Ze(RegExp.prototype.test), vn = Vv(TypeError);
function Ze(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return vc(e, t, n);
  };
}
function Vv(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Mc(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ts;
  if (of && of(e, null), !sn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (Lv(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Wv(e) {
  for (let t = 0; t < e.length; t++)
    rt(e, t) || (e[t] = null);
  return e;
}
function dt(e) {
  const t = di(null);
  for (const n of tm(e)) {
    var r = $v(n, 2);
    const i = r[0], s = r[1];
    rt(e, i) && (sn(s) ? t[i] = Wv(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = dt(s) : t[i] = s);
  }
  return t;
}
function Hv(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Bv(e);
    case "boolean":
      return jv(e);
    case "bigint":
      return uf ? uf(e) : "0";
    case "symbol":
      return df ? df(e) : "Symbol()";
    case "undefined":
      return Yi(e);
    case "function":
    case "object": {
      if (e === null)
        return Yi(e);
      const t = e, r = Jt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Yi(n);
      }
      return Yi(e);
    }
    default:
      return Yi(e);
  }
}
function Jt(e, t) {
  for (; e !== null; ) {
    const n = Uv(e, t);
    if (n) {
      if (n.get)
        return Ze(n.get);
      if (typeof n.value == "function")
        return Ze(n.value);
    }
    e = Dv(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Gv(e) {
  try {
    return tt(e, ""), !0;
  } catch {
    return !1;
  }
}
const ff = at(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), za = at(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ka = at(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Jv = at(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ba = at(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Yv = at(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), pf = at(["#text"]), hf = at(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ja = at(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), gf = at(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Xs = at(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Xv = lt(/{{[\w\W]*|^[\w\W]*}}/g), Qv = lt(/<%[\w\W]*|^[\w\W]*%>/g), Zv = lt(/\${[\w\W]*/g), eM = lt(/^data-[\-\w.\u00B7-\uFFFF]+$/), tM = lt(/^aria-[\-\w]+$/), mf = lt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), rM = lt(/^(?:\w+script|data):/i), nM = lt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), iM = lt(/^html$/i), sM = lt(/^[a-z][.\w]*(-[.\w]+)+$/i), yf = lt(/<[/\w!]/g), bf = lt(/<[/\w]/g), oM = lt(/<\/no(script|embed|frames)/i), aM = lt(/\/>/i), Pt = {
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
}, cM = function() {
  return typeof window > "u" ? null : window;
}, lM = function(t, r) {
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
}, kf = function() {
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
}, tn = function(t, r, n, i) {
  return rt(t, r) && sn(t[r]) ? pe(i.base ? dt(i.base) : {}, t[r], i.transform) : n;
};
function nm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : cM();
  const t = (z) => nm(z);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Pt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = Jt(f, "cloneNode"), g = Jt(f, "remove"), h = Jt(f, "nextSibling"), m = Jt(f, "childNodes"), b = Jt(f, "parentNode"), T = Jt(f, "shadowRoot"), C = Jt(f, "attributes"), R = o && o.prototype ? Jt(o.prototype, "nodeType") : null, S = o && o.prototype ? Jt(o.prototype, "nodeName") : null, $ = o && o.prototype ? Jt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const z = r.createElement("template");
    z.content && z.content.ownerDocument && (r = z.content.ownerDocument);
  }
  let W, B = "", _, V = !1, H = 0;
  const ge = function() {
    if (H > 0)
      throw vn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Q = function(y) {
    ge(), H++;
    try {
      return W.createHTML(y);
    } finally {
      H--;
    }
  }, Ie = function(y) {
    ge(), H++;
    try {
      return W.createScriptURL(y);
    } finally {
      H--;
    }
  }, xe = function() {
    return V || (_ = lM(u, i), V = !0), _;
  }, ir = r, Be = ir.implementation, Wr = ir.createNodeIterator, Hr = ir.createDocumentFragment, mn = ir.getElementsByTagName, Z = n.importNode;
  let N = kf();
  t.isSupported = typeof tm == "function" && typeof b == "function" && Be && Be.createHTMLDocument !== void 0;
  const ee = Xv, ce = Qv, Ee = Zv, st = eM, te = tM, Je = rM, sr = nM, Fi = sM;
  let Gr = mf, ne = null;
  const ut = pe({}, [...ff, ...za, ...Ka, ...Ba, ...pf]);
  let de = null;
  const Yn = pe({}, [...hf, ...ja, ...gf, ...Xs]);
  let Te = Object.seal(di(null, {
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
  })), yn = null, Xn = null;
  const Ht = Object.seal(di(null, {
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
  let Jr = !0, Yr = !0, Ks = !1, Xr = !0, $t = !1, Gt = !0, or = !1, zi = !1, bn = null, O = null, L = !1, j = !1, J = !1, ye = !1, Le = !0, je = !1;
  const ot = "user-content-";
  let ar = !0, Bs = !1, Qn = {}, cr = null;
  const ca = pe({}, [
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
  let Iu = null;
  const Lu = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let la = null;
  const Du = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), js = "http://www.w3.org/1998/Math/MathML", Vs = "http://www.w3.org/2000/svg", lr = "http://www.w3.org/1999/xhtml";
  let Zn = lr, ua = !1, da = null;
  const By = pe({}, [js, Vs, lr], Fa), Uu = at(["mi", "mo", "mn", "ms", "mtext"]);
  let fa = pe({}, Uu);
  const Fu = at(["annotation-xml"]);
  let pa = pe({}, Fu);
  const jy = pe({}, ["title", "style", "font", "a", "script"]);
  let Ki = null;
  const Vy = ["application/xhtml+xml", "text/html"], Wy = "text/html";
  let De = null, ei = null;
  const Hy = r.createElement("form"), zu = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, ha = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ei && ei === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = dt(y), Ki = // eslint-disable-next-line unicorn/prefer-includes
    Vy.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Wy : y.PARSER_MEDIA_TYPE, De = Ki === "application/xhtml+xml" ? Fa : ts, ne = tn(y, "ALLOWED_TAGS", ut, {
      transform: De
    }), de = tn(y, "ALLOWED_ATTR", Yn, {
      transform: De
    }), da = tn(y, "ALLOWED_NAMESPACES", By, {
      transform: Fa
    }), la = tn(y, "ADD_URI_SAFE_ATTR", Du, {
      transform: De,
      base: Du
    }), Iu = tn(y, "ADD_DATA_URI_TAGS", Lu, {
      transform: De,
      base: Lu
    }), cr = tn(y, "FORBID_CONTENTS", ca, {
      transform: De
    }), yn = tn(y, "FORBID_TAGS", dt({}), {
      transform: De
    }), Xn = tn(y, "FORBID_ATTR", dt({}), {
      transform: De
    }), Qn = rt(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? dt(y.USE_PROFILES) : y.USE_PROFILES : !1, Jr = y.ALLOW_ARIA_ATTR !== !1, Yr = y.ALLOW_DATA_ATTR !== !1, Ks = y.ALLOW_UNKNOWN_PROTOCOLS || !1, Xr = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $t = y.SAFE_FOR_TEMPLATES || !1, Gt = y.SAFE_FOR_XML !== !1, or = y.WHOLE_DOCUMENT || !1, j = y.RETURN_DOM || !1, J = y.RETURN_DOM_FRAGMENT || !1, ye = y.RETURN_TRUSTED_TYPE || !1, L = y.FORCE_BODY || !1, Le = y.SANITIZE_DOM !== !1, je = y.SANITIZE_NAMED_PROPS || !1, ar = y.KEEP_CONTENT !== !1, Bs = y.IN_PLACE || !1, Gr = Gv(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : mf, Zn = typeof y.NAMESPACE == "string" ? y.NAMESPACE : lr, fa = rt(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? dt(y.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, Uu), pa = rt(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? dt(y.HTML_INTEGRATION_POINTS) : pe({}, Fu);
    const v = rt(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? dt(y.CUSTOM_ELEMENT_HANDLING) : di(null);
    if (Te = di(null), rt(v, "tagNameCheck") && zu(v.tagNameCheck) && (Te.tagNameCheck = v.tagNameCheck), rt(v, "attributeNameCheck") && zu(v.attributeNameCheck) && (Te.attributeNameCheck = v.attributeNameCheck), rt(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (Te.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), lt(Te), $t && (Yr = !1), J && (j = !0), Qn && (ne = pe({}, pf), de = di(null), Qn.html === !0 && (pe(ne, ff), pe(de, hf)), Qn.svg === !0 && (pe(ne, za), pe(de, ja), pe(de, Xs)), Qn.svgFilters === !0 && (pe(ne, Ka), pe(de, ja), pe(de, Xs)), Qn.mathMl === !0 && (pe(ne, Ba), pe(de, gf), pe(de, Xs))), Ht.tagCheck = null, Ht.attributeCheck = null, rt(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? Ht.tagCheck = y.ADD_TAGS : sn(y.ADD_TAGS) && (ne === ut && (ne = dt(ne)), pe(ne, y.ADD_TAGS, De))), rt(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? Ht.attributeCheck = y.ADD_ATTR : sn(y.ADD_ATTR) && (de === Yn && (de = dt(de)), pe(de, y.ADD_ATTR, De))), rt(y, "ADD_URI_SAFE_ATTR") && sn(y.ADD_URI_SAFE_ATTR) && pe(la, y.ADD_URI_SAFE_ATTR, De), rt(y, "FORBID_CONTENTS") && sn(y.FORBID_CONTENTS) && (cr === ca && (cr = dt(cr)), pe(cr, y.FORBID_CONTENTS, De)), rt(y, "ADD_FORBID_CONTENTS") && sn(y.ADD_FORBID_CONTENTS) && (cr === ca && (cr = dt(cr)), pe(cr, y.ADD_FORBID_CONTENTS, De)), ar && (ne["#text"] = !0), or && pe(ne, ["html", "head", "body"]), ne.table && (pe(ne, ["tbody"]), delete yn.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw vn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw vn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const D = W;
      W = y.TRUSTED_TYPES_POLICY;
      try {
        B = Q("");
      } catch (G) {
        throw W = D, G;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (W = void 0, B = "") : (W === void 0 && (W = xe()), W && typeof B == "string" && (B = Q("")));
    at && at(y), ei = y;
  }, Ku = pe({}, [...za, ...Ka, ...Jv]), Bu = pe({}, [...Ba, ...Yv]), Gy = function(y, v, D) {
    return v.namespaceURI === lr ? y === "svg" : v.namespaceURI === js ? y === "svg" && (D === "annotation-xml" || fa[D]) : !!Ku[y];
  }, Jy = function(y, v, D) {
    return v.namespaceURI === lr ? y === "math" : v.namespaceURI === Vs ? y === "math" && pa[D] : !!Bu[y];
  }, Yy = function(y, v, D) {
    return v.namespaceURI === Vs && !pa[D] || v.namespaceURI === js && !fa[D] ? !1 : !Bu[y] && (jy[y] || !Ku[y]);
  }, Xy = function(y) {
    let v = b(y);
    (!v || !v.tagName) && (v = {
      namespaceURI: Zn,
      tagName: "template"
    });
    const D = ts(y.tagName), G = ts(v.tagName);
    return da[y.namespaceURI] ? y.namespaceURI === Vs ? Gy(D, v, G) : y.namespaceURI === js ? Jy(D, v, G) : y.namespaceURI === lr ? Yy(D, v, G) : !!(Ki === "application/xhtml+xml" && da[y.namespaceURI]) : !1;
  }, Qr = function(y) {
    ci(t.removed, {
      element: y
    });
    try {
      b(y).removeChild(y);
    } catch {
      if (g(y), !b(y))
        throw vn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ws = function(y) {
    Bi(y);
    const v = m(y);
    if (v) {
      const G = [];
      ai(v, (X) => {
        ci(G, X);
      }), ai(G, (X) => {
        try {
          g(X);
        } catch {
        }
      });
    }
    const D = C(y);
    if (D)
      for (let G = D.length - 1; G >= 0; --G) {
        const X = D[G], se = X && X.name;
        if (typeof se == "string")
          try {
            y.removeAttribute(se);
          } catch {
          }
      }
  }, kn = function(y, v) {
    try {
      ci(t.removed, {
        attribute: v.getAttributeNode(y),
        from: v
      });
    } catch {
      ci(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(y), y === "is")
      if (j || J)
        try {
          Qr(v);
        } catch {
        }
      else
        try {
          v.setAttribute(y, "");
        } catch {
        }
  }, Qy = function(y) {
    const v = C(y);
    if (v)
      for (let D = v.length - 1; D >= 0; --D) {
        const G = v[D], X = G && G.name;
        if (!(typeof X != "string" || de[De(X)]))
          try {
            y.removeAttribute(X);
          } catch {
          }
      }
  }, Bi = function(y) {
    const v = [y];
    for (; v.length > 0; ) {
      const D = v.pop();
      (R ? R(D) : D.nodeType) === Pt.element && Qy(D);
      const X = m(D);
      if (X)
        for (let se = X.length - 1; se >= 0; --se)
          v.push(X[se]);
    }
  }, Zy = function(y) {
    if (!Gt)
      return;
    const v = [y];
    for (; v.length > 0; ) {
      const D = v.pop(), G = R ? R(D) : D.nodeType;
      if (G === Pt.processingInstruction || G === Pt.comment && tt(bf, D.data)) {
        try {
          g(D);
        } catch {
        }
        continue;
      }
      if (G === Pt.element) {
        const se = D, Ce = De(S ? S(D) : D.nodeName);
        try {
          se.hasAttribute && se.hasAttribute("patchsrc") && se.removeAttribute("patchsrc"), se.hasAttribute && se.hasAttribute("for") && Ce !== "label" && Ce !== "output" && se.removeAttribute("for");
        } catch {
        }
      }
      const X = m(D);
      if (X)
        for (let se = X.length - 1; se >= 0; --se)
          v.push(X[se]);
    }
  }, ju = function(y) {
    let v = null, D = null;
    if (L)
      y = "<remove></remove>" + y;
    else {
      const se = cf(y, /^[\r\n\t ]+/);
      D = se && se[0];
    }
    Ki === "application/xhtml+xml" && Zn === lr && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const G = W ? Q(y) : y;
    if (Zn === lr)
      try {
        v = new d().parseFromString(G, Ki);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = Be.createDocument(Zn, "template", null);
      try {
        v.documentElement.innerHTML = ua ? B : G;
      } catch {
      }
    }
    const X = v.body || v.documentElement;
    return y && D && X.insertBefore(r.createTextNode(D), X.childNodes[0] || null), Zn === lr ? mn.call(v, or ? "html" : "body")[0] : or ? v.documentElement : X;
  }, Vu = function(y) {
    const v = $ ? $(y) : y.ownerDocument;
    return Wr.call(
      v || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Hs = function(y) {
    return y = Ji(y, ee, " "), y = Ji(y, ce, " "), y = Ji(y, Ee, " "), y;
  }, ga = function(y) {
    var v;
    y.normalize();
    const D = $ ? $(y) : y.ownerDocument, G = Wr.call(
      D || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = G.nextNode();
    for (; X; )
      X.data = Hs(X.data), X = G.nextNode();
    const se = (v = y.querySelectorAll) === null || v === void 0 ? void 0 : v.call(y, "template");
    se && ai(se, (Ce) => {
      ti(Ce.content) && ga(Ce.content);
    });
  }, Gs = function(y) {
    const v = S ? S(y) : null;
    return typeof v != "string" || De(v) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== C(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== R(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    y.childNodes !== m(y);
  }, ti = function(y) {
    if (!R || typeof y != "object" || y === null)
      return !1;
    try {
      return R(y) === Pt.documentFragment;
    } catch {
      return !1;
    }
  }, ji = function(y) {
    if (!R || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof R(y) == "number";
    } catch {
      return !1;
    }
  };
  function ur(z, y, v) {
    z.length !== 0 && ai(z, (D) => {
      D.call(t, y, v, ei);
    });
  }
  const eb = function(y, v) {
    return !!(Gt && y.hasChildNodes() && !ji(y.firstElementChild) && tt(yf, y.textContent) && tt(yf, y.innerHTML) || Gt && y.namespaceURI === lr && v === "style" && ji(y.firstElementChild) || y.nodeType === Pt.processingInstruction || Gt && y.nodeType === Pt.comment && tt(bf, y.data));
  }, tb = function(y, v, D) {
    if (!yn[v] && Ju(v) && (Te.tagNameCheck instanceof RegExp && tt(Te.tagNameCheck, v) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(v)))
      return !1;
    if (ar && !cr[v]) {
      const G = b(y), X = m(y);
      if (X && G) {
        const se = X.length;
        for (let Ce = se - 1; Ce >= 0; --Ce) {
          const Ue = y === D ? p(X[Ce], !0) : X[Ce];
          G.insertBefore(Ue, h(y));
        }
      }
    }
    return Qr(y), !0;
  }, Wu = function(y, v, D, G) {
    return y.length === 0 ? v : v === D || v === G ? dt(v) : v;
  }, Hu = function(y, v) {
    if (ur(N.beforeSanitizeElements, y, null), y !== v && b(y) === null)
      return Bs && Bi(y), !0;
    if (Gs(y))
      return Qr(y), !0;
    const D = De(S ? S(y) : y.nodeName);
    if (ne = Wu(N.uponSanitizeElement, ne, ut, bn), ur(N.uponSanitizeElement, y, {
      tagName: D,
      allowedTags: ne
    }), y !== v && b(y) === null)
      return Bs && Bi(y), !0;
    if (eb(y, D))
      return Qr(y), !0;
    if (yn[D] || !(Ht.tagCheck instanceof Function && Ht.tagCheck(D)) && !ne[D]) {
      const X = tb(y, D, v);
      return X === !1 && ur(N.afterSanitizeElements, y, null), X;
    }
    if ((R ? R(y) : y.nodeType) === Pt.element && !Xy(y) || (D === "noscript" || D === "noembed" || D === "noframes") && tt(oM, y.innerHTML))
      return Qr(y), !0;
    if ($t && y.nodeType === Pt.text) {
      const X = Hs(y.textContent);
      y.textContent !== X && (ci(t.removed, {
        element: y.cloneNode()
      }), y.textContent = X);
    }
    return ur(N.afterSanitizeElements, y, null), !1;
  }, Gu = function(y, v, D) {
    if (Xn[v] || Gt && v === "patchsrc" || Gt && v === "for" && y !== "label" && y !== "output" || Le && (v === "id" || v === "name") && (D in r || D in Hy))
      return !1;
    const G = de[v] || Ht.attributeCheck instanceof Function && Ht.attributeCheck(v, y);
    if (!(Yr && tt(st, v))) {
      if (!(Jr && tt(te, v))) {
        if (G) {
          if (!la[v]) {
            if (!tt(Gr, Ji(D, sr, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && y !== "script" && lf(D, "data:") === 0 && Iu[y])) {
                if (!(Ks && !tt(Je, Ji(D, sr, "")))) {
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
          !(Ju(y) && (Te.tagNameCheck instanceof RegExp && tt(Te.tagNameCheck, y) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(y)) && (Te.attributeNameCheck instanceof RegExp && tt(Te.attributeNameCheck, v) || Te.attributeNameCheck instanceof Function && Te.attributeNameCheck(v, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && Te.allowCustomizedBuiltInElements && (Te.tagNameCheck instanceof RegExp && tt(Te.tagNameCheck, D) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(D)))
        ) return !1;
      }
    }
    return !0;
  }, rb = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ju = function(y) {
    return !rb[ts(y)] && tt(Fi, y);
  }, nb = function(y, v, D, G) {
    if (W && typeof u == "object" && typeof u.getAttributeType == "function" && !D)
      switch (u.getAttributeType(y, v)) {
        case "TrustedHTML":
          return Q(G);
        case "TrustedScriptURL":
          return Ie(G);
      }
    return G;
  }, ib = function(y, v, D, G) {
    try {
      D ? y.setAttributeNS(D, v, G) : y.setAttribute(v, G), Gs(y) ? Qr(y) : af(t.removed);
    } catch {
      kn(v, y);
    }
  }, Yu = function(y) {
    ur(N.beforeSanitizeAttributes, y, null);
    const v = y.attributes;
    if (!v || Gs(y))
      return;
    de = Wu(N.uponSanitizeAttribute, de, Yn, O);
    const D = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: de,
      forceKeepAttr: void 0
    };
    let G = v.length;
    const X = De(y.nodeName);
    for (; G--; ) {
      const se = v[G], Ce = se.name, Ue = se.namespaceURI, kt = se.value, xt = De(Ce), ya = kt;
      let gt = Ce === "value" ? ya : Kv(ya);
      if (D.attrName = xt, D.attrValue = gt, D.keepAttr = !0, D.forceKeepAttr = void 0, ur(N.uponSanitizeAttribute, y, D), gt = D.attrValue, je && (xt === "id" || xt === "name") && lf(gt, ot) !== 0 && (kn(Ce, y), gt = ot + gt), Gt && tt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, gt)) {
        kn(Ce, y);
        continue;
      }
      if (xt === "attributename" && cf(gt, "href")) {
        kn(Ce, y);
        continue;
      }
      if (!D.forceKeepAttr) {
        if (!D.keepAttr) {
          kn(Ce, y);
          continue;
        }
        if (!Xr && tt(aM, gt)) {
          kn(Ce, y);
          continue;
        }
        if ($t && (gt = Hs(gt)), !Gu(X, xt, gt)) {
          kn(Ce, y);
          continue;
        }
        gt = nb(X, xt, Ue, gt), gt !== ya && ib(y, Ce, Ue, gt);
      }
    }
    ur(N.afterSanitizeAttributes, y, null);
  }, Js = function(y) {
    let v = null;
    const D = Vu(y);
    for (ur(N.beforeSanitizeShadowDOM, y, null); v = D.nextNode(); )
      if (ur(N.uponSanitizeShadowNode, v, null), Hu(v, y), Yu(v), ti(v.content) && Js(v.content), (R ? R(v) : v.nodeType) === Pt.element) {
        const X = T(v);
        ti(X) && (ma(X), Js(X));
      }
    ur(N.afterSanitizeShadowDOM, y, null);
  }, ma = function(y) {
    const v = [{
      node: y,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const D = v.pop();
      if (D.shadow) {
        Js(D.shadow);
        continue;
      }
      const G = D.node, se = (R ? R(G) : G.nodeType) === Pt.element, Ce = m(G);
      if (Ce)
        for (let Ue = Ce.length - 1; Ue >= 0; --Ue)
          v.push({
            node: Ce[Ue],
            shadow: null
          });
      if (se) {
        const Ue = S ? S(G) : null;
        if (typeof Ue == "string" && De(Ue) === "template") {
          const kt = G.content;
          ti(kt) && v.push({
            node: kt,
            shadow: null
          });
        }
      }
      if (se) {
        const Ue = T(G);
        ti(Ue) && v.push({
          node: null,
          shadow: Ue
        }, {
          node: Ue,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(z) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, D = null, G = null, X = null;
    if (ua = !z, ua && (z = "<!-->"), typeof z != "string" && !ji(z) && (z = Hv(z), typeof z != "string"))
      throw vn("dirty is not a string, aborting");
    if (!t.isSupported)
      return z;
    zi ? (ne = bn, de = O) : ha(y), (N.uponSanitizeElement.length > 0 || N.uponSanitizeAttribute.length > 0) && (ne = dt(ne)), N.uponSanitizeAttribute.length > 0 && (de = dt(de)), t.removed = [];
    const se = Bs && typeof z != "string" && ji(z);
    if (se) {
      Zy(z);
      const kt = S ? S(z) : z.nodeName;
      if (typeof kt == "string") {
        const xt = De(kt);
        if (!ne[xt] || yn[xt])
          throw Ws(z), vn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Gs(z))
        throw Ws(z), vn("root node is clobbered and cannot be sanitized in-place");
      try {
        ma(z);
      } catch (xt) {
        throw Ws(z), xt;
      }
    } else if (ji(z))
      v = ju("<!---->"), D = v.ownerDocument.importNode(z, !0), D.nodeType === Pt.element && D.nodeName === "BODY" || D.nodeName === "HTML" ? v = D : v.appendChild(D), ma(D);
    else {
      if (!j && !$t && !or && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return W && ye ? Q(z) : z;
      if (v = ju(z), !v)
        return j ? null : ye ? B : "";
    }
    v && L && Qr(v.firstChild);
    const Ce = se ? z : v;
    try {
      const kt = Vu(Ce);
      for (; G = kt.nextNode(); )
        Hu(G, Ce), Yu(G), ti(G.content) && Js(G.content);
    } catch (kt) {
      throw se && (Ws(z), ai(t.removed, (xt) => {
        xt.element && Bi(xt.element);
      })), kt;
    }
    if (se)
      return ai(t.removed, (kt) => {
        kt.element && Bi(kt.element);
      }), $t && ga(z), z;
    if (j) {
      if ($t && ga(v), J)
        for (X = Hr.call(v.ownerDocument); v.firstChild; )
          X.appendChild(v.firstChild);
      else
        X = v;
      return (de.shadowroot || de.shadowrootmode) && (X = Z.call(n, X, !0)), X;
    }
    let Ue = or ? v.outerHTML : v.innerHTML;
    return or && ne["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && tt(iM, v.ownerDocument.doctype.name) && (Ue = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + Ue), $t && (Ue = Hs(Ue)), W && ye ? Q(Ue) : Ue;
  }, t.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ha(z), zi = !0, bn = ne, O = de;
  }, t.clearConfig = function() {
    ei = null, zi = !1, bn = null, O = null, W = _, B = "";
  }, t.isValidAttribute = function(z, y, v) {
    ei || ha({});
    const D = De(z), G = De(y);
    return Gu(D, G, v);
  }, t.addHook = function(z, y) {
    typeof y == "function" && rt(N, z) && ci(N[z], y);
  }, t.removeHook = function(z, y) {
    if (rt(N, z)) {
      if (y !== void 0) {
        const v = Fv(N[z], y);
        return v === -1 ? void 0 : zv(N[z], v, 1)[0];
      }
      return af(N[z]);
    }
  }, t.removeHooks = function(z) {
    rt(N, z) && (N[z] = []);
  }, t.removeAllHooks = function() {
    N = kf();
  }, t;
}
var uM = nm();
function dM({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = Y(void 0), [n, i] = fe(void 0), s = me((o) => {
    r.current = o, i(o);
  }, []);
  return K(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const g = Gg(p);
      if (!g)
        return !1;
      const h = w();
      return e === "protected" ? h && Qg(h, g) ? (p.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, p);
    }, a = (p, g) => {
      const h = w(), m = r.current;
      if (m && h && nf(h, m)) {
        if (s(void 0), g.preventDefault(), p !== m.intent)
          return !0;
        const T = oe(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (T) {
            const C = T.getParent(), R = T.getPreviousSibling(), S = T.getNextSibling();
            T.remove(), R ? Zg(R) : S && E(S) ? S.select(0, 0) : C?.selectStart();
          }
        } else m.kind === "selection" ? A(h) && h.removeText() : ve(T) && Nv(T);
        return !0;
      }
      if (!h)
        return !1;
      const b = Pv(h, p);
      if (b) {
        if (b.kind === "verse") {
          const T = bp();
          T.add(b.node.getKey()), Nn(T);
        } else {
          const T = Os();
          T.anchor.set(b.node.getKey(), 0, "element"), T.focus.set(b.node.getKey(), b.node.getChildrenSize(), "element"), Nn(T);
        }
        return s({ key: b.node.getKey(), kind: b.kind, intent: p }), g.preventDefault(), !0;
      }
      if (A(h) && !h.isCollapsed() && au(h)) {
        const T = h.getNodes().filter(he).map((S) => S.getKey()), { anchor: C, focus: R } = h;
        return s({
          kind: "selection",
          intent: p,
          key: T[0],
          anchor: { key: C.key, offset: C.offset, type: C.type },
          focus: { key: R.key, offset: R.offset, type: R.type }
        }), g.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return !g || !mi(g) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, g) => {
      if (!p)
        return !1;
      const h = uM.sanitize(p), m = new DOMParser().parseFromString(h, "text/html"), b = wv(ek(t, m)), T = w();
      return A(T) && T.insertNodes(b), g.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return g && mi(g) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return g && mi(g) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        nf(w(), p) || s(void 0);
      });
    };
    return $e(
      t.registerCommand(Sr, o, we),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(Tr, c, Ne),
      t.registerCommand(gr, d, we),
      t.registerCommand(Nb, c, we),
      t.registerCommand(sl, u, we),
      t.registerCommand(Uo, c, we),
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
const yN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function fM({ textDirection: e }) {
  const [t] = ae();
  return pM(t, e), null;
}
function pM(e, t) {
  K(() => (xf(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && xf(e, t);
  })), [e, t]);
}
function xf(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function hM() {
  const [e] = ae();
  return gM(e), null;
}
function gM(e) {
  K(() => {
    if (!e.hasNodes([be, At, Me, We, mt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return $e(
      e.registerNodeTransform(We, mM),
      e.registerNodeTransform(We, (t) => yM(t, e)),
      e.registerNodeTransform(mt, Tf),
      e.registerNodeTransform(At, Tf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(mt, (t) => {
        xs($n("va"), t), xs($n("vp"), t);
      })
    );
  }, [e]);
}
function mM(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || F(r) || U(n) || U(r) || Se(n) || Se(r) || Fe(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  ie(e, le) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Re(n))
    return;
  if (he(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  he(r) && ql(e);
}
function yM(e, t) {
  const r = e.getParent();
  !Fe(r) || !e.isAttached() || mc(t, e.getKey()) && !mc(t, r.getKey()) && r.insertAfter(e);
}
function Tf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Se(t); )
    t = t.getLastChild();
  (U(t) || E(t) && Se(t.getParent())) && e.insertBefore(ke(" "));
}
function ia(e) {
  if (!F(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !$s(i)))
      return;
    const n = t.getParent();
    if (!n)
      return;
    if (!q(n) || !n.isInline())
      return e;
    t = n;
  }
}
function bM(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (q(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function kM() {
  const e = w();
  if (!(!A(e) || !e.isCollapsed()))
    return ia(bM(e.anchor));
}
function xM(e) {
  const t = w();
  let r;
  return A(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = im(e.target)), r ? ia(Xe(r, F)) : void 0;
}
function im(e) {
  const t = wb(e)?.anchorNode;
  if (pp(t))
    return Pi(t) ?? void 0;
}
function TM(e) {
  if (w())
    return;
  const t = im(e);
  return t ? ia(Xe(t, F)) : void 0;
}
function Cf(e) {
  const t = Xe(e.getNode(), F);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function CM() {
  const e = w();
  if (!A(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = Cf(t), i = Cf(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const _M = 500;
function SM(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function vM() {
  const e = w();
  if (!A(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (q(n))
    return ia(n.getChildAtIndex(t.offset));
}
function MM() {
  const [e] = ae(), t = ou(kM), r = Y(void 0);
  return K(() => {
    const n = (i) => {
      Tt(_t), wr(e, _t), t(i);
    };
    return $e(e.registerCommand(
      Sr,
      (i) => (r.current = SM(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      Ne
    ), e.registerCommand(Kt, () => {
      if (r.current !== void 0 && performance.now() - r.current < _M) {
        const o = vM();
        if (o)
          return n(o), !1;
      }
      if (CM())
        return Tt(_t), wr(e, _t), !1;
      const s = TM(e.getRootElement());
      return s && n(s), !1;
    }, wn), e.registerCommand(Do, (i) => {
      const s = xM(i);
      return s && n(s), !1;
    }, wn));
  }, [e, t]), null;
}
function EM({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = L_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return M(I_, { trigger: e, items: i });
}
function AM({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = Ve(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? M(wM, { trigger: e, harness: i }) : M(EM, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const PM = [" ", "*"];
function NM(e, t) {
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
function wM({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = fe(void 0), s = Y({ query: "", options: [] }), o = Y(0), a = me((f, p, g) => {
    const h = p.find((m) => m.kind === "note" && m.marker === f);
    if (h) {
      t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const m = w();
      A(m) && m.insertText(`${e}${f}${g ? " " : ""}`);
    });
  }, [r, t, e]);
  K(() => $e(r.registerCommand(Sr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const h = s.current.query;
        return h ? (a(h, n.items, !1), kp(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const m = w();
          A(m) && m.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const g = s.current.query;
      if (n.hasTextSelection) {
        const h = n.items.find((m) => m.marker === g);
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
  }, we), r.registerCommand(xp, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Or)), [r, e, t, n, a]);
  const c = me(() => i(void 0), []), l = me((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = me((f) => {
    const { markerMenuItem: p, applyOpts: g } = f;
    t.apply(p, g);
  }, [t]), u = Ve(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    NM(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && M(bg, { isOpen: !0, children: ({ placement: f }) => M(
    Tg,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? PM : void 0 },
    n.session
  ) });
}
function sm(e) {
  return e.replaceAll(I, "~").replace(/ {2,}/g, (r) => I.repeat(r.length));
}
function OM(e) {
  return e.replaceAll(I, " ").replaceAll("~", I);
}
function RM(e) {
  return e.replace(/ {2,}/g, " ");
}
let Mo;
function qM(e) {
  e && (Mo = e);
}
function Ec(e) {
  return zs(e);
}
function $M(e, t) {
  return e.isEmpty() ? fp : om(e.toJSON(), t);
}
function om(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Bo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return fp;
  if (r.some(QT)) {
    Mo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = am(r), i = Yt(n, t);
  return i ? { type: xr, version: kr, content: i } : void 0;
}
function IM(e, t) {
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
function LM(e) {
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
function DM(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = bh(r, a, c), Pe({
    type: qt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function UM(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = bh(t, o, a), Pe({
    type: mt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function FM(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Ec(r) && t) {
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
function zM(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function KM(e, t) {
  const { unknownAttributes: r } = e;
  return Pe({ type: Vh, ...r, content: t });
}
function BM(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Pe({ type: Gh, marker: r, ...n, content: t });
}
function jM(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Pe({
    type: Yh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function VM(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function WM(e, t) {
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
function fi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Pe({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Mh({ sid: n, eid: i, ...s }, o)
  });
}
function HM(e) {
  return e.text;
}
function GM(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function JM(e) {
  const { marker: t } = e;
  return {
    type: ho,
    marker: t === "" ? void 0 : t
  };
}
function _f(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function YM(e, t, r, n, i) {
  const s = er.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = fi({
      type: s,
      marker: hi,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = fi({
      type: s,
      marker: On,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = fi({
      type: s,
      marker: On
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = fi({
      type: s,
      marker: hi
    });
    i.push(l);
  }
  (!n || !Gp(n)) && t.forEach((l) => {
    const d = fi({
      type: s,
      marker: hi,
      eid: l
    });
    i.push(d);
  });
}
function Yt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, p = a, g = a, h = a, m = a;
    switch (a.type) {
      case Vt.getType():
        i.push(
          IM(
            l,
            Yt(l.children, t)
          )
        );
        break;
      case Mr.getType():
        i.push(LM(a));
        break;
      case qt.getType():
        i.push(
          DM(
            d,
            Yt(d.children, t)
          )
        );
        break;
      case At.getType():
      case mt.getType():
        i.push(UM(a));
        break;
      case be.getType():
        i.push(
          FM(
            u,
            Yt(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case it.getType():
        i.push(
          zM(
            f,
            Yt(f.children, t)
          )
        );
        break;
      case Hn.getType():
        i.push(
          KM(
            a,
            Yt(a.children, t)
          )
        );
        break;
      case Oi.getType():
        i.push(
          BM(
            a,
            Yt(a.children, t)
          )
        );
        break;
      case Ri.getType():
        i.push(
          jM(
            a,
            Yt(a.children, t)
          )
        );
        break;
      case Me.getType(): {
        const b = Yt(
          p.children,
          t,
          p.caller
        );
        i.push(
          WM(
            p,
            Ec(t) && p.category === void 0 ? VM(b) : b
          )
        );
        break;
      }
      case Fr.getType():
      case Ur.getType():
      case Zt.getType():
      case Tp.getType():
      case Ar.getType():
        break;
      case nt.getType():
        if (s = Yt(
          h.children,
          t,
          r,
          n
        ), s) {
          const b = h.typedIDs[on];
          if (b)
            YM(s, b, o, e[c + 1], i), o = b;
          else {
            const T = s.shift();
            T && (typeof T == "string" ? _f(i, T) : i.push(T)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case er.getType():
        i.push(fi(a));
        break;
      case We.getType():
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !qs(g.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        g.text !== I && !g.text.startsWith(ll) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[ws]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || g.text !== Ot(r))) {
          let b = HM(g);
          Ec(t) && (n && b.startsWith(I) && (b = b.slice(1)), b = RM(OM(b))), _f(i, b);
        }
        break;
      case Wn.getType():
        i.push(
          GM(
            m,
            Yt(m.children, t)
          )
        );
        break;
      case jr.getType():
        i.push(JM(a));
        break;
      case qi.getType():
        Mo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Mo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function am(e) {
  const t = e.findIndex((r) => Bo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = am(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const no = {
  initialize: qM,
  deserializeEditorState: $M
}, XM = /^sd\d*$/, QM = /* @__PURE__ */ new Set([
  ...Object.entries(nc).filter(
    ([e, t]) => t.category === x.TitlesHeadings && t.type === k.Paragraph && !XM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function ZM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (th(i) || gh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Sx(i)) {
      t && Eo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (bl(i) && QM.has(i.marker) && !Eo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    cm(i.children, t).forEach((s) => {
      const o = eE(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = tE(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function cm(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (lm(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Gp(i)) {
      const s = cm(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Sf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Sf(i, c.nodes)] });
      });
      return;
    }
    t && Eo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Sf(e, t) {
  return { ...e, children: t };
}
function lm(e) {
  return sg(e) && e.number !== "";
}
function Eo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => lm(r) || Eo(r)) : !1;
}
function eE(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function tE(e) {
  return {
    type: go,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: rg
  };
}
const vf = dm([]), rE = {
  type: Tp.getType(),
  version: 1
};
let cu = [], re, Un, um, Et;
function nE(e, t) {
  cu = [], oE(e), aE(t);
}
function iE(e = 0) {
}
function sE(e, t) {
  re = t ?? ta();
  let r;
  return e ? (e.type !== xr && Et?.warn(`This USJ type '${e.type}' didn't match the expected type '${xr}'.`), e.version !== kr && Et?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${kr}'.`
  ), e.content.length > 0 ? (r = wc(rn(e.content)), _s(re) && (r = ZM(r, Et))) : r = [vf]) : r = [vf], um?.(cu), {
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
function oE(e) {
  e && (Un = e), e?.addMissingComments && (um = e.addMissingComments);
}
function aE(e) {
  e && (Et = e);
}
function lu() {
  return zs(re);
}
function cE(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function lE(e) {
  let { marker: t } = e;
  t !== gs && Et?.warn(`Unexpected book marker '${t}'!`), t = t ?? gs;
  const { code: r } = e;
  (!r || !Vt.isValidBookCode(r)) && Et?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  re?.markerMode === "editable" || re?.markerMode === "visible" ? n.push(
    St("marker", qe(t) + " " + r + I)
  ) : re?.hasGutterParaMarkers && n.push(St("marker", qe(t) + I, !0));
  const i = cE(e.content);
  i && n.push(pt(lu() ? sm(i) : i));
  const s = ze(e, rx);
  return Pe({
    type: Vt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Zp
  });
}
function uE(e) {
  let { marker: t } = e;
  t !== uo && Et?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? uo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = ze(e, nx);
  let a;
  re?.markerMode === "visible" && (a = !0);
  const c = [
    pt(zt(t, r) ?? "")
  ];
  return re?.markerMode === "editable" && EE(i, s, c), re?.markerMode === "editable" ? Pe({
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
    version: rh
  }) : Pe({
    type: Mr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: ah
  });
}
function dE(e) {
  let { marker: t } = e;
  t !== fo && Et?.warn(`Unexpected verse marker '${t}'!`), t = t ?? fo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (W_(re) ?? At).getType(), c = re?.markerMode === "editable" ? fh : ig;
  let l, d;
  re?.markerMode === "editable" ? l = zt(t, r) : re?.markerMode === "visible" && (d = !0);
  const u = ze(e, mx);
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
function fE(e, t = [], r = !1) {
  let { marker: n } = e;
  be.isValidMarker(n, Un?.extraValidMarkers) || Et?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (re?.markerMode === "editable") {
    const [a] = t;
    xi(a) ? a.text = I + a.text : a && t.unshift(pt(I));
  }
  t.length === 0 && t.push(pt(Bt)), Ac(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = ze(e, ox);
  return s || _E(n, o, i), s || Pc(e.marker ?? "", i, !1, r), Pe({
    type: be.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: oh
  });
}
function dm(e) {
  return {
    type: ln.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: uh
  };
}
function pE(e, t = []) {
  let { marker: r } = e;
  it.isValidMarker(r, Un?.extraValidMarkers) || Et?.warn(`Unexpected para marker '${r}'!`), r = r ?? mr;
  const n = [];
  if ($i(re) && (re?.markerMode === "editable" ? n.push(
    yt(r),
    pt(I, vr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && n.push(
    St(
      "marker",
      qe(r) + I,
      re?.hasGutterParaMarkers
    )
  )), n.push(...t), lu()) {
    const s = n.find(
      (o) => !Tl(o) && !(xi(o) && o.text === I)
    );
    xi(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => I.repeat(o.length)));
  }
  const i = ze(e, hx);
  return Pe({
    type: it.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: dh
  });
}
function uu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function hE(e, t = []) {
  const r = ze(e, xT);
  return Pe({
    ...uu(),
    type: Hn.getType(),
    unknownAttributes: r,
    children: t,
    version: Wh
  });
}
function gE(e, t = []) {
  const r = ze(e, _T), n = e.marker ?? fc, i = [];
  return re?.markerMode === "editable" ? i.push(
    yt(n),
    pt(I, vr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && i.push(
    St(
      "marker",
      qe(n) + I,
      re?.hasGutterParaMarkers
    )
  ), i.push(...t), Pe({
    ...uu(),
    type: Oi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Jh
  });
}
function mE(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? pc, a = Dh(o, i) ?? o;
  re?.markerMode === "editable" ? s.push(
    yt(a),
    pt(I, vr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && s.push(
    St(
      "marker",
      qe(a) + I,
      re?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = ze(
    e,
    vT
  );
  return Pe({
    ...uu(),
    type: Ri.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Xh
  });
}
function yE(e, t) {
  const r = Nx(t);
  let n = () => {
  };
  return Un?.noteCallerOnClick && (n = Un.noteCallerOnClick), Pe({
    type: Zt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: dg
  });
}
function bE(e, t) {
  let { marker: r } = e;
  Me.isValidMarker(r, Un?.extraValidMarkers) || Et?.warn(`Unexpected note marker '${r}'!`), r = r ?? fl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Kl(re?.noteMode), a = ze(e, kk), c = re?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  re?.markerMode === "editable" ? (l = yt(r, "opening", !1, c), s || (d = yt(r, "closing"))) : re?.markerMode === "visible" && (l = St("marker", qe(r) + " "), s || (d = St("marker", et(r))));
  const u = [];
  let f;
  if (l && u.push(l), re?.markerMode === "editable" && !o)
    f = pt(Ot(i), void 0, c), u.push(f), ME(n, u), u.push(...t);
  else {
    const p = pt(I, vr, "token");
    f = yE(i, t), u.push(f, p, ...t.flatMap(kE(p)));
  }
  return d && u.push(d), Pe({
    type: Me.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: Fp
  });
}
function kE(e) {
  return (t) => Wp(t) ? [t] : [t, e];
}
function xE(e) {
  let { marker: t } = e;
  (!t || !er.isValidMarker(t, Un?.extraValidMarkers)) && Et?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = ze(e, dl), s = Eh(e);
  return Pe({
    type: er.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Lp
  });
}
function Mf(e, t = []) {
  return {
    type: nt.getType(),
    typedIDs: { [on]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function TE(e, t) {
  const { marker: r } = e, n = e.type, i = ze(e, Xk), s = [];
  if (re?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Uh(
      n,
      r,
      i
    );
    o && s.push(St("marker", o)), a && s.push(St("attribute", a)), s.push(...t), c && s.push(St("attribute", c)), l && s.push(St("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    xi(o) && (o.mode = "token");
  }), Pe({
    type: Wn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Yp
  });
}
function CE(e) {
  return {
    type: jr.getType(),
    marker: e,
    text: ss(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: re?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Bh
  };
}
function yt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Ar.getType(),
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
    type: We.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[ws] = { textType: t }), n;
}
function St(e, t, r = !1) {
  const n = {
    type: Ur.getType(),
    text: t,
    textType: e,
    version: Vp
  };
  return r && (n[ws] = { [gl.key]: !0 }), n;
}
function Ss(e, t) {
  return {
    type: Fr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Xp
  };
}
function Ac(e, t, r = !1) {
  re?.markerMode === "editable" ? t.push(yt(e, "opening", r)) : re?.markerMode === "visible" && t.push(St("marker", qe(e, r)));
}
function Pc(e, t, r = !1, n = !1) {
  re?.markerMode === "editable" ? r ? t.push(yt("", "selfClosing")) : t.push(yt(e, "closing", n)) : re?.markerMode === "visible" && t.push(
    St(
      "marker",
      r ? et("") : et(e, n)
    )
  );
}
function _E(e, t, r) {
  if (re?.markerMode !== "editable" || !t) return;
  const n = pr(t, zo(e));
  n && r.push(pt(n, "attribute"));
}
function Ef(e, t) {
  if (e.type !== "ms" || re?.markerMode !== "editable" && re?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = ze(e, dl), o = Ah(
    n,
    i,
    s,
    Eh(e)
  ), a = pr(o, Ko(r ?? ""));
  if (!a) return;
  const c = I + a;
  re?.markerMode === "editable" ? t.push(pt(c, "attribute")) : t.push(St("attribute", c));
}
function SE(e, t) {
  const r = e.marker ?? "";
  if (re?.markerMode === "editable") {
    const n = [];
    Ac(r, n), Ef(e, n), Pc(r, n, !0), t.push(Ss("milestone", n));
  } else
    Ac(r, t), Ef(e, t), Pc(r, t, !0);
}
function Af(e, t, r) {
  t !== void 0 && r.push(
    Ss(e, [
      yt(e, "opening"),
      pt(I + t, "attribute"),
      yt(e, "closing")
    ])
  );
}
function vE(e, t) {
  re?.markerMode === "editable" && (Af("va", e.altnumber, t), Af("vp", e.pubnumber, t));
}
function ME(e, t) {
  e !== void 0 && t.push(
    Ss("cat", [
      yt("cat", "opening"),
      pt(I + e, "attribute"),
      yt("cat", "closing")
    ])
  );
}
function EE(e, t, r) {
  e !== void 0 && r.push(
    Ss("ca", [
      yt("ca", "opening"),
      pt(I + e, "attribute"),
      yt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Ss("cp", [
      yt("cp", "opening"),
      pt(I + t, "attribute")
    ])
  );
}
function Pf(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function AE(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Nf(e, t) {
  t.marker === On && t.sid !== void 0 && e.push(t.sid), t.marker === hi && t.eid !== void 0 && AE(e, t.eid);
}
function Nc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Mf(o, [...n])] : o, c = e[i];
  Nf(n, c);
  const l = Nc(
    e.slice(i + 1, s),
    Pf(t, i + 1),
    c.marker === On,
    n
  ), d = Mf(l, [...n]), u = e[s];
  Nf(n, u);
  const f = Nc(
    e.slice(s + 1),
    Pf(t, s + 1),
    u.marker === On,
    n
  );
  return [...a, d, ...f];
}
function rn(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(pt(lu() ? sm(i) : i));
    else if (!i.type)
      Et?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Vt.getType():
          n.push(lE(i));
          break;
        case qt.getType():
          n.push(uE(i));
          break;
        case mt.getType():
          re?.hasSpacing || n.push(rE), n.push(dE(i)), vE(i, n);
          break;
        case be.getType():
          n.push(
            fE(i, rn(i.content, !0), t)
          );
          break;
        case it.getType():
          n.push(pE(i, rn(i.content)));
          break;
        case Me.getType():
          n.push(bE(i, rn(i.content)));
          break;
        case er.getType():
          Dp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && cu?.push(i.sid)), n.push(xE(i)), SE(i, n);
          break;
        case jr.getType():
          n.push(CE(i.marker ?? ""));
          break;
        case Vh:
          n.push(hE(i, rn(i.content)));
          break;
        case Gh:
          n.push(gE(i, rn(i.content)));
          break;
        case Yh:
          n.push(mE(i, rn(i.content)));
          break;
        default:
          Et?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(TE(i, rn(i.content)));
      }
  }), Nc(n, r);
}
function wc(e) {
  const t = e.findIndex(
    (n) => th(n) || gh(n) || bl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    CT(n)
  );
  if (t >= 0) {
    const n = wc(e.slice(0, t)), i = e[t], s = wc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || sg(n)))
    return [dm(e)];
  return e;
}
const _r = {
  initialize: nE,
  reset: iE,
  serializeEditorState: sE
};
function fm(e) {
  if (e && !P(e)) {
    if (E(e)) return e;
    if (q(e))
      for (const t of e.getChildren()) {
        const r = fm(t);
        if (r) return r;
      }
  }
}
function PE() {
  const e = w();
  if (!A(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !P(t) ? Ln(t) : void 0) && E(t)) {
      const i = ke(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Ti(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = fm(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(I) ? I : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of pm(e)) {
    if (!Ln(t)) continue;
    Ti(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(I) && r.setTextContent(n.slice(I.length));
  }
  return !0;
}
function pm(e) {
  const [t, r] = nl(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || P(a) || ie(a, le) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function NE() {
  const e = w();
  if (!A(e)) return !1;
  const t = e.focus.getNode();
  return Ln(t) ? ve(Pl(t)) : !1;
}
function hm() {
  let e = w();
  if (!A(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !Ol(t, e.anchor.offset)) {
    const c = t.getParent();
    if (U(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = w(), !A(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!E(t) || P(t) || !Ln(t)) return !1;
  const r = Pl(t);
  if (!ve(r)) return !1;
  const n = ke(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  Ti(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return U(a) ? Nl(a) : o.select(0, 0), !0;
}
const gm = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${mh(Ke().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = Ch(e), r = Il(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Ox(0, o);
        const a = dC(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Rx(c) && xl(parseInt(n, 10), c);
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
function Oc(e, t) {
  return Me.isValidMarker(e, t) || !!gm[e] || it.isValidMarker(e, t) || be.isValidMarker(e, t);
}
function wE(e, t) {
  return be.isNoteContentMarker(e) ? !1 : be.isValidMarker(e, t);
}
function mm(e, t, r, n, i, s) {
  const o = pg(
    e,
    void 0,
    void 0,
    t,
    n ?? ta(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function Rc(e, t, r, n, i, s, o) {
  if (Me.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = mm(
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
  const a = LE(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = w();
      A(d) && (tg(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = Pd(u, _r, r), g = ka(p);
      if (A(d)) {
        const h = d.anchor.getNode(), m = h.getParent(), b = Ln(h), T = d.anchor.key === d.focus.key;
        if (U(g) && b && T && !Va(g, o))
          qE(
            d,
            g,
            h,
            r?.markerMode === "editable"
          );
        else if (U(g) && !T && !Va(g, o) && $E(d))
          IE(d, g, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          DE(
            d,
            () => ka(p)
          );
        else if (q(g) && !g.isInline()) {
          const C = d.insertParagraph();
          if (C) {
            const R = C.getChildren();
            g.append(...R), C.replace(g), ve(g) && Li(g) || g.selectStart();
          }
        } else if (U(g) && E(h) && !P(h) && U(h.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Va(g, o)) {
          const C = h.getParent();
          if (U(C)) {
            const R = d.anchor.offset;
            if (R === 0) h.insertBefore(g);
            else if (R >= h.getTextContentSize()) h.insertAfter(g);
            else {
              const [$] = h.splitText(R);
              $.insertAfter(g);
            }
            g.getChildren().forEach(($) => {
              P($) && $.setNested(!0);
            });
            const S = g.getChildren().find(($) => E($) && !P($));
            S && E(S) ? S.select(
              S.getTextContentSize(),
              S.getTextContentSize()
            ) : g.selectEnd();
          }
        } else if (E(h) && !P(h) && d.isCollapsed() && (F(m) || U(m) && F(m.getParent()))) {
          const C = U(m) ? m : void 0, R = C ? OE(h, d.anchor.offset) : [];
          let $ = (C ?? h).insertAfter(g);
          if (Er(g)) {
            const W = {
              ...r || ta(),
              markerMode: "hidden"
            }, B = Pd(
              u,
              _r,
              W
            ), _ = ka(B);
            $ = $.insertAfter(_);
          }
          if (R.length > 0 && C) {
            const W = Ao(C).append(...R);
            $.insertAfter(W), C.isEmpty() && C.remove();
          } else E($.getNextSibling()) || $.insertAfter(ke(I));
          q($) && $.selectEnd();
        } else if (d.insertNodes([g]), GE(g), f) {
          const C = bp();
          C.add(g.getKey()), Nn(C);
        } else if (U(g)) {
          const C = g.getChildren().find((R) => E(R) && !P(R));
          C && E(C) ? C.select(
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
function OE(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Va(e, t) {
  return ((t ?? mo).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function RE(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(ft(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function qE(e, t, r, n) {
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
    const [o, a] = Mi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Ti(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(I) && i.setTextContent(I + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !P(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function $E(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || U(n)) continue;
    if (!E(n) || n.getType() !== We.getType() || ie(n, le) === "attribute") return !1;
    const i = Pl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Ln(n) && (r = !0);
  }
  return r;
}
function IE(e, t, r) {
  const n = pm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Ln(a)) return;
    Ti(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(I) && c.setTextContent(l.slice(I.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(I) || i.setTextContent(I + i.getTextContent());
  const s = t.getChildren().find((a) => E(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function LE(e, t) {
  let r = gm[e];
  return r || (it.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: it.getType(), marker: e, content: [] }] })
  } : be.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: be.getType(), marker: e };
      return (be.isValidFootnoteMarker(e) || be.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function DE(e, t) {
  const r = e.getNodes(), [n, i] = Mi(e);
  let s;
  r.forEach((o, a) => {
    if (q(s) && s.isParentOf(o))
      return;
    const c = ym(
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
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((u) => P(u) && u.getMarkerSyntax() === "opening") && RE(s, U(s.getParent()))), FE(c, s, l);
  }), (E(s) || q(s)) && s.selectEnd();
}
function Mi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function du(e) {
  return Se(e) || F(e) || F(e.getParent());
}
function ym(e, t, r, n, i) {
  if (!du(e)) {
    if (E(e))
      return UE(e, t, r, n, i);
    if (q(e) && e.isInline())
      return e;
  }
}
function UE(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function FE(e, t, r) {
  if (E(t)) {
    const n = qc(e, t);
    t.setTextContent(n), e.remove();
  } else if (q(t)) {
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
    qc(e, t), r && U(t) && t.getChildren().some((s) => P(s)) && E(e) && !P(e) && !e.getTextContent().startsWith(I) && e.setTextContent(I + e.getTextContent());
  }
}
function qc(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    ql(n), E(n) || t.insertBefore(ke(" "));
  }
  return r;
}
function bm(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = Fn(d, t);
    if (!f) return !1;
    const p = E(d) ? d.getTextContentSize() : 0;
    if (wf(f, r), E(d) && d.isAttached()) {
      const g = d.getTextContentSize(), h = Math.max(p - g, 0), m = Math.max(0, Math.min(u - h, g)), b = w();
      A(b) && b.setTextNodeRange(d, m, d, m);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Mi(e);
  if (!pu(n, t, s, o)) return !1;
  const a = fu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = Fn(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = Cm(u, a);
    f && (wf(f, r), l = !0);
  }), _m(a, i), l;
}
function wf(e, t) {
  e.getChildren().forEach((n) => {
    Wt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Bt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    E(n) && i.startsWith(I) && n.setTextContent(i.slice(I.length));
  }), ec(e);
}
function fu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = ym(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function Fn(e, t) {
  let r = e, n;
  for (; r && !ve(r); ) {
    if (F(r)) return;
    !n && U(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function km(e) {
  const t = Xe(
    e,
    (r) => F(r) || ve(r)
  );
  return F(t);
}
function xm(e) {
  return e.filter(
    (t) => !du(t) && (E(t) || q(t) && t.isInline())
  );
}
function zE(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || du(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function KE(e, t, r) {
  return e.getChildren().some(
    (n) => q(n) && t.some((i) => n.isParentOf(i)) && !Tm(n, r)
  );
}
function pu(e, t, r, n, i) {
  const s = xm(e), o = zE(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Fn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !KE(l, s, o);
  });
}
function Tm(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Wt(r));
}
function Cm(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (q(d) && t.some((u) => d.isParentOf(u))) {
      if (!Tm(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Wt(n[s - 1]) && (s -= 1), o < n.length - 1 && Wt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Ao(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Ao(e).append(...c)), e;
}
function Ao(e) {
  return Ob(e);
}
function _m(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!A(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function BE(e, t, r) {
  if (e.isCollapsed()) {
    const l = Fn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (hd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Mi(e);
  if (!pu(n, r, i, s, t)) return !1;
  const o = fu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = Fn(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = Cm(d, o);
    u && (hd(u, t), c = !0);
  }), c;
}
function jE(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = Mi(e);
  if (!!!i?.some(
    (m) => pu(s, m, o, a)
  ) && !VE(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const b = w();
    A(b) && bm(b, m, n) && (l = !0);
  });
  const d = w();
  if (!A(d)) return l;
  const u = d.isBackward(), [f, p] = Mi(d), g = fu(
    d.getNodes(),
    f,
    p
  );
  if (g.length === 0) return l;
  const h = g.filter(
    (m) => !km(m) && !Fn(m, t)
  );
  return h.length > 0 && (WE(h).forEach((m) => HE(m, t)), l = !0), _m(g, u), l;
}
function VE(e, t) {
  return xm(e).some(
    (r) => !km(r) && !Fn(r, t)
  );
}
function WE(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function HE(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => U(a) && a.getMarker() === t
  ), s = i ? Ao(i) : qr(t);
  e[0].insertBefore(s), s.append(...e), i === r || qc(e[0], s);
}
function GE(e) {
  he(e) && (ql(e.getPreviousSibling()), ag(e.getNextSibling()));
}
const Sm = {
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
}, Of = "psc-active-text", Qs = "psc-empty-text";
function JE({ viewOptions: e }) {
  const [t] = ae(), r = Y(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return K(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Of), r.current = o, o && t.getElementByKey(o)?.classList.add(Of);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Do,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Qs}`);
          if (!c) return !1;
          const l = Pi(c);
          if (!he(l)) return !1;
          const d = l.getParent();
          if (!q(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        vt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = Wa(), f = YE(), p = [], g = [];
          return Ke().getChildren().forEach((h) => {
            if (!q(h)) return;
            const { emptyKeys: m, nonEmptyKeys: b } = QE(h);
            p.push(...m), g.push(...b);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: g };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(Qs) : t.getElementByKey(u)?.classList.add(Qs);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(Qs));
      }),
      t.registerCommand(
        al,
        () => (i(void 0), !1),
        vt
      ),
      t.registerCommand(
        Rb,
        () => {
          const o = t.getEditorState().read(Wa);
          return o !== r.current && i(o), !1;
        },
        vt
      )
    ];
    return i(t.getEditorState().read(Wa)), $e(...s);
  }, [t, n]), null;
}
function Wa() {
  return XE(w() ?? void 0)?.getKey();
}
function YE() {
  const e = w();
  if (!A(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!q(n)) return;
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
function XE(e) {
  if (A(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function QE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!he(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (he(c)) break;
      if (!(jt(c) || P(c)) && c.getTextContent().replaceAll(oo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function $c(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function vm(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !mp(e, n, i);
}
function Mm(e, t) {
  return e.length <= t ? e : e.slice(0, hu(e, t));
}
function hu(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of zb(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const ZE = 16;
function eA(e, { $isHidden: t, $measure: r } = {}) {
  const n = (T) => t ? gu(T, t).length : T.getTextContent().length;
  r ??= n;
  const i = w();
  if (!A(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Po(s), l = Po(o), d = i.getNodes(), u = new Map(d.map((T) => [T.getKey(), nA(T)])), f = d.length > 0 ? u.get(d[0].getKey()) : void 0, p = f && tA(s, f) ? f : void 0, g = (T) => {
    const C = T > 0 ? rA(d, u, p, c, l, T, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), C ? i.focus.set(C.node.getKey(), C.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!C;
  };
  let h = Math.min(e, n(i));
  if (g(h) && r(i) <= e) return !0;
  let m = 0, b = 0;
  h -= 1;
  for (let T = 0; T < ZE && m <= h; T++) {
    const C = Math.floor((m + h) / 2);
    g(C) && r(i) <= e ? (b = C, m = C + 1) : h = C - 1;
  }
  return g(b), !0;
}
function Ic(e) {
  return e.isToken() || Fs(e) || Ae(e.getParent());
}
function tA(e, t) {
  const r = q(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && hr(r.getKey(), 0, "text").isBefore(e);
}
function rA(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, d, u;
  const f = /* @__PURE__ */ new Map(), p = (h) => {
    const m = t.get(h.getKey());
    return m && r?.is(m) ? void 0 : m;
  }, g = (h) => {
    let m = u ? u.endBefore : h;
    for (; ; ) {
      const b = iA(m, e, n);
      if (!b || !m || b.node.is(m.node)) return b;
      const T = p(b.node);
      if (!T || T.is(p(m.node))) return b;
      m = f.get(T.getKey());
    }
  };
  for (let h = 0; h <= a; h++) {
    const m = e[h], b = p(m);
    if (u && !u.node.is(b) && (d && u.node.isParentOf(d.node) && (d = u.endBefore), u = void 0), b && !u && (u = { node: b, endBefore: d }, f.set(b.getKey(), d)), !o?.(m)) {
      if (q(m) && !m.isInline()) {
        if (!l) {
          if (c + 1 > s) return g(d);
          c += 1;
        }
        l = !m.isEmpty();
        continue;
      }
      if (l = !1, E(m)) {
        const T = h === 0 ? n : 0, C = h === a ? i : m.getTextContentSize(), R = C - T, S = Ic(m);
        if (S && c + R > s) return g(d);
        if (!S && c + R >= s) {
          const $ = hu(m.getTextContent(), T + (s - c));
          return g({ node: m, offset: Math.max(T, $) });
        }
        c += R, d = { node: m, offset: C };
      } else if (jn(m) || Bn(m)) {
        const T = m.getTextContentSize();
        if (c + T > s) return g(d);
        c += T;
      }
    }
  }
  return g(d);
}
function nA(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (F(r) || eu(r)) && (t = r);
  return t;
}
function iA(e, t, r) {
  if (!e) return e;
  const n = Xe(e.node, (m) => q(m) && !m.isInline()), i = q(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((m) => m.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let m = o; m <= a; m++)
    l.push(c.length), c += i[m].getTextContent();
  const d = l[s - o], u = d + e.offset, f = hu(c, u);
  if (f === u) return e;
  const p = (m) => t[0]?.is(m) ?? !1;
  if (Ic(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= d) {
    const m = f - d;
    return m >= (p(e.node) ? r : 0) ? { ...e, offset: m } : void 0;
  }
  const g = s > o ? i[s - 1] : void 0;
  if (!g || !t.some((m) => m.is(g))) return;
  if (Ic(g))
    return { node: g, offset: p(g) ? r : 0 };
  const h = f - l[0];
  return h >= (p(g) ? r : 0) ? { node: g, offset: h } : void 0;
}
function gu(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, d) => {
    if (!t(l)) {
      if (q(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, E(l)) {
        const u = l.getTextContent();
        o ? a += u : a += u.slice(
          d === 0 ? Po(i) : 0,
          d === n ? Po(s) : u.length
        );
      } else (jn(l) || Bn(l)) && (d !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function Lc(e) {
  const t = e.getParent();
  return !!t && Xe(t, (r) => F(r) && !!r.getIsCollapsed()) !== null;
}
function Em(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    ht(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), q(i)) for (const { node: s } of Vn(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function sA(e) {
  return e.getNodes().some(
    (t) => jn(t) || F(t) || he(t) || He(t) || eu(t)
  );
}
function Po(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return q(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const nr = String.raw`\w-`, Am = "a-z0-9", oA = `[a-z][${Am}]*`, aA = new RegExp(
  String.raw`^\\(\+?[${nr}]+)[ \u00A0]$`
), Pm = new RegExp(String.raw`^\\(\+?[${nr}]+)$`), cA = new RegExp(String.raw`^\\\+?[${nr}]*\*$`), lA = new RegExp(
  String.raw`^\\(\+?[${nr}]+)(?:[ \u00A0]|$)`
), uA = new RegExp(
  String.raw`^\\(\+?)([${nr}]+)`
), dA = new RegExp(
  String.raw`\\\+?[${nr}]+(?:\\?\*|[ \u00A0])`
), fA = new RegExp(
  String.raw`\\\+?[${nr}]*$`
), pA = new RegExp(
  String.raw`^\\(${oA})( |$)`
), hA = new RegExp(
  String.raw`\\[${Am}+*]*$`,
  "i"
);
function Nm(e) {
  const t = e.getParent();
  if (!F(t) || t.getIsCollapsed() !== !1 || !Rp(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!P(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const No = "usfm:", wm = "usfmopen", Om = "usfmclosed";
function gA(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const mA = new RegExp(
  [No, wm, Om].map(gA).join("|")
), yA = "\uFEFF", bA = /^usfm_(.+)$/;
function kA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function xA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function TA(e) {
  return e.startsWith(No) ? xA(e.slice(No.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Rm(e) {
  for (const t of e.classList) {
    const r = bA.exec(t);
    if (r) return r[1];
  }
}
function CA(e) {
  const t = Rm(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function _A(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(No)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(wm) && !n.contains(Om)) && Rm(r) !== void 0)
      return !0;
  }
  return !1;
}
function qm(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(TA(e.nodeValue ?? ""));
    return;
  }
  if (!kA(e)) return;
  const { classList: n } = e, i = (d) => e.childNodes.forEach((u) => qm(u, d, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? CA(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function SA(e) {
  if (!mA.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !_A(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => qm(n, !1, r)), r.join("").replaceAll(yA, "").replaceAll(I, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function vA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ie(e, le);
  if (r === "attribute" || r === vr || Nm(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (bt(o) || Ae(o) || Fe(o)) return;
  const n = t.startsWith(I) && U(e.getParent()), i = n ? t.slice(1) : t, s = (n ? I : "") + i.replace(/ (?=[ \u00A0])/g, I).replace(new RegExp("(?<=\\u00A0) ", "g"), I);
  s !== t && e.setTextContent(s);
}
function MA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function EA(e, t) {
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
function Dc(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? SA(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(MA(s)) : ""),
    isInternal: EA(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Rf = String.raw`\\(?:\+?[${nr}]+\*?|\*)`, AA = new RegExp(
  String.raw`(?<=${Rf})\u00A0|\u00A0(?=${Rf})`,
  "g"
);
function mu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(AA, " ").replaceAll(I, "~");
}
const $m = new RegExp(
  String.raw`\\c(?![${nr}])[ \u00A0]*[^\s\\]*`,
  "g"
), Im = new RegExp(String.raw`\\id(?![${nr}])[^\n\\]*`, "g"), PA = new RegExp(
  String.raw`^(?:${$m.source}|${Im.source})`
);
function yu(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace($m, "").replace(Im, "");
    return PA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function Uc(e) {
  if (E(e) && ie(e, le) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Re(t)) return !0;
  return !1;
}
function NA(e) {
  return Uc(e.anchor.getNode()) || Uc(e.focus.getNode());
}
function wA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && Uc(t.getNode());
}
function OA(e, t) {
  const n = wA(e) ? t : mu(yu(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function RA(e, t = !1, r = () => {
}) {
  const n = Dc(e, an()._config.namespace);
  if (!n) return !1;
  const i = w(), s = A(i) && NA(i);
  if (!s && n.isInternal || t && A(i) && mi(i))
    return !1;
  const { text: o } = n;
  if (!o || !A(i)) return !1;
  if (e?.preventDefault(), s)
    return OA(i, o), !0;
  const a = mu(yu(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = an();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(us, void 0), d === "") return;
    const f = w();
    A(f) && f.insertText(d);
  }), !0;
}
function qA(e) {
  if (e.getTextContent() !== I) return !1;
  const t = e.getParent();
  return F(t) ? !ht(e.getPreviousSibling()) : !1;
}
function $A(e, t) {
  if (t || e.getTextContent() !== I) return "";
  const r = e.getParent();
  if (!F(r) || !ht(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function IA(e) {
  const t = e.getParent();
  return (F(t) ? t.getCaller() : void 0) || ds;
}
function LA(e) {
  const t = e.getParent();
  return !t || dn(t) === void 0;
}
function bu(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = nl(e);
  let l = "", d = !0;
  for (const u of t) {
    if (q(u) && !u.isInline()) {
      !d && LA(u) && (l += `
`), d = !u.isEmpty();
      continue;
    }
    if (d = !1, ht(u))
      (u !== n || !e.isCollapsed()) && (l += (u === r ? "" : " ") + IA(u));
    else if (E(u)) {
      let f = u.getTextContent();
      u === r ? u === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : u === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += qA(u) ? "" : f.replaceAll(I, " ") + $A(u, u === n);
    } else (jn(u) || Bn(u)) && (u !== n || !e.isCollapsed()) && (l += u.getTextContent().replaceAll(I, " "));
  }
  return l;
}
function Lm(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function DA(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => bt(r) || Ae(r)
    )
  );
}
function UA(e) {
  const t = w();
  if (!A(t) || t.isCollapsed()) return;
  const r = bu(t), n = {
    "text/plain": r,
    "text/html": Lm(r)
  };
  if (ra() || DA(t)) return n;
  const i = Bb(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function qf(e, t, r, n) {
  const i = w();
  if (!A(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Lg();
  const s = UA(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], Dm(e, t, i, s, r, n)) : !1;
}
function Dm(e, t, r, n, i, s) {
  const o = $c(s);
  if (o !== void 0 && vm(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), Fc(e, t, { "text/plain": Mm(a, o) })) : Fc(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function Fc(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || Kb(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function zc(e, t) {
  const r = zl();
  if (!r?.end) return;
  const n = FA(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = ea(r);
        return i ? bu(i) : void 0;
      },
      { editor: n.editor }
    );
}
const Ha = /* @__PURE__ */ new WeakMap();
function FA(e, t) {
  const r = e.getEditorState();
  if (Ha.has(r)) {
    const i = Ha.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = zA(r, t);
  return Ha.set(r, n), n;
}
function zA(e, t) {
  const r = Ql(Jl);
  if (!r) return;
  const n = no.deserializeEditorState(e, t);
  if (!n) return;
  const i = qb({
    namespace: "markers-view-copy",
    nodes: [nt, ...Wl],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    _r.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function KA({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = ae();
  return K(() => {
    const n = (i, s) => {
      const o = w();
      if (!A(o) || o.isCollapsed()) return !1;
      const a = zc(r, e);
      return a === void 0 ? !1 : Dm(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": Lm(a) },
        s,
        t
      );
    };
    return $e(
      r.registerCommand(yi, (i) => n(i, !1), we),
      r.registerCommand(Tr, (i) => n(i, !0), we)
    );
  }, [r, e, t]), null;
}
const $f = /* @__PURE__ */ new WeakMap();
function BA({
  limit: e,
  viewOptions: t
}) {
  const [r] = ae(), n = Y($c(e)), i = Y(t), s = Y(!1), o = Y(void 0);
  return K(() => {
    n.current = $c(e), i.current = t, o.current?.();
  }, [e, t]), K(() => {
    let a, c;
    const l = (b) => {
      const T = n.current;
      if (T === void 0) return;
      const C = $f.get(b);
      if (b.defaultPrevented && C === void 0) return;
      const R = r.getRootElement();
      if (!R) return;
      const S = R.ownerDocument.getSelection();
      if (!S || !WA(S, R)) return;
      b.preventDefault();
      const $ = Mm(
        C ?? S.toString().replaceAll(I, " "),
        T
      );
      $f.set(b, $);
      const W = b.clipboardData;
      if (W) {
        if (!$) {
          C !== void 0 && W.clearData();
          return;
        }
        W.setData("text/plain", $);
      }
    }, d = (b) => {
      n.current !== void 0 && Ib(b, "a", { ctrlKey: !bi, metaKey: bi }) && (GA(c?.activeElement, r.getRootElement()) || b.preventDefault());
    }, u = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", d, !0), c = void 0;
    }, f = () => {
      const b = n.current === void 0 ? void 0 : a;
      b !== c && (u(), c = b, c?.addEventListener("copy", l), c?.addEventListener("keydown", d, !0));
    };
    o.current = f;
    const p = (b) => (b?.preventDefault(), !0), g = (b) => {
      const T = n.current;
      if (T === void 0 || (s.current = !1, vm(r, b))) return !1;
      if (T <= 0) return p(b);
      const C = w();
      if (Lo(C))
        return C.getTextContent().length + Em(C.getNodes()) <= T ? !1 : p(b);
      if (!A(C) || C.isCollapsed()) return !1;
      const R = jA(r, i.current);
      return R.$size(C) <= T ? !1 : (eA(T, R.options), C.isCollapsed() ? p(b) : (r.isEditable() || kp(() => VA(r)), s.current = !0, !1));
    }, h = (b, T) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const C = w();
      if (!A(C) || C.isCollapsed()) return !1;
      const R = T && r.isEditable() && !sA(C);
      return Fc(
        b && typeof b == "object" && "clipboardData" in b ? b : null,
        r,
        { "text/plain": gu(C, Lc) },
        R ? () => C.removeText() : void 0
      );
    }, m = $e(
      r.registerCommand(yi, g, Ne),
      r.registerCommand(Tr, g, Ne),
      r.registerCommand(
        yi,
        (b) => h(b, !1),
        Or
      ),
      r.registerCommand(
        Tr,
        (b) => h(b, !0),
        Or
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        $b,
        (b) => n.current === void 0 ? !1 : (b?.preventDefault(), !0),
        Ne
      ),
      r.registerRootListener((b) => {
        a = b?.ownerDocument ?? void 0, f();
      })
    );
    return () => {
      m(), o.current = void 0, u();
    };
  }, [r]), null;
}
function jA(e, t) {
  if (zs(t)) {
    const n = (i) => bu(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && zc(e, r) !== void 0) {
    const n = (i) => zc(e, r)?.length ?? gu(i, Lc).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + Em(n.getNodes()),
    options: { $isHidden: Lc }
  };
}
function VA(e) {
  e.getEditorState().read(() => {
    const t = w(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!A(t) || !r) return;
    const n = If(e, t.anchor), i = If(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function If(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = Lb(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = q(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function WA(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const HA = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function GA(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? HA.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const JA = /^\+/;
function ku(e, t) {
  const r = t.replace(JA, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Um(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Fm(e, t) {
  return Um(e, t) !== void 0;
}
function Kc(e, t) {
  const r = Um(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function wo(e, t, r) {
  const n = q(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function YA(e, t, r, n, i) {
  const s = ku(n, t);
  if (!s) {
    wo(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && wo(e, "invalid", i);
}
function as(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || YA(s, o, t, r, n), as(s, t, r, n, i || o === "xq");
    } else if (he(s)) {
      if (i) continue;
      const o = ku(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else F(s) ? as(s, s.getMarker(), r, n, i) : Fe(s) || q(s) && as(s, t, r, n, i);
}
function XA(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = ku(e, a);
    if (!c) {
      wo(o, "unknown", r), Kc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Kc(n, l) || wo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ke().getChildren())
    Fe(o) || (bt(o) || He(o) ? i(o, o.getMarker()) : ue(o) ? (i(o, o.getMarker()), s(o) && as(o, o.getMarker(), e, r, !1)) : q(o) && s(o) && as(o, "p", e, r, !1));
  return r;
}
function QA(e) {
  return !!e?.includes("(basic)");
}
function ZA(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function zm(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Oc(e, t);
}
function xu(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Km(e, t) {
  const r = [];
  for (const n of t) {
    const i = xu(e, n);
    i && Kc(r, i);
  }
  return r;
}
function io(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: ZA(e.description),
    isBasic: QA(e.description)
  };
}
function e1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Bc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : e1(e.marker, t.marker);
}
function jc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Km(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && zm(i.marker, r)
  ).filter((i) => {
    const s = xu(e, i.marker);
    return s !== void 0 && Fm(n, s);
  }).map((i) => io(i, "paragraph")).sort(Bc);
}
function t1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => zm(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => io(c, "character")).sort(Bc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => io(c, "character")),
    ...a.map((c) => io(c, "note"))
  ].sort(Bc);
}
function r1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function n1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function i1(e, t, r) {
  return [
    ...r1(e, t.openCharMarkers),
    ...t1(e, t, r)
  ].sort(n1);
}
function s1(e, t, r) {
  if (t.source === "paragraph") return jc(e, t, r);
  const n = i1(e, t, r);
  return n.length > 0 ? n : jc(e, t, r);
}
function o1(e, t, r) {
  const n = jc(e, t, r), i = Km(e, t.previousParaMarkers), s = xu(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Fm(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const ct = "￼";
function Bm(e) {
  return e.length > 1 && e.startsWith(I) && e.charAt(1) !== ct ? e.slice(1) : e;
}
function Lf(e) {
  return Tl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function jm(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = _r.serializeEditorState(
    {
      type: xr,
      version: kr,
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
  for (; Lf(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Ot(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && Lf(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function Vm(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function Wm(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([d]) => d !== "closed")
  ), o = _r.serializeEditorState(
    {
      type: xr,
      version: kr,
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            {
              ...s,
              type: "note",
              marker: e.getMarker(),
              caller: e.getCaller(),
              ...n !== void 0 && { category: n },
              content: t
            },
            ...r
          ]
        }
      ]
    },
    i
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((d) => d.type === Me.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function Zs(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Xi(e, t) {
  fA.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += ct;
}
function Ft(e) {
  return e.replaceAll(I, " ");
}
function a1(e, t, r = !1) {
  if (zs(t)) return Ft(e);
  if (e === I) return " ";
  const n = r && e.startsWith(I), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(I, "~");
}
function cs(e) {
  const t = e.getTextContent();
  return zr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Tu(e, t) {
  const r = e[t];
  if (!Ye(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Wo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Hm(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Cu(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = ys(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function _u(e) {
  return !!e.getUnknownAttributes();
}
function sa(e, t) {
  const r = t(e)?.type;
  return r === k.Milestone || r === void 0 && hl(e);
}
function Gm(e, t) {
  return Ye(e) ? !sa(e.getMarker(), t) : F(e) || Fe(e) ? !0 : Oe(e) ? _u(e) : U(e) ? Jm(e, t) : !1;
}
function Jm(e, t) {
  if (Bx(e)) return !0;
  const r = e.getMarker();
  return Pk(r) || t(r) !== void 0 || c1(e) && !l1(e) ? !1 : !u1(e);
}
function c1(e) {
  const t = e.getParent();
  return t !== null && Nt(t) !== void 0;
}
function l1(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function u1(e) {
  const t = e.getChildren().filter((i) => P(i) && i.getMarker() === e.getMarker()).filter(P);
  if (t.some((i) => !Kr(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const Dt = "", Ut = "";
function Df(e) {
  return e.flatMap((t) => Re(t) ? t.getChildren() : [t]);
}
function rs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ye(s)) {
      const o = Tu(e, i);
      sa(s.getMarker(), r) && Hm(o) ? (t.push(
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
      ), rs(Df(o), t, r), t.push(Ut)) : t.push(ct), i += o.length;
    } else if (Oe(s)) {
      const o = Cu(e, i);
      _u(s) ? t.push(ct) : (t.push(
        Dt,
        "verse",
        Ft(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), rs(Df(o), t, r), t.push(Ut)), i += o.length;
    } else P(s) ? t.push(Dt, "marker", Ft(s.getTextContent()), Ut) : Vr(s) ? t.push(Dt, "unmatched", Ft(s.getTextContent()), Ut) : Gm(s, r) ? t.push(ct) : Bn(s) ? t.push(" ") : E(s) ? t.push(
      Ft(
        n ? Bm(cs(s)) : cs(s)
      )
    ) : U(s) ? (t.push(Dt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), rs(s.getChildren(), t, r, !0), t.push(Ut)) : q(s) ? (t.push(Dt, s.getType()), rs(s.getChildren(), t, r), t.push(Ut)) : t.push(ct);
  }
}
function Di(e, t) {
  const r = [];
  return rs(e, r, t), r.join("");
}
function Lr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Ei(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Su(e) {
  return e.type ?? "";
}
function Ym(e, t, r) {
  return t === "closing" ? et(e, r) : t === "selfClosing" ? et("") : qe(e, r);
}
function Ga(e, t) {
  const r = e[t];
  if (!(!r || Su(r) !== "attribute-run"))
    return Lr(r) ?? [];
}
function Ui(e, t) {
  const r = [];
  return ns(e, r, t), r.join("");
}
function ns(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Su(s);
    if (o === "ms") {
      const l = s, d = Ga(e, i + 1);
      d && sa(l.marker ?? "", r) ? (t.push(
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
      ), ns(d, t, r), t.push(Ut), i += 1) : t.push(ct);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(ct);
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
      let d = 0, u = Ga(e, i + 1 + d);
      for (; u; )
        ns(u, t, r), d++, u = Ga(e, i + 1 + d);
      t.push(Ut), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Dt,
        "marker",
        Ft(
          Ym(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(Dt, "char", JSON.stringify(l.unknownAttributes ?? null)), ns(Lr(s) ?? [], t, r, !0), t.push(Ut);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(ct);
      continue;
    }
    if (o === "unmatched") {
      t.push(Dt, "unmatched", Ft(Ei(s) ?? "")), t.push(Ut);
      continue;
    }
    const a = Ei(s);
    if (a !== void 0) {
      t.push(Ft(n ? Bm(a) : a));
      continue;
    }
    const c = Lr(s);
    c ? (t.push(Dt, o), ns(c, t, r), t.push(Ut)) : t.push(ct);
  }
}
function Ai(e) {
  let t = 0;
  for (const r of e) {
    const n = Lr(r);
    if (n) {
      t += Ai(n);
      continue;
    }
    const i = Ei(r);
    if (i !== void 0)
      for (const s of i) s === ct && t++;
  }
  return t;
}
function vs(e, t, r, n, i) {
  zn(e.getChildren(), t, r, n, i);
}
function zn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      Zs(t, a, Ft(a.getTextContent()));
    else if (Ye(a)) {
      s();
      const c = Tu(e, o);
      sa(a.getMarker(), r) && Hm(c) ? zn(c, t, r, n) : Xi(t, [a, ...c]), o += c.length;
    } else if (F(a) || Fe(a))
      s(), Xi(t, [a]);
    else if (Oe(a)) {
      s();
      const c = Cu(e, o);
      _u(a) ? Xi(t, [a, ...c]) : (Zs(t, a, Ft(cs(a))), zn(c, t, r, n)), o += c.length;
    } else if (U(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && Jm(a, r) ? Xi(t, [a]) : vs(a, t, r, n, { pending: !0 });
    else if (Bn(a))
      s(), Zs(t, a, " ");
    else if (E(a)) {
      const c = zr(a) || ie(a, le) === "attribute", l = s() && !c;
      Zs(
        t,
        a,
        c ? Ft(cs(a)) : a1(cs(a), n, l)
      );
    } else q(a) ? vs(a, t, r, n, i) : (s(), Xi(t, [a]));
  }
}
function vu(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== k.Unknown && n !== k.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Fe(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return vs(e, i, t, r), i;
}
function Mu(e, t) {
  let r = 0;
  const n = (i) => {
    if (E(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(ct);
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
    } else q(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function Vc(e, t = []) {
  for (const r of e)
    Oe(r) ? t.push(r) : q(r) && Vc(r.getChildren(), t);
  return t;
}
function Eu(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === ct && t++;
    else q(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Jn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === ct && t++;
    else r.content && (t += Jn(r.content));
  return t;
}
function d1(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), q(s) && vs(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const Ms = /\s/;
function Xm(e) {
  return e.filter(oa).length;
}
function oa(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return E(t) && !P(t) && ie(t, le) === "attribute";
}
function f1(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return P(t) || oa(e);
}
function Uf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && oa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      Ms.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Au(e, t, r) {
  const n = Uf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !f1(i) ? Uf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Xm(e.spans) };
}
function Ja(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function p1(e) {
  const t = oe(e.key);
  if (!P(t)) return !1;
  const r = t.getParent();
  return U(r) ? (r.selectNext(0, 0), !0) : !1;
}
function h1(e) {
  const t = oe(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Oe(t) ? Cu(r, n) : Ye(t) ? Tu(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Qm(e, t, r) {
  const { text: n, spans: i } = e, s = Xm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && !Ja(u);
    if (!(o && oa(u))) {
      if (d) {
        if (!p) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let g = 0; g < f; g++) {
        const h = n[u.start + g];
        if (c === 0 && (l === 0 || !Ms.test(h))) {
          if (p) {
            a = { key: u.key, offset: g };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? Ms.test(h) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (p) {
          a = { key: u.key, offset: f };
          break;
        }
        d = !0;
      }
    }
  }
  if (!a) {
    const u = i[i.length - 1];
    if (u && Ja(u) && p1(u) || u?.isSentinel && h1(u)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Ja(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const u = oe(a.key);
    if (u && E(u)) {
      u.select(a.offset, a.offset);
      return;
    }
  }
  r.find(q)?.selectStart();
}
function Zm(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(q)?.selectStart();
      return;
    }
    Qm(
      d1(e, n, i, s),
      t,
      e
    );
  }
}
function g1(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    e.find(q)?.selectStart();
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  zn(e, o, n, i), Qm({ text: o.text, spans: o.spans }, t, e);
}
function ey(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const h of e) {
    const m = vu(h, n, r);
    if (!m)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const b = s.text.length;
    m.spans.forEach(
      (T) => s.spans.push({ ...T, start: T.start + b, end: T.end + b })
    ), s.sentinels.push(...m.sentinels), s.text += m.text;
  }
  let o, a = !1;
  const c = w();
  if (A(c)) {
    for (let h = c.anchor.getNode(); h; h = h.getParent())
      if (e.some((m) => m.is(h))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Au(s, c.anchor.key, c.anchor.offset));
  }
  const l = Dr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Jn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = _r.serializeEditorState(
    { type: xr, version: kr, content: l },
    r
  );
  if (Ui(d.root.children, n) === Di(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((h) => Ps(h));
  if (Eu(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Vc(e).map((h) => ({
    number: h.getNumber(),
    sid: h.getSid()
  })), p = e[0];
  u.forEach((h) => p.insertBefore(h)), Mu(u, s.sentinels), e.forEach((h) => h.remove());
  const g = Vc(u);
  for (let h = 0; h < f.length && h < g.length; h++)
    g[h].getNumber() === f[h].number && g[h].setSid(f[h].sid);
  return Zm(
    u,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((h) => h.getKey()))
  ), !0;
}
function ty(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Me.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!P(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(ht(s) || E(s) && s.getTextContent() === Ot(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const d = n[a - 1];
    if (!P(d) || d.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return zn(c, l, t, r), { out: l, contentNodes: c };
}
function ry(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(ct)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function m1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = ty(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = w();
  if (A(d)) {
    for (let S = d.anchor.getNode(); S; S = S.getParent())
      if (e.is(S)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Au(o, d.anchor.key, d.anchor.offset));
  }
  const u = Dr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Jn(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = u;
  if (u.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], g = ry(p), h = Vm(e, p);
  if (h)
    return y1(
      e,
      h,
      g,
      o.sentinels,
      t,
      l
    );
  const m = jm(e, p, g, r);
  if (m.failure !== void 0)
    return m.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      m.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Ai(m.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== g;
  if (b && e.setCategory(g), Ui(m.children, n) === Di(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const T = m.children.map((S) => Ps(S));
  if (Eu(T) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const C = a[0];
  if (C)
    T.forEach((S) => C.insertBefore(S));
  else {
    const S = e.getChildren().find(($) => P($) && $.getMarkerSyntax() === "closing");
    T.forEach(($) => S ? S.insertBefore($) : e.append($));
  }
  Mu(T, o.sentinels);
  const R = new Set(o.sentinels.flat().map((S) => S.getKey()));
  return a.forEach((S) => {
    R.has(S.getKey()) || S.remove();
  }), g1(
    T,
    c,
    l,
    n,
    r,
    R
  ), !0;
}
function y1(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = Wm(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || Ai(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const d = l.map((g) => Ps(g)), [u] = d;
  if (!F(u) || Eu(d) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const g of d)
    f.insertAfter(g), f = g;
  Mu(d, i);
  const p = e.getChildren();
  return e.append(...u.getChildren()), p.forEach((g) => g.remove()), e.setCaller(u.getCaller()).setCategory(u.getCategory()).setUnknownAttributes(u.getUnknownAttributes()).setIsCollapsed(u.getIsCollapsed()), u.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? kc(e, a) : gg(e, { isContentChange: !0 })), !0;
}
const ny = /* @__PURE__ */ new Set(["ca", "cp"]), Pu = "cp";
function iy(e) {
  if (!Cr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (vs(e, t, yr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Dr(r, { getMarker: yr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Pu)
  );
}
function aa(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (U(r) && ny.has(r.getMarker()) || iy(r)) {
      t.push(r);
      continue;
    }
    ue(r) && r.getMarker() === Pu && t.push(r);
    break;
  }
  return t;
}
function b1(e) {
  const t = (n) => U(n) && ny.has(n.getMarker()) || iy(n);
  if (t(e) || ue(e) && e.getMarker() === Pu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ae(n)) return n;
      if (!t(n)) return;
    }
}
function sy(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = aa(e);
  if (n.some((s) => ue(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (zn(e.getChildren(), i, t, r), zn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function k1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...aa(e)], o = sy(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (A(l)) {
    for (let g = l.anchor.getNode(); g; g = g.getParent())
      if (s.some((h) => h.is(g))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Au(o, l.anchor.key, l.anchor.offset));
  }
  const d = Dr(o.text, { getMarker: n }), [u] = d;
  if (d.length === 0 || typeof u != "object" || u.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Jn(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (u.sid = e.getSid());
  const f = _r.serializeEditorState(
    { type: xr, version: kr, content: d },
    r
  );
  if (Ui(f.root.children, n) === Di(s, n)) {
    let g = !1;
    return e.getNumber() !== (u.number ?? "") && (e.setNumber(u.number ?? ""), g = !0), e.getAltnumber() !== u.altnumber && (e.setAltnumber(u.altnumber), g = !0), e.getPubnumber() !== u.pubnumber && (e.setPubnumber(u.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const p = f.root.children.map((g) => Ps(g));
  return Ae(p[0]) ? (p.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), Zm(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Es(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Fe(n)) return;
    !t && (F(n) || ue(n) || Ae(n)) && (t = n), Db(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? b1(r) : void 0) ?? t;
}
function Xt(e, t) {
  const r = Es(e);
  return r ? F(r) ? m1(r, t) : Ae(r) ? k1(r, t) : ey([r], t) : !1;
}
const x1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Ff(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !x1.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function so(e, t) {
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
          t.push(`\\${n}`), Ff(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), so(r.content, t), Ff(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), so(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), so(r.content, t);
      }
    }
}
function zf(e, t, r) {
  const n = Es(e);
  if (!ue(n)) return !1;
  const i = w();
  if (!A(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = vu(n, t, r);
  if (!o) return !1;
  const a = Dr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    Ms.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  so(a, l);
  for (const d of l.join("").replaceAll(I, "~")) {
    if (Ms.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function Nu(e, t) {
  return oy(e, t, k.Paragraph);
}
function T1(e, t) {
  return oy(e, t, k.Character);
}
function oy(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== k.Unknown ? i === r : !(Me.isValidMarker(n) || hl(n));
}
function C1(e) {
  return [ft(e), Ls()];
}
function wu(e) {
  tr(e, 2);
}
function _1(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Ou(e) {
  const t = _1(e);
  e.splice(0, 0, C1(e.getMarker())), t && wu(e);
}
function Oo(e, t) {
  e.setMarker(t), Ou(e), wu(e);
}
function S1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!zr(n)) {
    if (E(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(I), Ct(n, le, vr), n.setMode("token");
      return;
    }
    if (Sh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Ls());
  }
}
function Kf(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : q(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function ls(e) {
  for (let t = e; t; t = t.getParent())
    if (ue(t)) return t;
}
function v1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = ls(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = ls(r.getNode())?.is(s) ?? !1, a = ls(n.getNode())?.is(s) ?? !1;
    return !(o && !Kf(r, s, "start") || a && !Kf(n, s, "end"));
  });
}
function Wc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!A(r) || r.isCollapsed()))
    for (const n of v1(r)) t.add(n.getKey());
}
function M1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!A(r) || !r.isCollapsed()) return;
  const n = ls(r.focus.getNode());
  n && t.add(n.getKey());
}
function E1(e) {
  const t = w();
  !A(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (Wc(e), t.removeText());
}
const A1 = new RegExp(
  String.raw`^\\\+?([${nr}]+)(?:[ \u00A0]|$)`
);
function P1(e, t) {
  const r = A1.exec(e.getTextContent());
  return !!r && Nu(r[1], t);
}
function N1(e, t) {
  if (!$i(t.viewOptions)) return;
  if (Wt(e.getFirstChild())) {
    S1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (P1(e, t.getMarker)) return;
    Ou(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ue(o) && !o.is(e))) {
      Oo(e, mr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ue(r)) {
    const n = e.getChildren().filter((a) => !zr(a)), i = w();
    let s = !1;
    if (A(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ls(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || q(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && tr(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Oo(e, mr);
}
function w1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = pr(t, zo(e.getMarker()));
  return r === "" ? void 0 : r;
}
function ay(e) {
  const t = e.getChildren().filter((s) => !P(s) && ie(s, le) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(I) && r.setTextContent(r.getTextContent().slice(1));
  const n = w1(e);
  n && t.push(ke(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function O1(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && q(t) ? r = t.getChildAtIndex(e.offset) : P(t) && e.offset === 0 ? r = t : E(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), U(r) && (r = r.getFirstChild()), !P(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!U(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function R1() {
  const e = w();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = O1(e.anchor), r = t?.getParent();
  if (!t || !U(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), wi(n) && n.getTextContent().startsWith(I) && n.setTextContent(` ${n.getTextContent().slice(I.length)}`), ay(r), E(n) && n.isAttached() && n.select(0, 0), !0;
}
function q1(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !P(c) && c.getTextContent() === Ot(s)
    ), a = Vn(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (E(c) && c.getTextContent() === Ot(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function $1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    ay(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Xt(e, t);
}
function cy(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && $i(r)) {
    Oo(e, t);
    return;
  }
  vg(e, t);
}
function ly() {
  const e = w();
  if (!A(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = uy(e);
    return t !== "removed" ? t : (Hc(), "handled");
  }
  return Hc() ? "handled" : "declined";
}
function I1(e, t) {
  if (!t) return e;
  const r = pA.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== k.Paragraph ? e : e.slice(r[0].length);
}
function Bf(e, t) {
  const r = w();
  if (!A(r)) return "declined";
  if (r.isCollapsed()) {
    if (!dy())
      return "declined";
  } else {
    const s = uy(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => I1(s, t)
  );
  jf(n ?? "");
  for (const s of i)
    Hc(), jf(s);
  return "handled";
}
function L1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Pi(n);
  if (!i) return !1;
  const s = Nt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function uy(e) {
  const t = Nt(e.anchor.getNode()), r = Nt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), D1() ? "removed" : "needs-plain-split");
}
function jf(e) {
  if (e === "") return;
  const t = w();
  A(t) && t.insertText(e);
}
function D1() {
  const e = w();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = Nt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function dy() {
  const e = w();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Nt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Hc() {
  const e = w();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = dy();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = qr("fp", { closed: "false" });
  i.append(ft("fp"));
  const s = E(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Ti(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [d] = l;
    d && (qx(d), i.append(d));
  }
  return i.getChildren().every(P) && i.append(ke(Bt)), fy(i), !0;
}
function fy(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (E(t)) {
    const r = Ho(t);
    t.select(r, r);
    return;
  }
  if (q(t)) {
    fy(t);
    return;
  }
  e.selectEnd();
}
function U1(e) {
  const t = [];
  let r = e;
  for (; r; )
    U(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function F1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ke().getChildren()) {
    if (t && n.is(t)) break;
    (bt(n) || He(n) || ue(n)) && r.push(n.getMarker());
  }
  return r;
}
function z1(e) {
  let t = e;
  for (; q(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function K1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Wt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && zr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(z1(i)) && r === 0 : !1;
}
function B1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Wt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && zr(i) && t.is(i) && r === 0;
}
function j1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function V1() {
  const e = w();
  if (!A(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Xe(t, ue), s = !n && (!i || B1(i, t, r)) ? "paragraph" : "character", o = Nt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: F1(t),
    openCharMarkers: U1(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Ol(t, r),
    anchorRect: j1()
  };
}
function W1() {
  const e = w();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = hA.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function H1(e, t, r) {
  cy(e, t, r), wu(e);
}
function G1(e, t, r) {
  const n = w();
  if (!A(n)) return;
  const i = n.focus.getNode(), s = Xe(i, ue);
  if (t === "backslash" && s && K1(s, i, n.focus.offset)) {
    H1(s, e, r);
    return;
  }
  hy(e, r);
}
function J1(e, t) {
  const r = w();
  return !A(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function py(e) {
  const t = w();
  return A(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function Y1(e, t, r, n) {
  if (A(w()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && W1(), e.kind === "closeTag") {
    py(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && ly() !== "declined") return;
  if (e.kind === "paragraph" && it.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    G1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Me.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return mm(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  Rc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: an(), reference: r });
}
function hy(e, t) {
  const r = w();
  if (!A(r)) return;
  const n = $i(t);
  if (hm()) {
    const s = w();
    if (!A(s)) return;
    const o = Xe(s.anchor.getNode(), ue);
    if (!o) return;
    o.setMarker(e), n && Ou(o);
    return;
  }
  const i = r.insertParagraph();
  ue(i) && (n ? Oo(i, e) : i.setMarker(e));
}
function X1() {
  const [e] = ae();
  return K(() => e.registerCommand(Cp, () => !0, vt), [e]), null;
}
function Q1(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = lA.exec(e)?.[1];
  return r === void 0 ? !1 : !Nu(r, t);
}
function gy(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !Q1(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ue(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== k.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ue(i))
    return [i, r];
}
function my(e, t) {
  const r = gy(e, t.getMarker);
  return r !== void 0 && ey(r, t);
}
function Z1(e, t) {
  const r = w();
  A(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function yy(e) {
  const t = uA.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function eP(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = yy(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function tP(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (F(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if (U(n)) {
      Nl(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Vf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = yy(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  tP(e);
}
function Wf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function by(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Xt(e, r);
  const n = eP(e), i = e.getParent();
  if (ue(i)) {
    if (!Nu(t, r.getMarker))
      return my(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Xt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Wf(s, t) && Vf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || F(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? T1(t, r.getMarker) : Me.isValidMarker(s)))
      return Xt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Xt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (Z1(c, et(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Wf(a, s) && Vf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Xt(e, r);
}
function rP(e) {
  const t = w();
  if (!A(t)) return !1;
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
function nP(e, t) {
  const r = e.getTextContent();
  if (Kr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Re(e.getParent()) && Cl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !rP(e)) {
    zx(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = aA.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), by(e, n[1], t);
      return;
    }
    if (cA.test(r)) {
      t.pendingKeys.delete(e.getKey()), Xt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = et(e.getMarker(), e.getNested());
    if (U(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ke(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function iP(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (jh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function ky(e) {
  if (!Rp(e)?.length)
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
const Qi = ky("v"), sP = ky("c"), Hf = /^[ \u00A0]*$/;
function Gc(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === We.getType() && n.getMode() === "normal" && ie(n, le) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = ke(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function oP(e, t) {
  const r = e.getTextContent(), n = zt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Qi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Qi.valueAndRest.exec(c);
    if (l && Hf.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Qi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Qi.valueAndRest.exec(r);
  if (!s) {
    const c = Qi.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = w(), p = A(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(zt("v", d));
      const g = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Gc(e, u, g);
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
  if (t.pendingKeys.delete(e.getKey()), Hf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(zt("v", o)), a && Gc(e, a, a.length);
}
const aP = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function cP(e, t) {
  if (!Nm(e)) return !1;
  const r = e.getParent();
  if (!F(r)) return !1;
  const n = e.getTextContent();
  if (n === Ot(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = aP.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = w(), c = A(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Ot(s)), o) {
    const l = n.length - o.length, d = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const u = Gc(e, o, d);
    u.isUnmergeable() || u.toggleUnmergeable();
  }
  return !0;
}
function lP(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = zt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = sP.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function xy(e) {
  if (Ye(e)) {
    const { wrapper: t } = Wo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (F(e)) {
    const { wrapper: t } = _l(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ae(e)) {
    const t = [], r = Nh(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Oh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Oe(e)) {
    const t = [], r = ys(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = ys(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function uP(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return xy(e).some((n) => r.is(n));
}
function dP(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ue(e) && Sh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of bs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Us(l, e) && (i || uP(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of xy(e))
    l.remove(), n = !0;
  let s = !1;
  if (U(e)) {
    const l = Wx(e);
    l !== void 0 && vk(l) && (Ih(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of bs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (FT(l, e)) {
        xs(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Zh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Yo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Gf(e) {
  return E(e) && e.getType() === We.getType() && e.getMode() === "normal" && ie(e, le) !== "attribute";
}
function fP(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = oe(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Gf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Gf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function eo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = fP(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = oe(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Kr(c)) continue;
      const g = Pm.exec(p);
      c.getMarkerSyntax() === "opening" && g ? n = by(c, g[1], e) || n : r === "idle" && zf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : my(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Xt(c, e) || n;
      continue;
    }
    const l = In(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = dP(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && zf(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = Xt(d, e) || n;
    }
  }
  return n;
}
function Ty(e) {
  if (Vr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return is(t) !== void 0;
  return !1;
}
function pP(e) {
  const t = In(e);
  if (!t) return !1;
  const r = $n(t.kind);
  return !Yo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Jf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (bt(t) || Fe(t) || Hh(t)) return !0;
  return !1;
}
function hP(e, t) {
  const r = e.getTextContent(), n = ie(e, le), i = e.getParent();
  if (n !== "attribute" && Ae(i)) {
    r.replace(/^[ \u00A0]+/, "") === zt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (cP(e, t)) return;
  if (n === "attribute") {
    pP(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Ty(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Jf(e))
      t.pendingKeys.add(e.getKey());
    else if (Rh(e)) t.pendingKeys.add(e.getKey());
    else if (Ae(Es(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      U(a) && Lh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Jf(e)) return;
  const s = w(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (dA.test(o)) {
    if (qk(r)) {
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
function gP(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Zh(e, t);
}
function mP(e) {
  const t = (r) => {
    if (P(r)) {
      Kr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Vr(r)) {
      jh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of bs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Us(n, r) || gP(n, r)) && e.pendingKeys.add(r.getKey());
    if (Oe(r)) {
      r.getTextContent() !== zt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== We.getType() || ie(r, le) === "attribute") return;
      const n = r.getParent();
      if (Ae(n)) {
        r.getTextContent() !== zt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Ty(r) || i.includes("//") || Rh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (U(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Fe(r) && !bt(r)) {
      if (Re(r) && r.getChildrenSize() === 0) {
        const n = In(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      q(r) && r.getChildren().forEach(t);
    }
  };
  Ke().getChildren().forEach(t);
}
const Cy = _p(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ya(e) {
  const t = e();
  return Tt(il), Tt(Ip), t;
}
const Yf = 8, yP = 1e3;
function li(e, t) {
  const r = Oe(e) ? ["va", "vp"] : Ye(e) ? ["milestone"] : F(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    VT($n(n), e, t.pendingKeys);
}
function bP(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(cl) || i.updateTags.has(fs)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = oe(o);
        if (!c) continue;
        const l = In(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = oe(o.getKey());
        c?.isAttached() && $n(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return $e(
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
    e.registerMutationListener(We, r),
    e.registerMutationListener(Ar, r),
    e.registerMutationListener(Ur, r),
    e.registerMutationListener(Fr, r)
  );
}
function Jc(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = w();
  return r ? t ? Qg(r, t) : A(r) && mi(r) : !1;
}
function kP(e, t, r) {
  return $e(
    e.registerCommand(
      gr,
      (n) => {
        if (ra() || Jc(t)) return !1;
        const i = Dc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? mu(yu(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Bf(o, t.getMarker);
          if (a === "declined" && L1(e) && (a = Bf(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Ne
    ),
    e.registerCommand(
      gr,
      (n) => {
        const i = Dc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !NE()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && A(o) && mi(o) ? !1 : (n?.preventDefault(), A(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(us, void 0), a === "") return;
          const l = w();
          A(l) && l.insertText(a);
        }), !0);
      },
      we
    ),
    e.registerCommand(
      gr,
      () => (t.splitExpected.current = !0, !1),
      vt
    )
  );
}
function xP({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = ae(), a = e?.markerMode === "editable", c = !!e && zs(e), l = Y(void 0), d = Y(n), u = Y(s);
  return K(() => {
    d.current = n, u.current = s;
    const f = l.current;
    f && (e && (f.viewOptions = e), f.getMarker = t ?? yr, f.logger = r, f.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), K(() => {
    if (!a || !e) return;
    const f = {
      viewOptions: e,
      getMarker: t ?? yr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = f;
    const p = IT(o, f.pendingKeys);
    let g, h = !1, m, b = !1, T = !1, C = 0;
    const R = () => C < Yf ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Yf} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), S = (_, V = "departure") => {
      o.update(() => {
        C = Ya(
          () => eo(f, _, V)
        ) ? C + 1 : 0;
      });
    };
    let $;
    const W = () => {
      if ($ !== void 0 && clearTimeout($), $ = void 0, T || f.pendingKeys.size === 0) return;
      const _ = d.current ?? yP;
      _ < 0 || ($ = setTimeout(() => {
        $ = void 0, !(T || f.pendingKeys.size === 0) && (h || R() || S(void 0, "idle"));
      }, _));
    }, B = $e(
      o.registerNodeTransform(Ar, (_) => {
        if (o.isComposing()) return;
        nP(_, f);
        const V = In(_);
        V && (Oe(V.owner) || F(V.owner) || Ae(V.owner) || Ye(V.owner) && Wo(V.owner).wrapper === void 0) && li(V.owner, f);
      }),
      o.registerNodeTransform(mt, (_) => {
        o.isComposing() || (oP(_, f), li(_, f));
      }),
      o.registerNodeTransform(qt, (_) => {
        o.isComposing() || (lP(_), _.isAttached() && li(_, f));
      }),
      o.registerNodeTransform(it, (_) => {
        o.isComposing() || N1(_, f);
      }),
      o.registerNodeTransform(be, (_) => {
        if (!o.isComposing()) {
          $1(_, f);
          for (const V of ["separator", "char"])
            _.isAttached() && Us($n(V), _) && f.pendingKeys.add(_.getKey());
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
      o.registerNodeTransform(er, (_) => {
        o.isComposing() || li(_, f);
      }),
      o.registerNodeTransform(Fr, (_) => {
        if (o.isComposing()) return;
        const V = In(_);
        V && (Ye(V.owner) || Oe(V.owner) || F(V.owner) || Ae(V.owner)) && li(V.owner, f);
      }),
      o.registerNodeTransform(Me, (_) => {
        o.isComposing() || (q1(_, f), li(_, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(jr, (_) => {
        o.isComposing() || iP(_, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(We, (_) => {
        o.isComposing() || hP(_, f);
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
        We,
        (_) => {
          o.getEditorState().read(() => {
            for (const [V, H] of _) {
              if (H === "destroyed") continue;
              const ge = oe(V);
              !ge || ie(ge, le) !== "attribute" || Re(ge.getParent()) || o.getElementByKey(V)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      bP(o, f),
      ...c ? [
        o.registerNodeTransform(We, (_) => {
          o.isComposing() || vA(_);
        }),
        o.registerCommand(
          yi,
          (_) => qf(
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
          we
        ),
        o.registerCommand(
          Tr,
          (_) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            qf(
              _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
              o,
              !0,
              u.current
            )
          ),
          we
        ),
        o.registerCommand(
          gr,
          (_) => RA(
            // Same jsdom-safe duck-check as COPY above.
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
            f.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              f.splitExpected.current = !0;
            }
          ),
          we
        )
      ] : [],
      o.registerCommand(
        Tr,
        () => (!Jc(f) && !ra() && Wc(f), !1),
        Ne
      ),
      o.registerCommand(
        Uo,
        () => (o.isComposing() || E1(f), !1),
        Or
      ),
      o.registerCommand(
        ol,
        (_) => _ || o.isComposing() ? !1 : R1(),
        Or
      ),
      o.registerCommand(
        Do,
        () => (h = !1, C = 0, W(), !1),
        vt
      ),
      o.registerCommand(
        Sr,
        (_) => (h = !1, C = 0, W(), (_.key === "Backspace" || _.key === "Delete") && !Jc(f, Gg(_)) && (Wc(f), M1(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !_.ctrlKey || _.altKey || _.shiftKey || _.metaKey || _.key !== " " && _.code !== "Space" || !PE() ? !1 : (_.preventDefault(), !0)),
        we
      ),
      o.registerCommand(
        xp,
        (_) => {
          const V = ly();
          V === "needs-plain-split" && o.dispatchCommand(us, void 0);
          const H = V !== "declined" || WT();
          return H && _?.preventDefault(), eo(f), H;
        },
        we
      ),
      o.registerCommand(
        us,
        () => (f.splitExpected.current = !0, hm()),
        we
      ),
      kP(o, f, c),
      o.registerCommand(
        Cy,
        () => {
          if (h) return !0;
          const _ = o.getRootElement(), V = _?.ownerDocument, H = !!_ && !!V && V.hasFocus() && _.contains(V.activeElement);
          let ge;
          if (H) {
            const Q = w();
            ge = A(Q) ? Q.focus.key : g;
          }
          return Ya(() => eo(f, ge)), !0;
        },
        vt
      ),
      o.registerCommand(
        al,
        () => {
          if (h) return !1;
          const _ = w(), V = A(_) ? _.focus.key : g;
          return Ya(() => eo(f, V)), !1;
        },
        vt
      ),
      o.registerUpdateListener(({ editorState: _, tags: V }) => {
        f.splitExpected.current = !1, f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear(), f.rebuildAttempted.clear();
        const H = _.read(() => {
          const Q = w();
          return A(Q) ? Q.focus.key : void 0;
        }), ge = m;
        if (H !== void 0 && (m = H), V.has(cl)) {
          f.pendingKeys.clear(), _.read(() => mP(f)), h = !0, H !== void 0 && (g = H);
          return;
        }
        if (V.has(_t)) {
          H !== void 0 && H !== ge && (h = !0);
          return;
        }
        h || (H !== void 0 && (g = H), W(), !(b || H === void 0) && [...f.pendingKeys].some((Q) => Q !== H) && (b = !0, queueMicrotask(() => {
          b = !1, !T && (R() || S(g));
        })));
      })
    );
    return () => {
      T = !0, $ !== void 0 && clearTimeout($), $ = void 0, p(), B(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const TP = ["status_unknown", "status_invalid"], _y = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, CP = Object.values(_y);
function _P(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = _y[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Xf(e) {
  e.classList.remove(...TP), e.removeAttribute("aria-description"), CP.includes(e.title) && e.removeAttribute("title");
}
function SP(e, t, r, n) {
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
function vP(e) {
  const t = oe(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function MP({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ae(), i = e?.markerMode === "editable";
  return K(() => {
    if (!i) return;
    const s = t ?? mo;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = XA(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || vP(f)) continue;
            const g = oe(f)?.getTopLevelElement();
            !g || l.has(g.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Xf(p);
        }
        for (const [f, p] of u) {
          const g = n.getElementByKey(f);
          g && _P(g, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          SP(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && Xf(d);
      }
    };
  }, [n, i, t, r]), null;
}
function Sy(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Lr(o);
    a && q(s) && Sy(s.getChildren(), a, r);
  }
}
function Yc(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Lr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = Ei(o);
      if (c === void 0 || !c.includes(ct)) continue;
      const l = c.split(ct), d = [];
      for (let u = 0; u < l.length; u++) {
        const f = l[u];
        if (u > 0 && d.push(...t[r++] ?? []), f.length > 0) {
          const p = {
            ...o,
            text: f
          };
          d.push(p);
        }
      }
      i.splice(s, 1, ...d), s += d.length - 1;
    }
  };
  n(e);
}
function Xc(e, t, r) {
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
function vy(e, t) {
  const r = [];
  for (const n of e)
    Gm(n, t) || ((ue(n) || U(n)) && r.push(n.getMarker()), q(n) && r.push(...vy(n.getChildren(), t)));
  return r;
}
function My(e) {
  const t = [];
  for (const r of e) {
    const n = Su(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Lr(r);
    i && t.push(...My(i));
  }
  return t;
}
function Ru(e, t, r) {
  const n = vy(e, r), i = My(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function EP(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
  let n, i;
  if (A(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = oe(t.key), i = t.offset;
  else
    return;
  if (!(!E(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function qu(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function AP(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const m of e) {
    const b = vu(m, o, s);
    if (!b) return;
    c.text.length > 0 && (c.text += " ");
    const T = c.text.length;
    b.spans.forEach(
      (C) => c.spans.push({ ...C, start: C.start + T, end: C.end + T })
    ), c.sentinels.push(...b.sentinels), c.text += b.text;
  }
  const l = i ? qu(c, i) : c.text, d = Dr(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (Jn(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = _r.serializeEditorState(
    { type: xr, version: kr, content: d },
    s
  ).root.children;
  if (Ai(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Xc(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ui(u, o) === Di(e, o) && Ru(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Yc(u, f);
  const g = PP(e), h = Ey(u);
  for (let m = 0; m < g.length && m < h.length; m++)
    g[m].sid !== void 0 && h[m].number === g[m].number && (h[m].sid = g[m].sid);
  return u;
}
function PP(e) {
  const t = [], r = (n) => {
    Oe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : q(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Ey(e) {
  const t = [];
  for (const r of e) {
    hh(r) && t.push(r);
    const n = Lr(r);
    n && t.push(...Ey(n));
  }
  return t;
}
function NP(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = ty(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? qu(l, i) : l.text, f = Dr(u, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Jn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = p.content ?? [], h = ry(g), m = e.getCategory() !== h, b = Vm(e, g);
  if (b) {
    const S = Wm(
      e,
      b.before,
      b.after,
      h,
      s
    );
    if (!S || Ai(S) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const $ = Xc(l, t, n);
    return $ ? (Yc(S, $), {
      rebuilt: void 0,
      contentNodes: d,
      category: h,
      categoryChanged: !1,
      closedAs: S
    }) : void 0;
  }
  const T = jm(e, g, h, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const C = T.children;
  if (Ai(C) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const R = Xc(l, t, n);
  if (!R) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ui(C, o) === Di(d, o) && Ru(d, C, o)) {
    if (m)
      return { rebuilt: void 0, contentNodes: d, category: h, categoryChanged: m };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Yc(C, R), { rebuilt: C, contentNodes: d, category: h, categoryChanged: m };
}
function Qf(e) {
  return e.$?.textType;
}
function wP(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Qf(e) === Qf(t);
}
function OP(e) {
  const t = [];
  for (const r of e) {
    const n = oe(r);
    n?.isAttached() && Fe(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function RP(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!F(t)) return;
  const r = e.getTextContent();
  if (Kr(e)) return;
  const n = Pm.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Zf(e, t) {
  const r = e;
  r.marker = t, r.text = Ym(t, r.markerSyntax, r.nested);
}
function qP(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Me.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Zf(a.node, s);
  const c = n.getChildren().filter(P).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Zf(l.node, s);
}
function $P(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = sy(e, i, n);
  if (!o) return;
  const a = r ? qu(o, r) : o.text, c = Dr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Jn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = _r.serializeEditorState(
    { type: xr, version: kr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...aa(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ui(d, i) === Di(u, i) && Ru(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function IP(e, t, r, n, i) {
  const s = EP(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = (m) => {
    F(m) ? c.set(m.getKey(), m) : Ae(m) ? l.set(m.getKey(), m) : o.set(m.getKey(), [m]);
  };
  for (const m of t) {
    const b = oe(m);
    if (!b?.isAttached()) continue;
    const T = Es(b);
    if (T) {
      if (u(T), P(b)) {
        const C = gy(b, r.getMarker);
        C && a.push(C);
      }
      if (F(T)) {
        const C = RP(b);
        C && d.set(T.getKey(), C);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const m of a)
    m.some((b) => f.has(b.getKey())) || (m.forEach((b) => {
      f.add(b.getKey()), o.delete(b.getKey());
    }), o.set(m[0].getKey(), m));
  if (s) {
    const m = Es(s.node);
    m && u(m);
  }
  const p = OP(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const g = new Set(p.map((m) => m.getKey())), h = /* @__PURE__ */ new Map();
  Sy(Ke().getChildren(), e.root.children, h);
  for (const m of d.values()) qP(m, h);
  for (const m of c.values()) {
    const b = h.get(m.getKey()), T = b ? Lr(b.node) : void 0;
    if (!b || !T) continue;
    const C = NP(m, h, r, g, s);
    if (!C) continue;
    if (C.closedAs) {
      const $ = b.siblings.indexOf(b.node);
      if ($ < 0) continue;
      const [W, ...B] = C.closedAs, _ = b.node;
      for (const V of Object.keys(_)) Reflect.deleteProperty(_, V);
      Object.assign(_, W), b.siblings.splice($ + 1, 0, ...B);
      continue;
    }
    if (C.categoryChanged) {
      const $ = b.node;
      C.category === void 0 ? delete $.category : $.category = C.category;
    }
    if (!C.rebuilt) continue;
    const R = h.get(C.contentNodes[0].getKey());
    if (!R) continue;
    const S = T.indexOf(R.node);
    S < 0 || T.splice(S, C.contentNodes.length, ...C.rebuilt);
  }
  for (const m of o.values()) {
    const b = h.get(m[0].getKey());
    if (!b) continue;
    const T = AP(m, h, r, g, s);
    if (!T) continue;
    const C = b.siblings.indexOf(b.node);
    C < 0 || b.siblings.splice(C, m.length, ...T);
  }
  for (const m of l.values()) {
    const b = h.get(m.getKey());
    if (!b) continue;
    const T = 1 + aa(m).length, C = $P(m, r, s);
    if (!C) continue;
    const R = b.siblings.indexOf(b.node);
    R < 0 || b.siblings.splice(R, T, ...C);
  }
  for (const m of p) {
    const b = h.get(m.getKey());
    if (!b) continue;
    const T = b.siblings.indexOf(b.node);
    if (T < 0) continue;
    b.siblings.splice(T, 1);
    const C = b.siblings[T - 1], R = b.siblings[T], S = C && Ei(C), $ = R && Ei(R);
    C && R && S !== void 0 && $ !== void 0 && wP(C, R) && (C.text = S + $, b.siblings.splice(T, 1));
  }
  return om(e, r.viewOptions);
}
function LP({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = $i(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return K(() => {
    if (n)
      return r.registerNodeTransform(
        it,
        (i) => DP(i, t)
      );
  }, [r, n, t]), null;
}
function DP(e, t) {
  e.getMarker() !== mr && (e.isEmpty() || Wt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${mr}" (key ${e.getKey()})`
  ), e.setMarker(mr)));
}
function UP({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ae(), n = Y({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return K(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Ro(s, e) || FP(i, r, e);
  }, [r, e, t]), K(
    () => r.registerMutationListener(
      Vt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Qc(r);
        ep(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: to(s) === to(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), K(() => {
    const i = (a) => a.read(
      () => new Set(
        Ke().getChildren().filter(He).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (Qc(r) || ep(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: to(a) === to(c)
      }));
    };
    return $e(
      ...[qt, Mr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), K(
    () => r.registerCommand(
      Kt,
      () => {
        const i = n.current;
        return i.phase === "idle" && jP(i, Ay()), !1;
      },
      vt
    ),
    [r]
  ), K(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Kt, void 0));
    };
    return $e(
      r.registerMutationListener(At, i),
      r.registerMutationListener(mt, i)
    );
  }, [r]), K(() => {
    const i = () => GP(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function FP(e, t, r) {
  if (zP(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Qc(t);
  (!n || n === r.book) && t.update(() => Py(t, r.chapterNum, r.verseNum), {
    tag: _t
  });
}
function zP(e, t) {
  const r = e.pendingEchoes.findIndex((n) => Ro(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function Ay() {
  const e = w(), t = Ch(e);
  if (!t) return;
  const r = $u(), n = Tx(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = $l(t, e), { verseNum: o, verse: a } = mC(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Qc(e) {
  return e.getEditorState().read(() => $u()?.getCode() || void 0);
}
function $u() {
  return Ke().getChildren().find(bt);
}
function ep(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Xa(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Xa(e, t), e.phase = "navigating") : i && Xa(e, t), r && r !== e.scrRef.book && Oy(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Xa(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Py(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: _t }
    );
  });
}
function Py(e, t, r) {
  const n = w()?.clone();
  KP(t, r);
  const i = w();
  i && !(n && i.is(n)) && wr(e, _t);
}
function KP(e, t) {
  const r = Ay();
  if (r?.chapterNum === e && (r.verse ? wy(t, r.verse) : r.verseNum === t))
    return;
  const n = Ke().getChildren(), i = mh(n, e);
  if (!i) return;
  const s = Ax(n, i), o = xx(s, !0);
  Ex(s, o);
  let a;
  try {
    a = uC(s, t);
  } catch {
    return;
  }
  a && (ue(a) ? !E(a.getFirstChild()) && Li(a) || tr(a, 0) : BP(a));
}
function BP(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || he(n)) {
    tr(t, r);
    return;
  }
  const i = Jo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = q(n) && !F(n) ? Ny(n) : void 0;
  s ? s.select(0, 0) : tr(t, r);
}
function Ny(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (q(t) && !F(t)) return Ny(t);
}
function to(e) {
  return e.read(() => {
    const t = Ke().getChildren().find(He);
    return `${$u()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function jP(e, t) {
  e.phase !== "navigating" && t && (VP(t, e.scrRef) || Oy(e, WP(t, e.scrRef)));
}
function VP(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? wy(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function wy(e, t) {
  try {
    return xl(e, t);
  } catch {
    return !1;
  }
}
function WP(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const HP = 8;
function Oy(e, t) {
  return Ro(t, e.scrRef) || e.pendingEchoes.some((r) => Ro(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > HP && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Ro(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function GP(e) {
  e.phase = "idle";
}
function JP(e) {
  return bt(e) ? `${e.__code}` : Ae(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : Rs(e) ? `${e.__marker} "${e.__number}"` : ht(e) ? `${e.__caller}` : Gn(e) ? `${e.__marker} "${e.__number}"` : F(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ue(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${YP(e)}` : Se(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Oe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function YP(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[ws]) : "";
}
function XP() {
  const [e] = ae();
  return /* @__PURE__ */ M(
    jb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: JP,
      editor: e
    }
  );
}
const Ry = lp(null), tp = 4;
function QP({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Y(null), s = up(Ry);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return K(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ M("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function ZP({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = fe(), [s, o] = fe(), a = me(
    (d) => {
      i((u) => u ? [...u, d] : [d]);
    },
    [i]
  ), c = (d) => {
    if (!n) return;
    const u = d.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(u) && d.preventDefault(), u === "Escape" || u === "Tab" ? r() : u === "ArrowUp" ? o((f) => {
      if (!f) return n[0];
      const p = n.indexOf(f) - 1;
      return n[p === -1 ? n.length - 1 : p];
    }) : u === "ArrowDown" && o((f) => f ? n[n.indexOf(f) + 1] : n[0]);
  }, l = Ve(() => ({ registerItem: a }), [a]);
  return K(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ M(Ry.Provider, { value: l, children: /* @__PURE__ */ M("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function e0({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Y(null), c = Y(null), [l, d] = fe(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return K(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: g, left: h } = f.getBoundingClientRect();
      p.style.top = `${g + f.offsetHeight + tp}px`, p.style.left = `${Math.min(h, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), K(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (g) => {
        const h = g.target;
        o && a.current && a.current.contains(h) || f.contains(h) || d(!1);
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
          const { top: h } = p.getBoundingClientRect(), m = h + p.offsetHeight + tp;
          m !== g.getBoundingClientRect().top && (g.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ _e(Pn, { children: [
    /* @__PURE__ */ _e(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => d(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ M("span", { className: i }),
          t && /* @__PURE__ */ M("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ M("i", { className: "chevron-down" })
        ]
      }
    ),
    l && An(
      /* @__PURE__ */ M(ZP, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const Zc = {
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
}, el = {
  ...Zc,
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
function t0({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ M(
    e0,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + r0(t),
      buttonLabel: n0(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Zc).map((n) => /* @__PURE__ */ _e(
        QP,
        {
          className: "item block-marker " + i0(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ M("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ M("span", { className: "text usfm_" + n, children: Zc[n] })
          ]
        },
        n
      ))
    }
  );
}
function r0(e) {
  return e && e in el ? e : "ban";
}
function n0(e) {
  return e && e in el ? el[e] : "No Style";
}
function i0(e) {
  return e ? "active dropdown-item-active" : "";
}
function rp() {
  return /* @__PURE__ */ M("div", { className: "divider" });
}
const s0 = hn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ae(), [o, a] = fe(s), [c, l] = fe(), [d, u] = fe(!1), [f, p] = fe(!1), g = me(
    ({
      canUndo: h,
      canRedo: m,
      blockMarker: b,
      contextMarker: T
    }) => {
      u(h), p(m), l(b), n?.({
        canUndo: h,
        canRedo: m,
        blockMarker: b,
        contextMarker: T
      });
    },
    [n]
  );
  return K(() => s.registerCommand(
    Kt,
    (h, m) => (a(m), !1),
    Ne
  ), [s]), /* @__PURE__ */ _e(Pn, { children: [
    /* @__PURE__ */ M(Hg, { onStateChange: g }),
    /* @__PURE__ */ _e("div", { className: "toolbar", children: [
      /* @__PURE__ */ M(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(Sp, void 0);
          },
          title: bi ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(vp, void 0);
          },
          title: bi ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ M("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ M(rp, {}),
      o === s && /* @__PURE__ */ _e(Pn, { children: [
        /* @__PURE__ */ M(
          t0,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ M(rp, {})
      ] }),
      /* @__PURE__ */ M("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), o0 = ta(), a0 = {}, c0 = {};
function l0() {
  return /* @__PURE__ */ M("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Qa(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function np(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = q(n) ? n.getLastDescendant() ?? n : n;
  return Qo(r, i);
}
const qy = hn(function({
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
  const u = Y(null), f = Y(null), p = Y(null), g = Y(null), h = Y(t), m = Y(void 0), b = Y(void 0), T = Y(void 0), C = Y(void 0), R = Y(!1), [S, $] = fe(t), [W, B] = fe(0), [_, V] = fe(), {
    isReadonly: H = !1,
    structureProtectionMode: ge = "off",
    hasExternalUI: Q = !1,
    hasSpellCheck: Ie = !1,
    textDirection: xe = "ltr",
    markerMenuTrigger: ir = "\\",
    view: Be,
    nodes: Wr,
    debug: Hr = !1,
    contextMenu: mn,
    styleInfo: Z,
    markerSettleDelayMs: N,
    copyLimit: ee
  } = a ?? c0, ce = Be ?? o0, Ee = _s(ce) && (ce.markerMode !== "hidden" || !ce.hasSpacing || ce.hasGutterParaMarkers || ce.hasActiveTextFocusBox) ? {
    ...ce,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ce, st = Y(Ee);
  It(st.current, Ee) || (st.current = Ee);
  const te = st.current, Je = Ve(() => Wr ?? a0, [Wr]), sr = Ve(() => mn, [mn]), Fi = Ve(
    () => tC(Z ?? mo),
    [Z]
  ), Gr = Y(c);
  It(Gr.current, c) || (Gr.current = c);
  const ne = Gr.current, ut = _s(te), de = H || ut, Yn = Ee !== ce;
  K(() => {
    ut && !H && ne?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Yn && ne?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), te?.markerMode === "visible" && !H && ne?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ut, H, Yn, ne, te?.markerMode]);
  const Te = Y(null), yn = Ve(() => {
    if (te.markerMode !== "editable") return;
    const O = Z ?? mo;
    return {
      getContext: () => Te.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (L) => s1(
        O,
        L,
        Je.extraValidMarkers
      ),
      getEnterItems: (L) => o1(
        O,
        L,
        Je.extraValidMarkers
      ),
      apply: (L, j) => {
        const J = Te.current;
        J && (j.trigger === "enter" ? J.splitParagraphWithMarker(L.marker) : J.applyMarkerMenuSelection(L, j));
      },
      commitTypedCloser: (L) => {
        Te.current?.commitTypedCloser(L);
      }
    };
  }, [te, Z, Je.extraValidMarkers]), Xn = (O) => {
    R.current || (R.current = !0, Gr.current?.warn(
      `Editor: cannot ${O} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ht = (O) => {
    if (ut)
      throw new Error(
        `Cannot ${O} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Jr = (O) => {
    if (Ht(O), de) throw new Error(`Cannot ${O} in readonly mode`);
  }, Yr = () => !!u.current && Ug(u.current), Ks = Ve(
    () => ({
      namespace: "platformEditor",
      theme: { ...Sm, showCharMarkerTitles: te.showCharMarkerTitles },
      editable: !de,
      editorState: void 0,
      // Handling of errors during update
      onError(O) {
        throw O;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [nt, ...ut ? T_ : Wl]
    }),
    [de, ut, te.showCharMarkerTitles]
  );
  no.initialize(ne);
  function Xr(O) {
    if (O !== void 0 && !wE(O, Je.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const $t = me(() => {
    const O = u.current;
    if (!O) return h.current;
    const L = Td(O), j = b.current;
    if ((!L || L.size === 0) && !j) return h.current;
    const J = O.getEditorState(), ye = J.toJSON();
    return J.read(
      () => IP(
        ye,
        L ?? /* @__PURE__ */ new Set(),
        { viewOptions: te, getMarker: Fi, logger: ne },
        j,
        T.current
      )
    ) ?? h.current;
  }, [te, Fi, ne]);
  function Gt(O, L, j) {
    if (ut && L === "remote") {
      Gr.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    Ht("apply an update");
    const J = Yr(), ye = !J && u.current ? wr(u.current, Pr) : void 0;
    u.current?.update(
      () => {
        L === "remote" && Tt(fs), J || Tt(Pr), j && Tt(j), G_(O, te, Je, ne);
      },
      {
        discrete: !0,
        // Reads the committed state and reports the change from `onUpdate` rather than right
        // after this call, because `editor.update()` does not always run synchronously: a caller
        // reached from inside another commit's own update listener (a host's `onUsjChange`
        // calling back into `takeOpsAfterNote`, say) finds the editor already mid-commit, so
        // Lexical queues this discrete update and applies it only once that outer commit's
        // listeners finish. `onUpdate` fires exactly when THIS update's own commit lands, whether
        // that is synchronously (the ordinary case, before `editor.update()` even returns) or
        // after such a deferral, so the report is correct either way - and the unfocused tag
        // release is disarmed only once the commit it guards has actually happened, never before.
        onUpdate: () => {
          ye?.(), !J && u.current && La(u.current);
          const Le = u.current?.getEditorState();
          if (!Le) return;
          const je = no.deserializeEditorState(Le, te);
          if (je) {
            const ot = !It(h.current, je);
            if (ot && (h.current = je), ot || !It(S, je)) {
              const ar = Od(O, Le, "apply");
              C.current = je, s?.(je, O, L, ar);
            }
          }
        }
      }
    );
  }
  const or = {
    focus() {
      u.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return Yr();
    },
    undo() {
      u.current?.dispatchCommand(Sp, void 0);
    },
    redo() {
      u.current?.dispatchCommand(vp, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      Jr("cut"), u.current && nu(u.current);
    },
    copy() {
      u.current && ru(u.current);
    },
    paste() {
      Jr("paste"), u.current && iu(u.current);
    },
    pastePlainText() {
      Jr("paste as plain text"), u.current && su(u.current);
    },
    getUsj() {
      return $t();
    },
    commitPendingMarkerEdits() {
      const O = u.current;
      if (!O) return;
      const L = !Yr(), j = L ? wr(O, Pr) : void 0;
      O.update(
        () => {
          L && Tt(Pr), O.dispatchCommand(Cy, void 0);
        },
        { discrete: !0 }
      ), j?.(), L && La(O);
    },
    setTransientInput(O) {
      if (!O) {
        b.current = void 0;
        return;
      }
      const L = u.current?.getEditorState().read(() => {
        const j = w();
        return A(j) && j.isCollapsed() ? j.focus.key : void 0;
      });
      b.current = { input: O, nodeKey: L ?? T.current?.key };
    },
    setUsj(O) {
      if (!It(h.current, O)) {
        h.current = O, b.current = void 0;
        const L = It(S, O);
        $(O), L && B((j) => j + 1);
      }
    },
    applyUpdate(O, L = "remote") {
      Gt(O, L);
    },
    replaceEmbedUpdate(O, L) {
      const j = u.current?.read(() => AC(O, L));
      j ? this.applyUpdate(j) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${O}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ut) {
        Xn("get the selection");
        return;
      }
      return u.current?.read(zl);
    },
    setSelection(O) {
      if (ut) {
        Xn("set the selection");
        return;
      }
      u.current?.update(() => {
        const L = ea(O);
        L !== void 0 && (Nn(L), Tt($p));
      });
    },
    setAnnotation(O, L, j, J, ye) {
      if (ut) {
        Xn("set an annotation");
        return;
      }
      let Le, je, ot, ar;
      typeof J == "function" || J === void 0 ? (Le = J, je = ye) : (Le = J.onClick, je = J.onRemove, ot = J.onMouseEnter, ar = J.onMouseLeave), f.current?.setAnnotation(
        O,
        ud(L),
        j,
        Le,
        je,
        ot,
        ar
      );
    },
    removeAnnotation(O, L) {
      f.current?.removeAnnotation(ud(O), L);
    },
    formatPara(O) {
      Jr("format a paragraph"), u.current?.update(
        () => {
          const L = w();
          if (!A(L)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          Hb(L, () => ms(O));
          const j = w();
          if (!A(j)) return;
          const J = /* @__PURE__ */ new Set();
          j.getNodes().forEach((ye) => {
            const Le = ye.getTopLevelElement();
            ue(Le) && J.add(Le);
          }), J.forEach((ye) => cy(ye, O, te));
        },
        { discrete: !0 }
      );
    },
    getElementByKey(O) {
      return u.current?.read(
        () => u.current?.getElementByKey(O) ?? void 0
      );
    },
    removeCharacterMarker(O) {
      if (de) throw new Error("Cannot remove character marker in readonly mode");
      Xr(O);
      let L = !1;
      return u.current?.update(
        () => {
          const j = w();
          A(j) && (L = bm(j, O, te));
        },
        { discrete: !0 }
      ), L;
    },
    replaceCharacterMarker(O, L) {
      if (de) throw new Error("Cannot replace character marker in readonly mode");
      Xr(O), Xr(L);
      let j = !1;
      return u.current?.update(
        () => {
          const J = w();
          A(J) && (j = BE(J, O, L));
        },
        { discrete: !0 }
      ), j;
    },
    extendCharacterMarker(O, L) {
      if (de) throw new Error("Cannot extend character marker in readonly mode");
      Xr(O), L?.forEach(
        (J) => Xr(J)
      );
      let j = !1;
      return u.current?.update(
        () => {
          const J = w();
          A(J) && (j = jE(
            J,
            O,
            L,
            te
          ));
        },
        { discrete: !0 }
      ), j;
    },
    insertMarker(O) {
      if (de) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!Oc(O, Je.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const L = Rc(
        O,
        m,
        te,
        Je,
        ne,
        void 0,
        Z
      );
      return L.action({ editor: u.current, reference: r }), L.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!H)
        return u.current?.getEditorState().read(() => V1());
    },
    applyMarkerMenuSelection(O, L) {
      if (H) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (O.kind !== "closeTag" && !Oc(O.marker, Je.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let j;
      return u.current.update(() => {
        j = Y1(O, L, r, {
          expandedNoteKeyRef: m,
          viewOptions: te,
          nodeOptions: Je,
          logger: c,
          styleInfo: Z
        });
      }), j;
    },
    splitParagraphWithMarker(O) {
      if (H) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        hy(O, te);
      });
    },
    commitTypedMarker(O, L) {
      if (H) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let j = !1;
      return u.current.update(() => {
        j = J1(O, L), j || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), j;
    },
    commitTypedCloser(O) {
      if (H) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let L = !1;
      return u.current.update(() => {
        L = py(O), L || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), L;
    },
    insertNote(O, L, j) {
      Jr("insert a note"), u.current?.update(
        () => {
          const J = pg(
            O,
            L,
            j,
            r,
            te,
            Je,
            ne
          );
          Qa(J, m);
        },
        { discrete: !0 }
      );
    },
    selectNote(O) {
      u.current?.update(() => {
        const L = fr(O);
        L && (kc(L, te), Qa(L, m));
      });
    },
    selectAfterNote(O) {
      const L = u.current;
      if (!L) return;
      const j = !Yr(), J = j ? wr(L, Pr) : void 0;
      if (L.update(
        () => {
          j && Tt(Pr);
          const ye = fr(O);
          ye && gg(ye);
        },
        { discrete: !0 }
      ), J?.(), j) {
        La(L);
        const ye = wr(
          L,
          Pr
        );
        L.update(
          () => {
            Tt(Pr), L.dispatchCommand(Kt, void 0);
          },
          { discrete: !0 }
        ), ye();
      }
    },
    selectNoteTextOffset(O, L, j) {
      u.current?.update(() => {
        const J = fr(O);
        if (!J) return;
        const ye = j?.glyph;
        (j?.field === "category" ? m_(J, L, ye) || Dd(J, 0) : Dd(J, L, ye)) || kc(J, te), Qa(J, m);
      });
    },
    getNoteOps(O) {
      const L = u.current;
      return L ? ui(L, () => {
        const j = fr(O);
        if (j)
          return Qo(j);
      }) : void 0;
    },
    getOpsAfterNote(O) {
      const L = u.current;
      return L ? ui(L, () => {
        const j = fr(O);
        return j ? np(j) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(O) {
      const L = u.current, j = L ? ui(L, () => {
        const je = fr(O);
        if (!je) return;
        const ot = Ll(je, "apply");
        return { ops: np(je), notePosition: ot };
      }) : void 0;
      if (!j) return;
      const { ops: J, notePosition: ye } = j;
      if (J.length === 0 || ye === void 0) return J;
      const Le = J.reduce(
        (je, ot) => je + (typeof ot.insert == "string" ? ot.insert.length : 1),
        0
      );
      return Gt([{ retain: ye + 1 }, { delete: Le }], "remote", il), J;
    },
    getNoteIndex(O) {
      const L = u.current;
      return L ? ui(L, () => Ul(O)) : void 0;
    },
    getNoteKey(O) {
      const L = u.current;
      return L ? ui(L, () => fr(O)?.getKey()) : void 0;
    },
    highlightNote(O) {
      p.current?.setHighlightedNote(O);
    },
    get toolbarEndRef() {
      return g;
    }
  };
  Te.current = or, $o(d, () => or), K(() => {
    const O = u.current;
    if (O)
      return O.registerUpdateListener(({ editorState: L }) => {
        L.read(() => {
          const j = w();
          if (!A(j) || !j.isCollapsed()) return;
          const J = j.focus.getNode();
          E(J) && (T.current = { key: J.getKey(), offset: j.focus.offset });
        });
      });
  }, []);
  const zi = me(
    (O, L, j, J, ye) => {
      if (ut) return;
      const Le = no.deserializeEditorState(O, te);
      if (Le) {
        const je = !It(h.current, Le);
        if (je && (h.current = Le), je || !It(S, Le)) {
          const ot = Od(J, O), ar = ot && !ye.read(() => oe(ot)) ? ot : void 0;
          C.current = Le, s?.(Le, J, "local", ar);
        }
      }
    },
    [S, s, te, ut]
  );
  K(() => {
    const O = u.current;
    if (!(!O || !s))
      return O.registerUpdateListener(({ tags: L, dirtyElements: j, dirtyLeaves: J }) => {
        !L.has(cl) && (j.size === 0 && J.size === 0 || L.has(fs) || !Td(O)?.size) || queueMicrotask(() => {
          const ye = $t();
          !ye || It(C.current, ye) || (C.current = ye, s(ye, void 0, "local", void 0));
        });
      });
  }, [s, $t]);
  const bn = me(
    (O) => {
      V(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ _e(Ep, { initialConfig: Ks, children: [
      /* @__PURE__ */ M(QS, { isEditable: !de }),
      /* @__PURE__ */ _e("div", { className: "editor-container", children: [
        Q ? /* @__PURE__ */ M(Hg, { onStateChange: bn }) : /* @__PURE__ */ M(
          "div",
          {
            className: "editor-toolbar-container" + (de ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ M(
              s0,
              {
                ref: g,
                editorRef: Te,
                isReadonly: de,
                onStateChange: bn
              }
            )
          }
        ),
        /* @__PURE__ */ _e("div", { className: "editor-inner", children: [
          /* @__PURE__ */ M(Pp, { editorRef: u }),
          /* @__PURE__ */ M(
            Wb,
            {
              contentEditable: /* @__PURE__ */ M(
                Ap,
                {
                  className: `editor-input usfm ${H_(te).join(" ")}${te.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${te.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Ie
                }
              ),
              placeholder: /* @__PURE__ */ M(l0, {}),
              ErrorBoundary: Np
            }
          ),
          Q && /* @__PURE__ */ M(XS, {}),
          /* @__PURE__ */ M(wp, {}),
          r && n && /* @__PURE__ */ M(UP, { scrRef: r, onScrRefChange: n }),
          r && !Q && /* @__PURE__ */ M(
            AM,
            {
              trigger: ir,
              scrRef: r,
              contextMarker: _,
              getMarkerAction: (O) => Rc(
                O,
                m,
                te,
                Je,
                ne,
                void 0,
                Z
              ),
              editableHarness: yn
            }
          ),
          /* @__PURE__ */ M(
            nv,
            {
              scripture: S,
              scriptureRef: h,
              nodeOptions: Je,
              editorAdaptor: _r,
              viewOptions: te,
              logger: ne
            },
            W
          ),
          /* @__PURE__ */ M(vv, { onChange: i }),
          /* @__PURE__ */ M(
            z_,
            {
              onChange: zi,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: hk
            }
          ),
          /* @__PURE__ */ M(JE, { viewOptions: te }),
          /* @__PURE__ */ M(U_, { ref: f, logger: ne }),
          /* @__PURE__ */ M(xS, { viewOptions: te }),
          /* @__PURE__ */ M(qS, {}),
          /* @__PURE__ */ M(FS, {}),
          te?.markerMode !== "editable" && /* @__PURE__ */ M(zS, { logger: ne }),
          /* @__PURE__ */ M(VS, { options: sr }),
          /* @__PURE__ */ M(BA, { limit: ee, viewOptions: te }),
          /* @__PURE__ */ M(YS, {}),
          /* @__PURE__ */ M(ev, {}),
          /* @__PURE__ */ M(rv, {}),
          /* @__PURE__ */ M(X1, {}),
          /* @__PURE__ */ M(
            xP,
            {
              viewOptions: te,
              getMarker: Fi,
              logger: ne,
              markerSettleDelayMs: N,
              structureProtectionMode: ge,
              copyLimit: ee
            }
          ),
          te?.markerMode === "visible" && /* @__PURE__ */ M(KA, { viewOptions: te, copyLimit: ee }),
          /* @__PURE__ */ M(
            MP,
            {
              styleInfo: Z,
              viewOptions: te,
              logger: ne
            }
          ),
          /* @__PURE__ */ M(iv, { ref: p }),
          /* @__PURE__ */ M(
            sv,
            {
              expandedNoteKeyRef: m,
              nodeOptions: Je,
              viewOptions: te,
              logger: ne
            }
          ),
          /* @__PURE__ */ M(Sv, {}),
          /* @__PURE__ */ M(gS, {}),
          /* @__PURE__ */ M(dS, {}),
          /* @__PURE__ */ M(LP, { viewOptions: te, logger: ne }),
          /* @__PURE__ */ M(Mv, {}),
          /* @__PURE__ */ M(dM, { structureProtectionMode: ge }),
          /* @__PURE__ */ M(fM, { textDirection: xe }),
          /* @__PURE__ */ M(hM, {}),
          /* @__PURE__ */ M(MM, {}),
          l
        ] }),
        Hr && /* @__PURE__ */ M(XP, {})
      ] })
    ] }, te.verseLayout ?? "inline")
  );
}), bN = hn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ M(qy, { ref: r, ...i });
});
function $y() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function qo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? $y() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Iy(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? $y() : r,
    quote: e,
    type: "thread"
  };
}
function ip(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function u0(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Za(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class d0 {
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
    this._comments = t, Za(this);
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
          const c = ip(a);
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
    this._comments = i, Za(this);
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
          const c = ip(a);
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
    return this._comments = n, Za(this), t.type === "comment" ? {
      index: s,
      markedComment: u0(t)
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
    return t !== null ? t.doc.get("comments", Xu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Qu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Xu();
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
      ck,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      vt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof lk) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const g = p.insert, h = p.retain, m = p.delete, b = d.parent, T = d === r ? void 0 : b instanceof Qu && this._comments.find((C) => C.id === b.get("id"));
              if (Array.isArray(g)) {
                const C = f;
                g.slice().reverse().forEach((R) => {
                  const S = R.get("id"), W = R.get("type") === "thread" ? Iy(
                    R.get("quote"),
                    R.get("comments").toArray().map(
                      (B) => qo(
                        B.get("content"),
                        B.get("author"),
                        B.get("id"),
                        B.get("timeStamp"),
                        B.get("deleted")
                      )
                    ),
                    S
                  ) : qo(
                    R.get("content"),
                    R.get("author"),
                    S,
                    R.get("timeStamp"),
                    R.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(W, T, C);
                  });
                });
              } else if (typeof h == "number")
                f += h;
              else if (typeof m == "number")
                for (let C = 0; C < m; C++) {
                  const R = T === void 0 || T === !1 ? this._comments[f] : T.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(R, T);
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
function f0(e) {
  const [t, r] = fe(e.getComments());
  return K(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function p0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Y(null);
  return K(() => {
    i.current !== null && i.current.focus();
  }, []), K(() => {
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
function h0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return An(
    /* @__PURE__ */ M(p0, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Ly() {
  const [e, t] = fe(null), r = me(() => {
    t(null);
  }, []), n = Ve(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ M(h0, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const g0 = {
  ...Sm,
  paragraph: "CommentEditorTheme__paragraph"
};
function m0(...e) {
  return e.filter(Boolean).join(" ");
}
function pn({
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
      className: m0(
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
function y0({
  className: e
}) {
  return /* @__PURE__ */ M(Ap, { className: e || "ContentEditable__root" });
}
function b0({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ M("div", { className: t || "Placeholder__root", children: e });
}
const sp = _p("INSERT_INLINE_COMMAND");
function k0({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Y(null), s = me(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return K(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), As(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ M("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ M("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ M("i", { className: "icon add-comment" }) }) });
}
function x0({ onEscape: e }) {
  const [t] = ae();
  return K(() => t.registerCommand(
    Cp,
    (r) => e(r),
    Or
  ), [t, e]), null;
}
function Dy({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ M(Ep, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: g0
  }, children: /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ M(
      sk,
      {
        contentEditable: /* @__PURE__ */ M(y0, { className: e }),
        placeholder: /* @__PURE__ */ M(b0, { children: s }),
        ErrorBoundary: Np
      }
    ),
    /* @__PURE__ */ M(ik, { onChange: n }),
    /* @__PURE__ */ M(wp, {}),
    t !== !1 && /* @__PURE__ */ M(tk, {}),
    /* @__PURE__ */ M(x0, { onEscape: r }),
    /* @__PURE__ */ M(rk, {}),
    i !== void 0 && /* @__PURE__ */ M(Pp, { editorRef: i })
  ] }) });
}
function Uy(e, t) {
  return me(
    (r, n) => {
      r.read(() => {
        e(ok()), t(!ak(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function T0({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Y(null), c = Ve(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Y(null), d = zy(), u = me(() => {
    e.getEditorState().read(() => {
      const h = w();
      if (A(h)) {
        l.current = h.clone();
        const m = h.anchor, b = h.focus, T = Gb(
          e,
          m.getNode(),
          m.offset,
          b.getNode(),
          b.offset
        ), C = a.current;
        if (T !== null && C !== null) {
          const { left: R, bottom: S, width: $ } = T.getBoundingClientRect(), W = Jb(e, T);
          let B = W.length === 1 ? R + $ / 2 - 125 : R - 125;
          B < 10 && (B = 10), C.style.left = `${B}px`, C.style.top = `${S + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const _ = W.length, { container: V } = c, H = c.elements, ge = H.length;
          for (let Q = 0; Q < _; Q++) {
            const Ie = W[Q];
            let xe = H[Q];
            xe === void 0 && (xe = document.createElement("span"), H[Q] = xe, V.appendChild(xe));
            const Be = `position:absolute;top:${Ie.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Ie.left}px;height:${Ie.height}px;width:${Ie.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            xe.style.cssText = Be;
          }
          for (let Q = ge - 1; Q >= _; Q--) {
            const Ie = H[Q];
            V.removeChild(Ie), H.pop();
          }
        }
      }
    });
  }, [e, c]);
  As(() => {
    u();
    const h = c.container, m = document.body;
    return m !== null ? (m.appendChild(h), () => {
      m.removeChild(h);
    }) : () => {
    };
  }, [c.container, u]), K(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (h) => (h.preventDefault(), t(), !0), p = () => {
    if (s) {
      let h = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      h.length > 100 && (h = h.slice(0, 99) + "…"), r(
        Iy(h, [qo(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, g = Uy(i, o);
  return /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ M(
      Dy,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: g
      }
    ),
    /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ M(pn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ M(
        pn,
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
function C0({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Y(null), c = zy(), l = Uy(i, o);
  return /* @__PURE__ */ _e(Pn, { children: [
    /* @__PURE__ */ M(
      Dy,
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
      pn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(qo(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(Ub, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ M("i", { className: "send" })
      }
    )
  ] });
}
function Fy({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ _e(Pn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ _e("div", { className: "Modal__content", children: [
      /* @__PURE__ */ M(
        pn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ M(
        pn,
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
function op({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = fe(0);
  K(() => {
    const d = () => {
      s(performance.timeOrigin + performance.now());
    };
    d();
    const u = window.setInterval(d, 6e4);
    return () => {
      window.clearInterval(u);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Ly();
  return /* @__PURE__ */ _e("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ M("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ _e("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ M("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ _e(Pn, { children: [
      /* @__PURE__ */ M(
        pn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ M(
              Fy,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
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
function _0({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = fe(0), [l, d] = Ly(), u = Ve(
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
    return f.type === "thread" ? /* @__PURE__ */ _e(
      "li",
      {
        onClick: () => {
          const h = s.get(p);
          if (h !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const m = document.activeElement;
            o.update(
              () => {
                const b = Array.from(h)[0], T = oe(b);
                Se(T) && T.selectStart();
              },
              {
                onUpdate() {
                  m !== null && m.focus();
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
              pn,
              {
                onClick: () => {
                  d("Delete Thread", (h) => /* @__PURE__ */ M(
                    Fy,
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
            op,
            {
              comment: h,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            h.id
          )) }),
          /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ M(
            C0,
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
      op,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function S0({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Y(null), o = r.length === 0;
  return /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ M("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ M(
      _0,
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
function zy() {
  const e = Op(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function v0({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Op(), [a] = ae(), c = Ve(() => {
    const B = new d0(a, s);
    return r && B.registerOnChange(r), t?.(B), B;
  }, [a, s, r, t]), l = f0(c), d = Ve(() => /* @__PURE__ */ new Map(), []), [u, f] = fe(), [p, g] = fe([]), [h, m] = fe(!1), [b, T] = fe(!1), { yjsDocMap: C } = o;
  K(() => {
    if (e) {
      const B = e("comments", C);
      return c.registerCollaboration(B);
    }
    return () => {
    };
  }, [c, e, C]);
  const R = me(() => {
    a.update(() => {
      const B = w();
      B !== null && (B.dirty = !0);
    }), m(!1);
  }, [a]), S = me(
    (B, _) => {
      if (B.type === "comment") {
        const V = c.deleteCommentOrThread(B, _);
        if (!V)
          return;
        const { markedComment: H, index: ge } = V;
        c.addComment(H, _, ge);
      } else {
        c.deleteCommentOrThread(B);
        const V = _ !== void 0 ? _.id : B.id, H = d.get(V);
        H !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ge of H) {
              const Q = oe(ge);
              Se(Q) && (Q.deleteID(on, V), Q.hasNoIDsForEveryType() && lo(Q));
            }
          });
        });
      }
    },
    [c, a, d]
  ), $ = me(
    (B, _, V, H) => {
      c.addComment(B, V), _ && (a.update(() => {
        A(H) && Jp(H, on, B.id);
      }), m(!1));
    },
    [c, a]
  );
  K(() => {
    const B = [];
    let _;
    for (const V of p) {
      const H = d.get(V);
      if (H !== void 0)
        for (const ge of H) {
          const Q = a.getElementByKey(ge);
          Q !== null && (Q.classList.add("selected"), B.push(Q), _ = window.setTimeout(() => {
            T(!0);
          }, 0));
        }
    }
    return () => {
      _ !== void 0 && window.clearTimeout(_);
      for (const V of B)
        V.classList.remove("selected");
    };
  }, [p, a, d]), K(() => {
    if (!a.hasNodes([nt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const B = /* @__PURE__ */ new Map();
    return $e(
      Mp(
        a,
        nt,
        (_) => hs(_.getTypedIDs()),
        (_, V) => {
          for (const [H, ge] of Object.entries(_.getTypedIDs()))
            ge.forEach((Q) => {
              V.addID(H, Q);
            });
        }
      ),
      a.registerMutationListener(
        nt,
        (_) => {
          a.getEditorState().read(() => {
            for (const [V, H] of _) {
              const ge = oe(V);
              let Q = [];
              H === "destroyed" ? Q = B.get(V) ?? [] : Se(ge) && (Q = ge.getTypedIDs()[on] ?? []);
              for (const Ie of Q) {
                let xe = d.get(Ie);
                B.set(V, Q), H === "destroyed" ? xe !== void 0 && (xe.delete(V), xe.size === 0 && d.delete(Ie)) : (xe === void 0 && (xe = /* @__PURE__ */ new Set(), d.set(Ie, xe)), xe.has(V) || xe.add(V));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: _, tags: V }) => {
        _.read(() => {
          const H = w();
          let ge = !1, Q = !1;
          if (A(H)) {
            const Ie = H.anchor.getNode();
            if (E(Ie)) {
              const xe = Yk(Ie, on, H.anchor.offset) ?? [];
              xe !== null && (g(xe), ge = !0), H.isCollapsed() || (f(Ie.getKey()), Q = !0);
            }
          }
          ge || g((Ie) => Ie.length === 0 ? Ie : []), Q || f(null), !V.has("collaboration") && A(H) && m(!1);
        });
      }),
      a.registerCommand(
        sp,
        () => {
          const _ = window.getSelection();
          return _ !== null && _.removeAllRanges(), m(!0), !0;
        },
        wn
      )
    );
  }, [a, d]);
  const W = () => {
    a.dispatchCommand(sp, void 0);
  };
  return /* @__PURE__ */ _e(Pn, { children: [
    h && An(
      /* @__PURE__ */ M(
        T0,
        {
          editor: a,
          cancelAddComment: R,
          submitAddComment: $
        }
      ),
      document.body
    ),
    u != null && !h && An(
      /* @__PURE__ */ M(
        k0,
        {
          anchorKey: u,
          editor: a,
          showComments: b,
          onAddComment: W
        }
      ),
      document.body
    ),
    n !== null && An(
      /* @__PURE__ */ M(
        pn,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => T(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ M("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && An(
      /* @__PURE__ */ M(
        S0,
        {
          comments: l,
          submitAddComment: $,
          deleteCommentOrThread: S,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function M0() {
  const e = Y(void 0), t = me((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function E0(e, t) {
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
function A0(e, t) {
  K(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      E0(r, t);
    };
  }, [t, e]);
}
const kN = hn(function(t, r) {
  const n = Y(null), i = Y(!0), s = Y(null), [o, a] = fe(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: g, view: h } = {} } = t, m = (g ?? !1) || _s(h), [b, T] = M0();
  A0(f, b), K(() => {
    if (process.env.NODE_ENV !== "production") {
      const S = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(S), p || console.warn(S);
    }
  }, [p]), $o(r, () => ({
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
    applyUpdate(S, $) {
      n.current?.applyUpdate(S, $);
    },
    replaceEmbedUpdate(S, $) {
      return n.current?.replaceEmbedUpdate(S, $);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(S) {
      n.current?.setSelection(S);
    },
    setAnnotation(S, $, W, B, _) {
      typeof B == "function" || B === void 0 ? n.current?.setAnnotation(S, $, W, B, _) : n.current?.setAnnotation(S, $, W, B);
    },
    removeAnnotation(S, $) {
      n.current?.removeAnnotation(S, $);
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
    replaceCharacterMarker(S, $) {
      return n.current?.replaceCharacterMarker(S, $) ?? !1;
    },
    extendCharacterMarker(S, $) {
      return n.current?.extendCharacterMarker(S, $) ?? !1;
    },
    insertMarker(S) {
      return n.current?.insertMarker(S);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(S, $) {
      return n.current?.applyMarkerMenuSelection(S, $);
    },
    splitParagraphWithMarker(S) {
      n.current?.splitParagraphWithMarker(S);
    },
    commitTypedMarker(S, $) {
      return n.current?.commitTypedMarker(S, $) ?? !1;
    },
    commitTypedCloser(S) {
      return n.current?.commitTypedCloser(S) ?? !1;
    },
    insertNote(S, $, W) {
      n.current?.insertNote(S, $, W);
    },
    selectNote(S) {
      n.current?.selectNote(S);
    },
    selectAfterNote(S) {
      n.current?.selectAfterNote(S);
    },
    selectNoteTextOffset(S, $, W) {
      n.current?.selectNoteTextOffset(S, $, W);
    },
    getNoteOps(S) {
      return n.current?.getNoteOps(S);
    },
    getOpsAfterNote(S) {
      return n.current?.getOpsAfterNote(S);
    },
    takeOpsAfterNote(S) {
      return n.current?.takeOpsAfterNote(S);
    },
    getNoteIndex(S) {
      return n.current?.getNoteIndex(S);
    },
    getNoteKey(S) {
      return n.current?.getNoteKey(S);
    },
    highlightNote(S) {
      n.current?.highlightNote(S);
    },
    setComments(S) {
      b.current?.setComments(S), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const C = me(
    (S, $, W, B) => {
      if (!d) return;
      const _ = b.current?.getComments();
      d(S, _, $, W, B);
    },
    [b, d]
  ), R = me(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const S = b.current?.getComments();
    l(S);
  }, [b, i, l]);
  return K(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ M(nk, { children: /* @__PURE__ */ _e(qy, { ref: n, onUsjChange: C, ...f, children: [
    /* @__PURE__ */ M(
      v0,
      {
        setCommentStore: T,
        onChange: R,
        showCommentsContainerRef: m ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ M("div", { ref: s, className: "comment-container" })
  ] }) });
});
function En(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function P0(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function N0(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const w0 = /^[#\w().,%/\s-]+$/;
function Nr(e) {
  return e != null;
}
const O0 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, R0 = {
  left: "right",
  right: "left"
}, q0 = "var(--usj-font-fallback, serif)";
function Ky(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${P0(i)}"`).join(", ")}, ${q0}`;
}
const tl = ".editor-input.usfm", $0 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function I0(e) {
  return $0.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${tl}".`
  ), tl);
}
function L0(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Ky(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (w0.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Nr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Nr(t.firstLineIndent) && s.push(`text-indent: ${En(t.firstLineIndent * 20 * r)}vw`), Nr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${En(t.leftMargin * 20 * r)}vw`), Nr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${En(t.rightMargin * 20 * r)}vw`
  ), Nr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${En(t.spaceBefore * r)}pt`), Nr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${En(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = O0[n ? R0[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const ap = { c: 150, ca: 133, cp: 150 };
function cp(e, t) {
  return e && Nr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function D0(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Nr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = cp(e.markers.c, ap.c);
  return ["ca", "cp"].map((i) => {
    const s = cp(
      e.markers[i],
      ap[i]
    ), o = En(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function xN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = tl } = t, s = I0(i), o = [], a = [];
  e.defaultFont && a.push(Ky(e.defaultFont)), Nr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${En(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = L0(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${N0(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...D0(e, s)), o.join(`
`);
}
export {
  Sg as BLOCK_VERSE_VIEW_MODE,
  x as CategoryType,
  bN as Editorial,
  ds as GENERATOR_NOTE_CALLER,
  qp as HIDDEN_NOTE_CALLER,
  kN as Marginal,
  k as MarkerType,
  _g as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Jl as STANDARD_VIEW_MODE,
  mo as defaultStyleInfo,
  yN as directionToNames,
  N_ as filterAndRankItems,
  xN as generateUsjCss,
  gN as getDefaultViewMode,
  ta as getDefaultViewOptions,
  o1 as getEnterMenuItems,
  s1 as getMarkerMenuItems,
  mN as getViewMode,
  Ql as getViewOptions,
  _s as isBlockVerseLayout,
  nn as isInsertEmbedOpOfType,
  B_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
