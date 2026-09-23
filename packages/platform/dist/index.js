import { jsx as v, jsxs as Me, Fragment as Tn } from "react/jsx-runtime";
import { forwardRef as Ln, useState as he, useRef as Q, useCallback as fe, useEffect as j, useMemo as De, memo as Hy, createContext as ip, useContext as sp, Children as Gy, isValidElement as Jy, cloneElement as Yy, useImperativeHandle as Wc, useLayoutEffect as As } from "react";
import { assertSafeKey as Ve, isValidBookCode as Xy, MARKER_OBJECT_PROPS as Qy, USJ_VERSION as vr, USJ_TYPE as _r, isUsjClosingMarkerLocation as op, isUsjTextContentLocation as Hc, indexesFromUsjJsonPath as Mi, isUsjAttributeKeyLocation as Iu, isUsjAttributeMarkerLocation as Zy, isUsjClosingAttributeMarkerLocation as eb, isUsjMarkerLocation as tb, isUsjPropertyValueLocation as rb, getUsjDocumentLocationTypeName as nb, usjJsonPathFromIndexes as gn, EMPTY_USJ as ap } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as je, $parseSerializedNode as Ei, createCommand as Gc, DecoratorNode as Ps, ElementNode as Zt, isHTMLElement as Dn, TextNode as ze, $isRangeSelection as w, $isElementNode as L, $isTextNode as _, createState as Uo, $getState as te, ParagraphNode as Jc, $isRootNode as Yc, $createTextNode as ke, $getSelection as O, $setState as bt, $getCommonAncestor as ib, $isLineBreakNode as Fo, NODE_STATE_KEY as Ns, $getEditor as Ai, $hasUpdateTag as sb, $getNodeByKey as X, $getRoot as Ce, $createRangeSelection as Ko, $createPoint as Lu, $setSelection as xn, $getCharacterOffsets as cp, KEY_DOWN_COMMAND as Pr, COMMAND_PRIORITY_HIGH as Ue, HISTORY_MERGE_TAG as lp, CLICK_COMMAND as zo, COMMAND_PRIORITY_EDITOR as vn, isDOMNode as up, $getNearestNodeFromDOMNode as ws, CONTROLLED_TEXT_INSERTION_COMMAND as Xc, PASTE_COMMAND as Tr, COMMAND_PRIORITY_CRITICAL as xr, CUT_COMMAND as _n, DROP_COMMAND as Qc, DELETE_CHARACTER_COMMAND as ob, DELETE_WORD_COMMAND as ab, DELETE_LINE_COMMAND as cb, $isDecoratorNode as dp, COPY_COMMAND as jo, COMMAND_PRIORITY_NORMAL as di, SELECTION_CHANGE_COMMAND as lr, BLUR_COMMAND as Zc, $addUpdateTag as Cn, SKIP_DOM_SELECTION_TAG as lb, CLEAR_HISTORY_COMMAND as ub, COMMAND_PRIORITY_LOW as Mt, $getPreviousSelection as db, $isRootOrShadowRoot as fb, CAN_UNDO_COMMAND as pb, CAN_REDO_COMMAND as hb, $isNodeSelection as fp, DRAGSTART_COMMAND as gb, $createNodeSelection as pp, getDOMSelectionFromTarget as mb, $onUpdate as yb, KEY_ENTER_COMMAND as hp, LineBreakNode as gp, $copyNode as bb, FOCUS_COMMAND as kb, createEditor as mp, KEY_ESCAPE_COMMAND as yp, INSERT_PARAGRAPH_COMMAND as uo, HISTORIC_TAG as el, UNDO_COMMAND as bp, REDO_COMMAND as kp, CLEAR_EDITOR_COMMAND as Tb } from "lexical";
import { addClassNamesToElement as Qn, removeClassNamesFromElement as Ca, $findMatchingParent as it, $dfsIterator as Tp, $dfs as Pi, mergeRegister as Ze, registerNestedElementResolver as tl, $unwrapNode as Za, IS_APPLE as fo } from "@lexical/utils";
import { useLexicalNodeSelection as xb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as wt } from "fast-equals";
import rs from "quill-delta";
import { useLexicalComposerContext as ue } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as vb, $getHtmlContent as _b, $getLexicalContent as Cb } from "@lexical/clipboard";
import { TreeView as Sb } from "@lexical/react/LexicalTreeView";
import * as Mb from "react-dom";
import { createPortal as kn } from "react-dom";
import { LexicalComposer as xp } from "@lexical/react/LexicalComposer";
import { ContentEditable as vp } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as _p } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Cp } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Sp } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Eb } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Ab, createDOMRange as Pb, createRectsFromDOMRange as Nb } from "@lexical/selection";
import { autoUpdate as wb, computePosition as Ob, shift as qb, flip as Rb } from "@floating-ui/dom";
import { $generateNodesFromDOM as $b } from "@lexical/html";
import { AutoFocusPlugin as Ib } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Lb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Mp, LexicalCollaboration as Db } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Ub } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Fb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Kb, $isRootTextContentEmpty as zb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as jb } from "@lexical/yjs";
import { Array as Du, Map as Uu, YArrayEvent as Bb } from "yjs";
const Sa = (e) => je(Ei(e)), Vb = {
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
function Ep(e) {
  return Vb[e];
}
const $ = " ", po = "​", Dt = $, rl = `${$}|`, ar = "p", ho = "+", Ap = "-", Os = "immutable-note-caller", go = "chapter", ec = "verse", Fu = "invalid", Wb = "text-spacing", Hb = "formatted-font", Gb = "marker-", nl = "external-usj-mutation", Jb = "selection-change", ps = "cursor-change", il = Gc("APP_PLACED_CARET_COMMAND"), tc = "annotation-change", fi = "delta-change", Pp = "marker-settle", Ku = [
  nl,
  Jb,
  ps,
  tc,
  fi
], Sn = "zmsc-s", pi = "zmsc-e", Yb = [Sn, pi], Xb = [
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
  pi
], Np = 1, sl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Qb = sl.filter((e) => e !== "sid" && e !== "eid");
class Yt extends Ps {
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
    return Op().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Xb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Np
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function wp(e) {
  return Yb.includes(e);
}
function Op(e, t, r, n, i) {
  return je(new Yt(e, t, r, n, void 0, i));
}
function $e(e) {
  return e instanceof Yt;
}
const ol = "f", Zb = [
  // Footnote
  ol,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function ns(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const ek = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], qp = 1;
class Ne extends Zt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = ol, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (ns(t) === "crossref" ? Ap : ho), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => rk(t) ? {
        conversion: tk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return al().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Zb.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", ns(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", ns(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Dn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", ns(this.getMarker()))), { element: r };
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
      version: qp
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
function tk(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: al(t, r, n) };
}
function al(e, t, r, n, i) {
  return je(new Ne(e, t, r, n, i));
}
function rk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ne.isValidMarker(t) && e.classList.contains(Ne.getType());
}
function z(e) {
  return e instanceof Ne;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const rc = {
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
}, zu = {
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
function cr(e) {
  const t = Object.hasOwn(rc, e) ? rc[e] : void 0, r = Object.hasOwn(zu, e) ? zu[e] : void 0;
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
const Rp = "v", $p = "c", dn = "fig", ju = "tr", nc = "esb", Ip = "esbe", nk = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, ik = {
  "": "start",
  c: "center",
  r: "end"
};
function sk(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Bu(e) {
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
const ok = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function ak(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === po && s + 1 < e.length && Bu(e[s + 1]) || (Bu(o) ? (r || (i = t.length, t += o), r = !0) : ok.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function ck(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function lk(e, t) {
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
const uk = /^(?:qt[1-5]?|ts)-[se]$/;
function Bo(e) {
  return uk.test(e) || wp(e);
}
function Ma(e, t) {
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
function dk(e, t, r) {
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
      const y = e.indexOf("\\", i), m = y === -1 ? e.length : y;
      a(ak(e.slice(i, m))), i = m;
      continue;
    }
    const c = i, { name: l, next: d } = lk(e, i + 1);
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
    if (l === Rp) {
      const { word: y, next: m } = Ma(e, i);
      i = m, n.push({ kind: "verse", number: y });
      continue;
    }
    if (l === $p) {
      const { word: y, next: m } = Ma(e, i);
      i = m, s = void 0, n.push({ kind: "chapter", number: y });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === b.Note || h === void 0 && Ne.isValidMarker(l)) {
      const { word: y, next: m } = Ma(e, i);
      i = m, s = l, n.push({ kind: "note", marker: l, caller: y || "+" });
      continue;
    }
    if (h === b.Milestone || h === void 0 && Bo(l)) {
      const y = kk(e, c, l, i);
      if (y)
        n.push(y.token), y.ejectedText && o(y.ejectedText), i = y.next;
      else {
        const m = e.indexOf("\\", i), T = m === -1 ? e.length : m;
        o(e.slice(c, T)), i = T;
      }
      continue;
    }
    h === b.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : h === b.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : mo(p) ? (u(), mo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === nc || l === Ip ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Vu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function mo(e) {
  return Object.hasOwn(Vu, e) ? Vu[e] : void 0;
}
function fk(e) {
  return mo(e) !== void 0;
}
const pk = /([-\w]+)\s*=\s*"(.*?)"/g, hk = /[\s\u200B]*[\n\r][\s\u200B]*/g, Lp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function qs(e) {
  return Lp[e];
}
const gk = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function mk(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Vo(e, t, r = Lp[t]) {
  const n = e.replace(hk, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(pk)];
  if (s.length > 0) {
    if (!mk(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      gk.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Rs(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function yk(e) {
  const t = Nr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function bk(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Vo(e.slice(n + 1, i), r, Rs(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function kk(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Vo(s.slice(o + 1), r, Rs(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = bk(e, i + 2, r);
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
`, " ").replaceAll("~", $);
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
      i = { type: "para", marker: ar, content: [] }, u().push(i);
    }
    return fn(i);
  }, h = (Z) => {
    const K = p();
    typeof Z == "string" && typeof K[K.length - 1] == "string" ? K[K.length - 1] = K[K.length - 1] + Z : K.push(Z);
  }, y = (Z) => {
    for (let K = Z; K < o.length; K += 1) {
      const ne = o[K].object;
      ne.closed = "false";
    }
  }, m = () => {
    y(0), o.length = 0;
  }, T = (Z) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, Z || (s.closed = "false"), s = void 0);
  }, S = () => {
    c = void 0, l = void 0;
  }, N = (Z) => {
    d && (Z || (d.closed = "false"), d = void 0);
  };
  let R, E = "", C;
  const M = () => {
    E && h(br(E)), E = "";
  }, q = (Z = !1) => {
    R?.type === "sidebar" ? E = "" : Z && E.endsWith(`
`) && (E = E.slice(0, -1)), R = void 0, M();
  }, J = () => {
    if (!C)
      return;
    const Z = { type: "char", marker: C.marker, content: [] };
    C.value && (Z.content = [br(C.value)]), p().push(Z), o.push({ object: Z }), C = void 0;
  }, H = (Z, K) => {
    f = !1, S(), m(), T(!1), i = { type: "para", marker: Z, content: [] }, K && (i.content = [br(K)]), u().push(i);
  }, re = () => {
    C && (H(C.marker, C.value), C = void 0);
  };
  let ae;
  const ce = () => {
    if (ae) {
      if (ae.shape === "para")
        H(dn, ae.value);
      else {
        const Z = { type: "char", marker: dn, content: [] };
        ae.value && (Z.content = [br(ae.value)]), p().push(Z), o.push({ object: Z });
      }
      ae = void 0;
    }
  }, me = dk(e, t?.getMarker ?? cr, n);
  for (let Z = 0; Z < me.length; Z++) {
    const K = me[Z];
    if (C) {
      if (K.kind === "text") {
        C.value += K.text;
        continue;
      }
      if (C.shape === "char" && K.kind === "end" && K.marker.replace(/^\+/, "") === C.marker) {
        if (C.value.trim() === "") {
          p().push({ type: "char", marker: C.marker, content: [] }), C = void 0, q();
          continue;
        }
        Object.assign(C.target, {
          [C.attrName]: br(C.value.trim())
        });
        const ne = C.marker;
        if (C = void 0, ne === "ca") {
          const Re = me[Z + 1];
          Re?.kind === "text" && /^[\s\u200B]*$/.test(Re.text) && Z++;
        }
        continue;
      }
      if (C.shape === "para" && (K.kind === "para" || K.kind === "chapter")) {
        const ne = C.value.replace(/[\s\u200B]+$/, "");
        ne === "" ? (H(C.marker), C = void 0) : (Object.assign(C.target, { [C.attrName]: br(ne) }), C = void 0);
      } else {
        R = void 0, (K.kind === "para" || K.kind === "chapter") && C.value.endsWith(`
`) && (C.value = C.value.slice(0, -1)), C.shape === "para" ? re() : J(), Z--;
        continue;
      }
    }
    if (ae) {
      if (K.kind === "text" || K.kind === "optbreak") {
        ae.value += K.kind === "text" ? K.text : "//";
        continue;
      }
      if (K.kind === "end" && K.marker.replace(/^\+/, "") === dn) {
        const ne = ae.value.indexOf("|"), Re = ne >= 0 ? Vo(ae.value.slice(ne + 1), dn) : void 0;
        if (Re) {
          const ot = {};
          for (const [jt, Nt] of Object.entries(Re))
            ot[jt === "src" ? "file" : jt] = Nt;
          const zt = {
            type: "figure",
            marker: dn,
            ...ot
          }, pe = ae.value.slice(0, ne);
          pe && (zt.content = [br(pe)]), h(zt), ae = void 0;
          continue;
        }
      }
      ce(), Z--;
      continue;
    }
    if (R)
      if (K.kind === "text") {
        if (K.text.includes(`
`) && /^[\s\u200B]*$/.test(K.text)) {
          E += K.text;
          continue;
        }
        q();
      } else if (K.kind === "charOpen" || K.kind === "para") {
        const ne = K.kind === "para" || !K.isNested ? mo(K.marker) : void 0;
        if (ne && ne.targetTypes.includes(R.type)) {
          E = "", C = {
            target: R,
            attrName: ne.attrName,
            marker: K.marker,
            shape: ne.shape,
            value: ""
          };
          continue;
        }
        q(K.kind === "para");
      } else
        q(K.kind === "chapter");
    if (!s && !n && (K.kind === "charOpen" && !K.isNested && K.marker === dn || K.kind === "para" && K.marker === dn)) {
      m(), ae = { shape: K.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (K.kind) {
      case "text": {
        let ne = K.text;
        if (!s && ne.endsWith(`
`)) {
          const Re = me[Z + 1];
          (Re === void 0 || Re.kind === "para" || Re.kind === "chapter") && (ne = ne.slice(0, -1));
        }
        ne && h(br(ne));
        break;
      }
      case "para": {
        const ne = !s && !n;
        if (ne && K.marker === ju) {
          m(), c || (c = { type: "table", content: [] }, u().push(c)), l = { type: "table:row", marker: ju, content: [] }, fn(c).push(l), i = l, f = !1;
          break;
        }
        if (ne && l) {
          const Re = nk.exec(K.marker);
          if (Re && sk(Re)) {
            m();
            const [, ot, zt, pe] = Re, jt = {
              type: "table:cell",
              marker: pe ? K.marker.slice(0, K.marker.indexOf("-")) : K.marker,
              align: ik[ot],
              content: []
            };
            pe && (jt.colspan = String(Number(pe) + 1 - Number(zt))), fn(l).push(jt), i = jt;
            break;
          }
        }
        if (S(), !n && K.marker === nc) {
          m(), T(!1), N(!1), d = { type: "sidebar", marker: nc, content: [] }, r.push(d), i = void 0, R = d, f = !1;
          break;
        }
        if (K.marker === Ip && d) {
          m(), T(!1), N(!0), i = void 0;
          break;
        }
        H(K.marker);
        break;
      }
      case "verse": {
        T(!1);
        const ne = { type: "verse", marker: Rp, number: K.number };
        h(ne), R = ne;
        break;
      }
      case "chapter": {
        m(), T(!1), S(), N(!1), i = void 0;
        const ne = {
          type: "chapter",
          marker: $p,
          number: K.number
        };
        r.push(ne), R = ne, f = !0;
        break;
      }
      case "note": {
        T(!1);
        const ne = p();
        s = { type: "note", marker: K.marker, caller: K.caller, content: [] }, a = o.length, ne.push(s), R = s;
        break;
      }
      case "charOpen": {
        if (!K.isNested) {
          const ot = s ? a : 0;
          y(ot), o.length = ot;
        }
        const ne = p(), Re = { type: "char", marker: K.marker, content: [] };
        ne.push(Re), o.push({ object: Re });
        break;
      }
      case "end": {
        const ne = K.marker.replace(/^\+/, ""), Re = s ? a : 0, ot = o.findLastIndex((zt, pe) => pe >= Re && zt.object.marker === ne);
        ot >= 0 ? (Tk(o[ot].object), y(ot + 1), o.length = ot) : s && s.marker === ne ? T(!0) : (y(Re), o.length = Re, h({ type: "unmatched", marker: `${K.marker}*` }));
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
  if (ae && ce(), C)
    if (C.shape === "para") {
      const Z = C.value.replace(/[\s\u200B]+$/, "");
      Z === "" ? H(C.marker) : Object.assign(C.target, { [C.attrName]: br(Z) }), C = void 0;
    } else
      C.value.endsWith(`
`) && (C.value = C.value.slice(0, -1)), J();
  m(), T(!1), N(!1);
  const qe = (Z) => {
    for (const K of Z)
      typeof K != "string" && K.content && (qe(K.content), K.content.length === 0 && delete K.content);
  };
  return qe(r), r;
}
function Tk(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Vo(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
function Ee(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function nt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function It(e, t) {
  let r = Ee(e);
  return t && (r += `${$}${t}`), r += " ", r;
}
function Et(e) {
  return " " + e + $;
}
const xk = 1;
class ur extends ze {
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
    return new ur(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      version: xk
    };
  }
}
function ct(e, t, r) {
  return je(new ur(e, t, void 0, r));
}
function P(e) {
  return e instanceof ur;
}
function $s(e) {
  return e?.type === ur.getType();
}
function rn(e) {
  return e.getTextContent() === mn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function vk(e) {
  e.setTextContent(mn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function mn(e, t, r = !1) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Ee(e, r);
}
const Wr = "internal-comment", _k = [Wr], Dp = Object.freeze({}), ic = Object.freeze({}), sc = Object.freeze({}), oc = Object.freeze({}), ac = Object.freeze({}), Ck = 1, Zn = /* @__PURE__ */ new Map(), Gi = /* @__PURE__ */ new Map(), ei = /* @__PURE__ */ new Map(), ti = /* @__PURE__ */ new Map();
class Je extends Zt {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Dp, r, n, i, s, o) {
    super(o), this.__typedIDs = Zs(t), this.__typedOnClicks = Ea(r), this.__typedOnRemoves = Aa(n), this.__typedOnMouseEnters = Pa(i), this.__typedOnMouseLeaves = Na(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Zs(t.__typedIDs), n = Ea(t.__typedOnClicks), i = Aa(t.__typedOnRemoves), s = Pa(t.__typedOnMouseEnters), o = Na(t.__typedOnMouseLeaves);
    return new Je(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return _k.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Mn().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Ck
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
      c !== l && (c === 0 ? l === 1 && Qn(r, d) : l === 0 && Ca(r, d), c === 1 ? l === 2 && Qn(r, u) : l === 1 && Ca(r, u));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ca(r, pn("annotationId", h));
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
    const r = this.getWritable(), n = Zs(r.__typedIDs);
    r.__typedIDs = Zs(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && yo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Ea(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return be(t) ? Zn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Aa(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return be(t) ? Gi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Pa(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return be(t) ? ei.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Na(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && yo(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Mn(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Zn.delete(r.getKey()), Gi.delete(r.getKey()), ei.delete(r.getKey()), ti.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === ic) {
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
    if (!this.__typedOnClicks || this.__typedOnClicks === ic) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === sc) {
      const t = Gi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Gi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Gi.set(this.getKey(), this.__typedOnRemoves);
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === sc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === oc) {
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === oc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === ac) {
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === ac) {
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
    const i = Sk(t, r);
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
    for (; be(t) && Hu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; be(r) && Hu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Mk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ek(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ak(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Pk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Zs(e = Dp) {
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
function Aa(e) {
  if (!e || e === sc)
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
function Pa(e) {
  if (!e || e === oc)
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
function Na(e) {
  if (!e || e === ac)
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
function Wu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Sk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Hu(e, t) {
  const r = Wu(e), n = Wu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Mk(e, t) {
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
function Ek(e, t) {
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
function Ak(e, t) {
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
function Pk(e, t) {
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
function Gu(e) {
  return `external-${e}`;
}
function Mn(e, t, r, n, i) {
  return je(new Je(e, t, r, n, i));
}
function be(e) {
  return e instanceof Je;
}
function Wo(e) {
  return e?.type === Je.getType();
}
function yo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function cl(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let h, y;
  for (let m = 0; m < d; m++) {
    const T = a[m];
    if (L(y) && y.isParentOf(T))
      continue;
    if (P(T)) {
      h = T.getParent(), y = void 0;
      continue;
    }
    const S = m === 0, N = m === d - 1;
    let R = null;
    if (_(T)) {
      const E = T.getTextContentSize(), C = S ? f : 0, M = N ? p : E;
      if (C === 0 && M === 0)
        continue;
      const q = T.splitText(C, M);
      R = q.length > 1 && (q.length === 3 || S && !N || M === E) ? q[1] : q[0];
    } else {
      if (be(T))
        continue;
      L(T) && T.isInline() && (R = T);
    }
    if (R !== null) {
      if (R && R.is(h))
        continue;
      const E = R.getParent();
      (E == null || !E.is(h)) && (y = void 0), h = E, y === void 0 && (y = Mn(), y.addID(t, r, n, i, s, o), R.insertBefore(y)), y.append(R);
    } else
      h = void 0, y = void 0;
  }
  t === Wr && L(y) && (u ? y.selectStart() : y.selectEnd());
}
function Nk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (be(n))
      return n.getTypedIDs()[t];
    if (_(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (be(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const En = Uo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Hr = Uo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), le = Uo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), dr = "marker-trailing-space", Up = 1, wk = "attribute-run";
function wa(e) {
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
    return Fp(t.runKind).updateFromJSON(t);
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
    t.classList.add(wk);
    const r = wa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = wa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = wa(this.__runKind);
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
      version: Up
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
function Fp(e) {
  return je(new wr(e));
}
function Ke(e) {
  return e instanceof wr;
}
const Kp = [
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
], zp = [
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
], Ok = [
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
  ...Kp,
  ...zp
], jp = 1, qk = ["type", "marker", "content"];
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
    return t !== void 0 && (Ok.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Kp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && zp.includes(t);
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
      span: (t) => $k(t) ? {
        conversion: Rk,
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
    return Ju(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Ju(r, this.__marker, n)), !1;
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
      version: jp
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
function Ju(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Rk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Cr(t) };
}
function Cr(e, t) {
  return je(new xe(e, t));
}
function $k(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return xe.isValidMarker(t) && e.classList.contains(xe.getType());
}
function U(e) {
  return e instanceof xe;
}
function Ik(e) {
  return e?.type === xe.getType();
}
const bo = "v", Bp = 1, Lk = [
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
    super(r ?? t, a), this.__marker = bo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ft(r, n, i, s, o, a, c);
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
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(ec, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Bp
    };
  }
}
function Vp(e, t, r, n, i, s) {
  return je(new ft(e, t, r, n, i, s));
}
function Ae(e) {
  return e instanceof ft;
}
function Wp(e) {
  return e?.type === ft.getType();
}
const Dk = /* @__PURE__ */ new Set(["closed"]);
function or(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Dk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Hp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Gp(e) {
  const t = Object.keys(e).filter((n) => !Qb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Jp(e, t, r, n) {
  return Hp(
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
function Uk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : os(e) === void 0 && Yp(e) === void 0;
}
function Yp(e) {
  return e.getChildren().find((t) => _(t) && te(t, le) === "attribute");
}
function hs(e, t) {
  return Is(e.getNextSibling(), t);
}
const Fk = /^[ \u00A0]+$/;
function ll(e) {
  if (rn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ee(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && Fk.test(r.slice(t.length));
}
function Is(e, t) {
  let r, n, i, s;
  return Ke(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  ll(e) && (r = e, e = e.getNextSibling()), _(e) && te(e, le) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && rn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Kk(e) {
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
  const n = Kk(t[r]);
  if (_(n) && n.getTextContent() === Et(e.getCaller()))
    return n;
}
function Xp(e) {
  const t = Gr(e);
  return t ? Is(t.getNextSibling(), "cat") : {};
}
function Ni(e) {
  const t = e.getFirstChild();
  if (!(!_(t) || P(t)) && te(t, le) !== "attribute")
    return t;
}
function Qp(e) {
  const t = Ni(e);
  return t ? Is(t.getNextSibling(), "ca") : {};
}
function Zp(e) {
  const t = Ni(e);
  if (!t)
    return;
  const r = Is(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function eh(e) {
  const t = Zp(e);
  return t ? Is(t.getNextSibling(), "cp") : {};
}
function th(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ae(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || _(n) && te(n, le) === "attribute" || U(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ke(n)))
        return;
    }
}
function Ho(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ke(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  ll(s) && (t = s, s = s.getNextSibling()), _(s) && te(s, le) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && rn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const ko = "c", rh = 1, zk = [
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
    super(o), this.__marker = ko, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Pt(r, n, i, s, o, a);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(go, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
  return je(new Pt(e, t, r, n, i));
}
function _e(e) {
  return e instanceof Pt;
}
function jk(e) {
  return e?.type === Pt.getType();
}
const ih = 1;
class Jr extends Jc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Jr(t.__key);
  }
  static importJSON(t) {
    return Lt().updateFromJSON(t);
  }
  getMarker() {
    return ar;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: ih
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Lt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Lt() {
  return je(new Jr());
}
function vt(e) {
  return e instanceof Jr;
}
function Go(e) {
  return e?.type === Jr.getType();
}
function ul(e) {
  return vt(e) && Yc(e.getParent());
}
function dl(e) {
  return be(e) || ul(e);
}
function wi(e) {
  let t = e.getParent();
  for (; t && dl(t); )
    t = t.getParent();
  return t;
}
function fl(e) {
  return U(wi(e));
}
function To(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? fl(t) : t.getChildren().some((i) => U(i) && i.getMarker() === r) ? !0 : void 0;
}
function Bk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = To(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Ls(e) {
  return _(e) && e.getType() === ze.getType() && te(e, le) !== "attribute";
}
function Vk(e) {
  if (!Ls(e) || !e.getTextContent().startsWith($))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && be(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!U(n))
    return 0;
  for (; be(r); )
    r = r.getLastChild();
  return !P(r) || r.getMarkerSyntax() !== "opening" || To(r, n) === void 0 ? 0 : 1;
}
function pl(e, t) {
  if (e.getMarkerSyntax() !== "opening" || To(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? To(r, t) === !0 ? "spacer" : void 0 : Ls(r) ? r.getTextContent().startsWith($) ? void 0 : "prefix" : "spacer";
}
function Wk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && pl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function sh(e, t) {
  const r = O();
  if (!w(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function oh(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = pl(t, e);
    if (r !== void 0 && !sh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        _(n) && n.setTextContent($ + n.getTextContent());
      } else
        t.insertAfter(ke($));
  });
}
function ah(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && pl(t, e) !== void 0 && sh(t, e)) : !1;
}
const ch = 1, Hk = "marker", hl = Uo("isGutterMarker", {
  parse: (e) => e === !0
});
class Or extends Ps {
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
      span: (t) => Xk(t) ? {
        conversion: Gk,
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
      version: ch
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Gk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Sr(t, r) };
}
function Sr(e, t) {
  return je(new Or(e, t));
}
function Jk(e) {
  return bt(Sr(Hk, e), hl, !0);
}
function Yk(e) {
  return _t(e) && te(e, hl);
}
function Xk(e) {
  return e?.tagName === "span";
}
function _t(e) {
  return e instanceof Or;
}
function lh(e) {
  return e?.type === Or.getType();
}
const Qk = ["type", "marker", "content"], cc = "unknown", uh = 1, Zk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
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
      [cc]: (t) => tT(t) ? {
        conversion: eT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return gl().updateFromJSON(t);
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
    return Zk.has(this.getTag());
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
    const t = document.createElement(cc);
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
      version: uh
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
function eT(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: gl(t, r) };
}
function gl(e, t, r) {
  return je(new Un(e, t, r));
}
function tT(e) {
  return e?.tagName.toLowerCase() === cc;
}
function we(e) {
  return e instanceof Un;
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
function dT(e, t) {
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
function ml(e, t, r) {
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
        opening: `\\${dT(t, n[iT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: or(uT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [sT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + or(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [oT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: or(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: or(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const Tt = { wantsRun: !1, valueText: void 0 }, qr = {};
function Oa(e, t) {
  if (t === "va")
    return e;
  const r = hs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function yl(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed())
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
function Jo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = O();
  if (!w(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function fT(e) {
  return Ke(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : _(e) && te(e, le) === "attribute";
}
function pT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!_(e) || te(e, le) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function qa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ae(t))
      return t;
    if (!fT(t))
      return;
  }
}
function Yu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ae(t),
    ownerOf: (t) => {
      if (Ke(t))
        return t.getRunKind() === e ? qa(t) : void 0;
      const r = t.getParent();
      return Ke(r) ? r.getRunKind() === e ? qa(r) : void 0 : pT(t) === e ? qa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ae(t))
        return Tt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Tt : { wantsRun: !0, valueText: $ + r };
    },
    scanPieces: (t) => Ae(t) ? hs(Oa(t, e), e) : qr,
    graceSite: (t, r) => Ae(t) ? !r.opener && !r.closer ? yl(Oa(t, e)) : Jo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ae(t) ? Oa(t, e) : void 0
    }
  };
}
const hT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => Tt,
  scanPieces: () => qr,
  graceSite: (e) => U(e) && ah(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, gT = {
  kind: "char",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (!_(e) || te(e, le) !== "attribute")
      return;
    const t = e.getParent();
    return U(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || os(e) === void 0)
      return Tt;
    const t = or(e.getUnknownAttributes() ?? {}, qs(e.getMarker()));
    return t === "" ? Tt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => U(e) ? { value: Yp(e) } : qr,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const r = os(e);
    if (!r)
      return !1;
    const n = O();
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
    insertRunBefore: (e) => U(e) ? os(e) : void 0
  }
};
function dh(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!_(e) || te(e, le) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function mT(e) {
  const t = e.getParent();
  if (!z(t))
    return;
  const r = Gr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!dh(n))
        return;
    }
}
const yT = {
  kind: "cat",
  ownerPredicate: (e) => z(e),
  ownerOf: (e) => {
    if (Ke(e))
      return e.getRunKind() === "cat" && z(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ke(t) ? t.getRunKind() === "cat" && z(t.getParent()) ? t.getParent() ?? void 0 : void 0 : dh(e) ? mT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!z(e) || e.getIsCollapsed() !== !1)
      return Tt;
    const t = e.getCategory();
    return t === void 0 ? Tt : { wantsRun: !0, valueText: $ + t };
  },
  scanPieces: (e) => z(e) ? Xp(e) : qr,
  graceSite: (e, t) => {
    if (!z(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Gr(e);
      return r !== void 0 && yl(r);
    }
    return Jo(t);
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
function bT(e) {
  return Ke(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : _(e) && te(e, le) === "attribute";
}
function kT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!_(e) || te(e, le) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function TT(e) {
  const t = e.getParent();
  if (!_e(t))
    return;
  const r = Ni(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!bT(n))
        return;
    }
}
function Xu(e) {
  const t = (r) => _e(r) ? e === "ca" ? Ni(r) : Zp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => _e(r),
    ownerOf: (r) => {
      if (Ke(r))
        return r.getRunKind() === e && _e(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ke(n) ? n.getRunKind() === e && _e(n.getParent()) ? n.getParent() ?? void 0 : void 0 : kT(r) === e ? TT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!_e(r))
        return Tt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Tt : { wantsRun: !0, valueText: $ + n };
    },
    scanPieces: (r) => _e(r) ? e === "ca" ? Qp(r) : eh(r) : qr,
    graceSite: (r, n) => {
      if (!_e(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && yl(i);
      }
      return Jo(n);
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
function fh(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return _(e) && te(e, le) === "attribute";
}
function xT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if ($e(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!fh(t))
      return;
  }
}
const vT = {
  kind: "milestone",
  ownerPredicate: (e) => $e(e),
  ownerOf: (e) => {
    const t = Ke(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ke(e.getParent()) ? e.getParent() : fh(e) ? e : void 0;
    if (!t || Ke(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ke(t) ? $e(r) ? r : void 0 : xT(t);
  },
  expectedPieces: (e) => {
    if (!$e(e))
      return Tt;
    const t = Jp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = or(t, Rs(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : $ + r };
  },
  scanPieces: (e) => {
    if (!$e(e))
      return qr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Ho(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!$e(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = O();
      if (!w(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Jo(t);
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
}, _T = ml("optbreak", void 0, void 0).opening, CT = {
  kind: "optbreak",
  ownerPredicate: (e) => we(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!we(t) || t.getTag() !== "optbreak"))
      return _(e) || _t(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: _T }),
  scanPieces: (e) => we(e) ? { value: e.getFirstChild() ?? void 0 } : qr,
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
  ownerPredicate: (e) => we(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => Tt,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, MT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => Tt,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, gs = [
  hT,
  gT,
  Yu("va"),
  Yu("vp"),
  yT,
  Xu("ca"),
  Xu("cp"),
  vT,
  CT,
  ST,
  MT
], ET = new Map(gs.map((e) => [e.kind, e]));
function Mr(e) {
  const t = ET.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Yr(e) {
  for (const t of gs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function ph(e) {
  return Yr(e) !== void 0;
}
const xo = "unmatched", hh = 2;
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
      [xo]: (t) => PT(t) ? {
        conversion: AT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return bl().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Fu), r.title = Qu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Qu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(xo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Fu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: hh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function gh(e) {
  return e.getTextContent() === as(e.getMarker());
}
function Qu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function AT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: bl(t) };
}
function bl(e) {
  return je(new Rr(e));
}
function PT(e) {
  return e?.tagName.toLowerCase() === xo;
}
function nn(e) {
  return e instanceof Rr;
}
const ms = "id", mh = 1, NT = [
  "type",
  "marker",
  "code",
  "content"
];
class Ut extends Zt {
  __marker = ms;
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
    return yh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Xy(t);
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
      version: mh
    };
  }
}
function yh(e, t) {
  return je(new Ut(e, t));
}
function ht(e) {
  return e instanceof Ut;
}
function bh(e) {
  return e?.type === Ut.getType();
}
const kh = 1, wT = "c", Th = "span";
class fr extends Ps {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = wT, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new fr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => xh(t) ? {
        conversion: OT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return kl().updateFromJSON(t);
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
    const t = document.createElement(Th);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(go, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Dn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(go, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? It(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: kh
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
function OT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: kl(t) };
}
function kl(e, t, r, n, i, s) {
  return je(new fr(e, t, r, n, i, s));
}
function xh(e) {
  return e ? e.classList.contains(go) && e.tagName.toLowerCase() === Th : !1;
}
function Ds(e) {
  return e instanceof fr;
}
function qT(e) {
  return e?.type === fr.getType();
}
const vh = "table", lc = "immutable-table", _h = 1, RT = ["type", "marker", "content"];
class Fn extends Zt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return lc;
  }
  static clone(t) {
    return new Fn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return $T().updateFromJSON(t);
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
      type: lc,
      ...t !== void 0 && { unknownAttributes: t },
      version: _h
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function $T(e) {
  return je(new Fn(e));
}
function Ch(e) {
  return e instanceof Fn;
}
function IT(e) {
  return e?.type === lc;
}
const Sh = "table:row", Zu = "immutable-table-row", Mh = 1, uc = "tr", LT = ["type", "marker", "content"];
class Oi extends Zt {
  __marker;
  __unknownAttributes;
  constructor(t = uc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Zu;
  }
  static clone(t) {
    return new Oi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return DT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? uc).setUnknownAttributes(t.unknownAttributes);
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
      type: Zu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Mh
    };
  }
}
function DT(e, t) {
  return je(new Oi(e, t));
}
const Eh = "table:cell", ed = "immutable-table-cell", Ah = 1, dc = "tc1", UT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function FT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class qi extends Zt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = dc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return ed;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new qi(r, n, i, s, o);
  }
  static importJSON(t) {
    return KT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? dc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = FT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: ed,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Ah
    };
  }
}
function KT(e, t, r, n) {
  return je(new qi(e, t, r, n));
}
const zT = [
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
  ar,
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
], Ph = 1, jT = ["type", "marker", "content"];
class et extends Jc {
  __marker;
  __unknownAttributes;
  constructor(t = ar, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new et(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (zT.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: BT,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ys().updateFromJSON(t);
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
      version: Ph
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ys(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function BT(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ys(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ys(e, t) {
  return je(new et(e, t));
}
function oe(e) {
  return e instanceof et;
}
function Tl(e) {
  return e?.type === et.getType();
}
function Yo(e, t) {
  const r = e.getChildAtIndex(t);
  return _(r) ? r : void 0;
}
function Xt(e, t) {
  const r = Yo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function bs(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function VT(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function WT(e) {
  return bs(e) ? void 0 : { closed: "false" };
}
function HT(e, t, r, n) {
  const i = t.getMarker(), s = fl(t), o = VT(t);
  if (n) {
    e.append(ct(i, "opening", s));
    const [a] = r;
    Ls(a) && !a.getTextContent().startsWith($) && a.setTextContent($ + a.getTextContent());
  }
  e.append(...r), o && e.append(ct(i, "closing", s));
}
function An(e) {
  return it(e, U) ?? void 0;
}
function xl(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function fc(e) {
  const t = Nh(e);
  return e.getChildren().every((r) => P(r) || t && te(r, le) === "attribute" || _(r) && r.getTextContent().replaceAll($, "") === "");
}
function Nh(e) {
  return bs(e);
}
function GT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? or(r, qs(e.getMarker())) : "";
  n !== "" && t.insertAfter(ke(n)), e.remove();
}
function JT(e, t) {
  if (bs(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ct(e.getMarker(), "closing", fl(e)));
}
function YT(e, t) {
  return U(e) && !bs(e) && !bs(t);
}
function XT(e, t, r) {
  fc(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && Ls(n) && !n.getTextContent().startsWith($) && n.setTextContent($ + n.getTextContent()), e.append(...t);
}
function QT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Nh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = P(l) && l.getMarkerSyntax() === "closing", f = s && te(l, le) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = YT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      XT(e, o, n);
    else {
      const l = Cr(t.getMarker(), WT(t));
      HT(l, t, o, n), e.insertAfter(l), fc(l) ? l.remove() : c = l;
    }
  i && !a && JT(t, n), fc(t) && GT(t, c);
}
function yi(e, t) {
  let r = e.getParent();
  for (; U(r); )
    QT(e, r, t), r = e.getParent();
}
function vl(e) {
  if (_(e) && !P(e)) {
    const t = e.getTextContent().startsWith($) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      vl(t);
      return;
    }
    e.selectEnd();
  }
}
const wh = /[ \u00A0]{2,}/g;
function ZT(e) {
  return [...e.matchAll(wh)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function ex(e) {
  return e.replace(wh, (t) => t[0]);
}
const tx = "​", bi = tx;
var td;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(td || (td = {}));
var rd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(rd || (rd = {}));
function rx() {
  return ke(bi);
}
function nx(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(bi, ""));
}
function Us(e) {
  return e.length > 0 && e.includes(bi) && e.replaceAll(bi, "") === "";
}
function _l(e) {
  return _(e) && Us(e.getTextContent());
}
function Oh(e) {
  return jk(e) || qT(e);
}
function We(e) {
  return _e(e) || Ds(e);
}
function qh(e, t) {
  return e.find((r) => We(r) && r.getNumber() === t.toString());
}
function ix(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && We(r));
}
function nd(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Rh(e) {
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
function sx(e) {
  return ht(e) || _e(e) || U(e) || Ds(e) || vt(e) || $e(e) || oe(e) || z(e) || Ae(e) || we(e);
}
function $h(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function ox(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Ft(e) {
  return Pe(e) || ht(e);
}
function Pe(e) {
  return oe(e) || vt(e);
}
function ax(e) {
  return Tl(e) || Go(e);
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
function Pn(e, t) {
  const r = te(t, En), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function cx(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? ib(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function lx(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Nn(e) {
  return e?.type === ze.getType();
}
function ux(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function dx(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Ih(e, t, r) {
  const n = Ee(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function fx(e) {
  const t = e[Ns];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Lh(e) {
  return $s(e) || lh(e) && e.textType === "marker" || Nn(e) && fx(e) === "attribute" ? "" : Nn(e) && e.text !== $ ? e.text : Ik(e) ? e.children.map((t) => Lh(t)).join("") : "";
}
function px(e) {
  return e.map((r) => Lh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Cl(e) {
  const t = [];
  for (const r of e) {
    if (!U(r))
      continue;
    const n = Dh(r);
    n !== Dt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Dh(e) {
  return P(e) || pr(e) || _(e) && te(e, le) === "attribute" ? "" : _(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => Dh(t)).join("") : "";
}
function pr(e) {
  return _t(e) && e.getTextType() === "marker";
}
function Kt(e) {
  return P(e) || pr(e);
}
function id(e, t) {
  hx(e, t), e.setMarker(t);
}
function hx(e, t) {
  const r = e.getMarker(), n = Ee(r), i = Ee(r, !0), s = nt(r), o = nt(r, !0), a = xe.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Kt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (pr(c)) {
        const f = l.startsWith(Ee("", !0));
        c.setTextContent(d ? Ee(t, f) : nt(t, f));
      }
    }
  });
}
function Fe(e, t = Qy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Oe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Uh(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Sl(e) {
  if (!w(e))
    return sd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !_(t)))
    return t ?? void 0;
  try {
    return sd(e) ?? t ?? void 0;
  } catch (n) {
    if (Uh(n))
      return t ?? void 0;
    throw n;
  }
}
function gx(e, t) {
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
function Ml(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Fh(e) {
  return !!e && e.includes("-");
}
function Kh(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function sd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function vo(e) {
  if (!e)
    return !1;
  if (Fo(e) || P(e) || pr(e) || Ke(e) || e.getType() === Os || _t(e) && e.getTextType() === "attribute")
    return !0;
  const t = wi(e);
  if (_e(t) || _(e) && z(t) && Gr(t)?.is(e))
    return !0;
  if (_(e)) {
    const r = te(e, le);
    if (r === dr || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === $ || Us(n))
      return !0;
  }
  return !1;
}
function Xo() {
  const e = ke($);
  return bt(e, le, dr), e.setMode("token"), e;
}
function mx(e) {
  const t = e.getTextContent();
  t.startsWith($) || e.setTextContent($ + t);
}
function Kn(e) {
  return _(e) && te(e, le) === dr;
}
function zh(e) {
  const t = e.getFirstChild();
  if (!Kt(t) || t === null || Kn(t.getNextSibling()))
    return !1;
  const r = O();
  if (!w(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function El(e) {
  if (_e(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!vo(s)) {
      if (dl(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (_(s) && s.getType() === ze.getType()) {
        r ??= [], r.push(s);
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function yx(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = Vk(i), o = t ? ZT(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, d]) => c + d - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function jh(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function bx(e, t) {
  let r = t;
  for (const [n, i] of jh(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function od(e, t) {
  let r = t;
  for (const [n, i] of jh(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function sn(e, t) {
  return El(e).map((r) => r.type === "element" ? r : yx(r.nodes, t));
}
function kx(e, t) {
  return El(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function _o(e, t, r) {
  const n = wi(e);
  if (!n)
    return;
  const i = sn(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: bx(a, t) };
  }
}
function Tx(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, od(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, od(r, t - r.start)];
}
function ui(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (ul(e)) {
    const s = e.getParentOrThrow();
    return n ? vo(n) ? ui(e, t + 1, r) : ad(s, n, r) : ui(s, e.getIndexWithinParent() + 1, r);
  }
  const i = sn(e, r);
  return n ? vo(n) || dl(n) && !xx(i, n) ? ui(e, t + 1, r) : ad(e, n, r) : { type: "index", index: i.length };
}
function xx(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || ki(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || ki(n.node, t.getKey())));
}
function ad(e, t, r) {
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
function vx(e, t) {
  if (t <= 0)
    return [e, 0];
  const r = El(e);
  if (r.length === 0 || t > r.length)
    return [e, e.getChildrenSize()];
  const n = r[t - 1], i = n.type === "element" ? n.node : n.nodes[n.nodes.length - 1], s = i ? cd(e, i) : void 0;
  if (!s)
    return [e, e.getChildrenSize()];
  if (ul(s)) {
    const o = cd(s, i);
    if (o)
      return [s, o.getIndexWithinParent() + 1];
  }
  return [e, s.getIndexWithinParent() + 1];
}
function cd(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const hi = /* @__PURE__ */ new WeakMap();
function _x(e, t) {
  return hi.set(e, t), () => {
    hi.get(e) === t && hi.delete(e);
  };
}
function Ra(e) {
  return hi.get(e);
}
function Cx(e) {
  return hi.get(Ai())?.has(e.getKey()) ?? !1;
}
function Sx(e) {
  hi.get(Ai())?.add(e.getKey());
}
function Mx(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function pc(e) {
  return !!(e.opener || e.value || e.closer);
}
function ld(e) {
  return /^\s/.test(e);
}
function Al(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !ld(t) || !ld(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Qo(e, t, r) {
  return r.wantsRun ? Al(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : Mx(t);
}
function Ex(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Al(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Bh(e, t) {
  return !pc(e.scanPieces(t));
}
function Fs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Qo(e, n, r))
    return !1;
  const i = O();
  if (!w(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || ki(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function Ax(e, t, r, n) {
  return !r.wantsRun || pc(n) || sb(fi) ? !1 : Ai().getEditorState().read(() => {
    const i = X(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : pc(e.scanPieces(i));
  });
}
function Px(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function ud(e) {
  const t = ke(e);
  return bt(t, le, "attribute"), t;
}
function Nx(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Fp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function wx(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    _(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(ud(n.valueText));
    return;
  }
  const l = Nx(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = ct(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : _(u) ? Al(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = ud(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(ct(a === "selfClosing" ? "" : o(t), a));
}
function ks(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Qo(e, i, n) && !Cx(t)) {
    if (Ax(e, t, n, i)) {
      Sx(t);
      return;
    }
    if (!Fs(e, t)) {
      if (!n.wantsRun) {
        Px(i);
        return;
      }
      wx(e, t, i, n);
    }
  }
}
function Ox(e, t, r) {
  ks(e, t), t.isAttached() && Fs(e, t) && r.add(t.getKey());
}
function Vh(e) {
  if (!_(e))
    return !1;
  if (P(e) || Ae(e) || nn(e))
    return !0;
  const t = te(e, le);
  return t === "attribute" || t === dr;
}
function Pl(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && rn(e) && U(e.getParent())) : !1;
}
function qx() {
  const e = O();
  return w(e) ? Pl(e.focus.getNode(), e.focus.offset) : !1;
}
function Wh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return _(t) && Vh(t) ? t : void 0;
}
function Rx(e) {
  const t = Wh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function $x(e) {
  const t = Wh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function dd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function fd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function Ix(e, t) {
  let r = $x(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!_(n))
      return;
    if (!Vh(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function pd(e, t) {
  const r = Ix(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Hh(e) {
  if (e.isCollapsed()) {
    const a = Rx(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [dd(r), dd(n)], s = pd(r, "next"), o = pd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (fd(r, i[0]), fd(n, i[1]), !1) : !0;
}
const Co = "verse-block", Gh = 1, Lx = "verse-block";
class Ri extends Zt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Co;
  }
  static clone(t) {
    return new Ri(t.__number, t.__key);
  }
  static importJSON(t) {
    return Dx().updateFromJSON(t);
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
    return Kh(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(Lx), hd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && hd(r, this.__number), !1;
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
      type: Co,
      number: this.getNumber(),
      version: Gh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function hd(e, t) {
  const { start: r, end: n } = Kh(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), gd(e, "data-verse-start", i ? r : NaN), gd(e, "data-verse-end", i ? n : NaN);
}
function gd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function Dx(e) {
  return je(new Ri(e));
}
function Ts(e) {
  return e instanceof Ri;
}
function Ux(e) {
  return e?.type === Co;
}
const Fx = [
  Ut,
  fr,
  Pt,
  ft,
  xe,
  Ne,
  Yt,
  ur,
  Un,
  Or,
  Rr,
  et,
  Jr,
  Fn,
  Oi,
  qi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  wr,
  {
    replace: Jc,
    with: () => Lt(),
    withKlass: Jr
  }
], So = {
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
}, Kx = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function zx(e) {
  if (!e)
    return cr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: cr(r)?.category ?? k.Uncategorized,
      type: Kx[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: cr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function md(e, t, r) {
  const n = {
    type: _r,
    version: vr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Go(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Jh = "v", Yh = 1, jx = "verse-selected";
class Ct extends Ps {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Jh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Ct(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Wx(t) ? {
        conversion: Vx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Nl().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(ec, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Dn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(ec, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? It(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      po + this.getNumber() + po
    );
    return v(Bx, { nodeKey: this.getKey(), text: t });
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
      version: Yh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Uh(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Bx({ nodeKey: e, text: t }) {
  const [r] = xb(e);
  return v("span", { className: r ? jx : void 0, children: t });
}
function Vx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Nl(t) };
}
function Nl(e, t, r, n, i, s) {
  return je(new Ct(e, t, r, n, i, s));
}
function Wx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Jh;
}
function zn(e) {
  return e instanceof Ct;
}
function Hx(e) {
  return e?.type === Ct.getType();
}
function Te(e) {
  return Ae(e) || zn(e);
}
function Xh(e) {
  return Wp(e) || Hx(e);
}
function Gx(e) {
  return Jx(e).find((t) => oe(t));
}
function Jx(e) {
  return e.some(Ts) ? e.flatMap((t) => Ts(t) ? t.getChildren() : t) : e;
}
function Zo(e) {
  return L(e) ? Ts(e) ? e.getChildren().flatMap(Zo) : e.getChildren() : [];
}
function Yx(e, t) {
  return Zo(e).find((i) => Te(i) && Ml(t, i.getNumber()));
}
function Xx(e, t) {
  return t === 0 ? Gx(e) : e.map((r) => Yx(r, t)).filter((r) => r)[0];
}
function Mo(e) {
  return Zo(e).find((r) => Te(r));
}
function Qh(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (Te(i))
      return i;
  }
}
function Qx(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (Te(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !We(r); ) {
    const n = Mo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function hc(e) {
  return Zo(e).findLast((t) => Te(t));
}
function Zx(e) {
  if (!Ae(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function ev(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function tv(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return ev(t, e, r);
  if (_(e)) {
    const n = Zx(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function yd(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function rv(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!w(t))
    return yd(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return tv(e, t) ? { verseNum: n } : yd(e);
}
function nv(e) {
  return sx(e) || zn(e);
}
function wl(e) {
  if (_(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith($) && e.setTextContent(`${t} `);
  }
}
function Zh(e) {
  if (_(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function eg(e, t) {
  return e.getEditorState().read(() => !X(t));
}
function iv(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Ol(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && L(i) && L(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && L(i)) {
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
      let s = bd(i);
      for (; s && !We(s); ) {
        const o = Mo(s);
        if (o) {
          n = o;
          break;
        }
        s = bd(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Mo(s);
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
function sv(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Ol(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = Qh(i, r.getIndexWithinParent())), !n && i) {
      let o = kd(i);
      for (; o && !We(o); ) {
        const a = hc(o);
        if (a) {
          n = a;
          break;
        }
        o = kd(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !We(s); ) {
      const o = hc(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function bd(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function kd(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Ol(e, t) {
  if (L(e) && w(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && Te(n))
      return n;
    const i = Qh(e, t.anchor.offset);
    if (i)
      return i;
    const s = Mo(e);
    if (s)
      return s;
  }
  return ql(e);
}
function ql(e) {
  if (!e || We(e))
    return;
  if (Te(e))
    return e;
  let t = nd(e);
  for (; t; ) {
    if (We(t))
      return;
    if (Te(t))
      return t;
    const r = hc(t);
    if (r)
      return r;
    t = nd(t);
  }
}
const ov = ["style"], av = ["style", "code"], Eo = ["style", "cid"], cv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], lv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], uv = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], dv = ["style", "caller", "category", "contents"], fv = ["tag", "marker", "contents"], pv = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], xs = `
`;
function hv(e, t) {
  const r = X(e);
  if (!At(r))
    return;
  const n = tg(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function tg(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Tp();
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
      if (Er(l) || At(l))
        return n;
      Ft(l) && (a = l);
    }
    if (Ft(l) && (i.includes(l) || i.push(l)), rg(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Rl(l, t);
  }
  if (a)
    return n;
}
function Td(e, t, r = "delta-doc") {
  if (e.length < 2 || !yv(e[0]) || !mv(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => gv(n, r)?.getKey());
}
function gv(e, t = "delta-doc") {
  const r = Tp();
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
    if (Ft(a) && (i.includes(a) || i.push(a)), rg(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Rl(a, t);
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
function Ti(e, t) {
  return e ? t ? !ki(t.node, e.getKey()) : !0 : !1;
}
function Er(e) {
  return _(e) && !At(e);
}
function At(e) {
  return We(e) || Te(e) || $e(e) || z(e) || we(e) || nn(e);
}
function Br(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function mv(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && pv.includes(t);
}
function yv(e) {
  return e.retain != null && typeof e.retain == "number";
}
function rg(e, t) {
  return z(e) || we(e) ? !0 : t === "apply" && L(e) && At(e);
}
function ng(e) {
  const t = e.getParent();
  return Kt(e) && oe(t) && t.getFirstChild() === e;
}
function gc(e) {
  const t = e.getParent();
  return t !== null && it(t, Ke) !== null;
}
function bv(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === Dt && t.getChildrenSize() === 1;
}
function kv(e) {
  const t = e.getParent();
  if (!z(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === Et(t.getCaller());
}
function Tv(e) {
  return !ph(e) && Rl(e, "delta-doc") === e.getTextContentSize();
}
function Rl(e, t) {
  if (At(e))
    return 1;
  if (_(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (_l(e) || ng(e) || te(e, le) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    te(e, le) === "attribute" || gc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(rl) || bv(e) || kv(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function mc(e, t) {
  const r = { insert: e.__text }, n = te(e, Hr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = ig(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function xd(e) {
  const t = new rs();
  return e.isEmpty() || e.read(() => {
    const r = Ce();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && vt(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = xv();
    for (const s of i)
      t.push(s);
  }), t;
}
function $l(e, t) {
  const r = [], n = Pi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...vd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...vd(c, n.length, n, i, s, o, a));
  return r;
}
function xv() {
  return $l();
}
function vd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return vv(e, a, n), _v(e, a, i, s, o), Cv(e, t, r, i, o, s, a), We(e) && a.push(Av(e)), Te(e) && a.push(Nv(e)), $e(e) && a.push(wv(e)), nn(e) && a.push(Ov(e)), Mv(e, a, s), Sv(e, a, s), Iv(c, s), a;
}
function vv(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ht(n) ? t.push(Ev(n)) : oe(n) ? t.push(Pv(n)) : vt(n) && t.push({ insert: xs });
  }
  Ft(e) && (r.includes(e) || r.push(e));
}
function _v(e, t, r, n, i) {
  if (!_(e) || Ae(e) || nn(e))
    return;
  const s = e.getParent();
  if (z(s) && s.getFirstChild() === e)
    return;
  const o = Qt(e) !== void 0;
  if (P(e) && (o || ng(e) || gc(e) || ph(e)) || te(e, le) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Us(a))
    return;
  const c = e.getPreviousSibling();
  if (z(s) && P(c) && c === s.getFirstChild() && a === Et(s.getCaller()))
    return;
  const l = U(s) ? s : void 0, d = l?.getFirstChild();
  o && l && P(d) && c === d && a.startsWith($) && (a = a.slice(1));
  const u = a.startsWith(rl) || te(e, le) === "attribute" || gc(e), f = !!l && a === Dt && l.getChildrenSize() === 1, p = ea(e, n), h = p ? r.filter((T) => p.children.includes(T)) : r, y = mc(e, h);
  if (y.insert = a, p) {
    if (!a || a === $ || u)
      return;
    p.contentsOps?.push(y);
  } else
    f || u || t.push(y);
  const m = a !== "" && !f && !(u && l);
  if (r.length > 0 && m)
    for (const T of r)
      i.add(T);
}
function Cv(e, t, r, n, i, s, o) {
  U(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Ti(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = Rv(c), d = ea(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Sv(e, t, r) {
  if (!z(e))
    return;
  const n = qv(e), i = ea(e, r), s = {
    node: e,
    children: Pi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Mv(e, t, r) {
  if (!we(e))
    return;
  const n = $v(e), i = ea(e, r), s = {
    node: e,
    children: Pi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function on(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function Ev(e) {
  const t = { style: ms, code: e.__code };
  return on(t, e), { insert: xs, attributes: { book: t } };
}
function Av(e) {
  const t = { style: ko, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), on(t, e), { insert: { chapter: t } };
}
function Pv(e) {
  const t = { style: e.__marker };
  return on(t, e), { insert: xs, attributes: { para: t } };
}
function Nv(e) {
  const t = { style: bo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), on(t, e), { insert: { verse: t } };
}
function wv(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), on(t, e), { insert: { milestone: t } };
}
function Ov(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function qv(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), on(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = te(e, Hr);
  return n && (r.attributes = { segment: n }), r;
}
function Rv(e) {
  const t = { insert: "" }, r = ig([e]);
  return r && (t.attributes = { char: r }), t;
}
function $v(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), on(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function ea(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function Iv(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Ti(t[r].node, e) && t.splice(r, 1);
}
function ig(e) {
  if (e.length === 0)
    return;
  const t = e.map(Lv);
  return t.length === 1 ? t[0] : t;
}
function Lv(e) {
  const t = { style: e.__marker }, r = te(e, En);
  return r && (t.cid = r), on(t, e), t;
}
const sg = 1;
class Jt extends Ps {
  __caller;
  __previewText;
  __onClick;
  constructor(t = ho, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return Os;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Jt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => Uv(t) ? {
        conversion: Dv,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Il().updateFromJSON(t);
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => Fv(t, n), (l) => Kv(t, n, s, l), () => zv(t, n), () => jv(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return v("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === ho && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Ap && i ? (
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
      version: sg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Dv(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Il(t, r) };
}
function Il(e, t, r) {
  return je(new Jt(e, t, r));
}
function Uv(e) {
  return e ? e.classList.contains(Jt.getType()) : !1;
}
function hr(e) {
  return e instanceof Jt;
}
function Fv(e, t) {
  return e.getEditorState().read(() => {
    const r = X(t);
    if (!z(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function Kv(e, t, r, n) {
  e.update(() => {
    const i = X(t);
    if (!z(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = X(r);
    if (!hr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function zv(e, t) {
  return e.getEditorState().read(() => {
    const r = X(t);
    if (!z(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return $l(r);
  });
}
function jv(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of Pi())
      if (z(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const Bv = [
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
], Vv = ["†"], Ll = "formatted", og = "unformatted", ag = "paragraph-structure", cg = "standard", lg = "block-verse", Wv = {
  [Ll]: "Formatted",
  [og]: "Unformatted",
  [ag]: "Paragraph Structure",
  [cg]: "Standard",
  [lg]: "Block Verse"
};
function $i(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Dl, Ul;
function Hv(e) {
  const t = ug(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Dl = e, Ul = t;
}
Hv(Ll);
const q0 = () => Dl, ta = () => Ul;
function ug(e) {
  let t;
  switch (e ?? Dl) {
    case Ll:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case og:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case ag:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case cg:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case lg:
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
function R0(e) {
  if (!e)
    return;
  const t = _d(e);
  return Object.keys(Wv).find((r) => wt(_d(ug(r)), t));
}
const Gv = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function _d(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...Gv, ...t };
}
function er(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function Jv(e) {
  if (e)
    return vs(e) ? Ct : e.markerMode === "editable" ? ft : Ct;
}
function vs(e) {
  return e?.verseLayout === "block";
}
function Yv(e) {
  const t = [], r = e ?? Ul;
  return r && (t.push(`${Gb}${r.markerMode}`), r.hasSpacing && t.push(Wb), r.isFormattedFont && t.push(Hb)), t;
}
function Fl(e, t) {
  if (fg())
    return;
  const { start: r } = e;
  let { end: n } = e;
  n ??= r;
  let [i, s] = bc(r, t), [o, a] = bc(n, t);
  if (!i || !o || s === void 0 || a === void 0)
    return;
  [i, s] = Ad(i, s), [o, a] = Ad(o, a), n !== r && op(n) && n.closingMarkerOffset === 0 && ([o, a] = u_(o, a, er(t)));
  const c = Ko();
  return c.anchor = Lu(i.getKey(), s, Pd(i)), c.focus = Lu(o.getKey(), a, Pd(o)), c;
}
function Kl(e) {
  if (fg())
    return;
  const t = O();
  if (!t || !w(t))
    return;
  const r = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), n = t.isBackward() ? t.focus.offset : t.anchor.offset, i = wn(r, n, e);
  if (t.isCollapsed())
    return { start: i };
  const s = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), o = t.isBackward() ? t.anchor.offset : t.focus.offset, a = wn(s, o, e);
  return { start: i, end: a };
}
const zl = {
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
}, Xv = new Map(Object.values(zl).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), Cd = {
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
}, Qv = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(Cd).filter((e) => Cd[e])
), Zv = /([^\s="|]+)="([^"]*)"/g, e_ = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function t_(e, t) {
  return `${e}['${t}']`;
}
function gi(e) {
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
function jl(e) {
  const t = Yr(e);
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
function yc(e, t, r) {
  const n = [];
  for (const i of e.slice(t).matchAll(Zv)) {
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
function r_(e, t) {
  const r = e_.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = Xv.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function dg(e) {
  if (pr(e)) {
    const t = d_(e), r = e.getTextContent();
    if ($e(t) && (r === "\\*" || r.startsWith(Ee(t.getMarker()))))
      return t;
  }
  return wi(e) ?? e;
}
function n_(e) {
  const t = e.getTextContentSize(), r = jl(e);
  if (r && r.role !== "value") {
    const i = zl[r.kind];
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
        spans: r.role === "closer" ? cs() : gi(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: dg(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      gi(e.getNested() ? 2 : 1)
    ) : cs()
  };
}
function i_(e) {
  const t = e.getTextContent(), r = t.length, n = jl(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = dg(e);
  if (ht(i)) {
    const s = Ee(i.getMarker()).length;
    if (t.startsWith(Ee(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...gi(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (we(i)) {
    const s = ml(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: cs() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: gi(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? cs() : gi(t.startsWith("\\+") ? 2 : 1)
  };
}
function s_(e) {
  const t = jl(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = zl[n];
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
        ...yc(i, 1, U(r) ? qs(r.getMarker()) : void 0)
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
        ...yc(i, 2, Rs(r.getMarker()))
      ]
    };
  }
}
function o_(e) {
  const t = e.getParent();
  if (!we(t))
    return;
  const r = e.getTextContent(), n = r.length, i = r_(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...yc(r, 1, void 0)
      ]
    };
}
function Sd(e, t) {
  const r = Ee(e);
  if (t.startsWith(r))
    return [
      ...gi(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Ks(e) {
  if (P(e))
    return n_(e);
  if (pr(e))
    return i_(e);
  if (_t(e) && e.getTextType() === "attribute")
    return o_(e);
  if (e.getType() === Os) {
    const n = e.getParent();
    return z(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Ae(e)) {
    const n = Sd(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!_(e))
    return;
  if (te(e, le) === "attribute")
    return s_(e);
  const t = e.getParent();
  if (_e(t) && Ni(t)?.is(e)) {
    const n = Sd(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = wi(e);
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
function Bl(e) {
  return pr(e) || _t(e) && e.getTextType() === "attribute" || e.getType() === Os;
}
function a_(e) {
  const t = [];
  if (Ae(e) && t.push(e), L(e)) {
    const r = _e(e) ? Ni(e) : void 0, n = z(e) ? Gr(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (P(i) || pr(i) || _t(i) && i.getTextType() === "attribute" || i.getType() === Os || r?.is(i)) && t.push(i);
  }
  for (const r of Qv) {
    const n = Mr(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function c_(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function Md(e, t, r) {
  const n = Ks(e);
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
        jsonPath: t_(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return l_(e, r);
  }
}
function Ed(e, t) {
  return _(e) && !Ks(e) && !_o(e, 0, t);
}
function l_(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && be(o); )
    r = o, o = r.getParent();
  let n = r.getPreviousSibling();
  for (; n && Ed(n, t); )
    n = n.getPreviousSibling();
  if (!n)
    return;
  const i = L(n) ? n.getLastDescendant() : n;
  if (i && (_(i) || Bl(i)))
    return Ed(i, t) ? void 0 : mi(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return mi(s, n.getIndexWithinParent() + 1, t);
}
function ri(e, t, r) {
  for (const n of a_(e)) {
    const i = Ks(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!c_(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function bc(e, t) {
  const r = er(t);
  if (Hc(e)) {
    const n = Mi(e.jsonPath);
    let i = Ce();
    for (let s = 0; s < n.length; s++) {
      if (!i || !L(i))
        return [void 0, void 0];
      const o = sn(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : Tx(o, e.offset) ?? [void 0, void 0];
      i = o.node;
    }
    return i && L(i) ? vx(i, e.offset) : [void 0, void 0];
  }
  if (Iu(e) || Zy(e)) {
    const n = Ji(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = Iu(e) ? ri(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : ri(n, { kind: "attributeMarker", keyName: i }, 0);
    return s || Nd(n);
  }
  if (eb(e)) {
    const n = Ji(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = ri(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || Nd(n);
  }
  if (tb(e)) {
    const n = Ji(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = ri(n, { kind: "marker" }, 0);
    if (i)
      return i;
    if (!L(n))
      return [void 0, void 0];
    const s = n.getFirstChild();
    return s && _(s) ? [s, 0] : [void 0, void 0];
  }
  if (op(e)) {
    const n = Ji(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = ri(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    if (!L(n))
      return [void 0, void 0];
    const s = n.getLastChild();
    return s && _(s) ? [s, s.getTextContent().length] : [void 0, void 0];
  }
  if (rb(e)) {
    const n = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), i = n?.[1] ?? n?.[2] ?? n?.[3], s = Ji(e.jsonPath, r);
    if (!s || i === void 0)
      return [void 0, void 0];
    const o = ri(s, { kind: "property", property: i }, e.propertyOffset);
    if (o)
      return o;
    if (!L(s))
      return [void 0, void 0];
    const a = s.getFirstChild();
    return a && _(a) ? [a, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${nb(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Ad(e, t) {
  if (!Bl(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !L(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = t >= e.getTextContentSize() && t > 0;
  return [r, i ? n + 1 : n];
}
function u_(e, t, r) {
  let n;
  if (L(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; _(n) && !Ks(n) && !_o(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = L(n) ? n.getLastDescendant() : n;
  return _(s) ? [s, s.getTextContentSize()] : [e, t];
}
function Pd(e) {
  return L(e) ? "element" : "text";
}
function Ji(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = Mi(n);
  let s = Ce();
  for (const o of i) {
    if (!s || !L(s))
      return;
    const a = sn(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function wn(e, t, r) {
  return mi(e, t, er(r));
}
function mi(e, t, r) {
  const n = Md(e, t, r);
  if (n)
    return n;
  if (be(e)) {
    const i = e.getChildrenSize(), s = e.getChildAtIndex(Math.min(t, i - 1));
    if (_(s)) {
      const a = t >= i ? s.getTextContentSize() : 0;
      return mi(s, a, r);
    }
    const o = e.getParent();
    if (o) {
      const a = e.getIndexWithinParent(), c = t >= i ? a + 1 : a;
      return mi(o, c, r);
    }
  }
  if (L(e)) {
    const i = e.getChildAtIndex(t);
    if (i && Bl(i)) {
      const o = Md(i, 0, r);
      return o || {
        jsonPath: gn(yn(e))
      };
    }
    const s = ui(e, t, r);
    return s.type === "text" ? {
      jsonPath: gn([...yn(e), s.index]),
      offset: s.offset
    } : {
      jsonPath: gn(yn(e)),
      offset: s.index
    };
  }
  if (_(e)) {
    const i = _o(e, t, r);
    if (i)
      return {
        jsonPath: gn([
          ...yn(i.parent),
          i.index
        ]),
        offset: i.offset
      };
    const s = t > 0, o = s ? e.getNextSibling() : e.getPreviousSibling();
    if (_(o) && (Ks(o) || _o(o, 0, r)))
      return mi(o, s ? 0 : o.getTextContentSize(), r);
  }
  return { jsonPath: gn(yn(e)), offset: t };
}
function Nd(e) {
  if (L(e)) {
    const r = e.getLastChild();
    if (r && _(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && L(t) ? [t, 0] : [void 0, void 0];
}
function d_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!vo(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function yn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = wi(r);
    if (!n)
      break;
    const i = kx(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function fg() {
  for (let e = Ce().getFirstChild(); e; e = e.getNextSibling())
    if (Ts(e))
      return !0;
  return !1;
}
function pg(e, t, r, n, i, s, o) {
  if (!Ne.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Fl(r, i) : O();
  if (!w(a))
    return;
  const c = h_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (ns(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = hg(e, l, c, i, s, void 0, void 0);
  return p_(d, a, i), d;
}
function Vl(e) {
  return e !== "expanded";
}
function f_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!_(r) || !U(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function p_(e, t, r) {
  const n = Vl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || lx(t), Hh(t), xn(t);
  const i = f_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(U)?.selectEnd();
}
function ni(e, t, r) {
  const n = Cr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ct(e)) : r?.markerMode === "visible" && n.append(Sr("marker", Ee(e)));
  const s = t === "" ? Dt : i ? $ + t : t;
  return n.append(ke(s)), n;
}
function h_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(ni("fr", f, n)), !e.isCollapsed()) {
        const p = Od(e);
        p.length > 0 && o.push(ni("fq", p, n));
      }
      o.push(ni("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(ni("xo", f, n)), !e.isCollapsed()) {
        const p = Od(e);
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
function hg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Vl(n?.noteMode), l = al(e, t, c);
  s && bt(l, Hr, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = ct(e), d && u.setMode("token"), a || (f = ct(e, "closing"))) : n?.markerMode === "visible" && (u = Sr("marker", Ee(e) + " "), a || (f = Sr("marker", nt(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = ke(Et(l.__caller)), d && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => Xo(), y = r.flatMap(m_(h));
    if (t === "")
      l.append(...y);
    else {
      const m = Cl(r);
      let T = () => {
      };
      i?.noteCallerOnClick && (T = i.noteCallerOnClick), p = Il(l.__caller, m, T), l.append(p, h(), ...y);
    }
  }
  return f && l.append(f), l;
}
function wd(e) {
  if (typeof e == "string") {
    const i = X(e);
    return z(i) ? i : void 0;
  }
  const t = Pi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => z(i.node))[e]?.node;
  if (z(n))
    return n;
}
function g_(e, t) {
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
    e.getChildren().reverse().find(U)?.selectEnd();
}
function m_(e) {
  return (t) => _t(t) ? [t] : [t, e()];
}
function y_(e) {
  const t = e.getParent();
  return t !== null && it(t, z) !== null;
}
function Od(e) {
  if (!w(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = cp(e);
  let a = "";
  for (const c of t)
    if (!(z(c) || hr(c) || y_(c)) && !P(c) && !nn(c) && te(c, le) !== "attribute") {
      if (Te(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (_(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const Wl = [
  Jt,
  Ct,
  ...Fx
], b_ = [
  Ri,
  ...Wl
], k_ = Ln((e, t) => {
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
function T_() {
  const [e, t] = he(void 0), [r, n] = he(), i = Q(null), s = fe((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = wb(l, c, () => {
      Ob(l, c, {
        placement: "bottom-start",
        middleware: [qb(), Rb()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = fe(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function x_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = T_();
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
const v_ = Hy(k_);
function gg({ isOpen: e = !1, children: t }) {
  const r = Q(null), { coords: n, placement: i } = x_({ isOpen: e, floatingBoxRef: r }), s = De(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return kn(
    v(v_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const mg = ip(void 0);
function Hl() {
  const e = sp(mg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function __(e, t) {
  const [r, n] = he(0), [i, s] = he(-1), o = De(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = fe(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = fe(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = fe(() => {
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
function C_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = __(t, r);
  return v(mg.Provider, { value: i, children: v("div", { ...n, children: e }) });
}
const yg = Ln(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Hl(), d = fe((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = fe((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return v("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function S_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Q(null), { state: { activeIndex: i, menuItems: s } } = Hl(), o = De(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = De(() => {
    const c = o(s);
    return t ? Gy.map(c, (l, d) => Jy(l) && l.type === yg && l.props.index === void 0 ? Yy(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return j(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), v("div", { ref: n, role: "menu", ...r, children: a });
}
const M_ = (e, t, r) => ao(e, r).toLowerCase().includes(t.toLowerCase()), qd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", ao = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function E_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? qd(r[0]) : "") : (d = n || (r.length > 0 ? qd(r[0]) : ""), u = (h, y) => M_(h, y, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return u(h, t);
    } catch (y) {
      return console.warn("Error filtering item:", h, y), !1;
    }
  }).sort((h, y) => {
    const m = (N) => (p.has(N) || p.set(N, ao(N, f).toLowerCase()), p.get(N) ?? ""), T = a ? ao(h, f) : m(h), S = a ? ao(y, f) : m(y);
    for (const N of c)
      switch (N) {
        case "exact":
          if (T === l && S !== l)
            return -1;
          if (S === l && T !== l)
            return 1;
          break;
        case "startsWith":
          if (T.startsWith(l) && !S.startsWith(l))
            return -1;
          if (S.startsWith(l) && !T.startsWith(l))
            return 1;
          break;
        case "contains": {
          const R = T.indexOf(l), E = S.indexOf(l);
          if (R !== -1 && E === -1)
            return -1;
          if (E !== -1 && R === -1)
            return 1;
          if (R !== -1 && E !== -1)
            return R - E;
          break;
        }
      }
    return T.localeCompare(S);
  });
}
const $a = {
  Root: C_,
  Options: S_,
  Option: yg
};
function A_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return De(() => E_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function P_() {
  const { moveUp: e, moveDown: t, select: r } = Hl();
  return De(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const N_ = () => {
  const e = P_(), [t] = ue();
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
function w_() {
  return N_(), null;
}
const O_ = ["Shift", "Control", "Alt", "Meta"];
function bg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ue(), d = s !== void 0, [u, f] = he(""), p = d ? s ?? "" : u, h = A_({ query: p, items: t, filterBy: "name" }), y = (m) => {
    n?.(), r ? r(m) : m.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(Pr, (m) => {
    if (d || c?.includes(m.key) || O_.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return n?.(), !1;
    const S = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((N) => N.slice(0, -1));
      }
    }[m.key];
    return S ? (m.stopPropagation(), m.preventDefault(), S(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && f((N) => N + m.key), !0) : !1;
  }, Ue), [l, d, p, o, n, c]), Me($a.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => y(m), children: [!d && v("input", { value: p, type: "text", disabled: !0 }), v(w_, {}), v($a.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((S, N) => Me($a.Option, { index: N, children: [v("span", { className: "label", children: S.label ?? S.name }), v("span", { className: "description", children: S.description })] }, S.name)) })] });
}
function q_({ trigger: e, items: t }) {
  const [r] = ue(), [n, i] = he(!1), s = fe((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = O();
      if (w(l))
        return l;
    });
    a.read(() => {
      const l = O();
      !w(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && v(gg, { isOpen: n, children: ({ placement: o }) => v(bg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function R_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: De(() => {
    if (!t || !e)
      return;
    const i = cr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = cr(o), { action: c } = r(o, a);
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
function $_(e, t) {
  j(() => {
    if (!e.hasNodes([Je]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ze(tl(e, Je, (n) => Mn(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], h = a[l]?.[u], y = c[l]?.[u];
          i.addID(l, u, f, p, h, y);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Je, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = X(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : be(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Je.isReservedType(c))
              for (const d of l) {
                let u = t.get(ls(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(ls(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(ls(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const I_ = Ln(function({ logger: t, viewOptions: r }, n) {
  const [i] = ue(), s = De(() => /* @__PURE__ */ new Map(), []);
  $_(i, s);
  const o = (a, c, l) => {
    const d = Array.from(l ?? s.get(ls(a, c)) ?? []);
    if (d.length !== 0)
      for (const u of d) {
        const f = X(u);
        be(f) && (f.deleteID(a, c), f.hasNoIDsForEveryType() && yo(f));
      }
  };
  return Wc(n, () => ({
    setAnnotation(a, c, l, d, u, f, p) {
      if (Je.isReservedType(c))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const h = Fl(a, r);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        o(c, l), cl(h, c, l, d, u, f, p);
      }, { tag: tc });
    },
    removeAnnotation(a, c) {
      if (Je.isReservedType(a))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      const l = s.get(ls(a, c));
      l === void 0 || l.size === 0 || i.update(() => {
        o(a, c, l);
      }, { tag: tc });
    }
  })), null;
}), L_ = [];
function D_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = L_, onChange: n }) {
  const [i] = ue();
  return As(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(lp) && !d.has(Pp) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = U_(i, s);
        u.length !== 0 && n(o, i, d, u);
      });
  }, [i, e, t, r, n]), null;
}
function U_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new rs();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = X(i), o = s !== null && Qt(s) !== void 0;
    if (t.size === 1 && _(s) && !o && Tv(s)) {
      const a = tg(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = X(i);
          return new rs([_(u) ? mc(u) : { insert: "" }]);
        }), l = new rs([mc(s)]), d = new rs(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = xd(r), c = xd(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function F_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += K_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), j_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += B_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), W_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function K_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), z_(t, e.retain, e.attributes, r, n)), e.retain);
}
function z_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ce();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Er(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, h = Math.min(s, p);
        if (h > 0) {
          let y = d;
          const m = f > 0, T = h < u - f;
          if (m && T) {
            const [, S] = d.splitText(f);
            [y] = S.splitText(h);
          } else m ? [, y] = d.splitText(f) : T && ([y] = d.splitText(h));
          if (Xr(r)) {
            const S = y.getParent();
            if (U(S)) {
              const N = r.char;
              let R;
              Array.isArray(N) ? a >= 0 && a <= N.length - 1 && (R = N[a]) : a === 0 && (R = N);
              const E = R ? Pn(R, S) : !1;
              if (E && Array.isArray(N) && N.length > 1) {
                const C = ke("");
                y.replace(C);
                const M = typeof r.segment == "string" ? r.segment : void 0, q = Ii(N.slice(1), n, y, M);
                let J = C;
                for (const H of q)
                  J.insertAfter(H), J = H;
                C.remove(), Ot(r, y);
              } else if (E)
                Ot(r, y);
              else {
                y.remove();
                const C = Rd(y, r, n, i);
                if (C && C.length > 0) {
                  let M = S;
                  for (const q of C)
                    M.insertAfter(q), M = q;
                }
              }
            } else {
              const N = ke("");
              y.replace(N);
              const R = Rd(y, r, n, i);
              if (R && R.length > 0) {
                let E = N;
                for (const C of R)
                  E.insertAfter(C), E = C;
                N.remove();
              } else
                N.replace(y);
            }
          } else
            Ot(r, y);
          s -= h;
        }
      }
      o += u;
    } else if (At(d))
      e <= o && o < e + t && s > 0 && ($d(d, r), s -= 1), o += 1;
    else if (U(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (Xr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            kc(d, p.style), typeof p.cid == "string" && bt(d, En, () => p.cid);
            const h = Fe(p, Eo);
            h && Object.keys(h).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...h
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || tC(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && Za(d), !0;
        }
      }
      u && Za(d), a -= 1;
    } else if (Ft(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!vt(d))
          $d(d, r);
        else if (Gl(r)) {
          const p = xg(r.para, n);
          p && d.replace(p, !0);
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
function Rd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Ii(t.char, r, e, i), o = s.find(U);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Ot(t, e);
    return;
  }
  const a = {};
  Sg.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Ot(t, e), s;
}
function kg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Ee(t))) : _t(r) && r.getTextType() === "marker" && r.setTextContent(Ee(t) + $);
}
function kc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = U(e.getParent()), i = e.getFirstChild();
  _t(i) && i.getTextType() === "marker" && i.getTextContent() === Ee(r, n) && i.setTextContent(Ee(t, n));
  const s = e.getLastChild();
  _t(s) && s.getTextType() === "marker" && s.getTextContent() === nt(r, n) && s.setTextContent(nt(t, n));
}
function $d(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && U(e) && Xr(t)) {
      const i = Tc(n);
      if (kc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        bt(e, En, () => o);
      }
      const s = Fe(i, Eo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (We(e) || Te(e) || $e(e) || z(e) || we(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ht(e) || oe(e) || U(e)) && (r === "style" && oe(e) ? kg(e, n) : r === "style" && U(e) ? kc(e, n) : r === "code" && ht(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && bt(e, Hr, () => n));
  }
}
function j_(e, t, r) {
  if (t <= 0)
    return;
  const n = Ce();
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
    } else if (At(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Ft(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Ft(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Lt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Pe(p)) {
            let h = i + 1;
            const y = p.getChildren();
            for (const T of y) {
              if (s <= 0)
                break;
              const S = i;
              if (i = h, o(T)) {
                i = S;
                break;
              }
              Er(T) ? h += T.getTextContentSize() : At(T) && (h += 1), i = S;
            }
            const m = p.getChildren();
            for (const T of m)
              T.remove(), a.append(T);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Lt(), !0);
        } else oe(a) ? a.replace(Lt(), !0) : a.remove();
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
function B_(e, t, r, n, i) {
  if (t === xs)
    return Id(e, r, n, i);
  if (t.endsWith(xs) && !Gl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Xr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Ao(e, s, r, i);
    }
    return o += Id(e + o, r, n, i), o;
  } else return Xr(r) ? V_(e, t, r, n, i) : Ao(e, t, r, i);
}
function V_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ke(t === "" ? Dt : t);
  Ot(r, s);
  let o;
  {
    let m = function(T) {
      if (Er(T)) {
        const S = T.getTextContentSize();
        if (e >= y && e < y + S) {
          const N = T.getParent();
          return U(N) && (o = N), !0;
        }
        y += S;
      } else if (At(T))
        y += 1;
      else if (U(T)) {
        const S = T.getChildren();
        for (const N of S)
          if (m(N))
            return !0;
      } else if (L(T)) {
        const S = T.getChildren();
        for (const N of S)
          if (m(N))
            return !0;
        Ft(T) && (y += 1);
      }
      return !1;
    };
    const h = Ce();
    let y = 0;
    m(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Pn(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Pn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Ii(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(U);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Ao(e, t, void 0, i);
  const f = {};
  for (const [h, y] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof y == "string" && (f[h] = y);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const h of d)
    if (!Tg(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Ao(e, t, void 0, i));
}
function Ao(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ce();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Er(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = ke(t);
        if (Ot(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          U(f) && !Xr(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (At(c))
      s += 1;
    else if (U(c)) {
      if (!o && e === s) {
        const u = ke(t);
        Ot(r, u);
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
        return Ot(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Ft(c)) {
      if (!o && e === s) {
        const u = ke(t);
        Ot(r, u);
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
        return Ot(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = ke(t);
    Ot(r, c);
    const l = Lt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Tg(e, t, r) {
  const n = Ce();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Lt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
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
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Lt().append(t));
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
      } else if (At(l))
        i += 1;
      else if (U(l)) {
        if (o(l))
          return !0;
      } else if (Ft(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (vt(d) && Ft(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Lt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Pe(a) ? vt(a) && oe(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Pe(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Pe(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function W_(e, t, r, n, i) {
  let s;
  return Br("chapter", t) ? s = G_(t.insert.chapter, r) : Br("verse", t) ? s = J_(t.insert.verse, r) : Br("ms", t) ? s = Y_(t.insert.ms) : Br("note", t) ? s = vg(t, r, n, i) : Br("unknown", t) ? s = _g(t, r, n, i) : Br("unmatched", t) && (s = Q_(t.insert.unmatched, r)), s ? Tg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Id(e, t, r, n) {
  let i;
  Gl(t) ? i = xg(t.para, r) : eC(t) && (i = H_(t.book)), i ??= Lt();
  const s = i, o = oe(s), a = vt(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Er(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (oe(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [y] = h > 0 ? u.splitText(h) : [void 0];
          let m, T = y?.getPreviousSibling();
          for (; T; ) {
            const S = T;
            T = T.getPreviousSibling(), m ? m.insertBefore(S) : s.append(S), m = S;
          }
          return y && s.append(y), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (At(u))
      c += 1;
    else if (Ft(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (vt(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (oe(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && oe(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (L(u)) {
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
  return d(Ce()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function H_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== ms || !r || !Ut.isValidBookCode(r))
    return;
  const n = Fe(e, av);
  return yh(r, n);
}
function xg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Fe(e, ov), i = ys(r, n);
  if (!$i(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ct(r), Xo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ee(r) + $;
    i.append(t.hasGutterParaMarkers ? Jk(s) : Sr("marker", s));
  }
  return i;
}
function G_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Fe(e, cv);
  let a;
  if (t.markerMode === "editable")
    a = nh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = kl(r, c, n, i, s, o);
  }
  return a;
}
function J_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Fe(e, lv);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = It(r, n);
    c = Vp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Nl(n, l, i, s, o, a);
  }
  return c;
}
function Y_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Fe(e, uv);
  return Op(t, r, n, s, i);
}
function vg(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Fe(i.note, dv), d = typeof l?.closed == "string" ? l.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const p = [];
  for (const y of c?.ops ?? [])
    if (typeof y.insert == "string")
      if (Xr(y.attributes)) {
        const m = Ii(y.attributes.char, t, ke(y.insert), void 0, Cg(y.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...m);
      } else
        p.push(ke(y.insert));
  return hg(s, o, p, t, r, f, d).setCategory(a).setUnknownAttributes(l);
}
function _g(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Fe(i, fv), l = gl(s, o, c), d = a?.ops ?? [];
  d.length > 0 && X_(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && bt(l, Hr, () => u), l;
}
function X_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Xr(s.attributes)) {
        const o = ke(s.insert), a = Ii(s.attributes.char, t, o, void 0, Cg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ke(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Br("unknown", s)) {
        const o = _g(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Br("note", s)) {
        const o = vg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function Q_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = bl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Cg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Tc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Ii(e, t, r, n, i, s = !1, o = !1) {
  _(r) && r.getTextContentSize() === 0 && r.setTextContent(Dt);
  const a = () => {
    o && _(r) && r.getTextContent() !== Dt && r.setTextContent($ + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Tc), l = c[0], d = i?.[i.length - 1];
    if (U(d) && Pn(l, d))
      return c.length > 1 ? Ii(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => d.append(p)) : r && d.append(r), [];
    a();
    const u = c.reduceRight((f, p, h) => {
      const y = Cr(p.style, Fe(p, Eo));
      if (typeof p.cid == "string" && bt(y, En, () => p.cid), n && h === c.length - 1 && bt(y, Hr, () => n), f)
        if (U(f)) {
          const m = f.getMarker(), T = [];
          La(m, T, t, !0), T.forEach((N) => y.append(N)), y.append(f);
          const S = [];
          Ia(f, S, t, !0), S.forEach((N) => y.append(N));
        } else
          y.append(f);
      return y;
    }, r);
    return La(l.style, u, t, s), Ia(u, u, t, s), [u];
  } else {
    const c = Tc(e), l = i?.[i.length - 1];
    if (U(l) && Pn(c, l))
      return r && l.append(r), [];
    a();
    const d = Cr(c.style, Fe(c, Eo));
    return typeof c.cid == "string" && bt(d, En, () => c.cid), n && bt(d, Hr, () => n), r && d.append(r), La(c.style, d, t, s), Ia(d, d, t, s), [d];
  }
}
function Ia(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && Z_(e.getMarker(), t, r, !1, n);
}
function La(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ct(e, "opening", n) : r?.markerMode === "visible" && (i = Sr("marker", Ee(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function Z_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ct("", "selfClosing") : s = ct(e, "closing", i) : r?.markerMode === "visible" && (s = Sr("marker", n ? nt("") : nt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function eC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Gl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Xr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function tC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Ot(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        bt(t, Hr, () => n);
        continue;
      }
      if (rC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Sg = [
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
function rC(e) {
  return Sg.includes(e);
}
function nC() {
  const [e] = ue();
  return j(() => e.registerCommand(zo, (t) => (iC(t), !1), vn), [e]), null;
}
function iC(e) {
  if (sC(e.target))
    return;
  const t = O();
  w(t) && oC(t);
}
function Li(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Kt(t))
      r++, t = t.getNextSibling(), _(t) && t.getTextContent() === $ && (r++, t = t.getNextSibling());
    else if (Te(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Xt(e, r), !0);
}
function sC(e) {
  if (!up(e))
    return !1;
  const t = ws(e);
  if (!Yk(t))
    return !1;
  const r = t.getParent();
  return r ? Pe(r) ? Li(r) : (Xt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function oC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = X(t.key);
  if (!Pe(r))
    return !1;
  const n = r.getFirstChild();
  return !pr(n) && !zn(n) ? !1 : Li(r);
}
function aC() {
  const [e] = ue();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !cC(r) || !Mg() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ze(
      e.registerCommand(Pr, t, Ue),
      e.registerCommand(Xc, t, Ue),
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
      e.registerCommand(Qc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = ws(r.target);
        return !n || !On(n) ? !1 : (r.preventDefault(), !0);
      }, Ue),
      e.registerCommand(ob, t, Ue),
      e.registerCommand(ab, t, Ue),
      e.registerCommand(cb, t, Ue)
    );
  }, [e]), null;
}
function cC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function On(e) {
  return it(e, (t) => we(t) || Ch(t)) ?? void 0;
}
function Mg() {
  const e = O();
  return w(e) ? On(e.anchor.getNode()) !== void 0 || On(e.focus.getNode()) !== void 0 : !1;
}
function lC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function uC(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), lC(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function dC(e, t, r, n) {
  if (!SC(t) || uC(e, r))
    return !1;
  const i = r === "up" ? sv(t) : iv(t);
  return i && n.preventDefault(), i;
}
function fC({ viewOptions: e }) {
  const [t] = ue();
  return pC(t, e), null;
}
function pC(e, t) {
  j(() => {
    if (!e.hasNodes([fr, Ct, Ne]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = O();
      if (!w(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = Ld(o), u = TC(i, Dd(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return dC(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Ld(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Dd(a, n.key) ? l = !c && Kd(i, "next") || !c && gC(i) || _C(i) || !c && s && Fd(i, "next") : hC(a, n.key) && (l = !c && Kd(i, "previous") || !c && mC(i) || CC(i, t) || !c && s && Fd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Pr, r, Ue);
  }, [e, t]);
}
function Ld(e) {
  return e.dir || "ltr";
}
function Dd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function hC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function xc(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = Qt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function gC(e) {
  const t = xc($h(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Xt(t, 0), !0);
}
function mC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = xc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Ud(n);
  }
  if (t.offset === 0) {
    const n = xc(r);
    return n ? Ud(n) : !1;
  }
  return !1;
}
function Ud(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (_(t))
    return t.select(), !0;
  if (L(t)) {
    const i = t.getLastDescendant();
    return _(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Po = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function yC(e) {
  if (Po)
    for (const { segment: r } of Po.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function bC(e) {
  if (Po) {
    let n = 0;
    for (const { index: i } of Po.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Eg(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function Ag(e) {
  return !!e && P(e) && On(e) !== void 0;
}
function xi(e) {
  return _(e) && !e.isToken() && !Ag(e) && e.getTextContentSize() > 0;
}
function Pg(e) {
  return Fo(e) ? !0 : z(e) ? e.getIsCollapsed() === !0 : _(e) ? (e.isToken() || Ag(e)) && e.getTextContentSize() > 0 : dp(e) ? !$e(e) : !1;
}
function vi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function ra(e, t, r) {
  for (let n = e; n; ) {
    if (Pg(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? vi(n, t, r);
      continue;
    }
    if (xi(n))
      return n;
    n = vi(n, t, r);
  }
}
function Jl(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? vi(e, n, i) : r === "text" && Pg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : vi(e, n, i);
}
function Da(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Jl(e.node, e.offset, e.kind, "previous", t), n = ra(r, "previous", t);
  if (!n)
    return e;
  if (xi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function kC(e, t) {
  const r = e.getNode(), n = Eg(r);
  if (!n)
    return;
  if (e.type === "text" && xi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Da({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Jl(r, e.offset, e.type, t, n), s = ra(i, t, n);
  if (!s)
    return;
  if (xi(s)) {
    const c = s.getTextContent(), l = t === "next" ? yC(c) : bC(c);
    return Da({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Da({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Ng(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = kC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Fd(e, t) {
  return Ng(e, t, "collapse");
}
function TC(e, t) {
  return Ng(e, t, "extend");
}
function xC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && xi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Jl(n, e.offset, e.type, t, r);
  return ra(i, t, r) === void 0;
}
function vC(e, t) {
  const r = Ce();
  for (let n = e; n; ) {
    const i = vi(n, t, r), s = i && ra(i, t, r);
    if (!s)
      return;
    if (n = On(s), !n)
      return s;
  }
}
function Kd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (On(n))
    return !1;
  const i = Eg(n);
  if (!i || !xC(r, t, i))
    return !1;
  const s = vi(i, t, Ce()), o = s && On(s);
  if (!o)
    return !1;
  const a = vC(o, t);
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
function zd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function _C(e) {
  const t = e.anchor.getNode(), r = $h(e);
  if (z(r) && !P(r.getFirstChild())) {
    if (Pe(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Pe(i) && Li(i)) && i.selectStart(), !0;
      }
    } else return _t(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Pe(t) && z(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : zd(r), !0;
  }
  const n = r?.getParent();
  if (_t(r) && z(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? zd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function CC(e, t) {
  const r = ox(e);
  if (Ds(r) && !r.getPreviousSibling())
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
  if (hr(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function SC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Te(t) && dp(t);
}
function MC() {
  const [e] = ue();
  return EC(e), null;
}
function EC(e) {
  j(() => {
    if (!e.hasNodes([xe]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ze(
      e.registerNodeTransform(xe, NC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(xe, Bk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(xe, oh),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(xe, (t) => ks(Mr("char"), t)),
      e.registerNodeTransform(ze, wC)
    );
  }, [e]);
}
function Ua(e) {
  return e.getChildren().some(P);
}
function AC(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Ls(n)) {
    const i = n.getTextContent();
    i.startsWith($) && (i === $ ? n.remove() : n.setTextContent(i.slice($.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function PC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function NC(e) {
  if (!U(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Ua(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = te(e, En), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && Pn({ style: t, cid: r }, i) && wt(n, i.getUnknownAttributes()))
    if (Ua(i)) {
      if (AC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && Pn({ style: t, cid: r }, s) && wt(n, s.getUnknownAttributes()) && (Ua(s) ? PC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function wC(e) {
  const t = e.getParent();
  if (!U(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Dt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function wg(e) {
  return e.replaceAll("	", " ");
}
const Yl = (e) => {
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
      n.setData(o, wg(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Tr, s);
  });
}, Xl = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", wg(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Tr, i);
  });
};
function OC() {
  const [e] = ue();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(fo ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(jo, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(_n, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Xl(e) : Yl(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function qC({ logger: e }) {
  const [t] = ue();
  return j(() => Ze(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Pr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), di),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Tr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, di),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Qc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, di)
  ), [t, e]), null;
}
function RC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), v("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: v("span", { className: "text", children: i.title }) });
}
function $C({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return v("div", { className: "typeahead-popover", children: v("ul", { children: e.map((i, s) => v(RC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let IC = 0;
class Yi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${IC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function LC({ options: e } = {}) {
  const [t] = ue(), [r, n] = he(() => !t.isEditable()), [i, s] = he({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = he(void 0), c = De(() => {
    const u = [
      new Yi("Cut", {
        onSelect: () => {
          t.dispatchCommand(_n, null);
        },
        isDisabled: r
      }),
      new Yi("Copy", {
        onSelect: () => {
          t.dispatchCommand(jo, null);
        }
      }),
      new Yi("Paste", {
        onSelect: () => {
          Yl(t);
        },
        isDisabled: r
      }),
      new Yi("Paste as Plain Text", {
        onSelect: () => {
          Xl(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Yi(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = fe(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  j(() => {
    const u = (f) => {
      const p = f.target;
      t.getRootElement() === p || xh(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
  const d = Q(null);
  return As(() => {
    const u = d.current;
    if (!u)
      return;
    const { width: f, height: p } = u.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), y = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    u.style.left = `${h}px`, u.style.top = `${y}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Mb.createPortal(v("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: v($C, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function DC() {
  const [e] = ue();
  return j(() => e.registerCommand(Pr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(fo ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, xr), [e]), null;
}
function UC({ isEditable: e }) {
  const [t] = ue();
  return As(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function jd(e) {
  return !!e && _l(X(e));
}
function Og(e) {
  const [t] = ue(), r = Q(void 0), n = fe((i) => {
    let s = !1;
    const o = O(), a = w(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = jd(c);
    c && !l && (r.current = void 0);
    let d;
    if (i) {
      const u = i.getParentOrThrow(), f = i.getIndexWithinParent() + 1, p = Yo(u, f);
      if (p)
        r.current = p.getKey(), d = p.getKey();
      else {
        const h = rx();
        i.insertAfter(h), r.current = h.getKey(), d = h.getKey(), s = !0;
      }
      Xt(u, f);
    }
    if (c && l && c !== a && c !== d) {
      const u = X(c);
      _(u) && (u.remove(), s = !0), r.current === c && (r.current = void 0);
    }
    return s;
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = O(), l = w(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && n(a) && Cn(ps);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Us(c) || !c.includes(bi))
        return;
      const l = O(), d = w(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (nx(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(bi).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = Ze(t.registerCommand(lr, () => (i(), !1), vn), t.registerCommand(Zc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = jd(a);
      }), c && t.update(() => {
        const l = X(a);
        _(l) && (l.remove(), Cn(ps));
      }), r.current = void 0, !1;
    }, vn), t.registerNodeTransform(ze, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function FC() {
  const e = O();
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!Te(i) || Yo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || Te(s))
    return i;
}
function KC() {
  return Og(FC), null;
}
function zC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ue();
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
          f || Cn(lb), o.setEditorState(l), o.dispatchCommand(ub, void 0);
        }, { tag: nl });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function jC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ue();
  return BC(t, n), VC(i, e, r, n), null;
}
function BC(e, t) {
  const r = Q(void 0), n = Q(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = Bv), r.current !== o && (r.current = o, Bd("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = Vv), n.current !== o && (n.current = o, Bd("cross-ref-callers", o, t));
  }, [t, s]);
}
function VC(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([xe, Ne, Jt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => QC(s));
    return Ze(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ne, (s) => WC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(xe, HC),
      e.registerNodeTransform(ze, GC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Jt, JC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Jt, (s, { prevEditorState: o }) => YC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(lr, () => XC(e, t, r, n), Mt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function WC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => hr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    _(i) && !P(i) && i.getTextContent() !== Et(e.getCaller()) && e.insertBefore(i);
  }
}
function HC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => hr(o));
  if (!U(e) || !z(t) || !n)
    return;
  const i = Cl(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  _(s) ? s.getTextContent() !== $ && s.setTextContent($) : e.insertAfter(ke($));
}
function GC(e) {
  const t = Qt(e), r = t?.getChildren(), n = r?.find((o) => hr(o));
  if (!_(e) || !z(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && z(i) && e.getTextContent() !== $ && (e.setTextContent($), e.selectEnd()), U(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Dt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Cl(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function JC(e) {
  if (!hr(e))
    return;
  const t = e.getNextSibling();
  !_(t) || P(t) ? e.insertAfter(ke($)) : t.getTextContent() !== $ && t.setTextContent($);
}
function YC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = X(r), a = o?.getParent();
      return hr(o) && z(a) && a.getCaller() === ho;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function XC(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = O();
  if (!w(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = it(o, (c) => z(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = X(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Xi(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (z(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Xi(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (z(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Xi(e, c, n);
    } else if (!a) {
      const c = it(o, (l) => z(l));
      if (c && c.getIsCollapsed() && Pe(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Xi(e, l, n);
      }
    }
  }
  if (Pe(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (zn(c) && z(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Xi(e, l, n);
    }
  }
  return !1;
}
function Xi(e, t, r) {
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
function QC(e) {
  const t = O();
  if (!w(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (z(i) && _(s)) {
    e.preventDefault();
    const o = Ko();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), xn(o);
  }
}
function Bd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (ZC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function ZC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function na(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Gr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => _(n) && n.getMode() === "token") ? t : [];
}
function eS(e) {
  const t = e.getParent();
  if (z(t))
    return na(t).some((r) => r.is(e)) ? t : void 0;
}
function No(e) {
  const t = na(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function tS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function rS(e) {
  const t = db();
  if (!w(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= No(e);
  const i = tS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= No(e);
}
function vc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = eS(t);
  if (r)
    return nS(r, t, e.offset) ? void 0 : r;
}
function nS(e, t, r) {
  const n = na(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function iS(e) {
  const t = na(e), r = t[t.length - 1];
  _(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Xt(e, No(e));
}
function sS(e = !1) {
  const t = O();
  if (!w(t))
    return !1;
  if (!t.isCollapsed())
    return oS(t.anchor, t.focus);
  const r = vc(t.anchor);
  if (!r)
    return !1;
  if (!e && rS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Xt(n, r.getIndexWithinParent());
  } else
    iS(r);
  return !0;
}
function oS(e, t) {
  const r = vc(e), n = vc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Vd(e, r, i), n && Vd(t, n, !i), !0;
}
function Vd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), No(t), "element");
}
function aS() {
  const [e] = ue(), t = Q(!1);
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
  }, [e]), j(() => e.registerCommand(lr, () => (sS(t.current) && e.dispatchCommand(il, void 0), !1), vn), [e]), null;
}
function cS({ onChange: e, viewOptions: t }) {
  const [r] = ue();
  return j(() => r.registerCommand(lr, () => {
    const n = Kl(t);
    return e?.(n), !1;
  }, Mt), [r, e, t]), null;
}
function lS() {
  const [e] = ue();
  return uS(e), null;
}
function uS(e) {
  j(() => {
    if (!e.hasNodes([et]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(et, (t) => dS(t, e));
  }, [e]);
}
function dS(e, t) {
  eg(t, e.getKey()) && Zh(e.getFirstChild()), !(!oe(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = X(e.getKey());
    return oe(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function qg({ onStateChange: e }) {
  const [t] = ue(), [r, n] = he(t), i = Q(!1), s = Q(!1), o = Q(void 0), a = Q(void 0), c = fe(() => {
    const l = O();
    let d;
    if (w(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : it(u, (T) => {
        const S = T.getParent();
        return S !== null && fb(S);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Ts(p) && (p = it(u, oe) ?? p);
      const h = p.getKey(), y = r.getElementByKey(h), m = cx(u, f);
      if (m && nv(m) && (d = m.getMarker()), y !== null && (oe(p) || ht(p) || Ds(p))) {
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
  return j(() => t.registerCommand(lr, (l, d) => (c(), n(d), !1), xr), [t, c]), j(() => Ze(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(pb, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), xr), r.registerCommand(hb, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), xr)), [c, r, e]), null;
}
function fS(e) {
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
  return e ? Pe(e) ? e : it(e, (r) => Pe(r)) ?? void 0 : void 0;
}
function Rg(e) {
  if (!w(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Qr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Ql(e) {
  return w(e) && e.isCollapsed() && e.anchor.type === "element" || !w(e) && !fp(e) ? !1 : e.getNodes().some((t) => Te(t));
}
function $g(e) {
  if (!w(e) || !e.isCollapsed())
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
function Ig(e) {
  if (!w(e) || !e.isCollapsed())
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
function Wd(e, t) {
  return !!_c(e, t);
}
function _c(e, t) {
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && L(n)) {
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
function wo(e, t) {
  if (!w(e))
    return !1;
  const r = Qr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Fa(e) {
  return Ql(e) || Rg(e);
}
function pS(e, t) {
  if (Ql(e) || Rg(e))
    return !0;
  if (!w(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return $g(e) && wo(e, "backward") || Wd(e, "backward");
    case "deleteForward":
      return Ig(e) && wo(e, "forward") || Wd(e, "forward");
    case "insertText":
      return !1;
  }
}
function hS(e, t) {
  if (!(!w(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = _c(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if ($g(e) && wo(e, "backward")) {
        const n = Qr(e.anchor.getNode());
        if (Pe(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = _c(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Ig(e) && wo(e, "forward")) {
        const i = Qr(e.anchor.getNode())?.getNextSibling();
        if (Pe(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Hd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return fp(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!w(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!w(e) || e.isCollapsed())
    return !1;
  const r = Qr(e.anchor.getNode()), n = Qr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Lg(e) {
  if (_(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function gS(e) {
  const t = e.getPreviousSibling();
  if (!Pe(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Lg(r) : Li(t) || t.selectStart();
}
function Dg(e) {
  return Te(e) || We(e) ? [] : Pe(e) ? e.getChildren().flatMap(Dg) : [e];
}
function mS(e) {
  const t = [];
  for (const r of e) {
    const n = Dg(r);
    n.length !== 0 && (Pe(r) && t.length > 0 && t.push(ke(" ")), t.push(...n));
  }
  return t;
}
function Gd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yS(e) {
  if (Array.isArray(e)) return e;
}
function bS(e, t) {
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
function kS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TS(e, t) {
  return yS(e) || bS(e, t) || xS(e, t) || kS();
}
function xS(e, t) {
  if (e) {
    if (typeof e == "string") return Gd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Gd(e, t) : void 0;
  }
}
const Ug = Object.entries, Jd = Object.setPrototypeOf, vS = Object.isFrozen, _S = Object.getPrototypeOf, CS = Object.getOwnPropertyDescriptor;
let tt = Object.freeze, st = Object.seal, ai = Object.create, Fg = typeof Reflect < "u" && Reflect, Cc = Fg.apply, Sc = Fg.construct;
tt || (tt = function(t) {
  return t;
});
st || (st = function(t) {
  return t;
});
Cc || (Cc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Sc || (Sc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const ii = He(Array.prototype.forEach), SS = He(Array.prototype.lastIndexOf), Yd = He(Array.prototype.pop), si = He(Array.prototype.push), MS = He(Array.prototype.splice), Vr = Array.isArray, is = He(String.prototype.toLowerCase), Ka = He(String.prototype.toString), Xd = He(String.prototype.match), Qi = He(String.prototype.replace), Qd = He(String.prototype.indexOf), ES = He(String.prototype.trim), AS = He(Number.prototype.toString), PS = He(Boolean.prototype.toString), Zd = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), ef = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), Qe = He(Object.prototype.hasOwnProperty), Zi = He(Object.prototype.toString), Xe = He(RegExp.prototype.test), hn = NS(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Cc(e, t, n);
  };
}
function NS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Sc(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : is;
  if (Jd && Jd(e, null), !Vr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (vS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function wS(e) {
  for (let t = 0; t < e.length; t++)
    Qe(e, t) || (e[t] = null);
  return e;
}
function at(e) {
  const t = ai(null);
  for (const n of Ug(e)) {
    var r = TS(n, 2);
    const i = r[0], s = r[1];
    Qe(e, i) && (Vr(s) ? t[i] = wS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = at(s) : t[i] = s);
  }
  return t;
}
function OS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return AS(e);
    case "boolean":
      return PS(e);
    case "bigint":
      return Zd ? Zd(e) : "0";
    case "symbol":
      return ef ? ef(e) : "Symbol()";
    case "undefined":
      return Zi(e);
    case "function":
    case "object": {
      if (e === null)
        return Zi(e);
      const t = e, r = Wt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Zi(n);
      }
      return Zi(e);
    }
    default:
      return Zi(e);
  }
}
function Wt(e, t) {
  for (; e !== null; ) {
    const n = CS(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = _S(e);
  }
  function r() {
    return null;
  }
  return r;
}
function qS(e) {
  try {
    return Xe(e, ""), !0;
  } catch {
    return !1;
  }
}
const tf = tt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), za = tt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ja = tt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), RS = tt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ba = tt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), $S = tt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), rf = tt(["#text"]), nf = tt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Va = tt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), sf = tt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), eo = tt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), IS = st(/{{[\w\W]*|^[\w\W]*}}/g), LS = st(/<%[\w\W]*|^[\w\W]*%>/g), DS = st(/\${[\w\W]*/g), US = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), FS = st(/^aria-[\-\w]+$/), of = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), KS = st(/^(?:\w+script|data):/i), zS = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), jS = st(/^html$/i), BS = st(/^[a-z][.\w]*(-[.\w]+)+$/i), af = st(/<[/\w!]/g), cf = st(/<[/\w]/g), VS = st(/<\/no(script|embed|frames)/i), WS = st(/\/>/i), St = {
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
}, HS = function() {
  return typeof window > "u" ? null : window;
}, GS = function(t, r) {
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
}, lf = function() {
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
  return Qe(t, r) && Vr(t[r]) ? ge(i.base ? at(i.base) : {}, t[r], i.transform) : n;
};
function Kg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : HS();
  const t = (F) => Kg(F);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== St.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = Wt(f, "cloneNode"), h = Wt(f, "remove"), y = Wt(f, "nextSibling"), m = Wt(f, "childNodes"), T = Wt(f, "parentNode"), S = Wt(f, "shadowRoot"), N = Wt(f, "attributes"), R = o && o.prototype ? Wt(o.prototype, "nodeType") : null, E = o && o.prototype ? Wt(o.prototype, "nodeName") : null, C = o && o.prototype ? Wt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let M, q = "", J, H = !1, re = 0;
  const ae = function() {
    if (re > 0)
      throw hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ce = function(g) {
    ae(), re++;
    try {
      return M.createHTML(g);
    } finally {
      re--;
    }
  }, me = function(g) {
    ae(), re++;
    try {
      return M.createScriptURL(g);
    } finally {
      re--;
    }
  }, qe = function() {
    return H || (J = GS(u, i), H = !0), J;
  }, Z = r, K = Z.implementation, ne = Z.createNodeIterator, Re = Z.createDocumentFragment, ot = Z.getElementsByTagName, zt = n.importNode;
  let pe = lf();
  t.isSupported = typeof Ug == "function" && typeof T == "function" && K && K.createHTMLDocument !== void 0;
  const jt = IS, Nt = LS, ha = DS, tr = US, Vn = FS, Ki = KS, ie = zS, ut = BS;
  let Ws = of, ve = null;
  const gr = ge({}, [...tf, ...za, ...ja, ...Ba, ...rf]);
  let Y = null;
  const Ye = ge({}, [...nf, ...Va, ...sf, ...eo]);
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
  const rr = Object.seal(ai(null, {
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
  let Wn = !0, Hn = !0, Lr = !1, an = !0, nr = !1, gt = !0, Bt = !1, Vt = !1, Dr = null, Ur = null, zi = !1, mr = !1, Gn = !1, cn = !1, A = !0, D = !1;
  const B = "user-content-";
  let W = !0, de = !1, Be = {}, Ge = null;
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
  let ji = null;
  const Bi = ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let ga = null;
  const _u = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Hs = "http://www.w3.org/1998/Math/MathML", Gs = "http://www.w3.org/2000/svg", ir = "http://www.w3.org/1999/xhtml";
  let Jn = ir, ma = !1, ya = null;
  const wy = ge({}, [Hs, Gs, ir], Ka), Cu = tt(["mi", "mo", "mn", "ms", "mtext"]);
  let ba = ge({}, Cu);
  const Su = tt(["annotation-xml"]);
  let ka = ge({}, Su);
  const Oy = ge({}, ["title", "style", "font", "a", "script"]);
  let Vi = null;
  const qy = ["application/xhtml+xml", "text/html"], Ry = "text/html";
  let Ie = null, Yn = null;
  const $y = r.createElement("form"), Mu = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, Ta = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Yn && Yn === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = at(g), Vi = // eslint-disable-next-line unicorn/prefer-includes
    qy.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Ry : g.PARSER_MEDIA_TYPE, Ie = Vi === "application/xhtml+xml" ? Ka : is, ve = zr(g, "ALLOWED_TAGS", gr, {
      transform: Ie
    }), Y = zr(g, "ALLOWED_ATTR", Ye, {
      transform: Ie
    }), ya = zr(g, "ALLOWED_NAMESPACES", wy, {
      transform: Ka
    }), ga = zr(g, "ADD_URI_SAFE_ATTR", _u, {
      transform: Ie,
      base: _u
    }), ji = zr(g, "ADD_DATA_URI_TAGS", Bi, {
      transform: Ie,
      base: Bi
    }), Ge = zr(g, "FORBID_CONTENTS", yr, {
      transform: Ie
    }), $r = zr(g, "FORBID_TAGS", at({}), {
      transform: Ie
    }), Ir = zr(g, "FORBID_ATTR", at({}), {
      transform: Ie
    }), Be = Qe(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? at(g.USE_PROFILES) : g.USE_PROFILES : !1, Wn = g.ALLOW_ARIA_ATTR !== !1, Hn = g.ALLOW_DATA_ATTR !== !1, Lr = g.ALLOW_UNKNOWN_PROTOCOLS || !1, an = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, nr = g.SAFE_FOR_TEMPLATES || !1, gt = g.SAFE_FOR_XML !== !1, Bt = g.WHOLE_DOCUMENT || !1, mr = g.RETURN_DOM || !1, Gn = g.RETURN_DOM_FRAGMENT || !1, cn = g.RETURN_TRUSTED_TYPE || !1, zi = g.FORCE_BODY || !1, A = g.SANITIZE_DOM !== !1, D = g.SANITIZE_NAMED_PROPS || !1, W = g.KEEP_CONTENT !== !1, de = g.IN_PLACE || !1, Ws = qS(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : of, Jn = typeof g.NAMESPACE == "string" ? g.NAMESPACE : ir, ba = Qe(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? at(g.MATHML_TEXT_INTEGRATION_POINTS) : ge({}, Cu), ka = Qe(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? at(g.HTML_INTEGRATION_POINTS) : ge({}, Su);
    const x = Qe(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? at(g.CUSTOM_ELEMENT_HANDLING) : ai(null);
    if (ye = ai(null), Qe(x, "tagNameCheck") && Mu(x.tagNameCheck) && (ye.tagNameCheck = x.tagNameCheck), Qe(x, "attributeNameCheck") && Mu(x.attributeNameCheck) && (ye.attributeNameCheck = x.attributeNameCheck), Qe(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (ye.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), st(ye), nr && (Hn = !1), Gn && (mr = !0), Be && (ve = ge({}, rf), Y = ai(null), Be.html === !0 && (ge(ve, tf), ge(Y, nf)), Be.svg === !0 && (ge(ve, za), ge(Y, Va), ge(Y, eo)), Be.svgFilters === !0 && (ge(ve, ja), ge(Y, Va), ge(Y, eo)), Be.mathMl === !0 && (ge(ve, Ba), ge(Y, sf), ge(Y, eo))), rr.tagCheck = null, rr.attributeCheck = null, Qe(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? rr.tagCheck = g.ADD_TAGS : Vr(g.ADD_TAGS) && (ve === gr && (ve = at(ve)), ge(ve, g.ADD_TAGS, Ie))), Qe(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? rr.attributeCheck = g.ADD_ATTR : Vr(g.ADD_ATTR) && (Y === Ye && (Y = at(Y)), ge(Y, g.ADD_ATTR, Ie))), Qe(g, "ADD_URI_SAFE_ATTR") && Vr(g.ADD_URI_SAFE_ATTR) && ge(ga, g.ADD_URI_SAFE_ATTR, Ie), Qe(g, "FORBID_CONTENTS") && Vr(g.FORBID_CONTENTS) && (Ge === yr && (Ge = at(Ge)), ge(Ge, g.FORBID_CONTENTS, Ie)), Qe(g, "ADD_FORBID_CONTENTS") && Vr(g.ADD_FORBID_CONTENTS) && (Ge === yr && (Ge = at(Ge)), ge(Ge, g.ADD_FORBID_CONTENTS, Ie)), W && (ve["#text"] = !0), Bt && ge(ve, ["html", "head", "body"]), ve.table && (ge(ve, ["tbody"]), delete $r.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = M;
      M = g.TRUSTED_TYPES_POLICY;
      try {
        q = ce("");
      } catch (V) {
        throw M = I, V;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (M = void 0, q = "") : (M === void 0 && (M = qe()), M && typeof q == "string" && (q = ce("")));
    tt && tt(g), Yn = g;
  }, Eu = ge({}, [...za, ...ja, ...RS]), Au = ge({}, [...Ba, ...$S]), Iy = function(g, x, I) {
    return x.namespaceURI === ir ? g === "svg" : x.namespaceURI === Hs ? g === "svg" && (I === "annotation-xml" || ba[I]) : !!Eu[g];
  }, Ly = function(g, x, I) {
    return x.namespaceURI === ir ? g === "math" : x.namespaceURI === Gs ? g === "math" && ka[I] : !!Au[g];
  }, Dy = function(g, x, I) {
    return x.namespaceURI === Gs && !ka[I] || x.namespaceURI === Hs && !ba[I] ? !1 : !Au[g] && (Oy[g] || !Eu[g]);
  }, Uy = function(g) {
    let x = T(g);
    (!x || !x.tagName) && (x = {
      namespaceURI: Jn,
      tagName: "template"
    });
    const I = is(g.tagName), V = is(x.tagName);
    return ya[g.namespaceURI] ? g.namespaceURI === Gs ? Iy(I, x, V) : g.namespaceURI === Hs ? Ly(I, x, V) : g.namespaceURI === ir ? Dy(I, x, V) : !!(Vi === "application/xhtml+xml" && ya[g.namespaceURI]) : !1;
  }, Fr = function(g) {
    si(t.removed, {
      element: g
    });
    try {
      T(g).removeChild(g);
    } catch {
      if (h(g), !T(g))
        throw hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Js = function(g) {
    Wi(g);
    const x = m(g);
    if (x) {
      const V = [];
      ii(x, (G) => {
        si(V, G);
      }), ii(V, (G) => {
        try {
          h(G);
        } catch {
        }
      });
    }
    const I = N(g);
    if (I)
      for (let V = I.length - 1; V >= 0; --V) {
        const G = I[V], se = G && G.name;
        if (typeof se == "string")
          try {
            g.removeAttribute(se);
          } catch {
          }
      }
  }, ln = function(g, x) {
    try {
      si(t.removed, {
        attribute: x.getAttributeNode(g),
        from: x
      });
    } catch {
      si(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(g), g === "is")
      if (mr || Gn)
        try {
          Fr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(g, "");
        } catch {
        }
  }, Fy = function(g) {
    const x = N(g);
    if (x)
      for (let I = x.length - 1; I >= 0; --I) {
        const V = x[I], G = V && V.name;
        if (!(typeof G != "string" || Y[Ie(G)]))
          try {
            g.removeAttribute(G);
          } catch {
          }
      }
  }, Wi = function(g) {
    const x = [g];
    for (; x.length > 0; ) {
      const I = x.pop();
      (R ? R(I) : I.nodeType) === St.element && Fy(I);
      const G = m(I);
      if (G)
        for (let se = G.length - 1; se >= 0; --se)
          x.push(G[se]);
    }
  }, Ky = function(g) {
    if (!gt)
      return;
    const x = [g];
    for (; x.length > 0; ) {
      const I = x.pop(), V = R ? R(I) : I.nodeType;
      if (V === St.processingInstruction || V === St.comment && Xe(cf, I.data)) {
        try {
          h(I);
        } catch {
        }
        continue;
      }
      if (V === St.element) {
        const se = I, Se = Ie(E ? E(I) : I.nodeName);
        try {
          se.hasAttribute && se.hasAttribute("patchsrc") && se.removeAttribute("patchsrc"), se.hasAttribute && se.hasAttribute("for") && Se !== "label" && Se !== "output" && se.removeAttribute("for");
        } catch {
        }
      }
      const G = m(I);
      if (G)
        for (let se = G.length - 1; se >= 0; --se)
          x.push(G[se]);
    }
  }, Pu = function(g) {
    let x = null, I = null;
    if (zi)
      g = "<remove></remove>" + g;
    else {
      const se = Xd(g, /^[\r\n\t ]+/);
      I = se && se[0];
    }
    Vi === "application/xhtml+xml" && Jn === ir && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const V = M ? ce(g) : g;
    if (Jn === ir)
      try {
        x = new d().parseFromString(V, Vi);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = K.createDocument(Jn, "template", null);
      try {
        x.documentElement.innerHTML = ma ? q : V;
      } catch {
      }
    }
    const G = x.body || x.documentElement;
    return g && I && G.insertBefore(r.createTextNode(I), G.childNodes[0] || null), Jn === ir ? ot.call(x, Bt ? "html" : "body")[0] : Bt ? x.documentElement : G;
  }, Nu = function(g) {
    const x = C ? C(g) : g.ownerDocument;
    return ne.call(
      x || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ys = function(g) {
    return g = Qi(g, jt, " "), g = Qi(g, Nt, " "), g = Qi(g, ha, " "), g;
  }, xa = function(g) {
    var x;
    g.normalize();
    const I = C ? C(g) : g.ownerDocument, V = ne.call(
      I || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let G = V.nextNode();
    for (; G; )
      G.data = Ys(G.data), G = V.nextNode();
    const se = (x = g.querySelectorAll) === null || x === void 0 ? void 0 : x.call(g, "template");
    se && ii(se, (Se) => {
      Xn(Se.content) && xa(Se.content);
    });
  }, Xs = function(g) {
    const x = E ? E(g) : null;
    return typeof x != "string" || Ie(x) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== N(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    g.nodeType !== R(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    g.childNodes !== m(g);
  }, Xn = function(g) {
    if (!R || typeof g != "object" || g === null)
      return !1;
    try {
      return R(g) === St.documentFragment;
    } catch {
      return !1;
    }
  }, Hi = function(g) {
    if (!R || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof R(g) == "number";
    } catch {
      return !1;
    }
  };
  function sr(F, g, x) {
    F.length !== 0 && ii(F, (I) => {
      I.call(t, g, x, Yn);
    });
  }
  const zy = function(g, x) {
    return !!(gt && g.hasChildNodes() && !Hi(g.firstElementChild) && Xe(af, g.textContent) && Xe(af, g.innerHTML) || gt && g.namespaceURI === ir && x === "style" && Hi(g.firstElementChild) || g.nodeType === St.processingInstruction || gt && g.nodeType === St.comment && Xe(cf, g.data));
  }, jy = function(g, x, I) {
    if (!$r[x] && Ru(x) && (ye.tagNameCheck instanceof RegExp && Xe(ye.tagNameCheck, x) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(x)))
      return !1;
    if (W && !Ge[x]) {
      const V = T(g), G = m(g);
      if (G && V) {
        const se = G.length;
        for (let Se = se - 1; Se >= 0; --Se) {
          const Le = g === I ? p(G[Se], !0) : G[Se];
          V.insertBefore(Le, y(g));
        }
      }
    }
    return Fr(g), !0;
  }, wu = function(g, x, I, V) {
    return g.length === 0 ? x : x === I || x === V ? at(x) : x;
  }, Ou = function(g, x) {
    if (sr(pe.beforeSanitizeElements, g, null), g !== x && T(g) === null)
      return de && Wi(g), !0;
    if (Xs(g))
      return Fr(g), !0;
    const I = Ie(E ? E(g) : g.nodeName);
    if (ve = wu(pe.uponSanitizeElement, ve, gr, Dr), sr(pe.uponSanitizeElement, g, {
      tagName: I,
      allowedTags: ve
    }), g !== x && T(g) === null)
      return de && Wi(g), !0;
    if (zy(g, I))
      return Fr(g), !0;
    if ($r[I] || !(rr.tagCheck instanceof Function && rr.tagCheck(I)) && !ve[I]) {
      const G = jy(g, I, x);
      return G === !1 && sr(pe.afterSanitizeElements, g, null), G;
    }
    if ((R ? R(g) : g.nodeType) === St.element && !Uy(g) || (I === "noscript" || I === "noembed" || I === "noframes") && Xe(VS, g.innerHTML))
      return Fr(g), !0;
    if (nr && g.nodeType === St.text) {
      const G = Ys(g.textContent);
      g.textContent !== G && (si(t.removed, {
        element: g.cloneNode()
      }), g.textContent = G);
    }
    return sr(pe.afterSanitizeElements, g, null), !1;
  }, qu = function(g, x, I) {
    if (Ir[x] || gt && x === "patchsrc" || gt && x === "for" && g !== "label" && g !== "output" || A && (x === "id" || x === "name") && (I in r || I in $y))
      return !1;
    const V = Y[x] || rr.attributeCheck instanceof Function && rr.attributeCheck(x, g);
    if (!(Hn && Xe(tr, x))) {
      if (!(Wn && Xe(Vn, x))) {
        if (V) {
          if (!ga[x]) {
            if (!Xe(Ws, Qi(I, ie, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && g !== "script" && Qd(I, "data:") === 0 && ji[g])) {
                if (!(Lr && !Xe(Ki, Qi(I, ie, "")))) {
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
          !(Ru(g) && (ye.tagNameCheck instanceof RegExp && Xe(ye.tagNameCheck, g) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(g)) && (ye.attributeNameCheck instanceof RegExp && Xe(ye.attributeNameCheck, x) || ye.attributeNameCheck instanceof Function && ye.attributeNameCheck(x, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && ye.allowCustomizedBuiltInElements && (ye.tagNameCheck instanceof RegExp && Xe(ye.tagNameCheck, I) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, By = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ru = function(g) {
    return !By[is(g)] && Xe(ut, g);
  }, Vy = function(g, x, I, V) {
    if (M && typeof u == "object" && typeof u.getAttributeType == "function" && !I)
      switch (u.getAttributeType(g, x)) {
        case "TrustedHTML":
          return ce(V);
        case "TrustedScriptURL":
          return me(V);
      }
    return V;
  }, Wy = function(g, x, I, V) {
    try {
      I ? g.setAttributeNS(I, x, V) : g.setAttribute(x, V), Xs(g) ? Fr(g) : Yd(t.removed);
    } catch {
      ln(x, g);
    }
  }, $u = function(g) {
    sr(pe.beforeSanitizeAttributes, g, null);
    const x = g.attributes;
    if (!x || Xs(g))
      return;
    Y = wu(pe.uponSanitizeAttribute, Y, Ye, Ur);
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Y,
      forceKeepAttr: void 0
    };
    let V = x.length;
    const G = Ie(g.nodeName);
    for (; V--; ) {
      const se = x[V], Se = se.name, Le = se.namespaceURI, mt = se.value, yt = Ie(Se), _a = mt;
      let dt = Se === "value" ? _a : ES(_a);
      if (I.attrName = yt, I.attrValue = dt, I.keepAttr = !0, I.forceKeepAttr = void 0, sr(pe.uponSanitizeAttribute, g, I), dt = I.attrValue, D && (yt === "id" || yt === "name") && Qd(dt, B) !== 0 && (ln(Se, g), dt = B + dt), gt && Xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        ln(Se, g);
        continue;
      }
      if (yt === "attributename" && Xd(dt, "href")) {
        ln(Se, g);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          ln(Se, g);
          continue;
        }
        if (!an && Xe(WS, dt)) {
          ln(Se, g);
          continue;
        }
        if (nr && (dt = Ys(dt)), !qu(G, yt, dt)) {
          ln(Se, g);
          continue;
        }
        dt = Vy(G, yt, Le, dt), dt !== _a && Wy(g, Se, Le, dt);
      }
    }
    sr(pe.afterSanitizeAttributes, g, null);
  }, Qs = function(g) {
    let x = null;
    const I = Nu(g);
    for (sr(pe.beforeSanitizeShadowDOM, g, null); x = I.nextNode(); )
      if (sr(pe.uponSanitizeShadowNode, x, null), Ou(x, g), $u(x), Xn(x.content) && Qs(x.content), (R ? R(x) : x.nodeType) === St.element) {
        const G = S(x);
        Xn(G) && (va(G), Qs(G));
      }
    sr(pe.afterSanitizeShadowDOM, g, null);
  }, va = function(g) {
    const x = [{
      node: g,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const I = x.pop();
      if (I.shadow) {
        Qs(I.shadow);
        continue;
      }
      const V = I.node, se = (R ? R(V) : V.nodeType) === St.element, Se = m(V);
      if (Se)
        for (let Le = Se.length - 1; Le >= 0; --Le)
          x.push({
            node: Se[Le],
            shadow: null
          });
      if (se) {
        const Le = E ? E(V) : null;
        if (typeof Le == "string" && Ie(Le) === "template") {
          const mt = V.content;
          Xn(mt) && x.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (se) {
        const Le = S(V);
        Xn(Le) && x.push({
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
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, I = null, V = null, G = null;
    if (ma = !F, ma && (F = "<!-->"), typeof F != "string" && !Hi(F) && (F = OS(F), typeof F != "string"))
      throw hn("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    Vt ? (ve = Dr, Y = Ur) : Ta(g), (pe.uponSanitizeElement.length > 0 || pe.uponSanitizeAttribute.length > 0) && (ve = at(ve)), pe.uponSanitizeAttribute.length > 0 && (Y = at(Y)), t.removed = [];
    const se = de && typeof F != "string" && Hi(F);
    if (se) {
      Ky(F);
      const mt = E ? E(F) : F.nodeName;
      if (typeof mt == "string") {
        const yt = Ie(mt);
        if (!ve[yt] || $r[yt])
          throw Js(F), hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Xs(F))
        throw Js(F), hn("root node is clobbered and cannot be sanitized in-place");
      try {
        va(F);
      } catch (yt) {
        throw Js(F), yt;
      }
    } else if (Hi(F))
      x = Pu("<!---->"), I = x.ownerDocument.importNode(F, !0), I.nodeType === St.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? x = I : x.appendChild(I), va(I);
    else {
      if (!mr && !nr && !Bt && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return M && cn ? ce(F) : F;
      if (x = Pu(F), !x)
        return mr ? null : cn ? q : "";
    }
    x && zi && Fr(x.firstChild);
    const Se = se ? F : x;
    try {
      const mt = Nu(Se);
      for (; V = mt.nextNode(); )
        Ou(V, Se), $u(V), Xn(V.content) && Qs(V.content);
    } catch (mt) {
      throw se && (Js(F), ii(t.removed, (yt) => {
        yt.element && Wi(yt.element);
      })), mt;
    }
    if (se)
      return ii(t.removed, (mt) => {
        mt.element && Wi(mt.element);
      }), nr && xa(F), F;
    if (mr) {
      if (nr && xa(x), Gn)
        for (G = Re.call(x.ownerDocument); x.firstChild; )
          G.appendChild(x.firstChild);
      else
        G = x;
      return (Y.shadowroot || Y.shadowrootmode) && (G = zt.call(n, G, !0)), G;
    }
    let Le = Bt ? x.outerHTML : x.innerHTML;
    return Bt && ve["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Xe(jS, x.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Le), nr && (Le = Ys(Le)), M && cn ? ce(Le) : Le;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ta(F), Vt = !0, Dr = ve, Ur = Y;
  }, t.clearConfig = function() {
    Yn = null, Vt = !1, Dr = null, Ur = null, M = J, q = "";
  }, t.isValidAttribute = function(F, g, x) {
    Yn || Ta({});
    const I = Ie(F), V = Ie(g);
    return qu(I, V, x);
  }, t.addHook = function(F, g) {
    typeof g == "function" && Qe(pe, F) && si(pe[F], g);
  }, t.removeHook = function(F, g) {
    if (Qe(pe, F)) {
      if (g !== void 0) {
        const x = SS(pe[F], g);
        return x === -1 ? void 0 : MS(pe[F], x, 1)[0];
      }
      return Yd(pe[F]);
    }
  }, t.removeHooks = function(F) {
    Qe(pe, F) && (pe[F] = []);
  }, t.removeAllHooks = function() {
    pe = lf();
  }, t;
}
var JS = Kg();
function YS({ structureProtectionMode: e = "off" }) {
  const [t] = ue(), r = Q(void 0), [n, i] = he(void 0), s = fe((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = fS(p);
      if (!h)
        return !1;
      const y = O();
      return e === "protected" ? y && pS(y, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const y = O(), m = r.current;
      if (m && y && Hd(y, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const S = X(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (S) {
            const N = S.getParent(), R = S.getPreviousSibling(), E = S.getNextSibling();
            S.remove(), R ? Lg(R) : E && _(E) ? E.select(0, 0) : N?.selectStart();
          }
        } else m.kind === "selection" ? w(y) && y.removeText() : Pe(S) && gS(S);
        return !0;
      }
      if (!y)
        return !1;
      const T = hS(y, p);
      if (T) {
        if (T.kind === "verse") {
          const S = pp();
          S.add(T.node.getKey()), xn(S);
        } else {
          const S = Ko();
          S.anchor.set(T.node.getKey(), 0, "element"), S.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), xn(S);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: p }), h.preventDefault(), !0;
      }
      if (w(y) && !y.isCollapsed() && Ql(y)) {
        const S = y.getNodes().filter(Te).map((E) => E.getKey()), { anchor: N, focus: R } = y;
        return s({
          kind: "selection",
          intent: p,
          key: S[0],
          anchor: { key: N.key, offset: N.offset, type: N.type },
          focus: { key: R.key, offset: R.offset, type: R.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = O();
      return !h || !Fa(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const y = JS.sanitize(p), m = new DOMParser().parseFromString(y, "text/html"), T = mS($b(t, m)), S = O();
      return w(S) && S.insertNodes(T), h.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = O();
      return h && Fa(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = O();
      return h && Fa(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Hd(O(), p) || s(void 0);
      });
    };
    return Ze(t.registerCommand(Pr, o, Ue), t.registerCommand(_n, c, Ue), t.registerCommand(Tr, d, Ue), t.registerCommand(gb, c, Ue), t.registerCommand(Qc, u, Ue), t.registerCommand(Xc, c, Ue), t.registerUpdateListener(f));
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
const $0 = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function XS({ textDirection: e }) {
  const [t] = ue();
  return QS(t, e), null;
}
function QS(e, t) {
  j(() => (uf(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && uf(e, t);
  })), [e, t]);
}
function uf(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function ZS() {
  const [e] = ue();
  return eM(e), null;
}
function eM(e) {
  j(() => {
    if (!e.hasNodes([xe, Ct, Ne, ze, ft]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ze(
      e.registerNodeTransform(ze, tM),
      e.registerNodeTransform(ze, (t) => rM(t, e)),
      e.registerNodeTransform(ft, df),
      e.registerNodeTransform(Ct, df),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ft, (t) => {
        ks(Mr("va"), t), ks(Mr("vp"), t);
      })
    );
  }, [e]);
}
function tM(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || z(r) || U(n) || U(r) || be(n) || be(r) || we(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  _(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
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
  te(e, le) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
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
  Te(r) && wl(e);
}
function rM(e, t) {
  const r = e.getParent();
  !we(r) || !e.isAttached() || eg(t, e.getKey()) && r.insertAfter(e);
}
function df(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; be(t); )
    t = t.getLastChild();
  (U(t) || _(t) && be(t.getParent())) && e.insertBefore(ke(" "));
}
function Zl(e) {
  if (!z(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !_l(n)) ? void 0 : e;
}
function nM(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function iM() {
  const e = O();
  if (!(!w(e) || !e.isCollapsed()))
    return Zl(nM(e.anchor));
}
function sM(e) {
  const t = O();
  let r;
  return w(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = zg(e.target)), r ? Zl(it(r, z)) : void 0;
}
function zg(e) {
  const t = mb(e)?.anchorNode;
  if (up(t))
    return ws(t) ?? void 0;
}
function oM(e) {
  if (O())
    return;
  const t = zg(e);
  return t ? Zl(it(t, z)) : void 0;
}
function aM() {
  const [e] = ue(), t = Og(iM);
  return j(() => {
    const r = (n) => {
      t(n) && Cn(ps);
    };
    return Ze(e.registerCommand(lr, () => {
      const n = oM(e.getRootElement());
      return n && r(n), !1;
    }, vn), e.registerCommand(zo, (n) => {
      const i = sM(n);
      return i && r(i), !1;
    }, vn));
  }, [e, t]), null;
}
function cM({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = R_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return v(q_, { trigger: e, items: i });
}
function lM({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = De(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? v(fM, { trigger: e, harness: i }) : v(cM, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const uM = [" ", "*"];
function dM(e, t) {
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
function fM({ trigger: e, harness: t }) {
  const [r] = ue(), [n, i] = he(void 0), s = Q({ query: "", options: [] }), o = Q(0), a = fe((f, p, h) => {
    const y = p.find((m) => m.kind === "note" && m.marker === f);
    if (y) {
      t.apply(y, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const m = O();
      w(m) && m.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => Ze(r.registerCommand(Pr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const y = s.current.query;
        return y ? (a(y, n.items, !1), yb(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const m = O();
          w(m) && m.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const h = s.current.query;
      if (n.hasTextSelection) {
        const y = n.items.find((m) => m.marker === h);
        return y && t.apply(y, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
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
  }, Ue), r.registerCommand(hp, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, di)), [r, e, t, n, a]);
  const c = fe(() => i(void 0), []), l = fe((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = fe((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), u = De(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    dM(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && v(gg, { isOpen: !0, children: ({ placement: f }) => v(
    bg,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? uM : void 0 },
    n.session
  ) });
}
function jg(e) {
  return e.replaceAll($, "~").replace(/ {2,}/g, (r) => $.repeat(r.length));
}
function pM(e) {
  return e.replaceAll($, " ").replaceAll("~", $);
}
let Oo;
function hM(e) {
  e && (Oo = e);
}
function Bg(e) {
  return er(e);
}
function gM(e, t) {
  return e.isEmpty() ? ap : Vg(e.toJSON(), t);
}
function Vg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Go(r[0]) && (!r[0].children || r[0].children.length === 0))
    return ap;
  if (r.some(Ux)) {
    Oo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Wg(r), i = Ht(n, t);
  return i ? { type: _r, version: vr, content: i } : void 0;
}
function mM(e, t) {
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
function yM(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Oe({
    type: Pt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function bM(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Ih(r, a, c), Oe({
    type: Pt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function kM(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Ih(t, o, a), Oe({
    type: ft.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function TM(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Bg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith($) && (t[0] = a.slice(1));
  }
  return Oe({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function xM(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Oe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function vM(e, t) {
  const { unknownAttributes: r } = e;
  return Oe({ type: vh, ...r, content: t });
}
function _M(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Oe({ type: Sh, marker: r, ...n, content: t });
}
function CM(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Oe({
    type: Eh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function SM(e, t) {
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
    ...Hp({ sid: n, eid: i, ...s }, o)
  });
}
function MM(e) {
  return e.text;
}
function EM(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Oe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function AM(e) {
  const { marker: t } = e;
  return {
    type: xo,
    marker: t === "" ? void 0 : t
  };
}
function ff(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function PM(e, t, r, n, i) {
  const s = Yt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = ci({
      type: s,
      marker: pi,
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
      marker: pi
    });
    i.push(l);
  }
  (!n || !Wo(n)) && t.forEach((l) => {
    const d = ci({
      type: s,
      marker: pi,
      eid: l
    });
    i.push(d);
  });
}
function NM(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && Wo(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return $s(i) && i.markerSyntax === "opening";
}
function wM(e) {
  let t = e;
  for (; Wo(t); ) t = t.children[0];
  return t;
}
function OM(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!$s(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = wM(e[r]);
  if (Nn(n) && n.text === Et(t))
    return n;
}
function Ht(e, t, r, n = !1, i) {
  const s = [];
  let o, a = [];
  return e.forEach((c, l) => {
    const d = c, u = c, f = c, p = c, h = c, y = c, m = c, T = c;
    switch (c.type) {
      case Ut.getType():
        s.push(
          mM(
            d,
            Ht(d.children, t)
          )
        );
        break;
      case fr.getType():
        s.push(yM(c));
        break;
      case Pt.getType():
        s.push(
          bM(
            u,
            Ht(u.children, t)
          )
        );
        break;
      case Ct.getType():
      case ft.getType():
        s.push(kM(c));
        break;
      case xe.getType():
        s.push(
          TM(
            f,
            Ht(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case et.getType():
        s.push(
          xM(
            p,
            Ht(p.children, t)
          )
        );
        break;
      case Fn.getType():
        s.push(
          vM(
            c,
            Ht(c.children, t)
          )
        );
        break;
      case Oi.getType():
        s.push(
          _M(
            c,
            Ht(c.children, t)
          )
        );
        break;
      case qi.getType():
        s.push(
          CM(
            c,
            Ht(c.children, t)
          )
        );
        break;
      case Ne.getType():
        s.push(
          SM(
            h,
            Ht(
              h.children,
              t,
              OM(h.children, h.caller)
            )
          )
        );
        break;
      case wr.getType():
      case Or.getType():
      case Jt.getType():
      case gp.getType():
      case ur.getType():
        break;
      case Je.getType():
        if (o = Ht(
          m.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const S = m.typedIDs[Wr];
          if (S)
            PM(o, S, a, e[l + 1], s), a = S;
          else {
            const N = o.shift();
            N && (typeof N == "string" ? ff(s, N) : s.push(N)), o.length > 0 && s.push(...o);
          }
        }
        break;
      case Yt.getType():
        s.push(ci(c));
        break;
      case ze.getType():
        if (y.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Us(y.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        y.text !== $ && !y.text.startsWith(rl) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        y[Ns]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let S = MM(y);
          Bg(t) && (NM(e, l, i, n) && S.startsWith($) && (S = S.slice(1)), S = pM(ex(S))), ff(s, S);
        }
        break;
      case Un.getType():
        s.push(
          EM(
            T,
            Ht(T.children, t)
          )
        );
        break;
      case Rr.getType():
        s.push(AM(c));
        break;
      case Ri.getType():
        Oo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Oo?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function Wg(e) {
  const t = e.findIndex((r) => Go(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Wg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const to = {
  initialize: hM,
  deserializeEditorState: gM
}, qM = /^sd\d*$/, RM = /* @__PURE__ */ new Set([
  ...Object.entries(rc).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !qM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function $M(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (bh(i) || Oh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!ax(i)) {
      t && qo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Tl(i) && RM.has(i.marker) && !qo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Hg(i.children, t).forEach((s) => {
      const o = IM(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = LM(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Hg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Gg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Wo(i)) {
      const s = Hg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(pf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [pf(i, c.nodes)] });
      });
      return;
    }
    t && qo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function pf(e, t) {
  return { ...e, children: t };
}
function Gg(e) {
  return Xh(e) && e.number !== "";
}
function qo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Gg(r) || qo(r)) : !1;
}
function IM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function LM(e) {
  return {
    type: Co,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Gh
  };
}
const hf = Yg([]), DM = {
  type: gp.getType(),
  version: 1
};
let eu = [], ee, qn, Jg, xt;
function UM(e, t) {
  eu = [], zM(e), jM(t);
}
function FM(e = 0) {
}
function KM(e, t) {
  ee = t ?? ta();
  let r;
  return e ? (e.type !== _r && xt?.warn(`This USJ type '${e.type}' didn't match the expected type '${_r}'.`), e.version !== vr && xt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${vr}'.`
  ), e.content.length > 0 ? (r = Pc(jr(e.content)), vs(ee) && (r = $M(r, xt))) : r = [hf]) : r = [hf], Jg?.(eu), {
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
function zM(e) {
  e && (qn = e), e?.addMissingComments && (Jg = e.addMissingComments);
}
function jM(e) {
  e && (xt = e);
}
function tu() {
  return er(ee);
}
function BM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function VM(e) {
  let { marker: t } = e;
  t !== ms && xt?.warn(`Unexpected book marker '${t}'!`), t = t ?? ms;
  const { code: r } = e;
  (!r || !Ut.isValidBookCode(r)) && xt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ee?.markerMode === "editable" || ee?.markerMode === "visible" ? n.push(
    kt("marker", Ee(t) + " " + r + $)
  ) : ee?.hasGutterParaMarkers && n.push(kt("marker", Ee(t) + $, !0));
  const i = BM(e.content);
  i && n.push(lt(tu() ? jg(i) : i));
  const s = Fe(e, NT);
  return Oe({
    type: Ut.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: mh
  });
}
function WM(e) {
  let { marker: t } = e;
  t !== ko && xt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? ko;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Fe(e, zk);
  let a;
  ee?.markerMode === "visible" && (a = !0);
  const c = [
    lt(It(t, r) ?? "")
  ];
  return ee?.markerMode === "editable" && lE(i, s, c), ee?.markerMode === "editable" ? Oe({
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
    version: rh
  }) : Oe({
    type: fr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: kh
  });
}
function HM(e) {
  let { marker: t } = e;
  t !== bo && xt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? bo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (Jv(ee) ?? Ct).getType(), c = ee?.markerMode === "editable" ? Bp : Yh;
  let l, d;
  ee?.markerMode === "editable" ? l = It(t, r) : ee?.markerMode === "visible" && (d = !0);
  const u = Fe(e, Lk);
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
function GM(e, t = [], r = !1) {
  let { marker: n } = e;
  xe.isValidMarker(n, qn?.extraValidMarkers) || xt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ee?.markerMode === "editable") {
    const [a] = t;
    Nn(a) ? a.text = $ + a.text : a && t.unshift(lt($));
  }
  t.length === 0 && t.push(lt(Dt)), Mc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Fe(e, qk);
  return s || sE(n, o, i), s || Ec(e.marker ?? "", i, !1, r), Oe({
    type: xe.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: jp
  });
}
function Yg(e) {
  return {
    type: Jr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: ih
  };
}
function JM(e, t = []) {
  let { marker: r } = e;
  et.isValidMarker(r, qn?.extraValidMarkers) || xt?.warn(`Unexpected para marker '${r}'!`), r = r ?? ar;
  const n = [];
  if ($i(ee) && (ee?.markerMode === "editable" ? n.push(
    pt(r),
    lt($, dr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && n.push(
    kt(
      "marker",
      Ee(r) + $,
      ee?.hasGutterParaMarkers
    )
  )), n.push(...t), tu()) {
    const s = n.find(
      (o) => !$s(o) && !(Nn(o) && o.text === $)
    );
    Nn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => $.repeat(o.length)));
  }
  const i = Fe(e, jT);
  return Oe({
    type: et.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Ph
  });
}
function ru() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function YM(e, t = []) {
  const r = Fe(e, RT);
  return Oe({
    ...ru(),
    type: Fn.getType(),
    unknownAttributes: r,
    children: t,
    version: _h
  });
}
function XM(e, t = []) {
  const r = Fe(e, LT), n = e.marker ?? uc, i = [];
  return ee?.markerMode === "editable" ? i.push(
    pt(n),
    lt($, dr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && i.push(
    kt(
      "marker",
      Ee(n) + $,
      ee?.hasGutterParaMarkers
    )
  ), i.push(...t), Oe({
    ...ru(),
    type: Oi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Mh
  });
}
function QM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? dc;
  ee?.markerMode === "editable" ? s.push(
    pt(o),
    lt($, dr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && s.push(
    kt(
      "marker",
      Ee(o) + $,
      ee?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Fe(
    e,
    UT
  );
  return Oe({
    ...ru(),
    type: qi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: Ah
  });
}
function ZM(e, t) {
  const r = px(t);
  let n = () => {
  };
  return qn?.noteCallerOnClick && (n = qn.noteCallerOnClick), Oe({
    type: Jt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: sg
  });
}
function eE(e, t) {
  let { marker: r } = e;
  Ne.isValidMarker(r, qn?.extraValidMarkers) || xt?.warn(`Unexpected note marker '${r}'!`), r = r ?? ol;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Vl(ee?.noteMode), a = Fe(e, ek), c = ee?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  ee?.markerMode === "editable" ? (l = pt(r, "opening", !1, c), s || (d = pt(r, "closing"))) : ee?.markerMode === "visible" && (l = kt("marker", Ee(r) + " "), s || (d = kt("marker", nt(r))));
  const u = [];
  let f;
  if (l && u.push(l), ee?.markerMode === "editable" && !o)
    f = lt(Et(i), void 0, c), u.push(f), cE(n, u), u.push(...t);
  else {
    const p = lt($, dr, "token");
    f = ZM(i, t), u.push(f, p, ...t.flatMap(tE(p)));
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
    version: qp
  });
}
function tE(e) {
  return (t) => lh(t) ? [t] : [t, e];
}
function rE(e) {
  let { marker: t } = e;
  (!t || !Yt.isValidMarker(t, qn?.extraValidMarkers)) && xt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Fe(e, sl), s = Gp(e);
  return Oe({
    type: Yt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Np
  });
}
function gf(e, t = []) {
  return {
    type: Je.getType(),
    typedIDs: { [Wr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function nE(e, t) {
  const { marker: r } = e, n = e.type, i = Fe(e, Qk), s = [];
  if (ee?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = ml(
      n,
      r,
      i
    );
    o && s.push(kt("marker", o)), a && s.push(kt("attribute", a)), s.push(...t), c && s.push(kt("attribute", c)), l && s.push(kt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Nn(o) && (o.mode = "token");
  }), Oe({
    type: Un.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: uh
  });
}
function iE(e) {
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
    version: hh
  };
}
function pt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: ur.getType(),
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
  return t !== void 0 && (n[Ns] = { textType: t }), n;
}
function kt(e, t, r = !1) {
  const n = {
    type: Or.getType(),
    text: t,
    textType: e,
    version: ch
  };
  return r && (n[Ns] = { [hl.key]: !0 }), n;
}
function _s(e, t) {
  return {
    type: wr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Up
  };
}
function Mc(e, t, r = !1) {
  ee?.markerMode === "editable" ? t.push(pt(e, "opening", r)) : ee?.markerMode === "visible" && t.push(kt("marker", Ee(e, r)));
}
function Ec(e, t, r = !1, n = !1) {
  ee?.markerMode === "editable" ? r ? t.push(pt("", "selfClosing")) : t.push(pt(e, "closing", n)) : ee?.markerMode === "visible" && t.push(
    kt(
      "marker",
      r ? nt("") : nt(e, n)
    )
  );
}
function sE(e, t, r) {
  if (ee?.markerMode !== "editable" || !t) return;
  const n = or(t, qs(e));
  n && r.push(lt(n, "attribute"));
}
function mf(e, t) {
  if (e.type !== "ms" || ee?.markerMode !== "editable" && ee?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Fe(e, sl), o = Jp(
    n,
    i,
    s,
    Gp(e)
  ), a = or(o, Rs(r ?? ""));
  if (!a) return;
  const c = $ + a;
  ee?.markerMode === "editable" ? t.push(lt(c, "attribute")) : t.push(kt("attribute", c));
}
function oE(e, t) {
  const r = e.marker ?? "";
  if (ee?.markerMode === "editable") {
    const n = [];
    Mc(r, n), mf(e, n), Ec(r, n, !0), t.push(_s("milestone", n));
  } else
    Mc(r, t), mf(e, t), Ec(r, t, !0);
}
function yf(e, t, r) {
  t !== void 0 && r.push(
    _s(e, [
      pt(e, "opening"),
      lt($ + t, "attribute"),
      pt(e, "closing")
    ])
  );
}
function aE(e, t) {
  ee?.markerMode === "editable" && (yf("va", e.altnumber, t), yf("vp", e.pubnumber, t));
}
function cE(e, t) {
  e !== void 0 && t.push(
    _s("cat", [
      pt("cat", "opening"),
      lt($ + e, "attribute"),
      pt("cat", "closing")
    ])
  );
}
function lE(e, t, r) {
  e !== void 0 && r.push(
    _s("ca", [
      pt("ca", "opening"),
      lt($ + e, "attribute"),
      pt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    _s("cp", [
      pt("cp", "opening"),
      lt($ + t, "attribute")
    ])
  );
}
function bf(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function uE(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function kf(e, t) {
  t.marker === Sn && t.sid !== void 0 && e.push(t.sid), t.marker === pi && t.eid !== void 0 && uE(e, t.eid);
}
function Ac(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [gf(o, [...n])] : o, c = e[i];
  kf(n, c);
  const l = Ac(
    e.slice(i + 1, s),
    bf(t, i + 1),
    c.marker === Sn,
    n
  ), d = gf(l, [...n]), u = e[s];
  kf(n, u);
  const f = Ac(
    e.slice(s + 1),
    bf(t, s + 1),
    u.marker === Sn,
    n
  );
  return [...a, d, ...f];
}
function jr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(lt(tu() ? jg(i) : i));
    else if (!i.type)
      xt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ut.getType():
          n.push(VM(i));
          break;
        case Pt.getType():
          n.push(WM(i));
          break;
        case ft.getType():
          ee?.hasSpacing || n.push(DM), n.push(HM(i)), aE(i, n);
          break;
        case xe.getType():
          n.push(
            GM(i, jr(i.content, !0), t)
          );
          break;
        case et.getType():
          n.push(JM(i, jr(i.content)));
          break;
        case Ne.getType():
          n.push(eE(i, jr(i.content)));
          break;
        case Yt.getType():
          wp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && eu?.push(i.sid)), n.push(rE(i)), oE(i, n);
          break;
        case Rr.getType():
          n.push(iE(i.marker ?? ""));
          break;
        case vh:
          n.push(YM(i, jr(i.content)));
          break;
        case Sh:
          n.push(XM(i, jr(i.content)));
          break;
        case Eh:
          n.push(QM(i, jr(i.content)));
          break;
        default:
          xt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(nE(i, jr(i.content)));
      }
  }), Ac(n, r);
}
function Pc(e) {
  const t = e.findIndex(
    (n) => bh(n) || Oh(n) || Tl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    IT(n)
  );
  if (t >= 0) {
    const n = Pc(e.slice(0, t)), i = e[t], s = Pc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Xh(n)))
    return [Yg(e)];
  return e;
}
const Zr = {
  initialize: UM,
  reset: FM,
  serializeEditorState: KM
};
function Xg(e) {
  if (e && !P(e)) {
    if (_(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = Xg(t);
        if (r) return r;
      }
  }
}
function dE() {
  const e = O();
  if (!w(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((_(t) && !P(t) ? An(t) : void 0) && _(t)) {
      const i = ke(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      yi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Xg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith($) ? $ : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return _(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Qg(e)) {
    if (!An(t)) continue;
    yi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith($) && r.setTextContent(n.slice($.length));
  }
  return !0;
}
function Qg(e) {
  const [t, r] = cp(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!_(a) || P(a) || te(a, le) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function fE() {
  const e = O();
  if (!w(e)) return !1;
  const t = e.focus.getNode();
  return An(t) ? Pe(xl(t)) : !1;
}
function Zg() {
  let e = O();
  if (!w(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !Pl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (U(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = O(), !w(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!_(t) || P(t) || !An(t)) return !1;
  const r = xl(t);
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
  return U(a) ? vl(a) : o.select(0, 0), !0;
}
const em = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${qh(Ce().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = O(), t = Sl(e), r = ql(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = gx(0, o);
        const a = Qx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Fh(c) && Ml(parseInt(n, 10), c);
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
function Nc(e, t) {
  return Ne.isValidMarker(e, t) || !!em[e] || et.isValidMarker(e, t) || xe.isValidMarker(e, t);
}
function pE(e, t) {
  return xe.isNoteContentMarker(e) ? !1 : xe.isValidMarker(e, t);
}
function tm(e, t, r, n, i, s) {
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
function wc(e, t, r, n, i, s, o) {
  if (Ne.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = tm(
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
  const a = kE(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = O();
      w(d) && (Hh(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = md(u, Zr, r), h = Sa(p);
      if (w(d)) {
        const y = d.anchor.getNode(), m = y.getParent(), T = An(y), S = d.anchor.key === d.focus.key;
        if (U(h) && T && S && !Wa(h, o))
          mE(
            d,
            h,
            y,
            r?.markerMode === "editable"
          );
        else if (U(h) && !S && !Wa(h, o) && yE(d))
          bE(d, h, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          TE(
            d,
            () => Sa(p)
          );
        else if (L(h) && !h.isInline()) {
          const N = d.insertParagraph();
          if (N) {
            const R = N.getChildren();
            h.append(...R), N.replace(h), Pe(h) && Li(h) || h.selectStart();
          }
        } else if (U(h) && _(y) && !P(y) && U(y.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Wa(h, o)) {
          const N = y.getParent();
          if (U(N)) {
            const R = d.anchor.offset;
            if (R === 0) y.insertBefore(h);
            else if (R >= y.getTextContentSize()) y.insertAfter(h);
            else {
              const [C] = y.splitText(R);
              C.insertAfter(h);
            }
            h.getChildren().forEach((C) => {
              P(C) && C.setNested(!0);
            });
            const E = h.getChildren().find((C) => _(C) && !P(C));
            E && _(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (_(y) && !P(y) && d.isCollapsed() && (z(m) || U(m) && z(m.getParent()))) {
          const N = U(m) ? m : void 0, R = N ? hE(y, d.anchor.offset) : [];
          let C = (N ?? y).insertAfter(h);
          if (pr(h)) {
            const M = {
              ...r || ta(),
              markerMode: "hidden"
            }, q = md(
              u,
              Zr,
              M
            ), J = Sa(q);
            C = C.insertAfter(J);
          }
          if (R.length > 0 && N) {
            const M = Ro(N).append(...R);
            C.insertAfter(M), N.isEmpty() && N.remove();
          } else _(C.getNextSibling()) || C.insertAfter(ke($));
          L(C) && C.selectEnd();
        } else if (d.insertNodes([h]), NE(h), f) {
          const N = pp();
          N.add(h.getKey()), xn(N);
        } else if (U(h)) {
          const N = h.getChildren().find((R) => _(R) && !P(R));
          N && _(N) ? N.select(
            N.getTextContentSize(),
            N.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const N = h.getNextSibling();
          N ? N.selectStart() : h.selectStart();
        }
      } else
        d?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function hE(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Wa(e, t) {
  return ((t ?? So).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function gE(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(ct(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function mE(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && U(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !_(r)) {
    const o = e.anchor.offset;
    if (_(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else _(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
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
    i.insertBefore(t), _(i) && !i.getTextContent().startsWith($) && i.setTextContent($ + i.getTextContent());
    const o = t.getChildren().find((a) => _(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => _(o) && !P(o));
  _(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function yE(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || U(n)) continue;
    if (!_(n) || n.getType() !== ze.getType() || te(n, le) === "attribute") return !1;
    const i = xl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    An(n) && (r = !0);
  }
  return r;
}
function bE(e, t, r) {
  const n = Qg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!An(a)) return;
    yi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith($) && c.setTextContent(l.slice($.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith($) || i.setTextContent($ + i.getTextContent());
  const s = t.getChildren().find((a) => _(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function kE(e, t) {
  let r = em[e];
  return r || (et.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: et.getType(), marker: e, content: [] }] })
  } : xe.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: xe.getType(), marker: e };
      return (xe.isValidFootnoteMarker(e) || xe.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function TE(e, t) {
  const r = e.getNodes(), [n, i] = _i(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = rm(
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
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((u) => P(u) && u.getMarkerSyntax() === "opening") && gE(s, U(s.getParent()))), vE(c, s, l);
  }), (_(s) || L(s)) && s.selectEnd();
}
function _i(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function nu(e) {
  return be(e) || z(e) || z(e.getParent());
}
function rm(e, t, r, n, i) {
  if (!nu(e)) {
    if (_(e))
      return xE(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function xE(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function vE(e, t, r) {
  if (_(t)) {
    const n = Oc(e, t);
    t.setTextContent(n), e.remove();
  } else if (L(t)) {
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
    Oc(e, t), r && U(t) && t.getChildren().some((s) => P(s)) && _(e) && !P(e) && !e.getTextContent().startsWith($) && e.setTextContent($ + e.getTextContent());
  }
}
function Oc(e, t) {
  let r = e.getTextContent();
  if (_(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    wl(n), _(n) || t.insertBefore(ke(" "));
  }
  return r;
}
function nm(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = Rn(d, t);
    if (!f) return !1;
    const p = _(d) ? d.getTextContentSize() : 0;
    if (Tf(f, r), _(d) && d.isAttached()) {
      const h = d.getTextContentSize(), y = Math.max(p - h, 0), m = Math.max(0, Math.min(u - y, h)), T = O();
      w(T) && T.setTextNodeRange(d, m, d, m);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = _i(e);
  if (!su(n, t, s, o)) return !1;
  const a = iu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = Rn(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = am(u, a);
    f && (Tf(f, r), l = !0);
  }), cm(a, i), l;
}
function Tf(e, t) {
  e.getChildren().forEach((n) => {
    Kt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Dt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    _(n) && i.startsWith($) && n.setTextContent(i.slice($.length));
  }), Za(e);
}
function iu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = rm(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    _(o) && n.push(o);
  }), n;
}
function Rn(e, t) {
  let r = e, n;
  for (; r && !Pe(r); ) {
    if (z(r)) return;
    !n && U(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function im(e) {
  const t = it(
    e,
    (r) => z(r) || Pe(r)
  );
  return z(t);
}
function sm(e) {
  return e.filter(
    (t) => !nu(t) && (_(t) || L(t) && t.isInline())
  );
}
function _E(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!_(i) || nu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function CE(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !om(n, r)
  );
}
function su(e, t, r, n, i) {
  const s = sm(e), o = _E(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Rn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !CE(l, s, o);
  });
}
function om(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Kt(r));
}
function am(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (L(d) && t.some((u) => d.isParentOf(u))) {
      if (!om(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Kt(n[s - 1]) && (s -= 1), o < n.length - 1 && Kt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Ro(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Ro(e).append(...c)), e;
}
function Ro(e) {
  return bb(e);
}
function cm(e, t) {
  const r = O(), n = e[0], i = e[e.length - 1];
  if (!w(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function SE(e, t, r) {
  if (e.isCollapsed()) {
    const l = Rn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (id(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = _i(e);
  if (!su(n, r, i, s, t)) return !1;
  const o = iu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = Rn(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = am(d, o);
    u && (id(u, t), c = !0);
  }), c;
}
function ME(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = _i(e);
  if (!!!i?.some(
    (m) => su(s, m, o, a)
  ) && !EE(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const T = O();
    w(T) && nm(T, m, n) && (l = !0);
  });
  const d = O();
  if (!w(d)) return l;
  const u = d.isBackward(), [f, p] = _i(d), h = iu(
    d.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const y = h.filter(
    (m) => !im(m) && !Rn(m, t)
  );
  return y.length > 0 && (AE(y).forEach((m) => PE(m, t)), l = !0), cm(h, u), l;
}
function EE(e, t) {
  return sm(e).some(
    (r) => !im(r) && !Rn(r, t)
  );
}
function AE(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function PE(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => U(a) && a.getMarker() === t
  ), s = i ? Ro(i) : Cr(t);
  e[0].insertBefore(s), s.append(...e), i === r || Oc(e[0], s);
}
function NE(e) {
  Te(e) && (wl(e.getPreviousSibling()), Zh(e.getNextSibling()));
}
const lm = {
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
}, xf = "psc-active-text", ro = "psc-empty-text";
function wE({ viewOptions: e }) {
  const [t] = ue(), r = Q(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(xf), r.current = o, o && t.getElementByKey(o)?.classList.add(xf);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        zo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${ro}`);
          if (!c) return !1;
          const l = ws(c);
          if (!Te(l)) return !1;
          const d = l.getParent();
          if (!L(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        Mt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = Ha(), f = OE(), p = [], h = [];
          return Ce().getChildren().forEach((y) => {
            if (!L(y)) return;
            const { emptyKeys: m, nonEmptyKeys: T } = RE(y);
            p.push(...m), h.push(...T);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(ro) : t.getElementByKey(u)?.classList.add(ro);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(ro));
      }),
      t.registerCommand(
        Zc,
        () => (i(void 0), !1),
        Mt
      ),
      t.registerCommand(
        kb,
        () => {
          const o = t.getEditorState().read(Ha);
          return o !== r.current && i(o), !1;
        },
        Mt
      )
    ];
    return i(t.getEditorState().read(Ha)), Ze(...s);
  }, [t, n]), null;
}
function Ha() {
  return qE(O() ?? void 0)?.getKey();
}
function OE() {
  const e = O();
  if (!w(e)) return;
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
    Te(s[a]) && (o = s[a].getKey());
  return o;
}
function qE(e) {
  if (w(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function RE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Te(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Te(c)) break;
      if (!(_t(c) || P(c)) && c.getTextContent().replaceAll(po, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const $E = /^\+/;
function ou(e, t) {
  const r = t.replace($E, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function um(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function dm(e, t) {
  return um(e, t) !== void 0;
}
function qc(e, t) {
  const r = um(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function $o(e, t, r) {
  const n = L(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function IE(e, t, r, n, i) {
  const s = ou(n, t);
  if (!s) {
    $o(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && $o(e, "invalid", i);
}
function us(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || IE(s, o, t, r, n), us(s, t, r, n, i || o === "xq");
    } else if (Te(s)) {
      if (i) continue;
      const o = ou(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else z(s) ? us(s, s.getMarker(), r, n, i) : we(s) || L(s) && us(s, t, r, n, i);
}
function LE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = ou(e, a);
    if (!c) {
      $o(o, "unknown", r), qc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    qc(n, l) || $o(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ce().getChildren())
    we(o) || (ht(o) || We(o) ? i(o, o.getMarker()) : oe(o) ? (i(o, o.getMarker()), s(o) && us(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && us(o, "p", e, r, !1));
  return r;
}
function DE(e) {
  return !!e?.includes("(basic)");
}
function UE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function fm(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Nc(e, t);
}
function au(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function pm(e, t) {
  const r = [];
  for (const n of t) {
    const i = au(e, n);
    i && qc(r, i);
  }
  return r;
}
function co(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: UE(e.description),
    isBasic: DE(e.description)
  };
}
function FE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Rc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : FE(e.marker, t.marker);
}
function $c(e, t, r) {
  if (t.noteMarker) return [];
  const n = pm(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && fm(i.marker, r)
  ).filter((i) => {
    const s = au(e, i.marker);
    return s !== void 0 && dm(n, s);
  }).map((i) => co(i, "paragraph")).sort(Rc);
}
function KE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => fm(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => co(c, "character")).sort(Rc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => co(c, "character")),
    ...a.map((c) => co(c, "note"))
  ].sort(Rc);
}
function zE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function jE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function BE(e, t, r) {
  return [
    ...zE(e, t.openCharMarkers),
    ...KE(e, t, r)
  ].sort(jE);
}
function VE(e, t, r) {
  if (t.source === "paragraph") return $c(e, t, r);
  const n = BE(e, t, r);
  return n.length > 0 ? n : $c(e, t, r);
}
function WE(e, t, r) {
  const n = $c(e, t, r), i = pm(e, t.previousParaMarkers), s = au(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && dm(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const jn = String.raw`\w-`, hm = "a-z0-9", HE = `[a-z][${hm}]*`, GE = new RegExp(
  String.raw`^\\(\+?[${jn}]+)[ \u00A0]$`
), gm = new RegExp(String.raw`^\\(\+?[${jn}]+)$`), JE = new RegExp(String.raw`^\\\+?[${jn}]*\*$`), YE = new RegExp(
  String.raw`^\\(\+?[${jn}]+)(?:[ \u00A0]|$)`
), XE = new RegExp(
  String.raw`^\\(\+?)([${jn}]+)`
), QE = new RegExp(
  String.raw`\\\+?[${jn}]+(?:\\?\*|[ \u00A0])`
), ZE = new RegExp(
  String.raw`\\\+?[${jn}]*$`
), eA = new RegExp(
  String.raw`^\\(${HE})( |$)`
), tA = new RegExp(
  String.raw`\\[${hm}+*]*$`,
  "i"
), rt = "￼";
function mm(e) {
  return e.length > 1 && e.startsWith($) && e.charAt(1) !== rt ? e.slice(1) : e;
}
function vf(e) {
  return $s(e) ? e.markerSyntax ?? "opening" : void 0;
}
function ym(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Zr.serializeEditorState(
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
  for (; vf(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Et(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && vf(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function no(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function es(e, t) {
  ZE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += rt;
}
function $t(e) {
  return e.replaceAll($, " ");
}
function rA(e, t, r = !1) {
  if (er(t)) return $t(e);
  if (e === $) return " ";
  const n = r && e.startsWith($), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll($, "~");
}
function ds(e) {
  const t = e.getTextContent();
  return Kn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function ia(e, t) {
  const r = e[t];
  if (!$e(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Ho(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function bm(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function sa(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = hs(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function cu(e) {
  return !!e.getUnknownAttributes();
}
function oa(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Bo(e);
}
function km(e, t) {
  return $e(e) ? !oa(e.getMarker(), t) : z(e) || we(e) ? !0 : Ae(e) ? cu(e) : U(e) ? Tm(e, t) : !1;
}
function Tm(e, t) {
  if (Uk(e)) return !0;
  const r = e.getMarker();
  return !fk(r) && t(r) === void 0;
}
const qt = "", Rt = "";
function _f(e) {
  return e.flatMap((t) => Ke(t) ? t.getChildren() : [t]);
}
function li(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if ($e(s)) {
      const o = ia(e, i);
      oa(s.getMarker(), r) && bm(o) ? (t.push(
        qt,
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
      ), li(_f(o), t, r), t.push(Rt)) : t.push(rt), i += o.length;
    } else if (Ae(s)) {
      const o = sa(e, i);
      cu(s) ? t.push(rt) : (t.push(
        qt,
        "verse",
        $t(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), li(_f(o), t, r), t.push(Rt)), i += o.length;
    } else P(s) ? t.push(qt, "marker", $t(s.getTextContent()), Rt) : nn(s) ? t.push(qt, "unmatched", $t(s.getTextContent()), Rt) : km(s, r) ? t.push(rt) : Fo(s) ? t.push(" ") : _(s) ? t.push(
      $t(
        n ? mm(ds(s)) : ds(s)
      )
    ) : U(s) ? (t.push(qt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), li(s.getChildren(), t, r, !0), t.push(Rt)) : be(s) ? li(s.getChildren(), t, r, n) : L(s) ? (t.push(qt, s.getType()), li(s.getChildren(), t, r), t.push(Rt)) : t.push(rt);
  }
}
function Di(e, t) {
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
function lu(e) {
  return e.type ?? "";
}
function xm(e, t, r) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Ee(e, r);
}
function Ga(e, t) {
  const r = e[t];
  if (!(!r || lu(r) !== "attribute-run"))
    return Ar(r) ?? [];
}
function Ui(e, t) {
  const r = [];
  return ss(e, r, t), r.join("");
}
function ss(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = lu(s);
    if (o === "ms") {
      const l = s, d = Ga(e, i + 1);
      d && oa(l.marker ?? "", r) ? (t.push(
        qt,
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
      ), ss(d, t, r), t.push(Rt), i += 1) : t.push(rt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(rt);
        continue;
      }
      t.push(
        qt,
        "verse",
        $t(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = Ga(e, i + 1 + d);
      for (; u; )
        ss(u, t, r), d++, u = Ga(e, i + 1 + d);
      t.push(Rt), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        qt,
        "marker",
        $t(
          xm(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Rt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(qt, "char", JSON.stringify(l.unknownAttributes ?? null)), ss(Ar(s) ?? [], t, r, !0), t.push(Rt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(rt);
      continue;
    }
    if (o === "unmatched") {
      t.push(qt, "unmatched", $t(Ci(s) ?? "")), t.push(Rt);
      continue;
    }
    const a = Ci(s);
    if (a !== void 0) {
      t.push($t(n ? mm(a) : a));
      continue;
    }
    const c = Ar(s);
    c ? (t.push(qt, o), ss(c, t, r), t.push(Rt)) : t.push(rt);
  }
}
function aa(e) {
  let t = 0;
  for (const r of e) {
    const n = Ar(r);
    if (n) {
      t += aa(n);
      continue;
    }
    const i = Ci(r);
    if (i !== void 0)
      for (const s of i) s === rt && t++;
  }
  return t;
}
function Si(e, t, r, n, i) {
  en(e.getChildren(), t, r, n, i);
}
function en(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      no(t, a, $t(a.getTextContent()));
    else if ($e(a)) {
      s();
      const c = ia(e, o);
      oa(a.getMarker(), r) && bm(c) ? en(c, t, r, n) : es(t, [a, ...c]), o += c.length;
    } else if (z(a) || we(a))
      s(), es(t, [a]);
    else if (Ae(a)) {
      s();
      const c = sa(e, o);
      cu(a) ? es(t, [a, ...c]) : (no(t, a, $t(ds(a))), en(c, t, r, n)), o += c.length;
    } else if (U(a))
      s(), Tm(a, r) ? es(t, [a]) : Si(a, t, r, n, { pending: !0 });
    else if (Fo(a))
      s(), no(t, a, " ");
    else if (_(a)) {
      const c = Kn(a) || te(a, le) === "attribute", l = s() && !c;
      no(
        t,
        a,
        c ? $t(ds(a)) : rA(ds(a), n, l)
      );
    } else L(a) ? Si(a, t, r, n, i) : (s(), es(t, [a]));
  }
}
function vm(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (we(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Si(e, i, t, r), i;
}
function nA(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  return Si(e, n, t, r), n;
}
function uu(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!oe(i)) return;
    const s = vm(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function _m(e, t) {
  let r = 0;
  const n = (i) => {
    if (_(i)) {
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
    } else L(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function Ic(e, t = []) {
  for (const r of e)
    Ae(r) ? t.push(r) : L(r) && Ic(r.getChildren(), t);
  return t;
}
function Cm(e) {
  let t = 0;
  const r = (n) => {
    if (_(n))
      for (const i of n.getTextContent()) i === rt && t++;
    else L(n) && n.getChildren().forEach(r);
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
function du(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), L(i) && Si(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const $n = /\s/;
function Sm(e) {
  return e.filter(ca).length;
}
function ca(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return _(t) && !P(t) && te(t, le) === "attribute";
}
function iA(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return P(t) || ca(e);
}
function Cf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && ca(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      $n.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function In(e, t, r) {
  const n = Cf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !iA(i) ? Cf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Sm(e.spans) };
}
function Ja(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function sA(e) {
  const t = X(e.key);
  if (!P(t)) return;
  const r = t.getParent();
  if (!U(r)) return;
  const n = r.getParent();
  if (n)
    return {
      key: n.getKey(),
      offset: r.getIndexWithinParent() + 1,
      type: "element"
    };
}
function oA(e) {
  const t = X(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Ae(t) ? sa(n, i) : $e(t) ? ia(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function Cs(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e, s = Sm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const p of i) {
    const h = p.end - p.start, y = !p.isSentinel && (r || !Ja(p));
    if (!(o && ca(p))) {
      if (d) {
        if (!y) continue;
        a = { key: p.key, offset: 0 };
        break;
      }
      for (let m = 0; m < h; m++) {
        const T = n[p.start + m];
        if (c === 0 && (l === 0 || !$n.test(T))) {
          if (y) {
            a = { key: p.key, offset: m };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? $n.test(T) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (y && !r) {
          a = { key: p.key, offset: h };
          break;
        }
        d = !0;
      }
    }
  }
  if (a) return { ...a, type: "text" };
  const u = i[i.length - 1];
  if (u && Ja(u)) {
    const p = sA(u);
    if (p) return p;
  }
  if (u?.isSentinel) {
    const p = oA(u);
    if (p) return p;
  }
  const f = [...i].reverse().find((p) => !p.isSentinel && !Ja(p));
  if (f) return { key: f.key, offset: f.end - f.start, type: "text" };
}
function Mm(e, t = []) {
  for (const r of e)
    be(r) && t.push(r), L(r) && Mm(r.getChildren(), t);
  return t;
}
function Em(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), L(e) && e.getChildren().forEach((r) => Em(r, t)), t;
}
function aA(e, t) {
  const r = In(e, t.key, 0);
  if (r)
    return t.isSentinel ? { kind: "preserved", anchor: r, key: t.key } : { kind: "byte", anchor: r };
}
function la(e, t) {
  const r = [];
  for (const n of Mm(e)) {
    const i = Em(n), s = t.spans.filter((y) => i.has(y.key)), o = s.find((y) => y.isSentinel || !P(X(y.key))) ?? s[0], a = s[s.length - 1];
    if (!o || !a) continue;
    const c = aA(t, o), l = In(t, a.key, a.end - a.start);
    if (!c || !l) continue;
    const d = n.getTypedOnClicks(), u = n.getTypedOnRemoves(), f = n.getTypedOnMouseEnters(), p = n.getTypedOnMouseLeaves(), h = Object.entries(n.getTypedIDs()).flatMap(
      ([y, m]) => m.map((T) => ({
        type: y,
        id: T,
        onClick: d[y]?.[T],
        onRemove: u[y]?.[T],
        onMouseEnter: f[y]?.[T],
        onMouseLeave: p[y]?.[T]
      }))
    );
    h.length > 0 && r.push({ annotations: h, start: c, end: l });
  }
  return r;
}
function cA(e, t, r) {
  const n = Am(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!be(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function lA(e, t) {
  const r = Am(e);
  if (!r) return;
  const n = Mn();
  n.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), r[0].insertBefore(n), n.append(...r);
}
function Am(e) {
  const t = X(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = Ae(t) ? sa(r, n) : $e(t) ? ia(r, n) : [];
  return [t, ...i];
}
function Sf(e) {
  return e.type === "text" && P(X(e.key));
}
function ua(e, t) {
  if (e.length === 0) return;
  const r = O()?.clone() ?? null;
  for (const n of e)
    for (const i of n.annotations) {
      const s = t();
      if (!s) continue;
      const o = Cs(s, n.start.anchor, {
        addressDisplayBytes: !0
      }), a = Cs(s, n.end);
      if (!o || !a || Sf(o) || Sf(a)) continue;
      if (o.key === a.key && o.offset === a.offset && o.type === a.type) {
        n.start.kind === "preserved" && lA(n.start.key, i);
        continue;
      }
      const c = Ko();
      c.anchor.set(o.key, o.offset, o.type), c.focus.set(a.key, a.offset, a.type), cl(
        c,
        i.type,
        i.id,
        i.onClick,
        i.onRemove,
        i.onMouseEnter,
        i.onMouseLeave
      ), n.start.kind === "preserved" && cA(n.start.key, i.type, i.id);
    }
  xn(r);
}
function fu(e, t, r) {
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
function zs(e) {
  const t = e.exportJSON();
  return L(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(zs(r))), t;
}
function pu(e, t, r, n, i, s, o) {
  const a = la(e, t);
  if (a.length === 0) return n;
  const c = mp({
    nodes: [Je, ...Wl],
    onError: (u) => {
      throw u;
    }
  });
  tl(
    c,
    Je,
    (u) => Mn(u.getTypedIDs()),
    (u, f) => Object.entries(u.getTypedIDs()).forEach(
      ([p, h]) => h.forEach((y) => f.addID(p, y))
    )
  );
  const l = t.spans.filter((u) => u.isSentinel).map((u) => u.key).filter((u, f) => (r[f]?.length ?? 0) > 0);
  let d;
  return c.update(
    () => {
      const u = Ce(), f = i === "noteContent" ? Lt() : u;
      f !== u && u.append(f), d = f.getKey(), n.forEach((m) => f.append(Ei(m)));
      const p = () => {
        const m = f.getChildren();
        if (i === "paras") return du(m, s, o);
        if (i === "chapter")
          return _e(m[0]) ? Ms(m[0], s, o) : void 0;
        const T = { text: "", spans: [], sentinels: [] };
        return en(m, T, s, o), T;
      }, h = p()?.spans.filter((m) => m.isSentinel).map((m) => m.key) ?? [], y = /* @__PURE__ */ new Map();
      h.length === l.length && l.forEach((m, T) => y.set(m, h[T])), ua(
        a.map(
          (m) => m.start.kind === "preserved" ? {
            ...m,
            start: { ...m.start, key: y.get(m.start.key) ?? m.start.key }
          } : m
        ),
        p
      );
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const u = d === void 0 ? void 0 : X(d);
    return L(u) ? u.getChildren().map(zs) : n;
  });
}
function Pm(e, t, r) {
  const n = Cs(e, t);
  if (n?.type === "text") {
    const i = X(n.key);
    if (i && _(i)) {
      i.select(n.offset, n.offset);
      return;
    }
  } else if (n) {
    const i = X(n.key), s = L(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function Nm(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    Pm(du(e, n, i), t, e);
  }
}
function uA(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(L)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  en(e, s, n, i), Pm({ text: s.text, spans: s.spans }, t, e);
}
function wm(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = uu(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = O();
  if (w(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((T) => T.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = In(s, c.anchor.key, c.anchor.offset));
  }
  const l = la(e, s), d = Nr(s.text, {
    getMarker: n
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Bn(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Zr.serializeEditorState(
    { type: _r, version: vr, content: d },
    r
  );
  if (Ui(u.root.children, n) === Di(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = u.root.children.map((m) => Ei(m));
  if (Cm(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = Ic(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  f.forEach((m) => h.insertBefore(m)), _m(f, s.sentinels), e.forEach((m) => m.remove());
  const y = Ic(f);
  for (let m = 0; m < p.length && m < y.length; m++)
    y[m].getNumber() === p[m].number && y[m].setSid(p[m].sid);
  return ua(l, () => du(f, n, r)), Nm(f, o, a, n, r), !0;
}
function Ss(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Ne.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!P(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(hr(s) || _(s) && s.getTextContent() === Et(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const d = n[a - 1];
    if (!P(d) || d.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return en(c, l, t, r), { out: l, contentNodes: c };
}
function Om(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(rt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function dA(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Ss(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = O();
  if (w(d)) {
    for (let C = d.anchor.getNode(); C; C = C.getParent())
      if (e.is(C)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = In(o, d.anchor.key, d.anchor.offset));
  }
  const u = la(a, o), f = Nr(o.text, {
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
  const h = p.content ?? [], y = Om(h), m = ym(e, h, y, r);
  if (m.failure !== void 0)
    return m.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      m.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (aa(m.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const T = e.getCategory() !== y;
  if (T && e.setCategory(y), Ui(m.children, n) === Di(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), T;
  const S = m.children.map((C) => Ei(C));
  if (Cm(S) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), T;
  const N = a[0];
  if (N)
    S.forEach((C) => N.insertBefore(C));
  else {
    const C = e.getChildren().find((M) => P(M) && M.getMarkerSyntax() === "closing");
    S.forEach((M) => C ? C.insertBefore(M) : e.append(M));
  }
  _m(S, o.sentinels);
  const R = new Set(o.sentinels.flat().map((C) => C.getKey()));
  a.forEach((C) => {
    R.has(C.getKey()) || (be(C) && (C.getWritable().__suppressOnRemoveCallbacks = !0), C.remove());
  });
  const E = () => Ss(e, n, r);
  return ua(u, () => E()?.out), uA(
    E()?.contentNodes ?? S,
    c,
    l,
    n,
    r
  ), !0;
}
const qm = /* @__PURE__ */ new Set(["ca", "cp"]), hu = "cp";
function Rm(e) {
  if (!vt(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Si(e, t, cr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Nr(r, { getMarker: cr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === hu)
  );
}
function Fi(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (U(r) && qm.has(r.getMarker()) || Rm(r)) {
      t.push(r);
      continue;
    }
    oe(r) && r.getMarker() === hu && t.push(r);
    break;
  }
  return t;
}
function fA(e) {
  const t = (n) => U(n) && qm.has(n.getMarker()) || Rm(n);
  if (t(e) || oe(e) && e.getMarker() === hu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (_e(n)) return n;
      if (!t(n)) return;
    }
}
function Ms(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Fi(e);
  if (n.some((s) => oe(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (en(e.getChildren(), i, t, r), en(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function pA(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Fi(e)], o = Ms(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = O();
  if (w(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((T) => T.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = In(o, l.anchor.key, l.anchor.offset));
  }
  const d = la(s, o), u = Nr(o.text, { getMarker: n }), [f] = u;
  if (u.length === 0 || typeof f != "object" || f.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Bn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const p = Zr.serializeEditorState(
    { type: _r, version: vr, content: u },
    r
  );
  if (Ui(p.root.children, n) === Di(s, n)) {
    let m = !1;
    return e.getNumber() !== (f.number ?? "") && (e.setNumber(f.number ?? ""), m = !0), e.getAltnumber() !== f.altnumber && (e.setAltnumber(f.altnumber), m = !0), e.getPubnumber() !== f.pubnumber && (e.setPubnumber(f.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = p.root.children.map((m) => Ei(m));
  if (!_e(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const y = h[0];
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), ua(
    d,
    () => Ms(y, n, r)
  ), Nm(h, a, c, n, r), !0;
}
function Es(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (we(n)) return;
    !t && (z(n) || oe(n) || _e(n)) && (t = n), Yc(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? fA(r) : void 0) ?? t;
}
function Gt(e, t) {
  const r = Es(e);
  return r ? z(r) ? dA(r, t) : _e(r) ? pA(r, t) : wm([r], t) : !1;
}
const hA = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Mf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !hA.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function lo(e, t) {
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
          t.push(`\\${n}`), Mf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), lo(r.content, t), Mf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), lo(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), lo(r.content, t);
      }
    }
}
function Ef(e, t, r) {
  const n = Es(e);
  if (!oe(n)) return !1;
  const i = O();
  if (!w(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = vm(n, t, r);
  if (!o) return !1;
  const a = Nr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    $n.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  lo(a, l);
  for (const d of l.join("").replaceAll($, "~")) {
    if ($n.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function gA(e) {
  return [ct(e), Xo()];
}
function gu(e) {
  Xt(e, 2);
}
function mA(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function mu(e) {
  const t = mA(e);
  e.splice(0, 0, gA(e.getMarker())), t && gu(e);
}
function Io(e, t) {
  e.setMarker(t), mu(e), gu(e);
}
function yA(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Kn(n)) {
    if (_(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent($), bt(n, le, dr), n.setMode("token");
      return;
    }
    if (zh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Xo());
  }
}
function Af(e, t, r) {
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
function fs(e) {
  for (let t = e; t; t = t.getParent())
    if (oe(t)) return t;
}
function bA(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = fs(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = fs(r.getNode())?.is(s) ?? !1, a = fs(n.getNode())?.is(s) ?? !1;
    return !(o && !Af(r, s, "start") || a && !Af(n, s, "end"));
  });
}
function Lc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = O();
  if (!(!w(r) || r.isCollapsed()))
    for (const n of bA(r)) t.add(n.getKey());
}
function kA(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = O();
  if (!w(r) || !r.isCollapsed()) return;
  const n = fs(r.focus.getNode());
  n && t.add(n.getKey());
}
function TA(e) {
  const t = O();
  !w(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (Lc(e), t.removeText());
}
function xA(e, t) {
  if (!$i(t.viewOptions)) return;
  if (Kt(e.getFirstChild())) {
    yA(e, t);
    return;
  }
  if (t.splitExpected.current) {
    mu(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => oe(o) && !o.is(e))) {
      Io(e, ar), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (oe(r)) {
    const n = e.getChildren().filter((a) => !Kn(a)), i = O();
    let s = !1;
    if (w(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : fs(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Xt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Io(e, ar);
}
function vA(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = or(t, qs(e.getMarker()));
  return r === "" ? void 0 : r;
}
function _A(e) {
  const t = e.getChildren().filter((s) => !P(s) && te(s, le) !== "attribute"), r = t[0];
  r && _(r) && r.getTextContent().startsWith($) && r.setTextContent(r.getTextContent().slice(1));
  const n = vA(e);
  n && t.push(ke(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function CA(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => _(c) && !P(c) && c.getTextContent() === Et(s)
    ), a = Pi(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (_(c) && c.getTextContent() === Et(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function SA(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    _A(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Gt(e, t);
}
function $m(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && $i(r)) {
    Io(e, t);
    return;
  }
  kg(e, t);
}
function Im() {
  const e = O();
  if (!w(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Lm(e);
    return t !== "removed" ? t : (Dc(), "handled");
  }
  return Dc() ? "handled" : "declined";
}
function MA(e, t) {
  if (!t) return e;
  const r = eA.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Pf(e, t) {
  const r = O();
  if (!w(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Dm())
      return "declined";
  } else {
    const s = Lm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => MA(s, t)
  );
  Nf(n ?? "");
  for (const s of i)
    Dc(), Nf(s);
  return "handled";
}
function EA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = ws(n);
  if (!i) return !1;
  const s = Qt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !_(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Lm(e) {
  const t = Qt(e.anchor.getNode()), r = Qt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), AA() ? "removed" : "needs-plain-split");
}
function Nf(e) {
  if (e === "") return;
  const t = O();
  w(t) && t.insertText(e);
}
function AA() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = Qt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function Dm() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Qt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Dc() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Dm();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Cr("fp", { closed: "false" });
  i.append(ct("fp"));
  const s = _(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
    d && (mx(d), i.append(d));
  }
  return i.getChildren().every(P) && i.append(ke(Dt)), Um(i), !0;
}
function Um(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (_(t)) {
    const r = t.getTextContent().startsWith($) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (L(t)) {
    Um(t);
    return;
  }
  e.selectEnd();
}
function PA(e) {
  const t = [];
  let r = e;
  for (; r; )
    U(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function NA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ce().getChildren()) {
    if (t && n.is(t)) break;
    (ht(n) || We(n) || oe(n)) && r.push(n.getMarker());
  }
  return r;
}
function wA(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function OA(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Kt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Kn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(wA(i)) && r === 0 : !1;
}
function qA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Kt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Kn(i) && t.is(i) && r === 0;
}
function RA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function $A() {
  const e = O();
  if (!w(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = it(t, oe), s = !n && (!i || qA(i, t, r)) ? "paragraph" : "character", o = Qt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: NA(t),
    openCharMarkers: PA(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Pl(t, r),
    anchorRect: RA()
  };
}
function IA() {
  const e = O();
  if (!w(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!_(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = tA.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function LA(e, t, r) {
  $m(e, t, r), gu(e);
}
function DA(e, t, r) {
  const n = O();
  if (!w(n)) return;
  const i = n.focus.getNode(), s = it(i, oe);
  if (t === "backslash" && s && OA(s, i, n.focus.offset)) {
    LA(s, e, r);
    return;
  }
  Km(e, r);
}
function UA(e, t) {
  const r = O();
  return !w(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Fm(e) {
  const t = O();
  return w(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function FA(e, t, r, n) {
  if (w(O()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && IA(), e.kind === "closeTag") {
    Fm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Im() !== "declined") return;
  if (e.kind === "paragraph" && et.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    DA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ne.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return tm(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  wc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Ai(), reference: r });
}
function Km(e, t) {
  const r = O();
  if (!w(r)) return;
  const n = $i(t);
  if (Zg()) {
    const s = O();
    if (!w(s)) return;
    const o = it(s.anchor.getNode(), oe);
    if (!o) return;
    o.setMarker(e), n && mu(o);
    return;
  }
  const i = r.insertParagraph();
  oe(i) && (n ? Io(i, e) : i.setMarker(e));
}
function KA() {
  const [e] = ue();
  return j(() => e.registerCommand(yp, () => !0, Mt), [e]), null;
}
function zm(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Ne.isValidMarker(r) || Bo(r));
}
function zA(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Ne.isValidMarker(r) || Bo(r));
}
function jA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = YE.exec(e)?.[1];
  return r === void 0 ? !1 : !zm(r, t);
}
function jm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !jA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!oe(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (oe(i))
    return [i, r];
}
function Bm(e, t) {
  const r = jm(e, t.getMarker);
  return r !== void 0 && wm(r, t);
}
function BA(e, t) {
  const r = O();
  w(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Vm(e) {
  const t = XE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function VA(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Vm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function WA(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (z(e.getParent()) && _(r)) {
    const n = r.getNextSibling();
    if (U(n)) {
      vl(n);
      return;
    }
  }
  _(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function wf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Vm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  WA(e);
}
function Of(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Wm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Gt(e, r);
  const n = VA(e), i = e.getParent();
  if (oe(i)) {
    if (!zm(t, r.getMarker))
      return Bm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Gt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Of(s, t) && wf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || z(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? zA(t, r.getMarker) : Ne.isValidMarker(s)))
      return Gt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Gt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (BA(c, nt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Of(a, s) && wf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Gt(e, r);
}
function HA(e) {
  const t = O();
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
function GA(e, t) {
  const r = e.getTextContent();
  if (rn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ke(e.getParent()) && ll(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !HA(e)) {
    vk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = GE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Wm(e, n[1], t);
      return;
    }
    if (JE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Gt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = nt(e.getMarker(), e.getNested());
    if (U(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = O(), o = w(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ke(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function JA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (gh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Hm(e) {
  if (!Ep(e)?.length)
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
const ts = Hm("v"), YA = Hm("c"), qf = /^[ \u00A0]*$/;
function Rf(e, t, r) {
  const n = e.getNextSibling();
  if (_(n) && n.getType() === ze.getType() && n.getMode() === "normal" && te(n, le) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = ke(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function XA(e, t) {
  const r = e.getTextContent(), n = It("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (ts.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = ts.valueAndRest.exec(c);
    if (l && qf.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (ts.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = ts.valueAndRest.exec(r);
  if (!s) {
    const c = ts.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = O(), p = w(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(It("v", d));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Rf(e, u, h);
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
  if (t.pendingKeys.delete(e.getKey()), qf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(It("v", o)), a && Rf(e, a, a.length);
}
const QA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function ZA(e, t) {
  const r = e.getParent();
  if (!z(r) || r.getIsCollapsed() !== !1 || !Ep(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Et(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = QA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Et(a)), !0;
}
function e1(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!_(t)) return;
  const r = It("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = YA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Gm(e) {
  if ($e(e)) {
    const { wrapper: t } = Ho(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (z(e)) {
    const { wrapper: t } = Xp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (_e(e)) {
    const t = [], r = Qp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = eh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Ae(e)) {
    const t = [], r = hs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = hs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function t1(e) {
  const t = O();
  if (!w(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Gm(e).some((n) => r.is(n));
}
function r1(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && oe(e) && zh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of gs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Fs(l, e) && (i || t1(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Gm(e))
    l.remove(), n = !0;
  let s = !1;
  if (U(e)) {
    const l = Wk(e);
    l !== void 0 && ck(l) && (oh(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of gs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (Ex(l, e)) {
        ks(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Bh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Qo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function $f(e) {
  return _(e) && e.getType() === ze.getType() && e.getMode() === "normal" && te(e, le) !== "attribute";
}
function n1(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = X(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && $f(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && $f(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function io(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = n1(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
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
      const h = gm.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = Wm(c, h[1], e) || n : r === "idle" && Ef(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Bm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Gt(c, e) || n;
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
    const f = r1(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Ef(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = Gt(d, e) || n;
    }
  }
  return n;
}
function Jm(e) {
  if (nn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return os(t) !== void 0;
  return !1;
}
function i1(e) {
  const t = Yr(e);
  if (!t) return !1;
  const r = Mr(t.kind);
  return !Qo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function If(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ht(t) || we(t) || Ch(t)) return !0;
  return !1;
}
function s1(e, t) {
  const r = e.getTextContent(), n = te(e, le), i = e.getParent();
  if (n !== "attribute" && _e(i)) {
    r.replace(/^[ \u00A0]+/, "") === It("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (ZA(e, t)) return;
  if (n === "attribute") {
    i1(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Jm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !If(e))
      t.pendingKeys.add(e.getKey());
    else if (th(e)) t.pendingKeys.add(e.getKey());
    else if (_e(Es(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      U(a) && ah(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (If(e)) return;
  const s = O(), o = w(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (QE.test(o)) {
    if (yk(r)) {
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
function o1(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Bh(e, t);
}
function a1(e) {
  const t = (r) => {
    if (P(r)) {
      rn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (nn(r)) {
      gh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of gs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Fs(n, r) || o1(n, r)) && e.pendingKeys.add(r.getKey());
    if (Ae(r)) {
      r.getTextContent() !== It("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (_(r)) {
      if (r.getType() !== ze.getType() || te(r, le) === "attribute") return;
      const n = r.getParent();
      if (_e(n)) {
        r.getTextContent() !== It("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Jm(r) || i.includes("//") || th(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (U(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!we(r) && !ht(r)) {
      if (Ke(r) && r.getChildrenSize() === 0) {
        const n = Yr(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Ce().getChildren().forEach(t);
}
function c1(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = te(e, le);
  if (r === "attribute" || r === dr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ht(o) || _e(o) || we(o)) return;
  const n = t.startsWith($) && U(e.getParent()), i = n ? t.slice(1) : t, s = (n ? $ : "") + i.replace(/ (?=[ \u00A0])/g, $).replace(new RegExp("(?<=\\u00A0) ", "g"), $);
  s !== t && e.setTextContent(s);
}
function l1(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function Uc(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(l1(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function u1(e) {
  const t = Uc(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes($) ? r : n.includes($) || i.includes($) ? i : void 0;
  if (!s) return !1;
  const o = O();
  if (!w(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll($, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = Ai();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(uo, void 0), d === "") return;
    const f = O();
    w(f) && f.insertText(d);
  }), !0;
}
function d1(e) {
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
function f1(e) {
  const t = O();
  if (!w(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll($, " ")
  }, n = _b(e), i = Cb(e);
  return n && (r["text/html"] = d1(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Lf(e, t, r) {
  const n = O();
  if (!w(n) || n.isCollapsed()) return !1;
  const i = f1(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return vb(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const Ym = Gc(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ya(e) {
  const t = e();
  return Cn(lp), Cn(Pp), t;
}
const Df = 8, p1 = 1e3;
function oi(e, t) {
  const r = Ae(e) ? ["va", "vp"] : $e(e) ? ["milestone"] : z(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    Ox(Mr(n), e, t.pendingKeys);
}
function h1(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(el) || i.updateTags.has(fi)) return;
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
        c?.isAttached() && Mr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ze(
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
    e.registerMutationListener(ur, r),
    e.registerMutationListener(Or, r),
    e.registerMutationListener(wr, r)
  );
}
function g1(e, t, r) {
  return Ze(
    e.registerCommand(
      Tr,
      (n) => {
        if (Mg()) return !1;
        const i = Uc(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll($, "~") : s).split(`
`);
          let c = Pf(a, t.getMarker);
          if (c === "declined" && EA(e) && (c = Pf(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      xr
    ),
    e.registerCommand(
      Tr,
      (n) => {
        const i = Uc(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !fE()) return !1;
        n?.preventDefault();
        const o = O();
        return w(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(uo, void 0), a === "") return;
          const l = O();
          w(l) && l.insertText(a);
        }), !0;
      },
      Ue
    ),
    e.registerCommand(
      Tr,
      () => (t.splitExpected.current = !0, !1),
      Mt
    )
  );
}
function m1({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = ue(), s = e?.markerMode === "editable", o = !!e && er(e), a = Q(void 0), c = Q(n);
  return j(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? cr, l.logger = r);
  }, [e, t, r, n]), j(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? cr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const d = _x(i, l.pendingKeys);
    let u, f = !1, p = !1, h, y = !1, m = !1, T = 0;
    const S = () => T < Df ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Df} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), N = (M, q = "departure") => {
      i.update(() => {
        T = Ya(
          () => io(l, M, q)
        ) ? T + 1 : 0;
      });
    };
    let R;
    const E = () => {
      if (R !== void 0 && clearTimeout(R), R = void 0, m || l.pendingKeys.size === 0) return;
      const M = c.current ?? p1;
      M < 0 || (R = setTimeout(() => {
        R = void 0, !(m || l.pendingKeys.size === 0) && (f || S() || N(void 0, "idle"));
      }, M));
    }, C = Ze(
      i.registerNodeTransform(ur, (M) => {
        if (i.isComposing()) return;
        GA(M, l);
        const q = Yr(M);
        q && (Ae(q.owner) || z(q.owner) || _e(q.owner) || $e(q.owner) && Ho(q.owner).wrapper === void 0) && oi(q.owner, l);
      }),
      i.registerNodeTransform(ft, (M) => {
        i.isComposing() || (XA(M, l), oi(M, l));
      }),
      i.registerNodeTransform(Pt, (M) => {
        i.isComposing() || (e1(M), M.isAttached() && oi(M, l));
      }),
      i.registerNodeTransform(et, (M) => {
        i.isComposing() || xA(M, l);
      }),
      i.registerNodeTransform(xe, (M) => {
        if (!i.isComposing()) {
          SA(M, l);
          for (const q of ["separator", "char"])
            M.isAttached() && Fs(Mr(q), M) && l.pendingKeys.add(M.getKey());
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
      i.registerNodeTransform(Yt, (M) => {
        i.isComposing() || oi(M, l);
      }),
      i.registerNodeTransform(wr, (M) => {
        if (i.isComposing()) return;
        const q = Yr(M);
        q && ($e(q.owner) || Ae(q.owner) || z(q.owner) || _e(q.owner)) && oi(q.owner, l);
      }),
      i.registerNodeTransform(Ne, (M) => {
        i.isComposing() || (CA(M, l), oi(M, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Rr, (M) => {
        i.isComposing() || JA(M, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(ze, (M) => {
        i.isComposing() || s1(M, l);
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
        (M) => {
          i.getEditorState().read(() => {
            for (const [q, J] of M) {
              if (J === "destroyed") continue;
              const H = X(q);
              !H || te(H, le) !== "attribute" || Ke(H.getParent()) || i.getElementByKey(q)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      h1(i, l),
      ...o ? [
        i.registerNodeTransform(ze, (M) => {
          i.isComposing() || c1(M);
        }),
        i.registerCommand(
          jo,
          (M) => Lf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            M && typeof M == "object" && "clipboardData" in M ? M : null,
            i,
            !1
          ),
          Ue
        ),
        i.registerCommand(
          _n,
          (M) => Lf(
            M && typeof M == "object" && "clipboardData" in M ? M : null,
            i,
            !0
          ),
          Ue
        ),
        i.registerCommand(
          Tr,
          (M) => u1(
            // Same jsdom-safe duck-check as COPY above.
            M && typeof M == "object" && "clipboardData" in M ? M : null
          ),
          Ue
        )
      ] : [],
      i.registerCommand(
        _n,
        () => (Lc(l), !1),
        xr
      ),
      i.registerCommand(
        Xc,
        () => (i.isComposing() || TA(l), !1),
        di
      ),
      i.registerCommand(
        zo,
        () => (f = !1, T = 0, E(), !1),
        Mt
      ),
      i.registerCommand(
        Pr,
        (M) => (f = !1, T = 0, E(), (M.key === "Backspace" || M.key === "Delete") && (Lc(l), kA(l)), i.isComposing() || !M.ctrlKey || M.altKey || M.shiftKey || M.metaKey || M.key !== " " && M.code !== "Space" || !dE() ? !1 : (M.preventDefault(), !0)),
        Ue
      ),
      i.registerCommand(
        hp,
        (M) => {
          const q = Im();
          q === "needs-plain-split" && i.dispatchCommand(uo, void 0);
          const J = q !== "declined" || qx();
          return J && M?.preventDefault(), io(l), J;
        },
        Ue
      ),
      i.registerCommand(
        uo,
        () => (l.splitExpected.current = !0, Zg()),
        Ue
      ),
      g1(i, l, o),
      i.registerCommand(
        Ym,
        () => {
          if (f) return !0;
          const M = i.getRootElement(), q = M?.ownerDocument, J = !!M && !!q && q.hasFocus() && M.contains(q.activeElement);
          let H;
          if (J) {
            const re = O();
            H = w(re) ? re.focus.key : u;
          }
          return Ya(() => io(l, H)), !0;
        },
        Mt
      ),
      i.registerCommand(
        il,
        () => (p = !0, !1),
        Mt
      ),
      i.registerCommand(
        Zc,
        () => {
          if (f) return !1;
          const M = O(), q = w(M) ? M.focus.key : u;
          return Ya(() => io(l, q)), !1;
        },
        Mt
      ),
      i.registerUpdateListener(({ editorState: M, tags: q }) => {
        const J = p || q.has(ps);
        p = !1, l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const H = M.read(() => {
          const ae = O();
          return w(ae) ? ae.focus.key : void 0;
        }), re = h;
        if (H !== void 0 && (h = H), q.has(el)) {
          l.pendingKeys.clear(), M.read(() => a1(l)), f = !0, H !== void 0 && (u = H);
          return;
        }
        if (J) {
          H !== void 0 && H !== re && (f = !0);
          return;
        }
        f || (H !== void 0 && (u = H), E(), !(y || H === void 0) && [...l.pendingKeys].some((ae) => ae !== H) && (y = !0, queueMicrotask(() => {
          y = !1, !m && (S() || N(u));
        })));
      })
    );
    return () => {
      m = !0, R !== void 0 && clearTimeout(R), R = void 0, d(), C(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const y1 = ["status_unknown", "status_invalid"], Xm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, b1 = Object.values(Xm);
function k1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Xm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Uf(e) {
  e.classList.remove(...y1), e.removeAttribute("aria-description"), b1.includes(e.title) && e.removeAttribute("title");
}
function T1(e, t, r, n) {
  const i = (a) => a.read(() => Ce().getChildrenKeys()), s = i(t), o = i(e);
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
function x1(e) {
  const t = X(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function v1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ue(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? So;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = LE(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || x1(f)) continue;
            const h = X(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Uf(p);
        }
        for (const [f, p] of u) {
          const h = n.getElementByKey(f);
          h && k1(h, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          T1(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && Uf(d);
      }
    };
  }, [n, i, t, r]), null;
}
function js(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Ar(o);
    a && L(s) && js(s.getChildren(), a, r);
  }
}
function Qm(e, t) {
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
function Bs(e, t, r) {
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
function Zm(e, t) {
  const r = [];
  for (const n of e)
    km(n, t) || ((oe(n) || U(n)) && r.push(n.getMarker()), L(n) && r.push(...Zm(n.getChildren(), t)));
  return r;
}
function ey(e) {
  const t = [];
  for (const r of e) {
    const n = lu(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Ar(r);
    i && t.push(...ey(i));
  }
  return t;
}
function yu(e, t, r) {
  const n = Zm(e, r), i = ey(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function ty(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = O();
  let n, i;
  if (w(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = X(t.key), i = t.offset;
  else
    return;
  if (!(!_(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function bu(e, t) {
  const r = t && ry(e, t);
  return r ? fu(e, r.start, r.end) : e;
}
function ry(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function ny(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = uu(e, o, s);
  if (!c) return;
  const l = bu(c, i), d = Nr(l.text, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (Bn(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = Zr.serializeEditorState(
    { type: _r, version: vr, content: d },
    s
  ).root.children;
  if (aa(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Bs(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ui(u, o) === Di(e, o) && yu(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Qm(u, f.serialized);
  const h = _1(e), y = iy(u);
  for (let m = 0; m < h.length && m < y.length; m++)
    h[m].sid !== void 0 && y[m].number === h[m].number && (y[m].sid = h[m].sid);
  return pu(
    e,
    l,
    f.live,
    u,
    "paras",
    o,
    s
  );
}
function _1(e) {
  const t = [], r = (n) => {
    Ae(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function iy(e) {
  const t = [];
  for (const r of e) {
    Wp(r) && t.push(r);
    const n = Ar(r);
    n && t.push(...iy(n));
  }
  return t;
}
function C1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Ss(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = bu(l, i), f = Nr(u.text, {
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
  const h = p.content ?? [], y = Om(h), m = e.getCategory() !== y, T = ym(e, h, y, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const S = T.children;
  if (aa(S) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const N = Bs(l, t, n);
  if (!N) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ui(S, o) === Di(d, o) && yu(d, S, o)) {
    if (m)
      return { rebuilt: void 0, contentNodes: d, category: y, categoryChanged: m };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Qm(S, N.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: pu(
      d,
      u,
      N.live,
      S,
      "noteContent",
      o,
      s
    ),
    contentNodes: d,
    category: y,
    categoryChanged: m
  };
}
function Ff(e) {
  return e.$?.textType;
}
function S1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Ff(e) === Ff(t);
}
function M1(e) {
  const t = [];
  for (const r of e) {
    const n = X(r);
    n?.isAttached() && we(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function E1(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!z(t)) return;
  const r = e.getTextContent();
  if (rn(e)) return;
  const n = gm.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Kf(e, t) {
  const r = e;
  r.marker = t, r.text = xm(t, r.markerSyntax, r.nested);
}
function sy(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ne.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Kf(a.node, s);
  const c = n.getChildren().filter(P).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Kf(l.node, s);
}
function oy(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Ms(e, i, n);
  if (!o) return;
  const a = bu(o, r), c = Nr(a.text, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Bn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = Zr.serializeEditorState(
    { type: _r, version: vr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...Fi(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ui(d, i) === Di(u, i) && yu(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return pu(
    u,
    a,
    [],
    d,
    "chapter",
    i,
    n
  );
}
function ay(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (u) => {
    z(u) ? s.set(u.getKey(), u) : _e(u) ? o.set(u.getKey(), u) : n.set(u.getKey(), [u]);
  };
  for (const u of e) {
    const f = X(u);
    if (!f?.isAttached()) continue;
    const p = Es(f);
    if (p) {
      if (c(p), P(f)) {
        const h = jm(f, t.getMarker);
        h && i.push(h);
      }
      if (z(p)) {
        const h = E1(f);
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
    const u = Es(r.node);
    u && c(u);
  }
  const d = M1(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: d,
    huskKeys: new Set(d.map((u) => u.getKey()))
  };
}
function cy(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && Ci(r), s = n && Ci(n);
  r && n && i !== void 0 && s !== void 0 && S1(r, n) && (r.text = i + s, e.splice(t, 1));
}
function da(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Ar(s.node) : void 0;
  if (!s || !o) return !1;
  const a = C1(e, t, r, n, i);
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
function A1(e, t, r, n, i) {
  const s = ty(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: d, huskKeys: u } = ay(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  js(Ce().getChildren(), e.root.children, f);
  for (const p of l.values()) sy(p, f);
  for (const p of a.values())
    da(p, f, r, u, s);
  for (const p of o.values()) {
    const h = f.get(p[0].getKey());
    if (!h) continue;
    const y = ny(p, f, r, u, s);
    if (!y) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || h.siblings.splice(m, p.length, ...y);
  }
  for (const p of c.values()) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const y = 1 + Fi(p).length, m = oy(p, r, s);
    if (!m) continue;
    const T = h.siblings.indexOf(h.node);
    T < 0 || h.siblings.splice(T, y, ...m);
  }
  for (const p of d) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const y = h.siblings.indexOf(h.node);
    y < 0 || cy(h.siblings, y);
  }
  return Vg(e, r.viewOptions);
}
function P1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ue(), n = $i(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        et,
        (i) => N1(i, t)
      );
  }, [r, n, t]), null;
}
function N1(e, t) {
  e.getMarker() !== ar && (e.isEmpty() || Kt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${ar}" (key ${e.getKey()})`
  ), e.setMarker(ar)));
}
function so(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const w1 = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Vs(e) {
  return w1.exec(e)?.[1] ?? e;
}
function fa(e, t) {
  const r = e.jsonPath.slice(Vs(e.jsonPath).length);
  return { ...e, jsonPath: `${gn(t)}${r}` };
}
function O1(e, t) {
  let r = Ce();
  for (let n = 0; n < t.length; n += 1) {
    if (!L(r)) return;
    const i = sn(r, er(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function q1(e, t) {
  const r = Mi(Vs(t.jsonPath));
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
  const i = [n.liveIndex, ...r.slice(1)], s = O1(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: fa(t, i) };
}
function Fc(e, t) {
  t.add(e.getKey()), L(e) && e.getChildren().forEach((r) => Fc(r, t));
}
function ly(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function Kc(e, t, r) {
  const n = (u, f) => {
    const p = In(e, u, f), h = ly(e, u, f);
    return p && h ? { anchor: p, position: h.start + f } : void 0;
  }, i = (u) => {
    const f = u.end - u.start, p = In(e, u.key, f);
    return p ? { anchor: p, position: u.start + f } : void 0;
  };
  if (!L(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((u) => Fc(u, s));
  const o = [...e.spans].reverse().find((u) => s.has(u.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  Fc(t, a);
  const c = e.spans.find((u) => a.has(u.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((u) => !a.has(u.key) && X(u.key)?.isBefore(t));
  if (l) return i(l);
  const d = e.spans[0];
  return d && !d.isSentinel ? n(d.key, 0) : void 0;
}
function uy(e, t) {
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
function dy(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
function R1(e, t, r) {
  const [n, i] = bc(t, r.viewOptions);
  if (!n || i === void 0) return;
  const s = uy(e, n);
  if (!s) {
    const l = Kc(e, n, i);
    return l ? {
      kind: "anchor",
      anchor: l.anchor,
      atWordByte: zf(e, l.position)
    } : void 0;
  }
  const o = dy(s.member, n);
  if (!o) return;
  const a = z(s.member) ? Ss(s.member, r.getMarker, r.viewOptions)?.out : void 0, c = a && Kc(a, n, i);
  return {
    kind: "preserved",
    sentinelIndex: s.sentinelIndex,
    memberIndex: s.memberIndex,
    path: o,
    offset: i,
    type: L(n) ? "element" : "text",
    noteAnchor: c && {
      anchor: c.anchor,
      atWordByte: zf(a, c.position)
    }
  };
}
function zf(e, t) {
  const r = e.text[t];
  return r !== void 0 && !$n.test(r);
}
function $1(e, t) {
  if (t.type !== "text") return t;
  const r = ly(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && $n.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function I1(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function L1(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function fy(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, sentinelMap: o } = e;
  if (!i || !s || !o) return;
  const a = Cs(i, t, {
    addressDisplayBytes: !Hc(n)
  });
  if (a)
    return I1(e, r ? $1(i, a) : a);
}
function D1(e, t, r, n, i) {
  const s = L1(r, n), o = s && t.liveFragment?.sentinels[s.sentinelIndex]?.[s.memberIndex];
  if (!o?.isAttached()) return;
  const a = e.byFirstLiveKey.get(o.getKey());
  if (a?.kind === "note")
    return n.noteAnchor ? fy(
      a,
      n.noteAnchor.anchor,
      n.noteAnchor.atWordByte,
      i
    ) : void 0;
  let c = o;
  for (const l of n.path) {
    if (!L(c)) return;
    const d = c.getChildAtIndex(l);
    if (!d) return;
    c = d;
  }
  return { key: c.getKey(), offset: n.offset, type: n.type };
}
function U1(e, t, r) {
  const { plan: n } = r, { liveFragment: i, scratchFragment: s, sentinelMap: o } = n;
  if (!i || !s || !o) return;
  const a = fa(r.location, r.scratchIndexes), c = n.scratch.getEditorState().read(() => R1(s, a, e.tier2));
  if (c)
    return c.kind === "preserved" ? D1(t, n, o, c, r.location) : fy(n, c.anchor, c.atWordByte, r.location);
}
function jf(e, t, r) {
  const n = q1(t, r);
  if (!n) return;
  if (n.kind === "live") return n.location;
  const i = U1(e, t, n), s = i && X(i.key);
  return s ? wn(s, i.offset, t.viewOptions) : void 0;
}
function F1(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = jf(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = jf(e, t, r.end);
  if (i)
    return { ...r, start: n, end: i };
}
function K1(e, t) {
  const r = Mi(Vs(t.jsonPath));
  return r.length === 0 ? t : fa(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function z1(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function j1(e, t) {
  const r = t.liveNodes[0], n = z1(e, t);
  if (n) {
    const s = hy(e, n, r, 0);
    return s && Mi(Vs(s.jsonPath));
  }
  const i = B1(r, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function B1(e, t) {
  return !vt(e) || !Yc(e.getParent()) ? yn(e) : [ui(e, 0, er(t)).index];
}
function V1(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function W1(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function H1(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!L(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return wn(s, n, i);
  }
}
function py(e, t, r, n, i, s, o) {
  const a = uy(r, i);
  if (a) {
    const u = r.sentinels[a.sentinelIndex];
    if (!t[a.sentinelIndex]?.some((h) => h !== void 0)) {
      const h = u[0].getParent();
      return h ? py(
        e,
        t,
        r,
        n,
        h,
        u[0].getIndexWithinParent(),
        o
      ) : void 0;
    }
    const f = dy(a.member, i);
    if (!f) return;
    const p = t[a.sentinelIndex]?.[a.memberIndex];
    return p ? e.scratch.getEditorState().read(
      () => H1(n, p, f, s, o)
    ) : void 0;
  }
  const c = Kc(r, i, W1(e, i, s));
  if (!c) return;
  const { anchor: l } = c, d = !Hc(
    wn(i, s, o)
  );
  return e.scratch.getEditorState().read(() => {
    const u = Cs(n, l, { addressDisplayBytes: d }), f = u && X(u.key);
    return f ? wn(f, u.offset, o) : void 0;
  });
}
function hy(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, sentinelMap: o } = t;
  if (!i || !s || !o) return;
  const a = py(
    t,
    o,
    i,
    s,
    r,
    n,
    e.viewOptions
  );
  if (!a) return;
  const c = V1(
    t,
    j1(e, t),
    Mi(Vs(a.jsonPath))
  );
  return c && fa(a, c);
}
function Bf(e, t, r) {
  const n = e.planContaining(t);
  return n ? hy(e, n, t, r) : K1(e, wn(t, r, e.viewOptions));
}
function G1(e) {
  const t = Kl(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = O();
  if (!w(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = Bf(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = Bf(e, o.getNode(), o.offset);
  if (a)
    return { start: s, end: a };
}
function gy(e, t, r) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && vt(i) ? nA(i, r.getMarker, r.viewOptions) : uu(t, r.getMarker, r.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(_e);
    return i && Ms(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(z);
  return n && Ss(n, r.getMarker, r.viewOptions)?.out;
}
function J1(e, t) {
  const r = mp({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = Ce();
        t.forEach((i) => n.append(Ei(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const Vf = "\0";
function my(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), L(r) && my(r.getChildren(), t);
  return t;
}
function Y1(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(Vf), a = my(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(Vf);
}
function ku(e, t = []) {
  for (const r of e)
    z(r) && t.push(r), L(r) && ku(r.getChildren(), t);
  return t;
}
function X1(e, t, r) {
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
function Q1(e, t) {
  return e.sentinels.filter(
    (n, i) => n.length > 0 && !t[i]?.some((s) => s !== void 0)
  ).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? fu(n, s.start, s.end) : n;
  }, e);
}
function pa(e, t, r, n, i, s, o) {
  const a = J1(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l } = a.getEditorState().read(() => ({
    settledCount: sn(
      Ce(),
      er(o.tier2.viewOptions)
    ).length,
    scratchFragment: gy(e, Ce().getChildren(), o.tier2)
  })), d = X1(
    r?.sentinels ?? [],
    s?.live,
    l?.sentinels ?? []
  );
  return {
    kind: e,
    liveNodes: t,
    liveFragment: r && d ? Q1(r, d) : r,
    liveCut: n,
    scratch: a,
    scratchFragment: l,
    settledCount: c,
    sentinelMap: d
  };
}
function Tu(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = ry(e, t);
  return r ? {
    liveFragment: fu(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function xu(e, t) {
  for (const r of e.noteGlyphRenames.values())
    sy(r, t);
}
function Z1(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = Tu(t, i), a = zs(e), c = /* @__PURE__ */ new Map();
  if (js([e], [a], c), xu(r, c), !da(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && Bs(t, c, r.huskKeys);
  return pa("note", [e], s, o, [a], l, n);
}
function eP(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = Tu(t, i), a = e.map(zs), c = /* @__PURE__ */ new Map();
  js(e, a, c), xu(r, c), ku(e).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => da(u, c, n.tier2, r.huskKeys, i)
  );
  const l = ny(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const d = t && Bs(t, c, r.huskKeys);
  return pa("para", e, s, o, l, d, n);
}
function tP(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = Tu(t, n), o = oy(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...Fi(e)];
  return pa("chapter", a, i, s, o, void 0, r);
}
function rP(e, t, r, n, i, s) {
  const o = zs(e), a = /* @__PURE__ */ new Map();
  js([e], [o], a), xu(n, a), ku([e]).filter((d) => n.noteScopes.has(d.getKey())).forEach(
    (d) => da(d, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const d of r) {
    const u = a.get(d.getKey());
    if (!u) continue;
    const f = u.siblings.indexOf(u.node);
    f < 0 || (cy(u.siblings, f), c.add(d.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Bs(t, a, c);
  return pa("para", [e], t, void 0, [o], l, i);
}
function nP(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function Wf(e) {
  return {
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (t) => t,
    settledToLiveTopIndex: (t) => ({ liveIndex: t, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e
  };
}
function Hf(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function iP(e, t) {
  const r = sn(Ce(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = Hf(r[o]), c = a && e.get(a.getKey());
    if (!c) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((u) => u.getKey()));
    let d = 0;
    for (; o + d < r.length; ) {
      const u = Hf(r[o + d]);
      if (!u || !l.has(u.getKey())) break;
      d += 1;
    }
    for (let u = 0; u < d; u += 1)
      n[o + u] = s;
    for (let u = 0; u < c.settledCount; u += 1)
      i.push({ liveIndex: o, plan: c, indexWithinScope: u });
    s += c.settledCount, o += d;
  }
  return { liveToSettled: n, settledToLive: i };
}
function Gf(e) {
  const t = ty(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), Wf(e.tier2.viewOptions);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = ay(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const h = f.liveNodes[0].getKey();
    n.set(h, f), f.liveNodes.forEach((y) => i.set(y.getKey(), f)), p && f.liveNodes.forEach((y) => s.set(y.getKey(), f));
  }, c = (f, p, h, y) => {
    o.add(f);
    const m = gy(p, h, e.tier2), T = Y1(
      p,
      h,
      m?.text ?? "",
      e.tier2,
      t
    ), S = e.cache.entries.get(f);
    if (S?.signature === T) return S.plan;
    const N = y(m);
    return N ? e.cache.entries.set(f, { signature: T, plan: N }) : e.cache.entries.delete(f), N;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => Z1(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => eP(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...Fi(f)],
        (p) => tP(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!(oe(p) || vt(p)) || nP(f, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(f), l.set(p.getKey(), h);
  }
  for (const [f, { para: p, husks: h }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (y) => rP(p, y, h, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0) return Wf(e.tier2.viewOptions);
  const { liveToSettled: d, settledToLive: u } = iP(
    s,
    er(e.tier2.viewOptions)
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
function sP({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ue(), n = Q({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Lo(s, e) || oP(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Ut,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = zc(r);
        Jf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: oo(s) === oo(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        Ce().getChildren().filter(We).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (zc(r) || Jf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: oo(a) === oo(c)
      }));
    };
    return Ze(
      ...[Pt, fr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      lr,
      () => {
        const i = n.current;
        return i.phase === "idle" && dP(i, cP()), !1;
      },
      Mt
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(lr, void 0));
    };
    return Ze(
      r.registerMutationListener(Ct, i),
      r.registerMutationListener(ft, i)
    );
  }, [r]), j(() => {
    const i = () => gP(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function oP(e, t, r) {
  if (aP(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = zc(t);
  (!n || n === r.book) && t.update(() => yy(t, r.chapterNum, r.verseNum));
}
function aP(e, t) {
  const r = e.pendingEchoes.findIndex((n) => Lo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function cP() {
  const e = O(), t = Sl(e);
  if (!t) return;
  const r = vu(), n = Rh(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Ol(t, e), { verseNum: o, verse: a } = rv(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function zc(e) {
  return e.getEditorState().read(() => vu()?.getCode() || void 0);
}
function vu() {
  return Ce().getChildren().find(ht);
}
function Jf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Xa(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Xa(e, t), e.phase = "navigating") : i && Xa(e, t), r && r !== e.scrRef.book && Ty(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Xa(e, t) {
  queueMicrotask(() => {
    t.update(
      () => yy(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function yy(e, t, r) {
  const n = O()?.clone();
  lP(t, r);
  const i = O();
  i && !(n && i.is(n)) && e.dispatchCommand(il, void 0);
}
function lP(e, t) {
  const r = Sl(O()), n = ql(r)?.getNumber(), i = Rh(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Fh(n) ? ky(t, n) : parseInt(n, 10) === t))
    return;
  const o = Ce().getChildren(), a = qh(o, e);
  if (!a) return;
  const c = dx(o, a), l = ix(c, !0);
  ux(c, l);
  let d;
  try {
    d = Xx(c, t);
  } catch {
    return;
  }
  d && (oe(d) ? !_(d.getFirstChild()) && Li(d) || Xt(d, 0) : uP(d));
}
function uP(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || Te(n)) {
    Xt(t, r);
    return;
  }
  const i = Yo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (_(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = L(n) && !z(n) ? by(n) : void 0;
  s ? s.select(0, 0) : Xt(t, r);
}
function by(e) {
  const t = e.getFirstChild();
  if (_(t)) return t;
  if (L(t) && !z(t)) return by(t);
}
function oo(e) {
  return e.read(() => {
    const t = Ce().getChildren().find(We);
    return `${vu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function dP(e, t) {
  e.phase !== "navigating" && t && (fP(t, e.scrRef) || Ty(e, pP(t, e.scrRef)));
}
function fP(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? ky(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function ky(e, t) {
  try {
    return Ml(e, t);
  } catch {
    return !1;
  }
}
function pP(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const hP = 8;
function Ty(e, t) {
  return Lo(t, e.scrRef) || e.pendingEchoes.some((r) => Lo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > hP && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Lo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function gP(e) {
  e.phase = "idle";
}
function mP(e) {
  return ht(e) ? `${e.__code}` : _e(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : Ds(e) ? `${e.__marker} "${e.__number}"` : hr(e) ? `${e.__caller}` : zn(e) ? `${e.__marker} "${e.__number}"` : z(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : oe(e) ? `${e.__marker}` : _(e) ? `"${e.__text}"${yP(e)}` : be(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ae(e) ? `${e.__marker} "${e.__number}"` : "";
}
function yP(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ns]) : "";
}
function bP() {
  const [e] = ue();
  return /* @__PURE__ */ v(
    Sb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: mP,
      editor: e
    }
  );
}
const xy = ip(null), Yf = 4;
function kP({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Q(null), s = sp(xy);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ v("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function TP({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = he(), [s, o] = he(), a = fe(
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
  }, [n, s]), /* @__PURE__ */ v(xy.Provider, { value: l, children: /* @__PURE__ */ v("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function xP({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Q(null), c = Q(null), [l, d] = he(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: y } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Yf}px`, p.style.left = `${Math.min(y, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (h) => {
        const y = h.target;
        o && a.current && a.current.contains(y) || f.contains(y) || d(!1);
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
          const { top: y } = p.getBoundingClientRect(), m = y + p.offsetHeight + Yf;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Me(Tn, { children: [
    /* @__PURE__ */ Me(
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
    l && kn(
      /* @__PURE__ */ v(TP, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const jc = {
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
}, Bc = {
  ...jc,
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
function vP({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ v(
    xP,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + _P(t),
      buttonLabel: CP(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(jc).map((n) => /* @__PURE__ */ Me(
        kP,
        {
          className: "item block-marker " + SP(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ v("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ v("span", { className: "text usfm_" + n, children: jc[n] })
          ]
        },
        n
      ))
    }
  );
}
function _P(e) {
  return e && e in Bc ? e : "ban";
}
function CP(e) {
  return e && e in Bc ? Bc[e] : "No Style";
}
function SP(e) {
  return e ? "active dropdown-item-active" : "";
}
function Xf() {
  return /* @__PURE__ */ v("div", { className: "divider" });
}
const MP = Ln(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ue(), [o, a] = he(s), [c, l] = he(), [d, u] = he(!1), [f, p] = he(!1), h = fe(
    ({
      canUndo: y,
      canRedo: m,
      blockMarker: T,
      contextMarker: S
    }) => {
      u(y), p(m), l(T), n?.({
        canUndo: y,
        canRedo: m,
        blockMarker: T,
        contextMarker: S
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    lr,
    (y, m) => (a(m), !1),
    xr
  ), [s]), /* @__PURE__ */ Me(Tn, { children: [
    /* @__PURE__ */ v(qg, { onStateChange: h }),
    /* @__PURE__ */ Me("div", { className: "toolbar", children: [
      /* @__PURE__ */ v(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(bp, void 0);
          },
          title: fo ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ v("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ v(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(kp, void 0);
          },
          title: fo ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ v("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ v(Xf, {}),
      o === s && /* @__PURE__ */ Me(Tn, { children: [
        /* @__PURE__ */ v(
          vP,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ v(Xf, {})
      ] }),
      /* @__PURE__ */ v("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), EP = ta(), AP = {}, PP = {};
function NP() {
  return /* @__PURE__ */ v("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Qf(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
const vy = Ln(function({
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
  const u = Q(null), f = Q(null), p = Q(null), h = Q(t), y = Q(!1), m = Q(void 0), T = Q(void 0), S = Q(void 0), N = Q({ entries: /* @__PURE__ */ new Map() }), R = Q(0), E = Q(!0), C = Q(void 0), M = Q(!1), [q, J] = he(t), [H, re] = he(0), [ae, ce] = he(), {
    isReadonly: me = !1,
    structureProtectionMode: qe = "off",
    hasExternalUI: Z = !1,
    hasSpellCheck: K = !1,
    textDirection: ne = "ltr",
    markerMenuTrigger: Re = "\\",
    view: ot,
    nodes: zt,
    debug: pe = !1,
    contextMenu: jt,
    styleInfo: Nt,
    markerSettleDelayMs: ha
  } = a ?? PP, tr = ot ?? EP, Vn = vs(tr) && (tr.markerMode !== "hidden" || !tr.hasSpacing || tr.hasGutterParaMarkers || tr.hasActiveTextFocusBox) ? {
    ...tr,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : tr, Ki = Q(Vn);
  wt(Ki.current, Vn) || (Ki.current = Vn);
  const ie = Ki.current, ut = De(() => zt ?? AP, [zt]), Ws = De(() => jt, [jt]), ve = De(
    () => zx(Nt ?? So),
    [Nt]
  ), gr = Q(c);
  wt(gr.current, c) || (gr.current = c);
  const Y = gr.current, Ye = vs(ie), ye = me || Ye, $r = Vn !== tr;
  j(() => {
    Ye && !me && Y?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), $r && Y?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [Ye, me, $r, Y]);
  const Ir = Q(null), rr = De(() => {
    if (ie.markerMode !== "editable") return;
    const A = Nt ?? So;
    return {
      getContext: () => Ir.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (D) => VE(
        A,
        D,
        ut.extraValidMarkers
      ),
      getEnterItems: (D) => WE(
        A,
        D,
        ut.extraValidMarkers
      ),
      apply: (D, B) => {
        const W = Ir.current;
        W && (B.trigger === "enter" ? W.splitParagraphWithMarker(D.marker) : W.applyMarkerMenuSelection(D, B));
      },
      commitTypedCloser: (D) => {
        Ir.current?.commitTypedCloser(D);
      }
    };
  }, [ie, Nt, ut.extraValidMarkers]), Wn = (A) => {
    M.current || (M.current = !0, gr.current?.warn(
      `Editor: cannot ${A} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Hn = (A) => {
    if (Ye)
      throw new Error(
        `Cannot ${A} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Lr = (A) => {
    if (Hn(A), ye) throw new Error(`Cannot ${A} in readonly mode`);
  }, an = De(
    () => [Je, ...Ye ? b_ : Wl],
    [Ye]
  ), nr = De(
    () => ({
      namespace: "platformEditor",
      theme: { ...lm, showCharMarkerTitles: ie.showCharMarkerTitles },
      editable: !ye,
      editorState: void 0,
      // Handling of errors during update
      onError(A) {
        throw A;
      },
      nodes: an
    }),
    [ye, an, ie.showCharMarkerTitles]
  );
  to.initialize(Y);
  function gt(A) {
    if (A !== void 0 && !pE(A, ut.extraValidMarkers))
      throw new Error(`Unsupported character marker '${A}'`);
  }
  const Bt = fe(() => {
    const A = u.current;
    if (!A) return h.current;
    const D = () => {
      if (!y.current) return;
      const yr = to.deserializeEditorState(A.getEditorState(), ie);
      yr && (h.current = yr, y.current = !1);
    }, B = Ra(A), W = T.current;
    if ((!B || B.size === 0) && !W)
      return D(), h.current;
    const de = A.getEditorState(), Be = de.toJSON(), Ge = de.read(
      () => A1(
        Be,
        B ?? /* @__PURE__ */ new Set(),
        { viewOptions: ie, getMarker: ve, logger: Y },
        W,
        S.current
      )
    );
    return Ge || (D(), h.current);
  }, [ie, ve, Y]), Vt = fe(() => {
    const A = u.current;
    if (!A) return;
    const D = {
      pendedKeys: Ra(A) ?? /* @__PURE__ */ new Set(),
      transientInput: T.current,
      lastKnownCaret: S.current,
      tier2: { viewOptions: ie, getMarker: ve, logger: Y },
      nodes: an,
      cache: N.current
    };
    return so(D) && D.cache.entries.clear(), D;
  }, [ie, ve, Y, an]), Dr = fe(
    (A) => {
      const D = u.current, B = Vt();
      if (!(!D || !B))
        return so(B) ? A : D.getEditorState().read(() => {
          const W = Gf(B);
          return F1(B, W, A);
        });
    },
    [Vt]
  );
  j(() => (E.current = !0, () => {
    E.current = !1;
  }), []);
  const Ur = fe(
    (A, D) => A.read(() => {
      const B = Vt(), W = B && G1(Gf(B));
      return !W && !Ye && w(O()) && Y?.warn(
        `${D} refused: the selection could not be expressed against the document the host is reading`
      ), W;
    }),
    [Vt, Ye, Y]
  ), zi = fe(
    (A) => {
      if (!i) return;
      const D = u.current, B = Vt();
      R.current += 1;
      const W = R.current;
      if (!D || !B || so(B)) {
        i(A);
        return;
      }
      queueMicrotask(() => {
        if (!E.current || W !== R.current || u.current !== D) return;
        const de = Ur(D, "onSelectionChange");
        W === R.current && i(de);
      });
    },
    [i, Vt, Ur]
  ), mr = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const A = u.current?.getRootElement();
      return !!A && A.ownerDocument.activeElement === A;
    },
    undo() {
      u.current?.dispatchCommand(bp, void 0);
    },
    redo() {
      u.current?.dispatchCommand(kp, void 0);
    },
    cut() {
      Lr("cut"), u.current?.dispatchCommand(_n, null);
    },
    copy() {
      u.current?.dispatchCommand(jo, null);
    },
    paste() {
      Lr("paste"), u.current && Yl(u.current);
    },
    pastePlainText() {
      Lr("paste as plain text"), u.current && Xl(u.current);
    },
    getUsj() {
      return Bt();
    },
    commitPendingMarkerEdits() {
      u.current?.update(
        () => {
          u.current?.dispatchCommand(Ym, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(A) {
      if (!A) {
        T.current = void 0;
        return;
      }
      const D = u.current?.getEditorState().read(() => {
        const B = O();
        return w(B) && B.isCollapsed() ? B.focus.key : void 0;
      });
      T.current = { input: A, nodeKey: D ?? S.current?.key };
    },
    setUsj(A) {
      if (!wt(h.current, A)) {
        h.current = A, T.current = void 0;
        const D = wt(q, A);
        J(A), D && re((B) => B + 1);
      }
    },
    applyUpdate(A, D = "remote") {
      if (Ye && D === "remote") {
        gr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Hn("apply an update"), u.current?.update(
        () => {
          D === "remote" && Cn(fi), F_(A, ie, ut, Y);
        },
        { discrete: !0 }
      );
      const B = u.current?.getEditorState();
      if (!B) return;
      const W = to.deserializeEditorState(B, ie);
      if (W) {
        const de = !wt(h.current, W);
        if (de && (h.current = W), de || !wt(q, W)) {
          const Be = Td(A, B, "apply");
          C.current = W, s?.(W, A, D, Be);
        }
      }
    },
    replaceEmbedUpdate(A, D) {
      const B = u.current?.read(() => hv(A, D));
      B ? this.applyUpdate(B) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${A}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (Ye) {
        Wn("get the selection");
        return;
      }
      const A = u.current;
      if (!A) return;
      A.read(() => {
      });
      const D = Vt();
      return !D || so(D) ? A.read(() => Kl(ie)) : Ur(A, "getSelection");
    },
    setSelection(A) {
      if (Ye) {
        Wn("set the selection");
        return;
      }
      const D = Dr(A);
      if (!D) {
        Y?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      u.current?.update(() => {
        const B = Fl(D, ie);
        B !== void 0 && (xn(B), (!Ai().isEditable() || Qf(B.anchor) && Qf(B.focus)) && u.current?.dispatchCommand(lr, void 0));
      });
    },
    setAnnotation(A, D, B, W, de) {
      if (Ye) {
        Wn("set an annotation");
        return;
      }
      let Be, Ge, yr, ji;
      typeof W == "function" || W === void 0 ? (Be = W, Ge = de) : (Be = W.onClick, Ge = W.onRemove, yr = W.onMouseEnter, ji = W.onMouseLeave);
      const Bi = Dr(A);
      if (!Bi) {
        Y?.warn(
          `setAnnotation refused for ${D} "${B}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        Bi,
        Gu(D),
        B,
        Be,
        Ge,
        yr,
        ji
      );
    },
    removeAnnotation(A, D) {
      f.current?.removeAnnotation(Gu(A), D);
    },
    formatPara(A) {
      Lr("format a paragraph"), u.current?.update(() => {
        const D = O();
        if (!w(D)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${A}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        Ab(D, () => ys(A));
        const B = O();
        if (!w(B)) return;
        const W = /* @__PURE__ */ new Set();
        B.getNodes().forEach((de) => {
          const Be = de.getTopLevelElement();
          oe(Be) && W.add(Be);
        }), W.forEach((de) => $m(de, A, ie));
      });
    },
    getElementByKey(A) {
      return u.current?.read(
        () => u.current?.getElementByKey(A) ?? void 0
      );
    },
    removeCharacterMarker(A) {
      if (ye) throw new Error("Cannot remove character marker in readonly mode");
      gt(A);
      let D = !1;
      return u.current?.update(
        () => {
          const B = O();
          w(B) && (D = nm(B, A, ie));
        },
        { discrete: !0 }
      ), D;
    },
    replaceCharacterMarker(A, D) {
      if (ye) throw new Error("Cannot replace character marker in readonly mode");
      gt(A), gt(D);
      let B = !1;
      return u.current?.update(
        () => {
          const W = O();
          w(W) && (B = SE(W, A, D));
        },
        { discrete: !0 }
      ), B;
    },
    extendCharacterMarker(A, D) {
      if (ye) throw new Error("Cannot extend character marker in readonly mode");
      gt(A), D?.forEach(
        (W) => gt(W)
      );
      let B = !1;
      return u.current?.update(
        () => {
          const W = O();
          w(W) && (B = ME(
            W,
            A,
            D,
            ie
          ));
        },
        { discrete: !0 }
      ), B;
    },
    insertMarker(A) {
      if (ye) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!Nc(A, ut.extraValidMarkers))
        throw new Error(`Unsupported marker '${A}'`);
      const D = wc(
        A,
        m,
        ie,
        ut,
        Y,
        void 0,
        Nt
      );
      return D.action({ editor: u.current, reference: r }), D.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!me)
        return u.current?.getEditorState().read(() => $A());
    },
    applyMarkerMenuSelection(A, D) {
      if (me) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (A.kind !== "closeTag" && !Nc(A.marker, ut.extraValidMarkers))
        throw new Error(`Unsupported marker '${A.marker}'`);
      let B;
      return u.current.update(() => {
        B = FA(A, D, r, {
          expandedNoteKeyRef: m,
          viewOptions: ie,
          nodeOptions: ut,
          logger: c,
          styleInfo: Nt
        });
      }), B;
    },
    splitParagraphWithMarker(A) {
      if (me) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        Km(A, ie);
      });
    },
    commitTypedMarker(A, D) {
      if (me) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let B = !1;
      return u.current.update(() => {
        B = UA(A, D), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(A) {
      if (me) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let D = !1;
      return u.current.update(() => {
        D = Fm(A), D || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), D;
    },
    insertNote(A, D, B) {
      Lr("insert a note");
      const W = B && Dr(B);
      if (B && !W) {
        Y?.warn(
          `insertNote refused for \\${A}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      u.current?.update(() => {
        const de = pg(
          A,
          D,
          W,
          r,
          ie,
          ut,
          Y
        );
        de && !de.getIsCollapsed() && (m.current = de.getKey());
      });
    },
    selectNote(A) {
      u.current?.update(() => {
        const D = wd(A);
        D && (g_(D, ie), D.getIsCollapsed() || (m.current = D.getKey()));
      });
    },
    getNoteOps(A) {
      return u.current?.read(() => {
        const D = wd(A);
        if (D)
          return $l(D);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Ir.current = mr, Wc(d, () => mr), j(() => {
    const A = u.current;
    if (A)
      return A.registerUpdateListener(({ editorState: D }) => {
        D.read(() => {
          const B = O();
          if (!w(B) || !B.isCollapsed()) return;
          const W = B.focus.getNode();
          _(W) && (S.current = { key: W.getKey(), offset: B.focus.offset });
        });
      });
  }, []), j(() => {
    const A = u.current;
    if (A)
      return A.registerUpdateListener(({ tags: D, dirtyElements: B, dirtyLeaves: W }) => {
        B.size === 0 && W.size === 0 || D.has(nl) || D.has(fi) || Ku.some((de) => D.has(de)) && (y.current = !0);
      });
  }, []);
  const Gn = fe(
    (A, D, B, W) => {
      if (Ye) return;
      const de = to.deserializeEditorState(A, ie);
      if (de) {
        const Be = !wt(h.current, de);
        if (Be && (h.current = de), Be || !wt(q, de)) {
          const Ge = Td(W, A);
          C.current = de, s?.(de, W, "local", Ge);
        }
      }
    },
    [q, s, ie, Ye]
  );
  j(() => {
    const A = u.current;
    if (!(!A || !s))
      return A.registerUpdateListener(({ tags: D, dirtyElements: B, dirtyLeaves: W }) => {
        !D.has(el) && (B.size === 0 && W.size === 0 || D.has(fi) || !Ra(A)?.size) || queueMicrotask(() => {
          const de = Bt();
          !de || wt(C.current, de) || (C.current = de, s(de, void 0, "local", void 0));
        });
      });
  }, [s, Bt]);
  const cn = fe(
    (A) => {
      ce(A.contextMarker), o?.(A);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Me(xp, { initialConfig: nr, children: [
      /* @__PURE__ */ v(UC, { isEditable: !ye }),
      /* @__PURE__ */ Me("div", { className: "editor-container", children: [
        Z ? /* @__PURE__ */ v(qg, { onStateChange: cn }) : /* @__PURE__ */ v(
          "div",
          {
            className: "editor-toolbar-container" + (ye ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ v(
              MP,
              {
                ref: p,
                editorRef: Ir,
                isReadonly: ye,
                onStateChange: cn
              }
            )
          }
        ),
        /* @__PURE__ */ Me("div", { className: "editor-inner", children: [
          /* @__PURE__ */ v(_p, { editorRef: u }),
          /* @__PURE__ */ v(
            Eb,
            {
              contentEditable: /* @__PURE__ */ v(
                vp,
                {
                  className: `editor-input usfm ${Yv(ie).join(" ")}${ie.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ie.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: K
                }
              ),
              placeholder: /* @__PURE__ */ v(NP, {}),
              ErrorBoundary: Cp
            }
          ),
          Z && /* @__PURE__ */ v(DC, {}),
          /* @__PURE__ */ v(Sp, {}),
          r && n && /* @__PURE__ */ v(sP, { scrRef: r, onScrRefChange: n }),
          r && !Z && /* @__PURE__ */ v(
            lM,
            {
              trigger: Re,
              scrRef: r,
              contextMarker: ae,
              getMarkerAction: (A) => wc(
                A,
                m,
                ie,
                ut,
                Y,
                void 0,
                Nt
              ),
              editableHarness: rr
            }
          ),
          /* @__PURE__ */ v(
            zC,
            {
              scripture: q,
              scriptureRef: h,
              nodeOptions: ut,
              editorAdaptor: Zr,
              viewOptions: ie,
              logger: Y
            },
            H
          ),
          /* @__PURE__ */ v(cS, { onChange: zi, viewOptions: ie }),
          /* @__PURE__ */ v(
            D_,
            {
              onChange: Gn,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Ku
            }
          ),
          /* @__PURE__ */ v(wE, { viewOptions: ie }),
          /* @__PURE__ */ v(I_, { ref: f, logger: Y, viewOptions: ie }),
          /* @__PURE__ */ v(fC, { viewOptions: ie }),
          /* @__PURE__ */ v(MC, {}),
          /* @__PURE__ */ v(OC, {}),
          ie?.markerMode !== "editable" && /* @__PURE__ */ v(qC, { logger: Y }),
          /* @__PURE__ */ v(LC, { options: Ws }),
          /* @__PURE__ */ v(KC, {}),
          /* @__PURE__ */ v(KA, {}),
          /* @__PURE__ */ v(
            m1,
            {
              viewOptions: ie,
              getMarker: ve,
              logger: Y,
              markerSettleDelayMs: ha
            }
          ),
          /* @__PURE__ */ v(
            v1,
            {
              styleInfo: Nt,
              viewOptions: ie,
              logger: Y
            }
          ),
          /* @__PURE__ */ v(
            jC,
            {
              expandedNoteKeyRef: m,
              nodeOptions: ut,
              viewOptions: ie,
              logger: Y
            }
          ),
          /* @__PURE__ */ v(aS, {}),
          /* @__PURE__ */ v(aC, {}),
          /* @__PURE__ */ v(nC, {}),
          /* @__PURE__ */ v(P1, { viewOptions: ie, logger: Y }),
          /* @__PURE__ */ v(lS, {}),
          /* @__PURE__ */ v(YS, { structureProtectionMode: qe }),
          /* @__PURE__ */ v(XS, { textDirection: ne }),
          /* @__PURE__ */ v(ZS, {}),
          /* @__PURE__ */ v(aM, {}),
          l
        ] }),
        pe && /* @__PURE__ */ v(bP, {})
      ] })
    ] }, ie.verseLayout ?? "inline")
  );
}), I0 = Ln(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ v(vy, { ref: r, ...i });
});
function _y() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Do(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? _y() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Cy(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? _y() : r,
    quote: e,
    type: "thread"
  };
}
function Zf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function wP(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Qa(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class OP {
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
    this._comments = t, Qa(this);
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
          const c = Zf(a);
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
    this._comments = i, Qa(this);
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
          const c = Zf(a);
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
    return this._comments = n, Qa(this), t.type === "comment" ? {
      index: s,
      markedComment: wP(t)
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
    return t !== null ? t.doc.get("comments", Du) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Uu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Du();
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
      jb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Mt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Bb) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const h = p.insert, y = p.retain, m = p.delete, T = d.parent, S = d === r ? void 0 : T instanceof Uu && this._comments.find((N) => N.id === T.get("id"));
              if (Array.isArray(h)) {
                const N = f;
                h.slice().reverse().forEach((R) => {
                  const E = R.get("id"), M = R.get("type") === "thread" ? Cy(
                    R.get("quote"),
                    R.get("comments").toArray().map(
                      (q) => Do(
                        q.get("content"),
                        q.get("author"),
                        q.get("id"),
                        q.get("timeStamp"),
                        q.get("deleted")
                      )
                    ),
                    E
                  ) : Do(
                    R.get("content"),
                    R.get("author"),
                    E,
                    R.get("timeStamp"),
                    R.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(M, S, N);
                  });
                });
              } else if (typeof y == "number")
                f += y;
              else if (typeof m == "number")
                for (let N = 0; N < m; N++) {
                  const R = S === void 0 || S === !1 ? this._comments[f] : S.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(R, S);
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
function qP(e) {
  const [t, r] = he(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function RP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Q(null);
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
  }, [n, e]), /* @__PURE__ */ v("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Me("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function $P({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return kn(
    /* @__PURE__ */ v(RP, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Sy() {
  const [e, t] = he(null), r = fe(() => {
    t(null);
  }, []), n = De(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ v($P, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = fe(
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
const IP = {
  ...lm,
  paragraph: "CommentEditorTheme__paragraph"
};
function LP(...e) {
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
      className: LP(
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
function DP({
  className: e
}) {
  return /* @__PURE__ */ v(vp, { className: e || "ContentEditable__root" });
}
function UP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ v("div", { className: t || "Placeholder__root", children: e });
}
const ep = Gc("INSERT_INLINE_COMMAND");
function FP({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Q(null), s = fe(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), As(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ v("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ v("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ v("i", { className: "icon add-comment" }) }) });
}
function KP({ onEscape: e }) {
  const [t] = ue();
  return j(() => t.registerCommand(
    yp,
    (r) => e(r),
    di
  ), [t, e]), null;
}
function My({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ v(xp, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: IP
  }, children: /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ v(
      Fb,
      {
        contentEditable: /* @__PURE__ */ v(DP, { className: e }),
        placeholder: /* @__PURE__ */ v(UP, { children: s }),
        ErrorBoundary: Cp
      }
    ),
    /* @__PURE__ */ v(Ub, { onChange: n }),
    /* @__PURE__ */ v(Sp, {}),
    t !== !1 && /* @__PURE__ */ v(Ib, {}),
    /* @__PURE__ */ v(KP, { onEscape: r }),
    /* @__PURE__ */ v(Lb, {}),
    i !== void 0 && /* @__PURE__ */ v(_p, { editorRef: i })
  ] }) });
}
function Ey(e, t) {
  return fe(
    (r, n) => {
      r.read(() => {
        e(Kb()), t(!zb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function zP({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Q(null), c = De(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Q(null), d = Py(), u = fe(() => {
    e.getEditorState().read(() => {
      const y = O();
      if (w(y)) {
        l.current = y.clone();
        const m = y.anchor, T = y.focus, S = Pb(
          e,
          m.getNode(),
          m.offset,
          T.getNode(),
          T.offset
        ), N = a.current;
        if (S !== null && N !== null) {
          const { left: R, bottom: E, width: C } = S.getBoundingClientRect(), M = Nb(e, S);
          let q = M.length === 1 ? R + C / 2 - 125 : R - 125;
          q < 10 && (q = 10), N.style.left = `${q}px`, N.style.top = `${E + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const J = M.length, { container: H } = c, re = c.elements, ae = re.length;
          for (let ce = 0; ce < J; ce++) {
            const me = M[ce];
            let qe = re[ce];
            qe === void 0 && (qe = document.createElement("span"), re[ce] = qe, H.appendChild(qe));
            const K = `position:absolute;top:${me.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${me.left}px;height:${me.height}px;width:${me.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            qe.style.cssText = K;
          }
          for (let ce = ae - 1; ce >= J; ce--) {
            const me = re[ce];
            H.removeChild(me), re.pop();
          }
        }
      }
    });
  }, [e, c]);
  As(() => {
    u();
    const y = c.container, m = document.body;
    return m !== null ? (m.appendChild(y), () => {
      m.removeChild(y);
    }) : () => {
    };
  }, [c.container, u]), j(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (y) => (y.preventDefault(), t(), !0), p = () => {
    if (s) {
      let y = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      y.length > 100 && (y = y.slice(0, 99) + "…"), r(
        Cy(y, [Do(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = Ey(i, o);
  return /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ v(
      My,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ v(tn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ v(
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
function jP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Q(null), c = Py(), l = Ey(i, o);
  return /* @__PURE__ */ Me(Tn, { children: [
    /* @__PURE__ */ v(
      My,
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
            e(Do(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(Tb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ v("i", { className: "send" })
      }
    )
  ] });
}
function Ay({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Me(Tn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Me("div", { className: "Modal__content", children: [
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
function tp({
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Sy();
  return /* @__PURE__ */ Me("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ v("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Me("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ v("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Me(Tn, { children: [
      /* @__PURE__ */ v(
        tn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ v(
              Ay,
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
function BP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ue(), [a, c] = he(0), [l, d] = Sy(), u = De(
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
  }, [a]), /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Me(
      "li",
      {
        onClick: () => {
          const y = s.get(p);
          if (y !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const m = document.activeElement;
            o.update(
              () => {
                const T = Array.from(y)[0], S = X(T);
                be(S) && S.selectStart();
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
          /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Me("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ v("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ v(
              tn,
              {
                onClick: () => {
                  d("Delete Thread", (y) => /* @__PURE__ */ v(
                    Ay,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: y
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ v("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((y) => /* @__PURE__ */ v(
            tp,
            {
              comment: y,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            y.id
          )) }),
          /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ v(
            jP,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ v(
      tp,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function VP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Q(null), o = r.length === 0;
  return /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ v("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ v(
      BP,
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
function Py() {
  const e = Mp(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function WP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Mp(), [a] = ue(), c = De(() => {
    const q = new OP(a, s);
    return r && q.registerOnChange(r), t?.(q), q;
  }, [a, s, r, t]), l = qP(c), d = De(() => /* @__PURE__ */ new Map(), []), [u, f] = he(), [p, h] = he([]), [y, m] = he(!1), [T, S] = he(!1), { yjsDocMap: N } = o;
  j(() => {
    if (e) {
      const q = e("comments", N);
      return c.registerCollaboration(q);
    }
    return () => {
    };
  }, [c, e, N]);
  const R = fe(() => {
    a.update(() => {
      const q = O();
      q !== null && (q.dirty = !0);
    }), m(!1);
  }, [a]), E = fe(
    (q, J) => {
      if (q.type === "comment") {
        const H = c.deleteCommentOrThread(q, J);
        if (!H)
          return;
        const { markedComment: re, index: ae } = H;
        c.addComment(re, J, ae);
      } else {
        c.deleteCommentOrThread(q);
        const H = J !== void 0 ? J.id : q.id, re = d.get(H);
        re !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ae of re) {
              const ce = X(ae);
              be(ce) && (ce.deleteID(Wr, H), ce.hasNoIDsForEveryType() && yo(ce));
            }
          });
        });
      }
    },
    [c, a, d]
  ), C = fe(
    (q, J, H, re) => {
      c.addComment(q, H), J && (a.update(() => {
        w(re) && cl(re, Wr, q.id);
      }), m(!1));
    },
    [c, a]
  );
  j(() => {
    const q = [];
    let J;
    for (const H of p) {
      const re = d.get(H);
      if (re !== void 0)
        for (const ae of re) {
          const ce = a.getElementByKey(ae);
          ce !== null && (ce.classList.add("selected"), q.push(ce), J = window.setTimeout(() => {
            S(!0);
          }, 0));
        }
    }
    return () => {
      J !== void 0 && window.clearTimeout(J);
      for (const H of q)
        H.classList.remove("selected");
    };
  }, [p, a, d]), j(() => {
    if (!a.hasNodes([Je]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const q = /* @__PURE__ */ new Map();
    return Ze(
      tl(
        a,
        Je,
        (J) => Mn(J.getTypedIDs()),
        (J, H) => {
          for (const [re, ae] of Object.entries(J.getTypedIDs()))
            ae.forEach((ce) => {
              H.addID(re, ce);
            });
        }
      ),
      a.registerMutationListener(
        Je,
        (J) => {
          a.getEditorState().read(() => {
            for (const [H, re] of J) {
              const ae = X(H);
              let ce = [];
              re === "destroyed" ? ce = q.get(H) ?? [] : be(ae) && (ce = ae.getTypedIDs()[Wr] ?? []);
              for (const me of ce) {
                let qe = d.get(me);
                q.set(H, ce), re === "destroyed" ? qe !== void 0 && (qe.delete(H), qe.size === 0 && d.delete(me)) : (qe === void 0 && (qe = /* @__PURE__ */ new Set(), d.set(me, qe)), qe.has(H) || qe.add(H));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: J, tags: H }) => {
        J.read(() => {
          const re = O();
          let ae = !1, ce = !1;
          if (w(re)) {
            const me = re.anchor.getNode();
            if (_(me)) {
              const qe = Nk(me, Wr, re.anchor.offset) ?? [];
              qe !== null && (h(qe), ae = !0), re.isCollapsed() || (f(me.getKey()), ce = !0);
            }
          }
          ae || h((me) => me.length === 0 ? me : []), ce || f(null), !H.has("collaboration") && w(re) && m(!1);
        });
      }),
      a.registerCommand(
        ep,
        () => {
          const J = window.getSelection();
          return J !== null && J.removeAllRanges(), m(!0), !0;
        },
        vn
      )
    );
  }, [a, d]);
  const M = () => {
    a.dispatchCommand(ep, void 0);
  };
  return /* @__PURE__ */ Me(Tn, { children: [
    y && kn(
      /* @__PURE__ */ v(
        zP,
        {
          editor: a,
          cancelAddComment: R,
          submitAddComment: C
        }
      ),
      document.body
    ),
    u != null && !y && kn(
      /* @__PURE__ */ v(
        FP,
        {
          anchorKey: u,
          editor: a,
          showComments: T,
          onAddComment: M
        }
      ),
      document.body
    ),
    n !== null && kn(
      /* @__PURE__ */ v(
        tn,
        {
          className: `CommentPlugin_ShowCommentsButton ${T ? "active" : ""}`,
          onClick: () => S(!T),
          title: T ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ v("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    T && kn(
      /* @__PURE__ */ v(
        VP,
        {
          comments: l,
          submitAddComment: C,
          deleteCommentOrThread: E,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function HP() {
  const e = Q(void 0), t = fe((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function GP(e, t) {
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
function JP(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      GP(r, t);
    };
  }, [t, e]);
}
const L0 = Ln(function(t, r) {
  const n = Q(null), i = Q(!0), s = Q(null), [o, a] = he(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: h, view: y } = {} } = t, m = (h ?? !1) || vs(y), [T, S] = HP();
  JP(f, T), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(E), p || console.warn(E);
    }
  }, [p]), Wc(r, () => ({
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
    applyUpdate(E, C) {
      n.current?.applyUpdate(E, C);
    },
    replaceEmbedUpdate(E, C) {
      return n.current?.replaceEmbedUpdate(E, C);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(E) {
      n.current?.setSelection(E);
    },
    setAnnotation(E, C, M, q, J) {
      typeof q == "function" || q === void 0 ? n.current?.setAnnotation(E, C, M, q, J) : n.current?.setAnnotation(E, C, M, q);
    },
    removeAnnotation(E, C) {
      n.current?.removeAnnotation(E, C);
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
    replaceCharacterMarker(E, C) {
      return n.current?.replaceCharacterMarker(E, C) ?? !1;
    },
    extendCharacterMarker(E, C) {
      return n.current?.extendCharacterMarker(E, C) ?? !1;
    },
    insertMarker(E) {
      return n.current?.insertMarker(E);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(E, C) {
      return n.current?.applyMarkerMenuSelection(E, C);
    },
    splitParagraphWithMarker(E) {
      n.current?.splitParagraphWithMarker(E);
    },
    commitTypedMarker(E, C) {
      return n.current?.commitTypedMarker(E, C) ?? !1;
    },
    commitTypedCloser(E) {
      return n.current?.commitTypedCloser(E) ?? !1;
    },
    insertNote(E, C, M) {
      n.current?.insertNote(E, C, M);
    },
    selectNote(E) {
      n.current?.selectNote(E);
    },
    getNoteOps(E) {
      return n.current?.getNoteOps(E);
    },
    setComments(E) {
      T.current?.setComments(E), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const N = fe(
    (E, C, M, q) => {
      if (!d) return;
      const J = T.current?.getComments();
      d(E, J, C, M, q);
    },
    [T, d]
  ), R = fe(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = T.current?.getComments();
    l(E);
  }, [T, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ v(Db, { children: /* @__PURE__ */ Me(vy, { ref: n, onUsjChange: N, ...f, children: [
    /* @__PURE__ */ v(
      WP,
      {
        setCommentStore: S,
        onChange: R,
        showCommentsContainerRef: m ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ v("div", { ref: s, className: "comment-container" })
  ] }) });
});
function bn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function Ny(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function YP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const XP = /^[#\w().,%/\s-]+$/;
function kr(e) {
  return e != null;
}
const QP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, ZP = {
  left: "right",
  right: "left"
}, Vc = ".editor-input.usfm", e0 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function t0(e) {
  return e0.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Vc}".`
  ), Vc);
}
function r0(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${Ny(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (XP.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), kr(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), kr(t.firstLineIndent) && i.push(`text-indent: ${bn(t.firstLineIndent * 20 * r)}vw`), kr(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${bn(t.leftMargin * 20 * r)}vw`), kr(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${bn(t.rightMargin * 20 * r)}vw`
  ), kr(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${bn(t.spaceBefore * r)}pt`), kr(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${bn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = QP[n ? ZP[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const rp = { c: 150, ca: 133, cp: 150 };
function np(e, t) {
  return e && kr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function n0(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && kr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = np(e.markers.c, rp.c);
  return ["ca", "cp"].map((i) => {
    const s = np(
      e.markers[i],
      rp[i]
    ), o = bn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function D0(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Vc } = t, s = t0(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${Ny(e.defaultFont)}"`), kr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${bn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = r0(c, l, r, n);
    d.length > 0 && o.push(`${s} .usfm_${YP(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...n0(e, s)), o.join(`
`);
}
export {
  lg as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  I0 as Editorial,
  ho as GENERATOR_NOTE_CALLER,
  Ap as HIDDEN_NOTE_CALLER,
  L0 as Marginal,
  b as MarkerType,
  ag as PARAGRAPH_STRUCTURE_VIEW_MODE,
  cg as STANDARD_VIEW_MODE,
  So as defaultStyleInfo,
  $0 as directionToNames,
  E_ as filterAndRankItems,
  D0 as generateUsjCss,
  q0 as getDefaultViewMode,
  ta as getDefaultViewOptions,
  WE as getEnterMenuItems,
  VE as getMarkerMenuItems,
  R0 as getViewMode,
  ug as getViewOptions,
  vs as isBlockVerseLayout,
  Br as isInsertEmbedOpOfType,
  Wv as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
