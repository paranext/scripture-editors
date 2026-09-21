import { jsx as _, jsxs as Ce, Fragment as Tn } from "react/jsx-runtime";
import { forwardRef as $n, useState as pe, useRef as X, useCallback as de, useEffect as j, useMemo as De, memo as Dy, createContext as Df, useContext as Uf, Children as Uy, isValidElement as Fy, cloneElement as Ky, useImperativeHandle as Fc, useLayoutEffect as Ts } from "react";
import { assertSafeKey as Ve, isValidBookCode as zy, MARKER_OBJECT_PROPS as jy, USJ_VERSION as kr, USJ_TYPE as Tr, isUsjTextContentLocation as Kc, indexesFromUsjJsonPath as xi, isUsjAttributeKeyLocation as Tu, isUsjAttributeMarkerLocation as By, isUsjClosingAttributeMarkerLocation as Vy, isUsjMarkerLocation as Wy, isUsjClosingMarkerLocation as Hy, isUsjPropertyValueLocation as Gy, getUsjDocumentLocationTypeName as Jy, usjJsonPathFromIndexes as jr, EMPTY_USJ as Ff } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Be, $parseSerializedNode as xs, DecoratorNode as vs, ElementNode as tr, isHTMLElement as In, TextNode as je, $isRangeSelection as N, $isElementNode as $, $isTextNode as S, createState as Oo, $getState as te, ParagraphNode as zc, $isRootNode as Kf, $createTextNode as ye, $getSelection as w, $setState as Tt, $getCommonAncestor as Yy, $isLineBreakNode as qo, NODE_STATE_KEY as _s, $getEditor as Cs, $hasUpdateTag as Xy, $getNodeByKey as Q, $getRoot as Se, $createRangeSelection as Ro, $createPoint as xu, $setSelection as xn, $getCharacterOffsets as zf, KEY_DOWN_COMMAND as Mr, COMMAND_PRIORITY_HIGH as Ue, HISTORY_MERGE_TAG as jf, CLICK_COMMAND as $o, COMMAND_PRIORITY_EDITOR as vn, isDOMNode as Bf, $getNearestNodeFromDOMNode as Ss, CONTROLLED_TEXT_INSERTION_COMMAND as jc, PASTE_COMMAND as yr, COMMAND_PRIORITY_CRITICAL as br, CUT_COMMAND as _n, DROP_COMMAND as Bc, DELETE_CHARACTER_COMMAND as Qy, DELETE_WORD_COMMAND as Zy, DELETE_LINE_COMMAND as eb, $isDecoratorNode as Vf, COPY_COMMAND as Io, COMMAND_PRIORITY_NORMAL as ci, SELECTION_CHANGE_COMMAND as lr, BLUR_COMMAND as Vc, $addUpdateTag as Hr, SKIP_DOM_SELECTION_TAG as tb, CLEAR_HISTORY_COMMAND as rb, COMMAND_PRIORITY_LOW as Ft, $getPreviousSelection as nb, $isRootOrShadowRoot as ib, CAN_UNDO_COMMAND as sb, CAN_REDO_COMMAND as ob, $isNodeSelection as Wf, DRAGSTART_COMMAND as ab, $createNodeSelection as Hf, getDOMSelectionFromTarget as cb, $onUpdate as lb, KEY_ENTER_COMMAND as Gf, LineBreakNode as Jf, $copyNode as ub, FOCUS_COMMAND as db, KEY_ESCAPE_COMMAND as Yf, INSERT_PARAGRAPH_COMMAND as no, createCommand as Xf, HISTORIC_TAG as Wc, createEditor as fb, UNDO_COMMAND as Qf, REDO_COMMAND as Zf, CLEAR_EDITOR_COMMAND as pb } from "lexical";
import { addClassNamesToElement as Yn, removeClassNamesFromElement as ya, $findMatchingParent as it, $dfsIterator as ep, $dfs as vi, mergeRegister as Ye, registerNestedElementResolver as tp, $unwrapNode as Ha, IS_APPLE as io } from "@lexical/utils";
import { useLexicalNodeSelection as hb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as $t } from "fast-equals";
import Gi from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as gb, $getHtmlContent as mb, $getLexicalContent as yb } from "@lexical/clipboard";
import { TreeView as bb } from "@lexical/react/LexicalTreeView";
import * as kb from "react-dom";
import { createPortal as kn } from "react-dom";
import { LexicalComposer as rp } from "@lexical/react/LexicalComposer";
import { ContentEditable as np } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as ip } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as sp } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as op } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Tb } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as xb, createDOMRange as vb, createRectsFromDOMRange as _b } from "@lexical/selection";
import { autoUpdate as Cb, computePosition as Sb, shift as Mb, flip as Eb } from "@floating-ui/dom";
import { $generateNodesFromDOM as Ab } from "@lexical/html";
import { AutoFocusPlugin as Pb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Nb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as ap, LexicalCollaboration as wb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Ob } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as qb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Rb, $isRootTextContentEmpty as $b } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Ib } from "@lexical/yjs";
import { Array as vu, Map as _u, YArrayEvent as Lb } from "yjs";
const ba = (e) => Be(xs(e)), Db = {
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
function cp(e) {
  return Db[e];
}
const O = " ", so = "​", zt = O, Hc = `${O}|`, ar = "p", oo = "+", lp = "-", Ms = "immutable-note-caller", ao = "chapter", Ga = "verse", Cu = "invalid", Ub = "text-spacing", Fb = "formatted-font", Kb = "marker-", up = "external-usj-mutation", dp = "selection-change", Gr = "cursor-change", Ja = "annotation-change", os = "delta-change", fp = "marker-settle", zb = [
  up,
  dp,
  Gr,
  Ja,
  os
], Cn = "zmsc-s", li = "zmsc-e", jb = [Cn, li], Bb = [
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
  li
], pp = 1, Gc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Vb = Gc.filter((e) => e !== "sid" && e !== "eid");
class Xt extends vs {
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
    return gp().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Bb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: pp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function hp(e) {
  return jb.includes(e);
}
function gp(e, t, r, n, i) {
  return Be(new Xt(e, t, r, n, void 0, i));
}
function Fe(e) {
  return e instanceof Xt;
}
const Jc = "f", Wb = [
  // Footnote
  Jc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Ji(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Hb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], mp = 1;
class we extends tr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Jc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Ji(t) === "crossref" ? lp : oo), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Jb(t) ? {
        conversion: Gb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Yc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Ji(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Ji(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Ji(this.getMarker()))), { element: r };
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
      version: mp
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
  return { node: Yc(t, r, n) };
}
function Yc(e, t, r, n, i) {
  return Be(new we(e, t, r, n, i));
}
function Jb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return we.isValidMarker(t) && e.classList.contains(we.getType());
}
function z(e) {
  return e instanceof we;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Ya = {
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
}, fn = {
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
  p: { children: fn },
  q: { children: fn },
  q1: { children: fn },
  q2: { children: fn },
  q3: { children: fn },
  q4: { children: fn },
  b: { children: fn },
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
  const t = Object.hasOwn(Ya, e) ? Ya[e] : void 0, r = Object.hasOwn(Su, e) ? Su[e] : void 0;
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
const yp = "v", bp = "c", pn = "fig", Mu = "tr", Xa = "esb", kp = "esbe", Yb = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Xb = {
  "": "start",
  c: "center",
  r: "end"
};
function Qb(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Eu(e) {
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
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === so && s + 1 < e.length && Eu(e[s + 1]) || (Eu(o) ? (r || (i = t.length, t += o), r = !0) : Zb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
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
function Lo(e) {
  return nk.test(e) || hp(e);
}
function ka(e, t) {
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
    c.split("//").forEach((u, d) => {
      d > 0 && n.push({ kind: "optbreak" }), o(u);
    });
  };
  for (; i < e.length; ) {
    if (e[i] !== "\\") {
      const m = e.indexOf("\\", i), y = m === -1 ? e.length : m;
      a(ek(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = rk(e, i + 1);
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
    if (l === yp) {
      const { word: m, next: y } = ka(e, i);
      i = y, n.push({ kind: "verse", number: m });
      continue;
    }
    if (l === bp) {
      const { word: m, next: y } = ka(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: m });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === b.Note || h === void 0 && we.isValidMarker(l)) {
      const { word: m, next: y } = ka(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: m || "+" });
      continue;
    }
    if (h === b.Milestone || h === void 0 && Lo(l)) {
      const m = fk(e, c, l, i);
      if (m)
        n.push(m.token), m.ejectedText && o(m.ejectedText), i = m.next;
      else {
        const y = e.indexOf("\\", i), v = y === -1 ? e.length : y;
        o(e.slice(c, v)), i = v;
      }
      continue;
    }
    h === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : h === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : co(p) ? (d(), co(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Xa || l === kp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Au = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function co(e) {
  return Object.hasOwn(Au, e) ? Au[e] : void 0;
}
function sk(e) {
  return co(e) !== void 0;
}
const ok = /([-\w]+)\s*=\s*"(.*?)"/g, ak = /[\s\u200B]*[\n\r][\s\u200B]*/g, Tp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Es(e) {
  return Tp[e];
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
function Do(e, t, r = Tp[t]) {
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
function As(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function uk(e) {
  const t = Er(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
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
  const s = Do(e.slice(n + 1, i), r, As(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function fk(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Do(s.slice(o + 1), r, As(r)), !a && s.slice(o + 1).trim() !== "")) {
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
function gr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", O);
}
function hn(e) {
  return e.content || (e.content = []), e.content;
}
function Er(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u;
  const d = () => u ? hn(u) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? hn(o[o.length - 1].object) : hn(s);
    if (o.length > 0)
      return hn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return d();
      i = { type: "para", marker: ar, content: [] }, d().push(i);
    }
    return hn(i);
  }, h = (ee) => {
    const K = p();
    typeof ee == "string" && typeof K[K.length - 1] == "string" ? K[K.length - 1] = K[K.length - 1] + ee : K.push(ee);
  }, m = (ee) => {
    for (let K = ee; K < o.length; K += 1) {
      const re = o[K].object;
      re.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, v = (ee) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, ee || (s.closed = "false"), s = void 0);
  }, M = () => {
    c = void 0, l = void 0;
  }, E = (ee) => {
    u && (ee || (u.closed = "false"), u = void 0);
  };
  let R, C = "", T;
  const F = () => {
    C && h(gr(C)), C = "";
  }, U = (ee = !1) => {
    R?.type === "sidebar" ? C = "" : ee && C.endsWith(`
`) && (C = C.slice(0, -1)), R = void 0, F();
  }, G = () => {
    if (!T)
      return;
    const ee = { type: "char", marker: T.marker, content: [] };
    T.value && (ee.content = [gr(T.value)]), p().push(ee), o.push({ object: ee }), T = void 0;
  }, J = (ee, K) => {
    f = !1, M(), y(), v(!1), i = { type: "para", marker: ee, content: [] }, K && (i.content = [gr(K)]), d().push(i);
  }, ce = () => {
    T && (J(T.marker, T.value), T = void 0);
  };
  let fe;
  const Y = () => {
    if (fe) {
      if (fe.shape === "para")
        J(pn, fe.value);
      else {
        const ee = { type: "char", marker: pn, content: [] };
        fe.value && (ee.content = [gr(fe.value)]), p().push(ee), o.push({ object: ee });
      }
      fe = void 0;
    }
  }, Pe = ik(e, t?.getMarker ?? cr, n);
  for (let ee = 0; ee < Pe.length; ee++) {
    const K = Pe[ee];
    if (T) {
      if (K.kind === "text") {
        T.value += K.text;
        continue;
      }
      if (T.shape === "char" && K.kind === "end" && K.marker.replace(/^\+/, "") === T.marker) {
        if (T.value.trim() === "") {
          p().push({ type: "char", marker: T.marker, content: [] }), T = void 0, U();
          continue;
        }
        Object.assign(T.target, {
          [T.attrName]: gr(T.value.trim())
        });
        const re = T.marker;
        if (T = void 0, re === "ca") {
          const $e = Pe[ee + 1];
          $e?.kind === "text" && /^[\s\u200B]*$/.test($e.text) && ee++;
        }
        continue;
      }
      if (T.shape === "para" && (K.kind === "para" || K.kind === "chapter")) {
        const re = T.value.replace(/[\s\u200B]+$/, "");
        re === "" ? (J(T.marker), T = void 0) : (Object.assign(T.target, { [T.attrName]: gr(re) }), T = void 0);
      } else {
        R = void 0, (K.kind === "para" || K.kind === "chapter") && T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), T.shape === "para" ? ce() : G(), ee--;
        continue;
      }
    }
    if (fe) {
      if (K.kind === "text" || K.kind === "optbreak") {
        fe.value += K.kind === "text" ? K.text : "//";
        continue;
      }
      if (K.kind === "end" && K.marker.replace(/^\+/, "") === pn) {
        const re = fe.value.indexOf("|"), $e = re >= 0 ? Do(fe.value.slice(re + 1), pn) : void 0;
        if ($e) {
          const Qe = {};
          for (const [Ze, qi] of Object.entries($e))
            Qe[Ze === "src" ? "file" : Ze] = qi;
          const rr = {
            type: "figure",
            marker: pn,
            ...Qe
          }, ue = fe.value.slice(0, re);
          ue && (rr.content = [gr(ue)]), h(rr), fe = void 0;
          continue;
        }
      }
      Y(), ee--;
      continue;
    }
    if (R)
      if (K.kind === "text") {
        if (K.text.includes(`
`) && /^[\s\u200B]*$/.test(K.text)) {
          C += K.text;
          continue;
        }
        U();
      } else if (K.kind === "charOpen" || K.kind === "para") {
        const re = K.kind === "para" || !K.isNested ? co(K.marker) : void 0;
        if (re && re.targetTypes.includes(R.type)) {
          C = "", T = {
            target: R,
            attrName: re.attrName,
            marker: K.marker,
            shape: re.shape,
            value: ""
          };
          continue;
        }
        U(K.kind === "para");
      } else
        U(K.kind === "chapter");
    if (!s && !n && (K.kind === "charOpen" && !K.isNested && K.marker === pn || K.kind === "para" && K.marker === pn)) {
      y(), fe = { shape: K.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (K.kind) {
      case "text": {
        let re = K.text;
        if (!s && re.endsWith(`
`)) {
          const $e = Pe[ee + 1];
          ($e === void 0 || $e.kind === "para" || $e.kind === "chapter") && (re = re.slice(0, -1));
        }
        re && h(gr(re));
        break;
      }
      case "para": {
        const re = !s && !n;
        if (re && K.marker === Mu) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: Mu, content: [] }, hn(c).push(l), i = l, f = !1;
          break;
        }
        if (re && l) {
          const $e = Yb.exec(K.marker);
          if ($e && Qb($e)) {
            y();
            const [, Qe, rr, ue] = $e, Ze = {
              type: "table:cell",
              marker: ue ? K.marker.slice(0, K.marker.indexOf("-")) : K.marker,
              align: Xb[Qe],
              content: []
            };
            ue && (Ze.colspan = String(Number(ue) + 1 - Number(rr))), hn(l).push(Ze), i = Ze;
            break;
          }
        }
        if (M(), !n && K.marker === Xa) {
          y(), v(!1), E(!1), u = { type: "sidebar", marker: Xa, content: [] }, r.push(u), i = void 0, R = u, f = !1;
          break;
        }
        if (K.marker === kp && u) {
          y(), v(!1), E(!0), i = void 0;
          break;
        }
        J(K.marker);
        break;
      }
      case "verse": {
        v(!1);
        const re = { type: "verse", marker: yp, number: K.number };
        h(re), R = re;
        break;
      }
      case "chapter": {
        y(), v(!1), M(), E(!1), i = void 0;
        const re = {
          type: "chapter",
          marker: bp,
          number: K.number
        };
        r.push(re), R = re, f = !0;
        break;
      }
      case "note": {
        v(!1);
        const re = p();
        s = { type: "note", marker: K.marker, caller: K.caller, content: [] }, a = o.length, re.push(s), R = s;
        break;
      }
      case "charOpen": {
        if (!K.isNested) {
          const Qe = s ? a : 0;
          m(Qe), o.length = Qe;
        }
        const re = p(), $e = { type: "char", marker: K.marker, content: [] };
        re.push($e), o.push({ object: $e });
        break;
      }
      case "end": {
        const re = K.marker.replace(/^\+/, ""), $e = s ? a : 0, Qe = o.findLastIndex((rr, ue) => ue >= $e && rr.object.marker === re);
        Qe >= 0 ? (pk(o[Qe].object), m(Qe + 1), o.length = Qe) : s && s.marker === re ? v(!0) : (m($e), o.length = $e, h({ type: "unmatched", marker: `${K.marker}*` }));
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
  if (fe && Y(), T)
    if (T.shape === "para") {
      const ee = T.value.replace(/[\s\u200B]+$/, "");
      ee === "" ? J(T.marker) : Object.assign(T.target, { [T.attrName]: gr(ee) }), T = void 0;
    } else
      T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), G();
  y(), v(!1), E(!1);
  const Ne = (ee) => {
    for (const K of ee)
      typeof K != "string" && K.content && (Ne(K.content), K.content.length === 0 && delete K.content);
  };
  return Ne(r), r;
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Do(i.slice(s + 1), e.marker ?? "");
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
function Kt(e, t) {
  let r = Ee(e);
  return t && (r += `${O}${t}`), r += " ", r;
}
function At(e) {
  return " " + e + O;
}
const hk = 1;
class ur extends je {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(yn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new ur(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || yn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = yn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = yn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = yn(r.__marker, r.__markerSyntax, t), r;
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
      version: hk
    };
  }
}
function lt(e, t, r) {
  return Be(new ur(e, t, void 0, r));
}
function P(e) {
  return e instanceof ur;
}
function Ps(e) {
  return e?.type === ur.getType();
}
function sn(e) {
  return e.getTextContent() === yn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function gk(e) {
  e.setTextContent(yn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function yn(e, t, r = !1) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Ee(e, r);
}
const Wr = "internal-comment", mk = [Wr], xp = Object.freeze({}), Qa = Object.freeze({}), Za = Object.freeze({}), ec = Object.freeze({}), tc = Object.freeze({}), yk = 1, Xn = /* @__PURE__ */ new Map(), Fi = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map();
class et extends tr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = xp, r, n, i, s, o) {
    super(o), this.__typedIDs = Hs(t), this.__typedOnClicks = Ta(r), this.__typedOnRemoves = xa(n), this.__typedOnMouseEnters = va(i), this.__typedOnMouseLeaves = _a(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Hs(t.__typedIDs), n = Ta(t.__typedOnClicks), i = xa(t.__typedOnRemoves), s = va(t.__typedOnMouseEnters), o = _a(t.__typedOnMouseLeaves);
    return new et(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return mk.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return as().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: yk
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Yn(n, gn(t.theme.typedMark, a)), c.length > 1 && Yn(n, gn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Yn(n, gn("annotationId", l));
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
      c !== l && (c === 0 ? l === 1 && Yn(r, u) : l === 0 && ya(r, u), c === 1 ? l === 2 && Yn(r, d) : l === 1 && ya(r, d));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || ya(r, gn("annotationId", h));
      for (const h of a)
        f.has(h) || Yn(r, gn("annotationId", h));
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
    return ge(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Hs(r.__typedIDs);
    r.__typedIDs = Hs(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && lo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Ta(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ge(t) ? Xn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = xa(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ge(t) ? Fi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = va(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ge(t) ? Qn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = _a(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ge(t) ? Zn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!ge(a))
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
    if (!ge(n))
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
    const n = as(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Xn.delete(r.getKey()), Fi.delete(r.getKey()), Qn.delete(r.getKey()), Zn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Xn.get(this.getKey());
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
    const n = Qn.get(this.getKey());
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Qa) {
      const t = Xn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Xn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Xn.set(this.getKey(), this.__typedOnClicks);
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
    if (!this.__typedOnClicks || this.__typedOnClicks === Qa) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Za) {
      const t = Fi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Fi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Fi.set(this.getKey(), this.__typedOnRemoves);
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Za) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === ec) {
      const t = Qn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Qn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Qn.set(this.getKey(), this.__typedOnMouseEnters);
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === ec) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === tc) {
      const t = Zn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Zn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Zn.set(this.getKey(), this.__typedOnMouseLeaves);
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === tc) {
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
    const i = bk(t, r);
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
    for (; ge(t) && Nu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; ge(r) && Nu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = kk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Tk(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = xk(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = vk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Hs(e = xp) {
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
function Ta(e) {
  if (!e || e === Qa)
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
function xa(e) {
  if (!e || e === Za)
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
function va(e) {
  if (!e || e === ec)
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
function _a(e) {
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
function Ur(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Pu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function bk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Nu(e, t) {
  const r = Pu(e), n = Pu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function kk(e, t) {
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
function Tk(e, t) {
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
function xk(e, t) {
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
function vk(e, t) {
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
function wu(e) {
  return `external-${e}`;
}
function as(e, t, r, n, i) {
  return Be(new et(e, t, r, n, i));
}
function ge(e) {
  return e instanceof et;
}
function Uo(e) {
  return e?.type === et.getType();
}
function lo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Xc(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let h, m;
  for (let y = 0; y < u; y++) {
    const v = a[y];
    if ($(m) && m.isParentOf(v))
      continue;
    const M = y === 0, E = y === u - 1;
    let R = null;
    if (S(v)) {
      const C = v.getTextContentSize(), T = M ? f : 0, F = E ? p : C;
      if (T === 0 && F === 0)
        continue;
      const U = v.splitText(T, F);
      R = U.length > 1 && (U.length === 3 || M && !E || F === C) ? U[1] : U[0];
    } else {
      if (ge(v))
        continue;
      $(v) && v.isInline() && (R = v);
    }
    if (R !== null) {
      if (R && R.is(h))
        continue;
      const C = R.getParent();
      (C == null || !C.is(h)) && (m = void 0), h = C, m === void 0 && (m = as(), m.addID(t, r, n, i, s, o), R.insertBefore(m)), m.append(R);
    } else
      h = void 0, m = void 0;
  }
  t === Wr && $(m) && (d ? m.selectStart() : m.selectEnd());
}
function _k(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (ge(n))
      return n.getTypedIDs()[t];
    if (S(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (ge(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Sn = Oo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Jr = Oo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = Oo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), dr = "marker-trailing-space", vp = 1, Ck = "attribute-run";
function Ca(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Ar extends tr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Ar(r, n);
  }
  static importJSON(t) {
    return _p(t.runKind).updateFromJSON(t);
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
    t.classList.add(Ck);
    const r = Ca(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Ca(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Ca(this.__runKind);
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
      version: vp
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
function _p(e) {
  return Be(new Ar(e));
}
function ze(e) {
  return e instanceof Ar;
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
], Sk = [
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
], Mp = 1, Mk = ["type", "marker", "content"];
class ke extends tr {
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
    return t !== void 0 && (Sk.includes(t) || (r?.includes(t) ?? !1));
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
      span: (t) => Ak(t) ? {
        conversion: Ek,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return xr().updateFromJSON(t);
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
    return Ou(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Ou(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = this.getUnknownAttributes()?.closed === "false", i = xr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Ou(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Ek(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: xr(t) };
}
function xr(e, t) {
  return Be(new ke(e, t));
}
function Ak(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ke.isValidMarker(t) && e.classList.contains(ke.getType());
}
function I(e) {
  return e instanceof ke;
}
function Pk(e) {
  return e?.type === ke.getType();
}
const uo = "v", Ep = 1, Nk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class pt extends je {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = uo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pt(r, n, i, s, o, a, c);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ga, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
  return Be(new pt(e, t, r, n, i, s));
}
function Me(e) {
  return e instanceof pt;
}
function Pp(e) {
  return e?.type === pt.getType();
}
const wk = /* @__PURE__ */ new Set(["closed"]);
function or(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !wk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Np(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function wp(e) {
  const t = Object.keys(e).filter((n) => !Vb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Op(e, t, r, n) {
  return Np(
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
function Zi(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Ok(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Zi(e) === void 0 && qp(e) === void 0;
}
function qp(e) {
  return e.getChildren().find((t) => S(t) && te(t, oe) === "attribute");
}
function cs(e, t) {
  return Ns(e.getNextSibling(), t);
}
const qk = /^[ \u00A0]+$/;
function Qc(e) {
  if (sn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ee(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && qk.test(r.slice(t.length));
}
function Ns(e, t) {
  let r, n, i, s;
  return ze(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Qc(e) && (r = e, e = e.getNextSibling()), S(e) && te(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && sn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Rk(e) {
  let t = e;
  for (; ge(t); )
    t = t.getChildren()[0];
  return t;
}
function Yr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = Rk(t[r]);
  if (S(n) && n.getTextContent() === At(e.getCaller()))
    return n;
}
function Rp(e) {
  const t = Yr(e);
  return t ? Ns(t.getNextSibling(), "cat") : {};
}
function _i(e) {
  const t = e.getFirstChild();
  if (!(!S(t) || P(t)) && te(t, oe) !== "attribute")
    return t;
}
function $p(e) {
  const t = _i(e);
  return t ? Ns(t.getNextSibling(), "ca") : {};
}
function Ip(e) {
  const t = _i(e);
  if (!t)
    return;
  const r = Ns(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Lp(e) {
  const t = Ip(e);
  return t ? Ns(t.getNextSibling(), "cp") : {};
}
function Dp(e) {
  const t = e.getParent();
  if (!I(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Me(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || S(n) && te(n, oe) === "attribute" || I(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || ze(n)))
        return;
    }
}
function Fo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return ze(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Qc(s) && (t = s, s = s.getNextSibling()), S(s) && te(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && sn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const fo = "c", Up = 1, $k = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class wt extends tr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = fo, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new wt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Fp().updateFromJSON(t);
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
      version: Up
    };
  }
}
function Fp(e, t, r, n, i) {
  return Be(new wt(e, t, r, n, i));
}
function _e(e) {
  return e instanceof wt;
}
function Ik(e) {
  return e?.type === wt.getType();
}
const Kp = 1;
class Xr extends zc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Xr(t.__key);
  }
  static importJSON(t) {
    return Jt().updateFromJSON(t);
  }
  getMarker() {
    return ar;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Kp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Jt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Jt() {
  return Be(new Xr());
}
function Qt(e) {
  return e instanceof Xr;
}
function Ko(e) {
  return e?.type === Xr.getType();
}
function po(e) {
  return Qt(e) && Kf(e.getParent());
}
function zp(e) {
  return ge(e) || po(e);
}
function ws(e) {
  let t = e.getParent();
  for (; t && zp(t); )
    t = t.getParent();
  return t;
}
function Zc(e) {
  return I(ws(e));
}
function ho(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Zc(t) : t.getChildren().some((i) => I(i) && i.getMarker() === r) ? !0 : void 0;
}
function Lk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = ho(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Os(e) {
  return S(e) && e.getType() === je.getType() && te(e, oe) !== "attribute";
}
function Dk(e) {
  if (!Os(e) || !e.getTextContent().startsWith(O))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && ge(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!I(n))
    return 0;
  for (; ge(r); )
    r = r.getLastChild();
  return !P(r) || r.getMarkerSyntax() !== "opening" || ho(r, n) === void 0 ? 0 : 1;
}
function el(e, t) {
  if (e.getMarkerSyntax() !== "opening" || ho(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? ho(r, t) === !0 ? "spacer" : void 0 : Os(r) ? r.getTextContent().startsWith(O) ? void 0 : "prefix" : "spacer";
}
function Uk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && el(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function jp(e, t) {
  const r = w();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Bp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = el(t, e);
    if (r !== void 0 && !jp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        S(n) && n.setTextContent(O + n.getTextContent());
      } else
        t.insertAfter(ye(O));
  });
}
function Vp(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && el(t, e) !== void 0 && jp(t, e)) : !1;
}
const Wp = 1, Fk = "marker", tl = Oo("isGutterMarker", {
  parse: (e) => e === !0
});
class Pr extends vs {
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
    return new Pr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Bk(t) ? {
        conversion: Kk,
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
    return r && In(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Wp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Kk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: vr(t, r) };
}
function vr(e, t) {
  return Be(new Pr(e, t));
}
function zk(e) {
  return Tt(vr(Fk, e), tl, !0);
}
function jk(e) {
  return Ct(e) && te(e, tl);
}
function Bk(e) {
  return e?.tagName === "span";
}
function Ct(e) {
  return e instanceof Pr;
}
function Hp(e) {
  return e?.type === Pr.getType();
}
const Vk = ["type", "marker", "content"], rc = "unknown", Gp = 1, Wk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Ln extends tr {
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
      [rc]: (t) => Gk(t) ? {
        conversion: Hk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return rl().updateFromJSON(t);
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
    return Wk.has(this.getTag());
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
    const t = document.createElement(rc);
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
      version: Gp
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
function Hk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: rl(t, r) };
}
function rl(e, t, r) {
  return Be(new Ln(e, t, r));
}
function Gk(e) {
  return e?.tagName.toLowerCase() === rc;
}
function qe(e) {
  return e instanceof Ln;
}
const Jk = "file", Yk = "src", Xk = "colspan", Qk = "category", Zk = "alt", eT = "closed", tT = "false";
function rT(e) {
  return e[eT] !== tT;
}
function nT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === Jk ? Yk : t,
    r
  ]));
}
function iT(e, t) {
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
function nl(e, t, r) {
  const n = r ?? {}, i = rT(n);
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
        opening: `\\${iT(t, n[Xk])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: or(nT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [Qk]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + or(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [Zk]: s, ...o } = n;
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
const vt = { wantsRun: !1, valueText: void 0 }, Nr = {};
function Sa(e, t) {
  if (t === "va")
    return e;
  const r = cs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function il(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if ($(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function zo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = w();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function sT(e) {
  return ze(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : S(e) && te(e, oe) === "attribute";
}
function oT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!S(e) || te(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Ma(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Me(t))
      return t;
    if (!sT(t))
      return;
  }
}
function qu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Me(t),
    ownerOf: (t) => {
      if (ze(t))
        return t.getRunKind() === e ? Ma(t) : void 0;
      const r = t.getParent();
      return ze(r) ? r.getRunKind() === e ? Ma(r) : void 0 : oT(t) === e ? Ma(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Me(t))
        return vt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? vt : { wantsRun: !0, valueText: O + r };
    },
    scanPieces: (t) => Me(t) ? cs(Sa(t, e), e) : Nr,
    graceSite: (t, r) => Me(t) ? !r.opener && !r.closer ? il(Sa(t, e)) : zo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Me(t) ? Sa(t, e) : void 0
    }
  };
}
const aT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => Nr,
  graceSite: (e) => I(e) && Vp(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, cT = {
  kind: "char",
  ownerPredicate: (e) => I(e),
  ownerOf: (e) => {
    if (!S(e) || te(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return I(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!I(e) || Zi(e) === void 0)
      return vt;
    const t = or(e.getUnknownAttributes() ?? {}, Es(e.getMarker()));
    return t === "" ? vt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => I(e) ? { value: qp(e) } : Nr,
  graceSite: (e, t) => {
    if (!I(e) || t.value)
      return !1;
    const r = Zi(e);
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
    insertRunBefore: (e) => I(e) ? Zi(e) : void 0
  }
};
function Jp(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!S(e) || te(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function lT(e) {
  const t = e.getParent();
  if (!z(t))
    return;
  const r = Yr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Jp(n))
        return;
    }
}
const uT = {
  kind: "cat",
  ownerPredicate: (e) => z(e),
  ownerOf: (e) => {
    if (ze(e))
      return e.getRunKind() === "cat" && z(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return ze(t) ? t.getRunKind() === "cat" && z(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Jp(e) ? lT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!z(e) || e.getIsCollapsed() !== !1)
      return vt;
    const t = e.getCategory();
    return t === void 0 ? vt : { wantsRun: !0, valueText: O + t };
  },
  scanPieces: (e) => z(e) ? Rp(e) : Nr,
  graceSite: (e, t) => {
    if (!z(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Yr(e);
      return r !== void 0 && il(r);
    }
    return zo(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => z(e) ? Yr(e) : void 0
  }
};
function dT(e) {
  return ze(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : S(e) && te(e, oe) === "attribute";
}
function fT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!S(e) || te(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function pT(e) {
  const t = e.getParent();
  if (!_e(t))
    return;
  const r = _i(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!dT(n))
        return;
    }
}
function Ru(e) {
  const t = (r) => _e(r) ? e === "ca" ? _i(r) : Ip(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => _e(r),
    ownerOf: (r) => {
      if (ze(r))
        return r.getRunKind() === e && _e(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return ze(n) ? n.getRunKind() === e && _e(n.getParent()) ? n.getParent() ?? void 0 : void 0 : fT(r) === e ? pT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!_e(r))
        return vt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? vt : { wantsRun: !0, valueText: O + n };
    },
    scanPieces: (r) => _e(r) ? e === "ca" ? $p(r) : Lp(r) : Nr,
    graceSite: (r, n) => {
      if (!_e(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && il(i);
      }
      return zo(n);
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
function Yp(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return S(e) && te(e, oe) === "attribute";
}
function hT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Fe(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Yp(t))
      return;
  }
}
const gT = {
  kind: "milestone",
  ownerPredicate: (e) => Fe(e),
  ownerOf: (e) => {
    const t = ze(e) ? e.getRunKind() === "milestone" ? e : void 0 : ze(e.getParent()) ? e.getParent() : Yp(e) ? e : void 0;
    if (!t || ze(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return ze(t) ? Fe(r) ? r : void 0 : hT(t);
  },
  expectedPieces: (e) => {
    if (!Fe(e))
      return vt;
    const t = Op(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = or(t, As(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : O + r };
  },
  scanPieces: (e) => {
    if (!Fe(e))
      return Nr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Fo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Fe(e))
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
    return zo(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Fe(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, mT = nl("optbreak", void 0, void 0).opening, yT = {
  kind: "optbreak",
  ownerPredicate: (e) => qe(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!qe(t) || t.getTag() !== "optbreak"))
      return S(e) || Ct(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: mT }),
  scanPieces: (e) => qe(e) ? { value: e.getFirstChild() ?? void 0 } : Nr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, bT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => qe(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => Nr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, kT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => Nr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, ls = [
  aT,
  cT,
  qu("va"),
  qu("vp"),
  uT,
  Ru("ca"),
  Ru("cp"),
  gT,
  yT,
  bT,
  kT
], TT = new Map(ls.map((e) => [e.kind, e]));
function _r(e) {
  const t = TT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Qr(e) {
  for (const t of ls) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Xp(e) {
  return Qr(e) !== void 0;
}
const go = "unmatched", Qp = 2;
function es(e) {
  return `\\${e}`;
}
class wr extends je {
  __marker;
  constructor(t = "", r) {
    super(es(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new wr(r, n);
  }
  static importDOM() {
    return {
      [go]: (t) => vT(t) ? {
        conversion: xT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return sl().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? es(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = es(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Cu), r.title = $u(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = $u(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(go);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Cu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Qp
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Zp(e) {
  return e.getTextContent() === es(e.getMarker());
}
function $u(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function xT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: sl(t) };
}
function sl(e) {
  return Be(new wr(e));
}
function vT(e) {
  return e?.tagName.toLowerCase() === go;
}
function on(e) {
  return e instanceof wr;
}
const us = "id", eh = 1, _T = [
  "type",
  "marker",
  "code",
  "content"
];
class jt extends tr {
  __marker = us;
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
    return th(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return zy(t);
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
      version: eh
    };
  }
}
function th(e, t) {
  return Be(new jt(e, t));
}
function gt(e) {
  return e instanceof jt;
}
function rh(e) {
  return e?.type === jt.getType();
}
const nh = 1, CT = "c", ih = "span";
class fr extends vs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = CT, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => sh(t) ? {
        conversion: ST,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ol().updateFromJSON(t);
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
    const t = document.createElement(ih);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(ao, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(ao, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: nh
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
function ST(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: ol(t) };
}
function ol(e, t, r, n, i, s) {
  return Be(new fr(e, t, r, n, i, s));
}
function sh(e) {
  return e ? e.classList.contains(ao) && e.tagName.toLowerCase() === ih : !1;
}
function qs(e) {
  return e instanceof fr;
}
function MT(e) {
  return e?.type === fr.getType();
}
const oh = "table", nc = "immutable-table", ah = 1, ET = ["type", "marker", "content"];
class Dn extends tr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return nc;
  }
  static clone(t) {
    return new Dn(t.__unknownAttributes, t.__key);
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
      type: nc,
      ...t !== void 0 && { unknownAttributes: t },
      version: ah
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function AT(e) {
  return Be(new Dn(e));
}
function ch(e) {
  return e instanceof Dn;
}
function PT(e) {
  return e?.type === nc;
}
const lh = "table:row", Iu = "immutable-table-row", uh = 1, ic = "tr", NT = ["type", "marker", "content"];
class Ci extends tr {
  __marker;
  __unknownAttributes;
  constructor(t = ic, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Iu;
  }
  static clone(t) {
    return new Ci(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return wT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? ic).setUnknownAttributes(t.unknownAttributes);
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
      version: uh
    };
  }
}
function wT(e, t) {
  return Be(new Ci(e, t));
}
const dh = "table:cell", Lu = "immutable-table-cell", fh = 1, sc = "tc1", OT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function qT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Si extends tr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = sc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Lu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Si(r, n, i, s, o);
  }
  static importJSON(t) {
    return RT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? sc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
      type: Lu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: fh
    };
  }
}
function RT(e, t, r, n) {
  return Be(new Si(e, t, r, n));
}
const $T = [
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
], ph = 1, IT = ["type", "marker", "content"];
class Xe extends zc {
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
    return new Xe(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && ($T.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: LT,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ds().updateFromJSON(t);
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
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: ph
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ds(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function LT(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ds(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ds(e, t) {
  return Be(new Xe(e, t));
}
function ie(e) {
  return e instanceof Xe;
}
function al(e) {
  return e?.type === Xe.getType();
}
function jo(e, t) {
  const r = e.getChildAtIndex(t);
  return S(r) ? r : void 0;
}
function Zt(e, t) {
  const r = jo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function fs(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function DT(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function UT(e) {
  return fs(e) ? void 0 : { closed: "false" };
}
function FT(e, t, r, n) {
  const i = t.getMarker(), s = Zc(t), o = DT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    Os(a) && !a.getTextContent().startsWith(O) && a.setTextContent(O + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function Mn(e) {
  return it(e, I) ?? void 0;
}
function cl(e) {
  let t = e.getParent();
  for (; I(t); )
    t = t.getParent();
  return t;
}
function oc(e) {
  const t = hh(e);
  return e.getChildren().every((r) => P(r) || t && te(r, oe) === "attribute" || S(r) && r.getTextContent().replaceAll(O, "") === "");
}
function hh(e) {
  return fs(e);
}
function KT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? or(r, Es(e.getMarker())) : "";
  n !== "" && t.insertAfter(ye(n)), e.remove();
}
function zT(e, t) {
  if (fs(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", Zc(e)));
}
function jT(e, t) {
  return I(e) && !fs(e) && !fs(t);
}
function BT(e, t, r) {
  oc(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && Os(n) && !n.getTextContent().startsWith(O) && n.setTextContent(O + n.getTextContent()), e.append(...t);
}
function VT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = hh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = P(l) && l.getMarkerSyntax() === "closing", f = s && te(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = jT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      BT(e, o, n);
    else {
      const l = xr(t.getMarker(), UT(t));
      FT(l, t, o, n), e.insertAfter(l), oc(l) ? l.remove() : c = l;
    }
  i && !a && zT(t, n), oc(t) && KT(t, c);
}
function fi(e, t) {
  let r = e.getParent();
  for (; I(r); )
    VT(e, r, t), r = e.getParent();
}
function ll(e) {
  if (S(e) && !P(e)) {
    const t = e.getTextContent().startsWith(O) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if ($(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      ll(t);
      return;
    }
    e.selectEnd();
  }
}
const gh = /[ \u00A0]{2,}/g;
function WT(e) {
  return [...e.matchAll(gh)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function HT(e) {
  return e.replace(gh, (t) => t[0]);
}
const GT = "​", pi = GT;
var Du;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Du || (Du = {}));
var Uu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Uu || (Uu = {}));
function JT() {
  return ye(pi);
}
function YT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(pi, ""));
}
function Rs(e) {
  return e.length > 0 && e.includes(pi) && e.replaceAll(pi, "") === "";
}
function ul(e) {
  return S(e) && Rs(e.getTextContent());
}
function mh(e) {
  return Ik(e) || MT(e);
}
function We(e) {
  return _e(e) || qs(e);
}
function yh(e, t) {
  return e.find((r) => We(r) && r.getNumber() === t.toString());
}
function XT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && We(r));
}
function Fu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function bh(e) {
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
function er(e) {
  return it(e, z) ?? void 0;
}
function QT(e) {
  return gt(e) || _e(e) || I(e) || qs(e) || Qt(e) || Fe(e) || ie(e) || z(e) || Me(e) || qe(e);
}
function kh(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function ZT(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Pt(e) {
  return Ae(e) || gt(e);
}
function Ae(e) {
  return ie(e) || Qt(e);
}
function ex(e) {
  return al(e) || Ko(e);
}
function hi(e, t) {
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
function tx(e, t) {
  const r = $(e) ? e : e.getParent(), n = $(t) ? t : t.getParent(), i = r && n ? Yy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function rx(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function An(e) {
  return e?.type === je.getType();
}
function nx(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function ix(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Th(e, t, r) {
  const n = Ee(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function sx(e) {
  const t = e[_s];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function xh(e) {
  return Ps(e) || Hp(e) && e.textType === "marker" || An(e) && sx(e) === "attribute" ? "" : An(e) && e.text !== O ? e.text : Pk(e) ? e.children.map((t) => xh(t)).join("") : "";
}
function ox(e) {
  return e.map((r) => xh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function dl(e) {
  const t = [];
  for (const r of e) {
    if (!I(r))
      continue;
    const n = vh(r);
    n !== zt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function vh(e) {
  return P(e) || Or(e) || S(e) && te(e, oe) === "attribute" ? "" : S(e) ? e.getTextContent() : $(e) ? e.getChildren().map((t) => vh(t)).join("") : "";
}
function Or(e) {
  return Ct(e) && e.getTextType() === "marker";
}
function Bt(e) {
  return P(e) || Or(e);
}
function Ku(e, t) {
  ax(e, t), e.setMarker(t);
}
function ax(e, t) {
  const r = e.getMarker(), n = Ee(r), i = Ee(r, !0), s = nt(r), o = nt(r, !0), a = ke.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Bt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (Or(c)) {
        const f = l.startsWith(Ee("", !0));
        c.setTextContent(u ? Ee(t, f) : nt(t, f));
      }
    }
  });
}
function Ke(e, t = jy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Re(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function _h(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function fl(e) {
  if (!N(e))
    return zu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !$(t) || e.anchor.type === "text" && !S(t)))
    return t ?? void 0;
  try {
    return zu(e) ?? t ?? void 0;
  } catch (n) {
    if (_h(n))
      return t ?? void 0;
    throw n;
  }
}
function cx(e, t) {
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
function pl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Ch(e) {
  return !!e && e.includes("-");
}
function Sh(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function zu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function mo(e) {
  if (!e)
    return !1;
  if (qo(e) || P(e) || Or(e) || ze(e) || e.getType() === Ms || Ct(e) && e.getTextType() === "attribute")
    return !0;
  const t = ws(e);
  if (_e(t) || S(e) && z(t) && Yr(t)?.is(e))
    return !0;
  if (S(e)) {
    const r = te(e, oe);
    if (r === dr || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === O || Rs(n))
      return !0;
  }
  return !1;
}
function Bo() {
  const e = ye(O);
  return Tt(e, oe, dr), e.setMode("token"), e;
}
function lx(e) {
  const t = e.getTextContent();
  t.startsWith(O) || e.setTextContent(O + t);
}
function Un(e) {
  return S(e) && te(e, oe) === dr;
}
function Mh(e) {
  const t = e.getFirstChild();
  if (!Bt(t) || t === null || Un(t.getNextSibling()))
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
function hl(e) {
  if (_e(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!mo(s)) {
      if (zp(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (S(s) && s.getType() === je.getType()) {
        r ??= [], r.push(s);
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function ux(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = Dk(i), o = t ? WT(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, u]) => c + u - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function Eh(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function dx(e, t) {
  let r = t;
  for (const [n, i] of Eh(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function ju(e, t) {
  let r = t;
  for (const [n, i] of Eh(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function qr(e, t) {
  return hl(e).map((r) => r.type === "element" ? r : ux(r.nodes, t));
}
function fx(e, t) {
  return hl(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function px(e, t, r) {
  const n = ws(e);
  if (!n)
    return;
  const i = qr(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: dx(a, t) };
  }
}
function hx(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, ju(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, ju(r, t - r.start)];
}
function Yi(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (po(e)) {
    const s = e.getParentOrThrow();
    return n ? mo(n) ? Yi(e, t + 1, r) : Bu(s, n, r) : Yi(s, e.getIndexWithinParent() + 1, r);
  }
  const i = qr(e, r);
  return n ? mo(n) || po(n) && !gx(i, n) ? Yi(e, t + 1, r) : Bu(e, n, r) : { type: "index", index: i.length };
}
function gx(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || hi(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || hi(n.node, t.getKey())));
}
function Bu(e, t, r) {
  const n = qr(e, r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type === "element") {
      if (s.node.is(t) || hi(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || hi(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: n.length };
}
function mx(e, t) {
  if (t <= 0)
    return [e, 0];
  const r = hl(e);
  if (r.length === 0 || t > r.length)
    return [e, e.getChildrenSize()];
  const n = r[t - 1], i = n.type === "element" ? n.node : n.nodes[n.nodes.length - 1], s = i ? Vu(e, i) : void 0;
  if (!s)
    return [e, e.getChildrenSize()];
  if (po(s)) {
    const o = Vu(s, i);
    if (o)
      return [s, o.getIndexWithinParent() + 1];
  }
  return [e, s.getIndexWithinParent() + 1];
}
function Vu(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const ui = /* @__PURE__ */ new WeakMap();
function yx(e, t) {
  return ui.set(e, t), () => {
    ui.get(e) === t && ui.delete(e);
  };
}
function Ea(e) {
  return ui.get(e);
}
function bx(e) {
  return ui.get(Cs())?.has(e.getKey()) ?? !1;
}
function kx(e) {
  ui.get(Cs())?.add(e.getKey());
}
function Tx(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function ac(e) {
  return !!(e.opener || e.value || e.closer);
}
function Wu(e) {
  return /^\s/.test(e);
}
function gl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Wu(t) || !Wu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Vo(e, t, r) {
  return r.wantsRun ? gl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : Tx(t);
}
function xx(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return gl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Ah(e, t) {
  return !ac(e.scanPieces(t));
}
function $s(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Vo(e, n, r))
    return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || hi(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function vx(e, t, r, n) {
  return !r.wantsRun || ac(n) || Xy(os) ? !1 : Cs().getEditorState().read(() => {
    const i = Q(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : ac(e.scanPieces(i));
  });
}
function _x(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Hu(e) {
  const t = ye(e);
  return Tt(t, oe, "attribute"), t;
}
function Cx(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = _p(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function Sx(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    S(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Hu(n.valueText));
    return;
  }
  const l = Cx(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : S(d) ? gl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Hu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function ps(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Vo(e, i, n) && !bx(t)) {
    if (vx(e, t, n, i)) {
      kx(t);
      return;
    }
    if (!$s(e, t)) {
      if (!n.wantsRun) {
        _x(i);
        return;
      }
      Sx(e, t, i, n);
    }
  }
}
function Mx(e, t, r) {
  ps(e, t), t.isAttached() && $s(e, t) && r.add(t.getKey());
}
function Ph(e) {
  if (!S(e))
    return !1;
  if (P(e) || Me(e) || on(e))
    return !0;
  const t = te(e, oe);
  return t === "attribute" || t === dr;
}
function ml(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && sn(e) && I(e.getParent())) : !1;
}
function Ex() {
  const e = w();
  return N(e) ? ml(e.focus.getNode(), e.focus.offset) : !1;
}
function Nh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return S(t) && Ph(t) ? t : void 0;
}
function Ax(e) {
  const t = Nh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function Px(e) {
  const t = Nh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Gu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Ju(e, t) {
  e.set(t.key, t.offset, t.type);
}
function Nx(e, t) {
  let r = Px(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!S(n))
      return;
    if (!Ph(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Yu(e, t) {
  const r = Nx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function wh(e) {
  if (e.isCollapsed()) {
    const a = Ax(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Gu(r), Gu(n)], s = Yu(r, "next"), o = Yu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Ju(r, i[0]), Ju(n, i[1]), !1) : !0;
}
const yo = "verse-block", Oh = 1, wx = "verse-block";
class Mi extends tr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return yo;
  }
  static clone(t) {
    return new Mi(t.__number, t.__key);
  }
  static importJSON(t) {
    return Ox().updateFromJSON(t);
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
    return Sh(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(wx), Xu(t, this.__number), t;
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
      type: yo,
      number: this.getNumber(),
      version: Oh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Xu(e, t) {
  const { start: r, end: n } = Sh(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Qu(e, "data-verse-start", i ? r : NaN), Qu(e, "data-verse-end", i ? n : NaN);
}
function Qu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function Ox(e) {
  return Be(new Mi(e));
}
function hs(e) {
  return e instanceof Mi;
}
function qx(e) {
  return e?.type === yo;
}
const Rx = [
  jt,
  fr,
  wt,
  pt,
  ke,
  we,
  Xt,
  ur,
  Ln,
  Pr,
  wr,
  Xe,
  Xr,
  Dn,
  Ci,
  Si,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Ar,
  {
    replace: zc,
    with: () => Jt(),
    withKlass: Xr
  }
], bo = {
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
}, $x = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function Ix(e) {
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
      type: $x[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: cr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Zu(e, t, r) {
  const n = {
    type: Tr,
    version: kr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Ko(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const qh = "v", Rh = 1, Lx = "verse-selected";
class St extends vs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = qh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Fx(t) ? {
        conversion: Ux,
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
    const t = document.createElement("span");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ga, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ga, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Kt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      so + this.getNumber() + so
    );
    return _(Dx, { nodeKey: this.getKey(), text: t });
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
      version: Rh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (_h(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Dx({ nodeKey: e, text: t }) {
  const [r] = hb(e);
  return _("span", { className: r ? Lx : void 0, children: t });
}
function Ux(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: yl(t) };
}
function yl(e, t, r, n, i, s) {
  return Be(new St(e, t, r, n, i, s));
}
function Fx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === qh;
}
function Fn(e) {
  return e instanceof St;
}
function Kx(e) {
  return e?.type === St.getType();
}
function be(e) {
  return Me(e) || Fn(e);
}
function $h(e) {
  return Pp(e) || Kx(e);
}
function zx(e) {
  return jx(e).find((t) => ie(t));
}
function jx(e) {
  return e.some(hs) ? e.flatMap((t) => hs(t) ? t.getChildren() : t) : e;
}
function Wo(e) {
  return $(e) ? hs(e) ? e.getChildren().flatMap(Wo) : e.getChildren() : [];
}
function Bx(e, t) {
  return Wo(e).find((i) => be(i) && pl(t, i.getNumber()));
}
function Vx(e, t) {
  return t === 0 ? zx(e) : e.map((r) => Bx(r, t)).filter((r) => r)[0];
}
function ko(e) {
  return Wo(e).find((r) => be(r));
}
function Ih(e, t) {
  if (!$(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (be(i))
      return i;
  }
}
function Wx(e) {
  const t = e.getParent();
  if (t && $(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (be(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !We(r); ) {
    const n = ko(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function cc(e) {
  return Wo(e).findLast((t) => be(t));
}
function Hx(e) {
  if (!Me(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Gx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && $(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function Jx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Gx(t, e, r);
  if (S(e)) {
    const n = Hx(e);
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
function Yx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return ed(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return Jx(e, t) ? { verseNum: n } : ed(e);
}
function Xx(e) {
  return QT(e) || Fn(e);
}
function bl(e) {
  if (S(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(O) && e.setTextContent(`${t} `);
  }
}
function Lh(e) {
  if (S(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Dh(e, t) {
  return e.getEditorState().read(() => !Q(t));
}
function Qx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = kl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && $(i) && $(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && $(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (be(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = td(i);
      for (; s && !We(s); ) {
        const o = ko(s);
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
      const o = ko(s);
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
function Zx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = kl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && $(i) && (n = Ih(i, r.getIndexWithinParent())), !n && i) {
      let o = rd(i);
      for (; o && !We(o); ) {
        const a = cc(o);
        if (a) {
          n = a;
          break;
        }
        o = rd(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !We(s); ) {
      const o = cc(s);
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
function kl(e, t) {
  if ($(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && be(n))
      return n;
    const i = Ih(e, t.anchor.offset);
    if (i)
      return i;
    const s = ko(e);
    if (s)
      return s;
  }
  return Tl(e);
}
function Tl(e) {
  if (!e || We(e))
    return;
  if (be(e))
    return e;
  let t = Fu(e);
  for (; t; ) {
    if (We(t))
      return;
    if (be(t))
      return t;
    const r = cc(t);
    if (r)
      return r;
    t = Fu(t);
  }
}
const ev = ["style"], tv = ["style", "code"], To = ["style", "cid"], rv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], nv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], iv = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], sv = ["style", "caller", "category", "contents"], ov = ["tag", "marker", "contents"], av = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], gs = `
`;
function cv(e, t) {
  const r = Q(e);
  if (!Nt(r))
    return;
  const n = Uh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Uh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = ep();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (gi(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      gi(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Cr(l) || Nt(l))
        return n;
      Pt(l) && (a = l);
    }
    if (Pt(l) && (i.includes(l) || i.push(l)), Fh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += xl(l, t);
  }
  if (a)
    return n;
}
function nd(e, t, r = "delta-doc") {
  if (e.length < 2 || !dv(e[0]) || !uv(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => lv(n, r)?.getKey());
}
function lv(e, t = "delta-doc") {
  const r = ep();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (gi(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      gi(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Pt(a) && (i.includes(a) || i.push(a)), Fh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = xl(a, t);
    if (Cr(a) && l > 0 && e >= n && e < n + l || Nt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function gi(e, t) {
  return e ? t ? !hi(t.node, e.getKey()) : !0 : !1;
}
function Cr(e) {
  return S(e) && !Nt(e);
}
function Nt(e) {
  return We(e) || be(e) || Fe(e) || z(e) || qe(e) || on(e);
}
function zr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function uv(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && av.includes(t);
}
function dv(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Fh(e, t) {
  return z(e) || qe(e) ? !0 : t === "apply" && $(e) && Nt(e);
}
function Kh(e) {
  const t = e.getParent();
  return Bt(e) && ie(t) && t.getFirstChild() === e;
}
function lc(e) {
  const t = e.getParent();
  return t !== null && it(t, ze) !== null;
}
function fv(e) {
  const t = e.getParent();
  return I(t) && e.getTextContent() === zt && t.getChildrenSize() === 1;
}
function pv(e) {
  const t = e.getParent();
  if (!z(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === At(t.getCaller());
}
function hv(e) {
  return !Xp(e) && xl(e, "delta-doc") === e.getTextContentSize();
}
function xl(e, t) {
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
    (ul(e) || Kh(e) || te(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    te(e, oe) === "attribute" || lc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Hc) || fv(e) || pv(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function uc(e, t) {
  const r = { insert: e.__text }, n = te(e, Jr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = zh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function id(e) {
  const t = new Gi();
  return e.isEmpty() || e.read(() => {
    const r = Se();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Qt(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = gv();
    for (const s of i)
      t.push(s);
  }), t;
}
function vl(e, t) {
  const r = [], n = vi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...sd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...sd(c, n.length, n, i, s, o, a));
  return r;
}
function gv() {
  return vl();
}
function sd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return mv(e, a, n), yv(e, a, i, s, o), bv(e, t, r, i, o, s, a), We(e) && a.push(vv(e)), be(e) && a.push(Cv(e)), Fe(e) && a.push(Sv(e)), on(e) && a.push(Mv(e)), Tv(e, a, s), kv(e, a, s), Nv(c, s), a;
}
function mv(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    gt(n) ? t.push(xv(n)) : ie(n) ? t.push(_v(n)) : Qt(n) && t.push({ insert: gs });
  }
  Pt(e) && (r.includes(e) || r.push(e));
}
function yv(e, t, r, n, i) {
  if (!S(e) || Me(e) || on(e))
    return;
  const s = e.getParent();
  if (z(s) && s.getFirstChild() === e)
    return;
  const o = er(e) !== void 0;
  if (P(e) && (o || Kh(e) || lc(e) || Xp(e)) || te(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Rs(a))
    return;
  const c = e.getPreviousSibling();
  if (z(s) && P(c) && c === s.getFirstChild() && a === At(s.getCaller()))
    return;
  const l = I(s) ? s : void 0, u = l?.getFirstChild();
  o && l && P(u) && c === u && a.startsWith(O) && (a = a.slice(1));
  const d = a.startsWith(Hc) || te(e, oe) === "attribute" || lc(e), f = !!l && a === zt && l.getChildrenSize() === 1, p = Ho(e, n), h = p ? r.filter((v) => p.children.includes(v)) : r, m = uc(e, h);
  if (m.insert = a, p) {
    if (!a || a === O || d)
      return;
    p.contentsOps?.push(m);
  } else
    f || d || t.push(m);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const v of r)
      i.add(v);
}
function bv(e, t, r, n, i, s, o) {
  I(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (gi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = Av(c), u = Ho(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function kv(e, t, r) {
  if (!z(e))
    return;
  const n = Ev(e), i = Ho(e, r), s = {
    node: e,
    children: vi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Tv(e, t, r) {
  if (!qe(e))
    return;
  const n = Pv(e), i = Ho(e, r), s = {
    node: e,
    children: vi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function an(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function xv(e) {
  const t = { style: us, code: e.__code };
  return an(t, e), { insert: gs, attributes: { book: t } };
}
function vv(e) {
  const t = { style: fo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), an(t, e), { insert: { chapter: t } };
}
function _v(e) {
  const t = { style: e.__marker };
  return an(t, e), { insert: gs, attributes: { para: t } };
}
function Cv(e) {
  const t = { style: uo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), an(t, e), { insert: { verse: t } };
}
function Sv(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), an(t, e), { insert: { milestone: t } };
}
function Mv(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function Ev(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), an(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = te(e, Jr);
  return n && (r.attributes = { segment: n }), r;
}
function Av(e) {
  const t = { insert: "" }, r = zh([e]);
  return r && (t.attributes = { char: r }), t;
}
function Pv(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), an(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Ho(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function Nv(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    gi(t[r].node, e) && t.splice(r, 1);
}
function zh(e) {
  if (e.length === 0)
    return;
  const t = e.map(wv);
  return t.length === 1 ? t[0] : t;
}
function wv(e) {
  const t = { style: e.__marker }, r = te(e, Sn);
  return r && (t.cid = r), an(t, e), t;
}
const jh = 1;
class Yt extends vs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = oo, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return Ms;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Yt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => qv(t) ? {
        conversion: Ov,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return _l().updateFromJSON(t);
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
    return r && In(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => Rv(t, n), (l) => $v(t, n, s, l), () => Iv(t, n), () => Lv(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === oo && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === lp && i ? (
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
      version: jh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Ov(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: _l(t, r) };
}
function _l(e, t, r) {
  return Be(new Yt(e, t, r));
}
function qv(e) {
  return e ? e.classList.contains(Yt.getType()) : !1;
}
function pr(e) {
  return e instanceof Yt;
}
function Rv(e, t) {
  return e.getEditorState().read(() => {
    const r = Q(t);
    if (!z(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function $v(e, t, r, n) {
  e.update(() => {
    const i = Q(t);
    if (!z(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = Q(r);
    if (!pr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function Iv(e, t) {
  return e.getEditorState().read(() => {
    const r = Q(t);
    if (!z(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return vl(r);
  });
}
function Lv(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of vi())
      if (z(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const Dv = [
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
], Uv = ["†"], Cl = "formatted", Bh = "unformatted", Vh = "paragraph-structure", Wh = "standard", Hh = "block-verse", Fv = {
  [Cl]: "Formatted",
  [Bh]: "Unformatted",
  [Vh]: "Paragraph Structure",
  [Wh]: "Standard",
  [Hh]: "Block Verse"
};
function Ei(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Sl, Ml;
function Kv(e) {
  const t = Gh(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Sl = e, Ml = t;
}
Kv(Cl);
const x0 = () => Sl, Go = () => Ml;
function Gh(e) {
  let t;
  switch (e ?? Sl) {
    case Cl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Bh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Vh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Wh:
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
function v0(e) {
  if (!e)
    return;
  const t = od(e);
  return Object.keys(Fv).find((r) => $t(od(Gh(r)), t));
}
const zv = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function od(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...zv, ...t };
}
function Rr(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function jv(e) {
  if (e)
    return ms(e) ? St : e.markerMode === "editable" ? pt : St;
}
function ms(e) {
  return e?.verseLayout === "block";
}
function Bv(e) {
  const t = [], r = e ?? Ml;
  return r && (t.push(`${Kb}${r.markerMode}`), r.hasSpacing && t.push(Ub), r.isFormattedFont && t.push(Fb)), t;
}
function El(e, t) {
  if (Qh())
    return;
  const { start: r } = e;
  let { end: n } = e;
  n ??= r;
  let [i, s] = fc(r, t), [o, a] = fc(n, t);
  if (!i || !o || s === void 0 || a === void 0)
    return;
  [i, s] = ud(i, s), [o, a] = ud(o, a);
  const c = Ro();
  return c.anchor = xu(i.getKey(), s, dd(i)), c.focus = xu(o.getKey(), a, dd(o)), c;
}
function Al(e) {
  if (Qh())
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
const Pl = {
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
}, Vv = new Map(Object.values(Pl).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), ad = {
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
}, Wv = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(ad).filter((e) => ad[e])
), Hv = /([^\s="|]+)="([^"]*)"/g, Gv = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Jv(e, t) {
  return `${e}['${t}']`;
}
function di(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function ts(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function Nl(e) {
  const t = Qr(e);
  if (!t)
    return;
  const r = _r(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function dc(e, t, r) {
  const n = [];
  for (const i of e.slice(t).matchAll(Hv)) {
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
function Yv(e, t) {
  const r = Gv.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = Vv.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function Jh(e) {
  const t = e.getParent();
  if (!t || !$(t))
    return e;
  const r = i_(e);
  return r && !Pt(r) && !S(r) && !ge(r) ? r : t;
}
function Xv(e) {
  const t = e.getTextContentSize(), r = Nl(e);
  if (r && r.role !== "value") {
    const i = Pl[r.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? ts(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (r.kind === "milestone")
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? ts() : di(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: Jh(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      di(e.getNested() ? 2 : 1)
    ) : ts()
  };
}
function Qv(e) {
  const t = e.getTextContent(), r = t.length, n = Nl(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = Jh(e);
  if (gt(i)) {
    const s = Ee(i.getMarker()).length;
    if (t.startsWith(Ee(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...di(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (qe(i)) {
    const s = nl(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: ts() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: di(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? ts() : di(t.startsWith("\\+") ? 2 : 1)
  };
}
function Zv(e) {
  const t = Nl(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = Pl[n];
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
        ...dc(i, 1, I(r) ? Es(r.getMarker()) : void 0)
      ]
    };
  if (n === "milestone" && Fe(r)) {
    const a = r.getMarker().length;
    return {
      owner: r,
      length: s,
      spans: [
        // A milestone has no text content of its own, so the separator and the `|` both keep
        // counting into its marker name's offset space.
        { start: 0, base: a, bytes: { kind: "property", property: "marker" } },
        ...dc(i, 2, As(r.getMarker()))
      ]
    };
  }
}
function e_(e) {
  const t = e.getParent();
  if (!qe(t))
    return;
  const r = e.getTextContent(), n = r.length, i = Yv(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...dc(r, 1, void 0)
      ]
    };
}
function cd(e, t) {
  const r = Ee(e);
  if (t.startsWith(r))
    return [
      ...di(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Yh(e) {
  if (P(e))
    return Xv(e);
  if (Or(e))
    return Qv(e);
  if (Ct(e) && e.getTextType() === "attribute")
    return e_(e);
  if (e.getType() === Ms) {
    const r = e.getParent();
    return z(r) ? {
      owner: r,
      length: e.getTextContentSize(),
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Me(e)) {
    const r = cd(e.getMarker(), e.getTextContent());
    return r ? { owner: e, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (!S(e))
    return;
  if (te(e, oe) === "attribute")
    return Zv(e);
  const t = e.getParent();
  if (_e(t) && _i(t)?.is(e)) {
    const r = cd(t.getMarker(), e.getTextContent());
    return r ? { owner: t, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (z(t) && Yr(t)?.is(e))
    return {
      owner: t,
      length: e.getTextContentSize(),
      spans: [
        // The caller's leading space is the space after the note's own marker, which counts into
        // that marker name's offset space.
        {
          start: 0,
          base: t.getMarker().length,
          bytes: { kind: "property", property: "marker" }
        },
        { start: 1, base: 0, bytes: { kind: "property", property: "caller" } }
      ]
    };
}
function Xh(e) {
  return Or(e) || Ct(e) && e.getTextType() === "attribute" || e.getType() === Ms;
}
function t_(e) {
  const t = [];
  if (Me(e) && t.push(e), $(e)) {
    const r = _e(e) ? _i(e) : void 0, n = z(e) ? Yr(e) : void 0;
    for (const i of e.getChildren())
      (P(i) || Or(i) || Ct(i) && i.getTextType() === "attribute" || i.getType() === Ms || r?.is(i) || n?.is(i)) && t.push(i);
  }
  for (const r of Wv) {
    const n = _r(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function r_(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function ld(e, t, r) {
  const n = Yh(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = jr(Br(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Jv(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return n_(e, r);
  }
}
function n_(e, t) {
  const r = ws(e);
  if (!r)
    return;
  const n = qr(r, t);
  for (let i = n.length - 1; i >= 0; i--) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.filter((a) => a.node.isBefore(e)).at(-1);
    if (o)
      return {
        jsonPath: jr([...Br(r), i]),
        offset: o.start + o.length
      };
  }
}
function ei(e, t, r) {
  for (const n of t_(e)) {
    const i = Yh(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!r_(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function fc(e, t) {
  const r = Rr(t);
  if (Kc(e)) {
    const n = xi(e.jsonPath);
    let i = Se();
    for (let s = 0; s < n.length; s++) {
      if (!i || !$(i))
        return [void 0, void 0];
      const o = qr(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : hx(o, e.offset) ?? [void 0, void 0];
      i = o.node;
    }
    return i && $(i) ? mx(i, e.offset) : [void 0, void 0];
  }
  if (Tu(e) || By(e)) {
    const n = Ki(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = Tu(e) ? ei(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : ei(n, { kind: "attributeMarker", keyName: i }, 0);
    return s || fd(n);
  }
  if (Vy(e)) {
    const n = Ki(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = ei(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || fd(n);
  }
  if (Wy(e)) {
    const n = Ki(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = ei(n, { kind: "marker" }, 0);
    if (i)
      return i;
    if (!$(n))
      return [void 0, void 0];
    const s = n.getFirstChild();
    return s && S(s) ? [s, 0] : [void 0, void 0];
  }
  if (Hy(e)) {
    const n = Ki(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = ei(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    if (!$(n))
      return [void 0, void 0];
    const s = n.getLastChild();
    return s && S(s) ? [s, s.getTextContent().length] : [void 0, void 0];
  }
  if (Gy(e)) {
    const n = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), i = n?.[1] ?? n?.[2] ?? n?.[3], s = Ki(e.jsonPath, r);
    if (!s || i === void 0)
      return [void 0, void 0];
    const o = ei(s, { kind: "property", property: i }, e.propertyOffset);
    if (o)
      return o;
    if (!$(s))
      return [void 0, void 0];
    const a = s.getFirstChild();
    return a && S(a) ? [a, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Jy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function ud(e, t) {
  if (!Xh(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !$(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = t >= e.getTextContentSize() && t > 0;
  return [r, i ? n + 1 : n];
}
function dd(e) {
  return $(e) ? "element" : "text";
}
function Ki(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = xi(n);
  let s = Se();
  for (const o of i) {
    if (!s || !$(s))
      return;
    const a = qr(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function Pn(e, t, r) {
  return pc(e, t, Rr(r));
}
function pc(e, t, r) {
  const n = ld(e, t, r);
  if (n)
    return n;
  if (ge(e)) {
    const i = e.getChildrenSize(), s = e.getChildAtIndex(Math.min(t, i - 1));
    if (S(s)) {
      const a = t >= i ? s.getTextContentSize() : 0;
      return pc(s, a, r);
    }
    const o = e.getParent();
    if (o) {
      const a = e.getIndexWithinParent(), c = t >= i ? a + 1 : a;
      return pc(o, c, r);
    }
  }
  if ($(e)) {
    const i = e.getChildAtIndex(t);
    if (i && Xh(i)) {
      const o = ld(i, 0, r);
      return o || {
        jsonPath: jr(Br(e))
      };
    }
    const s = Yi(e, t, r);
    return s.type === "text" ? {
      jsonPath: jr([...Br(e), s.index]),
      offset: s.offset
    } : {
      jsonPath: jr(Br(e)),
      offset: s.index
    };
  }
  if (S(e)) {
    const i = px(e, t, r);
    if (i)
      return {
        jsonPath: jr([
          ...Br(i.parent),
          i.index
        ]),
        offset: i.offset
      };
  }
  return { jsonPath: jr(Br(e)), offset: t };
}
function fd(e) {
  if ($(e)) {
    const r = e.getLastChild();
    if (r && S(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && $(t) ? [t, 0] : [void 0, void 0];
}
function i_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!mo(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Br(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = ws(r);
    if (!n)
      break;
    const i = fx(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Qh() {
  for (let e = Se().getFirstChild(); e; e = e.getNextSibling())
    if (hs(e))
      return !0;
  return !1;
}
function Zh(e, t, r, n, i, s, o) {
  if (!we.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? El(r, i) : w();
  if (!N(a))
    return;
  const c = a_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Ji(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = eg(e, l, c, i, s, void 0, void 0);
  return o_(u, a, i), u;
}
function wl(e) {
  return e !== "expanded";
}
function s_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!S(r) || !I(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function o_(e, t, r) {
  const n = wl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || rx(t), wh(t), xn(t);
  const i = s_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(I)?.selectEnd();
}
function ti(e, t, r) {
  const n = xr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(vr("marker", Ee(e)));
  const s = t === "" ? zt : i ? O + t : t;
  return n.append(ye(s)), n;
}
function a_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(ti("fr", f, n)), !e.isCollapsed()) {
        const p = hd(e);
        p.length > 0 && o.push(ti("fq", p, n));
      }
      o.push(ti("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(ti("xo", f, n)), !e.isCollapsed()) {
        const p = hd(e);
        p.length > 0 && o.push(ti("xq", p, n));
      }
      o.push(ti("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function eg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : wl(n?.noteMode), l = Yc(e, t, c);
  s && Tt(l, Jr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = vr("marker", Ee(e) + " "), a || (f = vr("marker", nt(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = ye(At(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => Bo(), m = r.flatMap(l_(h));
    if (t === "")
      l.append(...m);
    else {
      const y = dl(r);
      let v = () => {
      };
      i?.noteCallerOnClick && (v = i.noteCallerOnClick), p = _l(l.__caller, y, v), l.append(p, h(), ...m);
    }
  }
  return f && l.append(f), l;
}
function pd(e) {
  if (typeof e == "string") {
    const i = Q(e);
    return z(i) ? i : void 0;
  }
  const t = vi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => z(i.node))[e]?.node;
  if (z(n))
    return n;
}
function c_(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Fn(n) || !n) {
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
function l_(e) {
  return (t) => Ct(t) ? [t] : [t, e()];
}
function u_(e) {
  const t = e.getParent();
  return t !== null && it(t, z) !== null;
}
function hd(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = zf(e);
  let a = "";
  for (const c of t)
    if (!(z(c) || pr(c) || u_(c)) && !P(c) && !on(c) && te(c, oe) !== "attribute") {
      if (be(c)) {
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
const tg = [
  Yt,
  St,
  ...Rx
], d_ = [
  Mi,
  ...tg
], f_ = $n((e, t) => {
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
function p_() {
  const [e, t] = pe(void 0), [r, n] = pe(), i = X(null), s = de((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Cb(l, c, () => {
      Sb(l, c, {
        placement: "bottom-start",
        middleware: [Mb(), Eb()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = de(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function h_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = p_();
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
const g_ = Dy(f_);
function rg({ isOpen: e = !1, children: t }) {
  const r = X(null), { coords: n, placement: i } = h_({ isOpen: e, floatingBoxRef: r }), s = De(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return kn(
    _(g_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const ng = Df(void 0);
function Ol() {
  const e = Uf(ng);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function m_(e, t) {
  const [r, n] = pe(0), [i, s] = pe(-1), o = De(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = de(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = de(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = de(() => {
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
function y_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = m_(t, r);
  return _(ng.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const ig = $n(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Ol(), u = de((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = de((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function b_({ children: e, autoIndex: t = !0, ...r }) {
  const n = X(null), { state: { activeIndex: i, menuItems: s } } = Ol(), o = De(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = De(() => {
    const c = o(s);
    return t ? Uy.map(c, (l, u) => Fy(l) && l.type === ig && l.props.index === void 0 ? Ky(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return j(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), _("div", { ref: n, role: "menu", ...r, children: a });
}
const k_ = (e, t, r) => eo(e, r).toLowerCase().includes(t.toLowerCase()), gd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", eo = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function T_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? gd(r[0]) : "") : (u = n || (r.length > 0 ? gd(r[0]) : ""), d = (h, m) => k_(h, m, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return d(h, t);
    } catch (m) {
      return console.warn("Error filtering item:", h, m), !1;
    }
  }).sort((h, m) => {
    const y = (E) => (p.has(E) || p.set(E, eo(E, f).toLowerCase()), p.get(E) ?? ""), v = a ? eo(h, f) : y(h), M = a ? eo(m, f) : y(m);
    for (const E of c)
      switch (E) {
        case "exact":
          if (v === l && M !== l)
            return -1;
          if (M === l && v !== l)
            return 1;
          break;
        case "startsWith":
          if (v.startsWith(l) && !M.startsWith(l))
            return -1;
          if (M.startsWith(l) && !v.startsWith(l))
            return 1;
          break;
        case "contains": {
          const R = v.indexOf(l), C = M.indexOf(l);
          if (R !== -1 && C === -1)
            return -1;
          if (C !== -1 && R === -1)
            return 1;
          if (R !== -1 && C !== -1)
            return R - C;
          break;
        }
      }
    return v.localeCompare(M);
  });
}
const Aa = {
  Root: y_,
  Options: b_,
  Option: ig
};
function x_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return De(() => T_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function v_() {
  const { moveUp: e, moveDown: t, select: r } = Ol();
  return De(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const __ = () => {
  const e = v_(), [t] = le();
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
    return t.registerCommand(Mr, r, Ue);
  }, [t, e]);
};
function C_() {
  return __(), null;
}
const S_ = ["Shift", "Control", "Alt", "Meta"];
function sg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), u = s !== void 0, [d, f] = pe(""), p = u ? s ?? "" : d, h = x_({ query: p, items: t, filterBy: "name" }), m = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(Mr, (y) => {
    if (u || c?.includes(y.key) || S_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const M = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((E) => E.slice(0, -1));
      }
    }[y.key];
    return M ? (y.stopPropagation(), y.preventDefault(), M(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((E) => E + y.key), !0) : !1;
  }, Ue), [l, u, p, o, n, c]), Ce(Aa.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => m(y), children: [!u && _("input", { value: p, type: "text", disabled: !0 }), _(C_, {}), _(Aa.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((M, E) => Ce(Aa.Option, { index: E, children: [_("span", { className: "label", children: M.label ?? M.name }), _("span", { className: "description", children: M.description })] }, M.name)) })] });
}
function M_({ trigger: e, items: t }) {
  const [r] = le(), [n, i] = pe(!1), s = de((o) => {
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
  }), [r]), t && _(rg, { isOpen: n, children: ({ placement: o }) => _(sg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function E_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
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
function rs(e, t) {
  return `${e}:${t}`;
}
function A_(e, t) {
  j(() => {
    if (!e.hasNodes([et]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ye(tp(e, et, (n) => as(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], h = a[l]?.[d], m = c[l]?.[d];
          i.addID(l, d, f, p, h, m);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(et, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = Q(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : ge(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!et.isReservedType(c))
              for (const u of l) {
                let d = t.get(rs(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(rs(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(rs(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const P_ = $n(function({ logger: t, viewOptions: r }, n) {
  const [i] = le(), s = De(() => /* @__PURE__ */ new Map(), []);
  A_(i, s);
  const o = (a, c, l) => {
    const u = Array.from(l ?? s.get(rs(a, c)) ?? []);
    if (u.length !== 0)
      for (const d of u) {
        const f = Q(d);
        ge(f) && (f.deleteID(a, c), f.hasNoIDsForEveryType() && lo(f));
      }
  };
  return Fc(n, () => ({
    setAnnotation(a, c, l, u, d, f, p) {
      if (et.isReservedType(c))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const h = El(a, r);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        o(c, l), Xc(h, c, l, u, d, f, p);
      }, { tag: Ja });
    },
    removeAnnotation(a, c) {
      if (et.isReservedType(a))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      const l = s.get(rs(a, c));
      l === void 0 || l.size === 0 || i.update(() => {
        o(a, c, l);
      }, { tag: Ja });
    }
  })), null;
}), N_ = [];
function w_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = N_, onChange: n }) {
  const [i] = le();
  return Ts(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(jf) && !u.has(fp) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = O_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function O_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Gi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = Q(i), o = s !== null && er(s) !== void 0;
    if (t.size === 1 && S(s) && !o && hv(s)) {
      const a = Uh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = Q(i);
          return new Gi([S(d) ? uc(d) : { insert: "" }]);
        }), l = new Gi([uc(s)]), u = new Gi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = id(r), c = id(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function q_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += R_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), I_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += L_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), U_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function R_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), $_(t, e.retain, e.attributes, r, n)), e.retain);
}
function $_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Se();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Cr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, h = Math.min(s, p);
        if (h > 0) {
          let m = u;
          const y = f > 0, v = h < d - f;
          if (y && v) {
            const [, M] = u.splitText(f);
            [m] = M.splitText(h);
          } else y ? [, m] = u.splitText(f) : v && ([m] = u.splitText(h));
          if (Zr(r)) {
            const M = m.getParent();
            if (I(M)) {
              const E = r.char;
              let R;
              Array.isArray(E) ? a >= 0 && a <= E.length - 1 && (R = E[a]) : a === 0 && (R = E);
              const C = R ? En(R, M) : !1;
              if (C && Array.isArray(E) && E.length > 1) {
                const T = ye("");
                m.replace(T);
                const F = typeof r.segment == "string" ? r.segment : void 0, U = Ai(E.slice(1), n, m, F);
                let G = T;
                for (const J of U)
                  G.insertAfter(J), G = J;
                T.remove(), It(r, m);
              } else if (C)
                It(r, m);
              else {
                m.remove();
                const T = md(m, r, n, i);
                if (T && T.length > 0) {
                  let F = M;
                  for (const U of T)
                    F.insertAfter(U), F = U;
                }
              }
            } else {
              const E = ye("");
              m.replace(E);
              const R = md(m, r, n, i);
              if (R && R.length > 0) {
                let C = E;
                for (const T of R)
                  C.insertAfter(T), C = T;
                E.remove();
              } else
                E.replace(m);
            }
          } else
            It(r, m);
          s -= h;
        }
      }
      o += d;
    } else if (Nt(u))
      e <= o && o < e + t && s > 0 && (yd(u, r), s -= 1), o += 1;
    else if (I(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Zr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            hc(u, p.style), typeof p.cid == "string" && Tt(u, Sn, () => p.cid);
            const h = Ke(p, To);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || G_(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Ha(u), !0;
        }
      }
      d && Ha(u), a -= 1;
    } else if (Pt(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Qt(u))
          yd(u, r);
        else if (ql(r)) {
          const p = cg(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if ($(u)) {
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
function md(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Ai(t.char, r, e, i), o = s.find(I);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), It(t, e);
    return;
  }
  const a = {};
  fg.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), It(t, e), s;
}
function og(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Ee(t))) : Ct(r) && r.getTextType() === "marker" && r.setTextContent(Ee(t) + O);
}
function hc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = I(e.getParent()), i = e.getFirstChild();
  Ct(i) && i.getTextType() === "marker" && i.getTextContent() === Ee(r, n) && i.setTextContent(Ee(t, n));
  const s = e.getLastChild();
  Ct(s) && s.getTextType() === "marker" && s.getTextContent() === nt(r, n) && s.setTextContent(nt(t, n));
}
function yd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && I(e) && Zr(t)) {
      const i = gc(n);
      if (hc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Tt(e, Sn, () => o);
      }
      const s = Ke(i, To);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (We(e) || be(e) || Fe(e) || z(e) || qe(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (gt(e) || ie(e) || I(e)) && (r === "style" && ie(e) ? og(e, n) : r === "style" && I(e) ? hc(e, n) : r === "code" && gt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Tt(e, Jr, () => n));
  }
}
function I_(e, t, r) {
  if (t <= 0)
    return;
  const n = Se();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Cr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Nt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Pt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Pt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Jt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ae(p)) {
            let h = i + 1;
            const m = p.getChildren();
            for (const v of m) {
              if (s <= 0)
                break;
              const M = i;
              if (i = h, o(v)) {
                i = M;
                break;
              }
              Cr(v) ? h += v.getTextContentSize() : Nt(v) && (h += 1), i = M;
            }
            const y = p.getChildren();
            for (const v of y)
              v.remove(), a.append(v);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Jt(), !0);
        } else ie(a) ? a.replace(Jt(), !0) : a.remove();
      }
      i += 1;
    } else if ($(a)) {
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
function L_(e, t, r, n, i) {
  if (t === gs)
    return bd(e, r, n, i);
  if (t.endsWith(gs) && !ql(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Zr(r))
        throw new Error("Text + LF should not have char attributes");
      o += xo(e, s, r, i);
    }
    return o += bd(e + o, r, n, i), o;
  } else return Zr(r) ? D_(e, t, r, n, i) : xo(e, t, r, i);
}
function D_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ye(t === "" ? zt : t);
  It(r, s);
  let o;
  {
    let y = function(v) {
      if (Cr(v)) {
        const M = v.getTextContentSize();
        if (e >= m && e < m + M) {
          const E = v.getParent();
          return I(E) && (o = E), !0;
        }
        m += M;
      } else if (Nt(v))
        m += 1;
      else if (I(v)) {
        const M = v.getChildren();
        for (const E of M)
          if (y(E))
            return !0;
      } else if ($(v)) {
        const M = v.getChildren();
        for (const E of M)
          if (y(E))
            return !0;
        Pt(v) && (m += 1);
      }
      return !1;
    };
    const h = Se();
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
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Ai(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(I);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), xo(e, t, void 0, i);
  const f = {};
  for (const [h, m] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof m == "string" && (f[h] = m);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const h of u)
    if (!ag(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), xo(e, t, void 0, i));
}
function xo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Se();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Cr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = ye(t);
        if (It(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          I(f) && !Zr(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Nt(c))
      s += 1;
    else if (I(c)) {
      if (!o && e === s) {
        const d = ye(t);
        It(r, d);
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
        const d = ye(t);
        return It(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Pt(c)) {
      if (!o && e === s) {
        const d = ye(t);
        It(r, d);
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
        const d = ye(t);
        return It(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if ($(c)) {
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
    const c = ye(t);
    It(r, c);
    const l = Jt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function ag(e, t, r) {
  const n = Se();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!$(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Ae(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Jt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Cr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Nt(l))
        i += 1;
      else if (I(l)) {
        if (o(l))
          return !0;
      } else if (Pt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (Qt(u) && Pt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if ($(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return $(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ae(a) ? Qt(a) && ie(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ae(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (I(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ae(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function U_(e, t, r, n, i) {
  let s;
  return zr("chapter", t) ? s = K_(t.insert.chapter, r) : zr("verse", t) ? s = z_(t.insert.verse, r) : zr("ms", t) ? s = j_(t.insert.ms) : zr("note", t) ? s = lg(t, r, n, i) : zr("unknown", t) ? s = ug(t, r, n, i) : zr("unmatched", t) && (s = V_(t.insert.unmatched, r)), s ? ag(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function bd(e, t, r, n) {
  let i;
  ql(t) ? i = cg(t.para, r) : H_(t) && (i = F_(t.book)), i ??= Jt();
  const s = i, o = ie(s), a = Qt(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Cr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ie(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [m] = h > 0 ? d.splitText(h) : [void 0];
          let y, v = m?.getPreviousSibling();
          for (; v; ) {
            const M = v;
            v = v.getPreviousSibling(), y ? y.insertBefore(M) : s.append(M), y = M;
          }
          return m && s.append(m), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Nt(d))
      c += 1;
    else if (Pt(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Qt(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ie(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ie(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if ($(d)) {
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
  return u(Se()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function F_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== us || !r || !jt.isValidBookCode(r))
    return;
  const n = Ke(e, tv);
  return th(r, n);
}
function cg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ke(e, ev), i = ds(r, n);
  if (!Ei(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), Bo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ee(r) + O;
    i.append(t.hasGutterParaMarkers ? zk(s) : vr("marker", s));
  }
  return i;
}
function K_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ke(e, rv);
  let a;
  if (t.markerMode === "editable")
    a = Fp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = ol(r, c, n, i, s, o);
  }
  return a;
}
function z_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ke(e, nv);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Kt(r, n);
    c = Ap(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = yl(n, l, i, s, o, a);
  }
  return c;
}
function j_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ke(e, iv);
  return gp(t, r, n, s, i);
}
function lg(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Ke(i.note, sv), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const m of c?.ops ?? [])
    if (typeof m.insert == "string")
      if (Zr(m.attributes)) {
        const y = Ai(m.attributes.char, t, ye(m.insert), void 0, dg(m.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(ye(m.insert));
  return eg(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function ug(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ke(i, ov), l = rl(s, o, c), u = a?.ops ?? [];
  u.length > 0 && B_(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Tt(l, Jr, () => d), l;
}
function B_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Zr(s.attributes)) {
        const o = ye(s.insert), a = Ai(s.attributes.char, t, o, void 0, dg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ye(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (zr("unknown", s)) {
        const o = ug(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (zr("note", s)) {
        const o = lg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function V_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = sl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function dg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function gc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Ai(e, t, r, n, i, s = !1, o = !1) {
  S(r) && r.getTextContentSize() === 0 && r.setTextContent(zt);
  const a = () => {
    o && S(r) && r.getTextContent() !== zt && r.setTextContent(O + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(gc), l = c[0], u = i?.[i.length - 1];
    if (I(u) && En(l, u))
      return c.length > 1 ? Ai(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, h) => {
      const m = xr(p.style, Ke(p, To));
      if (typeof p.cid == "string" && Tt(m, Sn, () => p.cid), n && h === c.length - 1 && Tt(m, Jr, () => n), f)
        if (I(f)) {
          const y = f.getMarker(), v = [];
          Na(y, v, t, !0), v.forEach((E) => m.append(E)), m.append(f);
          const M = [];
          Pa(f, M, t, !0), M.forEach((E) => m.append(E));
        } else
          m.append(f);
      return m;
    }, r);
    return Na(l.style, d, t, s), Pa(d, d, t, s), [d];
  } else {
    const c = gc(e), l = i?.[i.length - 1];
    if (I(l) && En(c, l))
      return r && l.append(r), [];
    a();
    const u = xr(c.style, Ke(c, To));
    return typeof c.cid == "string" && Tt(u, Sn, () => c.cid), n && Tt(u, Jr, () => n), r && u.append(r), Na(c.style, u, t, s), Pa(u, u, t, s), [u];
  }
}
function Pa(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && W_(e.getMarker(), t, r, !1, n);
}
function Na(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = vr("marker", Ee(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function W_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = vr("marker", n ? nt("") : nt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function H_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function ql(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Zr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function G_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function It(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Tt(t, Jr, () => n);
        continue;
      }
      if (J_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const fg = [
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
function J_(e) {
  return fg.includes(e);
}
function Y_() {
  const [e] = le();
  return j(() => e.registerCommand($o, (t) => (X_(t), !1), vn), [e]), null;
}
function X_(e) {
  if (Q_(e.target))
    return;
  const t = w();
  N(t) && Z_(t);
}
function Pi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Bt(t))
      r++, t = t.getNextSibling(), S(t) && t.getTextContent() === O && (r++, t = t.getNextSibling());
    else if (be(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Zt(e, r), !0);
}
function Q_(e) {
  if (!Bf(e))
    return !1;
  const t = Ss(e);
  if (!jk(t))
    return !1;
  const r = t.getParent();
  return r ? Ae(r) ? Pi(r) : (Zt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function Z_(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = Q(t.key);
  if (!Ae(r))
    return !1;
  const n = r.getFirstChild();
  return !Or(n) && !Fn(n) ? !1 : Pi(r);
}
function eC() {
  const [e] = le();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !tC(r) || !pg() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ye(
      e.registerCommand(Mr, t, Ue),
      e.registerCommand(jc, t, Ue),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(yr, t, br),
      e.registerCommand(_n, t, br),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Bc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Ss(r.target);
        return !n || !Nn(n) ? !1 : (r.preventDefault(), !0);
      }, Ue),
      e.registerCommand(Qy, t, Ue),
      e.registerCommand(Zy, t, Ue),
      e.registerCommand(eb, t, Ue)
    );
  }, [e]), null;
}
function tC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Nn(e) {
  return it(e, (t) => qe(t) || ch(t)) ?? void 0;
}
function pg() {
  const e = w();
  return N(e) ? Nn(e.anchor.getNode()) !== void 0 || Nn(e.focus.getNode()) !== void 0 : !1;
}
function rC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function nC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), rC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function iC(e, t, r, n) {
  if (!bC(t) || nC(e, r))
    return !1;
  const i = r === "up" ? Zx(t) : Qx(t);
  return i && n.preventDefault(), i;
}
function sC({ viewOptions: e }) {
  const [t] = le();
  return oC(t, e), null;
}
function oC(e, t) {
  j(() => {
    if (!e.hasNodes([fr, St, we]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = kd(o), d = pC(i, Td(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return iC(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = kd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Td(a, n.key) ? l = !c && _d(i, "next") || !c && cC(i) || mC(i) || !c && s && vd(i, "next") : aC(a, n.key) && (l = !c && _d(i, "previous") || !c && lC(i) || yC(i, t) || !c && s && vd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Mr, r, Ue);
  }, [e, t]);
}
function kd(e) {
  return e.dir || "ltr";
}
function Td(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function aC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function mc(e) {
  if (!I(e) || e.getMarker() !== "fp")
    return;
  const t = er(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function cC(e) {
  const t = mc(kh(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Zt(t, 0), !0);
}
function lC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = mc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : xd(n);
  }
  if (t.offset === 0) {
    const n = mc(r);
    return n ? xd(n) : !1;
  }
  return !1;
}
function xd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (S(t))
    return t.select(), !0;
  if ($(t)) {
    const i = t.getLastDescendant();
    return S(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const vo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function uC(e) {
  if (vo)
    for (const { segment: r } of vo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function dC(e) {
  if (vo) {
    let n = 0;
    for (const { index: i } of vo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function hg(e) {
  for (let t = e; t; t = t.getParent())
    if ($(t) && !t.isInline())
      return t;
}
function gg(e) {
  return !!e && P(e) && Nn(e) !== void 0;
}
function mi(e) {
  return S(e) && !e.isToken() && !gg(e) && e.getTextContentSize() > 0;
}
function mg(e) {
  return qo(e) ? !0 : z(e) ? e.getIsCollapsed() === !0 : S(e) ? (e.isToken() || gg(e)) && e.getTextContentSize() > 0 : Vf(e) ? !Fe(e) : !1;
}
function yi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Jo(e, t, r) {
  for (let n = e; n; ) {
    if (mg(n))
      return n;
    if ($(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? yi(n, t, r);
      continue;
    }
    if (mi(n))
      return n;
    n = yi(n, t, r);
  }
}
function Rl(e, t, r, n, i) {
  return r === "element" && $(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? yi(e, n, i) : r === "text" && mg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : yi(e, n, i);
}
function wa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Rl(e.node, e.offset, e.kind, "previous", t), n = Jo(r, "previous", t);
  if (!n)
    return e;
  if (mi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function fC(e, t) {
  const r = e.getNode(), n = hg(r);
  if (!n)
    return;
  if (e.type === "text" && mi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return wa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Rl(r, e.offset, e.type, t, n), s = Jo(i, t, n);
  if (!s)
    return;
  if (mi(s)) {
    const c = s.getTextContent(), l = t === "next" ? uC(c) : dC(c);
    return wa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return wa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function yg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = fC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function vd(e, t) {
  return yg(e, t, "collapse");
}
function pC(e, t) {
  return yg(e, t, "extend");
}
function hC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && mi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Rl(n, e.offset, e.type, t, r);
  return Jo(i, t, r) === void 0;
}
function gC(e, t) {
  const r = Se();
  for (let n = e; n; ) {
    const i = yi(n, t, r), s = i && Jo(i, t, r);
    if (!s)
      return;
    if (n = Nn(s), !n)
      return s;
  }
}
function _d(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Nn(n))
    return !1;
  const i = hg(n);
  if (!i || !hC(r, t, i))
    return !1;
  const s = yi(i, t, Se()), o = s && Nn(s);
  if (!o)
    return !1;
  const a = gC(o, t);
  if (!a)
    return !0;
  if (mi(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Cd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function mC(e) {
  const t = e.anchor.getNode(), r = kh(e);
  if (z(r) && !P(r.getFirstChild())) {
    if (Ae(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Ae(i) && Pi(i)) && i.selectStart(), !0;
      }
    } else return Ct(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ae(t) && z(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Cd(r), !0;
  }
  const n = r?.getParent();
  if (Ct(r) && z(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Cd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function yC(e, t) {
  const r = ZT(e);
  if (qs(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (gt(i.getParent()))
    return !0;
  if (z(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Fn(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Ae(r) && t?.noteMode === "collapsed") {
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
  const s = er(i);
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
function bC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return be(t) && Vf(t);
}
function kC() {
  const [e] = le();
  return TC(e), null;
}
function TC(e) {
  j(() => {
    if (!e.hasNodes([ke]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ye(
      e.registerNodeTransform(ke, _C),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ke, Lk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ke, Bp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ke, (t) => ps(_r("char"), t)),
      e.registerNodeTransform(je, CC)
    );
  }, [e]);
}
function Oa(e) {
  return e.getChildren().some(P);
}
function xC(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Os(n)) {
    const i = n.getTextContent();
    i.startsWith(O) && (i === O ? n.remove() : n.setTextContent(i.slice(O.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function vC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function _C(e) {
  if (!I(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Oa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = te(e, Sn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (I(i) && En({ style: t, cid: r }, i) && $t(n, i.getUnknownAttributes()))
    if (Oa(i)) {
      if (xC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  I(s) && En({ style: t, cid: r }, s) && $t(n, s.getUnknownAttributes()) && (Oa(s) ? vC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function CC(e) {
  const t = e.getParent();
  if (!I(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(zt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function bg(e) {
  return e.replaceAll("	", " ");
}
const $l = (e) => {
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
      n.setData(o, bg(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(yr, s);
  });
}, Il = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", bg(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(yr, i);
  });
};
function SC() {
  const [e] = le();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(io ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(Io, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(_n, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Il(e) : $l(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function MC({ logger: e }) {
  const [t] = le();
  return j(() => Ye(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Mr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), ci),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(yr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ci),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Bc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ci)
  ), [t, e]), null;
}
function EC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function AC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(EC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let PC = 0;
class zi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${PC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function NC({ options: e } = {}) {
  const [t] = le(), [r, n] = pe(() => !t.isEditable()), [i, s] = pe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = pe(void 0), c = De(() => {
    const d = [
      new zi("Cut", {
        onSelect: () => {
          t.dispatchCommand(_n, null);
        },
        isDisabled: r
      }),
      new zi("Copy", {
        onSelect: () => {
          t.dispatchCommand(Io, null);
        }
      }),
      new zi("Paste", {
        onSelect: () => {
          $l(t);
        },
        isDisabled: r
      }),
      new zi("Paste as Plain Text", {
        onSelect: () => {
          Il(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new zi(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = de(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  j(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || sh(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
  const u = X(null);
  return Ts(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${h}px`, d.style.top = `${m}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? kb.createPortal(_("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: _(AC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function wC() {
  const [e] = le();
  return j(() => e.registerCommand(Mr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(io ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, br), [e]), null;
}
function OC({ isEditable: e }) {
  const [t] = le();
  return Ts(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Sd(e) {
  return !!e && ul(Q(e));
}
function kg(e) {
  const [t] = le(), r = X(void 0), n = de((i) => {
    const s = w(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Sd(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = jo(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = JT();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Zt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = Q(a);
      S(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = w(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Hr(Gr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Rs(c) || !c.includes(pi))
        return;
      const l = w(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (YT(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(pi).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ye(t.registerCommand(lr, () => (i(), !1), vn), t.registerCommand(Vc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Sd(a);
      }), c && t.update(() => {
        const l = Q(a);
        S(l) && l.remove();
      }, { tag: Gr }), r.current = void 0, !1;
    }, vn), t.registerNodeTransform(je, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function qC() {
  const e = w();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!$(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!be(i) || jo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || be(s))
    return i;
}
function RC() {
  return kg(qC), null;
}
function $C({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
          f || Hr(tb), o.setEditorState(l), o.dispatchCommand(rb, void 0);
        }, { tag: up });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function IC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return LC(t, n), DC(i, e, r, n), null;
}
function LC(e, t) {
  const r = X(void 0), n = X(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = Dv), r.current !== o && (r.current = o, Md("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = Uv), n.current !== o && (n.current = o, Md("cross-ref-callers", o, t));
  }, [t, s]);
}
function DC(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([ke, we, Yt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => VC(s));
    return Ye(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(we, (s) => UC(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ke, FC),
      e.registerNodeTransform(je, KC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Yt, zC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Yt, (s, { prevEditorState: o }) => jC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(lr, () => BC(e, t, r, n), Ft),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function UC(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => pr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    S(i) && !P(i) && i.getTextContent() !== At(e.getCaller()) && e.insertBefore(i);
  }
}
function FC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => pr(o));
  if (!I(e) || !z(t) || !n)
    return;
  const i = dl(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  S(s) ? s.getTextContent() !== O && s.setTextContent(O) : e.insertAfter(ye(O));
}
function KC(e) {
  const t = er(e), r = t?.getChildren(), n = r?.find((o) => pr(o));
  if (!S(e) || !z(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && z(i) && e.getTextContent() !== O && (e.setTextContent(O), e.selectEnd()), I(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(zt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = dl(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function zC(e) {
  if (!pr(e))
    return;
  const t = e.getNextSibling();
  !S(t) || P(t) ? e.insertAfter(ye(O)) : t.getTextContent() !== O && t.setTextContent(O);
}
function jC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = Q(r), a = o?.getParent();
      return pr(o) && z(a) && a.getCaller() === oo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function BC(e, t, r, n) {
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
      const c = Q(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), ji(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (z(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, ji(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (z(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, ji(e, c, n);
    } else if (!a) {
      const c = it(o, (l) => z(l));
      if (c && c.getIsCollapsed() && Ae(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, ji(e, l, n);
      }
    }
  }
  if (Ae(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Fn(c) && z(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, ji(e, l, n);
    }
  }
  return !1;
}
function ji(e, t, r) {
  const n = Q(t);
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
function VC(e) {
  const t = w();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (z(i) && S(s)) {
    e.preventDefault();
    const o = Ro();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), xn(o);
  }
}
function Md(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (WC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function WC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Yo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Yr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => S(n) && n.getMode() === "token") ? t : [];
}
function HC(e) {
  const t = e.getParent();
  if (z(t))
    return Yo(t).some((r) => r.is(e)) ? t : void 0;
}
function _o(e) {
  const t = Yo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function GC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function JC(e) {
  const t = nb();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= _o(e);
  const i = GC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= _o(e);
}
function yc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = HC(t);
  if (r)
    return YC(r, t, e.offset) ? void 0 : r;
}
function YC(e, t, r) {
  const n = Yo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function XC(e) {
  const t = Yo(e), r = t[t.length - 1];
  S(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Zt(e, _o(e));
}
function QC(e = !1) {
  const t = w();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return ZC(t.anchor, t.focus);
  const r = yc(t.anchor);
  if (!r)
    return !1;
  if (!e && JC(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Zt(n, r.getIndexWithinParent());
  } else
    XC(r);
  return !0;
}
function ZC(e, t) {
  const r = yc(e), n = yc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Ed(e, r, i), n && Ed(t, n, !i), !0;
}
function Ed(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), _o(t), "element");
}
function eS() {
  const [e] = le(), t = X(!1);
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
  }, [e]), j(() => e.registerCommand(lr, () => (QC(t.current) && Hr(Gr), !1), vn), [e]), null;
}
function tS({ onChange: e, viewOptions: t }) {
  const [r] = le();
  return j(() => r.registerCommand(lr, () => {
    const n = Al(t);
    return e?.(n), !1;
  }, Ft), [r, e, t]), null;
}
function rS() {
  const [e] = le();
  return nS(e), null;
}
function nS(e) {
  j(() => {
    if (!e.hasNodes([Xe]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Xe, (t) => iS(t, e));
  }, [e]);
}
function iS(e, t) {
  Dh(t, e.getKey()) && Lh(e.getFirstChild()), !(!ie(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = Q(e.getKey());
    return ie(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Tg({ onStateChange: e }) {
  const [t] = le(), [r, n] = pe(t), i = X(!1), s = X(!1), o = X(void 0), a = X(void 0), c = de(() => {
    const l = w();
    let u;
    if (N(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : it(d, (v) => {
        const M = v.getParent();
        return M !== null && ib(M);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), hs(p) && (p = it(d, ie) ?? p);
      const h = p.getKey(), m = r.getElementByKey(h), y = tx(d, f);
      if (y && Xx(y) && (u = y.getMarker()), m !== null && (ie(p) || gt(p) || qs(p))) {
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
  return j(() => t.registerCommand(lr, (l, u) => (c(), n(u), !1), br), [t, c]), j(() => Ye(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(sb, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), br), r.registerCommand(ob, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), br)), [c, r, e]), null;
}
function sS(e) {
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
  return e ? Ae(e) ? e : it(e, (r) => Ae(r)) ?? void 0 : void 0;
}
function xg(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = en(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Ll(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !Wf(e) ? !1 : e.getNodes().some((t) => be(t));
}
function vg(e) {
  if (!N(e) || !e.isCollapsed())
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
function _g(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = en(r);
  if (!n)
    return !1;
  if ($(r)) {
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
function Ad(e, t) {
  return !!bc(e, t);
}
function bc(e, t) {
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && $(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return be(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return be(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return be(i) ? i : void 0;
}
function Co(e, t) {
  if (!N(e))
    return !1;
  const r = en(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function qa(e) {
  return Ll(e) || xg(e);
}
function oS(e, t) {
  if (Ll(e) || xg(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return vg(e) && Co(e, "backward") || Ad(e, "backward");
    case "deleteForward":
      return _g(e) && Co(e, "forward") || Ad(e, "forward");
    case "insertText":
      return !1;
  }
}
function aS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = bc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (vg(e) && Co(e, "backward")) {
        const n = en(e.anchor.getNode());
        if (Ae(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = bc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (_g(e) && Co(e, "forward")) {
        const i = en(e.anchor.getNode())?.getNextSibling();
        if (Ae(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Pd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Wf(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = en(e.anchor.getNode()), n = en(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Cg(e) {
  if (S(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else $(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function cS(e) {
  const t = e.getPreviousSibling();
  if (!Ae(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Cg(r) : Pi(t) || t.selectStart();
}
function Sg(e) {
  return be(e) || We(e) ? [] : Ae(e) ? e.getChildren().flatMap(Sg) : [e];
}
function lS(e) {
  const t = [];
  for (const r of e) {
    const n = Sg(r);
    n.length !== 0 && (Ae(r) && t.length > 0 && t.push(ye(" ")), t.push(...n));
  }
  return t;
}
function Nd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uS(e) {
  if (Array.isArray(e)) return e;
}
function dS(e, t) {
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
function fS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pS(e, t) {
  return uS(e) || dS(e, t) || hS(e, t) || fS();
}
function hS(e, t) {
  if (e) {
    if (typeof e == "string") return Nd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Nd(e, t) : void 0;
  }
}
const Mg = Object.entries, wd = Object.setPrototypeOf, gS = Object.isFrozen, mS = Object.getPrototypeOf, yS = Object.getOwnPropertyDescriptor;
let tt = Object.freeze, st = Object.seal, si = Object.create, Eg = typeof Reflect < "u" && Reflect, kc = Eg.apply, Tc = Eg.construct;
tt || (tt = function(t) {
  return t;
});
st || (st = function(t) {
  return t;
});
kc || (kc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Tc || (Tc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const ri = He(Array.prototype.forEach), bS = He(Array.prototype.lastIndexOf), Od = He(Array.prototype.pop), ni = He(Array.prototype.push), kS = He(Array.prototype.splice), Vr = Array.isArray, Xi = He(String.prototype.toLowerCase), Ra = He(String.prototype.toString), qd = He(String.prototype.match), Bi = He(String.prototype.replace), Rd = He(String.prototype.indexOf), TS = He(String.prototype.trim), xS = He(Number.prototype.toString), vS = He(Boolean.prototype.toString), $d = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), Id = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), Je = He(Object.prototype.hasOwnProperty), Vi = He(Object.prototype.toString), Ge = He(RegExp.prototype.test), mn = _S(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return kc(e, t, n);
  };
}
function _S(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Tc(e, r);
  };
}
function he(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xi;
  if (wd && wd(e, null), !Vr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (gS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function CS(e) {
  for (let t = 0; t < e.length; t++)
    Je(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = si(null);
  for (const n of Mg(e)) {
    var r = pS(n, 2);
    const i = r[0], s = r[1];
    Je(e, i) && (Vr(s) ? t[i] = CS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function SS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return xS(e);
    case "boolean":
      return vS(e);
    case "bigint":
      return $d ? $d(e) : "0";
    case "symbol":
      return Id ? Id(e) : "Symbol()";
    case "undefined":
      return Vi(e);
    case "function":
    case "object": {
      if (e === null)
        return Vi(e);
      const t = e, r = Wt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Vi(n);
      }
      return Vi(e);
    }
    default:
      return Vi(e);
  }
}
function Wt(e, t) {
  for (; e !== null; ) {
    const n = yS(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = mS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function MS(e) {
  try {
    return Ge(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ld = tt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), $a = tt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ia = tt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ES = tt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), La = tt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), AS = tt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Dd = tt(["#text"]), Ud = tt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Da = tt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Fd = tt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Gs = tt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), PS = st(/{{[\w\W]*|^[\w\W]*}}/g), NS = st(/<%[\w\W]*|^[\w\W]*%>/g), wS = st(/\${[\w\W]*/g), OS = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), qS = st(/^aria-[\-\w]+$/), Kd = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), RS = st(/^(?:\w+script|data):/i), $S = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), IS = st(/^html$/i), LS = st(/^[a-z][.\w]*(-[.\w]+)+$/i), zd = st(/<[/\w!]/g), jd = st(/<[/\w]/g), DS = st(/<\/no(script|embed|frames)/i), US = st(/\/>/i), Et = {
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
}, FS = function() {
  return typeof window > "u" ? null : window;
}, KS = function(t, r) {
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
}, Bd = function() {
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
  return Je(t, r) && Vr(t[r]) ? he(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function Ag() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : FS();
  const t = (D) => Ag(D);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Wt(f, "cloneNode"), h = Wt(f, "remove"), m = Wt(f, "nextSibling"), y = Wt(f, "childNodes"), v = Wt(f, "parentNode"), M = Wt(f, "shadowRoot"), E = Wt(f, "attributes"), R = o && o.prototype ? Wt(o.prototype, "nodeType") : null, C = o && o.prototype ? Wt(o.prototype, "nodeName") : null, T = o && o.prototype ? Wt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const D = r.createElement("template");
    D.content && D.content.ownerDocument && (r = D.content.ownerDocument);
  }
  let F, U = "", G, J = !1, ce = 0;
  const fe = function() {
    if (ce > 0)
      throw mn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Y = function(g) {
    fe(), ce++;
    try {
      return F.createHTML(g);
    } finally {
      ce--;
    }
  }, Pe = function(g) {
    fe(), ce++;
    try {
      return F.createScriptURL(g);
    } finally {
      ce--;
    }
  }, Ne = function() {
    return J || (G = KS(d, i), J = !0), G;
  }, ee = r, K = ee.implementation, re = ee.createNodeIterator, $e = ee.createDocumentFragment, Qe = ee.getElementsByTagName, rr = n.importNode;
  let ue = Bd();
  t.isSupported = typeof Mg == "function" && typeof v == "function" && K && K.createHTMLDocument !== void 0;
  const Ze = PS, qi = NS, nr = wS, jn = OS, Ri = qS, se = RS, ot = $S, aa = LS;
  let $r = Kd, Te = null;
  const xe = he({}, [...Ld, ...$a, ...Ia, ...La, ...Dd]);
  let ae = null;
  const mt = he({}, [...Ud, ...Da, ...Fd, ...Gs]);
  let Oe = Object.seal(si(null, {
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
  })), Vt = null, Us = null;
  const Ot = Object.seal(si(null, {
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
  let $i = !0, hr = !0, cn = !1, Fs = !0, yt = !1, qt = !0, dt = !1, ln = !1, Ir = null, Bn = null, Vn = !1, Lr = !1, un = !1, A = !1, L = !0, B = !1;
  const W = "user-content-";
  let me = !0, at = !1, Rt = {}, Mt = null;
  const Wn = he({}, [
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
  let Ii = null;
  const ou = he({}, ["audio", "video", "img", "source", "image", "track"]);
  let ca = null;
  const au = he({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ks = "http://www.w3.org/1998/Math/MathML", zs = "http://www.w3.org/2000/svg", ir = "http://www.w3.org/1999/xhtml";
  let Hn = ir, la = !1, ua = null;
  const vy = he({}, [Ks, zs, ir], Ra), cu = tt(["mi", "mo", "mn", "ms", "mtext"]);
  let da = he({}, cu);
  const lu = tt(["annotation-xml"]);
  let fa = he({}, lu);
  const _y = he({}, ["title", "style", "font", "a", "script"]);
  let Li = null;
  const Cy = ["application/xhtml+xml", "text/html"], Sy = "text/html";
  let Ie = null, Gn = null;
  const My = r.createElement("form"), uu = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, pa = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Gn && Gn === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = ct(g), Li = // eslint-disable-next-line unicorn/prefer-includes
    Cy.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Sy : g.PARSER_MEDIA_TYPE, Ie = Li === "application/xhtml+xml" ? Ra : Xi, Te = Fr(g, "ALLOWED_TAGS", xe, {
      transform: Ie
    }), ae = Fr(g, "ALLOWED_ATTR", mt, {
      transform: Ie
    }), ua = Fr(g, "ALLOWED_NAMESPACES", vy, {
      transform: Ra
    }), ca = Fr(g, "ADD_URI_SAFE_ATTR", au, {
      transform: Ie,
      base: au
    }), Ii = Fr(g, "ADD_DATA_URI_TAGS", ou, {
      transform: Ie,
      base: ou
    }), Mt = Fr(g, "FORBID_CONTENTS", Wn, {
      transform: Ie
    }), Vt = Fr(g, "FORBID_TAGS", ct({}), {
      transform: Ie
    }), Us = Fr(g, "FORBID_ATTR", ct({}), {
      transform: Ie
    }), Rt = Je(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? ct(g.USE_PROFILES) : g.USE_PROFILES : !1, $i = g.ALLOW_ARIA_ATTR !== !1, hr = g.ALLOW_DATA_ATTR !== !1, cn = g.ALLOW_UNKNOWN_PROTOCOLS || !1, Fs = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, yt = g.SAFE_FOR_TEMPLATES || !1, qt = g.SAFE_FOR_XML !== !1, dt = g.WHOLE_DOCUMENT || !1, Lr = g.RETURN_DOM || !1, un = g.RETURN_DOM_FRAGMENT || !1, A = g.RETURN_TRUSTED_TYPE || !1, Vn = g.FORCE_BODY || !1, L = g.SANITIZE_DOM !== !1, B = g.SANITIZE_NAMED_PROPS || !1, me = g.KEEP_CONTENT !== !1, at = g.IN_PLACE || !1, $r = MS(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : Kd, Hn = typeof g.NAMESPACE == "string" ? g.NAMESPACE : ir, da = Je(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(g.MATHML_TEXT_INTEGRATION_POINTS) : he({}, cu), fa = Je(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? ct(g.HTML_INTEGRATION_POINTS) : he({}, lu);
    const x = Je(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? ct(g.CUSTOM_ELEMENT_HANDLING) : si(null);
    if (Oe = si(null), Je(x, "tagNameCheck") && uu(x.tagNameCheck) && (Oe.tagNameCheck = x.tagNameCheck), Je(x, "attributeNameCheck") && uu(x.attributeNameCheck) && (Oe.attributeNameCheck = x.attributeNameCheck), Je(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (Oe.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), st(Oe), yt && (hr = !1), un && (Lr = !0), Rt && (Te = he({}, Dd), ae = si(null), Rt.html === !0 && (he(Te, Ld), he(ae, Ud)), Rt.svg === !0 && (he(Te, $a), he(ae, Da), he(ae, Gs)), Rt.svgFilters === !0 && (he(Te, Ia), he(ae, Da), he(ae, Gs)), Rt.mathMl === !0 && (he(Te, La), he(ae, Fd), he(ae, Gs))), Ot.tagCheck = null, Ot.attributeCheck = null, Je(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? Ot.tagCheck = g.ADD_TAGS : Vr(g.ADD_TAGS) && (Te === xe && (Te = ct(Te)), he(Te, g.ADD_TAGS, Ie))), Je(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? Ot.attributeCheck = g.ADD_ATTR : Vr(g.ADD_ATTR) && (ae === mt && (ae = ct(ae)), he(ae, g.ADD_ATTR, Ie))), Je(g, "ADD_URI_SAFE_ATTR") && Vr(g.ADD_URI_SAFE_ATTR) && he(ca, g.ADD_URI_SAFE_ATTR, Ie), Je(g, "FORBID_CONTENTS") && Vr(g.FORBID_CONTENTS) && (Mt === Wn && (Mt = ct(Mt)), he(Mt, g.FORBID_CONTENTS, Ie)), Je(g, "ADD_FORBID_CONTENTS") && Vr(g.ADD_FORBID_CONTENTS) && (Mt === Wn && (Mt = ct(Mt)), he(Mt, g.ADD_FORBID_CONTENTS, Ie)), me && (Te["#text"] = !0), dt && he(Te, ["html", "head", "body"]), Te.table && (he(Te, ["tbody"]), delete Vt.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw mn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw mn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = F;
      F = g.TRUSTED_TYPES_POLICY;
      try {
        U = Y("");
      } catch (V) {
        throw F = q, V;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (F = void 0, U = "") : (F === void 0 && (F = Ne()), F && typeof U == "string" && (U = Y("")));
    tt && tt(g), Gn = g;
  }, du = he({}, [...$a, ...Ia, ...ES]), fu = he({}, [...La, ...AS]), Ey = function(g, x, q) {
    return x.namespaceURI === ir ? g === "svg" : x.namespaceURI === Ks ? g === "svg" && (q === "annotation-xml" || da[q]) : !!du[g];
  }, Ay = function(g, x, q) {
    return x.namespaceURI === ir ? g === "math" : x.namespaceURI === zs ? g === "math" && fa[q] : !!fu[g];
  }, Py = function(g, x, q) {
    return x.namespaceURI === zs && !fa[q] || x.namespaceURI === Ks && !da[q] ? !1 : !fu[g] && (_y[g] || !du[g]);
  }, Ny = function(g) {
    let x = v(g);
    (!x || !x.tagName) && (x = {
      namespaceURI: Hn,
      tagName: "template"
    });
    const q = Xi(g.tagName), V = Xi(x.tagName);
    return ua[g.namespaceURI] ? g.namespaceURI === zs ? Ey(q, x, V) : g.namespaceURI === Ks ? Ay(q, x, V) : g.namespaceURI === ir ? Py(q, x, V) : !!(Li === "application/xhtml+xml" && ua[g.namespaceURI]) : !1;
  }, Dr = function(g) {
    ni(t.removed, {
      element: g
    });
    try {
      v(g).removeChild(g);
    } catch {
      if (h(g), !v(g))
        throw mn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, js = function(g) {
    Di(g);
    const x = y(g);
    if (x) {
      const V = [];
      ri(x, (H) => {
        ni(V, H);
      }), ri(V, (H) => {
        try {
          h(H);
        } catch {
        }
      });
    }
    const q = E(g);
    if (q)
      for (let V = q.length - 1; V >= 0; --V) {
        const H = q[V], ne = H && H.name;
        if (typeof ne == "string")
          try {
            g.removeAttribute(ne);
          } catch {
          }
      }
  }, dn = function(g, x) {
    try {
      ni(t.removed, {
        attribute: x.getAttributeNode(g),
        from: x
      });
    } catch {
      ni(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(g), g === "is")
      if (Lr || un)
        try {
          Dr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(g, "");
        } catch {
        }
  }, wy = function(g) {
    const x = E(g);
    if (x)
      for (let q = x.length - 1; q >= 0; --q) {
        const V = x[q], H = V && V.name;
        if (!(typeof H != "string" || ae[Ie(H)]))
          try {
            g.removeAttribute(H);
          } catch {
          }
      }
  }, Di = function(g) {
    const x = [g];
    for (; x.length > 0; ) {
      const q = x.pop();
      (R ? R(q) : q.nodeType) === Et.element && wy(q);
      const H = y(q);
      if (H)
        for (let ne = H.length - 1; ne >= 0; --ne)
          x.push(H[ne]);
    }
  }, Oy = function(g) {
    if (!qt)
      return;
    const x = [g];
    for (; x.length > 0; ) {
      const q = x.pop(), V = R ? R(q) : q.nodeType;
      if (V === Et.processingInstruction || V === Et.comment && Ge(jd, q.data)) {
        try {
          h(q);
        } catch {
        }
        continue;
      }
      if (V === Et.element) {
        const ne = q, ve = Ie(C ? C(q) : q.nodeName);
        try {
          ne.hasAttribute && ne.hasAttribute("patchsrc") && ne.removeAttribute("patchsrc"), ne.hasAttribute && ne.hasAttribute("for") && ve !== "label" && ve !== "output" && ne.removeAttribute("for");
        } catch {
        }
      }
      const H = y(q);
      if (H)
        for (let ne = H.length - 1; ne >= 0; --ne)
          x.push(H[ne]);
    }
  }, pu = function(g) {
    let x = null, q = null;
    if (Vn)
      g = "<remove></remove>" + g;
    else {
      const ne = qd(g, /^[\r\n\t ]+/);
      q = ne && ne[0];
    }
    Li === "application/xhtml+xml" && Hn === ir && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const V = F ? Y(g) : g;
    if (Hn === ir)
      try {
        x = new u().parseFromString(V, Li);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = K.createDocument(Hn, "template", null);
      try {
        x.documentElement.innerHTML = la ? U : V;
      } catch {
      }
    }
    const H = x.body || x.documentElement;
    return g && q && H.insertBefore(r.createTextNode(q), H.childNodes[0] || null), Hn === ir ? Qe.call(x, dt ? "html" : "body")[0] : dt ? x.documentElement : H;
  }, hu = function(g) {
    const x = T ? T(g) : g.ownerDocument;
    return re.call(
      x || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Bs = function(g) {
    return g = Bi(g, Ze, " "), g = Bi(g, qi, " "), g = Bi(g, nr, " "), g;
  }, ha = function(g) {
    var x;
    g.normalize();
    const q = T ? T(g) : g.ownerDocument, V = re.call(
      q || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = V.nextNode();
    for (; H; )
      H.data = Bs(H.data), H = V.nextNode();
    const ne = (x = g.querySelectorAll) === null || x === void 0 ? void 0 : x.call(g, "template");
    ne && ri(ne, (ve) => {
      Jn(ve.content) && ha(ve.content);
    });
  }, Vs = function(g) {
    const x = C ? C(g) : null;
    return typeof x != "string" || Ie(x) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== E(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
    g.childNodes !== y(g);
  }, Jn = function(g) {
    if (!R || typeof g != "object" || g === null)
      return !1;
    try {
      return R(g) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, Ui = function(g) {
    if (!R || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof R(g) == "number";
    } catch {
      return !1;
    }
  };
  function sr(D, g, x) {
    D.length !== 0 && ri(D, (q) => {
      q.call(t, g, x, Gn);
    });
  }
  const qy = function(g, x) {
    return !!(qt && g.hasChildNodes() && !Ui(g.firstElementChild) && Ge(zd, g.textContent) && Ge(zd, g.innerHTML) || qt && g.namespaceURI === ir && x === "style" && Ui(g.firstElementChild) || g.nodeType === Et.processingInstruction || qt && g.nodeType === Et.comment && Ge(jd, g.data));
  }, Ry = function(g, x, q) {
    if (!Vt[x] && bu(x) && (Oe.tagNameCheck instanceof RegExp && Ge(Oe.tagNameCheck, x) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(x)))
      return !1;
    if (me && !Mt[x]) {
      const V = v(g), H = y(g);
      if (H && V) {
        const ne = H.length;
        for (let ve = ne - 1; ve >= 0; --ve) {
          const Le = g === q ? p(H[ve], !0) : H[ve];
          V.insertBefore(Le, m(g));
        }
      }
    }
    return Dr(g), !0;
  }, gu = function(g, x, q, V) {
    return g.length === 0 ? x : x === q || x === V ? ct(x) : x;
  }, mu = function(g, x) {
    if (sr(ue.beforeSanitizeElements, g, null), g !== x && v(g) === null)
      return at && Di(g), !0;
    if (Vs(g))
      return Dr(g), !0;
    const q = Ie(C ? C(g) : g.nodeName);
    if (Te = gu(ue.uponSanitizeElement, Te, xe, Ir), sr(ue.uponSanitizeElement, g, {
      tagName: q,
      allowedTags: Te
    }), g !== x && v(g) === null)
      return at && Di(g), !0;
    if (qy(g, q))
      return Dr(g), !0;
    if (Vt[q] || !(Ot.tagCheck instanceof Function && Ot.tagCheck(q)) && !Te[q]) {
      const H = Ry(g, q, x);
      return H === !1 && sr(ue.afterSanitizeElements, g, null), H;
    }
    if ((R ? R(g) : g.nodeType) === Et.element && !Ny(g) || (q === "noscript" || q === "noembed" || q === "noframes") && Ge(DS, g.innerHTML))
      return Dr(g), !0;
    if (yt && g.nodeType === Et.text) {
      const H = Bs(g.textContent);
      g.textContent !== H && (ni(t.removed, {
        element: g.cloneNode()
      }), g.textContent = H);
    }
    return sr(ue.afterSanitizeElements, g, null), !1;
  }, yu = function(g, x, q) {
    if (Us[x] || qt && x === "patchsrc" || qt && x === "for" && g !== "label" && g !== "output" || L && (x === "id" || x === "name") && (q in r || q in My))
      return !1;
    const V = ae[x] || Ot.attributeCheck instanceof Function && Ot.attributeCheck(x, g);
    if (!(hr && Ge(jn, x))) {
      if (!($i && Ge(Ri, x))) {
        if (V) {
          if (!ca[x]) {
            if (!Ge($r, Bi(q, ot, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && g !== "script" && Rd(q, "data:") === 0 && Ii[g])) {
                if (!(cn && !Ge(se, Bi(q, ot, "")))) {
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
          !(bu(g) && (Oe.tagNameCheck instanceof RegExp && Ge(Oe.tagNameCheck, g) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(g)) && (Oe.attributeNameCheck instanceof RegExp && Ge(Oe.attributeNameCheck, x) || Oe.attributeNameCheck instanceof Function && Oe.attributeNameCheck(x, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && Oe.allowCustomizedBuiltInElements && (Oe.tagNameCheck instanceof RegExp && Ge(Oe.tagNameCheck, q) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(q)))
        ) return !1;
      }
    }
    return !0;
  }, $y = he({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), bu = function(g) {
    return !$y[Xi(g)] && Ge(aa, g);
  }, Iy = function(g, x, q, V) {
    if (F && typeof d == "object" && typeof d.getAttributeType == "function" && !q)
      switch (d.getAttributeType(g, x)) {
        case "TrustedHTML":
          return Y(V);
        case "TrustedScriptURL":
          return Pe(V);
      }
    return V;
  }, Ly = function(g, x, q, V) {
    try {
      q ? g.setAttributeNS(q, x, V) : g.setAttribute(x, V), Vs(g) ? Dr(g) : Od(t.removed);
    } catch {
      dn(x, g);
    }
  }, ku = function(g) {
    sr(ue.beforeSanitizeAttributes, g, null);
    const x = g.attributes;
    if (!x || Vs(g))
      return;
    ae = gu(ue.uponSanitizeAttribute, ae, mt, Bn);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ae,
      forceKeepAttr: void 0
    };
    let V = x.length;
    const H = Ie(g.nodeName);
    for (; V--; ) {
      const ne = x[V], ve = ne.name, Le = ne.namespaceURI, bt = ne.value, kt = Ie(ve), ma = bt;
      let ft = ve === "value" ? ma : TS(ma);
      if (q.attrName = kt, q.attrValue = ft, q.keepAttr = !0, q.forceKeepAttr = void 0, sr(ue.uponSanitizeAttribute, g, q), ft = q.attrValue, B && (kt === "id" || kt === "name") && Rd(ft, W) !== 0 && (dn(ve, g), ft = W + ft), qt && Ge(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        dn(ve, g);
        continue;
      }
      if (kt === "attributename" && qd(ft, "href")) {
        dn(ve, g);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          dn(ve, g);
          continue;
        }
        if (!Fs && Ge(US, ft)) {
          dn(ve, g);
          continue;
        }
        if (yt && (ft = Bs(ft)), !yu(H, kt, ft)) {
          dn(ve, g);
          continue;
        }
        ft = Iy(H, kt, Le, ft), ft !== ma && Ly(g, ve, Le, ft);
      }
    }
    sr(ue.afterSanitizeAttributes, g, null);
  }, Ws = function(g) {
    let x = null;
    const q = hu(g);
    for (sr(ue.beforeSanitizeShadowDOM, g, null); x = q.nextNode(); )
      if (sr(ue.uponSanitizeShadowNode, x, null), mu(x, g), ku(x), Jn(x.content) && Ws(x.content), (R ? R(x) : x.nodeType) === Et.element) {
        const H = M(x);
        Jn(H) && (ga(H), Ws(H));
      }
    sr(ue.afterSanitizeShadowDOM, g, null);
  }, ga = function(g) {
    const x = [{
      node: g,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const q = x.pop();
      if (q.shadow) {
        Ws(q.shadow);
        continue;
      }
      const V = q.node, ne = (R ? R(V) : V.nodeType) === Et.element, ve = y(V);
      if (ve)
        for (let Le = ve.length - 1; Le >= 0; --Le)
          x.push({
            node: ve[Le],
            shadow: null
          });
      if (ne) {
        const Le = C ? C(V) : null;
        if (typeof Le == "string" && Ie(Le) === "template") {
          const bt = V.content;
          Jn(bt) && x.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (ne) {
        const Le = M(V);
        Jn(Le) && x.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, q = null, V = null, H = null;
    if (la = !D, la && (D = "<!-->"), typeof D != "string" && !Ui(D) && (D = SS(D), typeof D != "string"))
      throw mn("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    ln ? (Te = Ir, ae = Bn) : pa(g), (ue.uponSanitizeElement.length > 0 || ue.uponSanitizeAttribute.length > 0) && (Te = ct(Te)), ue.uponSanitizeAttribute.length > 0 && (ae = ct(ae)), t.removed = [];
    const ne = at && typeof D != "string" && Ui(D);
    if (ne) {
      Oy(D);
      const bt = C ? C(D) : D.nodeName;
      if (typeof bt == "string") {
        const kt = Ie(bt);
        if (!Te[kt] || Vt[kt])
          throw js(D), mn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Vs(D))
        throw js(D), mn("root node is clobbered and cannot be sanitized in-place");
      try {
        ga(D);
      } catch (kt) {
        throw js(D), kt;
      }
    } else if (Ui(D))
      x = pu("<!---->"), q = x.ownerDocument.importNode(D, !0), q.nodeType === Et.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? x = q : x.appendChild(q), ga(q);
    else {
      if (!Lr && !yt && !dt && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return F && A ? Y(D) : D;
      if (x = pu(D), !x)
        return Lr ? null : A ? U : "";
    }
    x && Vn && Dr(x.firstChild);
    const ve = ne ? D : x;
    try {
      const bt = hu(ve);
      for (; V = bt.nextNode(); )
        mu(V, ve), ku(V), Jn(V.content) && Ws(V.content);
    } catch (bt) {
      throw ne && (js(D), ri(t.removed, (kt) => {
        kt.element && Di(kt.element);
      })), bt;
    }
    if (ne)
      return ri(t.removed, (bt) => {
        bt.element && Di(bt.element);
      }), yt && ha(D), D;
    if (Lr) {
      if (yt && ha(x), un)
        for (H = $e.call(x.ownerDocument); x.firstChild; )
          H.appendChild(x.firstChild);
      else
        H = x;
      return (ae.shadowroot || ae.shadowrootmode) && (H = rr.call(n, H, !0)), H;
    }
    let Le = dt ? x.outerHTML : x.innerHTML;
    return dt && Te["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Ge(IS, x.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Le), yt && (Le = Bs(Le)), F && A ? Y(Le) : Le;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    pa(D), ln = !0, Ir = Te, Bn = ae;
  }, t.clearConfig = function() {
    Gn = null, ln = !1, Ir = null, Bn = null, F = G, U = "";
  }, t.isValidAttribute = function(D, g, x) {
    Gn || pa({});
    const q = Ie(D), V = Ie(g);
    return yu(q, V, x);
  }, t.addHook = function(D, g) {
    typeof g == "function" && Je(ue, D) && ni(ue[D], g);
  }, t.removeHook = function(D, g) {
    if (Je(ue, D)) {
      if (g !== void 0) {
        const x = bS(ue[D], g);
        return x === -1 ? void 0 : kS(ue[D], x, 1)[0];
      }
      return Od(ue[D]);
    }
  }, t.removeHooks = function(D) {
    Je(ue, D) && (ue[D] = []);
  }, t.removeAllHooks = function() {
    ue = Bd();
  }, t;
}
var zS = Ag();
function jS({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = X(void 0), [n, i] = pe(void 0), s = de((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = sS(p);
      if (!h)
        return !1;
      const m = w();
      return e === "protected" ? m && oS(m, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const m = w(), y = r.current;
      if (y && m && Pd(m, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const M = Q(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (M) {
            const E = M.getParent(), R = M.getPreviousSibling(), C = M.getNextSibling();
            M.remove(), R ? Cg(R) : C && S(C) ? C.select(0, 0) : E?.selectStart();
          }
        } else y.kind === "selection" ? N(m) && m.removeText() : Ae(M) && cS(M);
        return !0;
      }
      if (!m)
        return !1;
      const v = aS(m, p);
      if (v) {
        if (v.kind === "verse") {
          const M = Hf();
          M.add(v.node.getKey()), xn(M);
        } else {
          const M = Ro();
          M.anchor.set(v.node.getKey(), 0, "element"), M.focus.set(v.node.getKey(), v.node.getChildrenSize(), "element"), xn(M);
        }
        return s({ key: v.node.getKey(), kind: v.kind, intent: p }), h.preventDefault(), !0;
      }
      if (N(m) && !m.isCollapsed() && Ll(m)) {
        const M = m.getNodes().filter(be).map((C) => C.getKey()), { anchor: E, focus: R } = m;
        return s({
          kind: "selection",
          intent: p,
          key: M[0],
          anchor: { key: E.key, offset: E.offset, type: E.type },
          focus: { key: R.key, offset: R.offset, type: R.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return !h || !qa(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const m = zS.sanitize(p), y = new DOMParser().parseFromString(m, "text/html"), v = lS(Ab(t, y)), M = w();
      return N(M) && M.insertNodes(v), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && qa(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && qa(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Pd(w(), p) || s(void 0);
      });
    };
    return Ye(t.registerCommand(Mr, o, Ue), t.registerCommand(_n, c, Ue), t.registerCommand(yr, u, Ue), t.registerCommand(ab, c, Ue), t.registerCommand(Bc, d, Ue), t.registerCommand(jc, c, Ue), t.registerUpdateListener(f));
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
const _0 = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function BS({ textDirection: e }) {
  const [t] = le();
  return VS(t, e), null;
}
function VS(e, t) {
  j(() => (Vd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Vd(e, t);
  })), [e, t]);
}
function Vd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function WS() {
  const [e] = le();
  return HS(e), null;
}
function HS(e) {
  j(() => {
    if (!e.hasNodes([ke, St, we, je, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ye(
      e.registerNodeTransform(je, GS),
      e.registerNodeTransform(je, (t) => JS(t, e)),
      e.registerNodeTransform(pt, Wd),
      e.registerNodeTransform(St, Wd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        ps(_r("va"), t), ps(_r("vp"), t);
      })
    );
  }, [e]);
}
function GS(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || z(r) || I(n) || I(r) || ge(n) || ge(r) || qe(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  qe(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  te(e, oe) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  ze(n))
    return;
  if (be(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  be(r) && bl(e);
}
function JS(e, t) {
  const r = e.getParent();
  !qe(r) || !e.isAttached() || Dh(t, e.getKey()) && r.insertAfter(e);
}
function Wd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ge(t); )
    t = t.getLastChild();
  (I(t) || S(t) && ge(t.getParent())) && e.insertBefore(ye(" "));
}
function Dl(e) {
  if (!z(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !ul(n)) ? void 0 : e;
}
function YS(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if ($(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function XS() {
  const e = w();
  if (!(!N(e) || !e.isCollapsed()))
    return Dl(YS(e.anchor));
}
function QS(e) {
  const t = w();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Pg(e.target)), r ? Dl(it(r, z)) : void 0;
}
function Pg(e) {
  const t = cb(e)?.anchorNode;
  if (Bf(t))
    return Ss(t) ?? void 0;
}
function ZS(e) {
  if (w())
    return;
  const t = Pg(e);
  return t ? Dl(it(t, z)) : void 0;
}
function eM() {
  const [e] = le(), t = kg(XS);
  return j(() => {
    const r = (n) => {
      Hr(Gr), t(n);
    };
    return Ye(e.registerCommand(lr, () => {
      const n = ZS(e.getRootElement());
      return n && r(n), !1;
    }, vn), e.registerCommand($o, (n) => {
      const i = QS(n);
      return i && r(i), !1;
    }, vn));
  }, [e, t]), null;
}
function tM({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = E_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(M_, { trigger: e, items: i });
}
function rM({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = De(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(sM, { trigger: e, harness: i }) : _(tM, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const nM = [" ", "*"];
function iM(e, t) {
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
function sM({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = pe(void 0), s = X({ query: "", options: [] }), o = X(0), a = de((f, p, h) => {
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
  j(() => Ye(r.registerCommand(Mr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), lb(() => {
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
  }, Ue), r.registerCommand(Gf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, ci)), [r, e, t, n, a]);
  const c = de(() => i(void 0), []), l = de((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = de((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), d = De(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    iM(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(rg, { isOpen: !0, children: ({ placement: f }) => _(
    sg,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? nM : void 0 },
    n.session
  ) });
}
function Ng(e) {
  return e.replaceAll(O, "~").replace(/ {2,}/g, (r) => O.repeat(r.length));
}
function oM(e) {
  return e.replaceAll(O, " ").replaceAll("~", O);
}
let So;
function aM(e) {
  e && (So = e);
}
function wg(e) {
  return Rr(e);
}
function cM(e, t) {
  return e.isEmpty() ? Ff : Og(e.toJSON(), t);
}
function Og(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Ko(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Ff;
  if (r.some(qx)) {
    So?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = qg(r), i = Ht(n, t);
  return i ? { type: Tr, version: kr, content: i } : void 0;
}
function lM(e, t) {
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
function uM(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Re({
    type: wt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function dM(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Th(r, a, c), Re({
    type: wt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function fM(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Th(t, o, a), Re({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function pM(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !wg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(O) && (t[0] = a.slice(1));
  }
  return Re({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function hM(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function gM(e, t) {
  const { unknownAttributes: r } = e;
  return Re({ type: oh, ...r, content: t });
}
function mM(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Re({ type: lh, marker: r, ...n, content: t });
}
function yM(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Re({
    type: dh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function bM(e, t) {
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
function oi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Re({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Np({ sid: n, eid: i, ...s }, o)
  });
}
function kM(e) {
  return e.text;
}
function TM(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function xM(e) {
  const { marker: t } = e;
  return {
    type: go,
    marker: t === "" ? void 0 : t
  };
}
function Hd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function vM(e, t, r, n, i) {
  const s = Xt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = oi({
      type: s,
      marker: li,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = oi({
      type: s,
      marker: Cn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = oi({
      type: s,
      marker: Cn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = oi({
      type: s,
      marker: li
    });
    i.push(l);
  }
  (!n || !Uo(n)) && t.forEach((l) => {
    const u = oi({
      type: s,
      marker: li,
      eid: l
    });
    i.push(u);
  });
}
function _M(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && Uo(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return Ps(i) && i.markerSyntax === "opening";
}
function CM(e) {
  let t = e;
  for (; Uo(t); ) t = t.children[0];
  return t;
}
function SM(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!Ps(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = CM(e[r]);
  if (An(n) && n.text === At(t))
    return n;
}
function Ht(e, t, r, n = !1, i) {
  const s = [];
  let o, a = [];
  return e.forEach((c, l) => {
    const u = c, d = c, f = c, p = c, h = c, m = c, y = c, v = c;
    switch (c.type) {
      case jt.getType():
        s.push(
          lM(
            u,
            Ht(u.children, t)
          )
        );
        break;
      case fr.getType():
        s.push(uM(c));
        break;
      case wt.getType():
        s.push(
          dM(
            d,
            Ht(d.children, t)
          )
        );
        break;
      case St.getType():
      case pt.getType():
        s.push(fM(c));
        break;
      case ke.getType():
        s.push(
          pM(
            f,
            Ht(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case Xe.getType():
        s.push(
          hM(
            p,
            Ht(p.children, t)
          )
        );
        break;
      case Dn.getType():
        s.push(
          gM(
            c,
            Ht(c.children, t)
          )
        );
        break;
      case Ci.getType():
        s.push(
          mM(
            c,
            Ht(c.children, t)
          )
        );
        break;
      case Si.getType():
        s.push(
          yM(
            c,
            Ht(c.children, t)
          )
        );
        break;
      case we.getType():
        s.push(
          bM(
            h,
            Ht(
              h.children,
              t,
              SM(h.children, h.caller)
            )
          )
        );
        break;
      case Ar.getType():
      case Pr.getType():
      case Yt.getType():
      case Jf.getType():
      case ur.getType():
        break;
      case et.getType():
        if (o = Ht(
          y.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const M = y.typedIDs[Wr];
          if (M)
            vM(o, M, a, e[l + 1], s), a = M;
          else {
            const E = o.shift();
            E && (typeof E == "string" ? Hd(s, E) : s.push(E)), o.length > 0 && s.push(...o);
          }
        }
        break;
      case Xt.getType():
        s.push(oi(c));
        break;
      case je.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Rs(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== O && !m.text.startsWith(Hc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[_s]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let M = kM(m);
          wg(t) && (_M(e, l, i, n) && M.startsWith(O) && (M = M.slice(1)), M = oM(HT(M))), Hd(s, M);
        }
        break;
      case Ln.getType():
        s.push(
          TM(
            v,
            Ht(v.children, t)
          )
        );
        break;
      case wr.getType():
        s.push(xM(c));
        break;
      case Mi.getType():
        So?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        So?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function qg(e) {
  const t = e.findIndex((r) => Ko(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = qg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Ua = {
  initialize: aM,
  deserializeEditorState: cM
}, MM = /^sd\d*$/, EM = /* @__PURE__ */ new Set([
  ...Object.entries(Ya).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !MM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function AM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (rh(i) || mh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!ex(i)) {
      t && Mo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (al(i) && EM.has(i.marker) && !Mo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Rg(i.children, t).forEach((s) => {
      const o = PM(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = NM(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Rg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if ($g(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Uo(i)) {
      const s = Rg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Gd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Gd(i, c.nodes)] });
      });
      return;
    }
    t && Mo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Gd(e, t) {
  return { ...e, children: t };
}
function $g(e) {
  return $h(e) && e.number !== "";
}
function Mo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => $g(r) || Mo(r)) : !1;
}
function PM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function NM(e) {
  return {
    type: yo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Oh
  };
}
const Jd = Lg([]), wM = {
  type: Jf.getType(),
  version: 1
};
let Ul = [], Z, wn, Ig, _t;
function OM(e, t) {
  Ul = [], $M(e), IM(t);
}
function qM(e = 0) {
}
function RM(e, t) {
  Z = t ?? Go();
  let r;
  return e ? (e.type !== Tr && _t?.warn(`This USJ type '${e.type}' didn't match the expected type '${Tr}'.`), e.version !== kr && _t?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${kr}'.`
  ), e.content.length > 0 ? (r = Cc(Kr(e.content)), ms(Z) && (r = AM(r, _t))) : r = [Jd]) : r = [Jd], Ig?.(Ul), {
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
function $M(e) {
  e && (wn = e), e?.addMissingComments && (Ig = e.addMissingComments);
}
function IM(e) {
  e && (_t = e);
}
function Fl() {
  return Rr(Z);
}
function LM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function DM(e) {
  let { marker: t } = e;
  t !== us && _t?.warn(`Unexpected book marker '${t}'!`), t = t ?? us;
  const { code: r } = e;
  (!r || !jt.isValidBookCode(r)) && _t?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  Z?.markerMode === "editable" || Z?.markerMode === "visible" ? n.push(
    xt("marker", Ee(t) + " " + r + O)
  ) : Z?.hasGutterParaMarkers && n.push(xt("marker", Ee(t) + O, !0));
  const i = LM(e.content);
  i && n.push(ut(Fl() ? Ng(i) : i));
  const s = Ke(e, _T);
  return Re({
    type: jt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: eh
  });
}
function UM(e) {
  let { marker: t } = e;
  t !== fo && _t?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? fo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ke(e, $k);
  let a;
  Z?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Kt(t, r) ?? "")
  ];
  return Z?.markerMode === "editable" && rE(i, s, c), Z?.markerMode === "editable" ? Re({
    type: wt.getType(),
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
    version: Up
  }) : Re({
    type: fr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: nh
  });
}
function FM(e) {
  let { marker: t } = e;
  t !== uo && _t?.warn(`Unexpected verse marker '${t}'!`), t = t ?? uo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (jv(Z) ?? St).getType(), c = Z?.markerMode === "editable" ? Ep : Rh;
  let l, u;
  Z?.markerMode === "editable" ? l = Kt(t, r) : Z?.markerMode === "visible" && (u = !0);
  const d = Ke(e, Nk);
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
function KM(e, t = [], r = !1) {
  let { marker: n } = e;
  ke.isValidMarker(n, wn?.extraValidMarkers) || _t?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (Z?.markerMode === "editable") {
    const [a] = t;
    An(a) ? a.text = O + a.text : a && t.unshift(ut(O));
  }
  t.length === 0 && t.push(ut(zt)), xc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ke(e, Mk);
  return s || QM(n, o, i), s || vc(e.marker ?? "", i, !1, r), Re({
    type: ke.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Mp
  });
}
function Lg(e) {
  return {
    type: Xr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Kp
  };
}
function zM(e, t = []) {
  let { marker: r } = e;
  Xe.isValidMarker(r, wn?.extraValidMarkers) || _t?.warn(`Unexpected para marker '${r}'!`), r = r ?? ar;
  const n = [];
  if (Ei(Z) && (Z?.markerMode === "editable" ? n.push(
    ht(r),
    ut(O, dr, "token")
  ) : (Z?.markerMode === "visible" || Z?.hasGutterParaMarkers) && n.push(
    xt(
      "marker",
      Ee(r) + O,
      Z?.hasGutterParaMarkers
    )
  )), n.push(...t), Fl()) {
    const s = n.find(
      (o) => !Ps(o) && !(An(o) && o.text === O)
    );
    An(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => O.repeat(o.length)));
  }
  const i = Ke(e, IT);
  return Re({
    type: Xe.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: ph
  });
}
function Kl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function jM(e, t = []) {
  const r = Ke(e, ET);
  return Re({
    ...Kl(),
    type: Dn.getType(),
    unknownAttributes: r,
    children: t,
    version: ah
  });
}
function BM(e, t = []) {
  const r = Ke(e, NT), n = e.marker ?? ic, i = [];
  return Z?.markerMode === "editable" ? i.push(
    ht(n),
    ut(O, dr, "token")
  ) : (Z?.markerMode === "visible" || Z?.hasGutterParaMarkers) && i.push(
    xt(
      "marker",
      Ee(n) + O,
      Z?.hasGutterParaMarkers
    )
  ), i.push(...t), Re({
    ...Kl(),
    type: Ci.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: uh
  });
}
function VM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? sc;
  Z?.markerMode === "editable" ? s.push(
    ht(o),
    ut(O, dr, "token")
  ) : (Z?.markerMode === "visible" || Z?.hasGutterParaMarkers) && s.push(
    xt(
      "marker",
      Ee(o) + O,
      Z?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Ke(
    e,
    OT
  );
  return Re({
    ...Kl(),
    type: Si.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: fh
  });
}
function WM(e, t) {
  const r = ox(t);
  let n = () => {
  };
  return wn?.noteCallerOnClick && (n = wn.noteCallerOnClick), Re({
    type: Yt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: jh
  });
}
function HM(e, t) {
  let { marker: r } = e;
  we.isValidMarker(r, wn?.extraValidMarkers) || _t?.warn(`Unexpected note marker '${r}'!`), r = r ?? Jc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : wl(Z?.noteMode), a = Ke(e, Hb), c = Z?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  Z?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (u = ht(r, "closing"))) : Z?.markerMode === "visible" && (l = xt("marker", Ee(r) + " "), s || (u = xt("marker", nt(r))));
  const d = [];
  let f;
  if (l && d.push(l), Z?.markerMode === "editable" && !o)
    f = ut(At(i), void 0, c), d.push(f), tE(n, d), d.push(...t);
  else {
    const p = ut(O, dr, "token");
    f = WM(i, t), d.push(f, p, ...t.flatMap(GM(p)));
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
    version: mp
  });
}
function GM(e) {
  return (t) => Hp(t) ? [t] : [t, e];
}
function JM(e) {
  let { marker: t } = e;
  (!t || !Xt.isValidMarker(t, wn?.extraValidMarkers)) && _t?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ke(e, Gc), s = wp(e);
  return Re({
    type: Xt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: pp
  });
}
function Yd(e, t = []) {
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
function YM(e, t) {
  const { marker: r } = e, n = e.type, i = Ke(e, Vk), s = [];
  if (Z?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = nl(
      n,
      r,
      i
    );
    o && s.push(xt("marker", o)), a && s.push(xt("attribute", a)), s.push(...t), c && s.push(xt("attribute", c)), l && s.push(xt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    An(o) && (o.mode = "token");
  }), Re({
    type: Ln.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Gp
  });
}
function XM(e) {
  return {
    type: wr.getType(),
    marker: e,
    text: es(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: Z?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Qp
  };
}
function ht(e, t = "opening", r = !1, n = "normal") {
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
function ut(e, t = void 0, r = "normal") {
  const n = {
    type: je.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[_s] = { textType: t }), n;
}
function xt(e, t, r = !1) {
  const n = {
    type: Pr.getType(),
    text: t,
    textType: e,
    version: Wp
  };
  return r && (n[_s] = { [tl.key]: !0 }), n;
}
function ys(e, t) {
  return {
    type: Ar.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: vp
  };
}
function xc(e, t, r = !1) {
  Z?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : Z?.markerMode === "visible" && t.push(xt("marker", Ee(e, r)));
}
function vc(e, t, r = !1, n = !1) {
  Z?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : Z?.markerMode === "visible" && t.push(
    xt(
      "marker",
      r ? nt("") : nt(e, n)
    )
  );
}
function QM(e, t, r) {
  if (Z?.markerMode !== "editable" || !t) return;
  const n = or(t, Es(e));
  n && r.push(ut(n, "attribute"));
}
function Xd(e, t) {
  if (e.type !== "ms" || Z?.markerMode !== "editable" && Z?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ke(e, Gc), o = Op(
    n,
    i,
    s,
    wp(e)
  ), a = or(o, As(r ?? ""));
  if (!a) return;
  const c = O + a;
  Z?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(xt("attribute", c));
}
function ZM(e, t) {
  const r = e.marker ?? "";
  if (Z?.markerMode === "editable") {
    const n = [];
    xc(r, n), Xd(e, n), vc(r, n, !0), t.push(ys("milestone", n));
  } else
    xc(r, t), Xd(e, t), vc(r, t, !0);
}
function Qd(e, t, r) {
  t !== void 0 && r.push(
    ys(e, [
      ht(e, "opening"),
      ut(O + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function eE(e, t) {
  Z?.markerMode === "editable" && (Qd("va", e.altnumber, t), Qd("vp", e.pubnumber, t));
}
function tE(e, t) {
  e !== void 0 && t.push(
    ys("cat", [
      ht("cat", "opening"),
      ut(O + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function rE(e, t, r) {
  e !== void 0 && r.push(
    ys("ca", [
      ht("ca", "opening"),
      ut(O + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    ys("cp", [
      ht("cp", "opening"),
      ut(O + t, "attribute")
    ])
  );
}
function Zd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function nE(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function ef(e, t) {
  t.marker === Cn && t.sid !== void 0 && e.push(t.sid), t.marker === li && t.eid !== void 0 && nE(e, t.eid);
}
function _c(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Yd(o, [...n])] : o, c = e[i];
  ef(n, c);
  const l = _c(
    e.slice(i + 1, s),
    Zd(t, i + 1),
    c.marker === Cn,
    n
  ), u = Yd(l, [...n]), d = e[s];
  ef(n, d);
  const f = _c(
    e.slice(s + 1),
    Zd(t, s + 1),
    d.marker === Cn,
    n
  );
  return [...a, u, ...f];
}
function Kr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(Fl() ? Ng(i) : i));
    else if (!i.type)
      _t?.error("Marker type is missing!");
    else
      switch (i.type) {
        case jt.getType():
          n.push(DM(i));
          break;
        case wt.getType():
          n.push(UM(i));
          break;
        case pt.getType():
          Z?.hasSpacing || n.push(wM), n.push(FM(i)), eE(i, n);
          break;
        case ke.getType():
          n.push(
            KM(i, Kr(i.content, !0), t)
          );
          break;
        case Xe.getType():
          n.push(zM(i, Kr(i.content)));
          break;
        case we.getType():
          n.push(HM(i, Kr(i.content)));
          break;
        case Xt.getType():
          hp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Ul?.push(i.sid)), n.push(JM(i)), ZM(i, n);
          break;
        case wr.getType():
          n.push(XM(i.marker ?? ""));
          break;
        case oh:
          n.push(jM(i, Kr(i.content)));
          break;
        case lh:
          n.push(BM(i, Kr(i.content)));
          break;
        case dh:
          n.push(VM(i, Kr(i.content)));
          break;
        default:
          _t?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(YM(i, Kr(i.content)));
      }
  }), _c(n, r);
}
function Cc(e) {
  const t = e.findIndex(
    (n) => rh(n) || mh(n) || al(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    PT(n)
  );
  if (t >= 0) {
    const n = Cc(e.slice(0, t)), i = e[t], s = Cc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || $h(n)))
    return [Lg(e)];
  return e;
}
const tn = {
  initialize: OM,
  reset: qM,
  serializeEditorState: RM
};
function Dg(e) {
  if (e && !P(e)) {
    if (S(e)) return e;
    if ($(e))
      for (const t of e.getChildren()) {
        const r = Dg(t);
        if (r) return r;
      }
  }
}
function iE() {
  const e = w();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((S(t) && !P(t) ? Mn(t) : void 0) && S(t)) {
      const i = ye(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      fi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Dg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(O) ? O : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return S(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Ug(e)) {
    if (!Mn(t)) continue;
    fi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(O) && r.setTextContent(n.slice(O.length));
  }
  return !0;
}
function Ug(e) {
  const [t, r] = zf(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!S(a) || P(a) || te(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function sE() {
  const e = w();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return Mn(t) ? Ae(cl(t)) : !1;
}
function Fg() {
  let e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !ml(t, e.anchor.offset)) {
    const c = t.getParent();
    if (I(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = w(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!S(t) || P(t) || !Mn(t)) return !1;
  const r = cl(t);
  if (!Ae(r)) return !1;
  const n = ye(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  fi(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return I(a) ? ll(a) : o.select(0, 0), !0;
}
const Kg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${yh(Se().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = fl(e), r = Tl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = cx(0, o);
        const a = Wx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Ch(c) && pl(parseInt(n, 10), c);
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
function Sc(e, t) {
  return we.isValidMarker(e, t) || !!Kg[e] || Xe.isValidMarker(e, t) || ke.isValidMarker(e, t);
}
function oE(e, t) {
  return ke.isNoteContentMarker(e) ? !1 : ke.isValidMarker(e, t);
}
function zg(e, t, r, n, i, s) {
  const o = Zh(
    e,
    void 0,
    void 0,
    t,
    n ?? Go(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function Mc(e, t, r, n, i, s, o) {
  if (we.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = zg(
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
  const a = fE(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      N(u) && (wh(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Zu(d, tn, r), h = ba(p);
      if (N(u)) {
        const m = u.anchor.getNode(), y = m.getParent(), v = Mn(m), M = u.anchor.key === u.focus.key;
        if (I(h) && v && M && !Fa(h, o))
          lE(
            u,
            h,
            m,
            r?.markerMode === "editable"
          );
        else if (I(h) && !M && !Fa(h, o) && uE(u))
          dE(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          pE(
            u,
            () => ba(p)
          );
        else if ($(h) && !h.isInline()) {
          const E = u.insertParagraph();
          if (E) {
            const R = E.getChildren();
            h.append(...R), E.replace(h), Ae(h) && Pi(h) || h.selectStart();
          }
        } else if (I(h) && S(m) && !P(m) && I(m.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Fa(h, o)) {
          const E = m.getParent();
          if (I(E)) {
            const R = u.anchor.offset;
            if (R === 0) m.insertBefore(h);
            else if (R >= m.getTextContentSize()) m.insertAfter(h);
            else {
              const [T] = m.splitText(R);
              T.insertAfter(h);
            }
            h.getChildren().forEach((T) => {
              P(T) && T.setNested(!0);
            });
            const C = h.getChildren().find((T) => S(T) && !P(T));
            C && S(C) ? C.select(
              C.getTextContentSize(),
              C.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (S(m) && !P(m) && u.isCollapsed() && (z(y) || I(y) && z(y.getParent()))) {
          const E = I(y) ? y : void 0, R = E ? aE(m, u.anchor.offset) : [];
          let T = (E ?? m).insertAfter(h);
          if (Or(h)) {
            const F = {
              ...r || Go(),
              markerMode: "hidden"
            }, U = Zu(
              d,
              tn,
              F
            ), G = ba(U);
            T = T.insertAfter(G);
          }
          if (R.length > 0 && E) {
            const F = Eo(E).append(...R);
            T.insertAfter(F), E.isEmpty() && E.remove();
          } else S(T.getNextSibling()) || T.insertAfter(ye(O));
          $(T) && T.selectEnd();
        } else if (u.insertNodes([h]), _E(h), f) {
          const E = Hf();
          E.add(h.getKey()), xn(E);
        } else if (I(h)) {
          const E = h.getChildren().find((R) => S(R) && !P(R));
          E && S(E) ? E.select(
            E.getTextContentSize(),
            E.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const E = h.getNextSibling();
          E ? E.selectStart() : h.selectStart();
        }
      } else
        u?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function aE(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Fa(e, t) {
  return ((t ?? bo).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function cE(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function lE(e, t, r, n) {
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
    const [o, a] = bi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (fi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), S(i) && !i.getTextContent().startsWith(O) && i.setTextContent(O + i.getTextContent());
    const o = t.getChildren().find((a) => S(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => S(o) && !P(o));
  S(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function uE(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || I(n)) continue;
    if (!S(n) || n.getType() !== je.getType() || te(n, oe) === "attribute") return !1;
    const i = cl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Mn(n) && (r = !0);
  }
  return r;
}
function dE(e, t, r) {
  const n = Ug(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Mn(a)) return;
    fi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(O) && c.setTextContent(l.slice(O.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(O) || i.setTextContent(O + i.getTextContent());
  const s = t.getChildren().find((a) => S(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function fE(e, t) {
  let r = Kg[e];
  return r || (Xe.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Xe.getType(), marker: e, content: [] }] })
  } : ke.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ke.getType(), marker: e };
      return (ke.isValidFootnoteMarker(e) || ke.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function pE(e, t) {
  const r = e.getNodes(), [n, i] = bi(e);
  let s;
  r.forEach((o, a) => {
    if ($(s) && s.isParentOf(o))
      return;
    const c = jg(
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
    s || (s = t(), c.insertBefore(s), l = !0, I(s) && s.getChildren().some((d) => P(d) && d.getMarkerSyntax() === "opening") && cE(s, I(s.getParent()))), gE(c, s, l);
  }), (S(s) || $(s)) && s.selectEnd();
}
function bi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function zl(e) {
  return ge(e) || z(e) || z(e.getParent());
}
function jg(e, t, r, n, i) {
  if (!zl(e)) {
    if (S(e))
      return hE(e, t, r, n, i);
    if ($(e) && e.isInline())
      return e;
  }
}
function hE(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function gE(e, t, r) {
  if (S(t)) {
    const n = Ec(e, t);
    t.setTextContent(n), e.remove();
  } else if ($(t)) {
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
    Ec(e, t), r && I(t) && t.getChildren().some((s) => P(s)) && S(e) && !P(e) && !e.getTextContent().startsWith(O) && e.setTextContent(O + e.getTextContent());
  }
}
function Ec(e, t) {
  let r = e.getTextContent();
  if (S(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    bl(n), S(n) || t.insertBefore(ye(" "));
  }
  return r;
}
function Bg(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = On(u, t);
    if (!f) return !1;
    const p = S(u) ? u.getTextContentSize() : 0;
    if (tf(f, r), S(u) && u.isAttached()) {
      const h = u.getTextContentSize(), m = Math.max(p - h, 0), y = Math.max(0, Math.min(d - m, h)), v = w();
      N(v) && v.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = bi(e);
  if (!Bl(n, t, s, o)) return !1;
  const a = jl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = On(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Gg(d, a);
    f && (tf(f, r), l = !0);
  }), Jg(a, i), l;
}
function tf(e, t) {
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
    S(n) && i.startsWith(O) && n.setTextContent(i.slice(O.length));
  }), Ha(e);
}
function jl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = jg(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    S(o) && n.push(o);
  }), n;
}
function On(e, t) {
  let r = e, n;
  for (; r && !Ae(r); ) {
    if (z(r)) return;
    !n && I(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Vg(e) {
  const t = it(
    e,
    (r) => z(r) || Ae(r)
  );
  return z(t);
}
function Wg(e) {
  return e.filter(
    (t) => !zl(t) && (S(t) || $(t) && t.isInline())
  );
}
function mE(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!S(i) || zl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function yE(e, t, r) {
  return e.getChildren().some(
    (n) => $(n) && t.some((i) => n.isParentOf(i)) && !Hg(n, r)
  );
}
function Bl(e, t, r, n, i) {
  const s = Wg(e), o = mE(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = On(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !yE(l, s, o);
  });
}
function Hg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Bt(r));
}
function Gg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if ($(u) && t.some((d) => u.isParentOf(d))) {
      if (!Hg(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Bt(n[s - 1]) && (s -= 1), o < n.length - 1 && Bt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Eo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Eo(e).append(...c)), e;
}
function Eo(e) {
  return ub(e);
}
function Jg(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function bE(e, t, r) {
  if (e.isCollapsed()) {
    const l = On(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Ku(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = bi(e);
  if (!Bl(n, r, i, s, t)) return !1;
  const o = jl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = On(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Gg(u, o);
    d && (Ku(d, t), c = !0);
  }), c;
}
function kE(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = bi(e);
  if (!!!i?.some(
    (y) => Bl(s, y, o, a)
  ) && !TE(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const v = w();
    N(v) && Bg(v, y, n) && (l = !0);
  });
  const u = w();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = bi(u), h = jl(
    u.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const m = h.filter(
    (y) => !Vg(y) && !On(y, t)
  );
  return m.length > 0 && (xE(m).forEach((y) => vE(y, t)), l = !0), Jg(h, d), l;
}
function TE(e, t) {
  return Wg(e).some(
    (r) => !Vg(r) && !On(r, t)
  );
}
function xE(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function vE(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => I(a) && a.getMarker() === t
  ), s = i ? Eo(i) : xr(t);
  e[0].insertBefore(s), s.append(...e), i === r || Ec(e[0], s);
}
function _E(e) {
  be(e) && (bl(e.getPreviousSibling()), Lh(e.getNextSibling()));
}
const Yg = {
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
}, rf = "psc-active-text", Js = "psc-empty-text";
function CE({ viewOptions: e }) {
  const [t] = le(), r = X(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(rf), r.current = o, o && t.getElementByKey(o)?.classList.add(rf);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        $o,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Js}`);
          if (!c) return !1;
          const l = Ss(c);
          if (!be(l)) return !1;
          const u = l.getParent();
          if (!$(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Ft
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Ka(), f = SE(), p = [], h = [];
          return Se().getChildren().forEach((m) => {
            if (!$(m)) return;
            const { emptyKeys: y, nonEmptyKeys: v } = EE(m);
            p.push(...y), h.push(...v);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Js) : t.getElementByKey(d)?.classList.add(Js);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Js));
      }),
      t.registerCommand(
        Vc,
        () => (i(void 0), !1),
        Ft
      ),
      t.registerCommand(
        db,
        () => {
          const o = t.getEditorState().read(Ka);
          return o !== r.current && i(o), !1;
        },
        Ft
      )
    ];
    return i(t.getEditorState().read(Ka)), Ye(...s);
  }, [t, n]), null;
}
function Ka() {
  return ME(w() ?? void 0)?.getKey();
}
function SE() {
  const e = w();
  if (!N(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!$(n)) return;
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
    be(s[a]) && (o = s[a].getKey());
  return o;
}
function ME(e) {
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function EE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!be(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (be(c)) break;
      if (!(Ct(c) || P(c)) && c.getTextContent().replaceAll(so, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const AE = /^\+/;
function Vl(e, t) {
  const r = t.replace(AE, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Xg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Qg(e, t) {
  return Xg(e, t) !== void 0;
}
function Ac(e, t) {
  const r = Xg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Ao(e, t, r) {
  const n = $(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function PE(e, t, r, n, i) {
  const s = Vl(n, t);
  if (!s) {
    Ao(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Ao(e, "invalid", i);
}
function ns(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (I(s)) {
      const o = s.getMarker();
      i || PE(s, o, t, r, n), ns(s, t, r, n, i || o === "xq");
    } else if (be(s)) {
      if (i) continue;
      const o = Vl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else z(s) ? ns(s, s.getMarker(), r, n, i) : qe(s) || $(s) && ns(s, t, r, n, i);
}
function NE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Vl(e, a);
    if (!c) {
      Ao(o, "unknown", r), Ac(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Ac(n, l) || Ao(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Se().getChildren())
    qe(o) || (gt(o) || We(o) ? i(o, o.getMarker()) : ie(o) ? (i(o, o.getMarker()), s(o) && ns(o, o.getMarker(), e, r, !1)) : $(o) && s(o) && ns(o, "p", e, r, !1));
  return r;
}
function wE(e) {
  return !!e?.includes("(basic)");
}
function OE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Zg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Sc(e, t);
}
function Wl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function em(e, t) {
  const r = [];
  for (const n of t) {
    const i = Wl(e, n);
    i && Ac(r, i);
  }
  return r;
}
function to(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: OE(e.description),
    isBasic: wE(e.description)
  };
}
function qE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Pc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : qE(e.marker, t.marker);
}
function Nc(e, t, r) {
  if (t.noteMarker) return [];
  const n = em(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Zg(i.marker, r)
  ).filter((i) => {
    const s = Wl(e, i.marker);
    return s !== void 0 && Qg(n, s);
  }).map((i) => to(i, "paragraph")).sort(Pc);
}
function RE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Zg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => to(c, "character")).sort(Pc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => to(c, "character")),
    ...a.map((c) => to(c, "note"))
  ].sort(Pc);
}
function $E(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function IE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function LE(e, t, r) {
  return [
    ...$E(e, t.openCharMarkers),
    ...RE(e, t, r)
  ].sort(IE);
}
function DE(e, t, r) {
  if (t.source === "paragraph") return Nc(e, t, r);
  const n = LE(e, t, r);
  return n.length > 0 ? n : Nc(e, t, r);
}
function UE(e, t, r) {
  const n = Nc(e, t, r), i = em(e, t.previousParaMarkers), s = Wl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Qg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const Kn = String.raw`\w-`, tm = "a-z0-9", FE = `[a-z][${tm}]*`, KE = new RegExp(
  String.raw`^\\(\+?[${Kn}]+)[ \u00A0]$`
), rm = new RegExp(String.raw`^\\(\+?[${Kn}]+)$`), zE = new RegExp(String.raw`^\\\+?[${Kn}]*\*$`), jE = new RegExp(
  String.raw`^\\(\+?[${Kn}]+)(?:[ \u00A0]|$)`
), BE = new RegExp(
  String.raw`^\\(\+?)([${Kn}]+)`
), VE = new RegExp(
  String.raw`\\\+?[${Kn}]+(?:\\?\*|[ \u00A0])`
), WE = new RegExp(
  String.raw`\\\+?[${Kn}]*$`
), HE = new RegExp(
  String.raw`^\\(${FE})( |$)`
), GE = new RegExp(
  String.raw`\\[${tm}+*]*$`,
  "i"
), rt = "￼";
function nm(e) {
  return e.length > 1 && e.startsWith(O) && e.charAt(1) !== rt ? e.slice(1) : e;
}
function nf(e) {
  return Ps(e) ? e.markerSyntax ?? "opening" : void 0;
}
function im(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = tn.serializeEditorState(
    {
      type: Tr,
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
  for (; nf(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== At(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && nf(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Ys(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Wi(e, t) {
  WE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += rt;
}
function Ut(e) {
  return e.replaceAll(O, " ");
}
function JE(e, t, r = !1) {
  if (Rr(t)) return Ut(e);
  if (e === O) return " ";
  const n = r && e.startsWith(O), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(O, "~");
}
function is(e) {
  const t = e.getTextContent();
  return Un(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Xo(e, t) {
  const r = e[t];
  if (!Fe(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Fo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function sm(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Qo(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = cs(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Hl(e) {
  return !!e.getUnknownAttributes();
}
function Zo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Lo(e);
}
function om(e, t) {
  return Fe(e) ? !Zo(e.getMarker(), t) : z(e) || qe(e) ? !0 : Me(e) ? Hl(e) : I(e) ? am(e, t) : !1;
}
function am(e, t) {
  if (Ok(e)) return !0;
  const r = e.getMarker();
  return !sk(r) && t(r) === void 0;
}
const Lt = "", Dt = "";
function sf(e) {
  return e.flatMap((t) => ze(t) ? t.getChildren() : [t]);
}
function ai(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Fe(s)) {
      const o = Xo(e, i);
      Zo(s.getMarker(), r) && sm(o) ? (t.push(
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
      ), ai(sf(o), t, r), t.push(Dt)) : t.push(rt), i += o.length;
    } else if (Me(s)) {
      const o = Qo(e, i);
      Hl(s) ? t.push(rt) : (t.push(
        Lt,
        "verse",
        Ut(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ai(sf(o), t, r), t.push(Dt)), i += o.length;
    } else P(s) ? t.push(Lt, "marker", Ut(s.getTextContent()), Dt) : on(s) ? t.push(Lt, "unmatched", Ut(s.getTextContent()), Dt) : om(s, r) ? t.push(rt) : qo(s) ? t.push(" ") : S(s) ? t.push(
      Ut(
        n ? nm(is(s)) : is(s)
      )
    ) : I(s) ? (t.push(Lt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ai(s.getChildren(), t, r, !0), t.push(Dt)) : ge(s) ? ai(s.getChildren(), t, r, n) : $(s) ? (t.push(Lt, s.getType()), ai(s.getChildren(), t, r), t.push(Dt)) : t.push(rt);
  }
}
function Ni(e, t) {
  const r = [];
  return ai(e, r, t), r.join("");
}
function Sr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function ki(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Gl(e) {
  return e.type ?? "";
}
function cm(e, t, r) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Ee(e, r);
}
function za(e, t) {
  const r = e[t];
  if (!(!r || Gl(r) !== "attribute-run"))
    return Sr(r) ?? [];
}
function wi(e, t) {
  const r = [];
  return Qi(e, r, t), r.join("");
}
function Qi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Gl(s);
    if (o === "ms") {
      const l = s, u = za(e, i + 1);
      u && Zo(l.marker ?? "", r) ? (t.push(
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
      ), Qi(u, t, r), t.push(Dt), i += 1) : t.push(rt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(rt);
        continue;
      }
      t.push(
        Lt,
        "verse",
        Ut(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = za(e, i + 1 + u);
      for (; d; )
        Qi(d, t, r), u++, d = za(e, i + 1 + u);
      t.push(Dt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Lt,
        "marker",
        Ut(
          cm(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Dt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Lt, "char", JSON.stringify(l.unknownAttributes ?? null)), Qi(Sr(s) ?? [], t, r, !0), t.push(Dt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(rt);
      continue;
    }
    if (o === "unmatched") {
      t.push(Lt, "unmatched", Ut(ki(s) ?? "")), t.push(Dt);
      continue;
    }
    const a = ki(s);
    if (a !== void 0) {
      t.push(Ut(n ? nm(a) : a));
      continue;
    }
    const c = Sr(s);
    c ? (t.push(Lt, o), Qi(c, t, r), t.push(Dt)) : t.push(rt);
  }
}
function ea(e) {
  let t = 0;
  for (const r of e) {
    const n = Sr(r);
    if (n) {
      t += ea(n);
      continue;
    }
    const i = ki(r);
    if (i !== void 0)
      for (const s of i) s === rt && t++;
  }
  return t;
}
function bs(e, t, r, n, i) {
  rn(e.getChildren(), t, r, n, i);
}
function rn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      Ys(t, a, Ut(a.getTextContent()));
    else if (Fe(a)) {
      s();
      const c = Xo(e, o);
      Zo(a.getMarker(), r) && sm(c) ? rn(c, t, r, n) : Wi(t, [a, ...c]), o += c.length;
    } else if (z(a) || qe(a))
      s(), Wi(t, [a]);
    else if (Me(a)) {
      s();
      const c = Qo(e, o);
      Hl(a) ? Wi(t, [a, ...c]) : (Ys(t, a, Ut(is(a))), rn(c, t, r, n)), o += c.length;
    } else if (I(a))
      s(), am(a, r) ? Wi(t, [a]) : bs(a, t, r, n, { pending: !0 });
    else if (qo(a))
      s(), Ys(t, a, " ");
    else if (S(a)) {
      const c = Un(a) || te(a, oe) === "attribute", l = s() && !c;
      Ys(
        t,
        a,
        c ? Ut(is(a)) : JE(is(a), n, l)
      );
    } else $(a) ? bs(a, t, r, n, i) : (s(), Wi(t, [a]));
  }
}
function lm(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (qe(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return bs(e, i, t, r), i;
}
function Jl(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!ie(i)) return;
    const s = lm(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function um(e, t) {
  let r = 0;
  const n = (i) => {
    if (S(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(rt);
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
    } else $(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function wc(e, t = []) {
  for (const r of e)
    Me(r) ? t.push(r) : $(r) && wc(r.getChildren(), t);
  return t;
}
function dm(e) {
  let t = 0;
  const r = (n) => {
    if (S(n))
      for (const i of n.getTextContent()) i === rt && t++;
    else $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function zn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === rt && t++;
    else r.content && (t += zn(r.content));
  return t;
}
function fm(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), $(i) && bs(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const qn = /\s/;
function pm(e) {
  return e.filter(ta).length;
}
function ta(e) {
  if (e.isSentinel) return !1;
  const t = Q(e.key);
  return S(t) && !P(t) && te(t, oe) === "attribute";
}
function YE(e) {
  if (e.isSentinel) return !1;
  const t = Q(e.key);
  return P(t) || ta(e);
}
function of(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && ta(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      qn.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Rn(e, t, r) {
  const n = of(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !YE(i) ? of(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: pm(e.spans) };
}
function ja(e) {
  if (e.isSentinel) return !1;
  const t = Q(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function XE(e) {
  const t = Q(e.key);
  if (!P(t)) return;
  const r = t.getParent();
  if (!I(r)) return;
  const n = r.getParent();
  if (n)
    return {
      key: n.getKey(),
      offset: r.getIndexWithinParent() + 1,
      type: "element"
    };
}
function QE(e) {
  const t = Q(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Me(t) ? Qo(n, i) : Fe(t) ? Xo(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function Ti(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e, s = pm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const p of i) {
    const h = p.end - p.start, m = !p.isSentinel && (r || !ja(p));
    if (!(o && ta(p))) {
      if (u) {
        if (!m) continue;
        a = { key: p.key, offset: 0 };
        break;
      }
      for (let y = 0; y < h; y++) {
        const v = n[p.start + y];
        if (c === 0 && (l === 0 || !qn.test(v))) {
          if (m) {
            a = { key: p.key, offset: y };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? qn.test(v) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (m && !r) {
          a = { key: p.key, offset: h };
          break;
        }
        u = !0;
      }
    }
  }
  if (a) return { ...a, type: "text" };
  const d = i[i.length - 1];
  if (d && ja(d)) {
    const p = XE(d);
    if (p) return p;
  }
  if (d?.isSentinel) {
    const p = QE(d);
    if (p) return p;
  }
  const f = [...i].reverse().find((p) => !p.isSentinel && !ja(p));
  if (f) return { key: f.key, offset: f.end - f.start, type: "text" };
}
function hm(e, t = []) {
  for (const r of e)
    ge(r) && t.push(r), $(r) && hm(r.getChildren(), t);
  return t;
}
function gm(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), $(e) && e.getChildren().forEach((r) => gm(r, t)), t;
}
function ZE(e, t) {
  const r = Rn(e, t.key, 0);
  if (r)
    return t.isSentinel ? { kind: "preserved", anchor: r, key: t.key } : { kind: "byte", anchor: r };
}
function mm(e, t) {
  const r = [];
  for (const n of hm(e)) {
    const i = gm(n), s = t.spans.filter((m) => i.has(m.key)), o = s[0], a = s[s.length - 1];
    if (!o || !a) continue;
    const c = ZE(t, o), l = Rn(t, a.key, a.end - a.start);
    if (!c || !l) continue;
    const u = n.getTypedOnClicks(), d = n.getTypedOnRemoves(), f = n.getTypedOnMouseEnters(), p = n.getTypedOnMouseLeaves(), h = Object.entries(n.getTypedIDs()).flatMap(
      ([m, y]) => y.map((v) => ({
        type: m,
        id: v,
        onClick: u[m]?.[v],
        onRemove: d[m]?.[v],
        onMouseEnter: f[m]?.[v],
        onMouseLeave: p[m]?.[v]
      }))
    );
    h.length > 0 && r.push({ annotations: h, start: c, end: l });
  }
  return r;
}
function e1(e, t, r) {
  const n = Q(e), s = n?.getParent()?.getChildren();
  if (!n || !s) return;
  const o = s.findIndex((d) => d.is(n));
  if (o < 0) return;
  const a = Me(n) ? Qo(s, o) : Fe(n) ? Xo(s, o) : [], l = (a[a.length - 1] ?? n).getNextSibling();
  if (!ge(l) || !l.hasID(t, r)) return;
  const u = l.getFirstChild();
  u && [n, ...a].forEach((d) => u.insertBefore(d));
}
function af(e) {
  return e.type === "text" && P(Q(e.key));
}
function ym(e, t) {
  if (e.length === 0) return;
  const r = w()?.clone() ?? null;
  for (const n of e)
    for (const i of n.annotations) {
      const s = t(), o = Ti(s, n.start.anchor, {
        addressDisplayBytes: !0
      }), a = Ti(s, n.end);
      if (!o || !a || af(o) || af(a) || o.key === a.key && o.offset === a.offset && o.type === a.type) continue;
      const c = Ro();
      c.anchor.set(o.key, o.offset, o.type), c.focus.set(a.key, a.offset, a.type), Xc(
        c,
        i.type,
        i.id,
        i.onClick,
        i.onRemove,
        i.onMouseEnter,
        i.onMouseLeave
      ), n.start.kind === "preserved" && e1(n.start.key, i.type, i.id);
    }
  xn(r);
}
function bm(e, t, r) {
  const n = Ti(e, t);
  if (n?.type === "text") {
    const i = Q(n.key);
    if (i && S(i)) {
      i.select(n.offset, n.offset);
      return;
    }
  } else if (n) {
    const i = Q(n.key), s = $(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find($)?.selectStart();
}
function km(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find($)?.selectStart();
      return;
    }
    bm(fm(e, n, i), t, e);
  }
}
function t1(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find($)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  rn(e, s, n, i), bm({ text: s.text, spans: s.spans }, t, e);
}
function Tm(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Jl(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = w();
  if (N(c)) {
    for (let y = c.anchor.getNode(); y; y = y.getParent())
      if (e.some((v) => v.is(y))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Rn(s, c.anchor.key, c.anchor.offset));
  }
  const l = mm(e, s), u = Er(s.text, {
    getMarker: n
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (zn(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = tn.serializeEditorState(
    { type: Tr, version: kr, content: u },
    r
  );
  if (wi(d.root.children, n) === Ni(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = d.root.children.map((y) => xs(y));
  if (dm(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = wc(e).map((y) => ({
    number: y.getNumber(),
    sid: y.getSid()
  })), h = e[0];
  f.forEach((y) => h.insertBefore(y)), um(f, s.sentinels), e.forEach((y) => y.remove());
  const m = wc(f);
  for (let y = 0; y < p.length && y < m.length; y++)
    m[y].getNumber() === p[y].number && m[y].setSid(p[y].sid);
  return ym(l, () => fm(f, n, r)), km(f, o, a, n, r), !0;
}
function ra(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !we.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!P(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(pr(s) || S(s) && s.getTextContent() === At(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!P(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return rn(c, l, t, r), { out: l, contentNodes: c };
}
function xm(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(rt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function r1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = ra(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (N(u)) {
    for (let C = u.anchor.getNode(); C; C = C.getParent())
      if (e.is(C)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Rn(o, u.anchor.key, u.anchor.offset));
  }
  const d = mm(a, o), f = Er(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (f.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (zn(f) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], m = xm(h), y = im(e, h, m, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (ea(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const v = e.getCategory() !== m;
  if (v && e.setCategory(m), wi(y.children, n) === Ni(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), v;
  const M = y.children.map((C) => xs(C));
  if (dm(M) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), v;
  const E = a[0];
  if (E)
    M.forEach((C) => E.insertBefore(C));
  else {
    const C = e.getChildren().find((T) => P(T) && T.getMarkerSyntax() === "closing");
    M.forEach((T) => C ? C.insertBefore(T) : e.append(T));
  }
  um(M, o.sentinels);
  const R = new Set(o.sentinels.flat().map((C) => C.getKey()));
  return a.forEach((C) => {
    R.has(C.getKey()) || (ge(C) && (C.getWritable().__suppressOnRemoveCallbacks = !0), C.remove());
  }), ym(d, () => {
    const C = { text: "", spans: [], sentinels: [] };
    return rn(M, C, n, r), C;
  }), t1(M, c, l, n, r), !0;
}
const vm = /* @__PURE__ */ new Set(["ca", "cp"]), Yl = "cp";
function _m(e) {
  if (!Qt(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (bs(e, t, cr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Er(r, { getMarker: cr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Yl)
  );
}
function Oi(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (I(r) && vm.has(r.getMarker()) || _m(r)) {
      t.push(r);
      continue;
    }
    ie(r) && r.getMarker() === Yl && t.push(r);
    break;
  }
  return t;
}
function n1(e) {
  const t = (n) => I(n) && vm.has(n.getMarker()) || _m(n);
  if (t(e) || ie(e) && e.getMarker() === Yl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (_e(n)) return n;
      if (!t(n)) return;
    }
}
function Xl(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Oi(e);
  if (n.some((s) => ie(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (rn(e.getChildren(), i, t, r), rn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function i1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Oi(e)], o = Xl(e, n, r);
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
    l.isCollapsed() && (a = Rn(o, l.anchor.key, l.anchor.offset));
  }
  const u = Er(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (zn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = tn.serializeEditorState(
    { type: Tr, version: kr, content: u },
    r
  );
  if (wi(f.root.children, n) === Ni(s, n)) {
    let h = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), h = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), h = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => xs(h));
  return _e(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), km(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ks(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (qe(n)) return;
    !t && (z(n) || ie(n) || _e(n)) && (t = n), Kf(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? n1(r) : void 0) ?? t;
}
function Gt(e, t) {
  const r = ks(e);
  return r ? z(r) ? r1(r, t) : _e(r) ? i1(r, t) : Tm([r], t) : !1;
}
const s1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function cf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !s1.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function ro(e, t) {
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
          t.push(`\\${n}`), cf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), ro(r.content, t), cf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), ro(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), ro(r.content, t);
      }
    }
}
function lf(e, t, r) {
  const n = ks(e);
  if (!ie(n)) return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = lm(n, t, r);
  if (!o) return !1;
  const a = Er(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    qn.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  ro(a, l);
  for (const u of l.join("").replaceAll(O, "~")) {
    if (qn.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function o1(e) {
  return [lt(e), Bo()];
}
function Ql(e) {
  Zt(e, 2);
}
function a1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Zl(e) {
  const t = a1(e);
  e.splice(0, 0, o1(e.getMarker())), t && Ql(e);
}
function Po(e, t) {
  e.setMarker(t), Zl(e), Ql(e);
}
function c1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Un(n)) {
    if (S(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(O), Tt(n, oe, dr), n.setMode("token");
      return;
    }
    if (Mh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Bo());
  }
}
function uf(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : $(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function ss(e) {
  for (let t = e; t; t = t.getParent())
    if (ie(t)) return t;
}
function l1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = ss(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = ss(r.getNode())?.is(s) ?? !1, a = ss(n.getNode())?.is(s) ?? !1;
    return !(o && !uf(r, s, "start") || a && !uf(n, s, "end"));
  });
}
function Oc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of l1(r)) t.add(n.getKey());
}
function u1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!N(r) || !r.isCollapsed()) return;
  const n = ss(r.focus.getNode());
  n && t.add(n.getKey());
}
function d1(e) {
  const t = w();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (Oc(e), t.removeText());
}
function f1(e, t) {
  if (!Ei(t.viewOptions)) return;
  if (Bt(e.getFirstChild())) {
    c1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    Zl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ie(o) && !o.is(e))) {
      Po(e, ar), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ie(r)) {
    const n = e.getChildren().filter((a) => !Un(a)), i = w();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ss(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || $(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Zt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Po(e, ar);
}
function p1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = or(t, Es(e.getMarker()));
  return r === "" ? void 0 : r;
}
function h1(e) {
  const t = e.getChildren().filter((s) => !P(s) && te(s, oe) !== "attribute"), r = t[0];
  r && S(r) && r.getTextContent().startsWith(O) && r.setTextContent(r.getTextContent().slice(1));
  const n = p1(e);
  n && t.push(ye(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function g1(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => S(c) && !P(c) && c.getTextContent() === At(s)
    ), a = vi(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (S(c) && c.getTextContent() === At(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function m1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    h1(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Gt(e, t);
}
function Cm(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Ei(r)) {
    Po(e, t);
    return;
  }
  og(e, t);
}
function Sm() {
  const e = w();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Mm(e);
    return t !== "removed" ? t : (qc(), "handled");
  }
  return qc() ? "handled" : "declined";
}
function y1(e, t) {
  if (!t) return e;
  const r = HE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function df(e, t) {
  const r = w();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Em())
      return "declined";
  } else {
    const s = Mm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => y1(s, t)
  );
  ff(n ?? "");
  for (const s of i)
    qc(), ff(s);
  return "handled";
}
function b1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Ss(n);
  if (!i) return !1;
  const s = er(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !S(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Mm(e) {
  const t = er(e.anchor.getNode()), r = er(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), k1() ? "removed" : "needs-plain-split");
}
function ff(e) {
  if (e === "") return;
  const t = w();
  N(t) && t.insertText(e);
}
function k1() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = er(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function Em() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = er(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function qc() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Em();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = xr("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = S(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    fi(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (lx(u), i.append(u));
  }
  return i.getChildren().every(P) && i.append(ye(zt)), Am(i), !0;
}
function Am(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (S(t)) {
    const r = t.getTextContent().startsWith(O) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if ($(t)) {
    Am(t);
    return;
  }
  e.selectEnd();
}
function T1(e) {
  const t = [];
  let r = e;
  for (; r; )
    I(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function x1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Se().getChildren()) {
    if (t && n.is(t)) break;
    (gt(n) || We(n) || ie(n)) && r.push(n.getMarker());
  }
  return r;
}
function v1(e) {
  let t = e;
  for (; $(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function _1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Bt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Un(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(v1(i)) && r === 0 : !1;
}
function C1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Bt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Un(i) && t.is(i) && r === 0;
}
function S1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function M1() {
  const e = w();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = it(t, ie), s = !n && (!i || C1(i, t, r)) ? "paragraph" : "character", o = er(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: x1(t),
    openCharMarkers: T1(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: ml(t, r),
    anchorRect: S1()
  };
}
function E1() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!S(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = GE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function A1(e, t, r) {
  Cm(e, t, r), Ql(e);
}
function P1(e, t, r) {
  const n = w();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = it(i, ie);
  if (t === "backslash" && s && _1(s, i, n.focus.offset)) {
    A1(s, e, r);
    return;
  }
  Nm(e, r);
}
function N1(e, t) {
  const r = w();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Pm(e) {
  const t = w();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function w1(e, t, r, n) {
  if (N(w()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && E1(), e.kind === "closeTag") {
    Pm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Sm() !== "declined") return;
  if (e.kind === "paragraph" && Xe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    P1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (we.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return zg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  Mc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Cs(), reference: r });
}
function Nm(e, t) {
  const r = w();
  if (!N(r)) return;
  const n = Ei(t);
  if (Fg()) {
    const s = w();
    if (!N(s)) return;
    const o = it(s.anchor.getNode(), ie);
    if (!o) return;
    o.setMarker(e), n && Zl(o);
    return;
  }
  const i = r.insertParagraph();
  ie(i) && (n ? Po(i, e) : i.setMarker(e));
}
function O1() {
  const [e] = le();
  return j(() => e.registerCommand(Yf, () => !0, Ft), [e]), null;
}
function wm(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(we.isValidMarker(r) || Lo(r));
}
function q1(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(we.isValidMarker(r) || Lo(r));
}
function R1(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = jE.exec(e)?.[1];
  return r === void 0 ? !1 : !wm(r, t);
}
function Om(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !R1(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ie(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ie(i))
    return [i, r];
}
function qm(e, t) {
  const r = Om(e, t.getMarker);
  return r !== void 0 && Tm(r, t);
}
function $1(e, t) {
  const r = w();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Rm(e) {
  const t = BE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function I1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Rm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function L1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (z(e.getParent()) && S(r)) {
    const n = r.getNextSibling();
    if (I(n)) {
      ll(n);
      return;
    }
  }
  S(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function pf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Rm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  L1(e);
}
function hf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function $m(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Gt(e, r);
  const n = I1(e), i = e.getParent();
  if (ie(i)) {
    if (!wm(t, r.getMarker))
      return qm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Gt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), hf(s, t) && pf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (I(i) || z(i)) {
    const s = t.replace(/^\+/, "");
    if (!(I(i) ? q1(t, r.getMarker) : we.isValidMarker(s)))
      return Gt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Gt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && ($1(c, nt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), hf(a, s) && pf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Gt(e, r);
}
function D1(e) {
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
function U1(e, t) {
  const r = e.getTextContent();
  if (sn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (ze(e.getParent()) && Qc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !D1(e)) {
    gk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = KE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), $m(e, n[1], t);
      return;
    }
    if (zE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Gt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = nt(e.getMarker(), e.getNested());
    if (I(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ye(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function F1(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Zp(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Im(e) {
  if (!cp(e)?.length)
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
const Hi = Im("v"), K1 = Im("c"), gf = /^[ \u00A0]*$/;
function mf(e, t, r) {
  const n = e.getNextSibling();
  if (S(n) && n.getType() === je.getType() && n.getMode() === "normal" && te(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = ye(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function z1(e, t) {
  const r = e.getTextContent(), n = Kt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Hi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Hi.valueAndRest.exec(c);
    if (l && gf.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Hi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Hi.valueAndRest.exec(r);
  if (!s) {
    const c = Hi.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = w(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Kt("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      mf(e, d, h);
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
  if (t.pendingKeys.delete(e.getKey()), gf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Kt("v", o)), a && mf(e, a, a.length);
}
const j1 = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function B1(e, t) {
  const r = e.getParent();
  if (!z(r) || r.getIsCollapsed() !== !1 || !cp(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === At(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = j1.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(At(a)), !0;
}
function V1(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!S(t)) return;
  const r = Kt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = K1.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Lm(e) {
  if (Fe(e)) {
    const { wrapper: t } = Fo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (z(e)) {
    const { wrapper: t } = Rp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (_e(e)) {
    const t = [], r = $p(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Lp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Me(e)) {
    const t = [], r = cs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = cs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function W1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Lm(e).some((n) => r.is(n));
}
function H1(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ie(e) && Mh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ls)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && $s(l, e) && (i || W1(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Lm(e))
    l.remove(), n = !0;
  let s = !1;
  if (I(e)) {
    const l = Uk(e);
    l !== void 0 && tk(l) && (Bp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of ls)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (xx(l, e)) {
        ps(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Ah(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Vo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function yf(e) {
  return S(e) && e.getType() === je.getType() && e.getMode() === "normal" && te(e, oe) !== "attribute";
}
function G1(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = Q(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && yf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && yf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Xs(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = G1(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = Q(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (sn(c)) continue;
      const h = rm.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = $m(c, h[1], e) || n : r === "idle" && lf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : qm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Gt(c, e) || n;
      continue;
    }
    const l = Qr(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = H1(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && lf(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Gt(u, e) || n;
    }
  }
  return n;
}
function Dm(e) {
  if (on(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (I(t)) return Zi(t) !== void 0;
  return !1;
}
function J1(e) {
  const t = Qr(e);
  if (!t) return !1;
  const r = _r(t.kind);
  return !Vo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function bf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (gt(t) || qe(t) || ch(t)) return !0;
  return !1;
}
function Y1(e, t) {
  const r = e.getTextContent(), n = te(e, oe), i = e.getParent();
  if (n !== "attribute" && _e(i)) {
    r.replace(/^[ \u00A0]+/, "") === Kt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (B1(e, t)) return;
  if (n === "attribute") {
    J1(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Dm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !bf(e))
      t.pendingKeys.add(e.getKey());
    else if (Dp(e)) t.pendingKeys.add(e.getKey());
    else if (_e(ks(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      I(a) && Vp(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (bf(e)) return;
  const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (VE.test(o)) {
    if (uk(r)) {
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
function X1(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Ah(e, t);
}
function Q1(e) {
  const t = (r) => {
    if (P(r)) {
      sn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (on(r)) {
      Zp(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of ls)
      n.settleScope !== "none" && n.ownerPredicate(r) && ($s(n, r) || X1(n, r)) && e.pendingKeys.add(r.getKey());
    if (Me(r)) {
      r.getTextContent() !== Kt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (S(r)) {
      if (r.getType() !== je.getType() || te(r, oe) === "attribute") return;
      const n = r.getParent();
      if (_e(n)) {
        r.getTextContent() !== Kt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Dm(r) || i.includes("//") || Dp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (I(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!qe(r) && !gt(r)) {
      if (ze(r) && r.getChildrenSize() === 0) {
        const n = Qr(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      $(r) && r.getChildren().forEach(t);
    }
  };
  Se().getChildren().forEach(t);
}
function Z1(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = te(e, oe);
  if (r === "attribute" || r === dr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (gt(o) || _e(o) || qe(o)) return;
  const n = t.startsWith(O) && I(e.getParent()), i = n ? t.slice(1) : t, s = (n ? O : "") + i.replace(/ (?=[ \u00A0])/g, O).replace(new RegExp("(?<=\\u00A0) ", "g"), O);
  s !== t && e.setTextContent(s);
}
function eA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function Rc(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(eA(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function tA(e) {
  const t = Rc(e);
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
  const l = Cs();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(no, void 0), u === "") return;
    const f = w();
    N(f) && f.insertText(u);
  }), !0;
}
function rA(e) {
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
function nA(e) {
  const t = w();
  if (!N(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(O, " ")
  }, n = mb(e), i = yb(e);
  return n && (r["text/html"] = rA(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function kf(e, t, r) {
  const n = w();
  if (!N(n) || n.isCollapsed()) return !1;
  const i = nA(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return gb(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const Um = Xf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ba(e) {
  const t = e();
  return Hr(jf), Hr(fp), t;
}
const Tf = 8, iA = 1e3;
function ii(e, t) {
  const r = Me(e) ? ["va", "vp"] : Fe(e) ? ["milestone"] : z(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    Mx(_r(n), e, t.pendingKeys);
}
function sA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Wc) || i.updateTags.has(os)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = Q(o);
        if (!c) continue;
        const l = Qr(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = Q(o.getKey());
        c?.isAttached() && _r(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ye(
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
    e.registerMutationListener(ur, r),
    e.registerMutationListener(Pr, r),
    e.registerMutationListener(Ar, r)
  );
}
function oA(e, t, r) {
  return Ye(
    e.registerCommand(
      yr,
      (n) => {
        if (pg()) return !1;
        const i = Rc(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(O, "~") : s).split(`
`);
          let c = df(a, t.getMarker);
          if (c === "declined" && b1(e) && (c = df(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      br
    ),
    e.registerCommand(
      yr,
      (n) => {
        const i = Rc(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !sE()) return !1;
        n?.preventDefault();
        const o = w();
        return N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(no, void 0), a === "") return;
          const l = w();
          N(l) && l.insertText(a);
        }), !0;
      },
      Ue
    ),
    e.registerCommand(
      yr,
      () => (t.splitExpected.current = !0, !1),
      Ft
    )
  );
}
function aA({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = le(), s = e?.markerMode === "editable", o = !!e && Rr(e), a = X(void 0), c = X(n);
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
    const u = yx(i, l.pendingKeys);
    let d, f = !1, p, h = !1, m = !1, y = 0;
    const v = () => y < Tf ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Tf} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), M = (T, F = "departure") => {
      i.update(() => {
        y = Ba(
          () => Xs(l, T, F)
        ) ? y + 1 : 0;
      });
    };
    let E;
    const R = () => {
      if (E !== void 0 && clearTimeout(E), E = void 0, m || l.pendingKeys.size === 0) return;
      const T = c.current ?? iA;
      T < 0 || (E = setTimeout(() => {
        E = void 0, !(m || l.pendingKeys.size === 0) && (f || v() || M(void 0, "idle"));
      }, T));
    }, C = Ye(
      i.registerNodeTransform(ur, (T) => {
        if (i.isComposing()) return;
        U1(T, l);
        const F = Qr(T);
        F && (Me(F.owner) || z(F.owner) || _e(F.owner) || Fe(F.owner) && Fo(F.owner).wrapper === void 0) && ii(F.owner, l);
      }),
      i.registerNodeTransform(pt, (T) => {
        i.isComposing() || (z1(T, l), ii(T, l));
      }),
      i.registerNodeTransform(wt, (T) => {
        i.isComposing() || (V1(T), T.isAttached() && ii(T, l));
      }),
      i.registerNodeTransform(Xe, (T) => {
        i.isComposing() || f1(T, l);
      }),
      i.registerNodeTransform(ke, (T) => {
        if (!i.isComposing()) {
          m1(T, l);
          for (const F of ["separator", "char"])
            T.isAttached() && $s(_r(F), T) && l.pendingKeys.add(T.getKey());
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
      i.registerNodeTransform(Xt, (T) => {
        i.isComposing() || ii(T, l);
      }),
      i.registerNodeTransform(Ar, (T) => {
        if (i.isComposing()) return;
        const F = Qr(T);
        F && (Fe(F.owner) || Me(F.owner) || z(F.owner) || _e(F.owner)) && ii(F.owner, l);
      }),
      i.registerNodeTransform(we, (T) => {
        i.isComposing() || (g1(T, l), ii(T, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(wr, (T) => {
        i.isComposing() || F1(T, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(je, (T) => {
        i.isComposing() || Y1(T, l);
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
        je,
        (T) => {
          i.getEditorState().read(() => {
            for (const [F, U] of T) {
              if (U === "destroyed") continue;
              const G = Q(F);
              !G || te(G, oe) !== "attribute" || ze(G.getParent()) || i.getElementByKey(F)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      sA(i, l),
      ...o ? [
        i.registerNodeTransform(je, (T) => {
          i.isComposing() || Z1(T);
        }),
        i.registerCommand(
          Io,
          (T) => kf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !1
          ),
          Ue
        ),
        i.registerCommand(
          _n,
          (T) => kf(
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !0
          ),
          Ue
        ),
        i.registerCommand(
          yr,
          (T) => tA(
            // Same jsdom-safe duck-check as COPY above.
            T && typeof T == "object" && "clipboardData" in T ? T : null
          ),
          Ue
        )
      ] : [],
      i.registerCommand(
        _n,
        () => (Oc(l), !1),
        br
      ),
      i.registerCommand(
        jc,
        () => (i.isComposing() || d1(l), !1),
        ci
      ),
      i.registerCommand(
        $o,
        () => (f = !1, y = 0, R(), !1),
        Ft
      ),
      i.registerCommand(
        Mr,
        (T) => (f = !1, y = 0, R(), (T.key === "Backspace" || T.key === "Delete") && (Oc(l), u1(l)), i.isComposing() || !T.ctrlKey || T.altKey || T.shiftKey || T.metaKey || T.key !== " " && T.code !== "Space" || !iE() ? !1 : (T.preventDefault(), !0)),
        Ue
      ),
      i.registerCommand(
        Gf,
        (T) => {
          const F = Sm();
          F === "needs-plain-split" && i.dispatchCommand(no, void 0);
          const U = F !== "declined" || Ex();
          return U && T?.preventDefault(), Xs(l), U;
        },
        Ue
      ),
      i.registerCommand(
        no,
        () => (l.splitExpected.current = !0, Fg()),
        Ue
      ),
      oA(i, l, o),
      i.registerCommand(
        Um,
        () => {
          if (f) return !0;
          const T = i.getRootElement(), F = T?.ownerDocument, U = !!T && !!F && F.hasFocus() && T.contains(F.activeElement);
          let G;
          if (U) {
            const J = w();
            G = N(J) ? J.focus.key : d;
          }
          return Ba(() => Xs(l, G)), !0;
        },
        Ft
      ),
      i.registerCommand(
        Vc,
        () => {
          if (f) return !1;
          const T = w(), F = N(T) ? T.focus.key : d;
          return Ba(() => Xs(l, F)), !1;
        },
        Ft
      ),
      i.registerUpdateListener(({ editorState: T, tags: F }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const U = T.read(() => {
          const J = w();
          return N(J) ? J.focus.key : void 0;
        }), G = p;
        if (U !== void 0 && (p = U), F.has(Wc)) {
          l.pendingKeys.clear(), T.read(() => Q1(l)), f = !0, U !== void 0 && (d = U);
          return;
        }
        if (F.has(Gr)) {
          U !== void 0 && U !== G && (f = !0);
          return;
        }
        f || (U !== void 0 && (d = U), R(), !(h || U === void 0) && [...l.pendingKeys].some((J) => J !== U) && (h = !0, queueMicrotask(() => {
          h = !1, !m && (v() || M(d));
        })));
      })
    );
    return () => {
      m = !0, E !== void 0 && clearTimeout(E), E = void 0, u(), C(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const cA = ["status_unknown", "status_invalid"], Fm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, lA = Object.values(Fm);
function uA(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Fm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function xf(e) {
  e.classList.remove(...cA), e.removeAttribute("aria-description"), lA.includes(e.title) && e.removeAttribute("title");
}
function dA(e, t, r, n) {
  const i = (a) => a.read(() => Se().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = Q(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function fA(e) {
  const t = Q(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function pA({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? bo;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = NE(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || fA(f)) continue;
            const h = Q(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && xf(p);
        }
        for (const [f, p] of d) {
          const h = n.getElementByKey(f);
          h && uA(h, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          dA(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && xf(u);
      }
    };
  }, [n, i, t, r]), null;
}
function Is(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Sr(o);
    a && $(s) && Is(s.getChildren(), a, r);
  }
}
function Km(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Sr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = ki(o);
      if (c === void 0 || !c.includes(rt)) continue;
      const l = c.split(rt), u = [];
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
function Ls(e, t, r) {
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
function zm(e, t) {
  const r = [];
  for (const n of e)
    om(n, t) || ((ie(n) || I(n)) && r.push(n.getMarker()), $(n) && r.push(...zm(n.getChildren(), t)));
  return r;
}
function jm(e) {
  const t = [];
  for (const r of e) {
    const n = Gl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Sr(r);
    i && t.push(...jm(i));
  }
  return t;
}
function eu(e, t, r) {
  const n = zm(e, r), i = jm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function Bm(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = Q(t.key), i = t.offset;
  else
    return;
  if (!(!S(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function tu(e, t) {
  const r = Vm(e, t);
  return r ? e.text.slice(0, r.start) + e.text.slice(r.end) : e.text;
}
function Vm(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function Wm(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Jl(e, o, s);
  if (!c) return;
  const l = i ? tu(c, i) : c.text, u = Er(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (zn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = tn.serializeEditorState(
    { type: Tr, version: kr, content: u },
    s
  ).root.children;
  if (ea(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Ls(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (wi(d, o) === Ni(e, o) && eu(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Km(d, f.serialized);
  const h = hA(e), m = Hm(d);
  for (let y = 0; y < h.length && y < m.length; y++)
    h[y].sid !== void 0 && m[y].number === h[y].number && (m[y].sid = h[y].sid);
  return d;
}
function hA(e) {
  const t = [], r = (n) => {
    Me(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Hm(e) {
  const t = [];
  for (const r of e) {
    Pp(r) && t.push(r);
    const n = Sr(r);
    n && t.push(...Hm(n));
  }
  return t;
}
function gA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = ra(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? tu(l, i) : l.text, f = Er(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (zn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], m = xm(h), y = e.getCategory() !== m, v = im(e, h, m, s);
  if (v.failure !== void 0) {
    v.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : v.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const M = v.children;
  if (ea(M) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const E = Ls(l, t, n);
  if (!E) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (wi(M, o) === Ni(u, o) && eu(u, M, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Km(M, E.serialized), { rebuilt: M, contentNodes: u, category: m, categoryChanged: y };
}
function vf(e) {
  return e.$?.textType;
}
function mA(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && vf(e) === vf(t);
}
function yA(e) {
  const t = [];
  for (const r of e) {
    const n = Q(r);
    n?.isAttached() && qe(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function bA(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!z(t)) return;
  const r = e.getTextContent();
  if (sn(e)) return;
  const n = rm.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function _f(e, t) {
  const r = e;
  r.marker = t, r.text = cm(t, r.markerSyntax, r.nested);
}
function Gm(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!we.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && _f(a.node, s);
  const c = n.getChildren().filter(P).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && _f(l.node, s);
}
function Jm(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Xl(e, i, n);
  if (!o) return;
  const a = r ? tu(o, r) : o.text, c = Er(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (zn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = tn.serializeEditorState(
    { type: Tr, version: kr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Oi(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && wi(u, i) === Ni(d, i) && eu(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function Ym(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (d) => {
    z(d) ? s.set(d.getKey(), d) : _e(d) ? o.set(d.getKey(), d) : n.set(d.getKey(), [d]);
  };
  for (const d of e) {
    const f = Q(d);
    if (!f?.isAttached()) continue;
    const p = ks(f);
    if (p) {
      if (c(p), P(f)) {
        const h = Om(f, t.getMarker);
        h && i.push(h);
      }
      if (z(p)) {
        const h = bA(f);
        h && a.set(p.getKey(), h);
      }
    }
  }
  const l = /* @__PURE__ */ new Set();
  for (const d of i)
    d.some((f) => l.has(f.getKey())) || (d.forEach((f) => {
      l.add(f.getKey()), n.delete(f.getKey());
    }), n.set(d[0].getKey(), d));
  if (r) {
    const d = ks(r.node);
    d && c(d);
  }
  const u = yA(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: u,
    huskKeys: new Set(u.map((d) => d.getKey()))
  };
}
function Xm(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && ki(r), s = n && ki(n);
  r && n && i !== void 0 && s !== void 0 && mA(r, n) && (r.text = i + s, e.splice(t, 1));
}
function na(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Sr(s.node) : void 0;
  if (!s || !o) return !1;
  const a = gA(e, t, r, n, i);
  if (!a) return !1;
  if (a.categoryChanged) {
    const u = s.node;
    a.category === void 0 ? delete u.category : u.category = a.category;
  }
  if (!a.rebuilt) return a.categoryChanged;
  const c = t.get(a.contentNodes[0].getKey());
  if (!c) return a.categoryChanged;
  const l = o.indexOf(c.node);
  return l < 0 ? a.categoryChanged : (o.splice(l, a.contentNodes.length, ...a.rebuilt), !0);
}
function kA(e, t, r, n, i) {
  const s = Bm(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: u, huskKeys: d } = Ym(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && u.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  Is(Se().getChildren(), e.root.children, f);
  for (const p of l.values()) Gm(p, f);
  for (const p of a.values())
    na(p, f, r, d, s);
  for (const p of o.values()) {
    const h = f.get(p[0].getKey());
    if (!h) continue;
    const m = Wm(p, f, r, d, s);
    if (!m) continue;
    const y = h.siblings.indexOf(h.node);
    y < 0 || h.siblings.splice(y, p.length, ...m);
  }
  for (const p of c.values()) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = 1 + Oi(p).length, y = Jm(p, r, s);
    if (!y) continue;
    const v = h.siblings.indexOf(h.node);
    v < 0 || h.siblings.splice(v, m, ...y);
  }
  for (const p of u) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || Xm(h.siblings, m);
  }
  return Og(e, r.viewOptions);
}
function TA({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = Ei(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        Xe,
        (i) => xA(i, t)
      );
  }, [r, n, t]), null;
}
function xA(e, t) {
  e.getMarker() !== ar && (e.isEmpty() || Bt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${ar}" (key ${e.getKey()})`
  ), e.setMarker(ar)));
}
function Qs(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const vA = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Ds(e) {
  return vA.exec(e)?.[1] ?? e;
}
function ia(e, t) {
  const r = e.jsonPath.slice(Ds(e.jsonPath).length);
  return { ...e, jsonPath: `${jr(t)}${r}` };
}
function _A(e, t) {
  let r = Se();
  for (let n = 0; n < t.length; n += 1) {
    if (!$(r)) return;
    const i = qr(r, Rr(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function CA(e, t) {
  const r = xi(Ds(t.jsonPath));
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
  const i = [n.liveIndex, ...r.slice(1)], s = _A(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: ia(t, i) };
}
function Qm(e, t) {
  t.add(e.getKey()), $(e) && e.getChildren().forEach((r) => Qm(r, t));
}
function Zm(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function $c(e, t, r) {
  const n = (a, c) => {
    const l = Rn(e, a, c), u = Zm(e, a, c);
    return l && u ? { anchor: l, position: u.start + c } : void 0;
  };
  if (!$(t)) return n(t.getKey(), r);
  const i = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((a) => Qm(a, i));
  const s = [...e.spans].reverse().find((a) => i.has(a.key));
  if (s) {
    const a = s.end - s.start, c = Rn(e, s.key, a);
    return c ? { anchor: c, position: s.start + a } : void 0;
  }
  const o = e.spans[0];
  return o && !o.isSentinel ? n(o.key, 0) : void 0;
}
function ey(e, t) {
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
function ty(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
function SA(e, t, r) {
  const [n, i] = fc(t, r.viewOptions);
  if (!n || i === void 0) return;
  const s = ey(e, n);
  if (!s) {
    const c = $c(e, n, i);
    if (!c) return;
    const l = e.text[c.position];
    return {
      kind: "anchor",
      anchor: c.anchor,
      atWordByte: l !== void 0 && !qn.test(l)
    };
  }
  const o = ty(s.member, n);
  if (!o) return;
  const a = z(s.member) ? ra(s.member, r.getMarker, r.viewOptions)?.out : void 0;
  return {
    kind: "preserved",
    sentinelIndex: s.sentinelIndex,
    memberIndex: s.memberIndex,
    path: o,
    offset: i,
    type: $(n) ? "element" : "text",
    noteAnchor: a && $c(a, n, i)?.anchor
  };
}
function MA(e, t) {
  if (t.type !== "text") return t;
  const r = Zm(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && qn.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function ry(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function EA(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function AA(e, t, r, n) {
  const i = EA(r, n), s = i && t.liveFragment?.sentinels[i.sentinelIndex]?.[i.memberIndex];
  if (!s?.isAttached()) return;
  const o = e.byFirstLiveKey.get(s.getKey());
  if (o?.kind === "note")
    return n.noteAnchor && o.liveFragment ? ry(
      o,
      Ti(o.liveFragment, n.noteAnchor)
    ) : void 0;
  let a = s;
  for (const c of n.path) {
    if (!$(a)) return;
    const l = a.getChildAtIndex(c);
    if (!l) return;
    a = l;
  }
  return { key: a.getKey(), offset: n.offset, type: n.type };
}
function PA(e, t, r) {
  const { plan: n } = r, { liveFragment: i, scratchFragment: s, sentinelMap: o } = n;
  if (!i || !s || !o) return;
  const a = ia(r.location, r.scratchIndexes), c = n.scratch.getEditorState().read(() => SA(s, a, e.tier2));
  if (!c) return;
  if (c.kind === "preserved")
    return AA(t, n, o, c);
  const l = Ti(i, c.anchor, {
    addressDisplayBytes: !Kc(r.location)
  });
  if (l)
    return ry(
      n,
      c.atWordByte ? MA(i, l) : l
    );
}
function Cf(e, t, r) {
  const n = CA(t, r);
  if (!n) return;
  if (n.kind === "live") return n.location;
  const i = PA(e, t, n), s = i && Q(i.key);
  return s ? Pn(s, i.offset, t.viewOptions) : void 0;
}
function NA(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = Cf(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = Cf(e, t, r.end);
  if (i)
    return { ...r, start: n, end: i };
}
function wA(e, t) {
  const r = xi(Ds(t.jsonPath));
  return r.length === 0 ? t : ia(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function OA(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function qA(e, t) {
  const r = t.liveNodes[0], n = OA(e, t);
  if (n) {
    const s = iy(e, n, r, 0);
    return s && xi(Ds(s.jsonPath));
  }
  const i = Br(r);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function RA(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function $A(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function IA(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!$(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return Pn(s, n, i);
  }
}
function ny(e, t, r, n, i, s, o) {
  const a = ey(r, i);
  if (a) {
    const d = r.sentinels[a.sentinelIndex];
    if (!t[a.sentinelIndex]?.some((h) => h !== void 0)) {
      const h = d[0].getParent();
      return h ? ny(
        e,
        t,
        r,
        n,
        h,
        d[0].getIndexWithinParent(),
        o
      ) : void 0;
    }
    const f = ty(a.member, i);
    if (!f) return;
    const p = t[a.sentinelIndex]?.[a.memberIndex];
    return p ? e.scratch.getEditorState().read(
      () => IA(n, p, f, s, o)
    ) : void 0;
  }
  const c = $c(r, i, $A(e, i, s));
  if (!c) return;
  const { anchor: l } = c, u = !Kc(
    Pn(i, s, o)
  );
  return e.scratch.getEditorState().read(() => {
    const d = Ti(n, l, { addressDisplayBytes: u }), f = d && Q(d.key);
    return f ? Pn(f, d.offset, o) : void 0;
  });
}
function iy(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, sentinelMap: o } = t;
  if (!i || !s || !o) return;
  const a = ny(
    t,
    o,
    i,
    s,
    r,
    n,
    e.viewOptions
  );
  if (!a) return;
  const c = RA(
    t,
    qA(e, t),
    xi(Ds(a.jsonPath))
  );
  return c && ia(a, c);
}
function Sf(e, t, r) {
  const n = e.planContaining(t);
  return n ? iy(e, n, t, r) : wA(e, Pn(t, r, e.viewOptions));
}
function LA(e) {
  const t = Al(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = w();
  if (!N(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = Sf(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = Sf(e, o.getNode(), o.offset);
  if (a)
    return { start: s, end: a };
}
function sy(e, t, r) {
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
function oy(e, t, r) {
  if (e === "para") return Jl(t, r.getMarker, r.viewOptions);
  if (e === "chapter") {
    const i = t.find(_e);
    return i && Xl(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(z);
  return n && ra(n, r.getMarker, r.viewOptions)?.out;
}
function sa(e) {
  const t = e.exportJSON();
  return $(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(sa(r))), t;
}
function DA(e, t) {
  const r = fb({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = Se();
        t.forEach((i) => n.append(xs(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const Mf = "\0";
function ay(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), $(r) && ay(r.getChildren(), t);
  return t;
}
function UA(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(Mf), a = ay(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(Mf);
}
function ru(e, t = []) {
  for (const r of e)
    z(r) && t.push(r), $(r) && ru(r.getChildren(), t);
  return t;
}
function FA(e, t, r) {
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
function KA(e, t) {
  return e.sentinels.filter(
    (n, i) => n.length > 0 && !t[i]?.some((s) => s !== void 0)
  ).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? sy(n, s.start, s.end) : n;
  }, e);
}
function oa(e, t, r, n, i, s, o) {
  const a = DA(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l } = a.getEditorState().read(() => ({
    settledCount: qr(
      Se(),
      Rr(o.tier2.viewOptions)
    ).length,
    scratchFragment: oy(e, Se().getChildren(), o.tier2)
  })), u = FA(
    r?.sentinels ?? [],
    s?.live,
    l?.sentinels ?? []
  );
  return {
    kind: e,
    liveNodes: t,
    liveFragment: r && u ? KA(r, u) : r,
    liveCut: n,
    scratch: a,
    scratchFragment: l,
    settledCount: c,
    sentinelMap: u
  };
}
function nu(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = Vm(e, t);
  return r ? {
    liveFragment: sy(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function iu(e, t) {
  for (const r of e.noteGlyphRenames.values())
    Gm(r, t);
}
function zA(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = nu(t, i), a = sa(e), c = /* @__PURE__ */ new Map();
  if (Is([e], [a], c), iu(r, c), !na(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && Ls(t, c, r.huskKeys);
  return oa("note", [e], s, o, [a], l, n);
}
function jA(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = nu(t, i), a = e.map(sa), c = /* @__PURE__ */ new Map();
  Is(e, a, c), iu(r, c), ru(e).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => na(d, c, n.tier2, r.huskKeys, i)
  );
  const l = Wm(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const u = t && Ls(t, c, r.huskKeys);
  return oa("para", e, s, o, l, u, n);
}
function BA(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = nu(t, n), o = Jm(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...Oi(e)];
  return oa("chapter", a, i, s, o, void 0, r);
}
function VA(e, t, r, n, i, s) {
  const o = sa(e), a = /* @__PURE__ */ new Map();
  Is([e], [o], a), iu(n, a), ru([e]).filter((u) => n.noteScopes.has(u.getKey())).forEach(
    (u) => na(u, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const u of r) {
    const d = a.get(u.getKey());
    if (!d) continue;
    const f = d.siblings.indexOf(d.node);
    f < 0 || (Xm(d.siblings, f), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Ls(t, a, c);
  return oa("para", [e], t, void 0, [o], l, i);
}
function WA(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function Ef(e) {
  return {
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (t) => t,
    settledToLiveTopIndex: (t) => ({ liveIndex: t, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e
  };
}
function HA(e, t) {
  const r = qr(Se(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = r[o], c = a.type === "element" ? a.node : void 0, l = c && e.get(c.getKey());
    if (!l || !l.liveNodes[0].is(c)) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const u = new Set(l.liveNodes.map((f) => f.getKey()));
    let d = 0;
    for (; o + d < r.length; ) {
      const f = r[o + d];
      if (f.type !== "element" || !u.has(f.node.getKey())) break;
      d += 1;
    }
    for (let f = 0; f < d; f += 1)
      n[o + f] = s;
    for (let f = 0; f < l.settledCount; f += 1)
      i.push({ liveIndex: o, plan: l, indexWithinScope: f });
    s += l.settledCount, o += d;
  }
  return { liveToSettled: n, settledToLive: i };
}
function Af(e) {
  const t = Bm(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), Ef(e.tier2.viewOptions);
  const r = Ym(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const h = f.liveNodes[0].getKey();
    n.set(h, f), f.liveNodes.forEach((m) => i.set(m.getKey(), f)), p && f.liveNodes.forEach((m) => s.set(m.getKey(), f));
  }, c = (f, p, h, m) => {
    o.add(f);
    const y = oy(p, h, e.tier2), v = UA(
      p,
      h,
      y?.text ?? "",
      e.tier2,
      t
    ), M = e.cache.entries.get(f);
    if (M?.signature === v) return M.plan;
    const E = m(y);
    return E ? e.cache.entries.set(f, { signature: v, plan: E }) : e.cache.entries.delete(f), E;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => zA(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => jA(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...Oi(f)],
        (p) => BA(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!ie(p) || WA(f, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(f), l.set(p.getKey(), h);
  }
  for (const [f, { para: p, husks: h }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (m) => VA(p, m, h, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0) return Ef(e.tier2.viewOptions);
  const { liveToSettled: u, settledToLive: d } = HA(
    s,
    Rr(e.tier2.viewOptions)
  );
  return {
    byFirstLiveKey: n,
    liveToSettledTopIndex: (f) => u[f] ?? f,
    settledToLiveTopIndex: (f) => d[f],
    planContaining: (f) => {
      for (let p = f; p; p = p.getParent()) {
        const h = i.get(p.getKey());
        if (h) return h;
      }
    },
    viewOptions: e.tier2.viewOptions
  };
}
function GA({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = le(), n = X({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, No(s, e) || JA(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Ic(r);
        Pf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Zs(s) === Zs(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        Se().getChildren().filter(We).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Ic(r) || Pf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Zs(a) === Zs(c)
      }));
    };
    return Ye(
      ...[wt, fr].map(
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
        return i.phase === "idle" && ZA(i, XA()), !1;
      },
      Ft
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(lr, void 0));
    };
    return Ye(
      r.registerMutationListener(St, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), j(() => {
    const i = () => nP(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function JA(e, t, r) {
  if (YA(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Ic(t);
  (!n || n === r.book) && t.update(() => cy(r.chapterNum, r.verseNum), {
    tag: Gr
  });
}
function YA(e, t) {
  const r = e.pendingEchoes.findIndex((n) => No(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function XA() {
  const e = w(), t = fl(e);
  if (!t) return;
  const r = su(), n = bh(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = kl(t, e), { verseNum: o, verse: a } = Yx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Ic(e) {
  return e.getEditorState().read(() => su()?.getCode() || void 0);
}
function su() {
  return Se().getChildren().find(gt);
}
function Pf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Va(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Va(e, t), e.phase = "navigating") : i && Va(e, t), r && r !== e.scrRef.book && dy(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Va(e, t) {
  queueMicrotask(() => {
    t.update(
      () => cy(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Gr }
    );
  });
}
function cy(e, t) {
  const r = fl(w()), n = Tl(r)?.getNumber(), i = bh(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Ch(n) ? uy(t, n) : parseInt(n, 10) === t))
    return;
  const o = Se().getChildren(), a = yh(o, e);
  if (!a) return;
  const c = ix(o, a), l = XT(c, !0);
  nx(c, l);
  let u;
  try {
    u = Vx(c, t);
  } catch {
    return;
  }
  u && (ie(u) ? !S(u.getFirstChild()) && Pi(u) || Zt(u, 0) : QA(u));
}
function QA(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || be(n)) {
    Zt(t, r);
    return;
  }
  const i = jo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (S(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = $(n) && !z(n) ? ly(n) : void 0;
  s ? s.select(0, 0) : Zt(t, r);
}
function ly(e) {
  const t = e.getFirstChild();
  if (S(t)) return t;
  if ($(t) && !z(t)) return ly(t);
}
function Zs(e) {
  return e.read(() => {
    const t = Se().getChildren().find(We);
    return `${su()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function ZA(e, t) {
  e.phase !== "navigating" && t && (eP(t, e.scrRef) || dy(e, tP(t, e.scrRef)));
}
function eP(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? uy(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function uy(e, t) {
  try {
    return pl(e, t);
  } catch {
    return !1;
  }
}
function tP(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const rP = 8;
function dy(e, t) {
  return No(t, e.scrRef) || e.pendingEchoes.some((r) => No(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > rP && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function No(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function nP(e) {
  e.phase = "idle";
}
function iP(e) {
  return gt(e) ? `${e.__code}` : _e(e) ? `${e.__marker} "${e.__number}"` : I(e) ? `${e.__marker}` : qs(e) ? `${e.__marker} "${e.__number}"` : pr(e) ? `${e.__caller}` : Fn(e) ? `${e.__marker} "${e.__number}"` : z(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ie(e) ? `${e.__marker}` : S(e) ? `"${e.__text}"${sP(e)}` : ge(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Me(e) ? `${e.__marker} "${e.__number}"` : "";
}
function sP(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[_s]) : "";
}
function oP() {
  const [e] = le();
  return /* @__PURE__ */ _(
    bb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: iP,
      editor: e
    }
  );
}
const fy = Df(null), Nf = 4;
function aP({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = X(null), s = Uf(fy);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function cP({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = pe(), [s, o] = pe(), a = de(
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
  }, l = De(() => ({ registerItem: a }), [a]);
  return j(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ _(fy.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function lP({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = X(null), c = X(null), [l, u] = pe(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: m } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Nf}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (h) => {
        const m = h.target;
        o && a.current && a.current.contains(m) || f.contains(m) || u(!1);
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
          const { top: m } = p.getBoundingClientRect(), y = m + p.offsetHeight + Nf;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Ce(Tn, { children: [
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
          i && /* @__PURE__ */ _("span", { className: i }),
          t && /* @__PURE__ */ _("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ _("i", { className: "chevron-down" })
        ]
      }
    ),
    l && kn(
      /* @__PURE__ */ _(cP, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const Lc = {
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
}, Dc = {
  ...Lc,
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
function uP({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ _(
    lP,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + dP(t),
      buttonLabel: fP(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Lc).map((n) => /* @__PURE__ */ Ce(
        aP,
        {
          className: "item block-marker " + pP(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: Lc[n] })
          ]
        },
        n
      ))
    }
  );
}
function dP(e) {
  return e && e in Dc ? e : "ban";
}
function fP(e) {
  return e && e in Dc ? Dc[e] : "No Style";
}
function pP(e) {
  return e ? "active dropdown-item-active" : "";
}
function wf() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const hP = $n(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = pe(s), [c, l] = pe(), [u, d] = pe(!1), [f, p] = pe(!1), h = de(
    ({
      canUndo: m,
      canRedo: y,
      blockMarker: v,
      contextMarker: M
    }) => {
      d(m), p(y), l(v), n?.({
        canUndo: m,
        canRedo: y,
        blockMarker: v,
        contextMarker: M
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    lr,
    (m, y) => (a(y), !1),
    br
  ), [s]), /* @__PURE__ */ Ce(Tn, { children: [
    /* @__PURE__ */ _(Tg, { onStateChange: h }),
    /* @__PURE__ */ Ce("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Qf, void 0);
          },
          title: io ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Zf, void 0);
          },
          title: io ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(wf, {}),
      o === s && /* @__PURE__ */ Ce(Tn, { children: [
        /* @__PURE__ */ _(
          uP,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ _(wf, {})
      ] }),
      /* @__PURE__ */ _("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), gP = Go(), mP = {}, yP = {};
function bP() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Of(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
const py = $n(function({
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
  const d = X(null), f = X(null), p = X(null), h = X(t), m = X(void 0), y = X(void 0), v = X(void 0), M = X({ entries: /* @__PURE__ */ new Map() }), E = X(0), R = X(!0), C = X(void 0), T = X(!1), [F, U] = pe(t), [G, J] = pe(0), [ce, fe] = pe(), {
    isReadonly: Y = !1,
    structureProtectionMode: Pe = "off",
    hasExternalUI: Ne = !1,
    hasSpellCheck: ee = !1,
    textDirection: K = "ltr",
    markerMenuTrigger: re = "\\",
    view: $e,
    nodes: Qe,
    debug: rr = !1,
    contextMenu: ue,
    styleInfo: Ze,
    markerSettleDelayMs: qi
  } = a ?? yP, nr = $e ?? gP, jn = ms(nr) && (nr.markerMode !== "hidden" || !nr.hasSpacing || nr.hasGutterParaMarkers || nr.hasActiveTextFocusBox) ? {
    ...nr,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : nr, Ri = X(jn);
  $t(Ri.current, jn) || (Ri.current = jn);
  const se = Ri.current, ot = De(() => Qe ?? mP, [Qe]), aa = De(() => ue, [ue]), $r = De(
    () => Ix(Ze ?? bo),
    [Ze]
  ), Te = X(c);
  $t(Te.current, c) || (Te.current = c);
  const xe = Te.current, ae = ms(se), mt = Y || ae, Oe = jn !== nr;
  j(() => {
    ae && !Y && xe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Oe && xe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [ae, Y, Oe, xe]);
  const Vt = X(null), Us = De(() => {
    if (se.markerMode !== "editable") return;
    const A = Ze ?? bo;
    return {
      getContext: () => Vt.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (L) => DE(
        A,
        L,
        ot.extraValidMarkers
      ),
      getEnterItems: (L) => UE(
        A,
        L,
        ot.extraValidMarkers
      ),
      apply: (L, B) => {
        const W = Vt.current;
        W && (B.trigger === "enter" ? W.splitParagraphWithMarker(L.marker) : W.applyMarkerMenuSelection(L, B));
      },
      commitTypedCloser: (L) => {
        Vt.current?.commitTypedCloser(L);
      }
    };
  }, [se, Ze, ot.extraValidMarkers]), Ot = (A) => {
    T.current || (T.current = !0, Te.current?.warn(
      `Editor: cannot ${A} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, $i = (A) => {
    if (ae)
      throw new Error(
        `Cannot ${A} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, hr = (A) => {
    if ($i(A), mt) throw new Error(`Cannot ${A} in readonly mode`);
  }, cn = De(
    () => [et, ...ae ? d_ : tg],
    [ae]
  ), Fs = De(
    () => ({
      namespace: "platformEditor",
      theme: { ...Yg, showCharMarkerTitles: se.showCharMarkerTitles },
      editable: !mt,
      editorState: void 0,
      // Handling of errors during update
      onError(A) {
        throw A;
      },
      nodes: cn
    }),
    [mt, cn, se.showCharMarkerTitles]
  );
  Ua.initialize(xe);
  function yt(A) {
    if (A !== void 0 && !oE(A, ot.extraValidMarkers))
      throw new Error(`Unsupported character marker '${A}'`);
  }
  const qt = de(() => {
    const A = d.current;
    if (!A) return h.current;
    const L = Ea(A), B = y.current;
    if ((!L || L.size === 0) && !B) return h.current;
    const W = A.getEditorState(), me = W.toJSON();
    return W.read(
      () => kA(
        me,
        L ?? /* @__PURE__ */ new Set(),
        { viewOptions: se, getMarker: $r, logger: xe },
        B,
        v.current
      )
    ) ?? h.current;
  }, [se, $r, xe]), dt = de(() => {
    const A = d.current;
    if (!A) return;
    const L = {
      pendedKeys: Ea(A) ?? /* @__PURE__ */ new Set(),
      transientInput: y.current,
      lastKnownCaret: v.current,
      tier2: { viewOptions: se, getMarker: $r, logger: xe },
      nodes: cn,
      cache: M.current
    };
    return Qs(L) && L.cache.entries.clear(), L;
  }, [se, $r, xe, cn]), ln = de(
    (A) => {
      const L = d.current, B = dt();
      if (!(!L || !B))
        return Qs(B) ? A : L.getEditorState().read(() => {
          const W = Af(B);
          return NA(B, W, A);
        });
    },
    [dt]
  );
  j(() => (R.current = !0, () => {
    R.current = !1;
  }), []);
  const Ir = de(
    (A, L) => A.read(() => {
      const B = dt(), W = B && LA(Af(B));
      return !W && !ae && N(w()) && xe?.warn(
        `${L} refused: the selection could not be expressed against the document the host is reading`
      ), W;
    }),
    [dt, ae, xe]
  ), Bn = de(
    (A) => {
      if (!i) return;
      const L = d.current, B = dt();
      E.current += 1;
      const W = E.current;
      if (!L || !B || Qs(B)) {
        i(A);
        return;
      }
      queueMicrotask(() => {
        if (!R.current || W !== E.current || d.current !== L) return;
        const me = Ir(L, "onSelectionChange");
        W === E.current && i(me);
      });
    },
    [i, dt, Ir]
  ), Vn = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const A = d.current?.getRootElement();
      return !!A && A.ownerDocument.activeElement === A;
    },
    undo() {
      d.current?.dispatchCommand(Qf, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Zf, void 0);
    },
    cut() {
      hr("cut"), d.current?.dispatchCommand(_n, null);
    },
    copy() {
      d.current?.dispatchCommand(Io, null);
    },
    paste() {
      hr("paste"), d.current && $l(d.current);
    },
    pastePlainText() {
      hr("paste as plain text"), d.current && Il(d.current);
    },
    getUsj() {
      return qt();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(Um, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(A) {
      if (!A) {
        y.current = void 0;
        return;
      }
      const L = d.current?.getEditorState().read(() => {
        const B = w();
        return N(B) && B.isCollapsed() ? B.focus.key : void 0;
      });
      y.current = { input: A, nodeKey: L ?? v.current?.key };
    },
    setUsj(A) {
      if (!$t(h.current, A)) {
        h.current = A, y.current = void 0;
        const L = $t(F, A);
        U(A), L && J((B) => B + 1);
      }
    },
    applyUpdate(A, L = "remote") {
      if (ae && L === "remote") {
        Te.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      $i("apply an update"), d.current?.update(
        () => {
          L === "remote" && Hr(os), q_(A, se, ot, xe);
        },
        { discrete: !0 }
      );
      const B = d.current?.getEditorState();
      if (!B) return;
      const W = Ua.deserializeEditorState(B, se);
      if (W) {
        const me = !$t(h.current, W);
        if (me && (h.current = W), me || !$t(F, W)) {
          const at = nd(A, B, "apply");
          C.current = W, s?.(W, A, L, at);
        }
      }
    },
    replaceEmbedUpdate(A, L) {
      const B = d.current?.read(() => cv(A, L));
      B ? this.applyUpdate(B) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${A}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ae) {
        Ot("get the selection");
        return;
      }
      const A = d.current;
      if (!A) return;
      const L = dt();
      return !L || Qs(L) ? A.read(() => Al(se)) : Ir(A, "getSelection");
    },
    setSelection(A) {
      if (ae) {
        Ot("set the selection");
        return;
      }
      const L = ln(A);
      if (!L) {
        xe?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      d.current?.update(() => {
        const B = El(L, se);
        B !== void 0 && (xn(B), Hr(dp), Of(B.anchor) && Of(B.focus) && d.current?.dispatchCommand(lr, void 0));
      });
    },
    setAnnotation(A, L, B, W, me) {
      if (ae) {
        Ot("set an annotation");
        return;
      }
      let at, Rt, Mt, Wn;
      typeof W == "function" || W === void 0 ? (at = W, Rt = me) : (at = W.onClick, Rt = W.onRemove, Mt = W.onMouseEnter, Wn = W.onMouseLeave);
      const Ii = ln(A);
      if (!Ii) {
        xe?.warn(
          `setAnnotation refused for ${L} "${B}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        Ii,
        wu(L),
        B,
        at,
        Rt,
        Mt,
        Wn
      );
    },
    removeAnnotation(A, L) {
      f.current?.removeAnnotation(wu(A), L);
    },
    formatPara(A) {
      hr("format a paragraph"), d.current?.update(() => {
        const L = w();
        if (!N(L)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${A}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        xb(L, () => ds(A));
        const B = w();
        if (!N(B)) return;
        const W = /* @__PURE__ */ new Set();
        B.getNodes().forEach((me) => {
          const at = me.getTopLevelElement();
          ie(at) && W.add(at);
        }), W.forEach((me) => Cm(me, A, se));
      });
    },
    getElementByKey(A) {
      return d.current?.read(
        () => d.current?.getElementByKey(A) ?? void 0
      );
    },
    removeCharacterMarker(A) {
      if (mt) throw new Error("Cannot remove character marker in readonly mode");
      yt(A);
      let L = !1;
      return d.current?.update(
        () => {
          const B = w();
          N(B) && (L = Bg(B, A, se));
        },
        { discrete: !0 }
      ), L;
    },
    replaceCharacterMarker(A, L) {
      if (mt) throw new Error("Cannot replace character marker in readonly mode");
      yt(A), yt(L);
      let B = !1;
      return d.current?.update(
        () => {
          const W = w();
          N(W) && (B = bE(W, A, L));
        },
        { discrete: !0 }
      ), B;
    },
    extendCharacterMarker(A, L) {
      if (mt) throw new Error("Cannot extend character marker in readonly mode");
      yt(A), L?.forEach(
        (W) => yt(W)
      );
      let B = !1;
      return d.current?.update(
        () => {
          const W = w();
          N(W) && (B = kE(
            W,
            A,
            L,
            se
          ));
        },
        { discrete: !0 }
      ), B;
    },
    insertMarker(A) {
      if (mt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!Sc(A, ot.extraValidMarkers))
        throw new Error(`Unsupported marker '${A}'`);
      const L = Mc(
        A,
        m,
        se,
        ot,
        xe,
        void 0,
        Ze
      );
      return L.action({ editor: d.current, reference: r }), L.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!Y)
        return d.current?.getEditorState().read(() => M1());
    },
    applyMarkerMenuSelection(A, L) {
      if (Y) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (A.kind !== "closeTag" && !Sc(A.marker, ot.extraValidMarkers))
        throw new Error(`Unsupported marker '${A.marker}'`);
      let B;
      return d.current.update(() => {
        B = w1(A, L, r, {
          expandedNoteKeyRef: m,
          viewOptions: se,
          nodeOptions: ot,
          logger: c,
          styleInfo: Ze
        });
      }), B;
    },
    splitParagraphWithMarker(A) {
      if (Y) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        Nm(A, se);
      });
    },
    commitTypedMarker(A, L) {
      if (Y) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let B = !1;
      return d.current.update(() => {
        B = N1(A, L), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(A) {
      if (Y) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let L = !1;
      return d.current.update(() => {
        L = Pm(A), L || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), L;
    },
    insertNote(A, L, B) {
      hr("insert a note");
      const W = B && ln(B);
      if (B && !W) {
        xe?.warn(
          `insertNote refused for \\${A}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.update(() => {
        const me = Zh(
          A,
          L,
          W,
          r,
          se,
          ot,
          xe
        );
        me && !me.getIsCollapsed() && (m.current = me.getKey());
      });
    },
    selectNote(A) {
      d.current?.update(() => {
        const L = pd(A);
        L && (c_(L, se), L.getIsCollapsed() || (m.current = L.getKey()));
      });
    },
    getNoteOps(A) {
      return d.current?.read(() => {
        const L = pd(A);
        if (L)
          return vl(L);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Vt.current = Vn, Fc(u, () => Vn), j(() => {
    const A = d.current;
    if (A)
      return A.registerUpdateListener(({ editorState: L }) => {
        L.read(() => {
          const B = w();
          if (!N(B) || !B.isCollapsed()) return;
          const W = B.focus.getNode();
          S(W) && (v.current = { key: W.getKey(), offset: B.focus.offset });
        });
      });
  }, []);
  const Lr = de(
    (A, L, B, W) => {
      if (ae) return;
      const me = Ua.deserializeEditorState(A, se);
      if (me) {
        const at = !$t(h.current, me);
        if (at && (h.current = me), at || !$t(F, me)) {
          const Rt = nd(W, A);
          C.current = me, s?.(me, W, "local", Rt);
        }
      }
    },
    [F, s, se, ae]
  );
  j(() => {
    const A = d.current;
    if (!(!A || !s))
      return A.registerUpdateListener(({ tags: L, dirtyElements: B, dirtyLeaves: W }) => {
        !L.has(Wc) && (B.size === 0 && W.size === 0 || L.has(os) || !Ea(A)?.size) || queueMicrotask(() => {
          const me = qt();
          !me || $t(C.current, me) || (C.current = me, s(me, void 0, "local", void 0));
        });
      });
  }, [s, qt]);
  const un = de(
    (A) => {
      fe(A.contextMarker), o?.(A);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Ce(rp, { initialConfig: Fs, children: [
      /* @__PURE__ */ _(OC, { isEditable: !mt }),
      /* @__PURE__ */ Ce("div", { className: "editor-container", children: [
        Ne ? /* @__PURE__ */ _(Tg, { onStateChange: un }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (mt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              hP,
              {
                ref: p,
                editorRef: Vt,
                isReadonly: mt,
                onStateChange: un
              }
            )
          }
        ),
        /* @__PURE__ */ Ce("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(ip, { editorRef: d }),
          /* @__PURE__ */ _(
            Tb,
            {
              contentEditable: /* @__PURE__ */ _(
                np,
                {
                  className: `editor-input usfm ${Bv(se).join(" ")}${se.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${se.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: ee
                }
              ),
              placeholder: /* @__PURE__ */ _(bP, {}),
              ErrorBoundary: sp
            }
          ),
          Ne && /* @__PURE__ */ _(wC, {}),
          /* @__PURE__ */ _(op, {}),
          r && n && /* @__PURE__ */ _(GA, { scrRef: r, onScrRefChange: n }),
          r && !Ne && /* @__PURE__ */ _(
            rM,
            {
              trigger: re,
              scrRef: r,
              contextMarker: ce,
              getMarkerAction: (A) => Mc(
                A,
                m,
                se,
                ot,
                xe,
                void 0,
                Ze
              ),
              editableHarness: Us
            }
          ),
          /* @__PURE__ */ _(
            $C,
            {
              scripture: F,
              scriptureRef: h,
              nodeOptions: ot,
              editorAdaptor: tn,
              viewOptions: se,
              logger: xe
            },
            G
          ),
          /* @__PURE__ */ _(tS, { onChange: Bn, viewOptions: se }),
          /* @__PURE__ */ _(
            w_,
            {
              onChange: Lr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: zb
            }
          ),
          /* @__PURE__ */ _(CE, { viewOptions: se }),
          /* @__PURE__ */ _(P_, { ref: f, logger: xe, viewOptions: se }),
          /* @__PURE__ */ _(sC, { viewOptions: se }),
          /* @__PURE__ */ _(kC, {}),
          /* @__PURE__ */ _(SC, {}),
          se?.markerMode !== "editable" && /* @__PURE__ */ _(MC, { logger: xe }),
          /* @__PURE__ */ _(NC, { options: aa }),
          /* @__PURE__ */ _(RC, {}),
          /* @__PURE__ */ _(O1, {}),
          /* @__PURE__ */ _(
            aA,
            {
              viewOptions: se,
              getMarker: $r,
              logger: xe,
              markerSettleDelayMs: qi
            }
          ),
          /* @__PURE__ */ _(
            pA,
            {
              styleInfo: Ze,
              viewOptions: se,
              logger: xe
            }
          ),
          /* @__PURE__ */ _(
            IC,
            {
              expandedNoteKeyRef: m,
              nodeOptions: ot,
              viewOptions: se,
              logger: xe
            }
          ),
          /* @__PURE__ */ _(eS, {}),
          /* @__PURE__ */ _(eC, {}),
          /* @__PURE__ */ _(Y_, {}),
          /* @__PURE__ */ _(TA, { viewOptions: se, logger: xe }),
          /* @__PURE__ */ _(rS, {}),
          /* @__PURE__ */ _(jS, { structureProtectionMode: Pe }),
          /* @__PURE__ */ _(BS, { textDirection: K }),
          /* @__PURE__ */ _(WS, {}),
          /* @__PURE__ */ _(eM, {}),
          l
        ] }),
        rr && /* @__PURE__ */ _(oP, {})
      ] })
    ] }, se.verseLayout ?? "inline")
  );
}), C0 = $n(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(py, { ref: r, ...i });
});
function hy() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function wo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? hy() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function gy(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? hy() : r,
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
function kP(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Wa(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class TP {
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
    this._comments = t, Wa(this);
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
    this._comments = i, Wa(this);
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
    return this._comments = n, Wa(this), t.type === "comment" ? {
      index: s,
      markedComment: kP(t)
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
    const r = new _u(), n = t.type, i = t.id;
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
      Ib,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Ft
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Lb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const h = p.insert, m = p.retain, y = p.delete, v = u.parent, M = u === r ? void 0 : v instanceof _u && this._comments.find((E) => E.id === v.get("id"));
              if (Array.isArray(h)) {
                const E = f;
                h.slice().reverse().forEach((R) => {
                  const C = R.get("id"), F = R.get("type") === "thread" ? gy(
                    R.get("quote"),
                    R.get("comments").toArray().map(
                      (U) => wo(
                        U.get("content"),
                        U.get("author"),
                        U.get("id"),
                        U.get("timeStamp"),
                        U.get("deleted")
                      )
                    ),
                    C
                  ) : wo(
                    R.get("content"),
                    R.get("author"),
                    C,
                    R.get("timeStamp"),
                    R.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(F, M, E);
                  });
                });
              } else if (typeof m == "number")
                f += m;
              else if (typeof y == "number")
                for (let E = 0; E < y; E++) {
                  const R = M === void 0 || M === !1 ? this._comments[f] : M.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(R, M);
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
function xP(e) {
  const [t, r] = pe(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function vP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = X(null);
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
  }, [n, e]), /* @__PURE__ */ _("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Ce("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function _P({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return kn(
    /* @__PURE__ */ _(vP, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function my() {
  const [e, t] = pe(null), r = de(() => {
    t(null);
  }, []), n = De(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _(_P, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const CP = {
  ...Yg,
  paragraph: "CommentEditorTheme__paragraph"
};
function SP(...e) {
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
  return /* @__PURE__ */ _(
    "button",
    {
      disabled: i,
      className: SP(
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
function MP({
  className: e
}) {
  return /* @__PURE__ */ _(np, { className: e || "ContentEditable__root" });
}
function EP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const Rf = Xf("INSERT_INLINE_COMMAND");
function AP({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = X(null), s = de(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Ts(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ _("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ _("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ _("i", { className: "icon add-comment" }) }) });
}
function PP({ onEscape: e }) {
  const [t] = le();
  return j(() => t.registerCommand(
    Yf,
    (r) => e(r),
    ci
  ), [t, e]), null;
}
function yy({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(rp, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: CP
  }, children: /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      qb,
      {
        contentEditable: /* @__PURE__ */ _(MP, { className: e }),
        placeholder: /* @__PURE__ */ _(EP, { children: s }),
        ErrorBoundary: sp
      }
    ),
    /* @__PURE__ */ _(Ob, { onChange: n }),
    /* @__PURE__ */ _(op, {}),
    t !== !1 && /* @__PURE__ */ _(Pb, {}),
    /* @__PURE__ */ _(PP, { onEscape: r }),
    /* @__PURE__ */ _(Nb, {}),
    i !== void 0 && /* @__PURE__ */ _(ip, { editorRef: i })
  ] }) });
}
function by(e, t) {
  return de(
    (r, n) => {
      r.read(() => {
        e(Rb()), t(!$b(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function NP({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = pe(""), [s, o] = pe(!1), a = X(null), c = De(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = X(null), u = Ty(), d = de(() => {
    e.getEditorState().read(() => {
      const m = w();
      if (N(m)) {
        l.current = m.clone();
        const y = m.anchor, v = m.focus, M = vb(
          e,
          y.getNode(),
          y.offset,
          v.getNode(),
          v.offset
        ), E = a.current;
        if (M !== null && E !== null) {
          const { left: R, bottom: C, width: T } = M.getBoundingClientRect(), F = _b(e, M);
          let U = F.length === 1 ? R + T / 2 - 125 : R - 125;
          U < 10 && (U = 10), E.style.left = `${U}px`, E.style.top = `${C + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const G = F.length, { container: J } = c, ce = c.elements, fe = ce.length;
          for (let Y = 0; Y < G; Y++) {
            const Pe = F[Y];
            let Ne = ce[Y];
            Ne === void 0 && (Ne = document.createElement("span"), ce[Y] = Ne, J.appendChild(Ne));
            const K = `position:absolute;top:${Pe.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Pe.left}px;height:${Pe.height}px;width:${Pe.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Ne.style.cssText = K;
          }
          for (let Y = fe - 1; Y >= G; Y--) {
            const Pe = ce[Y];
            J.removeChild(Pe), ce.pop();
          }
        }
      }
    });
  }, [e, c]);
  Ts(() => {
    d();
    const m = c.container, y = document.body;
    return y !== null ? (y.appendChild(m), () => {
      y.removeChild(m);
    }) : () => {
    };
  }, [c.container, d]), j(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (m) => (m.preventDefault(), t(), !0), p = () => {
    if (s) {
      let m = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      m.length > 100 && (m = m.slice(0, 99) + "…"), r(
        gy(m, [wo(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = by(i, o);
  return /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      yy,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ _(nn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ _(
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
function wP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = pe(""), [s, o] = pe(!1), a = X(null), c = Ty(), l = by(i, o);
  return /* @__PURE__ */ Ce(Tn, { children: [
    /* @__PURE__ */ _(
      yy,
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
      nn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(wo(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(pb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function ky({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Ce(Tn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Ce("div", { className: "Modal__content", children: [
      /* @__PURE__ */ _(
        nn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ _(
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
function $f({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = pe(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = my();
  return /* @__PURE__ */ Ce("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Ce("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Ce(Tn, { children: [
      /* @__PURE__ */ _(
        nn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ _(
              ky,
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
function OP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = pe(0), [l, u] = my(), d = De(
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
    return f.type === "thread" ? /* @__PURE__ */ Ce(
      "li",
      {
        onClick: () => {
          const m = s.get(p);
          if (m !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const v = Array.from(m)[0], M = Q(v);
                ge(M) && M.selectStart();
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
              /* @__PURE__ */ _("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ _(
              nn,
              {
                onClick: () => {
                  u("Delete Thread", (m) => /* @__PURE__ */ _(
                    ky,
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
            $f,
            {
              comment: m,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            m.id
          )) }),
          /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
            wP,
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
      $f,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function qP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = X(null), o = r.length === 0;
  return /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ _("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ _(
      OP,
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
function Ty() {
  const e = ap(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function RP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = ap(), [a] = le(), c = De(() => {
    const U = new TP(a, s);
    return r && U.registerOnChange(r), t?.(U), U;
  }, [a, s, r, t]), l = xP(c), u = De(() => /* @__PURE__ */ new Map(), []), [d, f] = pe(), [p, h] = pe([]), [m, y] = pe(!1), [v, M] = pe(!1), { yjsDocMap: E } = o;
  j(() => {
    if (e) {
      const U = e("comments", E);
      return c.registerCollaboration(U);
    }
    return () => {
    };
  }, [c, e, E]);
  const R = de(() => {
    a.update(() => {
      const U = w();
      U !== null && (U.dirty = !0);
    }), y(!1);
  }, [a]), C = de(
    (U, G) => {
      if (U.type === "comment") {
        const J = c.deleteCommentOrThread(U, G);
        if (!J)
          return;
        const { markedComment: ce, index: fe } = J;
        c.addComment(ce, G, fe);
      } else {
        c.deleteCommentOrThread(U);
        const J = G !== void 0 ? G.id : U.id, ce = u.get(J);
        ce !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const fe of ce) {
              const Y = Q(fe);
              ge(Y) && (Y.deleteID(Wr, J), Y.hasNoIDsForEveryType() && lo(Y));
            }
          });
        });
      }
    },
    [c, a, u]
  ), T = de(
    (U, G, J, ce) => {
      c.addComment(U, J), G && (a.update(() => {
        N(ce) && Xc(ce, Wr, U.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const U = [];
    let G;
    for (const J of p) {
      const ce = u.get(J);
      if (ce !== void 0)
        for (const fe of ce) {
          const Y = a.getElementByKey(fe);
          Y !== null && (Y.classList.add("selected"), U.push(Y), G = window.setTimeout(() => {
            M(!0);
          }, 0));
        }
    }
    return () => {
      G !== void 0 && window.clearTimeout(G);
      for (const J of U)
        J.classList.remove("selected");
    };
  }, [p, a, u]), j(() => {
    if (!a.hasNodes([et]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const U = /* @__PURE__ */ new Map();
    return Ye(
      tp(
        a,
        et,
        (G) => as(G.getTypedIDs()),
        (G, J) => {
          for (const [ce, fe] of Object.entries(G.getTypedIDs()))
            fe.forEach((Y) => {
              J.addID(ce, Y);
            });
        }
      ),
      a.registerMutationListener(
        et,
        (G) => {
          a.getEditorState().read(() => {
            for (const [J, ce] of G) {
              const fe = Q(J);
              let Y = [];
              ce === "destroyed" ? Y = U.get(J) ?? [] : ge(fe) && (Y = fe.getTypedIDs()[Wr] ?? []);
              for (const Pe of Y) {
                let Ne = u.get(Pe);
                U.set(J, Y), ce === "destroyed" ? Ne !== void 0 && (Ne.delete(J), Ne.size === 0 && u.delete(Pe)) : (Ne === void 0 && (Ne = /* @__PURE__ */ new Set(), u.set(Pe, Ne)), Ne.has(J) || Ne.add(J));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: G, tags: J }) => {
        G.read(() => {
          const ce = w();
          let fe = !1, Y = !1;
          if (N(ce)) {
            const Pe = ce.anchor.getNode();
            if (S(Pe)) {
              const Ne = _k(Pe, Wr, ce.anchor.offset) ?? [];
              Ne !== null && (h(Ne), fe = !0), ce.isCollapsed() || (f(Pe.getKey()), Y = !0);
            }
          }
          fe || h((Pe) => Pe.length === 0 ? Pe : []), Y || f(null), !J.has("collaboration") && N(ce) && y(!1);
        });
      }),
      a.registerCommand(
        Rf,
        () => {
          const G = window.getSelection();
          return G !== null && G.removeAllRanges(), y(!0), !0;
        },
        vn
      )
    );
  }, [a, u]);
  const F = () => {
    a.dispatchCommand(Rf, void 0);
  };
  return /* @__PURE__ */ Ce(Tn, { children: [
    m && kn(
      /* @__PURE__ */ _(
        NP,
        {
          editor: a,
          cancelAddComment: R,
          submitAddComment: T
        }
      ),
      document.body
    ),
    d != null && !m && kn(
      /* @__PURE__ */ _(
        AP,
        {
          anchorKey: d,
          editor: a,
          showComments: v,
          onAddComment: F
        }
      ),
      document.body
    ),
    n !== null && kn(
      /* @__PURE__ */ _(
        nn,
        {
          className: `CommentPlugin_ShowCommentsButton ${v ? "active" : ""}`,
          onClick: () => M(!v),
          title: v ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    v && kn(
      /* @__PURE__ */ _(
        qP,
        {
          comments: l,
          submitAddComment: T,
          deleteCommentOrThread: C,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function $P() {
  const e = X(void 0), t = de((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function IP(e, t) {
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
function LP(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      IP(r, t);
    };
  }, [t, e]);
}
const S0 = $n(function(t, r) {
  const n = X(null), i = X(!0), s = X(null), [o, a] = pe(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: h, view: m } = {} } = t, y = (h ?? !1) || ms(m), [v, M] = $P();
  LP(f, v), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const C = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(C), p || console.warn(C);
    }
  }, [p]), Fc(r, () => ({
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
    setTransientInput(C) {
      n.current?.setTransientInput(C);
    },
    setUsj(C) {
      n.current?.setUsj(C);
    },
    applyUpdate(C, T) {
      n.current?.applyUpdate(C, T);
    },
    replaceEmbedUpdate(C, T) {
      return n.current?.replaceEmbedUpdate(C, T);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(C) {
      n.current?.setSelection(C);
    },
    setAnnotation(C, T, F, U, G) {
      typeof U == "function" || U === void 0 ? n.current?.setAnnotation(C, T, F, U, G) : n.current?.setAnnotation(C, T, F, U);
    },
    removeAnnotation(C, T) {
      n.current?.removeAnnotation(C, T);
    },
    formatPara(C) {
      n.current?.formatPara(C);
    },
    getElementByKey(C) {
      return n.current?.getElementByKey(C);
    },
    removeCharacterMarker(C) {
      return n.current?.removeCharacterMarker(C) ?? !1;
    },
    replaceCharacterMarker(C, T) {
      return n.current?.replaceCharacterMarker(C, T) ?? !1;
    },
    extendCharacterMarker(C, T) {
      return n.current?.extendCharacterMarker(C, T) ?? !1;
    },
    insertMarker(C) {
      return n.current?.insertMarker(C);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(C, T) {
      return n.current?.applyMarkerMenuSelection(C, T);
    },
    splitParagraphWithMarker(C) {
      n.current?.splitParagraphWithMarker(C);
    },
    commitTypedMarker(C, T) {
      return n.current?.commitTypedMarker(C, T) ?? !1;
    },
    commitTypedCloser(C) {
      return n.current?.commitTypedCloser(C) ?? !1;
    },
    insertNote(C, T, F) {
      n.current?.insertNote(C, T, F);
    },
    selectNote(C) {
      n.current?.selectNote(C);
    },
    getNoteOps(C) {
      return n.current?.getNoteOps(C);
    },
    setComments(C) {
      v.current?.setComments(C), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const E = de(
    (C, T, F, U) => {
      if (!u) return;
      const G = v.current?.getComments();
      u(C, G, T, F, U);
    },
    [v, u]
  ), R = de(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const C = v.current?.getComments();
    l(C);
  }, [v, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(wb, { children: /* @__PURE__ */ Ce(py, { ref: n, onUsjChange: E, ...f, children: [
    /* @__PURE__ */ _(
      RP,
      {
        setCommentStore: M,
        onChange: R,
        showCommentsContainerRef: y ? null : d ?? o,
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
function xy(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function DP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const UP = /^[#\w().,%/\s-]+$/;
function mr(e) {
  return e != null;
}
const FP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, KP = {
  left: "right",
  right: "left"
}, Uc = ".editor-input.usfm", zP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function jP(e) {
  return zP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Uc}".`
  ), Uc);
}
function BP(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${xy(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (UP.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), mr(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), mr(t.firstLineIndent) && i.push(`text-indent: ${bn(t.firstLineIndent * 20 * r)}vw`), mr(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${bn(t.leftMargin * 20 * r)}vw`), mr(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${bn(t.rightMargin * 20 * r)}vw`
  ), mr(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${bn(t.spaceBefore * r)}pt`), mr(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${bn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = FP[n ? KP[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const If = { c: 150, ca: 133, cp: 150 };
function Lf(e, t) {
  return e && mr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function VP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && mr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Lf(e.markers.c, If.c);
  return ["ca", "cp"].map((i) => {
    const s = Lf(
      e.markers[i],
      If[i]
    ), o = bn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function M0(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Uc } = t, s = jP(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${xy(e.defaultFont)}"`), mr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${bn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = BP(c, l, r, n);
    u.length > 0 && o.push(`${s} .usfm_${DP(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...VP(e, s)), o.join(`
`);
}
export {
  Hh as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  C0 as Editorial,
  oo as GENERATOR_NOTE_CALLER,
  lp as HIDDEN_NOTE_CALLER,
  S0 as Marginal,
  b as MarkerType,
  Vh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Wh as STANDARD_VIEW_MODE,
  bo as defaultStyleInfo,
  _0 as directionToNames,
  T_ as filterAndRankItems,
  M0 as generateUsjCss,
  x0 as getDefaultViewMode,
  Go as getDefaultViewOptions,
  UE as getEnterMenuItems,
  DE as getMarkerMenuItems,
  v0 as getViewMode,
  Gh as getViewOptions,
  ms as isBlockVerseLayout,
  zr as isInsertEmbedOpOfType,
  Fv as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
