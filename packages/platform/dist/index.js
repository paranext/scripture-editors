import { jsx as _, jsxs as Se, Fragment as kn } from "react/jsx-runtime";
import { forwardRef as In, useState as he, useRef as Y, useCallback as ue, useEffect as j, useMemo as De, memo as Ky, createContext as Bf, useContext as Vf, Children as zy, isValidElement as jy, cloneElement as By, useImperativeHandle as Bc, useLayoutEffect as Ms } from "react";
import { assertSafeKey as Be, isValidBookCode as Vy, MARKER_OBJECT_PROPS as Wy, USJ_VERSION as xr, USJ_TYPE as vr, isUsjClosingMarkerLocation as Wf, isUsjTextContentLocation as Vc, indexesFromUsjJsonPath as Mi, isUsjAttributeKeyLocation as Su, isUsjAttributeMarkerLocation as Hy, isUsjClosingAttributeMarkerLocation as Gy, isUsjMarkerLocation as Jy, isUsjPropertyValueLocation as Yy, getUsjDocumentLocationTypeName as Xy, usjJsonPathFromIndexes as hn, EMPTY_USJ as Hf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as je, $parseSerializedNode as Es, DecoratorNode as As, ElementNode as Zt, isHTMLElement as Ln, TextNode as ze, $isRangeSelection as N, $isElementNode as R, $isTextNode as C, createState as Io, $getState as te, ParagraphNode as Wc, $isRootNode as Gf, $createTextNode as ke, $getSelection as w, $setState as bt, $getCommonAncestor as Qy, $isLineBreakNode as Lo, NODE_STATE_KEY as Ps, $getEditor as Ei, $hasUpdateTag as Zy, $getNodeByKey as X, $getRoot as Ee, $createRangeSelection as Do, $createPoint as Mu, $setSelection as Tn, $getCharacterOffsets as Jf, KEY_DOWN_COMMAND as Ar, COMMAND_PRIORITY_HIGH as Ue, HISTORY_MERGE_TAG as Yf, CLICK_COMMAND as Uo, COMMAND_PRIORITY_EDITOR as xn, isDOMNode as Xf, $getNearestNodeFromDOMNode as Ns, CONTROLLED_TEXT_INSERTION_COMMAND as Hc, PASTE_COMMAND as kr, COMMAND_PRIORITY_CRITICAL as Tr, CUT_COMMAND as vn, DROP_COMMAND as Gc, DELETE_CHARACTER_COMMAND as eb, DELETE_WORD_COMMAND as tb, DELETE_LINE_COMMAND as rb, $isDecoratorNode as Qf, COPY_COMMAND as Fo, COMMAND_PRIORITY_NORMAL as ui, SELECTION_CHANGE_COMMAND as cr, BLUR_COMMAND as Jc, $addUpdateTag as _n, SKIP_DOM_SELECTION_TAG as nb, CLEAR_HISTORY_COMMAND as ib, COMMAND_PRIORITY_LOW as Rt, $getPreviousSelection as sb, $isRootOrShadowRoot as ob, CAN_UNDO_COMMAND as ab, CAN_REDO_COMMAND as cb, $isNodeSelection as Zf, DRAGSTART_COMMAND as lb, $createNodeSelection as ep, getDOMSelectionFromTarget as ub, $onUpdate as db, KEY_ENTER_COMMAND as tp, LineBreakNode as rp, $copyNode as fb, FOCUS_COMMAND as pb, KEY_ESCAPE_COMMAND as np, INSERT_PARAGRAPH_COMMAND as ao, createCommand as ip, HISTORIC_TAG as Yc, createEditor as hb, UNDO_COMMAND as sp, REDO_COMMAND as op, CLEAR_EDITOR_COMMAND as gb } from "lexical";
import { addClassNamesToElement as Qn, removeClassNamesFromElement as xa, $findMatchingParent as nt, $dfsIterator as ap, $dfs as Ai, mergeRegister as Xe, registerNestedElementResolver as cp, $unwrapNode as Ya, IS_APPLE as co } from "@lexical/utils";
import { useLexicalNodeSelection as mb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Pt } from "fast-equals";
import ts from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as yb, $getHtmlContent as bb, $getLexicalContent as kb } from "@lexical/clipboard";
import { TreeView as Tb } from "@lexical/react/LexicalTreeView";
import * as xb from "react-dom";
import { createPortal as bn } from "react-dom";
import { LexicalComposer as lp } from "@lexical/react/LexicalComposer";
import { ContentEditable as up } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as dp } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as fp } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as pp } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as vb } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as _b, createDOMRange as Cb, createRectsFromDOMRange as Sb } from "@lexical/selection";
import { autoUpdate as Mb, computePosition as Eb, shift as Ab, flip as Pb } from "@floating-ui/dom";
import { $generateNodesFromDOM as Nb } from "@lexical/html";
import { AutoFocusPlugin as wb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Ob } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as hp, LexicalCollaboration as qb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Rb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as $b } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Ib, $isRootTextContentEmpty as Lb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Db } from "@lexical/yjs";
import { Array as Eu, Map as Au, YArrayEvent as Ub } from "yjs";
const va = (e) => je(Es(e)), Fb = {
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
function gp(e) {
  return Fb[e];
}
const O = " ", lo = "​", It = O, Xc = `${O}|`, or = "p", uo = "+", mp = "-", ws = "immutable-note-caller", fo = "chapter", Xa = "verse", Pu = "invalid", Kb = "text-spacing", zb = "formatted-font", jb = "marker-", Qc = "external-usj-mutation", Bb = "selection-change", Wr = "cursor-change", Qa = "annotation-change", di = "delta-change", yp = "marker-settle", Nu = [
  Qc,
  Bb,
  Wr,
  Qa,
  di
], Cn = "zmsc-s", fi = "zmsc-e", Vb = [Cn, fi], Wb = [
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
  fi
], bp = 1, Zc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Hb = Zc.filter((e) => e !== "sid" && e !== "eid");
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
    return Tp().updateFromJSON(t);
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
      version: bp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function kp(e) {
  return Vb.includes(e);
}
function Tp(e, t, r, n, i) {
  return je(new Jt(e, t, r, n, void 0, i));
}
function $e(e) {
  return e instanceof Jt;
}
const el = "f", Gb = [
  // Footnote
  el,
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
const Jb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], xp = 1;
class Ne extends Zt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = el, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (rs(t) === "crossref" ? mp : uo), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Xb(t) ? {
        conversion: Yb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return tl().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", rs(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", rs(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Ln(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", rs(this.getMarker()))), { element: r };
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
      version: xp
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
  return { node: tl(t, r, n) };
}
function tl(e, t, r, n, i) {
  return je(new Ne(e, t, r, n, i));
}
function Xb(e) {
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
}, ln = {
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
}, wu = {
  p: { children: ln },
  q: { children: ln },
  q1: { children: ln },
  q2: { children: ln },
  q3: { children: ln },
  q4: { children: ln },
  b: { children: ln },
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
  const t = Object.hasOwn(Za, e) ? Za[e] : void 0, r = Object.hasOwn(wu, e) ? wu[e] : void 0;
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
const vp = "v", _p = "c", un = "fig", Ou = "tr", ec = "esb", Cp = "esbe", Qb = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Zb = {
  "": "start",
  c: "center",
  r: "end"
};
function ek(e) {
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
const tk = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function rk(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === lo && s + 1 < e.length && qu(e[s + 1]) || (qu(o) ? (r || (i = t.length, t += o), r = !0) : tk.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function nk(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function ik(e, t) {
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
const sk = /^(?:qt[1-5]?|ts)-[se]$/;
function Ko(e) {
  return sk.test(e) || kp(e);
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
function ok(e, t, r) {
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
      a(rk(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: d } = ik(e, i + 1);
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
    if (l === vp) {
      const { word: m, next: y } = _a(e, i);
      i = y, n.push({ kind: "verse", number: m });
      continue;
    }
    if (l === _p) {
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
    if (h === b.Milestone || h === void 0 && Ko(l)) {
      const m = hk(e, c, l, i);
      if (m)
        n.push(m.token), m.ejectedText && o(m.ejectedText), i = m.next;
      else {
        const y = e.indexOf("\\", i), x = y === -1 ? e.length : y;
        o(e.slice(c, x)), i = x;
      }
      continue;
    }
    h === b.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : h === b.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : po(p) ? (u(), po(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === ec || l === Cp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
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
function po(e) {
  return Object.hasOwn(Ru, e) ? Ru[e] : void 0;
}
function ak(e) {
  return po(e) !== void 0;
}
const ck = /([-\w]+)\s*=\s*"(.*?)"/g, lk = /[\s\u200B]*[\n\r][\s\u200B]*/g, Sp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Os(e) {
  return Sp[e];
}
const uk = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function dk(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function zo(e, t, r = Sp[t]) {
  const n = e.replace(lk, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(ck)];
  if (s.length > 0) {
    if (!dk(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      uk.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function qs(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function fk(e) {
  const t = Pr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function pk(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = zo(e.slice(n + 1, i), r, qs(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function hk(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = zo(s.slice(o + 1), r, qs(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = pk(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function yr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", O);
}
function dn(e) {
  return e.content || (e.content = []), e.content;
}
function Pr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d;
  const u = () => d ? dn(d) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? dn(o[o.length - 1].object) : dn(s);
    if (o.length > 0)
      return dn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return u();
      i = { type: "para", marker: or, content: [] }, u().push(i);
    }
    return dn(i);
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
    A && h(yr(A)), A = "";
  }, D = (Z = !1) => {
    $?.type === "sidebar" ? A = "" : Z && A.endsWith(`
`) && (A = A.slice(0, -1)), $ = void 0, U();
  }, G = () => {
    if (!k)
      return;
    const Z = { type: "char", marker: k.marker, content: [] };
    k.value && (Z.content = [yr(k.value)]), p().push(Z), o.push({ object: Z }), k = void 0;
  }, Q = (Z, K) => {
    f = !1, S(), y(), x(!1), i = { type: "para", marker: Z, content: [] }, K && (i.content = [yr(K)]), u().push(i);
  }, ce = () => {
    k && (Q(k.marker, k.value), k = void 0);
  };
  let de;
  const oe = () => {
    if (de) {
      if (de.shape === "para")
        Q(un, de.value);
      else {
        const Z = { type: "char", marker: un, content: [] };
        de.value && (Z.content = [yr(de.value)]), p().push(Z), o.push({ object: Z });
      }
      de = void 0;
    }
  }, me = ok(e, t?.getMarker ?? ar, n);
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
          [k.attrName]: yr(k.value.trim())
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
        re === "" ? (Q(k.marker), k = void 0) : (Object.assign(k.target, { [k.attrName]: yr(re) }), k = void 0);
      } else {
        $ = void 0, (K.kind === "para" || K.kind === "chapter") && k.value.endsWith(`
`) && (k.value = k.value.slice(0, -1)), k.shape === "para" ? ce() : G(), Z--;
        continue;
      }
    }
    if (de) {
      if (K.kind === "text" || K.kind === "optbreak") {
        de.value += K.kind === "text" ? K.text : "//";
        continue;
      }
      if (K.kind === "end" && K.marker.replace(/^\+/, "") === un) {
        const re = de.value.indexOf("|"), Re = re >= 0 ? zo(de.value.slice(re + 1), un) : void 0;
        if (Re) {
          const st = {};
          for (const [Kt, At] of Object.entries(Re))
            st[Kt === "src" ? "file" : Kt] = At;
          const Ft = {
            type: "figure",
            marker: un,
            ...st
          }, fe = de.value.slice(0, re);
          fe && (Ft.content = [yr(fe)]), h(Ft), de = void 0;
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
        const re = K.kind === "para" || !K.isNested ? po(K.marker) : void 0;
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
    if (!s && !n && (K.kind === "charOpen" && !K.isNested && K.marker === un || K.kind === "para" && K.marker === un)) {
      y(), de = { shape: K.kind === "charOpen" ? "char" : "para", value: "" };
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
        re && h(yr(re));
        break;
      }
      case "para": {
        const re = !s && !n;
        if (re && K.marker === Ou) {
          y(), c || (c = { type: "table", content: [] }, u().push(c)), l = { type: "table:row", marker: Ou, content: [] }, dn(c).push(l), i = l, f = !1;
          break;
        }
        if (re && l) {
          const Re = Qb.exec(K.marker);
          if (Re && ek(Re)) {
            y();
            const [, st, Ft, fe] = Re, Kt = {
              type: "table:cell",
              marker: fe ? K.marker.slice(0, K.marker.indexOf("-")) : K.marker,
              align: Zb[st],
              content: []
            };
            fe && (Kt.colspan = String(Number(fe) + 1 - Number(Ft))), dn(l).push(Kt), i = Kt;
            break;
          }
        }
        if (S(), !n && K.marker === ec) {
          y(), x(!1), M(!1), d = { type: "sidebar", marker: ec, content: [] }, r.push(d), i = void 0, $ = d, f = !1;
          break;
        }
        if (K.marker === Cp && d) {
          y(), x(!1), M(!0), i = void 0;
          break;
        }
        Q(K.marker);
        break;
      }
      case "verse": {
        x(!1);
        const re = { type: "verse", marker: vp, number: K.number };
        h(re), $ = re;
        break;
      }
      case "chapter": {
        y(), x(!1), S(), M(!1), i = void 0;
        const re = {
          type: "chapter",
          marker: _p,
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
          const st = s ? a : 0;
          m(st), o.length = st;
        }
        const re = p(), Re = { type: "char", marker: K.marker, content: [] };
        re.push(Re), o.push({ object: Re });
        break;
      }
      case "end": {
        const re = K.marker.replace(/^\+/, ""), Re = s ? a : 0, st = o.findLastIndex((Ft, fe) => fe >= Re && Ft.object.marker === re);
        st >= 0 ? (gk(o[st].object), m(st + 1), o.length = st) : s && s.marker === re ? x(!0) : (m(Re), o.length = Re, h({ type: "unmatched", marker: `${K.marker}*` }));
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
  if (de && oe(), k)
    if (k.shape === "para") {
      const Z = k.value.replace(/[\s\u200B]+$/, "");
      Z === "" ? Q(k.marker) : Object.assign(k.target, { [k.attrName]: yr(Z) }), k = void 0;
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
function gk(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = zo(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
function Me(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function rt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function $t(e, t) {
  let r = Me(e);
  return t && (r += `${O}${t}`), r += " ", r;
}
function St(e) {
  return " " + e + O;
}
const mk = 1;
class lr extends ze {
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
      version: mk
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
function tn(e) {
  return e.getTextContent() === gn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function yk(e) {
  e.setTextContent(gn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function gn(e, t, r = !1) {
  return t === "closing" ? rt(e, r) : t === "selfClosing" ? rt("") : Me(e, r);
}
const Vr = "internal-comment", bk = [Vr], Mp = Object.freeze({}), tc = Object.freeze({}), rc = Object.freeze({}), nc = Object.freeze({}), ic = Object.freeze({}), kk = 1, Zn = /* @__PURE__ */ new Map(), Hi = /* @__PURE__ */ new Map(), ei = /* @__PURE__ */ new Map(), ti = /* @__PURE__ */ new Map();
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
  constructor(t = Mp, r, n, i, s, o) {
    super(o), this.__typedIDs = Ys(t), this.__typedOnClicks = Ca(r), this.__typedOnRemoves = Sa(n), this.__typedOnMouseEnters = Ma(i), this.__typedOnMouseLeaves = Ea(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Ys(t.__typedIDs), n = Ca(t.__typedOnClicks), i = Sa(t.__typedOnRemoves), s = Ma(t.__typedOnMouseEnters), o = Ea(t.__typedOnMouseLeaves);
    return new Ze(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return bk.includes(t);
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
      version: kk
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Qn(n, fn(t.theme.typedMark, a)), c.length > 1 && Qn(n, fn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Qn(n, fn("annotationId", l));
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
      c !== l && (c === 0 ? l === 1 && Qn(r, d) : l === 0 && xa(r, d), c === 1 ? l === 2 && Qn(r, u) : l === 1 && xa(r, u));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || xa(r, fn("annotationId", h));
      for (const h of a)
        f.has(h) || Qn(r, fn("annotationId", h));
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
    const r = this.getWritable(), n = Ys(r.__typedIDs);
    r.__typedIDs = Ys(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && ho(i), i;
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
    Be(t), Be(r);
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && ho(s);
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
    Be(t), Be(r);
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
    Be(t), Be(r);
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
    Be(t), Be(r);
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
    Be(t), Be(r);
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
    const i = Tk(t, r);
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
    for (; be(t) && Iu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; be(r) && Iu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = xk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = vk(this.getTypedOnRemoves(), t);
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
function Ys(e = Mp) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Be(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Be(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Ca(e) {
  if (!e || e === tc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Be(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Be(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Sa(e) {
  if (!e || e === rc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Be(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Be(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ma(e) {
  if (!e || e === nc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Be(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Be(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ea(e) {
  if (!e || e === ic)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Be(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Be(s), i[s] = o;
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
function $u(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Tk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Iu(e, t) {
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
function fn(e, t) {
  return `${e}-${t}`;
}
function Lu(e) {
  return `external-${e}`;
}
function mi(e, t, r, n, i) {
  return je(new Ze(e, t, r, n, i));
}
function be(e) {
  return e instanceof Ze;
}
function jo(e) {
  return e?.type === Ze.getType();
}
function ho(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function rl(e, t, r, n, i, s, o) {
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
  t === Vr && R(m) && (u ? m.selectStart() : m.selectEnd());
}
function Sk(e, t, r) {
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
const Sn = Io("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Hr = Io("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ae = Io("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ur = "marker-trailing-space", Ep = 1, Mk = "attribute-run";
function Aa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Nr extends Zt {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Nr(r, n);
  }
  static importJSON(t) {
    return Ap(t.runKind).updateFromJSON(t);
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
    t.classList.add(Mk);
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
      version: Ep
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
function Ap(e) {
  return je(new Nr(e));
}
function Ke(e) {
  return e instanceof Nr;
}
const Pp = [
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
], Np = [
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
], Ek = [
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
  ...Pp,
  ...Np
], wp = 1, Ak = ["type", "marker", "content"];
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
    return t !== void 0 && (Ek.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Pp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Np.includes(t);
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
      span: (t) => Nk(t) ? {
        conversion: Pk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return _r().updateFromJSON(t);
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
    return r && Ln(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = this.getUnknownAttributes()?.closed === "false", i = _r(this.getMarker(), n ? { closed: "false" } : void 0);
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
function Pk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: _r(t) };
}
function _r(e, t) {
  return je(new xe(e, t));
}
function Nk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return xe.isValidMarker(t) && e.classList.contains(xe.getType());
}
function L(e) {
  return e instanceof xe;
}
function wk(e) {
  return e?.type === xe.getType();
}
const go = "v", Op = 1, Ok = [
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
    super(r ?? t, a), this.__marker = go, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ft(r, n, i, s, o, a, c);
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
      version: Op
    };
  }
}
function qp(e, t, r, n, i, s) {
  return je(new ft(e, t, r, n, i, s));
}
function Ae(e) {
  return e instanceof ft;
}
function Rp(e) {
  return e?.type === ft.getType();
}
const qk = /* @__PURE__ */ new Set(["closed"]);
function sr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !qk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function $p(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Ip(e) {
  const t = Object.keys(e).filter((n) => !Hb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Lp(e, t, r, n) {
  return $p(
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
function Rk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : os(e) === void 0 && Dp(e) === void 0;
}
function Dp(e) {
  return e.getChildren().find((t) => C(t) && te(t, ae) === "attribute");
}
function ps(e, t) {
  return $s(e.getNextSibling(), t);
}
const $k = /^[ \u00A0]+$/;
function nl(e) {
  if (tn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Me(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && $k.test(r.slice(t.length));
}
function $s(e, t) {
  let r, n, i, s;
  return Ke(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  nl(e) && (r = e, e = e.getNextSibling()), C(e) && te(e, ae) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && tn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Ik(e) {
  let t = e;
  for (; be(t); )
    t = t.getChildren()[0];
  return t;
}
function Gr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = Ik(t[r]);
  if (C(n) && n.getTextContent() === St(e.getCaller()))
    return n;
}
function Up(e) {
  const t = Gr(e);
  return t ? $s(t.getNextSibling(), "cat") : {};
}
function Pi(e) {
  const t = e.getFirstChild();
  if (!(!C(t) || P(t)) && te(t, ae) !== "attribute")
    return t;
}
function Fp(e) {
  const t = Pi(e);
  return t ? $s(t.getNextSibling(), "ca") : {};
}
function Kp(e) {
  const t = Pi(e);
  if (!t)
    return;
  const r = $s(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function zp(e) {
  const t = Kp(e);
  return t ? $s(t.getNextSibling(), "cp") : {};
}
function jp(e) {
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
function Bo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ke(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  nl(s) && (t = s, s = s.getNextSibling()), C(s) && te(s, ae) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && tn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const mo = "c", Bp = 1, Lk = [
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
    super(o), this.__marker = mo, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Et(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Vp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(fo, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Bp
    };
  }
}
function Vp(e, t, r, n, i) {
  return je(new Et(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof Et;
}
function Dk(e) {
  return e?.type === Et.getType();
}
const Wp = 1;
class Jr extends Wc {
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
    return or;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Wp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ht();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ht() {
  return je(new Jr());
}
function Yt(e) {
  return e instanceof Jr;
}
function Vo(e) {
  return e?.type === Jr.getType();
}
function yo(e) {
  return Yt(e) && Gf(e.getParent());
}
function Hp(e) {
  return be(e) || yo(e);
}
function Ni(e) {
  let t = e.getParent();
  for (; t && Hp(t); )
    t = t.getParent();
  return t;
}
function il(e) {
  return L(Ni(e));
}
function bo(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? il(t) : t.getChildren().some((i) => L(i) && i.getMarker() === r) ? !0 : void 0;
}
function Uk(e) {
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
function Fk(e) {
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
function sl(e, t) {
  if (e.getMarkerSyntax() !== "opening" || bo(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? bo(r, t) === !0 ? "spacer" : void 0 : Is(r) ? r.getTextContent().startsWith(O) ? void 0 : "prefix" : "spacer";
}
function Kk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && sl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Gp(e, t) {
  const r = w();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Jp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = sl(t, e);
    if (r !== void 0 && !Gp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        C(n) && n.setTextContent(O + n.getTextContent());
      } else
        t.insertAfter(ke(O));
  });
}
function Yp(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && sl(t, e) !== void 0 && Gp(t, e)) : !1;
}
const Xp = 1, zk = "marker", ol = Io("isGutterMarker", {
  parse: (e) => e === !0
});
class wr extends As {
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
      span: (t) => Wk(t) ? {
        conversion: jk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Cr().updateFromJSON(t);
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
    return r && Ln(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Xp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function jk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Cr(t, r) };
}
function Cr(e, t) {
  return je(new wr(e, t));
}
function Bk(e) {
  return bt(Cr(zk, e), ol, !0);
}
function Vk(e) {
  return vt(e) && te(e, ol);
}
function Wk(e) {
  return e?.tagName === "span";
}
function vt(e) {
  return e instanceof wr;
}
function Qp(e) {
  return e?.type === wr.getType();
}
const Hk = ["type", "marker", "content"], sc = "unknown", Zp = 1, Gk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Dn extends Zt {
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
    return new Dn(r, n, i, s);
  }
  static importDOM() {
    return {
      [sc]: (t) => Yk(t) ? {
        conversion: Jk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return al().updateFromJSON(t);
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
    return Gk.has(this.getTag());
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
      version: Zp
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
function Jk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: al(t, r) };
}
function al(e, t, r) {
  return je(new Dn(e, t, r));
}
function Yk(e) {
  return e?.tagName.toLowerCase() === sc;
}
function we(e) {
  return e instanceof Dn;
}
const Xk = "file", Qk = "src", Zk = "colspan", eT = "category", tT = "alt", rT = "closed", nT = "false";
function iT(e) {
  return e[rT] !== nT;
}
function sT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === Xk ? Qk : t,
    r
  ]));
}
function oT(e, t) {
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
function cl(e, t, r) {
  const n = r ?? {}, i = iT(n);
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
        opening: `\\${oT(t, n[Zk])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: sr(sT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [eT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + sr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [tT]: s, ...o } = n;
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
const Tt = { wantsRun: !1, valueText: void 0 }, Or = {};
function Pa(e, t) {
  if (t === "va")
    return e;
  const r = ps(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function ll(e) {
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
function Wo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = w();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function aT(e) {
  return Ke(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : C(e) && te(e, ae) === "attribute";
}
function cT(e) {
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
    if (!aT(t))
      return;
  }
}
function Uu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ae(t),
    ownerOf: (t) => {
      if (Ke(t))
        return t.getRunKind() === e ? Na(t) : void 0;
      const r = t.getParent();
      return Ke(r) ? r.getRunKind() === e ? Na(r) : void 0 : cT(t) === e ? Na(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ae(t))
        return Tt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Tt : { wantsRun: !0, valueText: O + r };
    },
    scanPieces: (t) => Ae(t) ? ps(Pa(t, e), e) : Or,
    graceSite: (t, r) => Ae(t) ? !r.opener && !r.closer ? ll(Pa(t, e)) : Wo(r) : !1,
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
const lT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => L(e),
  ownerOf: () => {
  },
  expectedPieces: () => Tt,
  scanPieces: () => Or,
  graceSite: (e) => L(e) && Yp(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, uT = {
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
  scanPieces: (e) => L(e) ? { value: Dp(e) } : Or,
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
function eh(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!C(e) || te(e, ae) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function dT(e) {
  const t = e.getParent();
  if (!z(t))
    return;
  const r = Gr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!eh(n))
        return;
    }
}
const fT = {
  kind: "cat",
  ownerPredicate: (e) => z(e),
  ownerOf: (e) => {
    if (Ke(e))
      return e.getRunKind() === "cat" && z(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ke(t) ? t.getRunKind() === "cat" && z(t.getParent()) ? t.getParent() ?? void 0 : void 0 : eh(e) ? dT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!z(e) || e.getIsCollapsed() !== !1)
      return Tt;
    const t = e.getCategory();
    return t === void 0 ? Tt : { wantsRun: !0, valueText: O + t };
  },
  scanPieces: (e) => z(e) ? Up(e) : Or,
  graceSite: (e, t) => {
    if (!z(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Gr(e);
      return r !== void 0 && ll(r);
    }
    return Wo(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => z(e) ? Gr(e) : void 0
  }
};
function pT(e) {
  return Ke(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : C(e) && te(e, ae) === "attribute";
}
function hT(e) {
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
function gT(e) {
  const t = e.getParent();
  if (!Ce(t))
    return;
  const r = Pi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!pT(n))
        return;
    }
}
function Fu(e) {
  const t = (r) => Ce(r) ? e === "ca" ? Pi(r) : Kp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ce(r),
    ownerOf: (r) => {
      if (Ke(r))
        return r.getRunKind() === e && Ce(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ke(n) ? n.getRunKind() === e && Ce(n.getParent()) ? n.getParent() ?? void 0 : void 0 : hT(r) === e ? gT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ce(r))
        return Tt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Tt : { wantsRun: !0, valueText: O + n };
    },
    scanPieces: (r) => Ce(r) ? e === "ca" ? Fp(r) : zp(r) : Or,
    graceSite: (r, n) => {
      if (!Ce(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && ll(i);
      }
      return Wo(n);
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
function th(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return C(e) && te(e, ae) === "attribute";
}
function mT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if ($e(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!th(t))
      return;
  }
}
const yT = {
  kind: "milestone",
  ownerPredicate: (e) => $e(e),
  ownerOf: (e) => {
    const t = Ke(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ke(e.getParent()) ? e.getParent() : th(e) ? e : void 0;
    if (!t || Ke(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ke(t) ? $e(r) ? r : void 0 : mT(t);
  },
  expectedPieces: (e) => {
    if (!$e(e))
      return Tt;
    const t = Lp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = sr(t, qs(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : O + r };
  },
  scanPieces: (e) => {
    if (!$e(e))
      return Or;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Bo(e);
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
    return Wo(t);
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
}, bT = cl("optbreak", void 0, void 0).opening, kT = {
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
  expectedPieces: () => ({ wantsRun: !0, valueText: bT }),
  scanPieces: (e) => we(e) ? { value: e.getFirstChild() ?? void 0 } : Or,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, TT = {
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
  scanPieces: () => Or,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, xT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => L(e),
  ownerOf: () => {
  },
  expectedPieces: () => Tt,
  scanPieces: () => Or,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, hs = [
  lT,
  uT,
  Uu("va"),
  Uu("vp"),
  fT,
  Fu("ca"),
  Fu("cp"),
  yT,
  kT,
  TT,
  xT
], vT = new Map(hs.map((e) => [e.kind, e]));
function Sr(e) {
  const t = vT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Yr(e) {
  for (const t of hs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function rh(e) {
  return Yr(e) !== void 0;
}
const ko = "unmatched", nh = 2;
function as(e) {
  return `\\${e}`;
}
class qr extends ze {
  __marker;
  constructor(t = "", r) {
    super(as(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new qr(r, n);
  }
  static importDOM() {
    return {
      [ko]: (t) => CT(t) ? {
        conversion: _T,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ul().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Pu), r.title = Ku(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Ku(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(ko);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Pu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: nh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function ih(e) {
  return e.getTextContent() === as(e.getMarker());
}
function Ku(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function _T(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: ul(t) };
}
function ul(e) {
  return je(new qr(e));
}
function CT(e) {
  return e?.tagName.toLowerCase() === ko;
}
function rn(e) {
  return e instanceof qr;
}
const gs = "id", sh = 1, ST = [
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
    return oh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Vy(t);
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
      version: sh
    };
  }
}
function oh(e, t) {
  return je(new Lt(e, t));
}
function ht(e) {
  return e instanceof Lt;
}
function ah(e) {
  return e?.type === Lt.getType();
}
const ch = 1, MT = "c", lh = "span";
class dr extends As {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = MT, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => uh(t) ? {
        conversion: ET,
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
    const t = document.createElement(lh);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(fo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Ln(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(fo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: ch
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
function ET(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: dl(t) };
}
function dl(e, t, r, n, i, s) {
  return je(new dr(e, t, r, n, i, s));
}
function uh(e) {
  return e ? e.classList.contains(fo) && e.tagName.toLowerCase() === lh : !1;
}
function Ls(e) {
  return e instanceof dr;
}
function AT(e) {
  return e?.type === dr.getType();
}
const dh = "table", oc = "immutable-table", fh = 1, PT = ["type", "marker", "content"];
class Un extends Zt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return oc;
  }
  static clone(t) {
    return new Un(t.__unknownAttributes, t.__key);
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
      type: oc,
      ...t !== void 0 && { unknownAttributes: t },
      version: fh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function NT(e) {
  return je(new Un(e));
}
function ph(e) {
  return e instanceof Un;
}
function wT(e) {
  return e?.type === oc;
}
const hh = "table:row", zu = "immutable-table-row", gh = 1, ac = "tr", OT = ["type", "marker", "content"];
class wi extends Zt {
  __marker;
  __unknownAttributes;
  constructor(t = ac, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return zu;
  }
  static clone(t) {
    return new wi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return qT().updateFromJSON(t);
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
      type: zu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: gh
    };
  }
}
function qT(e, t) {
  return je(new wi(e, t));
}
const mh = "table:cell", ju = "immutable-table-cell", yh = 1, cc = "tc1", RT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function $T(e) {
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
    return ju;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Oi(r, n, i, s, o);
  }
  static importJSON(t) {
    return IT().updateFromJSON(t);
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
      version: yh
    };
  }
}
function IT(e, t, r, n) {
  return je(new Oi(e, t, r, n));
}
const LT = [
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
], bh = 1, DT = ["type", "marker", "content"];
class Qe extends Wc {
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
    return new Qe(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (LT.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: UT,
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
    return r && Ln(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: bh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ms(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function UT(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ms(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ms(e, t) {
  return je(new Qe(e, t));
}
function se(e) {
  return e instanceof Qe;
}
function fl(e) {
  return e?.type === Qe.getType();
}
function Ho(e, t) {
  const r = e.getChildAtIndex(t);
  return C(r) ? r : void 0;
}
function Xt(e, t) {
  const r = Ho(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function ys(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function FT(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function KT(e) {
  return ys(e) ? void 0 : { closed: "false" };
}
function zT(e, t, r, n) {
  const i = t.getMarker(), s = il(t), o = FT(t);
  if (n) {
    e.append(ct(i, "opening", s));
    const [a] = r;
    Is(a) && !a.getTextContent().startsWith(O) && a.setTextContent(O + a.getTextContent());
  }
  e.append(...r), o && e.append(ct(i, "closing", s));
}
function Mn(e) {
  return nt(e, L) ?? void 0;
}
function pl(e) {
  let t = e.getParent();
  for (; L(t); )
    t = t.getParent();
  return t;
}
function lc(e) {
  const t = kh(e);
  return e.getChildren().every((r) => P(r) || t && te(r, ae) === "attribute" || C(r) && r.getTextContent().replaceAll(O, "") === "");
}
function kh(e) {
  return ys(e);
}
function jT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? sr(r, Os(e.getMarker())) : "";
  n !== "" && t.insertAfter(ke(n)), e.remove();
}
function BT(e, t) {
  if (ys(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ct(e.getMarker(), "closing", il(e)));
}
function VT(e, t) {
  return L(e) && !ys(e) && !ys(t);
}
function WT(e, t, r) {
  lc(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && Is(n) && !n.getTextContent().startsWith(O) && n.setTextContent(O + n.getTextContent()), e.append(...t);
}
function HT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = kh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = P(l) && l.getMarkerSyntax() === "closing", f = s && te(l, ae) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = VT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      WT(e, o, n);
    else {
      const l = _r(t.getMarker(), KT(t));
      zT(l, t, o, n), e.insertAfter(l), lc(l) ? l.remove() : c = l;
    }
  i && !a && BT(t, n), lc(t) && jT(t, c);
}
function yi(e, t) {
  let r = e.getParent();
  for (; L(r); )
    HT(e, r, t), r = e.getParent();
}
function hl(e) {
  if (C(e) && !P(e)) {
    const t = e.getTextContent().startsWith(O) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (R(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      hl(t);
      return;
    }
    e.selectEnd();
  }
}
const Th = /[ \u00A0]{2,}/g;
function GT(e) {
  return [...e.matchAll(Th)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function JT(e) {
  return e.replace(Th, (t) => t[0]);
}
const YT = "​", bi = YT;
var Bu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Bu || (Bu = {}));
var Vu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Vu || (Vu = {}));
function XT() {
  return ke(bi);
}
function QT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(bi, ""));
}
function Ds(e) {
  return e.length > 0 && e.includes(bi) && e.replaceAll(bi, "") === "";
}
function gl(e) {
  return C(e) && Ds(e.getTextContent());
}
function xh(e) {
  return Dk(e) || AT(e);
}
function Ve(e) {
  return Ce(e) || Ls(e);
}
function vh(e, t) {
  return e.find((r) => Ve(r) && r.getNumber() === t.toString());
}
function ZT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ve(r));
}
function Wu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function _h(e) {
  if (!e)
    return;
  if (Ve(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Ve(t); )
    t = t.getPreviousSibling();
  if (t && Ve(t))
    return t;
}
function Qt(e) {
  return nt(e, z) ?? void 0;
}
function ex(e) {
  return ht(e) || Ce(e) || L(e) || Ls(e) || Yt(e) || $e(e) || se(e) || z(e) || Ae(e) || we(e);
}
function Ch(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function tx(e) {
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
function rx(e) {
  return fl(e) || Vo(e);
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
function En(e, t) {
  const r = te(t, Sn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function nx(e, t) {
  const r = R(e) ? e : e.getParent(), n = R(t) ? t : t.getParent(), i = r && n ? Qy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function ix(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function An(e) {
  return e?.type === ze.getType();
}
function sx(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function ox(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Sh(e, t, r) {
  const n = Me(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function ax(e) {
  const t = e[Ps];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Mh(e) {
  return Rs(e) || Qp(e) && e.textType === "marker" || An(e) && ax(e) === "attribute" ? "" : An(e) && e.text !== O ? e.text : wk(e) ? e.children.map((t) => Mh(t)).join("") : "";
}
function cx(e) {
  return e.map((r) => Mh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function ml(e) {
  const t = [];
  for (const r of e) {
    if (!L(r))
      continue;
    const n = Eh(r);
    n !== It && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Eh(e) {
  return P(e) || fr(e) || C(e) && te(e, ae) === "attribute" ? "" : C(e) ? e.getTextContent() : R(e) ? e.getChildren().map((t) => Eh(t)).join("") : "";
}
function fr(e) {
  return vt(e) && e.getTextType() === "marker";
}
function Ut(e) {
  return P(e) || fr(e);
}
function Hu(e, t) {
  lx(e, t), e.setMarker(t);
}
function lx(e, t) {
  const r = e.getMarker(), n = Me(r), i = Me(r, !0), s = rt(r), o = rt(r, !0), a = xe.isNoteContentMarker(t);
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
        c.setTextContent(d ? Me(t, f) : rt(t, f));
      }
    }
  });
}
function Fe(e, t = Wy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Oe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Ah(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function yl(e) {
  if (!N(e))
    return Gu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !R(t) || e.anchor.type === "text" && !C(t)))
    return t ?? void 0;
  try {
    return Gu(e) ?? t ?? void 0;
  } catch (n) {
    if (Ah(n))
      return t ?? void 0;
    throw n;
  }
}
function ux(e, t) {
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
function bl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Ph(e) {
  return !!e && e.includes("-");
}
function Nh(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Gu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function To(e) {
  if (!e)
    return !1;
  if (Lo(e) || P(e) || fr(e) || Ke(e) || e.getType() === ws || vt(e) && e.getTextType() === "attribute")
    return !0;
  const t = Ni(e);
  if (Ce(t) || C(e) && z(t) && Gr(t)?.is(e))
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
function Go() {
  const e = ke(O);
  return bt(e, ae, ur), e.setMode("token"), e;
}
function dx(e) {
  const t = e.getTextContent();
  t.startsWith(O) || e.setTextContent(O + t);
}
function Fn(e) {
  return C(e) && te(e, ae) === ur;
}
function wh(e) {
  const t = e.getFirstChild();
  if (!Ut(t) || t === null || Fn(t.getNextSibling()))
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
function kl(e) {
  if (Ce(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!To(s)) {
      if (Hp(s)) {
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
function fx(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = Fk(i), o = t ? GT(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, d]) => c + d - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function Oh(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function px(e, t) {
  let r = t;
  for (const [n, i] of Oh(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function Ju(e, t) {
  let r = t;
  for (const [n, i] of Oh(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function nn(e, t) {
  return kl(e).map((r) => r.type === "element" ? r : fx(r.nodes, t));
}
function hx(e, t) {
  return kl(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function uc(e, t, r) {
  const n = Ni(e);
  if (!n)
    return;
  const i = nn(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: px(a, t) };
  }
}
function gx(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, Ju(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, Ju(r, t - r.start)];
}
function ns(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (yo(e)) {
    const s = e.getParentOrThrow();
    return n ? To(n) ? ns(e, t + 1, r) : Yu(s, n, r) : ns(s, e.getIndexWithinParent() + 1, r);
  }
  const i = nn(e, r);
  return n ? To(n) || yo(n) && !mx(i, n) ? ns(e, t + 1, r) : Yu(e, n, r) : { type: "index", index: i.length };
}
function mx(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || ki(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || ki(n.node, t.getKey())));
}
function Yu(e, t, r) {
  const n = nn(e, r);
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
function yx(e, t) {
  if (t <= 0)
    return [e, 0];
  const r = kl(e);
  if (r.length === 0 || t > r.length)
    return [e, e.getChildrenSize()];
  const n = r[t - 1], i = n.type === "element" ? n.node : n.nodes[n.nodes.length - 1], s = i ? Xu(e, i) : void 0;
  if (!s)
    return [e, e.getChildrenSize()];
  if (yo(s)) {
    const o = Xu(s, i);
    if (o)
      return [s, o.getIndexWithinParent() + 1];
  }
  return [e, s.getIndexWithinParent() + 1];
}
function Xu(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const pi = /* @__PURE__ */ new WeakMap();
function bx(e, t) {
  return pi.set(e, t), () => {
    pi.get(e) === t && pi.delete(e);
  };
}
function wa(e) {
  return pi.get(e);
}
function kx(e) {
  return pi.get(Ei())?.has(e.getKey()) ?? !1;
}
function Tx(e) {
  pi.get(Ei())?.add(e.getKey());
}
function xx(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function dc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Qu(e) {
  return /^\s/.test(e);
}
function Tl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Qu(t) || !Qu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Jo(e, t, r) {
  return r.wantsRun ? Tl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : xx(t);
}
function vx(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Tl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function qh(e, t) {
  return !dc(e.scanPieces(t));
}
function Us(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Jo(e, n, r))
    return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || ki(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function _x(e, t, r, n) {
  return !r.wantsRun || dc(n) || Zy(di) ? !1 : Ei().getEditorState().read(() => {
    const i = X(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : dc(e.scanPieces(i));
  });
}
function Cx(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Zu(e) {
  const t = ke(e);
  return bt(t, ae, "attribute"), t;
}
function Sx(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Ap(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function Mx(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    C(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Zu(n.valueText));
    return;
  }
  const l = Sx(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = ct(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : C(u) ? Tl(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Zu(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(ct(a === "selfClosing" ? "" : o(t), a));
}
function bs(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Jo(e, i, n) && !kx(t)) {
    if (_x(e, t, n, i)) {
      Tx(t);
      return;
    }
    if (!Us(e, t)) {
      if (!n.wantsRun) {
        Cx(i);
        return;
      }
      Mx(e, t, i, n);
    }
  }
}
function Ex(e, t, r) {
  bs(e, t), t.isAttached() && Us(e, t) && r.add(t.getKey());
}
function Rh(e) {
  if (!C(e))
    return !1;
  if (P(e) || Ae(e) || rn(e))
    return !0;
  const t = te(e, ae);
  return t === "attribute" || t === ur;
}
function xl(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && tn(e) && L(e.getParent())) : !1;
}
function Ax() {
  const e = w();
  return N(e) ? xl(e.focus.getNode(), e.focus.offset) : !1;
}
function $h(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return C(t) && Rh(t) ? t : void 0;
}
function Px(e) {
  const t = $h(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function Nx(e) {
  const t = $h(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function ed(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function td(e, t) {
  e.set(t.key, t.offset, t.type);
}
function wx(e, t) {
  let r = Nx(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!C(n))
      return;
    if (!Rh(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function rd(e, t) {
  const r = wx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Ih(e) {
  if (e.isCollapsed()) {
    const a = Px(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [ed(r), ed(n)], s = rd(r, "next"), o = rd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (td(r, i[0]), td(n, i[1]), !1) : !0;
}
const xo = "verse-block", Lh = 1, Ox = "verse-block";
class qi extends Zt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return xo;
  }
  static clone(t) {
    return new qi(t.__number, t.__key);
  }
  static importJSON(t) {
    return qx().updateFromJSON(t);
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
    return Nh(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(Ox), nd(t, this.__number), t;
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
      type: xo,
      number: this.getNumber(),
      version: Lh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function nd(e, t) {
  const { start: r, end: n } = Nh(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), id(e, "data-verse-start", i ? r : NaN), id(e, "data-verse-end", i ? n : NaN);
}
function id(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function qx(e) {
  return je(new qi(e));
}
function ks(e) {
  return e instanceof qi;
}
function Rx(e) {
  return e?.type === xo;
}
const $x = [
  Lt,
  dr,
  Et,
  ft,
  xe,
  Ne,
  Jt,
  lr,
  Dn,
  wr,
  qr,
  Qe,
  Jr,
  Un,
  wi,
  Oi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Nr,
  {
    replace: Wc,
    with: () => Ht(),
    withKlass: Jr
  }
], vo = {
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
}, Ix = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function Lx(e) {
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
      type: Ix[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ar(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function sd(e, t, r) {
  const n = {
    type: vr,
    version: xr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Vo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Dh = "v", Uh = 1, Dx = "verse-selected";
class _t extends As {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Dh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Kx(t) ? {
        conversion: Fx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return vl().updateFromJSON(t);
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
    return r && Ln(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Xa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? $t(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      lo + this.getNumber() + lo
    );
    return _(Ux, { nodeKey: this.getKey(), text: t });
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
      version: Uh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Ah(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Ux({ nodeKey: e, text: t }) {
  const [r] = mb(e);
  return _("span", { className: r ? Dx : void 0, children: t });
}
function Fx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: vl(t) };
}
function vl(e, t, r, n, i, s) {
  return je(new _t(e, t, r, n, i, s));
}
function Kx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Dh;
}
function Kn(e) {
  return e instanceof _t;
}
function zx(e) {
  return e?.type === _t.getType();
}
function Te(e) {
  return Ae(e) || Kn(e);
}
function Fh(e) {
  return Rp(e) || zx(e);
}
function jx(e) {
  return Bx(e).find((t) => se(t));
}
function Bx(e) {
  return e.some(ks) ? e.flatMap((t) => ks(t) ? t.getChildren() : t) : e;
}
function Yo(e) {
  return R(e) ? ks(e) ? e.getChildren().flatMap(Yo) : e.getChildren() : [];
}
function Vx(e, t) {
  return Yo(e).find((i) => Te(i) && bl(t, i.getNumber()));
}
function Wx(e, t) {
  return t === 0 ? jx(e) : e.map((r) => Vx(r, t)).filter((r) => r)[0];
}
function _o(e) {
  return Yo(e).find((r) => Te(r));
}
function Kh(e, t) {
  if (!R(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (Te(i))
      return i;
  }
}
function Hx(e) {
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
  for (; r && !Ve(r); ) {
    const n = _o(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function fc(e) {
  return Yo(e).findLast((t) => Te(t));
}
function Gx(e) {
  if (!Ae(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Jx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && R(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function Yx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Jx(t, e, r);
  if (C(e)) {
    const n = Gx(e);
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
function Xx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return od(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return Yx(e, t) ? { verseNum: n } : od(e);
}
function Qx(e) {
  return ex(e) || Kn(e);
}
function _l(e) {
  if (C(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(O) && e.setTextContent(`${t} `);
  }
}
function zh(e) {
  if (C(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function jh(e, t) {
  return e.getEditorState().read(() => !X(t));
}
function Zx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Cl(t, e);
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
      let s = ad(i);
      for (; s && !Ve(s); ) {
        const o = _o(s);
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
      const o = _o(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Ve(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function ev(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Cl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && R(i) && (n = Kh(i, r.getIndexWithinParent())), !n && i) {
      let o = cd(i);
      for (; o && !Ve(o); ) {
        const a = fc(o);
        if (a) {
          n = a;
          break;
        }
        o = cd(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ve(s); ) {
      const o = fc(s);
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
function Cl(e, t) {
  if (R(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && Te(n))
      return n;
    const i = Kh(e, t.anchor.offset);
    if (i)
      return i;
    const s = _o(e);
    if (s)
      return s;
  }
  return Sl(e);
}
function Sl(e) {
  if (!e || Ve(e))
    return;
  if (Te(e))
    return e;
  let t = Wu(e);
  for (; t; ) {
    if (Ve(t))
      return;
    if (Te(t))
      return t;
    const r = fc(t);
    if (r)
      return r;
    t = Wu(t);
  }
}
const tv = ["style"], rv = ["style", "code"], Co = ["style", "cid"], nv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], iv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], sv = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], ov = ["style", "caller", "category", "contents"], av = ["tag", "marker", "contents"], cv = [
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
function lv(e, t) {
  const r = X(e);
  if (!Mt(r))
    return;
  const n = Bh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Bh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = ap();
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
      if (Mr(l) || Mt(l))
        return n;
      Dt(l) && (a = l);
    }
    if (Dt(l) && (i.includes(l) || i.push(l)), Vh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Ml(l, t);
  }
  if (a)
    return n;
}
function ld(e, t, r = "delta-doc") {
  if (e.length < 2 || !fv(e[0]) || !dv(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => uv(n, r)?.getKey());
}
function uv(e, t = "delta-doc") {
  const r = ap();
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
    if (Dt(a) && (i.includes(a) || i.push(a)), Vh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Ml(a, t);
    if (Mr(a) && l > 0 && e >= n && e < n + l || Mt(a) && n === e)
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
function Mr(e) {
  return C(e) && !Mt(e);
}
function Mt(e) {
  return Ve(e) || Te(e) || $e(e) || z(e) || we(e) || rn(e);
}
function jr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function dv(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && cv.includes(t);
}
function fv(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Vh(e, t) {
  return z(e) || we(e) ? !0 : t === "apply" && R(e) && Mt(e);
}
function Wh(e) {
  const t = e.getParent();
  return Ut(e) && se(t) && t.getFirstChild() === e;
}
function pc(e) {
  const t = e.getParent();
  return t !== null && nt(t, Ke) !== null;
}
function pv(e) {
  const t = e.getParent();
  return L(t) && e.getTextContent() === It && t.getChildrenSize() === 1;
}
function hv(e) {
  const t = e.getParent();
  if (!z(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === St(t.getCaller());
}
function gv(e) {
  return !rh(e) && Ml(e, "delta-doc") === e.getTextContentSize();
}
function Ml(e, t) {
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
    (gl(e) || Wh(e) || te(e, ae) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    te(e, ae) === "attribute" || pc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Xc) || pv(e) || hv(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function hc(e, t) {
  const r = { insert: e.__text }, n = te(e, Hr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Hh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function ud(e) {
  const t = new ts();
  return e.isEmpty() || e.read(() => {
    const r = Ee();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Yt(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = mv();
    for (const s of i)
      t.push(s);
  }), t;
}
function El(e, t) {
  const r = [], n = Ai(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...dd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...dd(c, n.length, n, i, s, o, a));
  return r;
}
function mv() {
  return El();
}
function dd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return yv(e, a, n), bv(e, a, i, s, o), kv(e, t, r, i, o, s, a), Ve(e) && a.push(_v(e)), Te(e) && a.push(Sv(e)), $e(e) && a.push(Mv(e)), rn(e) && a.push(Ev(e)), xv(e, a, s), Tv(e, a, s), wv(c, s), a;
}
function yv(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ht(n) ? t.push(vv(n)) : se(n) ? t.push(Cv(n)) : Yt(n) && t.push({ insert: Ts });
  }
  Dt(e) && (r.includes(e) || r.push(e));
}
function bv(e, t, r, n, i) {
  if (!C(e) || Ae(e) || rn(e))
    return;
  const s = e.getParent();
  if (z(s) && s.getFirstChild() === e)
    return;
  const o = Qt(e) !== void 0;
  if (P(e) && (o || Wh(e) || pc(e) || rh(e)) || te(e, ae) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Ds(a))
    return;
  const c = e.getPreviousSibling();
  if (z(s) && P(c) && c === s.getFirstChild() && a === St(s.getCaller()))
    return;
  const l = L(s) ? s : void 0, d = l?.getFirstChild();
  o && l && P(d) && c === d && a.startsWith(O) && (a = a.slice(1));
  const u = a.startsWith(Xc) || te(e, ae) === "attribute" || pc(e), f = !!l && a === It && l.getChildrenSize() === 1, p = Xo(e, n), h = p ? r.filter((x) => p.children.includes(x)) : r, m = hc(e, h);
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
function kv(e, t, r, n, i, s, o) {
  L(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Ti(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = Pv(c), d = Xo(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Tv(e, t, r) {
  if (!z(e))
    return;
  const n = Av(e), i = Xo(e, r), s = {
    node: e,
    children: Ai(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function xv(e, t, r) {
  if (!we(e))
    return;
  const n = Nv(e), i = Xo(e, r), s = {
    node: e,
    children: Ai(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function sn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function vv(e) {
  const t = { style: gs, code: e.__code };
  return sn(t, e), { insert: Ts, attributes: { book: t } };
}
function _v(e) {
  const t = { style: mo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), sn(t, e), { insert: { chapter: t } };
}
function Cv(e) {
  const t = { style: e.__marker };
  return sn(t, e), { insert: Ts, attributes: { para: t } };
}
function Sv(e) {
  const t = { style: go, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), sn(t, e), { insert: { verse: t } };
}
function Mv(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), sn(t, e), { insert: { milestone: t } };
}
function Ev(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function Av(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), sn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = te(e, Hr);
  return n && (r.attributes = { segment: n }), r;
}
function Pv(e) {
  const t = { insert: "" }, r = Hh([e]);
  return r && (t.attributes = { char: r }), t;
}
function Nv(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), sn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Xo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function wv(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Ti(t[r].node, e) && t.splice(r, 1);
}
function Hh(e) {
  if (e.length === 0)
    return;
  const t = e.map(Ov);
  return t.length === 1 ? t[0] : t;
}
function Ov(e) {
  const t = { style: e.__marker }, r = te(e, Sn);
  return r && (t.cid = r), sn(t, e), t;
}
const Gh = 1;
class Gt extends As {
  __caller;
  __previewText;
  __onClick;
  constructor(t = uo, r = "", n, i) {
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
      span: (t) => Rv(t) ? {
        conversion: qv,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Al().updateFromJSON(t);
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
    return r && Ln(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => $v(t, n), (l) => Iv(t, n, s, l), () => Lv(t, n), () => Dv(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === uo && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === mp && i ? (
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
      version: Gh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function qv(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Al(t, r) };
}
function Al(e, t, r) {
  return je(new Gt(e, t, r));
}
function Rv(e) {
  return e ? e.classList.contains(Gt.getType()) : !1;
}
function pr(e) {
  return e instanceof Gt;
}
function $v(e, t) {
  return e.getEditorState().read(() => {
    const r = X(t);
    if (!z(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function Iv(e, t, r, n) {
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
function Lv(e, t) {
  return e.getEditorState().read(() => {
    const r = X(t);
    if (!z(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return El(r);
  });
}
function Dv(e, t) {
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
const Uv = [
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
], Fv = ["†"], Pl = "formatted", Jh = "unformatted", Yh = "paragraph-structure", Xh = "standard", Qh = "block-verse", Kv = {
  [Pl]: "Formatted",
  [Jh]: "Unformatted",
  [Yh]: "Paragraph Structure",
  [Xh]: "Standard",
  [Qh]: "Block Verse"
};
function Ri(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Nl, wl;
function zv(e) {
  const t = Zh(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Nl = e, wl = t;
}
zv(Pl);
const C0 = () => Nl, Qo = () => wl;
function Zh(e) {
  let t;
  switch (e ?? Nl) {
    case Pl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Jh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Yh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Xh:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Qh:
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
function S0(e) {
  if (!e)
    return;
  const t = fd(e);
  return Object.keys(Kv).find((r) => Pt(fd(Zh(r)), t));
}
const jv = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function fd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...jv, ...t };
}
function hr(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function Bv(e) {
  if (e)
    return xs(e) ? _t : e.markerMode === "editable" ? ft : _t;
}
function xs(e) {
  return e?.verseLayout === "block";
}
function Vv(e) {
  const t = [], r = e ?? wl;
  return r && (t.push(`${jb}${r.markerMode}`), r.hasSpacing && t.push(Kb), r.isFormattedFont && t.push(zb)), t;
}
function Ol(e, t) {
  if (tg())
    return;
  const { start: r } = e;
  let { end: n } = e;
  n ??= r;
  let [i, s] = mc(r, t), [o, a] = mc(n, t);
  if (!i || !o || s === void 0 || a === void 0)
    return;
  [i, s] = md(i, s), [o, a] = md(o, a), n !== r && Wf(n) && n.closingMarkerOffset === 0 && ([o, a] = s_(o, a, hr(t)));
  const c = Do();
  return c.anchor = Mu(i.getKey(), s, yd(i)), c.focus = Mu(o.getKey(), a, yd(o)), c;
}
function ql(e) {
  if (tg())
    return;
  const t = w();
  if (!t || !N(t))
    return;
  const r = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), n = t.isBackward() ? t.focus.offset : t.anchor.offset, i = Pn(r, n, e);
  if (t.isCollapsed())
    return { start: i };
  const s = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), o = t.isBackward() ? t.anchor.offset : t.focus.offset, a = Pn(s, o, e);
  return { start: i, end: a };
}
const Rl = {
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
}, Wv = new Map(Object.values(Rl).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), pd = {
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
}, Hv = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(pd).filter((e) => pd[e])
), Gv = /([^\s="|]+)="([^"]*)"/g, Jv = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Yv(e, t) {
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
function $l(e) {
  const t = Yr(e);
  if (!t)
    return;
  const r = Sr(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function gc(e, t, r) {
  const n = [];
  for (const i of e.slice(t).matchAll(Gv)) {
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
function Xv(e, t) {
  const r = Jv.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = Wv.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function eg(e) {
  if (fr(e)) {
    const t = o_(e), r = e.getTextContent();
    if ($e(t) && (r === "\\*" || r.startsWith(Me(t.getMarker()))))
      return t;
  }
  return Ni(e) ?? e;
}
function Qv(e) {
  const t = e.getTextContentSize(), r = $l(e);
  if (r && r.role !== "value") {
    const i = Rl[r.kind];
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
    owner: eg(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      hi(e.getNested() ? 2 : 1)
    ) : cs()
  };
}
function Zv(e) {
  const t = e.getTextContent(), r = t.length, n = $l(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = eg(e);
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
    const s = cl(i.getTag(), i.getMarker(), i.getUnknownAttributes());
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
function e_(e) {
  const t = $l(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = Rl[n];
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
        ...gc(i, 1, L(r) ? Os(r.getMarker()) : void 0)
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
        ...gc(i, 2, qs(r.getMarker()))
      ]
    };
  }
}
function t_(e) {
  const t = e.getParent();
  if (!we(t))
    return;
  const r = e.getTextContent(), n = r.length, i = Xv(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...gc(r, 1, void 0)
      ]
    };
}
function hd(e, t) {
  const r = Me(e);
  if (t.startsWith(r))
    return [
      ...hi(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Zo(e) {
  if (P(e))
    return Qv(e);
  if (fr(e))
    return Zv(e);
  if (vt(e) && e.getTextType() === "attribute")
    return t_(e);
  if (e.getType() === ws) {
    const n = e.getParent();
    return z(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Ae(e)) {
    const n = hd(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!C(e))
    return;
  if (te(e, ae) === "attribute")
    return e_(e);
  const t = e.getParent();
  if (Ce(t) && Pi(t)?.is(e)) {
    const n = hd(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = Ni(e);
  if (z(r) && Gr(r)?.is(e))
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
function Il(e) {
  return fr(e) || vt(e) && e.getTextType() === "attribute" || e.getType() === ws;
}
function r_(e) {
  const t = [];
  if (Ae(e) && t.push(e), R(e)) {
    const r = Ce(e) ? Pi(e) : void 0, n = z(e) ? Gr(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (P(i) || fr(i) || vt(i) && i.getTextType() === "attribute" || i.getType() === ws || r?.is(i)) && t.push(i);
  }
  for (const r of Hv) {
    const n = Sr(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function n_(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function gd(e, t, r) {
  const n = Zo(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = hn(mn(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Yv(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return i_(e, r);
  }
}
function i_(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && be(o); )
    r = o, o = r.getParent();
  const n = r.getPreviousSibling();
  if (!n)
    return;
  const i = R(n) ? n.getLastDescendant() : n;
  if (i && (C(i) || Il(i)))
    return gi(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return gi(s, n.getIndexWithinParent() + 1, t);
}
function ri(e, t, r) {
  for (const n of r_(e)) {
    const i = Zo(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!n_(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function mc(e, t) {
  const r = hr(t);
  if (Vc(e)) {
    const n = Mi(e.jsonPath);
    let i = Ee();
    for (let s = 0; s < n.length; s++) {
      if (!i || !R(i))
        return [void 0, void 0];
      const o = nn(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : gx(o, e.offset) ?? [void 0, void 0];
      i = o.node;
    }
    return i && R(i) ? yx(i, e.offset) : [void 0, void 0];
  }
  if (Su(e) || Hy(e)) {
    const n = Gi(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = Su(e) ? ri(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : ri(n, { kind: "attributeMarker", keyName: i }, 0);
    return s || bd(n);
  }
  if (Gy(e)) {
    const n = Gi(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = ri(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || bd(n);
  }
  if (Jy(e)) {
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
  if (Wf(e)) {
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
  if (Yy(e)) {
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
  throw new Error(`Unsupported UsjDocumentLocation type: ${Xy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function md(e, t) {
  if (!Il(e))
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
function s_(e, t, r) {
  let n;
  if (R(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; C(n) && !Zo(n) && !uc(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = R(n) ? n.getLastDescendant() : n;
  return C(s) ? [s, s.getTextContentSize()] : [e, t];
}
function yd(e) {
  return R(e) ? "element" : "text";
}
function Gi(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = Mi(n);
  let s = Ee();
  for (const o of i) {
    if (!s || !R(s))
      return;
    const a = nn(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function Pn(e, t, r) {
  return gi(e, t, hr(r));
}
function gi(e, t, r) {
  const n = gd(e, t, r);
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
    if (i && Il(i)) {
      const o = gd(i, 0, r);
      return o || {
        jsonPath: hn(mn(e))
      };
    }
    const s = ns(e, t, r);
    return s.type === "text" ? {
      jsonPath: hn([...mn(e), s.index]),
      offset: s.offset
    } : {
      jsonPath: hn(mn(e)),
      offset: s.index
    };
  }
  if (C(e)) {
    const i = uc(e, t, r);
    if (i)
      return {
        jsonPath: hn([
          ...mn(i.parent),
          i.index
        ]),
        offset: i.offset
      };
    const s = t > 0, o = s ? e.getNextSibling() : e.getPreviousSibling();
    if (C(o) && (Zo(o) || uc(o, 0, r)))
      return gi(o, s ? 0 : o.getTextContentSize(), r);
  }
  return { jsonPath: hn(mn(e)), offset: t };
}
function bd(e) {
  if (R(e)) {
    const r = e.getLastChild();
    if (r && C(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && R(t) ? [t, 0] : [void 0, void 0];
}
function o_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!To(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function mn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Ni(r);
    if (!n)
      break;
    const i = hx(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function tg() {
  for (let e = Ee().getFirstChild(); e; e = e.getNextSibling())
    if (ks(e))
      return !0;
  return !1;
}
function rg(e, t, r, n, i, s, o) {
  if (!Ne.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Ol(r, i) : w();
  if (!N(a))
    return;
  const c = l_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (rs(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = ng(e, l, c, i, s, void 0, void 0);
  return c_(d, a, i), d;
}
function Ll(e) {
  return e !== "expanded";
}
function a_(e) {
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
function c_(e, t, r) {
  const n = Ll(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || ix(t), Ih(t), Tn(t);
  const i = a_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(L)?.selectEnd();
}
function ni(e, t, r) {
  const n = _r(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ct(e)) : r?.markerMode === "visible" && n.append(Cr("marker", Me(e)));
  const s = t === "" ? It : i ? O + t : t;
  return n.append(ke(s)), n;
}
function l_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(ni("fr", f, n)), !e.isCollapsed()) {
        const p = Td(e);
        p.length > 0 && o.push(ni("fq", p, n));
      }
      o.push(ni("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(ni("xo", f, n)), !e.isCollapsed()) {
        const p = Td(e);
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
function ng(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Ll(n?.noteMode), l = tl(e, t, c);
  s && bt(l, Hr, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = ct(e), d && u.setMode("token"), a || (f = ct(e, "closing"))) : n?.markerMode === "visible" && (u = Cr("marker", Me(e) + " "), a || (f = Cr("marker", rt(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = ke(St(l.__caller)), d && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => Go(), m = r.flatMap(d_(h));
    if (t === "")
      l.append(...m);
    else {
      const y = ml(r);
      let x = () => {
      };
      i?.noteCallerOnClick && (x = i.noteCallerOnClick), p = Al(l.__caller, y, x), l.append(p, h(), ...m);
    }
  }
  return f && l.append(f), l;
}
function kd(e) {
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
function u_(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Kn(n) || !n) {
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
function d_(e) {
  return (t) => vt(t) ? [t] : [t, e()];
}
function f_(e) {
  const t = e.getParent();
  return t !== null && nt(t, z) !== null;
}
function Td(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Jf(e);
  let a = "";
  for (const c of t)
    if (!(z(c) || pr(c) || f_(c)) && !P(c) && !rn(c) && te(c, ae) !== "attribute") {
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
const ig = [
  Gt,
  _t,
  ...$x
], p_ = [
  qi,
  ...ig
], h_ = In((e, t) => {
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
function g_() {
  const [e, t] = he(void 0), [r, n] = he(), i = Y(null), s = ue((a, c) => {
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
  }, []), o = ue(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function m_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = g_();
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
const y_ = Ky(h_);
function sg({ isOpen: e = !1, children: t }) {
  const r = Y(null), { coords: n, placement: i } = m_({ isOpen: e, floatingBoxRef: r }), s = De(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return bn(
    _(y_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const og = Bf(void 0);
function Dl() {
  const e = Vf(og);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function b_(e, t) {
  const [r, n] = he(0), [i, s] = he(-1), o = De(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ue(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = ue(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = ue(() => {
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
function k_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = b_(t, r);
  return _(og.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const ag = In(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Dl(), d = ue((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = ue((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function T_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Y(null), { state: { activeIndex: i, menuItems: s } } = Dl(), o = De(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = De(() => {
    const c = o(s);
    return t ? zy.map(c, (l, d) => jy(l) && l.type === ag && l.props.index === void 0 ? By(l, { index: d }) : l) : c;
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
const x_ = (e, t, r) => io(e, r).toLowerCase().includes(t.toLowerCase()), xd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", io = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function v_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? xd(r[0]) : "") : (d = n || (r.length > 0 ? xd(r[0]) : ""), u = (h, m) => x_(h, m, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return u(h, t);
    } catch (m) {
      return console.warn("Error filtering item:", h, m), !1;
    }
  }).sort((h, m) => {
    const y = (M) => (p.has(M) || p.set(M, io(M, f).toLowerCase()), p.get(M) ?? ""), x = a ? io(h, f) : y(h), S = a ? io(m, f) : y(m);
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
  Root: k_,
  Options: T_,
  Option: ag
};
function __(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return De(() => v_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function C_() {
  const { moveUp: e, moveDown: t, select: r } = Dl();
  return De(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const S_ = () => {
  const e = C_(), [t] = le();
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
    return t.registerCommand(Ar, r, Ue);
  }, [t, e]);
};
function M_() {
  return S_(), null;
}
const E_ = ["Shift", "Control", "Alt", "Meta"];
function cg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), d = s !== void 0, [u, f] = he(""), p = d ? s ?? "" : u, h = __({ query: p, items: t, filterBy: "name" }), m = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(Ar, (y) => {
    if (d || c?.includes(y.key) || E_.includes(y.key))
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
  }, Ue), [l, d, p, o, n, c]), Se(Oa.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => m(y), children: [!d && _("input", { value: p, type: "text", disabled: !0 }), _(M_, {}), _(Oa.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((S, M) => Se(Oa.Option, { index: M, children: [_("span", { className: "label", children: S.label ?? S.name }), _("span", { className: "description", children: S.description })] }, S.name)) })] });
}
function A_({ trigger: e, items: t }) {
  const [r] = le(), [n, i] = he(!1), s = ue((o) => {
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
  }), [r]), t && _(sg, { isOpen: n, children: ({ placement: o }) => _(cg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function P_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
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
function N_(e, t) {
  j(() => {
    if (!e.hasNodes([Ze]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Xe(cp(e, Ze, (n) => mi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], h = a[l]?.[u], m = c[l]?.[u];
          i.addID(l, u, f, p, h, m);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Ze, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = X(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : be(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Ze.isReservedType(c))
              for (const d of l) {
                let u = t.get(ls(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(ls(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(ls(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const w_ = In(function({ logger: t, viewOptions: r }, n) {
  const [i] = le(), s = De(() => /* @__PURE__ */ new Map(), []);
  N_(i, s);
  const o = (a, c, l) => {
    const d = Array.from(l ?? s.get(ls(a, c)) ?? []);
    if (d.length !== 0)
      for (const u of d) {
        const f = X(u);
        be(f) && (f.deleteID(a, c), f.hasNoIDsForEveryType() && ho(f));
      }
  };
  return Bc(n, () => ({
    setAnnotation(a, c, l, d, u, f, p) {
      if (Ze.isReservedType(c))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const h = Ol(a, r);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        o(c, l), rl(h, c, l, d, u, f, p);
      }, { tag: Qa });
    },
    removeAnnotation(a, c) {
      if (Ze.isReservedType(a))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      const l = s.get(ls(a, c));
      l === void 0 || l.size === 0 || i.update(() => {
        o(a, c, l);
      }, { tag: Qa });
    }
  })), null;
}), O_ = [];
function q_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = O_, onChange: n }) {
  const [i] = le();
  return Ms(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(Yf) && !d.has(yp) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = R_(i, s);
        u.length !== 0 && n(o, i, d, u);
      });
  }, [i, e, t, r, n]), null;
}
function R_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new ts();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = X(i), o = s !== null && Qt(s) !== void 0;
    if (t.size === 1 && C(s) && !o && gv(s)) {
      const a = Bh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = X(i);
          return new ts([C(u) ? hc(u) : { insert: "" }]);
        }), l = new ts([hc(s)]), d = new ts(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = ud(r), c = ud(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function $_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += I_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), D_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += U_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), K_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function I_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), L_(t, e.retain, e.attributes, r, n)), e.retain);
}
function L_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ee();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Mr(d)) {
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
          if (Xr(r)) {
            const S = m.getParent();
            if (L(S)) {
              const M = r.char;
              let $;
              Array.isArray(M) ? a >= 0 && a <= M.length - 1 && ($ = M[a]) : a === 0 && ($ = M);
              const A = $ ? En($, S) : !1;
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
                const k = vd(m, r, n, i);
                if (k && k.length > 0) {
                  let U = S;
                  for (const D of k)
                    U.insertAfter(D), U = D;
                }
              }
            } else {
              const M = ke("");
              m.replace(M);
              const $ = vd(m, r, n, i);
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
      e <= o && o < e + t && s > 0 && (_d(d, r), s -= 1), o += 1;
    else if (L(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (Xr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            yc(d, p.style), typeof p.cid == "string" && bt(d, Sn, () => p.cid);
            const h = Fe(p, Co);
            h && Object.keys(h).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...h
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || Y_(r.char)) && (u = !0);
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
          _d(d, r);
        else if (Ul(r)) {
          const p = dg(r.para, n);
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
function vd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = $i(t.char, r, e, i), o = s.find(L);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Nt(t, e);
    return;
  }
  const a = {};
  gg.forEach((d) => {
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
function lg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Me(t))) : vt(r) && r.getTextType() === "marker" && r.setTextContent(Me(t) + O);
}
function yc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = L(e.getParent()), i = e.getFirstChild();
  vt(i) && i.getTextType() === "marker" && i.getTextContent() === Me(r, n) && i.setTextContent(Me(t, n));
  const s = e.getLastChild();
  vt(s) && s.getTextType() === "marker" && s.getTextContent() === rt(r, n) && s.setTextContent(rt(t, n));
}
function _d(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && L(e) && Xr(t)) {
      const i = bc(n);
      if (yc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        bt(e, Sn, () => o);
      }
      const s = Fe(i, Co);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ve(e) || Te(e) || $e(e) || z(e) || we(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ht(e) || se(e) || L(e)) && (r === "style" && se(e) ? lg(e, n) : r === "style" && L(e) ? yc(e, n) : r === "code" && ht(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && bt(e, Hr, () => n));
  }
}
function D_(e, t, r) {
  if (t <= 0)
    return;
  const n = Ee();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Mr(a)) {
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
              Mr(x) ? h += x.getTextContentSize() : Mt(x) && (h += 1), i = S;
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
function U_(e, t, r, n, i) {
  if (t === Ts)
    return Cd(e, r, n, i);
  if (t.endsWith(Ts) && !Ul(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Xr(r))
        throw new Error("Text + LF should not have char attributes");
      o += So(e, s, r, i);
    }
    return o += Cd(e + o, r, n, i), o;
  } else return Xr(r) ? F_(e, t, r, n, i) : So(e, t, r, i);
}
function F_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ke(t === "" ? It : t);
  Nt(r, s);
  let o;
  {
    let y = function(x) {
      if (Mr(x)) {
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
      h && En(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (En(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = $i(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(L);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), So(e, t, void 0, i);
  const f = {};
  for (const [h, m] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof m == "string" && (f[h] = m);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const h of d)
    if (!ug(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), So(e, t, void 0, i));
}
function So(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ee();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Mr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = ke(t);
        if (Nt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          L(f) && !Xr(r) ? f.insertAfter(u) : c.insertAfter(u);
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
function ug(e, t, r) {
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
      if (Mr(l)) {
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
function K_(e, t, r, n, i) {
  let s;
  return jr("chapter", t) ? s = j_(t.insert.chapter, r) : jr("verse", t) ? s = B_(t.insert.verse, r) : jr("ms", t) ? s = V_(t.insert.ms) : jr("note", t) ? s = fg(t, r, n, i) : jr("unknown", t) ? s = pg(t, r, n, i) : jr("unmatched", t) && (s = H_(t.insert.unmatched, r)), s ? ug(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Cd(e, t, r, n) {
  let i;
  Ul(t) ? i = dg(t.para, r) : J_(t) && (i = z_(t.book)), i ??= Ht();
  const s = i, o = se(s), a = Yt(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Mr(u)) {
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
function z_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== gs || !r || !Lt.isValidBookCode(r))
    return;
  const n = Fe(e, rv);
  return oh(r, n);
}
function dg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Fe(e, tv), i = ms(r, n);
  if (!Ri(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ct(r), Go());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Me(r) + O;
    i.append(t.hasGutterParaMarkers ? Bk(s) : Cr("marker", s));
  }
  return i;
}
function j_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Fe(e, nv);
  let a;
  if (t.markerMode === "editable")
    a = Vp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = dl(r, c, n, i, s, o);
  }
  return a;
}
function B_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Fe(e, iv);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = $t(r, n);
    c = qp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = vl(n, l, i, s, o, a);
  }
  return c;
}
function V_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Fe(e, sv);
  return Tp(t, r, n, s, i);
}
function fg(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Fe(i.note, ov), d = typeof l?.closed == "string" ? l.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const p = [];
  for (const m of c?.ops ?? [])
    if (typeof m.insert == "string")
      if (Xr(m.attributes)) {
        const y = $i(m.attributes.char, t, ke(m.insert), void 0, hg(m.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(ke(m.insert));
  return ng(s, o, p, t, r, f, d).setCategory(a).setUnknownAttributes(l);
}
function pg(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Fe(i, av), l = al(s, o, c), d = a?.ops ?? [];
  d.length > 0 && W_(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && bt(l, Hr, () => u), l;
}
function W_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Xr(s.attributes)) {
        const o = ke(s.insert), a = $i(s.attributes.char, t, o, void 0, hg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ke(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (jr("unknown", s)) {
        const o = pg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (jr("note", s)) {
        const o = fg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function H_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = ul(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function hg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function bc(e) {
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
    const c = e.map(bc), l = c[0], d = i?.[i.length - 1];
    if (L(d) && En(l, d))
      return c.length > 1 ? $i(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => d.append(p)) : r && d.append(r), [];
    a();
    const u = c.reduceRight((f, p, h) => {
      const m = _r(p.style, Fe(p, Co));
      if (typeof p.cid == "string" && bt(m, Sn, () => p.cid), n && h === c.length - 1 && bt(m, Hr, () => n), f)
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
    const c = bc(e), l = i?.[i.length - 1];
    if (L(l) && En(c, l))
      return r && l.append(r), [];
    a();
    const d = _r(c.style, Fe(c, Co));
    return typeof c.cid == "string" && bt(d, Sn, () => c.cid), n && bt(d, Hr, () => n), r && d.append(r), Ra(c.style, d, t, s), qa(d, d, t, s), [d];
  }
}
function qa(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && G_(e.getMarker(), t, r, !1, n);
}
function Ra(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ct(e, "opening", n) : r?.markerMode === "visible" && (i = Cr("marker", Me(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function G_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ct("", "selfClosing") : s = ct(e, "closing", i) : r?.markerMode === "visible" && (s = Cr("marker", n ? rt("") : rt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function J_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Ul(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Xr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function Y_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Nt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        bt(t, Hr, () => n);
        continue;
      }
      if (X_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const gg = [
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
function X_(e) {
  return gg.includes(e);
}
function Q_() {
  const [e] = le();
  return j(() => e.registerCommand(Uo, (t) => (Z_(t), !1), xn), [e]), null;
}
function Z_(e) {
  if (eC(e.target))
    return;
  const t = w();
  N(t) && tC(t);
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
function eC(e) {
  if (!Xf(e))
    return !1;
  const t = Ns(e);
  if (!Vk(t))
    return !1;
  const r = t.getParent();
  return r ? Pe(r) ? Ii(r) : (Xt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function tC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = X(t.key);
  if (!Pe(r))
    return !1;
  const n = r.getFirstChild();
  return !fr(n) && !Kn(n) ? !1 : Ii(r);
}
function rC() {
  const [e] = le();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !nC(r) || !mg() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Xe(
      e.registerCommand(Ar, t, Ue),
      e.registerCommand(Hc, t, Ue),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(kr, t, Tr),
      e.registerCommand(vn, t, Tr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Gc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Ns(r.target);
        return !n || !Nn(n) ? !1 : (r.preventDefault(), !0);
      }, Ue),
      e.registerCommand(eb, t, Ue),
      e.registerCommand(tb, t, Ue),
      e.registerCommand(rb, t, Ue)
    );
  }, [e]), null;
}
function nC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Nn(e) {
  return nt(e, (t) => we(t) || ph(t)) ?? void 0;
}
function mg() {
  const e = w();
  return N(e) ? Nn(e.anchor.getNode()) !== void 0 || Nn(e.focus.getNode()) !== void 0 : !1;
}
function iC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function sC(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), iC(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function oC(e, t, r, n) {
  if (!TC(t) || sC(e, r))
    return !1;
  const i = r === "up" ? ev(t) : Zx(t);
  return i && n.preventDefault(), i;
}
function aC({ viewOptions: e }) {
  const [t] = le();
  return cC(t, e), null;
}
function cC(e, t) {
  j(() => {
    if (!e.hasNodes([dr, _t, Ne]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = Sd(o), u = gC(i, Md(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return oC(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Sd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Md(a, n.key) ? l = !c && Pd(i, "next") || !c && uC(i) || bC(i) || !c && s && Ad(i, "next") : lC(a, n.key) && (l = !c && Pd(i, "previous") || !c && dC(i) || kC(i, t) || !c && s && Ad(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Ar, r, Ue);
  }, [e, t]);
}
function Sd(e) {
  return e.dir || "ltr";
}
function Md(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function lC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function kc(e) {
  if (!L(e) || e.getMarker() !== "fp")
    return;
  const t = Qt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function uC(e) {
  const t = kc(Ch(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Xt(t, 0), !0);
}
function dC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = kc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Ed(n);
  }
  if (t.offset === 0) {
    const n = kc(r);
    return n ? Ed(n) : !1;
  }
  return !1;
}
function Ed(e) {
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
const Mo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function fC(e) {
  if (Mo)
    for (const { segment: r } of Mo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function pC(e) {
  if (Mo) {
    let n = 0;
    for (const { index: i } of Mo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function yg(e) {
  for (let t = e; t; t = t.getParent())
    if (R(t) && !t.isInline())
      return t;
}
function bg(e) {
  return !!e && P(e) && Nn(e) !== void 0;
}
function xi(e) {
  return C(e) && !e.isToken() && !bg(e) && e.getTextContentSize() > 0;
}
function kg(e) {
  return Lo(e) ? !0 : z(e) ? e.getIsCollapsed() === !0 : C(e) ? (e.isToken() || bg(e)) && e.getTextContentSize() > 0 : Qf(e) ? !$e(e) : !1;
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
    if (kg(n))
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
function Fl(e, t, r, n, i) {
  return r === "element" && R(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? vi(e, n, i) : r === "text" && kg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : vi(e, n, i);
}
function $a(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Fl(e.node, e.offset, e.kind, "previous", t), n = ea(r, "previous", t);
  if (!n)
    return e;
  if (xi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function hC(e, t) {
  const r = e.getNode(), n = yg(r);
  if (!n)
    return;
  if (e.type === "text" && xi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return $a({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Fl(r, e.offset, e.type, t, n), s = ea(i, t, n);
  if (!s)
    return;
  if (xi(s)) {
    const c = s.getTextContent(), l = t === "next" ? fC(c) : pC(c);
    return $a({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return $a({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Tg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = hC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Ad(e, t) {
  return Tg(e, t, "collapse");
}
function gC(e, t) {
  return Tg(e, t, "extend");
}
function mC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && xi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Fl(n, e.offset, e.type, t, r);
  return ea(i, t, r) === void 0;
}
function yC(e, t) {
  const r = Ee();
  for (let n = e; n; ) {
    const i = vi(n, t, r), s = i && ea(i, t, r);
    if (!s)
      return;
    if (n = Nn(s), !n)
      return s;
  }
}
function Pd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Nn(n))
    return !1;
  const i = yg(n);
  if (!i || !mC(r, t, i))
    return !1;
  const s = vi(i, t, Ee()), o = s && Nn(s);
  if (!o)
    return !1;
  const a = yC(o, t);
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
function Nd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function bC(e) {
  const t = e.anchor.getNode(), r = Ch(e);
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
    return i ? i.selectStart() : Nd(r), !0;
  }
  const n = r?.getParent();
  if (vt(r) && z(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Nd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function kC(e, t) {
  const r = tx(e);
  if (Ls(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (ht(i.getParent()))
    return !0;
  if (z(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Kn(o))
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
    const a = nt(o, (c) => z(c));
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
function TC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Te(t) && Qf(t);
}
function xC() {
  const [e] = le();
  return vC(e), null;
}
function vC(e) {
  j(() => {
    if (!e.hasNodes([xe]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Xe(
      e.registerNodeTransform(xe, SC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(xe, Uk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(xe, Jp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(xe, (t) => bs(Sr("char"), t)),
      e.registerNodeTransform(ze, MC)
    );
  }, [e]);
}
function Ia(e) {
  return e.getChildren().some(P);
}
function _C(e, t) {
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
function CC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function SC(e) {
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
  const r = te(e, Sn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (L(i) && En({ style: t, cid: r }, i) && Pt(n, i.getUnknownAttributes()))
    if (Ia(i)) {
      if (_C(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  L(s) && En({ style: t, cid: r }, s) && Pt(n, s.getUnknownAttributes()) && (Ia(s) ? CC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function MC(e) {
  const t = e.getParent();
  if (!L(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(It) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function xg(e) {
  return e.replaceAll("	", " ");
}
const Kl = (e) => {
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
      n.setData(o, xg(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(kr, s);
  });
}, zl = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", xg(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(kr, i);
  });
};
function EC() {
  const [e] = le();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(co ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(Fo, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(vn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? zl(e) : Kl(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function AC({ logger: e }) {
  const [t] = le();
  return j(() => Xe(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Ar, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), ui),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(kr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ui),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Gc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ui)
  ), [t, e]), null;
}
function PC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function NC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(PC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let wC = 0;
class Ji {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${wC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function OC({ options: e } = {}) {
  const [t] = le(), [r, n] = he(() => !t.isEditable()), [i, s] = he({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = he(void 0), c = De(() => {
    const u = [
      new Ji("Cut", {
        onSelect: () => {
          t.dispatchCommand(vn, null);
        },
        isDisabled: r
      }),
      new Ji("Copy", {
        onSelect: () => {
          t.dispatchCommand(Fo, null);
        }
      }),
      new Ji("Paste", {
        onSelect: () => {
          Kl(t);
        },
        isDisabled: r
      }),
      new Ji("Paste as Plain Text", {
        onSelect: () => {
          zl(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Ji(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = ue(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  j(() => {
    const u = (f) => {
      const p = f.target;
      t.getRootElement() === p || uh(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
  }, [i.isOpen, i.x, i.y]), i.isOpen ? xb.createPortal(_("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: _(NC, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function qC() {
  const [e] = le();
  return j(() => e.registerCommand(Ar, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(co ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Tr), [e]), null;
}
function RC({ isEditable: e }) {
  const [t] = le();
  return Ms(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function wd(e) {
  return !!e && gl(X(e));
}
function vg(e) {
  const [t] = le(), r = Y(void 0), n = ue((i) => {
    let s = !1;
    const o = w(), a = N(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = wd(c);
    c && !l && (r.current = void 0);
    let d;
    if (i) {
      const u = i.getParentOrThrow(), f = i.getIndexWithinParent() + 1, p = Ho(u, f);
      if (p)
        r.current = p.getKey(), d = p.getKey();
      else {
        const h = XT();
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
      (a || d && d !== l) && n(a) && _n(Wr);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Ds(c) || !c.includes(bi))
        return;
      const l = w(), d = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (QT(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(bi).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = Xe(t.registerCommand(cr, () => (i(), !1), xn), t.registerCommand(Jc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = wd(a);
      }), c && t.update(() => {
        const l = X(a);
        C(l) && l.remove();
      }, { tag: Wr }), r.current = void 0, !1;
    }, xn), t.registerNodeTransform(ze, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function $C() {
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
  if (!Te(i) || Ho(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || Te(s))
    return i;
}
function IC() {
  return vg($C), null;
}
function LC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
          f || _n(nb), o.setEditorState(l), o.dispatchCommand(ib, void 0);
        }, { tag: Qc });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function DC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return UC(t, n), FC(i, e, r, n), null;
}
function UC(e, t) {
  const r = Y(void 0), n = Y(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = Uv), r.current !== o && (r.current = o, Od("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = Fv), n.current !== o && (n.current = o, Od("cross-ref-callers", o, t));
  }, [t, s]);
}
function FC(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([xe, Ne, Gt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => HC(s));
    return Xe(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ne, (s) => KC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(xe, zC),
      e.registerNodeTransform(ze, jC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Gt, BC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Gt, (s, { prevEditorState: o }) => VC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(cr, () => WC(e, t, r, n), Rt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function KC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => pr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    C(i) && !P(i) && i.getTextContent() !== St(e.getCaller()) && e.insertBefore(i);
  }
}
function zC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => pr(o));
  if (!L(e) || !z(t) || !n)
    return;
  const i = ml(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  C(s) ? s.getTextContent() !== O && s.setTextContent(O) : e.insertAfter(ke(O));
}
function jC(e) {
  const t = Qt(e), r = t?.getChildren(), n = r?.find((o) => pr(o));
  if (!C(e) || !z(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && z(i) && e.getTextContent() !== O && (e.setTextContent(O), e.selectEnd()), L(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(It) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = ml(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function BC(e) {
  if (!pr(e))
    return;
  const t = e.getNextSibling();
  !C(t) || P(t) ? e.insertAfter(ke(O)) : t.getTextContent() !== O && t.setTextContent(O);
}
function VC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = X(r), a = o?.getParent();
      return pr(o) && z(a) && a.getCaller() === uo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function WC(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = nt(o, (c) => z(c));
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
      const c = nt(o, (l) => z(l));
      if (c && c.getIsCollapsed() && Pe(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Yi(e, l, n);
      }
    }
  }
  if (Pe(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Kn(c) && z(a)) {
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
function HC(e) {
  const t = w();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (z(i) && C(s)) {
    e.preventDefault();
    const o = Do();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Tn(o);
  }
}
function Od(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (GC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function GC(e, t) {
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
  const r = Gr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => C(n) && n.getMode() === "token") ? t : [];
}
function JC(e) {
  const t = e.getParent();
  if (z(t))
    return ta(t).some((r) => r.is(e)) ? t : void 0;
}
function Eo(e) {
  const t = ta(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function YC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function XC(e) {
  const t = sb();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Eo(e);
  const i = YC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Eo(e);
}
function Tc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = JC(t);
  if (r)
    return QC(r, t, e.offset) ? void 0 : r;
}
function QC(e, t, r) {
  const n = ta(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function ZC(e) {
  const t = ta(e), r = t[t.length - 1];
  C(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Xt(e, Eo(e));
}
function eS(e = !1) {
  const t = w();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return tS(t.anchor, t.focus);
  const r = Tc(t.anchor);
  if (!r)
    return !1;
  if (!e && XC(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Xt(n, r.getIndexWithinParent());
  } else
    ZC(r);
  return !0;
}
function tS(e, t) {
  const r = Tc(e), n = Tc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && qd(e, r, i), n && qd(t, n, !i), !0;
}
function qd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Eo(t), "element");
}
function rS() {
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
  }, [e]), j(() => e.registerCommand(cr, () => (eS(t.current) && _n(Wr), !1), xn), [e]), null;
}
function nS({ onChange: e, viewOptions: t }) {
  const [r] = le();
  return j(() => r.registerCommand(cr, () => {
    const n = ql(t);
    return e?.(n), !1;
  }, Rt), [r, e, t]), null;
}
function iS() {
  const [e] = le();
  return sS(e), null;
}
function sS(e) {
  j(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Qe, (t) => oS(t, e));
  }, [e]);
}
function oS(e, t) {
  jh(t, e.getKey()) && zh(e.getFirstChild()), !(!se(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = X(e.getKey());
    return se(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function _g({ onStateChange: e }) {
  const [t] = le(), [r, n] = he(t), i = Y(!1), s = Y(!1), o = Y(void 0), a = Y(void 0), c = ue(() => {
    const l = w();
    let d;
    if (N(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : nt(u, (x) => {
        const S = x.getParent();
        return S !== null && ob(S);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), ks(p) && (p = nt(u, se) ?? p);
      const h = p.getKey(), m = r.getElementByKey(h), y = nx(u, f);
      if (y && Qx(y) && (d = y.getMarker()), m !== null && (se(p) || ht(p) || Ls(p))) {
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
  return j(() => t.registerCommand(cr, (l, d) => (c(), n(d), !1), Tr), [t, c]), j(() => Xe(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(ab, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Tr), r.registerCommand(cb, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Tr)), [c, r, e]), null;
}
function aS(e) {
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
  return e ? Pe(e) ? e : nt(e, (r) => Pe(r)) ?? void 0 : void 0;
}
function Cg(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Qr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function jl(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !Zf(e) ? !1 : e.getNodes().some((t) => Te(t));
}
function Sg(e) {
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
function Mg(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Qr(r);
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
function Rd(e, t) {
  return !!xc(e, t);
}
function xc(e, t) {
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
function Ao(e, t) {
  if (!N(e))
    return !1;
  const r = Qr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function La(e) {
  return jl(e) || Cg(e);
}
function cS(e, t) {
  if (jl(e) || Cg(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Sg(e) && Ao(e, "backward") || Rd(e, "backward");
    case "deleteForward":
      return Mg(e) && Ao(e, "forward") || Rd(e, "forward");
    case "insertText":
      return !1;
  }
}
function lS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = xc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Sg(e) && Ao(e, "backward")) {
        const n = Qr(e.anchor.getNode());
        if (Pe(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = xc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Mg(e) && Ao(e, "forward")) {
        const i = Qr(e.anchor.getNode())?.getNextSibling();
        if (Pe(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function $d(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Zf(e) && e.has(t.key);
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
function Eg(e) {
  if (C(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else R(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function uS(e) {
  const t = e.getPreviousSibling();
  if (!Pe(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Eg(r) : Ii(t) || t.selectStart();
}
function Ag(e) {
  return Te(e) || Ve(e) ? [] : Pe(e) ? e.getChildren().flatMap(Ag) : [e];
}
function dS(e) {
  const t = [];
  for (const r of e) {
    const n = Ag(r);
    n.length !== 0 && (Pe(r) && t.length > 0 && t.push(ke(" ")), t.push(...n));
  }
  return t;
}
function Id(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fS(e) {
  if (Array.isArray(e)) return e;
}
function pS(e, t) {
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
function hS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gS(e, t) {
  return fS(e) || pS(e, t) || mS(e, t) || hS();
}
function mS(e, t) {
  if (e) {
    if (typeof e == "string") return Id(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Id(e, t) : void 0;
  }
}
const Pg = Object.entries, Ld = Object.setPrototypeOf, yS = Object.isFrozen, bS = Object.getPrototypeOf, kS = Object.getOwnPropertyDescriptor;
let et = Object.freeze, it = Object.seal, ai = Object.create, Ng = typeof Reflect < "u" && Reflect, vc = Ng.apply, _c = Ng.construct;
et || (et = function(t) {
  return t;
});
it || (it = function(t) {
  return t;
});
vc || (vc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
_c || (_c = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const ii = We(Array.prototype.forEach), TS = We(Array.prototype.lastIndexOf), Dd = We(Array.prototype.pop), si = We(Array.prototype.push), xS = We(Array.prototype.splice), Br = Array.isArray, is = We(String.prototype.toLowerCase), Da = We(String.prototype.toString), Ud = We(String.prototype.match), Xi = We(String.prototype.replace), Fd = We(String.prototype.indexOf), vS = We(String.prototype.trim), _S = We(Number.prototype.toString), CS = We(Boolean.prototype.toString), Kd = typeof BigInt > "u" ? null : We(BigInt.prototype.toString), zd = typeof Symbol > "u" ? null : We(Symbol.prototype.toString), Ye = We(Object.prototype.hasOwnProperty), Qi = We(Object.prototype.toString), Je = We(RegExp.prototype.test), pn = SS(TypeError);
function We(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return vc(e, t, n);
  };
}
function SS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return _c(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : is;
  if (Ld && Ld(e, null), !Br(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (yS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function MS(e) {
  for (let t = 0; t < e.length; t++)
    Ye(e, t) || (e[t] = null);
  return e;
}
function at(e) {
  const t = ai(null);
  for (const n of Pg(e)) {
    var r = gS(n, 2);
    const i = r[0], s = r[1];
    Ye(e, i) && (Br(s) ? t[i] = MS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = at(s) : t[i] = s);
  }
  return t;
}
function ES(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return _S(e);
    case "boolean":
      return CS(e);
    case "bigint":
      return Kd ? Kd(e) : "0";
    case "symbol":
      return zd ? zd(e) : "Symbol()";
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
    const n = kS(e, t);
    if (n) {
      if (n.get)
        return We(n.get);
      if (typeof n.value == "function")
        return We(n.value);
    }
    e = bS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function AS(e) {
  try {
    return Je(e, ""), !0;
  } catch {
    return !1;
  }
}
const jd = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ua = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Fa = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), PS = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ka = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), NS = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Bd = et(["#text"]), Vd = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), za = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Wd = et(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Xs = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), wS = it(/{{[\w\W]*|^[\w\W]*}}/g), OS = it(/<%[\w\W]*|^[\w\W]*%>/g), qS = it(/\${[\w\W]*/g), RS = it(/^data-[\-\w.\u00B7-\uFFFF]+$/), $S = it(/^aria-[\-\w]+$/), Hd = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), IS = it(/^(?:\w+script|data):/i), LS = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), DS = it(/^html$/i), US = it(/^[a-z][.\w]*(-[.\w]+)+$/i), Gd = it(/<[/\w!]/g), Jd = it(/<[/\w]/g), FS = it(/<\/no(script|embed|frames)/i), KS = it(/\/>/i), Ct = {
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
}, zS = function() {
  return typeof window > "u" ? null : window;
}, jS = function(t, r) {
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
}, Yd = function() {
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
  return Ye(t, r) && Br(t[r]) ? ge(i.base ? at(i.base) : {}, t[r], i.transform) : n;
};
function wg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zS();
  const t = (F) => wg(F);
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
  const de = function() {
    if (ce > 0)
      throw pn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, oe = function(g) {
    de(), ce++;
    try {
      return U.createHTML(g);
    } finally {
      ce--;
    }
  }, me = function(g) {
    de(), ce++;
    try {
      return U.createScriptURL(g);
    } finally {
      ce--;
    }
  }, qe = function() {
    return Q || (G = jS(u, i), Q = !0), G;
  }, Z = r, K = Z.implementation, re = Z.createNodeIterator, Re = Z.createDocumentFragment, st = Z.getElementsByTagName, Ft = n.importNode;
  let fe = Yd();
  t.isSupported = typeof Pg == "function" && typeof x == "function" && K && K.createHTMLDocument !== void 0;
  const Kt = wS, At = OS, da = qS, er = RS, Bn = $S, Fi = IS, ne = LS, ut = US;
  let js = Hd, ve = null;
  const gr = ge({}, [...jd, ...Ua, ...Fa, ...Ka, ...Bd]);
  let J = null;
  const He = ge({}, [...Vd, ...za, ...Wd, ...Xs]);
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
  })), Rr = null, $r = null;
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
  let Vn = !0, Wn = !0, Ir = !1, on = !0, rr = !1, gt = !0, zt = !1, jt = !1, Lr = null, Dr = null, Ki = !1, mr = !1, Hn = !1, an = !1, E = !0, I = !1;
  const B = "user-content-";
  let W = !0, pe = !1, Ge = {}, ot = null;
  const Gn = ge({}, [
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
  const fu = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Bs = "http://www.w3.org/1998/Math/MathML", Vs = "http://www.w3.org/2000/svg", nr = "http://www.w3.org/1999/xhtml";
  let Jn = nr, pa = !1, ha = null;
  const Sy = ge({}, [Bs, Vs, nr], Da), pu = et(["mi", "mo", "mn", "ms", "mtext"]);
  let ga = ge({}, pu);
  const hu = et(["annotation-xml"]);
  let ma = ge({}, hu);
  const My = ge({}, ["title", "style", "font", "a", "script"]);
  let Bi = null;
  const Ey = ["application/xhtml+xml", "text/html"], Ay = "text/html";
  let Ie = null, Yn = null;
  const Py = r.createElement("form"), gu = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, ya = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Yn && Yn === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = at(g), Bi = // eslint-disable-next-line unicorn/prefer-includes
    Ey.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Ay : g.PARSER_MEDIA_TYPE, Ie = Bi === "application/xhtml+xml" ? Da : is, ve = Kr(g, "ALLOWED_TAGS", gr, {
      transform: Ie
    }), J = Kr(g, "ALLOWED_ATTR", He, {
      transform: Ie
    }), ha = Kr(g, "ALLOWED_NAMESPACES", Sy, {
      transform: Da
    }), fa = Kr(g, "ADD_URI_SAFE_ATTR", fu, {
      transform: Ie,
      base: fu
    }), zi = Kr(g, "ADD_DATA_URI_TAGS", ji, {
      transform: Ie,
      base: ji
    }), ot = Kr(g, "FORBID_CONTENTS", Gn, {
      transform: Ie
    }), Rr = Kr(g, "FORBID_TAGS", at({}), {
      transform: Ie
    }), $r = Kr(g, "FORBID_ATTR", at({}), {
      transform: Ie
    }), Ge = Ye(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? at(g.USE_PROFILES) : g.USE_PROFILES : !1, Vn = g.ALLOW_ARIA_ATTR !== !1, Wn = g.ALLOW_DATA_ATTR !== !1, Ir = g.ALLOW_UNKNOWN_PROTOCOLS || !1, on = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, rr = g.SAFE_FOR_TEMPLATES || !1, gt = g.SAFE_FOR_XML !== !1, zt = g.WHOLE_DOCUMENT || !1, mr = g.RETURN_DOM || !1, Hn = g.RETURN_DOM_FRAGMENT || !1, an = g.RETURN_TRUSTED_TYPE || !1, Ki = g.FORCE_BODY || !1, E = g.SANITIZE_DOM !== !1, I = g.SANITIZE_NAMED_PROPS || !1, W = g.KEEP_CONTENT !== !1, pe = g.IN_PLACE || !1, js = AS(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : Hd, Jn = typeof g.NAMESPACE == "string" ? g.NAMESPACE : nr, ga = Ye(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? at(g.MATHML_TEXT_INTEGRATION_POINTS) : ge({}, pu), ma = Ye(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? at(g.HTML_INTEGRATION_POINTS) : ge({}, hu);
    const v = Ye(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? at(g.CUSTOM_ELEMENT_HANDLING) : ai(null);
    if (ye = ai(null), Ye(v, "tagNameCheck") && gu(v.tagNameCheck) && (ye.tagNameCheck = v.tagNameCheck), Ye(v, "attributeNameCheck") && gu(v.attributeNameCheck) && (ye.attributeNameCheck = v.attributeNameCheck), Ye(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (ye.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), it(ye), rr && (Wn = !1), Hn && (mr = !0), Ge && (ve = ge({}, Bd), J = ai(null), Ge.html === !0 && (ge(ve, jd), ge(J, Vd)), Ge.svg === !0 && (ge(ve, Ua), ge(J, za), ge(J, Xs)), Ge.svgFilters === !0 && (ge(ve, Fa), ge(J, za), ge(J, Xs)), Ge.mathMl === !0 && (ge(ve, Ka), ge(J, Wd), ge(J, Xs))), tr.tagCheck = null, tr.attributeCheck = null, Ye(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? tr.tagCheck = g.ADD_TAGS : Br(g.ADD_TAGS) && (ve === gr && (ve = at(ve)), ge(ve, g.ADD_TAGS, Ie))), Ye(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? tr.attributeCheck = g.ADD_ATTR : Br(g.ADD_ATTR) && (J === He && (J = at(J)), ge(J, g.ADD_ATTR, Ie))), Ye(g, "ADD_URI_SAFE_ATTR") && Br(g.ADD_URI_SAFE_ATTR) && ge(fa, g.ADD_URI_SAFE_ATTR, Ie), Ye(g, "FORBID_CONTENTS") && Br(g.FORBID_CONTENTS) && (ot === Gn && (ot = at(ot)), ge(ot, g.FORBID_CONTENTS, Ie)), Ye(g, "ADD_FORBID_CONTENTS") && Br(g.ADD_FORBID_CONTENTS) && (ot === Gn && (ot = at(ot)), ge(ot, g.ADD_FORBID_CONTENTS, Ie)), W && (ve["#text"] = !0), zt && ge(ve, ["html", "head", "body"]), ve.table && (ge(ve, ["tbody"]), delete Rr.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = U;
      U = g.TRUSTED_TYPES_POLICY;
      try {
        D = oe("");
      } catch (V) {
        throw U = q, V;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (U = void 0, D = "") : (U === void 0 && (U = qe()), U && typeof D == "string" && (D = oe("")));
    et && et(g), Yn = g;
  }, mu = ge({}, [...Ua, ...Fa, ...PS]), yu = ge({}, [...Ka, ...NS]), Ny = function(g, v, q) {
    return v.namespaceURI === nr ? g === "svg" : v.namespaceURI === Bs ? g === "svg" && (q === "annotation-xml" || ga[q]) : !!mu[g];
  }, wy = function(g, v, q) {
    return v.namespaceURI === nr ? g === "math" : v.namespaceURI === Vs ? g === "math" && ma[q] : !!yu[g];
  }, Oy = function(g, v, q) {
    return v.namespaceURI === Vs && !ma[q] || v.namespaceURI === Bs && !ga[q] ? !1 : !yu[g] && (My[g] || !mu[g]);
  }, qy = function(g) {
    let v = x(g);
    (!v || !v.tagName) && (v = {
      namespaceURI: Jn,
      tagName: "template"
    });
    const q = is(g.tagName), V = is(v.tagName);
    return ha[g.namespaceURI] ? g.namespaceURI === Vs ? Ny(q, v, V) : g.namespaceURI === Bs ? wy(q, v, V) : g.namespaceURI === nr ? Oy(q, v, V) : !!(Bi === "application/xhtml+xml" && ha[g.namespaceURI]) : !1;
  }, Ur = function(g) {
    si(t.removed, {
      element: g
    });
    try {
      x(g).removeChild(g);
    } catch {
      if (h(g), !x(g))
        throw pn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ws = function(g) {
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
  }, cn = function(g, v) {
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
      if (mr || Hn)
        try {
          Ur(v);
        } catch {
        }
      else
        try {
          v.setAttribute(g, "");
        } catch {
        }
  }, Ry = function(g) {
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
      ($ ? $(q) : q.nodeType) === Ct.element && Ry(q);
      const H = y(q);
      if (H)
        for (let ie = H.length - 1; ie >= 0; --ie)
          v.push(H[ie]);
    }
  }, $y = function(g) {
    if (!gt)
      return;
    const v = [g];
    for (; v.length > 0; ) {
      const q = v.pop(), V = $ ? $(q) : q.nodeType;
      if (V === Ct.processingInstruction || V === Ct.comment && Je(Jd, q.data)) {
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
  }, bu = function(g) {
    let v = null, q = null;
    if (Ki)
      g = "<remove></remove>" + g;
    else {
      const ie = Ud(g, /^[\r\n\t ]+/);
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
    return g && q && H.insertBefore(r.createTextNode(q), H.childNodes[0] || null), Jn === nr ? st.call(v, zt ? "html" : "body")[0] : zt ? v.documentElement : H;
  }, ku = function(g) {
    const v = k ? k(g) : g.ownerDocument;
    return re.call(
      v || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Hs = function(g) {
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
      H.data = Hs(H.data), H = V.nextNode();
    const ie = (v = g.querySelectorAll) === null || v === void 0 ? void 0 : v.call(g, "template");
    ie && ii(ie, (_e) => {
      Xn(_e.content) && ba(_e.content);
    });
  }, Gs = function(g) {
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
  const Iy = function(g, v) {
    return !!(gt && g.hasChildNodes() && !Wi(g.firstElementChild) && Je(Gd, g.textContent) && Je(Gd, g.innerHTML) || gt && g.namespaceURI === nr && v === "style" && Wi(g.firstElementChild) || g.nodeType === Ct.processingInstruction || gt && g.nodeType === Ct.comment && Je(Jd, g.data));
  }, Ly = function(g, v, q) {
    if (!Rr[v] && _u(v) && (ye.tagNameCheck instanceof RegExp && Je(ye.tagNameCheck, v) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(v)))
      return !1;
    if (W && !ot[v]) {
      const V = x(g), H = y(g);
      if (H && V) {
        const ie = H.length;
        for (let _e = ie - 1; _e >= 0; --_e) {
          const Le = g === q ? p(H[_e], !0) : H[_e];
          V.insertBefore(Le, m(g));
        }
      }
    }
    return Ur(g), !0;
  }, Tu = function(g, v, q, V) {
    return g.length === 0 ? v : v === q || v === V ? at(v) : v;
  }, xu = function(g, v) {
    if (ir(fe.beforeSanitizeElements, g, null), g !== v && x(g) === null)
      return pe && Vi(g), !0;
    if (Gs(g))
      return Ur(g), !0;
    const q = Ie(A ? A(g) : g.nodeName);
    if (ve = Tu(fe.uponSanitizeElement, ve, gr, Lr), ir(fe.uponSanitizeElement, g, {
      tagName: q,
      allowedTags: ve
    }), g !== v && x(g) === null)
      return pe && Vi(g), !0;
    if (Iy(g, q))
      return Ur(g), !0;
    if (Rr[q] || !(tr.tagCheck instanceof Function && tr.tagCheck(q)) && !ve[q]) {
      const H = Ly(g, q, v);
      return H === !1 && ir(fe.afterSanitizeElements, g, null), H;
    }
    if (($ ? $(g) : g.nodeType) === Ct.element && !qy(g) || (q === "noscript" || q === "noembed" || q === "noframes") && Je(FS, g.innerHTML))
      return Ur(g), !0;
    if (rr && g.nodeType === Ct.text) {
      const H = Hs(g.textContent);
      g.textContent !== H && (si(t.removed, {
        element: g.cloneNode()
      }), g.textContent = H);
    }
    return ir(fe.afterSanitizeElements, g, null), !1;
  }, vu = function(g, v, q) {
    if ($r[v] || gt && v === "patchsrc" || gt && v === "for" && g !== "label" && g !== "output" || E && (v === "id" || v === "name") && (q in r || q in Py))
      return !1;
    const V = J[v] || tr.attributeCheck instanceof Function && tr.attributeCheck(v, g);
    if (!(Wn && Je(er, v))) {
      if (!(Vn && Je(Bn, v))) {
        if (V) {
          if (!fa[v]) {
            if (!Je(js, Xi(q, ne, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && g !== "script" && Fd(q, "data:") === 0 && zi[g])) {
                if (!(Ir && !Je(Fi, Xi(q, ne, "")))) {
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
          !(_u(g) && (ye.tagNameCheck instanceof RegExp && Je(ye.tagNameCheck, g) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(g)) && (ye.attributeNameCheck instanceof RegExp && Je(ye.attributeNameCheck, v) || ye.attributeNameCheck instanceof Function && ye.attributeNameCheck(v, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && ye.allowCustomizedBuiltInElements && (ye.tagNameCheck instanceof RegExp && Je(ye.tagNameCheck, q) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(q)))
        ) return !1;
      }
    }
    return !0;
  }, Dy = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), _u = function(g) {
    return !Dy[is(g)] && Je(ut, g);
  }, Uy = function(g, v, q, V) {
    if (U && typeof u == "object" && typeof u.getAttributeType == "function" && !q)
      switch (u.getAttributeType(g, v)) {
        case "TrustedHTML":
          return oe(V);
        case "TrustedScriptURL":
          return me(V);
      }
    return V;
  }, Fy = function(g, v, q, V) {
    try {
      q ? g.setAttributeNS(q, v, V) : g.setAttribute(v, V), Gs(g) ? Ur(g) : Dd(t.removed);
    } catch {
      cn(v, g);
    }
  }, Cu = function(g) {
    ir(fe.beforeSanitizeAttributes, g, null);
    const v = g.attributes;
    if (!v || Gs(g))
      return;
    J = Tu(fe.uponSanitizeAttribute, J, He, Dr);
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
      let dt = _e === "value" ? Ta : vS(Ta);
      if (q.attrName = yt, q.attrValue = dt, q.keepAttr = !0, q.forceKeepAttr = void 0, ir(fe.uponSanitizeAttribute, g, q), dt = q.attrValue, I && (yt === "id" || yt === "name") && Fd(dt, B) !== 0 && (cn(_e, g), dt = B + dt), gt && Je(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        cn(_e, g);
        continue;
      }
      if (yt === "attributename" && Ud(dt, "href")) {
        cn(_e, g);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          cn(_e, g);
          continue;
        }
        if (!on && Je(KS, dt)) {
          cn(_e, g);
          continue;
        }
        if (rr && (dt = Hs(dt)), !vu(H, yt, dt)) {
          cn(_e, g);
          continue;
        }
        dt = Uy(H, yt, Le, dt), dt !== Ta && Fy(g, _e, Le, dt);
      }
    }
    ir(fe.afterSanitizeAttributes, g, null);
  }, Js = function(g) {
    let v = null;
    const q = ku(g);
    for (ir(fe.beforeSanitizeShadowDOM, g, null); v = q.nextNode(); )
      if (ir(fe.uponSanitizeShadowNode, v, null), xu(v, g), Cu(v), Xn(v.content) && Js(v.content), ($ ? $(v) : v.nodeType) === Ct.element) {
        const H = S(v);
        Xn(H) && (ka(H), Js(H));
      }
    ir(fe.afterSanitizeShadowDOM, g, null);
  }, ka = function(g) {
    const v = [{
      node: g,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const q = v.pop();
      if (q.shadow) {
        Js(q.shadow);
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
    if (pa = !F, pa && (F = "<!-->"), typeof F != "string" && !Wi(F) && (F = ES(F), typeof F != "string"))
      throw pn("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    jt ? (ve = Lr, J = Dr) : ya(g), (fe.uponSanitizeElement.length > 0 || fe.uponSanitizeAttribute.length > 0) && (ve = at(ve)), fe.uponSanitizeAttribute.length > 0 && (J = at(J)), t.removed = [];
    const ie = pe && typeof F != "string" && Wi(F);
    if (ie) {
      $y(F);
      const mt = A ? A(F) : F.nodeName;
      if (typeof mt == "string") {
        const yt = Ie(mt);
        if (!ve[yt] || Rr[yt])
          throw Ws(F), pn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Gs(F))
        throw Ws(F), pn("root node is clobbered and cannot be sanitized in-place");
      try {
        ka(F);
      } catch (yt) {
        throw Ws(F), yt;
      }
    } else if (Wi(F))
      v = bu("<!---->"), q = v.ownerDocument.importNode(F, !0), q.nodeType === Ct.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? v = q : v.appendChild(q), ka(q);
    else {
      if (!mr && !rr && !zt && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return U && an ? oe(F) : F;
      if (v = bu(F), !v)
        return mr ? null : an ? D : "";
    }
    v && Ki && Ur(v.firstChild);
    const _e = ie ? F : v;
    try {
      const mt = ku(_e);
      for (; V = mt.nextNode(); )
        xu(V, _e), Cu(V), Xn(V.content) && Js(V.content);
    } catch (mt) {
      throw ie && (Ws(F), ii(t.removed, (yt) => {
        yt.element && Vi(yt.element);
      })), mt;
    }
    if (ie)
      return ii(t.removed, (mt) => {
        mt.element && Vi(mt.element);
      }), rr && ba(F), F;
    if (mr) {
      if (rr && ba(v), Hn)
        for (H = Re.call(v.ownerDocument); v.firstChild; )
          H.appendChild(v.firstChild);
      else
        H = v;
      return (J.shadowroot || J.shadowrootmode) && (H = Ft.call(n, H, !0)), H;
    }
    let Le = zt ? v.outerHTML : v.innerHTML;
    return zt && ve["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && Je(DS, v.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + Le), rr && (Le = Hs(Le)), U && an ? oe(Le) : Le;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ya(F), jt = !0, Lr = ve, Dr = J;
  }, t.clearConfig = function() {
    Yn = null, jt = !1, Lr = null, Dr = null, U = G, D = "";
  }, t.isValidAttribute = function(F, g, v) {
    Yn || ya({});
    const q = Ie(F), V = Ie(g);
    return vu(q, V, v);
  }, t.addHook = function(F, g) {
    typeof g == "function" && Ye(fe, F) && si(fe[F], g);
  }, t.removeHook = function(F, g) {
    if (Ye(fe, F)) {
      if (g !== void 0) {
        const v = TS(fe[F], g);
        return v === -1 ? void 0 : xS(fe[F], v, 1)[0];
      }
      return Dd(fe[F]);
    }
  }, t.removeHooks = function(F) {
    Ye(fe, F) && (fe[F] = []);
  }, t.removeAllHooks = function() {
    fe = Yd();
  }, t;
}
var BS = wg();
function VS({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = Y(void 0), [n, i] = he(void 0), s = ue((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = aS(p);
      if (!h)
        return !1;
      const m = w();
      return e === "protected" ? m && cS(m, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const m = w(), y = r.current;
      if (y && m && $d(m, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const S = X(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (S) {
            const M = S.getParent(), $ = S.getPreviousSibling(), A = S.getNextSibling();
            S.remove(), $ ? Eg($) : A && C(A) ? A.select(0, 0) : M?.selectStart();
          }
        } else y.kind === "selection" ? N(m) && m.removeText() : Pe(S) && uS(S);
        return !0;
      }
      if (!m)
        return !1;
      const x = lS(m, p);
      if (x) {
        if (x.kind === "verse") {
          const S = ep();
          S.add(x.node.getKey()), Tn(S);
        } else {
          const S = Do();
          S.anchor.set(x.node.getKey(), 0, "element"), S.focus.set(x.node.getKey(), x.node.getChildrenSize(), "element"), Tn(S);
        }
        return s({ key: x.node.getKey(), kind: x.kind, intent: p }), h.preventDefault(), !0;
      }
      if (N(m) && !m.isCollapsed() && jl(m)) {
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
      const m = BS.sanitize(p), y = new DOMParser().parseFromString(m, "text/html"), x = dS(Nb(t, y)), S = w();
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
        $d(w(), p) || s(void 0);
      });
    };
    return Xe(t.registerCommand(Ar, o, Ue), t.registerCommand(vn, c, Ue), t.registerCommand(kr, d, Ue), t.registerCommand(lb, c, Ue), t.registerCommand(Gc, u, Ue), t.registerCommand(Hc, c, Ue), t.registerUpdateListener(f));
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
const M0 = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function WS({ textDirection: e }) {
  const [t] = le();
  return HS(t, e), null;
}
function HS(e, t) {
  j(() => (Xd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Xd(e, t);
  })), [e, t]);
}
function Xd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function GS() {
  const [e] = le();
  return JS(e), null;
}
function JS(e) {
  j(() => {
    if (!e.hasNodes([xe, _t, Ne, ze, ft]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Xe(
      e.registerNodeTransform(ze, YS),
      e.registerNodeTransform(ze, (t) => XS(t, e)),
      e.registerNodeTransform(ft, Qd),
      e.registerNodeTransform(_t, Qd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ft, (t) => {
        bs(Sr("va"), t), bs(Sr("vp"), t);
      })
    );
  }, [e]);
}
function YS(e) {
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
  Te(r) && _l(e);
}
function XS(e, t) {
  const r = e.getParent();
  !we(r) || !e.isAttached() || jh(t, e.getKey()) && r.insertAfter(e);
}
function Qd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; be(t); )
    t = t.getLastChild();
  (L(t) || C(t) && be(t.getParent())) && e.insertBefore(ke(" "));
}
function Bl(e) {
  if (!z(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !gl(n)) ? void 0 : e;
}
function QS(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (R(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function ZS() {
  const e = w();
  if (!(!N(e) || !e.isCollapsed()))
    return Bl(QS(e.anchor));
}
function eM(e) {
  const t = w();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Og(e.target)), r ? Bl(nt(r, z)) : void 0;
}
function Og(e) {
  const t = ub(e)?.anchorNode;
  if (Xf(t))
    return Ns(t) ?? void 0;
}
function tM(e) {
  if (w())
    return;
  const t = Og(e);
  return t ? Bl(nt(t, z)) : void 0;
}
function rM() {
  const [e] = le(), t = vg(ZS);
  return j(() => {
    const r = (n) => {
      t(n) && _n(Wr);
    };
    return Xe(e.registerCommand(cr, () => {
      const n = tM(e.getRootElement());
      return n && r(n), !1;
    }, xn), e.registerCommand(Uo, (n) => {
      const i = eM(n);
      return i && r(i), !1;
    }, xn));
  }, [e, t]), null;
}
function nM({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = P_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(A_, { trigger: e, items: i });
}
function iM({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = De(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(aM, { trigger: e, harness: i }) : _(nM, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const sM = [" ", "*"];
function oM(e, t) {
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
function aM({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = he(void 0), s = Y({ query: "", options: [] }), o = Y(0), a = ue((f, p, h) => {
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
  j(() => Xe(r.registerCommand(Ar, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), db(() => {
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
  }, Ue), r.registerCommand(tp, (f) => {
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
  const c = ue(() => i(void 0), []), l = ue((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = ue((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), u = De(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    oM(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(sg, { isOpen: !0, children: ({ placement: f }) => _(
    cg,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? sM : void 0 },
    n.session
  ) });
}
function qg(e) {
  return e.replaceAll(O, "~").replace(/ {2,}/g, (r) => O.repeat(r.length));
}
function cM(e) {
  return e.replaceAll(O, " ").replaceAll("~", O);
}
let Po;
function lM(e) {
  e && (Po = e);
}
function Rg(e) {
  return hr(e);
}
function uM(e, t) {
  return e.isEmpty() ? Hf : $g(e.toJSON(), t);
}
function $g(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Vo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Hf;
  if (r.some(Rx)) {
    Po?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Ig(r), i = Vt(n, t);
  return i ? { type: vr, version: xr, content: i } : void 0;
}
function dM(e, t) {
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
function fM(e) {
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
function pM(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Sh(r, a, c), Oe({
    type: Et.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function hM(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Sh(t, o, a), Oe({
    type: ft.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function gM(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Rg(r) && t) {
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
function mM(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Oe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function yM(e, t) {
  const { unknownAttributes: r } = e;
  return Oe({ type: dh, ...r, content: t });
}
function bM(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Oe({ type: hh, marker: r, ...n, content: t });
}
function kM(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Oe({
    type: mh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function TM(e, t) {
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
    ...$p({ sid: n, eid: i, ...s }, o)
  });
}
function xM(e) {
  return e.text;
}
function vM(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Oe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function _M(e) {
  const { marker: t } = e;
  return {
    type: ko,
    marker: t === "" ? void 0 : t
  };
}
function Zd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function CM(e, t, r, n, i) {
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
      marker: Cn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = ci({
      type: s,
      marker: Cn
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
  (!n || !jo(n)) && t.forEach((l) => {
    const d = ci({
      type: s,
      marker: fi,
      eid: l
    });
    i.push(d);
  });
}
function SM(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && jo(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return Rs(i) && i.markerSyntax === "opening";
}
function MM(e) {
  let t = e;
  for (; jo(t); ) t = t.children[0];
  return t;
}
function EM(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!Rs(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = MM(e[r]);
  if (An(n) && n.text === St(t))
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
          dM(
            d,
            Vt(d.children, t)
          )
        );
        break;
      case dr.getType():
        s.push(fM(c));
        break;
      case Et.getType():
        s.push(
          pM(
            u,
            Vt(u.children, t)
          )
        );
        break;
      case _t.getType():
      case ft.getType():
        s.push(hM(c));
        break;
      case xe.getType():
        s.push(
          gM(
            f,
            Vt(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case Qe.getType():
        s.push(
          mM(
            p,
            Vt(p.children, t)
          )
        );
        break;
      case Un.getType():
        s.push(
          yM(
            c,
            Vt(c.children, t)
          )
        );
        break;
      case wi.getType():
        s.push(
          bM(
            c,
            Vt(c.children, t)
          )
        );
        break;
      case Oi.getType():
        s.push(
          kM(
            c,
            Vt(c.children, t)
          )
        );
        break;
      case Ne.getType():
        s.push(
          TM(
            h,
            Vt(
              h.children,
              t,
              EM(h.children, h.caller)
            )
          )
        );
        break;
      case Nr.getType():
      case wr.getType():
      case Gt.getType():
      case rp.getType():
      case lr.getType():
        break;
      case Ze.getType():
        if (o = Vt(
          y.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const S = y.typedIDs[Vr];
          if (S)
            CM(o, S, a, e[l + 1], s), a = S;
          else {
            const M = o.shift();
            M && (typeof M == "string" ? Zd(s, M) : s.push(M)), o.length > 0 && s.push(...o);
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
        m.text !== O && !m.text.startsWith(Xc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[Ps]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let S = xM(m);
          Rg(t) && (SM(e, l, i, n) && S.startsWith(O) && (S = S.slice(1)), S = cM(JT(S))), Zd(s, S);
        }
        break;
      case Dn.getType():
        s.push(
          vM(
            x,
            Vt(x.children, t)
          )
        );
        break;
      case qr.getType():
        s.push(_M(c));
        break;
      case qi.getType():
        Po?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Po?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function Ig(e) {
  const t = e.findIndex((r) => Vo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Ig(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Qs = {
  initialize: lM,
  deserializeEditorState: uM
}, AM = /^sd\d*$/, PM = /* @__PURE__ */ new Set([
  ...Object.entries(Za).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === b.Paragraph && !AM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function NM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (ah(i) || xh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!rx(i)) {
      t && No(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (fl(i) && PM.has(i.marker) && !No(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Lg(i.children, t).forEach((s) => {
      const o = wM(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = OM(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Lg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Dg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (jo(i)) {
      const s = Lg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(ef(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [ef(i, c.nodes)] });
      });
      return;
    }
    t && No(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function ef(e, t) {
  return { ...e, children: t };
}
function Dg(e) {
  return Fh(e) && e.number !== "";
}
function No(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Dg(r) || No(r)) : !1;
}
function wM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function OM(e) {
  return {
    type: xo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Lh
  };
}
const tf = Fg([]), qM = {
  type: rp.getType(),
  version: 1
};
let Vl = [], ee, wn, Ug, xt;
function RM(e, t) {
  Vl = [], LM(e), DM(t);
}
function $M(e = 0) {
}
function IM(e, t) {
  ee = t ?? Qo();
  let r;
  return e ? (e.type !== vr && xt?.warn(`This USJ type '${e.type}' didn't match the expected type '${vr}'.`), e.version !== xr && xt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${xr}'.`
  ), e.content.length > 0 ? (r = Ec(zr(e.content)), xs(ee) && (r = NM(r, xt))) : r = [tf]) : r = [tf], Ug?.(Vl), {
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
function LM(e) {
  e && (wn = e), e?.addMissingComments && (Ug = e.addMissingComments);
}
function DM(e) {
  e && (xt = e);
}
function Wl() {
  return hr(ee);
}
function UM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function FM(e) {
  let { marker: t } = e;
  t !== gs && xt?.warn(`Unexpected book marker '${t}'!`), t = t ?? gs;
  const { code: r } = e;
  (!r || !Lt.isValidBookCode(r)) && xt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ee?.markerMode === "editable" || ee?.markerMode === "visible" ? n.push(
    kt("marker", Me(t) + " " + r + O)
  ) : ee?.hasGutterParaMarkers && n.push(kt("marker", Me(t) + O, !0));
  const i = UM(e.content);
  i && n.push(lt(Wl() ? qg(i) : i));
  const s = Fe(e, ST);
  return Oe({
    type: Lt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: sh
  });
}
function KM(e) {
  let { marker: t } = e;
  t !== mo && xt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? mo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Fe(e, Lk);
  let a;
  ee?.markerMode === "visible" && (a = !0);
  const c = [
    lt($t(t, r) ?? "")
  ];
  return ee?.markerMode === "editable" && iE(i, s, c), ee?.markerMode === "editable" ? Oe({
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
    version: Bp
  }) : Oe({
    type: dr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: ch
  });
}
function zM(e) {
  let { marker: t } = e;
  t !== go && xt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? go;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (Bv(ee) ?? _t).getType(), c = ee?.markerMode === "editable" ? Op : Uh;
  let l, d;
  ee?.markerMode === "editable" ? l = $t(t, r) : ee?.markerMode === "visible" && (d = !0);
  const u = Fe(e, Ok);
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
function jM(e, t = [], r = !1) {
  let { marker: n } = e;
  xe.isValidMarker(n, wn?.extraValidMarkers) || xt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ee?.markerMode === "editable") {
    const [a] = t;
    An(a) ? a.text = O + a.text : a && t.unshift(lt(O));
  }
  t.length === 0 && t.push(lt(It)), Cc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Fe(e, Ak);
  return s || eE(n, o, i), s || Sc(e.marker ?? "", i, !1, r), Oe({
    type: xe.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: wp
  });
}
function Fg(e) {
  return {
    type: Jr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Wp
  };
}
function BM(e, t = []) {
  let { marker: r } = e;
  Qe.isValidMarker(r, wn?.extraValidMarkers) || xt?.warn(`Unexpected para marker '${r}'!`), r = r ?? or;
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
  )), n.push(...t), Wl()) {
    const s = n.find(
      (o) => !Rs(o) && !(An(o) && o.text === O)
    );
    An(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => O.repeat(o.length)));
  }
  const i = Fe(e, DT);
  return Oe({
    type: Qe.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: bh
  });
}
function Hl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function VM(e, t = []) {
  const r = Fe(e, PT);
  return Oe({
    ...Hl(),
    type: Un.getType(),
    unknownAttributes: r,
    children: t,
    version: fh
  });
}
function WM(e, t = []) {
  const r = Fe(e, OT), n = e.marker ?? ac, i = [];
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
    ...Hl(),
    type: wi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: gh
  });
}
function HM(e, t = []) {
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
    RT
  );
  return Oe({
    ...Hl(),
    type: Oi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: yh
  });
}
function GM(e, t) {
  const r = cx(t);
  let n = () => {
  };
  return wn?.noteCallerOnClick && (n = wn.noteCallerOnClick), Oe({
    type: Gt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Gh
  });
}
function JM(e, t) {
  let { marker: r } = e;
  Ne.isValidMarker(r, wn?.extraValidMarkers) || xt?.warn(`Unexpected note marker '${r}'!`), r = r ?? el;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Ll(ee?.noteMode), a = Fe(e, Jb), c = ee?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  ee?.markerMode === "editable" ? (l = pt(r, "opening", !1, c), s || (d = pt(r, "closing"))) : ee?.markerMode === "visible" && (l = kt("marker", Me(r) + " "), s || (d = kt("marker", rt(r))));
  const u = [];
  let f;
  if (l && u.push(l), ee?.markerMode === "editable" && !o)
    f = lt(St(i), void 0, c), u.push(f), nE(n, u), u.push(...t);
  else {
    const p = lt(O, ur, "token");
    f = GM(i, t), u.push(f, p, ...t.flatMap(YM(p)));
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
    version: xp
  });
}
function YM(e) {
  return (t) => Qp(t) ? [t] : [t, e];
}
function XM(e) {
  let { marker: t } = e;
  (!t || !Jt.isValidMarker(t, wn?.extraValidMarkers)) && xt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Fe(e, Zc), s = Ip(e);
  return Oe({
    type: Jt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: bp
  });
}
function rf(e, t = []) {
  return {
    type: Ze.getType(),
    typedIDs: { [Vr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function QM(e, t) {
  const { marker: r } = e, n = e.type, i = Fe(e, Hk), s = [];
  if (ee?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = cl(
      n,
      r,
      i
    );
    o && s.push(kt("marker", o)), a && s.push(kt("attribute", a)), s.push(...t), c && s.push(kt("attribute", c)), l && s.push(kt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    An(o) && (o.mode = "token");
  }), Oe({
    type: Dn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Zp
  });
}
function ZM(e) {
  return {
    type: qr.getType(),
    marker: e,
    text: as(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ee?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: nh
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
    type: wr.getType(),
    text: t,
    textType: e,
    version: Xp
  };
  return r && (n[Ps] = { [ol.key]: !0 }), n;
}
function vs(e, t) {
  return {
    type: Nr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Ep
  };
}
function Cc(e, t, r = !1) {
  ee?.markerMode === "editable" ? t.push(pt(e, "opening", r)) : ee?.markerMode === "visible" && t.push(kt("marker", Me(e, r)));
}
function Sc(e, t, r = !1, n = !1) {
  ee?.markerMode === "editable" ? r ? t.push(pt("", "selfClosing")) : t.push(pt(e, "closing", n)) : ee?.markerMode === "visible" && t.push(
    kt(
      "marker",
      r ? rt("") : rt(e, n)
    )
  );
}
function eE(e, t, r) {
  if (ee?.markerMode !== "editable" || !t) return;
  const n = sr(t, Os(e));
  n && r.push(lt(n, "attribute"));
}
function nf(e, t) {
  if (e.type !== "ms" || ee?.markerMode !== "editable" && ee?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Fe(e, Zc), o = Lp(
    n,
    i,
    s,
    Ip(e)
  ), a = sr(o, qs(r ?? ""));
  if (!a) return;
  const c = O + a;
  ee?.markerMode === "editable" ? t.push(lt(c, "attribute")) : t.push(kt("attribute", c));
}
function tE(e, t) {
  const r = e.marker ?? "";
  if (ee?.markerMode === "editable") {
    const n = [];
    Cc(r, n), nf(e, n), Sc(r, n, !0), t.push(vs("milestone", n));
  } else
    Cc(r, t), nf(e, t), Sc(r, t, !0);
}
function sf(e, t, r) {
  t !== void 0 && r.push(
    vs(e, [
      pt(e, "opening"),
      lt(O + t, "attribute"),
      pt(e, "closing")
    ])
  );
}
function rE(e, t) {
  ee?.markerMode === "editable" && (sf("va", e.altnumber, t), sf("vp", e.pubnumber, t));
}
function nE(e, t) {
  e !== void 0 && t.push(
    vs("cat", [
      pt("cat", "opening"),
      lt(O + e, "attribute"),
      pt("cat", "closing")
    ])
  );
}
function iE(e, t, r) {
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
function of(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function sE(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function af(e, t) {
  t.marker === Cn && t.sid !== void 0 && e.push(t.sid), t.marker === fi && t.eid !== void 0 && sE(e, t.eid);
}
function Mc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [rf(o, [...n])] : o, c = e[i];
  af(n, c);
  const l = Mc(
    e.slice(i + 1, s),
    of(t, i + 1),
    c.marker === Cn,
    n
  ), d = rf(l, [...n]), u = e[s];
  af(n, u);
  const f = Mc(
    e.slice(s + 1),
    of(t, s + 1),
    u.marker === Cn,
    n
  );
  return [...a, d, ...f];
}
function zr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(lt(Wl() ? qg(i) : i));
    else if (!i.type)
      xt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Lt.getType():
          n.push(FM(i));
          break;
        case Et.getType():
          n.push(KM(i));
          break;
        case ft.getType():
          ee?.hasSpacing || n.push(qM), n.push(zM(i)), rE(i, n);
          break;
        case xe.getType():
          n.push(
            jM(i, zr(i.content, !0), t)
          );
          break;
        case Qe.getType():
          n.push(BM(i, zr(i.content)));
          break;
        case Ne.getType():
          n.push(JM(i, zr(i.content)));
          break;
        case Jt.getType():
          kp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Vl?.push(i.sid)), n.push(XM(i)), tE(i, n);
          break;
        case qr.getType():
          n.push(ZM(i.marker ?? ""));
          break;
        case dh:
          n.push(VM(i, zr(i.content)));
          break;
        case hh:
          n.push(WM(i, zr(i.content)));
          break;
        case mh:
          n.push(HM(i, zr(i.content)));
          break;
        default:
          xt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(QM(i, zr(i.content)));
      }
  }), Mc(n, r);
}
function Ec(e) {
  const t = e.findIndex(
    (n) => ah(n) || xh(n) || fl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    wT(n)
  );
  if (t >= 0) {
    const n = Ec(e.slice(0, t)), i = e[t], s = Ec(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Fh(n)))
    return [Fg(e)];
  return e;
}
const Zr = {
  initialize: RM,
  reset: $M,
  serializeEditorState: IM
};
function Kg(e) {
  if (e && !P(e)) {
    if (C(e)) return e;
    if (R(e))
      for (const t of e.getChildren()) {
        const r = Kg(t);
        if (r) return r;
      }
  }
}
function oE() {
  const e = w();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((C(t) && !P(t) ? Mn(t) : void 0) && C(t)) {
      const i = ke(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      yi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Kg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(O) ? O : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return C(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of zg(e)) {
    if (!Mn(t)) continue;
    yi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(O) && r.setTextContent(n.slice(O.length));
  }
  return !0;
}
function zg(e) {
  const [t, r] = Jf(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!C(a) || P(a) || te(a, ae) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function aE() {
  const e = w();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return Mn(t) ? Pe(pl(t)) : !1;
}
function jg() {
  let e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !xl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (L(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = w(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!C(t) || P(t) || !Mn(t)) return !1;
  const r = pl(t);
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
  return L(a) ? hl(a) : o.select(0, 0), !0;
}
const Bg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${vh(Ee().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = yl(e), r = Sl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = ux(0, o);
        const a = Hx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Ph(c) && bl(parseInt(n, 10), c);
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
function Ac(e, t) {
  return Ne.isValidMarker(e, t) || !!Bg[e] || Qe.isValidMarker(e, t) || xe.isValidMarker(e, t);
}
function cE(e, t) {
  return xe.isNoteContentMarker(e) ? !1 : xe.isValidMarker(e, t);
}
function Vg(e, t, r, n, i, s) {
  const o = rg(
    e,
    void 0,
    void 0,
    t,
    n ?? Qo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function Pc(e, t, r, n, i, s, o) {
  if (Ne.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = Vg(
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
  const a = hE(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = w();
      N(d) && (Ih(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = sd(u, Zr, r), h = va(p);
      if (N(d)) {
        const m = d.anchor.getNode(), y = m.getParent(), x = Mn(m), S = d.anchor.key === d.focus.key;
        if (L(h) && x && S && !ja(h, o))
          dE(
            d,
            h,
            m,
            r?.markerMode === "editable"
          );
        else if (L(h) && !S && !ja(h, o) && fE(d))
          pE(d, h, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          gE(
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
          const M = L(y) ? y : void 0, $ = M ? lE(m, d.anchor.offset) : [];
          let k = (M ?? m).insertAfter(h);
          if (fr(h)) {
            const U = {
              ...r || Qo(),
              markerMode: "hidden"
            }, D = sd(
              u,
              Zr,
              U
            ), G = va(D);
            k = k.insertAfter(G);
          }
          if ($.length > 0 && M) {
            const U = wo(M).append(...$);
            k.insertAfter(U), M.isEmpty() && M.remove();
          } else C(k.getNextSibling()) || k.insertAfter(ke(O));
          R(k) && k.selectEnd();
        } else if (d.insertNodes([h]), SE(h), f) {
          const M = ep();
          M.add(h.getKey()), Tn(M);
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
function lE(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function ja(e, t) {
  return ((t ?? vo).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function uE(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(ct(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function dE(e, t, r, n) {
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
function fE(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || L(n)) continue;
    if (!C(n) || n.getType() !== ze.getType() || te(n, ae) === "attribute") return !1;
    const i = pl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Mn(n) && (r = !0);
  }
  return r;
}
function pE(e, t, r) {
  const n = zg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Mn(a)) return;
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
function hE(e, t) {
  let r = Bg[e];
  return r || (Qe.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Qe.getType(), marker: e, content: [] }] })
  } : xe.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: xe.getType(), marker: e };
      return (xe.isValidFootnoteMarker(e) || xe.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function gE(e, t) {
  const r = e.getNodes(), [n, i] = _i(e);
  let s;
  r.forEach((o, a) => {
    if (R(s) && s.isParentOf(o))
      return;
    const c = Wg(
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
    s || (s = t(), c.insertBefore(s), l = !0, L(s) && s.getChildren().some((u) => P(u) && u.getMarkerSyntax() === "opening") && uE(s, L(s.getParent()))), yE(c, s, l);
  }), (C(s) || R(s)) && s.selectEnd();
}
function _i(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Gl(e) {
  return be(e) || z(e) || z(e.getParent());
}
function Wg(e, t, r, n, i) {
  if (!Gl(e)) {
    if (C(e))
      return mE(e, t, r, n, i);
    if (R(e) && e.isInline())
      return e;
  }
}
function mE(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function yE(e, t, r) {
  if (C(t)) {
    const n = Nc(e, t);
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
    Nc(e, t), r && L(t) && t.getChildren().some((s) => P(s)) && C(e) && !P(e) && !e.getTextContent().startsWith(O) && e.setTextContent(O + e.getTextContent());
  }
}
function Nc(e, t) {
  let r = e.getTextContent();
  if (C(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    _l(n), C(n) || t.insertBefore(ke(" "));
  }
  return r;
}
function Hg(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = On(d, t);
    if (!f) return !1;
    const p = C(d) ? d.getTextContentSize() : 0;
    if (cf(f, r), C(d) && d.isAttached()) {
      const h = d.getTextContentSize(), m = Math.max(p - h, 0), y = Math.max(0, Math.min(u - m, h)), x = w();
      N(x) && x.setTextNodeRange(d, y, d, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = _i(e);
  if (!Yl(n, t, s, o)) return !1;
  const a = Jl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = On(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = Xg(u, a);
    f && (cf(f, r), l = !0);
  }), Qg(a, i), l;
}
function cf(e, t) {
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
function Jl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Wg(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    C(o) && n.push(o);
  }), n;
}
function On(e, t) {
  let r = e, n;
  for (; r && !Pe(r); ) {
    if (z(r)) return;
    !n && L(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Gg(e) {
  const t = nt(
    e,
    (r) => z(r) || Pe(r)
  );
  return z(t);
}
function Jg(e) {
  return e.filter(
    (t) => !Gl(t) && (C(t) || R(t) && t.isInline())
  );
}
function bE(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!C(i) || Gl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function kE(e, t, r) {
  return e.getChildren().some(
    (n) => R(n) && t.some((i) => n.isParentOf(i)) && !Yg(n, r)
  );
}
function Yl(e, t, r, n, i) {
  const s = Jg(e), o = bE(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = On(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !kE(l, s, o);
  });
}
function Yg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Ut(r));
}
function Xg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (R(d) && t.some((u) => d.isParentOf(u))) {
      if (!Yg(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Ut(n[s - 1]) && (s -= 1), o < n.length - 1 && Ut(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(wo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(wo(e).append(...c)), e;
}
function wo(e) {
  return fb(e);
}
function Qg(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function TE(e, t, r) {
  if (e.isCollapsed()) {
    const l = On(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Hu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = _i(e);
  if (!Yl(n, r, i, s, t)) return !1;
  const o = Jl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = On(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = Xg(d, o);
    u && (Hu(u, t), c = !0);
  }), c;
}
function xE(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = _i(e);
  if (!!!i?.some(
    (y) => Yl(s, y, o, a)
  ) && !vE(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const x = w();
    N(x) && Hg(x, y, n) && (l = !0);
  });
  const d = w();
  if (!N(d)) return l;
  const u = d.isBackward(), [f, p] = _i(d), h = Jl(
    d.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const m = h.filter(
    (y) => !Gg(y) && !On(y, t)
  );
  return m.length > 0 && (_E(m).forEach((y) => CE(y, t)), l = !0), Qg(h, u), l;
}
function vE(e, t) {
  return Jg(e).some(
    (r) => !Gg(r) && !On(r, t)
  );
}
function _E(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function CE(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => L(a) && a.getMarker() === t
  ), s = i ? wo(i) : _r(t);
  e[0].insertBefore(s), s.append(...e), i === r || Nc(e[0], s);
}
function SE(e) {
  Te(e) && (_l(e.getPreviousSibling()), zh(e.getNextSibling()));
}
const Zg = {
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
}, lf = "psc-active-text", Zs = "psc-empty-text";
function ME({ viewOptions: e }) {
  const [t] = le(), r = Y(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(lf), r.current = o, o && t.getElementByKey(o)?.classList.add(lf);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Uo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Zs}`);
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
          const u = Ba(), f = EE(), p = [], h = [];
          return Ee().getChildren().forEach((m) => {
            if (!R(m)) return;
            const { emptyKeys: y, nonEmptyKeys: x } = PE(m);
            p.push(...y), h.push(...x);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(Zs) : t.getElementByKey(u)?.classList.add(Zs);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(Zs));
      }),
      t.registerCommand(
        Jc,
        () => (i(void 0), !1),
        Rt
      ),
      t.registerCommand(
        pb,
        () => {
          const o = t.getEditorState().read(Ba);
          return o !== r.current && i(o), !1;
        },
        Rt
      )
    ];
    return i(t.getEditorState().read(Ba)), Xe(...s);
  }, [t, n]), null;
}
function Ba() {
  return AE(w() ?? void 0)?.getKey();
}
function EE() {
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
function AE(e) {
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function PE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Te(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Te(c)) break;
      if (!(vt(c) || P(c)) && c.getTextContent().replaceAll(lo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const NE = /^\+/;
function Xl(e, t) {
  const r = t.replace(NE, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function em(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function tm(e, t) {
  return em(e, t) !== void 0;
}
function wc(e, t) {
  const r = em(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Oo(e, t, r) {
  const n = R(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function wE(e, t, r, n, i) {
  const s = Xl(n, t);
  if (!s) {
    Oo(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Oo(e, "invalid", i);
}
function us(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (L(s)) {
      const o = s.getMarker();
      i || wE(s, o, t, r, n), us(s, t, r, n, i || o === "xq");
    } else if (Te(s)) {
      if (i) continue;
      const o = Xl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else z(s) ? us(s, s.getMarker(), r, n, i) : we(s) || R(s) && us(s, t, r, n, i);
}
function OE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Xl(e, a);
    if (!c) {
      Oo(o, "unknown", r), wc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    wc(n, l) || Oo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ee().getChildren())
    we(o) || (ht(o) || Ve(o) ? i(o, o.getMarker()) : se(o) ? (i(o, o.getMarker()), s(o) && us(o, o.getMarker(), e, r, !1)) : R(o) && s(o) && us(o, "p", e, r, !1));
  return r;
}
function qE(e) {
  return !!e?.includes("(basic)");
}
function RE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function rm(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Ac(e, t);
}
function Ql(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function nm(e, t) {
  const r = [];
  for (const n of t) {
    const i = Ql(e, n);
    i && wc(r, i);
  }
  return r;
}
function so(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: RE(e.description),
    isBasic: qE(e.description)
  };
}
function $E(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Oc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : $E(e.marker, t.marker);
}
function qc(e, t, r) {
  if (t.noteMarker) return [];
  const n = nm(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && rm(i.marker, r)
  ).filter((i) => {
    const s = Ql(e, i.marker);
    return s !== void 0 && tm(n, s);
  }).map((i) => so(i, "paragraph")).sort(Oc);
}
function IE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => rm(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => so(c, "character")).sort(Oc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => so(c, "character")),
    ...a.map((c) => so(c, "note"))
  ].sort(Oc);
}
function LE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function DE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function UE(e, t, r) {
  return [
    ...LE(e, t.openCharMarkers),
    ...IE(e, t, r)
  ].sort(DE);
}
function FE(e, t, r) {
  if (t.source === "paragraph") return qc(e, t, r);
  const n = UE(e, t, r);
  return n.length > 0 ? n : qc(e, t, r);
}
function KE(e, t, r) {
  const n = qc(e, t, r), i = nm(e, t.previousParaMarkers), s = Ql(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && tm(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const zn = String.raw`\w-`, im = "a-z0-9", zE = `[a-z][${im}]*`, jE = new RegExp(
  String.raw`^\\(\+?[${zn}]+)[ \u00A0]$`
), sm = new RegExp(String.raw`^\\(\+?[${zn}]+)$`), BE = new RegExp(String.raw`^\\\+?[${zn}]*\*$`), VE = new RegExp(
  String.raw`^\\(\+?[${zn}]+)(?:[ \u00A0]|$)`
), WE = new RegExp(
  String.raw`^\\(\+?)([${zn}]+)`
), HE = new RegExp(
  String.raw`\\\+?[${zn}]+(?:\\?\*|[ \u00A0])`
), GE = new RegExp(
  String.raw`\\\+?[${zn}]*$`
), JE = new RegExp(
  String.raw`^\\(${zE})( |$)`
), YE = new RegExp(
  String.raw`\\[${im}+*]*$`,
  "i"
), tt = "￼";
function om(e) {
  return e.length > 1 && e.startsWith(O) && e.charAt(1) !== tt ? e.slice(1) : e;
}
function uf(e) {
  return Rs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function am(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Zr.serializeEditorState(
    {
      type: vr,
      version: xr,
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
  for (; uf(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== St(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && uf(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function eo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Zi(e, t) {
  GE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += tt;
}
function qt(e) {
  return e.replaceAll(O, " ");
}
function XE(e, t, r = !1) {
  if (hr(t)) return qt(e);
  if (e === O) return " ";
  const n = r && e.startsWith(O), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(O, "~");
}
function ds(e) {
  const t = e.getTextContent();
  return Fn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function ra(e, t) {
  const r = e[t];
  if (!$e(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Bo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function cm(e) {
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
function Zl(e) {
  return !!e.getUnknownAttributes();
}
function ia(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Ko(e);
}
function lm(e, t) {
  return $e(e) ? !ia(e.getMarker(), t) : z(e) || we(e) ? !0 : Ae(e) ? Zl(e) : L(e) ? um(e, t) : !1;
}
function um(e, t) {
  if (Rk(e)) return !0;
  const r = e.getMarker();
  return !ak(r) && t(r) === void 0;
}
const wt = "", Ot = "";
function df(e) {
  return e.flatMap((t) => Ke(t) ? t.getChildren() : [t]);
}
function li(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if ($e(s)) {
      const o = ra(e, i);
      ia(s.getMarker(), r) && cm(o) ? (t.push(
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
      ), li(df(o), t, r), t.push(Ot)) : t.push(tt), i += o.length;
    } else if (Ae(s)) {
      const o = na(e, i);
      Zl(s) ? t.push(tt) : (t.push(
        wt,
        "verse",
        qt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), li(df(o), t, r), t.push(Ot)), i += o.length;
    } else P(s) ? t.push(wt, "marker", qt(s.getTextContent()), Ot) : rn(s) ? t.push(wt, "unmatched", qt(s.getTextContent()), Ot) : lm(s, r) ? t.push(tt) : Lo(s) ? t.push(" ") : C(s) ? t.push(
      qt(
        n ? om(ds(s)) : ds(s)
      )
    ) : L(s) ? (t.push(wt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), li(s.getChildren(), t, r, !0), t.push(Ot)) : be(s) ? li(s.getChildren(), t, r, n) : R(s) ? (t.push(wt, s.getType()), li(s.getChildren(), t, r), t.push(Ot)) : t.push(tt);
  }
}
function Li(e, t) {
  const r = [];
  return li(e, r, t), r.join("");
}
function Er(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Ci(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function eu(e) {
  return e.type ?? "";
}
function dm(e, t, r) {
  return t === "closing" ? rt(e, r) : t === "selfClosing" ? rt("") : Me(e, r);
}
function Va(e, t) {
  const r = e[t];
  if (!(!r || eu(r) !== "attribute-run"))
    return Er(r) ?? [];
}
function Di(e, t) {
  const r = [];
  return ss(e, r, t), r.join("");
}
function ss(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = eu(s);
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
      ), ss(d, t, r), t.push(Ot), i += 1) : t.push(tt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(tt);
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
          dm(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(wt, "char", JSON.stringify(l.unknownAttributes ?? null)), ss(Er(s) ?? [], t, r, !0), t.push(Ot);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(tt);
      continue;
    }
    if (o === "unmatched") {
      t.push(wt, "unmatched", qt(Ci(s) ?? "")), t.push(Ot);
      continue;
    }
    const a = Ci(s);
    if (a !== void 0) {
      t.push(qt(n ? om(a) : a));
      continue;
    }
    const c = Er(s);
    c ? (t.push(wt, o), ss(c, t, r), t.push(Ot)) : t.push(tt);
  }
}
function sa(e) {
  let t = 0;
  for (const r of e) {
    const n = Er(r);
    if (n) {
      t += sa(n);
      continue;
    }
    const i = Ci(r);
    if (i !== void 0)
      for (const s of i) s === tt && t++;
  }
  return t;
}
function _s(e, t, r, n, i) {
  qn(e.getChildren(), t, r, n, i);
}
function qn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      eo(t, a, qt(a.getTextContent()));
    else if ($e(a)) {
      s();
      const c = ra(e, o);
      ia(a.getMarker(), r) && cm(c) ? qn(c, t, r, n) : Zi(t, [a, ...c]), o += c.length;
    } else if (z(a) || we(a))
      s(), Zi(t, [a]);
    else if (Ae(a)) {
      s();
      const c = na(e, o);
      Zl(a) ? Zi(t, [a, ...c]) : (eo(t, a, qt(ds(a))), qn(c, t, r, n)), o += c.length;
    } else if (L(a))
      s(), um(a, r) ? Zi(t, [a]) : _s(a, t, r, n, { pending: !0 });
    else if (Lo(a))
      s(), eo(t, a, " ");
    else if (C(a)) {
      const c = Fn(a) || te(a, ae) === "attribute", l = s() && !c;
      eo(
        t,
        a,
        c ? qt(ds(a)) : XE(ds(a), n, l)
      );
    } else R(a) ? _s(a, t, r, n, i) : (s(), Zi(t, [a]));
  }
}
function fm(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (we(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return _s(e, i, t, r), i;
}
function tu(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!se(i)) return;
    const s = fm(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function pm(e, t) {
  let r = 0;
  const n = (i) => {
    if (C(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(tt);
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
function Rc(e, t = []) {
  for (const r of e)
    Ae(r) ? t.push(r) : R(r) && Rc(r.getChildren(), t);
  return t;
}
function hm(e) {
  let t = 0;
  const r = (n) => {
    if (C(n))
      for (const i of n.getTextContent()) i === tt && t++;
    else R(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function jn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === tt && t++;
    else r.content && (t += jn(r.content));
  return t;
}
function gm(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), R(i) && _s(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const Rn = /\s/;
function mm(e) {
  return e.filter(oa).length;
}
function oa(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return C(t) && !P(t) && te(t, ae) === "attribute";
}
function QE(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return P(t) || oa(e);
}
function ff(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && oa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      Rn.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function $n(e, t, r) {
  const n = ff(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !QE(i) ? ff(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: mm(e.spans) };
}
function Wa(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function ZE(e) {
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
function e1(e) {
  const t = X(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Ae(t) ? na(n, i) : $e(t) ? ra(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function Si(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e, s = mm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
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
        if (c === 0 && (l === 0 || !Rn.test(x))) {
          if (m) {
            a = { key: p.key, offset: y };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? Rn.test(x) || c-- : l--;
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
    const p = ZE(u);
    if (p) return p;
  }
  if (u?.isSentinel) {
    const p = e1(u);
    if (p) return p;
  }
  const f = [...i].reverse().find((p) => !p.isSentinel && !Wa(p));
  if (f) return { key: f.key, offset: f.end - f.start, type: "text" };
}
function ym(e, t = []) {
  for (const r of e)
    be(r) && t.push(r), R(r) && ym(r.getChildren(), t);
  return t;
}
function bm(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), R(e) && e.getChildren().forEach((r) => bm(r, t)), t;
}
function t1(e, t) {
  const r = $n(e, t.key, 0);
  if (r)
    return t.isSentinel ? { kind: "preserved", anchor: r, key: t.key } : { kind: "byte", anchor: r };
}
function km(e, t) {
  const r = [];
  for (const n of ym(e)) {
    const i = bm(n), s = t.spans.filter((m) => i.has(m.key)), o = s.find((m) => m.isSentinel || !P(X(m.key))) ?? s[0], a = s[s.length - 1];
    if (!o || !a) continue;
    const c = t1(t, o), l = $n(t, a.key, a.end - a.start);
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
function r1(e, t, r) {
  const n = Tm(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!be(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function n1(e, t) {
  const r = Tm(e);
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
function Tm(e) {
  const t = X(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = Ae(t) ? na(r, n) : $e(t) ? ra(r, n) : [];
  return [t, ...i];
}
function pf(e) {
  return e.type === "text" && P(X(e.key));
}
function xm(e, t) {
  if (e.length === 0) return;
  const r = w()?.clone() ?? null;
  for (const n of e)
    for (const i of n.annotations) {
      const s = t(), o = Si(s, n.start.anchor, {
        addressDisplayBytes: !0
      }), a = Si(s, n.end);
      if (!o || !a || pf(o) || pf(a)) continue;
      if (o.key === a.key && o.offset === a.offset && o.type === a.type) {
        n.start.kind === "preserved" && n1(n.start.key, i);
        continue;
      }
      const c = Do();
      c.anchor.set(o.key, o.offset, o.type), c.focus.set(a.key, a.offset, a.type), rl(
        c,
        i.type,
        i.id,
        i.onClick,
        i.onRemove,
        i.onMouseEnter,
        i.onMouseLeave
      ), n.start.kind === "preserved" && r1(n.start.key, i.type, i.id);
    }
  Tn(r);
}
function vm(e, t, r) {
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
function _m(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(R)?.selectStart();
      return;
    }
    vm(gm(e, n, i), t, e);
  }
}
function i1(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(R)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  qn(e, s, n, i), vm({ text: s.text, spans: s.spans }, t, e);
}
function Cm(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = tu(e, n, r);
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
    c.isCollapsed() && (o = $n(s, c.anchor.key, c.anchor.offset));
  }
  const l = km(e, s), d = Pr(s.text, {
    getMarker: n
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (jn(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Zr.serializeEditorState(
    { type: vr, version: xr, content: d },
    r
  );
  if (Di(u.root.children, n) === Li(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = u.root.children.map((y) => Es(y));
  if (hm(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = Rc(e).map((y) => ({
    number: y.getNumber(),
    sid: y.getSid()
  })), h = e[0];
  f.forEach((y) => h.insertBefore(y)), pm(f, s.sentinels), e.forEach((y) => y.remove());
  const m = Rc(f);
  for (let y = 0; y < p.length && y < m.length; y++)
    m[y].getNumber() === p[y].number && m[y].setSid(p[y].sid);
  return xm(l, () => gm(f, n, r)), _m(f, o, a, n, r), !0;
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
  return qn(c, l, t, r), { out: l, contentNodes: c };
}
function Sm(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(tt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function s1(e, t) {
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
    d.isCollapsed() && (c = $n(o, d.anchor.key, d.anchor.offset));
  }
  const u = km(a, o), f = Pr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (f.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (jn(f) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], m = Sm(h), y = am(e, h, m, r);
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
  if (hm(S) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), x;
  const M = a[0];
  if (M)
    S.forEach((k) => M.insertBefore(k));
  else {
    const k = e.getChildren().find((U) => P(U) && U.getMarkerSyntax() === "closing");
    S.forEach((U) => k ? k.insertBefore(U) : e.append(U));
  }
  pm(S, o.sentinels);
  const $ = new Set(o.sentinels.flat().map((k) => k.getKey()));
  a.forEach((k) => {
    $.has(k.getKey()) || (be(k) && (k.getWritable().__suppressOnRemoveCallbacks = !0), k.remove());
  });
  const A = () => Cs(e, n, r);
  return xm(
    u,
    () => A()?.out ?? { text: "", spans: [], sentinels: [] }
  ), i1(
    A()?.contentNodes ?? S,
    c,
    l,
    n,
    r
  ), !0;
}
const Mm = /* @__PURE__ */ new Set(["ca", "cp"]), ru = "cp";
function Em(e) {
  if (!Yt(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (_s(e, t, ar, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Pr(r, { getMarker: ar }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === ru)
  );
}
function Ui(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (L(r) && Mm.has(r.getMarker()) || Em(r)) {
      t.push(r);
      continue;
    }
    se(r) && r.getMarker() === ru && t.push(r);
    break;
  }
  return t;
}
function o1(e) {
  const t = (n) => L(n) && Mm.has(n.getMarker()) || Em(n);
  if (t(e) || se(e) && e.getMarker() === ru)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ce(n)) return n;
      if (!t(n)) return;
    }
}
function nu(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ui(e);
  if (n.some((s) => se(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (qn(e.getChildren(), i, t, r), qn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function a1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ui(e)], o = nu(e, n, r);
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
    l.isCollapsed() && (a = $n(o, l.anchor.key, l.anchor.offset));
  }
  const d = Pr(o.text, { getMarker: n }), [u] = d;
  if (d.length === 0 || typeof u != "object" || u.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (jn(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (u.sid = e.getSid());
  const f = Zr.serializeEditorState(
    { type: vr, version: xr, content: d },
    r
  );
  if (Di(f.root.children, n) === Li(s, n)) {
    let h = !1;
    return e.getNumber() !== (u.number ?? "") && (e.setNumber(u.number ?? ""), h = !0), e.getAltnumber() !== u.altnumber && (e.setAltnumber(u.altnumber), h = !0), e.getPubnumber() !== u.pubnumber && (e.setPubnumber(u.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => Es(h));
  return Ce(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), _m(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Ss(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (we(n)) return;
    !t && (z(n) || se(n) || Ce(n)) && (t = n), Gf(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? o1(r) : void 0) ?? t;
}
function Wt(e, t) {
  const r = Ss(e);
  return r ? z(r) ? s1(r, t) : Ce(r) ? a1(r, t) : Cm([r], t) : !1;
}
const c1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function hf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !c1.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function oo(e, t) {
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
          t.push(`\\${n}`), hf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), oo(r.content, t), hf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), oo(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), oo(r.content, t);
      }
    }
}
function gf(e, t, r) {
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
  const o = fm(n, t, r);
  if (!o) return !1;
  const a = Pr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    Rn.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  oo(a, l);
  for (const d of l.join("").replaceAll(O, "~")) {
    if (Rn.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function l1(e) {
  return [ct(e), Go()];
}
function iu(e) {
  Xt(e, 2);
}
function u1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function su(e) {
  const t = u1(e);
  e.splice(0, 0, l1(e.getMarker())), t && iu(e);
}
function qo(e, t) {
  e.setMarker(t), su(e), iu(e);
}
function d1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Fn(n)) {
    if (C(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(O), bt(n, ae, ur), n.setMode("token");
      return;
    }
    if (wh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Go());
  }
}
function mf(e, t, r) {
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
function f1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = fs(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = fs(r.getNode())?.is(s) ?? !1, a = fs(n.getNode())?.is(s) ?? !1;
    return !(o && !mf(r, s, "start") || a && !mf(n, s, "end"));
  });
}
function $c(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of f1(r)) t.add(n.getKey());
}
function p1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!N(r) || !r.isCollapsed()) return;
  const n = fs(r.focus.getNode());
  n && t.add(n.getKey());
}
function h1(e) {
  const t = w();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && ($c(e), t.removeText());
}
function g1(e, t) {
  if (!Ri(t.viewOptions)) return;
  if (Ut(e.getFirstChild())) {
    d1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    su(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => se(o) && !o.is(e))) {
      qo(e, or), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (se(r)) {
    const n = e.getChildren().filter((a) => !Fn(a)), i = w();
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
  qo(e, or);
}
function m1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = sr(t, Os(e.getMarker()));
  return r === "" ? void 0 : r;
}
function y1(e) {
  const t = e.getChildren().filter((s) => !P(s) && te(s, ae) !== "attribute"), r = t[0];
  r && C(r) && r.getTextContent().startsWith(O) && r.setTextContent(r.getTextContent().slice(1));
  const n = m1(e);
  n && t.push(ke(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function b1(e, t) {
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
function k1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    y1(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Wt(e, t);
}
function Am(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Ri(r)) {
    qo(e, t);
    return;
  }
  lg(e, t);
}
function Pm() {
  const e = w();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Nm(e);
    return t !== "removed" ? t : (Ic(), "handled");
  }
  return Ic() ? "handled" : "declined";
}
function T1(e, t) {
  if (!t) return e;
  const r = JE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function yf(e, t) {
  const r = w();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!wm())
      return "declined";
  } else {
    const s = Nm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => T1(s, t)
  );
  bf(n ?? "");
  for (const s of i)
    Ic(), bf(s);
  return "handled";
}
function x1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Ns(n);
  if (!i) return !1;
  const s = Qt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !C(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Nm(e) {
  const t = Qt(e.anchor.getNode()), r = Qt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), v1() ? "removed" : "needs-plain-split");
}
function bf(e) {
  if (e === "") return;
  const t = w();
  N(t) && t.insertText(e);
}
function v1() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Qt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function wm() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Qt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Ic() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = wm();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = _r("fp", { closed: "false" });
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
    d && (dx(d), i.append(d));
  }
  return i.getChildren().every(P) && i.append(ke(It)), Om(i), !0;
}
function Om(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (C(t)) {
    const r = t.getTextContent().startsWith(O) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (R(t)) {
    Om(t);
    return;
  }
  e.selectEnd();
}
function _1(e) {
  const t = [];
  let r = e;
  for (; r; )
    L(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function C1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ee().getChildren()) {
    if (t && n.is(t)) break;
    (ht(n) || Ve(n) || se(n)) && r.push(n.getMarker());
  }
  return r;
}
function S1(e) {
  let t = e;
  for (; R(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function M1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ut(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Fn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(S1(i)) && r === 0 : !1;
}
function E1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ut(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Fn(i) && t.is(i) && r === 0;
}
function A1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function P1() {
  const e = w();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = nt(t, se), s = !n && (!i || E1(i, t, r)) ? "paragraph" : "character", o = Qt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: C1(t),
    openCharMarkers: _1(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: xl(t, r),
    anchorRect: A1()
  };
}
function N1() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!C(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = YE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function w1(e, t, r) {
  Am(e, t, r), iu(e);
}
function O1(e, t, r) {
  const n = w();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = nt(i, se);
  if (t === "backslash" && s && M1(s, i, n.focus.offset)) {
    w1(s, e, r);
    return;
  }
  Rm(e, r);
}
function q1(e, t) {
  const r = w();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function qm(e) {
  const t = w();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function R1(e, t, r, n) {
  if (N(w()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && N1(), e.kind === "closeTag") {
    qm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Pm() !== "declined") return;
  if (e.kind === "paragraph" && Qe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    O1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ne.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Vg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  Pc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Ei(), reference: r });
}
function Rm(e, t) {
  const r = w();
  if (!N(r)) return;
  const n = Ri(t);
  if (jg()) {
    const s = w();
    if (!N(s)) return;
    const o = nt(s.anchor.getNode(), se);
    if (!o) return;
    o.setMarker(e), n && su(o);
    return;
  }
  const i = r.insertParagraph();
  se(i) && (n ? qo(i, e) : i.setMarker(e));
}
function $1() {
  const [e] = le();
  return j(() => e.registerCommand(np, () => !0, Rt), [e]), null;
}
function $m(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Ne.isValidMarker(r) || Ko(r));
}
function I1(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Ne.isValidMarker(r) || Ko(r));
}
function L1(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = VE.exec(e)?.[1];
  return r === void 0 ? !1 : !$m(r, t);
}
function Im(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !L1(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!se(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (se(i))
    return [i, r];
}
function Lm(e, t) {
  const r = Im(e, t.getMarker);
  return r !== void 0 && Cm(r, t);
}
function D1(e, t) {
  const r = w();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Dm(e) {
  const t = WE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function U1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Dm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function F1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (z(e.getParent()) && C(r)) {
    const n = r.getNextSibling();
    if (L(n)) {
      hl(n);
      return;
    }
  }
  C(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function kf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Dm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  F1(e);
}
function Tf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Um(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Wt(e, r);
  const n = U1(e), i = e.getParent();
  if (se(i)) {
    if (!$m(t, r.getMarker))
      return Lm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Wt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Tf(s, t) && kf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (L(i) || z(i)) {
    const s = t.replace(/^\+/, "");
    if (!(L(i) ? I1(t, r.getMarker) : Ne.isValidMarker(s)))
      return Wt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Wt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (D1(c, rt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Tf(a, s) && kf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Wt(e, r);
}
function K1(e) {
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
function z1(e, t) {
  const r = e.getTextContent();
  if (tn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ke(e.getParent()) && nl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !K1(e)) {
    yk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = jE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Um(e, n[1], t);
      return;
    }
    if (BE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Wt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = rt(e.getMarker(), e.getNested());
    if (L(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ke(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function j1(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (ih(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Fm(e) {
  if (!gp(e)?.length)
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
const es = Fm("v"), B1 = Fm("c"), xf = /^[ \u00A0]*$/;
function vf(e, t, r) {
  const n = e.getNextSibling();
  if (C(n) && n.getType() === ze.getType() && n.getMode() === "normal" && te(n, ae) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = ke(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function V1(e, t) {
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
    if (l && xf.test(l[2] ?? "")) {
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
      vf(e, u, h);
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
  if (t.pendingKeys.delete(e.getKey()), xf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent($t("v", o)), a && vf(e, a, a.length);
}
const W1 = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function H1(e, t) {
  const r = e.getParent();
  if (!z(r) || r.getIsCollapsed() !== !1 || !gp(r.getMarker())?.includes("caller")) return !1;
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
  const o = W1.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(St(a)), !0;
}
function G1(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!C(t)) return;
  const r = $t("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = B1.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Km(e) {
  if ($e(e)) {
    const { wrapper: t } = Bo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (z(e)) {
    const { wrapper: t } = Up(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ce(e)) {
    const t = [], r = Fp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = zp(e);
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
function J1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Km(e).some((n) => r.is(n));
}
function Y1(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && se(e) && wh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of hs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Us(l, e) && (i || J1(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Km(e))
    l.remove(), n = !0;
  let s = !1;
  if (L(e)) {
    const l = Kk(e);
    l !== void 0 && nk(l) && (Jp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of hs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (vx(l, e)) {
        bs(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && qh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Jo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function _f(e) {
  return C(e) && e.getType() === ze.getType() && e.getMode() === "normal" && te(e, ae) !== "attribute";
}
function X1(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = X(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && _f(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && _f(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function to(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = X1(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = X(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (tn(c)) continue;
      const h = sm.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = Um(c, h[1], e) || n : r === "idle" && gf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Lm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Wt(c, e) || n;
      continue;
    }
    const l = Yr(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = Y1(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && gf(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = Wt(d, e) || n;
    }
  }
  return n;
}
function zm(e) {
  if (rn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (L(t)) return os(t) !== void 0;
  return !1;
}
function Q1(e) {
  const t = Yr(e);
  if (!t) return !1;
  const r = Sr(t.kind);
  return !Jo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Cf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ht(t) || we(t) || ph(t)) return !0;
  return !1;
}
function Z1(e, t) {
  const r = e.getTextContent(), n = te(e, ae), i = e.getParent();
  if (n !== "attribute" && Ce(i)) {
    r.replace(/^[ \u00A0]+/, "") === $t("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (H1(e, t)) return;
  if (n === "attribute") {
    Q1(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && zm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Cf(e))
      t.pendingKeys.add(e.getKey());
    else if (jp(e)) t.pendingKeys.add(e.getKey());
    else if (Ce(Ss(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      L(a) && Yp(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Cf(e)) return;
  const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (HE.test(o)) {
    if (fk(r)) {
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
function eA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : qh(e, t);
}
function tA(e) {
  const t = (r) => {
    if (P(r)) {
      tn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (rn(r)) {
      ih(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of hs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Us(n, r) || eA(n, r)) && e.pendingKeys.add(r.getKey());
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
      (i.includes("\\") || i.includes("|") && zm(r) || i.includes("//") || jp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (L(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!we(r) && !ht(r)) {
      if (Ke(r) && r.getChildrenSize() === 0) {
        const n = Yr(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      R(r) && r.getChildren().forEach(t);
    }
  };
  Ee().getChildren().forEach(t);
}
function rA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = te(e, ae);
  if (r === "attribute" || r === ur) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ht(o) || Ce(o) || we(o)) return;
  const n = t.startsWith(O) && L(e.getParent()), i = n ? t.slice(1) : t, s = (n ? O : "") + i.replace(/ (?=[ \u00A0])/g, O).replace(new RegExp("(?<=\\u00A0) ", "g"), O);
  s !== t && e.setTextContent(s);
}
function nA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function Lc(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(nA(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function iA(e) {
  const t = Lc(e);
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
    if (u > 0 && l.dispatchCommand(ao, void 0), d === "") return;
    const f = w();
    N(f) && f.insertText(d);
  }), !0;
}
function sA(e) {
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
function oA(e) {
  const t = w();
  if (!N(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(O, " ")
  }, n = bb(e), i = kb(e);
  return n && (r["text/html"] = sA(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Sf(e, t, r) {
  const n = w();
  if (!N(n) || n.isCollapsed()) return !1;
  const i = oA(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return yb(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const jm = ip(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ha(e) {
  const t = e();
  return _n(Yf), _n(yp), t;
}
const Mf = 8, aA = 1e3;
function oi(e, t) {
  const r = Ae(e) ? ["va", "vp"] : $e(e) ? ["milestone"] : z(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    Ex(Sr(n), e, t.pendingKeys);
}
function cA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Yc) || i.updateTags.has(di)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = X(o);
        if (!c) continue;
        const l = Yr(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = X(o.getKey());
        c?.isAttached() && Sr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Xe(
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
    e.registerMutationListener(wr, r),
    e.registerMutationListener(Nr, r)
  );
}
function lA(e, t, r) {
  return Xe(
    e.registerCommand(
      kr,
      (n) => {
        if (mg()) return !1;
        const i = Lc(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(O, "~") : s).split(`
`);
          let c = yf(a, t.getMarker);
          if (c === "declined" && x1(e) && (c = yf(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Tr
    ),
    e.registerCommand(
      kr,
      (n) => {
        const i = Lc(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !aE()) return !1;
        n?.preventDefault();
        const o = w();
        return N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(ao, void 0), a === "") return;
          const l = w();
          N(l) && l.insertText(a);
        }), !0;
      },
      Ue
    ),
    e.registerCommand(
      kr,
      () => (t.splitExpected.current = !0, !1),
      Rt
    )
  );
}
function uA({
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
    const d = bx(i, l.pendingKeys);
    let u, f = !1, p, h = !1, m = !1, y = 0;
    const x = () => y < Mf ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Mf} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), S = (k, U = "departure") => {
      i.update(() => {
        y = Ha(
          () => to(l, k, U)
        ) ? y + 1 : 0;
      });
    };
    let M;
    const $ = () => {
      if (M !== void 0 && clearTimeout(M), M = void 0, m || l.pendingKeys.size === 0) return;
      const k = c.current ?? aA;
      k < 0 || (M = setTimeout(() => {
        M = void 0, !(m || l.pendingKeys.size === 0) && (f || x() || S(void 0, "idle"));
      }, k));
    }, A = Xe(
      i.registerNodeTransform(lr, (k) => {
        if (i.isComposing()) return;
        z1(k, l);
        const U = Yr(k);
        U && (Ae(U.owner) || z(U.owner) || Ce(U.owner) || $e(U.owner) && Bo(U.owner).wrapper === void 0) && oi(U.owner, l);
      }),
      i.registerNodeTransform(ft, (k) => {
        i.isComposing() || (V1(k, l), oi(k, l));
      }),
      i.registerNodeTransform(Et, (k) => {
        i.isComposing() || (G1(k), k.isAttached() && oi(k, l));
      }),
      i.registerNodeTransform(Qe, (k) => {
        i.isComposing() || g1(k, l);
      }),
      i.registerNodeTransform(xe, (k) => {
        if (!i.isComposing()) {
          k1(k, l);
          for (const U of ["separator", "char"])
            k.isAttached() && Us(Sr(U), k) && l.pendingKeys.add(k.getKey());
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
      i.registerNodeTransform(Nr, (k) => {
        if (i.isComposing()) return;
        const U = Yr(k);
        U && ($e(U.owner) || Ae(U.owner) || z(U.owner) || Ce(U.owner)) && oi(U.owner, l);
      }),
      i.registerNodeTransform(Ne, (k) => {
        i.isComposing() || (b1(k, l), oi(k, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(qr, (k) => {
        i.isComposing() || j1(k, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(ze, (k) => {
        i.isComposing() || Z1(k, l);
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
      cA(i, l),
      ...o ? [
        i.registerNodeTransform(ze, (k) => {
          i.isComposing() || rA(k);
        }),
        i.registerCommand(
          Fo,
          (k) => Sf(
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
          vn,
          (k) => Sf(
            k && typeof k == "object" && "clipboardData" in k ? k : null,
            i,
            !0
          ),
          Ue
        ),
        i.registerCommand(
          kr,
          (k) => iA(
            // Same jsdom-safe duck-check as COPY above.
            k && typeof k == "object" && "clipboardData" in k ? k : null
          ),
          Ue
        )
      ] : [],
      i.registerCommand(
        vn,
        () => ($c(l), !1),
        Tr
      ),
      i.registerCommand(
        Hc,
        () => (i.isComposing() || h1(l), !1),
        ui
      ),
      i.registerCommand(
        Uo,
        () => (f = !1, y = 0, $(), !1),
        Rt
      ),
      i.registerCommand(
        Ar,
        (k) => (f = !1, y = 0, $(), (k.key === "Backspace" || k.key === "Delete") && ($c(l), p1(l)), i.isComposing() || !k.ctrlKey || k.altKey || k.shiftKey || k.metaKey || k.key !== " " && k.code !== "Space" || !oE() ? !1 : (k.preventDefault(), !0)),
        Ue
      ),
      i.registerCommand(
        tp,
        (k) => {
          const U = Pm();
          U === "needs-plain-split" && i.dispatchCommand(ao, void 0);
          const D = U !== "declined" || Ax();
          return D && k?.preventDefault(), to(l), D;
        },
        Ue
      ),
      i.registerCommand(
        ao,
        () => (l.splitExpected.current = !0, jg()),
        Ue
      ),
      lA(i, l, o),
      i.registerCommand(
        jm,
        () => {
          if (f) return !0;
          const k = i.getRootElement(), U = k?.ownerDocument, D = !!k && !!U && U.hasFocus() && k.contains(U.activeElement);
          let G;
          if (D) {
            const Q = w();
            G = N(Q) ? Q.focus.key : u;
          }
          return Ha(() => to(l, G)), !0;
        },
        Rt
      ),
      i.registerCommand(
        Jc,
        () => {
          if (f) return !1;
          const k = w(), U = N(k) ? k.focus.key : u;
          return Ha(() => to(l, U)), !1;
        },
        Rt
      ),
      i.registerUpdateListener(({ editorState: k, tags: U }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const D = k.read(() => {
          const Q = w();
          return N(Q) ? Q.focus.key : void 0;
        }), G = p;
        if (D !== void 0 && (p = D), U.has(Yc)) {
          l.pendingKeys.clear(), k.read(() => tA(l)), f = !0, D !== void 0 && (u = D);
          return;
        }
        if (U.has(Wr)) {
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
const dA = ["status_unknown", "status_invalid"], Bm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, fA = Object.values(Bm);
function pA(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Bm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Ef(e) {
  e.classList.remove(...dA), e.removeAttribute("aria-description"), fA.includes(e.title) && e.removeAttribute("title");
}
function hA(e, t, r, n) {
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
function gA(e) {
  const t = X(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function mA({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? vo;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = OE(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || gA(f)) continue;
            const h = X(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Ef(p);
        }
        for (const [f, p] of u) {
          const h = n.getElementByKey(f);
          h && pA(h, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          hA(l, d, u, f)
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
function Fs(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Er(o);
    a && R(s) && Fs(s.getChildren(), a, r);
  }
}
function Vm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Er(o);
      if (a) {
        n(a);
        continue;
      }
      const c = Ci(o);
      if (c === void 0 || !c.includes(tt)) continue;
      const l = c.split(tt), d = [];
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
function Ks(e, t, r) {
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
function Wm(e, t) {
  const r = [];
  for (const n of e)
    lm(n, t) || ((se(n) || L(n)) && r.push(n.getMarker()), R(n) && r.push(...Wm(n.getChildren(), t)));
  return r;
}
function Hm(e) {
  const t = [];
  for (const r of e) {
    const n = eu(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Er(r);
    i && t.push(...Hm(i));
  }
  return t;
}
function ou(e, t, r) {
  const n = Wm(e, r), i = Hm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function Gm(e, t) {
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
function au(e, t) {
  const r = Jm(e, t);
  return r ? e.text.slice(0, r.start) + e.text.slice(r.end) : e.text;
}
function Jm(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function Ym(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = tu(e, o, s);
  if (!c) return;
  const l = i ? au(c, i) : c.text, d = Pr(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (jn(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = Zr.serializeEditorState(
    { type: vr, version: xr, content: d },
    s
  ).root.children;
  if (sa(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Ks(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Di(u, o) === Li(e, o) && ou(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Vm(u, f.serialized);
  const h = yA(e), m = Xm(u);
  for (let y = 0; y < h.length && y < m.length; y++)
    h[y].sid !== void 0 && m[y].number === h[y].number && (m[y].sid = h[y].sid);
  return u;
}
function yA(e) {
  const t = [], r = (n) => {
    Ae(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : R(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Xm(e) {
  const t = [];
  for (const r of e) {
    Rp(r) && t.push(r);
    const n = Er(r);
    n && t.push(...Xm(n));
  }
  return t;
}
function bA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Cs(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? au(l, i) : l.text, f = Pr(u, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (jn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], m = Sm(h), y = e.getCategory() !== m, x = am(e, h, m, s);
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
  const M = Ks(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Di(S, o) === Li(d, o) && ou(d, S, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: d, category: m, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Vm(S, M.serialized), { rebuilt: S, contentNodes: d, category: m, categoryChanged: y };
}
function Af(e) {
  return e.$?.textType;
}
function kA(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Af(e) === Af(t);
}
function TA(e) {
  const t = [];
  for (const r of e) {
    const n = X(r);
    n?.isAttached() && we(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function xA(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!z(t)) return;
  const r = e.getTextContent();
  if (tn(e)) return;
  const n = sm.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Pf(e, t) {
  const r = e;
  r.marker = t, r.text = dm(t, r.markerSyntax, r.nested);
}
function Qm(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ne.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Pf(a.node, s);
  const c = n.getChildren().filter(P).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Pf(l.node, s);
}
function Zm(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = nu(e, i, n);
  if (!o) return;
  const a = r ? au(o, r) : o.text, c = Pr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (jn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = Zr.serializeEditorState(
    { type: vr, version: xr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...Ui(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Di(d, i) === Li(u, i) && ou(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function ey(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (u) => {
    z(u) ? s.set(u.getKey(), u) : Ce(u) ? o.set(u.getKey(), u) : n.set(u.getKey(), [u]);
  };
  for (const u of e) {
    const f = X(u);
    if (!f?.isAttached()) continue;
    const p = Ss(f);
    if (p) {
      if (c(p), P(f)) {
        const h = Im(f, t.getMarker);
        h && i.push(h);
      }
      if (z(p)) {
        const h = xA(f);
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
  const d = TA(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: d,
    huskKeys: new Set(d.map((u) => u.getKey()))
  };
}
function ty(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && Ci(r), s = n && Ci(n);
  r && n && i !== void 0 && s !== void 0 && kA(r, n) && (r.text = i + s, e.splice(t, 1));
}
function aa(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Er(s.node) : void 0;
  if (!s || !o) return !1;
  const a = bA(e, t, r, n, i);
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
function vA(e, t, r, n, i) {
  const s = Gm(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: d, huskKeys: u } = ey(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  Fs(Ee().getChildren(), e.root.children, f);
  for (const p of l.values()) Qm(p, f);
  for (const p of a.values())
    aa(p, f, r, u, s);
  for (const p of o.values()) {
    const h = f.get(p[0].getKey());
    if (!h) continue;
    const m = Ym(p, f, r, u, s);
    if (!m) continue;
    const y = h.siblings.indexOf(h.node);
    y < 0 || h.siblings.splice(y, p.length, ...m);
  }
  for (const p of c.values()) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = 1 + Ui(p).length, y = Zm(p, r, s);
    if (!y) continue;
    const x = h.siblings.indexOf(h.node);
    x < 0 || h.siblings.splice(x, m, ...y);
  }
  for (const p of d) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || ty(h.siblings, m);
  }
  return $g(e, r.viewOptions);
}
function _A({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = Ri(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        Qe,
        (i) => CA(i, t)
      );
  }, [r, n, t]), null;
}
function CA(e, t) {
  e.getMarker() !== or && (e.isEmpty() || Ut(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${or}" (key ${e.getKey()})`
  ), e.setMarker(or)));
}
function ro(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const SA = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function zs(e) {
  return SA.exec(e)?.[1] ?? e;
}
function ca(e, t) {
  const r = e.jsonPath.slice(zs(e.jsonPath).length);
  return { ...e, jsonPath: `${hn(t)}${r}` };
}
function MA(e, t) {
  let r = Ee();
  for (let n = 0; n < t.length; n += 1) {
    if (!R(r)) return;
    const i = nn(r, hr(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function EA(e, t) {
  const r = Mi(zs(t.jsonPath));
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
  const i = [n.liveIndex, ...r.slice(1)], s = MA(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: ca(t, i) };
}
function Dc(e, t) {
  t.add(e.getKey()), R(e) && e.getChildren().forEach((r) => Dc(r, t));
}
function ry(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function Uc(e, t, r) {
  const n = (u, f) => {
    const p = $n(e, u, f), h = ry(e, u, f);
    return p && h ? { anchor: p, position: h.start + f } : void 0;
  }, i = (u) => {
    const f = u.end - u.start, p = $n(e, u.key, f);
    return p ? { anchor: p, position: u.start + f } : void 0;
  };
  if (!R(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((u) => Dc(u, s));
  const o = [...e.spans].reverse().find((u) => s.has(u.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  Dc(t, a);
  const c = e.spans.find((u) => a.has(u.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((u) => !a.has(u.key) && X(u.key)?.isBefore(t));
  if (l) return i(l);
  const d = e.spans[0];
  return d && !d.isSentinel ? n(d.key, 0) : void 0;
}
function ny(e, t) {
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
function iy(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
function AA(e, t, r) {
  const [n, i] = mc(t, r.viewOptions);
  if (!n || i === void 0) return;
  const s = ny(e, n);
  if (!s) {
    const c = Uc(e, n, i);
    if (!c) return;
    const l = e.text[c.position];
    return {
      kind: "anchor",
      anchor: c.anchor,
      atWordByte: l !== void 0 && !Rn.test(l)
    };
  }
  const o = iy(s.member, n);
  if (!o) return;
  const a = z(s.member) ? Cs(s.member, r.getMarker, r.viewOptions)?.out : void 0;
  return {
    kind: "preserved",
    sentinelIndex: s.sentinelIndex,
    memberIndex: s.memberIndex,
    path: o,
    offset: i,
    type: R(n) ? "element" : "text",
    noteAnchor: a && Uc(a, n, i)?.anchor
  };
}
function PA(e, t) {
  if (t.type !== "text") return t;
  const r = ry(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && Rn.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function sy(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function NA(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function wA(e, t, r, n) {
  const i = NA(r, n), s = i && t.liveFragment?.sentinels[i.sentinelIndex]?.[i.memberIndex];
  if (!s?.isAttached()) return;
  const o = e.byFirstLiveKey.get(s.getKey());
  if (o?.kind === "note")
    return n.noteAnchor && o.liveFragment ? sy(
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
function OA(e, t, r) {
  const { plan: n } = r, { liveFragment: i, scratchFragment: s, sentinelMap: o } = n;
  if (!i || !s || !o) return;
  const a = ca(r.location, r.scratchIndexes), c = n.scratch.getEditorState().read(() => AA(s, a, e.tier2));
  if (!c) return;
  if (c.kind === "preserved")
    return wA(t, n, o, c);
  const l = Si(i, c.anchor, {
    addressDisplayBytes: !Vc(r.location)
  });
  if (l)
    return sy(
      n,
      c.atWordByte ? PA(i, l) : l
    );
}
function Nf(e, t, r) {
  const n = EA(t, r);
  if (!n) return;
  if (n.kind === "live") return n.location;
  const i = OA(e, t, n), s = i && X(i.key);
  return s ? Pn(s, i.offset, t.viewOptions) : void 0;
}
function qA(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = Nf(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = Nf(e, t, r.end);
  if (i)
    return { ...r, start: n, end: i };
}
function RA(e, t) {
  const r = Mi(zs(t.jsonPath));
  return r.length === 0 ? t : ca(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function $A(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function IA(e, t) {
  const r = t.liveNodes[0], n = $A(e, t);
  if (n) {
    const s = ay(e, n, r, 0);
    return s && Mi(zs(s.jsonPath));
  }
  const i = mn(r);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function LA(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function DA(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function UA(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!R(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return Pn(s, n, i);
  }
}
function oy(e, t, r, n, i, s, o) {
  const a = ny(r, i);
  if (a) {
    const u = r.sentinels[a.sentinelIndex];
    if (!t[a.sentinelIndex]?.some((h) => h !== void 0)) {
      const h = u[0].getParent();
      return h ? oy(
        e,
        t,
        r,
        n,
        h,
        u[0].getIndexWithinParent(),
        o
      ) : void 0;
    }
    const f = iy(a.member, i);
    if (!f) return;
    const p = t[a.sentinelIndex]?.[a.memberIndex];
    return p ? e.scratch.getEditorState().read(
      () => UA(n, p, f, s, o)
    ) : void 0;
  }
  const c = Uc(r, i, DA(e, i, s));
  if (!c) return;
  const { anchor: l } = c, d = !Vc(
    Pn(i, s, o)
  );
  return e.scratch.getEditorState().read(() => {
    const u = Si(n, l, { addressDisplayBytes: d }), f = u && X(u.key);
    return f ? Pn(f, u.offset, o) : void 0;
  });
}
function ay(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, sentinelMap: o } = t;
  if (!i || !s || !o) return;
  const a = oy(
    t,
    o,
    i,
    s,
    r,
    n,
    e.viewOptions
  );
  if (!a) return;
  const c = LA(
    t,
    IA(e, t),
    Mi(zs(a.jsonPath))
  );
  return c && ca(a, c);
}
function wf(e, t, r) {
  const n = e.planContaining(t);
  return n ? ay(e, n, t, r) : RA(e, Pn(t, r, e.viewOptions));
}
function FA(e) {
  const t = ql(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = w();
  if (!N(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = wf(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = wf(e, o.getNode(), o.offset);
  if (a)
    return { start: s, end: a };
}
function cy(e, t, r) {
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
function ly(e, t, r) {
  if (e === "para") return tu(t, r.getMarker, r.viewOptions);
  if (e === "chapter") {
    const i = t.find(Ce);
    return i && nu(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(z);
  return n && Cs(n, r.getMarker, r.viewOptions)?.out;
}
function la(e) {
  const t = e.exportJSON();
  return R(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(la(r))), t;
}
function KA(e, t) {
  const r = hb({
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
const Of = "\0";
function uy(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), R(r) && uy(r.getChildren(), t);
  return t;
}
function zA(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(Of), a = uy(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(Of);
}
function cu(e, t = []) {
  for (const r of e)
    z(r) && t.push(r), R(r) && cu(r.getChildren(), t);
  return t;
}
function jA(e, t, r) {
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
function BA(e, t) {
  return e.sentinels.filter(
    (n, i) => n.length > 0 && !t[i]?.some((s) => s !== void 0)
  ).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? cy(n, s.start, s.end) : n;
  }, e);
}
function ua(e, t, r, n, i, s, o) {
  const a = KA(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l } = a.getEditorState().read(() => ({
    settledCount: nn(
      Ee(),
      hr(o.tier2.viewOptions)
    ).length,
    scratchFragment: ly(e, Ee().getChildren(), o.tier2)
  })), d = jA(
    r?.sentinels ?? [],
    s?.live,
    l?.sentinels ?? []
  );
  return {
    kind: e,
    liveNodes: t,
    liveFragment: r && d ? BA(r, d) : r,
    liveCut: n,
    scratch: a,
    scratchFragment: l,
    settledCount: c,
    sentinelMap: d
  };
}
function lu(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = Jm(e, t);
  return r ? {
    liveFragment: cy(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function uu(e, t) {
  for (const r of e.noteGlyphRenames.values())
    Qm(r, t);
}
function VA(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = lu(t, i), a = la(e), c = /* @__PURE__ */ new Map();
  if (Fs([e], [a], c), uu(r, c), !aa(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && Ks(t, c, r.huskKeys);
  return ua("note", [e], s, o, [a], l, n);
}
function WA(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = lu(t, i), a = e.map(la), c = /* @__PURE__ */ new Map();
  Fs(e, a, c), uu(r, c), cu(e).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => aa(u, c, n.tier2, r.huskKeys, i)
  );
  const l = Ym(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const d = t && Ks(t, c, r.huskKeys);
  return ua("para", e, s, o, l, d, n);
}
function HA(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = lu(t, n), o = Zm(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...Ui(e)];
  return ua("chapter", a, i, s, o, void 0, r);
}
function GA(e, t, r, n, i, s) {
  const o = la(e), a = /* @__PURE__ */ new Map();
  Fs([e], [o], a), uu(n, a), cu([e]).filter((d) => n.noteScopes.has(d.getKey())).forEach(
    (d) => aa(d, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const d of r) {
    const u = a.get(d.getKey());
    if (!u) continue;
    const f = u.siblings.indexOf(u.node);
    f < 0 || (ty(u.siblings, f), c.add(d.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Ks(t, a, c);
  return ua("para", [e], t, void 0, [o], l, i);
}
function JA(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function qf(e) {
  return {
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (t) => t,
    settledToLiveTopIndex: (t) => ({ liveIndex: t, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e
  };
}
function YA(e, t) {
  const r = nn(Ee(), t), n = [], i = [];
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
function Rf(e) {
  const t = Gm(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), qf(e.tier2.viewOptions);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = ey(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const h = f.liveNodes[0].getKey();
    n.set(h, f), f.liveNodes.forEach((m) => i.set(m.getKey(), f)), p && f.liveNodes.forEach((m) => s.set(m.getKey(), f));
  }, c = (f, p, h, m) => {
    o.add(f);
    const y = ly(p, h, e.tier2), x = zA(
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
        (p) => VA(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => WA(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...Ui(f)],
        (p) => HA(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!se(p) || JA(f, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(f), l.set(p.getKey(), h);
  }
  for (const [f, { para: p, husks: h }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (m) => GA(p, m, h, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0) return qf(e.tier2.viewOptions);
  const { liveToSettled: d, settledToLive: u } = YA(
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
function XA({
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
    i.scrRef = e, i.onScrRefChange = t, Ro(s, e) || QA(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Lt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Fc(r);
        $f(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: no(s) === no(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        Ee().getChildren().filter(Ve).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (Fc(r) || $f(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: no(a) === no(c)
      }));
    };
    return Xe(
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
        return i.phase === "idle" && rP(i, eP()), !1;
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
    return Xe(
      r.registerMutationListener(_t, i),
      r.registerMutationListener(ft, i)
    );
  }, [r]), j(() => {
    const i = () => oP(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function QA(e, t, r) {
  if (ZA(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Fc(t);
  (!n || n === r.book) && t.update(() => dy(r.chapterNum, r.verseNum), {
    tag: Wr
  });
}
function ZA(e, t) {
  const r = e.pendingEchoes.findIndex((n) => Ro(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function eP() {
  const e = w(), t = yl(e);
  if (!t) return;
  const r = du(), n = _h(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Cl(t, e), { verseNum: o, verse: a } = Xx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Fc(e) {
  return e.getEditorState().read(() => du()?.getCode() || void 0);
}
function du() {
  return Ee().getChildren().find(ht);
}
function $f(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Ga(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Ga(e, t), e.phase = "navigating") : i && Ga(e, t), r && r !== e.scrRef.book && hy(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Ga(e, t) {
  queueMicrotask(() => {
    t.update(
      () => dy(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Wr }
    );
  });
}
function dy(e, t) {
  const r = yl(w()), n = Sl(r)?.getNumber(), i = _h(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Ph(n) ? py(t, n) : parseInt(n, 10) === t))
    return;
  const o = Ee().getChildren(), a = vh(o, e);
  if (!a) return;
  const c = ox(o, a), l = ZT(c, !0);
  sx(c, l);
  let d;
  try {
    d = Wx(c, t);
  } catch {
    return;
  }
  d && (se(d) ? !C(d.getFirstChild()) && Ii(d) || Xt(d, 0) : tP(d));
}
function tP(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || Te(n)) {
    Xt(t, r);
    return;
  }
  const i = Ho(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (C(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = R(n) && !z(n) ? fy(n) : void 0;
  s ? s.select(0, 0) : Xt(t, r);
}
function fy(e) {
  const t = e.getFirstChild();
  if (C(t)) return t;
  if (R(t) && !z(t)) return fy(t);
}
function no(e) {
  return e.read(() => {
    const t = Ee().getChildren().find(Ve);
    return `${du()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function rP(e, t) {
  e.phase !== "navigating" && t && (nP(t, e.scrRef) || hy(e, iP(t, e.scrRef)));
}
function nP(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? py(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function py(e, t) {
  try {
    return bl(e, t);
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
function hy(e, t) {
  return Ro(t, e.scrRef) || e.pendingEchoes.some((r) => Ro(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > sP && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Ro(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function oP(e) {
  e.phase = "idle";
}
function aP(e) {
  return ht(e) ? `${e.__code}` : Ce(e) ? `${e.__marker} "${e.__number}"` : L(e) ? `${e.__marker}` : Ls(e) ? `${e.__marker} "${e.__number}"` : pr(e) ? `${e.__caller}` : Kn(e) ? `${e.__marker} "${e.__number}"` : z(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : se(e) ? `${e.__marker}` : C(e) ? `"${e.__text}"${cP(e)}` : be(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ae(e) ? `${e.__marker} "${e.__number}"` : "";
}
function cP(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ps]) : "";
}
function lP() {
  const [e] = le();
  return /* @__PURE__ */ _(
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
const gy = Bf(null), If = 4;
function uP({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Y(null), s = Vf(gy);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function dP({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = he(), [s, o] = he(), a = ue(
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
  }, [n, s]), /* @__PURE__ */ _(gy.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
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
  const a = Y(null), c = Y(null), [l, d] = he(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: m } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + If}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
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
          const { top: m } = p.getBoundingClientRect(), y = m + p.offsetHeight + If;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Se(kn, { children: [
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
    l && bn(
      /* @__PURE__ */ _(dP, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const Kc = {
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
}, zc = {
  ...Kc,
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
  return /* @__PURE__ */ _(
    fP,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + hP(t),
      buttonLabel: gP(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Kc).map((n) => /* @__PURE__ */ Se(
        uP,
        {
          className: "item block-marker " + mP(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: Kc[n] })
          ]
        },
        n
      ))
    }
  );
}
function hP(e) {
  return e && e in zc ? e : "ban";
}
function gP(e) {
  return e && e in zc ? zc[e] : "No Style";
}
function mP(e) {
  return e ? "active dropdown-item-active" : "";
}
function Lf() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const yP = In(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = he(s), [c, l] = he(), [d, u] = he(!1), [f, p] = he(!1), h = ue(
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
    Tr
  ), [s]), /* @__PURE__ */ Se(kn, { children: [
    /* @__PURE__ */ _(_g, { onStateChange: h }),
    /* @__PURE__ */ Se("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(sp, void 0);
          },
          title: co ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(op, void 0);
          },
          title: co ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(Lf, {}),
      o === s && /* @__PURE__ */ Se(kn, { children: [
        /* @__PURE__ */ _(
          pP,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ _(Lf, {})
      ] }),
      /* @__PURE__ */ _("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), bP = Qo(), kP = {}, TP = {};
function xP() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Df(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
const my = In(function({
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
  const u = Y(null), f = Y(null), p = Y(null), h = Y(t), m = Y(!1), y = Y(void 0), x = Y(void 0), S = Y(void 0), M = Y({ entries: /* @__PURE__ */ new Map() }), $ = Y(0), A = Y(!0), k = Y(void 0), U = Y(!1), [D, G] = he(t), [Q, ce] = he(0), [de, oe] = he(), {
    isReadonly: me = !1,
    structureProtectionMode: qe = "off",
    hasExternalUI: Z = !1,
    hasSpellCheck: K = !1,
    textDirection: re = "ltr",
    markerMenuTrigger: Re = "\\",
    view: st,
    nodes: Ft,
    debug: fe = !1,
    contextMenu: Kt,
    styleInfo: At,
    markerSettleDelayMs: da
  } = a ?? TP, er = st ?? bP, Bn = xs(er) && (er.markerMode !== "hidden" || !er.hasSpacing || er.hasGutterParaMarkers || er.hasActiveTextFocusBox) ? {
    ...er,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : er, Fi = Y(Bn);
  Pt(Fi.current, Bn) || (Fi.current = Bn);
  const ne = Fi.current, ut = De(() => Ft ?? kP, [Ft]), js = De(() => Kt, [Kt]), ve = De(
    () => Lx(At ?? vo),
    [At]
  ), gr = Y(c);
  Pt(gr.current, c) || (gr.current = c);
  const J = gr.current, He = xs(ne), ye = me || He, Rr = Bn !== er;
  j(() => {
    He && !me && J?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Rr && J?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [He, me, Rr, J]);
  const $r = Y(null), tr = De(() => {
    if (ne.markerMode !== "editable") return;
    const E = At ?? vo;
    return {
      getContext: () => $r.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (I) => FE(
        E,
        I,
        ut.extraValidMarkers
      ),
      getEnterItems: (I) => KE(
        E,
        I,
        ut.extraValidMarkers
      ),
      apply: (I, B) => {
        const W = $r.current;
        W && (B.trigger === "enter" ? W.splitParagraphWithMarker(I.marker) : W.applyMarkerMenuSelection(I, B));
      },
      commitTypedCloser: (I) => {
        $r.current?.commitTypedCloser(I);
      }
    };
  }, [ne, At, ut.extraValidMarkers]), Vn = (E) => {
    U.current || (U.current = !0, gr.current?.warn(
      `Editor: cannot ${E} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Wn = (E) => {
    if (He)
      throw new Error(
        `Cannot ${E} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Ir = (E) => {
    if (Wn(E), ye) throw new Error(`Cannot ${E} in readonly mode`);
  }, on = De(
    () => [Ze, ...He ? p_ : ig],
    [He]
  ), rr = De(
    () => ({
      namespace: "platformEditor",
      theme: { ...Zg, showCharMarkerTitles: ne.showCharMarkerTitles },
      editable: !ye,
      editorState: void 0,
      // Handling of errors during update
      onError(E) {
        throw E;
      },
      nodes: on
    }),
    [ye, on, ne.showCharMarkerTitles]
  );
  Qs.initialize(J);
  function gt(E) {
    if (E !== void 0 && !cE(E, ut.extraValidMarkers))
      throw new Error(`Unsupported character marker '${E}'`);
  }
  const zt = ue(() => {
    const E = u.current;
    if (!E) return h.current;
    const I = wa(E), B = x.current;
    if ((!I || I.size === 0) && !B)
      return m.current && (m.current = !1, h.current = Qs.deserializeEditorState(E.getEditorState(), ne) ?? h.current), h.current;
    const W = E.getEditorState(), pe = W.toJSON();
    return W.read(
      () => vA(
        pe,
        I ?? /* @__PURE__ */ new Set(),
        { viewOptions: ne, getMarker: ve, logger: J },
        B,
        S.current
      )
    ) ?? h.current;
  }, [ne, ve, J]), jt = ue(() => {
    const E = u.current;
    if (!E) return;
    const I = {
      pendedKeys: wa(E) ?? /* @__PURE__ */ new Set(),
      transientInput: x.current,
      lastKnownCaret: S.current,
      tier2: { viewOptions: ne, getMarker: ve, logger: J },
      nodes: on,
      cache: M.current
    };
    return ro(I) && I.cache.entries.clear(), I;
  }, [ne, ve, J, on]), Lr = ue(
    (E) => {
      const I = u.current, B = jt();
      if (!(!I || !B))
        return ro(B) ? E : I.getEditorState().read(() => {
          const W = Rf(B);
          return qA(B, W, E);
        });
    },
    [jt]
  );
  j(() => (A.current = !0, () => {
    A.current = !1;
  }), []);
  const Dr = ue(
    (E, I) => E.read(() => {
      const B = jt(), W = B && FA(Rf(B));
      return !W && !He && N(w()) && J?.warn(
        `${I} refused: the selection could not be expressed against the document the host is reading`
      ), W;
    }),
    [jt, He, J]
  ), Ki = ue(
    (E) => {
      if (!i) return;
      const I = u.current, B = jt();
      $.current += 1;
      const W = $.current;
      if (!I || !B || ro(B)) {
        i(E);
        return;
      }
      queueMicrotask(() => {
        if (!A.current || W !== $.current || u.current !== I) return;
        const pe = Dr(I, "onSelectionChange");
        W === $.current && i(pe);
      });
    },
    [i, jt, Dr]
  ), mr = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const E = u.current?.getRootElement();
      return !!E && E.ownerDocument.activeElement === E;
    },
    undo() {
      u.current?.dispatchCommand(sp, void 0);
    },
    redo() {
      u.current?.dispatchCommand(op, void 0);
    },
    cut() {
      Ir("cut"), u.current?.dispatchCommand(vn, null);
    },
    copy() {
      u.current?.dispatchCommand(Fo, null);
    },
    paste() {
      Ir("paste"), u.current && Kl(u.current);
    },
    pastePlainText() {
      Ir("paste as plain text"), u.current && zl(u.current);
    },
    getUsj() {
      return zt();
    },
    commitPendingMarkerEdits() {
      u.current?.update(
        () => {
          u.current?.dispatchCommand(jm, void 0);
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
      if (He && I === "remote") {
        gr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Wn("apply an update"), u.current?.update(
        () => {
          I === "remote" && _n(di), $_(E, ne, ut, J);
        },
        { discrete: !0 }
      );
      const B = u.current?.getEditorState();
      if (!B) return;
      const W = Qs.deserializeEditorState(B, ne);
      if (W) {
        const pe = !Pt(h.current, W);
        if (pe && (h.current = W), pe || !Pt(D, W)) {
          const Ge = ld(E, B, "apply");
          k.current = W, s?.(W, E, I, Ge);
        }
      }
    },
    replaceEmbedUpdate(E, I) {
      const B = u.current?.read(() => lv(E, I));
      B ? this.applyUpdate(B) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${E}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (He) {
        Vn("get the selection");
        return;
      }
      const E = u.current;
      if (!E) return;
      E.read(() => {
      });
      const I = jt();
      return !I || ro(I) ? E.read(() => ql(ne)) : Dr(E, "getSelection");
    },
    setSelection(E) {
      if (He) {
        Vn("set the selection");
        return;
      }
      const I = Lr(E);
      if (!I) {
        J?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      u.current?.update(() => {
        const B = Ol(I, ne);
        B !== void 0 && (Tn(B), (!Ei().isEditable() || Df(B.anchor) && Df(B.focus)) && u.current?.dispatchCommand(cr, void 0));
      });
    },
    setAnnotation(E, I, B, W, pe) {
      if (He) {
        Vn("set an annotation");
        return;
      }
      let Ge, ot, Gn, zi;
      typeof W == "function" || W === void 0 ? (Ge = W, ot = pe) : (Ge = W.onClick, ot = W.onRemove, Gn = W.onMouseEnter, zi = W.onMouseLeave);
      const ji = Lr(E);
      if (!ji) {
        J?.warn(
          `setAnnotation refused for ${I} "${B}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        ji,
        Lu(I),
        B,
        Ge,
        ot,
        Gn,
        zi
      );
    },
    removeAnnotation(E, I) {
      f.current?.removeAnnotation(Lu(E), I);
    },
    formatPara(E) {
      Ir("format a paragraph"), u.current?.update(() => {
        const I = w();
        if (!N(I)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${E}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        _b(I, () => ms(E));
        const B = w();
        if (!N(B)) return;
        const W = /* @__PURE__ */ new Set();
        B.getNodes().forEach((pe) => {
          const Ge = pe.getTopLevelElement();
          se(Ge) && W.add(Ge);
        }), W.forEach((pe) => Am(pe, E, ne));
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
          N(B) && (I = Hg(B, E, ne));
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
          N(W) && (B = TE(W, E, I));
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
          N(W) && (B = xE(
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
      if (!Ac(E, ut.extraValidMarkers))
        throw new Error(`Unsupported marker '${E}'`);
      const I = Pc(
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
        return u.current?.getEditorState().read(() => P1());
    },
    applyMarkerMenuSelection(E, I) {
      if (me) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (E.kind !== "closeTag" && !Ac(E.marker, ut.extraValidMarkers))
        throw new Error(`Unsupported marker '${E.marker}'`);
      let B;
      return u.current.update(() => {
        B = R1(E, I, r, {
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
        Rm(E, ne);
      });
    },
    commitTypedMarker(E, I) {
      if (me) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let B = !1;
      return u.current.update(() => {
        B = q1(E, I), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(E) {
      if (me) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let I = !1;
      return u.current.update(() => {
        I = qm(E), I || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), I;
    },
    insertNote(E, I, B) {
      Ir("insert a note");
      const W = B && Lr(B);
      if (B && !W) {
        J?.warn(
          `insertNote refused for \\${E}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      u.current?.update(() => {
        const pe = rg(
          E,
          I,
          W,
          r,
          ne,
          ut,
          J
        );
        pe && !pe.getIsCollapsed() && (y.current = pe.getKey());
      });
    },
    selectNote(E) {
      u.current?.update(() => {
        const I = kd(E);
        I && (u_(I, ne), I.getIsCollapsed() || (y.current = I.getKey()));
      });
    },
    getNoteOps(E) {
      return u.current?.read(() => {
        const I = kd(E);
        if (I)
          return El(I);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  $r.current = mr, Bc(d, () => mr), j(() => {
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
        B.size === 0 && W.size === 0 || I.has(Qc) || I.has(di) || Nu.some((pe) => I.has(pe)) && (m.current = !0);
      });
  }, []);
  const Hn = ue(
    (E, I, B, W) => {
      if (He) return;
      const pe = Qs.deserializeEditorState(E, ne);
      if (pe) {
        const Ge = !Pt(h.current, pe);
        if (Ge && (h.current = pe), Ge || !Pt(D, pe)) {
          const ot = ld(W, E);
          k.current = pe, s?.(pe, W, "local", ot);
        }
      }
    },
    [D, s, ne, He]
  );
  j(() => {
    const E = u.current;
    if (!(!E || !s))
      return E.registerUpdateListener(({ tags: I, dirtyElements: B, dirtyLeaves: W }) => {
        !I.has(Yc) && (B.size === 0 && W.size === 0 || I.has(di) || !wa(E)?.size) || queueMicrotask(() => {
          const pe = zt();
          !pe || Pt(k.current, pe) || (k.current = pe, s(pe, void 0, "local", void 0));
        });
      });
  }, [s, zt]);
  const an = ue(
    (E) => {
      oe(E.contextMarker), o?.(E);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Se(lp, { initialConfig: rr, children: [
      /* @__PURE__ */ _(RC, { isEditable: !ye }),
      /* @__PURE__ */ Se("div", { className: "editor-container", children: [
        Z ? /* @__PURE__ */ _(_g, { onStateChange: an }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (ye ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              yP,
              {
                ref: p,
                editorRef: $r,
                isReadonly: ye,
                onStateChange: an
              }
            )
          }
        ),
        /* @__PURE__ */ Se("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(dp, { editorRef: u }),
          /* @__PURE__ */ _(
            vb,
            {
              contentEditable: /* @__PURE__ */ _(
                up,
                {
                  className: `editor-input usfm ${Vv(ne).join(" ")}${ne.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ne.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: K
                }
              ),
              placeholder: /* @__PURE__ */ _(xP, {}),
              ErrorBoundary: fp
            }
          ),
          Z && /* @__PURE__ */ _(qC, {}),
          /* @__PURE__ */ _(pp, {}),
          r && n && /* @__PURE__ */ _(XA, { scrRef: r, onScrRefChange: n }),
          r && !Z && /* @__PURE__ */ _(
            iM,
            {
              trigger: Re,
              scrRef: r,
              contextMarker: de,
              getMarkerAction: (E) => Pc(
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
            LC,
            {
              scripture: D,
              scriptureRef: h,
              nodeOptions: ut,
              editorAdaptor: Zr,
              viewOptions: ne,
              logger: J
            },
            Q
          ),
          /* @__PURE__ */ _(nS, { onChange: Ki, viewOptions: ne }),
          /* @__PURE__ */ _(
            q_,
            {
              onChange: Hn,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Nu
            }
          ),
          /* @__PURE__ */ _(ME, { viewOptions: ne }),
          /* @__PURE__ */ _(w_, { ref: f, logger: J, viewOptions: ne }),
          /* @__PURE__ */ _(aC, { viewOptions: ne }),
          /* @__PURE__ */ _(xC, {}),
          /* @__PURE__ */ _(EC, {}),
          ne?.markerMode !== "editable" && /* @__PURE__ */ _(AC, { logger: J }),
          /* @__PURE__ */ _(OC, { options: js }),
          /* @__PURE__ */ _(IC, {}),
          /* @__PURE__ */ _($1, {}),
          /* @__PURE__ */ _(
            uA,
            {
              viewOptions: ne,
              getMarker: ve,
              logger: J,
              markerSettleDelayMs: da
            }
          ),
          /* @__PURE__ */ _(
            mA,
            {
              styleInfo: At,
              viewOptions: ne,
              logger: J
            }
          ),
          /* @__PURE__ */ _(
            DC,
            {
              expandedNoteKeyRef: y,
              nodeOptions: ut,
              viewOptions: ne,
              logger: J
            }
          ),
          /* @__PURE__ */ _(rS, {}),
          /* @__PURE__ */ _(rC, {}),
          /* @__PURE__ */ _(Q_, {}),
          /* @__PURE__ */ _(_A, { viewOptions: ne, logger: J }),
          /* @__PURE__ */ _(iS, {}),
          /* @__PURE__ */ _(VS, { structureProtectionMode: qe }),
          /* @__PURE__ */ _(WS, { textDirection: re }),
          /* @__PURE__ */ _(GS, {}),
          /* @__PURE__ */ _(rM, {}),
          l
        ] }),
        fe && /* @__PURE__ */ _(lP, {})
      ] })
    ] }, ne.verseLayout ?? "inline")
  );
}), E0 = In(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(my, { ref: r, ...i });
});
function yy() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function $o(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? yy() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function by(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? yy() : r,
    quote: e,
    type: "thread"
  };
}
function Uf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function vP(e) {
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
class _P {
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
          const c = Uf(a);
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
          const c = Uf(a);
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
      markedComment: vP(t)
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
    return t !== null ? t.doc.get("comments", Eu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Au(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Eu();
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
      Rt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Ub) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const h = p.insert, m = p.retain, y = p.delete, x = d.parent, S = d === r ? void 0 : x instanceof Au && this._comments.find((M) => M.id === x.get("id"));
              if (Array.isArray(h)) {
                const M = f;
                h.slice().reverse().forEach(($) => {
                  const A = $.get("id"), U = $.get("type") === "thread" ? by(
                    $.get("quote"),
                    $.get("comments").toArray().map(
                      (D) => $o(
                        D.get("content"),
                        D.get("author"),
                        D.get("id"),
                        D.get("timeStamp"),
                        D.get("deleted")
                      )
                    ),
                    A
                  ) : $o(
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
function CP(e) {
  const [t, r] = he(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function SP({
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
function MP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return bn(
    /* @__PURE__ */ _(SP, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function ky() {
  const [e, t] = he(null), r = ue(() => {
    t(null);
  }, []), n = De(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _(MP, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = ue(
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
  ...Zg,
  paragraph: "CommentEditorTheme__paragraph"
};
function AP(...e) {
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
  return /* @__PURE__ */ _(up, { className: e || "ContentEditable__root" });
}
function NP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const Ff = ip("INSERT_INLINE_COMMAND");
function wP({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Y(null), s = ue(() => {
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
function OP({ onEscape: e }) {
  const [t] = le();
  return j(() => t.registerCommand(
    np,
    (r) => e(r),
    ui
  ), [t, e]), null;
}
function Ty({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(lp, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: EP
  }, children: /* @__PURE__ */ Se("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      $b,
      {
        contentEditable: /* @__PURE__ */ _(PP, { className: e }),
        placeholder: /* @__PURE__ */ _(NP, { children: s }),
        ErrorBoundary: fp
      }
    ),
    /* @__PURE__ */ _(Rb, { onChange: n }),
    /* @__PURE__ */ _(pp, {}),
    t !== !1 && /* @__PURE__ */ _(wb, {}),
    /* @__PURE__ */ _(OP, { onEscape: r }),
    /* @__PURE__ */ _(Ob, {}),
    i !== void 0 && /* @__PURE__ */ _(dp, { editorRef: i })
  ] }) });
}
function xy(e, t) {
  return ue(
    (r, n) => {
      r.read(() => {
        e(Ib()), t(!Lb(n.isComposing(), !0));
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
  const [n, i] = he(""), [s, o] = he(!1), a = Y(null), c = De(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Y(null), d = _y(), u = ue(() => {
    e.getEditorState().read(() => {
      const m = w();
      if (N(m)) {
        l.current = m.clone();
        const y = m.anchor, x = m.focus, S = Cb(
          e,
          y.getNode(),
          y.offset,
          x.getNode(),
          x.offset
        ), M = a.current;
        if (S !== null && M !== null) {
          const { left: $, bottom: A, width: k } = S.getBoundingClientRect(), U = Sb(e, S);
          let D = U.length === 1 ? $ + k / 2 - 125 : $ - 125;
          D < 10 && (D = 10), M.style.left = `${D}px`, M.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const G = U.length, { container: Q } = c, ce = c.elements, de = ce.length;
          for (let oe = 0; oe < G; oe++) {
            const me = U[oe];
            let qe = ce[oe];
            qe === void 0 && (qe = document.createElement("span"), ce[oe] = qe, Q.appendChild(qe));
            const K = `position:absolute;top:${me.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${me.left}px;height:${me.height}px;width:${me.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            qe.style.cssText = K;
          }
          for (let oe = de - 1; oe >= G; oe--) {
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
        by(m, [$o(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = xy(i, o);
  return /* @__PURE__ */ Se("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      Ty,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Se("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
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
function RP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Y(null), c = _y(), l = xy(i, o);
  return /* @__PURE__ */ Se(kn, { children: [
    /* @__PURE__ */ _(
      Ty,
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
            e($o(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(gb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function vy({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Se(kn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Se("div", { className: "Modal__content", children: [
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
function Kf({
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = ky();
  return /* @__PURE__ */ Se("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Se("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Se("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Se(kn, { children: [
      /* @__PURE__ */ _(
        en,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ _(
              vy,
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
function $P({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = he(0), [l, d] = ky(), u = De(
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
              en,
              {
                onClick: () => {
                  d("Delete Thread", (m) => /* @__PURE__ */ _(
                    vy,
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
            Kf,
            {
              comment: m,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            m.id
          )) }),
          /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
            RP,
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
      Kf,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function IP({
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
function _y() {
  const e = hp(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function LP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = hp(), [a] = le(), c = De(() => {
    const D = new _P(a, s);
    return r && D.registerOnChange(r), t?.(D), D;
  }, [a, s, r, t]), l = CP(c), d = De(() => /* @__PURE__ */ new Map(), []), [u, f] = he(), [p, h] = he([]), [m, y] = he(!1), [x, S] = he(!1), { yjsDocMap: M } = o;
  j(() => {
    if (e) {
      const D = e("comments", M);
      return c.registerCollaboration(D);
    }
    return () => {
    };
  }, [c, e, M]);
  const $ = ue(() => {
    a.update(() => {
      const D = w();
      D !== null && (D.dirty = !0);
    }), y(!1);
  }, [a]), A = ue(
    (D, G) => {
      if (D.type === "comment") {
        const Q = c.deleteCommentOrThread(D, G);
        if (!Q)
          return;
        const { markedComment: ce, index: de } = Q;
        c.addComment(ce, G, de);
      } else {
        c.deleteCommentOrThread(D);
        const Q = G !== void 0 ? G.id : D.id, ce = d.get(Q);
        ce !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const de of ce) {
              const oe = X(de);
              be(oe) && (oe.deleteID(Vr, Q), oe.hasNoIDsForEveryType() && ho(oe));
            }
          });
        });
      }
    },
    [c, a, d]
  ), k = ue(
    (D, G, Q, ce) => {
      c.addComment(D, Q), G && (a.update(() => {
        N(ce) && rl(ce, Vr, D.id);
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
        for (const de of ce) {
          const oe = a.getElementByKey(de);
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
    if (!a.hasNodes([Ze]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const D = /* @__PURE__ */ new Map();
    return Xe(
      cp(
        a,
        Ze,
        (G) => mi(G.getTypedIDs()),
        (G, Q) => {
          for (const [ce, de] of Object.entries(G.getTypedIDs()))
            de.forEach((oe) => {
              Q.addID(ce, oe);
            });
        }
      ),
      a.registerMutationListener(
        Ze,
        (G) => {
          a.getEditorState().read(() => {
            for (const [Q, ce] of G) {
              const de = X(Q);
              let oe = [];
              ce === "destroyed" ? oe = D.get(Q) ?? [] : be(de) && (oe = de.getTypedIDs()[Vr] ?? []);
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
          let de = !1, oe = !1;
          if (N(ce)) {
            const me = ce.anchor.getNode();
            if (C(me)) {
              const qe = Sk(me, Vr, ce.anchor.offset) ?? [];
              qe !== null && (h(qe), de = !0), ce.isCollapsed() || (f(me.getKey()), oe = !0);
            }
          }
          de || h((me) => me.length === 0 ? me : []), oe || f(null), !Q.has("collaboration") && N(ce) && y(!1);
        });
      }),
      a.registerCommand(
        Ff,
        () => {
          const G = window.getSelection();
          return G !== null && G.removeAllRanges(), y(!0), !0;
        },
        xn
      )
    );
  }, [a, d]);
  const U = () => {
    a.dispatchCommand(Ff, void 0);
  };
  return /* @__PURE__ */ Se(kn, { children: [
    m && bn(
      /* @__PURE__ */ _(
        qP,
        {
          editor: a,
          cancelAddComment: $,
          submitAddComment: k
        }
      ),
      document.body
    ),
    u != null && !m && bn(
      /* @__PURE__ */ _(
        wP,
        {
          anchorKey: u,
          editor: a,
          showComments: x,
          onAddComment: U
        }
      ),
      document.body
    ),
    n !== null && bn(
      /* @__PURE__ */ _(
        en,
        {
          className: `CommentPlugin_ShowCommentsButton ${x ? "active" : ""}`,
          onClick: () => S(!x),
          title: x ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    x && bn(
      /* @__PURE__ */ _(
        IP,
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
function DP() {
  const e = Y(void 0), t = ue((r) => {
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
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      UP(r, t);
    };
  }, [t, e]);
}
const A0 = In(function(t, r) {
  const n = Y(null), i = Y(!0), s = Y(null), [o, a] = he(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: h, view: m } = {} } = t, y = (h ?? !1) || xs(m), [x, S] = DP();
  FP(f, x), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(A), p || console.warn(A);
    }
  }, [p]), Bc(r, () => ({
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
  const M = ue(
    (A, k, U, D) => {
      if (!d) return;
      const G = x.current?.getComments();
      d(A, G, k, U, D);
    },
    [x, d]
  ), $ = ue(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = x.current?.getComments();
    l(A);
  }, [x, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(qb, { children: /* @__PURE__ */ Se(my, { ref: n, onUsjChange: M, ...f, children: [
    /* @__PURE__ */ _(
      LP,
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
function yn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function Cy(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function KP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const zP = /^[#\w().,%/\s-]+$/;
function br(e) {
  return e != null;
}
const jP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, BP = {
  left: "right",
  right: "left"
}, jc = ".editor-input.usfm", VP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function WP(e) {
  return VP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${jc}".`
  ), jc);
}
function HP(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${Cy(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (zP.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), br(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), br(t.firstLineIndent) && i.push(`text-indent: ${yn(t.firstLineIndent * 20 * r)}vw`), br(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${yn(t.leftMargin * 20 * r)}vw`), br(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${yn(t.rightMargin * 20 * r)}vw`
  ), br(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${yn(t.spaceBefore * r)}pt`), br(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${yn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = jP[n ? BP[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const zf = { c: 150, ca: 133, cp: 150 };
function jf(e, t) {
  return e && br(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function GP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && br(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = jf(e.markers.c, zf.c);
  return ["ca", "cp"].map((i) => {
    const s = jf(
      e.markers[i],
      zf[i]
    ), o = yn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function P0(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = jc } = t, s = WP(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${Cy(e.defaultFont)}"`), br(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${yn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = HP(c, l, r, n);
    d.length > 0 && o.push(`${s} .usfm_${KP(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...GP(e, s)), o.join(`
`);
}
export {
  Qh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  E0 as Editorial,
  uo as GENERATOR_NOTE_CALLER,
  mp as HIDDEN_NOTE_CALLER,
  A0 as Marginal,
  b as MarkerType,
  Yh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Xh as STANDARD_VIEW_MODE,
  vo as defaultStyleInfo,
  M0 as directionToNames,
  v_ as filterAndRankItems,
  P0 as generateUsjCss,
  C0 as getDefaultViewMode,
  Qo as getDefaultViewOptions,
  KE as getEnterMenuItems,
  FE as getMarkerMenuItems,
  S0 as getViewMode,
  Zh as getViewOptions,
  xs as isBlockVerseLayout,
  jr as isInsertEmbedOpOfType,
  Kv as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
