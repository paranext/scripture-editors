import { jsx as S, jsxs as Te, Fragment as nn } from "react/jsx-runtime";
import { forwardRef as yn, useState as de, useRef as Z, useCallback as he, useEffect as K, useMemo as De, memo as tm, createContext as Rd, useContext as $d, Children as rm, isValidElement as nm, cloneElement as im, useImperativeHandle as ec, useLayoutEffect as Wi } from "react";
import { assertSafeKey as Be, isValidBookCode as sm, MARKER_OBJECT_PROPS as om, USJ_VERSION as ur, USJ_TYPE as dr, isUsjTextContentLocation as am, indexesFromUsjJsonPath as Id, isUsjAttributeKeyLocation as cm, isUsjAttributeMarkerLocation as lm, isUsjClosingAttributeMarkerLocation as um, isUsjMarkerLocation as dm, isUsjClosingMarkerLocation as fm, isUsjPropertyValueLocation as pm, getUsjDocumentLocationTypeName as hm, usjJsonPathFromIndexes as Hr, EMPTY_USJ as Ld } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as je, $parseSerializedNode as Hs, DecoratorNode as Hi, ElementNode as tr, isHTMLElement as bn, createState as Gs, $getState as te, $setState as gt, $isRangeSelection as P, $isElementNode as $, $isTextNode as E, ParagraphNode as tc, TextNode as Ue, $createTextNode as pe, $getCommonAncestor as gm, $getSelection as w, $isLineBreakNode as Js, NODE_STATE_KEY as Gi, $getEditor as Ji, $hasUpdateTag as mm, $getNodeByKey as re, $getRoot as Fe, $createRangeSelection as rc, $createPoint as $l, $getCharacterOffsets as Dd, KEY_DOWN_COMMAND as yr, COMMAND_PRIORITY_HIGH as $e, HISTORY_MERGE_TAG as Ud, CLICK_COMMAND as Ys, COMMAND_PRIORITY_EDITOR as sn, isDOMNode as Fd, $getNearestNodeFromDOMNode as Yi, CONTROLLED_TEXT_INSERTION_COMMAND as nc, PASTE_COMMAND as cr, COMMAND_PRIORITY_CRITICAL as lr, CUT_COMMAND as on, DROP_COMMAND as ic, DELETE_CHARACTER_COMMAND as ym, DELETE_WORD_COMMAND as bm, DELETE_LINE_COMMAND as km, $isDecoratorNode as zd, COPY_COMMAND as Xs, COMMAND_PRIORITY_NORMAL as Fn, SELECTION_CHANGE_COMMAND as fr, BLUR_COMMAND as sc, $addUpdateTag as qr, SKIP_DOM_SELECTION_TAG as Tm, CLEAR_HISTORY_COMMAND as xm, COMMAND_PRIORITY_LOW as Nt, $setSelection as Ni, $getPreviousSelection as _m, $isRootOrShadowRoot as Cm, CAN_UNDO_COMMAND as Sm, CAN_REDO_COMMAND as vm, $isNodeSelection as Kd, DRAGSTART_COMMAND as Mm, $createNodeSelection as jd, getDOMSelectionFromTarget as Em, $onUpdate as Am, KEY_ENTER_COMMAND as Bd, LineBreakNode as Vd, $copyNode as Pm, FOCUS_COMMAND as Om, $isRootNode as Nm, KEY_ESCAPE_COMMAND as Wd, INSERT_PARAGRAPH_COMMAND as Cs, createCommand as Hd, HISTORIC_TAG as oc, UNDO_COMMAND as Gd, REDO_COMMAND as Jd, CLEAR_EDITOR_COMMAND as wm } from "lexical";
import { addClassNamesToElement as On, removeClassNamesFromElement as $o, $findMatchingParent as ot, $dfsIterator as Yd, $dfs as Xn, mergeRegister as Je, registerNestedElementResolver as Xd, $unwrapNode as da, IS_APPLE as Ss } from "@lexical/utils";
import { useLexicalNodeSelection as qm } from "@lexical/react/useLexicalNodeSelection";
import Ti from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as Rm, $getHtmlContent as $m, $getLexicalContent as Im } from "@lexical/clipboard";
import { TreeView as Lm } from "@lexical/react/LexicalTreeView";
import * as Dm from "react-dom";
import { createPortal as rn } from "react-dom";
import { LexicalComposer as Qd } from "@lexical/react/LexicalComposer";
import { ContentEditable as Zd } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as ef } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as tf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as rf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Um } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Fm, createDOMRange as zm, createRectsFromDOMRange as Km } from "@lexical/selection";
import { deepEqual as Ft } from "fast-equals";
import { autoUpdate as jm, computePosition as Bm, shift as Vm, flip as Wm } from "@floating-ui/dom";
import { $generateNodesFromDOM as Hm } from "@lexical/html";
import { AutoFocusPlugin as Gm } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Jm } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as nf, LexicalCollaboration as Ym } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Xm } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Qm } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Zm, $isRootTextContentEmpty as ey } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as ty } from "@lexical/yjs";
import { Array as Il, Map as Ll, YArrayEvent as ry } from "yjs";
const Io = (e) => je(Hs(e)), ny = {
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
function sf(e) {
  return ny[e];
}
const O = " ", vs = "​", qt = O, ac = `${O}|`, Qt = "p", Ms = "+", of = "-", Es = "chapter", fa = "verse", Dl = "invalid", iy = "text-spacing", sy = "formatted-font", oy = "marker-", af = "external-usj-mutation", cf = "selection-change", Rr = "cursor-change", pa = "annotation-change", wi = "delta-change", lf = "marker-settle", ay = [
  af,
  cf,
  Rr,
  pa,
  wi
], an = "zmsc-s", zn = "zmsc-e", cy = [an, zn], ly = [
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
  an,
  zn
], uf = 1, cc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], uy = cc.filter((e) => e !== "sid" && e !== "eid");
class Bt extends Hi {
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
    return new Bt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return ff().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (ly.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: uf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function df(e) {
  return cy.includes(e);
}
function ff(e, t, r, n, i) {
  return je(new Bt(e, t, r, n, void 0, i));
}
function ze(e) {
  return e instanceof Bt;
}
const lc = "f", dy = [
  // Footnote
  lc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function xi(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const fy = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], pf = 1;
class Me extends tr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = lc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (xi(t) === "crossref" ? of : Ms), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => hy(t) ? {
        conversion: py,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return uc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (dy.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", xi(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", xi(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && bn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", xi(this.getMarker()))), { element: r };
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
      version: pf
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
function py(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: uc(t, r, n) };
}
function uc(e, t, r, n, i) {
  return je(new Me(e, t, r, n, i));
}
function hy(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Me.isValidMarker(t) && e.classList.contains(Me.getType());
}
function z(e) {
  return e instanceof Me;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Ul = {
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
}, Gr = {
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
}, Fl = {
  p: { children: Gr },
  q: { children: Gr },
  q1: { children: Gr },
  q2: { children: Gr },
  q3: { children: Gr },
  q4: { children: Gr },
  b: { children: Gr },
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
function Zt(e) {
  const t = Object.hasOwn(Ul, e) ? Ul[e] : void 0, r = Object.hasOwn(Fl, e) ? Fl[e] : void 0;
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
const hf = "v", gf = "c", Jr = "fig", zl = "tr", ha = "esb", mf = "esbe", gy = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, my = {
  "": "start",
  c: "center",
  r: "end"
};
function yy(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Kl(e) {
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
const by = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function ky(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === vs && s + 1 < e.length && Kl(e[s + 1]) || (Kl(o) ? (r || (i = t.length, t += o), r = !0) : by.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Ty(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function xy(e, t) {
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
const _y = /^(?:qt[1-5]?|ts)-[se]$/;
function Qs(e) {
  return _y.test(e) || df(e);
}
function Lo(e, t) {
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
function Cy(e, t, r) {
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
      a(ky(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = xy(e, i + 1);
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
    if (l === hf) {
      const { word: g, next: y } = Lo(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === gf) {
      const { word: g, next: y } = Lo(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && Me.isValidMarker(l)) {
      const { word: g, next: y } = Lo(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && Qs(l)) {
      const g = Ny(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), x = y === -1 ? e.length : y;
        o(e.slice(c, x)), i = x;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : As(p) ? (d(), As(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === ha || l === mf ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const jl = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function As(e) {
  return Object.hasOwn(jl, e) ? jl[e] : void 0;
}
function Sy(e) {
  return As(e) !== void 0;
}
const vy = /([-\w]+)\s*=\s*"(.*?)"/g, My = /[\s\u200B]*[\n\r][\s\u200B]*/g, yf = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Zs(e) {
  return yf[e];
}
const Ey = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Ay(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function eo(e, t, r = yf[t]) {
  const n = e.replace(My, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(vy)];
  if (s.length > 0) {
    if (!Ay(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Ey.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function to(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Py(e) {
  const t = br(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Oy(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = eo(e.slice(n + 1, i), r, to(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Ny(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = eo(s.slice(o + 1), r, to(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Oy(e, i + 2, r);
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
`, " ").replaceAll("~", O);
}
function Yr(e) {
  return e.content || (e.content = []), e.content;
}
function br(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u;
  const d = () => u ? Yr(u) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? Yr(o[o.length - 1].object) : Yr(s);
    if (o.length > 0)
      return Yr(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return d();
      i = { type: "para", marker: Qt, content: [] }, d().push(i);
    }
    return Yr(i);
  }, m = (Y) => {
    const D = p();
    typeof Y == "string" && typeof D[D.length - 1] == "string" ? D[D.length - 1] = D[D.length - 1] + Y : D.push(Y);
  }, g = (Y) => {
    for (let D = Y; D < o.length; D += 1) {
      const Q = o[D].object;
      Q.closed = "false";
    }
  }, y = () => {
    g(0), o.length = 0;
  }, x = (Y) => {
    s && (o.length > a && (g(a), o.length = a), a = 0, Y || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, k = (Y) => {
    u && (Y || (u.closed = "false"), u = void 0);
  };
  let M, L = "", _;
  const F = () => {
    L && m(or(L)), L = "";
  }, U = (Y = !1) => {
    M?.type === "sidebar" ? L = "" : Y && L.endsWith(`
`) && (L = L.slice(0, -1)), M = void 0, F();
  }, B = () => {
    if (!_)
      return;
    const Y = { type: "char", marker: _.marker, content: [] };
    _.value && (Y.content = [or(_.value)]), p().push(Y), o.push({ object: Y }), _ = void 0;
  }, J = (Y, D) => {
    f = !1, v(), y(), x(!1), i = { type: "para", marker: Y, content: [] }, D && (i.content = [or(D)]), d().push(i);
  }, ie = () => {
    _ && (J(_.marker, _.value), _ = void 0);
  };
  let ue;
  const ne = () => {
    if (ue) {
      if (ue.shape === "para")
        J(Jr, ue.value);
      else {
        const Y = { type: "char", marker: Jr, content: [] };
        ue.value && (Y.content = [or(ue.value)]), p().push(Y), o.push({ object: Y });
      }
      ue = void 0;
    }
  }, Se = Cy(e, t?.getMarker ?? Zt, n);
  for (let Y = 0; Y < Se.length; Y++) {
    const D = Se[Y];
    if (_) {
      if (D.kind === "text") {
        _.value += D.text;
        continue;
      }
      if (_.shape === "char" && D.kind === "end" && D.marker.replace(/^\+/, "") === _.marker) {
        if (_.value.trim() === "") {
          p().push({ type: "char", marker: _.marker, content: [] }), _ = void 0, U();
          continue;
        }
        Object.assign(_.target, {
          [_.attrName]: or(_.value.trim())
        });
        const Q = _.marker;
        if (_ = void 0, Q === "ca") {
          const me = Se[Y + 1];
          me?.kind === "text" && /^[\s\u200B]*$/.test(me.text) && Y++;
        }
        continue;
      }
      if (_.shape === "para" && (D.kind === "para" || D.kind === "chapter")) {
        const Q = _.value.replace(/[\s\u200B]+$/, "");
        Q === "" ? (J(_.marker), _ = void 0) : (Object.assign(_.target, { [_.attrName]: or(Q) }), _ = void 0);
      } else {
        M = void 0, (D.kind === "para" || D.kind === "chapter") && _.value.endsWith(`
`) && (_.value = _.value.slice(0, -1)), _.shape === "para" ? ie() : B(), Y--;
        continue;
      }
    }
    if (ue) {
      if (D.kind === "text" || D.kind === "optbreak") {
        ue.value += D.kind === "text" ? D.text : "//";
        continue;
      }
      if (D.kind === "end" && D.marker.replace(/^\+/, "") === Jr) {
        const Q = ue.value.indexOf("|"), me = Q >= 0 ? eo(ue.value.slice(Q + 1), Jr) : void 0;
        if (me) {
          const nt = {};
          for (const [se, Xe] of Object.entries(me))
            nt[se === "src" ? "file" : se] = Xe;
          const Mt = {
            type: "figure",
            marker: Jr,
            ...nt
          }, ce = ue.value.slice(0, Q);
          ce && (Mt.content = [or(ce)]), m(Mt), ue = void 0;
          continue;
        }
      }
      ne(), Y--;
      continue;
    }
    if (M)
      if (D.kind === "text") {
        if (D.text.includes(`
`) && /^[\s\u200B]*$/.test(D.text)) {
          L += D.text;
          continue;
        }
        U();
      } else if (D.kind === "charOpen" || D.kind === "para") {
        const Q = D.kind === "para" || !D.isNested ? As(D.marker) : void 0;
        if (Q && Q.targetTypes.includes(M.type)) {
          L = "", _ = {
            target: M,
            attrName: Q.attrName,
            marker: D.marker,
            shape: Q.shape,
            value: ""
          };
          continue;
        }
        U(D.kind === "para");
      } else
        U(D.kind === "chapter");
    if (!s && !n && (D.kind === "charOpen" && !D.isNested && D.marker === Jr || D.kind === "para" && D.marker === Jr)) {
      y(), ue = { shape: D.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (D.kind) {
      case "text": {
        let Q = D.text;
        if (!s && Q.endsWith(`
`)) {
          const me = Se[Y + 1];
          (me === void 0 || me.kind === "para" || me.kind === "chapter") && (Q = Q.slice(0, -1));
        }
        Q && m(or(Q));
        break;
      }
      case "para": {
        const Q = !s && !n;
        if (Q && D.marker === zl) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: zl, content: [] }, Yr(c).push(l), i = l, f = !1;
          break;
        }
        if (Q && l) {
          const me = gy.exec(D.marker);
          if (me && yy(me)) {
            y();
            const [, nt, Mt, ce] = me, se = {
              type: "table:cell",
              marker: ce ? D.marker.slice(0, D.marker.indexOf("-")) : D.marker,
              align: my[nt],
              content: []
            };
            ce && (se.colspan = String(Number(ce) + 1 - Number(Mt))), Yr(l).push(se), i = se;
            break;
          }
        }
        if (v(), !n && D.marker === ha) {
          y(), x(!1), k(!1), u = { type: "sidebar", marker: ha, content: [] }, r.push(u), i = void 0, M = u, f = !1;
          break;
        }
        if (D.marker === mf && u) {
          y(), x(!1), k(!0), i = void 0;
          break;
        }
        J(D.marker);
        break;
      }
      case "verse": {
        x(!1);
        const Q = { type: "verse", marker: hf, number: D.number };
        m(Q), M = Q;
        break;
      }
      case "chapter": {
        y(), x(!1), v(), k(!1), i = void 0;
        const Q = {
          type: "chapter",
          marker: gf,
          number: D.number
        };
        r.push(Q), M = Q, f = !0;
        break;
      }
      case "note": {
        x(!1);
        const Q = p();
        s = { type: "note", marker: D.marker, caller: D.caller, content: [] }, a = o.length, Q.push(s), M = s;
        break;
      }
      case "charOpen": {
        if (!D.isNested) {
          const nt = s ? a : 0;
          g(nt), o.length = nt;
        }
        const Q = p(), me = { type: "char", marker: D.marker, content: [] };
        Q.push(me), o.push({ object: me });
        break;
      }
      case "end": {
        const Q = D.marker.replace(/^\+/, ""), me = s ? a : 0, nt = o.findLastIndex((Mt, ce) => ce >= me && Mt.object.marker === Q);
        nt >= 0 ? (wy(o[nt].object), g(nt + 1), o.length = nt) : s && s.marker === Q ? x(!0) : (g(me), o.length = me, m({ type: "unmatched", marker: `${D.marker}*` }));
        break;
      }
      case "milestone":
        m({ type: "ms", marker: D.marker, ...D.attributes });
        break;
      case "optbreak":
        m({ type: "optbreak" });
        break;
    }
  }
  if (ue && ne(), _)
    if (_.shape === "para") {
      const Y = _.value.replace(/[\s\u200B]+$/, "");
      Y === "" ? J(_.marker) : Object.assign(_.target, { [_.attrName]: or(Y) }), _ = void 0;
    } else
      _.value.endsWith(`
`) && (_.value = _.value.slice(0, -1)), B();
  y(), x(!1), k(!1);
  const Pe = (Y) => {
    for (const D of Y)
      typeof D != "string" && D.content && (Pe(D.content), D.content.length === 0 && delete D.content);
  };
  return Pe(r), r;
}
function wy(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = eo(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const cn = Gs("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), $r = Gs("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = Gs("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), rr = "marker-trailing-space", bf = 1, qy = "marker", dc = Gs("isGutterMarker", {
  parse: (e) => e === !0
});
class kr extends Hi {
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
    return new kr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Ly(t) ? {
        conversion: Ry,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return pr().updateFromJSON(t);
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
    return r && bn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: bf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Ry(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: pr(t, r) };
}
function pr(e, t) {
  return je(new kr(e, t));
}
function $y(e) {
  return gt(pr(qy, e), dc, !0);
}
function Iy(e) {
  return Vt(e) && te(e, dc);
}
function Ly(e) {
  return e?.tagName === "span";
}
function Vt(e) {
  return e instanceof kr;
}
function kf(e) {
  return e?.type === kr.getType();
}
const wr = "internal-comment", Dy = [wr], Tf = Object.freeze({}), ga = Object.freeze({}), ma = Object.freeze({}), ya = Object.freeze({}), ba = Object.freeze({}), Uy = 1, Nn = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new Map(), qn = /* @__PURE__ */ new Map();
class Qe extends tr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Tf, r, n, i, s, o) {
    super(o), this.__typedIDs = hs(t), this.__typedOnClicks = Do(r), this.__typedOnRemoves = Uo(n), this.__typedOnMouseEnters = Fo(i), this.__typedOnMouseLeaves = zo(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = hs(t.__typedIDs), n = Do(t.__typedOnClicks), i = Uo(t.__typedOnRemoves), s = Fo(t.__typedOnMouseEnters), o = zo(t.__typedOnMouseLeaves);
    return new Qe(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Dy.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return qi().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Uy
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      On(n, Xr(t.theme.typedMark, a)), c.length > 1 && On(n, Xr(t.theme.typedMarkOverlap, a));
      for (const l of c)
        On(n, Xr("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = Xr(n.theme.typedMark, s), d = Xr(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && On(r, u) : l === 0 && $o(r, u), c === 1 ? l === 2 && On(r, d) : l === 1 && $o(r, d));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || $o(r, Xr("annotationId", m));
      for (const m of a)
        f.has(m) || On(r, Xr("annotationId", m));
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
    return _e(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = hs(r.__typedIDs);
    r.__typedIDs = hs(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ps(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Do(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return _e(t) ? Nn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Uo(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return _e(t) ? fi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Fo(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return _e(t) ? wn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = zo(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return _e(t) ? qn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!_e(a))
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
    if (!_e(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ps(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = qi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Nn.delete(r.getKey()), fi.delete(r.getKey()), wn.delete(r.getKey()), qn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Nn.get(this.getKey());
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
    const n = wn.get(this.getKey());
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
    const n = qn.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === ga) {
      const t = Nn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Nn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Nn.set(this.getKey(), this.__typedOnClicks);
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
    const i = Er(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Er(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === ga) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === ma) {
      const t = fi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      fi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    fi.set(this.getKey(), this.__typedOnRemoves);
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
    const i = Er(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Er(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === ma) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === ya) {
      const t = wn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      wn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    wn.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = Er(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Er(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === ya) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === ba) {
      const t = qn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      qn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    qn.set(this.getKey(), this.__typedOnMouseLeaves);
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
    const i = Er(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Er(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === ba) {
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
    const i = Fy(t, r);
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
    for (; _e(t) && Vl(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; _e(r) && Vl(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = zy(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ky(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = jy(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = By(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function hs(e = Tf) {
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
function Do(e) {
  if (!e || e === ga)
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
function Uo(e) {
  if (!e || e === ma)
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
function Fo(e) {
  if (!e || e === ya)
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
function zo(e) {
  if (!e || e === ba)
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
function Er(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Bl(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Fy(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Vl(e, t) {
  const r = Bl(e), n = Bl(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function zy(e, t) {
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
function Ky(e, t) {
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
function jy(e, t) {
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
function By(e, t) {
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
function Xr(e, t) {
  return `${e}-${t}`;
}
function Wl(e) {
  return `external-${e}`;
}
function qi(e, t, r, n, i) {
  return je(new Qe(e, t, r, n, i));
}
function _e(e) {
  return e instanceof Qe;
}
function Vy(e) {
  return e?.type === Qe.getType();
}
function Ps(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function xf(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let m, g;
  for (let y = 0; y < u; y++) {
    const x = a[y];
    if ($(g) && g.isParentOf(x))
      continue;
    const v = y === 0, k = y === u - 1;
    let M = null;
    if (E(x)) {
      const L = x.getTextContentSize(), _ = v ? f : 0, F = k ? p : L;
      if (_ === 0 && F === 0)
        continue;
      const U = x.splitText(_, F);
      M = U.length > 1 && (U.length === 3 || v && !k || F === L) ? U[1] : U[0];
    } else {
      if (_e(x))
        continue;
      $(x) && x.isInline() && (M = x);
    }
    if (M !== null) {
      if (M && M.is(m))
        continue;
      const L = M.getParent();
      (L == null || !L.is(m)) && (g = void 0), m = L, g === void 0 && (g = qi(), g.addID(t, r, n, i, s, o), M.insertBefore(g)), g.append(M);
    } else
      m = void 0, g = void 0;
  }
  t === wr && $(g) && (d ? g.selectStart() : g.selectEnd());
}
function Wy(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (_e(n))
      return n.getTypedIDs()[t];
    if (E(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (_e(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Hy = ["type", "marker", "content"], ka = "unknown", _f = 1, Gy = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class kn extends tr {
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
    return new kn(r, n, i, s);
  }
  static importDOM() {
    return {
      [ka]: (t) => Yy(t) ? {
        conversion: Jy,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return fc().updateFromJSON(t);
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
    return Gy.has(this.getTag());
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
    const t = document.createElement(ka);
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
      version: _f
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
function Jy(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: fc(t, r) };
}
function fc(e, t, r) {
  return je(new kn(e, t, r));
}
function Yy(e) {
  return e?.tagName.toLowerCase() === ka;
}
function Ie(e) {
  return e instanceof kn;
}
const Ri = "id", Cf = 1, Xy = [
  "type",
  "marker",
  "code",
  "content"
];
class Rt extends tr {
  __marker = Ri;
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
    return new Rt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Sf(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return sm(t);
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
      version: Cf
    };
  }
}
function Sf(e, t) {
  return je(new Rt(e, t));
}
function bt(e) {
  return e instanceof Rt;
}
function Qy(e) {
  return e?.type === Rt.getType();
}
const Os = "c", vf = 1, Zy = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class vt extends tr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Os, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new vt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Mf().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Es, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: vf
    };
  }
}
function Mf(e, t, r, n, i) {
  return je(new vt(e, t, r, n, i));
}
function Re(e) {
  return e instanceof vt;
}
function eb(e) {
  return e?.type === vt.getType();
}
const Ef = [
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
], Af = [
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
], tb = [
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
  ...Ef,
  ...Af
], Pf = 1, rb = ["type", "marker", "content"];
class ye extends tr {
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
    return t !== void 0 && (tb.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Ef.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Af.includes(t);
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
      span: (t) => ib(t) ? {
        conversion: nb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return hr().updateFromJSON(t);
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
    return Hl(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Hl(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && bn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Pf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = hr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Hl(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function nb(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: hr(t) };
}
function hr(e, t) {
  return je(new ye(e, t));
}
function ib(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ye.isValidMarker(t) && e.classList.contains(ye.getType());
}
function R(e) {
  return e instanceof ye;
}
function sb(e) {
  return e?.type === ye.getType();
}
const Of = 1, ob = "c", Nf = "span";
class nr extends Hi {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = ob, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new nr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => wf(t) ? {
        conversion: ab,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return pc().updateFromJSON(t);
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
    const t = document.createElement(Nf);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Es, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && bn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Es, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? wt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Of
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
function ab(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: pc(t) };
}
function pc(e, t, r, n, i, s) {
  return je(new nr(e, t, r, n, i, s));
}
function wf(e) {
  return e ? e.classList.contains(Es) && e.tagName.toLowerCase() === Nf : !1;
}
function Xi(e) {
  return e instanceof nr;
}
function cb(e) {
  return e?.type === nr.getType();
}
const qf = 1;
class Ir extends tc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Ir(t.__key);
  }
  static importJSON(t) {
    return Kt().updateFromJSON(t);
  }
  getMarker() {
    return Qt;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: qf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Kt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Kt() {
  return je(new Ir());
}
function er(e) {
  return e instanceof Ir;
}
function hc(e) {
  return e?.type === Ir.getType();
}
const lb = [
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
  Qt,
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
], Rf = 1, ub = ["type", "marker", "content"];
class Ye extends tc {
  __marker;
  __unknownAttributes;
  constructor(t = Qt, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new Ye(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (lb.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: db,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return $i().updateFromJSON(t);
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
    return r && bn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Rf
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = $i(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function db(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = $i(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function $i(e, t) {
  return je(new Ye(e, t));
}
function ae(e) {
  return e instanceof Ye;
}
function fb(e) {
  return e?.type === Ye.getType();
}
const Ns = "v", $f = 1, pb = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class ut extends Ue {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Ns, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ut(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return If().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(fa, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: $f
    };
  }
}
function If(e, t, r, n, i, s) {
  return je(new ut(e, t, r, n, i, s));
}
function Oe(e) {
  return e instanceof ut;
}
function Lf(e) {
  return e?.type === ut.getType();
}
const hb = "​", jn = hb;
var Gl;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Gl || (Gl = {}));
var Jl;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Jl || (Jl = {}));
function gb() {
  return pe(jn);
}
function mb(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(jn, ""));
}
function Qi(e) {
  return e.length > 0 && e.includes(jn) && e.replaceAll(jn, "") === "";
}
function gc(e) {
  return E(e) && Qi(e.getTextContent());
}
function yb(e) {
  return eb(e) || cb(e);
}
function Ve(e) {
  return Re(e) || Xi(e);
}
function Df(e, t) {
  return e.find((r) => Ve(r) && r.getNumber() === t.toString());
}
function bb(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ve(r));
}
function Yl(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Uf(e) {
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
function Wt(e) {
  return ot(e, z) ?? void 0;
}
function kb(e) {
  return bt(e) || Re(e) || R(e) || Xi(e) || er(e) || ze(e) || ae(e) || z(e) || Oe(e) || Ie(e);
}
function Ff(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Tb(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Tt(e) {
  return Ce(e) || bt(e);
}
function Ce(e) {
  return ae(e) || er(e);
}
function ws(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function ln(e, t) {
  const r = te(t, cn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function xb(e, t) {
  const r = $(e) ? e : e.getParent(), n = $(t) ? t : t.getParent(), i = r && n ? gm(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function _b(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Bn(e) {
  return e?.type === Ue.getType();
}
function Cb(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Sb(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Ne(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function tt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function zf(e, t, r) {
  const n = Ne(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function wt(e, t) {
  let r = Ne(e);
  return t && (r += `${O}${t}`), r += " ", r;
}
function vb(e) {
  const t = e[Gi];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Kf(e) {
  return Tc(e) || kf(e) && e.textType === "marker" || Bn(e) && vb(e) === "attribute" ? "" : Bn(e) && e.text !== O ? e.text : sb(e) ? e.children.map((t) => Kf(t)).join("") : "";
}
function Mb(e) {
  return e.map((r) => Kf(r)).filter((r) => r.length > 0).join(" ").trim();
}
function xt(e) {
  return " " + e + O;
}
function mc(e) {
  const t = [];
  for (const r of e) {
    if (!R(r))
      continue;
    const n = jf(r);
    n !== qt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function jf(e) {
  return A(e) || Tr(e) || E(e) && te(e, oe) === "attribute" ? "" : E(e) ? e.getTextContent() : $(e) ? e.getChildren().map((t) => jf(t)).join("") : "";
}
function Tr(e) {
  return Vt(e) && e.getTextType() === "marker";
}
function $t(e) {
  return A(e) || Tr(e);
}
function Xl(e, t) {
  Eb(e, t), e.setMarker(t);
}
function Eb(e, t) {
  const r = e.getMarker(), n = Ne(r), i = Ne(r, !0), s = tt(r), o = tt(r, !0), a = ye.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!$t(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (A(c))
        c.setMarker(t);
      else if (Tr(c)) {
        const f = l.startsWith(Ne("", !0));
        c.setTextContent(u ? Ne(t, f) : tt(t, f));
      }
    }
  });
}
function Le(e, t = om) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ae(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Bf(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function yc(e) {
  if (!P(e))
    return Ql(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !$(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return Ql(e) ?? t ?? void 0;
  } catch (n) {
    if (Bf(n))
      return t ?? void 0;
    throw n;
  }
}
function Ab(e, t) {
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
function bc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Vf(e) {
  return !!e && e.includes("-");
}
function Ql(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function kc(e) {
  if (!e)
    return !1;
  if (Js(e) || A(e) || Tr(e) || Vt(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = te(e, oe);
    if (t === rr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === O || Qi(r))
      return !0;
  }
  return !1;
}
function ro() {
  const e = pe(O);
  return gt(e, oe, rr), e.setMode("token"), e;
}
function Pb(e) {
  const t = e.getTextContent();
  t.startsWith(O) || e.setTextContent(O + t);
}
function Tn(e) {
  return E(e) && te(e, oe) === rr;
}
function Wf(e) {
  const t = e.getFirstChild();
  if (!$t(t) || t === null || Tn(t.getNextSibling()))
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
function Qn(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!kc(s)) {
      if (_e(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (E(s) && s.getType() === Ue.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function no(e) {
  let t = e.getParent();
  for (; t && _e(t); )
    t = t.getParent();
  return t;
}
function Ob(e, t) {
  return Qn(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Nb(e, t) {
  const r = no(e);
  if (!r)
    return;
  const n = Qn(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function wb(e, t) {
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
function Hf(e, t) {
  const r = Qn(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (kc(n))
    return Hf(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || ws(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || ws(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function qb(e, t) {
  if (t <= 0)
    return 0;
  const r = Qn(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? Rb(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function Rb(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const $b = 1;
class ir extends Ue {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(en(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new ir(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return at().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || en(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = en(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = en(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = en(r.__marker, r.__markerSyntax, t), r;
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
      version: $b
    };
  }
}
function at(e, t, r) {
  return je(new ir(e, t, void 0, r));
}
function A(e) {
  return e instanceof ir;
}
function Tc(e) {
  return e?.type === ir.getType();
}
function zr(e) {
  return e.getTextContent() === en(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Ib(e) {
  e.setTextContent(en(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function en(e, t, r = !1) {
  return t === "closing" ? tt(e, r) : t === "selfClosing" ? tt("") : Ne(e, r);
}
const Gf = 1, Lb = "attribute-run";
function Ko(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class xr extends tr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new xr(r, n);
  }
  static importJSON(t) {
    return Jf(t.runKind).updateFromJSON(t);
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
    t.classList.add(Lb);
    const r = Ko(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Ko(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Ko(this.__runKind);
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
      version: Gf
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
function Jf(e) {
  return je(new xr(e));
}
function Ke(e) {
  return e instanceof xr;
}
const Db = /* @__PURE__ */ new Set(["closed"]);
function Xt(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Db.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Yf(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Xf(e) {
  const t = Object.keys(e).filter((n) => !uy.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Qf(e, t, r, n) {
  return Yf(
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
function vi(e) {
  return e.getChildren().find((t) => A(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Ub(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : vi(e) === void 0 && Zf(e) === void 0;
}
function Zf(e) {
  return e.getChildren().find((t) => E(t) && te(t, oe) === "attribute");
}
function Ii(e, t) {
  return Zi(e.getNextSibling(), t);
}
const Fb = /^[ \u00A0]+$/;
function xc(e) {
  if (zr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ne(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && Fb.test(r.slice(t.length));
}
function Zi(e, t) {
  let r, n, i, s;
  return Ke(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), A(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  xc(e) && (r = e, e = e.getNextSibling()), E(e) && te(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), A(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && zr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Li(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!A(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (E(n) && n.getTextContent() === xt(e.getCaller()))
    return n;
}
function ep(e) {
  const t = Li(e);
  return t ? Zi(t.getNextSibling(), "cat") : {};
}
function io(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || A(t)) && te(t, oe) !== "attribute")
    return t;
}
function tp(e) {
  const t = io(e);
  return t ? Zi(t.getNextSibling(), "ca") : {};
}
function rp(e) {
  const t = io(e);
  if (!t)
    return;
  const r = Zi(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function np(e) {
  const t = rp(e);
  return t ? Zi(t.getNextSibling(), "cp") : {};
}
function ip(e) {
  const t = e.getParent();
  if (!R(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Oe(n))
        return n;
      if (!(A(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && te(n, oe) === "attribute" || R(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ke(n)))
        return;
    }
}
function so(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ke(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), A(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  xc(s) && (t = s, s = s.getNextSibling()), E(s) && te(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), A(s) && s.getMarkerSyntax() === "selfClosing" && zr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function _c(e) {
  return R(no(e));
}
function Ta(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? _c(t) : t.getChildren().some((i) => R(i) && i.getMarker() === r) ? !0 : void 0;
}
function zb(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!A(t))
      return;
    const r = Ta(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function oo(e) {
  return E(e) && e.getType() === Ue.getType() && te(e, oe) !== "attribute";
}
function Cc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Ta(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return A(r) ? Ta(r, t) === !0 ? "spacer" : void 0 : oo(r) ? r.getTextContent().startsWith(O) ? void 0 : "prefix" : "spacer";
}
function Kb(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (A(t) && Cc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function sp(e, t) {
  const r = w();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function op(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!A(t))
      return;
    const r = Cc(t, e);
    if (r !== void 0 && !sp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(O + n.getTextContent());
      } else
        t.insertAfter(pe(O));
  });
}
function ap(e) {
  return e.isAttached() ? e.getChildren().some((t) => A(t) && Cc(t, e) !== void 0 && sp(t, e)) : !1;
}
const jb = "file", Bb = "src", Vb = "colspan", Wb = "category", Hb = "alt", Gb = "closed", Jb = "false";
function Yb(e) {
  return e[Gb] !== Jb;
}
function Xb(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === jb ? Bb : t,
    r
  ]));
}
function Qb(e, t) {
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
function cp(e, t, r) {
  const n = r ?? {}, i = Yb(n);
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
        opening: `\\${Qb(t, n[Vb])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Xt(Xb(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [Wb]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Xt(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [Hb]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Xt(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Xt(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const yt = { wantsRun: !1, valueText: void 0 }, _r = {};
function jo(e, t) {
  if (t === "va")
    return e;
  const r = Ii(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Sc(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed())
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
function ao(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = w();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function Zb(e) {
  return Ke(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : A(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && te(e, oe) === "attribute";
}
function ek(e) {
  if (A(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!E(e) || te(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!A(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Bo(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Oe(t))
      return t;
    if (!Zb(t))
      return;
  }
}
function Zl(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Oe(t),
    ownerOf: (t) => {
      if (Ke(t))
        return t.getRunKind() === e ? Bo(t) : void 0;
      const r = t.getParent();
      return Ke(r) ? r.getRunKind() === e ? Bo(r) : void 0 : ek(t) === e ? Bo(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Oe(t))
        return yt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? yt : { wantsRun: !0, valueText: O + r };
    },
    scanPieces: (t) => Oe(t) ? Ii(jo(t, e), e) : _r,
    graceSite: (t, r) => Oe(t) ? !r.opener && !r.closer ? Sc(jo(t, e)) : ao(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Oe(t) ? jo(t, e) : void 0
    }
  };
}
const tk = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => R(e),
  ownerOf: () => {
  },
  expectedPieces: () => yt,
  scanPieces: () => _r,
  graceSite: (e) => R(e) && ap(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, rk = {
  kind: "char",
  ownerPredicate: (e) => R(e),
  ownerOf: (e) => {
    if (!E(e) || te(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return R(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!R(e) || vi(e) === void 0)
      return yt;
    const t = Xt(e.getUnknownAttributes() ?? {}, Zs(e.getMarker()));
    return t === "" ? yt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => R(e) ? { value: Zf(e) } : _r,
  graceSite: (e, t) => {
    if (!R(e) || t.value)
      return !1;
    const r = vi(e);
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
    insertRunBefore: (e) => R(e) ? vi(e) : void 0
  }
};
function lp(e) {
  if (A(e))
    return e.getMarker() === "cat";
  if (!E(e) || te(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return A(t) && t.getMarker() === "cat";
}
function nk(e) {
  const t = e.getParent();
  if (!z(t))
    return;
  const r = Li(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!lp(n))
        return;
    }
}
const ik = {
  kind: "cat",
  ownerPredicate: (e) => z(e),
  ownerOf: (e) => {
    if (Ke(e))
      return e.getRunKind() === "cat" && z(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ke(t) ? t.getRunKind() === "cat" && z(t.getParent()) ? t.getParent() ?? void 0 : void 0 : lp(e) ? nk(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!z(e) || e.getIsCollapsed() !== !1)
      return yt;
    const t = e.getCategory();
    return t === void 0 ? yt : { wantsRun: !0, valueText: O + t };
  },
  scanPieces: (e) => z(e) ? ep(e) : _r,
  graceSite: (e, t) => {
    if (!z(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Li(e);
      return r !== void 0 && Sc(r);
    }
    return ao(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => z(e) ? Li(e) : void 0
  }
};
function sk(e) {
  return Ke(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : A(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && te(e, oe) === "attribute";
}
function ok(e) {
  if (A(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!E(e) || te(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!A(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function ak(e) {
  const t = e.getParent();
  if (!Re(t))
    return;
  const r = io(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!sk(n))
        return;
    }
}
function eu(e) {
  const t = (r) => Re(r) ? e === "ca" ? io(r) : rp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Re(r),
    ownerOf: (r) => {
      if (Ke(r))
        return r.getRunKind() === e && Re(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ke(n) ? n.getRunKind() === e && Re(n.getParent()) ? n.getParent() ?? void 0 : void 0 : ok(r) === e ? ak(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Re(r))
        return yt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? yt : { wantsRun: !0, valueText: O + n };
    },
    scanPieces: (r) => Re(r) ? e === "ca" ? tp(r) : np(r) : _r,
    graceSite: (r, n) => {
      if (!Re(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Sc(i);
      }
      return ao(n);
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
function up(e) {
  if (A(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && te(e, oe) === "attribute";
}
function ck(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (ze(t)) {
      const r = A(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!up(t))
      return;
  }
}
const lk = {
  kind: "milestone",
  ownerPredicate: (e) => ze(e),
  ownerOf: (e) => {
    const t = Ke(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ke(e.getParent()) ? e.getParent() : up(e) ? e : void 0;
    if (!t || Ke(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ke(t) ? ze(r) ? r : void 0 : ck(t);
  },
  expectedPieces: (e) => {
    if (!ze(e))
      return yt;
    const t = Qf(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Xt(t, to(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : O + r };
  },
  scanPieces: (e) => {
    if (!ze(e))
      return _r;
    const { opening: t, attribute: r, closing: n, wrapper: i } = so(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!ze(e))
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
    return ao(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => ze(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, uk = cp("optbreak", void 0, void 0).opening, dk = {
  kind: "optbreak",
  ownerPredicate: (e) => Ie(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ie(t) || t.getTag() !== "optbreak"))
      return E(e) || Vt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: uk }),
  scanPieces: (e) => Ie(e) ? { value: e.getFirstChild() ?? void 0 } : _r,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, fk = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Ie(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => yt,
  scanPieces: () => _r,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, pk = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => R(e),
  ownerOf: () => {
  },
  expectedPieces: () => yt,
  scanPieces: () => _r,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Di = [
  tk,
  rk,
  Zl("va"),
  Zl("vp"),
  ik,
  eu("ca"),
  eu("cp"),
  lk,
  dk,
  fk,
  pk
], hk = new Map(Di.map((e) => [e.kind, e]));
function un(e) {
  const t = hk.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function dn(e) {
  for (const t of Di) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function dp(e) {
  return dn(e) !== void 0;
}
const qs = "unmatched", fp = 2;
function Mi(e) {
  return `\\${e}`;
}
class Cr extends Ue {
  __marker;
  constructor(t = "", r) {
    super(Mi(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Cr(r, n);
  }
  static importDOM() {
    return {
      [qs]: (t) => mk(t) ? {
        conversion: gk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return vc().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Mi(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Mi(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Dl), r.title = tu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = tu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(qs);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Dl), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: fp
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function pp(e) {
  return e.getTextContent() === Mi(e.getMarker());
}
function tu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function gk(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: vc(t) };
}
function vc(e) {
  return je(new Cr(e));
}
function mk(e) {
  return e?.tagName.toLowerCase() === qs;
}
function Kr(e) {
  return e instanceof Cr;
}
const hp = "table", xa = "immutable-table", gp = 1, yk = ["type", "marker", "content"];
class xn extends tr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return xa;
  }
  static clone(t) {
    return new xn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return bk().updateFromJSON(t);
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
      type: xa,
      ...t !== void 0 && { unknownAttributes: t },
      version: gp
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function bk(e) {
  return je(new xn(e));
}
function mp(e) {
  return e instanceof xn;
}
function kk(e) {
  return e?.type === xa;
}
const yp = "table:row", ru = "immutable-table-row", bp = 1, _a = "tr", Tk = ["type", "marker", "content"];
class Zn extends tr {
  __marker;
  __unknownAttributes;
  constructor(t = _a, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return ru;
  }
  static clone(t) {
    return new Zn(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return xk().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? _a).setUnknownAttributes(t.unknownAttributes);
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
      type: ru,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: bp
    };
  }
}
function xk(e, t) {
  return je(new Zn(e, t));
}
const kp = "table:cell", nu = "immutable-table-cell", Tp = 1, Ca = "tc1", _k = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function Ck(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class ei extends tr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Ca, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return nu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new ei(r, n, i, s, o);
  }
  static importJSON(t) {
    return Sk().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ca).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = Ck(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: nu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Tp
    };
  }
}
function Sk(e, t, r, n) {
  return je(new ei(e, t, r, n));
}
function co(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Ht(e, t) {
  const r = co(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Ui(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function vk(e) {
  return e.getChildren().some((t) => A(t) && t.getMarkerSyntax() === "closing");
}
function Mk(e) {
  return Ui(e) ? void 0 : { closed: "false" };
}
function Ek(e, t, r, n) {
  const i = t.getMarker(), s = _c(t), o = vk(t);
  if (n) {
    e.append(at(i, "opening", s));
    const [a] = r;
    oo(a) && !a.getTextContent().startsWith(O) && a.setTextContent(O + a.getTextContent());
  }
  e.append(...r), o && e.append(at(i, "closing", s));
}
function fn(e) {
  return ot(e, R) ?? void 0;
}
function Mc(e) {
  let t = e.getParent();
  for (; R(t); )
    t = t.getParent();
  return t;
}
function Sa(e) {
  const t = xp(e);
  return e.getChildren().every((r) => A(r) || t && te(r, oe) === "attribute" || E(r) && r.getTextContent().replaceAll(O, "") === "");
}
function xp(e) {
  return Ui(e);
}
function Ak(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Xt(r, Zs(e.getMarker())) : "";
  n !== "" && t.insertAfter(pe(n)), e.remove();
}
function Pk(e, t) {
  if (Ui(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(at(e.getMarker(), "closing", _c(e)));
}
function Ok(e, t) {
  return R(e) && !Ui(e) && !Ui(t);
}
function Nk(e, t, r) {
  Sa(e) && e.getChildren().forEach((i) => {
    A(i) || i.remove();
  });
  const [n] = t;
  r && oo(n) && !n.getTextContent().startsWith(O) && n.setTextContent(O + n.getTextContent()), e.append(...t);
}
function wk(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = xp(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = A(l) && l.getMarkerSyntax() === "closing", f = s && te(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = Ok(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      Nk(e, o, n);
    else {
      const l = hr(t.getMarker(), Mk(t));
      Ek(l, t, o, n), e.insertAfter(l), Sa(l) ? l.remove() : c = l;
    }
  i && !a && Pk(t, n), Sa(t) && Ak(t, c);
}
function Vn(e, t) {
  let r = e.getParent();
  for (; R(r); )
    wk(e, r, t), r = e.getParent();
}
function Ec(e) {
  if (E(e) && !A(e)) {
    const t = e.getTextContent().startsWith(O) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if ($(e)) {
    const t = e.getChildren().find((r) => !A(r));
    if (t) {
      Ec(t);
      return;
    }
    e.selectEnd();
  }
}
const Kn = /* @__PURE__ */ new WeakMap();
function qk(e, t) {
  return Kn.set(e, t), () => {
    Kn.get(e) === t && Kn.delete(e);
  };
}
function iu(e) {
  return Kn.get(e);
}
function Rk(e) {
  return Kn.get(Ji())?.has(e.getKey()) ?? !1;
}
function $k(e) {
  Kn.get(Ji())?.add(e.getKey());
}
function Ik(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function va(e) {
  return !!(e.opener || e.value || e.closer);
}
function su(e) {
  return /^\s/.test(e);
}
function Ac(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !su(t) || !su(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function lo(e, t, r) {
  return r.wantsRun ? Ac(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : Ik(t);
}
function Lk(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Ac(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function _p(e, t) {
  return !va(e.scanPieces(t));
}
function es(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!lo(e, n, r))
    return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || ws(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function Dk(e, t, r, n) {
  return !r.wantsRun || va(n) || mm(wi) ? !1 : Ji().getEditorState().read(() => {
    const i = re(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : va(e.scanPieces(i));
  });
}
function Uk(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function ou(e) {
  const t = pe(e);
  return gt(t, oe, "attribute"), t;
}
function Fk(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Jf(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function zk(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(ou(n.valueText));
    return;
  }
  const l = Fk(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = at(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : E(d) ? Ac(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = ou(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(at(a === "selfClosing" ? "" : o(t), a));
}
function Fi(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (lo(e, i, n) && !Rk(t)) {
    if (Dk(e, t, n, i)) {
      $k(t);
      return;
    }
    if (!es(e, t)) {
      if (!n.wantsRun) {
        Uk(i);
        return;
      }
      zk(e, t, i, n);
    }
  }
}
function Kk(e, t, r) {
  Fi(e, t), t.isAttached() && es(e, t) && r.add(t.getKey());
}
function Cp(e) {
  if (!E(e))
    return !1;
  if (A(e) || Oe(e) || Kr(e))
    return !0;
  const t = te(e, oe);
  return t === "attribute" || t === rr;
}
function Pc(e, t) {
  return A(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && zr(e) && R(e.getParent())) : !1;
}
function jk() {
  const e = w();
  return P(e) ? Pc(e.focus.getNode(), e.focus.offset) : !1;
}
function Sp(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && Cp(t) ? t : void 0;
}
function Bk(e) {
  const t = Sp(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function Vk(e) {
  const t = Sp(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function au(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function cu(e, t) {
  e.set(t.key, t.offset, t.type);
}
function Wk(e, t) {
  let r = Vk(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!Cp(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function lu(e, t) {
  const r = Wk(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function vp(e) {
  if (e.isCollapsed()) {
    const a = Bk(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [au(r), au(n)], s = lu(r, "next"), o = lu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (cu(r, i[0]), cu(n, i[1]), !1) : !0;
}
const Hk = [
  Rt,
  nr,
  vt,
  ut,
  ye,
  Me,
  Bt,
  ir,
  kn,
  kr,
  Cr,
  Ye,
  Ir,
  xn,
  Zn,
  ei,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  xr,
  {
    replace: tc,
    with: () => Kt(),
    withKlass: Ir
  }
], Rs = {
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
}, Gk = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function Jk(e) {
  if (!e)
    return Zt;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: Zt(r)?.category ?? T.Uncategorized,
      type: Gk[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: Zt(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function uu(e, t, r) {
  const n = {
    type: dr,
    version: ur,
    content: e
  }, i = t.serializeEditorState(n, r);
  return hc(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Mp = "v", Ep = 1, Yk = "verse-selected";
class _t extends Hi {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Mp, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Zk(t) ? {
        conversion: Qk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Oc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(fa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && bn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(fa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? wt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      vs + this.getNumber() + vs
    );
    return S(Xk, { nodeKey: this.getKey(), text: t });
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
      version: Ep
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Bf(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Xk({ nodeKey: e, text: t }) {
  const [r] = qm(e);
  return S("span", { className: r ? Yk : void 0, children: t });
}
function Qk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Oc(t) };
}
function Oc(e, t, r, n, i, s) {
  return je(new _t(e, t, r, n, i, s));
}
function Zk(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Mp;
}
function _n(e) {
  return e instanceof _t;
}
function eT(e) {
  return e?.type === _t.getType();
}
function ge(e) {
  return Oe(e) || _n(e);
}
function tT(e) {
  return Lf(e) || eT(e);
}
function rT(e) {
  return e.find((t) => ae(t));
}
function nT(e, t) {
  return $(e) ? e.getChildren().find((i) => ge(i) && bc(t, i.getNumber())) : void 0;
}
function iT(e, t) {
  return t === 0 ? rT(e) : e.map((r) => nT(r, t)).filter((r) => r)[0];
}
function $s(e) {
  return $(e) ? e.getChildren().find((n) => ge(n)) : void 0;
}
function Ap(e, t) {
  if (!$(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ge(i))
      return i;
  }
}
function sT(e) {
  const t = e.getParent();
  if (t && $(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ge(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ve(r); ) {
    const n = $s(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Ma(e) {
  return !e || !$(e) ? void 0 : e.getChildren().findLast((r) => ge(r));
}
function oT(e) {
  if (!Oe(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function aT(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && $(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function cT(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return aT(t, e, r);
  if (E(e)) {
    const n = oT(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function du(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function lT(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return du(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return cT(e, t) ? { verseNum: n } : du(e);
}
function uT(e) {
  return kb(e) || _n(e);
}
function Nc(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(O) && e.setTextContent(`${t} `);
  }
}
function Pp(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Op(e, t) {
  return e.getEditorState().read(() => !re(t));
}
function dT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = wc(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && $(i) && $(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && $(i)) {
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
      let s = i.getNextSibling();
      for (; s && !Ve(s); ) {
        const o = $s(s);
        if (o) {
          n = o;
          break;
        }
        s = s.getNextSibling();
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = $s(s);
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
function fT(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = wc(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i && (n = r), !n && i && $(i) && (n = Ap(i, r.getIndexWithinParent())), !n && i) {
      let o = i.getPreviousSibling();
      for (; o && !Ve(o); ) {
        const a = Ma(o);
        if (a) {
          n = a;
          break;
        }
        o = o.getPreviousSibling();
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ve(s); ) {
      const o = Ma(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function wc(e, t) {
  if ($(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ge(n))
      return n;
    const i = Ap(e, t.anchor.offset);
    if (i)
      return i;
    const s = $s(e);
    if (s)
      return s;
  }
  return qc(e);
}
function qc(e) {
  if (!e || Ve(e))
    return;
  if (ge(e))
    return e;
  let t = Yl(e);
  for (; t; ) {
    if (Ve(t))
      return;
    if (ge(t))
      return t;
    const r = Ma(t);
    if (r)
      return r;
    t = Yl(t);
  }
}
const pT = ["style"], hT = ["style", "code"], Is = ["style", "cid"], gT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], mT = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], yT = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], bT = ["style", "caller", "category", "contents"], kT = ["tag", "marker", "contents"], TT = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], zi = `
`;
function xT(e, t) {
  const r = re(e);
  if (!Ct(r))
    return;
  const n = Np(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Np(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Yd();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Wn(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Wn(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (gr(l) || Ct(l))
        return n;
      Tt(l) && (a = l);
    }
    if (Tt(l) && (i.includes(l) || i.push(l)), wp(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Rc(l, t);
  }
  if (a)
    return n;
}
function fu(e, t, r = "delta-doc") {
  if (e.length < 2 || !ST(e[0]) || !CT(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => _T(n, r)?.getKey());
}
function _T(e, t = "delta-doc") {
  const r = Yd();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Wn(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Wn(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Tt(a) && (i.includes(a) || i.push(a)), wp(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Rc(a, t);
    if (gr(a) && l > 0 && e >= n && e < n + l || Ct(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Wn(e, t) {
  return e ? t ? !ws(t.node, e.getKey()) : !0 : !1;
}
function gr(e) {
  return E(e) && !Ct(e);
}
function Ct(e) {
  return Ve(e) || ge(e) || ze(e) || z(e) || Ie(e) || Kr(e);
}
function Or(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function CT(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && TT.includes(t);
}
function ST(e) {
  return e.retain != null && typeof e.retain == "number";
}
function wp(e, t) {
  return z(e) || Ie(e) ? !0 : t === "apply" && $(e) && Ct(e);
}
function qp(e) {
  const t = e.getParent();
  return $t(e) && ae(t) && t.getFirstChild() === e;
}
function Ea(e) {
  const t = e.getParent();
  return t !== null && ot(t, Ke) !== null;
}
function vT(e) {
  const t = e.getParent();
  return R(t) && e.getTextContent() === qt && t.getChildrenSize() === 1;
}
function MT(e) {
  const t = e.getParent();
  if (!z(t))
    return !1;
  const r = e.getPreviousSibling();
  return A(r) && r === t.getFirstChild() && e.getTextContent() === xt(t.getCaller());
}
function ET(e) {
  return !dp(e) && Rc(e, "delta-doc") === e.getTextContentSize();
}
function Rc(e, t) {
  if (Ct(e))
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
    (gc(e) || qp(e) || te(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    te(e, oe) === "attribute" || Ea(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(ac) || vT(e) || MT(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Aa(e, t) {
  const r = { insert: e.__text }, n = te(e, $r);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Rp(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function pu(e) {
  const t = new Ti();
  return e.isEmpty() || e.read(() => {
    const r = Fe();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && er(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = AT();
    for (const s of i)
      t.push(s);
  }), t;
}
function $c(e, t) {
  const r = [], n = Xn(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...hu(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...hu(c, n.length, n, i, s, o, a));
  return r;
}
function AT() {
  return $c();
}
function hu(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return PT(e, a, n), OT(e, a, i, s, o), NT(e, t, r, i, o, s, a), Ve(e) && a.push($T(e)), ge(e) && a.push(LT(e)), ze(e) && a.push(DT(e)), Kr(e) && a.push(UT(e)), qT(e, a, s), wT(e, a, s), jT(c, s), a;
}
function PT(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    bt(n) ? t.push(RT(n)) : ae(n) ? t.push(IT(n)) : er(n) && t.push({ insert: zi });
  }
  Tt(e) && (r.includes(e) || r.push(e));
}
function OT(e, t, r, n, i) {
  if (!E(e) || Oe(e) || Kr(e))
    return;
  const s = e.getParent();
  if (z(s) && s.getFirstChild() === e)
    return;
  const o = Wt(e) !== void 0;
  if (A(e) && (o || qp(e) || Ea(e) || dp(e)) || te(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Qi(a))
    return;
  const c = e.getPreviousSibling();
  if (z(s) && A(c) && c === s.getFirstChild() && a === xt(s.getCaller()))
    return;
  const l = R(s) ? s : void 0, u = l?.getFirstChild();
  o && l && A(u) && c === u && a.startsWith(O) && (a = a.slice(1));
  const d = a.startsWith(ac) || te(e, oe) === "attribute" || Ea(e), f = !!l && a === qt && l.getChildrenSize() === 1, p = uo(e, n), m = p ? r.filter((x) => p.children.includes(x)) : r, g = Aa(e, m);
  if (g.insert = a, p) {
    if (!a || a === O || d)
      return;
    p.contentsOps?.push(g);
  } else
    f || d || t.push(g);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const x of r)
      i.add(x);
}
function NT(e, t, r, n, i, s, o) {
  R(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Wn(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = zT(c), u = uo(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function wT(e, t, r) {
  if (!z(e))
    return;
  const n = FT(e), i = uo(e, r), s = {
    node: e,
    children: Xn(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function qT(e, t, r) {
  if (!Ie(e))
    return;
  const n = KT(e), i = uo(e, r), s = {
    node: e,
    children: Xn(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function jr(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function RT(e) {
  const t = { style: Ri, code: e.__code };
  return jr(t, e), { insert: zi, attributes: { book: t } };
}
function $T(e) {
  const t = { style: Os, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), jr(t, e), { insert: { chapter: t } };
}
function IT(e) {
  const t = { style: e.__marker };
  return jr(t, e), { insert: zi, attributes: { para: t } };
}
function LT(e) {
  const t = { style: Ns, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), jr(t, e), { insert: { verse: t } };
}
function DT(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), jr(t, e), { insert: { milestone: t } };
}
function UT(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function FT(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), jr(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = te(e, $r);
  return n && (r.attributes = { segment: n }), r;
}
function zT(e) {
  const t = { insert: "" }, r = Rp([e]);
  return r && (t.attributes = { char: r }), t;
}
function KT(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), jr(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function uo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function jT(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Wn(t[r].node, e) && t.splice(r, 1);
}
function Rp(e) {
  if (e.length === 0)
    return;
  const t = e.map(BT);
  return t.length === 1 ? t[0] : t;
}
function BT(e) {
  const t = { style: e.__marker }, r = te(e, cn);
  return r && (t.cid = r), jr(t, e), t;
}
const $p = 1;
class jt extends Hi {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Ms, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new jt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => WT(t) ? {
        conversion: VT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ic().updateFromJSON(t);
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
    return r && bn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => HT(t, n), (l) => GT(t, n, s, l), () => JT(t, n), () => YT(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return S("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Ms && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === of && i ? (
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
      version: $p
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function VT(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Ic(t, r) };
}
function Ic(e, t, r) {
  return je(new jt(e, t, r));
}
function WT(e) {
  return e ? e.classList.contains(jt.getType()) : !1;
}
function sr(e) {
  return e instanceof jt;
}
function HT(e, t) {
  return e.getEditorState().read(() => {
    const r = re(t);
    if (!z(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function GT(e, t, r, n) {
  e.update(() => {
    const i = re(t);
    if (!z(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = re(r);
    if (!sr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function JT(e, t) {
  return e.getEditorState().read(() => {
    const r = re(t);
    if (!z(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return $c(r);
  });
}
function YT(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of Xn())
      if (z(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const XT = [
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
], QT = ["†"];
function Lc(e) {
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = gu(t), [s, o] = gu(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = mu(n, i), [s, o] = mu(s, o);
  const a = rc();
  return a.anchor = $l(n.getKey(), i, yu(n)), a.focus = $l(s.getKey(), o, yu(s)), a;
}
function Ip() {
  const e = w();
  if (!e || !P(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Ls(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Ls(i, s);
  return { start: n, end: o };
}
function gu(e) {
  if (am(e)) {
    const t = Id(e.jsonPath);
    let r = Fe();
    for (let n = 0; n < t.length; n++) {
      if (!r || !$(r))
        return [void 0, void 0];
      const i = Qn(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : wb(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && $(r) ? [r, qb(r, e.offset)] : [void 0, void 0];
  }
  if (cm(e) || lm(e)) {
    const t = pi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if ($(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && $(r) ? [r, 0] : [void 0, void 0];
  }
  if (um(e)) {
    const t = pi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if ($(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && $(r) ? [r, 0] : [void 0, void 0];
  }
  if (dm(e)) {
    const t = pi(e.jsonPath);
    if (!t || !$(t))
      return [void 0, void 0];
    const r = Vo(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (fm(e)) {
    const t = pi(e.jsonPath);
    if (!t || !$(t))
      return [void 0, void 0];
    const r = Vo(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (pm(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = pi(e.jsonPath);
    if (!n || !$(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = Vo(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${hm(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function mu(e, t) {
  if (!Tr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !$(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function yu(e) {
  return $(e) ? "element" : "text";
}
function Vo(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (A(n) && n.getMarkerSyntax() === t || t === "closing" && A(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Tr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function pi(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Id(r);
  let i = Fe();
  for (const s of n) {
    if (!i || !$(i))
      return;
    const o = Qn(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Ls(e, t) {
  if (A(e)) {
    const r = e.getMarkerSyntax(), n = ZT(e), i = n ? Hr(Qr(n)) : Hr(Qr(e));
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
  if (_e(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (E(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Ls(n, s);
    }
    const i = no(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Ls(i, o);
    }
  }
  if ($(e)) {
    const r = e.getChildAtIndex(t);
    if (Tr(r))
      return {
        jsonPath: Hr(Qr(e))
      };
    const n = Hf(e, t);
    return n.type === "text" ? {
      jsonPath: Hr([...Qr(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: Hr(Qr(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = Nb(e, t);
    if (r)
      return {
        jsonPath: Hr([
          ...Qr(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: Hr(Qr(e)), offset: t };
}
function ZT(e) {
  const t = e.getParent();
  if (!t || !$(t))
    return;
  const r = ex(e);
  return r && !Tt(r) && !E(r) && !_e(r) ? r : t;
}
function ex(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!kc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Qr(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = no(r);
    if (!n)
      break;
    const i = Ob(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Lp(e, t, r, n, i, s, o) {
  if (!Me.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Lc(r) : w();
  if (!P(a))
    return;
  const c = nx(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (xi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Dp(e, l, c, i, s, void 0, void 0);
  return rx(u, a, i), u;
}
function Dc(e) {
  return e !== "expanded";
}
function tx(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!E(r) || !R(r.getParent()))
    return;
  if (A(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return A(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function rx(e, t, r) {
  const n = Dc(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || _b(t), vp(t);
  const i = tx(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(R)?.selectEnd();
}
function Rn(e, t, r) {
  const n = hr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(at(e)) : r?.markerMode === "visible" && n.append(pr("marker", Ne(e)));
  const s = t === "" ? qt : i ? O + t : t;
  return n.append(pe(s)), n;
}
function nx(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Rn("fr", f, n)), !e.isCollapsed()) {
        const p = ku(e);
        p.length > 0 && o.push(Rn("fq", p, n));
      }
      o.push(Rn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Rn("xo", f, n)), !e.isCollapsed()) {
        const p = ku(e);
        p.length > 0 && o.push(Rn("xq", p, n));
      }
      o.push(Rn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Dp(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Dc(n?.noteMode), l = uc(e, t, c);
  s && gt(l, $r, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = at(e), u && d.setMode("token"), a || (f = at(e, "closing"))) : n?.markerMode === "visible" && (d = pr("marker", Ne(e) + " "), a || (f = pr("marker", tt(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = pe(xt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => ro(), g = r.flatMap(sx(m));
    if (t === "")
      l.append(...g);
    else {
      const y = mc(r);
      let x = () => {
      };
      i?.noteCallerOnClick && (x = i.noteCallerOnClick), p = Ic(l.__caller, y, x), l.append(p, m(), ...g);
    }
  }
  return f && l.append(f), l;
}
function bu(e) {
  if (typeof e == "string") {
    const i = re(e);
    return z(i) ? i : void 0;
  }
  const t = Xn();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => z(i.node))[e]?.node;
  if (z(n))
    return n;
}
function ix(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (_n(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find(R)?.selectEnd();
}
function sx(e) {
  return (t) => Vt(t) ? [t] : [t, e()];
}
function ox(e) {
  const t = e.getParent();
  return t !== null && ot(t, z) !== null;
}
function ku(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Dd(e);
  let a = "";
  for (const c of t)
    if (!(z(c) || sr(c) || ox(c)) && !A(c) && !Kr(c) && te(c, oe) !== "attribute") {
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
const ax = [
  jt,
  _t,
  ...Hk
], cx = yn((e, t) => {
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
function lx() {
  const [e, t] = de(void 0), [r, n] = de(), i = Z(null), s = he((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = jm(l, c, () => {
      Bm(l, c, {
        placement: "bottom-start",
        middleware: [Vm(), Wm()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = he(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return K(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function ux({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = lx();
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
const dx = tm(cx);
function Up({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = ux({ isOpen: e, floatingBoxRef: r }), s = De(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return rn(
    S(dx, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Fp = Rd(void 0);
function Uc() {
  const e = $d(Fp);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function fx(e, t) {
  const [r, n] = de(0), [i, s] = de(-1), o = De(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = he(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = he(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = he(() => {
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
function px({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = fx(t, r);
  return S(Fp.Provider, { value: i, children: S("div", { ...n, children: e }) });
}
const zp = yn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Uc(), u = he((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = he((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return S("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function hx({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = Uc(), o = De(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = De(() => {
    const c = o(s);
    return t ? rm.map(c, (l, u) => nm(l) && l.type === zp && l.props.index === void 0 ? im(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return K(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), S("div", { ref: n, role: "menu", ...r, children: a });
}
const gx = (e, t, r) => Ts(e, r).toLowerCase().includes(t.toLowerCase()), Tu = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ts = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function mx(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? Tu(r[0]) : "") : (u = n || (r.length > 0 ? Tu(r[0]) : ""), d = (m, g) => gx(m, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (g) {
      return console.warn("Error filtering item:", m, g), !1;
    }
  }).sort((m, g) => {
    const y = (k) => (p.has(k) || p.set(k, Ts(k, f).toLowerCase()), p.get(k) ?? ""), x = a ? Ts(m, f) : y(m), v = a ? Ts(g, f) : y(g);
    for (const k of c)
      switch (k) {
        case "exact":
          if (x === l && v !== l)
            return -1;
          if (v === l && x !== l)
            return 1;
          break;
        case "startsWith":
          if (x.startsWith(l) && !v.startsWith(l))
            return -1;
          if (v.startsWith(l) && !x.startsWith(l))
            return 1;
          break;
        case "contains": {
          const M = x.indexOf(l), L = v.indexOf(l);
          if (M !== -1 && L === -1)
            return -1;
          if (L !== -1 && M === -1)
            return 1;
          if (M !== -1 && L !== -1)
            return M - L;
          break;
        }
      }
    return x.localeCompare(v);
  });
}
const Wo = {
  Root: px,
  Options: hx,
  Option: zp
};
function yx(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return De(() => mx({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function bx() {
  const { moveUp: e, moveDown: t, select: r } = Uc();
  return De(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const kx = () => {
  const e = bx(), [t] = le();
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
    return t.registerCommand(yr, r, $e);
  }, [t, e]);
};
function Tx() {
  return kx(), null;
}
const xx = ["Shift", "Control", "Alt", "Meta"];
function Kp(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), u = s !== void 0, [d, f] = de(""), p = u ? s ?? "" : d, m = yx({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return K(() => {
    a?.(p, m);
  }, [a, p, m]), K(() => l.registerCommand(yr, (y) => {
    if (u || c?.includes(y.key) || xx.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const v = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((k) => k.slice(0, -1));
      }
    }[y.key];
    return v ? (y.stopPropagation(), y.preventDefault(), v(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((k) => k + y.key), !0) : !1;
  }, $e), [l, u, p, o, n, c]), Te(Wo.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => g(y), children: [!u && S("input", { value: p, type: "text", disabled: !0 }), S(Tx, {}), S(Wo.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((v, k) => Te(Wo.Option, { index: k, children: [S("span", { className: "label", children: v.label ?? v.name }), S("span", { className: "description", children: v.description })] }, v.name)) })] });
}
function _x({ trigger: e, items: t }) {
  const [r] = le(), [n, i] = de(!1), s = he((o) => {
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
      if (P(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !P(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && S(Up, { isOpen: n, children: ({ placement: o }) => S(Kp, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function Cx({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: De(() => {
    if (!t || !e)
      return;
    const i = Zt(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = Zt(o), { action: c } = r(o, a);
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
function Ei(e, t) {
  return `${e}:${t}`;
}
function Sx(e, t) {
  K(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Je(Xd(e, Qe, (n) => qi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], m = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, m, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Qe, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = re(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : _e(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Qe.isReservedType(c))
              for (const u of l) {
                let d = t.get(Ei(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Ei(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Ei(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const vx = yn(function({ logger: t }, r) {
  const [n] = le(), i = De(() => /* @__PURE__ */ new Map(), []);
  Sx(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Ei(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = re(u);
        _e(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Ps(d));
      }
  };
  return ec(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (Qe.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Lc(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), xf(p, a, c, l, u, d, f);
      }, { tag: pa });
    },
    removeAnnotation(o, a) {
      if (Qe.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Ei(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: pa });
    }
  })), null;
}), Mx = [];
function Ex({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = Mx, onChange: n }) {
  const [i] = le();
  return Wi(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Ud) && !u.has(lf) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = Ax(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function Ax(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ti();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = re(i), o = s !== null && Wt(s) !== void 0;
    if (t.size === 1 && E(s) && !o && ET(s)) {
      const a = Np(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = re(i);
          return new Ti([E(d) ? Aa(d) : { insert: "" }]);
        }), l = new Ti([Aa(s)]), u = new Ti(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = pu(r), c = pu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const fo = "formatted", Fc = "unformatted", zc = "paragraph-structure", Kc = "standard", VE = {
  [fo]: "Formatted",
  [Fc]: "Unformatted",
  [zc]: "Paragraph Structure",
  [Kc]: "Standard"
};
function ti(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let jc, Bc;
function Px(e) {
  const t = Ox(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  jc = e, Bc = t;
}
Px(fo);
const WE = () => jc, po = () => Bc;
function Ox(e) {
  let t;
  switch (e ?? jc) {
    case fo:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Fc:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case zc:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Kc:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
  }
  return t;
}
function HE(e) {
  if (!e)
    return;
  const { markerMode: t, noteMode: r, hasSpacing: n, isFormattedFont: i, hasGutterParaMarkers: s, hasActiveTextFocusBox: o } = e;
  if (t === "hidden" && n && i && s && o)
    return zc;
  if (ts(e) && r === "collapsed")
    return Kc;
  if (t === "hidden" && n && i && !s && !o)
    return fo;
  if (t === "editable" && !n && !i && !s && !o)
    return Fc;
}
function ts(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function Nx(e) {
  if (e)
    return e.markerMode === "editable" ? ut : _t;
}
function wx(e) {
  const t = [], r = e ?? Bc;
  return r && (t.push(`${oy}${r.markerMode}`), r.hasSpacing && t.push(iy), r.isFormattedFont && t.push(sy)), t;
}
function qx(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += Rx(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), Ix(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += Lx(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), Ux(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function Rx(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), $x(t, e.retain, e.attributes, r, n)), e.retain);
}
function $x(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Fe();
  function l(u) {
    if (s <= 0)
      return !0;
    if (gr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, m = Math.min(s, p);
        if (m > 0) {
          let g = u;
          const y = f > 0, x = m < d - f;
          if (y && x) {
            const [, v] = u.splitText(f);
            [g] = v.splitText(m);
          } else y ? [, g] = u.splitText(f) : x && ([g] = u.splitText(m));
          if (Lr(r)) {
            const v = g.getParent();
            if (R(v)) {
              const k = r.char;
              let M;
              Array.isArray(k) ? a >= 0 && a <= k.length - 1 && (M = k[a]) : a === 0 && (M = k);
              const L = M ? ln(M, v) : !1;
              if (L && Array.isArray(k) && k.length > 1) {
                const _ = pe("");
                g.replace(_);
                const F = typeof r.segment == "string" ? r.segment : void 0, U = ri(k.slice(1), n, g, F);
                let B = _;
                for (const J of U)
                  B.insertAfter(J), B = J;
                _.remove(), Et(r, g);
              } else if (L)
                Et(r, g);
              else {
                g.remove();
                const _ = xu(g, r, n, i);
                if (_ && _.length > 0) {
                  let F = v;
                  for (const U of _)
                    F.insertAfter(U), F = U;
                }
              }
            } else {
              const k = pe("");
              g.replace(k);
              const M = xu(g, r, n, i);
              if (M && M.length > 0) {
                let L = k;
                for (const _ of M)
                  L.insertAfter(_), L = _;
                k.remove();
              } else
                k.replace(g);
            }
          } else
            Et(r, g);
          s -= m;
        }
      }
      o += d;
    } else if (Ct(u))
      e <= o && o < e + t && s > 0 && (_u(u, r), s -= 1), o += 1;
    else if (R(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Lr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Pa(u, p.style), typeof p.cid == "string" && gt(u, cn, () => p.cid);
            const m = Le(p, Is);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || Gx(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && da(u), !0;
        }
      }
      d && da(u), a -= 1;
    } else if (Tt(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!er(u))
          _u(u, r);
        else if (Vc(r)) {
          const p = Vp(r.para, n);
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
function xu(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = ri(t.char, r, e, i), o = s.find(R);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Et(t, e);
    return;
  }
  const a = {};
  Jp.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Et(t, e), s;
}
function jp(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  A(r) ? (r.setMarker(t), r.setTextContent(Ne(t))) : Vt(r) && r.getTextType() === "marker" && r.setTextContent(Ne(t) + O);
}
function Pa(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    A(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = R(e.getParent()), i = e.getFirstChild();
  Vt(i) && i.getTextType() === "marker" && i.getTextContent() === Ne(r, n) && i.setTextContent(Ne(t, n));
  const s = e.getLastChild();
  Vt(s) && s.getTextType() === "marker" && s.getTextContent() === tt(r, n) && s.setTextContent(tt(t, n));
}
function _u(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && R(e) && Lr(t)) {
      const i = Oa(n);
      if (Pa(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        gt(e, cn, () => o);
      }
      const s = Le(i, Is);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ve(e) || ge(e) || ze(e) || z(e) || Ie(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (bt(e) || ae(e) || R(e)) && (r === "style" && ae(e) ? jp(e, n) : r === "style" && R(e) ? Pa(e, n) : r === "code" && bt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && gt(e, $r, () => n));
  }
}
function Ix(e, t, r) {
  if (t <= 0)
    return;
  const n = Fe();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (gr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Ct(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Tt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Tt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Kt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ce(p)) {
            let m = i + 1;
            const g = p.getChildren();
            for (const x of g) {
              if (s <= 0)
                break;
              const v = i;
              if (i = m, o(x)) {
                i = v;
                break;
              }
              gr(x) ? m += x.getTextContentSize() : Ct(x) && (m += 1), i = v;
            }
            const y = p.getChildren();
            for (const x of y)
              x.remove(), a.append(x);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Kt(), !0);
        } else ae(a) ? a.replace(Kt(), !0) : a.remove();
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
function Lx(e, t, r, n, i) {
  if (t === zi)
    return Cu(e, r, n, i);
  if (t.endsWith(zi) && !Vc(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Lr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Ds(e, s, r, i);
    }
    return o += Cu(e + o, r, n, i), o;
  } else return Lr(r) ? Dx(e, t, r, n, i) : Ds(e, t, r, i);
}
function Dx(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = pe(t === "" ? qt : t);
  Et(r, s);
  let o;
  {
    let y = function(x) {
      if (gr(x)) {
        const v = x.getTextContentSize();
        if (e >= g && e < g + v) {
          const k = x.getParent();
          return R(k) && (o = k), !0;
        }
        g += v;
      } else if (Ct(x))
        g += 1;
      else if (R(x)) {
        const v = x.getChildren();
        for (const k of v)
          if (y(k))
            return !0;
      } else if ($(x)) {
        const v = x.getChildren();
        for (const k of v)
          if (y(k))
            return !0;
        Tt(x) && (g += 1);
      }
      return !1;
    };
    const m = Fe();
    let g = 0;
    y(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && ln(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (ln(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = ri(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(R);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Ds(e, t, void 0, i);
  const f = {};
  for (const [m, g] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof g == "string" && (f[m] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const m of u)
    if (!Bp(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Ds(e, t, void 0, i));
}
function Ds(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Fe();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (gr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = pe(t);
        if (Et(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          R(f) && !Lr(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Ct(c))
      s += 1;
    else if (R(c)) {
      if (!o && e === s) {
        const d = pe(t);
        Et(r, d);
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
        const d = pe(t);
        return Et(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Tt(c)) {
      if (!o && e === s) {
        const d = pe(t);
        Et(r, d);
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
        const d = pe(t);
        return Et(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = pe(t);
    Et(r, c);
    const l = Kt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Bp(e, t, r) {
  const n = Fe();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Kt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!$(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Ce(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Kt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (gr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Ct(l))
        i += 1;
      else if (R(l)) {
        if (o(l))
          return !0;
      } else if (Tt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (er(u) && Tt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if ($(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return $(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Kt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ce(a) ? er(a) && ae(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ce(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (R(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ce(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function Ux(e, t, r, n, i) {
  let s;
  return Or("chapter", t) ? s = zx(t.insert.chapter, r) : Or("verse", t) ? s = Kx(t.insert.verse, r) : Or("ms", t) ? s = jx(t.insert.ms) : Or("note", t) ? s = Wp(t, r, n, i) : Or("unknown", t) ? s = Hp(t, r, n, i) : Or("unmatched", t) && (s = Vx(t.insert.unmatched, r)), s ? Bp(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Cu(e, t, r, n) {
  let i;
  Vc(t) ? i = Vp(t.para, r) : Hx(t) && (i = Fx(t.book)), i ??= Kt();
  const s = i, o = ae(s), a = er(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (gr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ae(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const m = e - c, [g] = m > 0 ? d.splitText(m) : [void 0];
          let y, x = g?.getPreviousSibling();
          for (; x; ) {
            const v = x;
            x = x.getPreviousSibling(), y ? y.insertBefore(v) : s.append(v), y = v;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Ct(d))
      c += 1;
    else if (Tt(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (er(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ae(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ae(d) && s)
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
  return u(Fe()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function Fx(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Ri || !r || !Rt.isValidBookCode(r))
    return;
  const n = Le(e, hT);
  return Sf(r, n);
}
function Vp(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Le(e, pT), i = $i(r, n);
  if (!ti(t))
    return i;
  if (t.markerMode === "editable")
    i.append(at(r), ro());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ne(r) + O;
    i.append(t.hasGutterParaMarkers ? $y(s) : pr("marker", s));
  }
  return i;
}
function zx(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Le(e, gT);
  let a;
  if (t.markerMode === "editable")
    a = Mf(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = pc(r, c, n, i, s, o);
  }
  return a;
}
function Kx(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Le(e, mT);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = wt(r, n);
    c = If(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Oc(n, l, i, s, o, a);
  }
  return c;
}
function jx(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Le(e, yT);
  return ff(t, r, n, s, i);
}
function Wp(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Le(i.note, bT), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (Lr(g.attributes)) {
        const y = ri(g.attributes.char, t, pe(g.insert), void 0, Gp(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(pe(g.insert));
  return Dp(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Hp(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Le(i, kT), l = fc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && Bx(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && gt(l, $r, () => d), l;
}
function Bx(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Lr(s.attributes)) {
        const o = pe(s.insert), a = ri(s.attributes.char, t, o, void 0, Gp(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(pe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Or("unknown", s)) {
        const o = Hp(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Or("note", s)) {
        const o = Wp(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function Vx(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = vc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Gp(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Oa(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function ri(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(qt);
  const a = () => {
    o && E(r) && r.getTextContent() !== qt && r.setTextContent(O + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Oa), l = c[0], u = i?.[i.length - 1];
    if (R(u) && ln(l, u))
      return c.length > 1 ? ri(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, m) => {
      const g = hr(p.style, Le(p, Is));
      if (typeof p.cid == "string" && gt(g, cn, () => p.cid), n && m === c.length - 1 && gt(g, $r, () => n), f)
        if (R(f)) {
          const y = f.getMarker(), x = [];
          Go(y, x, t, !0), x.forEach((k) => g.append(k)), g.append(f);
          const v = [];
          Ho(f, v, t, !0), v.forEach((k) => g.append(k));
        } else
          g.append(f);
      return g;
    }, r);
    return Go(l.style, d, t, s), Ho(d, d, t, s), [d];
  } else {
    const c = Oa(e), l = i?.[i.length - 1];
    if (R(l) && ln(c, l))
      return r && l.append(r), [];
    a();
    const u = hr(c.style, Le(c, Is));
    return typeof c.cid == "string" && gt(u, cn, () => c.cid), n && gt(u, $r, () => n), r && u.append(r), Go(c.style, u, t, s), Ho(u, u, t, s), [u];
  }
}
function Ho(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && Wx(e.getMarker(), t, r, !1, n);
}
function Go(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = at(e, "opening", n) : r?.markerMode === "visible" && (i = pr("marker", Ne(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function Wx(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = at("", "selfClosing") : s = at(e, "closing", i) : r?.markerMode === "visible" && (s = pr("marker", n ? tt("") : tt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function Hx(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Vc(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Lr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function Gx(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Et(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        gt(t, $r, () => n);
        continue;
      }
      if (Jx(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Jp = [
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
function Jx(e) {
  return Jp.includes(e);
}
function Yx() {
  const [e] = le();
  return K(() => e.registerCommand(Ys, (t) => (Xx(t), !1), sn), [e]), null;
}
function Xx(e) {
  if (Qx(e.target))
    return;
  const t = w();
  P(t) && Zx(t);
}
function ni(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if ($t(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === O && (r++, t = t.getNextSibling());
    else if (ge(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Ht(e, r), !0);
}
function Qx(e) {
  if (!Fd(e))
    return !1;
  const t = Yi(e);
  if (!Iy(t))
    return !1;
  const r = t.getParent();
  return r ? Ce(r) ? ni(r) : (Ht(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function Zx(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = re(t.key);
  if (!Ce(r))
    return !1;
  const n = r.getFirstChild();
  return !Tr(n) && !_n(n) ? !1 : ni(r);
}
function e_() {
  const [e] = le();
  return K(() => {
    const t = (r) => r instanceof KeyboardEvent && !t_(r) || !Yp() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Je(
      e.registerCommand(yr, t, $e),
      e.registerCommand(nc, t, $e),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(cr, t, lr),
      e.registerCommand(on, t, lr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(ic, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Yi(r.target);
        return !n || !pn(n) ? !1 : (r.preventDefault(), !0);
      }, $e),
      e.registerCommand(ym, t, $e),
      e.registerCommand(bm, t, $e),
      e.registerCommand(km, t, $e)
    );
  }, [e]), null;
}
function t_(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function pn(e) {
  return ot(e, (t) => Ie(t) || mp(t)) ?? void 0;
}
function Yp() {
  const e = w();
  return P(e) ? pn(e.anchor.getNode()) !== void 0 || pn(e.focus.getNode()) !== void 0 : !1;
}
function r_(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function n_(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), r_(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function i_(e, t, r, n) {
  if (!b_(t) || n_(e, r))
    return !1;
  const i = r === "up" ? fT(t) : dT(t);
  return i && n.preventDefault(), i;
}
function s_({ viewOptions: e }) {
  const [t] = le();
  return o_(t, e), null;
}
function o_(e, t) {
  K(() => {
    if (!e.hasNodes([nr, _t, Me]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Su(o), d = p_(i, vu(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return i_(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Su(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return vu(a, n.key) ? l = !c && Au(i, "next") || !c && c_(i) || m_(i) || !c && s && Eu(i, "next") : a_(a, n.key) && (l = !c && Au(i, "previous") || !c && l_(i) || y_(i, t) || !c && s && Eu(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(yr, r, $e);
  }, [e, t]);
}
function Su(e) {
  return e.dir || "ltr";
}
function vu(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function a_(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Na(e) {
  if (!R(e) || e.getMarker() !== "fp")
    return;
  const t = Wt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function c_(e) {
  const t = Na(Ff(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Ht(t, 0), !0);
}
function l_(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Na(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Mu(n);
  }
  if (t.offset === 0) {
    const n = Na(r);
    return n ? Mu(n) : !1;
  }
  return !1;
}
function Mu(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (E(t))
    return t.select(), !0;
  if ($(t)) {
    const i = t.getLastDescendant();
    return E(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Us = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function u_(e) {
  if (Us)
    for (const { segment: r } of Us.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function d_(e) {
  if (Us) {
    let n = 0;
    for (const { index: i } of Us.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Xp(e) {
  for (let t = e; t; t = t.getParent())
    if ($(t) && !t.isInline())
      return t;
}
function Qp(e) {
  return !!e && A(e) && pn(e) !== void 0;
}
function Hn(e) {
  return E(e) && !e.isToken() && !Qp(e) && e.getTextContentSize() > 0;
}
function Zp(e) {
  return Js(e) ? !0 : z(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || Qp(e)) && e.getTextContentSize() > 0 : zd(e) ? !ze(e) : !1;
}
function Gn(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function ho(e, t, r) {
  for (let n = e; n; ) {
    if (Zp(n))
      return n;
    if ($(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Gn(n, t, r);
      continue;
    }
    if (Hn(n))
      return n;
    n = Gn(n, t, r);
  }
}
function Wc(e, t, r, n, i) {
  return r === "element" && $(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Gn(e, n, i) : r === "text" && Zp(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Gn(e, n, i);
}
function Jo(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Wc(e.node, e.offset, e.kind, "previous", t), n = ho(r, "previous", t);
  if (!n)
    return e;
  if (Hn(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function f_(e, t) {
  const r = e.getNode(), n = Xp(r);
  if (!n)
    return;
  if (e.type === "text" && Hn(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Jo({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Wc(r, e.offset, e.type, t, n), s = ho(i, t, n);
  if (!s)
    return;
  if (Hn(s)) {
    const c = s.getTextContent(), l = t === "next" ? u_(c) : d_(c);
    return Jo({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Jo({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function eh(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = f_(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Eu(e, t) {
  return eh(e, t, "collapse");
}
function p_(e, t) {
  return eh(e, t, "extend");
}
function h_(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && Hn(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Wc(n, e.offset, e.type, t, r);
  return ho(i, t, r) === void 0;
}
function g_(e, t) {
  const r = Fe();
  for (let n = e; n; ) {
    const i = Gn(n, t, r), s = i && ho(i, t, r);
    if (!s)
      return;
    if (n = pn(s), !n)
      return s;
  }
}
function Au(e, t) {
  const r = e.anchor, n = r.getNode();
  if (pn(n))
    return !1;
  const i = Xp(n);
  if (!i || !h_(r, t, i))
    return !1;
  const s = Gn(i, t, Fe()), o = s && pn(s);
  if (!o)
    return !1;
  const a = g_(o, t);
  if (!a)
    return !0;
  if (Hn(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Pu(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function m_(e) {
  const t = e.anchor.getNode(), r = Ff(e);
  if (z(r) && !A(r.getFirstChild())) {
    if (Ce(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Ce(i) && ni(i)) && i.selectStart(), !0;
      }
    } else return Vt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ce(t) && z(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Pu(r), !0;
  }
  const n = r?.getParent();
  if (Vt(r) && z(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Pu(n) : n.selectEnd(), !0;
  }
  return !1;
}
function y_(e, t) {
  const r = Tb(e);
  if (Xi(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (bt(i.getParent()))
    return !0;
  if (z(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!_n(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Ce(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = ot(o, (c) => z(c));
    if (z(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Wt(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (sr(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function b_(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ge(t) && zd(t);
}
function k_() {
  const [e] = le();
  return T_(e), null;
}
function T_(e) {
  K(() => {
    if (!e.hasNodes([ye]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Je(
      e.registerNodeTransform(ye, C_),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ye, zb),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ye, op),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ye, (t) => Fi(un("char"), t)),
      e.registerNodeTransform(Ue, S_)
    );
  }, [e]);
}
function Yo(e) {
  return e.getChildren().some(A);
}
function x_(e, t) {
  const r = t.getFirstChild();
  if (!A(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (oo(n)) {
    const i = n.getTextContent();
    i.startsWith(O) && (i === O ? n.remove() : n.setTextContent(i.slice(O.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function __(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  A(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function C_(e) {
  if (!R(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Yo(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = te(e, cn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (R(i) && ln({ style: t, cid: r }, i) && Ft(n, i.getUnknownAttributes()))
    if (Yo(i)) {
      if (x_(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  R(s) && ln({ style: t, cid: r }, s) && Ft(n, s.getUnknownAttributes()) && (Yo(s) ? __(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function S_(e) {
  const t = e.getParent();
  if (!R(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(qt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function th(e) {
  return e.replaceAll("	", " ");
}
const Hc = (e) => {
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
      n.setData(o, th(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(cr, s);
  });
}, Gc = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", th(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(cr, i);
  });
};
function v_() {
  const [e] = le();
  return K(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Ss ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(Xs, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(on, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Gc(e) : Hc(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function M_({ logger: e }) {
  const [t] = le();
  return K(() => Je(
    // When the backslash or forward slash key is typed.
    t.registerCommand(yr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Fn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(cr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Fn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(ic, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Fn)
  ), [t, e]), null;
}
function E_({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), S("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: S("span", { className: "text", children: i.title }) });
}
function A_({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return S("div", { className: "typeahead-popover", children: S("ul", { children: e.map((i, s) => S(E_, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let P_ = 0;
class hi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${P_++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function O_({ options: e } = {}) {
  const [t] = le(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = de(void 0), c = De(() => {
    const d = [
      new hi("Cut", {
        onSelect: () => {
          t.dispatchCommand(on, null);
        },
        isDisabled: r
      }),
      new hi("Copy", {
        onSelect: () => {
          t.dispatchCommand(Xs, null);
        }
      }),
      new hi("Paste", {
        onSelect: () => {
          Hc(t);
        },
        isDisabled: r
      }),
      new hi("Paste as Plain Text", {
        onSelect: () => {
          Gc(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new hi(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = he(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  K(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || wf(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
    });
  }, [t]), K(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, l]), K(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, l]), K(() => {
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
  }, [i.isOpen, l, c, o, t]), K(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]);
  const u = Z(null);
  return Wi(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${m}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Dm.createPortal(S("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: S(A_, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function N_() {
  const [e] = le();
  return K(() => e.registerCommand(yr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ss ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, lr), [e]), null;
}
function w_({ isEditable: e }) {
  const [t] = le();
  return Wi(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Ou(e) {
  return !!e && gc(re(e));
}
function rh(e) {
  const [t] = le(), r = Z(void 0), n = he((i) => {
    const s = w(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Ou(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = co(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = gb();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Ht(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = re(a);
      E(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return K(() => {
    const i = () => {
      const a = e(), c = w(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (qr(Rr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Qi(c) || !c.includes(jn))
        return;
      const l = w(), u = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (mb(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(jn).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Je(t.registerCommand(fr, () => (i(), !1), sn), t.registerCommand(sc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Ou(a);
      }), c && t.update(() => {
        const l = re(a);
        E(l) && l.remove();
      }, { tag: Rr }), r.current = void 0, !1;
    }, sn), t.registerNodeTransform(Ue, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function q_() {
  const e = w();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!$(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ge(i) || co(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ge(s))
    return i;
}
function R_() {
  return rh(q_), null;
}
function $_({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = le();
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
        const u = o.getRootElement(), d = u?.ownerDocument.activeElement, f = u != null && d != null && (u === d || u.contains(d));
        o.update(() => {
          f || qr(Tm), o.setEditorState(l), o.dispatchCommand(xm, void 0);
        }, { tag: af });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function I_({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return L_(t, n), D_(i, e, r, n), null;
}
function L_(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  K(() => {
    let o = i;
    (!o || o.length <= 0) && (o = XT), r.current !== o && (r.current = o, Nu("note-callers", o, t));
  }, [t, i]), K(() => {
    let o = s;
    (!o || o.length <= 0) && (o = QT), n.current !== o && (n.current = o, Nu("cross-ref-callers", o, t));
  }, [t, s]);
}
function D_(e, t, r, n) {
  K(() => {
    if (!e.hasNodes([ye, Me, jt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => V_(s));
    return Je(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Me, (s) => U_(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ye, F_),
      e.registerNodeTransform(Ue, z_),
      // Ensure NBSP after caller.
      e.registerNodeTransform(jt, K_),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(jt, (s, { prevEditorState: o }) => j_(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(fr, () => B_(e, t, r, n), Nt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function U_(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => sr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !A(i) && i.getTextContent() !== xt(e.getCaller()) && e.insertBefore(i);
  }
}
function F_(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => sr(o));
  if (!R(e) || !z(t) || !n)
    return;
  const i = mc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  E(s) ? s.getTextContent() !== O && s.setTextContent(O) : e.insertAfter(pe(O));
}
function z_(e) {
  const t = Wt(e), r = t?.getChildren(), n = r?.find((o) => sr(o));
  if (!E(e) || !z(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!A(e) && z(i) && e.getTextContent() !== O && (e.setTextContent(O), e.selectEnd()), R(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(qt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = mc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function K_(e) {
  if (!sr(e))
    return;
  const t = e.getNextSibling();
  !E(t) || A(t) ? e.insertAfter(pe(O)) : t.getTextContent() !== O && t.setTextContent(O);
}
function j_(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = re(r), a = o?.getParent();
      return sr(o) && z(a) && a.getCaller() === Ms;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function B_(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = ot(o, (c) => z(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = re(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), gi(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (z(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, gi(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (z(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, gi(e, c, n);
    } else if (!a) {
      const c = ot(o, (l) => z(l));
      if (c && c.getIsCollapsed() && Ce(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, gi(e, l, n);
      }
    }
  }
  if (Ce(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (_n(c) && z(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, gi(e, l, n);
    }
  }
  return !1;
}
function gi(e, t, r) {
  const n = re(t);
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
function V_(e) {
  const t = w();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (z(i) && E(s)) {
    e.preventDefault();
    const o = rc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Ni(o);
  }
}
function Nu(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (W_(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function W_(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function go(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!A(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Li(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function H_(e) {
  const t = e.getParent();
  if (z(t))
    return go(t).some((r) => r.is(e)) ? t : void 0;
}
function Fs(e) {
  const t = go(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function G_(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function J_(e) {
  const t = _m();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Fs(e);
  const i = G_(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Fs(e);
}
function wa(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = H_(t);
  if (r)
    return Y_(r, t, e.offset) ? void 0 : r;
}
function Y_(e, t, r) {
  const n = go(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function X_(e) {
  const t = go(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Ht(e, Fs(e));
}
function Q_(e = !1) {
  const t = w();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return Z_(t.anchor, t.focus);
  const r = wa(t.anchor);
  if (!r)
    return !1;
  if (!e && J_(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Ht(n, r.getIndexWithinParent());
  } else
    X_(r);
  return !0;
}
function Z_(e, t) {
  const r = wa(e), n = wa(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && wu(e, r, i), n && wu(t, n, !i), !0;
}
function wu(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Fs(t), "element");
}
function eC() {
  const [e] = le(), t = Z(!1);
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
  }, [e]), K(() => e.registerCommand(fr, () => (Q_(t.current) && qr(Rr), !1), sn), [e]), null;
}
function tC({ onChange: e }) {
  const [t] = le();
  return K(() => t.registerCommand(fr, () => {
    const r = Ip();
    return e?.(r), !1;
  }, Nt), [t, e]), null;
}
function rC() {
  const [e] = le();
  return nC(e), null;
}
function nC(e) {
  K(() => {
    if (!e.hasNodes([Ye]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Ye, (t) => iC(t, e));
  }, [e]);
}
function iC(e, t) {
  Op(t, e.getKey()) && Pp(e.getFirstChild()), !(!ae(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = re(e.getKey());
    return ae(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function nh({ onStateChange: e }) {
  const [t] = le(), [r, n] = de(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = he(() => {
    const l = w();
    let u;
    if (P(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : ot(d, (x) => {
        const v = x.getParent();
        return v !== null && Cm(v);
      });
      p === null && (p = d.getTopLevelElementOrThrow());
      const m = p.getKey(), g = r.getElementByKey(m), y = xb(d, f);
      if (y && uT(y) && (u = y.getMarker()), g !== null && (ae(p) || bt(p) || Xi(p))) {
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
  return K(() => t.registerCommand(fr, (l, u) => (c(), n(u), !1), lr), [t, c]), K(() => Je(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Sm, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), lr), r.registerCommand(vm, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), lr)), [c, r, e]), null;
}
function sC(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Dr(e) {
  return e ? Ce(e) ? e : ot(e, (r) => Ce(r)) ?? void 0 : void 0;
}
function ih(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Dr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Jc(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !Kd(e) ? !1 : e.getNodes().some((t) => ge(t));
}
function sh(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Dr(r);
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
function oh(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Dr(r);
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
function qu(e, t) {
  return !!qa(e, t);
}
function qa(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && $(n)) {
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
function zs(e, t) {
  if (!P(e))
    return !1;
  const r = Dr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Xo(e) {
  return Jc(e) || ih(e);
}
function oC(e, t) {
  if (Jc(e) || ih(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return sh(e) && zs(e, "backward") || qu(e, "backward");
    case "deleteForward":
      return oh(e) && zs(e, "forward") || qu(e, "forward");
    case "insertText":
      return !1;
  }
}
function aC(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = qa(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (sh(e) && zs(e, "backward")) {
        const n = Dr(e.anchor.getNode());
        if (Ce(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = qa(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (oh(e) && zs(e, "forward")) {
        const i = Dr(e.anchor.getNode())?.getNextSibling();
        if (Ce(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Ru(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Kd(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!P(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!P(e) || e.isCollapsed())
    return !1;
  const r = Dr(e.anchor.getNode()), n = Dr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function ah(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else $(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function cC(e) {
  const t = e.getPreviousSibling();
  if (!Ce(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? ah(r) : ni(t) || t.selectStart();
}
function ch(e) {
  return ge(e) || Ve(e) ? [] : Ce(e) ? e.getChildren().flatMap(ch) : [e];
}
function lC(e) {
  const t = [];
  for (const r of e) {
    const n = ch(r);
    n.length !== 0 && (Ce(r) && t.length > 0 && t.push(pe(" ")), t.push(...n));
  }
  return t;
}
function $u(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uC(e) {
  if (Array.isArray(e)) return e;
}
function dC(e, t) {
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
function fC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pC(e, t) {
  return uC(e) || dC(e, t) || hC(e, t) || fC();
}
function hC(e, t) {
  if (e) {
    if (typeof e == "string") return $u(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? $u(e, t) : void 0;
  }
}
const lh = Object.entries, Iu = Object.setPrototypeOf, gC = Object.isFrozen, mC = Object.getPrototypeOf, yC = Object.getOwnPropertyDescriptor;
let Ze = Object.freeze, rt = Object.seal, Dn = Object.create, uh = typeof Reflect < "u" && Reflect, Ra = uh.apply, $a = uh.construct;
Ze || (Ze = function(t) {
  return t;
});
rt || (rt = function(t) {
  return t;
});
Ra || (Ra = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
$a || ($a = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const $n = We(Array.prototype.forEach), bC = We(Array.prototype.lastIndexOf), Lu = We(Array.prototype.pop), In = We(Array.prototype.push), kC = We(Array.prototype.splice), Nr = Array.isArray, _i = We(String.prototype.toLowerCase), Qo = We(String.prototype.toString), Du = We(String.prototype.match), mi = We(String.prototype.replace), Uu = We(String.prototype.indexOf), TC = We(String.prototype.trim), xC = We(Number.prototype.toString), _C = We(Boolean.prototype.toString), Fu = typeof BigInt > "u" ? null : We(BigInt.prototype.toString), zu = typeof Symbol > "u" ? null : We(Symbol.prototype.toString), Ge = We(Object.prototype.hasOwnProperty), yi = We(Object.prototype.toString), He = We(RegExp.prototype.test), Zr = CC(TypeError);
function We(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Ra(e, t, n);
  };
}
function CC(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return $a(e, r);
  };
}
function fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _i;
  if (Iu && Iu(e, null), !Nr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (gC(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function SC(e) {
  for (let t = 0; t < e.length; t++)
    Ge(e, t) || (e[t] = null);
  return e;
}
function st(e) {
  const t = Dn(null);
  for (const n of lh(e)) {
    var r = pC(n, 2);
    const i = r[0], s = r[1];
    Ge(e, i) && (Nr(s) ? t[i] = SC(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = st(s) : t[i] = s);
  }
  return t;
}
function vC(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return xC(e);
    case "boolean":
      return _C(e);
    case "bigint":
      return Fu ? Fu(e) : "0";
    case "symbol":
      return zu ? zu(e) : "Symbol()";
    case "undefined":
      return yi(e);
    case "function":
    case "object": {
      if (e === null)
        return yi(e);
      const t = e, r = Dt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : yi(n);
      }
      return yi(e);
    }
    default:
      return yi(e);
  }
}
function Dt(e, t) {
  for (; e !== null; ) {
    const n = yC(e, t);
    if (n) {
      if (n.get)
        return We(n.get);
      if (typeof n.value == "function")
        return We(n.value);
    }
    e = mC(e);
  }
  function r() {
    return null;
  }
  return r;
}
function MC(e) {
  try {
    return He(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ku = Ze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Zo = Ze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ea = Ze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), EC = Ze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ta = Ze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), AC = Ze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ju = Ze(["#text"]), Bu = Ze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ra = Ze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vu = Ze(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), gs = Ze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), PC = rt(/{{[\w\W]*|^[\w\W]*}}/g), OC = rt(/<%[\w\W]*|^[\w\W]*%>/g), NC = rt(/\${[\w\W]*/g), wC = rt(/^data-[\-\w.\u00B7-\uFFFF]+$/), qC = rt(/^aria-[\-\w]+$/), Wu = rt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), RC = rt(/^(?:\w+script|data):/i), $C = rt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), IC = rt(/^html$/i), LC = rt(/^[a-z][.\w]*(-[.\w]+)+$/i), Hu = rt(/<[/\w!]/g), Gu = rt(/<[/\w]/g), DC = rt(/<\/no(script|embed|frames)/i), UC = rt(/\/>/i), kt = {
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
}, FC = function() {
  return typeof window > "u" ? null : window;
}, zC = function(t, r) {
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
}, Ju = function() {
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
}, Ar = function(t, r, n, i) {
  return Ge(t, r) && Nr(t[r]) ? fe(i.base ? st(i.base) : {}, t[r], i.transform) : n;
};
function dh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : FC();
  const t = (I) => dh(I);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== kt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Dt(f, "cloneNode"), m = Dt(f, "remove"), g = Dt(f, "nextSibling"), y = Dt(f, "childNodes"), x = Dt(f, "parentNode"), v = Dt(f, "shadowRoot"), k = Dt(f, "attributes"), M = o && o.prototype ? Dt(o.prototype, "nodeType") : null, L = o && o.prototype ? Dt(o.prototype, "nodeName") : null, _ = o && o.prototype ? Dt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const I = r.createElement("template");
    I.content && I.content.ownerDocument && (r = I.content.ownerDocument);
  }
  let F, U = "", B, J = !1, ie = 0;
  const ue = function() {
    if (ie > 0)
      throw Zr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ne = function(h) {
    ue(), ie++;
    try {
      return F.createHTML(h);
    } finally {
      ie--;
    }
  }, Se = function(h) {
    ue(), ie++;
    try {
      return F.createScriptURL(h);
    } finally {
      ie--;
    }
  }, Pe = function() {
    return J || (B = zC(d, i), J = !0), B;
  }, Y = r, D = Y.implementation, Q = Y.createNodeIterator, me = Y.createDocumentFragment, nt = Y.getElementsByTagName, Mt = n.importNode;
  let ce = Ju();
  t.isSupported = typeof lh == "function" && typeof x == "function" && D && D.createHTMLDocument !== void 0;
  const se = PC, Xe = OC, To = NC, oi = wC, ai = qC, it = RC, Sr = $C, xo = LC;
  let rs = Wu, be = null;
  const Br = fe({}, [...Ku, ...Zo, ...ea, ...ta, ...ju]);
  let xe = null;
  const ci = fe({}, [...Bu, ...ra, ...Vu, ...gs]);
  let Ee = Object.seal(Dn(null, {
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
  })), q = null, j = null;
  const W = Object.seal(Dn(null, {
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
  let G = !0, ve = !0, ft = !1, vr = !0, It = !1, Lt = !0, Vr = !1, _o = !1, ns = null, is = null, Co = !1, vn = !1, ss = !1, os = !1, yl = !0, bl = !1;
  const kl = "user-content-";
  let So = !0, as = !1, Mn = {}, Gt = null;
  const vo = fe({}, [
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
  let Tl = null;
  const xl = fe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mo = null;
  const _l = fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), cs = "http://www.w3.org/1998/Math/MathML", ls = "http://www.w3.org/2000/svg", Jt = "http://www.w3.org/1999/xhtml";
  let En = Jt, Eo = !1, Ao = null;
  const Ug = fe({}, [cs, ls, Jt], Qo), Cl = Ze(["mi", "mo", "mn", "ms", "mtext"]);
  let Po = fe({}, Cl);
  const Sl = Ze(["annotation-xml"]);
  let Oo = fe({}, Sl);
  const Fg = fe({}, ["title", "style", "font", "a", "script"]);
  let li = null;
  const zg = ["application/xhtml+xml", "text/html"], Kg = "text/html";
  let we = null, An = null;
  const jg = r.createElement("form"), vl = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, No = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (An && An === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = st(h), li = // eslint-disable-next-line unicorn/prefer-includes
    zg.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? Kg : h.PARSER_MEDIA_TYPE, we = li === "application/xhtml+xml" ? Qo : _i, be = Ar(h, "ALLOWED_TAGS", Br, {
      transform: we
    }), xe = Ar(h, "ALLOWED_ATTR", ci, {
      transform: we
    }), Ao = Ar(h, "ALLOWED_NAMESPACES", Ug, {
      transform: Qo
    }), Mo = Ar(h, "ADD_URI_SAFE_ATTR", _l, {
      transform: we,
      base: _l
    }), Tl = Ar(h, "ADD_DATA_URI_TAGS", xl, {
      transform: we,
      base: xl
    }), Gt = Ar(h, "FORBID_CONTENTS", vo, {
      transform: we
    }), q = Ar(h, "FORBID_TAGS", st({}), {
      transform: we
    }), j = Ar(h, "FORBID_ATTR", st({}), {
      transform: we
    }), Mn = Ge(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? st(h.USE_PROFILES) : h.USE_PROFILES : !1, G = h.ALLOW_ARIA_ATTR !== !1, ve = h.ALLOW_DATA_ATTR !== !1, ft = h.ALLOW_UNKNOWN_PROTOCOLS || !1, vr = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, It = h.SAFE_FOR_TEMPLATES || !1, Lt = h.SAFE_FOR_XML !== !1, Vr = h.WHOLE_DOCUMENT || !1, vn = h.RETURN_DOM || !1, ss = h.RETURN_DOM_FRAGMENT || !1, os = h.RETURN_TRUSTED_TYPE || !1, Co = h.FORCE_BODY || !1, yl = h.SANITIZE_DOM !== !1, bl = h.SANITIZE_NAMED_PROPS || !1, So = h.KEEP_CONTENT !== !1, as = h.IN_PLACE || !1, rs = MC(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : Wu, En = typeof h.NAMESPACE == "string" ? h.NAMESPACE : Jt, Po = Ge(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? st(h.MATHML_TEXT_INTEGRATION_POINTS) : fe({}, Cl), Oo = Ge(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? st(h.HTML_INTEGRATION_POINTS) : fe({}, Sl);
    const C = Ge(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? st(h.CUSTOM_ELEMENT_HANDLING) : Dn(null);
    if (Ee = Dn(null), Ge(C, "tagNameCheck") && vl(C.tagNameCheck) && (Ee.tagNameCheck = C.tagNameCheck), Ge(C, "attributeNameCheck") && vl(C.attributeNameCheck) && (Ee.attributeNameCheck = C.attributeNameCheck), Ge(C, "allowCustomizedBuiltInElements") && typeof C.allowCustomizedBuiltInElements == "boolean" && (Ee.allowCustomizedBuiltInElements = C.allowCustomizedBuiltInElements), rt(Ee), It && (ve = !1), ss && (vn = !0), Mn && (be = fe({}, ju), xe = Dn(null), Mn.html === !0 && (fe(be, Ku), fe(xe, Bu)), Mn.svg === !0 && (fe(be, Zo), fe(xe, ra), fe(xe, gs)), Mn.svgFilters === !0 && (fe(be, ea), fe(xe, ra), fe(xe, gs)), Mn.mathMl === !0 && (fe(be, ta), fe(xe, Vu), fe(xe, gs))), W.tagCheck = null, W.attributeCheck = null, Ge(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? W.tagCheck = h.ADD_TAGS : Nr(h.ADD_TAGS) && (be === Br && (be = st(be)), fe(be, h.ADD_TAGS, we))), Ge(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? W.attributeCheck = h.ADD_ATTR : Nr(h.ADD_ATTR) && (xe === ci && (xe = st(xe)), fe(xe, h.ADD_ATTR, we))), Ge(h, "ADD_URI_SAFE_ATTR") && Nr(h.ADD_URI_SAFE_ATTR) && fe(Mo, h.ADD_URI_SAFE_ATTR, we), Ge(h, "FORBID_CONTENTS") && Nr(h.FORBID_CONTENTS) && (Gt === vo && (Gt = st(Gt)), fe(Gt, h.FORBID_CONTENTS, we)), Ge(h, "ADD_FORBID_CONTENTS") && Nr(h.ADD_FORBID_CONTENTS) && (Gt === vo && (Gt = st(Gt)), fe(Gt, h.ADD_FORBID_CONTENTS, we)), So && (be["#text"] = !0), Vr && fe(be, ["html", "head", "body"]), be.table && (fe(be, ["tbody"]), delete q.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Zr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Zr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const N = F;
      F = h.TRUSTED_TYPES_POLICY;
      try {
        U = ne("");
      } catch (V) {
        throw F = N, V;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (F = void 0, U = "") : (F === void 0 && (F = Pe()), F && typeof U == "string" && (U = ne("")));
    Ze && Ze(h), An = h;
  }, Ml = fe({}, [...Zo, ...ea, ...EC]), El = fe({}, [...ta, ...AC]), Bg = function(h, C, N) {
    return C.namespaceURI === Jt ? h === "svg" : C.namespaceURI === cs ? h === "svg" && (N === "annotation-xml" || Po[N]) : !!Ml[h];
  }, Vg = function(h, C, N) {
    return C.namespaceURI === Jt ? h === "math" : C.namespaceURI === ls ? h === "math" && Oo[N] : !!El[h];
  }, Wg = function(h, C, N) {
    return C.namespaceURI === ls && !Oo[N] || C.namespaceURI === cs && !Po[N] ? !1 : !El[h] && (Fg[h] || !Ml[h]);
  }, Hg = function(h) {
    let C = x(h);
    (!C || !C.tagName) && (C = {
      namespaceURI: En,
      tagName: "template"
    });
    const N = _i(h.tagName), V = _i(C.tagName);
    return Ao[h.namespaceURI] ? h.namespaceURI === ls ? Bg(N, C, V) : h.namespaceURI === cs ? Vg(N, C, V) : h.namespaceURI === Jt ? Wg(N, C, V) : !!(li === "application/xhtml+xml" && Ao[h.namespaceURI]) : !1;
  }, Mr = function(h) {
    In(t.removed, {
      element: h
    });
    try {
      x(h).removeChild(h);
    } catch {
      if (m(h), !x(h))
        throw Zr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, us = function(h) {
    ui(h);
    const C = y(h);
    if (C) {
      const V = [];
      $n(C, (H) => {
        In(V, H);
      }), $n(V, (H) => {
        try {
          m(H);
        } catch {
        }
      });
    }
    const N = k(h);
    if (N)
      for (let V = N.length - 1; V >= 0; --V) {
        const H = N[V], ee = H && H.name;
        if (typeof ee == "string")
          try {
            h.removeAttribute(ee);
          } catch {
          }
      }
  }, Wr = function(h, C) {
    try {
      In(t.removed, {
        attribute: C.getAttributeNode(h),
        from: C
      });
    } catch {
      In(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(h), h === "is")
      if (vn || ss)
        try {
          Mr(C);
        } catch {
        }
      else
        try {
          C.setAttribute(h, "");
        } catch {
        }
  }, Gg = function(h) {
    const C = k(h);
    if (C)
      for (let N = C.length - 1; N >= 0; --N) {
        const V = C[N], H = V && V.name;
        if (!(typeof H != "string" || xe[we(H)]))
          try {
            h.removeAttribute(H);
          } catch {
          }
      }
  }, ui = function(h) {
    const C = [h];
    for (; C.length > 0; ) {
      const N = C.pop();
      (M ? M(N) : N.nodeType) === kt.element && Gg(N);
      const H = y(N);
      if (H)
        for (let ee = H.length - 1; ee >= 0; --ee)
          C.push(H[ee]);
    }
  }, Jg = function(h) {
    if (!Lt)
      return;
    const C = [h];
    for (; C.length > 0; ) {
      const N = C.pop(), V = M ? M(N) : N.nodeType;
      if (V === kt.processingInstruction || V === kt.comment && He(Gu, N.data)) {
        try {
          m(N);
        } catch {
        }
        continue;
      }
      if (V === kt.element) {
        const ee = N, ke = we(L ? L(N) : N.nodeName);
        try {
          ee.hasAttribute && ee.hasAttribute("patchsrc") && ee.removeAttribute("patchsrc"), ee.hasAttribute && ee.hasAttribute("for") && ke !== "label" && ke !== "output" && ee.removeAttribute("for");
        } catch {
        }
      }
      const H = y(N);
      if (H)
        for (let ee = H.length - 1; ee >= 0; --ee)
          C.push(H[ee]);
    }
  }, Al = function(h) {
    let C = null, N = null;
    if (Co)
      h = "<remove></remove>" + h;
    else {
      const ee = Du(h, /^[\r\n\t ]+/);
      N = ee && ee[0];
    }
    li === "application/xhtml+xml" && En === Jt && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const V = F ? ne(h) : h;
    if (En === Jt)
      try {
        C = new u().parseFromString(V, li);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = D.createDocument(En, "template", null);
      try {
        C.documentElement.innerHTML = Eo ? U : V;
      } catch {
      }
    }
    const H = C.body || C.documentElement;
    return h && N && H.insertBefore(r.createTextNode(N), H.childNodes[0] || null), En === Jt ? nt.call(C, Vr ? "html" : "body")[0] : Vr ? C.documentElement : H;
  }, Pl = function(h) {
    const C = _ ? _(h) : h.ownerDocument;
    return Q.call(
      C || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ds = function(h) {
    return h = mi(h, se, " "), h = mi(h, Xe, " "), h = mi(h, To, " "), h;
  }, wo = function(h) {
    var C;
    h.normalize();
    const N = _ ? _(h) : h.ownerDocument, V = Q.call(
      N || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = V.nextNode();
    for (; H; )
      H.data = ds(H.data), H = V.nextNode();
    const ee = (C = h.querySelectorAll) === null || C === void 0 ? void 0 : C.call(h, "template");
    ee && $n(ee, (ke) => {
      Pn(ke.content) && wo(ke.content);
    });
  }, fs = function(h) {
    const C = L ? L(h) : null;
    return typeof C != "string" || we(C) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    h.attributes !== k(h) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    h.nodeType !== M(h) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Pn = function(h) {
    if (!M || typeof h != "object" || h === null)
      return !1;
    try {
      return M(h) === kt.documentFragment;
    } catch {
      return !1;
    }
  }, di = function(h) {
    if (!M || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof M(h) == "number";
    } catch {
      return !1;
    }
  };
  function Yt(I, h, C) {
    I.length !== 0 && $n(I, (N) => {
      N.call(t, h, C, An);
    });
  }
  const Yg = function(h, C) {
    return !!(Lt && h.hasChildNodes() && !di(h.firstElementChild) && He(Hu, h.textContent) && He(Hu, h.innerHTML) || Lt && h.namespaceURI === Jt && C === "style" && di(h.firstElementChild) || h.nodeType === kt.processingInstruction || Lt && h.nodeType === kt.comment && He(Gu, h.data));
  }, Xg = function(h, C, N) {
    if (!q[C] && ql(C) && (Ee.tagNameCheck instanceof RegExp && He(Ee.tagNameCheck, C) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(C)))
      return !1;
    if (So && !Gt[C]) {
      const V = x(h), H = y(h);
      if (H && V) {
        const ee = H.length;
        for (let ke = ee - 1; ke >= 0; --ke) {
          const qe = h === N ? p(H[ke], !0) : H[ke];
          V.insertBefore(qe, g(h));
        }
      }
    }
    return Mr(h), !0;
  }, Ol = function(h, C, N, V) {
    return h.length === 0 ? C : C === N || C === V ? st(C) : C;
  }, Nl = function(h, C) {
    if (Yt(ce.beforeSanitizeElements, h, null), h !== C && x(h) === null)
      return as && ui(h), !0;
    if (fs(h))
      return Mr(h), !0;
    const N = we(L ? L(h) : h.nodeName);
    if (be = Ol(ce.uponSanitizeElement, be, Br, ns), Yt(ce.uponSanitizeElement, h, {
      tagName: N,
      allowedTags: be
    }), h !== C && x(h) === null)
      return as && ui(h), !0;
    if (Yg(h, N))
      return Mr(h), !0;
    if (q[N] || !(W.tagCheck instanceof Function && W.tagCheck(N)) && !be[N]) {
      const H = Xg(h, N, C);
      return H === !1 && Yt(ce.afterSanitizeElements, h, null), H;
    }
    if ((M ? M(h) : h.nodeType) === kt.element && !Hg(h) || (N === "noscript" || N === "noembed" || N === "noframes") && He(DC, h.innerHTML))
      return Mr(h), !0;
    if (It && h.nodeType === kt.text) {
      const H = ds(h.textContent);
      h.textContent !== H && (In(t.removed, {
        element: h.cloneNode()
      }), h.textContent = H);
    }
    return Yt(ce.afterSanitizeElements, h, null), !1;
  }, wl = function(h, C, N) {
    if (j[C] || Lt && C === "patchsrc" || Lt && C === "for" && h !== "label" && h !== "output" || yl && (C === "id" || C === "name") && (N in r || N in jg))
      return !1;
    const V = xe[C] || W.attributeCheck instanceof Function && W.attributeCheck(C, h);
    if (!(ve && He(oi, C))) {
      if (!(G && He(ai, C))) {
        if (V) {
          if (!Mo[C]) {
            if (!He(rs, mi(N, Sr, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && h !== "script" && Uu(N, "data:") === 0 && Tl[h])) {
                if (!(ft && !He(it, mi(N, Sr, "")))) {
                  if (N)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(ql(h) && (Ee.tagNameCheck instanceof RegExp && He(Ee.tagNameCheck, h) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(h)) && (Ee.attributeNameCheck instanceof RegExp && He(Ee.attributeNameCheck, C) || Ee.attributeNameCheck instanceof Function && Ee.attributeNameCheck(C, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          C === "is" && Ee.allowCustomizedBuiltInElements && (Ee.tagNameCheck instanceof RegExp && He(Ee.tagNameCheck, N) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(N)))
        ) return !1;
      }
    }
    return !0;
  }, Qg = fe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ql = function(h) {
    return !Qg[_i(h)] && He(xo, h);
  }, Zg = function(h, C, N, V) {
    if (F && typeof d == "object" && typeof d.getAttributeType == "function" && !N)
      switch (d.getAttributeType(h, C)) {
        case "TrustedHTML":
          return ne(V);
        case "TrustedScriptURL":
          return Se(V);
      }
    return V;
  }, em = function(h, C, N, V) {
    try {
      N ? h.setAttributeNS(N, C, V) : h.setAttribute(C, V), fs(h) ? Mr(h) : Lu(t.removed);
    } catch {
      Wr(C, h);
    }
  }, Rl = function(h) {
    Yt(ce.beforeSanitizeAttributes, h, null);
    const C = h.attributes;
    if (!C || fs(h))
      return;
    xe = Ol(ce.uponSanitizeAttribute, xe, ci, is);
    const N = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: xe,
      forceKeepAttr: void 0
    };
    let V = C.length;
    const H = we(h.nodeName);
    for (; V--; ) {
      const ee = C[V], ke = ee.name, qe = ee.namespaceURI, pt = ee.value, ht = we(ke), Ro = pt;
      let lt = ke === "value" ? Ro : TC(Ro);
      if (N.attrName = ht, N.attrValue = lt, N.keepAttr = !0, N.forceKeepAttr = void 0, Yt(ce.uponSanitizeAttribute, h, N), lt = N.attrValue, bl && (ht === "id" || ht === "name") && Uu(lt, kl) !== 0 && (Wr(ke, h), lt = kl + lt), Lt && He(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, lt)) {
        Wr(ke, h);
        continue;
      }
      if (ht === "attributename" && Du(lt, "href")) {
        Wr(ke, h);
        continue;
      }
      if (!N.forceKeepAttr) {
        if (!N.keepAttr) {
          Wr(ke, h);
          continue;
        }
        if (!vr && He(UC, lt)) {
          Wr(ke, h);
          continue;
        }
        if (It && (lt = ds(lt)), !wl(H, ht, lt)) {
          Wr(ke, h);
          continue;
        }
        lt = Zg(H, ht, qe, lt), lt !== Ro && em(h, ke, qe, lt);
      }
    }
    Yt(ce.afterSanitizeAttributes, h, null);
  }, ps = function(h) {
    let C = null;
    const N = Pl(h);
    for (Yt(ce.beforeSanitizeShadowDOM, h, null); C = N.nextNode(); )
      if (Yt(ce.uponSanitizeShadowNode, C, null), Nl(C, h), Rl(C), Pn(C.content) && ps(C.content), (M ? M(C) : C.nodeType) === kt.element) {
        const H = v(C);
        Pn(H) && (qo(H), ps(H));
      }
    Yt(ce.afterSanitizeShadowDOM, h, null);
  }, qo = function(h) {
    const C = [{
      node: h,
      shadow: null
    }];
    for (; C.length > 0; ) {
      const N = C.pop();
      if (N.shadow) {
        ps(N.shadow);
        continue;
      }
      const V = N.node, ee = (M ? M(V) : V.nodeType) === kt.element, ke = y(V);
      if (ke)
        for (let qe = ke.length - 1; qe >= 0; --qe)
          C.push({
            node: ke[qe],
            shadow: null
          });
      if (ee) {
        const qe = L ? L(V) : null;
        if (typeof qe == "string" && we(qe) === "template") {
          const pt = V.content;
          Pn(pt) && C.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (ee) {
        const qe = v(V);
        Pn(qe) && C.push({
          node: null,
          shadow: qe
        }, {
          node: qe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(I) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, N = null, V = null, H = null;
    if (Eo = !I, Eo && (I = "<!-->"), typeof I != "string" && !di(I) && (I = vC(I), typeof I != "string"))
      throw Zr("dirty is not a string, aborting");
    if (!t.isSupported)
      return I;
    _o ? (be = ns, xe = is) : No(h), (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && (be = st(be)), ce.uponSanitizeAttribute.length > 0 && (xe = st(xe)), t.removed = [];
    const ee = as && typeof I != "string" && di(I);
    if (ee) {
      Jg(I);
      const pt = L ? L(I) : I.nodeName;
      if (typeof pt == "string") {
        const ht = we(pt);
        if (!be[ht] || q[ht])
          throw us(I), Zr("root node is forbidden and cannot be sanitized in-place");
      }
      if (fs(I))
        throw us(I), Zr("root node is clobbered and cannot be sanitized in-place");
      try {
        qo(I);
      } catch (ht) {
        throw us(I), ht;
      }
    } else if (di(I))
      C = Al("<!---->"), N = C.ownerDocument.importNode(I, !0), N.nodeType === kt.element && N.nodeName === "BODY" || N.nodeName === "HTML" ? C = N : C.appendChild(N), qo(N);
    else {
      if (!vn && !It && !Vr && // eslint-disable-next-line unicorn/prefer-includes
      I.indexOf("<") === -1)
        return F && os ? ne(I) : I;
      if (C = Al(I), !C)
        return vn ? null : os ? U : "";
    }
    C && Co && Mr(C.firstChild);
    const ke = ee ? I : C;
    try {
      const pt = Pl(ke);
      for (; V = pt.nextNode(); )
        Nl(V, ke), Rl(V), Pn(V.content) && ps(V.content);
    } catch (pt) {
      throw ee && (us(I), $n(t.removed, (ht) => {
        ht.element && ui(ht.element);
      })), pt;
    }
    if (ee)
      return $n(t.removed, (pt) => {
        pt.element && ui(pt.element);
      }), It && wo(I), I;
    if (vn) {
      if (It && wo(C), ss)
        for (H = me.call(C.ownerDocument); C.firstChild; )
          H.appendChild(C.firstChild);
      else
        H = C;
      return (xe.shadowroot || xe.shadowrootmode) && (H = Mt.call(n, H, !0)), H;
    }
    let qe = Vr ? C.outerHTML : C.innerHTML;
    return Vr && be["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && He(IC, C.ownerDocument.doctype.name) && (qe = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + qe), It && (qe = ds(qe)), F && os ? ne(qe) : qe;
  }, t.setConfig = function() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    No(I), _o = !0, ns = be, is = xe;
  }, t.clearConfig = function() {
    An = null, _o = !1, ns = null, is = null, F = B, U = "";
  }, t.isValidAttribute = function(I, h, C) {
    An || No({});
    const N = we(I), V = we(h);
    return wl(N, V, C);
  }, t.addHook = function(I, h) {
    typeof h == "function" && Ge(ce, I) && In(ce[I], h);
  }, t.removeHook = function(I, h) {
    if (Ge(ce, I)) {
      if (h !== void 0) {
        const C = bC(ce[I], h);
        return C === -1 ? void 0 : kC(ce[I], C, 1)[0];
      }
      return Lu(ce[I]);
    }
  }, t.removeHooks = function(I) {
    Ge(ce, I) && (ce[I] = []);
  }, t.removeAllHooks = function() {
    ce = Ju();
  }, t;
}
var KC = dh();
function jC({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = Z(void 0), [n, i] = de(void 0), s = he((o) => {
    r.current = o, i(o);
  }, []);
  return K(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = sC(p);
      if (!m)
        return !1;
      const g = w();
      return e === "protected" ? g && oC(g, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const g = w(), y = r.current;
      if (y && g && Ru(g, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const v = re(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (v) {
            const k = v.getParent(), M = v.getPreviousSibling(), L = v.getNextSibling();
            v.remove(), M ? ah(M) : L && E(L) ? L.select(0, 0) : k?.selectStart();
          }
        } else y.kind === "selection" ? P(g) && g.removeText() : Ce(v) && cC(v);
        return !0;
      }
      if (!g)
        return !1;
      const x = aC(g, p);
      if (x) {
        if (x.kind === "verse") {
          const v = jd();
          v.add(x.node.getKey()), Ni(v);
        } else {
          const v = rc();
          v.anchor.set(x.node.getKey(), 0, "element"), v.focus.set(x.node.getKey(), x.node.getChildrenSize(), "element"), Ni(v);
        }
        return s({ key: x.node.getKey(), kind: x.kind, intent: p }), m.preventDefault(), !0;
      }
      if (P(g) && !g.isCollapsed() && Jc(g)) {
        const v = g.getNodes().filter(ge).map((L) => L.getKey()), { anchor: k, focus: M } = g;
        return s({
          kind: "selection",
          intent: p,
          key: v[0],
          anchor: { key: k.key, offset: k.offset, type: k.type },
          focus: { key: M.key, offset: M.offset, type: M.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return !m || !Xo(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const g = KC.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), x = lC(Hm(t, y)), v = w();
      return P(v) && v.insertNodes(x), m.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return m && Xo(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = w();
      return m && Xo(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Ru(w(), p) || s(void 0);
      });
    };
    return Je(t.registerCommand(yr, o, $e), t.registerCommand(on, c, $e), t.registerCommand(cr, u, $e), t.registerCommand(Mm, c, $e), t.registerCommand(ic, d, $e), t.registerCommand(nc, c, $e), t.registerUpdateListener(f));
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
const GE = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function BC({ textDirection: e }) {
  const [t] = le();
  return VC(t, e), null;
}
function VC(e, t) {
  K(() => (Yu(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Yu(e, t);
  })), [e, t]);
}
function Yu(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function WC() {
  const [e] = le();
  return HC(e), null;
}
function HC(e) {
  K(() => {
    if (!e.hasNodes([ye, _t, Me, Ue, ut]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Je(
      e.registerNodeTransform(Ue, GC),
      e.registerNodeTransform(Ue, (t) => JC(t, e)),
      e.registerNodeTransform(ut, Xu),
      e.registerNodeTransform(_t, Xu),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ut, (t) => {
        Fi(un("va"), t), Fi(un("vp"), t);
      })
    );
  }, [e]);
}
function GC(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || z(r) || R(n) || R(r) || _e(n) || _e(r) || Ie(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Ie(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
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
  Ke(n))
    return;
  if (ge(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ge(r) && Nc(e);
}
function JC(e, t) {
  const r = e.getParent();
  !Ie(r) || !e.isAttached() || Op(t, e.getKey()) && r.insertAfter(e);
}
function Xu(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; _e(t); )
    t = t.getLastChild();
  (R(t) || E(t) && _e(t.getParent())) && e.insertBefore(pe(" "));
}
function Yc(e) {
  if (!z(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !gc(n)) ? void 0 : e;
}
function YC(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if ($(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function XC() {
  const e = w();
  if (!(!P(e) || !e.isCollapsed()))
    return Yc(YC(e.anchor));
}
function QC(e) {
  const t = w();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = fh(e.target)), r ? Yc(ot(r, z)) : void 0;
}
function fh(e) {
  const t = Em(e)?.anchorNode;
  if (Fd(t))
    return Yi(t) ?? void 0;
}
function ZC(e) {
  if (w())
    return;
  const t = fh(e);
  return t ? Yc(ot(t, z)) : void 0;
}
function eS() {
  const [e] = le(), t = rh(XC);
  return K(() => {
    const r = (n) => {
      qr(Rr), t(n);
    };
    return Je(e.registerCommand(fr, () => {
      const n = ZC(e.getRootElement());
      return n && r(n), !1;
    }, sn), e.registerCommand(Ys, (n) => {
      const i = QC(n);
      return i && r(i), !1;
    }, sn));
  }, [e, t]), null;
}
function tS({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = Cx({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return S(_x, { trigger: e, items: i });
}
function rS({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = De(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? S(sS, { trigger: e, harness: i }) : S(tS, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const nS = [" ", "*"];
function iS(e, t) {
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
function sS({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = de(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = he((f, p, m) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = w();
      P(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  K(() => Je(r.registerCommand(yr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), Am(() => {
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
  }, $e), r.registerCommand(Bd, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Fn)), [r, e, t, n, a]);
  const c = he(() => i(void 0), []), l = he((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = he((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), d = De(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    iS(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && S(Up, { isOpen: !0, children: ({ placement: f }) => S(
    Kp,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? nS : void 0 },
    n.session
  ) });
}
function ph(e) {
  return e.replaceAll(O, "~").replace(/ {2,}/g, (r) => O.repeat(r.length));
}
function oS(e) {
  return e.replaceAll(O, " ").replaceAll("~", O);
}
function aS(e) {
  return e.replace(/ {2,}/g, " ");
}
let hh;
function cS(e) {
  e && (hh = e);
}
function gh(e) {
  return ts(e);
}
function lS(e, t) {
  return e.isEmpty() ? Ld : mh(e.toJSON(), t);
}
function mh(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && hc(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Ld;
  const n = yh(r), i = Ut(n, t);
  return i ? { type: dr, version: ur, content: i } : void 0;
}
function uS(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Ae({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function dS(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ae({
    type: vt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function fS(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = zf(r, a, c), Ae({
    type: vt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function pS(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = zf(t, o, a), Ae({
    type: ut.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function hS(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !gh(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(O) && (t[0] = a.slice(1));
  }
  return Ae({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function gS(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function mS(e, t) {
  const { unknownAttributes: r } = e;
  return Ae({ type: hp, ...r, content: t });
}
function yS(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ae({ type: yp, marker: r, ...n, content: t });
}
function bS(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ae({
    type: kp,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function kS(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Ae({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Un(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ae({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Yf({ sid: n, eid: i, ...s }, o)
  });
}
function TS(e) {
  return e.text;
}
function xS(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function _S(e) {
  const { marker: t } = e;
  return {
    type: qs,
    marker: t === "" ? void 0 : t
  };
}
function Qu(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function CS(e, t, r, n, i) {
  const s = Bt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Un({
      type: s,
      marker: zn,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Un({
      type: s,
      marker: an,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Un({
      type: s,
      marker: an
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Un({
      type: s,
      marker: zn
    });
    i.push(l);
  }
  (!n || !Vy(n)) && t.forEach((l) => {
    const u = Un({
      type: s,
      marker: zn,
      eid: l
    });
    i.push(u);
  });
}
function Ut(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, m = a, g = a, y = a;
    switch (a.type) {
      case Rt.getType():
        i.push(
          uS(
            l,
            Ut(l.children, t)
          )
        );
        break;
      case nr.getType():
        i.push(dS(a));
        break;
      case vt.getType():
        i.push(
          fS(
            u,
            Ut(u.children, t)
          )
        );
        break;
      case _t.getType():
      case ut.getType():
        i.push(pS(a));
        break;
      case ye.getType():
        i.push(
          hS(
            d,
            Ut(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case Ye.getType():
        i.push(
          gS(
            f,
            Ut(f.children, t)
          )
        );
        break;
      case xn.getType():
        i.push(
          mS(
            a,
            Ut(a.children, t)
          )
        );
        break;
      case Zn.getType():
        i.push(
          yS(
            a,
            Ut(a.children, t)
          )
        );
        break;
      case ei.getType():
        i.push(
          bS(
            a,
            Ut(a.children, t)
          )
        );
        break;
      case Me.getType():
        i.push(
          kS(
            p,
            Ut(p.children, t, p.caller)
          )
        );
        break;
      case xr.getType():
      case kr.getType():
      case jt.getType():
      case Vd.getType():
      case ir.getType():
        break;
      case Qe.getType():
        if (s = Ut(
          g.children,
          t,
          r,
          n
        ), s) {
          const x = g.typedIDs[wr];
          if (x)
            CS(s, x, o, e[c + 1], i), o = x;
          else {
            const v = s.shift();
            v && (typeof v == "string" ? Qu(i, v) : i.push(v)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Bt.getType():
        i.push(Un(a));
        break;
      case Ue.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Qi(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== O && !m.text.startsWith(ac) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[Gi]?.textType !== "attribute" && (!r || m.text !== xt(r))) {
          let x = TS(m);
          gh(t) && (n && x.startsWith(O) && (x = x.slice(1)), x = aS(oS(x))), Qu(i, x);
        }
        break;
      case kn.getType():
        i.push(
          xS(
            y,
            Ut(y.children, t)
          )
        );
        break;
      case Cr.getType():
        i.push(_S(a));
        break;
      default:
        hh?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function yh(e) {
  const t = e.findIndex((r) => hc(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = yh(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const na = {
  initialize: cS,
  deserializeEditorState: lS
}, Zu = kh([]), SS = {
  type: Vd.getType(),
  version: 1
};
let Xc = [], X, hn, bh, St;
function vS(e, t) {
  Xc = [], AS(e), PS(t);
}
function MS(e = 0) {
}
function ES(e, t) {
  X = t ?? po();
  let r;
  return e ? (e.type !== dr && St?.warn(`This USJ type '${e.type}' didn't match the expected type '${dr}'.`), e.version !== ur && St?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${ur}'.`
  ), e.content.length > 0 ? r = Ua(Pr(e.content)) : r = [Zu]) : r = [Zu], bh?.(Xc), {
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
function AS(e) {
  e && (hn = e), e?.addMissingComments && (bh = e.addMissingComments);
}
function PS(e) {
  e && (St = e);
}
function Qc() {
  return ts(X);
}
function OS(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function NS(e) {
  let { marker: t } = e;
  t !== Ri && St?.warn(`Unexpected book marker '${t}'!`), t = t ?? Ri;
  const { code: r } = e;
  (!r || !Rt.isValidBookCode(r)) && St?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  X?.markerMode === "editable" || X?.markerMode === "visible" ? n.push(
    mt("marker", Ne(t) + " " + r + O)
  ) : X?.hasGutterParaMarkers && n.push(mt("marker", Ne(t) + O, !0));
  const i = OS(e.content);
  i && n.push(ct(Qc() ? ph(i) : i));
  const s = Le(e, Xy);
  return Ae({
    type: Rt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Cf
  });
}
function wS(e) {
  let { marker: t } = e;
  t !== Os && St?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Os;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Le(e, Zy);
  let a;
  X?.markerMode === "visible" && (a = !0);
  const c = [
    ct(wt(t, r) ?? "")
  ];
  return X?.markerMode === "editable" && JS(i, s, c), X?.markerMode === "editable" ? Ae({
    type: vt.getType(),
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
    version: vf
  }) : Ae({
    type: nr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Of
  });
}
function qS(e) {
  let { marker: t } = e;
  t !== Ns && St?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ns;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (Nx(X) ?? _t).getType(), c = X?.markerMode === "editable" ? $f : Ep;
  let l, u;
  X?.markerMode === "editable" ? l = wt(t, r) : X?.markerMode === "visible" && (u = !0);
  const d = Le(e, pb);
  return Ae({
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
function RS(e, t = [], r = !1) {
  let { marker: n } = e;
  ye.isValidMarker(n, hn?.extraValidMarkers) || St?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (X?.markerMode === "editable") {
    const [a] = t;
    Bn(a) ? a.text = O + a.text : a && t.unshift(ct(O));
  }
  t.length === 0 && t.push(ct(qt)), Ia(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Le(e, rb);
  return s || VS(n, o, i), s || La(e.marker ?? "", i, !1, r), Ae({
    type: ye.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Pf
  });
}
function kh(e) {
  return {
    type: Ir.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: qf
  };
}
function $S(e, t = []) {
  let { marker: r } = e;
  Ye.isValidMarker(r, hn?.extraValidMarkers) || St?.warn(`Unexpected para marker '${r}'!`), r = r ?? Qt;
  const n = [];
  if (ti(X) && (X?.markerMode === "editable" ? n.push(
    dt(r),
    ct(O, rr, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && n.push(
    mt(
      "marker",
      Ne(r) + O,
      X?.hasGutterParaMarkers
    )
  )), n.push(...t), Qc()) {
    const s = n.find(
      (o) => !Tc(o) && !(Bn(o) && o.text === O)
    );
    Bn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => O.repeat(o.length)));
  }
  const i = Le(e, ub);
  return Ae({
    type: Ye.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Rf
  });
}
function Zc() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function IS(e, t = []) {
  const r = Le(e, yk);
  return Ae({
    ...Zc(),
    type: xn.getType(),
    unknownAttributes: r,
    children: t,
    version: gp
  });
}
function LS(e, t = []) {
  const r = Le(e, Tk), n = e.marker ?? _a, i = [];
  return X?.markerMode === "editable" ? i.push(
    dt(n),
    ct(O, rr, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && i.push(
    mt(
      "marker",
      Ne(n) + O,
      X?.hasGutterParaMarkers
    )
  ), i.push(...t), Ae({
    ...Zc(),
    type: Zn.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: bp
  });
}
function DS(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Ca;
  X?.markerMode === "editable" ? s.push(
    dt(o),
    ct(O, rr, "token")
  ) : (X?.markerMode === "visible" || X?.hasGutterParaMarkers) && s.push(
    mt(
      "marker",
      Ne(o) + O,
      X?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Le(
    e,
    _k
  );
  return Ae({
    ...Zc(),
    type: ei.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: Tp
  });
}
function US(e, t) {
  const r = Mb(t);
  let n = () => {
  };
  return hn?.noteCallerOnClick && (n = hn.noteCallerOnClick), Ae({
    type: jt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: $p
  });
}
function FS(e, t) {
  let { marker: r } = e;
  Me.isValidMarker(r, hn?.extraValidMarkers) || St?.warn(`Unexpected note marker '${r}'!`), r = r ?? lc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Dc(X?.noteMode), a = Le(e, fy), c = X?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  X?.markerMode === "editable" ? (l = dt(r, "opening", !1, c), s || (u = dt(r, "closing"))) : X?.markerMode === "visible" && (l = mt("marker", Ne(r) + " "), s || (u = mt("marker", tt(r))));
  const d = [];
  let f;
  if (l && d.push(l), X?.markerMode === "editable" && !o)
    f = ct(xt(i), void 0, c), d.push(f), GS(n, d), d.push(...t);
  else {
    const p = ct(O, rr, "token");
    f = US(i, t), d.push(f, p, ...t.flatMap(zS(p)));
  }
  return u && d.push(u), Ae({
    type: Me.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: pf
  });
}
function zS(e) {
  return (t) => kf(t) ? [t] : [t, e];
}
function KS(e) {
  let { marker: t } = e;
  (!t || !Bt.isValidMarker(t, hn?.extraValidMarkers)) && St?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Le(e, cc), s = Xf(e);
  return Ae({
    type: Bt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: uf
  });
}
function ed(e, t = []) {
  return {
    type: Qe.getType(),
    typedIDs: { [wr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function jS(e, t) {
  const { marker: r } = e, n = e.type, i = Le(e, Hy), s = [];
  if (X?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = cp(
      n,
      r,
      i
    );
    o && s.push(mt("marker", o)), a && s.push(mt("attribute", a)), s.push(...t), c && s.push(mt("attribute", c)), l && s.push(mt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Bn(o) && (o.mode = "token");
  }), Ae({
    type: kn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: _f
  });
}
function BS(e) {
  return {
    type: Cr.getType(),
    marker: e,
    text: Mi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: X?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: fp
  };
}
function dt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: ir.getType(),
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
function ct(e, t = void 0, r = "normal") {
  const n = {
    type: Ue.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Gi] = { textType: t }), n;
}
function mt(e, t, r = !1) {
  const n = {
    type: kr.getType(),
    text: t,
    textType: e,
    version: bf
  };
  return r && (n[Gi] = { [dc.key]: !0 }), n;
}
function Ki(e, t) {
  return {
    type: xr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Gf
  };
}
function Ia(e, t, r = !1) {
  X?.markerMode === "editable" ? t.push(dt(e, "opening", r)) : X?.markerMode === "visible" && t.push(mt("marker", Ne(e, r)));
}
function La(e, t, r = !1, n = !1) {
  X?.markerMode === "editable" ? r ? t.push(dt("", "selfClosing")) : t.push(dt(e, "closing", n)) : X?.markerMode === "visible" && t.push(
    mt(
      "marker",
      r ? tt("") : tt(e, n)
    )
  );
}
function VS(e, t, r) {
  if (X?.markerMode !== "editable" || !t) return;
  const n = Xt(t, Zs(e));
  n && r.push(ct(n, "attribute"));
}
function td(e, t) {
  if (e.type !== "ms" || X?.markerMode !== "editable" && X?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Le(e, cc), o = Qf(
    n,
    i,
    s,
    Xf(e)
  ), a = Xt(o, to(r ?? ""));
  if (!a) return;
  const c = O + a;
  X?.markerMode === "editable" ? t.push(ct(c, "attribute")) : t.push(mt("attribute", c));
}
function WS(e, t) {
  const r = e.marker ?? "";
  if (X?.markerMode === "editable") {
    const n = [];
    Ia(r, n), td(e, n), La(r, n, !0), t.push(Ki("milestone", n));
  } else
    Ia(r, t), td(e, t), La(r, t, !0);
}
function rd(e, t, r) {
  t !== void 0 && r.push(
    Ki(e, [
      dt(e, "opening"),
      ct(O + t, "attribute"),
      dt(e, "closing")
    ])
  );
}
function HS(e, t) {
  X?.markerMode === "editable" && (rd("va", e.altnumber, t), rd("vp", e.pubnumber, t));
}
function GS(e, t) {
  e !== void 0 && t.push(
    Ki("cat", [
      dt("cat", "opening"),
      ct(O + e, "attribute"),
      dt("cat", "closing")
    ])
  );
}
function JS(e, t, r) {
  e !== void 0 && r.push(
    Ki("ca", [
      dt("ca", "opening"),
      ct(O + e, "attribute"),
      dt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Ki("cp", [
      dt("cp", "opening"),
      ct(O + t, "attribute")
    ])
  );
}
function nd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function YS(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function id(e, t) {
  t.marker === an && t.sid !== void 0 && e.push(t.sid), t.marker === zn && t.eid !== void 0 && YS(e, t.eid);
}
function Da(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [ed(o, [...n])] : o, c = e[i];
  id(n, c);
  const l = Da(
    e.slice(i + 1, s),
    nd(t, i + 1),
    c.marker === an,
    n
  ), u = ed(l, [...n]), d = e[s];
  id(n, d);
  const f = Da(
    e.slice(s + 1),
    nd(t, s + 1),
    d.marker === an,
    n
  );
  return [...a, u, ...f];
}
function Pr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ct(Qc() ? ph(i) : i));
    else if (!i.type)
      St?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Rt.getType():
          n.push(NS(i));
          break;
        case vt.getType():
          n.push(wS(i));
          break;
        case ut.getType():
          X?.hasSpacing || n.push(SS), n.push(qS(i)), HS(i, n);
          break;
        case ye.getType():
          n.push(
            RS(i, Pr(i.content, !0), t)
          );
          break;
        case Ye.getType():
          n.push($S(i, Pr(i.content)));
          break;
        case Me.getType():
          n.push(FS(i, Pr(i.content)));
          break;
        case Bt.getType():
          df(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Xc?.push(i.sid)), n.push(KS(i)), WS(i, n);
          break;
        case Cr.getType():
          n.push(BS(i.marker ?? ""));
          break;
        case hp:
          n.push(IS(i, Pr(i.content)));
          break;
        case yp:
          n.push(LS(i, Pr(i.content)));
          break;
        case kp:
          n.push(DS(i, Pr(i.content)));
          break;
        default:
          St?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(jS(i, Pr(i.content)));
      }
  }), Da(n, r);
}
function Ua(e) {
  const t = e.findIndex(
    (n) => Qy(n) || yb(n) || fb(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    kk(n)
  );
  if (t >= 0) {
    const n = Ua(e.slice(0, t)), i = e[t], s = Ua(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || tT(n)))
    return [kh(e)];
  return e;
}
const Ur = {
  initialize: vS,
  reset: MS,
  serializeEditorState: ES
};
function Th(e) {
  if (e && !A(e)) {
    if (E(e)) return e;
    if ($(e))
      for (const t of e.getChildren()) {
        const r = Th(t);
        if (r) return r;
      }
  }
}
function XS() {
  const e = w();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !A(t) ? fn(t) : void 0) && E(t)) {
      const i = pe(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Vn(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Th(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(O) ? O : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of xh(e)) {
    if (!fn(t)) continue;
    Vn(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(O) && r.setTextContent(n.slice(O.length));
  }
  return !0;
}
function xh(e) {
  const [t, r] = Dd(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || A(a) || te(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function QS() {
  const e = w();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return fn(t) ? Ce(Mc(t)) : !1;
}
function _h() {
  let e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (A(t) && !Pc(t, e.anchor.offset)) {
    const c = t.getParent();
    if (R(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = w(), !P(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!E(t) || A(t) || !fn(t)) return !1;
  const r = Mc(t);
  if (!Ce(r)) return !1;
  const n = pe(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  Vn(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return R(a) ? Ec(a) : o.select(0, 0), !0;
}
const Ch = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Df(Fe().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = yc(e), r = qc(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Ab(0, o);
        const a = sT(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Vf(c) && bc(parseInt(n, 10), c);
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
function Fa(e, t) {
  return Me.isValidMarker(e, t) || !!Ch[e] || Ye.isValidMarker(e, t) || ye.isValidMarker(e, t);
}
function ZS(e, t) {
  return ye.isNoteContentMarker(e) ? !1 : ye.isValidMarker(e, t);
}
function Sh(e, t, r, n, i, s) {
  const o = Lp(
    e,
    void 0,
    void 0,
    t,
    n ?? po(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function za(e, t, r, n, i, s, o) {
  if (Me.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Sh(
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
  const a = sv(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      P(u) && (vp(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = uu(d, Ur, r), m = Io(p);
      if (P(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), x = fn(g), v = u.anchor.key === u.focus.key;
        if (R(m) && x && v && !ia(m, o))
          rv(
            u,
            m,
            g,
            r?.markerMode === "editable"
          );
        else if (R(m) && !v && !ia(m, o) && nv(u))
          iv(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          ov(
            u,
            () => Io(p)
          );
        else if ($(m) && !m.isInline()) {
          const k = u.insertParagraph();
          if (k) {
            const M = k.getChildren();
            m.append(...M), k.replace(m), Ce(m) && ni(m) || m.selectStart();
          }
        } else if (R(m) && E(g) && !A(g) && R(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        ia(m, o)) {
          const k = g.getParent();
          if (R(k)) {
            const M = u.anchor.offset;
            if (M === 0) g.insertBefore(m);
            else if (M >= g.getTextContentSize()) g.insertAfter(m);
            else {
              const [_] = g.splitText(M);
              _.insertAfter(m);
            }
            m.getChildren().forEach((_) => {
              A(_) && _.setNested(!0);
            });
            const L = m.getChildren().find((_) => E(_) && !A(_));
            L && E(L) ? L.select(
              L.getTextContentSize(),
              L.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (E(g) && !A(g) && u.isCollapsed() && (z(y) || R(y) && z(y.getParent()))) {
          const k = R(y) ? y : void 0, M = k ? ev(g, u.anchor.offset) : [];
          let _ = (k ?? g).insertAfter(m);
          if (Tr(m)) {
            const F = {
              ...r || po(),
              markerMode: "hidden"
            }, U = uu(
              d,
              Ur,
              F
            ), B = Io(U);
            _ = _.insertAfter(B);
          }
          if (M.length > 0 && k) {
            const F = Ks(k).append(...M);
            _.insertAfter(F), k.isEmpty() && k.remove();
          } else E(_.getNextSibling()) || _.insertAfter(pe(O));
          $(_) && _.selectEnd();
        } else if (u.insertNodes([m]), mv(m), f) {
          const k = jd();
          k.add(m.getKey()), Ni(k);
        } else if (R(m)) {
          const k = m.getChildren().find((M) => E(M) && !A(M));
          k && E(k) ? k.select(
            k.getTextContentSize(),
            k.getTextContentSize()
          ) : m.selectEnd();
        } else {
          const k = m.getNextSibling();
          k ? k.selectStart() : m.selectStart();
        }
      } else
        u?.insertNodes([m]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function ev(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function ia(e, t) {
  return ((t ?? Rs).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function tv(e, t) {
  t && e.getChildren().forEach((i) => {
    A(i) && i.setNested(!0);
  }), e.getChildren().some((i) => A(i) && i.getMarkerSyntax() === "closing") || e.append(at(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function rv(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && R(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !E(r)) {
    const o = e.anchor.offset;
    if (E(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else E(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = Jn(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Vn(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(O) && i.setTextContent(O + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !A(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !A(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function nv(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (A(n) || R(n)) continue;
    if (!E(n) || n.getType() !== Ue.getType() || te(n, oe) === "attribute") return !1;
    const i = Mc(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    fn(n) && (r = !0);
  }
  return r;
}
function iv(e, t, r) {
  const n = xh(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!fn(a)) return;
    Vn(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(O) && c.setTextContent(l.slice(O.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(O) || i.setTextContent(O + i.getTextContent());
  const s = t.getChildren().find((a) => E(a) && !A(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function sv(e, t) {
  let r = Ch[e];
  return r || (Ye.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Ye.getType(), marker: e, content: [] }] })
  } : ye.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ye.getType(), marker: e };
      return (ye.isValidFootnoteMarker(e) || ye.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function ov(e, t) {
  const r = e.getNodes(), [n, i] = Jn(e);
  let s;
  r.forEach((o, a) => {
    if ($(s) && s.isParentOf(o))
      return;
    const c = vh(
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
    s || (s = t(), c.insertBefore(s), l = !0, R(s) && s.getChildren().some((d) => A(d) && d.getMarkerSyntax() === "opening") && tv(s, R(s.getParent()))), cv(c, s, l);
  }), (E(s) || $(s)) && s.selectEnd();
}
function Jn(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function el(e) {
  return _e(e) || z(e) || z(e.getParent());
}
function vh(e, t, r, n, i) {
  if (!el(e)) {
    if (E(e))
      return av(e, t, r, n, i);
    if ($(e) && e.isInline())
      return e;
  }
}
function av(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function cv(e, t, r) {
  if (E(t)) {
    const n = Ka(e, t);
    t.setTextContent(n), e.remove();
  } else if ($(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => A(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !A(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    Ka(e, t), r && R(t) && t.getChildren().some((s) => A(s)) && E(e) && !A(e) && !e.getTextContent().startsWith(O) && e.setTextContent(O + e.getTextContent());
  }
}
function Ka(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Nc(n), E(n) || t.insertBefore(pe(" "));
  }
  return r;
}
function Mh(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = gn(u, t);
    if (!f) return !1;
    const p = E(u) ? u.getTextContentSize() : 0;
    if (sd(f, r), E(u) && u.isAttached()) {
      const m = u.getTextContentSize(), g = Math.max(p - m, 0), y = Math.max(0, Math.min(d - g, m)), x = w();
      P(x) && x.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Jn(e);
  if (!rl(n, t, s, o)) return !1;
  const a = tl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = gn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Oh(d, a);
    f && (sd(f, r), l = !0);
  }), Nh(a, i), l;
}
function sd(e, t) {
  e.getChildren().forEach((n) => {
    $t(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === qt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    E(n) && i.startsWith(O) && n.setTextContent(i.slice(O.length));
  }), da(e);
}
function tl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = vh(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function gn(e, t) {
  let r = e, n;
  for (; r && !Ce(r); ) {
    if (z(r)) return;
    !n && R(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Eh(e) {
  const t = ot(
    e,
    (r) => z(r) || Ce(r)
  );
  return z(t);
}
function Ah(e) {
  return e.filter(
    (t) => !el(t) && (E(t) || $(t) && t.isInline())
  );
}
function lv(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || el(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function uv(e, t, r) {
  return e.getChildren().some(
    (n) => $(n) && t.some((i) => n.isParentOf(i)) && !Ph(n, r)
  );
}
function rl(e, t, r, n, i) {
  const s = Ah(e), o = lv(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = gn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !uv(l, s, o);
  });
}
function Ph(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || $t(r));
}
function Oh(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if ($(u) && t.some((d) => u.isParentOf(d))) {
      if (!Ph(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && $t(n[s - 1]) && (s -= 1), o < n.length - 1 && $t(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Ks(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Ks(e).append(...c)), e;
}
function Ks(e) {
  return Pm(e);
}
function Nh(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function dv(e, t, r) {
  if (e.isCollapsed()) {
    const l = gn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Xl(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Jn(e);
  if (!rl(n, r, i, s, t)) return !1;
  const o = tl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = gn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Oh(u, o);
    d && (Xl(d, t), c = !0);
  }), c;
}
function fv(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = Jn(e);
  if (!!!i?.some(
    (y) => rl(s, y, o, a)
  ) && !pv(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const x = w();
    P(x) && Mh(x, y, n) && (l = !0);
  });
  const u = w();
  if (!P(u)) return l;
  const d = u.isBackward(), [f, p] = Jn(u), m = tl(
    u.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const g = m.filter(
    (y) => !Eh(y) && !gn(y, t)
  );
  return g.length > 0 && (hv(g).forEach((y) => gv(y, t)), l = !0), Nh(m, d), l;
}
function pv(e, t) {
  return Ah(e).some(
    (r) => !Eh(r) && !gn(r, t)
  );
}
function hv(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function gv(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => R(a) && a.getMarker() === t
  ), s = i ? Ks(i) : hr(t);
  e[0].insertBefore(s), s.append(...e), i === r || Ka(e[0], s);
}
function mv(e) {
  ge(e) && (Nc(e.getPreviousSibling()), Pp(e.getNextSibling()));
}
const wh = {
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
}, od = "psc-active-text", ms = "psc-empty-text";
function yv({ viewOptions: e }) {
  const [t] = le(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return K(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(od), r.current = o, o && t.getElementByKey(o)?.classList.add(od);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Ys,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${ms}`);
          if (!c) return !1;
          const l = Yi(c);
          if (!ge(l)) return !1;
          const u = l.getParent();
          if (!$(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Nt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = sa(), f = bv(), p = [], m = [];
          return Fe().getChildren().forEach((g) => {
            if (!$(g)) return;
            const { emptyKeys: y, nonEmptyKeys: x } = Tv(g);
            p.push(...y), m.push(...x);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(ms) : t.getElementByKey(d)?.classList.add(ms);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(ms));
      }),
      t.registerCommand(
        sc,
        () => (i(void 0), !1),
        Nt
      ),
      t.registerCommand(
        Om,
        () => {
          const o = t.getEditorState().read(sa);
          return o !== r.current && i(o), !1;
        },
        Nt
      )
    ];
    return i(t.getEditorState().read(sa)), Je(...s);
  }, [t, n]), null;
}
function sa() {
  return kv(w() ?? void 0)?.getKey();
}
function bv() {
  const e = w();
  if (!P(e)) return;
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
    ge(s[a]) && (o = s[a].getKey());
  return o;
}
function kv(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function Tv(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ge(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ge(c)) break;
      if (!(Vt(c) || A(c)) && c.getTextContent().replaceAll(vs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const xv = /^\+/;
function nl(e, t) {
  const r = t.replace(xv, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function qh(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Rh(e, t) {
  return qh(e, t) !== void 0;
}
function ja(e, t) {
  const r = qh(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function js(e, t, r) {
  const n = $(e) ? e.getChildren().filter(A) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function _v(e, t, r, n, i) {
  const s = nl(n, t);
  if (!s) {
    js(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && js(e, "invalid", i);
}
function Ai(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (R(s)) {
      const o = s.getMarker();
      i || _v(s, o, t, r, n), Ai(s, t, r, n, i || o === "xq");
    } else if (ge(s)) {
      if (i) continue;
      const o = nl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else z(s) ? Ai(s, s.getMarker(), r, n, i) : Ie(s) || $(s) && Ai(s, t, r, n, i);
}
function Cv(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = nl(e, a);
    if (!c) {
      js(o, "unknown", r), ja(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    ja(n, l) || js(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Fe().getChildren())
    Ie(o) || (bt(o) || Ve(o) ? i(o, o.getMarker()) : ae(o) ? (i(o, o.getMarker()), s(o) && Ai(o, o.getMarker(), e, r, !1)) : $(o) && s(o) && Ai(o, "p", e, r, !1));
  return r;
}
function Sv(e) {
  return !!e?.includes("(basic)");
}
function vv(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function $h(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Fa(e, t);
}
function il(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Ih(e, t) {
  const r = [];
  for (const n of t) {
    const i = il(e, n);
    i && ja(r, i);
  }
  return r;
}
function xs(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: vv(e.description),
    isBasic: Sv(e.description)
  };
}
function Mv(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Ba(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : Mv(e.marker, t.marker);
}
function Va(e, t, r) {
  if (t.noteMarker) return [];
  const n = Ih(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && $h(i.marker, r)
  ).filter((i) => {
    const s = il(e, i.marker);
    return s !== void 0 && Rh(n, s);
  }).map((i) => xs(i, "paragraph")).sort(Ba);
}
function Ev(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => $h(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => xs(c, "character")).sort(Ba);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => xs(c, "character")),
    ...a.map((c) => xs(c, "note"))
  ].sort(Ba);
}
function Av(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function Pv(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function Ov(e, t, r) {
  return [
    ...Av(e, t.openCharMarkers),
    ...Ev(e, t, r)
  ].sort(Pv);
}
function Nv(e, t, r) {
  if (t.source === "paragraph") return Va(e, t, r);
  const n = Ov(e, t, r);
  return n.length > 0 ? n : Va(e, t, r);
}
function wv(e, t, r) {
  const n = Va(e, t, r), i = Ih(e, t.previousParaMarkers), s = il(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Rh(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const Cn = String.raw`\w-`, Lh = "a-z0-9", qv = `[a-z][${Lh}]*`, Rv = new RegExp(
  String.raw`^\\(\+?[${Cn}]+)[ \u00A0]$`
), Dh = new RegExp(String.raw`^\\(\+?[${Cn}]+)$`), $v = new RegExp(String.raw`^\\\+?[${Cn}]*\*$`), Iv = new RegExp(
  String.raw`^\\(\+?[${Cn}]+)(?:[ \u00A0]|$)`
), Lv = new RegExp(
  String.raw`^\\(\+?)([${Cn}]+)`
), Dv = new RegExp(
  String.raw`\\\+?[${Cn}]+(?:\\?\*|[ \u00A0])`
), Uv = new RegExp(
  String.raw`\\\+?[${Cn}]*$`
), Fv = new RegExp(
  String.raw`^\\(${qv})( |$)`
), zv = new RegExp(
  String.raw`\\[${Lh}+*]*$`,
  "i"
), et = "￼";
function Uh(e) {
  return e.length > 1 && e.startsWith(O) && e.charAt(1) !== et ? e.slice(1) : e;
}
function ad(e) {
  return Tc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Fh(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Ur.serializeEditorState(
    {
      type: dr,
      version: ur,
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
  for (; ad(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== xt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && ad(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function ys(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function bi(e, t) {
  Uv.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += et;
}
function Ot(e) {
  return e.replaceAll(O, " ");
}
function Kv(e, t, r = !1) {
  if (ts(t)) return Ot(e);
  if (e === O) return " ";
  const n = r && e.startsWith(O), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(O, "~");
}
function Pi(e) {
  const t = e.getTextContent();
  return Tn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function sl(e, t) {
  const r = e[t];
  if (!ze(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = so(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!A(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function zh(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function ol(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Ii(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function al(e) {
  return !!e.getUnknownAttributes();
}
function mo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Qs(e);
}
function Kh(e, t) {
  return ze(e) ? !mo(e.getMarker(), t) : z(e) || Ie(e) ? !0 : Oe(e) ? al(e) : R(e) ? jh(e, t) : !1;
}
function jh(e, t) {
  if (Ub(e)) return !0;
  const r = e.getMarker();
  return !Sy(r) && t(r) === void 0;
}
const At = "", Pt = "";
function cd(e) {
  return e.flatMap((t) => Ke(t) ? t.getChildren() : [t]);
}
function Ci(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (ze(s)) {
      const o = sl(e, i);
      mo(s.getMarker(), r) && zh(o) ? (t.push(
        At,
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
      ), Ci(cd(o), t, r), t.push(Pt)) : t.push(et), i += o.length;
    } else if (Oe(s)) {
      const o = ol(e, i);
      al(s) ? t.push(et) : (t.push(
        At,
        "verse",
        Ot(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ci(cd(o), t, r), t.push(Pt)), i += o.length;
    } else A(s) ? t.push(At, "marker", Ot(s.getTextContent()), Pt) : Kr(s) ? t.push(At, "unmatched", Ot(s.getTextContent()), Pt) : Kh(s, r) ? t.push(et) : Js(s) ? t.push(" ") : E(s) ? t.push(
      Ot(
        n ? Uh(Pi(s)) : Pi(s)
      )
    ) : R(s) ? (t.push(At, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ci(s.getChildren(), t, r, !0), t.push(Pt)) : $(s) ? (t.push(At, s.getType()), Ci(s.getChildren(), t, r), t.push(Pt)) : t.push(et);
  }
}
function ii(e, t) {
  const r = [];
  return Ci(e, r, t), r.join("");
}
function mr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Yn(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function cl(e) {
  return e.type ?? "";
}
function Bh(e, t, r) {
  return t === "closing" ? tt(e, r) : t === "selfClosing" ? tt("") : Ne(e, r);
}
function oa(e, t) {
  const r = e[t];
  if (!(!r || cl(r) !== "attribute-run"))
    return mr(r) ?? [];
}
function si(e, t) {
  const r = [];
  return Si(e, r, t), r.join("");
}
function Si(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = cl(s);
    if (o === "ms") {
      const l = s, u = oa(e, i + 1);
      u && mo(l.marker ?? "", r) ? (t.push(
        At,
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
      ), Si(u, t, r), t.push(Pt), i += 1) : t.push(et);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(et);
        continue;
      }
      t.push(
        At,
        "verse",
        Ot(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = oa(e, i + 1 + u);
      for (; d; )
        Si(d, t, r), u++, d = oa(e, i + 1 + u);
      t.push(Pt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        At,
        "marker",
        Ot(
          Bh(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Pt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(At, "char", JSON.stringify(l.unknownAttributes ?? null)), Si(mr(s) ?? [], t, r, !0), t.push(Pt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(et);
      continue;
    }
    if (o === "unmatched") {
      t.push(At, "unmatched", Ot(Yn(s) ?? "")), t.push(Pt);
      continue;
    }
    const a = Yn(s);
    if (a !== void 0) {
      t.push(Ot(n ? Uh(a) : a));
      continue;
    }
    const c = mr(s);
    c ? (t.push(At, o), Si(c, t, r), t.push(Pt)) : t.push(et);
  }
}
function yo(e) {
  let t = 0;
  for (const r of e) {
    const n = mr(r);
    if (n) {
      t += yo(n);
      continue;
    }
    const i = Yn(r);
    if (i !== void 0)
      for (const s of i) s === et && t++;
  }
  return t;
}
function ji(e, t, r, n, i) {
  mn(e.getChildren(), t, r, n, i);
}
function mn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (A(a))
      ys(t, a, Ot(a.getTextContent()));
    else if (ze(a)) {
      s();
      const c = sl(e, o);
      mo(a.getMarker(), r) && zh(c) ? mn(c, t, r, n) : bi(t, [a, ...c]), o += c.length;
    } else if (z(a) || Ie(a))
      s(), bi(t, [a]);
    else if (Oe(a)) {
      s();
      const c = ol(e, o);
      al(a) ? bi(t, [a, ...c]) : (ys(t, a, Ot(Pi(a))), mn(c, t, r, n)), o += c.length;
    } else if (R(a))
      s(), jh(a, r) ? bi(t, [a]) : ji(a, t, r, n, { pending: !0 });
    else if (Js(a))
      s(), ys(t, a, " ");
    else if (E(a)) {
      const c = Tn(a) || te(a, oe) === "attribute", l = s() && !c;
      ys(
        t,
        a,
        c ? Ot(Pi(a)) : Kv(Pi(a), n, l)
      );
    } else $(a) ? ji(a, t, r, n, i) : (s(), bi(t, [a]));
  }
}
function ll(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ie(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ji(e, i, t, r), i;
}
function Vh(e, t) {
  let r = 0;
  const n = (i) => {
    if (E(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(et);
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
function Wa(e, t = []) {
  for (const r of e)
    Oe(r) ? t.push(r) : $(r) && Wa(r.getChildren(), t);
  return t;
}
function Wh(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === et && t++;
    else $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Sn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === et && t++;
    else r.content && (t += Sn(r.content));
  return t;
}
function jv(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), $(i) && ji(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const Bi = /\s/;
function Hh(e) {
  return e.filter(bo).length;
}
function bo(e) {
  if (e.isSentinel) return !1;
  const t = re(e.key);
  return E(t) && !A(t) && te(t, oe) === "attribute";
}
function Bv(e) {
  if (e.isSentinel) return !1;
  const t = re(e.key);
  return A(t) || bo(e);
}
function ld(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && bo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      Bi.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function ul(e, t, r) {
  const n = ld(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !Bv(i) ? ld(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Hh(e.spans) };
}
function aa(e) {
  if (e.isSentinel) return !1;
  const t = re(e.key);
  return A(t) && t.getMarkerSyntax() !== "opening";
}
function Vv(e) {
  const t = re(e.key);
  if (!A(t)) return !1;
  const r = t.getParent();
  return R(r) ? (r.selectNext(0, 0), !0) : !1;
}
function Wv(e) {
  const t = re(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Oe(t) ? ol(r, n) : ze(t) ? sl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Gh(e, t, r) {
  const { text: n, spans: i } = e, s = Hh(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !aa(d);
    if (!(o && bo(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const g = n[d.start + m];
        if (c === 0 && (l === 0 || !Bi.test(g))) {
          if (p) {
            a = { key: d.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? Bi.test(g) || c-- : l--;
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
    if (d && aa(d) && Vv(d) || d?.isSentinel && Wv(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !aa(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = re(a.key);
    if (d && E(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find($)?.selectStart();
}
function Jh(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find($)?.selectStart();
      return;
    }
    Gh(jv(e, n, i), t, e);
  }
}
function Hv(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find($)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  mn(e, s, n, i), Gh({ text: s.text, spans: s.spans }, t, e);
}
function Yh(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = ll(g, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const x = s.text.length;
    y.spans.forEach(
      (v) => s.spans.push({ ...v, start: v.start + x, end: v.end + x })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = w();
  if (P(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = ul(s, c.anchor.key, c.anchor.offset));
  }
  const l = br(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Sn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Ur.serializeEditorState(
    { type: dr, version: ur, content: l },
    r
  );
  if (si(u.root.children, n) === ii(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => Hs(g));
  if (Wh(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Wa(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), Vh(d, s.sentinels), e.forEach((g) => g.remove());
  const m = Wa(d);
  for (let g = 0; g < f.length && g < m.length; g++)
    m[g].getNumber() === f[g].number && m[g].setSid(f[g].sid);
  return Jh(d, o, a, n, r), !0;
}
function Xh(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Me.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!A(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(sr(s) || E(s) && s.getTextContent() === xt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!A(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return mn(c, l, t, r), { out: l, contentNodes: c };
}
function Qh(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(et)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function Gv(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Xh(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (P(u)) {
    for (let M = u.anchor.getNode(); M; M = M.getParent())
      if (e.is(M)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = ul(o, u.anchor.key, u.anchor.offset));
  }
  const d = br(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Sn(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = Qh(p), g = Fh(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (yo(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), si(g.children, n) === ii(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const x = g.children.map((M) => Hs(M));
  if (Wh(x) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const v = a[0];
  if (v)
    x.forEach((M) => v.insertBefore(M));
  else {
    const M = e.getChildren().find((L) => A(L) && L.getMarkerSyntax() === "closing");
    x.forEach((L) => M ? M.insertBefore(L) : e.append(L));
  }
  Vh(x, o.sentinels);
  const k = new Set(o.sentinels.flat().map((M) => M.getKey()));
  return a.forEach((M) => {
    k.has(M.getKey()) || M.remove();
  }), Hv(x, c, l, n, r), !0;
}
const Zh = /* @__PURE__ */ new Set(["ca", "cp"]), dl = "cp";
function eg(e) {
  if (!er(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ji(e, t, Zt, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = br(r, { getMarker: Zt }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === dl)
  );
}
function ko(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (R(r) && Zh.has(r.getMarker()) || eg(r)) {
      t.push(r);
      continue;
    }
    ae(r) && r.getMarker() === dl && t.push(r);
    break;
  }
  return t;
}
function Jv(e) {
  const t = (n) => R(n) && Zh.has(n.getMarker()) || eg(n);
  if (t(e) || ae(e) && e.getMarker() === dl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Re(n)) return n;
      if (!t(n)) return;
    }
}
function tg(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = ko(e);
  if (n.some((s) => ae(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (mn(e.getChildren(), i, t, r), mn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function Yv(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...ko(e)], o = tg(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (P(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((g) => g.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = ul(o, l.anchor.key, l.anchor.offset));
  }
  const u = br(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Sn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Ur.serializeEditorState(
    { type: dr, version: ur, content: u },
    r
  );
  if (si(f.root.children, n) === ii(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => Hs(m));
  return Re(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Jh(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Vi(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ie(n)) return;
    !t && (z(n) || ae(n) || Re(n)) && (t = n), Nm(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? Jv(r) : void 0) ?? t;
}
function zt(e, t) {
  const r = Vi(e);
  return r ? z(r) ? Gv(r, t) : Re(r) ? Yv(r, t) : Yh([r], t) : !1;
}
const Xv = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function ud(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !Xv.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function _s(e, t) {
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
          t.push(`\\${n}`), ud(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), _s(r.content, t), ud(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), _s(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), _s(r.content, t);
      }
    }
}
function dd(e, t, r) {
  const n = Vi(e);
  if (!ae(n)) return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = ll(n, t, r);
  if (!o) return !1;
  const a = br(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    Bi.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  _s(a, l);
  for (const u of l.join("").replaceAll(O, "~")) {
    if (Bi.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function Qv(e) {
  return [at(e), ro()];
}
function fl(e) {
  Ht(e, 2);
}
function Zv(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function pl(e) {
  const t = Zv(e);
  e.splice(0, 0, Qv(e.getMarker())), t && fl(e);
}
function Bs(e, t) {
  e.setMarker(t), pl(e), fl(e);
}
function eM(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Tn(n)) {
    if (E(n) && !A(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(O), gt(n, oe, rr), n.setMode("token");
      return;
    }
    if (Wf(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(ro());
  }
}
function fd(e, t, r) {
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
function Oi(e) {
  for (let t = e; t; t = t.getParent())
    if (ae(t)) return t;
}
function tM(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Oi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Oi(r.getNode())?.is(s) ?? !1, a = Oi(n.getNode())?.is(s) ?? !1;
    return !(o && !fd(r, s, "start") || a && !fd(n, s, "end"));
  });
}
function Ha(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of tM(r)) t.add(n.getKey());
}
function rM(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!P(r) || !r.isCollapsed()) return;
  const n = Oi(r.focus.getNode());
  n && t.add(n.getKey());
}
function nM(e) {
  const t = w();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => A(r)) && (Ha(e), t.removeText());
}
function iM(e, t) {
  if (!ti(t.viewOptions)) return;
  if ($t(e.getFirstChild())) {
    eM(e, t);
    return;
  }
  if (t.splitExpected.current) {
    pl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ae(o) && !o.is(e))) {
      Bs(e, Qt), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ae(r)) {
    const n = e.getChildren().filter((a) => !Tn(a)), i = w();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Oi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || $(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Ht(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Bs(e, Qt);
}
function sM(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Xt(t, Zs(e.getMarker()));
  return r === "" ? void 0 : r;
}
function oM(e) {
  const t = e.getChildren().filter((s) => !A(s) && te(s, oe) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(O) && r.setTextContent(r.getTextContent().slice(1));
  const n = sM(e);
  n && t.push(pe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function aM(e, t) {
  const r = e.getChildren(), n = r.some((s) => A(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !A(c) && c.getTextContent() === xt(s)
    ), a = Xn(e).some(({ node: c }) => A(c));
    if (!o && !a) return;
    r.forEach((c) => {
      A(c) || (E(c) && c.getTextContent() === xt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => A(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function cM(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(A(r) && r.getMarkerSyntax() === "opening")) {
    oM(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => A(o) && o.getMarkerSyntax() === "closing");
  i && !s && zt(e, t);
}
function rg(e, t, r) {
  if (!A(e.getFirstChild()) && r?.markerMode === "editable" && ti(r)) {
    Bs(e, t);
    return;
  }
  jp(e, t);
}
function ng() {
  const e = w();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = ig(e);
    return t !== "removed" ? t : (Ga(), "handled");
  }
  return Ga() ? "handled" : "declined";
}
function lM(e, t) {
  if (!t) return e;
  const r = Fv.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function pd(e, t) {
  const r = w();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!sg())
      return "declined";
  } else {
    const s = ig(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => lM(s, t)
  );
  hd(n ?? "");
  for (const s of i)
    Ga(), hd(s);
  return "handled";
}
function uM(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Yi(n);
  if (!i) return !1;
  const s = Wt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || A(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function ig(e) {
  const t = Wt(e.anchor.getNode()), r = Wt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), dM() ? "removed" : "needs-plain-split");
}
function hd(e) {
  if (e === "") return;
  const t = w();
  P(t) && t.insertText(e);
}
function dM() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Wt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => A(r) && r.getMarkerSyntax() === "opening");
}
function sg() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Wt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Ga() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = sg();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = hr("fp", { closed: "false" });
  i.append(at("fp"));
  const s = E(t) && !A(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Vn(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (Pb(u), i.append(u));
  }
  return i.getChildren().every(A) && i.append(pe(qt)), og(i), !0;
}
function og(e) {
  const t = e.getChildren().find((r) => !A(r));
  if (E(t)) {
    const r = t.getTextContent().startsWith(O) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if ($(t)) {
    og(t);
    return;
  }
  e.selectEnd();
}
function fM(e) {
  const t = [];
  let r = e;
  for (; r; )
    R(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function pM(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Fe().getChildren()) {
    if (t && n.is(t)) break;
    (bt(n) || Ve(n) || ae(n)) && r.push(n.getMarker());
  }
  return r;
}
function hM(e) {
  let t = e;
  for (; $(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function gM(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if ($t(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Tn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(hM(i)) && r === 0 : !1;
}
function mM(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !$t(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Tn(i) && t.is(i) && r === 0;
}
function yM() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function bM() {
  const e = w();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = ot(t, ae), s = !n && (!i || mM(i, t, r)) ? "paragraph" : "character", o = Wt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: pM(t),
    openCharMarkers: fM(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Pc(t, r),
    anchorRect: yM()
  };
}
function kM() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || A(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = zv.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function TM(e, t, r) {
  rg(e, t, r), fl(e);
}
function xM(e, t, r) {
  const n = w();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = ot(i, ae);
  if (t === "backslash" && s && gM(s, i, n.focus.offset)) {
    TM(s, e, r);
    return;
  }
  cg(e, r);
}
function _M(e, t) {
  const r = w();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function ag(e) {
  const t = w();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function CM(e, t, r, n) {
  if (P(w()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && kM(), e.kind === "closeTag") {
    ag(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && ng() !== "declined") return;
  if (e.kind === "paragraph" && Ye.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    xM(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Me.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Sh(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  za(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Ji(), reference: r });
}
function cg(e, t) {
  const r = w();
  if (!P(r)) return;
  const n = ti(t);
  if (_h()) {
    const s = w();
    if (!P(s)) return;
    const o = ot(s.anchor.getNode(), ae);
    if (!o) return;
    o.setMarker(e), n && pl(o);
    return;
  }
  const i = r.insertParagraph();
  ae(i) && (n ? Bs(i, e) : i.setMarker(e));
}
function SM() {
  const [e] = le();
  return K(() => e.registerCommand(Wd, () => !0, Nt), [e]), null;
}
function lg(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Me.isValidMarker(r) || Qs(r));
}
function vM(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Me.isValidMarker(r) || Qs(r));
}
function MM(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = Iv.exec(e)?.[1];
  return r === void 0 ? !1 : !lg(r, t);
}
function ug(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !MM(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ae(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ae(i))
    return [i, r];
}
function dg(e, t) {
  const r = ug(e, t.getMarker);
  return r !== void 0 && Yh(r, t);
}
function EM(e, t) {
  const r = w();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function fg(e) {
  const t = Lv.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function AM(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = fg(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function PM(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (z(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if (R(n)) {
      Ec(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function gd(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = fg(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  PM(e);
}
function md(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function pg(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return zt(e, r);
  const n = AM(e), i = e.getParent();
  if (ae(i)) {
    if (!lg(t, r.getMarker))
      return dg(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : zt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), md(s, t) && gd(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (R(i) || z(i)) {
    const s = t.replace(/^\+/, "");
    if (!(R(i) ? vM(t, r.getMarker) : Me.isValidMarker(s)))
      return zt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return zt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(A).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (EM(c, tt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), md(a, s) && gd(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return zt(e, r);
}
function OM(e) {
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
function NM(e, t) {
  const r = e.getTextContent();
  if (zr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ke(e.getParent()) && xc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !OM(e)) {
    Ib(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = Rv.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), pg(e, n[1], t);
      return;
    }
    if ($v.test(r)) {
      t.pendingKeys.delete(e.getKey()), zt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = tt(e.getMarker(), e.getNested());
    if (R(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = pe(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function wM(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (pp(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function hg(e) {
  if (!sf(e)?.length)
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
const ki = hg("v"), qM = hg("c"), yd = /^[ \u00A0]*$/;
function bd(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === Ue.getType() && n.getMode() === "normal" && te(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = pe(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function RM(e, t) {
  const r = e.getTextContent(), n = wt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (ki.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = ki.valueAndRest.exec(c);
    if (l && yd.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (ki.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = ki.valueAndRest.exec(r);
  if (!s) {
    const c = ki.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = w(), p = P(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(wt("v", u));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      bd(e, d, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), zt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), yd.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(wt("v", o)), a && bd(e, a, a.length);
}
const $M = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function IM(e, t) {
  const r = e.getParent();
  if (!z(r) || r.getIsCollapsed() !== !1 || !sf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!A(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === xt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = $M.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(xt(a)), !0;
}
function LM(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = wt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = qM.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function gg(e) {
  if (ze(e)) {
    const { wrapper: t } = so(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (z(e)) {
    const { wrapper: t } = ep(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Re(e)) {
    const t = [], r = tp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = np(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Oe(e)) {
    const t = [], r = Ii(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Ii(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function DM(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return gg(e).some((n) => r.is(n));
}
function UM(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ae(e) && Wf(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Di)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && es(l, e) && (i || DM(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of gg(e))
    l.remove(), n = !0;
  let s = !1;
  if (R(e)) {
    const l = Kb(e);
    l !== void 0 && Ty(l) && (op(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Di)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (Lk(l, e)) {
        Fi(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && _p(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      lo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function kd(e) {
  return E(e) && e.getType() === Ue.getType() && e.getMode() === "normal" && te(e, oe) !== "attribute";
}
function FM(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = re(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && kd(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && kd(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function bs(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = FM(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = re(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (A(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (zr(c)) continue;
      const m = Dh.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = pg(c, m[1], e) || n : r === "idle" && dd(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : dg(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = zt(c, e) || n;
      continue;
    }
    const l = dn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = UM(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && dd(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = zt(u, e) || n;
    }
  }
  return n;
}
function mg(e) {
  if (Kr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (R(t)) return vi(t) !== void 0;
  return !1;
}
function zM(e) {
  const t = dn(e);
  if (!t) return !1;
  const r = un(t.kind);
  return !lo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Td(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (bt(t) || Ie(t) || mp(t)) return !0;
  return !1;
}
function KM(e, t) {
  const r = e.getTextContent(), n = te(e, oe), i = e.getParent();
  if (n !== "attribute" && Re(i)) {
    r.replace(/^[ \u00A0]+/, "") === wt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (IM(e, t)) return;
  if (n === "attribute") {
    zM(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && mg(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Td(e))
      t.pendingKeys.add(e.getKey());
    else if (ip(e)) t.pendingKeys.add(e.getKey());
    else if (Re(Vi(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      R(a) && ap(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Td(e)) return;
  const s = w(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (Dv.test(o)) {
    if (Py(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), zt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function jM(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : _p(e, t);
}
function BM(e) {
  const t = (r) => {
    if (A(r)) {
      zr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Kr(r)) {
      pp(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Di)
      n.settleScope !== "none" && n.ownerPredicate(r) && (es(n, r) || jM(n, r)) && e.pendingKeys.add(r.getKey());
    if (Oe(r)) {
      r.getTextContent() !== wt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== Ue.getType() || te(r, oe) === "attribute") return;
      const n = r.getParent();
      if (Re(n)) {
        r.getTextContent() !== wt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && mg(r) || i.includes("//") || ip(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (R(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ie(r) && !bt(r)) {
      if (Ke(r) && r.getChildrenSize() === 0) {
        const n = dn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      $(r) && r.getChildren().forEach(t);
    }
  };
  Fe().getChildren().forEach(t);
}
function VM(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = te(e, oe);
  if (r === "attribute" || r === rr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (bt(o) || Re(o) || Ie(o)) return;
  const n = t.startsWith(O) && R(e.getParent()), i = n ? t.slice(1) : t, s = (n ? O : "") + i.replace(/ (?=[ \u00A0])/g, O).replace(new RegExp("(?<=\\u00A0) ", "g"), O);
  s !== t && e.setTextContent(s);
}
function WM(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function Ja(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(WM(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function HM(e) {
  const t = Ja(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(O) ? r : n.includes(O) || i.includes(O) ? i : void 0;
  if (!s) return !1;
  const o = w();
  if (!P(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(O, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = Ji();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Cs, void 0), u === "") return;
    const f = w();
    P(f) && f.insertText(u);
  }), !0;
}
function GM(e) {
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
function JM(e) {
  const t = w();
  if (!P(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(O, " ")
  }, n = $m(e), i = Im(e);
  return n && (r["text/html"] = GM(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function xd(e, t, r) {
  const n = w();
  if (!P(n) || n.isCollapsed()) return !1;
  const i = JM(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return Rm(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const yg = Hd(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function ca(e) {
  const t = e();
  return qr(Ud), qr(lf), t;
}
const _d = 8, YM = 1e3;
function Ln(e, t) {
  const r = Oe(e) ? ["va", "vp"] : ze(e) ? ["milestone"] : z(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    Kk(un(n), e, t.pendingKeys);
}
function XM(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(oc) || i.updateTags.has(wi)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = re(o);
        if (!c) continue;
        const l = dn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = re(o.getKey());
        c?.isAttached() && un(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Je(
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
    e.registerMutationListener(Ue, r),
    e.registerMutationListener(ir, r),
    e.registerMutationListener(kr, r),
    e.registerMutationListener(xr, r)
  );
}
function QM(e, t, r) {
  return Je(
    e.registerCommand(
      cr,
      (n) => {
        if (Yp()) return !1;
        const i = Ja(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(O, "~") : s).split(`
`);
          let c = pd(a, t.getMarker);
          if (c === "declined" && uM(e) && (c = pd(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      lr
    ),
    e.registerCommand(
      cr,
      (n) => {
        const i = Ja(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !QS()) return !1;
        n?.preventDefault();
        const o = w();
        return P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Cs, void 0), a === "") return;
          const l = w();
          P(l) && l.insertText(a);
        }), !0;
      },
      $e
    ),
    e.registerCommand(
      cr,
      () => (t.splitExpected.current = !0, !1),
      Nt
    )
  );
}
function ZM({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = le(), s = e?.markerMode === "editable", o = !!e && ts(e), a = Z(void 0), c = Z(n);
  return K(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? Zt, l.logger = r);
  }, [e, t, r, n]), K(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? Zt,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const u = qk(i, l.pendingKeys);
    let d, f = !1, p, m = !1, g = !1, y = 0;
    const x = () => y < _d ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${_d} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), v = (_, F = "departure") => {
      i.update(() => {
        y = ca(
          () => bs(l, _, F)
        ) ? y + 1 : 0;
      });
    };
    let k;
    const M = () => {
      if (k !== void 0 && clearTimeout(k), k = void 0, g || l.pendingKeys.size === 0) return;
      const _ = c.current ?? YM;
      _ < 0 || (k = setTimeout(() => {
        k = void 0, !(g || l.pendingKeys.size === 0) && (f || x() || v(void 0, "idle"));
      }, _));
    }, L = Je(
      i.registerNodeTransform(ir, (_) => {
        if (i.isComposing()) return;
        NM(_, l);
        const F = dn(_);
        F && (Oe(F.owner) || z(F.owner) || Re(F.owner) || ze(F.owner) && so(F.owner).wrapper === void 0) && Ln(F.owner, l);
      }),
      i.registerNodeTransform(ut, (_) => {
        i.isComposing() || (RM(_, l), Ln(_, l));
      }),
      i.registerNodeTransform(vt, (_) => {
        i.isComposing() || (LM(_), _.isAttached() && Ln(_, l));
      }),
      i.registerNodeTransform(Ye, (_) => {
        i.isComposing() || iM(_, l);
      }),
      i.registerNodeTransform(ye, (_) => {
        if (!i.isComposing()) {
          cM(_, l);
          for (const F of ["separator", "char"])
            _.isAttached() && es(un(F), _) && l.pendingKeys.add(_.getKey());
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
      i.registerNodeTransform(Bt, (_) => {
        i.isComposing() || Ln(_, l);
      }),
      i.registerNodeTransform(xr, (_) => {
        if (i.isComposing()) return;
        const F = dn(_);
        F && (ze(F.owner) || Oe(F.owner) || z(F.owner) || Re(F.owner)) && Ln(F.owner, l);
      }),
      i.registerNodeTransform(Me, (_) => {
        i.isComposing() || (aM(_, l), Ln(_, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Cr, (_) => {
        i.isComposing() || wM(_, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(Ue, (_) => {
        i.isComposing() || KM(_, l);
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
        Ue,
        (_) => {
          i.getEditorState().read(() => {
            for (const [F, U] of _) {
              if (U === "destroyed") continue;
              const B = re(F);
              !B || te(B, oe) !== "attribute" || Ke(B.getParent()) || i.getElementByKey(F)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      XM(i, l),
      ...o ? [
        i.registerNodeTransform(Ue, (_) => {
          i.isComposing() || VM(_);
        }),
        i.registerCommand(
          Xs,
          (_) => xd(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
            i,
            !1
          ),
          $e
        ),
        i.registerCommand(
          on,
          (_) => xd(
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
            i,
            !0
          ),
          $e
        ),
        i.registerCommand(
          cr,
          (_) => HM(
            // Same jsdom-safe duck-check as COPY above.
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null
          ),
          $e
        )
      ] : [],
      i.registerCommand(
        on,
        () => (Ha(l), !1),
        lr
      ),
      i.registerCommand(
        nc,
        () => (i.isComposing() || nM(l), !1),
        Fn
      ),
      i.registerCommand(
        Ys,
        () => (f = !1, y = 0, M(), !1),
        Nt
      ),
      i.registerCommand(
        yr,
        (_) => (f = !1, y = 0, M(), (_.key === "Backspace" || _.key === "Delete") && (Ha(l), rM(l)), i.isComposing() || !_.ctrlKey || _.altKey || _.shiftKey || _.metaKey || _.key !== " " && _.code !== "Space" || !XS() ? !1 : (_.preventDefault(), !0)),
        $e
      ),
      i.registerCommand(
        Bd,
        (_) => {
          const F = ng();
          F === "needs-plain-split" && i.dispatchCommand(Cs, void 0);
          const U = F !== "declined" || jk();
          return U && _?.preventDefault(), bs(l), U;
        },
        $e
      ),
      i.registerCommand(
        Cs,
        () => (l.splitExpected.current = !0, _h()),
        $e
      ),
      QM(i, l, o),
      i.registerCommand(
        yg,
        () => {
          if (f) return !0;
          const _ = i.getRootElement(), F = _?.ownerDocument, U = !!_ && !!F && F.hasFocus() && _.contains(F.activeElement);
          let B;
          if (U) {
            const J = w();
            B = P(J) ? J.focus.key : d;
          }
          return ca(() => bs(l, B)), !0;
        },
        Nt
      ),
      i.registerCommand(
        sc,
        () => {
          if (f) return !1;
          const _ = w(), F = P(_) ? _.focus.key : d;
          return ca(() => bs(l, F)), !1;
        },
        Nt
      ),
      i.registerUpdateListener(({ editorState: _, tags: F }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const U = _.read(() => {
          const J = w();
          return P(J) ? J.focus.key : void 0;
        }), B = p;
        if (U !== void 0 && (p = U), F.has(oc)) {
          l.pendingKeys.clear(), _.read(() => BM(l)), f = !0, U !== void 0 && (d = U);
          return;
        }
        if (F.has(Rr)) {
          U !== void 0 && U !== B && (f = !0);
          return;
        }
        f || (U !== void 0 && (d = U), M(), !(m || U === void 0) && [...l.pendingKeys].some((J) => J !== U) && (m = !0, queueMicrotask(() => {
          m = !1, !g && (x() || v(d));
        })));
      })
    );
    return () => {
      g = !0, k !== void 0 && clearTimeout(k), k = void 0, u(), L(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const e1 = ["status_unknown", "status_invalid"], bg = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, t1 = Object.values(bg);
function r1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = bg[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Cd(e) {
  e.classList.remove(...e1), e.removeAttribute("aria-description"), t1.includes(e.title) && e.removeAttribute("title");
}
function n1(e, t, r, n) {
  const i = (a) => a.read(() => Fe().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = re(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function i1(e) {
  const t = re(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : A(t) && t.getParent()?.getKey() === r.getKey();
}
function s1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return K(() => {
    if (!i) return;
    const s = t ?? Rs;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = Cv(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || i1(f)) continue;
            const m = re(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Cd(p);
        }
        for (const [f, p] of d) {
          const m = n.getElementByKey(f);
          m && r1(m, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          n1(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Cd(u);
      }
    };
  }, [n, i, t, r]), null;
}
function kg(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = mr(o);
    a && $(s) && kg(s.getChildren(), a, r);
  }
}
function Tg(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = mr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = Yn(o);
      if (c === void 0 || !c.includes(et)) continue;
      const l = c.split(et), u = [];
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
function xg(e, t, r) {
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
function _g(e, t) {
  const r = [];
  for (const n of e)
    Kh(n, t) || ((ae(n) || R(n)) && r.push(n.getMarker()), $(n) && r.push(..._g(n.getChildren(), t)));
  return r;
}
function Cg(e) {
  const t = [];
  for (const r of e) {
    const n = cl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = mr(r);
    i && t.push(...Cg(i));
  }
  return t;
}
function hl(e, t, r) {
  const n = _g(e, r), i = Cg(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function o1(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
  let n, i;
  if (P(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = re(t.key), i = t.offset;
  else
    return;
  if (!(!E(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function gl(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function a1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const x = ll(y, o, s);
    if (!x) return;
    c.text.length > 0 && (c.text += " ");
    const v = c.text.length;
    x.spans.forEach(
      (k) => c.spans.push({ ...k, start: k.start + v, end: k.end + v })
    ), c.sentinels.push(...x.sentinels), c.text += x.text;
  }
  const l = i ? gl(c, i) : c.text, u = br(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Sn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Ur.serializeEditorState(
    { type: dr, version: ur, content: u },
    s
  ).root.children;
  if (yo(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = xg(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (si(d, o) === ii(e, o) && hl(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Tg(d, f);
  const m = c1(e), g = Sg(d);
  for (let y = 0; y < m.length && y < g.length; y++)
    m[y].sid !== void 0 && g[y].number === m[y].number && (g[y].sid = m[y].sid);
  return d;
}
function c1(e) {
  const t = [], r = (n) => {
    Oe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Sg(e) {
  const t = [];
  for (const r of e) {
    Lf(r) && t.push(r);
    const n = mr(r);
    n && t.push(...Sg(n));
  }
  return t;
}
function l1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Xh(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? gl(l, i) : l.text, f = br(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Sn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = p.content ?? [], g = Qh(m), y = e.getCategory() !== g, x = Fh(e, m, g, s);
  if (x.failure !== void 0) {
    x.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const v = x.children;
  if (yo(v) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const k = xg(l, t, n);
  if (!k) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (si(v, o) === ii(u, o) && hl(u, v, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Tg(v, k), { rebuilt: v, contentNodes: u, category: g, categoryChanged: y };
}
function Sd(e) {
  return e.$?.textType;
}
function u1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Sd(e) === Sd(t);
}
function d1(e) {
  const t = [];
  for (const r of e) {
    const n = re(r);
    n?.isAttached() && Ie(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function f1(e) {
  if (!A(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!z(t)) return;
  const r = e.getTextContent();
  if (zr(e)) return;
  const n = Dh.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function vd(e, t) {
  const r = e;
  r.marker = t, r.text = Bh(t, r.markerSyntax, r.nested);
}
function p1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Me.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && vd(a.node, s);
  const c = n.getChildren().filter(A).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && vd(l.node, s);
}
function h1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = tg(e, i, n);
  if (!o) return;
  const a = r ? gl(o, r) : o.text, c = br(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Sn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Ur.serializeEditorState(
    { type: dr, version: ur, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...ko(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && si(u, i) === ii(d, i) && hl(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function g1(e, t, r, n, i) {
  const s = o1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    z(y) ? c.set(y.getKey(), y) : Re(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const x = re(y);
    if (!x?.isAttached()) continue;
    const v = Vi(x);
    if (v) {
      if (d(v), A(x)) {
        const k = ug(x, r.getMarker);
        k && a.push(k);
      }
      if (z(v)) {
        const k = f1(x);
        k && u.set(v.getKey(), k);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((x) => f.has(x.getKey())) || (y.forEach((x) => {
      f.add(x.getKey()), o.delete(x.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = Vi(s.node);
    y && d(y);
  }
  const p = d1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), g = /* @__PURE__ */ new Map();
  kg(Fe().getChildren(), e.root.children, g);
  for (const y of u.values()) p1(y, g);
  for (const y of c.values()) {
    const x = g.get(y.getKey()), v = x ? mr(x.node) : void 0;
    if (!x || !v) continue;
    const k = l1(y, g, r, m, s);
    if (!k) continue;
    if (k.categoryChanged) {
      const _ = x.node;
      k.category === void 0 ? delete _.category : _.category = k.category;
    }
    if (!k.rebuilt) continue;
    const M = g.get(k.contentNodes[0].getKey());
    if (!M) continue;
    const L = v.indexOf(M.node);
    L < 0 || v.splice(L, k.contentNodes.length, ...k.rebuilt);
  }
  for (const y of o.values()) {
    const x = g.get(y[0].getKey());
    if (!x) continue;
    const v = a1(y, g, r, m, s);
    if (!v) continue;
    const k = x.siblings.indexOf(x.node);
    k < 0 || x.siblings.splice(k, y.length, ...v);
  }
  for (const y of l.values()) {
    const x = g.get(y.getKey());
    if (!x) continue;
    const v = 1 + ko(y).length, k = h1(y, r, s);
    if (!k) continue;
    const M = x.siblings.indexOf(x.node);
    M < 0 || x.siblings.splice(M, v, ...k);
  }
  for (const y of p) {
    const x = g.get(y.getKey());
    if (!x) continue;
    const v = x.siblings.indexOf(x.node);
    if (v < 0) continue;
    x.siblings.splice(v, 1);
    const k = x.siblings[v - 1], M = x.siblings[v], L = k && Yn(k), _ = M && Yn(M);
    k && M && L !== void 0 && _ !== void 0 && u1(k, M) && (k.text = L + _, x.siblings.splice(v, 1));
  }
  return mh(e, r.viewOptions);
}
function m1({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = ti(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return K(() => {
    if (n)
      return r.registerNodeTransform(
        Ye,
        (i) => y1(i, t)
      );
  }, [r, n, t]), null;
}
function y1(e, t) {
  e.getMarker() !== Qt && (e.isEmpty() || $t(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Qt}" (key ${e.getKey()})`
  ), e.setMarker(Qt)));
}
function b1({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = le(), n = Z({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return K(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Vs(s, e) || k1(i, r, e);
  }, [r, e, t]), K(
    () => r.registerMutationListener(
      Rt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Ya(r);
        Md(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: ks(s) === ks(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), K(() => {
    const i = (a) => a.read(
      () => new Set(
        Fe().getChildren().filter(Ve).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Ya(r) || Md(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: ks(a) === ks(c)
      }));
    };
    return Je(
      ...[vt, nr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), K(
    () => r.registerCommand(
      fr,
      () => {
        const i = n.current;
        return i.phase === "idle" && C1(i, x1()), !1;
      },
      Nt
    ),
    [r]
  ), K(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(fr, void 0));
    };
    return Je(
      r.registerMutationListener(_t, i),
      r.registerMutationListener(ut, i)
    );
  }, [r]), K(() => {
    const i = () => E1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function k1(e, t, r) {
  if (T1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Ya(t);
  (!n || n === r.book) && t.update(() => vg(r.chapterNum, r.verseNum), {
    tag: Rr
  });
}
function T1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => Vs(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function x1() {
  const e = w(), t = yc(e);
  if (!t) return;
  const r = ml(), n = Uf(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = wc(t, e), { verseNum: o, verse: a } = lT(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Ya(e) {
  return e.getEditorState().read(() => ml()?.getCode() || void 0);
}
function ml() {
  return Fe().getChildren().find(bt);
}
function Md(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && la(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || la(e, t), e.phase = "navigating") : i && la(e, t), r && r !== e.scrRef.book && Ag(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function la(e, t) {
  queueMicrotask(() => {
    t.update(
      () => vg(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Rr }
    );
  });
}
function vg(e, t) {
  const r = yc(w()), n = qc(r)?.getNumber(), i = Uf(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Vf(n) ? Eg(t, n) : parseInt(n, 10) === t))
    return;
  const o = Fe().getChildren(), a = Df(o, e);
  if (!a) return;
  const c = Sb(o, a), l = bb(c, !0);
  Cb(c, l);
  let u;
  try {
    u = iT(c, t);
  } catch {
    return;
  }
  u && (ae(u) ? !E(u.getFirstChild()) && ni(u) || Ht(u, 0) : _1(u));
}
function _1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ge(n)) {
    Ht(t, r);
    return;
  }
  const i = co(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = $(n) && !z(n) ? Mg(n) : void 0;
  s ? s.select(0, 0) : Ht(t, r);
}
function Mg(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if ($(t) && !z(t)) return Mg(t);
}
function ks(e) {
  return e.read(() => {
    const t = Fe().getChildren().find(Ve);
    return `${ml()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function C1(e, t) {
  e.phase !== "navigating" && t && (S1(t, e.scrRef) || Ag(e, v1(t, e.scrRef)));
}
function S1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Eg(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Eg(e, t) {
  try {
    return bc(e, t);
  } catch {
    return !1;
  }
}
function v1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const M1 = 8;
function Ag(e, t) {
  return Vs(t, e.scrRef) || e.pendingEchoes.some((r) => Vs(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > M1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Vs(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function E1(e) {
  e.phase = "idle";
}
function A1(e) {
  return bt(e) ? `${e.__code}` : Re(e) ? `${e.__marker} "${e.__number}"` : R(e) ? `${e.__marker}` : Xi(e) ? `${e.__marker} "${e.__number}"` : sr(e) ? `${e.__caller}` : _n(e) ? `${e.__marker} "${e.__number}"` : z(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ae(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${P1(e)}` : _e(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Oe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function P1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Gi]) : "";
}
function O1() {
  const [e] = le();
  return /* @__PURE__ */ S(
    Lm,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: A1,
      editor: e
    }
  );
}
const Pg = Rd(null), Ed = 4;
function N1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = $d(Pg);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return K(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ S("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function w1({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = de(), [s, o] = de(), a = he(
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
  return K(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ S(Pg.Provider, { value: l, children: /* @__PURE__ */ S("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function q1({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Z(null), c = Z(null), [l, u] = de(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return K(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: g } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + Ed}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), K(() => {
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
  }, [a, c, l, o]), K(() => {
    const f = () => {
      if (l) {
        const p = c.current, m = a.current;
        if (p !== null && m !== null) {
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Ed;
          y !== m.getBoundingClientRect().top && (m.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Te(nn, { children: [
    /* @__PURE__ */ Te(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ S("span", { className: i }),
          t && /* @__PURE__ */ S("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ S("i", { className: "chevron-down" })
        ]
      }
    ),
    l && rn(
      /* @__PURE__ */ S(w1, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const Xa = {
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
}, Qa = {
  ...Xa,
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
function R1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ S(
    q1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + $1(t),
      buttonLabel: I1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Xa).map((n) => /* @__PURE__ */ Te(
        N1,
        {
          className: "item block-marker " + L1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ S("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ S("span", { className: "text usfm_" + n, children: Xa[n] })
          ]
        },
        n
      ))
    }
  );
}
function $1(e) {
  return e && e in Qa ? e : "ban";
}
function I1(e) {
  return e && e in Qa ? Qa[e] : "No Style";
}
function L1(e) {
  return e ? "active dropdown-item-active" : "";
}
function Ad() {
  return /* @__PURE__ */ S("div", { className: "divider" });
}
const D1 = yn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = de(s), [c, l] = de(), [u, d] = de(!1), [f, p] = de(!1), m = he(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: x,
      contextMarker: v
    }) => {
      d(g), p(y), l(x), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: x,
        contextMarker: v
      });
    },
    [n]
  );
  return K(() => s.registerCommand(
    fr,
    (g, y) => (a(y), !1),
    lr
  ), [s]), /* @__PURE__ */ Te(nn, { children: [
    /* @__PURE__ */ S(nh, { onStateChange: m }),
    /* @__PURE__ */ Te("div", { className: "toolbar", children: [
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Gd, void 0);
          },
          title: Ss ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Jd, void 0);
          },
          title: Ss ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ S("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ S(Ad, {}),
      o === s && /* @__PURE__ */ Te(nn, { children: [
        /* @__PURE__ */ S(
          R1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ S(Ad, {})
      ] }),
      /* @__PURE__ */ S("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), U1 = po(), F1 = {}, z1 = {};
function K1() {
  return /* @__PURE__ */ S("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const Og = yn(function({
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
  const d = Z(null), f = Z(null), p = Z(null), m = Z(t), g = Z(void 0), y = Z(void 0), x = Z(void 0), v = Z(void 0), [k, M] = de(t), [L, _] = de(0), [F, U] = de(), {
    isReadonly: B = !1,
    structureProtectionMode: J = "off",
    hasExternalUI: ie = !1,
    hasSpellCheck: ue = !1,
    textDirection: ne = "ltr",
    markerMenuTrigger: Se = "\\",
    view: Pe,
    nodes: Y,
    debug: D = !1,
    contextMenu: Q,
    styleInfo: me,
    markerSettleDelayMs: nt
  } = a ?? z1, Mt = Pe ?? U1, ce = Z(Mt);
  Ft(ce.current, Mt) || (ce.current = Mt);
  const se = ce.current, Xe = De(() => Y ?? F1, [Y]), To = De(() => Q, [Q]), oi = De(
    () => Jk(me ?? Rs),
    [me]
  ), ai = Z(c);
  Ft(ai.current, c) || (ai.current = c);
  const it = ai.current, Sr = Z(null), xo = De(() => {
    if (se.markerMode !== "editable") return;
    const q = me ?? Rs;
    return {
      getContext: () => Sr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (j) => Nv(
        q,
        j,
        Xe.extraValidMarkers
      ),
      getEnterItems: (j) => wv(
        q,
        j,
        Xe.extraValidMarkers
      ),
      apply: (j, W) => {
        const G = Sr.current;
        G && (W.trigger === "enter" ? G.splitParagraphWithMarker(j.marker) : G.applyMarkerMenuSelection(j, W));
      },
      commitTypedCloser: (j) => {
        Sr.current?.commitTypedCloser(j);
      }
    };
  }, [se, me, Xe.extraValidMarkers]), rs = De(
    () => ({
      namespace: "platformEditor",
      theme: { ...wh, showCharMarkerTitles: se.showCharMarkerTitles },
      editable: !B,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      nodes: [Qe, ...ax]
    }),
    [B, se.showCharMarkerTitles]
  );
  na.initialize(it);
  function be(q) {
    if (q !== void 0 && !ZS(q, Xe.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const Br = he(() => {
    const q = d.current;
    if (!q) return m.current;
    const j = iu(q), W = y.current;
    if ((!j || j.size === 0) && !W) return m.current;
    const G = q.getEditorState(), ve = G.toJSON();
    return G.read(
      () => g1(
        ve,
        j ?? /* @__PURE__ */ new Set(),
        { viewOptions: se, getMarker: oi, logger: it },
        W,
        x.current
      )
    ) ?? m.current;
  }, [se, oi, it]), xe = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const q = d.current?.getRootElement();
      return !!q && q.ownerDocument.activeElement === q;
    },
    undo() {
      d.current?.dispatchCommand(Gd, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Jd, void 0);
    },
    cut() {
      d.current?.dispatchCommand(on, null);
    },
    copy() {
      d.current?.dispatchCommand(Xs, null);
    },
    paste() {
      d.current && Hc(d.current);
    },
    pastePlainText() {
      d.current && Gc(d.current);
    },
    getUsj() {
      return Br();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(yg, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(q) {
      if (!q) {
        y.current = void 0;
        return;
      }
      const j = d.current?.getEditorState().read(() => {
        const W = w();
        return P(W) && W.isCollapsed() ? W.focus.key : void 0;
      });
      y.current = { input: q, nodeKey: j ?? x.current?.key };
    },
    setUsj(q) {
      if (!Ft(m.current, q)) {
        m.current = q, y.current = void 0;
        const j = Ft(k, q);
        M(q), j && _((W) => W + 1);
      }
    },
    applyUpdate(q, j = "remote") {
      d.current?.update(
        () => {
          j === "remote" && qr(wi), qx(q, se, Xe, it);
        },
        { discrete: !0 }
      );
      const W = d.current?.getEditorState();
      if (!W) return;
      const G = na.deserializeEditorState(W, se);
      if (G) {
        const ve = !Ft(m.current, G);
        if (ve && (m.current = G), ve || !Ft(k, G)) {
          const ft = fu(q, W, "apply");
          v.current = G, s?.(G, q, j, ft);
        }
      }
    },
    replaceEmbedUpdate(q, j) {
      const W = d.current?.read(() => xT(q, j));
      W ? this.applyUpdate(W) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      return d.current?.read(Ip);
    },
    setSelection(q) {
      d.current?.update(() => {
        const j = Lc(q);
        j !== void 0 && (Ni(j), qr(cf));
      });
    },
    setAnnotation(q, j, W, G, ve) {
      let ft, vr, It, Lt;
      typeof G == "function" || G === void 0 ? (ft = G, vr = ve) : (ft = G.onClick, vr = G.onRemove, It = G.onMouseEnter, Lt = G.onMouseLeave), f.current?.setAnnotation(
        q,
        Wl(j),
        W,
        ft,
        vr,
        It,
        Lt
      );
    },
    removeAnnotation(q, j) {
      f.current?.removeAnnotation(Wl(q), j);
    },
    formatPara(q) {
      d.current?.update(() => {
        const j = w();
        if (!P(j)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${q}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        Fm(j, () => $i(q));
        const W = w();
        if (!P(W)) return;
        const G = /* @__PURE__ */ new Set();
        W.getNodes().forEach((ve) => {
          const ft = ve.getTopLevelElement();
          ae(ft) && G.add(ft);
        }), G.forEach((ve) => rg(ve, q, se));
      });
    },
    getElementByKey(q) {
      return d.current?.read(
        () => d.current?.getElementByKey(q) ?? void 0
      );
    },
    removeCharacterMarker(q) {
      if (B) throw new Error("Cannot remove character marker in readonly mode");
      be(q);
      let j = !1;
      return d.current?.update(
        () => {
          const W = w();
          P(W) && (j = Mh(W, q, se));
        },
        { discrete: !0 }
      ), j;
    },
    replaceCharacterMarker(q, j) {
      if (B) throw new Error("Cannot replace character marker in readonly mode");
      be(q), be(j);
      let W = !1;
      return d.current?.update(
        () => {
          const G = w();
          P(G) && (W = dv(G, q, j));
        },
        { discrete: !0 }
      ), W;
    },
    extendCharacterMarker(q, j) {
      if (B) throw new Error("Cannot extend character marker in readonly mode");
      be(q), j?.forEach(
        (G) => be(G)
      );
      let W = !1;
      return d.current?.update(
        () => {
          const G = w();
          P(G) && (W = fv(
            G,
            q,
            j,
            se
          ));
        },
        { discrete: !0 }
      ), W;
    },
    insertMarker(q) {
      if (B) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!Fa(q, Xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const j = za(
        q,
        g,
        se,
        Xe,
        it,
        void 0,
        me
      );
      return j.action({ editor: d.current, reference: r }), j.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!B)
        return d.current?.getEditorState().read(() => bM());
    },
    applyMarkerMenuSelection(q, j) {
      if (B) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (q.kind !== "closeTag" && !Fa(q.marker, Xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let W;
      return d.current.update(() => {
        W = CM(q, j, r, {
          expandedNoteKeyRef: g,
          viewOptions: se,
          nodeOptions: Xe,
          logger: c,
          styleInfo: me
        });
      }), W;
    },
    splitParagraphWithMarker(q) {
      if (B) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        cg(q, se);
      });
    },
    commitTypedMarker(q, j) {
      if (B) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let W = !1;
      return d.current.update(() => {
        W = _M(q, j), W || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), W;
    },
    commitTypedCloser(q) {
      if (B) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let j = !1;
      return d.current.update(() => {
        j = ag(q), j || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), j;
    },
    insertNote(q, j, W) {
      d.current?.update(() => {
        const G = Lp(
          q,
          j,
          W,
          r,
          se,
          Xe,
          it
        );
        G && !G.getIsCollapsed() && (g.current = G.getKey());
      });
    },
    selectNote(q) {
      d.current?.update(() => {
        const j = bu(q);
        j && (ix(j, se), j.getIsCollapsed() || (g.current = j.getKey()));
      });
    },
    getNoteOps(q) {
      return d.current?.read(() => {
        const j = bu(q);
        if (j)
          return $c(j);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Sr.current = xe, ec(u, () => xe), K(() => {
    const q = d.current;
    if (q)
      return q.registerUpdateListener(({ editorState: j }) => {
        j.read(() => {
          const W = w();
          if (!P(W) || !W.isCollapsed()) return;
          const G = W.focus.getNode();
          E(G) && (x.current = { key: G.getKey(), offset: W.focus.offset });
        });
      });
  }, []);
  const ci = he(
    (q, j, W, G) => {
      const ve = na.deserializeEditorState(q, se);
      if (ve) {
        const ft = !Ft(m.current, ve);
        if (ft && (m.current = ve), ft || !Ft(k, ve)) {
          const vr = fu(G, q);
          v.current = ve, s?.(ve, G, "local", vr);
        }
      }
    },
    [k, s, se]
  );
  K(() => {
    const q = d.current;
    if (!(!q || !s))
      return q.registerUpdateListener(({ tags: j, dirtyElements: W, dirtyLeaves: G }) => {
        !j.has(oc) && (W.size === 0 && G.size === 0 || j.has(wi) || !iu(q)?.size) || queueMicrotask(() => {
          const ve = Br();
          !ve || Ft(v.current, ve) || (v.current = ve, s(ve, void 0, "local", void 0));
        });
      });
  }, [s, Br]);
  const Ee = he(
    (q) => {
      U(q.contextMarker), o?.(q);
    },
    [o]
  );
  return /* @__PURE__ */ Te(Qd, { initialConfig: rs, children: [
    /* @__PURE__ */ S(w_, { isEditable: !B }),
    /* @__PURE__ */ Te("div", { className: "editor-container", children: [
      ie ? /* @__PURE__ */ S(nh, { onStateChange: Ee }) : /* @__PURE__ */ S("div", { className: "editor-toolbar-container" + (B ? "-readonly" : "-editable"), children: /* @__PURE__ */ S(
        D1,
        {
          ref: p,
          editorRef: Sr,
          isReadonly: B,
          onStateChange: Ee
        }
      ) }),
      /* @__PURE__ */ Te("div", { className: "editor-inner", children: [
        /* @__PURE__ */ S(ef, { editorRef: d }),
        /* @__PURE__ */ S(
          Um,
          {
            contentEditable: /* @__PURE__ */ S(
              Zd,
              {
                className: `editor-input usfm ${wx(se).join(" ")}${se.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${se.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                spellCheck: ue
              }
            ),
            placeholder: /* @__PURE__ */ S(K1, {}),
            ErrorBoundary: tf
          }
        ),
        ie && /* @__PURE__ */ S(N_, {}),
        /* @__PURE__ */ S(rf, {}),
        r && n && /* @__PURE__ */ S(b1, { scrRef: r, onScrRefChange: n }),
        r && !ie && /* @__PURE__ */ S(
          rS,
          {
            trigger: Se,
            scrRef: r,
            contextMarker: F,
            getMarkerAction: (q) => za(
              q,
              g,
              se,
              Xe,
              it,
              void 0,
              me
            ),
            editableHarness: xo
          }
        ),
        /* @__PURE__ */ S(
          $_,
          {
            scripture: k,
            scriptureRef: m,
            nodeOptions: Xe,
            editorAdaptor: Ur,
            viewOptions: se,
            logger: it
          },
          L
        ),
        /* @__PURE__ */ S(tC, { onChange: i }),
        /* @__PURE__ */ S(
          Ex,
          {
            onChange: ci,
            ignoreSelectionChange: !0,
            ignoreHistoryMergeTagChange: !0,
            ignoreTags: ay
          }
        ),
        /* @__PURE__ */ S(yv, { viewOptions: se }),
        /* @__PURE__ */ S(vx, { ref: f, logger: it }),
        /* @__PURE__ */ S(s_, { viewOptions: se }),
        /* @__PURE__ */ S(k_, {}),
        /* @__PURE__ */ S(v_, {}),
        se?.markerMode !== "editable" && /* @__PURE__ */ S(M_, { logger: it }),
        /* @__PURE__ */ S(O_, { options: To }),
        /* @__PURE__ */ S(R_, {}),
        /* @__PURE__ */ S(SM, {}),
        /* @__PURE__ */ S(
          ZM,
          {
            viewOptions: se,
            getMarker: oi,
            logger: it,
            markerSettleDelayMs: nt
          }
        ),
        /* @__PURE__ */ S(
          s1,
          {
            styleInfo: me,
            viewOptions: se,
            logger: it
          }
        ),
        /* @__PURE__ */ S(
          I_,
          {
            expandedNoteKeyRef: g,
            nodeOptions: Xe,
            viewOptions: se,
            logger: it
          }
        ),
        /* @__PURE__ */ S(eC, {}),
        /* @__PURE__ */ S(e_, {}),
        /* @__PURE__ */ S(Yx, {}),
        /* @__PURE__ */ S(m1, { viewOptions: se, logger: it }),
        /* @__PURE__ */ S(rC, {}),
        /* @__PURE__ */ S(jC, { structureProtectionMode: J }),
        /* @__PURE__ */ S(BC, { textDirection: ne }),
        /* @__PURE__ */ S(WC, {}),
        /* @__PURE__ */ S(eS, {}),
        l
      ] }),
      D && /* @__PURE__ */ S(O1, {})
    ] })
  ] });
}), JE = yn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ S(Og, { ref: r, ...i });
});
function Ng() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Ws(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Ng() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function wg(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Ng() : r,
    quote: e,
    type: "thread"
  };
}
function Pd(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function j1(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function ua(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class B1 {
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
    this._comments = t, ua(this);
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
          const c = Pd(a);
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
    this._comments = i, ua(this);
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
          const c = Pd(a);
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
    return this._comments = n, ua(this), t.type === "comment" ? {
      index: s,
      markedComment: j1(t)
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
    return t !== null ? t.doc.get("comments", Il) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Ll(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Il();
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
      ty,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Nt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof ry) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const m = p.insert, g = p.retain, y = p.delete, x = u.parent, v = u === r ? void 0 : x instanceof Ll && this._comments.find((k) => k.id === x.get("id"));
              if (Array.isArray(m)) {
                const k = f;
                m.slice().reverse().forEach((M) => {
                  const L = M.get("id"), F = M.get("type") === "thread" ? wg(
                    M.get("quote"),
                    M.get("comments").toArray().map(
                      (U) => Ws(
                        U.get("content"),
                        U.get("author"),
                        U.get("id"),
                        U.get("timeStamp"),
                        U.get("deleted")
                      )
                    ),
                    L
                  ) : Ws(
                    M.get("content"),
                    M.get("author"),
                    L,
                    M.get("timeStamp"),
                    M.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(F, v, k);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let k = 0; k < y; k++) {
                  const M = v === void 0 || v === !1 ? this._comments[f] : v.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(M, v);
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
function V1(e) {
  const [t, r] = de(e.getComments());
  return K(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function W1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Z(null);
  return K(() => {
    i.current !== null && i.current.focus();
  }, []), K(() => {
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
  }, [n, e]), /* @__PURE__ */ S("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Te("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function H1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return rn(
    /* @__PURE__ */ S(W1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function qg() {
  const [e, t] = de(null), r = he(() => {
    t(null);
  }, []), n = De(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ S(H1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = he(
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
const G1 = {
  ...wh,
  paragraph: "CommentEditorTheme__paragraph"
};
function J1(...e) {
  return e.filter(Boolean).join(" ");
}
function Fr({
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
      className: J1(
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
function Y1({
  className: e
}) {
  return /* @__PURE__ */ S(Zd, { className: e || "ContentEditable__root" });
}
function X1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ S("div", { className: t || "Placeholder__root", children: e });
}
const Od = Hd("INSERT_INLINE_COMMAND");
function Q1({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = he(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return K(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Wi(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ S("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ S("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ S("i", { className: "icon add-comment" }) }) });
}
function Z1({ onEscape: e }) {
  const [t] = le();
  return K(() => t.registerCommand(
    Wd,
    (r) => e(r),
    Fn
  ), [t, e]), null;
}
function Rg({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ S(Qd, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: G1
  }, children: /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ S(
      Qm,
      {
        contentEditable: /* @__PURE__ */ S(Y1, { className: e }),
        placeholder: /* @__PURE__ */ S(X1, { children: s }),
        ErrorBoundary: tf
      }
    ),
    /* @__PURE__ */ S(Xm, { onChange: n }),
    /* @__PURE__ */ S(rf, {}),
    t !== !1 && /* @__PURE__ */ S(Gm, {}),
    /* @__PURE__ */ S(Z1, { onEscape: r }),
    /* @__PURE__ */ S(Jm, {}),
    i !== void 0 && /* @__PURE__ */ S(ef, { editorRef: i })
  ] }) });
}
function $g(e, t) {
  return he(
    (r, n) => {
      r.read(() => {
        e(Zm()), t(!ey(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function eE({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = De(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), u = Lg(), d = he(() => {
    e.getEditorState().read(() => {
      const g = w();
      if (P(g)) {
        l.current = g.clone();
        const y = g.anchor, x = g.focus, v = zm(
          e,
          y.getNode(),
          y.offset,
          x.getNode(),
          x.offset
        ), k = a.current;
        if (v !== null && k !== null) {
          const { left: M, bottom: L, width: _ } = v.getBoundingClientRect(), F = Km(e, v);
          let U = F.length === 1 ? M + _ / 2 - 125 : M - 125;
          U < 10 && (U = 10), k.style.left = `${U}px`, k.style.top = `${L + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const B = F.length, { container: J } = c, ie = c.elements, ue = ie.length;
          for (let ne = 0; ne < B; ne++) {
            const Se = F[ne];
            let Pe = ie[ne];
            Pe === void 0 && (Pe = document.createElement("span"), ie[ne] = Pe, J.appendChild(Pe));
            const D = `position:absolute;top:${Se.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Se.left}px;height:${Se.height}px;width:${Se.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Pe.style.cssText = D;
          }
          for (let ne = ue - 1; ne >= B; ne--) {
            const Se = ie[ne];
            J.removeChild(Se), ie.pop();
          }
        }
      }
    });
  }, [e, c]);
  Wi(() => {
    d();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), K(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        wg(g, [Ws(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = $g(i, o);
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ S(
      Rg,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ S(Fr, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ S(
        Fr,
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
function tE({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = Lg(), l = $g(i, o);
  return /* @__PURE__ */ Te(nn, { children: [
    /* @__PURE__ */ S(
      Rg,
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
      Fr,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Ws(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(wm, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ S("i", { className: "send" })
      }
    )
  ] });
}
function Ig({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Te(nn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Te("div", { className: "Modal__content", children: [
      /* @__PURE__ */ S(
        Fr,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ S(
        Fr,
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
function Nd({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = de(0);
  K(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const d = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(d);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = qg();
  return /* @__PURE__ */ Te("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ S("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Te("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ S("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Te(nn, { children: [
      /* @__PURE__ */ S(
        Fr,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ S(
              Ig,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
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
function rE({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = de(0), [l, u] = qg(), d = De(
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
  }, [a]), /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Te(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const x = Array.from(g)[0], v = re(x);
                _e(v) && v.selectStart();
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
          /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Te("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ S("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ S(
              Fr,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ S(
                    Ig,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: g
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ S("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((g) => /* @__PURE__ */ S(
            Nd,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ S(
            tE,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ S(
      Nd,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function nE({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ S("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ S(
      rE,
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
function Lg() {
  const e = nf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function iE({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = nf(), [a] = le(), c = De(() => {
    const U = new B1(a, s);
    return r && U.registerOnChange(r), t?.(U), U;
  }, [a, s, r, t]), l = V1(c), u = De(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [p, m] = de([]), [g, y] = de(!1), [x, v] = de(!1), { yjsDocMap: k } = o;
  K(() => {
    if (e) {
      const U = e("comments", k);
      return c.registerCollaboration(U);
    }
    return () => {
    };
  }, [c, e, k]);
  const M = he(() => {
    a.update(() => {
      const U = w();
      U !== null && (U.dirty = !0);
    }), y(!1);
  }, [a]), L = he(
    (U, B) => {
      if (U.type === "comment") {
        const J = c.deleteCommentOrThread(U, B);
        if (!J)
          return;
        const { markedComment: ie, index: ue } = J;
        c.addComment(ie, B, ue);
      } else {
        c.deleteCommentOrThread(U);
        const J = B !== void 0 ? B.id : U.id, ie = u.get(J);
        ie !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ue of ie) {
              const ne = re(ue);
              _e(ne) && (ne.deleteID(wr, J), ne.hasNoIDsForEveryType() && Ps(ne));
            }
          });
        });
      }
    },
    [c, a, u]
  ), _ = he(
    (U, B, J, ie) => {
      c.addComment(U, J), B && (a.update(() => {
        P(ie) && xf(ie, wr, U.id);
      }), y(!1));
    },
    [c, a]
  );
  K(() => {
    const U = [];
    let B;
    for (const J of p) {
      const ie = u.get(J);
      if (ie !== void 0)
        for (const ue of ie) {
          const ne = a.getElementByKey(ue);
          ne !== null && (ne.classList.add("selected"), U.push(ne), B = window.setTimeout(() => {
            v(!0);
          }, 0));
        }
    }
    return () => {
      B !== void 0 && window.clearTimeout(B);
      for (const J of U)
        J.classList.remove("selected");
    };
  }, [p, a, u]), K(() => {
    if (!a.hasNodes([Qe]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const U = /* @__PURE__ */ new Map();
    return Je(
      Xd(
        a,
        Qe,
        (B) => qi(B.getTypedIDs()),
        (B, J) => {
          for (const [ie, ue] of Object.entries(B.getTypedIDs()))
            ue.forEach((ne) => {
              J.addID(ie, ne);
            });
        }
      ),
      a.registerMutationListener(
        Qe,
        (B) => {
          a.getEditorState().read(() => {
            for (const [J, ie] of B) {
              const ue = re(J);
              let ne = [];
              ie === "destroyed" ? ne = U.get(J) ?? [] : _e(ue) && (ne = ue.getTypedIDs()[wr] ?? []);
              for (const Se of ne) {
                let Pe = u.get(Se);
                U.set(J, ne), ie === "destroyed" ? Pe !== void 0 && (Pe.delete(J), Pe.size === 0 && u.delete(Se)) : (Pe === void 0 && (Pe = /* @__PURE__ */ new Set(), u.set(Se, Pe)), Pe.has(J) || Pe.add(J));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: B, tags: J }) => {
        B.read(() => {
          const ie = w();
          let ue = !1, ne = !1;
          if (P(ie)) {
            const Se = ie.anchor.getNode();
            if (E(Se)) {
              const Pe = Wy(Se, wr, ie.anchor.offset) ?? [];
              Pe !== null && (m(Pe), ue = !0), ie.isCollapsed() || (f(Se.getKey()), ne = !0);
            }
          }
          ue || m((Se) => Se.length === 0 ? Se : []), ne || f(null), !J.has("collaboration") && P(ie) && y(!1);
        });
      }),
      a.registerCommand(
        Od,
        () => {
          const B = window.getSelection();
          return B !== null && B.removeAllRanges(), y(!0), !0;
        },
        sn
      )
    );
  }, [a, u]);
  const F = () => {
    a.dispatchCommand(Od, void 0);
  };
  return /* @__PURE__ */ Te(nn, { children: [
    g && rn(
      /* @__PURE__ */ S(
        eE,
        {
          editor: a,
          cancelAddComment: M,
          submitAddComment: _
        }
      ),
      document.body
    ),
    d != null && !g && rn(
      /* @__PURE__ */ S(
        Q1,
        {
          anchorKey: d,
          editor: a,
          showComments: x,
          onAddComment: F
        }
      ),
      document.body
    ),
    n !== null && rn(
      /* @__PURE__ */ S(
        Fr,
        {
          className: `CommentPlugin_ShowCommentsButton ${x ? "active" : ""}`,
          onClick: () => v(!x),
          title: x ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ S("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    x && rn(
      /* @__PURE__ */ S(
        nE,
        {
          comments: l,
          submitAddComment: _,
          deleteCommentOrThread: L,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function sE() {
  const e = Z(void 0), t = he((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function oE(e, t) {
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
function aE(e, t) {
  K(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      oE(r, t);
    };
  }, [t, e]);
}
const YE = yn(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: m } = {} } = t, [g, y] = sE();
  aE(f, g), K(() => {
    if (process.env.NODE_ENV !== "production") {
      const k = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(k), p || console.warn(k);
    }
  }, [p]), ec(r, () => ({
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
    setTransientInput(k) {
      n.current?.setTransientInput(k);
    },
    setUsj(k) {
      n.current?.setUsj(k);
    },
    applyUpdate(k, M) {
      n.current?.applyUpdate(k, M);
    },
    replaceEmbedUpdate(k, M) {
      return n.current?.replaceEmbedUpdate(k, M);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(k) {
      n.current?.setSelection(k);
    },
    setAnnotation(k, M, L, _, F) {
      typeof _ == "function" || _ === void 0 ? n.current?.setAnnotation(k, M, L, _, F) : n.current?.setAnnotation(k, M, L, _);
    },
    removeAnnotation(k, M) {
      n.current?.removeAnnotation(k, M);
    },
    formatPara(k) {
      n.current?.formatPara(k);
    },
    getElementByKey(k) {
      return n.current?.getElementByKey(k);
    },
    removeCharacterMarker(k) {
      return n.current?.removeCharacterMarker(k) ?? !1;
    },
    replaceCharacterMarker(k, M) {
      return n.current?.replaceCharacterMarker(k, M) ?? !1;
    },
    extendCharacterMarker(k, M) {
      return n.current?.extendCharacterMarker(k, M) ?? !1;
    },
    insertMarker(k) {
      return n.current?.insertMarker(k);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(k, M) {
      return n.current?.applyMarkerMenuSelection(k, M);
    },
    splitParagraphWithMarker(k) {
      n.current?.splitParagraphWithMarker(k);
    },
    commitTypedMarker(k, M) {
      return n.current?.commitTypedMarker(k, M) ?? !1;
    },
    commitTypedCloser(k) {
      return n.current?.commitTypedCloser(k) ?? !1;
    },
    insertNote(k, M, L) {
      n.current?.insertNote(k, M, L);
    },
    selectNote(k) {
      n.current?.selectNote(k);
    },
    getNoteOps(k) {
      return n.current?.getNoteOps(k);
    },
    setComments(k) {
      g.current?.setComments(k), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const x = he(
    (k, M, L, _) => {
      if (!u) return;
      const F = g.current?.getComments();
      u(k, F, M, L, _);
    },
    [g, u]
  ), v = he(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const k = g.current?.getComments();
    l(k);
  }, [g, i, l]);
  return K(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ S(Ym, { children: /* @__PURE__ */ Te(Og, { ref: n, onUsjChange: x, ...f, children: [
    /* @__PURE__ */ S(
      iE,
      {
        setCommentStore: y,
        onChange: v,
        showCommentsContainerRef: m ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ S("div", { ref: s, className: "comment-container" })
  ] }) });
});
function tn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function Dg(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function cE(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const lE = /^[#\w().,%/\s-]+$/;
function ar(e) {
  return e != null;
}
const uE = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, dE = {
  left: "right",
  right: "left"
}, Za = ".editor-input.usfm", fE = /^[\w.#[\]="':()>+~*,\s-]+$/;
function pE(e) {
  return fE.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Za}".`
  ), Za);
}
function hE(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${Dg(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (lE.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), ar(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), ar(t.firstLineIndent) && i.push(`text-indent: ${tn(t.firstLineIndent * 20 * r)}vw`), ar(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${tn(t.leftMargin * 20 * r)}vw`), ar(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${tn(t.rightMargin * 20 * r)}vw`
  ), ar(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${tn(t.spaceBefore * r)}pt`), ar(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${tn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = uE[n ? dE[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const wd = { c: 150, ca: 133, cp: 150 };
function qd(e, t) {
  return e && ar(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function gE(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && ar(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = qd(e.markers.c, wd.c);
  return ["ca", "cp"].map((i) => {
    const s = qd(
      e.markers[i],
      wd[i]
    ), o = tn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function XE(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Za } = t, s = pE(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${Dg(e.defaultFont)}"`), ar(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${tn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = hE(c, l, r, n);
    u.length > 0 && o.push(`${s} .usfm_${cE(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...gE(e, s)), o.join(`
`);
}
export {
  T as CategoryType,
  JE as Editorial,
  Ms as GENERATOR_NOTE_CALLER,
  of as HIDDEN_NOTE_CALLER,
  YE as Marginal,
  b as MarkerType,
  zc as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Kc as STANDARD_VIEW_MODE,
  Rs as defaultStyleInfo,
  GE as directionToNames,
  mx as filterAndRankItems,
  XE as generateUsjCss,
  WE as getDefaultViewMode,
  po as getDefaultViewOptions,
  wv as getEnterMenuItems,
  Nv as getMarkerMenuItems,
  HE as getViewMode,
  Ox as getViewOptions,
  Or as isInsertEmbedOpOfType,
  VE as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
