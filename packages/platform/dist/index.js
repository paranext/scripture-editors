import { jsx as _, jsxs as Se, Fragment as Tn } from "react/jsx-runtime";
import { forwardRef as Ln, useState as he, useRef as Y, useCallback as de, useEffect as j, useMemo as De, memo as zy, createContext as Wf, useContext as Hf, Children as jy, isValidElement as By, cloneElement as Vy, useImperativeHandle as jc, useLayoutEffect as Ms } from "react";
import { assertSafeKey as Ve, isValidBookCode as Wy, MARKER_OBJECT_PROPS as Hy, USJ_VERSION as vr, USJ_TYPE as _r, isUsjClosingMarkerLocation as Gf, isUsjTextContentLocation as Bc, indexesFromUsjJsonPath as Mi, isUsjAttributeKeyLocation as Mu, isUsjAttributeMarkerLocation as Gy, isUsjClosingAttributeMarkerLocation as Jy, isUsjMarkerLocation as Yy, isUsjPropertyValueLocation as Xy, getUsjDocumentLocationTypeName as Qy, usjJsonPathFromIndexes as gn, EMPTY_USJ as Jf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as je, $parseSerializedNode as Es, DecoratorNode as As, ElementNode as Zt, isHTMLElement as Dn, TextNode as ze, $isRangeSelection as N, $isElementNode as R, $isTextNode as C, createState as Lo, $getState as te, ParagraphNode as Vc, $isRootNode as Yf, $createTextNode as ke, $getSelection as w, $setState as bt, $getCommonAncestor as Zy, $isLineBreakNode as Do, NODE_STATE_KEY as Ps, $getEditor as Ei, $hasUpdateTag as eb, $getNodeByKey as X, $getRoot as Ee, $createRangeSelection as Uo, $createPoint as Eu, $setSelection as xn, $getCharacterOffsets as Xf, KEY_DOWN_COMMAND as Pr, COMMAND_PRIORITY_HIGH as Ue, HISTORY_MERGE_TAG as Qf, CLICK_COMMAND as Fo, COMMAND_PRIORITY_EDITOR as vn, isDOMNode as Zf, $getNearestNodeFromDOMNode as Ns, CONTROLLED_TEXT_INSERTION_COMMAND as Wc, PASTE_COMMAND as Tr, COMMAND_PRIORITY_CRITICAL as xr, CUT_COMMAND as _n, DROP_COMMAND as Hc, DELETE_CHARACTER_COMMAND as tb, DELETE_WORD_COMMAND as rb, DELETE_LINE_COMMAND as nb, $isDecoratorNode as ep, COPY_COMMAND as Ko, COMMAND_PRIORITY_NORMAL as ui, SELECTION_CHANGE_COMMAND as cr, BLUR_COMMAND as Gc, $addUpdateTag as Cn, SKIP_DOM_SELECTION_TAG as ib, CLEAR_HISTORY_COMMAND as sb, COMMAND_PRIORITY_LOW as Rt, $getPreviousSelection as ob, $isRootOrShadowRoot as ab, CAN_UNDO_COMMAND as cb, CAN_REDO_COMMAND as lb, $isNodeSelection as tp, DRAGSTART_COMMAND as ub, $createNodeSelection as rp, getDOMSelectionFromTarget as db, $onUpdate as fb, KEY_ENTER_COMMAND as np, LineBreakNode as ip, $copyNode as pb, FOCUS_COMMAND as hb, KEY_ESCAPE_COMMAND as sp, INSERT_PARAGRAPH_COMMAND as co, createCommand as op, HISTORIC_TAG as Jc, createEditor as gb, UNDO_COMMAND as ap, REDO_COMMAND as cp, CLEAR_EDITOR_COMMAND as mb } from "lexical";
import { addClassNamesToElement as Qn, removeClassNamesFromElement as xa, $findMatchingParent as it, $dfsIterator as lp, $dfs as Ai, mergeRegister as Qe, registerNestedElementResolver as up, $unwrapNode as Ya, IS_APPLE as lo } from "@lexical/utils";
import { useLexicalNodeSelection as yb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Pt } from "fast-equals";
import ts from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as bb, $getHtmlContent as kb, $getLexicalContent as Tb } from "@lexical/clipboard";
import { TreeView as xb } from "@lexical/react/LexicalTreeView";
import * as vb from "react-dom";
import { createPortal as kn } from "react-dom";
import { LexicalComposer as dp } from "@lexical/react/LexicalComposer";
import { ContentEditable as fp } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as pp } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as hp } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as gp } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as _b } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Cb, createDOMRange as Sb, createRectsFromDOMRange as Mb } from "@lexical/selection";
import { autoUpdate as Eb, computePosition as Ab, shift as Pb, flip as Nb } from "@floating-ui/dom";
import { $generateNodesFromDOM as wb } from "@lexical/html";
import { AutoFocusPlugin as Ob } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as qb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as mp, LexicalCollaboration as Rb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as $b } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Ib } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Lb, $isRootTextContentEmpty as Db } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Ub } from "@lexical/yjs";
import { Array as Au, Map as Pu, YArrayEvent as Fb } from "yjs";
const va = (e) => je(Es(e)), Kb = {
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
function yp(e) {
  return Kb[e];
}
const O = " ", uo = "​", It = O, Yc = `${O}|`, or = "p", fo = "+", bp = "-", ws = "immutable-note-caller", po = "chapter", Xa = "verse", Nu = "invalid", zb = "text-spacing", jb = "formatted-font", Bb = "marker-", Xc = "external-usj-mutation", Vb = "selection-change", Hr = "cursor-change", Qa = "annotation-change", di = "delta-change", kp = "marker-settle", wu = [
  Xc,
  Vb,
  Hr,
  Qa,
  di
], Sn = "zmsc-s", fi = "zmsc-e", Wb = [Sn, fi], Hb = [
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
  fi
], Tp = 1, Qc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Gb = Qc.filter((e) => e !== "sid" && e !== "eid");
class Jt extends As {
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
    return vp().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Hb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Tp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function xp(e) {
  return Wb.includes(e);
}
function vp(e, t, r, n, i) {
  return je(new Jt(e, t, r, n, void 0, i));
}
function $e(e) {
  return e instanceof Jt;
}
const Zc = "f", Jb = [
  // Footnote
  Zc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function rs(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Yb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], _p = 1;
class Ne extends Zt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Zc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (rs(t) === "crossref" ? bp : fo), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Ne(r, n, i, s, o, a);
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
    return el().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Jb.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", rs(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", rs(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Dn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", rs(this.getMarker()))), { element: r };
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
      version: _p
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
function Xb(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: el(t, r, n) };
}
function el(e, t, r, n, i) {
  return je(new Ne(e, t, r, n, i));
}
function Qb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ne.isValidMarker(t) && e.classList.contains(Ne.getType());
}
function z(e) {
  return e instanceof Ne;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Za = {
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
}, Ou = {
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
function ar(e) {
  const t = Object.hasOwn(Za, e) ? Za[e] : void 0, r = Object.hasOwn(Ou, e) ? Ou[e] : void 0;
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
const Cp = "v", Sp = "c", dn = "fig", qu = "tr", ec = "esb", Mp = "esbe", Zb = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, ek = {
  "": "start",
  c: "center",
  r: "end"
};
function tk(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Ru(e) {
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
const rk = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function nk(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === uo && s + 1 < e.length && Ru(e[s + 1]) || (Ru(o) ? (r || (i = t.length, t += o), r = !0) : rk.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function ik(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function sk(e, t) {
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
const ok = /^(?:qt[1-5]?|ts)-[se]$/;
function zo(e) {
  return ok.test(e) || xp(e);
}
function _a(e, t) {
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
function ak(e, t, r) {
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
      const m = e.indexOf("\\", i), y = m === -1 ? e.length : m;
      a(nk(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: d } = sk(e, i + 1);
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
    if (l === Cp) {
      const { word: m, next: y } = _a(e, i);
      i = y, n.push({ kind: "verse", number: m });
      continue;
    }
    if (l === Sp) {
      const { word: m, next: y } = _a(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: m });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === b.Note || h === void 0 && Ne.isValidMarker(l)) {
      const { word: m, next: y } = _a(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: m || "+" });
      continue;
    }
    if (h === b.Milestone || h === void 0 && zo(l)) {
      const m = gk(e, c, l, i);
      if (m)
        n.push(m.token), m.ejectedText && o(m.ejectedText), i = m.next;
      else {
        const y = e.indexOf("\\", i), x = y === -1 ? e.length : y;
        o(e.slice(c, x)), i = x;
      }
      continue;
    }
    h === b.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : h === b.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : ho(p) ? (u(), ho(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === ec || l === Mp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const $u = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function ho(e) {
  return Object.hasOwn($u, e) ? $u[e] : void 0;
}
function ck(e) {
  return ho(e) !== void 0;
}
const lk = /([-\w]+)\s*=\s*"(.*?)"/g, uk = /[\s\u200B]*[\n\r][\s\u200B]*/g, Ep = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Os(e) {
  return Ep[e];
}
const dk = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function fk(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function jo(e, t, r = Ep[t]) {
  const n = e.replace(uk, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(lk)];
  if (s.length > 0) {
    if (!fk(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      dk.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function qs(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function pk(e) {
  const t = Nr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function hk(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = jo(e.slice(n + 1, i), r, qs(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function gk(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = jo(s.slice(o + 1), r, qs(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = hk(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function br(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", O);
}
function fn(e) {
  return e.content || (e.content = []), e.content;
}
function Nr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d;
  const u = () => d ? fn(d) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? fn(o[o.length - 1].object) : fn(s);
    if (o.length > 0)
      return fn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return u();
      i = { type: "para", marker: or, content: [] }, u().push(i);
    }
    return fn(i);
  }, h = (Z) => {
    const K = p();
    typeof Z == "string" && typeof K[K.length - 1] == "string" ? K[K.length - 1] = K[K.length - 1] + Z : K.push(Z);
  }, m = (Z) => {
    for (let K = Z; K < o.length; K += 1) {
      const re = o[K].object;
      re.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, x = (Z) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, Z || (s.closed = "false"), s = void 0);
  }, S = () => {
    c = void 0, l = void 0;
  }, M = (Z) => {
    d && (Z || (d.closed = "false"), d = void 0);
  };
  let $, A = "", k;
  const U = () => {
    A && h(br(A)), A = "";
  }, D = (Z = !1) => {
    $?.type === "sidebar" ? A = "" : Z && A.endsWith(`
`) && (A = A.slice(0, -1)), $ = void 0, U();
  }, G = () => {
    if (!k)
      return;
    const Z = { type: "char", marker: k.marker, content: [] };
    k.value && (Z.content = [br(k.value)]), p().push(Z), o.push({ object: Z }), k = void 0;
  }, Q = (Z, K) => {
    f = !1, S(), y(), x(!1), i = { type: "para", marker: Z, content: [] }, K && (i.content = [br(K)]), u().push(i);
  }, ce = () => {
    k && (Q(k.marker, k.value), k = void 0);
  };
  let fe;
  const oe = () => {
    if (fe) {
      if (fe.shape === "para")
        Q(dn, fe.value);
      else {
        const Z = { type: "char", marker: dn, content: [] };
        fe.value && (Z.content = [br(fe.value)]), p().push(Z), o.push({ object: Z });
      }
      fe = void 0;
    }
  }, me = ak(e, t?.getMarker ?? ar, n);
  for (let Z = 0; Z < me.length; Z++) {
    const K = me[Z];
    if (k) {
      if (K.kind === "text") {
        k.value += K.text;
        continue;
      }
      if (k.shape === "char" && K.kind === "end" && K.marker.replace(/^\+/, "") === k.marker) {
        if (k.value.trim() === "") {
          p().push({ type: "char", marker: k.marker, content: [] }), k = void 0, D();
          continue;
        }
        Object.assign(k.target, {
          [k.attrName]: br(k.value.trim())
        });
        const re = k.marker;
        if (k = void 0, re === "ca") {
          const Re = me[Z + 1];
          Re?.kind === "text" && /^[\s\u200B]*$/.test(Re.text) && Z++;
        }
        continue;
      }
      if (k.shape === "para" && (K.kind === "para" || K.kind === "chapter")) {
        const re = k.value.replace(/[\s\u200B]+$/, "");
        re === "" ? (Q(k.marker), k = void 0) : (Object.assign(k.target, { [k.attrName]: br(re) }), k = void 0);
      } else {
        $ = void 0, (K.kind === "para" || K.kind === "chapter") && k.value.endsWith(`
`) && (k.value = k.value.slice(0, -1)), k.shape === "para" ? ce() : G(), Z--;
        continue;
      }
    }
    if (fe) {
      if (K.kind === "text" || K.kind === "optbreak") {
        fe.value += K.kind === "text" ? K.text : "//";
        continue;
      }
      if (K.kind === "end" && K.marker.replace(/^\+/, "") === dn) {
        const re = fe.value.indexOf("|"), Re = re >= 0 ? jo(fe.value.slice(re + 1), dn) : void 0;
        if (Re) {
          const ot = {};
          for (const [Kt, At] of Object.entries(Re))
            ot[Kt === "src" ? "file" : Kt] = At;
          const Ft = {
            type: "figure",
            marker: dn,
            ...ot
          }, pe = fe.value.slice(0, re);
          pe && (Ft.content = [br(pe)]), h(Ft), fe = void 0;
          continue;
        }
      }
      oe(), Z--;
      continue;
    }
    if ($)
      if (K.kind === "text") {
        if (K.text.includes(`
`) && /^[\s\u200B]*$/.test(K.text)) {
          A += K.text;
          continue;
        }
        D();
      } else if (K.kind === "charOpen" || K.kind === "para") {
        const re = K.kind === "para" || !K.isNested ? ho(K.marker) : void 0;
        if (re && re.targetTypes.includes($.type)) {
          A = "", k = {
            target: $,
            attrName: re.attrName,
            marker: K.marker,
            shape: re.shape,
            value: ""
          };
          continue;
        }
        D(K.kind === "para");
      } else
        D(K.kind === "chapter");
    if (!s && !n && (K.kind === "charOpen" && !K.isNested && K.marker === dn || K.kind === "para" && K.marker === dn)) {
      y(), fe = { shape: K.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (K.kind) {
      case "text": {
        let re = K.text;
        if (!s && re.endsWith(`
`)) {
          const Re = me[Z + 1];
          (Re === void 0 || Re.kind === "para" || Re.kind === "chapter") && (re = re.slice(0, -1));
        }
        re && h(br(re));
        break;
      }
      case "para": {
        const re = !s && !n;
        if (re && K.marker === qu) {
          y(), c || (c = { type: "table", content: [] }, u().push(c)), l = { type: "table:row", marker: qu, content: [] }, fn(c).push(l), i = l, f = !1;
          break;
        }
        if (re && l) {
          const Re = Zb.exec(K.marker);
          if (Re && tk(Re)) {
            y();
            const [, ot, Ft, pe] = Re, Kt = {
              type: "table:cell",
              marker: pe ? K.marker.slice(0, K.marker.indexOf("-")) : K.marker,
              align: ek[ot],
              content: []
            };
            pe && (Kt.colspan = String(Number(pe) + 1 - Number(Ft))), fn(l).push(Kt), i = Kt;
            break;
          }
        }
        if (S(), !n && K.marker === ec) {
          y(), x(!1), M(!1), d = { type: "sidebar", marker: ec, content: [] }, r.push(d), i = void 0, $ = d, f = !1;
          break;
        }
        if (K.marker === Mp && d) {
          y(), x(!1), M(!0), i = void 0;
          break;
        }
        Q(K.marker);
        break;
      }
      case "verse": {
        x(!1);
        const re = { type: "verse", marker: Cp, number: K.number };
        h(re), $ = re;
        break;
      }
      case "chapter": {
        y(), x(!1), S(), M(!1), i = void 0;
        const re = {
          type: "chapter",
          marker: Sp,
          number: K.number
        };
        r.push(re), $ = re, f = !0;
        break;
      }
      case "note": {
        x(!1);
        const re = p();
        s = { type: "note", marker: K.marker, caller: K.caller, content: [] }, a = o.length, re.push(s), $ = s;
        break;
      }
      case "charOpen": {
        if (!K.isNested) {
          const ot = s ? a : 0;
          m(ot), o.length = ot;
        }
        const re = p(), Re = { type: "char", marker: K.marker, content: [] };
        re.push(Re), o.push({ object: Re });
        break;
      }
      case "end": {
        const re = K.marker.replace(/^\+/, ""), Re = s ? a : 0, ot = o.findLastIndex((Ft, pe) => pe >= Re && Ft.object.marker === re);
        ot >= 0 ? (mk(o[ot].object), m(ot + 1), o.length = ot) : s && s.marker === re ? x(!0) : (m(Re), o.length = Re, h({ type: "unmatched", marker: `${K.marker}*` }));
        break;
      }
      case "milestone":
        h({ type: "ms", marker: K.marker, ...K.attributes });
        break;
      case "optbreak":
        h({ type: "optbreak" });
        break;
    }
  }
  if (fe && oe(), k)
    if (k.shape === "para") {
      const Z = k.value.replace(/[\s\u200B]+$/, "");
      Z === "" ? Q(k.marker) : Object.assign(k.target, { [k.attrName]: br(Z) }), k = void 0;
    } else
      k.value.endsWith(`
`) && (k.value = k.value.slice(0, -1)), G();
  y(), x(!1), M(!1);
  const qe = (Z) => {
    for (const K of Z)
      typeof K != "string" && K.content && (qe(K.content), K.content.length === 0 && delete K.content);
  };
  return qe(r), r;
}
function mk(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = jo(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
function Me(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function nt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function $t(e, t) {
  let r = Me(e);
  return t && (r += `${O}${t}`), r += " ", r;
}
function St(e) {
  return " " + e + O;
}
const yk = 1;
class lr extends ze {
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
    return new lr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      version: yk
    };
  }
}
function ct(e, t, r) {
  return je(new lr(e, t, void 0, r));
}
function P(e) {
  return e instanceof lr;
}
function Rs(e) {
  return e?.type === lr.getType();
}
function rn(e) {
  return e.getTextContent() === mn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function bk(e) {
  e.setTextContent(mn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function mn(e, t, r = !1) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Me(e, r);
}
const Wr = "internal-comment", kk = [Wr], Ap = Object.freeze({}), tc = Object.freeze({}), rc = Object.freeze({}), nc = Object.freeze({}), ic = Object.freeze({}), Tk = 1, Zn = /* @__PURE__ */ new Map(), Hi = /* @__PURE__ */ new Map(), ei = /* @__PURE__ */ new Map(), ti = /* @__PURE__ */ new Map();
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
  constructor(t = Ap, r, n, i, s, o) {
    super(o), this.__typedIDs = Xs(t), this.__typedOnClicks = Ca(r), this.__typedOnRemoves = Sa(n), this.__typedOnMouseEnters = Ma(i), this.__typedOnMouseLeaves = Ea(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Xs(t.__typedIDs), n = Ca(t.__typedOnClicks), i = Sa(t.__typedOnRemoves), s = Ma(t.__typedOnMouseEnters), o = Ea(t.__typedOnMouseLeaves);
    return new et(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return kk.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return mi().updateFromJSON(t);
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
      Qn(n, pn(t.theme.typedMark, a)), c.length > 1 && Qn(n, pn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Qn(n, pn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = pn(n.theme.typedMark, s), u = pn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Qn(r, d) : l === 0 && xa(r, d), c === 1 ? l === 2 && Qn(r, u) : l === 1 && xa(r, u));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || xa(r, pn("annotationId", h));
      for (const h of a)
        f.has(h) || Qn(r, pn("annotationId", h));
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
    const r = this.getWritable(), n = Xs(r.__typedIDs);
    r.__typedIDs = Xs(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && go(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Ca(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return be(t) ? Zn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Sa(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return be(t) ? Hi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Ma(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return be(t) ? ei.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Ea(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return be(t) ? ti.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!be(a))
      return;
    Ve(t), Ve(r);
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && go(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = mi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Zn.delete(r.getKey()), Hi.delete(r.getKey()), ei.delete(r.getKey()), ti.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Zn.get(this.getKey());
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
    const n = ei.get(this.getKey());
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
    const n = ti.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === tc) {
      const t = Zn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Zn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Zn.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    Ve(t), Ve(r);
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
    if (!this.__typedOnClicks || this.__typedOnClicks === tc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === rc) {
      const t = Hi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Hi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Hi.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    Ve(t), Ve(r);
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === rc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === nc) {
      const t = ei.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      ei.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    ei.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    Ve(t), Ve(r);
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === nc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === ic) {
      const t = ti.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      ti.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    ti.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    Ve(t), Ve(r);
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === ic) {
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
    for (; be(t) && Lu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; be(r) && Lu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = vk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = _k(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ck(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Sk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Xs(e = Ap) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Ve(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Ve(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Ca(e) {
  if (!e || e === tc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Sa(e) {
  if (!e || e === rc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ma(e) {
  if (!e || e === nc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ea(e) {
  if (!e || e === ic)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
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
function Lu(e, t) {
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
function pn(e, t) {
  return `${e}-${t}`;
}
function Du(e) {
  return `external-${e}`;
}
function mi(e, t, r, n, i) {
  return je(new et(e, t, r, n, i));
}
function be(e) {
  return e instanceof et;
}
function Bo(e) {
  return e?.type === et.getType();
}
function go(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function tl(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let h, m;
  for (let y = 0; y < d; y++) {
    const x = a[y];
    if (R(m) && m.isParentOf(x))
      continue;
    if (P(x)) {
      h = x.getParent(), m = void 0;
      continue;
    }
    const S = y === 0, M = y === d - 1;
    let $ = null;
    if (C(x)) {
      const A = x.getTextContentSize(), k = S ? f : 0, U = M ? p : A;
      if (k === 0 && U === 0)
        continue;
      const D = x.splitText(k, U);
      $ = D.length > 1 && (D.length === 3 || S && !M || U === A) ? D[1] : D[0];
    } else {
      if (be(x))
        continue;
      R(x) && x.isInline() && ($ = x);
    }
    if ($ !== null) {
      if ($ && $.is(h))
        continue;
      const A = $.getParent();
      (A == null || !A.is(h)) && (m = void 0), h = A, m === void 0 && (m = mi(), m.addID(t, r, n, i, s, o), $.insertBefore(m)), m.append($);
    } else
      h = void 0, m = void 0;
  }
  t === Wr && R(m) && (u ? m.selectStart() : m.selectEnd());
}
function Mk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (be(n))
      return n.getTypedIDs()[t];
    if (C(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (be(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Mn = Lo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Gr = Lo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ae = Lo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ur = "marker-trailing-space", Pp = 1, Ek = "attribute-run";
function Aa(e) {
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
    return Np(t.runKind).updateFromJSON(t);
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
    t.classList.add(Ek);
    const r = Aa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Aa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Aa(this.__runKind);
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
      version: Pp
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
function Np(e) {
  return je(new wr(e));
}
function Ke(e) {
  return e instanceof wr;
}
const wp = [
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
], Ak = [
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
  ...wp,
  ...Op
], qp = 1, Pk = ["type", "marker", "content"];
class xe extends Zt {
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
    return new xe(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ak.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && wp.includes(t);
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
    return xe.isValidFootnoteMarker(t) || xe.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => wk(t) ? {
        conversion: Nk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Cr().updateFromJSON(t);
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
    return Uu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Uu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Dn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: qp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Cr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Uu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Nk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Cr(t) };
}
function Cr(e, t) {
  return je(new xe(e, t));
}
function wk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return xe.isValidMarker(t) && e.classList.contains(xe.getType());
}
function L(e) {
  return e instanceof xe;
}
function Ok(e) {
  return e?.type === xe.getType();
}
const mo = "v", Rp = 1, qk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class ft extends ze {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = mo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ft(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return $p().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Xa, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
function $p(e, t, r, n, i, s) {
  return je(new ft(e, t, r, n, i, s));
}
function Ae(e) {
  return e instanceof ft;
}
function Ip(e) {
  return e?.type === ft.getType();
}
const Rk = /* @__PURE__ */ new Set(["closed"]);
function sr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Rk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Lp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Dp(e) {
  const t = Object.keys(e).filter((n) => !Gb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Up(e, t, r, n) {
  return Lp(
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
function os(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function $k(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : os(e) === void 0 && Fp(e) === void 0;
}
function Fp(e) {
  return e.getChildren().find((t) => C(t) && te(t, ae) === "attribute");
}
function ps(e, t) {
  return $s(e.getNextSibling(), t);
}
const Ik = /^[ \u00A0]+$/;
function rl(e) {
  if (rn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Me(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && Ik.test(r.slice(t.length));
}
function $s(e, t) {
  let r, n, i, s;
  return Ke(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  rl(e) && (r = e, e = e.getNextSibling()), C(e) && te(e, ae) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && rn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Lk(e) {
  let t = e;
  for (; be(t); )
    t = t.getChildren()[0];
  return t;
}
function Jr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = Lk(t[r]);
  if (C(n) && n.getTextContent() === St(e.getCaller()))
    return n;
}
function Kp(e) {
  const t = Jr(e);
  return t ? $s(t.getNextSibling(), "cat") : {};
}
function Pi(e) {
  const t = e.getFirstChild();
  if (!(!C(t) || P(t)) && te(t, ae) !== "attribute")
    return t;
}
function zp(e) {
  const t = Pi(e);
  return t ? $s(t.getNextSibling(), "ca") : {};
}
function jp(e) {
  const t = Pi(e);
  if (!t)
    return;
  const r = $s(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Bp(e) {
  const t = jp(e);
  return t ? $s(t.getNextSibling(), "cp") : {};
}
function Vp(e) {
  const t = e.getParent();
  if (!L(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ae(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || C(n) && te(n, ae) === "attribute" || L(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ke(n)))
        return;
    }
}
function Vo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ke(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  rl(s) && (t = s, s = s.getNextSibling()), C(s) && te(s, ae) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && rn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const yo = "c", Wp = 1, Dk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Et extends Zt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = yo, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Et(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Hp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(po, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Wp
    };
  }
}
function Hp(e, t, r, n, i) {
  return je(new Et(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof Et;
}
function Uk(e) {
  return e?.type === Et.getType();
}
const Gp = 1;
class Yr extends Vc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Yr(t.__key);
  }
  static importJSON(t) {
    return Ht().updateFromJSON(t);
  }
  getMarker() {
    return or;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Gp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ht();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ht() {
  return je(new Yr());
}
function Yt(e) {
  return e instanceof Yr;
}
function Wo(e) {
  return e?.type === Yr.getType();
}
function nl(e) {
  return Yt(e) && Yf(e.getParent());
}
function il(e) {
  return be(e) || nl(e);
}
function Ni(e) {
  let t = e.getParent();
  for (; t && il(t); )
    t = t.getParent();
  return t;
}
function sl(e) {
  return L(Ni(e));
}
function bo(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? sl(t) : t.getChildren().some((i) => L(i) && i.getMarker() === r) ? !0 : void 0;
}
function Fk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = bo(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Is(e) {
  return C(e) && e.getType() === ze.getType() && te(e, ae) !== "attribute";
}
function Kk(e) {
  if (!Is(e) || !e.getTextContent().startsWith(O))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && be(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!L(n))
    return 0;
  for (; be(r); )
    r = r.getLastChild();
  return !P(r) || r.getMarkerSyntax() !== "opening" || bo(r, n) === void 0 ? 0 : 1;
}
function ol(e, t) {
  if (e.getMarkerSyntax() !== "opening" || bo(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? bo(r, t) === !0 ? "spacer" : void 0 : Is(r) ? r.getTextContent().startsWith(O) ? void 0 : "prefix" : "spacer";
}
function zk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && ol(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Jp(e, t) {
  const r = w();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Yp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = ol(t, e);
    if (r !== void 0 && !Jp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        C(n) && n.setTextContent(O + n.getTextContent());
      } else
        t.insertAfter(ke(O));
  });
}
function Xp(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && ol(t, e) !== void 0 && Jp(t, e)) : !1;
}
const Qp = 1, jk = "marker", al = Lo("isGutterMarker", {
  parse: (e) => e === !0
});
class Or extends As {
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
      span: (t) => Hk(t) ? {
        conversion: Bk,
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
    return r && Dn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Qp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Bk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Sr(t, r) };
}
function Sr(e, t) {
  return je(new Or(e, t));
}
function Vk(e) {
  return bt(Sr(jk, e), al, !0);
}
function Wk(e) {
  return vt(e) && te(e, al);
}
function Hk(e) {
  return e?.tagName === "span";
}
function vt(e) {
  return e instanceof Or;
}
function Zp(e) {
  return e?.type === Or.getType();
}
const Gk = ["type", "marker", "content"], sc = "unknown", eh = 1, Jk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Un extends Zt {
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
    return new Un(r, n, i, s);
  }
  static importDOM() {
    return {
      [sc]: (t) => Xk(t) ? {
        conversion: Yk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return cl().updateFromJSON(t);
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
    return Jk.has(this.getTag());
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
    const t = document.createElement(sc);
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
      version: eh
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
  excludeFromCopy(t) {
    return t !== "clone";
  }
}
function Yk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: cl(t, r) };
}
function cl(e, t, r) {
  return je(new Un(e, t, r));
}
function Xk(e) {
  return e?.tagName.toLowerCase() === sc;
}
function we(e) {
  return e instanceof Un;
}
const Qk = "file", Zk = "src", eT = "colspan", tT = "category", rT = "alt", nT = "closed", iT = "false";
function sT(e) {
  return e[nT] !== iT;
}
function oT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === Qk ? Zk : t,
    r
  ]));
}
function aT(e, t) {
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
function ll(e, t, r) {
  const n = r ?? {}, i = sT(n);
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
        opening: `\\${aT(t, n[eT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: sr(oT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [tT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + sr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [rT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: sr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: sr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const Tt = { wantsRun: !1, valueText: void 0 }, qr = {};
function Pa(e, t) {
  if (t === "va")
    return e;
  const r = ps(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function ul(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (R(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function Ho(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = w();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function cT(e) {
  return Ke(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : C(e) && te(e, ae) === "attribute";
}
function lT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!C(e) || te(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Na(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ae(t))
      return t;
    if (!cT(t))
      return;
  }
}
function Fu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ae(t),
    ownerOf: (t) => {
      if (Ke(t))
        return t.getRunKind() === e ? Na(t) : void 0;
      const r = t.getParent();
      return Ke(r) ? r.getRunKind() === e ? Na(r) : void 0 : lT(t) === e ? Na(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ae(t))
        return Tt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Tt : { wantsRun: !0, valueText: O + r };
    },
    scanPieces: (t) => Ae(t) ? ps(Pa(t, e), e) : qr,
    graceSite: (t, r) => Ae(t) ? !r.opener && !r.closer ? ul(Pa(t, e)) : Ho(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ae(t) ? Pa(t, e) : void 0
    }
  };
}
const uT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => L(e),
  ownerOf: () => {
  },
  expectedPieces: () => Tt,
  scanPieces: () => qr,
  graceSite: (e) => L(e) && Xp(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, dT = {
  kind: "char",
  ownerPredicate: (e) => L(e),
  ownerOf: (e) => {
    if (!C(e) || te(e, ae) !== "attribute")
      return;
    const t = e.getParent();
    return L(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!L(e) || os(e) === void 0)
      return Tt;
    const t = sr(e.getUnknownAttributes() ?? {}, Os(e.getMarker()));
    return t === "" ? Tt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => L(e) ? { value: Fp(e) } : qr,
  graceSite: (e, t) => {
    if (!L(e) || t.value)
      return !1;
    const r = os(e);
    if (!r)
      return !1;
    const n = w();
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
    insertRunBefore: (e) => L(e) ? os(e) : void 0
  }
};
function th(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!C(e) || te(e, ae) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function fT(e) {
  const t = e.getParent();
  if (!z(t))
    return;
  const r = Jr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!th(n))
        return;
    }
}
const pT = {
  kind: "cat",
  ownerPredicate: (e) => z(e),
  ownerOf: (e) => {
    if (Ke(e))
      return e.getRunKind() === "cat" && z(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ke(t) ? t.getRunKind() === "cat" && z(t.getParent()) ? t.getParent() ?? void 0 : void 0 : th(e) ? fT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!z(e) || e.getIsCollapsed() !== !1)
      return Tt;
    const t = e.getCategory();
    return t === void 0 ? Tt : { wantsRun: !0, valueText: O + t };
  },
  scanPieces: (e) => z(e) ? Kp(e) : qr,
  graceSite: (e, t) => {
    if (!z(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Jr(e);
      return r !== void 0 && ul(r);
    }
    return Ho(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => z(e) ? Jr(e) : void 0
  }
};
function hT(e) {
  return Ke(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : C(e) && te(e, ae) === "attribute";
}
function gT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!C(e) || te(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function mT(e) {
  const t = e.getParent();
  if (!Ce(t))
    return;
  const r = Pi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!hT(n))
        return;
    }
}
function Ku(e) {
  const t = (r) => Ce(r) ? e === "ca" ? Pi(r) : jp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ce(r),
    ownerOf: (r) => {
      if (Ke(r))
        return r.getRunKind() === e && Ce(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ke(n) ? n.getRunKind() === e && Ce(n.getParent()) ? n.getParent() ?? void 0 : void 0 : gT(r) === e ? mT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ce(r))
        return Tt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Tt : { wantsRun: !0, valueText: O + n };
    },
    scanPieces: (r) => Ce(r) ? e === "ca" ? zp(r) : Bp(r) : qr,
    graceSite: (r, n) => {
      if (!Ce(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && ul(i);
      }
      return Ho(n);
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
function rh(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return C(e) && te(e, ae) === "attribute";
}
function yT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if ($e(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!rh(t))
      return;
  }
}
const bT = {
  kind: "milestone",
  ownerPredicate: (e) => $e(e),
  ownerOf: (e) => {
    const t = Ke(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ke(e.getParent()) ? e.getParent() : rh(e) ? e : void 0;
    if (!t || Ke(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ke(t) ? $e(r) ? r : void 0 : yT(t);
  },
  expectedPieces: (e) => {
    if (!$e(e))
      return Tt;
    const t = Up(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = sr(t, qs(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : O + r };
  },
  scanPieces: (e) => {
    if (!$e(e))
      return qr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Vo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!$e(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = w();
      if (!N(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Ho(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => $e(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, kT = ll("optbreak", void 0, void 0).opening, TT = {
  kind: "optbreak",
  ownerPredicate: (e) => we(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!we(t) || t.getTag() !== "optbreak"))
      return C(e) || vt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: kT }),
  scanPieces: (e) => we(e) ? { value: e.getFirstChild() ?? void 0 } : qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, xT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => we(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => Tt,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, vT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => L(e),
  ownerOf: () => {
  },
  expectedPieces: () => Tt,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, hs = [
  uT,
  dT,
  Fu("va"),
  Fu("vp"),
  pT,
  Ku("ca"),
  Ku("cp"),
  bT,
  TT,
  xT,
  vT
], _T = new Map(hs.map((e) => [e.kind, e]));
function Mr(e) {
  const t = _T.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Xr(e) {
  for (const t of hs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function nh(e) {
  return Xr(e) !== void 0;
}
const ko = "unmatched", ih = 2;
function as(e) {
  return `\\${e}`;
}
class Rr extends ze {
  __marker;
  constructor(t = "", r) {
    super(as(t), r), this.__marker = t, this.__mode = 1;
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
      [ko]: (t) => ST(t) ? {
        conversion: CT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return dl().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? as(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = as(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Nu), r.title = zu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = zu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(ko);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Nu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: ih
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function sh(e) {
  return e.getTextContent() === as(e.getMarker());
}
function zu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function CT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: dl(t) };
}
function dl(e) {
  return je(new Rr(e));
}
function ST(e) {
  return e?.tagName.toLowerCase() === ko;
}
function nn(e) {
  return e instanceof Rr;
}
const gs = "id", oh = 1, MT = [
  "type",
  "marker",
  "code",
  "content"
];
class Lt extends Zt {
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
    return new Lt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return ah(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Wy(t);
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
      version: oh
    };
  }
}
function ah(e, t) {
  return je(new Lt(e, t));
}
function ht(e) {
  return e instanceof Lt;
}
function ch(e) {
  return e?.type === Lt.getType();
}
const lh = 1, ET = "c", uh = "span";
class dr extends As {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = ET, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new dr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => dh(t) ? {
        conversion: AT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return fl().updateFromJSON(t);
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
    const t = document.createElement(uh);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(po, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Dn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(po, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? $t(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: lh
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
function AT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: fl(t) };
}
function fl(e, t, r, n, i, s) {
  return je(new dr(e, t, r, n, i, s));
}
function dh(e) {
  return e ? e.classList.contains(po) && e.tagName.toLowerCase() === uh : !1;
}
function Ls(e) {
  return e instanceof dr;
}
function PT(e) {
  return e?.type === dr.getType();
}
const fh = "table", oc = "immutable-table", ph = 1, NT = ["type", "marker", "content"];
class Fn extends Zt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return oc;
  }
  static clone(t) {
    return new Fn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return wT().updateFromJSON(t);
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
      type: oc,
      ...t !== void 0 && { unknownAttributes: t },
      version: ph
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function wT(e) {
  return je(new Fn(e));
}
function hh(e) {
  return e instanceof Fn;
}
function OT(e) {
  return e?.type === oc;
}
const gh = "table:row", ju = "immutable-table-row", mh = 1, ac = "tr", qT = ["type", "marker", "content"];
class wi extends Zt {
  __marker;
  __unknownAttributes;
  constructor(t = ac, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return ju;
  }
  static clone(t) {
    return new wi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return RT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? ac).setUnknownAttributes(t.unknownAttributes);
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
      version: mh
    };
  }
}
function RT(e, t) {
  return je(new wi(e, t));
}
const yh = "table:cell", Bu = "immutable-table-cell", bh = 1, cc = "tc1", $T = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function IT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Oi extends Zt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = cc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Bu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Oi(r, n, i, s, o);
  }
  static importJSON(t) {
    return LT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? cc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = IT(this.__align);
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
      version: bh
    };
  }
}
function LT(e, t, r, n) {
  return je(new Oi(e, t, r, n));
}
const DT = [
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
  or,
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
], kh = 1, UT = ["type", "marker", "content"];
class Ze extends Vc {
  __marker;
  __unknownAttributes;
  constructor(t = or, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new Ze(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (DT.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: FT,
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
    return r && Dn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: kh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ms(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function FT(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ms(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ms(e, t) {
  return je(new Ze(e, t));
}
function se(e) {
  return e instanceof Ze;
}
function pl(e) {
  return e?.type === Ze.getType();
}
function Go(e, t) {
  const r = e.getChildAtIndex(t);
  return C(r) ? r : void 0;
}
function Xt(e, t) {
  const r = Go(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function ys(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function KT(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function zT(e) {
  return ys(e) ? void 0 : { closed: "false" };
}
function jT(e, t, r, n) {
  const i = t.getMarker(), s = sl(t), o = KT(t);
  if (n) {
    e.append(ct(i, "opening", s));
    const [a] = r;
    Is(a) && !a.getTextContent().startsWith(O) && a.setTextContent(O + a.getTextContent());
  }
  e.append(...r), o && e.append(ct(i, "closing", s));
}
function En(e) {
  return it(e, L) ?? void 0;
}
function hl(e) {
  let t = e.getParent();
  for (; L(t); )
    t = t.getParent();
  return t;
}
function lc(e) {
  const t = Th(e);
  return e.getChildren().every((r) => P(r) || t && te(r, ae) === "attribute" || C(r) && r.getTextContent().replaceAll(O, "") === "");
}
function Th(e) {
  return ys(e);
}
function BT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? sr(r, Os(e.getMarker())) : "";
  n !== "" && t.insertAfter(ke(n)), e.remove();
}
function VT(e, t) {
  if (ys(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ct(e.getMarker(), "closing", sl(e)));
}
function WT(e, t) {
  return L(e) && !ys(e) && !ys(t);
}
function HT(e, t, r) {
  lc(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && Is(n) && !n.getTextContent().startsWith(O) && n.setTextContent(O + n.getTextContent()), e.append(...t);
}
function GT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Th(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = P(l) && l.getMarkerSyntax() === "closing", f = s && te(l, ae) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = WT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      HT(e, o, n);
    else {
      const l = Cr(t.getMarker(), zT(t));
      jT(l, t, o, n), e.insertAfter(l), lc(l) ? l.remove() : c = l;
    }
  i && !a && VT(t, n), lc(t) && BT(t, c);
}
function yi(e, t) {
  let r = e.getParent();
  for (; L(r); )
    GT(e, r, t), r = e.getParent();
}
function gl(e) {
  if (C(e) && !P(e)) {
    const t = e.getTextContent().startsWith(O) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (R(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      gl(t);
      return;
    }
    e.selectEnd();
  }
}
const xh = /[ \u00A0]{2,}/g;
function JT(e) {
  return [...e.matchAll(xh)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function YT(e) {
  return e.replace(xh, (t) => t[0]);
}
const XT = "​", bi = XT;
var Vu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Vu || (Vu = {}));
var Wu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Wu || (Wu = {}));
function QT() {
  return ke(bi);
}
function ZT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(bi, ""));
}
function Ds(e) {
  return e.length > 0 && e.includes(bi) && e.replaceAll(bi, "") === "";
}
function ml(e) {
  return C(e) && Ds(e.getTextContent());
}
function vh(e) {
  return Uk(e) || PT(e);
}
function We(e) {
  return Ce(e) || Ls(e);
}
function _h(e, t) {
  return e.find((r) => We(r) && r.getNumber() === t.toString());
}
function ex(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && We(r));
}
function Hu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Ch(e) {
  if (!e)
    return;
  if (We(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !We(t); )
    t = t.getPreviousSibling();
  if (t && We(t))
    return t;
}
function Qt(e) {
  return it(e, z) ?? void 0;
}
function tx(e) {
  return ht(e) || Ce(e) || L(e) || Ls(e) || Yt(e) || $e(e) || se(e) || z(e) || Ae(e) || we(e);
}
function Sh(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function rx(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Dt(e) {
  return Pe(e) || ht(e);
}
function Pe(e) {
  return se(e) || Yt(e);
}
function nx(e) {
  return pl(e) || Wo(e);
}
function ki(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function An(e, t) {
  const r = te(t, Mn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function ix(e, t) {
  const r = R(e) ? e : e.getParent(), n = R(t) ? t : t.getParent(), i = r && n ? Zy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function sx(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Pn(e) {
  return e?.type === ze.getType();
}
function ox(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function ax(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Mh(e, t, r) {
  const n = Me(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function cx(e) {
  const t = e[Ps];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Eh(e) {
  return Rs(e) || Zp(e) && e.textType === "marker" || Pn(e) && cx(e) === "attribute" ? "" : Pn(e) && e.text !== O ? e.text : Ok(e) ? e.children.map((t) => Eh(t)).join("") : "";
}
function lx(e) {
  return e.map((r) => Eh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function yl(e) {
  const t = [];
  for (const r of e) {
    if (!L(r))
      continue;
    const n = Ah(r);
    n !== It && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Ah(e) {
  return P(e) || fr(e) || C(e) && te(e, ae) === "attribute" ? "" : C(e) ? e.getTextContent() : R(e) ? e.getChildren().map((t) => Ah(t)).join("") : "";
}
function fr(e) {
  return vt(e) && e.getTextType() === "marker";
}
function Ut(e) {
  return P(e) || fr(e);
}
function Gu(e, t) {
  ux(e, t), e.setMarker(t);
}
function ux(e, t) {
  const r = e.getMarker(), n = Me(r), i = Me(r, !0), s = nt(r), o = nt(r, !0), a = xe.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Ut(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (fr(c)) {
        const f = l.startsWith(Me("", !0));
        c.setTextContent(d ? Me(t, f) : nt(t, f));
      }
    }
  });
}
function Fe(e, t = Hy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Oe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Ph(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function bl(e) {
  if (!N(e))
    return Ju(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !R(t) || e.anchor.type === "text" && !C(t)))
    return t ?? void 0;
  try {
    return Ju(e) ?? t ?? void 0;
  } catch (n) {
    if (Ph(n))
      return t ?? void 0;
    throw n;
  }
}
function dx(e, t) {
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
function kl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Nh(e) {
  return !!e && e.includes("-");
}
function wh(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Ju(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function To(e) {
  if (!e)
    return !1;
  if (Do(e) || P(e) || fr(e) || Ke(e) || e.getType() === ws || vt(e) && e.getTextType() === "attribute")
    return !0;
  const t = Ni(e);
  if (Ce(t) || C(e) && z(t) && Jr(t)?.is(e))
    return !0;
  if (C(e)) {
    const r = te(e, ae);
    if (r === ur || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === O || Ds(n))
      return !0;
  }
  return !1;
}
function Jo() {
  const e = ke(O);
  return bt(e, ae, ur), e.setMode("token"), e;
}
function fx(e) {
  const t = e.getTextContent();
  t.startsWith(O) || e.setTextContent(O + t);
}
function Kn(e) {
  return C(e) && te(e, ae) === ur;
}
function Oh(e) {
  const t = e.getFirstChild();
  if (!Ut(t) || t === null || Kn(t.getNextSibling()))
    return !1;
  const r = w();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Tl(e) {
  if (Ce(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!To(s)) {
      if (il(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (C(s) && s.getType() === ze.getType()) {
        r ??= [], r.push(s);
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function px(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = Kk(i), o = t ? JT(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, d]) => c + d - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function qh(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function hx(e, t) {
  let r = t;
  for (const [n, i] of qh(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function Yu(e, t) {
  let r = t;
  for (const [n, i] of qh(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function sn(e, t) {
  return Tl(e).map((r) => r.type === "element" ? r : px(r.nodes, t));
}
function gx(e, t) {
  return Tl(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function xo(e, t, r) {
  const n = Ni(e);
  if (!n)
    return;
  const i = sn(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: hx(a, t) };
  }
}
function mx(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, Yu(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, Yu(r, t - r.start)];
}
function ns(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (nl(e)) {
    const s = e.getParentOrThrow();
    return n ? To(n) ? ns(e, t + 1, r) : Xu(s, n, r) : ns(s, e.getIndexWithinParent() + 1, r);
  }
  const i = sn(e, r);
  return n ? To(n) || il(n) && !yx(i, n) ? ns(e, t + 1, r) : Xu(e, n, r) : { type: "index", index: i.length };
}
function yx(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || ki(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || ki(n.node, t.getKey())));
}
function Xu(e, t, r) {
  const n = sn(e, r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type === "element") {
      if (s.node.is(t) || ki(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || ki(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: n.length };
}
function bx(e, t) {
  if (t <= 0)
    return [e, 0];
  const r = Tl(e);
  if (r.length === 0 || t > r.length)
    return [e, e.getChildrenSize()];
  const n = r[t - 1], i = n.type === "element" ? n.node : n.nodes[n.nodes.length - 1], s = i ? Qu(e, i) : void 0;
  if (!s)
    return [e, e.getChildrenSize()];
  if (nl(s)) {
    const o = Qu(s, i);
    if (o)
      return [s, o.getIndexWithinParent() + 1];
  }
  return [e, s.getIndexWithinParent() + 1];
}
function Qu(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const pi = /* @__PURE__ */ new WeakMap();
function kx(e, t) {
  return pi.set(e, t), () => {
    pi.get(e) === t && pi.delete(e);
  };
}
function wa(e) {
  return pi.get(e);
}
function Tx(e) {
  return pi.get(Ei())?.has(e.getKey()) ?? !1;
}
function xx(e) {
  pi.get(Ei())?.add(e.getKey());
}
function vx(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function uc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Zu(e) {
  return /^\s/.test(e);
}
function xl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Zu(t) || !Zu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Yo(e, t, r) {
  return r.wantsRun ? xl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : vx(t);
}
function _x(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return xl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Rh(e, t) {
  return !uc(e.scanPieces(t));
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
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || ki(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function Cx(e, t, r, n) {
  return !r.wantsRun || uc(n) || eb(di) ? !1 : Ei().getEditorState().read(() => {
    const i = X(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : uc(e.scanPieces(i));
  });
}
function Sx(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function ed(e) {
  const t = ke(e);
  return bt(t, ae, "attribute"), t;
}
function Mx(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Np(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function Ex(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    C(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(ed(n.valueText));
    return;
  }
  const l = Mx(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = ct(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : C(u) ? xl(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = ed(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(ct(a === "selfClosing" ? "" : o(t), a));
}
function bs(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Yo(e, i, n) && !Tx(t)) {
    if (Cx(e, t, n, i)) {
      xx(t);
      return;
    }
    if (!Us(e, t)) {
      if (!n.wantsRun) {
        Sx(i);
        return;
      }
      Ex(e, t, i, n);
    }
  }
}
function Ax(e, t, r) {
  bs(e, t), t.isAttached() && Us(e, t) && r.add(t.getKey());
}
function $h(e) {
  if (!C(e))
    return !1;
  if (P(e) || Ae(e) || nn(e))
    return !0;
  const t = te(e, ae);
  return t === "attribute" || t === ur;
}
function vl(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && rn(e) && L(e.getParent())) : !1;
}
function Px() {
  const e = w();
  return N(e) ? vl(e.focus.getNode(), e.focus.offset) : !1;
}
function Ih(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return C(t) && $h(t) ? t : void 0;
}
function Nx(e) {
  const t = Ih(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function wx(e) {
  const t = Ih(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function td(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function rd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function Ox(e, t) {
  let r = wx(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!C(n))
      return;
    if (!$h(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function nd(e, t) {
  const r = Ox(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Lh(e) {
  if (e.isCollapsed()) {
    const a = Nx(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [td(r), td(n)], s = nd(r, "next"), o = nd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (rd(r, i[0]), rd(n, i[1]), !1) : !0;
}
const vo = "verse-block", Dh = 1, qx = "verse-block";
class qi extends Zt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return vo;
  }
  static clone(t) {
    return new qi(t.__number, t.__key);
  }
  static importJSON(t) {
    return Rx().updateFromJSON(t);
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
    return wh(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(qx), id(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && id(r, this.__number), !1;
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
      type: vo,
      number: this.getNumber(),
      version: Dh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function id(e, t) {
  const { start: r, end: n } = wh(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), sd(e, "data-verse-start", i ? r : NaN), sd(e, "data-verse-end", i ? n : NaN);
}
function sd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function Rx(e) {
  return je(new qi(e));
}
function ks(e) {
  return e instanceof qi;
}
function $x(e) {
  return e?.type === vo;
}
const Ix = [
  Lt,
  dr,
  Et,
  ft,
  xe,
  Ne,
  Jt,
  lr,
  Un,
  Or,
  Rr,
  Ze,
  Yr,
  Fn,
  wi,
  Oi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  wr,
  {
    replace: Vc,
    with: () => Ht(),
    withKlass: Yr
  }
], _o = {
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
}, Lx = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function Dx(e) {
  if (!e)
    return ar;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: ar(r)?.category ?? T.Uncategorized,
      type: Lx[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ar(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function od(e, t, r) {
  const n = {
    type: _r,
    version: vr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Wo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Uh = "v", Fh = 1, Ux = "verse-selected";
class _t extends As {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Uh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new _t(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => zx(t) ? {
        conversion: Kx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return _l().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Xa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Dn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Xa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? $t(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      uo + this.getNumber() + uo
    );
    return _(Fx, { nodeKey: this.getKey(), text: t });
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
      version: Fh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Ph(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Fx({ nodeKey: e, text: t }) {
  const [r] = yb(e);
  return _("span", { className: r ? Ux : void 0, children: t });
}
function Kx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: _l(t) };
}
function _l(e, t, r, n, i, s) {
  return je(new _t(e, t, r, n, i, s));
}
function zx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Uh;
}
function zn(e) {
  return e instanceof _t;
}
function jx(e) {
  return e?.type === _t.getType();
}
function Te(e) {
  return Ae(e) || zn(e);
}
function Kh(e) {
  return Ip(e) || jx(e);
}
function Bx(e) {
  return Vx(e).find((t) => se(t));
}
function Vx(e) {
  return e.some(ks) ? e.flatMap((t) => ks(t) ? t.getChildren() : t) : e;
}
function Xo(e) {
  return R(e) ? ks(e) ? e.getChildren().flatMap(Xo) : e.getChildren() : [];
}
function Wx(e, t) {
  return Xo(e).find((i) => Te(i) && kl(t, i.getNumber()));
}
function Hx(e, t) {
  return t === 0 ? Bx(e) : e.map((r) => Wx(r, t)).filter((r) => r)[0];
}
function Co(e) {
  return Xo(e).find((r) => Te(r));
}
function zh(e, t) {
  if (!R(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (Te(i))
      return i;
  }
}
function Gx(e) {
  const t = e.getParent();
  if (t && R(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (Te(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !We(r); ) {
    const n = Co(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function dc(e) {
  return Xo(e).findLast((t) => Te(t));
}
function Jx(e) {
  if (!Ae(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Yx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && R(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function Xx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Yx(t, e, r);
  if (C(e)) {
    const n = Jx(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function ad(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Qx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return ad(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return Xx(e, t) ? { verseNum: n } : ad(e);
}
function Zx(e) {
  return tx(e) || zn(e);
}
function Cl(e) {
  if (C(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(O) && e.setTextContent(`${t} `);
  }
}
function jh(e) {
  if (C(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Bh(e, t) {
  return e.getEditorState().read(() => !X(t));
}
function ev(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Sl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && R(i) && R(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && R(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (Te(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = cd(i);
      for (; s && !We(s); ) {
        const o = Co(s);
        if (o) {
          n = o;
          break;
        }
        s = cd(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Co(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && We(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function tv(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Sl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && R(i) && (n = zh(i, r.getIndexWithinParent())), !n && i) {
      let o = ld(i);
      for (; o && !We(o); ) {
        const a = dc(o);
        if (a) {
          n = a;
          break;
        }
        o = ld(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !We(s); ) {
      const o = dc(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function cd(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function ld(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Sl(e, t) {
  if (R(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && Te(n))
      return n;
    const i = zh(e, t.anchor.offset);
    if (i)
      return i;
    const s = Co(e);
    if (s)
      return s;
  }
  return Ml(e);
}
function Ml(e) {
  if (!e || We(e))
    return;
  if (Te(e))
    return e;
  let t = Hu(e);
  for (; t; ) {
    if (We(t))
      return;
    if (Te(t))
      return t;
    const r = dc(t);
    if (r)
      return r;
    t = Hu(t);
  }
}
const rv = ["style"], nv = ["style", "code"], So = ["style", "cid"], iv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], sv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], ov = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], av = ["style", "caller", "category", "contents"], cv = ["tag", "marker", "contents"], lv = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Ts = `
`;
function uv(e, t) {
  const r = X(e);
  if (!Mt(r))
    return;
  const n = Vh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Vh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = lp();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Ti(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Ti(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Er(l) || Mt(l))
        return n;
      Dt(l) && (a = l);
    }
    if (Dt(l) && (i.includes(l) || i.push(l)), Wh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += El(l, t);
  }
  if (a)
    return n;
}
function ud(e, t, r = "delta-doc") {
  if (e.length < 2 || !pv(e[0]) || !fv(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => dv(n, r)?.getKey());
}
function dv(e, t = "delta-doc") {
  const r = lp();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Ti(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Ti(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Dt(a) && (i.includes(a) || i.push(a)), Wh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = El(a, t);
    if (Er(a) && l > 0 && e >= n && e < n + l || Mt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Ti(e, t) {
  return e ? t ? !ki(t.node, e.getKey()) : !0 : !1;
}
function Er(e) {
  return C(e) && !Mt(e);
}
function Mt(e) {
  return We(e) || Te(e) || $e(e) || z(e) || we(e) || nn(e);
}
function Br(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function fv(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && lv.includes(t);
}
function pv(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Wh(e, t) {
  return z(e) || we(e) ? !0 : t === "apply" && R(e) && Mt(e);
}
function Hh(e) {
  const t = e.getParent();
  return Ut(e) && se(t) && t.getFirstChild() === e;
}
function fc(e) {
  const t = e.getParent();
  return t !== null && it(t, Ke) !== null;
}
function hv(e) {
  const t = e.getParent();
  return L(t) && e.getTextContent() === It && t.getChildrenSize() === 1;
}
function gv(e) {
  const t = e.getParent();
  if (!z(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === St(t.getCaller());
}
function mv(e) {
  return !nh(e) && El(e, "delta-doc") === e.getTextContentSize();
}
function El(e, t) {
  if (Mt(e))
    return 1;
  if (C(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (ml(e) || Hh(e) || te(e, ae) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    te(e, ae) === "attribute" || fc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Yc) || hv(e) || gv(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function pc(e, t) {
  const r = { insert: e.__text }, n = te(e, Gr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Gh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function dd(e) {
  const t = new ts();
  return e.isEmpty() || e.read(() => {
    const r = Ee();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Yt(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = yv();
    for (const s of i)
      t.push(s);
  }), t;
}
function Al(e, t) {
  const r = [], n = Ai(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...fd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...fd(c, n.length, n, i, s, o, a));
  return r;
}
function yv() {
  return Al();
}
function fd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return bv(e, a, n), kv(e, a, i, s, o), Tv(e, t, r, i, o, s, a), We(e) && a.push(Cv(e)), Te(e) && a.push(Mv(e)), $e(e) && a.push(Ev(e)), nn(e) && a.push(Av(e)), vv(e, a, s), xv(e, a, s), Ov(c, s), a;
}
function bv(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ht(n) ? t.push(_v(n)) : se(n) ? t.push(Sv(n)) : Yt(n) && t.push({ insert: Ts });
  }
  Dt(e) && (r.includes(e) || r.push(e));
}
function kv(e, t, r, n, i) {
  if (!C(e) || Ae(e) || nn(e))
    return;
  const s = e.getParent();
  if (z(s) && s.getFirstChild() === e)
    return;
  const o = Qt(e) !== void 0;
  if (P(e) && (o || Hh(e) || fc(e) || nh(e)) || te(e, ae) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Ds(a))
    return;
  const c = e.getPreviousSibling();
  if (z(s) && P(c) && c === s.getFirstChild() && a === St(s.getCaller()))
    return;
  const l = L(s) ? s : void 0, d = l?.getFirstChild();
  o && l && P(d) && c === d && a.startsWith(O) && (a = a.slice(1));
  const u = a.startsWith(Yc) || te(e, ae) === "attribute" || fc(e), f = !!l && a === It && l.getChildrenSize() === 1, p = Qo(e, n), h = p ? r.filter((x) => p.children.includes(x)) : r, m = pc(e, h);
  if (m.insert = a, p) {
    if (!a || a === O || u)
      return;
    p.contentsOps?.push(m);
  } else
    f || u || t.push(m);
  const y = a !== "" && !f && !(u && l);
  if (r.length > 0 && y)
    for (const x of r)
      i.add(x);
}
function Tv(e, t, r, n, i, s, o) {
  L(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Ti(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = Nv(c), d = Qo(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function xv(e, t, r) {
  if (!z(e))
    return;
  const n = Pv(e), i = Qo(e, r), s = {
    node: e,
    children: Ai(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function vv(e, t, r) {
  if (!we(e))
    return;
  const n = wv(e), i = Qo(e, r), s = {
    node: e,
    children: Ai(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function on(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function _v(e) {
  const t = { style: gs, code: e.__code };
  return on(t, e), { insert: Ts, attributes: { book: t } };
}
function Cv(e) {
  const t = { style: yo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), on(t, e), { insert: { chapter: t } };
}
function Sv(e) {
  const t = { style: e.__marker };
  return on(t, e), { insert: Ts, attributes: { para: t } };
}
function Mv(e) {
  const t = { style: mo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), on(t, e), { insert: { verse: t } };
}
function Ev(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), on(t, e), { insert: { milestone: t } };
}
function Av(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function Pv(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), on(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = te(e, Gr);
  return n && (r.attributes = { segment: n }), r;
}
function Nv(e) {
  const t = { insert: "" }, r = Gh([e]);
  return r && (t.attributes = { char: r }), t;
}
function wv(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), on(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Qo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function Ov(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Ti(t[r].node, e) && t.splice(r, 1);
}
function Gh(e) {
  if (e.length === 0)
    return;
  const t = e.map(qv);
  return t.length === 1 ? t[0] : t;
}
function qv(e) {
  const t = { style: e.__marker }, r = te(e, Mn);
  return r && (t.cid = r), on(t, e), t;
}
const Jh = 1;
class Gt extends As {
  __caller;
  __previewText;
  __onClick;
  constructor(t = fo, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return ws;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Gt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => $v(t) ? {
        conversion: Rv,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Pl().updateFromJSON(t);
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
    return r && Dn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => Iv(t, n), (l) => Lv(t, n, s, l), () => Dv(t, n), () => Uv(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === fo && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === bp && i ? (
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
      version: Jh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Rv(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Pl(t, r) };
}
function Pl(e, t, r) {
  return je(new Gt(e, t, r));
}
function $v(e) {
  return e ? e.classList.contains(Gt.getType()) : !1;
}
function pr(e) {
  return e instanceof Gt;
}
function Iv(e, t) {
  return e.getEditorState().read(() => {
    const r = X(t);
    if (!z(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function Lv(e, t, r, n) {
  e.update(() => {
    const i = X(t);
    if (!z(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = X(r);
    if (!pr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function Dv(e, t) {
  return e.getEditorState().read(() => {
    const r = X(t);
    if (!z(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Al(r);
  });
}
function Uv(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of Ai())
      if (z(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const Fv = [
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
], Kv = ["†"], Nl = "formatted", Yh = "unformatted", Xh = "paragraph-structure", Qh = "standard", Zh = "block-verse", zv = {
  [Nl]: "Formatted",
  [Yh]: "Unformatted",
  [Xh]: "Paragraph Structure",
  [Qh]: "Standard",
  [Zh]: "Block Verse"
};
function Ri(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let wl, Ol;
function jv(e) {
  const t = eg(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  wl = e, Ol = t;
}
jv(Nl);
const S0 = () => wl, Zo = () => Ol;
function eg(e) {
  let t;
  switch (e ?? wl) {
    case Nl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Yh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Xh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Qh:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Zh:
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
function M0(e) {
  if (!e)
    return;
  const t = pd(e);
  return Object.keys(zv).find((r) => Pt(pd(eg(r)), t));
}
const Bv = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function pd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...Bv, ...t };
}
function hr(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function Vv(e) {
  if (e)
    return xs(e) ? _t : e.markerMode === "editable" ? ft : _t;
}
function xs(e) {
  return e?.verseLayout === "block";
}
function Wv(e) {
  const t = [], r = e ?? Ol;
  return r && (t.push(`${Bb}${r.markerMode}`), r.hasSpacing && t.push(zb), r.isFormattedFont && t.push(jb)), t;
}
function ql(e, t) {
  if (rg())
    return;
  const { start: r } = e;
  let { end: n } = e;
  n ??= r;
  let [i, s] = gc(r, t), [o, a] = gc(n, t);
  if (!i || !o || s === void 0 || a === void 0)
    return;
  [i, s] = bd(i, s), [o, a] = bd(o, a), n !== r && Gf(n) && n.closingMarkerOffset === 0 && ([o, a] = o_(o, a, hr(t)));
  const c = Uo();
  return c.anchor = Eu(i.getKey(), s, kd(i)), c.focus = Eu(o.getKey(), a, kd(o)), c;
}
function Rl(e) {
  if (rg())
    return;
  const t = w();
  if (!t || !N(t))
    return;
  const r = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), n = t.isBackward() ? t.focus.offset : t.anchor.offset, i = Nn(r, n, e);
  if (t.isCollapsed())
    return { start: i };
  const s = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), o = t.isBackward() ? t.anchor.offset : t.focus.offset, a = Nn(s, o, e);
  return { start: i, end: a };
}
const $l = {
  va: { markerName: "va", keyName: "altnumber" },
  vp: { markerName: "vp", keyName: "pubnumber" },
  ca: { markerName: "ca", keyName: "altnumber" },
  cp: { markerName: "cp", keyName: "pubnumber" },
  cat: { markerName: "cat", keyName: "category" },
  char: void 0,
  milestone: void 0,
  optbreak: void 0,
  separator: void 0,
  nestedGlyph: void 0,
  opaqueUnknown: void 0
}, Hv = new Map(Object.values($l).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), hd = {
  va: !0,
  vp: !0,
  ca: !0,
  cp: !0,
  cat: !0,
  milestone: !0,
  char: !0,
  optbreak: !0,
  // A separator and a nested glyph are bytes of the char span they decorate and are addressed
  // through that span's own glyph spans; an opaque unknown renders its bytes as ordinary text.
  separator: !1,
  nestedGlyph: !1,
  opaqueUnknown: !1
}, Gv = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(hd).filter((e) => hd[e])
), Jv = /([^\s="|]+)="([^"]*)"/g, Yv = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Xv(e, t) {
  return `${e}['${t}']`;
}
function hi(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function cs(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function Il(e) {
  const t = Xr(e);
  if (!t)
    return;
  const r = Mr(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function hc(e, t, r) {
  const n = [];
  for (const i of e.slice(t).matchAll(Jv)) {
    const s = i[1];
    n.push({
      start: t + i.index,
      base: 0,
      bytes: { kind: "attributeKey", keyName: s }
    }), n.push({
      // Past the key, its `=`, and its opening quote.
      start: t + i.index + s.length + 2,
      base: 0,
      bytes: { kind: "property", property: s }
    });
  }
  return n.length > 0 ? n : r === void 0 ? [] : [
    { start: t, base: 0, bytes: { kind: "property", property: r } }
  ];
}
function Qv(e, t) {
  const r = Yv.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = Hv.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function tg(e) {
  if (fr(e)) {
    const t = a_(e), r = e.getTextContent();
    if ($e(t) && (r === "\\*" || r.startsWith(Me(t.getMarker()))))
      return t;
  }
  return Ni(e) ?? e;
}
function Zv(e) {
  const t = e.getTextContentSize(), r = Il(e);
  if (r && r.role !== "value") {
    const i = $l[r.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? cs(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (r.kind === "milestone")
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? cs() : hi(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: tg(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      hi(e.getNested() ? 2 : 1)
    ) : cs()
  };
}
function e_(e) {
  const t = e.getTextContent(), r = t.length, n = Il(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = tg(e);
  if (ht(i)) {
    const s = Me(i.getMarker()).length;
    if (t.startsWith(Me(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...hi(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (we(i)) {
    const s = ll(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: cs() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: hi(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? cs() : hi(t.startsWith("\\+") ? 2 : 1)
  };
}
function t_(e) {
  const t = Il(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = $l[n];
  if (o) {
    const { markerName: a, keyName: c } = o;
    return {
      owner: r,
      length: s,
      spans: [
        // The separator before the value is the space after the attribute marker, which counts
        // into that marker name's offset space.
        { start: 0, base: a.length, bytes: { kind: "attributeKey", keyName: c } },
        { start: 1, base: 0, bytes: { kind: "property", property: c } }
      ]
    };
  }
  if (n === "char")
    return {
      owner: r,
      length: s,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...hc(i, 1, L(r) ? Os(r.getMarker()) : void 0)
      ]
    };
  if (n === "milestone" && $e(r)) {
    const a = r.getMarker().length;
    return {
      owner: r,
      length: s,
      spans: [
        // A milestone has no text content of its own, so the separator and the `|` both keep
        // counting into its marker name's offset space.
        { start: 0, base: a, bytes: { kind: "property", property: "marker" } },
        ...hc(i, 2, qs(r.getMarker()))
      ]
    };
  }
}
function r_(e) {
  const t = e.getParent();
  if (!we(t))
    return;
  const r = e.getTextContent(), n = r.length, i = Qv(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...hc(r, 1, void 0)
      ]
    };
}
function gd(e, t) {
  const r = Me(e);
  if (t.startsWith(r))
    return [
      ...hi(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Fs(e) {
  if (P(e))
    return Zv(e);
  if (fr(e))
    return e_(e);
  if (vt(e) && e.getTextType() === "attribute")
    return r_(e);
  if (e.getType() === ws) {
    const n = e.getParent();
    return z(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Ae(e)) {
    const n = gd(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!C(e))
    return;
  if (te(e, ae) === "attribute")
    return t_(e);
  const t = e.getParent();
  if (Ce(t) && Pi(t)?.is(e)) {
    const n = gd(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = Ni(e);
  if (z(r) && Jr(r)?.is(e))
    return {
      owner: r,
      length: e.getTextContentSize(),
      spans: [
        // The caller's leading space is the space after the note's own marker, which counts into
        // that marker name's offset space.
        {
          start: 0,
          base: r.getMarker().length,
          bytes: { kind: "property", property: "marker" }
        },
        { start: 1, base: 0, bytes: { kind: "property", property: "caller" } }
      ]
    };
}
function Ll(e) {
  return fr(e) || vt(e) && e.getTextType() === "attribute" || e.getType() === ws;
}
function n_(e) {
  const t = [];
  if (Ae(e) && t.push(e), R(e)) {
    const r = Ce(e) ? Pi(e) : void 0, n = z(e) ? Jr(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (P(i) || fr(i) || vt(i) && i.getTextType() === "attribute" || i.getType() === ws || r?.is(i)) && t.push(i);
  }
  for (const r of Gv) {
    const n = Mr(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function i_(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function md(e, t, r) {
  const n = Fs(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = gn(yn(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Xv(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return s_(e, r);
  }
}
function yd(e, t) {
  return C(e) && !Fs(e) && !xo(e, 0, t);
}
function s_(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && be(o); )
    r = o, o = r.getParent();
  let n = r.getPreviousSibling();
  for (; n && yd(n, t); )
    n = n.getPreviousSibling();
  if (!n)
    return;
  const i = R(n) ? n.getLastDescendant() : n;
  if (i && (C(i) || Ll(i)))
    return yd(i, t) ? void 0 : gi(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return gi(s, n.getIndexWithinParent() + 1, t);
}
function ri(e, t, r) {
  for (const n of n_(e)) {
    const i = Fs(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!i_(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function gc(e, t) {
  const r = hr(t);
  if (Bc(e)) {
    const n = Mi(e.jsonPath);
    let i = Ee();
    for (let s = 0; s < n.length; s++) {
      if (!i || !R(i))
        return [void 0, void 0];
      const o = sn(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : mx(o, e.offset) ?? [void 0, void 0];
      i = o.node;
    }
    return i && R(i) ? bx(i, e.offset) : [void 0, void 0];
  }
  if (Mu(e) || Gy(e)) {
    const n = Gi(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = Mu(e) ? ri(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : ri(n, { kind: "attributeMarker", keyName: i }, 0);
    return s || Td(n);
  }
  if (Jy(e)) {
    const n = Gi(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = ri(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || Td(n);
  }
  if (Yy(e)) {
    const n = Gi(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = ri(n, { kind: "marker" }, 0);
    if (i)
      return i;
    if (!R(n))
      return [void 0, void 0];
    const s = n.getFirstChild();
    return s && C(s) ? [s, 0] : [void 0, void 0];
  }
  if (Gf(e)) {
    const n = Gi(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = ri(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    if (!R(n))
      return [void 0, void 0];
    const s = n.getLastChild();
    return s && C(s) ? [s, s.getTextContent().length] : [void 0, void 0];
  }
  if (Xy(e)) {
    const n = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), i = n?.[1] ?? n?.[2] ?? n?.[3], s = Gi(e.jsonPath, r);
    if (!s || i === void 0)
      return [void 0, void 0];
    const o = ri(s, { kind: "property", property: i }, e.propertyOffset);
    if (o)
      return o;
    if (!R(s))
      return [void 0, void 0];
    const a = s.getFirstChild();
    return a && C(a) ? [a, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Qy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function bd(e, t) {
  if (!Ll(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !R(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = t >= e.getTextContentSize() && t > 0;
  return [r, i ? n + 1 : n];
}
function o_(e, t, r) {
  let n;
  if (R(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; C(n) && !Fs(n) && !xo(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = R(n) ? n.getLastDescendant() : n;
  return C(s) ? [s, s.getTextContentSize()] : [e, t];
}
function kd(e) {
  return R(e) ? "element" : "text";
}
function Gi(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = Mi(n);
  let s = Ee();
  for (const o of i) {
    if (!s || !R(s))
      return;
    const a = sn(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function Nn(e, t, r) {
  return gi(e, t, hr(r));
}
function gi(e, t, r) {
  const n = md(e, t, r);
  if (n)
    return n;
  if (be(e)) {
    const i = e.getChildrenSize(), s = e.getChildAtIndex(Math.min(t, i - 1));
    if (C(s)) {
      const a = t >= i ? s.getTextContentSize() : 0;
      return gi(s, a, r);
    }
    const o = e.getParent();
    if (o) {
      const a = e.getIndexWithinParent(), c = t >= i ? a + 1 : a;
      return gi(o, c, r);
    }
  }
  if (R(e)) {
    const i = e.getChildAtIndex(t);
    if (i && Ll(i)) {
      const o = md(i, 0, r);
      return o || {
        jsonPath: gn(yn(e))
      };
    }
    const s = ns(e, t, r);
    return s.type === "text" ? {
      jsonPath: gn([...yn(e), s.index]),
      offset: s.offset
    } : {
      jsonPath: gn(yn(e)),
      offset: s.index
    };
  }
  if (C(e)) {
    const i = xo(e, t, r);
    if (i)
      return {
        jsonPath: gn([
          ...yn(i.parent),
          i.index
        ]),
        offset: i.offset
      };
    const s = t > 0, o = s ? e.getNextSibling() : e.getPreviousSibling();
    if (C(o) && (Fs(o) || xo(o, 0, r)))
      return gi(o, s ? 0 : o.getTextContentSize(), r);
  }
  return { jsonPath: gn(yn(e)), offset: t };
}
function Td(e) {
  if (R(e)) {
    const r = e.getLastChild();
    if (r && C(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && R(t) ? [t, 0] : [void 0, void 0];
}
function a_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!To(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function yn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Ni(r);
    if (!n)
      break;
    const i = gx(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function rg() {
  for (let e = Ee().getFirstChild(); e; e = e.getNextSibling())
    if (ks(e))
      return !0;
  return !1;
}
function ng(e, t, r, n, i, s, o) {
  if (!Ne.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? ql(r, i) : w();
  if (!N(a))
    return;
  const c = u_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (rs(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = ig(e, l, c, i, s, void 0, void 0);
  return l_(d, a, i), d;
}
function Dl(e) {
  return e !== "expanded";
}
function c_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!C(r) || !L(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function l_(e, t, r) {
  const n = Dl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || sx(t), Lh(t), xn(t);
  const i = c_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(L)?.selectEnd();
}
function ni(e, t, r) {
  const n = Cr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ct(e)) : r?.markerMode === "visible" && n.append(Sr("marker", Me(e)));
  const s = t === "" ? It : i ? O + t : t;
  return n.append(ke(s)), n;
}
function u_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(ni("fr", f, n)), !e.isCollapsed()) {
        const p = vd(e);
        p.length > 0 && o.push(ni("fq", p, n));
      }
      o.push(ni("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(ni("xo", f, n)), !e.isCollapsed()) {
        const p = vd(e);
        p.length > 0 && o.push(ni("xq", p, n));
      }
      o.push(ni("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function ig(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Dl(n?.noteMode), l = el(e, t, c);
  s && bt(l, Gr, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = ct(e), d && u.setMode("token"), a || (f = ct(e, "closing"))) : n?.markerMode === "visible" && (u = Sr("marker", Me(e) + " "), a || (f = Sr("marker", nt(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = ke(St(l.__caller)), d && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => Jo(), m = r.flatMap(f_(h));
    if (t === "")
      l.append(...m);
    else {
      const y = yl(r);
      let x = () => {
      };
      i?.noteCallerOnClick && (x = i.noteCallerOnClick), p = Pl(l.__caller, y, x), l.append(p, h(), ...m);
    }
  }
  return f && l.append(f), l;
}
function xd(e) {
  if (typeof e == "string") {
    const i = X(e);
    return z(i) ? i : void 0;
  }
  const t = Ai();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => z(i.node))[e]?.node;
  if (z(n))
    return n;
}
function d_(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (zn(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find(L)?.selectEnd();
}
function f_(e) {
  return (t) => vt(t) ? [t] : [t, e()];
}
function p_(e) {
  const t = e.getParent();
  return t !== null && it(t, z) !== null;
}
function vd(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Xf(e);
  let a = "";
  for (const c of t)
    if (!(z(c) || pr(c) || p_(c)) && !P(c) && !nn(c) && te(c, ae) !== "attribute") {
      if (Te(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (C(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const sg = [
  Gt,
  _t,
  ...Ix
], h_ = [
  qi,
  ...sg
], g_ = Ln((e, t) => {
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
function m_() {
  const [e, t] = he(void 0), [r, n] = he(), i = Y(null), s = de((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Eb(l, c, () => {
      Ab(l, c, {
        placement: "bottom-start",
        middleware: [Pb(), Nb()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = de(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function y_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = m_();
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
const b_ = zy(g_);
function og({ isOpen: e = !1, children: t }) {
  const r = Y(null), { coords: n, placement: i } = y_({ isOpen: e, floatingBoxRef: r }), s = De(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return kn(
    _(b_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const ag = Wf(void 0);
function Ul() {
  const e = Hf(ag);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function k_(e, t) {
  const [r, n] = he(0), [i, s] = he(-1), o = De(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = de(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = de(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = de(() => {
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
function T_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = k_(t, r);
  return _(ag.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const cg = Ln(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Ul(), d = de((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = de((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function x_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Y(null), { state: { activeIndex: i, menuItems: s } } = Ul(), o = De(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = De(() => {
    const c = o(s);
    return t ? jy.map(c, (l, d) => By(l) && l.type === cg && l.props.index === void 0 ? Vy(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return j(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), _("div", { ref: n, role: "menu", ...r, children: a });
}
const v_ = (e, t, r) => so(e, r).toLowerCase().includes(t.toLowerCase()), _d = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", so = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function __(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? _d(r[0]) : "") : (d = n || (r.length > 0 ? _d(r[0]) : ""), u = (h, m) => v_(h, m, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return u(h, t);
    } catch (m) {
      return console.warn("Error filtering item:", h, m), !1;
    }
  }).sort((h, m) => {
    const y = (M) => (p.has(M) || p.set(M, so(M, f).toLowerCase()), p.get(M) ?? ""), x = a ? so(h, f) : y(h), S = a ? so(m, f) : y(m);
    for (const M of c)
      switch (M) {
        case "exact":
          if (x === l && S !== l)
            return -1;
          if (S === l && x !== l)
            return 1;
          break;
        case "startsWith":
          if (x.startsWith(l) && !S.startsWith(l))
            return -1;
          if (S.startsWith(l) && !x.startsWith(l))
            return 1;
          break;
        case "contains": {
          const $ = x.indexOf(l), A = S.indexOf(l);
          if ($ !== -1 && A === -1)
            return -1;
          if (A !== -1 && $ === -1)
            return 1;
          if ($ !== -1 && A !== -1)
            return $ - A;
          break;
        }
      }
    return x.localeCompare(S);
  });
}
const Oa = {
  Root: T_,
  Options: x_,
  Option: cg
};
function C_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return De(() => __({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function S_() {
  const { moveUp: e, moveDown: t, select: r } = Ul();
  return De(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const M_ = () => {
  const e = S_(), [t] = le();
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
    return t.registerCommand(Pr, r, Ue);
  }, [t, e]);
};
function E_() {
  return M_(), null;
}
const A_ = ["Shift", "Control", "Alt", "Meta"];
function lg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), d = s !== void 0, [u, f] = he(""), p = d ? s ?? "" : u, h = C_({ query: p, items: t, filterBy: "name" }), m = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(Pr, (y) => {
    if (d || c?.includes(y.key) || A_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const S = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((M) => M.slice(0, -1));
      }
    }[y.key];
    return S ? (y.stopPropagation(), y.preventDefault(), S(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((M) => M + y.key), !0) : !1;
  }, Ue), [l, d, p, o, n, c]), Se(Oa.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => m(y), children: [!d && _("input", { value: p, type: "text", disabled: !0 }), _(E_, {}), _(Oa.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((S, M) => Se(Oa.Option, { index: M, children: [_("span", { className: "label", children: S.label ?? S.name }), _("span", { className: "description", children: S.description })] }, S.name)) })] });
}
function P_({ trigger: e, items: t }) {
  const [r] = le(), [n, i] = he(!1), s = de((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = w();
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && _(og, { isOpen: n, children: ({ placement: o }) => _(lg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function N_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: De(() => {
    if (!t || !e)
      return;
    const i = ar(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = ar(o), { action: c } = r(o, a);
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
function ls(e, t) {
  return `${e}:${t}`;
}
function w_(e, t) {
  j(() => {
    if (!e.hasNodes([et]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Qe(up(e, et, (n) => mi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], h = a[l]?.[u], m = c[l]?.[u];
          i.addID(l, u, f, p, h, m);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(et, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = X(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : be(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!et.isReservedType(c))
              for (const d of l) {
                let u = t.get(ls(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(ls(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(ls(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const O_ = Ln(function({ logger: t, viewOptions: r }, n) {
  const [i] = le(), s = De(() => /* @__PURE__ */ new Map(), []);
  w_(i, s);
  const o = (a, c, l) => {
    const d = Array.from(l ?? s.get(ls(a, c)) ?? []);
    if (d.length !== 0)
      for (const u of d) {
        const f = X(u);
        be(f) && (f.deleteID(a, c), f.hasNoIDsForEveryType() && go(f));
      }
  };
  return jc(n, () => ({
    setAnnotation(a, c, l, d, u, f, p) {
      if (et.isReservedType(c))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const h = ql(a, r);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        o(c, l), tl(h, c, l, d, u, f, p);
      }, { tag: Qa });
    },
    removeAnnotation(a, c) {
      if (et.isReservedType(a))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      const l = s.get(ls(a, c));
      l === void 0 || l.size === 0 || i.update(() => {
        o(a, c, l);
      }, { tag: Qa });
    }
  })), null;
}), q_ = [];
function R_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = q_, onChange: n }) {
  const [i] = le();
  return Ms(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(Qf) && !d.has(kp) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = $_(i, s);
        u.length !== 0 && n(o, i, d, u);
      });
  }, [i, e, t, r, n]), null;
}
function $_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new ts();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = X(i), o = s !== null && Qt(s) !== void 0;
    if (t.size === 1 && C(s) && !o && mv(s)) {
      const a = Vh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = X(i);
          return new ts([C(u) ? pc(u) : { insert: "" }]);
        }), l = new ts([pc(s)]), d = new ts(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = dd(r), c = dd(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function I_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += L_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), U_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += F_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), z_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function L_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), D_(t, e.retain, e.attributes, r, n)), e.retain);
}
function D_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ee();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Er(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, h = Math.min(s, p);
        if (h > 0) {
          let m = d;
          const y = f > 0, x = h < u - f;
          if (y && x) {
            const [, S] = d.splitText(f);
            [m] = S.splitText(h);
          } else y ? [, m] = d.splitText(f) : x && ([m] = d.splitText(h));
          if (Qr(r)) {
            const S = m.getParent();
            if (L(S)) {
              const M = r.char;
              let $;
              Array.isArray(M) ? a >= 0 && a <= M.length - 1 && ($ = M[a]) : a === 0 && ($ = M);
              const A = $ ? An($, S) : !1;
              if (A && Array.isArray(M) && M.length > 1) {
                const k = ke("");
                m.replace(k);
                const U = typeof r.segment == "string" ? r.segment : void 0, D = $i(M.slice(1), n, m, U);
                let G = k;
                for (const Q of D)
                  G.insertAfter(Q), G = Q;
                k.remove(), Nt(r, m);
              } else if (A)
                Nt(r, m);
              else {
                m.remove();
                const k = Cd(m, r, n, i);
                if (k && k.length > 0) {
                  let U = S;
                  for (const D of k)
                    U.insertAfter(D), U = D;
                }
              }
            } else {
              const M = ke("");
              m.replace(M);
              const $ = Cd(m, r, n, i);
              if ($ && $.length > 0) {
                let A = M;
                for (const k of $)
                  A.insertAfter(k), A = k;
                M.remove();
              } else
                M.replace(m);
            }
          } else
            Nt(r, m);
          s -= h;
        }
      }
      o += u;
    } else if (Mt(d))
      e <= o && o < e + t && s > 0 && (Sd(d, r), s -= 1), o += 1;
    else if (L(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (Qr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            mc(d, p.style), typeof p.cid == "string" && bt(d, Mn, () => p.cid);
            const h = Fe(p, So);
            h && Object.keys(h).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...h
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || X_(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && Ya(d), !0;
        }
      }
      u && Ya(d), a -= 1;
    } else if (Dt(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Yt(d))
          Sd(d, r);
        else if (Fl(r)) {
          const p = fg(r.para, n);
          p && d.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (R(d)) {
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
function Cd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = $i(t.char, r, e, i), o = s.find(L);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Nt(t, e);
    return;
  }
  const a = {};
  mg.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Nt(t, e), s;
}
function ug(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Me(t))) : vt(r) && r.getTextType() === "marker" && r.setTextContent(Me(t) + O);
}
function mc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = L(e.getParent()), i = e.getFirstChild();
  vt(i) && i.getTextType() === "marker" && i.getTextContent() === Me(r, n) && i.setTextContent(Me(t, n));
  const s = e.getLastChild();
  vt(s) && s.getTextType() === "marker" && s.getTextContent() === nt(r, n) && s.setTextContent(nt(t, n));
}
function Sd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && L(e) && Qr(t)) {
      const i = yc(n);
      if (mc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        bt(e, Mn, () => o);
      }
      const s = Fe(i, So);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (We(e) || Te(e) || $e(e) || z(e) || we(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ht(e) || se(e) || L(e)) && (r === "style" && se(e) ? ug(e, n) : r === "style" && L(e) ? mc(e, n) : r === "code" && ht(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && bt(e, Gr, () => n));
  }
}
function U_(e, t, r) {
  if (t <= 0)
    return;
  const n = Ee();
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
    } else if (Mt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Dt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Dt(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Ht(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Pe(p)) {
            let h = i + 1;
            const m = p.getChildren();
            for (const x of m) {
              if (s <= 0)
                break;
              const S = i;
              if (i = h, o(x)) {
                i = S;
                break;
              }
              Er(x) ? h += x.getTextContentSize() : Mt(x) && (h += 1), i = S;
            }
            const y = p.getChildren();
            for (const x of y)
              x.remove(), a.append(x);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Ht(), !0);
        } else se(a) ? a.replace(Ht(), !0) : a.remove();
      }
      i += 1;
    } else if (R(a)) {
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
function F_(e, t, r, n, i) {
  if (t === Ts)
    return Md(e, r, n, i);
  if (t.endsWith(Ts) && !Fl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Qr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Mo(e, s, r, i);
    }
    return o += Md(e + o, r, n, i), o;
  } else return Qr(r) ? K_(e, t, r, n, i) : Mo(e, t, r, i);
}
function K_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ke(t === "" ? It : t);
  Nt(r, s);
  let o;
  {
    let y = function(x) {
      if (Er(x)) {
        const S = x.getTextContentSize();
        if (e >= m && e < m + S) {
          const M = x.getParent();
          return L(M) && (o = M), !0;
        }
        m += S;
      } else if (Mt(x))
        m += 1;
      else if (L(x)) {
        const S = x.getChildren();
        for (const M of S)
          if (y(M))
            return !0;
      } else if (R(x)) {
        const S = x.getChildren();
        for (const M of S)
          if (y(M))
            return !0;
        Dt(x) && (m += 1);
      }
      return !1;
    };
    const h = Ee();
    let m = 0;
    y(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && An(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (An(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = $i(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(L);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Mo(e, t, void 0, i);
  const f = {};
  for (const [h, m] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof m == "string" && (f[h] = m);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const h of d)
    if (!dg(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Mo(e, t, void 0, i));
}
function Mo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ee();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Er(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = ke(t);
        if (Nt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          L(f) && !Qr(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Mt(c))
      s += 1;
    else if (L(c)) {
      if (!o && e === s) {
        const u = ke(t);
        Nt(r, u);
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
        return Nt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Dt(c)) {
      if (!o && e === s) {
        const u = ke(t);
        Nt(r, u);
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
        return Nt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (R(c)) {
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
    Nt(r, c);
    const l = Ht().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function dg(e, t, r) {
  const n = Ee();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!R(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Pe(l)) {
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
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (Mt(l))
        i += 1;
      else if (L(l)) {
        if (o(l))
          return !0;
      } else if (Dt(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (Yt(d) && Dt(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (R(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return R(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Pe(a) ? Yt(a) && se(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Pe(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (L(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Pe(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function z_(e, t, r, n, i) {
  let s;
  return Br("chapter", t) ? s = B_(t.insert.chapter, r) : Br("verse", t) ? s = V_(t.insert.verse, r) : Br("ms", t) ? s = W_(t.insert.ms) : Br("note", t) ? s = pg(t, r, n, i) : Br("unknown", t) ? s = hg(t, r, n, i) : Br("unmatched", t) && (s = G_(t.insert.unmatched, r)), s ? dg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Md(e, t, r, n) {
  let i;
  Fl(t) ? i = fg(t.para, r) : Y_(t) && (i = j_(t.book)), i ??= Ht();
  const s = i, o = se(s), a = Yt(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Er(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (se(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [m] = h > 0 ? u.splitText(h) : [void 0];
          let y, x = m?.getPreviousSibling();
          for (; x; ) {
            const S = x;
            x = x.getPreviousSibling(), y ? y.insertBefore(S) : s.append(S), y = S;
          }
          return m && s.append(m), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Mt(u))
      c += 1;
    else if (Dt(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Yt(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (se(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && se(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (R(u)) {
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
  return d(Ee()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function j_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== gs || !r || !Lt.isValidBookCode(r))
    return;
  const n = Fe(e, nv);
  return ah(r, n);
}
function fg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Fe(e, rv), i = ms(r, n);
  if (!Ri(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ct(r), Jo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Me(r) + O;
    i.append(t.hasGutterParaMarkers ? Vk(s) : Sr("marker", s));
  }
  return i;
}
function B_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Fe(e, iv);
  let a;
  if (t.markerMode === "editable")
    a = Hp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = fl(r, c, n, i, s, o);
  }
  return a;
}
function V_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Fe(e, sv);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = $t(r, n);
    c = $p(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = _l(n, l, i, s, o, a);
  }
  return c;
}
function W_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Fe(e, ov);
  return vp(t, r, n, s, i);
}
function pg(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Fe(i.note, av), d = typeof l?.closed == "string" ? l.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const p = [];
  for (const m of c?.ops ?? [])
    if (typeof m.insert == "string")
      if (Qr(m.attributes)) {
        const y = $i(m.attributes.char, t, ke(m.insert), void 0, gg(m.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(ke(m.insert));
  return ig(s, o, p, t, r, f, d).setCategory(a).setUnknownAttributes(l);
}
function hg(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Fe(i, cv), l = cl(s, o, c), d = a?.ops ?? [];
  d.length > 0 && H_(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && bt(l, Gr, () => u), l;
}
function H_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Qr(s.attributes)) {
        const o = ke(s.insert), a = $i(s.attributes.char, t, o, void 0, gg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ke(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Br("unknown", s)) {
        const o = hg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Br("note", s)) {
        const o = pg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function G_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = dl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function gg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function yc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function $i(e, t, r, n, i, s = !1, o = !1) {
  C(r) && r.getTextContentSize() === 0 && r.setTextContent(It);
  const a = () => {
    o && C(r) && r.getTextContent() !== It && r.setTextContent(O + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(yc), l = c[0], d = i?.[i.length - 1];
    if (L(d) && An(l, d))
      return c.length > 1 ? $i(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => d.append(p)) : r && d.append(r), [];
    a();
    const u = c.reduceRight((f, p, h) => {
      const m = Cr(p.style, Fe(p, So));
      if (typeof p.cid == "string" && bt(m, Mn, () => p.cid), n && h === c.length - 1 && bt(m, Gr, () => n), f)
        if (L(f)) {
          const y = f.getMarker(), x = [];
          Ra(y, x, t, !0), x.forEach((M) => m.append(M)), m.append(f);
          const S = [];
          qa(f, S, t, !0), S.forEach((M) => m.append(M));
        } else
          m.append(f);
      return m;
    }, r);
    return Ra(l.style, u, t, s), qa(u, u, t, s), [u];
  } else {
    const c = yc(e), l = i?.[i.length - 1];
    if (L(l) && An(c, l))
      return r && l.append(r), [];
    a();
    const d = Cr(c.style, Fe(c, So));
    return typeof c.cid == "string" && bt(d, Mn, () => c.cid), n && bt(d, Gr, () => n), r && d.append(r), Ra(c.style, d, t, s), qa(d, d, t, s), [d];
  }
}
function qa(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && J_(e.getMarker(), t, r, !1, n);
}
function Ra(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ct(e, "opening", n) : r?.markerMode === "visible" && (i = Sr("marker", Me(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function J_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ct("", "selfClosing") : s = ct(e, "closing", i) : r?.markerMode === "visible" && (s = Sr("marker", n ? nt("") : nt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function Y_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Fl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Qr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function X_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Nt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        bt(t, Gr, () => n);
        continue;
      }
      if (Q_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const mg = [
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
function Q_(e) {
  return mg.includes(e);
}
function Z_() {
  const [e] = le();
  return j(() => e.registerCommand(Fo, (t) => (eC(t), !1), vn), [e]), null;
}
function eC(e) {
  if (tC(e.target))
    return;
  const t = w();
  N(t) && rC(t);
}
function Ii(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Ut(t))
      r++, t = t.getNextSibling(), C(t) && t.getTextContent() === O && (r++, t = t.getNextSibling());
    else if (Te(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Xt(e, r), !0);
}
function tC(e) {
  if (!Zf(e))
    return !1;
  const t = Ns(e);
  if (!Wk(t))
    return !1;
  const r = t.getParent();
  return r ? Pe(r) ? Ii(r) : (Xt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function rC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = X(t.key);
  if (!Pe(r))
    return !1;
  const n = r.getFirstChild();
  return !fr(n) && !zn(n) ? !1 : Ii(r);
}
function nC() {
  const [e] = le();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !iC(r) || !yg() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Qe(
      e.registerCommand(Pr, t, Ue),
      e.registerCommand(Wc, t, Ue),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(Tr, t, xr),
      e.registerCommand(_n, t, xr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Hc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Ns(r.target);
        return !n || !wn(n) ? !1 : (r.preventDefault(), !0);
      }, Ue),
      e.registerCommand(tb, t, Ue),
      e.registerCommand(rb, t, Ue),
      e.registerCommand(nb, t, Ue)
    );
  }, [e]), null;
}
function iC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function wn(e) {
  return it(e, (t) => we(t) || hh(t)) ?? void 0;
}
function yg() {
  const e = w();
  return N(e) ? wn(e.anchor.getNode()) !== void 0 || wn(e.focus.getNode()) !== void 0 : !1;
}
function sC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function oC(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), sC(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function aC(e, t, r, n) {
  if (!xC(t) || oC(e, r))
    return !1;
  const i = r === "up" ? tv(t) : ev(t);
  return i && n.preventDefault(), i;
}
function cC({ viewOptions: e }) {
  const [t] = le();
  return lC(t, e), null;
}
function lC(e, t) {
  j(() => {
    if (!e.hasNodes([dr, _t, Ne]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = Ed(o), u = mC(i, Ad(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return aC(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Ed(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Ad(a, n.key) ? l = !c && wd(i, "next") || !c && dC(i) || kC(i) || !c && s && Nd(i, "next") : uC(a, n.key) && (l = !c && wd(i, "previous") || !c && fC(i) || TC(i, t) || !c && s && Nd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Pr, r, Ue);
  }, [e, t]);
}
function Ed(e) {
  return e.dir || "ltr";
}
function Ad(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function uC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function bc(e) {
  if (!L(e) || e.getMarker() !== "fp")
    return;
  const t = Qt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function dC(e) {
  const t = bc(Sh(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Xt(t, 0), !0);
}
function fC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = bc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Pd(n);
  }
  if (t.offset === 0) {
    const n = bc(r);
    return n ? Pd(n) : !1;
  }
  return !1;
}
function Pd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (C(t))
    return t.select(), !0;
  if (R(t)) {
    const i = t.getLastDescendant();
    return C(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Eo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function pC(e) {
  if (Eo)
    for (const { segment: r } of Eo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function hC(e) {
  if (Eo) {
    let n = 0;
    for (const { index: i } of Eo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function bg(e) {
  for (let t = e; t; t = t.getParent())
    if (R(t) && !t.isInline())
      return t;
}
function kg(e) {
  return !!e && P(e) && wn(e) !== void 0;
}
function xi(e) {
  return C(e) && !e.isToken() && !kg(e) && e.getTextContentSize() > 0;
}
function Tg(e) {
  return Do(e) ? !0 : z(e) ? e.getIsCollapsed() === !0 : C(e) ? (e.isToken() || kg(e)) && e.getTextContentSize() > 0 : ep(e) ? !$e(e) : !1;
}
function vi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function ea(e, t, r) {
  for (let n = e; n; ) {
    if (Tg(n))
      return n;
    if (R(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? vi(n, t, r);
      continue;
    }
    if (xi(n))
      return n;
    n = vi(n, t, r);
  }
}
function Kl(e, t, r, n, i) {
  return r === "element" && R(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? vi(e, n, i) : r === "text" && Tg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : vi(e, n, i);
}
function $a(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Kl(e.node, e.offset, e.kind, "previous", t), n = ea(r, "previous", t);
  if (!n)
    return e;
  if (xi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function gC(e, t) {
  const r = e.getNode(), n = bg(r);
  if (!n)
    return;
  if (e.type === "text" && xi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return $a({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Kl(r, e.offset, e.type, t, n), s = ea(i, t, n);
  if (!s)
    return;
  if (xi(s)) {
    const c = s.getTextContent(), l = t === "next" ? pC(c) : hC(c);
    return $a({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return $a({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function xg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = gC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Nd(e, t) {
  return xg(e, t, "collapse");
}
function mC(e, t) {
  return xg(e, t, "extend");
}
function yC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && xi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Kl(n, e.offset, e.type, t, r);
  return ea(i, t, r) === void 0;
}
function bC(e, t) {
  const r = Ee();
  for (let n = e; n; ) {
    const i = vi(n, t, r), s = i && ea(i, t, r);
    if (!s)
      return;
    if (n = wn(s), !n)
      return s;
  }
}
function wd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (wn(n))
    return !1;
  const i = bg(n);
  if (!i || !yC(r, t, i))
    return !1;
  const s = vi(i, t, Ee()), o = s && wn(s);
  if (!o)
    return !1;
  const a = bC(o, t);
  if (!a)
    return !0;
  if (xi(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Od(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function kC(e) {
  const t = e.anchor.getNode(), r = Sh(e);
  if (z(r) && !P(r.getFirstChild())) {
    if (Pe(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Pe(i) && Ii(i)) && i.selectStart(), !0;
      }
    } else return vt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Pe(t) && z(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Od(r), !0;
  }
  const n = r?.getParent();
  if (vt(r) && z(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Od(n) : n.selectEnd(), !0;
  }
  return !1;
}
function TC(e, t) {
  const r = rx(e);
  if (Ls(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (ht(i.getParent()))
    return !0;
  if (z(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!zn(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Pe(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = it(o, (c) => z(c));
    if (z(a) && a.getIsCollapsed()) {
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
  if (pr(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function xC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Te(t) && ep(t);
}
function vC() {
  const [e] = le();
  return _C(e), null;
}
function _C(e) {
  j(() => {
    if (!e.hasNodes([xe]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Qe(
      e.registerNodeTransform(xe, MC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(xe, Fk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(xe, Yp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(xe, (t) => bs(Mr("char"), t)),
      e.registerNodeTransform(ze, EC)
    );
  }, [e]);
}
function Ia(e) {
  return e.getChildren().some(P);
}
function CC(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Is(n)) {
    const i = n.getTextContent();
    i.startsWith(O) && (i === O ? n.remove() : n.setTextContent(i.slice(O.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function SC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function MC(e) {
  if (!L(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Ia(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = te(e, Mn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (L(i) && An({ style: t, cid: r }, i) && Pt(n, i.getUnknownAttributes()))
    if (Ia(i)) {
      if (CC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  L(s) && An({ style: t, cid: r }, s) && Pt(n, s.getUnknownAttributes()) && (Ia(s) ? SC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function EC(e) {
  const t = e.getParent();
  if (!L(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(It) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function vg(e) {
  return e.replaceAll("	", " ");
}
const zl = (e) => {
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
      n.setData(o, vg(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Tr, s);
  });
}, jl = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", vg(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Tr, i);
  });
};
function AC() {
  const [e] = le();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(lo ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(Ko, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(_n, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? jl(e) : zl(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function PC({ logger: e }) {
  const [t] = le();
  return j(() => Qe(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Pr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), ui),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Tr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ui),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Hc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ui)
  ), [t, e]), null;
}
function NC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function wC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(NC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let OC = 0;
class Ji {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${OC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function qC({ options: e } = {}) {
  const [t] = le(), [r, n] = he(() => !t.isEditable()), [i, s] = he({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = he(void 0), c = De(() => {
    const u = [
      new Ji("Cut", {
        onSelect: () => {
          t.dispatchCommand(_n, null);
        },
        isDisabled: r
      }),
      new Ji("Copy", {
        onSelect: () => {
          t.dispatchCommand(Ko, null);
        }
      }),
      new Ji("Paste", {
        onSelect: () => {
          zl(t);
        },
        isDisabled: r
      }),
      new Ji("Paste as Plain Text", {
        onSelect: () => {
          jl(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Ji(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = de(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  j(() => {
    const u = (f) => {
      const p = f.target;
      t.getRootElement() === p || dh(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", u), f && f.addEventListener("contextmenu", u);
    });
  }, [t]), j(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return globalThis.addEventListener("scroll", u, !0), () => globalThis.removeEventListener("scroll", u, !0);
  }, [i.isOpen, l]), j(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return document.addEventListener("pointerdown", u), () => document.removeEventListener("pointerdown", u);
  }, [i.isOpen, l]), j(() => {
    if (!i.isOpen)
      return;
    const u = (f) => {
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
    return document.addEventListener("keydown", u, !0), () => document.removeEventListener("keydown", u, !0);
  }, [i.isOpen, l, c, o, t]), j(() => t.registerEditableListener((u) => {
    n(!u);
  }), [t]);
  const d = Y(null);
  return Ms(() => {
    const u = d.current;
    if (!u)
      return;
    const { width: f, height: p } = u.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    u.style.left = `${h}px`, u.style.top = `${m}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? vb.createPortal(_("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: _(wC, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function RC() {
  const [e] = le();
  return j(() => e.registerCommand(Pr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(lo ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, xr), [e]), null;
}
function $C({ isEditable: e }) {
  const [t] = le();
  return Ms(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function qd(e) {
  return !!e && ml(X(e));
}
function _g(e) {
  const [t] = le(), r = Y(void 0), n = de((i) => {
    let s = !1;
    const o = w(), a = N(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = qd(c);
    c && !l && (r.current = void 0);
    let d;
    if (i) {
      const u = i.getParentOrThrow(), f = i.getIndexWithinParent() + 1, p = Go(u, f);
      if (p)
        r.current = p.getKey(), d = p.getKey();
      else {
        const h = QT();
        i.insertAfter(h), r.current = h.getKey(), d = h.getKey(), s = !0;
      }
      Xt(u, f);
    }
    if (c && l && c !== a && c !== d) {
      const u = X(c);
      C(u) && (u.remove(), s = !0), r.current === c && (r.current = void 0);
    }
    return s;
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = w(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && n(a) && Cn(Hr);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Ds(c) || !c.includes(bi))
        return;
      const l = w(), d = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (ZT(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(bi).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = Qe(t.registerCommand(cr, () => (i(), !1), vn), t.registerCommand(Gc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = qd(a);
      }), c && t.update(() => {
        const l = X(a);
        C(l) && l.remove();
      }, { tag: Hr }), r.current = void 0, !1;
    }, vn), t.registerNodeTransform(ze, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function IC() {
  const e = w();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!R(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!Te(i) || Go(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || Te(s))
    return i;
}
function LC() {
  return _g(IC), null;
}
function DC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
        const d = o.getRootElement(), u = d?.ownerDocument.activeElement, f = d != null && u != null && (d === u || d.contains(u));
        o.update(() => {
          f || Cn(ib), o.setEditorState(l), o.dispatchCommand(sb, void 0);
        }, { tag: Xc });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function UC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return FC(t, n), KC(i, e, r, n), null;
}
function FC(e, t) {
  const r = Y(void 0), n = Y(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = Fv), r.current !== o && (r.current = o, Rd("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = Kv), n.current !== o && (n.current = o, Rd("cross-ref-callers", o, t));
  }, [t, s]);
}
function KC(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([xe, Ne, Gt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => GC(s));
    return Qe(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ne, (s) => zC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(xe, jC),
      e.registerNodeTransform(ze, BC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Gt, VC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Gt, (s, { prevEditorState: o }) => WC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(cr, () => HC(e, t, r, n), Rt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function zC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => pr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    C(i) && !P(i) && i.getTextContent() !== St(e.getCaller()) && e.insertBefore(i);
  }
}
function jC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => pr(o));
  if (!L(e) || !z(t) || !n)
    return;
  const i = yl(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  C(s) ? s.getTextContent() !== O && s.setTextContent(O) : e.insertAfter(ke(O));
}
function BC(e) {
  const t = Qt(e), r = t?.getChildren(), n = r?.find((o) => pr(o));
  if (!C(e) || !z(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && z(i) && e.getTextContent() !== O && (e.setTextContent(O), e.selectEnd()), L(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(It) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = yl(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function VC(e) {
  if (!pr(e))
    return;
  const t = e.getNextSibling();
  !C(t) || P(t) ? e.insertAfter(ke(O)) : t.getTextContent() !== O && t.setTextContent(O);
}
function WC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = X(r), a = o?.getParent();
      return pr(o) && z(a) && a.getCaller() === fo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function HC(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = it(o, (c) => z(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = X(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Yi(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (z(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Yi(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (z(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Yi(e, c, n);
    } else if (!a) {
      const c = it(o, (l) => z(l));
      if (c && c.getIsCollapsed() && Pe(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Yi(e, l, n);
      }
    }
  }
  if (Pe(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (zn(c) && z(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Yi(e, l, n);
    }
  }
  return !1;
}
function Yi(e, t, r) {
  const n = X(t);
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
function GC(e) {
  const t = w();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (z(i) && C(s)) {
    e.preventDefault();
    const o = Uo();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), xn(o);
  }
}
function Rd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (JC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function JC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function ta(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Jr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => C(n) && n.getMode() === "token") ? t : [];
}
function YC(e) {
  const t = e.getParent();
  if (z(t))
    return ta(t).some((r) => r.is(e)) ? t : void 0;
}
function Ao(e) {
  const t = ta(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function XC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function QC(e) {
  const t = ob();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Ao(e);
  const i = XC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Ao(e);
}
function kc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = YC(t);
  if (r)
    return ZC(r, t, e.offset) ? void 0 : r;
}
function ZC(e, t, r) {
  const n = ta(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function eS(e) {
  const t = ta(e), r = t[t.length - 1];
  C(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Xt(e, Ao(e));
}
function tS(e = !1) {
  const t = w();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return rS(t.anchor, t.focus);
  const r = kc(t.anchor);
  if (!r)
    return !1;
  if (!e && QC(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Xt(n, r.getIndexWithinParent());
  } else
    eS(r);
  return !0;
}
function rS(e, t) {
  const r = kc(e), n = kc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && $d(e, r, i), n && $d(t, n, !i), !0;
}
function $d(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Ao(t), "element");
}
function nS() {
  const [e] = le(), t = Y(!1);
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
  }, [e]), j(() => e.registerCommand(cr, () => (tS(t.current) && Cn(Hr), !1), vn), [e]), null;
}
function iS({ onChange: e, viewOptions: t }) {
  const [r] = le();
  return j(() => r.registerCommand(cr, () => {
    const n = Rl(t);
    return e?.(n), !1;
  }, Rt), [r, e, t]), null;
}
function sS() {
  const [e] = le();
  return oS(e), null;
}
function oS(e) {
  j(() => {
    if (!e.hasNodes([Ze]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Ze, (t) => aS(t, e));
  }, [e]);
}
function aS(e, t) {
  Bh(t, e.getKey()) && jh(e.getFirstChild()), !(!se(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = X(e.getKey());
    return se(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Cg({ onStateChange: e }) {
  const [t] = le(), [r, n] = he(t), i = Y(!1), s = Y(!1), o = Y(void 0), a = Y(void 0), c = de(() => {
    const l = w();
    let d;
    if (N(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : it(u, (x) => {
        const S = x.getParent();
        return S !== null && ab(S);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), ks(p) && (p = it(u, se) ?? p);
      const h = p.getKey(), m = r.getElementByKey(h), y = ix(u, f);
      if (y && Zx(y) && (d = y.getMarker()), m !== null && (se(p) || ht(p) || Ls(p))) {
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
  return j(() => t.registerCommand(cr, (l, d) => (c(), n(d), !1), xr), [t, c]), j(() => Qe(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(cb, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), xr), r.registerCommand(lb, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), xr)), [c, r, e]), null;
}
function cS(e) {
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
  return e ? Pe(e) ? e : it(e, (r) => Pe(r)) ?? void 0 : void 0;
}
function Sg(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Zr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Bl(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !tp(e) ? !1 : e.getNodes().some((t) => Te(t));
}
function Mg(e) {
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
function Eg(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Zr(r);
  if (!n)
    return !1;
  if (R(r)) {
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
function Id(e, t) {
  return !!Tc(e, t);
}
function Tc(e, t) {
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && R(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return Te(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return Te(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return Te(i) ? i : void 0;
}
function Po(e, t) {
  if (!N(e))
    return !1;
  const r = Zr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function La(e) {
  return Bl(e) || Sg(e);
}
function lS(e, t) {
  if (Bl(e) || Sg(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Mg(e) && Po(e, "backward") || Id(e, "backward");
    case "deleteForward":
      return Eg(e) && Po(e, "forward") || Id(e, "forward");
    case "insertText":
      return !1;
  }
}
function uS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Tc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Mg(e) && Po(e, "backward")) {
        const n = Zr(e.anchor.getNode());
        if (Pe(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Tc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Eg(e) && Po(e, "forward")) {
        const i = Zr(e.anchor.getNode())?.getNextSibling();
        if (Pe(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Ld(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return tp(e) && e.has(t.key);
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
function Ag(e) {
  if (C(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else R(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function dS(e) {
  const t = e.getPreviousSibling();
  if (!Pe(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Ag(r) : Ii(t) || t.selectStart();
}
function Pg(e) {
  return Te(e) || We(e) ? [] : Pe(e) ? e.getChildren().flatMap(Pg) : [e];
}
function fS(e) {
  const t = [];
  for (const r of e) {
    const n = Pg(r);
    n.length !== 0 && (Pe(r) && t.length > 0 && t.push(ke(" ")), t.push(...n));
  }
  return t;
}
function Dd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pS(e) {
  if (Array.isArray(e)) return e;
}
function hS(e, t) {
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
function gS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mS(e, t) {
  return pS(e) || hS(e, t) || yS(e, t) || gS();
}
function yS(e, t) {
  if (e) {
    if (typeof e == "string") return Dd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Dd(e, t) : void 0;
  }
}
const Ng = Object.entries, Ud = Object.setPrototypeOf, bS = Object.isFrozen, kS = Object.getPrototypeOf, TS = Object.getOwnPropertyDescriptor;
let tt = Object.freeze, st = Object.seal, ai = Object.create, wg = typeof Reflect < "u" && Reflect, xc = wg.apply, vc = wg.construct;
tt || (tt = function(t) {
  return t;
});
st || (st = function(t) {
  return t;
});
xc || (xc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
vc || (vc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const ii = He(Array.prototype.forEach), xS = He(Array.prototype.lastIndexOf), Fd = He(Array.prototype.pop), si = He(Array.prototype.push), vS = He(Array.prototype.splice), Vr = Array.isArray, is = He(String.prototype.toLowerCase), Da = He(String.prototype.toString), Kd = He(String.prototype.match), Xi = He(String.prototype.replace), zd = He(String.prototype.indexOf), _S = He(String.prototype.trim), CS = He(Number.prototype.toString), SS = He(Boolean.prototype.toString), jd = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), Bd = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), Xe = He(Object.prototype.hasOwnProperty), Qi = He(Object.prototype.toString), Ye = He(RegExp.prototype.test), hn = MS(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return xc(e, t, n);
  };
}
function MS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return vc(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : is;
  if (Ud && Ud(e, null), !Vr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (bS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function ES(e) {
  for (let t = 0; t < e.length; t++)
    Xe(e, t) || (e[t] = null);
  return e;
}
function at(e) {
  const t = ai(null);
  for (const n of Ng(e)) {
    var r = mS(n, 2);
    const i = r[0], s = r[1];
    Xe(e, i) && (Vr(s) ? t[i] = ES(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = at(s) : t[i] = s);
  }
  return t;
}
function AS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return CS(e);
    case "boolean":
      return SS(e);
    case "bigint":
      return jd ? jd(e) : "0";
    case "symbol":
      return Bd ? Bd(e) : "Symbol()";
    case "undefined":
      return Qi(e);
    case "function":
    case "object": {
      if (e === null)
        return Qi(e);
      const t = e, r = Bt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Qi(n);
      }
      return Qi(e);
    }
    default:
      return Qi(e);
  }
}
function Bt(e, t) {
  for (; e !== null; ) {
    const n = TS(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = kS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function PS(e) {
  try {
    return Ye(e, ""), !0;
  } catch {
    return !1;
  }
}
const Vd = tt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ua = tt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Fa = tt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), NS = tt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ka = tt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), wS = tt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Wd = tt(["#text"]), Hd = tt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), za = tt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Gd = tt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Qs = tt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), OS = st(/{{[\w\W]*|^[\w\W]*}}/g), qS = st(/<%[\w\W]*|^[\w\W]*%>/g), RS = st(/\${[\w\W]*/g), $S = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), IS = st(/^aria-[\-\w]+$/), Jd = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), LS = st(/^(?:\w+script|data):/i), DS = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), US = st(/^html$/i), FS = st(/^[a-z][.\w]*(-[.\w]+)+$/i), Yd = st(/<[/\w!]/g), Xd = st(/<[/\w]/g), KS = st(/<\/no(script|embed|frames)/i), zS = st(/\/>/i), Ct = {
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
}, jS = function() {
  return typeof window > "u" ? null : window;
}, BS = function(t, r) {
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
}, Qd = function() {
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
  return Xe(t, r) && Vr(t[r]) ? ge(i.base ? at(i.base) : {}, t[r], i.transform) : n;
};
function Og() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jS();
  const t = (F) => Og(F);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Ct.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = Bt(f, "cloneNode"), h = Bt(f, "remove"), m = Bt(f, "nextSibling"), y = Bt(f, "childNodes"), x = Bt(f, "parentNode"), S = Bt(f, "shadowRoot"), M = Bt(f, "attributes"), $ = o && o.prototype ? Bt(o.prototype, "nodeType") : null, A = o && o.prototype ? Bt(o.prototype, "nodeName") : null, k = o && o.prototype ? Bt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let U, D = "", G, Q = !1, ce = 0;
  const fe = function() {
    if (ce > 0)
      throw hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, oe = function(g) {
    fe(), ce++;
    try {
      return U.createHTML(g);
    } finally {
      ce--;
    }
  }, me = function(g) {
    fe(), ce++;
    try {
      return U.createScriptURL(g);
    } finally {
      ce--;
    }
  }, qe = function() {
    return Q || (G = BS(u, i), Q = !0), G;
  }, Z = r, K = Z.implementation, re = Z.createNodeIterator, Re = Z.createDocumentFragment, ot = Z.getElementsByTagName, Ft = n.importNode;
  let pe = Qd();
  t.isSupported = typeof Ng == "function" && typeof x == "function" && K && K.createHTMLDocument !== void 0;
  const Kt = OS, At = qS, da = RS, er = $S, Vn = IS, Fi = LS, ne = DS, ut = FS;
  let Bs = Jd, ve = null;
  const gr = ge({}, [...Vd, ...Ua, ...Fa, ...Ka, ...Wd]);
  let J = null;
  const Je = ge({}, [...Hd, ...za, ...Gd, ...Qs]);
  let ye = Object.seal(ai(null, {
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
  })), $r = null, Ir = null;
  const tr = Object.seal(ai(null, {
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
  let Wn = !0, Hn = !0, Lr = !1, an = !0, rr = !1, gt = !0, zt = !1, jt = !1, Dr = null, Ur = null, Ki = !1, mr = !1, Gn = !1, cn = !1, E = !0, I = !1;
  const B = "user-content-";
  let W = !0, ue = !1, Be = {}, Ge = null;
  const yr = ge({}, [
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
  let zi = null;
  const ji = ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let fa = null;
  const pu = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Vs = "http://www.w3.org/1998/Math/MathML", Ws = "http://www.w3.org/2000/svg", nr = "http://www.w3.org/1999/xhtml";
  let Jn = nr, pa = !1, ha = null;
  const My = ge({}, [Vs, Ws, nr], Da), hu = tt(["mi", "mo", "mn", "ms", "mtext"]);
  let ga = ge({}, hu);
  const gu = tt(["annotation-xml"]);
  let ma = ge({}, gu);
  const Ey = ge({}, ["title", "style", "font", "a", "script"]);
  let Bi = null;
  const Ay = ["application/xhtml+xml", "text/html"], Py = "text/html";
  let Ie = null, Yn = null;
  const Ny = r.createElement("form"), mu = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, ya = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Yn && Yn === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = at(g), Bi = // eslint-disable-next-line unicorn/prefer-includes
    Ay.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Py : g.PARSER_MEDIA_TYPE, Ie = Bi === "application/xhtml+xml" ? Da : is, ve = zr(g, "ALLOWED_TAGS", gr, {
      transform: Ie
    }), J = zr(g, "ALLOWED_ATTR", Je, {
      transform: Ie
    }), ha = zr(g, "ALLOWED_NAMESPACES", My, {
      transform: Da
    }), fa = zr(g, "ADD_URI_SAFE_ATTR", pu, {
      transform: Ie,
      base: pu
    }), zi = zr(g, "ADD_DATA_URI_TAGS", ji, {
      transform: Ie,
      base: ji
    }), Ge = zr(g, "FORBID_CONTENTS", yr, {
      transform: Ie
    }), $r = zr(g, "FORBID_TAGS", at({}), {
      transform: Ie
    }), Ir = zr(g, "FORBID_ATTR", at({}), {
      transform: Ie
    }), Be = Xe(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? at(g.USE_PROFILES) : g.USE_PROFILES : !1, Wn = g.ALLOW_ARIA_ATTR !== !1, Hn = g.ALLOW_DATA_ATTR !== !1, Lr = g.ALLOW_UNKNOWN_PROTOCOLS || !1, an = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, rr = g.SAFE_FOR_TEMPLATES || !1, gt = g.SAFE_FOR_XML !== !1, zt = g.WHOLE_DOCUMENT || !1, mr = g.RETURN_DOM || !1, Gn = g.RETURN_DOM_FRAGMENT || !1, cn = g.RETURN_TRUSTED_TYPE || !1, Ki = g.FORCE_BODY || !1, E = g.SANITIZE_DOM !== !1, I = g.SANITIZE_NAMED_PROPS || !1, W = g.KEEP_CONTENT !== !1, ue = g.IN_PLACE || !1, Bs = PS(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : Jd, Jn = typeof g.NAMESPACE == "string" ? g.NAMESPACE : nr, ga = Xe(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? at(g.MATHML_TEXT_INTEGRATION_POINTS) : ge({}, hu), ma = Xe(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? at(g.HTML_INTEGRATION_POINTS) : ge({}, gu);
    const v = Xe(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? at(g.CUSTOM_ELEMENT_HANDLING) : ai(null);
    if (ye = ai(null), Xe(v, "tagNameCheck") && mu(v.tagNameCheck) && (ye.tagNameCheck = v.tagNameCheck), Xe(v, "attributeNameCheck") && mu(v.attributeNameCheck) && (ye.attributeNameCheck = v.attributeNameCheck), Xe(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (ye.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), st(ye), rr && (Hn = !1), Gn && (mr = !0), Be && (ve = ge({}, Wd), J = ai(null), Be.html === !0 && (ge(ve, Vd), ge(J, Hd)), Be.svg === !0 && (ge(ve, Ua), ge(J, za), ge(J, Qs)), Be.svgFilters === !0 && (ge(ve, Fa), ge(J, za), ge(J, Qs)), Be.mathMl === !0 && (ge(ve, Ka), ge(J, Gd), ge(J, Qs))), tr.tagCheck = null, tr.attributeCheck = null, Xe(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? tr.tagCheck = g.ADD_TAGS : Vr(g.ADD_TAGS) && (ve === gr && (ve = at(ve)), ge(ve, g.ADD_TAGS, Ie))), Xe(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? tr.attributeCheck = g.ADD_ATTR : Vr(g.ADD_ATTR) && (J === Je && (J = at(J)), ge(J, g.ADD_ATTR, Ie))), Xe(g, "ADD_URI_SAFE_ATTR") && Vr(g.ADD_URI_SAFE_ATTR) && ge(fa, g.ADD_URI_SAFE_ATTR, Ie), Xe(g, "FORBID_CONTENTS") && Vr(g.FORBID_CONTENTS) && (Ge === yr && (Ge = at(Ge)), ge(Ge, g.FORBID_CONTENTS, Ie)), Xe(g, "ADD_FORBID_CONTENTS") && Vr(g.ADD_FORBID_CONTENTS) && (Ge === yr && (Ge = at(Ge)), ge(Ge, g.ADD_FORBID_CONTENTS, Ie)), W && (ve["#text"] = !0), zt && ge(ve, ["html", "head", "body"]), ve.table && (ge(ve, ["tbody"]), delete $r.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = U;
      U = g.TRUSTED_TYPES_POLICY;
      try {
        D = oe("");
      } catch (V) {
        throw U = q, V;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (U = void 0, D = "") : (U === void 0 && (U = qe()), U && typeof D == "string" && (D = oe("")));
    tt && tt(g), Yn = g;
  }, yu = ge({}, [...Ua, ...Fa, ...NS]), bu = ge({}, [...Ka, ...wS]), wy = function(g, v, q) {
    return v.namespaceURI === nr ? g === "svg" : v.namespaceURI === Vs ? g === "svg" && (q === "annotation-xml" || ga[q]) : !!yu[g];
  }, Oy = function(g, v, q) {
    return v.namespaceURI === nr ? g === "math" : v.namespaceURI === Ws ? g === "math" && ma[q] : !!bu[g];
  }, qy = function(g, v, q) {
    return v.namespaceURI === Ws && !ma[q] || v.namespaceURI === Vs && !ga[q] ? !1 : !bu[g] && (Ey[g] || !yu[g]);
  }, Ry = function(g) {
    let v = x(g);
    (!v || !v.tagName) && (v = {
      namespaceURI: Jn,
      tagName: "template"
    });
    const q = is(g.tagName), V = is(v.tagName);
    return ha[g.namespaceURI] ? g.namespaceURI === Ws ? wy(q, v, V) : g.namespaceURI === Vs ? Oy(q, v, V) : g.namespaceURI === nr ? qy(q, v, V) : !!(Bi === "application/xhtml+xml" && ha[g.namespaceURI]) : !1;
  }, Fr = function(g) {
    si(t.removed, {
      element: g
    });
    try {
      x(g).removeChild(g);
    } catch {
      if (h(g), !x(g))
        throw hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Hs = function(g) {
    Vi(g);
    const v = y(g);
    if (v) {
      const V = [];
      ii(v, (H) => {
        si(V, H);
      }), ii(V, (H) => {
        try {
          h(H);
        } catch {
        }
      });
    }
    const q = M(g);
    if (q)
      for (let V = q.length - 1; V >= 0; --V) {
        const H = q[V], ie = H && H.name;
        if (typeof ie == "string")
          try {
            g.removeAttribute(ie);
          } catch {
          }
      }
  }, ln = function(g, v) {
    try {
      si(t.removed, {
        attribute: v.getAttributeNode(g),
        from: v
      });
    } catch {
      si(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(g), g === "is")
      if (mr || Gn)
        try {
          Fr(v);
        } catch {
        }
      else
        try {
          v.setAttribute(g, "");
        } catch {
        }
  }, $y = function(g) {
    const v = M(g);
    if (v)
      for (let q = v.length - 1; q >= 0; --q) {
        const V = v[q], H = V && V.name;
        if (!(typeof H != "string" || J[Ie(H)]))
          try {
            g.removeAttribute(H);
          } catch {
          }
      }
  }, Vi = function(g) {
    const v = [g];
    for (; v.length > 0; ) {
      const q = v.pop();
      ($ ? $(q) : q.nodeType) === Ct.element && $y(q);
      const H = y(q);
      if (H)
        for (let ie = H.length - 1; ie >= 0; --ie)
          v.push(H[ie]);
    }
  }, Iy = function(g) {
    if (!gt)
      return;
    const v = [g];
    for (; v.length > 0; ) {
      const q = v.pop(), V = $ ? $(q) : q.nodeType;
      if (V === Ct.processingInstruction || V === Ct.comment && Ye(Xd, q.data)) {
        try {
          h(q);
        } catch {
        }
        continue;
      }
      if (V === Ct.element) {
        const ie = q, _e = Ie(A ? A(q) : q.nodeName);
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && _e !== "label" && _e !== "output" && ie.removeAttribute("for");
        } catch {
        }
      }
      const H = y(q);
      if (H)
        for (let ie = H.length - 1; ie >= 0; --ie)
          v.push(H[ie]);
    }
  }, ku = function(g) {
    let v = null, q = null;
    if (Ki)
      g = "<remove></remove>" + g;
    else {
      const ie = Kd(g, /^[\r\n\t ]+/);
      q = ie && ie[0];
    }
    Bi === "application/xhtml+xml" && Jn === nr && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const V = U ? oe(g) : g;
    if (Jn === nr)
      try {
        v = new d().parseFromString(V, Bi);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = K.createDocument(Jn, "template", null);
      try {
        v.documentElement.innerHTML = pa ? D : V;
      } catch {
      }
    }
    const H = v.body || v.documentElement;
    return g && q && H.insertBefore(r.createTextNode(q), H.childNodes[0] || null), Jn === nr ? ot.call(v, zt ? "html" : "body")[0] : zt ? v.documentElement : H;
  }, Tu = function(g) {
    const v = k ? k(g) : g.ownerDocument;
    return re.call(
      v || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Gs = function(g) {
    return g = Xi(g, Kt, " "), g = Xi(g, At, " "), g = Xi(g, da, " "), g;
  }, ba = function(g) {
    var v;
    g.normalize();
    const q = k ? k(g) : g.ownerDocument, V = re.call(
      q || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = V.nextNode();
    for (; H; )
      H.data = Gs(H.data), H = V.nextNode();
    const ie = (v = g.querySelectorAll) === null || v === void 0 ? void 0 : v.call(g, "template");
    ie && ii(ie, (_e) => {
      Xn(_e.content) && ba(_e.content);
    });
  }, Js = function(g) {
    const v = A ? A(g) : null;
    return typeof v != "string" || Ie(v) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== M(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    g.nodeType !== $(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    g.childNodes !== y(g);
  }, Xn = function(g) {
    if (!$ || typeof g != "object" || g === null)
      return !1;
    try {
      return $(g) === Ct.documentFragment;
    } catch {
      return !1;
    }
  }, Wi = function(g) {
    if (!$ || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof $(g) == "number";
    } catch {
      return !1;
    }
  };
  function ir(F, g, v) {
    F.length !== 0 && ii(F, (q) => {
      q.call(t, g, v, Yn);
    });
  }
  const Ly = function(g, v) {
    return !!(gt && g.hasChildNodes() && !Wi(g.firstElementChild) && Ye(Yd, g.textContent) && Ye(Yd, g.innerHTML) || gt && g.namespaceURI === nr && v === "style" && Wi(g.firstElementChild) || g.nodeType === Ct.processingInstruction || gt && g.nodeType === Ct.comment && Ye(Xd, g.data));
  }, Dy = function(g, v, q) {
    if (!$r[v] && Cu(v) && (ye.tagNameCheck instanceof RegExp && Ye(ye.tagNameCheck, v) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(v)))
      return !1;
    if (W && !Ge[v]) {
      const V = x(g), H = y(g);
      if (H && V) {
        const ie = H.length;
        for (let _e = ie - 1; _e >= 0; --_e) {
          const Le = g === q ? p(H[_e], !0) : H[_e];
          V.insertBefore(Le, m(g));
        }
      }
    }
    return Fr(g), !0;
  }, xu = function(g, v, q, V) {
    return g.length === 0 ? v : v === q || v === V ? at(v) : v;
  }, vu = function(g, v) {
    if (ir(pe.beforeSanitizeElements, g, null), g !== v && x(g) === null)
      return ue && Vi(g), !0;
    if (Js(g))
      return Fr(g), !0;
    const q = Ie(A ? A(g) : g.nodeName);
    if (ve = xu(pe.uponSanitizeElement, ve, gr, Dr), ir(pe.uponSanitizeElement, g, {
      tagName: q,
      allowedTags: ve
    }), g !== v && x(g) === null)
      return ue && Vi(g), !0;
    if (Ly(g, q))
      return Fr(g), !0;
    if ($r[q] || !(tr.tagCheck instanceof Function && tr.tagCheck(q)) && !ve[q]) {
      const H = Dy(g, q, v);
      return H === !1 && ir(pe.afterSanitizeElements, g, null), H;
    }
    if (($ ? $(g) : g.nodeType) === Ct.element && !Ry(g) || (q === "noscript" || q === "noembed" || q === "noframes") && Ye(KS, g.innerHTML))
      return Fr(g), !0;
    if (rr && g.nodeType === Ct.text) {
      const H = Gs(g.textContent);
      g.textContent !== H && (si(t.removed, {
        element: g.cloneNode()
      }), g.textContent = H);
    }
    return ir(pe.afterSanitizeElements, g, null), !1;
  }, _u = function(g, v, q) {
    if (Ir[v] || gt && v === "patchsrc" || gt && v === "for" && g !== "label" && g !== "output" || E && (v === "id" || v === "name") && (q in r || q in Ny))
      return !1;
    const V = J[v] || tr.attributeCheck instanceof Function && tr.attributeCheck(v, g);
    if (!(Hn && Ye(er, v))) {
      if (!(Wn && Ye(Vn, v))) {
        if (V) {
          if (!fa[v]) {
            if (!Ye(Bs, Xi(q, ne, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && g !== "script" && zd(q, "data:") === 0 && zi[g])) {
                if (!(Lr && !Ye(Fi, Xi(q, ne, "")))) {
                  if (q)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Cu(g) && (ye.tagNameCheck instanceof RegExp && Ye(ye.tagNameCheck, g) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(g)) && (ye.attributeNameCheck instanceof RegExp && Ye(ye.attributeNameCheck, v) || ye.attributeNameCheck instanceof Function && ye.attributeNameCheck(v, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && ye.allowCustomizedBuiltInElements && (ye.tagNameCheck instanceof RegExp && Ye(ye.tagNameCheck, q) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(q)))
        ) return !1;
      }
    }
    return !0;
  }, Uy = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Cu = function(g) {
    return !Uy[is(g)] && Ye(ut, g);
  }, Fy = function(g, v, q, V) {
    if (U && typeof u == "object" && typeof u.getAttributeType == "function" && !q)
      switch (u.getAttributeType(g, v)) {
        case "TrustedHTML":
          return oe(V);
        case "TrustedScriptURL":
          return me(V);
      }
    return V;
  }, Ky = function(g, v, q, V) {
    try {
      q ? g.setAttributeNS(q, v, V) : g.setAttribute(v, V), Js(g) ? Fr(g) : Fd(t.removed);
    } catch {
      ln(v, g);
    }
  }, Su = function(g) {
    ir(pe.beforeSanitizeAttributes, g, null);
    const v = g.attributes;
    if (!v || Js(g))
      return;
    J = xu(pe.uponSanitizeAttribute, J, Je, Ur);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: J,
      forceKeepAttr: void 0
    };
    let V = v.length;
    const H = Ie(g.nodeName);
    for (; V--; ) {
      const ie = v[V], _e = ie.name, Le = ie.namespaceURI, mt = ie.value, yt = Ie(_e), Ta = mt;
      let dt = _e === "value" ? Ta : _S(Ta);
      if (q.attrName = yt, q.attrValue = dt, q.keepAttr = !0, q.forceKeepAttr = void 0, ir(pe.uponSanitizeAttribute, g, q), dt = q.attrValue, I && (yt === "id" || yt === "name") && zd(dt, B) !== 0 && (ln(_e, g), dt = B + dt), gt && Ye(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        ln(_e, g);
        continue;
      }
      if (yt === "attributename" && Kd(dt, "href")) {
        ln(_e, g);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          ln(_e, g);
          continue;
        }
        if (!an && Ye(zS, dt)) {
          ln(_e, g);
          continue;
        }
        if (rr && (dt = Gs(dt)), !_u(H, yt, dt)) {
          ln(_e, g);
          continue;
        }
        dt = Fy(H, yt, Le, dt), dt !== Ta && Ky(g, _e, Le, dt);
      }
    }
    ir(pe.afterSanitizeAttributes, g, null);
  }, Ys = function(g) {
    let v = null;
    const q = Tu(g);
    for (ir(pe.beforeSanitizeShadowDOM, g, null); v = q.nextNode(); )
      if (ir(pe.uponSanitizeShadowNode, v, null), vu(v, g), Su(v), Xn(v.content) && Ys(v.content), ($ ? $(v) : v.nodeType) === Ct.element) {
        const H = S(v);
        Xn(H) && (ka(H), Ys(H));
      }
    ir(pe.afterSanitizeShadowDOM, g, null);
  }, ka = function(g) {
    const v = [{
      node: g,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const q = v.pop();
      if (q.shadow) {
        Ys(q.shadow);
        continue;
      }
      const V = q.node, ie = ($ ? $(V) : V.nodeType) === Ct.element, _e = y(V);
      if (_e)
        for (let Le = _e.length - 1; Le >= 0; --Le)
          v.push({
            node: _e[Le],
            shadow: null
          });
      if (ie) {
        const Le = A ? A(V) : null;
        if (typeof Le == "string" && Ie(Le) === "template") {
          const mt = V.content;
          Xn(mt) && v.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (ie) {
        const Le = S(V);
        Xn(Le) && v.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, q = null, V = null, H = null;
    if (pa = !F, pa && (F = "<!-->"), typeof F != "string" && !Wi(F) && (F = AS(F), typeof F != "string"))
      throw hn("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    jt ? (ve = Dr, J = Ur) : ya(g), (pe.uponSanitizeElement.length > 0 || pe.uponSanitizeAttribute.length > 0) && (ve = at(ve)), pe.uponSanitizeAttribute.length > 0 && (J = at(J)), t.removed = [];
    const ie = ue && typeof F != "string" && Wi(F);
    if (ie) {
      Iy(F);
      const mt = A ? A(F) : F.nodeName;
      if (typeof mt == "string") {
        const yt = Ie(mt);
        if (!ve[yt] || $r[yt])
          throw Hs(F), hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Js(F))
        throw Hs(F), hn("root node is clobbered and cannot be sanitized in-place");
      try {
        ka(F);
      } catch (yt) {
        throw Hs(F), yt;
      }
    } else if (Wi(F))
      v = ku("<!---->"), q = v.ownerDocument.importNode(F, !0), q.nodeType === Ct.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? v = q : v.appendChild(q), ka(q);
    else {
      if (!mr && !rr && !zt && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return U && cn ? oe(F) : F;
      if (v = ku(F), !v)
        return mr ? null : cn ? D : "";
    }
    v && Ki && Fr(v.firstChild);
    const _e = ie ? F : v;
    try {
      const mt = Tu(_e);
      for (; V = mt.nextNode(); )
        vu(V, _e), Su(V), Xn(V.content) && Ys(V.content);
    } catch (mt) {
      throw ie && (Hs(F), ii(t.removed, (yt) => {
        yt.element && Vi(yt.element);
      })), mt;
    }
    if (ie)
      return ii(t.removed, (mt) => {
        mt.element && Vi(mt.element);
      }), rr && ba(F), F;
    if (mr) {
      if (rr && ba(v), Gn)
        for (H = Re.call(v.ownerDocument); v.firstChild; )
          H.appendChild(v.firstChild);
      else
        H = v;
      return (J.shadowroot || J.shadowrootmode) && (H = Ft.call(n, H, !0)), H;
    }
    let Le = zt ? v.outerHTML : v.innerHTML;
    return zt && ve["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && Ye(US, v.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + Le), rr && (Le = Gs(Le)), U && cn ? oe(Le) : Le;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ya(F), jt = !0, Dr = ve, Ur = J;
  }, t.clearConfig = function() {
    Yn = null, jt = !1, Dr = null, Ur = null, U = G, D = "";
  }, t.isValidAttribute = function(F, g, v) {
    Yn || ya({});
    const q = Ie(F), V = Ie(g);
    return _u(q, V, v);
  }, t.addHook = function(F, g) {
    typeof g == "function" && Xe(pe, F) && si(pe[F], g);
  }, t.removeHook = function(F, g) {
    if (Xe(pe, F)) {
      if (g !== void 0) {
        const v = xS(pe[F], g);
        return v === -1 ? void 0 : vS(pe[F], v, 1)[0];
      }
      return Fd(pe[F]);
    }
  }, t.removeHooks = function(F) {
    Xe(pe, F) && (pe[F] = []);
  }, t.removeAllHooks = function() {
    pe = Qd();
  }, t;
}
var VS = Og();
function WS({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = Y(void 0), [n, i] = he(void 0), s = de((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = cS(p);
      if (!h)
        return !1;
      const m = w();
      return e === "protected" ? m && lS(m, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const m = w(), y = r.current;
      if (y && m && Ld(m, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const S = X(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (S) {
            const M = S.getParent(), $ = S.getPreviousSibling(), A = S.getNextSibling();
            S.remove(), $ ? Ag($) : A && C(A) ? A.select(0, 0) : M?.selectStart();
          }
        } else y.kind === "selection" ? N(m) && m.removeText() : Pe(S) && dS(S);
        return !0;
      }
      if (!m)
        return !1;
      const x = uS(m, p);
      if (x) {
        if (x.kind === "verse") {
          const S = rp();
          S.add(x.node.getKey()), xn(S);
        } else {
          const S = Uo();
          S.anchor.set(x.node.getKey(), 0, "element"), S.focus.set(x.node.getKey(), x.node.getChildrenSize(), "element"), xn(S);
        }
        return s({ key: x.node.getKey(), kind: x.kind, intent: p }), h.preventDefault(), !0;
      }
      if (N(m) && !m.isCollapsed() && Bl(m)) {
        const S = m.getNodes().filter(Te).map((A) => A.getKey()), { anchor: M, focus: $ } = m;
        return s({
          kind: "selection",
          intent: p,
          key: S[0],
          anchor: { key: M.key, offset: M.offset, type: M.type },
          focus: { key: $.key, offset: $.offset, type: $.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return !h || !La(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const m = VS.sanitize(p), y = new DOMParser().parseFromString(m, "text/html"), x = fS(wb(t, y)), S = w();
      return N(S) && S.insertNodes(x), h.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && La(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && La(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Ld(w(), p) || s(void 0);
      });
    };
    return Qe(t.registerCommand(Pr, o, Ue), t.registerCommand(_n, c, Ue), t.registerCommand(Tr, d, Ue), t.registerCommand(ub, c, Ue), t.registerCommand(Hc, u, Ue), t.registerCommand(Wc, c, Ue), t.registerUpdateListener(f));
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
const E0 = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function HS({ textDirection: e }) {
  const [t] = le();
  return GS(t, e), null;
}
function GS(e, t) {
  j(() => (Zd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Zd(e, t);
  })), [e, t]);
}
function Zd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function JS() {
  const [e] = le();
  return YS(e), null;
}
function YS(e) {
  j(() => {
    if (!e.hasNodes([xe, _t, Ne, ze, ft]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Qe(
      e.registerNodeTransform(ze, XS),
      e.registerNodeTransform(ze, (t) => QS(t, e)),
      e.registerNodeTransform(ft, ef),
      e.registerNodeTransform(_t, ef),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ft, (t) => {
        bs(Mr("va"), t), bs(Mr("vp"), t);
      })
    );
  }, [e]);
}
function XS(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || z(r) || L(n) || L(r) || be(n) || be(r) || we(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  C(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  we(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  te(e, ae) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Ke(n))
    return;
  if (Te(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  Te(r) && Cl(e);
}
function QS(e, t) {
  const r = e.getParent();
  !we(r) || !e.isAttached() || Bh(t, e.getKey()) && r.insertAfter(e);
}
function ef(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; be(t); )
    t = t.getLastChild();
  (L(t) || C(t) && be(t.getParent())) && e.insertBefore(ke(" "));
}
function Vl(e) {
  if (!z(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !ml(n)) ? void 0 : e;
}
function ZS(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (R(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function eM() {
  const e = w();
  if (!(!N(e) || !e.isCollapsed()))
    return Vl(ZS(e.anchor));
}
function tM(e) {
  const t = w();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = qg(e.target)), r ? Vl(it(r, z)) : void 0;
}
function qg(e) {
  const t = db(e)?.anchorNode;
  if (Zf(t))
    return Ns(t) ?? void 0;
}
function rM(e) {
  if (w())
    return;
  const t = qg(e);
  return t ? Vl(it(t, z)) : void 0;
}
function nM() {
  const [e] = le(), t = _g(eM);
  return j(() => {
    const r = (n) => {
      t(n) && Cn(Hr);
    };
    return Qe(e.registerCommand(cr, () => {
      const n = rM(e.getRootElement());
      return n && r(n), !1;
    }, vn), e.registerCommand(Fo, (n) => {
      const i = tM(n);
      return i && r(i), !1;
    }, vn));
  }, [e, t]), null;
}
function iM({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = N_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(P_, { trigger: e, items: i });
}
function sM({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = De(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(cM, { trigger: e, harness: i }) : _(iM, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const oM = [" ", "*"];
function aM(e, t) {
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
function cM({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = he(void 0), s = Y({ query: "", options: [] }), o = Y(0), a = de((f, p, h) => {
    const m = p.find((y) => y.kind === "note" && y.marker === f);
    if (m) {
      t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = w();
      N(y) && y.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => Qe(r.registerCommand(Pr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), fb(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = w();
          N(y) && y.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const h = s.current.query;
      if (n.hasTextSelection) {
        const m = n.items.find((y) => y.marker === h);
        return m && t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(h, n.items, !0), !0;
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
  }, Ue), r.registerCommand(np, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, ui)), [r, e, t, n, a]);
  const c = de(() => i(void 0), []), l = de((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = de((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), u = De(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    aM(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(og, { isOpen: !0, children: ({ placement: f }) => _(
    lg,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? oM : void 0 },
    n.session
  ) });
}
function Rg(e) {
  return e.replaceAll(O, "~").replace(/ {2,}/g, (r) => O.repeat(r.length));
}
function lM(e) {
  return e.replaceAll(O, " ").replaceAll("~", O);
}
let No;
function uM(e) {
  e && (No = e);
}
function $g(e) {
  return hr(e);
}
function dM(e, t) {
  return e.isEmpty() ? Jf : Ig(e.toJSON(), t);
}
function Ig(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Wo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Jf;
  if (r.some($x)) {
    No?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Lg(r), i = Vt(n, t);
  return i ? { type: _r, version: vr, content: i } : void 0;
}
function fM(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Oe({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function pM(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Oe({
    type: Et.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function hM(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Mh(r, a, c), Oe({
    type: Et.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function gM(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Mh(t, o, a), Oe({
    type: ft.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function mM(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !$g(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(O) && (t[0] = a.slice(1));
  }
  return Oe({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function yM(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Oe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function bM(e, t) {
  const { unknownAttributes: r } = e;
  return Oe({ type: fh, ...r, content: t });
}
function kM(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Oe({ type: gh, marker: r, ...n, content: t });
}
function TM(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Oe({
    type: yh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function xM(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Oe({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function ci(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Oe({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Lp({ sid: n, eid: i, ...s }, o)
  });
}
function vM(e) {
  return e.text;
}
function _M(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Oe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function CM(e) {
  const { marker: t } = e;
  return {
    type: ko,
    marker: t === "" ? void 0 : t
  };
}
function tf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function SM(e, t, r, n, i) {
  const s = Jt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = ci({
      type: s,
      marker: fi,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = ci({
      type: s,
      marker: Sn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = ci({
      type: s,
      marker: Sn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = ci({
      type: s,
      marker: fi
    });
    i.push(l);
  }
  (!n || !Bo(n)) && t.forEach((l) => {
    const d = ci({
      type: s,
      marker: fi,
      eid: l
    });
    i.push(d);
  });
}
function MM(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && Bo(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return Rs(i) && i.markerSyntax === "opening";
}
function EM(e) {
  let t = e;
  for (; Bo(t); ) t = t.children[0];
  return t;
}
function AM(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!Rs(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = EM(e[r]);
  if (Pn(n) && n.text === St(t))
    return n;
}
function Vt(e, t, r, n = !1, i) {
  const s = [];
  let o, a = [];
  return e.forEach((c, l) => {
    const d = c, u = c, f = c, p = c, h = c, m = c, y = c, x = c;
    switch (c.type) {
      case Lt.getType():
        s.push(
          fM(
            d,
            Vt(d.children, t)
          )
        );
        break;
      case dr.getType():
        s.push(pM(c));
        break;
      case Et.getType():
        s.push(
          hM(
            u,
            Vt(u.children, t)
          )
        );
        break;
      case _t.getType():
      case ft.getType():
        s.push(gM(c));
        break;
      case xe.getType():
        s.push(
          mM(
            f,
            Vt(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case Ze.getType():
        s.push(
          yM(
            p,
            Vt(p.children, t)
          )
        );
        break;
      case Fn.getType():
        s.push(
          bM(
            c,
            Vt(c.children, t)
          )
        );
        break;
      case wi.getType():
        s.push(
          kM(
            c,
            Vt(c.children, t)
          )
        );
        break;
      case Oi.getType():
        s.push(
          TM(
            c,
            Vt(c.children, t)
          )
        );
        break;
      case Ne.getType():
        s.push(
          xM(
            h,
            Vt(
              h.children,
              t,
              AM(h.children, h.caller)
            )
          )
        );
        break;
      case wr.getType():
      case Or.getType():
      case Gt.getType():
      case ip.getType():
      case lr.getType():
        break;
      case et.getType():
        if (o = Vt(
          y.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const S = y.typedIDs[Wr];
          if (S)
            SM(o, S, a, e[l + 1], s), a = S;
          else {
            const M = o.shift();
            M && (typeof M == "string" ? tf(s, M) : s.push(M)), o.length > 0 && s.push(...o);
          }
        }
        break;
      case Jt.getType():
        s.push(ci(c));
        break;
      case ze.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Ds(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== O && !m.text.startsWith(Yc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[Ps]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let S = vM(m);
          $g(t) && (MM(e, l, i, n) && S.startsWith(O) && (S = S.slice(1)), S = lM(YT(S))), tf(s, S);
        }
        break;
      case Un.getType():
        s.push(
          _M(
            x,
            Vt(x.children, t)
          )
        );
        break;
      case Rr.getType():
        s.push(CM(c));
        break;
      case qi.getType():
        No?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        No?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function Lg(e) {
  const t = e.findIndex((r) => Wo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Lg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Zs = {
  initialize: uM,
  deserializeEditorState: dM
}, PM = /^sd\d*$/, NM = /* @__PURE__ */ new Set([
  ...Object.entries(Za).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === b.Paragraph && !PM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function wM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (ch(i) || vh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!nx(i)) {
      t && wo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (pl(i) && NM.has(i.marker) && !wo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Dg(i.children, t).forEach((s) => {
      const o = OM(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = qM(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Dg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Ug(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Bo(i)) {
      const s = Dg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(rf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [rf(i, c.nodes)] });
      });
      return;
    }
    t && wo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function rf(e, t) {
  return { ...e, children: t };
}
function Ug(e) {
  return Kh(e) && e.number !== "";
}
function wo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Ug(r) || wo(r)) : !1;
}
function OM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function qM(e) {
  return {
    type: vo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Dh
  };
}
const nf = Kg([]), RM = {
  type: ip.getType(),
  version: 1
};
let Wl = [], ee, On, Fg, xt;
function $M(e, t) {
  Wl = [], DM(e), UM(t);
}
function IM(e = 0) {
}
function LM(e, t) {
  ee = t ?? Zo();
  let r;
  return e ? (e.type !== _r && xt?.warn(`This USJ type '${e.type}' didn't match the expected type '${_r}'.`), e.version !== vr && xt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${vr}'.`
  ), e.content.length > 0 ? (r = Mc(jr(e.content)), xs(ee) && (r = wM(r, xt))) : r = [nf]) : r = [nf], Fg?.(Wl), {
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
function DM(e) {
  e && (On = e), e?.addMissingComments && (Fg = e.addMissingComments);
}
function UM(e) {
  e && (xt = e);
}
function Hl() {
  return hr(ee);
}
function FM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function KM(e) {
  let { marker: t } = e;
  t !== gs && xt?.warn(`Unexpected book marker '${t}'!`), t = t ?? gs;
  const { code: r } = e;
  (!r || !Lt.isValidBookCode(r)) && xt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ee?.markerMode === "editable" || ee?.markerMode === "visible" ? n.push(
    kt("marker", Me(t) + " " + r + O)
  ) : ee?.hasGutterParaMarkers && n.push(kt("marker", Me(t) + O, !0));
  const i = FM(e.content);
  i && n.push(lt(Hl() ? Rg(i) : i));
  const s = Fe(e, MT);
  return Oe({
    type: Lt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: oh
  });
}
function zM(e) {
  let { marker: t } = e;
  t !== yo && xt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? yo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Fe(e, Dk);
  let a;
  ee?.markerMode === "visible" && (a = !0);
  const c = [
    lt($t(t, r) ?? "")
  ];
  return ee?.markerMode === "editable" && sE(i, s, c), ee?.markerMode === "editable" ? Oe({
    type: Et.getType(),
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
    version: Wp
  }) : Oe({
    type: dr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: lh
  });
}
function jM(e) {
  let { marker: t } = e;
  t !== mo && xt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? mo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (Vv(ee) ?? _t).getType(), c = ee?.markerMode === "editable" ? Rp : Fh;
  let l, d;
  ee?.markerMode === "editable" ? l = $t(t, r) : ee?.markerMode === "visible" && (d = !0);
  const u = Fe(e, qk);
  return Oe({
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
function BM(e, t = [], r = !1) {
  let { marker: n } = e;
  xe.isValidMarker(n, On?.extraValidMarkers) || xt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ee?.markerMode === "editable") {
    const [a] = t;
    Pn(a) ? a.text = O + a.text : a && t.unshift(lt(O));
  }
  t.length === 0 && t.push(lt(It)), _c(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Fe(e, Pk);
  return s || tE(n, o, i), s || Cc(e.marker ?? "", i, !1, r), Oe({
    type: xe.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: qp
  });
}
function Kg(e) {
  return {
    type: Yr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Gp
  };
}
function VM(e, t = []) {
  let { marker: r } = e;
  Ze.isValidMarker(r, On?.extraValidMarkers) || xt?.warn(`Unexpected para marker '${r}'!`), r = r ?? or;
  const n = [];
  if (Ri(ee) && (ee?.markerMode === "editable" ? n.push(
    pt(r),
    lt(O, ur, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && n.push(
    kt(
      "marker",
      Me(r) + O,
      ee?.hasGutterParaMarkers
    )
  )), n.push(...t), Hl()) {
    const s = n.find(
      (o) => !Rs(o) && !(Pn(o) && o.text === O)
    );
    Pn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => O.repeat(o.length)));
  }
  const i = Fe(e, UT);
  return Oe({
    type: Ze.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: kh
  });
}
function Gl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function WM(e, t = []) {
  const r = Fe(e, NT);
  return Oe({
    ...Gl(),
    type: Fn.getType(),
    unknownAttributes: r,
    children: t,
    version: ph
  });
}
function HM(e, t = []) {
  const r = Fe(e, qT), n = e.marker ?? ac, i = [];
  return ee?.markerMode === "editable" ? i.push(
    pt(n),
    lt(O, ur, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && i.push(
    kt(
      "marker",
      Me(n) + O,
      ee?.hasGutterParaMarkers
    )
  ), i.push(...t), Oe({
    ...Gl(),
    type: wi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: mh
  });
}
function GM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? cc;
  ee?.markerMode === "editable" ? s.push(
    pt(o),
    lt(O, ur, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && s.push(
    kt(
      "marker",
      Me(o) + O,
      ee?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Fe(
    e,
    $T
  );
  return Oe({
    ...Gl(),
    type: Oi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: bh
  });
}
function JM(e, t) {
  const r = lx(t);
  let n = () => {
  };
  return On?.noteCallerOnClick && (n = On.noteCallerOnClick), Oe({
    type: Gt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Jh
  });
}
function YM(e, t) {
  let { marker: r } = e;
  Ne.isValidMarker(r, On?.extraValidMarkers) || xt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Zc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Dl(ee?.noteMode), a = Fe(e, Yb), c = ee?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  ee?.markerMode === "editable" ? (l = pt(r, "opening", !1, c), s || (d = pt(r, "closing"))) : ee?.markerMode === "visible" && (l = kt("marker", Me(r) + " "), s || (d = kt("marker", nt(r))));
  const u = [];
  let f;
  if (l && u.push(l), ee?.markerMode === "editable" && !o)
    f = lt(St(i), void 0, c), u.push(f), iE(n, u), u.push(...t);
  else {
    const p = lt(O, ur, "token");
    f = JM(i, t), u.push(f, p, ...t.flatMap(XM(p)));
  }
  return d && u.push(d), Oe({
    type: Ne.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: _p
  });
}
function XM(e) {
  return (t) => Zp(t) ? [t] : [t, e];
}
function QM(e) {
  let { marker: t } = e;
  (!t || !Jt.isValidMarker(t, On?.extraValidMarkers)) && xt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Fe(e, Qc), s = Dp(e);
  return Oe({
    type: Jt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Tp
  });
}
function sf(e, t = []) {
  return {
    type: et.getType(),
    typedIDs: { [Wr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function ZM(e, t) {
  const { marker: r } = e, n = e.type, i = Fe(e, Gk), s = [];
  if (ee?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = ll(
      n,
      r,
      i
    );
    o && s.push(kt("marker", o)), a && s.push(kt("attribute", a)), s.push(...t), c && s.push(kt("attribute", c)), l && s.push(kt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Pn(o) && (o.mode = "token");
  }), Oe({
    type: Un.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: eh
  });
}
function eE(e) {
  return {
    type: Rr.getType(),
    marker: e,
    text: as(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ee?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: ih
  };
}
function pt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: lr.getType(),
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
    type: ze.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Ps] = { textType: t }), n;
}
function kt(e, t, r = !1) {
  const n = {
    type: Or.getType(),
    text: t,
    textType: e,
    version: Qp
  };
  return r && (n[Ps] = { [al.key]: !0 }), n;
}
function vs(e, t) {
  return {
    type: wr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Pp
  };
}
function _c(e, t, r = !1) {
  ee?.markerMode === "editable" ? t.push(pt(e, "opening", r)) : ee?.markerMode === "visible" && t.push(kt("marker", Me(e, r)));
}
function Cc(e, t, r = !1, n = !1) {
  ee?.markerMode === "editable" ? r ? t.push(pt("", "selfClosing")) : t.push(pt(e, "closing", n)) : ee?.markerMode === "visible" && t.push(
    kt(
      "marker",
      r ? nt("") : nt(e, n)
    )
  );
}
function tE(e, t, r) {
  if (ee?.markerMode !== "editable" || !t) return;
  const n = sr(t, Os(e));
  n && r.push(lt(n, "attribute"));
}
function of(e, t) {
  if (e.type !== "ms" || ee?.markerMode !== "editable" && ee?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Fe(e, Qc), o = Up(
    n,
    i,
    s,
    Dp(e)
  ), a = sr(o, qs(r ?? ""));
  if (!a) return;
  const c = O + a;
  ee?.markerMode === "editable" ? t.push(lt(c, "attribute")) : t.push(kt("attribute", c));
}
function rE(e, t) {
  const r = e.marker ?? "";
  if (ee?.markerMode === "editable") {
    const n = [];
    _c(r, n), of(e, n), Cc(r, n, !0), t.push(vs("milestone", n));
  } else
    _c(r, t), of(e, t), Cc(r, t, !0);
}
function af(e, t, r) {
  t !== void 0 && r.push(
    vs(e, [
      pt(e, "opening"),
      lt(O + t, "attribute"),
      pt(e, "closing")
    ])
  );
}
function nE(e, t) {
  ee?.markerMode === "editable" && (af("va", e.altnumber, t), af("vp", e.pubnumber, t));
}
function iE(e, t) {
  e !== void 0 && t.push(
    vs("cat", [
      pt("cat", "opening"),
      lt(O + e, "attribute"),
      pt("cat", "closing")
    ])
  );
}
function sE(e, t, r) {
  e !== void 0 && r.push(
    vs("ca", [
      pt("ca", "opening"),
      lt(O + e, "attribute"),
      pt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    vs("cp", [
      pt("cp", "opening"),
      lt(O + t, "attribute")
    ])
  );
}
function cf(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function oE(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function lf(e, t) {
  t.marker === Sn && t.sid !== void 0 && e.push(t.sid), t.marker === fi && t.eid !== void 0 && oE(e, t.eid);
}
function Sc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [sf(o, [...n])] : o, c = e[i];
  lf(n, c);
  const l = Sc(
    e.slice(i + 1, s),
    cf(t, i + 1),
    c.marker === Sn,
    n
  ), d = sf(l, [...n]), u = e[s];
  lf(n, u);
  const f = Sc(
    e.slice(s + 1),
    cf(t, s + 1),
    u.marker === Sn,
    n
  );
  return [...a, d, ...f];
}
function jr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(lt(Hl() ? Rg(i) : i));
    else if (!i.type)
      xt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Lt.getType():
          n.push(KM(i));
          break;
        case Et.getType():
          n.push(zM(i));
          break;
        case ft.getType():
          ee?.hasSpacing || n.push(RM), n.push(jM(i)), nE(i, n);
          break;
        case xe.getType():
          n.push(
            BM(i, jr(i.content, !0), t)
          );
          break;
        case Ze.getType():
          n.push(VM(i, jr(i.content)));
          break;
        case Ne.getType():
          n.push(YM(i, jr(i.content)));
          break;
        case Jt.getType():
          xp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Wl?.push(i.sid)), n.push(QM(i)), rE(i, n);
          break;
        case Rr.getType():
          n.push(eE(i.marker ?? ""));
          break;
        case fh:
          n.push(WM(i, jr(i.content)));
          break;
        case gh:
          n.push(HM(i, jr(i.content)));
          break;
        case yh:
          n.push(GM(i, jr(i.content)));
          break;
        default:
          xt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(ZM(i, jr(i.content)));
      }
  }), Sc(n, r);
}
function Mc(e) {
  const t = e.findIndex(
    (n) => ch(n) || vh(n) || pl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    OT(n)
  );
  if (t >= 0) {
    const n = Mc(e.slice(0, t)), i = e[t], s = Mc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Kh(n)))
    return [Kg(e)];
  return e;
}
const en = {
  initialize: $M,
  reset: IM,
  serializeEditorState: LM
};
function zg(e) {
  if (e && !P(e)) {
    if (C(e)) return e;
    if (R(e))
      for (const t of e.getChildren()) {
        const r = zg(t);
        if (r) return r;
      }
  }
}
function aE() {
  const e = w();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((C(t) && !P(t) ? En(t) : void 0) && C(t)) {
      const i = ke(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      yi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = zg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(O) ? O : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return C(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of jg(e)) {
    if (!En(t)) continue;
    yi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(O) && r.setTextContent(n.slice(O.length));
  }
  return !0;
}
function jg(e) {
  const [t, r] = Xf(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!C(a) || P(a) || te(a, ae) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function cE() {
  const e = w();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return En(t) ? Pe(hl(t)) : !1;
}
function Bg() {
  let e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !vl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (L(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = w(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!C(t) || P(t) || !En(t)) return !1;
  const r = hl(t);
  if (!Pe(r)) return !1;
  const n = ke(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  yi(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return L(a) ? gl(a) : o.select(0, 0), !0;
}
const Vg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${_h(Ee().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = bl(e), r = Ml(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = dx(0, o);
        const a = Gx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Nh(c) && kl(parseInt(n, 10), c);
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
function Ec(e, t) {
  return Ne.isValidMarker(e, t) || !!Vg[e] || Ze.isValidMarker(e, t) || xe.isValidMarker(e, t);
}
function lE(e, t) {
  return xe.isNoteContentMarker(e) ? !1 : xe.isValidMarker(e, t);
}
function Wg(e, t, r, n, i, s) {
  const o = ng(
    e,
    void 0,
    void 0,
    t,
    n ?? Zo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function Ac(e, t, r, n, i, s, o) {
  if (Ne.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = Wg(
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
  const a = gE(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = w();
      N(d) && (Lh(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = od(u, en, r), h = va(p);
      if (N(d)) {
        const m = d.anchor.getNode(), y = m.getParent(), x = En(m), S = d.anchor.key === d.focus.key;
        if (L(h) && x && S && !ja(h, o))
          fE(
            d,
            h,
            m,
            r?.markerMode === "editable"
          );
        else if (L(h) && !S && !ja(h, o) && pE(d))
          hE(d, h, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          mE(
            d,
            () => va(p)
          );
        else if (R(h) && !h.isInline()) {
          const M = d.insertParagraph();
          if (M) {
            const $ = M.getChildren();
            h.append(...$), M.replace(h), Pe(h) && Ii(h) || h.selectStart();
          }
        } else if (L(h) && C(m) && !P(m) && L(m.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        ja(h, o)) {
          const M = m.getParent();
          if (L(M)) {
            const $ = d.anchor.offset;
            if ($ === 0) m.insertBefore(h);
            else if ($ >= m.getTextContentSize()) m.insertAfter(h);
            else {
              const [k] = m.splitText($);
              k.insertAfter(h);
            }
            h.getChildren().forEach((k) => {
              P(k) && k.setNested(!0);
            });
            const A = h.getChildren().find((k) => C(k) && !P(k));
            A && C(A) ? A.select(
              A.getTextContentSize(),
              A.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (C(m) && !P(m) && d.isCollapsed() && (z(y) || L(y) && z(y.getParent()))) {
          const M = L(y) ? y : void 0, $ = M ? uE(m, d.anchor.offset) : [];
          let k = (M ?? m).insertAfter(h);
          if (fr(h)) {
            const U = {
              ...r || Zo(),
              markerMode: "hidden"
            }, D = od(
              u,
              en,
              U
            ), G = va(D);
            k = k.insertAfter(G);
          }
          if ($.length > 0 && M) {
            const U = Oo(M).append(...$);
            k.insertAfter(U), M.isEmpty() && M.remove();
          } else C(k.getNextSibling()) || k.insertAfter(ke(O));
          R(k) && k.selectEnd();
        } else if (d.insertNodes([h]), ME(h), f) {
          const M = rp();
          M.add(h.getKey()), xn(M);
        } else if (L(h)) {
          const M = h.getChildren().find(($) => C($) && !P($));
          M && C(M) ? M.select(
            M.getTextContentSize(),
            M.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const M = h.getNextSibling();
          M ? M.selectStart() : h.selectStart();
        }
      } else
        d?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function uE(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function ja(e, t) {
  return ((t ?? _o).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function dE(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(ct(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function fE(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && L(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !C(r)) {
    const o = e.anchor.offset;
    if (C(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else C(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = _i(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (yi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), C(i) && !i.getTextContent().startsWith(O) && i.setTextContent(O + i.getTextContent());
    const o = t.getChildren().find((a) => C(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => C(o) && !P(o));
  C(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function pE(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || L(n)) continue;
    if (!C(n) || n.getType() !== ze.getType() || te(n, ae) === "attribute") return !1;
    const i = hl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    En(n) && (r = !0);
  }
  return r;
}
function hE(e, t, r) {
  const n = jg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!En(a)) return;
    yi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(O) && c.setTextContent(l.slice(O.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(O) || i.setTextContent(O + i.getTextContent());
  const s = t.getChildren().find((a) => C(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function gE(e, t) {
  let r = Vg[e];
  return r || (Ze.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Ze.getType(), marker: e, content: [] }] })
  } : xe.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: xe.getType(), marker: e };
      return (xe.isValidFootnoteMarker(e) || xe.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function mE(e, t) {
  const r = e.getNodes(), [n, i] = _i(e);
  let s;
  r.forEach((o, a) => {
    if (R(s) && s.isParentOf(o))
      return;
    const c = Hg(
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
    s || (s = t(), c.insertBefore(s), l = !0, L(s) && s.getChildren().some((u) => P(u) && u.getMarkerSyntax() === "opening") && dE(s, L(s.getParent()))), bE(c, s, l);
  }), (C(s) || R(s)) && s.selectEnd();
}
function _i(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Jl(e) {
  return be(e) || z(e) || z(e.getParent());
}
function Hg(e, t, r, n, i) {
  if (!Jl(e)) {
    if (C(e))
      return yE(e, t, r, n, i);
    if (R(e) && e.isInline())
      return e;
  }
}
function yE(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function bE(e, t, r) {
  if (C(t)) {
    const n = Pc(e, t);
    t.setTextContent(n), e.remove();
  } else if (R(t)) {
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
    Pc(e, t), r && L(t) && t.getChildren().some((s) => P(s)) && C(e) && !P(e) && !e.getTextContent().startsWith(O) && e.setTextContent(O + e.getTextContent());
  }
}
function Pc(e, t) {
  let r = e.getTextContent();
  if (C(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Cl(n), C(n) || t.insertBefore(ke(" "));
  }
  return r;
}
function Gg(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = qn(d, t);
    if (!f) return !1;
    const p = C(d) ? d.getTextContentSize() : 0;
    if (uf(f, r), C(d) && d.isAttached()) {
      const h = d.getTextContentSize(), m = Math.max(p - h, 0), y = Math.max(0, Math.min(u - m, h)), x = w();
      N(x) && x.setTextNodeRange(d, y, d, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = _i(e);
  if (!Xl(n, t, s, o)) return !1;
  const a = Yl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = qn(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = Qg(u, a);
    f && (uf(f, r), l = !0);
  }), Zg(a, i), l;
}
function uf(e, t) {
  e.getChildren().forEach((n) => {
    Ut(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === It) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    C(n) && i.startsWith(O) && n.setTextContent(i.slice(O.length));
  }), Ya(e);
}
function Yl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Hg(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    C(o) && n.push(o);
  }), n;
}
function qn(e, t) {
  let r = e, n;
  for (; r && !Pe(r); ) {
    if (z(r)) return;
    !n && L(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Jg(e) {
  const t = it(
    e,
    (r) => z(r) || Pe(r)
  );
  return z(t);
}
function Yg(e) {
  return e.filter(
    (t) => !Jl(t) && (C(t) || R(t) && t.isInline())
  );
}
function kE(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!C(i) || Jl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function TE(e, t, r) {
  return e.getChildren().some(
    (n) => R(n) && t.some((i) => n.isParentOf(i)) && !Xg(n, r)
  );
}
function Xl(e, t, r, n, i) {
  const s = Yg(e), o = kE(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = qn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !TE(l, s, o);
  });
}
function Xg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Ut(r));
}
function Qg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (R(d) && t.some((u) => d.isParentOf(u))) {
      if (!Xg(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Ut(n[s - 1]) && (s -= 1), o < n.length - 1 && Ut(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Oo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Oo(e).append(...c)), e;
}
function Oo(e) {
  return pb(e);
}
function Zg(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function xE(e, t, r) {
  if (e.isCollapsed()) {
    const l = qn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Gu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = _i(e);
  if (!Xl(n, r, i, s, t)) return !1;
  const o = Yl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = qn(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = Qg(d, o);
    u && (Gu(u, t), c = !0);
  }), c;
}
function vE(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = _i(e);
  if (!!!i?.some(
    (y) => Xl(s, y, o, a)
  ) && !_E(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const x = w();
    N(x) && Gg(x, y, n) && (l = !0);
  });
  const d = w();
  if (!N(d)) return l;
  const u = d.isBackward(), [f, p] = _i(d), h = Yl(
    d.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const m = h.filter(
    (y) => !Jg(y) && !qn(y, t)
  );
  return m.length > 0 && (CE(m).forEach((y) => SE(y, t)), l = !0), Zg(h, u), l;
}
function _E(e, t) {
  return Yg(e).some(
    (r) => !Jg(r) && !qn(r, t)
  );
}
function CE(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function SE(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => L(a) && a.getMarker() === t
  ), s = i ? Oo(i) : Cr(t);
  e[0].insertBefore(s), s.append(...e), i === r || Pc(e[0], s);
}
function ME(e) {
  Te(e) && (Cl(e.getPreviousSibling()), jh(e.getNextSibling()));
}
const em = {
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
}, df = "psc-active-text", eo = "psc-empty-text";
function EE({ viewOptions: e }) {
  const [t] = le(), r = Y(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(df), r.current = o, o && t.getElementByKey(o)?.classList.add(df);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Fo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${eo}`);
          if (!c) return !1;
          const l = Ns(c);
          if (!Te(l)) return !1;
          const d = l.getParent();
          if (!R(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        Rt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = Ba(), f = AE(), p = [], h = [];
          return Ee().getChildren().forEach((m) => {
            if (!R(m)) return;
            const { emptyKeys: y, nonEmptyKeys: x } = NE(m);
            p.push(...y), h.push(...x);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(eo) : t.getElementByKey(u)?.classList.add(eo);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(eo));
      }),
      t.registerCommand(
        Gc,
        () => (i(void 0), !1),
        Rt
      ),
      t.registerCommand(
        hb,
        () => {
          const o = t.getEditorState().read(Ba);
          return o !== r.current && i(o), !1;
        },
        Rt
      )
    ];
    return i(t.getEditorState().read(Ba)), Qe(...s);
  }, [t, n]), null;
}
function Ba() {
  return PE(w() ?? void 0)?.getKey();
}
function AE() {
  const e = w();
  if (!N(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!R(n)) return;
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
    Te(s[a]) && (o = s[a].getKey());
  return o;
}
function PE(e) {
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function NE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Te(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Te(c)) break;
      if (!(vt(c) || P(c)) && c.getTextContent().replaceAll(uo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const wE = /^\+/;
function Ql(e, t) {
  const r = t.replace(wE, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function tm(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function rm(e, t) {
  return tm(e, t) !== void 0;
}
function Nc(e, t) {
  const r = tm(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function qo(e, t, r) {
  const n = R(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function OE(e, t, r, n, i) {
  const s = Ql(n, t);
  if (!s) {
    qo(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && qo(e, "invalid", i);
}
function us(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (L(s)) {
      const o = s.getMarker();
      i || OE(s, o, t, r, n), us(s, t, r, n, i || o === "xq");
    } else if (Te(s)) {
      if (i) continue;
      const o = Ql(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else z(s) ? us(s, s.getMarker(), r, n, i) : we(s) || R(s) && us(s, t, r, n, i);
}
function qE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Ql(e, a);
    if (!c) {
      qo(o, "unknown", r), Nc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Nc(n, l) || qo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ee().getChildren())
    we(o) || (ht(o) || We(o) ? i(o, o.getMarker()) : se(o) ? (i(o, o.getMarker()), s(o) && us(o, o.getMarker(), e, r, !1)) : R(o) && s(o) && us(o, "p", e, r, !1));
  return r;
}
function RE(e) {
  return !!e?.includes("(basic)");
}
function $E(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function nm(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Ec(e, t);
}
function Zl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function im(e, t) {
  const r = [];
  for (const n of t) {
    const i = Zl(e, n);
    i && Nc(r, i);
  }
  return r;
}
function oo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: $E(e.description),
    isBasic: RE(e.description)
  };
}
function IE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function wc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : IE(e.marker, t.marker);
}
function Oc(e, t, r) {
  if (t.noteMarker) return [];
  const n = im(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && nm(i.marker, r)
  ).filter((i) => {
    const s = Zl(e, i.marker);
    return s !== void 0 && rm(n, s);
  }).map((i) => oo(i, "paragraph")).sort(wc);
}
function LE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => nm(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => oo(c, "character")).sort(wc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => oo(c, "character")),
    ...a.map((c) => oo(c, "note"))
  ].sort(wc);
}
function DE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function UE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function FE(e, t, r) {
  return [
    ...DE(e, t.openCharMarkers),
    ...LE(e, t, r)
  ].sort(UE);
}
function KE(e, t, r) {
  if (t.source === "paragraph") return Oc(e, t, r);
  const n = FE(e, t, r);
  return n.length > 0 ? n : Oc(e, t, r);
}
function zE(e, t, r) {
  const n = Oc(e, t, r), i = im(e, t.previousParaMarkers), s = Zl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && rm(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const jn = String.raw`\w-`, sm = "a-z0-9", jE = `[a-z][${sm}]*`, BE = new RegExp(
  String.raw`^\\(\+?[${jn}]+)[ \u00A0]$`
), om = new RegExp(String.raw`^\\(\+?[${jn}]+)$`), VE = new RegExp(String.raw`^\\\+?[${jn}]*\*$`), WE = new RegExp(
  String.raw`^\\(\+?[${jn}]+)(?:[ \u00A0]|$)`
), HE = new RegExp(
  String.raw`^\\(\+?)([${jn}]+)`
), GE = new RegExp(
  String.raw`\\\+?[${jn}]+(?:\\?\*|[ \u00A0])`
), JE = new RegExp(
  String.raw`\\\+?[${jn}]*$`
), YE = new RegExp(
  String.raw`^\\(${jE})( |$)`
), XE = new RegExp(
  String.raw`\\[${sm}+*]*$`,
  "i"
), rt = "￼";
function am(e) {
  return e.length > 1 && e.startsWith(O) && e.charAt(1) !== rt ? e.slice(1) : e;
}
function ff(e) {
  return Rs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function cm(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = en.serializeEditorState(
    {
      type: _r,
      version: vr,
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
  for (; ff(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== St(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && ff(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function to(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Zi(e, t) {
  JE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += rt;
}
function qt(e) {
  return e.replaceAll(O, " ");
}
function QE(e, t, r = !1) {
  if (hr(t)) return qt(e);
  if (e === O) return " ";
  const n = r && e.startsWith(O), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(O, "~");
}
function ds(e) {
  const t = e.getTextContent();
  return Kn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function ra(e, t) {
  const r = e[t];
  if (!$e(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Vo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function lm(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function na(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = ps(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function eu(e) {
  return !!e.getUnknownAttributes();
}
function ia(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && zo(e);
}
function um(e, t) {
  return $e(e) ? !ia(e.getMarker(), t) : z(e) || we(e) ? !0 : Ae(e) ? eu(e) : L(e) ? dm(e, t) : !1;
}
function dm(e, t) {
  if ($k(e)) return !0;
  const r = e.getMarker();
  return !ck(r) && t(r) === void 0;
}
const wt = "", Ot = "";
function pf(e) {
  return e.flatMap((t) => Ke(t) ? t.getChildren() : [t]);
}
function li(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if ($e(s)) {
      const o = ra(e, i);
      ia(s.getMarker(), r) && lm(o) ? (t.push(
        wt,
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
      ), li(pf(o), t, r), t.push(Ot)) : t.push(rt), i += o.length;
    } else if (Ae(s)) {
      const o = na(e, i);
      eu(s) ? t.push(rt) : (t.push(
        wt,
        "verse",
        qt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), li(pf(o), t, r), t.push(Ot)), i += o.length;
    } else P(s) ? t.push(wt, "marker", qt(s.getTextContent()), Ot) : nn(s) ? t.push(wt, "unmatched", qt(s.getTextContent()), Ot) : um(s, r) ? t.push(rt) : Do(s) ? t.push(" ") : C(s) ? t.push(
      qt(
        n ? am(ds(s)) : ds(s)
      )
    ) : L(s) ? (t.push(wt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), li(s.getChildren(), t, r, !0), t.push(Ot)) : be(s) ? li(s.getChildren(), t, r, n) : R(s) ? (t.push(wt, s.getType()), li(s.getChildren(), t, r), t.push(Ot)) : t.push(rt);
  }
}
function Li(e, t) {
  const r = [];
  return li(e, r, t), r.join("");
}
function Ar(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Ci(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function tu(e) {
  return e.type ?? "";
}
function fm(e, t, r) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Me(e, r);
}
function Va(e, t) {
  const r = e[t];
  if (!(!r || tu(r) !== "attribute-run"))
    return Ar(r) ?? [];
}
function Di(e, t) {
  const r = [];
  return ss(e, r, t), r.join("");
}
function ss(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = tu(s);
    if (o === "ms") {
      const l = s, d = Va(e, i + 1);
      d && ia(l.marker ?? "", r) ? (t.push(
        wt,
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
      ), ss(d, t, r), t.push(Ot), i += 1) : t.push(rt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(rt);
        continue;
      }
      t.push(
        wt,
        "verse",
        qt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = Va(e, i + 1 + d);
      for (; u; )
        ss(u, t, r), d++, u = Va(e, i + 1 + d);
      t.push(Ot), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        wt,
        "marker",
        qt(
          fm(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Ot
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(wt, "char", JSON.stringify(l.unknownAttributes ?? null)), ss(Ar(s) ?? [], t, r, !0), t.push(Ot);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(rt);
      continue;
    }
    if (o === "unmatched") {
      t.push(wt, "unmatched", qt(Ci(s) ?? "")), t.push(Ot);
      continue;
    }
    const a = Ci(s);
    if (a !== void 0) {
      t.push(qt(n ? am(a) : a));
      continue;
    }
    const c = Ar(s);
    c ? (t.push(wt, o), ss(c, t, r), t.push(Ot)) : t.push(rt);
  }
}
function sa(e) {
  let t = 0;
  for (const r of e) {
    const n = Ar(r);
    if (n) {
      t += sa(n);
      continue;
    }
    const i = Ci(r);
    if (i !== void 0)
      for (const s of i) s === rt && t++;
  }
  return t;
}
function _s(e, t, r, n, i) {
  Rn(e.getChildren(), t, r, n, i);
}
function Rn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      to(t, a, qt(a.getTextContent()));
    else if ($e(a)) {
      s();
      const c = ra(e, o);
      ia(a.getMarker(), r) && lm(c) ? Rn(c, t, r, n) : Zi(t, [a, ...c]), o += c.length;
    } else if (z(a) || we(a))
      s(), Zi(t, [a]);
    else if (Ae(a)) {
      s();
      const c = na(e, o);
      eu(a) ? Zi(t, [a, ...c]) : (to(t, a, qt(ds(a))), Rn(c, t, r, n)), o += c.length;
    } else if (L(a))
      s(), dm(a, r) ? Zi(t, [a]) : _s(a, t, r, n, { pending: !0 });
    else if (Do(a))
      s(), to(t, a, " ");
    else if (C(a)) {
      const c = Kn(a) || te(a, ae) === "attribute", l = s() && !c;
      to(
        t,
        a,
        c ? qt(ds(a)) : QE(ds(a), n, l)
      );
    } else R(a) ? _s(a, t, r, n, i) : (s(), Zi(t, [a]));
  }
}
function pm(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (we(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return _s(e, i, t, r), i;
}
function ru(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!se(i)) return;
    const s = pm(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function hm(e, t) {
  let r = 0;
  const n = (i) => {
    if (C(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(rt);
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
    } else R(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function qc(e, t = []) {
  for (const r of e)
    Ae(r) ? t.push(r) : R(r) && qc(r.getChildren(), t);
  return t;
}
function gm(e) {
  let t = 0;
  const r = (n) => {
    if (C(n))
      for (const i of n.getTextContent()) i === rt && t++;
    else R(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Bn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === rt && t++;
    else r.content && (t += Bn(r.content));
  return t;
}
function mm(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), R(i) && _s(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const $n = /\s/;
function ym(e) {
  return e.filter(oa).length;
}
function oa(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return C(t) && !P(t) && te(t, ae) === "attribute";
}
function ZE(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return P(t) || oa(e);
}
function hf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && oa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      $n.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function In(e, t, r) {
  const n = hf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !ZE(i) ? hf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: ym(e.spans) };
}
function Wa(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function e1(e) {
  const t = X(e.key);
  if (!P(t)) return;
  const r = t.getParent();
  if (!L(r)) return;
  const n = r.getParent();
  if (n)
    return {
      key: n.getKey(),
      offset: r.getIndexWithinParent() + 1,
      type: "element"
    };
}
function t1(e) {
  const t = X(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Ae(t) ? na(n, i) : $e(t) ? ra(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function Si(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e, s = ym(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const p of i) {
    const h = p.end - p.start, m = !p.isSentinel && (r || !Wa(p));
    if (!(o && oa(p))) {
      if (d) {
        if (!m) continue;
        a = { key: p.key, offset: 0 };
        break;
      }
      for (let y = 0; y < h; y++) {
        const x = n[p.start + y];
        if (c === 0 && (l === 0 || !$n.test(x))) {
          if (m) {
            a = { key: p.key, offset: y };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? $n.test(x) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (m && !r) {
          a = { key: p.key, offset: h };
          break;
        }
        d = !0;
      }
    }
  }
  if (a) return { ...a, type: "text" };
  const u = i[i.length - 1];
  if (u && Wa(u)) {
    const p = e1(u);
    if (p) return p;
  }
  if (u?.isSentinel) {
    const p = t1(u);
    if (p) return p;
  }
  const f = [...i].reverse().find((p) => !p.isSentinel && !Wa(p));
  if (f) return { key: f.key, offset: f.end - f.start, type: "text" };
}
function bm(e, t = []) {
  for (const r of e)
    be(r) && t.push(r), R(r) && bm(r.getChildren(), t);
  return t;
}
function km(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), R(e) && e.getChildren().forEach((r) => km(r, t)), t;
}
function r1(e, t) {
  const r = In(e, t.key, 0);
  if (r)
    return t.isSentinel ? { kind: "preserved", anchor: r, key: t.key } : { kind: "byte", anchor: r };
}
function Tm(e, t) {
  const r = [];
  for (const n of bm(e)) {
    const i = km(n), s = t.spans.filter((m) => i.has(m.key)), o = s.find((m) => m.isSentinel || !P(X(m.key))) ?? s[0], a = s[s.length - 1];
    if (!o || !a) continue;
    const c = r1(t, o), l = In(t, a.key, a.end - a.start);
    if (!c || !l) continue;
    const d = n.getTypedOnClicks(), u = n.getTypedOnRemoves(), f = n.getTypedOnMouseEnters(), p = n.getTypedOnMouseLeaves(), h = Object.entries(n.getTypedIDs()).flatMap(
      ([m, y]) => y.map((x) => ({
        type: m,
        id: x,
        onClick: d[m]?.[x],
        onRemove: u[m]?.[x],
        onMouseEnter: f[m]?.[x],
        onMouseLeave: p[m]?.[x]
      }))
    );
    h.length > 0 && r.push({ annotations: h, start: c, end: l });
  }
  return r;
}
function n1(e, t, r) {
  const n = xm(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!be(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function i1(e, t) {
  const r = xm(e);
  if (!r) return;
  const n = mi();
  n.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), r[0].insertBefore(n), n.append(...r);
}
function xm(e) {
  const t = X(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = Ae(t) ? na(r, n) : $e(t) ? ra(r, n) : [];
  return [t, ...i];
}
function gf(e) {
  return e.type === "text" && P(X(e.key));
}
function vm(e, t) {
  if (e.length === 0) return;
  const r = w()?.clone() ?? null;
  for (const n of e)
    for (const i of n.annotations) {
      const s = t(), o = Si(s, n.start.anchor, {
        addressDisplayBytes: !0
      }), a = Si(s, n.end);
      if (!o || !a || gf(o) || gf(a)) continue;
      if (o.key === a.key && o.offset === a.offset && o.type === a.type) {
        n.start.kind === "preserved" && i1(n.start.key, i);
        continue;
      }
      const c = Uo();
      c.anchor.set(o.key, o.offset, o.type), c.focus.set(a.key, a.offset, a.type), tl(
        c,
        i.type,
        i.id,
        i.onClick,
        i.onRemove,
        i.onMouseEnter,
        i.onMouseLeave
      ), n.start.kind === "preserved" && n1(n.start.key, i.type, i.id);
    }
  xn(r);
}
function _m(e, t, r) {
  const n = Si(e, t);
  if (n?.type === "text") {
    const i = X(n.key);
    if (i && C(i)) {
      i.select(n.offset, n.offset);
      return;
    }
  } else if (n) {
    const i = X(n.key), s = R(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find(R)?.selectStart();
}
function Cm(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(R)?.selectStart();
      return;
    }
    _m(mm(e, n, i), t, e);
  }
}
function s1(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(R)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Rn(e, s, n, i), _m({ text: s.text, spans: s.spans }, t, e);
}
function Sm(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = ru(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = w();
  if (N(c)) {
    for (let y = c.anchor.getNode(); y; y = y.getParent())
      if (e.some((x) => x.is(y))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = In(s, c.anchor.key, c.anchor.offset));
  }
  const l = Tm(e, s), d = Nr(s.text, {
    getMarker: n
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Bn(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = en.serializeEditorState(
    { type: _r, version: vr, content: d },
    r
  );
  if (Di(u.root.children, n) === Li(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = u.root.children.map((y) => Es(y));
  if (gm(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = qc(e).map((y) => ({
    number: y.getNumber(),
    sid: y.getSid()
  })), h = e[0];
  f.forEach((y) => h.insertBefore(y)), hm(f, s.sentinels), e.forEach((y) => y.remove());
  const m = qc(f);
  for (let y = 0; y < p.length && y < m.length; y++)
    m[y].getNumber() === p[y].number && m[y].setSid(p[y].sid);
  return vm(l, () => mm(f, n, r)), Cm(f, o, a, n, r), !0;
}
function Cs(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Ne.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!P(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(pr(s) || C(s) && s.getTextContent() === St(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const d = n[a - 1];
    if (!P(d) || d.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Rn(c, l, t, r), { out: l, contentNodes: c };
}
function Mm(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(rt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function o1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Cs(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = w();
  if (N(d)) {
    for (let k = d.anchor.getNode(); k; k = k.getParent())
      if (e.is(k)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = In(o, d.anchor.key, d.anchor.offset));
  }
  const u = Tm(a, o), f = Nr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (f.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Bn(f) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], m = Mm(h), y = cm(e, h, m, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (sa(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const x = e.getCategory() !== m;
  if (x && e.setCategory(m), Di(y.children, n) === Li(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), x;
  const S = y.children.map((k) => Es(k));
  if (gm(S) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), x;
  const M = a[0];
  if (M)
    S.forEach((k) => M.insertBefore(k));
  else {
    const k = e.getChildren().find((U) => P(U) && U.getMarkerSyntax() === "closing");
    S.forEach((U) => k ? k.insertBefore(U) : e.append(U));
  }
  hm(S, o.sentinels);
  const $ = new Set(o.sentinels.flat().map((k) => k.getKey()));
  a.forEach((k) => {
    $.has(k.getKey()) || (be(k) && (k.getWritable().__suppressOnRemoveCallbacks = !0), k.remove());
  });
  const A = () => Cs(e, n, r);
  return vm(
    u,
    () => A()?.out ?? { text: "", spans: [], sentinels: [] }
  ), s1(
    A()?.contentNodes ?? S,
    c,
    l,
    n,
    r
  ), !0;
}
const Em = /* @__PURE__ */ new Set(["ca", "cp"]), nu = "cp";
function Am(e) {
  if (!Yt(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (_s(e, t, ar, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Nr(r, { getMarker: ar }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === nu)
  );
}
function Ui(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (L(r) && Em.has(r.getMarker()) || Am(r)) {
      t.push(r);
      continue;
    }
    se(r) && r.getMarker() === nu && t.push(r);
    break;
  }
  return t;
}
function a1(e) {
  const t = (n) => L(n) && Em.has(n.getMarker()) || Am(n);
  if (t(e) || se(e) && e.getMarker() === nu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ce(n)) return n;
      if (!t(n)) return;
    }
}
function iu(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ui(e);
  if (n.some((s) => se(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Rn(e.getChildren(), i, t, r), Rn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function c1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ui(e)], o = iu(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (N(l)) {
    for (let h = l.anchor.getNode(); h; h = h.getParent())
      if (s.some((m) => m.is(h))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = In(o, l.anchor.key, l.anchor.offset));
  }
  const d = Nr(o.text, { getMarker: n }), [u] = d;
  if (d.length === 0 || typeof u != "object" || u.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Bn(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (u.sid = e.getSid());
  const f = en.serializeEditorState(
    { type: _r, version: vr, content: d },
    r
  );
  if (Di(f.root.children, n) === Li(s, n)) {
    let h = !1;
    return e.getNumber() !== (u.number ?? "") && (e.setNumber(u.number ?? ""), h = !0), e.getAltnumber() !== u.altnumber && (e.setAltnumber(u.altnumber), h = !0), e.getPubnumber() !== u.pubnumber && (e.setPubnumber(u.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => Es(h));
  return Ce(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), Cm(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Ss(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (we(n)) return;
    !t && (z(n) || se(n) || Ce(n)) && (t = n), Yf(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? a1(r) : void 0) ?? t;
}
function Wt(e, t) {
  const r = Ss(e);
  return r ? z(r) ? o1(r, t) : Ce(r) ? c1(r, t) : Sm([r], t) : !1;
}
const l1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function mf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !l1.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function ao(e, t) {
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
          t.push(`\\${n}`), mf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), ao(r.content, t), mf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), ao(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), ao(r.content, t);
      }
    }
}
function yf(e, t, r) {
  const n = Ss(e);
  if (!se(n)) return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = pm(n, t, r);
  if (!o) return !1;
  const a = Nr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    $n.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  ao(a, l);
  for (const d of l.join("").replaceAll(O, "~")) {
    if ($n.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function u1(e) {
  return [ct(e), Jo()];
}
function su(e) {
  Xt(e, 2);
}
function d1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function ou(e) {
  const t = d1(e);
  e.splice(0, 0, u1(e.getMarker())), t && su(e);
}
function Ro(e, t) {
  e.setMarker(t), ou(e), su(e);
}
function f1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Kn(n)) {
    if (C(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(O), bt(n, ae, ur), n.setMode("token");
      return;
    }
    if (Oh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Jo());
  }
}
function bf(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : R(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function fs(e) {
  for (let t = e; t; t = t.getParent())
    if (se(t)) return t;
}
function p1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = fs(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = fs(r.getNode())?.is(s) ?? !1, a = fs(n.getNode())?.is(s) ?? !1;
    return !(o && !bf(r, s, "start") || a && !bf(n, s, "end"));
  });
}
function Rc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of p1(r)) t.add(n.getKey());
}
function h1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!N(r) || !r.isCollapsed()) return;
  const n = fs(r.focus.getNode());
  n && t.add(n.getKey());
}
function g1(e) {
  const t = w();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (Rc(e), t.removeText());
}
function m1(e, t) {
  if (!Ri(t.viewOptions)) return;
  if (Ut(e.getFirstChild())) {
    f1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    ou(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => se(o) && !o.is(e))) {
      Ro(e, or), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (se(r)) {
    const n = e.getChildren().filter((a) => !Kn(a)), i = w();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : fs(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || R(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Xt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Ro(e, or);
}
function y1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = sr(t, Os(e.getMarker()));
  return r === "" ? void 0 : r;
}
function b1(e) {
  const t = e.getChildren().filter((s) => !P(s) && te(s, ae) !== "attribute"), r = t[0];
  r && C(r) && r.getTextContent().startsWith(O) && r.setTextContent(r.getTextContent().slice(1));
  const n = y1(e);
  n && t.push(ke(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function k1(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => C(c) && !P(c) && c.getTextContent() === St(s)
    ), a = Ai(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (C(c) && c.getTextContent() === St(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function T1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    b1(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Wt(e, t);
}
function Pm(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Ri(r)) {
    Ro(e, t);
    return;
  }
  ug(e, t);
}
function Nm() {
  const e = w();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = wm(e);
    return t !== "removed" ? t : ($c(), "handled");
  }
  return $c() ? "handled" : "declined";
}
function x1(e, t) {
  if (!t) return e;
  const r = YE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function kf(e, t) {
  const r = w();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Om())
      return "declined";
  } else {
    const s = wm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => x1(s, t)
  );
  Tf(n ?? "");
  for (const s of i)
    $c(), Tf(s);
  return "handled";
}
function v1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Ns(n);
  if (!i) return !1;
  const s = Qt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !C(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function wm(e) {
  const t = Qt(e.anchor.getNode()), r = Qt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), _1() ? "removed" : "needs-plain-split");
}
function Tf(e) {
  if (e === "") return;
  const t = w();
  N(t) && t.insertText(e);
}
function _1() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Qt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function Om() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Qt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function $c() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Om();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Cr("fp", { closed: "false" });
  i.append(ct("fp"));
  const s = C(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    yi(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [d] = l;
    d && (fx(d), i.append(d));
  }
  return i.getChildren().every(P) && i.append(ke(It)), qm(i), !0;
}
function qm(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (C(t)) {
    const r = t.getTextContent().startsWith(O) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (R(t)) {
    qm(t);
    return;
  }
  e.selectEnd();
}
function C1(e) {
  const t = [];
  let r = e;
  for (; r; )
    L(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function S1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ee().getChildren()) {
    if (t && n.is(t)) break;
    (ht(n) || We(n) || se(n)) && r.push(n.getMarker());
  }
  return r;
}
function M1(e) {
  let t = e;
  for (; R(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function E1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ut(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Kn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(M1(i)) && r === 0 : !1;
}
function A1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ut(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Kn(i) && t.is(i) && r === 0;
}
function P1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function N1() {
  const e = w();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = it(t, se), s = !n && (!i || A1(i, t, r)) ? "paragraph" : "character", o = Qt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: S1(t),
    openCharMarkers: C1(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: vl(t, r),
    anchorRect: P1()
  };
}
function w1() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!C(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = XE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function O1(e, t, r) {
  Pm(e, t, r), su(e);
}
function q1(e, t, r) {
  const n = w();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = it(i, se);
  if (t === "backslash" && s && E1(s, i, n.focus.offset)) {
    O1(s, e, r);
    return;
  }
  $m(e, r);
}
function R1(e, t) {
  const r = w();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Rm(e) {
  const t = w();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function $1(e, t, r, n) {
  if (N(w()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && w1(), e.kind === "closeTag") {
    Rm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Nm() !== "declined") return;
  if (e.kind === "paragraph" && Ze.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    q1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ne.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Wg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  Ac(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Ei(), reference: r });
}
function $m(e, t) {
  const r = w();
  if (!N(r)) return;
  const n = Ri(t);
  if (Bg()) {
    const s = w();
    if (!N(s)) return;
    const o = it(s.anchor.getNode(), se);
    if (!o) return;
    o.setMarker(e), n && ou(o);
    return;
  }
  const i = r.insertParagraph();
  se(i) && (n ? Ro(i, e) : i.setMarker(e));
}
function I1() {
  const [e] = le();
  return j(() => e.registerCommand(sp, () => !0, Rt), [e]), null;
}
function Im(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Ne.isValidMarker(r) || zo(r));
}
function L1(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Ne.isValidMarker(r) || zo(r));
}
function D1(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = WE.exec(e)?.[1];
  return r === void 0 ? !1 : !Im(r, t);
}
function Lm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !D1(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!se(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (se(i))
    return [i, r];
}
function Dm(e, t) {
  const r = Lm(e, t.getMarker);
  return r !== void 0 && Sm(r, t);
}
function U1(e, t) {
  const r = w();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Um(e) {
  const t = HE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function F1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Um(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function K1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (z(e.getParent()) && C(r)) {
    const n = r.getNextSibling();
    if (L(n)) {
      gl(n);
      return;
    }
  }
  C(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function xf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Um(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  K1(e);
}
function vf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Fm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Wt(e, r);
  const n = F1(e), i = e.getParent();
  if (se(i)) {
    if (!Im(t, r.getMarker))
      return Dm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Wt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), vf(s, t) && xf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (L(i) || z(i)) {
    const s = t.replace(/^\+/, "");
    if (!(L(i) ? L1(t, r.getMarker) : Ne.isValidMarker(s)))
      return Wt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Wt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (U1(c, nt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), vf(a, s) && xf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Wt(e, r);
}
function z1(e) {
  const t = w();
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
function j1(e, t) {
  const r = e.getTextContent();
  if (rn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ke(e.getParent()) && rl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !z1(e)) {
    bk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = BE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Fm(e, n[1], t);
      return;
    }
    if (VE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Wt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = nt(e.getMarker(), e.getNested());
    if (L(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ke(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function B1(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (sh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Km(e) {
  if (!yp(e)?.length)
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
const es = Km("v"), V1 = Km("c"), _f = /^[ \u00A0]*$/;
function Cf(e, t, r) {
  const n = e.getNextSibling();
  if (C(n) && n.getType() === ze.getType() && n.getMode() === "normal" && te(n, ae) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = ke(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function W1(e, t) {
  const r = e.getTextContent(), n = $t("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (es.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = es.valueAndRest.exec(c);
    if (l && _f.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (es.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = es.valueAndRest.exec(r);
  if (!s) {
    const c = es.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = w(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent($t("v", d));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Cf(e, u, h);
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
  if (t.pendingKeys.delete(e.getKey()), _f.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent($t("v", o)), a && Cf(e, a, a.length);
}
const H1 = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function G1(e, t) {
  const r = e.getParent();
  if (!z(r) || r.getIsCollapsed() !== !1 || !yp(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === St(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = H1.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(St(a)), !0;
}
function J1(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!C(t)) return;
  const r = $t("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = V1.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function zm(e) {
  if ($e(e)) {
    const { wrapper: t } = Vo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (z(e)) {
    const { wrapper: t } = Kp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ce(e)) {
    const t = [], r = zp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Bp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Ae(e)) {
    const t = [], r = ps(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = ps(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function Y1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return zm(e).some((n) => r.is(n));
}
function X1(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && se(e) && Oh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of hs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Us(l, e) && (i || Y1(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of zm(e))
    l.remove(), n = !0;
  let s = !1;
  if (L(e)) {
    const l = zk(e);
    l !== void 0 && ik(l) && (Yp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of hs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (_x(l, e)) {
        bs(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Rh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Yo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Sf(e) {
  return C(e) && e.getType() === ze.getType() && e.getMode() === "normal" && te(e, ae) !== "attribute";
}
function Q1(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = X(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Sf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Sf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function ro(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = Q1(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = X(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (rn(c)) continue;
      const h = om.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = Fm(c, h[1], e) || n : r === "idle" && yf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Dm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Wt(c, e) || n;
      continue;
    }
    const l = Xr(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = X1(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && yf(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = Wt(d, e) || n;
    }
  }
  return n;
}
function jm(e) {
  if (nn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (L(t)) return os(t) !== void 0;
  return !1;
}
function Z1(e) {
  const t = Xr(e);
  if (!t) return !1;
  const r = Mr(t.kind);
  return !Yo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Mf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ht(t) || we(t) || hh(t)) return !0;
  return !1;
}
function eA(e, t) {
  const r = e.getTextContent(), n = te(e, ae), i = e.getParent();
  if (n !== "attribute" && Ce(i)) {
    r.replace(/^[ \u00A0]+/, "") === $t("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (G1(e, t)) return;
  if (n === "attribute") {
    Z1(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && jm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Mf(e))
      t.pendingKeys.add(e.getKey());
    else if (Vp(e)) t.pendingKeys.add(e.getKey());
    else if (Ce(Ss(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      L(a) && Xp(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Mf(e)) return;
  const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (GE.test(o)) {
    if (pk(r)) {
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
function tA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Rh(e, t);
}
function rA(e) {
  const t = (r) => {
    if (P(r)) {
      rn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (nn(r)) {
      sh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of hs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Us(n, r) || tA(n, r)) && e.pendingKeys.add(r.getKey());
    if (Ae(r)) {
      r.getTextContent() !== $t("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (C(r)) {
      if (r.getType() !== ze.getType() || te(r, ae) === "attribute") return;
      const n = r.getParent();
      if (Ce(n)) {
        r.getTextContent() !== $t("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && jm(r) || i.includes("//") || Vp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (L(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!we(r) && !ht(r)) {
      if (Ke(r) && r.getChildrenSize() === 0) {
        const n = Xr(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      R(r) && r.getChildren().forEach(t);
    }
  };
  Ee().getChildren().forEach(t);
}
function nA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = te(e, ae);
  if (r === "attribute" || r === ur) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ht(o) || Ce(o) || we(o)) return;
  const n = t.startsWith(O) && L(e.getParent()), i = n ? t.slice(1) : t, s = (n ? O : "") + i.replace(/ (?=[ \u00A0])/g, O).replace(new RegExp("(?<=\\u00A0) ", "g"), O);
  s !== t && e.setTextContent(s);
}
function iA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function Ic(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(iA(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function sA(e) {
  const t = Ic(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(O) ? r : n.includes(O) || i.includes(O) ? i : void 0;
  if (!s) return !1;
  const o = w();
  if (!N(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(O, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = Ei();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(co, void 0), d === "") return;
    const f = w();
    N(f) && f.insertText(d);
  }), !0;
}
function oA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html"), r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT), n = [];
  for (let a = r.nextNode(); a; a = r.nextNode()) n.push(a);
  const i = n.map((a) => a.nodeValue ?? "").join(""), s = i.replace(
    /\u00A0+/g,
    (a, c) => a.length >= 2 || c === 0 || c + a.length === i.length ? a : " "
  );
  if (s === i) return e;
  let o = 0;
  for (const a of n) {
    const c = (a.nodeValue ?? "").length;
    a.nodeValue = s.slice(o, o + c), o += c;
  }
  return t.innerHTML;
}
function aA(e) {
  const t = w();
  if (!N(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(O, " ")
  }, n = kb(e), i = Tb(e);
  return n && (r["text/html"] = oA(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Ef(e, t, r) {
  const n = w();
  if (!N(n) || n.isCollapsed()) return !1;
  const i = aA(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return bb(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const Bm = op(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ha(e) {
  const t = e();
  return Cn(Qf), Cn(kp), t;
}
const Af = 8, cA = 1e3;
function oi(e, t) {
  const r = Ae(e) ? ["va", "vp"] : $e(e) ? ["milestone"] : z(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    Ax(Mr(n), e, t.pendingKeys);
}
function lA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Jc) || i.updateTags.has(di)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = X(o);
        if (!c) continue;
        const l = Xr(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = X(o.getKey());
        c?.isAttached() && Mr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Qe(
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
    e.registerMutationListener(ze, r),
    e.registerMutationListener(lr, r),
    e.registerMutationListener(Or, r),
    e.registerMutationListener(wr, r)
  );
}
function uA(e, t, r) {
  return Qe(
    e.registerCommand(
      Tr,
      (n) => {
        if (yg()) return !1;
        const i = Ic(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(O, "~") : s).split(`
`);
          let c = kf(a, t.getMarker);
          if (c === "declined" && v1(e) && (c = kf(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      xr
    ),
    e.registerCommand(
      Tr,
      (n) => {
        const i = Ic(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !cE()) return !1;
        n?.preventDefault();
        const o = w();
        return N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(co, void 0), a === "") return;
          const l = w();
          N(l) && l.insertText(a);
        }), !0;
      },
      Ue
    ),
    e.registerCommand(
      Tr,
      () => (t.splitExpected.current = !0, !1),
      Rt
    )
  );
}
function dA({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = le(), s = e?.markerMode === "editable", o = !!e && hr(e), a = Y(void 0), c = Y(n);
  return j(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? ar, l.logger = r);
  }, [e, t, r, n]), j(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? ar,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const d = kx(i, l.pendingKeys);
    let u, f = !1, p, h = !1, m = !1, y = 0;
    const x = () => y < Af ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Af} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), S = (k, U = "departure") => {
      i.update(() => {
        y = Ha(
          () => ro(l, k, U)
        ) ? y + 1 : 0;
      });
    };
    let M;
    const $ = () => {
      if (M !== void 0 && clearTimeout(M), M = void 0, m || l.pendingKeys.size === 0) return;
      const k = c.current ?? cA;
      k < 0 || (M = setTimeout(() => {
        M = void 0, !(m || l.pendingKeys.size === 0) && (f || x() || S(void 0, "idle"));
      }, k));
    }, A = Qe(
      i.registerNodeTransform(lr, (k) => {
        if (i.isComposing()) return;
        j1(k, l);
        const U = Xr(k);
        U && (Ae(U.owner) || z(U.owner) || Ce(U.owner) || $e(U.owner) && Vo(U.owner).wrapper === void 0) && oi(U.owner, l);
      }),
      i.registerNodeTransform(ft, (k) => {
        i.isComposing() || (W1(k, l), oi(k, l));
      }),
      i.registerNodeTransform(Et, (k) => {
        i.isComposing() || (J1(k), k.isAttached() && oi(k, l));
      }),
      i.registerNodeTransform(Ze, (k) => {
        i.isComposing() || m1(k, l);
      }),
      i.registerNodeTransform(xe, (k) => {
        if (!i.isComposing()) {
          T1(k, l);
          for (const U of ["separator", "char"])
            k.isAttached() && Us(Mr(U), k) && l.pendingKeys.add(k.getKey());
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
      i.registerNodeTransform(Jt, (k) => {
        i.isComposing() || oi(k, l);
      }),
      i.registerNodeTransform(wr, (k) => {
        if (i.isComposing()) return;
        const U = Xr(k);
        U && ($e(U.owner) || Ae(U.owner) || z(U.owner) || Ce(U.owner)) && oi(U.owner, l);
      }),
      i.registerNodeTransform(Ne, (k) => {
        i.isComposing() || (k1(k, l), oi(k, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Rr, (k) => {
        i.isComposing() || B1(k, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(ze, (k) => {
        i.isComposing() || eA(k, l);
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
      i.registerMutationListener(
        ze,
        (k) => {
          i.getEditorState().read(() => {
            for (const [U, D] of k) {
              if (D === "destroyed") continue;
              const G = X(U);
              !G || te(G, ae) !== "attribute" || Ke(G.getParent()) || i.getElementByKey(U)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      lA(i, l),
      ...o ? [
        i.registerNodeTransform(ze, (k) => {
          i.isComposing() || nA(k);
        }),
        i.registerCommand(
          Ko,
          (k) => Ef(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            k && typeof k == "object" && "clipboardData" in k ? k : null,
            i,
            !1
          ),
          Ue
        ),
        i.registerCommand(
          _n,
          (k) => Ef(
            k && typeof k == "object" && "clipboardData" in k ? k : null,
            i,
            !0
          ),
          Ue
        ),
        i.registerCommand(
          Tr,
          (k) => sA(
            // Same jsdom-safe duck-check as COPY above.
            k && typeof k == "object" && "clipboardData" in k ? k : null
          ),
          Ue
        )
      ] : [],
      i.registerCommand(
        _n,
        () => (Rc(l), !1),
        xr
      ),
      i.registerCommand(
        Wc,
        () => (i.isComposing() || g1(l), !1),
        ui
      ),
      i.registerCommand(
        Fo,
        () => (f = !1, y = 0, $(), !1),
        Rt
      ),
      i.registerCommand(
        Pr,
        (k) => (f = !1, y = 0, $(), (k.key === "Backspace" || k.key === "Delete") && (Rc(l), h1(l)), i.isComposing() || !k.ctrlKey || k.altKey || k.shiftKey || k.metaKey || k.key !== " " && k.code !== "Space" || !aE() ? !1 : (k.preventDefault(), !0)),
        Ue
      ),
      i.registerCommand(
        np,
        (k) => {
          const U = Nm();
          U === "needs-plain-split" && i.dispatchCommand(co, void 0);
          const D = U !== "declined" || Px();
          return D && k?.preventDefault(), ro(l), D;
        },
        Ue
      ),
      i.registerCommand(
        co,
        () => (l.splitExpected.current = !0, Bg()),
        Ue
      ),
      uA(i, l, o),
      i.registerCommand(
        Bm,
        () => {
          if (f) return !0;
          const k = i.getRootElement(), U = k?.ownerDocument, D = !!k && !!U && U.hasFocus() && k.contains(U.activeElement);
          let G;
          if (D) {
            const Q = w();
            G = N(Q) ? Q.focus.key : u;
          }
          return Ha(() => ro(l, G)), !0;
        },
        Rt
      ),
      i.registerCommand(
        Gc,
        () => {
          if (f) return !1;
          const k = w(), U = N(k) ? k.focus.key : u;
          return Ha(() => ro(l, U)), !1;
        },
        Rt
      ),
      i.registerUpdateListener(({ editorState: k, tags: U }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const D = k.read(() => {
          const Q = w();
          return N(Q) ? Q.focus.key : void 0;
        }), G = p;
        if (D !== void 0 && (p = D), U.has(Jc)) {
          l.pendingKeys.clear(), k.read(() => rA(l)), f = !0, D !== void 0 && (u = D);
          return;
        }
        if (U.has(Hr)) {
          D !== void 0 && D !== G && (f = !0);
          return;
        }
        f || (D !== void 0 && (u = D), $(), !(h || D === void 0) && [...l.pendingKeys].some((Q) => Q !== D) && (h = !0, queueMicrotask(() => {
          h = !1, !m && (x() || S(u));
        })));
      })
    );
    return () => {
      m = !0, M !== void 0 && clearTimeout(M), M = void 0, d(), A(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const fA = ["status_unknown", "status_invalid"], Vm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, pA = Object.values(Vm);
function hA(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Vm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Pf(e) {
  e.classList.remove(...fA), e.removeAttribute("aria-description"), pA.includes(e.title) && e.removeAttribute("title");
}
function gA(e, t, r, n) {
  const i = (a) => a.read(() => Ee().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const d = X(l)?.getTopLevelElement();
        d && a.add(d.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function mA(e) {
  const t = X(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function yA({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? _o;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = qE(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || mA(f)) continue;
            const h = X(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Pf(p);
        }
        for (const [f, p] of u) {
          const h = n.getElementByKey(f);
          h && hA(h, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          gA(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && Pf(d);
      }
    };
  }, [n, i, t, r]), null;
}
function Ks(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Ar(o);
    a && R(s) && Ks(s.getChildren(), a, r);
  }
}
function Wm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Ar(o);
      if (a) {
        n(a);
        continue;
      }
      const c = Ci(o);
      if (c === void 0 || !c.includes(rt)) continue;
      const l = c.split(rt), d = [];
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
function zs(e, t, r) {
  const n = [], i = [];
  for (const s of e.sentinels) {
    const o = [], a = [];
    for (const c of s) {
      if (r.has(c.getKey())) continue;
      const l = t.get(c.getKey());
      if (!l) return;
      o.push(c), a.push(l.node);
    }
    n.push(o), i.push(a);
  }
  return { live: n, serialized: i };
}
function Hm(e, t) {
  const r = [];
  for (const n of e)
    um(n, t) || ((se(n) || L(n)) && r.push(n.getMarker()), R(n) && r.push(...Hm(n.getChildren(), t)));
  return r;
}
function Gm(e) {
  const t = [];
  for (const r of e) {
    const n = tu(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Ar(r);
    i && t.push(...Gm(i));
  }
  return t;
}
function au(e, t, r) {
  const n = Hm(e, r), i = Gm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function Jm(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = X(t.key), i = t.offset;
  else
    return;
  if (!(!C(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function cu(e, t) {
  const r = Ym(e, t);
  return r ? e.text.slice(0, r.start) + e.text.slice(r.end) : e.text;
}
function Ym(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function Xm(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = ru(e, o, s);
  if (!c) return;
  const l = i ? cu(c, i) : c.text, d = Nr(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (Bn(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = en.serializeEditorState(
    { type: _r, version: vr, content: d },
    s
  ).root.children;
  if (sa(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = zs(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Di(u, o) === Li(e, o) && au(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Wm(u, f.serialized);
  const h = bA(e), m = Qm(u);
  for (let y = 0; y < h.length && y < m.length; y++)
    h[y].sid !== void 0 && m[y].number === h[y].number && (m[y].sid = h[y].sid);
  return u;
}
function bA(e) {
  const t = [], r = (n) => {
    Ae(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : R(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Qm(e) {
  const t = [];
  for (const r of e) {
    Ip(r) && t.push(r);
    const n = Ar(r);
    n && t.push(...Qm(n));
  }
  return t;
}
function kA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Cs(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? cu(l, i) : l.text, f = Nr(u, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Bn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], m = Mm(h), y = e.getCategory() !== m, x = cm(e, h, m, s);
  if (x.failure !== void 0) {
    x.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const S = x.children;
  if (sa(S) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const M = zs(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Di(S, o) === Li(d, o) && au(d, S, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: d, category: m, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Wm(S, M.serialized), { rebuilt: S, contentNodes: d, category: m, categoryChanged: y };
}
function Nf(e) {
  return e.$?.textType;
}
function TA(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Nf(e) === Nf(t);
}
function xA(e) {
  const t = [];
  for (const r of e) {
    const n = X(r);
    n?.isAttached() && we(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function vA(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!z(t)) return;
  const r = e.getTextContent();
  if (rn(e)) return;
  const n = om.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function wf(e, t) {
  const r = e;
  r.marker = t, r.text = fm(t, r.markerSyntax, r.nested);
}
function Zm(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ne.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && wf(a.node, s);
  const c = n.getChildren().filter(P).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && wf(l.node, s);
}
function ey(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = iu(e, i, n);
  if (!o) return;
  const a = r ? cu(o, r) : o.text, c = Nr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Bn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = en.serializeEditorState(
    { type: _r, version: vr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...Ui(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Di(d, i) === Li(u, i) && au(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function ty(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (u) => {
    z(u) ? s.set(u.getKey(), u) : Ce(u) ? o.set(u.getKey(), u) : n.set(u.getKey(), [u]);
  };
  for (const u of e) {
    const f = X(u);
    if (!f?.isAttached()) continue;
    const p = Ss(f);
    if (p) {
      if (c(p), P(f)) {
        const h = Lm(f, t.getMarker);
        h && i.push(h);
      }
      if (z(p)) {
        const h = vA(f);
        h && a.set(p.getKey(), h);
      }
    }
  }
  const l = /* @__PURE__ */ new Set();
  for (const u of i)
    u.some((f) => l.has(f.getKey())) || (u.forEach((f) => {
      l.add(f.getKey()), n.delete(f.getKey());
    }), n.set(u[0].getKey(), u));
  if (r) {
    const u = Ss(r.node);
    u && c(u);
  }
  const d = xA(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: d,
    huskKeys: new Set(d.map((u) => u.getKey()))
  };
}
function ry(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && Ci(r), s = n && Ci(n);
  r && n && i !== void 0 && s !== void 0 && TA(r, n) && (r.text = i + s, e.splice(t, 1));
}
function aa(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Ar(s.node) : void 0;
  if (!s || !o) return !1;
  const a = kA(e, t, r, n, i);
  if (!a) return !1;
  if (a.categoryChanged) {
    const d = s.node;
    a.category === void 0 ? delete d.category : d.category = a.category;
  }
  if (!a.rebuilt) return a.categoryChanged;
  const c = t.get(a.contentNodes[0].getKey());
  if (!c) return a.categoryChanged;
  const l = o.indexOf(c.node);
  return l < 0 ? a.categoryChanged : (o.splice(l, a.contentNodes.length, ...a.rebuilt), !0);
}
function _A(e, t, r, n, i) {
  const s = Jm(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: d, huskKeys: u } = ty(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  Ks(Ee().getChildren(), e.root.children, f);
  for (const p of l.values()) Zm(p, f);
  for (const p of a.values())
    aa(p, f, r, u, s);
  for (const p of o.values()) {
    const h = f.get(p[0].getKey());
    if (!h) continue;
    const m = Xm(p, f, r, u, s);
    if (!m) continue;
    const y = h.siblings.indexOf(h.node);
    y < 0 || h.siblings.splice(y, p.length, ...m);
  }
  for (const p of c.values()) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = 1 + Ui(p).length, y = ey(p, r, s);
    if (!y) continue;
    const x = h.siblings.indexOf(h.node);
    x < 0 || h.siblings.splice(x, m, ...y);
  }
  for (const p of d) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || ry(h.siblings, m);
  }
  return Ig(e, r.viewOptions);
}
function CA({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = Ri(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        Ze,
        (i) => SA(i, t)
      );
  }, [r, n, t]), null;
}
function SA(e, t) {
  e.getMarker() !== or && (e.isEmpty() || Ut(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${or}" (key ${e.getKey()})`
  ), e.setMarker(or)));
}
function no(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const MA = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function js(e) {
  return MA.exec(e)?.[1] ?? e;
}
function ca(e, t) {
  const r = e.jsonPath.slice(js(e.jsonPath).length);
  return { ...e, jsonPath: `${gn(t)}${r}` };
}
function EA(e, t) {
  let r = Ee();
  for (let n = 0; n < t.length; n += 1) {
    if (!R(r)) return;
    const i = sn(r, hr(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function AA(e, t) {
  const r = Mi(js(t.jsonPath));
  if (r.length === 0) return { kind: "live", location: t };
  const n = e.settledToLiveTopIndex(r[0]);
  if (!n) return;
  if (n.plan)
    return {
      kind: "scope",
      plan: n.plan,
      scratchIndexes: [n.indexWithinScope, ...r.slice(1)],
      location: t
    };
  const i = [n.liveIndex, ...r.slice(1)], s = EA(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: ca(t, i) };
}
function Lc(e, t) {
  t.add(e.getKey()), R(e) && e.getChildren().forEach((r) => Lc(r, t));
}
function ny(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function Dc(e, t, r) {
  const n = (u, f) => {
    const p = In(e, u, f), h = ny(e, u, f);
    return p && h ? { anchor: p, position: h.start + f } : void 0;
  }, i = (u) => {
    const f = u.end - u.start, p = In(e, u.key, f);
    return p ? { anchor: p, position: u.start + f } : void 0;
  };
  if (!R(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((u) => Lc(u, s));
  const o = [...e.spans].reverse().find((u) => s.has(u.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  Lc(t, a);
  const c = e.spans.find((u) => a.has(u.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((u) => !a.has(u.key) && X(u.key)?.isBefore(t));
  if (l) return i(l);
  const d = e.spans[0];
  return d && !d.isSentinel ? n(d.key, 0) : void 0;
}
function iy(e, t) {
  const r = /* @__PURE__ */ new Map();
  e.sentinels.forEach(
    (n, i) => n.forEach(
      (s, o) => r.set(s.getKey(), { sentinelIndex: i, memberIndex: o, member: s })
    )
  );
  for (let n = t; n; n = n.getParent()) {
    const i = r.get(n.getKey());
    if (i) return i;
  }
}
function sy(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
function PA(e, t, r) {
  const [n, i] = gc(t, r.viewOptions);
  if (!n || i === void 0) return;
  const s = iy(e, n);
  if (!s) {
    const c = Dc(e, n, i);
    if (!c) return;
    const l = e.text[c.position];
    return {
      kind: "anchor",
      anchor: c.anchor,
      atWordByte: l !== void 0 && !$n.test(l)
    };
  }
  const o = sy(s.member, n);
  if (!o) return;
  const a = z(s.member) ? Cs(s.member, r.getMarker, r.viewOptions)?.out : void 0;
  return {
    kind: "preserved",
    sentinelIndex: s.sentinelIndex,
    memberIndex: s.memberIndex,
    path: o,
    offset: i,
    type: R(n) ? "element" : "text",
    noteAnchor: a && Dc(a, n, i)?.anchor
  };
}
function NA(e, t) {
  if (t.type !== "text") return t;
  const r = ny(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && $n.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function oy(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function wA(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function OA(e, t, r, n) {
  const i = wA(r, n), s = i && t.liveFragment?.sentinels[i.sentinelIndex]?.[i.memberIndex];
  if (!s?.isAttached()) return;
  const o = e.byFirstLiveKey.get(s.getKey());
  if (o?.kind === "note")
    return n.noteAnchor && o.liveFragment ? oy(
      o,
      Si(o.liveFragment, n.noteAnchor)
    ) : void 0;
  let a = s;
  for (const c of n.path) {
    if (!R(a)) return;
    const l = a.getChildAtIndex(c);
    if (!l) return;
    a = l;
  }
  return { key: a.getKey(), offset: n.offset, type: n.type };
}
function qA(e, t, r) {
  const { plan: n } = r, { liveFragment: i, scratchFragment: s, sentinelMap: o } = n;
  if (!i || !s || !o) return;
  const a = ca(r.location, r.scratchIndexes), c = n.scratch.getEditorState().read(() => PA(s, a, e.tier2));
  if (!c) return;
  if (c.kind === "preserved")
    return OA(t, n, o, c);
  const l = Si(i, c.anchor, {
    addressDisplayBytes: !Bc(r.location)
  });
  if (l)
    return oy(
      n,
      c.atWordByte ? NA(i, l) : l
    );
}
function Of(e, t, r) {
  const n = AA(t, r);
  if (!n) return;
  if (n.kind === "live") return n.location;
  const i = qA(e, t, n), s = i && X(i.key);
  return s ? Nn(s, i.offset, t.viewOptions) : void 0;
}
function RA(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = Of(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = Of(e, t, r.end);
  if (i)
    return { ...r, start: n, end: i };
}
function $A(e, t) {
  const r = Mi(js(t.jsonPath));
  return r.length === 0 ? t : ca(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function IA(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function LA(e, t) {
  const r = t.liveNodes[0], n = IA(e, t);
  if (n) {
    const s = cy(e, n, r, 0);
    return s && Mi(js(s.jsonPath));
  }
  const i = yn(r);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function DA(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function UA(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function FA(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!R(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return Nn(s, n, i);
  }
}
function ay(e, t, r, n, i, s, o) {
  const a = iy(r, i);
  if (a) {
    const u = r.sentinels[a.sentinelIndex];
    if (!t[a.sentinelIndex]?.some((h) => h !== void 0)) {
      const h = u[0].getParent();
      return h ? ay(
        e,
        t,
        r,
        n,
        h,
        u[0].getIndexWithinParent(),
        o
      ) : void 0;
    }
    const f = sy(a.member, i);
    if (!f) return;
    const p = t[a.sentinelIndex]?.[a.memberIndex];
    return p ? e.scratch.getEditorState().read(
      () => FA(n, p, f, s, o)
    ) : void 0;
  }
  const c = Dc(r, i, UA(e, i, s));
  if (!c) return;
  const { anchor: l } = c, d = !Bc(
    Nn(i, s, o)
  );
  return e.scratch.getEditorState().read(() => {
    const u = Si(n, l, { addressDisplayBytes: d }), f = u && X(u.key);
    return f ? Nn(f, u.offset, o) : void 0;
  });
}
function cy(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, sentinelMap: o } = t;
  if (!i || !s || !o) return;
  const a = ay(
    t,
    o,
    i,
    s,
    r,
    n,
    e.viewOptions
  );
  if (!a) return;
  const c = DA(
    t,
    LA(e, t),
    Mi(js(a.jsonPath))
  );
  return c && ca(a, c);
}
function qf(e, t, r) {
  const n = e.planContaining(t);
  return n ? cy(e, n, t, r) : $A(e, Nn(t, r, e.viewOptions));
}
function KA(e) {
  const t = Rl(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = w();
  if (!N(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = qf(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = qf(e, o.getNode(), o.offset);
  if (a)
    return { start: s, end: a };
}
function ly(e, t, r) {
  if (r <= t) return e;
  const n = r - t, i = (s) => s <= t ? s : s >= r ? s - n : t;
  return {
    text: e.text.slice(0, t) + e.text.slice(r),
    spans: e.spans.map((s) => ({
      ...s,
      start: i(s.start),
      end: i(s.end)
    })),
    sentinels: e.sentinels
  };
}
function uy(e, t, r) {
  if (e === "para") return ru(t, r.getMarker, r.viewOptions);
  if (e === "chapter") {
    const i = t.find(Ce);
    return i && iu(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(z);
  return n && Cs(n, r.getMarker, r.viewOptions)?.out;
}
function la(e) {
  const t = e.exportJSON();
  return R(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(la(r))), t;
}
function zA(e, t) {
  const r = gb({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = Ee();
        t.forEach((i) => n.append(Es(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const Rf = "\0";
function dy(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), R(r) && dy(r.getChildren(), t);
  return t;
}
function jA(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(Rf), a = dy(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(Rf);
}
function lu(e, t = []) {
  for (const r of e)
    z(r) && t.push(r), R(r) && lu(r.getChildren(), t);
  return t;
}
function BA(e, t, r) {
  if (e.length === 0 && r.length === 0) return [];
  if (!t) return;
  const n = [];
  r.forEach((o, a) => {
    for (let c = 0; c < o.length; c += 1)
      n.push({ sentinelIndex: a, memberIndex: c });
  });
  const i = t.flat();
  if (i.length !== n.length) return;
  const s = /* @__PURE__ */ new Map();
  return i.forEach((o, a) => s.set(o.getKey(), n[a])), e.map((o) => o.map((a) => s.get(a.getKey())));
}
function VA(e, t) {
  return e.sentinels.filter(
    (n, i) => n.length > 0 && !t[i]?.some((s) => s !== void 0)
  ).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? ly(n, s.start, s.end) : n;
  }, e);
}
function ua(e, t, r, n, i, s, o) {
  const a = zA(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l } = a.getEditorState().read(() => ({
    settledCount: sn(
      Ee(),
      hr(o.tier2.viewOptions)
    ).length,
    scratchFragment: uy(e, Ee().getChildren(), o.tier2)
  })), d = BA(
    r?.sentinels ?? [],
    s?.live,
    l?.sentinels ?? []
  );
  return {
    kind: e,
    liveNodes: t,
    liveFragment: r && d ? VA(r, d) : r,
    liveCut: n,
    scratch: a,
    scratchFragment: l,
    settledCount: c,
    sentinelMap: d
  };
}
function uu(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = Ym(e, t);
  return r ? {
    liveFragment: ly(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function du(e, t) {
  for (const r of e.noteGlyphRenames.values())
    Zm(r, t);
}
function WA(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = uu(t, i), a = la(e), c = /* @__PURE__ */ new Map();
  if (Ks([e], [a], c), du(r, c), !aa(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && zs(t, c, r.huskKeys);
  return ua("note", [e], s, o, [a], l, n);
}
function HA(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = uu(t, i), a = e.map(la), c = /* @__PURE__ */ new Map();
  Ks(e, a, c), du(r, c), lu(e).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => aa(u, c, n.tier2, r.huskKeys, i)
  );
  const l = Xm(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const d = t && zs(t, c, r.huskKeys);
  return ua("para", e, s, o, l, d, n);
}
function GA(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = uu(t, n), o = ey(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...Ui(e)];
  return ua("chapter", a, i, s, o, void 0, r);
}
function JA(e, t, r, n, i, s) {
  const o = la(e), a = /* @__PURE__ */ new Map();
  Ks([e], [o], a), du(n, a), lu([e]).filter((d) => n.noteScopes.has(d.getKey())).forEach(
    (d) => aa(d, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const d of r) {
    const u = a.get(d.getKey());
    if (!u) continue;
    const f = u.siblings.indexOf(u.node);
    f < 0 || (ry(u.siblings, f), c.add(d.getKey()));
  }
  if (c.size === 0) return;
  const l = t && zs(t, a, c);
  return ua("para", [e], t, void 0, [o], l, i);
}
function YA(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function $f(e) {
  return {
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (t) => t,
    settledToLiveTopIndex: (t) => ({ liveIndex: t, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e
  };
}
function XA(e, t) {
  const r = sn(Ee(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = r[o], c = a.type === "element" ? a.node : void 0, l = c && e.get(c.getKey());
    if (!l || !l.liveNodes[0].is(c)) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const d = new Set(l.liveNodes.map((f) => f.getKey()));
    let u = 0;
    for (; o + u < r.length; ) {
      const f = r[o + u];
      if (f.type !== "element" || !d.has(f.node.getKey())) break;
      u += 1;
    }
    for (let f = 0; f < u; f += 1)
      n[o + f] = s;
    for (let f = 0; f < l.settledCount; f += 1)
      i.push({ liveIndex: o, plan: l, indexWithinScope: f });
    s += l.settledCount, o += u;
  }
  return { liveToSettled: n, settledToLive: i };
}
function If(e) {
  const t = Jm(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), $f(e.tier2.viewOptions);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = ty(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const h = f.liveNodes[0].getKey();
    n.set(h, f), f.liveNodes.forEach((m) => i.set(m.getKey(), f)), p && f.liveNodes.forEach((m) => s.set(m.getKey(), f));
  }, c = (f, p, h, m) => {
    o.add(f);
    const y = uy(p, h, e.tier2), x = jA(
      p,
      h,
      y?.text ?? "",
      e.tier2,
      t
    ), S = e.cache.entries.get(f);
    if (S?.signature === x) return S.plan;
    const M = m(y);
    return M ? e.cache.entries.set(f, { signature: x, plan: M }) : e.cache.entries.delete(f), M;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => WA(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => HA(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...Ui(f)],
        (p) => GA(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!se(p) || YA(f, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(f), l.set(p.getKey(), h);
  }
  for (const [f, { para: p, husks: h }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (m) => JA(p, m, h, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0) return $f(e.tier2.viewOptions);
  const { liveToSettled: d, settledToLive: u } = XA(
    s,
    hr(e.tier2.viewOptions)
  );
  return {
    byFirstLiveKey: n,
    liveToSettledTopIndex: (f) => d[f] ?? f,
    settledToLiveTopIndex: (f) => u[f],
    planContaining: (f) => {
      for (let p = f; p; p = p.getParent()) {
        const h = i.get(p.getKey());
        if (h) return h;
      }
    },
    viewOptions: e.tier2.viewOptions
  };
}
function QA({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = le(), n = Y({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, $o(s, e) || ZA(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Lt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Uc(r);
        Lf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: io(s) === io(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        Ee().getChildren().filter(We).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (Uc(r) || Lf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: io(a) === io(c)
      }));
    };
    return Qe(
      ...[Et, dr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      cr,
      () => {
        const i = n.current;
        return i.phase === "idle" && nP(i, tP()), !1;
      },
      Rt
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(cr, void 0));
    };
    return Qe(
      r.registerMutationListener(_t, i),
      r.registerMutationListener(ft, i)
    );
  }, [r]), j(() => {
    const i = () => aP(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function ZA(e, t, r) {
  if (eP(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Uc(t);
  (!n || n === r.book) && t.update(() => fy(r.chapterNum, r.verseNum), {
    tag: Hr
  });
}
function eP(e, t) {
  const r = e.pendingEchoes.findIndex((n) => $o(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function tP() {
  const e = w(), t = bl(e);
  if (!t) return;
  const r = fu(), n = Ch(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Sl(t, e), { verseNum: o, verse: a } = Qx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Uc(e) {
  return e.getEditorState().read(() => fu()?.getCode() || void 0);
}
function fu() {
  return Ee().getChildren().find(ht);
}
function Lf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Ga(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Ga(e, t), e.phase = "navigating") : i && Ga(e, t), r && r !== e.scrRef.book && gy(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Ga(e, t) {
  queueMicrotask(() => {
    t.update(
      () => fy(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Hr }
    );
  });
}
function fy(e, t) {
  const r = bl(w()), n = Ml(r)?.getNumber(), i = Ch(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Nh(n) ? hy(t, n) : parseInt(n, 10) === t))
    return;
  const o = Ee().getChildren(), a = _h(o, e);
  if (!a) return;
  const c = ax(o, a), l = ex(c, !0);
  ox(c, l);
  let d;
  try {
    d = Hx(c, t);
  } catch {
    return;
  }
  d && (se(d) ? !C(d.getFirstChild()) && Ii(d) || Xt(d, 0) : rP(d));
}
function rP(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || Te(n)) {
    Xt(t, r);
    return;
  }
  const i = Go(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (C(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = R(n) && !z(n) ? py(n) : void 0;
  s ? s.select(0, 0) : Xt(t, r);
}
function py(e) {
  const t = e.getFirstChild();
  if (C(t)) return t;
  if (R(t) && !z(t)) return py(t);
}
function io(e) {
  return e.read(() => {
    const t = Ee().getChildren().find(We);
    return `${fu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function nP(e, t) {
  e.phase !== "navigating" && t && (iP(t, e.scrRef) || gy(e, sP(t, e.scrRef)));
}
function iP(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? hy(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function hy(e, t) {
  try {
    return kl(e, t);
  } catch {
    return !1;
  }
}
function sP(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const oP = 8;
function gy(e, t) {
  return $o(t, e.scrRef) || e.pendingEchoes.some((r) => $o(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > oP && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function $o(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function aP(e) {
  e.phase = "idle";
}
function cP(e) {
  return ht(e) ? `${e.__code}` : Ce(e) ? `${e.__marker} "${e.__number}"` : L(e) ? `${e.__marker}` : Ls(e) ? `${e.__marker} "${e.__number}"` : pr(e) ? `${e.__caller}` : zn(e) ? `${e.__marker} "${e.__number}"` : z(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : se(e) ? `${e.__marker}` : C(e) ? `"${e.__text}"${lP(e)}` : be(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ae(e) ? `${e.__marker} "${e.__number}"` : "";
}
function lP(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ps]) : "";
}
function uP() {
  const [e] = le();
  return /* @__PURE__ */ _(
    xb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: cP,
      editor: e
    }
  );
}
const my = Wf(null), Df = 4;
function dP({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Y(null), s = Hf(my);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function fP({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = he(), [s, o] = he(), a = de(
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
  }, l = De(() => ({ registerItem: a }), [a]);
  return j(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ _(my.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function pP({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Y(null), c = Y(null), [l, d] = he(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: m } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Df}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (h) => {
        const m = h.target;
        o && a.current && a.current.contains(m) || f.contains(m) || d(!1);
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
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: m } = p.getBoundingClientRect(), y = m + p.offsetHeight + Df;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Se(Tn, { children: [
    /* @__PURE__ */ Se(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => d(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ _("span", { className: i }),
          t && /* @__PURE__ */ _("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ _("i", { className: "chevron-down" })
        ]
      }
    ),
    l && kn(
      /* @__PURE__ */ _(fP, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const Fc = {
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
}, Kc = {
  ...Fc,
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
function hP({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ _(
    pP,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + gP(t),
      buttonLabel: mP(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Fc).map((n) => /* @__PURE__ */ Se(
        dP,
        {
          className: "item block-marker " + yP(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: Fc[n] })
          ]
        },
        n
      ))
    }
  );
}
function gP(e) {
  return e && e in Kc ? e : "ban";
}
function mP(e) {
  return e && e in Kc ? Kc[e] : "No Style";
}
function yP(e) {
  return e ? "active dropdown-item-active" : "";
}
function Uf() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const bP = Ln(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = he(s), [c, l] = he(), [d, u] = he(!1), [f, p] = he(!1), h = de(
    ({
      canUndo: m,
      canRedo: y,
      blockMarker: x,
      contextMarker: S
    }) => {
      u(m), p(y), l(x), n?.({
        canUndo: m,
        canRedo: y,
        blockMarker: x,
        contextMarker: S
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    cr,
    (m, y) => (a(y), !1),
    xr
  ), [s]), /* @__PURE__ */ Se(Tn, { children: [
    /* @__PURE__ */ _(Cg, { onStateChange: h }),
    /* @__PURE__ */ Se("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(ap, void 0);
          },
          title: lo ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(cp, void 0);
          },
          title: lo ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(Uf, {}),
      o === s && /* @__PURE__ */ Se(Tn, { children: [
        /* @__PURE__ */ _(
          hP,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ _(Uf, {})
      ] }),
      /* @__PURE__ */ _("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), kP = Zo(), TP = {}, xP = {};
function vP() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Ff(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
const yy = Ln(function({
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
  const u = Y(null), f = Y(null), p = Y(null), h = Y(t), m = Y(!1), y = Y(void 0), x = Y(void 0), S = Y(void 0), M = Y({ entries: /* @__PURE__ */ new Map() }), $ = Y(0), A = Y(!0), k = Y(void 0), U = Y(!1), [D, G] = he(t), [Q, ce] = he(0), [fe, oe] = he(), {
    isReadonly: me = !1,
    structureProtectionMode: qe = "off",
    hasExternalUI: Z = !1,
    hasSpellCheck: K = !1,
    textDirection: re = "ltr",
    markerMenuTrigger: Re = "\\",
    view: ot,
    nodes: Ft,
    debug: pe = !1,
    contextMenu: Kt,
    styleInfo: At,
    markerSettleDelayMs: da
  } = a ?? xP, er = ot ?? kP, Vn = xs(er) && (er.markerMode !== "hidden" || !er.hasSpacing || er.hasGutterParaMarkers || er.hasActiveTextFocusBox) ? {
    ...er,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : er, Fi = Y(Vn);
  Pt(Fi.current, Vn) || (Fi.current = Vn);
  const ne = Fi.current, ut = De(() => Ft ?? TP, [Ft]), Bs = De(() => Kt, [Kt]), ve = De(
    () => Dx(At ?? _o),
    [At]
  ), gr = Y(c);
  Pt(gr.current, c) || (gr.current = c);
  const J = gr.current, Je = xs(ne), ye = me || Je, $r = Vn !== er;
  j(() => {
    Je && !me && J?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), $r && J?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [Je, me, $r, J]);
  const Ir = Y(null), tr = De(() => {
    if (ne.markerMode !== "editable") return;
    const E = At ?? _o;
    return {
      getContext: () => Ir.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (I) => KE(
        E,
        I,
        ut.extraValidMarkers
      ),
      getEnterItems: (I) => zE(
        E,
        I,
        ut.extraValidMarkers
      ),
      apply: (I, B) => {
        const W = Ir.current;
        W && (B.trigger === "enter" ? W.splitParagraphWithMarker(I.marker) : W.applyMarkerMenuSelection(I, B));
      },
      commitTypedCloser: (I) => {
        Ir.current?.commitTypedCloser(I);
      }
    };
  }, [ne, At, ut.extraValidMarkers]), Wn = (E) => {
    U.current || (U.current = !0, gr.current?.warn(
      `Editor: cannot ${E} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Hn = (E) => {
    if (Je)
      throw new Error(
        `Cannot ${E} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Lr = (E) => {
    if (Hn(E), ye) throw new Error(`Cannot ${E} in readonly mode`);
  }, an = De(
    () => [et, ...Je ? h_ : sg],
    [Je]
  ), rr = De(
    () => ({
      namespace: "platformEditor",
      theme: { ...em, showCharMarkerTitles: ne.showCharMarkerTitles },
      editable: !ye,
      editorState: void 0,
      // Handling of errors during update
      onError(E) {
        throw E;
      },
      nodes: an
    }),
    [ye, an, ne.showCharMarkerTitles]
  );
  Zs.initialize(J);
  function gt(E) {
    if (E !== void 0 && !lE(E, ut.extraValidMarkers))
      throw new Error(`Unsupported character marker '${E}'`);
  }
  const zt = de(() => {
    const E = u.current;
    if (!E) return h.current;
    const I = () => {
      if (!m.current) return;
      const yr = Zs.deserializeEditorState(E.getEditorState(), ne);
      yr && (h.current = yr, m.current = !1);
    }, B = wa(E), W = x.current;
    if ((!B || B.size === 0) && !W)
      return I(), h.current;
    const ue = E.getEditorState(), Be = ue.toJSON(), Ge = ue.read(
      () => _A(
        Be,
        B ?? /* @__PURE__ */ new Set(),
        { viewOptions: ne, getMarker: ve, logger: J },
        W,
        S.current
      )
    );
    return Ge || (I(), h.current);
  }, [ne, ve, J]), jt = de(() => {
    const E = u.current;
    if (!E) return;
    const I = {
      pendedKeys: wa(E) ?? /* @__PURE__ */ new Set(),
      transientInput: x.current,
      lastKnownCaret: S.current,
      tier2: { viewOptions: ne, getMarker: ve, logger: J },
      nodes: an,
      cache: M.current
    };
    return no(I) && I.cache.entries.clear(), I;
  }, [ne, ve, J, an]), Dr = de(
    (E) => {
      const I = u.current, B = jt();
      if (!(!I || !B))
        return no(B) ? E : I.getEditorState().read(() => {
          const W = If(B);
          return RA(B, W, E);
        });
    },
    [jt]
  );
  j(() => (A.current = !0, () => {
    A.current = !1;
  }), []);
  const Ur = de(
    (E, I) => E.read(() => {
      const B = jt(), W = B && KA(If(B));
      return !W && !Je && N(w()) && J?.warn(
        `${I} refused: the selection could not be expressed against the document the host is reading`
      ), W;
    }),
    [jt, Je, J]
  ), Ki = de(
    (E) => {
      if (!i) return;
      const I = u.current, B = jt();
      $.current += 1;
      const W = $.current;
      if (!I || !B || no(B)) {
        i(E);
        return;
      }
      queueMicrotask(() => {
        if (!A.current || W !== $.current || u.current !== I) return;
        const ue = Ur(I, "onSelectionChange");
        W === $.current && i(ue);
      });
    },
    [i, jt, Ur]
  ), mr = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const E = u.current?.getRootElement();
      return !!E && E.ownerDocument.activeElement === E;
    },
    undo() {
      u.current?.dispatchCommand(ap, void 0);
    },
    redo() {
      u.current?.dispatchCommand(cp, void 0);
    },
    cut() {
      Lr("cut"), u.current?.dispatchCommand(_n, null);
    },
    copy() {
      u.current?.dispatchCommand(Ko, null);
    },
    paste() {
      Lr("paste"), u.current && zl(u.current);
    },
    pastePlainText() {
      Lr("paste as plain text"), u.current && jl(u.current);
    },
    getUsj() {
      return zt();
    },
    commitPendingMarkerEdits() {
      u.current?.update(
        () => {
          u.current?.dispatchCommand(Bm, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(E) {
      if (!E) {
        x.current = void 0;
        return;
      }
      const I = u.current?.getEditorState().read(() => {
        const B = w();
        return N(B) && B.isCollapsed() ? B.focus.key : void 0;
      });
      x.current = { input: E, nodeKey: I ?? S.current?.key };
    },
    setUsj(E) {
      if (!Pt(h.current, E)) {
        h.current = E, x.current = void 0;
        const I = Pt(D, E);
        G(E), I && ce((B) => B + 1);
      }
    },
    applyUpdate(E, I = "remote") {
      if (Je && I === "remote") {
        gr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Hn("apply an update"), u.current?.update(
        () => {
          I === "remote" && Cn(di), I_(E, ne, ut, J);
        },
        { discrete: !0 }
      );
      const B = u.current?.getEditorState();
      if (!B) return;
      const W = Zs.deserializeEditorState(B, ne);
      if (W) {
        const ue = !Pt(h.current, W);
        if (ue && (h.current = W), ue || !Pt(D, W)) {
          const Be = ud(E, B, "apply");
          k.current = W, s?.(W, E, I, Be);
        }
      }
    },
    replaceEmbedUpdate(E, I) {
      const B = u.current?.read(() => uv(E, I));
      B ? this.applyUpdate(B) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${E}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (Je) {
        Wn("get the selection");
        return;
      }
      const E = u.current;
      if (!E) return;
      E.read(() => {
      });
      const I = jt();
      return !I || no(I) ? E.read(() => Rl(ne)) : Ur(E, "getSelection");
    },
    setSelection(E) {
      if (Je) {
        Wn("set the selection");
        return;
      }
      const I = Dr(E);
      if (!I) {
        J?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      u.current?.update(() => {
        const B = ql(I, ne);
        B !== void 0 && (xn(B), (!Ei().isEditable() || Ff(B.anchor) && Ff(B.focus)) && u.current?.dispatchCommand(cr, void 0));
      });
    },
    setAnnotation(E, I, B, W, ue) {
      if (Je) {
        Wn("set an annotation");
        return;
      }
      let Be, Ge, yr, zi;
      typeof W == "function" || W === void 0 ? (Be = W, Ge = ue) : (Be = W.onClick, Ge = W.onRemove, yr = W.onMouseEnter, zi = W.onMouseLeave);
      const ji = Dr(E);
      if (!ji) {
        J?.warn(
          `setAnnotation refused for ${I} "${B}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        ji,
        Du(I),
        B,
        Be,
        Ge,
        yr,
        zi
      );
    },
    removeAnnotation(E, I) {
      f.current?.removeAnnotation(Du(E), I);
    },
    formatPara(E) {
      Lr("format a paragraph"), u.current?.update(() => {
        const I = w();
        if (!N(I)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${E}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        Cb(I, () => ms(E));
        const B = w();
        if (!N(B)) return;
        const W = /* @__PURE__ */ new Set();
        B.getNodes().forEach((ue) => {
          const Be = ue.getTopLevelElement();
          se(Be) && W.add(Be);
        }), W.forEach((ue) => Pm(ue, E, ne));
      });
    },
    getElementByKey(E) {
      return u.current?.read(
        () => u.current?.getElementByKey(E) ?? void 0
      );
    },
    removeCharacterMarker(E) {
      if (ye) throw new Error("Cannot remove character marker in readonly mode");
      gt(E);
      let I = !1;
      return u.current?.update(
        () => {
          const B = w();
          N(B) && (I = Gg(B, E, ne));
        },
        { discrete: !0 }
      ), I;
    },
    replaceCharacterMarker(E, I) {
      if (ye) throw new Error("Cannot replace character marker in readonly mode");
      gt(E), gt(I);
      let B = !1;
      return u.current?.update(
        () => {
          const W = w();
          N(W) && (B = xE(W, E, I));
        },
        { discrete: !0 }
      ), B;
    },
    extendCharacterMarker(E, I) {
      if (ye) throw new Error("Cannot extend character marker in readonly mode");
      gt(E), I?.forEach(
        (W) => gt(W)
      );
      let B = !1;
      return u.current?.update(
        () => {
          const W = w();
          N(W) && (B = vE(
            W,
            E,
            I,
            ne
          ));
        },
        { discrete: !0 }
      ), B;
    },
    insertMarker(E) {
      if (ye) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!Ec(E, ut.extraValidMarkers))
        throw new Error(`Unsupported marker '${E}'`);
      const I = Ac(
        E,
        y,
        ne,
        ut,
        J,
        void 0,
        At
      );
      return I.action({ editor: u.current, reference: r }), I.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!me)
        return u.current?.getEditorState().read(() => N1());
    },
    applyMarkerMenuSelection(E, I) {
      if (me) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (E.kind !== "closeTag" && !Ec(E.marker, ut.extraValidMarkers))
        throw new Error(`Unsupported marker '${E.marker}'`);
      let B;
      return u.current.update(() => {
        B = $1(E, I, r, {
          expandedNoteKeyRef: y,
          viewOptions: ne,
          nodeOptions: ut,
          logger: c,
          styleInfo: At
        });
      }), B;
    },
    splitParagraphWithMarker(E) {
      if (me) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        $m(E, ne);
      });
    },
    commitTypedMarker(E, I) {
      if (me) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let B = !1;
      return u.current.update(() => {
        B = R1(E, I), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(E) {
      if (me) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let I = !1;
      return u.current.update(() => {
        I = Rm(E), I || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), I;
    },
    insertNote(E, I, B) {
      Lr("insert a note");
      const W = B && Dr(B);
      if (B && !W) {
        J?.warn(
          `insertNote refused for \\${E}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      u.current?.update(() => {
        const ue = ng(
          E,
          I,
          W,
          r,
          ne,
          ut,
          J
        );
        ue && !ue.getIsCollapsed() && (y.current = ue.getKey());
      });
    },
    selectNote(E) {
      u.current?.update(() => {
        const I = xd(E);
        I && (d_(I, ne), I.getIsCollapsed() || (y.current = I.getKey()));
      });
    },
    getNoteOps(E) {
      return u.current?.read(() => {
        const I = xd(E);
        if (I)
          return Al(I);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Ir.current = mr, jc(d, () => mr), j(() => {
    const E = u.current;
    if (E)
      return E.registerUpdateListener(({ editorState: I }) => {
        I.read(() => {
          const B = w();
          if (!N(B) || !B.isCollapsed()) return;
          const W = B.focus.getNode();
          C(W) && (S.current = { key: W.getKey(), offset: B.focus.offset });
        });
      });
  }, []), j(() => {
    const E = u.current;
    if (E)
      return E.registerUpdateListener(({ tags: I, dirtyElements: B, dirtyLeaves: W }) => {
        B.size === 0 && W.size === 0 || I.has(Xc) || I.has(di) || wu.some((ue) => I.has(ue)) && (m.current = !0);
      });
  }, []);
  const Gn = de(
    (E, I, B, W) => {
      if (Je) return;
      const ue = Zs.deserializeEditorState(E, ne);
      if (ue) {
        const Be = !Pt(h.current, ue);
        if (Be && (h.current = ue), Be || !Pt(D, ue)) {
          const Ge = ud(W, E);
          k.current = ue, s?.(ue, W, "local", Ge);
        }
      }
    },
    [D, s, ne, Je]
  );
  j(() => {
    const E = u.current;
    if (!(!E || !s))
      return E.registerUpdateListener(({ tags: I, dirtyElements: B, dirtyLeaves: W }) => {
        !I.has(Jc) && (B.size === 0 && W.size === 0 || I.has(di) || !wa(E)?.size) || queueMicrotask(() => {
          const ue = zt();
          !ue || Pt(k.current, ue) || (k.current = ue, s(ue, void 0, "local", void 0));
        });
      });
  }, [s, zt]);
  const cn = de(
    (E) => {
      oe(E.contextMarker), o?.(E);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Se(dp, { initialConfig: rr, children: [
      /* @__PURE__ */ _($C, { isEditable: !ye }),
      /* @__PURE__ */ Se("div", { className: "editor-container", children: [
        Z ? /* @__PURE__ */ _(Cg, { onStateChange: cn }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (ye ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              bP,
              {
                ref: p,
                editorRef: Ir,
                isReadonly: ye,
                onStateChange: cn
              }
            )
          }
        ),
        /* @__PURE__ */ Se("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(pp, { editorRef: u }),
          /* @__PURE__ */ _(
            _b,
            {
              contentEditable: /* @__PURE__ */ _(
                fp,
                {
                  className: `editor-input usfm ${Wv(ne).join(" ")}${ne.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ne.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: K
                }
              ),
              placeholder: /* @__PURE__ */ _(vP, {}),
              ErrorBoundary: hp
            }
          ),
          Z && /* @__PURE__ */ _(RC, {}),
          /* @__PURE__ */ _(gp, {}),
          r && n && /* @__PURE__ */ _(QA, { scrRef: r, onScrRefChange: n }),
          r && !Z && /* @__PURE__ */ _(
            sM,
            {
              trigger: Re,
              scrRef: r,
              contextMarker: fe,
              getMarkerAction: (E) => Ac(
                E,
                y,
                ne,
                ut,
                J,
                void 0,
                At
              ),
              editableHarness: tr
            }
          ),
          /* @__PURE__ */ _(
            DC,
            {
              scripture: D,
              scriptureRef: h,
              nodeOptions: ut,
              editorAdaptor: en,
              viewOptions: ne,
              logger: J
            },
            Q
          ),
          /* @__PURE__ */ _(iS, { onChange: Ki, viewOptions: ne }),
          /* @__PURE__ */ _(
            R_,
            {
              onChange: Gn,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: wu
            }
          ),
          /* @__PURE__ */ _(EE, { viewOptions: ne }),
          /* @__PURE__ */ _(O_, { ref: f, logger: J, viewOptions: ne }),
          /* @__PURE__ */ _(cC, { viewOptions: ne }),
          /* @__PURE__ */ _(vC, {}),
          /* @__PURE__ */ _(AC, {}),
          ne?.markerMode !== "editable" && /* @__PURE__ */ _(PC, { logger: J }),
          /* @__PURE__ */ _(qC, { options: Bs }),
          /* @__PURE__ */ _(LC, {}),
          /* @__PURE__ */ _(I1, {}),
          /* @__PURE__ */ _(
            dA,
            {
              viewOptions: ne,
              getMarker: ve,
              logger: J,
              markerSettleDelayMs: da
            }
          ),
          /* @__PURE__ */ _(
            yA,
            {
              styleInfo: At,
              viewOptions: ne,
              logger: J
            }
          ),
          /* @__PURE__ */ _(
            UC,
            {
              expandedNoteKeyRef: y,
              nodeOptions: ut,
              viewOptions: ne,
              logger: J
            }
          ),
          /* @__PURE__ */ _(nS, {}),
          /* @__PURE__ */ _(nC, {}),
          /* @__PURE__ */ _(Z_, {}),
          /* @__PURE__ */ _(CA, { viewOptions: ne, logger: J }),
          /* @__PURE__ */ _(sS, {}),
          /* @__PURE__ */ _(WS, { structureProtectionMode: qe }),
          /* @__PURE__ */ _(HS, { textDirection: re }),
          /* @__PURE__ */ _(JS, {}),
          /* @__PURE__ */ _(nM, {}),
          l
        ] }),
        pe && /* @__PURE__ */ _(uP, {})
      ] })
    ] }, ne.verseLayout ?? "inline")
  );
}), A0 = Ln(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(yy, { ref: r, ...i });
});
function by() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Io(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? by() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function ky(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? by() : r,
    quote: e,
    type: "thread"
  };
}
function Kf(e) {
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
function Ja(e) {
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
    this._comments = t, Ja(this);
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
          const c = Kf(a);
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
    this._comments = i, Ja(this);
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
          const c = Kf(a);
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
    return this._comments = n, Ja(this), t.type === "comment" ? {
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
    return t !== null ? t.doc.get("comments", Au) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Pu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Au();
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
      Ub,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Rt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Fb) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const h = p.insert, m = p.retain, y = p.delete, x = d.parent, S = d === r ? void 0 : x instanceof Pu && this._comments.find((M) => M.id === x.get("id"));
              if (Array.isArray(h)) {
                const M = f;
                h.slice().reverse().forEach(($) => {
                  const A = $.get("id"), U = $.get("type") === "thread" ? ky(
                    $.get("quote"),
                    $.get("comments").toArray().map(
                      (D) => Io(
                        D.get("content"),
                        D.get("author"),
                        D.get("id"),
                        D.get("timeStamp"),
                        D.get("deleted")
                      )
                    ),
                    A
                  ) : Io(
                    $.get("content"),
                    $.get("author"),
                    A,
                    $.get("timeStamp"),
                    $.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(U, S, M);
                  });
                });
              } else if (typeof m == "number")
                f += m;
              else if (typeof y == "number")
                for (let M = 0; M < y; M++) {
                  const $ = S === void 0 || S === !1 ? this._comments[f] : S.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread($, S);
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
function SP(e) {
  const [t, r] = he(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function MP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Y(null);
  return j(() => {
    i.current !== null && i.current.focus();
  }, []), j(() => {
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
  }, [n, e]), /* @__PURE__ */ _("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Se("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function EP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return kn(
    /* @__PURE__ */ _(MP, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Ty() {
  const [e, t] = he(null), r = de(() => {
    t(null);
  }, []), n = De(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _(EP, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = de(
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
const AP = {
  ...em,
  paragraph: "CommentEditorTheme__paragraph"
};
function PP(...e) {
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
  return /* @__PURE__ */ _(
    "button",
    {
      disabled: i,
      className: PP(
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
function NP({
  className: e
}) {
  return /* @__PURE__ */ _(fp, { className: e || "ContentEditable__root" });
}
function wP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const zf = op("INSERT_INLINE_COMMAND");
function OP({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Y(null), s = de(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Ms(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ _("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ _("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ _("i", { className: "icon add-comment" }) }) });
}
function qP({ onEscape: e }) {
  const [t] = le();
  return j(() => t.registerCommand(
    sp,
    (r) => e(r),
    ui
  ), [t, e]), null;
}
function xy({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(dp, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: AP
  }, children: /* @__PURE__ */ Se("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      Ib,
      {
        contentEditable: /* @__PURE__ */ _(NP, { className: e }),
        placeholder: /* @__PURE__ */ _(wP, { children: s }),
        ErrorBoundary: hp
      }
    ),
    /* @__PURE__ */ _($b, { onChange: n }),
    /* @__PURE__ */ _(gp, {}),
    t !== !1 && /* @__PURE__ */ _(Ob, {}),
    /* @__PURE__ */ _(qP, { onEscape: r }),
    /* @__PURE__ */ _(qb, {}),
    i !== void 0 && /* @__PURE__ */ _(pp, { editorRef: i })
  ] }) });
}
function vy(e, t) {
  return de(
    (r, n) => {
      r.read(() => {
        e(Lb()), t(!Db(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function RP({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Y(null), c = De(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Y(null), d = Cy(), u = de(() => {
    e.getEditorState().read(() => {
      const m = w();
      if (N(m)) {
        l.current = m.clone();
        const y = m.anchor, x = m.focus, S = Sb(
          e,
          y.getNode(),
          y.offset,
          x.getNode(),
          x.offset
        ), M = a.current;
        if (S !== null && M !== null) {
          const { left: $, bottom: A, width: k } = S.getBoundingClientRect(), U = Mb(e, S);
          let D = U.length === 1 ? $ + k / 2 - 125 : $ - 125;
          D < 10 && (D = 10), M.style.left = `${D}px`, M.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const G = U.length, { container: Q } = c, ce = c.elements, fe = ce.length;
          for (let oe = 0; oe < G; oe++) {
            const me = U[oe];
            let qe = ce[oe];
            qe === void 0 && (qe = document.createElement("span"), ce[oe] = qe, Q.appendChild(qe));
            const K = `position:absolute;top:${me.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${me.left}px;height:${me.height}px;width:${me.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            qe.style.cssText = K;
          }
          for (let oe = fe - 1; oe >= G; oe--) {
            const me = ce[oe];
            Q.removeChild(me), ce.pop();
          }
        }
      }
    });
  }, [e, c]);
  Ms(() => {
    u();
    const m = c.container, y = document.body;
    return y !== null ? (y.appendChild(m), () => {
      y.removeChild(m);
    }) : () => {
    };
  }, [c.container, u]), j(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (m) => (m.preventDefault(), t(), !0), p = () => {
    if (s) {
      let m = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      m.length > 100 && (m = m.slice(0, 99) + "…"), r(
        ky(m, [Io(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = vy(i, o);
  return /* @__PURE__ */ Se("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      xy,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Se("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ _(tn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ _(
        tn,
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
function $P({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Y(null), c = Cy(), l = vy(i, o);
  return /* @__PURE__ */ Se(Tn, { children: [
    /* @__PURE__ */ _(
      xy,
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
      tn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Io(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(mb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function _y({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Se(Tn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Se("div", { className: "Modal__content", children: [
      /* @__PURE__ */ _(
        tn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ _(
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
function jf({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = he(0);
  j(() => {
    const d = () => {
      s(performance.timeOrigin + performance.now());
    };
    d();
    const u = window.setInterval(d, 6e4);
    return () => {
      window.clearInterval(u);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Ty();
  return /* @__PURE__ */ Se("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Se("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Se("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Se(Tn, { children: [
      /* @__PURE__ */ _(
        tn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ _(
              _y,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
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
function IP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = he(0), [l, d] = Ty(), u = De(
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
  }, [a]), /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Se(
      "li",
      {
        onClick: () => {
          const m = s.get(p);
          if (m !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const x = Array.from(m)[0], S = X(x);
                be(S) && S.selectStart();
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
          /* @__PURE__ */ Se("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Se("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ _("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ _(
              tn,
              {
                onClick: () => {
                  d("Delete Thread", (m) => /* @__PURE__ */ _(
                    _y,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: m
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ _("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((m) => /* @__PURE__ */ _(
            jf,
            {
              comment: m,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            m.id
          )) }),
          /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
            $P,
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
      jf,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
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
  const s = Y(null), o = r.length === 0;
  return /* @__PURE__ */ Se("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ _("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ _(
      IP,
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
function Cy() {
  const e = mp(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function DP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = mp(), [a] = le(), c = De(() => {
    const D = new CP(a, s);
    return r && D.registerOnChange(r), t?.(D), D;
  }, [a, s, r, t]), l = SP(c), d = De(() => /* @__PURE__ */ new Map(), []), [u, f] = he(), [p, h] = he([]), [m, y] = he(!1), [x, S] = he(!1), { yjsDocMap: M } = o;
  j(() => {
    if (e) {
      const D = e("comments", M);
      return c.registerCollaboration(D);
    }
    return () => {
    };
  }, [c, e, M]);
  const $ = de(() => {
    a.update(() => {
      const D = w();
      D !== null && (D.dirty = !0);
    }), y(!1);
  }, [a]), A = de(
    (D, G) => {
      if (D.type === "comment") {
        const Q = c.deleteCommentOrThread(D, G);
        if (!Q)
          return;
        const { markedComment: ce, index: fe } = Q;
        c.addComment(ce, G, fe);
      } else {
        c.deleteCommentOrThread(D);
        const Q = G !== void 0 ? G.id : D.id, ce = d.get(Q);
        ce !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const fe of ce) {
              const oe = X(fe);
              be(oe) && (oe.deleteID(Wr, Q), oe.hasNoIDsForEveryType() && go(oe));
            }
          });
        });
      }
    },
    [c, a, d]
  ), k = de(
    (D, G, Q, ce) => {
      c.addComment(D, Q), G && (a.update(() => {
        N(ce) && tl(ce, Wr, D.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const D = [];
    let G;
    for (const Q of p) {
      const ce = d.get(Q);
      if (ce !== void 0)
        for (const fe of ce) {
          const oe = a.getElementByKey(fe);
          oe !== null && (oe.classList.add("selected"), D.push(oe), G = window.setTimeout(() => {
            S(!0);
          }, 0));
        }
    }
    return () => {
      G !== void 0 && window.clearTimeout(G);
      for (const Q of D)
        Q.classList.remove("selected");
    };
  }, [p, a, d]), j(() => {
    if (!a.hasNodes([et]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const D = /* @__PURE__ */ new Map();
    return Qe(
      up(
        a,
        et,
        (G) => mi(G.getTypedIDs()),
        (G, Q) => {
          for (const [ce, fe] of Object.entries(G.getTypedIDs()))
            fe.forEach((oe) => {
              Q.addID(ce, oe);
            });
        }
      ),
      a.registerMutationListener(
        et,
        (G) => {
          a.getEditorState().read(() => {
            for (const [Q, ce] of G) {
              const fe = X(Q);
              let oe = [];
              ce === "destroyed" ? oe = D.get(Q) ?? [] : be(fe) && (oe = fe.getTypedIDs()[Wr] ?? []);
              for (const me of oe) {
                let qe = d.get(me);
                D.set(Q, oe), ce === "destroyed" ? qe !== void 0 && (qe.delete(Q), qe.size === 0 && d.delete(me)) : (qe === void 0 && (qe = /* @__PURE__ */ new Set(), d.set(me, qe)), qe.has(Q) || qe.add(Q));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: G, tags: Q }) => {
        G.read(() => {
          const ce = w();
          let fe = !1, oe = !1;
          if (N(ce)) {
            const me = ce.anchor.getNode();
            if (C(me)) {
              const qe = Mk(me, Wr, ce.anchor.offset) ?? [];
              qe !== null && (h(qe), fe = !0), ce.isCollapsed() || (f(me.getKey()), oe = !0);
            }
          }
          fe || h((me) => me.length === 0 ? me : []), oe || f(null), !Q.has("collaboration") && N(ce) && y(!1);
        });
      }),
      a.registerCommand(
        zf,
        () => {
          const G = window.getSelection();
          return G !== null && G.removeAllRanges(), y(!0), !0;
        },
        vn
      )
    );
  }, [a, d]);
  const U = () => {
    a.dispatchCommand(zf, void 0);
  };
  return /* @__PURE__ */ Se(Tn, { children: [
    m && kn(
      /* @__PURE__ */ _(
        RP,
        {
          editor: a,
          cancelAddComment: $,
          submitAddComment: k
        }
      ),
      document.body
    ),
    u != null && !m && kn(
      /* @__PURE__ */ _(
        OP,
        {
          anchorKey: u,
          editor: a,
          showComments: x,
          onAddComment: U
        }
      ),
      document.body
    ),
    n !== null && kn(
      /* @__PURE__ */ _(
        tn,
        {
          className: `CommentPlugin_ShowCommentsButton ${x ? "active" : ""}`,
          onClick: () => S(!x),
          title: x ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    x && kn(
      /* @__PURE__ */ _(
        LP,
        {
          comments: l,
          submitAddComment: k,
          deleteCommentOrThread: A,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function UP() {
  const e = Y(void 0), t = de((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function FP(e, t) {
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
function KP(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      FP(r, t);
    };
  }, [t, e]);
}
const P0 = Ln(function(t, r) {
  const n = Y(null), i = Y(!0), s = Y(null), [o, a] = he(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: h, view: m } = {} } = t, y = (h ?? !1) || xs(m), [x, S] = UP();
  KP(f, x), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(A), p || console.warn(A);
    }
  }, [p]), jc(r, () => ({
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
    setUsj(A) {
      n.current?.setUsj(A);
    },
    applyUpdate(A, k) {
      n.current?.applyUpdate(A, k);
    },
    replaceEmbedUpdate(A, k) {
      return n.current?.replaceEmbedUpdate(A, k);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(A) {
      n.current?.setSelection(A);
    },
    setAnnotation(A, k, U, D, G) {
      typeof D == "function" || D === void 0 ? n.current?.setAnnotation(A, k, U, D, G) : n.current?.setAnnotation(A, k, U, D);
    },
    removeAnnotation(A, k) {
      n.current?.removeAnnotation(A, k);
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
    replaceCharacterMarker(A, k) {
      return n.current?.replaceCharacterMarker(A, k) ?? !1;
    },
    extendCharacterMarker(A, k) {
      return n.current?.extendCharacterMarker(A, k) ?? !1;
    },
    insertMarker(A) {
      return n.current?.insertMarker(A);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(A, k) {
      return n.current?.applyMarkerMenuSelection(A, k);
    },
    splitParagraphWithMarker(A) {
      n.current?.splitParagraphWithMarker(A);
    },
    commitTypedMarker(A, k) {
      return n.current?.commitTypedMarker(A, k) ?? !1;
    },
    commitTypedCloser(A) {
      return n.current?.commitTypedCloser(A) ?? !1;
    },
    insertNote(A, k, U) {
      n.current?.insertNote(A, k, U);
    },
    selectNote(A) {
      n.current?.selectNote(A);
    },
    getNoteOps(A) {
      return n.current?.getNoteOps(A);
    },
    setComments(A) {
      x.current?.setComments(A), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const M = de(
    (A, k, U, D) => {
      if (!d) return;
      const G = x.current?.getComments();
      d(A, G, k, U, D);
    },
    [x, d]
  ), $ = de(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = x.current?.getComments();
    l(A);
  }, [x, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(Rb, { children: /* @__PURE__ */ Se(yy, { ref: n, onUsjChange: M, ...f, children: [
    /* @__PURE__ */ _(
      DP,
      {
        setCommentStore: S,
        onChange: $,
        showCommentsContainerRef: y ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ _("div", { ref: s, className: "comment-container" })
  ] }) });
});
function bn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function Sy(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function zP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const jP = /^[#\w().,%/\s-]+$/;
function kr(e) {
  return e != null;
}
const BP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, VP = {
  left: "right",
  right: "left"
}, zc = ".editor-input.usfm", WP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function HP(e) {
  return WP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${zc}".`
  ), zc);
}
function GP(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${Sy(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (jP.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), kr(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), kr(t.firstLineIndent) && i.push(`text-indent: ${bn(t.firstLineIndent * 20 * r)}vw`), kr(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${bn(t.leftMargin * 20 * r)}vw`), kr(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${bn(t.rightMargin * 20 * r)}vw`
  ), kr(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${bn(t.spaceBefore * r)}pt`), kr(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${bn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = BP[n ? VP[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const Bf = { c: 150, ca: 133, cp: 150 };
function Vf(e, t) {
  return e && kr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function JP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && kr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Vf(e.markers.c, Bf.c);
  return ["ca", "cp"].map((i) => {
    const s = Vf(
      e.markers[i],
      Bf[i]
    ), o = bn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function N0(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = zc } = t, s = HP(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${Sy(e.defaultFont)}"`), kr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${bn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = GP(c, l, r, n);
    d.length > 0 && o.push(`${s} .usfm_${zP(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...JP(e, s)), o.join(`
`);
}
export {
  Zh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  A0 as Editorial,
  fo as GENERATOR_NOTE_CALLER,
  bp as HIDDEN_NOTE_CALLER,
  P0 as Marginal,
  b as MarkerType,
  Xh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Qh as STANDARD_VIEW_MODE,
  _o as defaultStyleInfo,
  E0 as directionToNames,
  __ as filterAndRankItems,
  N0 as generateUsjCss,
  S0 as getDefaultViewMode,
  Zo as getDefaultViewOptions,
  zE as getEnterMenuItems,
  KE as getMarkerMenuItems,
  M0 as getViewMode,
  eg as getViewOptions,
  xs as isBlockVerseLayout,
  Br as isInsertEmbedOpOfType,
  zv as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
