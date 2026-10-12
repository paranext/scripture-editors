import { jsx as v, jsxs as ve, Fragment as Mn } from "react/jsx-runtime";
import { forwardRef as Ln, useState as fe, useRef as Q, useCallback as me, useEffect as B, useMemo as Ve, memo as Wy, createContext as Jf, useContext as Yf, Children as Hy, isValidElement as Gy, cloneElement as Jy, useImperativeHandle as jc, useLayoutEffect as _s } from "react";
import { assertSafeKey as Xe, isValidBookCode as Yy, MARKER_OBJECT_PROPS as Xy, USJ_VERSION as hr, USJ_TYPE as gr, isUsjTextContentLocation as Qy, indexesFromUsjJsonPath as Xf, isUsjAttributeKeyLocation as Zy, isUsjAttributeMarkerLocation as eb, isUsjClosingAttributeMarkerLocation as tb, isUsjMarkerLocation as rb, isUsjClosingMarkerLocation as nb, isUsjPropertyValueLocation as ib, getUsjDocumentLocationTypeName as sb, usjJsonPathFromIndexes as yn, EMPTY_USJ as Qf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as He, $parseSerializedNode as ui, DecoratorNode as Cs, ElementNode as ir, isHTMLElement as In, createState as Po, $getState as ie, $setState as Ct, $isRangeSelection as A, $isElementNode as D, $isTextNode as E, $getSelection as w, $isNodeSelection as No, ParagraphNode as Vc, TextNode as We, $createTextNode as ge, $getCommonAncestor as ob, $isLineBreakNode as Dn, NODE_STATE_KEY as Ss, $getEditor as di, $hasUpdateTag as ab, $getNodeByKey as se, $getRoot as je, $createRangeSelection as rs, $createPoint as Xs, $getCharacterOffsets as Wc, KEY_DOWN_COMMAND as Dr, COMMAND_PRIORITY_HIGH as Se, HISTORY_MERGE_TAG as Zf, CLICK_COMMAND as wo, COMMAND_PRIORITY_EDITOR as En, DELETE_CHARACTER_COMMAND as ep, DELETE_WORD_COMMAND as tp, DELETE_LINE_COMMAND as ja, COMMAND_PRIORITY_NORMAL as qr, CONTROLLED_TEXT_INSERTION_COMMAND as Oo, COMMAND_PRIORITY_CRITICAL as tt, PASTE_COMMAND as fr, CUT_COMMAND as mr, REMOVE_TEXT_COMMAND as cb, SELECTION_CHANGE_COMMAND as tr, isDOMNode as rp, $getNearestNodeFromDOMNode as Si, $isRootNode as np, DROP_COMMAND as Hc, $isDecoratorNode as Un, COPY_COMMAND as fi, COMMAND_PRIORITY_LOW as ht, getDOMSelection as lb, isSelectionWithinEditor as ip, $createRangeSelectionFromDom as ub, $setSelection as Zr, isDOMTextNode as db, BLUR_COMMAND as Gc, $addUpdateTag as en, SKIP_DOM_SELECTION_TAG as fb, CLEAR_HISTORY_COMMAND as pb, $getPreviousSelection as hb, $isRootOrShadowRoot as gb, CAN_UNDO_COMMAND as mb, CAN_REDO_COMMAND as yb, DRAGSTART_COMMAND as bb, $createNodeSelection as sp, getDOMSelectionFromTarget as kb, $onUpdate as op, KEY_ENTER_COMMAND as ap, LineBreakNode as cp, $copyNode as Tb, FOCUS_COMMAND as xb, INSERT_PARAGRAPH_COMMAND as Qs, createEditor as _b, SELECT_ALL_COMMAND as Cb, isExactShortcutMatch as Sb, getDOMTextNode as vb, KEY_ESCAPE_COMMAND as lp, createCommand as Jc, HISTORIC_TAG as Yc, UNDO_COMMAND as up, REDO_COMMAND as dp, CLEAR_EDITOR_COMMAND as Mb } from "lexical";
import { addClassNamesToElement as Yn, removeClassNamesFromElement as ha, $findMatchingParent as Ne, $dfsIterator as fp, $dfs as Fn, mergeRegister as Le, registerNestedElementResolver as pp, $unwrapNode as Va, IS_APPLE as pi } from "@lexical/utils";
import { useLexicalNodeSelection as Eb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Dt } from "fast-equals";
import Hi from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as Ab } from "unicode-segmenter/grapheme";
import { copyToClipboard as Pb, $getLexicalContent as Nb } from "@lexical/clipboard";
import { TreeView as wb } from "@lexical/react/LexicalTreeView";
import * as Ob from "react-dom";
import { createPortal as vn } from "react-dom";
import { LexicalComposer as hp } from "@lexical/react/LexicalComposer";
import { ContentEditable as gp } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as mp } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as yp } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as bp } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Rb } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as qb, createDOMRange as $b, createRectsFromDOMRange as Lb } from "@lexical/selection";
import { autoUpdate as Ib, computePosition as Db, shift as Ub, flip as Fb } from "@floating-ui/dom";
import { $generateNodesFromDOM as zb } from "@lexical/html";
import { AutoFocusPlugin as Kb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Bb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as kp, LexicalCollaboration as jb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Vb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Wb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Hb, $isRootTextContentEmpty as Gb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Jb } from "@lexical/yjs";
import { Array as Iu, Map as Du, YArrayEvent as Yb } from "yjs";
const ga = (e) => He(ui(e)), Xb = {
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
function Tp(e) {
  return Xb[e];
}
const L = " ", Zs = "​", Vt = L, Xc = `${L}|`, Bt = "p", ns = "+", xp = "-", eo = "chapter", Wa = "verse", Uu = "invalid", Qb = "text-spacing", Zb = "formatted-font", ek = "marker-", _p = "external-usj-mutation", Cp = "selection-change", tn = "cursor-change", Ha = "annotation-change", is = "delta-change", Sp = "marker-settle", tk = [
  _p,
  Cp,
  tn,
  Ha,
  is
], An = "zmsc-s", oi = "zmsc-e", rk = [An, oi], nk = [
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
  An,
  oi
], vp = 1, Qc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], ik = Qc.filter((e) => e !== "sid" && e !== "eid");
class rr extends Cs {
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
    return new rr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Ep().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (nk.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: vp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Mp(e) {
  return rk.includes(e);
}
function Ep(e, t, r, n, i) {
  return He(new rr(e, t, r, n, void 0, i));
}
function Je(e) {
  return e instanceof rr;
}
const Zc = "f", sk = [
  // Footnote
  Zc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Ds(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const ok = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Ap = 1;
class we extends ir {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Zc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Ds(t) === "crossref" ? xp : ns), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => ck(t) ? {
        conversion: ak,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return el().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (sk.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Ds(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Ds(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Ds(this.getMarker()))), { element: r };
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
      version: Ap
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
function ak(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: el(t, r, n) };
}
function el(e, t, r, n, i) {
  return He(new we(e, t, r, n, i));
}
function ck(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return we.isValidMarker(t) && e.classList.contains(we.getType());
}
function V(e) {
  return e instanceof we;
}
var x;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(x || (x = {}));
var T;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(T || (T = {}));
const Ga = {
  id: {
    category: x.FileIdentification,
    type: T.Paragraph,
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
    type: T.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: x.FileIdentification,
    type: T.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: x.Remarks,
    type: T.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: x.Remarks,
    type: T.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: x.Remarks,
    type: T.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: x.Introduction,
    type: T.Paragraph,
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
    type: T.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: x.Introduction,
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: x.Introduction,
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: x.Introduction,
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: x.Introduction,
    type: T.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: x.DivisionMarks,
    type: T.Paragraph,
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
    type: T.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: x.DivisionMarks,
    type: T.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: x.DivisionMarks,
    type: T.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: x.DivisionMarks,
    type: T.Paragraph,
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
    type: T.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: x.DivisionMarks,
    type: T.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: x.DivisionMarks,
    type: T.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: x.Paragraphs,
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: x.Paragraphs,
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: x.Poetry,
    type: T.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: x.Poetry,
    type: T.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: x.Poetry,
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: x.Lists,
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Paragraph,
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
    type: T.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: x.Footnotes,
    type: T.Note,
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
    type: T.Note,
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
    type: T.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: x.Footnotes,
    type: T.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: x.Footnotes,
    type: T.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: x.Footnotes,
    type: T.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: x.Footnotes,
    type: T.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: x.Footnotes,
    type: T.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: x.Footnotes,
    type: T.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: x.Footnotes,
    type: T.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: x.Footnotes,
    type: T.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: x.Footnotes,
    type: T.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: x.Footnotes,
    type: T.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: x.CrossReferences,
    type: T.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: x.CrossReferences,
    type: T.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: x.CrossReferences,
    type: T.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: x.CrossReferences,
    type: T.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: x.CrossReferences,
    type: T.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: x.CrossReferences,
    type: T.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: x.CrossReferences,
    type: T.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: x.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: x.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: x.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: x.CrossReferences,
    type: T.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: x.SpecialText,
    type: T.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: x.SpecialText,
    type: T.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: x.SpecialText,
    type: T.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: x.SpecialText,
    type: T.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: x.SpecialText,
    type: T.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: x.SpecialText,
    type: T.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: x.SpecialText,
    type: T.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: x.SpecialText,
    type: T.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: x.SpecialText,
    type: T.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: x.SpecialText,
    type: T.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: x.SpecialText,
    type: T.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: x.SpecialText,
    type: T.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: x.SpecialText,
    type: T.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: x.SpecialText,
    type: T.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: x.SpecialText,
    type: T.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: x.Breaks,
    type: T.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, bn = {
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
}, Fu = {
  p: { children: bn },
  q: { children: bn },
  q1: { children: bn },
  q2: { children: bn },
  q3: { children: bn },
  q4: { children: bn },
  b: { children: bn },
  qm: {
    children: {
      Paragraphs: { add: ["p"], remove: [] }
    }
  },
  c: {
    type: T.Paragraph,
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
    type: T.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: x.SpecialFeatures,
    type: T.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: x.SpecialFeatures,
    type: T.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: x.SpecialFeatures,
    type: T.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function pr(e) {
  const t = Object.hasOwn(Ga, e) ? Ga[e] : void 0, r = Object.hasOwn(Fu, e) ? Fu[e] : void 0;
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
const Pp = "v", Np = "c", kn = "fig", zu = "tr", Ja = "esb", wp = "esbe", Ku = "periph", Bu = "alt", ju = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, lk = {
  "": "start",
  c: "center",
  r: "end"
};
function Vu(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Wu(e) {
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
const uk = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function dk(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Zs && s + 1 < e.length && Wu(e[s + 1]) || (Wu(o) ? (r || (i = t.length, t += o), r = !0) : uk.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function fk(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function pk(e, t) {
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
const hk = /^(?:qt[1-5]?|ts)-[se]$/;
function tl(e) {
  return hk.test(e) || Mp(e);
}
function ma(e, t) {
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
function gk(e, t, r) {
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
      const h = e.indexOf("\\", i), y = h === -1 ? e.length : h;
      a(dk(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = pk(e, i + 1);
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
    if (l === Pp) {
      const { word: h, next: y } = ma(e, i);
      i = y, n.push({ kind: "verse", number: h });
      continue;
    }
    if (l === Np) {
      const { word: h, next: y } = ma(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: h });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, g = t(p)?.type;
    if (g === T.Note || g === void 0 && we.isValidMarker(l)) {
      const { word: h, next: y } = ma(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: h || "+" });
      continue;
    }
    if (g === T.Milestone || g === void 0 && tl(l)) {
      const h = Ck(e, c, l, i);
      if (h)
        n.push(h.token), h.ejectedText && o(h.ejectedText), i = h.next;
      else {
        const y = e.indexOf("\\", i), b = y === -1 ? e.length : y;
        o(e.slice(c, b)), i = b;
      }
      continue;
    }
    g === T.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : g === T.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : to(p) ? (d(), to(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Ja || l === wp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Hu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function to(e) {
  return Object.hasOwn(Hu, e) ? Hu[e] : void 0;
}
function mk(e) {
  return to(e) !== void 0;
}
const yk = /([-\w]+)\s*=\s*"(.*?)"/g, bk = /[\s\u200B]*[\n\r][\s\u200B]*/g, Op = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Ro(e) {
  return Op[e];
}
const kk = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Tk(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ss(e, t, r = Op[t]) {
  const n = e.replace(bk, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(yk)];
  if (s.length > 0) {
    if (!Tk(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      kk.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function qo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function xk(e) {
  const t = _r(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function _k(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ss(e.slice(n + 1, i), r, qo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Ck(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ss(s.slice(o + 1), r, qo(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = _k(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function ur(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", L);
}
function Hr(e) {
  return e.content || (e.content = []), e.content;
}
function _r(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? Hr(u) : d ? Hr(d) : r;
  let p = !1;
  const g = () => {
    if (s)
      return o.length > a ? Hr(o[o.length - 1].object) : Hr(s);
    if (o.length > 0)
      return Hr(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: Bt, content: [] }, f().push(i);
    }
    return Hr(i);
  }, h = (ne) => {
    const N = g();
    typeof ne == "string" && typeof N[N.length - 1] == "string" ? N[N.length - 1] = N[N.length - 1] + ne : N.push(ne);
  }, y = (ne) => {
    for (let N = ne; N < o.length; N += 1) {
      const J = o[N].object;
      J.closed = "false";
    }
  }, b = () => {
    y(0), o.length = 0;
  }, k = (ne) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, ne || (s.closed = "false"), s = void 0);
  }, _ = () => {
    c = void 0, l = void 0;
  }, M = (ne, N, J) => {
    b();
    const [, de, Ae, X] = J, Ee = {
      type: "table:cell",
      marker: X ? N.slice(0, N.indexOf("-")) : N,
      align: lk[de],
      content: []
    };
    X && (Ee.colspan = String(Number(X) + 1 - Number(Ae))), Hr(ne).push(Ee), i = Ee;
  }, C = (ne) => {
    u && (ne || (u.closed = "false"), u = void 0);
  }, $ = () => {
    d = void 0;
  };
  let R, F = "", z;
  const P = () => {
    F && h(ur(F)), F = "";
  }, W = (ne = !1) => {
    R?.type === "sidebar" ? F = "" : ne && F.endsWith(`
`) && (F = F.slice(0, -1)), R = void 0, P();
  }, re = () => {
    if (!z)
      return;
    const ne = { type: "char", marker: z.marker, content: [] };
    z.value && (ne.content = [ur(z.value)]), g().push(ne), o.push({ object: ne }), z = void 0;
  }, Z = (ne, N) => {
    p = !1, _(), b(), k(!1), i = { type: "para", marker: ne, content: [] }, N && (i.content = [ur(N)]), f().push(i);
  }, ye = () => {
    z && (Z(z.marker, z.value), z = void 0);
  };
  let xe;
  const or = (ne) => {
    if (!xe)
      return;
    let { value: N } = xe;
    xe = void 0, ne && N.endsWith(`
`) && (N = N.slice(0, -1));
    const J = N.indexOf("|"), de = J >= 0 ? ss(N.slice(J + 1), Ku) : void 0, Ae = J >= 0 ? N.slice(0, J) : N, X = J >= 0 && (!de || !!Ae && !!de[Bu]), Ee = X ? void 0 : de, Ar = X ? N : Ae, Lt = {
      type: "periph",
      ...Ar ? { [Bu]: ur(Ar) } : {},
      ...Ee
    };
    Lt.content = [], f().push(Lt), d = Lt, i = void 0;
  };
  let Ie;
  const hn = () => {
    if (Ie) {
      if (Ie.shape === "para")
        Z(kn, Ie.value);
      else {
        const ne = { type: "char", marker: kn, content: [] };
        Ie.value && (ne.content = [ur(Ie.value)]), g().push(ne), o.push({ object: ne });
      }
      Ie = void 0;
    }
  }, Er = gk(e, t?.getMarker ?? pr, n);
  for (let ne = 0; ne < Er.length; ne++) {
    const N = Er[ne];
    if (z) {
      if (N.kind === "text") {
        z.value += N.text;
        continue;
      }
      if (z.shape === "char" && N.kind === "end" && N.marker.replace(/^\+/, "") === z.marker) {
        if (z.value.trim() === "") {
          g().push({ type: "char", marker: z.marker, content: [] }), z = void 0, W();
          continue;
        }
        Object.assign(z.target, {
          [z.attrName]: ur(z.value.trim())
        });
        const J = z.marker;
        if (z = void 0, J === "ca") {
          const de = Er[ne + 1];
          de?.kind === "text" && /^[\s\u200B]*$/.test(de.text) && ne++;
        }
        continue;
      }
      if (z.shape === "para" && (N.kind === "para" || N.kind === "chapter")) {
        const J = z.value.replace(/[\s\u200B]+$/, "");
        J === "" ? (Z(z.marker), z = void 0) : (Object.assign(z.target, { [z.attrName]: ur(J) }), z = void 0);
      } else {
        R = void 0, (N.kind === "para" || N.kind === "chapter") && z.value.endsWith(`
`) && (z.value = z.value.slice(0, -1)), z.shape === "para" ? ye() : re(), ne--;
        continue;
      }
    }
    if (xe) {
      if (N.kind === "text" || N.kind === "optbreak") {
        xe.value += N.kind === "text" ? N.text : "//";
        continue;
      }
      or(N.kind === "para" || N.kind === "chapter"), ne--;
      continue;
    }
    if (Ie) {
      if (N.kind === "text" || N.kind === "optbreak") {
        Ie.value += N.kind === "text" ? N.text : "//";
        continue;
      }
      if (N.kind === "end" && N.marker.replace(/^\+/, "") === kn) {
        const J = Ie.value.indexOf("|"), de = J >= 0 ? ss(Ie.value.slice(J + 1), kn) : void 0;
        if (de) {
          const Ae = {};
          for (const [Ar, Lt] of Object.entries(de))
            Ae[Ar === "src" ? "file" : Ar] = Lt;
          const X = {
            type: "figure",
            marker: kn,
            ...Ae
          }, Ee = Ie.value.slice(0, J);
          Ee && (X.content = [ur(Ee)]), h(X), Ie = void 0;
          continue;
        }
      }
      hn(), ne--;
      continue;
    }
    if (R)
      if (N.kind === "text") {
        if (N.text.includes(`
`) && /^[\s\u200B]*$/.test(N.text)) {
          F += N.text;
          continue;
        }
        W();
      } else if (N.kind === "charOpen" || N.kind === "para") {
        const J = N.kind === "para" || !N.isNested ? to(N.marker) : void 0;
        if (J && J.targetTypes.includes(R.type)) {
          F = "", z = {
            target: R,
            attrName: J.attrName,
            marker: N.marker,
            shape: J.shape,
            value: ""
          };
          continue;
        }
        W(N.kind === "para");
      } else
        W(N.kind === "chapter");
    if (!s && !n && (N.kind === "charOpen" && !N.isNested && N.marker === kn || N.kind === "para" && N.marker === kn)) {
      b(), Ie = { shape: N.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (N.kind) {
      case "text": {
        let J = N.text;
        if (!s && J.endsWith(`
`)) {
          const de = Er[ne + 1];
          (de === void 0 || de.kind === "para" || de.kind === "chapter") && (J = J.slice(0, -1));
        }
        J && h(ur(J));
        break;
      }
      case "para": {
        const J = !s && !n;
        if (J && N.marker === zu) {
          b(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: zu, content: [] }, Hr(c).push(l), i = l, p = !1;
          break;
        }
        if (J && l) {
          const de = ju.exec(N.marker);
          if (de && Vu(de)) {
            M(l, N.marker, de);
            break;
          }
        }
        if (_(), !n && N.marker === Ja) {
          b(), k(!1), C(!1);
          const de = {
            type: "sidebar",
            marker: Ja,
            content: []
          };
          f().push(de), u = de, i = void 0, R = u, p = !1;
          break;
        }
        if (N.marker === wp && u) {
          b(), k(!1), C(!0), i = void 0;
          break;
        }
        if (!n && N.marker === Ku) {
          b(), k(!1), C(!1), $(), xe = { value: "" }, i = void 0, p = !1;
          break;
        }
        Z(N.marker);
        break;
      }
      case "verse": {
        k(!1);
        const J = { type: "verse", marker: Pp, number: N.number };
        h(J), R = J;
        break;
      }
      case "chapter": {
        b(), k(!1), _(), C(!1), $(), i = void 0;
        const J = {
          type: "chapter",
          marker: Np,
          number: N.number
        };
        r.push(J), R = J, p = !0;
        break;
      }
      case "note": {
        k(!1);
        const J = g();
        s = { type: "note", marker: N.marker, caller: N.caller, content: [] }, a = o.length, J.push(s), R = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !N.isNested) {
          const Ae = ju.exec(N.marker);
          if (Ae && Vu(Ae)) {
            M(l, N.marker, Ae);
            break;
          }
        }
        if (!N.isNested) {
          const Ae = s ? a : 0;
          y(Ae), o.length = Ae;
        }
        const J = g(), de = { type: "char", marker: N.marker, content: [] };
        J.push(de), o.push({ object: de });
        break;
      }
      case "end": {
        const J = N.marker.replace(/^\+/, ""), de = s ? a : 0, Ae = o.findLastIndex((X, Ee) => Ee >= de && X.object.marker === J);
        Ae >= 0 ? (Sk(o[Ae].object), y(Ae + 1), o.length = Ae) : s && s.marker === J ? k(!0) : (y(de), o.length = de, h({ type: "unmatched", marker: `${N.marker}*` }));
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
  if (xe && or(!0), Ie && hn(), z)
    if (z.shape === "para") {
      const ne = z.value.replace(/[\s\u200B]+$/, "");
      ne === "" ? Z(z.marker) : Object.assign(z.target, { [z.attrName]: ur(ne) }), z = void 0;
    } else
      z.value.endsWith(`
`) && (z.value = z.value.slice(0, -1)), re();
  b(), k(!1), C(!1);
  const Pt = (ne) => {
    for (const N of ne)
      typeof N != "string" && N.content && (Pt(N.content), N.content.length === 0 && delete N.content);
  };
  return Pt(r), r;
}
function Sk(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ss(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Pn = Po("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), rn = Po("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ce = Po("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Cr = "marker-trailing-space", Rp = 1, vk = "marker", rl = Po("isGutterMarker", {
  parse: (e) => e === !0
});
class Ur extends Cs {
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
      span: (t) => Pk(t) ? {
        conversion: Mk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return $r().updateFromJSON(t);
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
      version: Rp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Mk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: $r(t, r) };
}
function $r(e, t) {
  return He(new Ur(e, t));
}
function Ek(e) {
  return Ct($r(vk, e), rl, !0);
}
function Ak(e) {
  return Wt(e) && ie(e, rl);
}
function Pk(e) {
  return e?.tagName === "span";
}
function Wt(e) {
  return e instanceof Ur;
}
function qp(e) {
  return e?.type === Ur.getType();
}
const Qr = "internal-comment", Nk = [Qr], $p = Object.freeze({}), Ya = Object.freeze({}), Xa = Object.freeze({}), Qa = Object.freeze({}), Za = Object.freeze({}), wk = 1, Xn = /* @__PURE__ */ new Map(), Ui = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map();
class rt extends ir {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = $p, r, n, i, s, o) {
    super(o), this.__typedIDs = Us(t), this.__typedOnClicks = ya(r), this.__typedOnRemoves = ba(n), this.__typedOnMouseEnters = ka(i), this.__typedOnMouseLeaves = Ta(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Us(t.__typedIDs), n = ya(t.__typedOnClicks), i = ba(t.__typedOnRemoves), s = ka(t.__typedOnMouseEnters), o = Ta(t.__typedOnMouseLeaves);
    return new rt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Nk.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return os().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: wk
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Yn(n, Tn(t.theme.typedMark, a)), c.length > 1 && Yn(n, Tn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Yn(n, Tn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = Tn(n.theme.typedMark, s), d = Tn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Yn(r, u) : l === 0 && ha(r, u), c === 1 ? l === 2 && Yn(r, d) : l === 1 && ha(r, d));
      const f = new Set(o), p = new Set(a);
      for (const g of o)
        p.has(g) || ha(r, Tn("annotationId", g));
      for (const g of a)
        f.has(g) || Yn(r, Tn("annotationId", g));
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
    return Te(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Us(r.__typedIDs);
    r.__typedIDs = Us(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && ro(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = ya(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Te(t) ? Xn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ba(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Te(t) ? Ui.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = ka(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Te(t) ? Qn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Ta(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Te(t) ? Zn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Te(a))
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
    if (!Te(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && ro(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = os(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Xn.delete(r.getKey()), Ui.delete(r.getKey()), Qn.delete(r.getKey()), Zn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ya) {
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
    const i = Gr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Gr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Ya) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Xa) {
      const t = Ui.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Ui.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Ui.set(this.getKey(), this.__typedOnRemoves);
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
    const i = Gr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Gr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Xa) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Qa) {
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
    const i = Gr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Gr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Qa) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Za) {
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
    const i = Gr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Gr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Za) {
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
    const i = Ok(t, r);
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
    for (; Te(t) && Ju(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Te(r) && Ju(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Rk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = qk(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = $k(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Lk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Us(e = $p) {
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
function ya(e) {
  if (!e || e === Ya)
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
function ba(e) {
  if (!e || e === Xa)
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
function ka(e) {
  if (!e || e === Qa)
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
function Ta(e) {
  if (!e || e === Za)
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
function Gr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Gu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Ok(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Ju(e, t) {
  const r = Gu(e), n = Gu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Rk(e, t) {
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
function qk(e, t) {
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
function $k(e, t) {
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
function Lk(e, t) {
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
function Tn(e, t) {
  return `${e}-${t}`;
}
function Yu(e) {
  return `external-${e}`;
}
function os(e, t, r, n, i) {
  return He(new rt(e, t, r, n, i));
}
function Te(e) {
  return e instanceof rt;
}
function Lp(e) {
  return e?.type === rt.getType();
}
function ro(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Ip(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let g, h;
  for (let y = 0; y < u; y++) {
    const b = a[y];
    if (D(h) && h.isParentOf(b))
      continue;
    const k = y === 0, _ = y === u - 1;
    let M = null;
    if (E(b)) {
      const C = b.getTextContentSize(), $ = k ? f : 0, R = _ ? p : C;
      if ($ === 0 && R === 0)
        continue;
      const F = b.splitText($, R);
      M = F.length > 1 && (F.length === 3 || k && !_ || R === C) ? F[1] : F[0];
    } else {
      if (Te(b))
        continue;
      D(b) && b.isInline() && (M = b);
    }
    if (M !== null) {
      if (M && M.is(g))
        continue;
      const C = M.getParent();
      (C == null || !C.is(g)) && (h = void 0), g = C, h === void 0 && (h = os(), h.addID(t, r, n, i, s, o), M.insertBefore(h)), h.append(M);
    } else
      g = void 0, h = void 0;
  }
  t === Qr && D(h) && (d ? h.selectStart() : h.selectEnd());
}
function Ik(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Te(n))
      return n.getTypedIDs()[t];
    if (E(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Te(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Dk = ["type", "marker", "content"], ec = "unknown", Dp = 1, Uk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class zn extends ir {
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
    return new zn(r, n, i, s);
  }
  static importDOM() {
    return {
      [ec]: (t) => zk(t) ? {
        conversion: Fk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return nl().updateFromJSON(t);
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
    return Uk.has(this.getTag());
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
    const t = document.createElement(ec);
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
      version: Dp
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
    if (No(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function Fk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: nl(t, r) };
}
function nl(e, t, r) {
  return He(new zn(e, t, r));
}
function zk(e) {
  return e?.tagName.toLowerCase() === ec;
}
function ze(e) {
  return e instanceof zn;
}
const Up = 1, Kk = "attribute-run";
function xa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Fr extends ir {
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
    t.classList.add(Kk);
    const r = xa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = xa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = xa(this.__runKind);
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
  return He(new Fr(e));
}
function Fe(e) {
  return e instanceof Fr;
}
const as = "id", zp = 1, Bk = [
  "type",
  "marker",
  "code",
  "content"
];
class Ot extends ir {
  __marker = as;
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
    return new Ot(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Kp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Yy(t);
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
      version: zp
    };
  }
}
function Kp(e, t) {
  return He(new Ot(e, t));
}
function ke(e) {
  return e instanceof Ot;
}
function il(e) {
  return e?.type === Ot.getType();
}
const no = "c", Bp = 1, jk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class $t extends ir {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = no, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new $t(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return jp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(eo, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
function jp(e, t, r, n, i) {
  return He(new $t(e, t, r, n, i));
}
function Pe(e) {
  return e instanceof $t;
}
function Vk(e) {
  return e?.type === $t.getType();
}
const Vp = [
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
], Wp = [
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
], Wk = [
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
  ...Vp,
  ...Wp
], Hp = 1, Hk = ["type", "marker", "content"];
class be extends ir {
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
    return t !== void 0 && (Wk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Vp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Wp.includes(t);
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
      span: (t) => Jk(t) ? {
        conversion: Gk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Lr().updateFromJSON(t);
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
    return Xu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Xu(r, this.__marker, n)), !1;
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
      version: Hp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Lr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Xu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Gk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Lr(t) };
}
function Lr(e, t) {
  return He(new be(e, t));
}
function Jk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return be.isValidMarker(t) && e.classList.contains(be.getType());
}
function U(e) {
  return e instanceof be;
}
function Yk(e) {
  return e?.type === be.getType();
}
const Gp = 1, Xk = "c", Jp = "span";
class Sr extends Cs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Xk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Sr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Yp(t) ? {
        conversion: Qk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return sl().updateFromJSON(t);
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
    const t = document.createElement(Jp);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(eo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(eo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? jt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Gp
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
function Qk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: sl(t) };
}
function sl(e, t, r, n, i, s) {
  return He(new Sr(e, t, r, n, i, s));
}
function Yp(e) {
  return e ? e.classList.contains(eo) && e.tagName.toLowerCase() === Jp : !1;
}
function vs(e) {
  return e instanceof Sr;
}
function Zk(e) {
  return e?.type === Sr.getType();
}
const Xp = 1;
class nn extends Vc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new nn(t.__key);
  }
  static importJSON(t) {
    return Zt().updateFromJSON(t);
  }
  getMarker() {
    return Bt;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Xp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Zt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Zt() {
  return He(new nn());
}
function yr(e) {
  return e instanceof nn;
}
function $o(e) {
  return e?.type === nn.getType();
}
const eT = [
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
  Bt,
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
], Qp = 1, tT = ["type", "marker", "content"];
class it extends Vc {
  __marker;
  __unknownAttributes;
  constructor(t = Bt, r, n) {
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
    return t !== void 0 && (eT.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: rT,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return hi().updateFromJSON(t);
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
      version: Qp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = hi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function rT(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = hi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function hi(e, t) {
  return He(new it(e, t));
}
function ae(e) {
  return e instanceof it;
}
function ol(e) {
  return e?.type === it.getType();
}
const io = "v", Zp = 1, nT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class gt extends We {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = io, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new gt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return eh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Wa, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Zp
    };
  }
}
function eh(e, t, r, n, i, s) {
  return He(new gt(e, t, r, n, i, s));
}
function qe(e) {
  return e instanceof gt;
}
function th(e) {
  return e?.type === gt.getType();
}
const iT = "​", gi = iT;
var Qu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Qu || (Qu = {}));
var Zu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Zu || (Zu = {}));
function sT() {
  return ge(gi);
}
function oT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(gi, ""));
}
function Ms(e) {
  return e.length > 0 && e.includes(gi) && e.replaceAll(gi, "") === "";
}
function al(e) {
  return E(e) && Ms(e.getTextContent());
}
function rh(e) {
  return Vk(e) || Zk(e);
}
function Ye(e) {
  return Pe(e) || vs(e);
}
function nh(e, t) {
  return e.find((r) => Ye(r) && r.getNumber() === t.toString());
}
function aT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ye(r));
}
function ed(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function ih(e) {
  if (!e)
    return;
  if (Ye(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Ye(t); )
    t = t.getPreviousSibling();
  if (t && Ye(t))
    return t;
}
function nr(e) {
  return Ne(e, V) ?? void 0;
}
function cT(e) {
  return ke(e) || Pe(e) || U(e) || vs(e) || yr(e) || Je(e) || ae(e) || V(e) || qe(e) || ze(e);
}
function cl(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function sh(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Ke(e) {
  return nt(e) || ke(e);
}
function nt(e) {
  return ae(e) || yr(e);
}
function lT(e) {
  return ol(e) || $o(e);
}
function so(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Nn(e, t) {
  const r = ie(t, Pn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function uT(e, t) {
  const r = D(e) ? e : e.getParent(), n = D(t) ? t : t.getParent(), i = r && n ? ob(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function dT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function mi(e) {
  return e?.type === We.getType();
}
function fT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function pT(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function $e(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function at(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function oh(e, t, r) {
  const n = $e(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function jt(e, t) {
  let r = $e(e);
  return t && (r += `${L}${t}`), r += " ", r;
}
function hT(e) {
  const t = e[Ss];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function ah(e) {
  return lh(e) || mi(e) && hT(e) === "attribute" ? "" : mi(e) && e.text !== L ? e.text : Yk(e) ? e.children.map((t) => ah(t)).join("") : "";
}
function gT(e) {
  return e.map((r) => ah(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Rt(e) {
  return " " + e + L;
}
function ll(e) {
  const t = [];
  for (const r of e) {
    if (!U(r))
      continue;
    const n = ch(r);
    n !== Vt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function ch(e) {
  return O(e) || vr(e) || E(e) && ie(e, ce) === "attribute" ? "" : E(e) ? e.getTextContent() : D(e) ? e.getChildren().map((t) => ch(t)).join("") : "";
}
function vr(e) {
  return Wt(e) && e.getTextType() === "marker";
}
function Et(e) {
  return O(e) || vr(e);
}
function ul(e) {
  if (!e || !Et(e))
    return !1;
  const t = e.getParent();
  return ke(t) && e.is(t.getFirstChild());
}
function lh(e) {
  return hl(e) || qp(e) && e.textType === "marker";
}
function td(e, t) {
  mT(e, t), e.setMarker(t);
}
function mT(e, t) {
  const r = e.getMarker(), n = $e(r), i = $e(r, !0), s = at(r), o = at(r, !0), a = be.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Et(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (vr(c)) {
        const f = l.startsWith($e("", !0));
        c.setTextContent(u ? $e(t, f) : at(t, f));
      }
    }
  });
}
function Be(e, t = Xy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Oe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function uh(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function dl(e) {
  if (!A(e))
    return rd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !D(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return rd(e) ?? t ?? void 0;
  } catch (n) {
    if (uh(n))
      return t ?? void 0;
    throw n;
  }
}
function yT(e, t) {
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
function fl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function dh(e) {
  return !!e && e.includes("-");
}
function fh(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function rd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function pl(e) {
  if (!e)
    return !1;
  if (Dn(e) || O(e) || vr(e) || Fe(e) || Wt(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = ie(e, ce);
    if (t === Cr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === L || Ms(r))
      return !0;
  }
  return !1;
}
function Lo() {
  const e = ge(L);
  return Ct(e, ce, Cr), e.setMode("token"), e;
}
function bT(e) {
  const t = e.getTextContent();
  t.startsWith(L) || e.setTextContent(L + t);
}
function un(e) {
  return E(e) && ie(e, ce) === Cr;
}
function ph(e) {
  const t = e.getFirstChild();
  if (!Et(t) || t === null || un(t.getNextSibling()))
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
function vi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!pl(s)) {
      if (Te(s)) {
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
function Io(e) {
  let t = e.getParent();
  for (; t && Te(t); )
    t = t.getParent();
  return t;
}
function kT(e, t) {
  return vi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function TT(e, t) {
  const r = Io(e);
  if (!r)
    return;
  const n = vi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function xT(e, t) {
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
function hh(e, t) {
  const r = vi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (pl(n))
    return hh(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || so(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || so(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function _T(e, t) {
  if (t <= 0)
    return 0;
  const r = vi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? CT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function CT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const ST = 1;
class Mr extends We {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Cn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Mr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return dt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || Cn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Cn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Cn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Cn(r.__marker, r.__markerSyntax, t), r;
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
      version: ST
    };
  }
}
function dt(e, t, r) {
  return He(new Mr(e, t, void 0, r));
}
function O(e) {
  return e instanceof Mr;
}
function hl(e) {
  return e?.type === Mr.getType();
}
function dn(e) {
  return e.getTextContent() === Cn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function vT(e) {
  e.setTextContent(Cn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Cn(e, t, r = !1) {
  return t === "closing" ? at(e, r) : t === "selfClosing" ? at("") : $e(e, r);
}
const MT = /* @__PURE__ */ new Set(["closed"]);
function dr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !MT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function gh(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function mh(e) {
  const t = Object.keys(e).filter((n) => !ik.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function yh(e, t, r, n) {
  return gh(
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
function Xi(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function ET(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Xi(e) === void 0 && bh(e) === void 0;
}
function bh(e) {
  return e.getChildren().find((t) => E(t) && ie(t, ce) === "attribute");
}
function cs(e, t) {
  return Es(e.getNextSibling(), t);
}
const AT = /^[ \u00A0]+$/;
function gl(e) {
  if (dn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = $e(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && AT.test(r.slice(t.length));
}
function Es(e, t) {
  let r, n, i, s;
  return Fe(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  gl(e) && (r = e, e = e.getNextSibling()), E(e) && ie(e, ce) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && dn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function ls(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!O(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (E(n) && n.getTextContent() === Rt(e.getCaller()))
    return n;
}
function kh(e) {
  const t = ls(e);
  return t ? Es(t.getNextSibling(), "cat") : {};
}
function Do(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || O(t)) && ie(t, ce) !== "attribute")
    return t;
}
function Th(e) {
  const t = Do(e);
  return t ? Es(t.getNextSibling(), "ca") : {};
}
function xh(e) {
  const t = Do(e);
  if (!t)
    return;
  const r = Es(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function _h(e) {
  const t = xh(e);
  return t ? Es(t.getNextSibling(), "cp") : {};
}
function Ch(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (qe(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && ie(n, ce) === "attribute" || U(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Fe(n)))
        return;
    }
}
function Uo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Fe(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  gl(s) && (t = s, s = s.getNextSibling()), E(s) && ie(s, ce) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && dn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function ml(e) {
  return U(Io(e));
}
function tc(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? ml(t) : t.getChildren().some((i) => U(i) && i.getMarker() === r) ? !0 : void 0;
}
function PT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = tc(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Fo(e) {
  return E(e) && e.getType() === We.getType() && ie(e, ce) !== "attribute";
}
function yl(e, t) {
  if (e.getMarkerSyntax() !== "opening" || tc(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? tc(r, t) === !0 ? "spacer" : void 0 : Fo(r) ? r.getTextContent().startsWith(L) ? void 0 : "prefix" : "spacer";
}
function NT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && yl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Sh(e, t) {
  const r = w();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function vh(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = yl(t, e);
    if (r !== void 0 && !Sh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(L + n.getTextContent());
      } else
        t.insertAfter(ge(L));
  });
}
function Mh(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && yl(t, e) !== void 0 && Sh(t, e)) : !1;
}
const wT = "file", OT = "src", RT = "colspan", qT = "category", $T = "alt", LT = "closed", IT = "false";
function DT(e) {
  return e[LT] !== IT;
}
function UT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === wT ? OT : t,
    r
  ]));
}
function Eh(e, t) {
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
function Ah(e, t, r) {
  const n = r ?? {}, i = DT(n);
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
        opening: `\\${Eh(t, n[RT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: dr(UT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [qT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + dr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [$T]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: dr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: dr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const vt = { wantsRun: !1, valueText: void 0 }, zr = {};
function _a(e, t) {
  if (t === "va")
    return e;
  const r = cs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function bl(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (D(e)) {
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
  if (!A(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function FT(e) {
  return Fe(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && ie(e, ce) === "attribute";
}
function zT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!E(e) || ie(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Ca(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (qe(t))
      return t;
    if (!FT(t))
      return;
  }
}
function nd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => qe(t),
    ownerOf: (t) => {
      if (Fe(t))
        return t.getRunKind() === e ? Ca(t) : void 0;
      const r = t.getParent();
      return Fe(r) ? r.getRunKind() === e ? Ca(r) : void 0 : zT(t) === e ? Ca(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!qe(t))
        return vt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? vt : { wantsRun: !0, valueText: L + r };
    },
    scanPieces: (t) => qe(t) ? cs(_a(t, e), e) : zr,
    graceSite: (t, r) => qe(t) ? !r.opener && !r.closer ? bl(_a(t, e)) : zo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => qe(t) ? _a(t, e) : void 0
    }
  };
}
const KT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => zr,
  graceSite: (e) => U(e) && Mh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, BT = {
  kind: "char",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (!E(e) || ie(e, ce) !== "attribute")
      return;
    const t = e.getParent();
    return U(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || Xi(e) === void 0)
      return vt;
    const t = dr(e.getUnknownAttributes() ?? {}, Ro(e.getMarker()));
    return t === "" ? vt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => U(e) ? { value: bh(e) } : zr,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const r = Xi(e);
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
    insertRunBefore: (e) => U(e) ? Xi(e) : void 0
  }
};
function Ph(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!E(e) || ie(e, ce) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function jT(e) {
  const t = e.getParent();
  if (!V(t))
    return;
  const r = ls(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Ph(n))
        return;
    }
}
const VT = {
  kind: "cat",
  ownerPredicate: (e) => V(e),
  ownerOf: (e) => {
    if (Fe(e))
      return e.getRunKind() === "cat" && V(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Fe(t) ? t.getRunKind() === "cat" && V(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Ph(e) ? jT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!V(e) || e.getIsCollapsed() !== !1)
      return vt;
    const t = e.getCategory();
    return t === void 0 ? vt : { wantsRun: !0, valueText: L + t };
  },
  scanPieces: (e) => V(e) ? kh(e) : zr,
  graceSite: (e, t) => {
    if (!V(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = ls(e);
      return r !== void 0 && bl(r);
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
    insertRunAfter: (e) => V(e) ? ls(e) : void 0
  }
};
function WT(e) {
  return Fe(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && ie(e, ce) === "attribute";
}
function HT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!E(e) || ie(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function GT(e) {
  const t = e.getParent();
  if (!Pe(t))
    return;
  const r = Do(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!WT(n))
        return;
    }
}
function id(e) {
  const t = (r) => Pe(r) ? e === "ca" ? Do(r) : xh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Pe(r),
    ownerOf: (r) => {
      if (Fe(r))
        return r.getRunKind() === e && Pe(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Fe(n) ? n.getRunKind() === e && Pe(n.getParent()) ? n.getParent() ?? void 0 : void 0 : HT(r) === e ? GT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Pe(r))
        return vt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? vt : { wantsRun: !0, valueText: L + n };
    },
    scanPieces: (r) => Pe(r) ? e === "ca" ? Th(r) : _h(r) : zr,
    graceSite: (r, n) => {
      if (!Pe(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && bl(i);
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
function Nh(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && ie(e, ce) === "attribute";
}
function JT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Je(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Nh(t))
      return;
  }
}
const YT = {
  kind: "milestone",
  ownerPredicate: (e) => Je(e),
  ownerOf: (e) => {
    const t = Fe(e) ? e.getRunKind() === "milestone" ? e : void 0 : Fe(e.getParent()) ? e.getParent() : Nh(e) ? e : void 0;
    if (!t || Fe(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Fe(t) ? Je(r) ? r : void 0 : JT(t);
  },
  expectedPieces: (e) => {
    if (!Je(e))
      return vt;
    const t = yh(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = dr(t, qo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : L + r };
  },
  scanPieces: (e) => {
    if (!Je(e))
      return zr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Uo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Je(e))
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
    return zo(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Je(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, XT = Ah("optbreak", void 0, void 0).opening, QT = {
  kind: "optbreak",
  ownerPredicate: (e) => ze(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!ze(t) || t.getTag() !== "optbreak"))
      return E(e) || Wt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: XT }),
  scanPieces: (e) => ze(e) ? { value: e.getFirstChild() ?? void 0 } : zr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, ZT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => ze(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => zr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, ex = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => zr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, us = [
  KT,
  BT,
  nd("va"),
  nd("vp"),
  VT,
  id("ca"),
  id("cp"),
  YT,
  QT,
  ZT,
  ex
], tx = new Map(us.map((e) => [e.kind, e]));
function wn(e) {
  const t = tx.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function On(e) {
  for (const t of us) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function wh(e) {
  return On(e) !== void 0;
}
const oo = "unmatched", Oh = 2;
function Qi(e) {
  return `\\${e}`;
}
class Kr extends We {
  __marker;
  constructor(t = "", r) {
    super(Qi(t), r), this.__marker = t, this.__mode = 1;
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
      [oo]: (t) => nx(t) ? {
        conversion: rx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return kl().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Qi(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Qi(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Uu), r.title = sd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = sd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(oo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Uu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Oh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Rh(e) {
  return e.getTextContent() === Qi(e.getMarker());
}
function sd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function rx(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: kl(t) };
}
function kl(e) {
  return He(new Kr(e));
}
function nx(e) {
  return e?.tagName.toLowerCase() === oo;
}
function fn(e) {
  return e instanceof Kr;
}
const qh = "table", rc = "immutable-table", $h = 1, ix = ["type", "marker", "content"];
class Kn extends ir {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return rc;
  }
  static clone(t) {
    return new Kn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return sx().updateFromJSON(t);
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
      type: rc,
      ...t !== void 0 && { unknownAttributes: t },
      version: $h
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function sx(e) {
  return He(new Kn(e));
}
function Lh(e) {
  return e instanceof Kn;
}
function ox(e) {
  return e?.type === rc;
}
const Ih = "table:row", od = "immutable-table-row", Dh = 1, nc = "tr", ax = ["type", "marker", "content"];
class Mi extends ir {
  __marker;
  __unknownAttributes;
  constructor(t = nc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return od;
  }
  static clone(t) {
    return new Mi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return cx().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? nc).setUnknownAttributes(t.unknownAttributes);
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
      type: od,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Dh
    };
  }
}
function cx(e, t) {
  return He(new Mi(e, t));
}
const Uh = "table:cell", ad = "immutable-table-cell", Fh = 1, ic = "tc1", lx = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function ux(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Ei extends ir {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = ic, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return ad;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Ei(r, n, i, s, o);
  }
  static importJSON(t) {
    return dx().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? ic).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = ux(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: ad,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Fh
    };
  }
}
function dx(e, t, r, n) {
  return He(new Ei(e, t, r, n));
}
function As(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Ht(e, t) {
  const r = As(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function ds(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function fx(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function px(e) {
  return ds(e) ? void 0 : { closed: "false" };
}
function hx(e, t, r, n) {
  const i = t.getMarker(), s = ml(t), o = fx(t);
  if (n) {
    e.append(dt(i, "opening", s));
    const [a] = r;
    Fo(a) && !a.getTextContent().startsWith(L) && a.setTextContent(L + a.getTextContent());
  }
  e.append(...r), o && e.append(dt(i, "closing", s));
}
function Rn(e) {
  return Ne(e, U) ?? void 0;
}
function gx(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function sc(e) {
  const t = zh(e);
  return e.getChildren().every((r) => O(r) || t && ie(r, ce) === "attribute" || E(r) && r.getTextContent().replaceAll(L, "") === "");
}
function zh(e) {
  return ds(e);
}
function mx(e, t) {
  const r = e.getUnknownAttributes(), n = r ? dr(r, Ro(e.getMarker())) : "";
  n !== "" && t.insertAfter(ge(n)), e.remove();
}
function yx(e, t) {
  if (ds(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(dt(e.getMarker(), "closing", ml(e)));
}
function bx(e, t) {
  return U(e) && !ds(e) && !ds(t);
}
function kx(e, t, r) {
  sc(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && Fo(n) && !n.getTextContent().startsWith(L) && n.setTextContent(L + n.getTextContent()), e.append(...t);
}
function Tx(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = zh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = O(l) && l.getMarkerSyntax() === "closing", f = s && ie(l, ce) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = bx(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      kx(e, o, n);
    else {
      const l = Lr(t.getMarker(), px(t));
      hx(l, t, o, n), e.insertAfter(l), sc(l) ? l.remove() : c = l;
    }
  i && !a && yx(t, n), sc(t) && mx(t, c);
}
function yi(e, t) {
  let r = e.getParent();
  for (; U(r); )
    Tx(e, r, t), r = e.getParent();
}
function Ko(e) {
  if (E(e) && !O(e)) {
    const t = e.getTextContent().startsWith(L) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (D(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      Ko(t);
      return;
    }
    e.selectEnd();
  }
}
const ai = /* @__PURE__ */ new WeakMap();
function xx(e, t) {
  return ai.set(e, t), () => {
    ai.get(e) === t && ai.delete(e);
  };
}
function cd(e) {
  return ai.get(e);
}
function _x(e) {
  return ai.get(di())?.has(e.getKey()) ?? !1;
}
function Cx(e) {
  ai.get(di())?.add(e.getKey());
}
function Sx(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function oc(e) {
  return !!(e.opener || e.value || e.closer);
}
function ld(e) {
  return /^\s/.test(e);
}
function Tl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !ld(t) || !ld(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Bo(e, t, r) {
  return r.wantsRun ? Tl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : Sx(t);
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
function Kh(e, t) {
  return !oc(e.scanPieces(t));
}
function Ps(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Bo(e, n, r))
    return !1;
  const i = w();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || so(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function Mx(e, t, r, n) {
  return !r.wantsRun || oc(n) || ab(is) ? !1 : di().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : oc(e.scanPieces(i));
  });
}
function Ex(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function ud(e) {
  const t = ge(e);
  return Ct(t, ce, "attribute"), t;
}
function Ax(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Fp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function Px(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(ud(n.valueText));
    return;
  }
  const l = Ax(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = dt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : E(d) ? Tl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = ud(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(dt(a === "selfClosing" ? "" : o(t), a));
}
function fs(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Bo(e, i, n) && !_x(t)) {
    if (Mx(e, t, n, i)) {
      Cx(t);
      return;
    }
    if (!Ps(e, t)) {
      if (!n.wantsRun) {
        Ex(i);
        return;
      }
      Px(e, t, i, n);
    }
  }
}
function Nx(e, t, r) {
  fs(e, t), t.isAttached() && Ps(e, t) && r.add(t.getKey());
}
function xl(e) {
  if (!E(e))
    return !1;
  if (O(e) || qe(e) || fn(e))
    return !0;
  const t = ie(e, ce);
  return t === "attribute" || t === Cr;
}
function _l(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && dn(e) && U(e.getParent())) : !1;
}
function wx() {
  const e = w();
  return A(e) ? _l(e.focus.getNode(), e.focus.offset) : !1;
}
function Bh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && xl(t) ? t : void 0;
}
function Ox(e) {
  const t = Bh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function Rx(e) {
  const t = Bh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function dd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function fd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function qx(e, t) {
  let r = Rx(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!xl(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function pd(e, t) {
  const r = qx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Cl(e) {
  if (e.isCollapsed()) {
    const a = Ox(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [dd(r), dd(n)], s = pd(r, "next"), o = pd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (fd(r, i[0]), fd(n, i[1]), !1) : !0;
}
const ao = "verse-block", jh = 1, $x = "verse-block";
class Ai extends ir {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return ao;
  }
  static clone(t) {
    return new Ai(t.__number, t.__key);
  }
  static importJSON(t) {
    return Lx().updateFromJSON(t);
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
    return fh(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add($x), hd(t, this.__number), t;
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
      type: ao,
      number: this.getNumber(),
      version: jh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function hd(e, t) {
  const { start: r, end: n } = fh(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), gd(e, "data-verse-start", i ? r : NaN), gd(e, "data-verse-end", i ? n : NaN);
}
function gd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function Lx(e) {
  return He(new Ai(e));
}
function ps(e) {
  return e instanceof Ai;
}
function Ix(e) {
  return e?.type === ao;
}
const Dx = [
  Ot,
  Sr,
  $t,
  gt,
  be,
  we,
  rr,
  Mr,
  zn,
  Ur,
  Kr,
  it,
  nn,
  Kn,
  Mi,
  Ei,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Fr,
  {
    replace: Vc,
    with: () => Zt(),
    withKlass: nn
  }
], co = {
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
}, Ux = {
  paragraph: T.Paragraph,
  character: T.Character,
  note: T.Note,
  milestone: T.Milestone
};
function Fx(e) {
  if (!e)
    return pr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: pr(r)?.category ?? x.Uncategorized,
      type: Ux[n.styleType] ?? T.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: pr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function md(e, t, r) {
  const n = {
    type: gr,
    version: hr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return $o(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Vh = "v", Wh = 1, zx = "verse-selected";
class At extends Cs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Vh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => jx(t) ? {
        conversion: Bx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Sl().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Wa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Wa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? jt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Zs + this.getNumber() + Zs
    );
    return v(Kx, { nodeKey: this.getKey(), text: t });
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
      version: Wh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (uh(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Kx({ nodeKey: e, text: t }) {
  const [r] = Eb(e);
  return v("span", { className: r ? zx : void 0, children: t });
}
function Bx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Sl(t) };
}
function Sl(e, t, r, n, i, s) {
  return He(new At(e, t, r, n, i, s));
}
function jx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Vh;
}
function Bn(e) {
  return e instanceof At;
}
function Vx(e) {
  return e?.type === At.getType();
}
function he(e) {
  return qe(e) || Bn(e);
}
function Hh(e) {
  return th(e) || Vx(e);
}
function Wx(e) {
  return Hx(e).find((t) => ae(t));
}
function Hx(e) {
  return e.some(ps) ? e.flatMap((t) => ps(t) ? t.getChildren() : t) : e;
}
function jo(e) {
  return D(e) ? ps(e) ? e.getChildren().flatMap(jo) : e.getChildren() : [];
}
function Gx(e, t) {
  return jo(e).find((i) => he(i) && fl(t, i.getNumber()));
}
function Jx(e, t) {
  return t === 0 ? Wx(e) : e.map((r) => Gx(r, t)).filter((r) => r)[0];
}
function lo(e) {
  return jo(e).find((r) => he(r));
}
function Gh(e, t) {
  if (!D(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (he(i))
      return i;
  }
}
function Yx(e) {
  const t = e.getParent();
  if (t && D(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (he(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ye(r); ) {
    const n = lo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function ac(e) {
  return jo(e).findLast((t) => he(t));
}
function Xx(e) {
  if (!qe(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Qx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && D(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function Zx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Qx(t, e, r);
  if (E(e)) {
    const n = Xx(e);
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
function e_(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!A(t))
    return yd(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return Zx(e, t) ? { verseNum: n } : yd(e);
}
function t_(e) {
  return cT(e) || Bn(e);
}
function vl(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(L) && e.setTextContent(`${t} `);
  }
}
function Jh(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function cc(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function r_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Ml(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && D(i) && D(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && D(i)) {
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
      let s = bd(i);
      for (; s && !Ye(s); ) {
        const o = lo(s);
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
      const o = lo(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Ye(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function n_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Ml(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && D(i) && (n = Gh(i, r.getIndexWithinParent())), !n && i) {
      let o = kd(i);
      for (; o && !Ye(o); ) {
        const a = ac(o);
        if (a) {
          n = a;
          break;
        }
        o = kd(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ye(s); ) {
      const o = ac(s);
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
function Ml(e, t) {
  if (D(e) && A(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && he(n))
      return n;
    const i = Gh(e, t.anchor.offset);
    if (i)
      return i;
    const s = lo(e);
    if (s)
      return s;
  }
  return El(e);
}
function El(e) {
  if (!e || Ye(e))
    return;
  if (he(e))
    return e;
  let t = ed(e);
  for (; t; ) {
    if (Ye(t))
      return;
    if (he(t))
      return t;
    const r = ac(t);
    if (r)
      return r;
    t = ed(t);
  }
}
const i_ = ["style"], s_ = ["style", "code"], uo = ["style", "cid"], o_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], a_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], c_ = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], l_ = ["style", "caller", "category", "contents"], u_ = ["tag", "marker", "contents"], d_ = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], hs = `
`;
function f_(e, t) {
  const r = se(e);
  if (!qt(r))
    return;
  const n = Yh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Yh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = fp();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (bi(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      bi(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Ir(l) || qt(l))
        return n;
      Ke(l) && (a = l);
    }
    if (Ke(l) && (i.includes(l) || i.push(l)), Xh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Al(l, t);
  }
  if (a)
    return n;
}
function Td(e, t, r = "delta-doc") {
  if (e.length < 2 || !g_(e[0]) || !h_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => p_(n, r)?.getKey());
}
function p_(e, t = "delta-doc") {
  const r = fp();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (bi(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      bi(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Ke(a) && (i.includes(a) || i.push(a)), Xh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Al(a, t);
    if (Ir(a) && l > 0 && e >= n && e < n + l || qt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function bi(e, t) {
  return e ? t ? !so(t.node, e.getKey()) : !0 : !1;
}
function Ir(e) {
  return E(e) && !qt(e);
}
function qt(e) {
  return Ye(e) || he(e) || Je(e) || V(e) || ze(e) || fn(e);
}
function Yr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function h_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && d_.includes(t);
}
function g_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Xh(e, t) {
  return V(e) || ze(e) ? !0 : t === "apply" && D(e) && qt(e);
}
function Qh(e) {
  const t = e.getParent();
  return Et(e) && ae(t) && t.getFirstChild() === e;
}
function lc(e) {
  const t = e.getParent();
  return t !== null && Ne(t, Fe) !== null;
}
function m_(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === Vt && t.getChildrenSize() === 1;
}
function y_(e) {
  const t = e.getParent();
  if (!V(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === Rt(t.getCaller());
}
function b_(e) {
  return !wh(e) && Al(e, "delta-doc") === e.getTextContentSize();
}
function Al(e, t) {
  if (qt(e))
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
    (al(e) || Qh(e) || ie(e, ce) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ie(e, ce) === "attribute" || lc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Xc) || m_(e) || y_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function uc(e, t) {
  const r = { insert: e.__text }, n = ie(e, rn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Zh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function xd(e) {
  const t = new Hi();
  return e.isEmpty() || e.read(() => {
    const r = je();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && yr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = k_();
    for (const s of i)
      t.push(s);
  }), t;
}
function Pl(e, t) {
  const r = [], n = Fn(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(..._d(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(..._d(c, n.length, n, i, s, o, a));
  return r;
}
function k_() {
  return Pl();
}
function _d(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return T_(e, a, n), x_(e, a, i, s, o), __(e, t, r, i, o, s, a), Ye(e) && a.push(M_(e)), he(e) && a.push(A_(e)), Je(e) && a.push(P_(e)), fn(e) && a.push(N_(e)), S_(e, a, s), C_(e, a, s), q_(c, s), a;
}
function T_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ke(n) ? t.push(v_(n)) : ae(n) ? t.push(E_(n)) : yr(n) && t.push({ insert: hs });
  }
  Ke(e) && (r.includes(e) || r.push(e));
}
function x_(e, t, r, n, i) {
  if (!E(e) || qe(e) || fn(e))
    return;
  const s = e.getParent();
  if (V(s) && s.getFirstChild() === e)
    return;
  const o = nr(e) !== void 0;
  if (O(e) && (o || Qh(e) || lc(e) || wh(e)) || ie(e, ce) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Ms(a))
    return;
  const c = e.getPreviousSibling();
  if (V(s) && O(c) && c === s.getFirstChild() && a === Rt(s.getCaller()))
    return;
  const l = U(s) ? s : void 0, u = l?.getFirstChild();
  o && l && O(u) && c === u && a.startsWith(L) && (a = a.slice(1));
  const d = a.startsWith(Xc) || ie(e, ce) === "attribute" || lc(e), f = !!l && a === Vt && l.getChildrenSize() === 1, p = Vo(e, n), g = p ? r.filter((b) => p.children.includes(b)) : r, h = uc(e, g);
  if (h.insert = a, p) {
    if (!a || a === L || d)
      return;
    p.contentsOps?.push(h);
  } else
    f || d || t.push(h);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const b of r)
      i.add(b);
}
function __(e, t, r, n, i, s, o) {
  U(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (bi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = O_(c), u = Vo(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function C_(e, t, r) {
  if (!V(e))
    return;
  const n = w_(e), i = Vo(e, r), s = {
    node: e,
    children: Fn(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function S_(e, t, r) {
  if (!ze(e))
    return;
  const n = R_(e), i = Vo(e, r), s = {
    node: e,
    children: Fn(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function pn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function v_(e) {
  const t = { style: as, code: e.__code };
  return pn(t, e), { insert: hs, attributes: { book: t } };
}
function M_(e) {
  const t = { style: no, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), pn(t, e), { insert: { chapter: t } };
}
function E_(e) {
  const t = { style: e.__marker };
  return pn(t, e), { insert: hs, attributes: { para: t } };
}
function A_(e) {
  const t = { style: io, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), pn(t, e), { insert: { verse: t } };
}
function P_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), pn(t, e), { insert: { milestone: t } };
}
function N_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function w_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), pn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ie(e, rn);
  return n && (r.attributes = { segment: n }), r;
}
function O_(e) {
  const t = { insert: "" }, r = Zh([e]);
  return r && (t.attributes = { char: r }), t;
}
function R_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), pn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Vo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function q_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    bi(t[r].node, e) && t.splice(r, 1);
}
function Zh(e) {
  if (e.length === 0)
    return;
  const t = e.map($_);
  return t.length === 1 ? t[0] : t;
}
function $_(e) {
  const t = { style: e.__marker }, r = ie(e, Pn);
  return r && (t.cid = r), pn(t, e), t;
}
const eg = 1;
class er extends Cs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = ns, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new er(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => I_(t) ? {
        conversion: L_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Nl().updateFromJSON(t);
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => D_(t, n), (l) => U_(t, n, s, l), () => F_(t, n), () => z_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return v("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === ns && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === xp && i ? (
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
      version: eg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function L_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Nl(t, r) };
}
function Nl(e, t, r) {
  return He(new er(e, t, r));
}
function I_(e) {
  return e ? e.classList.contains(er.getType()) : !1;
}
function bt(e) {
  return e instanceof er;
}
function D_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!V(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function U_(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!V(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!bt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function F_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!V(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Pl(r);
  });
}
function z_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of Fn())
      if (V(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const K_ = [
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
], B_ = ["†"];
function Wo(e) {
  if (tg())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Cd(t), [s, o] = Cd(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Sd(n, i), [s, o] = Sd(s, o);
  const a = rs();
  return a.anchor = Xs(n.getKey(), i, vd(n)), a.focus = Xs(s.getKey(), o, vd(s)), a;
}
function wl() {
  if (tg())
    return;
  const e = w();
  if (!e || !A(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = fo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = fo(i, s);
  return { start: n, end: o };
}
function Cd(e) {
  if (Qy(e)) {
    const t = Xf(e.jsonPath);
    let r = je();
    for (let n = 0; n < t.length; n++) {
      if (!r || !D(r))
        return [void 0, void 0];
      const i = vi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : xT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && D(r) ? [r, _T(r, e.offset)] : [void 0, void 0];
  }
  if (Zy(e) || eb(e)) {
    const t = Fi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (D(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && D(r) ? [r, 0] : [void 0, void 0];
  }
  if (tb(e)) {
    const t = Fi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (D(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && D(r) ? [r, 0] : [void 0, void 0];
  }
  if (rb(e)) {
    const t = Fi(e.jsonPath);
    if (!t || !D(t))
      return [void 0, void 0];
    const r = Sa(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (nb(e)) {
    const t = Fi(e.jsonPath);
    if (!t || !D(t))
      return [void 0, void 0];
    const r = Sa(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (ib(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Fi(e.jsonPath);
    if (!n || !D(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = Sa(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${sb(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Sd(e, t) {
  if (!vr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !D(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function vd(e) {
  return D(e) ? "element" : "text";
}
function Sa(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (vr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Fi(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Xf(r);
  let i = je();
  for (const s of n) {
    if (!i || !D(i))
      return;
    const o = vi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function fo(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = j_(e), i = n ? yn(xn(n)) : yn(xn(e));
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
  if (Te(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (E(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return fo(n, s);
    }
    const i = Io(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return fo(i, o);
    }
  }
  if (D(e)) {
    const r = e.getChildAtIndex(t);
    if (vr(r)) {
      const i = r.getTextContent().endsWith("*"), s = yn(xn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = hh(e, t);
    return n.type === "text" ? {
      jsonPath: yn([...xn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: yn(xn(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = TT(e, t);
    if (r)
      return {
        jsonPath: yn([
          ...xn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: yn(xn(e)), offset: t };
}
function j_(e) {
  const t = e.getParent();
  if (!t || !D(t))
    return;
  const r = V_(e);
  return r && !Ke(r) && !E(r) && !Te(r) ? r : t;
}
function V_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!pl(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function xn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Io(r);
    if (!n)
      break;
    const i = kT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function tg() {
  for (let e = je().getFirstChild(); e; e = e.getNextSibling())
    if (ps(e))
      return !0;
  return !1;
}
function W_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function rg(e, t, r, n, i, s, o) {
  if (!we.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Wo(r) : w();
  if (!A(a))
    return;
  const c = J_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? W_(e, s), u = ng(e, l, c, i, s, void 0, void 0);
  return G_(u, a, i), u;
}
function Ol(e) {
  return e !== "expanded";
}
function H_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!E(r) || !U(r.getParent()))
    return;
  if (O(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return O(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function G_(e, t, r) {
  const n = Ol(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || dT(t), Cl(t);
  const i = H_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(U)?.selectEnd();
}
function ei(e, t, r) {
  const n = Lr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(dt(e)) : r?.markerMode === "visible" && n.append($r("marker", $e(e)));
  const s = t === "" ? Vt : i ? L + t : t;
  return n.append(ge(s)), n;
}
function J_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(ei("fr", f, n)), !e.isCollapsed()) {
        const p = Ed(e);
        p.length > 0 && o.push(ei("fq", p, n));
      }
      o.push(ei("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(ei("xo", f, n)), !e.isCollapsed()) {
        const p = Ed(e);
        p.length > 0 && o.push(ei("xq", p, n));
      }
      o.push(ei("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function ng(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Ol(n?.noteMode), l = el(e, t, c);
  s && Ct(l, rn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = dt(e), u && d.setMode("token"), a || (f = dt(e, "closing"))) : n?.markerMode === "visible" && (d = $r("marker", $e(e) + " "), a || (f = $r("marker", at(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = ge(Rt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const g = () => Lo(), h = r.flatMap(X_(g));
    if (t === "")
      l.append(...h);
    else {
      const y = ll(r);
      let b = () => {
      };
      i?.noteCallerOnClick && (b = i.noteCallerOnClick), p = Nl(l.__caller, y, b), l.append(p, g(), ...h);
    }
  }
  return f && l.append(f), l;
}
function Md(e) {
  if (typeof e == "string") {
    const i = se(e);
    return V(i) ? i : void 0;
  }
  const t = Fn();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => V(i.node))[e]?.node;
  if (V(n))
    return n;
}
function Y_(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Bn(n) || !n) {
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
function X_(e) {
  return (t) => Wt(t) ? [t] : [t, e()];
}
function Q_(e) {
  const t = e.getParent();
  return t !== null && Ne(t, V) !== null;
}
function Ed(e) {
  if (!A(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Wc(e);
  let a = "";
  for (const c of t)
    if (!(V(c) || bt(c) || Q_(c)) && !O(c) && !fn(c) && ie(c, ce) !== "attribute") {
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
const Rl = [
  er,
  At,
  ...Dx
], Z_ = [
  Ai,
  ...Rl
], eC = Ln((e, t) => {
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
function tC() {
  const [e, t] = fe(void 0), [r, n] = fe(), i = Q(null), s = me((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Ib(l, c, () => {
      Db(l, c, {
        placement: "bottom-start",
        middleware: [Ub(), Fb()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = me(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return B(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function rC({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = tC();
  return B(() => {
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
const nC = Wy(eC);
function ig({ isOpen: e = !1, children: t }) {
  const r = Q(null), { coords: n, placement: i } = rC({ isOpen: e, floatingBoxRef: r }), s = Ve(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return vn(
    v(nC, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const sg = Jf(void 0);
function ql() {
  const e = Yf(sg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function iC(e, t) {
  const [r, n] = fe(0), [i, s] = fe(-1), o = Ve(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = me(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = me(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = me(() => {
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
function sC({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = iC(t, r);
  return v(sg.Provider, { value: i, children: v("div", { ...n, children: e }) });
}
const og = Ln(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = ql(), u = me((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = me((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return v("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function oC({ children: e, autoIndex: t = !0, ...r }) {
  const n = Q(null), { state: { activeIndex: i, menuItems: s } } = ql(), o = Ve(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ve(() => {
    const c = o(s);
    return t ? Hy.map(c, (l, u) => Gy(l) && l.type === og && l.props.index === void 0 ? Jy(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return B(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), v("div", { ref: n, role: "menu", ...r, children: a });
}
const aC = (e, t, r) => Ws(e, r).toLowerCase().includes(t.toLowerCase()), Ad = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ws = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function cC(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? Ad(r[0]) : "") : (u = n || (r.length > 0 ? Ad(r[0]) : ""), d = (g, h) => aC(g, h, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((g) => {
    try {
      return d(g, t);
    } catch (h) {
      return console.warn("Error filtering item:", g, h), !1;
    }
  }).sort((g, h) => {
    const y = (_) => (p.has(_) || p.set(_, Ws(_, f).toLowerCase()), p.get(_) ?? ""), b = a ? Ws(g, f) : y(g), k = a ? Ws(h, f) : y(h);
    for (const _ of c)
      switch (_) {
        case "exact":
          if (b === l && k !== l)
            return -1;
          if (k === l && b !== l)
            return 1;
          break;
        case "startsWith":
          if (b.startsWith(l) && !k.startsWith(l))
            return -1;
          if (k.startsWith(l) && !b.startsWith(l))
            return 1;
          break;
        case "contains": {
          const M = b.indexOf(l), C = k.indexOf(l);
          if (M !== -1 && C === -1)
            return -1;
          if (C !== -1 && M === -1)
            return 1;
          if (M !== -1 && C !== -1)
            return M - C;
          break;
        }
      }
    return b.localeCompare(k);
  });
}
const va = {
  Root: sC,
  Options: oC,
  Option: og
};
function lC(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ve(() => cC({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function uC() {
  const { moveUp: e, moveDown: t, select: r } = ql();
  return Ve(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const dC = () => {
  const e = uC(), [t] = le();
  B(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(Dr, r, Se);
  }, [t, e]);
};
function fC() {
  return dC(), null;
}
const pC = ["Shift", "Control", "Alt", "Meta"];
function ag(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), u = s !== void 0, [d, f] = fe(""), p = u ? s ?? "" : d, g = lC({ query: p, items: t, filterBy: "name" }), h = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return B(() => {
    a?.(p, g);
  }, [a, p, g]), B(() => l.registerCommand(Dr, (y) => {
    if (u || c?.includes(y.key) || pC.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const k = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((_) => _.slice(0, -1));
      }
    }[y.key];
    return k ? (y.stopPropagation(), y.preventDefault(), k(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((_) => _ + y.key), !0) : !1;
  }, Se), [l, u, p, o, n, c]), ve(va.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: g, onSelectOption: (y) => h(y), children: [!u && v("input", { value: p, type: "text", disabled: !0 }), v(fC, {}), v(va.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((k, _) => ve(va.Option, { index: _, children: [v("span", { className: "label", children: k.label ?? k.name }), v("span", { className: "description", children: k.description })] }, k.name)) })] });
}
function hC({ trigger: e, items: t }) {
  const [r] = le(), [n, i] = fe(!1), s = me((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return B(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), B(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = w();
      if (A(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !A(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && v(ig, { isOpen: n, children: ({ placement: o }) => v(ag, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function gC({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Ve(() => {
    if (!t || !e)
      return;
    const i = pr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = pr(o), { action: c } = r(o, a);
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
function Zi(e, t) {
  return `${e}:${t}`;
}
function mC(e, t) {
  B(() => {
    if (!e.hasNodes([rt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Le(pp(e, rt, (n) => os(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], g = a[l]?.[d], h = c[l]?.[d];
          i.addID(l, d, f, p, g, h);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(rt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = se(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Te(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!rt.isReservedType(c))
              for (const u of l) {
                let d = t.get(Zi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Zi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Zi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const yC = Ln(function({ logger: t }, r) {
  const [n] = le(), i = Ve(() => /* @__PURE__ */ new Map(), []);
  mC(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Zi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = se(u);
        Te(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && ro(d));
      }
  };
  return jc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (rt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Wo(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Ip(p, a, c, l, u, d, f);
      }, { tag: Ha });
    },
    removeAnnotation(o, a) {
      if (rt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Zi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ha });
    }
  })), null;
}), bC = [];
function kC({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = bC, onChange: n }) {
  const [i] = le();
  return _s(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Zf) && !u.has(Sp) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = TC(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function TC(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Hi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && nr(s) !== void 0;
    if (t.size === 1 && E(s) && !o && b_(s)) {
      const a = Yh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = se(i);
          return new Hi([E(d) ? uc(d) : { insert: "" }]);
        }), l = new Hi([uc(s)]), u = new Hi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = xd(r), c = xd(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const $l = "formatted", cg = "unformatted", lg = "paragraph-structure", Ll = "standard", ug = "block-verse", xC = {
  [$l]: "Formatted",
  [cg]: "Unformatted",
  [lg]: "Paragraph Structure",
  [Ll]: "Standard",
  [ug]: "Block Verse"
};
function jn(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Il, Dl;
function _C(e) {
  const t = Ul(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Il = e, Dl = t;
}
_C($l);
const jN = () => Il, Ho = () => Dl;
function Ul(e) {
  let t;
  switch (e ?? Il) {
    case $l:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case cg:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case lg:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Ll:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case ug:
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
function VN(e) {
  if (!e)
    return;
  const t = Pd(e);
  return Object.keys(xC).find((r) => Dt(Pd(Ul(r)), t));
}
const CC = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Pd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...CC, ...t };
}
function Ns(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function SC(e) {
  if (e)
    return gs(e) ? At : e.markerMode === "editable" ? gt : At;
}
function gs(e) {
  return e?.verseLayout === "block";
}
function vC(e) {
  const t = [], r = e ?? Dl;
  return r && (t.push(`${ek}${r.markerMode}`), r.hasSpacing && t.push(Qb), r.isFormattedFont && t.push(Zb)), t;
}
function MC(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += EC(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), PC(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += NC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), OC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function EC(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), AC(t, e.retain, e.attributes, r, n)), e.retain);
}
function AC(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = je();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Ir(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, g = Math.min(s, p);
        if (g > 0) {
          let h = u;
          const y = f > 0, b = g < d - f;
          if (y && b) {
            const [, k] = u.splitText(f);
            [h] = k.splitText(g);
          } else y ? [, h] = u.splitText(f) : b && ([h] = u.splitText(g));
          if (sn(r)) {
            const k = h.getParent();
            if (U(k)) {
              const _ = r.char;
              let M;
              Array.isArray(_) ? a >= 0 && a <= _.length - 1 && (M = _[a]) : a === 0 && (M = _);
              const C = M ? Nn(M, k) : !1;
              if (C && Array.isArray(_) && _.length > 1) {
                const $ = ge("");
                h.replace($);
                const R = typeof r.segment == "string" ? r.segment : void 0, F = Pi(_.slice(1), n, h, R);
                let z = $;
                for (const P of F)
                  z.insertAfter(P), z = P;
                $.remove(), Ut(r, h);
              } else if (C)
                Ut(r, h);
              else {
                h.remove();
                const $ = Nd(h, r, n, i);
                if ($ && $.length > 0) {
                  let R = k;
                  for (const F of $)
                    R.insertAfter(F), R = F;
                }
              }
            } else {
              const _ = ge("");
              h.replace(_);
              const M = Nd(h, r, n, i);
              if (M && M.length > 0) {
                let C = _;
                for (const $ of M)
                  C.insertAfter($), C = $;
                _.remove();
              } else
                _.replace(h);
            }
          } else
            Ut(r, h);
          s -= g;
        }
      }
      o += d;
    } else if (qt(u))
      e <= o && o < e + t && s > 0 && (wd(u, r), s -= 1), o += 1;
    else if (U(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (sn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            dc(u, p.style), typeof p.cid == "string" && Ct(u, Pn, () => p.cid);
            const g = Be(p, uo);
            g && Object.keys(g).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...g
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || zC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Va(u), !0;
        }
      }
      d && Va(u), a -= 1;
    } else if (Ke(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!yr(u))
          wd(u, r);
        else if (Fl(r)) {
          const p = pg(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (D(u)) {
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
function Nd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Pi(t.char, r, e, i), o = s.find(U);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Ut(t, e);
    return;
  }
  const a = {};
  yg.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Ut(t, e), s;
}
function dg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent($e(t))) : Wt(r) && r.getTextType() === "marker" && r.setTextContent($e(t) + L);
}
function dc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = U(e.getParent()), i = e.getFirstChild();
  Wt(i) && i.getTextType() === "marker" && i.getTextContent() === $e(r, n) && i.setTextContent($e(t, n));
  const s = e.getLastChild();
  Wt(s) && s.getTextType() === "marker" && s.getTextContent() === at(r, n) && s.setTextContent(at(t, n));
}
function wd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && U(e) && sn(t)) {
      const i = fc(n);
      if (dc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Ct(e, Pn, () => o);
      }
      const s = Be(i, uo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ye(e) || he(e) || Je(e) || V(e) || ze(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ke(e) || ae(e) || U(e)) && (r === "style" && ae(e) ? dg(e, n) : r === "style" && U(e) ? dc(e, n) : r === "code" && ke(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Ct(e, rn, () => n));
  }
}
function PC(e, t, r) {
  if (t <= 0)
    return;
  const n = je();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Ir(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (qt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Ke(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Ke(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Zt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && nt(p)) {
            let g = i + 1;
            const h = p.getChildren();
            for (const b of h) {
              if (s <= 0)
                break;
              const k = i;
              if (i = g, o(b)) {
                i = k;
                break;
              }
              Ir(b) ? g += b.getTextContentSize() : qt(b) && (g += 1), i = k;
            }
            const y = p.getChildren();
            for (const b of y)
              b.remove(), a.append(b);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Zt(), !0);
        } else ae(a) ? a.replace(Zt(), !0) : a.remove();
      }
      i += 1;
    } else if (D(a)) {
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
function NC(e, t, r, n, i) {
  if (t === hs)
    return Od(e, r, n, i);
  if (t.endsWith(hs) && !Fl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (sn(r))
        throw new Error("Text + LF should not have char attributes");
      o += po(e, s, r, i);
    }
    return o += Od(e + o, r, n, i), o;
  } else return sn(r) ? wC(e, t, r, n, i) : po(e, t, r, i);
}
function wC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ge(t === "" ? Vt : t);
  Ut(r, s);
  let o;
  {
    let y = function(b) {
      if (Ir(b)) {
        const k = b.getTextContentSize();
        if (e >= h && e < h + k) {
          const _ = b.getParent();
          return U(_) && (o = _), !0;
        }
        h += k;
      } else if (qt(b))
        h += 1;
      else if (U(b)) {
        const k = b.getChildren();
        for (const _ of k)
          if (y(_))
            return !0;
      } else if (D(b)) {
        const k = b.getChildren();
        for (const _ of k)
          if (y(_))
            return !0;
        Ke(b) && (h += 1);
      }
      return !1;
    };
    const g = je();
    let h = 0;
    y(g);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const g = a[0];
      g && Nn(g, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Nn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Pi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(U);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), po(e, t, void 0, i);
  const f = {};
  for (const [g, h] of Object.entries(r))
    g !== "char" && g !== "segment" && typeof h == "string" && (f[g] = h);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const g of u)
    if (!fg(e, g, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), po(e, t, void 0, i));
}
function po(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = je();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Ir(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = ge(t);
        if (Ut(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          U(f) && !sn(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (qt(c))
      s += 1;
    else if (U(c)) {
      if (!o && e === s) {
        const d = ge(t);
        Ut(r, d);
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
        const d = ge(t);
        return Ut(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Ke(c)) {
      if (!o && e === s) {
        const d = ge(t);
        Ut(r, d);
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
        const d = ge(t);
        return Ut(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (D(c)) {
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
    const c = ge(t);
    Ut(r, c);
    const l = Zt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function fg(e, t, r) {
  const n = je();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Zt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!D(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (nt(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Zt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Ir(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (qt(l))
        i += 1;
      else if (U(l)) {
        if (o(l))
          return !0;
      } else if (Ke(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (yr(u) && Ke(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (D(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return D(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Zt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      nt(a) ? yr(a) && ae(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !nt(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !nt(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function OC(e, t, r, n, i) {
  let s;
  return Yr("chapter", t) ? s = qC(t.insert.chapter, r) : Yr("verse", t) ? s = $C(t.insert.verse, r) : Yr("ms", t) ? s = LC(t.insert.ms) : Yr("note", t) ? s = hg(t, r, n, i) : Yr("unknown", t) ? s = gg(t, r, n, i) : Yr("unmatched", t) && (s = DC(t.insert.unmatched, r)), s ? fg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Od(e, t, r, n) {
  let i;
  Fl(t) ? i = pg(t.para, r) : FC(t) && (i = RC(t.book)), i ??= Zt();
  const s = i, o = ae(s), a = yr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Ir(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ae(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const g = e - c, [h] = g > 0 ? d.splitText(g) : [void 0];
          let y, b = h?.getPreviousSibling();
          for (; b; ) {
            const k = b;
            b = b.getPreviousSibling(), y ? y.insertBefore(k) : s.append(k), y = k;
          }
          return h && s.append(h), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (qt(d))
      c += 1;
    else if (Ke(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (yr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ae(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ae(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (D(d)) {
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
  return u(je()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function RC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== as || !r || !Ot.isValidBookCode(r))
    return;
  const n = Be(e, s_);
  return Kp(r, n);
}
function pg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Be(e, i_), i = hi(r, n);
  if (!jn(t))
    return i;
  if (t.markerMode === "editable")
    i.append(dt(r), Lo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = $e(r) + L;
    i.append(t.hasGutterParaMarkers ? Ek(s) : $r("marker", s));
  }
  return i;
}
function qC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Be(e, o_);
  let a;
  if (t.markerMode === "editable")
    a = jp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = sl(r, c, n, i, s, o);
  }
  return a;
}
function $C(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Be(e, a_);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = jt(r, n);
    c = eh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Sl(n, l, i, s, o, a);
  }
  return c;
}
function LC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Be(e, c_);
  return Ep(t, r, n, s, i);
}
function hg(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Be(i.note, l_), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const h of c?.ops ?? [])
    if (typeof h.insert == "string")
      if (sn(h.attributes)) {
        const y = Pi(h.attributes.char, t, ge(h.insert), void 0, mg(h.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(ge(h.insert));
  return ng(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function gg(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Be(i, u_), l = nl(s, o, c), u = a?.ops ?? [];
  u.length > 0 && IC(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Ct(l, rn, () => d), l;
}
function IC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (sn(s.attributes)) {
        const o = ge(s.insert), a = Pi(s.attributes.char, t, o, void 0, mg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ge(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Yr("unknown", s)) {
        const o = gg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Yr("note", s)) {
        const o = hg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function DC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = kl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function mg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function fc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Pi(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(Vt);
  const a = () => {
    o && E(r) && r.getTextContent() !== Vt && r.setTextContent(L + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(fc), l = c[0], u = i?.[i.length - 1];
    if (U(u) && Nn(l, u))
      return c.length > 1 ? Pi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, g) => {
      const h = Lr(p.style, Be(p, uo));
      if (typeof p.cid == "string" && Ct(h, Pn, () => p.cid), n && g === c.length - 1 && Ct(h, rn, () => n), f)
        if (U(f)) {
          const y = f.getMarker(), b = [];
          Ea(y, b, t, !0), b.forEach((_) => h.append(_)), h.append(f);
          const k = [];
          Ma(f, k, t, !0), k.forEach((_) => h.append(_));
        } else
          h.append(f);
      return h;
    }, r);
    return Ea(l.style, d, t, s), Ma(d, d, t, s), [d];
  } else {
    const c = fc(e), l = i?.[i.length - 1];
    if (U(l) && Nn(c, l))
      return r && l.append(r), [];
    a();
    const u = Lr(c.style, Be(c, uo));
    return typeof c.cid == "string" && Ct(u, Pn, () => c.cid), n && Ct(u, rn, () => n), r && u.append(r), Ea(c.style, u, t, s), Ma(u, u, t, s), [u];
  }
}
function Ma(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && UC(e.getMarker(), t, r, !1, n);
}
function Ea(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = dt(e, "opening", n) : r?.markerMode === "visible" && (i = $r("marker", $e(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function UC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = dt("", "selfClosing") : s = dt(e, "closing", i) : r?.markerMode === "visible" && (s = $r("marker", n ? at("") : at(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function FC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Fl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function sn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function zC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Ut(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Ct(t, rn, () => n);
        continue;
      }
      if (KC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const yg = [
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
function KC(e) {
  return yg.includes(e);
}
function ki(e) {
  return Wt(e) && ke(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function bg(e) {
  const t = As(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function zl(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(np(r) && t.offset === 0 || ke(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(ki);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!ke(s))
    return !1;
  const o = bg(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function Hs(e) {
  const t = w();
  if (!A(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : E(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? sh(t) : cl(t);
    return ki(n);
  }
  return zl(t) && t.isCollapsed();
}
function BC(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed())
    return !1;
  const r = Ne(t.anchor.getNode(), ke);
  if (!r || !ki(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return Hs(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(ki)) {
    const n = bg(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function Fs() {
  const e = w();
  return A(e) && zl(e), !1;
}
function jC() {
  const e = w();
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !ke(r) || !ki(r.getFirstChild()) ? !1 : (Ht(r, 1), !0);
}
function VC(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => vr(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function WC() {
  const [e] = le();
  return B(() => e.registerCommand(wo, (t) => (HC(t), !1), En), [e]), B(() => Le(
    e.registerCommand(ep, Hs, Se),
    e.registerCommand(tp, Hs, Se),
    e.registerCommand(ja, Hs, Se),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(ja, BC, qr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(Oo, Fs, tt),
    e.registerCommand(fr, Fs, tt),
    e.registerCommand(mr, Fs, tt),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(cb, Fs, tt)
  ), [e]), B(() => Le(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(tr, () => (jC(), !1), Se),
    e.registerNodeTransform(Ot, VC)
  ), [e]), null;
}
function HC(e) {
  if (GC(e.target))
    return;
  const t = w();
  A(t) && JC(t);
}
function Ni(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Et(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === L && (r++, t = t.getNextSibling());
    else if (he(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Ht(e, r), !0);
}
function GC(e) {
  if (!rp(e))
    return !1;
  const t = Si(e);
  if (!Ak(t))
    return !1;
  const r = t.getParent();
  return r ? nt(r) ? Ni(r) : (Ht(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function JC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!Ke(r))
    return !1;
  const n = r.getFirstChild();
  return !vr(n) && !Bn(n) ? !1 : Ni(r);
}
function YC() {
  const [e] = le();
  return B(() => {
    const t = (r) => r instanceof KeyboardEvent && !XC(r) || !Go() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Le(
      e.registerCommand(Dr, t, Se),
      e.registerCommand(Oo, t, Se),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(fr, t, tt),
      e.registerCommand(mr, t, tt),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Hc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Si(r.target);
        return !n || !on(n) ? !1 : (r.preventDefault(), !0);
      }, Se),
      e.registerCommand(ep, t, Se),
      e.registerCommand(tp, t, Se),
      e.registerCommand(ja, t, Se)
    );
  }, [e]), null;
}
function XC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function on(e) {
  return Ne(e, Kl) ?? void 0;
}
function Kl(e) {
  return ze(e) || Lh(e);
}
function Go() {
  const e = w();
  return A(e) ? on(e.anchor.getNode()) !== void 0 || on(e.focus.getNode()) !== void 0 : !1;
}
function QC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function ZC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), QC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function eS(e, t, r, n) {
  if (!hS(t) || ZC(e, r))
    return !1;
  const i = r === "up" ? n_(t) : r_(t);
  return i && n.preventDefault(), i;
}
function tS({ viewOptions: e }) {
  const [t] = le();
  return rS(t, e), null;
}
function rS(e, t) {
  B(() => {
    if (!e.hasNodes([Sr, At, we]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!A(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Rd(o), d = lS(i, qd(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return eS(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Rd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return qd(a, n.key) ? l = !c && Id(i, "next") || !c && iS(i) || fS(i) || !c && s && Ld(i, "next") : nS(a, n.key) && (l = !c && Id(i, "previous") || !c && sS(i) || pS(i, t) || !c && s && Ld(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Dr, r, Se);
  }, [e, t]);
}
function Rd(e) {
  return e.dir || "ltr";
}
function qd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function nS(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function pc(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = nr(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function iS(e) {
  const t = pc(cl(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Ht(t, 0), !0);
}
function sS(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = pc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : $d(n);
  }
  if (t.offset === 0) {
    const n = pc(r);
    return n ? $d(n) : !1;
  }
  return !1;
}
function $d(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (E(t))
    return t.select(), !0;
  if (D(t)) {
    const i = t.getLastDescendant();
    return E(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const ho = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function oS(e) {
  if (ho)
    for (const { segment: r } of ho.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function aS(e) {
  if (ho) {
    let n = 0;
    for (const { index: i } of ho.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function kg(e) {
  for (let t = e; t; t = t.getParent())
    if (D(t) && !t.isInline())
      return t;
}
function Tg(e) {
  return !!e && O(e) && on(e) !== void 0;
}
function Ti(e) {
  return E(e) && !e.isToken() && !Tg(e) && e.getTextContentSize() > 0;
}
function xg(e) {
  return Dn(e) ? !0 : V(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || Tg(e)) && e.getTextContentSize() > 0 : Un(e) ? !Je(e) : !1;
}
function xi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Jo(e, t, r) {
  for (let n = e; n; ) {
    if (xg(n))
      return n;
    if (D(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? xi(n, t, r);
      continue;
    }
    if (Ti(n))
      return n;
    n = xi(n, t, r);
  }
}
function Bl(e, t, r, n, i) {
  return r === "element" && D(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? xi(e, n, i) : r === "text" && xg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : xi(e, n, i);
}
function Aa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Bl(e.node, e.offset, e.kind, "previous", t), n = Jo(r, "previous", t);
  if (!n)
    return e;
  if (Ti(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function cS(e, t) {
  const r = e.getNode(), n = kg(r);
  if (!n)
    return;
  if (e.type === "text" && Ti(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Aa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Bl(r, e.offset, e.type, t, n), s = Jo(i, t, n);
  if (!s)
    return;
  if (Ti(s)) {
    const c = s.getTextContent(), l = t === "next" ? oS(c) : aS(c);
    return Aa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Aa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function _g(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = cS(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Ld(e, t) {
  return _g(e, t, "collapse");
}
function lS(e, t) {
  return _g(e, t, "extend");
}
function uS(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && Ti(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Bl(n, e.offset, e.type, t, r);
  return Jo(i, t, r) === void 0;
}
function dS(e, t) {
  const r = je();
  for (let n = e; n; ) {
    const i = xi(n, t, r), s = i && Jo(i, t, r);
    if (!s)
      return;
    if (n = on(s), !n)
      return s;
  }
}
function Id(e, t) {
  const r = e.anchor, n = r.getNode();
  if (on(n))
    return !1;
  const i = kg(n);
  if (!i || !uS(r, t, i))
    return !1;
  const s = xi(i, t, je()), o = s && on(s);
  if (!o)
    return !1;
  const a = dS(o, t);
  if (!a)
    return !0;
  if (Ti(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Dd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function fS(e) {
  const t = e.anchor.getNode(), r = cl(e);
  if (V(r) && !O(r.getFirstChild())) {
    if (Ke(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(nt(i) && Ni(i)) && i.selectStart(), !0;
      }
    } else return Wt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ke(t) && V(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Dd(r), !0;
  }
  const n = r?.getParent();
  if (Wt(r) && V(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Dd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function pS(e, t) {
  const r = sh(e);
  if (vs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && ki(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (ke(o) && !r)
    return !0;
  if (V(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!Bn(c) && !ke(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const u = r.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (Ke(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = Ne(c, (u) => V(u));
    if (V(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const d = l.getIndexWithinParent();
      return u.select(d, d), !0;
    }
  }
  const a = nr(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (bt(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function hS(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return he(t) && Un(t);
}
function gS() {
  const [e] = le();
  return mS(e), null;
}
function mS(e) {
  B(() => {
    if (!e.hasNodes([be]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Le(
      e.registerNodeTransform(be, kS),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(be, PT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(be, vh),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(be, (t) => fs(wn("char"), t)),
      e.registerNodeTransform(We, TS)
    );
  }, [e]);
}
function Pa(e) {
  return e.getChildren().some(O);
}
function yS(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Fo(n)) {
    const i = n.getTextContent();
    i.startsWith(L) && (i === L ? n.remove() : n.setTextContent(i.slice(L.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function bS(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function kS(e) {
  if (!U(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Pa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ie(e, Pn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && Nn({ style: t, cid: r }, i) && Dt(n, i.getUnknownAttributes()))
    if (Pa(i)) {
      if (yS(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && Nn({ style: t, cid: r }, s) && Dt(n, s.getUnknownAttributes()) && (Pa(s) ? bS(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function TS(e) {
  const t = e.getParent();
  if (!U(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Vt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Cg(e) {
  return e.replaceAll("	", " ");
}
function Sg() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function vg(e) {
  const t = () => !Sg();
  return Le(e.registerCommand(fi, t, ht), e.registerCommand(mr, t, ht));
}
const jl = (e) => {
  e.dispatchCommand(fi, null);
}, Vl = (e) => {
  e.dispatchCommand(mr, null);
}, Wl = (e) => {
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
      n.setData(o, Cg(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(fr, s);
  });
}, Hl = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Cg(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(fr, i);
  });
};
function xS() {
  const [e] = le();
  return B(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(pi ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), jl(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Vl(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Hl(e) : Wl(e)));
    };
    return Le(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      vg(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function _S({ logger: e }) {
  const [t] = le();
  return B(() => Le(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Dr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), qr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(fr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, qr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Hc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, qr)
  ), [t, e]), null;
}
const go = "editor-context-menu";
function hc(e) {
  return `${go}-item-${e}`;
}
const CS = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function SS({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), v("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: hc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: v("span", { className: "text", children: i.title }) });
}
function vS({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return v("div", { className: "typeahead-popover", children: v("ul", { id: go, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => v(SS, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let MS = 0;
class zi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${MS++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function ES({ options: e } = {}) {
  const [t] = le(), [r, n] = fe(() => !t.isEditable()), [i, s] = fe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = fe(void 0), c = Ve(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new zi("Cut", {
        onSelect: () => {
          Vl(t);
        },
        isDisabled: r
      }),
      new zi("Copy", {
        onSelect: () => {
          jl(t);
        }
      }),
      new zi("Paste", {
        onSelect: () => {
          Wl(t);
        },
        isDisabled: r
      }),
      new zi("Paste as Plain Text", {
        onSelect: () => {
          Hl(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((g) => new zi(g.title, { onSelect: g.onSelect, isDisabled: g.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = Q(null), u = Q(null), d = me(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return B(() => vg(t), [t]), B(() => {
    const f = (p) => {
      const g = p.target;
      t.getRootElement() === g || Yp(g) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, g) => {
      g?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), B(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const g = p.target;
      g instanceof Node && l.current?.contains(g) || d();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, d]), B(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      d();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, d]), B(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      if (p.isComposing || p.keyCode === 229)
        return;
      if (p.key === "Escape") {
        d();
        return;
      }
      const g = document.activeElement;
      if (!(g && g !== document.body && g !== u.current && !t.getRootElement()?.contains(g) && !l.current?.contains(g)))
        if (p.key === "ArrowDown")
          p.preventDefault(), p.stopPropagation(), a((h) => h === void 0 ? 0 : (h + 1) % c.length);
        else if (p.key === "ArrowUp")
          p.preventDefault(), p.stopPropagation(), a((h) => h === void 0 ? c.length - 1 : (h - 1 + c.length) % c.length);
        else if (p.key === "Enter") {
          p.preventDefault(), p.stopPropagation();
          const h = o === void 0 ? void 0 : c[o];
          h && !h.isDisabled && (t.update(() => {
            h.onSelect();
          }), d());
        } else {
          if (CS.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, d, c, o, t]), B(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", go), () => {
        f.removeAttribute("aria-controls"), f.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), B(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (!f)
      return;
    if (o === void 0) {
      f.removeAttribute("aria-activedescendant");
      return;
    }
    f.setAttribute("aria-activedescendant", hc(o));
    const p = document.getElementById(go), g = document.getElementById(hc(o));
    if (!p || !g)
      return;
    const h = p.getBoundingClientRect(), y = g.getBoundingClientRect(), b = y.top - h.top + p.scrollTop, k = y.bottom - h.top + p.scrollTop;
    b < p.scrollTop ? p.scrollTop = b : k > p.scrollTop + p.clientHeight && (p.scrollTop = k - p.clientHeight);
  }, [t, i.isOpen, o]), B(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), _s(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: g } = f.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), y = Math.max(0, Math.min(i.y, globalThis.innerHeight - g));
    f.style.left = `${h}px`, f.style.top = `${y}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Ob.createPortal(v("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: v(vS, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), d());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function AS(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function PS(e) {
  if (!db(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function NS(e) {
  return bt(e);
}
function Na(e, t, r) {
  const n = Si(t.node);
  if (!Un(n) || NS(n))
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
function wS(e, t) {
  if (w())
    return !1;
  const r = e.getRootElement(), n = lb(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !ip(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = Na(e, c, PS(c)), d = u;
  else {
    const y = AS(n.getRangeAt(0), c);
    u = Na(e, c, y ? "before" : "after"), d = Na(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, g = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, h = ub(g, e);
  return h ? (Zr(h), h.dirty = !t, t) : !1;
}
function OS() {
  const [e] = le(), t = Q(!1), r = Q(!1);
  return B(() => {
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
  }, [e]), B(() => e.registerCommand(tr, () => (wS(e, t.current) && (r.current = !0), !1), tt), [e]), null;
}
function RS() {
  const [e] = le();
  return B(() => e.registerCommand(Dr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(pi ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, tt), [e]), null;
}
function qS({ isEditable: e }) {
  const [t] = le();
  return _s(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Ud(e) {
  return !!e && al(se(e));
}
function Mg(e) {
  const [t] = le(), r = Q(void 0), n = me((i) => {
    const s = w(), o = A(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Ud(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = As(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = sT();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Ht(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = se(a);
      E(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return B(() => {
    const i = () => {
      const a = e(), c = w(), l = A(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (en(tn), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Ms(c) || !c.includes(gi))
        return;
      const l = w(), u = A(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (oT(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(gi).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Le(t.registerCommand(tr, () => (i(), !1), En), t.registerCommand(Gc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Ud(a);
      }), c && t.update(() => {
        const l = se(a);
        E(l) && l.remove();
      }, { tag: tn }), r.current = void 0, !1;
    }, En), t.registerNodeTransform(We, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function $S() {
  const e = w();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!D(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!he(i) || As(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || he(s))
    return i;
}
function LS() {
  return Mg($S), null;
}
function IS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = le();
  return B(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), B(() => {
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
          f || en(fb), o.setEditorState(l), o.dispatchCommand(pb, void 0);
        }, { tag: _p });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function DS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return US(t, n), FS(i, e, r, n), null;
}
function US(e, t) {
  const r = Q(void 0), n = Q(void 0), i = e.noteCallers, s = e.crossRefCallers;
  B(() => {
    let o = i;
    (!o || o.length <= 0) && (o = K_), r.current !== o && (r.current = o, Fd("note-callers", o, t));
  }, [t, i]), B(() => {
    let o = s;
    (!o || o.length <= 0) && (o = B_), n.current !== o && (n.current = o, Fd("cross-ref-callers", o, t));
  }, [t, s]);
}
function FS(e, t, r, n) {
  B(() => {
    if (!e.hasNodes([be, we, er]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => HS(s));
    return Le(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(we, (s) => zS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(be, KS),
      e.registerNodeTransform(We, BS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(er, jS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(er, (s, { prevEditorState: o }) => VS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(tr, () => WS(e, t, r, n), ht),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function zS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => bt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !O(i) && i.getTextContent() !== Rt(e.getCaller()) && e.insertBefore(i);
  }
}
function KS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => bt(o));
  if (!U(e) || !V(t) || !n)
    return;
  const i = ll(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  E(s) ? s.getTextContent() !== L && s.setTextContent(L) : e.insertAfter(ge(L));
}
function BS(e) {
  const t = nr(e), r = t?.getChildren(), n = r?.find((o) => bt(o));
  if (!E(e) || !V(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!O(e) && V(i) && e.getTextContent() !== L && (e.setTextContent(L), e.selectEnd()), U(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Vt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = ll(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function jS(e) {
  if (!bt(e))
    return;
  const t = e.getNextSibling();
  !E(t) || O(t) ? e.insertAfter(ge(L)) : t.getTextContent() !== L && t.setTextContent(L);
}
function VS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return bt(o) && V(a) && a.getCaller() === ns;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function WS(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Ne(o, (c) => V(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = se(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Ki(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (V(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ki(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (V(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ki(e, c, n);
    } else if (!a) {
      const c = Ne(o, (l) => V(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      Ke(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ki(e, l, n);
      }
    }
  }
  if (nt(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Bn(c) && V(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Ki(e, l, n);
    }
  }
  return !1;
}
function Ki(e, t, r) {
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
function HS(e) {
  const t = w();
  if (!A(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (V(i) && E(s)) {
    e.preventDefault();
    const o = rs();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Zr(o);
  }
}
function Fd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (GS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function GS(e, t) {
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
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = ls(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function JS(e) {
  const t = e.getParent();
  if (V(t))
    return Yo(t).some((r) => r.is(e)) ? t : void 0;
}
function mo(e) {
  const t = Yo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function YS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function XS(e) {
  const t = hb();
  if (!A(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= mo(e);
  const i = YS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= mo(e);
}
function gc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = JS(t);
  if (r)
    return QS(r, t, e.offset) ? void 0 : r;
}
function QS(e, t, r) {
  const n = Yo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function ZS(e) {
  const t = Yo(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Ht(e, mo(e));
}
function ev(e = !1) {
  const t = w();
  if (!A(t))
    return !1;
  if (!t.isCollapsed())
    return tv(t.anchor, t.focus);
  const r = gc(t.anchor);
  if (!r)
    return !1;
  if (!e && XS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Ht(n, r.getIndexWithinParent());
  } else
    ZS(r);
  return !0;
}
function tv(e, t) {
  const r = gc(e), n = gc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && zd(e, r, i), n && zd(t, n, !i), !0;
}
function zd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), mo(t), "element");
}
function rv() {
  const [e] = le(), t = Q(!1);
  return B(() => {
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
  }, [e]), B(() => e.registerCommand(tr, () => (ev(t.current) && en(tn), !1), En), [e]), null;
}
function nv({ onChange: e }) {
  const [t] = le();
  return B(() => t.registerCommand(tr, () => {
    const r = wl();
    return e?.(r), !1;
  }, ht), [t, e]), null;
}
function iv() {
  const [e] = le();
  return sv(e), null;
}
function sv(e) {
  B(() => {
    if (!e.hasNodes([it]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(it, (t) => ov(t, e));
  }, [e]);
}
function ov(e, t) {
  cc(t, e.getKey()) && Jh(e.getFirstChild()), !(!ae(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return ae(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Eg({ onStateChange: e }) {
  const [t] = le(), [r, n] = fe(t), i = Q(!1), s = Q(!1), o = Q(void 0), a = Q(void 0), c = me(() => {
    const l = w();
    let u;
    if (A(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : Ne(d, (b) => {
        const k = b.getParent();
        return k !== null && gb(k);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), ps(p) && (p = Ne(d, ae) ?? p);
      const g = p.getKey(), h = r.getElementByKey(g), y = uT(d, f);
      if (y && t_(y) && (u = y.getMarker()), h !== null && (ae(p) || ke(p) || vs(p))) {
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
  return B(() => t.registerCommand(tr, (l, u) => (c(), n(u), !1), tt), [t, c]), B(() => Le(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(mb, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), tt), r.registerCommand(yb, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), tt)), [c, r, e]), null;
}
function Ag(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function an(e) {
  return e ? Ke(e) ? e : Ne(e, (r) => Ke(r)) ?? void 0 : void 0;
}
function Pg(e) {
  if (!A(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = an(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Gl(e) {
  return A(e) && e.isCollapsed() && e.anchor.type === "element" || !A(e) && !No(e) ? !1 : e.getNodes().some((t) => he(t));
}
function Ng(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = an(r);
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
function wg(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = an(r);
  if (!n)
    return !1;
  if (D(r)) {
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
function Kd(e, t) {
  return !!mc(e, t);
}
function mc(e, t) {
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && D(n)) {
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
function yo(e, t) {
  if (!A(e))
    return !1;
  const r = an(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ci(e) {
  return Gl(e) || Pg(e);
}
function Og(e, t) {
  if (Gl(e) || Pg(e))
    return !0;
  if (!A(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Ng(e) && yo(e, "backward") || Kd(e, "backward");
    case "deleteForward":
      return wg(e) && yo(e, "forward") || Kd(e, "forward");
    case "insertText":
      return !1;
  }
}
function av(e, t) {
  if (!(!A(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = mc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Ng(e) && yo(e, "backward")) {
        const n = an(e.anchor.getNode());
        if (nt(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = mc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (wg(e) && yo(e, "forward")) {
        const i = an(e.anchor.getNode())?.getNextSibling();
        if (nt(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Bd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return No(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!A(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!A(e) || e.isCollapsed())
    return !1;
  const r = an(e.anchor.getNode()), n = an(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Rg(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else D(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function cv(e) {
  const t = e.getPreviousSibling();
  if (!Ke(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = Et(n), s = e.getChildren().filter((o) => !un(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? Rg(r) : Ni(t) || t.selectStart();
}
function qg(e) {
  return he(e) || Ye(e) ? [] : nt(e) ? e.getChildren().flatMap(qg) : [e];
}
function lv(e) {
  const t = [];
  for (const r of e) {
    const n = qg(r);
    n.length !== 0 && (nt(r) && t.length > 0 && t.push(ge(" ")), t.push(...n));
  }
  return t;
}
function jd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uv(e) {
  if (Array.isArray(e)) return e;
}
function dv(e, t) {
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
function fv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pv(e, t) {
  return uv(e) || dv(e, t) || hv(e, t) || fv();
}
function hv(e, t) {
  if (e) {
    if (typeof e == "string") return jd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? jd(e, t) : void 0;
  }
}
const $g = Object.entries, Vd = Object.setPrototypeOf, gv = Object.isFrozen, mv = Object.getPrototypeOf, yv = Object.getOwnPropertyDescriptor;
let st = Object.freeze, ct = Object.seal, ii = Object.create, Lg = typeof Reflect < "u" && Reflect, yc = Lg.apply, bc = Lg.construct;
st || (st = function(t) {
  return t;
});
ct || (ct = function(t) {
  return t;
});
yc || (yc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
bc || (bc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const ti = Qe(Array.prototype.forEach), bv = Qe(Array.prototype.lastIndexOf), Wd = Qe(Array.prototype.pop), ri = Qe(Array.prototype.push), kv = Qe(Array.prototype.splice), Xr = Array.isArray, Gi = Qe(String.prototype.toLowerCase), wa = Qe(String.prototype.toString), Hd = Qe(String.prototype.match), Bi = Qe(String.prototype.replace), Gd = Qe(String.prototype.indexOf), Tv = Qe(String.prototype.trim), xv = Qe(Number.prototype.toString), _v = Qe(Boolean.prototype.toString), Jd = typeof BigInt > "u" ? null : Qe(BigInt.prototype.toString), Yd = typeof Symbol > "u" ? null : Qe(Symbol.prototype.toString), et = Qe(Object.prototype.hasOwnProperty), ji = Qe(Object.prototype.toString), Ze = Qe(RegExp.prototype.test), _n = Cv(TypeError);
function Qe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return yc(e, t, n);
  };
}
function Cv(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return bc(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gi;
  if (Vd && Vd(e, null), !Xr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (gv(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Sv(e) {
  for (let t = 0; t < e.length; t++)
    et(e, t) || (e[t] = null);
  return e;
}
function ut(e) {
  const t = ii(null);
  for (const n of $g(e)) {
    var r = pv(n, 2);
    const i = r[0], s = r[1];
    et(e, i) && (Xr(s) ? t[i] = Sv(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ut(s) : t[i] = s);
  }
  return t;
}
function vv(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return xv(e);
    case "boolean":
      return _v(e);
    case "bigint":
      return Jd ? Jd(e) : "0";
    case "symbol":
      return Yd ? Yd(e) : "Symbol()";
    case "undefined":
      return ji(e);
    case "function":
    case "object": {
      if (e === null)
        return ji(e);
      const t = e, r = Yt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : ji(n);
      }
      return ji(e);
    }
    default:
      return ji(e);
  }
}
function Yt(e, t) {
  for (; e !== null; ) {
    const n = yv(e, t);
    if (n) {
      if (n.get)
        return Qe(n.get);
      if (typeof n.value == "function")
        return Qe(n.value);
    }
    e = mv(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Mv(e) {
  try {
    return Ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const Xd = st(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Oa = st(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ra = st(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ev = st(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), qa = st(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Av = st(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Qd = st(["#text"]), Zd = st(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $a = st(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ef = st(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), zs = st(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pv = ct(/{{[\w\W]*|^[\w\W]*}}/g), Nv = ct(/<%[\w\W]*|^[\w\W]*%>/g), wv = ct(/\${[\w\W]*/g), Ov = ct(/^data-[\-\w.\u00B7-\uFFFF]+$/), Rv = ct(/^aria-[\-\w]+$/), tf = ct(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), qv = ct(/^(?:\w+script|data):/i), $v = ct(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Lv = ct(/^html$/i), Iv = ct(/^[a-z][.\w]*(-[.\w]+)+$/i), rf = ct(/<[/\w!]/g), nf = ct(/<[/\w]/g), Dv = ct(/<\/no(script|embed|frames)/i), Uv = ct(/\/>/i), wt = {
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
}, Fv = function() {
  return typeof window > "u" ? null : window;
}, zv = function(t, r) {
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
}, sf = function() {
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
}, Jr = function(t, r, n, i) {
  return et(t, r) && Xr(t[r]) ? pe(i.base ? ut(i.base) : {}, t[r], i.transform) : n;
};
function Ig() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fv();
  const t = (K) => Ig(K);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== wt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Yt(f, "cloneNode"), g = Yt(f, "remove"), h = Yt(f, "nextSibling"), y = Yt(f, "childNodes"), b = Yt(f, "parentNode"), k = Yt(f, "shadowRoot"), _ = Yt(f, "attributes"), M = o && o.prototype ? Yt(o.prototype, "nodeType") : null, C = o && o.prototype ? Yt(o.prototype, "nodeName") : null, $ = o && o.prototype ? Yt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const K = r.createElement("template");
    K.content && K.content.ownerDocument && (r = K.content.ownerDocument);
  }
  let R, F = "", z, P = !1, W = 0;
  const re = function() {
    if (W > 0)
      throw _n('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Z = function(m) {
    re(), W++;
    try {
      return R.createHTML(m);
    } finally {
      W--;
    }
  }, ye = function(m) {
    re(), W++;
    try {
      return R.createScriptURL(m);
    } finally {
      W--;
    }
  }, xe = function() {
    return P || (z = zv(d, i), P = !0), z;
  }, or = r, Ie = or.implementation, hn = or.createNodeIterator, Er = or.createDocumentFragment, Pt = or.getElementsByTagName, ne = n.importNode;
  let N = sf();
  t.isSupported = typeof $g == "function" && typeof b == "function" && Ie && Ie.createHTMLDocument !== void 0;
  const J = Pv, de = Nv, Ae = wv, X = Ov, Ee = Rv, Ar = qv, Lt = $v, gn = Iv;
  let Ge = tf, ue = null;
  const kt = pe({}, [...Xd, ...Oa, ...Ra, ...qa, ...Qd]);
  let Me = null;
  const Pr = pe({}, [...Zd, ...$a, ...ef, ...zs]);
  let Re = Object.seal(ii(null, {
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
  })), Nr = null, Oi = null;
  const Tt = Object.seal(ii(null, {
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
  let ws = !0, wr = !0, Vn = !1, Ri = !0, ar = !1, Gt = !0, q = !1, j = !1, G = null, ee = null, _e = !1, lt = !1, Nt = !1, Jt = !1, jr = !0, qi = !1;
  const $i = "user-content-";
  let It = !0, Wn = !1, Vr = {}, ft = null;
  const ia = pe({}, [
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
  let _u = null;
  const Cu = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let sa = null;
  const Su = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Os = "http://www.w3.org/1998/Math/MathML", Rs = "http://www.w3.org/2000/svg", cr = "http://www.w3.org/1999/xhtml";
  let Hn = cr, oa = !1, aa = null;
  const Ny = pe({}, [Os, Rs, cr], wa), vu = st(["mi", "mo", "mn", "ms", "mtext"]);
  let ca = pe({}, vu);
  const Mu = st(["annotation-xml"]);
  let la = pe({}, Mu);
  const wy = pe({}, ["title", "style", "font", "a", "script"]);
  let Li = null;
  const Oy = ["application/xhtml+xml", "text/html"], Ry = "text/html";
  let De = null, Gn = null;
  const qy = r.createElement("form"), Eu = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, ua = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Gn && Gn === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = ut(m), Li = // eslint-disable-next-line unicorn/prefer-includes
    Oy.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? Ry : m.PARSER_MEDIA_TYPE, De = Li === "application/xhtml+xml" ? wa : Gi, ue = Jr(m, "ALLOWED_TAGS", kt, {
      transform: De
    }), Me = Jr(m, "ALLOWED_ATTR", Pr, {
      transform: De
    }), aa = Jr(m, "ALLOWED_NAMESPACES", Ny, {
      transform: wa
    }), sa = Jr(m, "ADD_URI_SAFE_ATTR", Su, {
      transform: De,
      base: Su
    }), _u = Jr(m, "ADD_DATA_URI_TAGS", Cu, {
      transform: De,
      base: Cu
    }), ft = Jr(m, "FORBID_CONTENTS", ia, {
      transform: De
    }), Nr = Jr(m, "FORBID_TAGS", ut({}), {
      transform: De
    }), Oi = Jr(m, "FORBID_ATTR", ut({}), {
      transform: De
    }), Vr = et(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? ut(m.USE_PROFILES) : m.USE_PROFILES : !1, ws = m.ALLOW_ARIA_ATTR !== !1, wr = m.ALLOW_DATA_ATTR !== !1, Vn = m.ALLOW_UNKNOWN_PROTOCOLS || !1, Ri = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ar = m.SAFE_FOR_TEMPLATES || !1, Gt = m.SAFE_FOR_XML !== !1, q = m.WHOLE_DOCUMENT || !1, lt = m.RETURN_DOM || !1, Nt = m.RETURN_DOM_FRAGMENT || !1, Jt = m.RETURN_TRUSTED_TYPE || !1, _e = m.FORCE_BODY || !1, jr = m.SANITIZE_DOM !== !1, qi = m.SANITIZE_NAMED_PROPS || !1, It = m.KEEP_CONTENT !== !1, Wn = m.IN_PLACE || !1, Ge = Mv(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : tf, Hn = typeof m.NAMESPACE == "string" ? m.NAMESPACE : cr, ca = et(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ut(m.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, vu), la = et(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? ut(m.HTML_INTEGRATION_POINTS) : pe({}, Mu);
    const S = et(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? ut(m.CUSTOM_ELEMENT_HANDLING) : ii(null);
    if (Re = ii(null), et(S, "tagNameCheck") && Eu(S.tagNameCheck) && (Re.tagNameCheck = S.tagNameCheck), et(S, "attributeNameCheck") && Eu(S.attributeNameCheck) && (Re.attributeNameCheck = S.attributeNameCheck), et(S, "allowCustomizedBuiltInElements") && typeof S.allowCustomizedBuiltInElements == "boolean" && (Re.allowCustomizedBuiltInElements = S.allowCustomizedBuiltInElements), ct(Re), ar && (wr = !1), Nt && (lt = !0), Vr && (ue = pe({}, Qd), Me = ii(null), Vr.html === !0 && (pe(ue, Xd), pe(Me, Zd)), Vr.svg === !0 && (pe(ue, Oa), pe(Me, $a), pe(Me, zs)), Vr.svgFilters === !0 && (pe(ue, Ra), pe(Me, $a), pe(Me, zs)), Vr.mathMl === !0 && (pe(ue, qa), pe(Me, ef), pe(Me, zs))), Tt.tagCheck = null, Tt.attributeCheck = null, et(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Tt.tagCheck = m.ADD_TAGS : Xr(m.ADD_TAGS) && (ue === kt && (ue = ut(ue)), pe(ue, m.ADD_TAGS, De))), et(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Tt.attributeCheck = m.ADD_ATTR : Xr(m.ADD_ATTR) && (Me === Pr && (Me = ut(Me)), pe(Me, m.ADD_ATTR, De))), et(m, "ADD_URI_SAFE_ATTR") && Xr(m.ADD_URI_SAFE_ATTR) && pe(sa, m.ADD_URI_SAFE_ATTR, De), et(m, "FORBID_CONTENTS") && Xr(m.FORBID_CONTENTS) && (ft === ia && (ft = ut(ft)), pe(ft, m.FORBID_CONTENTS, De)), et(m, "ADD_FORBID_CONTENTS") && Xr(m.ADD_FORBID_CONTENTS) && (ft === ia && (ft = ut(ft)), pe(ft, m.ADD_FORBID_CONTENTS, De)), It && (ue["#text"] = !0), q && pe(ue, ["html", "head", "body"]), ue.table && (pe(ue, ["tbody"]), delete Nr.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw _n('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw _n('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = R;
      R = m.TRUSTED_TYPES_POLICY;
      try {
        F = Z("");
      } catch (H) {
        throw R = I, H;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (R = void 0, F = "") : (R === void 0 && (R = xe()), R && typeof F == "string" && (F = Z("")));
    st && st(m), Gn = m;
  }, Au = pe({}, [...Oa, ...Ra, ...Ev]), Pu = pe({}, [...qa, ...Av]), $y = function(m, S, I) {
    return S.namespaceURI === cr ? m === "svg" : S.namespaceURI === Os ? m === "svg" && (I === "annotation-xml" || ca[I]) : !!Au[m];
  }, Ly = function(m, S, I) {
    return S.namespaceURI === cr ? m === "math" : S.namespaceURI === Rs ? m === "math" && la[I] : !!Pu[m];
  }, Iy = function(m, S, I) {
    return S.namespaceURI === Rs && !la[I] || S.namespaceURI === Os && !ca[I] ? !1 : !Pu[m] && (wy[m] || !Au[m]);
  }, Dy = function(m) {
    let S = b(m);
    (!S || !S.tagName) && (S = {
      namespaceURI: Hn,
      tagName: "template"
    });
    const I = Gi(m.tagName), H = Gi(S.tagName);
    return aa[m.namespaceURI] ? m.namespaceURI === Rs ? $y(I, S, H) : m.namespaceURI === Os ? Ly(I, S, H) : m.namespaceURI === cr ? Iy(I, S, H) : !!(Li === "application/xhtml+xml" && aa[m.namespaceURI]) : !1;
  }, Wr = function(m) {
    ri(t.removed, {
      element: m
    });
    try {
      b(m).removeChild(m);
    } catch {
      if (g(m), !b(m))
        throw _n("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, qs = function(m) {
    Ii(m);
    const S = y(m);
    if (S) {
      const H = [];
      ti(S, (Y) => {
        ri(H, Y);
      }), ti(H, (Y) => {
        try {
          g(Y);
        } catch {
        }
      });
    }
    const I = _(m);
    if (I)
      for (let H = I.length - 1; H >= 0; --H) {
        const Y = I[H], oe = Y && Y.name;
        if (typeof oe == "string")
          try {
            m.removeAttribute(oe);
          } catch {
          }
      }
  }, mn = function(m, S) {
    try {
      ri(t.removed, {
        attribute: S.getAttributeNode(m),
        from: S
      });
    } catch {
      ri(t.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(m), m === "is")
      if (lt || Nt)
        try {
          Wr(S);
        } catch {
        }
      else
        try {
          S.setAttribute(m, "");
        } catch {
        }
  }, Uy = function(m) {
    const S = _(m);
    if (S)
      for (let I = S.length - 1; I >= 0; --I) {
        const H = S[I], Y = H && H.name;
        if (!(typeof Y != "string" || Me[De(Y)]))
          try {
            m.removeAttribute(Y);
          } catch {
          }
      }
  }, Ii = function(m) {
    const S = [m];
    for (; S.length > 0; ) {
      const I = S.pop();
      (M ? M(I) : I.nodeType) === wt.element && Uy(I);
      const Y = y(I);
      if (Y)
        for (let oe = Y.length - 1; oe >= 0; --oe)
          S.push(Y[oe]);
    }
  }, Fy = function(m) {
    if (!Gt)
      return;
    const S = [m];
    for (; S.length > 0; ) {
      const I = S.pop(), H = M ? M(I) : I.nodeType;
      if (H === wt.processingInstruction || H === wt.comment && Ze(nf, I.data)) {
        try {
          g(I);
        } catch {
        }
        continue;
      }
      if (H === wt.element) {
        const oe = I, Ce = De(C ? C(I) : I.nodeName);
        try {
          oe.hasAttribute && oe.hasAttribute("patchsrc") && oe.removeAttribute("patchsrc"), oe.hasAttribute && oe.hasAttribute("for") && Ce !== "label" && Ce !== "output" && oe.removeAttribute("for");
        } catch {
        }
      }
      const Y = y(I);
      if (Y)
        for (let oe = Y.length - 1; oe >= 0; --oe)
          S.push(Y[oe]);
    }
  }, Nu = function(m) {
    let S = null, I = null;
    if (_e)
      m = "<remove></remove>" + m;
    else {
      const oe = Hd(m, /^[\r\n\t ]+/);
      I = oe && oe[0];
    }
    Li === "application/xhtml+xml" && Hn === cr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const H = R ? Z(m) : m;
    if (Hn === cr)
      try {
        S = new u().parseFromString(H, Li);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = Ie.createDocument(Hn, "template", null);
      try {
        S.documentElement.innerHTML = oa ? F : H;
      } catch {
      }
    }
    const Y = S.body || S.documentElement;
    return m && I && Y.insertBefore(r.createTextNode(I), Y.childNodes[0] || null), Hn === cr ? Pt.call(S, q ? "html" : "body")[0] : q ? S.documentElement : Y;
  }, wu = function(m) {
    const S = $ ? $(m) : m.ownerDocument;
    return hn.call(
      S || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, $s = function(m) {
    return m = Bi(m, J, " "), m = Bi(m, de, " "), m = Bi(m, Ae, " "), m;
  }, da = function(m) {
    var S;
    m.normalize();
    const I = $ ? $(m) : m.ownerDocument, H = hn.call(
      I || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = H.nextNode();
    for (; Y; )
      Y.data = $s(Y.data), Y = H.nextNode();
    const oe = (S = m.querySelectorAll) === null || S === void 0 ? void 0 : S.call(m, "template");
    oe && ti(oe, (Ce) => {
      Jn(Ce.content) && da(Ce.content);
    });
  }, Ls = function(m) {
    const S = C ? C(m) : null;
    return typeof S != "string" || De(S) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    m.attributes !== _(m) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
  }, Jn = function(m) {
    if (!M || typeof m != "object" || m === null)
      return !1;
    try {
      return M(m) === wt.documentFragment;
    } catch {
      return !1;
    }
  }, Di = function(m) {
    if (!M || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof M(m) == "number";
    } catch {
      return !1;
    }
  };
  function lr(K, m, S) {
    K.length !== 0 && ti(K, (I) => {
      I.call(t, m, S, Gn);
    });
  }
  const zy = function(m, S) {
    return !!(Gt && m.hasChildNodes() && !Di(m.firstElementChild) && Ze(rf, m.textContent) && Ze(rf, m.innerHTML) || Gt && m.namespaceURI === cr && S === "style" && Di(m.firstElementChild) || m.nodeType === wt.processingInstruction || Gt && m.nodeType === wt.comment && Ze(nf, m.data));
  }, Ky = function(m, S, I) {
    if (!Nr[S] && $u(S) && (Re.tagNameCheck instanceof RegExp && Ze(Re.tagNameCheck, S) || Re.tagNameCheck instanceof Function && Re.tagNameCheck(S)))
      return !1;
    if (It && !ft[S]) {
      const H = b(m), Y = y(m);
      if (Y && H) {
        const oe = Y.length;
        for (let Ce = oe - 1; Ce >= 0; --Ce) {
          const Ue = m === I ? p(Y[Ce], !0) : Y[Ce];
          H.insertBefore(Ue, h(m));
        }
      }
    }
    return Wr(m), !0;
  }, Ou = function(m, S, I, H) {
    return m.length === 0 ? S : S === I || S === H ? ut(S) : S;
  }, Ru = function(m, S) {
    if (lr(N.beforeSanitizeElements, m, null), m !== S && b(m) === null)
      return Wn && Ii(m), !0;
    if (Ls(m))
      return Wr(m), !0;
    const I = De(C ? C(m) : m.nodeName);
    if (ue = Ou(N.uponSanitizeElement, ue, kt, G), lr(N.uponSanitizeElement, m, {
      tagName: I,
      allowedTags: ue
    }), m !== S && b(m) === null)
      return Wn && Ii(m), !0;
    if (zy(m, I))
      return Wr(m), !0;
    if (Nr[I] || !(Tt.tagCheck instanceof Function && Tt.tagCheck(I)) && !ue[I]) {
      const Y = Ky(m, I, S);
      return Y === !1 && lr(N.afterSanitizeElements, m, null), Y;
    }
    if ((M ? M(m) : m.nodeType) === wt.element && !Dy(m) || (I === "noscript" || I === "noembed" || I === "noframes") && Ze(Dv, m.innerHTML))
      return Wr(m), !0;
    if (ar && m.nodeType === wt.text) {
      const Y = $s(m.textContent);
      m.textContent !== Y && (ri(t.removed, {
        element: m.cloneNode()
      }), m.textContent = Y);
    }
    return lr(N.afterSanitizeElements, m, null), !1;
  }, qu = function(m, S, I) {
    if (Oi[S] || Gt && S === "patchsrc" || Gt && S === "for" && m !== "label" && m !== "output" || jr && (S === "id" || S === "name") && (I in r || I in qy))
      return !1;
    const H = Me[S] || Tt.attributeCheck instanceof Function && Tt.attributeCheck(S, m);
    if (!(wr && Ze(X, S))) {
      if (!(ws && Ze(Ee, S))) {
        if (H) {
          if (!sa[S]) {
            if (!Ze(Ge, Bi(I, Lt, ""))) {
              if (!((S === "src" || S === "xlink:href" || S === "href") && m !== "script" && Gd(I, "data:") === 0 && _u[m])) {
                if (!(Vn && !Ze(Ar, Bi(I, Lt, "")))) {
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
          !($u(m) && (Re.tagNameCheck instanceof RegExp && Ze(Re.tagNameCheck, m) || Re.tagNameCheck instanceof Function && Re.tagNameCheck(m)) && (Re.attributeNameCheck instanceof RegExp && Ze(Re.attributeNameCheck, S) || Re.attributeNameCheck instanceof Function && Re.attributeNameCheck(S, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          S === "is" && Re.allowCustomizedBuiltInElements && (Re.tagNameCheck instanceof RegExp && Ze(Re.tagNameCheck, I) || Re.tagNameCheck instanceof Function && Re.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, By = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), $u = function(m) {
    return !By[Gi(m)] && Ze(gn, m);
  }, jy = function(m, S, I, H) {
    if (R && typeof d == "object" && typeof d.getAttributeType == "function" && !I)
      switch (d.getAttributeType(m, S)) {
        case "TrustedHTML":
          return Z(H);
        case "TrustedScriptURL":
          return ye(H);
      }
    return H;
  }, Vy = function(m, S, I, H) {
    try {
      I ? m.setAttributeNS(I, S, H) : m.setAttribute(S, H), Ls(m) ? Wr(m) : Wd(t.removed);
    } catch {
      mn(S, m);
    }
  }, Lu = function(m) {
    lr(N.beforeSanitizeAttributes, m, null);
    const S = m.attributes;
    if (!S || Ls(m))
      return;
    Me = Ou(N.uponSanitizeAttribute, Me, Pr, ee);
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Me,
      forceKeepAttr: void 0
    };
    let H = S.length;
    const Y = De(m.nodeName);
    for (; H--; ) {
      const oe = S[H], Ce = oe.name, Ue = oe.namespaceURI, xt = oe.value, _t = De(Ce), pa = xt;
      let pt = Ce === "value" ? pa : Tv(pa);
      if (I.attrName = _t, I.attrValue = pt, I.keepAttr = !0, I.forceKeepAttr = void 0, lr(N.uponSanitizeAttribute, m, I), pt = I.attrValue, qi && (_t === "id" || _t === "name") && Gd(pt, $i) !== 0 && (mn(Ce, m), pt = $i + pt), Gt && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, pt)) {
        mn(Ce, m);
        continue;
      }
      if (_t === "attributename" && Hd(pt, "href")) {
        mn(Ce, m);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          mn(Ce, m);
          continue;
        }
        if (!Ri && Ze(Uv, pt)) {
          mn(Ce, m);
          continue;
        }
        if (ar && (pt = $s(pt)), !qu(Y, _t, pt)) {
          mn(Ce, m);
          continue;
        }
        pt = jy(Y, _t, Ue, pt), pt !== pa && Vy(m, Ce, Ue, pt);
      }
    }
    lr(N.afterSanitizeAttributes, m, null);
  }, Is = function(m) {
    let S = null;
    const I = wu(m);
    for (lr(N.beforeSanitizeShadowDOM, m, null); S = I.nextNode(); )
      if (lr(N.uponSanitizeShadowNode, S, null), Ru(S, m), Lu(S), Jn(S.content) && Is(S.content), (M ? M(S) : S.nodeType) === wt.element) {
        const Y = k(S);
        Jn(Y) && (fa(Y), Is(Y));
      }
    lr(N.afterSanitizeShadowDOM, m, null);
  }, fa = function(m) {
    const S = [{
      node: m,
      shadow: null
    }];
    for (; S.length > 0; ) {
      const I = S.pop();
      if (I.shadow) {
        Is(I.shadow);
        continue;
      }
      const H = I.node, oe = (M ? M(H) : H.nodeType) === wt.element, Ce = y(H);
      if (Ce)
        for (let Ue = Ce.length - 1; Ue >= 0; --Ue)
          S.push({
            node: Ce[Ue],
            shadow: null
          });
      if (oe) {
        const Ue = C ? C(H) : null;
        if (typeof Ue == "string" && De(Ue) === "template") {
          const xt = H.content;
          Jn(xt) && S.push({
            node: xt,
            shadow: null
          });
        }
      }
      if (oe) {
        const Ue = k(H);
        Jn(Ue) && S.push({
          node: null,
          shadow: Ue
        }, {
          node: Ue,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(K) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, I = null, H = null, Y = null;
    if (oa = !K, oa && (K = "<!-->"), typeof K != "string" && !Di(K) && (K = vv(K), typeof K != "string"))
      throw _n("dirty is not a string, aborting");
    if (!t.isSupported)
      return K;
    j ? (ue = G, Me = ee) : ua(m), (N.uponSanitizeElement.length > 0 || N.uponSanitizeAttribute.length > 0) && (ue = ut(ue)), N.uponSanitizeAttribute.length > 0 && (Me = ut(Me)), t.removed = [];
    const oe = Wn && typeof K != "string" && Di(K);
    if (oe) {
      Fy(K);
      const xt = C ? C(K) : K.nodeName;
      if (typeof xt == "string") {
        const _t = De(xt);
        if (!ue[_t] || Nr[_t])
          throw qs(K), _n("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ls(K))
        throw qs(K), _n("root node is clobbered and cannot be sanitized in-place");
      try {
        fa(K);
      } catch (_t) {
        throw qs(K), _t;
      }
    } else if (Di(K))
      S = Nu("<!---->"), I = S.ownerDocument.importNode(K, !0), I.nodeType === wt.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? S = I : S.appendChild(I), fa(I);
    else {
      if (!lt && !ar && !q && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return R && Jt ? Z(K) : K;
      if (S = Nu(K), !S)
        return lt ? null : Jt ? F : "";
    }
    S && _e && Wr(S.firstChild);
    const Ce = oe ? K : S;
    try {
      const xt = wu(Ce);
      for (; H = xt.nextNode(); )
        Ru(H, Ce), Lu(H), Jn(H.content) && Is(H.content);
    } catch (xt) {
      throw oe && (qs(K), ti(t.removed, (_t) => {
        _t.element && Ii(_t.element);
      })), xt;
    }
    if (oe)
      return ti(t.removed, (xt) => {
        xt.element && Ii(xt.element);
      }), ar && da(K), K;
    if (lt) {
      if (ar && da(S), Nt)
        for (Y = Er.call(S.ownerDocument); S.firstChild; )
          Y.appendChild(S.firstChild);
      else
        Y = S;
      return (Me.shadowroot || Me.shadowrootmode) && (Y = ne.call(n, Y, !0)), Y;
    }
    let Ue = q ? S.outerHTML : S.innerHTML;
    return q && ue["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && Ze(Lv, S.ownerDocument.doctype.name) && (Ue = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + Ue), ar && (Ue = $s(Ue)), R && Jt ? Z(Ue) : Ue;
  }, t.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ua(K), j = !0, G = ue, ee = Me;
  }, t.clearConfig = function() {
    Gn = null, j = !1, G = null, ee = null, R = z, F = "";
  }, t.isValidAttribute = function(K, m, S) {
    Gn || ua({});
    const I = De(K), H = De(m);
    return qu(I, H, S);
  }, t.addHook = function(K, m) {
    typeof m == "function" && et(N, K) && ri(N[K], m);
  }, t.removeHook = function(K, m) {
    if (et(N, K)) {
      if (m !== void 0) {
        const S = bv(N[K], m);
        return S === -1 ? void 0 : kv(N[K], S, 1)[0];
      }
      return Wd(N[K]);
    }
  }, t.removeHooks = function(K) {
    et(N, K) && (N[K] = []);
  }, t.removeAllHooks = function() {
    N = sf();
  }, t;
}
var Kv = Ig();
function Bv({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = Q(void 0), [n, i] = fe(void 0), s = me((o) => {
    r.current = o, i(o);
  }, []);
  return B(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const g = Ag(p);
      if (!g)
        return !1;
      const h = w();
      return e === "protected" ? h && Og(h, g) ? (p.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, p);
    }, a = (p, g) => {
      const h = w(), y = r.current;
      if (y && h && Bd(h, y)) {
        if (s(void 0), g.preventDefault(), p !== y.intent)
          return !0;
        const k = se(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (k) {
            const _ = k.getParent(), M = k.getPreviousSibling(), C = k.getNextSibling();
            k.remove(), M ? Rg(M) : C && E(C) ? C.select(0, 0) : _?.selectStart();
          }
        } else y.kind === "selection" ? A(h) && (zl(h), h.removeText()) : nt(k) && cv(k);
        return !0;
      }
      if (!h)
        return !1;
      const b = av(h, p);
      if (b) {
        if (b.kind === "verse") {
          const k = sp();
          k.add(b.node.getKey()), Zr(k);
        } else {
          const k = rs();
          k.anchor.set(b.node.getKey(), 0, "element"), k.focus.set(b.node.getKey(), b.node.getChildrenSize(), "element"), Zr(k);
        }
        return s({ key: b.node.getKey(), kind: b.kind, intent: p }), g.preventDefault(), !0;
      }
      if (A(h) && !h.isCollapsed() && Gl(h)) {
        const k = h.getNodes().filter(he).map((C) => C.getKey()), { anchor: _, focus: M } = h;
        return s({
          kind: "selection",
          intent: p,
          key: k[0],
          anchor: { key: _.key, offset: _.offset, type: _.type },
          focus: { key: M.key, offset: M.offset, type: M.type }
        }), g.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return !g || !ci(g) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, g) => {
      if (!p)
        return !1;
      const h = Kv.sanitize(p), y = new DOMParser().parseFromString(h, "text/html"), b = lv(zb(t, y)), k = w();
      return A(k) && k.insertNodes(b), g.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return g && ci(g) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return g && ci(g) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Bd(w(), p) || s(void 0);
      });
    };
    return Le(
      t.registerCommand(Dr, o, Se),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(mr, c, tt),
      t.registerCommand(fr, u, Se),
      t.registerCommand(bb, c, Se),
      t.registerCommand(Hc, d, Se),
      t.registerCommand(Oo, c, Se),
      t.registerUpdateListener(f)
    );
  }, [t, e, s]), B(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const WN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function jv({ textDirection: e }) {
  const [t] = le();
  return Vv(t, e), null;
}
function Vv(e, t) {
  B(() => (of(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && of(e, t);
  })), [e, t]);
}
function of(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function Wv() {
  const [e] = le();
  return Hv(e), null;
}
function Hv(e) {
  B(() => {
    if (!e.hasNodes([be, At, we, We, gt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Le(
      e.registerNodeTransform(We, Gv),
      e.registerNodeTransform(We, (t) => Jv(t, e)),
      e.registerNodeTransform(gt, af),
      e.registerNodeTransform(At, af),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(gt, (t) => {
        fs(wn("va"), t), fs(wn("vp"), t);
      })
    );
  }, [e]);
}
function Gv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || V(r) || U(n) || U(r) || Te(n) || Te(r) || ze(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  ze(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ie(e, ce) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Fe(n))
    return;
  if (he(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  he(r) && vl(e);
}
function Jv(e, t) {
  const r = e.getParent();
  !ze(r) || !e.isAttached() || cc(t, e.getKey()) && !cc(t, r.getKey()) && r.insertAfter(e);
}
function af(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Te(t); )
    t = t.getLastChild();
  (U(t) || E(t) && Te(t.getParent())) && e.insertBefore(ge(" "));
}
function Jl(e) {
  if (!V(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !al(n)) ? void 0 : e;
}
function Yv(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (D(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function Xv() {
  const e = w();
  if (!(!A(e) || !e.isCollapsed()))
    return Jl(Yv(e.anchor));
}
function Qv(e) {
  const t = w();
  let r;
  return A(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Dg(e.target)), r ? Jl(Ne(r, V)) : void 0;
}
function Dg(e) {
  const t = kb(e)?.anchorNode;
  if (rp(t))
    return Si(t) ?? void 0;
}
function Zv(e) {
  if (w())
    return;
  const t = Dg(e);
  return t ? Jl(Ne(t, V)) : void 0;
}
function eM() {
  const [e] = le(), t = Mg(Xv);
  return B(() => {
    const r = (n) => {
      en(tn), t(n);
    };
    return Le(e.registerCommand(tr, () => {
      const n = Zv(e.getRootElement());
      return n && r(n), !1;
    }, En), e.registerCommand(wo, (n) => {
      const i = Qv(n);
      return i && r(i), !1;
    }, En));
  }, [e, t]), null;
}
function tM({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = gC({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return v(hC, { trigger: e, items: i });
}
function rM({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Ve(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? v(sM, { trigger: e, harness: i }) : v(tM, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
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
  const [r] = le(), [n, i] = fe(void 0), s = Q({ query: "", options: [] }), o = Q(0), a = me((f, p, g) => {
    const h = p.find((y) => y.kind === "note" && y.marker === f);
    if (h) {
      t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = w();
      A(y) && y.insertText(`${e}${f}${g ? " " : ""}`);
    });
  }, [r, t, e]);
  B(() => Le(r.registerCommand(Dr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const h = s.current.query;
        return h ? (a(h, n.items, !1), op(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = w();
          A(y) && y.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const g = s.current.query;
      if (n.hasTextSelection) {
        const h = n.items.find((y) => y.marker === g);
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
  }, Se), r.registerCommand(ap, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, qr)), [r, e, t, n, a]);
  const c = me(() => i(void 0), []), l = me((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = me((f) => {
    const { markerMenuItem: p, applyOpts: g } = f;
    t.apply(p, g);
  }, [t]), d = Ve(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    iM(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && v(ig, { isOpen: !0, children: ({ placement: f }) => v(
    ag,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? nM : void 0 },
    n.session
  ) });
}
function oM(e) {
  return e.replaceAll(L, "~").replace(/ {2,}/g, (r) => L.repeat(r.length));
}
function aM(e) {
  return e.replaceAll(L, " ").replaceAll("~", L);
}
function cM(e) {
  return e.replace(/ {2,}/g, " ");
}
let bo;
function lM(e) {
  e && (bo = e);
}
function Ug(e) {
  return Ns(e);
}
function uM(e, t) {
  return e.isEmpty() ? Qf : Fg(e.toJSON(), t);
}
function Fg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && $o(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Qf;
  if (r.some(Ix)) {
    bo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = zg(r), i = Xt(n, t);
  return i ? { type: gr, version: hr, content: i } : void 0;
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
    type: $t.getType(),
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
  return c = oh(r, a, c), Oe({
    type: $t.getType(),
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
  return a = oh(t, o, a), Oe({
    type: gt.getType(),
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
  if (r?.markerMode === "editable" && !Ug(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(L) && (t[0] = a.slice(1));
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
  return Oe({ type: qh, ...r, content: t });
}
function bM(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Oe({ type: Ih, marker: r, ...n, content: t });
}
function kM(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Oe({
    type: Uh,
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
function si(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Oe({
    type: t,
    marker: r === "" ? void 0 : r,
    ...gh({ sid: n, eid: i, ...s }, o)
  });
}
function xM(e) {
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
    type: oo,
    marker: t === "" ? void 0 : t
  };
}
function cf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function SM(e, t, r, n, i) {
  const s = rr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = si({
      type: s,
      marker: oi,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = si({
      type: s,
      marker: An,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = si({
      type: s,
      marker: An
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = si({
      type: s,
      marker: oi
    });
    i.push(l);
  }
  (!n || !Lp(n)) && t.forEach((l) => {
    const u = si({
      type: s,
      marker: oi,
      eid: l
    });
    i.push(u);
  });
}
function Xt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, g = a, h = a, y = a;
    switch (a.type) {
      case Ot.getType():
        i.push(
          dM(
            l,
            Xt(l.children, t)
          )
        );
        break;
      case Sr.getType():
        i.push(fM(a));
        break;
      case $t.getType():
        i.push(
          pM(
            u,
            Xt(u.children, t)
          )
        );
        break;
      case At.getType():
      case gt.getType():
        i.push(hM(a));
        break;
      case be.getType():
        i.push(
          gM(
            d,
            Xt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case it.getType():
        i.push(
          mM(
            f,
            Xt(f.children, t)
          )
        );
        break;
      case Kn.getType():
        i.push(
          yM(
            a,
            Xt(a.children, t)
          )
        );
        break;
      case Mi.getType():
        i.push(
          bM(
            a,
            Xt(a.children, t)
          )
        );
        break;
      case Ei.getType():
        i.push(
          kM(
            a,
            Xt(a.children, t)
          )
        );
        break;
      case we.getType():
        i.push(
          TM(
            p,
            Xt(p.children, t, p.caller)
          )
        );
        break;
      case Fr.getType():
      case Ur.getType():
      case er.getType():
      case cp.getType():
      case Mr.getType():
        break;
      case rt.getType():
        if (s = Xt(
          h.children,
          t,
          r,
          n
        ), s) {
          const b = h.typedIDs[Qr];
          if (b)
            SM(s, b, o, e[c + 1], i), o = b;
          else {
            const k = s.shift();
            k && (typeof k == "string" ? cf(i, k) : i.push(k)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case rr.getType():
        i.push(si(a));
        break;
      case We.getType():
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Ms(g.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        g.text !== L && !g.text.startsWith(Xc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[Ss]?.textType !== "attribute" && (!r || g.text !== Rt(r))) {
          let b = xM(g);
          Ug(t) && (n && b.startsWith(L) && (b = b.slice(1)), b = cM(aM(b))), cf(i, b);
        }
        break;
      case zn.getType():
        i.push(
          _M(
            y,
            Xt(y.children, t)
          )
        );
        break;
      case Kr.getType():
        i.push(CM(a));
        break;
      case Ai.getType():
        bo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        bo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function zg(e) {
  const t = e.findIndex((r) => $o(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = zg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Gs = {
  initialize: lM,
  deserializeEditorState: uM
}, vM = /^sd\d*$/, MM = /* @__PURE__ */ new Set([
  ...Object.entries(Ga).filter(
    ([e, t]) => t.category === x.TitlesHeadings && t.type === T.Paragraph && !vM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function EM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (il(i) || rh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!lT(i)) {
      t && ko(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (ol(i) && MM.has(i.marker) && !ko(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Kg(i.children, t).forEach((s) => {
      const o = AM(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = PM(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Kg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Bg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Lp(i)) {
      const s = Kg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(lf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [lf(i, c.nodes)] });
      });
      return;
    }
    t && ko(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function lf(e, t) {
  return { ...e, children: t };
}
function Bg(e) {
  return Hh(e) && e.number !== "";
}
function ko(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Bg(r) || ko(r)) : !1;
}
function AM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function PM(e) {
  return {
    type: ao,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: jh
  };
}
const uf = Wg([]), NM = {
  type: cp.getType(),
  version: 1
};
let Yl = [], te, qn, jg, Mt;
function wM(e, t) {
  Yl = [], qM(e), $M(t);
}
function OM(e = 0) {
}
function RM(e, t) {
  te = t ?? Ho();
  let r;
  return e ? (e.type !== gr && Mt?.warn(`This USJ type '${e.type}' didn't match the expected type '${gr}'.`), e.version !== hr && Mt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${hr}'.`
  ), e.content.length > 0 ? (r = _c(Or(e.content)), gs(te) && (r = EM(r, Mt))) : r = [uf]) : r = [uf], jg?.(Yl), {
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
function qM(e) {
  e && (qn = e), e?.addMissingComments && (jg = e.addMissingComments);
}
function $M(e) {
  e && (Mt = e);
}
function Vg() {
  return Ns(te);
}
function LM(e, t) {
  let { marker: r } = e;
  r !== as && Mt?.warn(`Unexpected book marker '${r}'!`), r = r ?? as;
  const { code: n } = e;
  (!n || !Ot.isValidBookCode(n)) && Mt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  te?.markerMode === "editable" || te?.markerMode === "visible" ? i.push(
    St("marker", $e(r) + " " + n + L)
  ) : te?.hasGutterParaMarkers && i.push(St("marker", $e(r) + L, !0)), i.push(...t);
  const s = Be(e, Bk);
  return Oe({
    type: Ot.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: zp
  });
}
function IM(e) {
  let { marker: t } = e;
  t !== no && Mt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? no;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Be(e, jk);
  let a;
  te?.markerMode === "visible" && (a = !0);
  const c = [
    yt(jt(t, r) ?? "")
  ];
  return te?.markerMode === "editable" && eE(i, s, c), te?.markerMode === "editable" ? Oe({
    type: $t.getType(),
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
    type: Sr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Gp
  });
}
function DM(e) {
  let { marker: t } = e;
  t !== io && Mt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? io;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (SC(te) ?? At).getType(), c = te?.markerMode === "editable" ? Zp : Wh;
  let l, u;
  te?.markerMode === "editable" ? l = jt(t, r) : te?.markerMode === "visible" && (u = !0);
  const d = Be(e, nT);
  return Oe({
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
function UM(e, t = [], r = !1) {
  let { marker: n } = e;
  be.isValidMarker(n, qn?.extraValidMarkers) || Mt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (te?.markerMode === "editable") {
    const [a] = t;
    mi(a) ? a.text = L + a.text : a && t.unshift(yt(L));
  }
  t.length === 0 && t.push(yt(Vt)), kc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Be(e, Hk);
  return s || YM(n, o, i), s || Tc(e.marker ?? "", i, !1, r), Oe({
    type: be.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Hp
  });
}
function Wg(e) {
  return {
    type: nn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Xp
  };
}
function FM(e, t = []) {
  let { marker: r } = e;
  it.isValidMarker(r, qn?.extraValidMarkers) || Mt?.warn(`Unexpected para marker '${r}'!`), r = r ?? Bt;
  const n = [];
  if (jn(te) && (te?.markerMode === "editable" ? n.push(
    mt(r),
    yt(L, Cr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && n.push(
    St(
      "marker",
      $e(r) + L,
      te?.hasGutterParaMarkers
    )
  )), n.push(...t), Vg()) {
    const s = n.find(
      (o) => !hl(o) && !(mi(o) && o.text === L)
    );
    mi(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => L.repeat(o.length)));
  }
  const i = Be(e, tT);
  return Oe({
    type: it.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Qp
  });
}
function Xl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function zM(e, t = []) {
  const r = Be(e, ix);
  return Oe({
    ...Xl(),
    type: Kn.getType(),
    unknownAttributes: r,
    children: t,
    version: $h
  });
}
function KM(e, t = []) {
  const r = Be(e, ax), n = e.marker ?? nc, i = [];
  return te?.markerMode === "editable" ? i.push(
    mt(n),
    yt(L, Cr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && i.push(
    St(
      "marker",
      $e(n) + L,
      te?.hasGutterParaMarkers
    )
  ), i.push(...t), Oe({
    ...Xl(),
    type: Mi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Dh
  });
}
function BM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? ic, a = Eh(o, i) ?? o;
  te?.markerMode === "editable" ? s.push(
    mt(a),
    yt(L, Cr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && s.push(
    St(
      "marker",
      $e(a) + L,
      te?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Be(
    e,
    lx
  );
  return Oe({
    ...Xl(),
    type: Ei.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Fh
  });
}
function jM(e, t) {
  const r = gT(t);
  let n = () => {
  };
  return qn?.noteCallerOnClick && (n = qn.noteCallerOnClick), Oe({
    type: er.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: eg
  });
}
function VM(e, t) {
  let { marker: r } = e;
  we.isValidMarker(r, qn?.extraValidMarkers) || Mt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Zc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Ol(te?.noteMode), a = Be(e, ok), c = te?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  te?.markerMode === "editable" ? (l = mt(r, "opening", !1, c), s || (u = mt(r, "closing"))) : te?.markerMode === "visible" && (l = St("marker", $e(r) + " "), s || (u = St("marker", at(r))));
  const d = [];
  let f;
  if (l && d.push(l), te?.markerMode === "editable" && !o)
    f = yt(Rt(i), void 0, c), d.push(f), ZM(n, d), d.push(...t);
  else {
    const p = yt(L, Cr, "token");
    f = jM(i, t), d.push(f, p, ...t.flatMap(WM(p)));
  }
  return u && d.push(u), Oe({
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
    version: Ap
  });
}
function WM(e) {
  return (t) => qp(t) ? [t] : [t, e];
}
function HM(e) {
  let { marker: t } = e;
  (!t || !rr.isValidMarker(t, qn?.extraValidMarkers)) && Mt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Be(e, Qc), s = mh(e);
  return Oe({
    type: rr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: vp
  });
}
function df(e, t = []) {
  return {
    type: rt.getType(),
    typedIDs: { [Qr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function GM(e, t) {
  const { marker: r } = e, n = e.type, i = Be(e, Dk), s = [];
  if (te?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Ah(
      n,
      r,
      i
    );
    o && s.push(St("marker", o)), a && s.push(St("attribute", a)), s.push(...t), c && s.push(St("attribute", c)), l && s.push(St("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    mi(o) && (o.mode = "token");
  }), Oe({
    type: zn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Dp
  });
}
function JM(e) {
  return {
    type: Kr.getType(),
    marker: e,
    text: Qi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: te?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Oh
  };
}
function mt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Mr.getType(),
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
function yt(e, t = void 0, r = "normal") {
  const n = {
    type: We.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Ss] = { textType: t }), n;
}
function St(e, t, r = !1) {
  const n = {
    type: Ur.getType(),
    text: t,
    textType: e,
    version: Rp
  };
  return r && (n[Ss] = { [rl.key]: !0 }), n;
}
function ms(e, t) {
  return {
    type: Fr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Up
  };
}
function kc(e, t, r = !1) {
  te?.markerMode === "editable" ? t.push(mt(e, "opening", r)) : te?.markerMode === "visible" && t.push(St("marker", $e(e, r)));
}
function Tc(e, t, r = !1, n = !1) {
  te?.markerMode === "editable" ? r ? t.push(mt("", "selfClosing")) : t.push(mt(e, "closing", n)) : te?.markerMode === "visible" && t.push(
    St(
      "marker",
      r ? at("") : at(e, n)
    )
  );
}
function YM(e, t, r) {
  if (te?.markerMode !== "editable" || !t) return;
  const n = dr(t, Ro(e));
  n && r.push(yt(n, "attribute"));
}
function ff(e, t) {
  if (e.type !== "ms" || te?.markerMode !== "editable" && te?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Be(e, Qc), o = yh(
    n,
    i,
    s,
    mh(e)
  ), a = dr(o, qo(r ?? ""));
  if (!a) return;
  const c = L + a;
  te?.markerMode === "editable" ? t.push(yt(c, "attribute")) : t.push(St("attribute", c));
}
function XM(e, t) {
  const r = e.marker ?? "";
  if (te?.markerMode === "editable") {
    const n = [];
    kc(r, n), ff(e, n), Tc(r, n, !0), t.push(ms("milestone", n));
  } else
    kc(r, t), ff(e, t), Tc(r, t, !0);
}
function pf(e, t, r) {
  t !== void 0 && r.push(
    ms(e, [
      mt(e, "opening"),
      yt(L + t, "attribute"),
      mt(e, "closing")
    ])
  );
}
function QM(e, t) {
  te?.markerMode === "editable" && (pf("va", e.altnumber, t), pf("vp", e.pubnumber, t));
}
function ZM(e, t) {
  e !== void 0 && t.push(
    ms("cat", [
      mt("cat", "opening"),
      yt(L + e, "attribute"),
      mt("cat", "closing")
    ])
  );
}
function eE(e, t, r) {
  e !== void 0 && r.push(
    ms("ca", [
      mt("ca", "opening"),
      yt(L + e, "attribute"),
      mt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    ms("cp", [
      mt("cp", "opening"),
      yt(L + t, "attribute")
    ])
  );
}
function hf(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function tE(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function gf(e, t) {
  t.marker === An && t.sid !== void 0 && e.push(t.sid), t.marker === oi && t.eid !== void 0 && tE(e, t.eid);
}
function xc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [df(o, [...n])] : o, c = e[i];
  gf(n, c);
  const l = xc(
    e.slice(i + 1, s),
    hf(t, i + 1),
    c.marker === An,
    n
  ), u = df(l, [...n]), d = e[s];
  gf(n, d);
  const f = xc(
    e.slice(s + 1),
    hf(t, s + 1),
    d.marker === An,
    n
  );
  return [...a, u, ...f];
}
function Or(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(yt(Vg() ? oM(i) : i));
    else if (!i.type)
      Mt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ot.getType():
          n.push(LM(i, Or(i.content)));
          break;
        case $t.getType():
          n.push(IM(i));
          break;
        case gt.getType():
          te?.hasSpacing || n.push(NM), n.push(DM(i)), QM(i, n);
          break;
        case be.getType():
          n.push(
            UM(i, Or(i.content, !0), t)
          );
          break;
        case it.getType():
          n.push(FM(i, Or(i.content)));
          break;
        case we.getType():
          n.push(VM(i, Or(i.content)));
          break;
        case rr.getType():
          Mp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Yl?.push(i.sid)), n.push(HM(i)), XM(i, n);
          break;
        case Kr.getType():
          n.push(JM(i.marker ?? ""));
          break;
        case qh:
          n.push(zM(i, Or(i.content)));
          break;
        case Ih:
          n.push(KM(i, Or(i.content)));
          break;
        case Uh:
          n.push(BM(i, Or(i.content)));
          break;
        default:
          Mt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(GM(i, Or(i.content)));
      }
  }), xc(n, r);
}
function _c(e) {
  const t = e.findIndex(
    (n) => il(n) || rh(n) || ol(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    ox(n)
  );
  if (t >= 0) {
    const n = _c(e.slice(0, t)), i = e[t], s = _c(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Hh(n)))
    return [Wg(e)];
  return e;
}
const br = {
  initialize: wM,
  reset: OM,
  serializeEditorState: RM
};
function Hg(e) {
  if (e && !O(e)) {
    if (E(e)) return e;
    if (D(e))
      for (const t of e.getChildren()) {
        const r = Hg(t);
        if (r) return r;
      }
  }
}
function rE() {
  const e = w();
  if (!A(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !O(t) ? Rn(t) : void 0) && E(t)) {
      const i = ge(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      yi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Hg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(L) ? L : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Gg(e)) {
    if (!Rn(t)) continue;
    yi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(L) && r.setTextContent(n.slice(L.length));
  }
  return !0;
}
function Gg(e) {
  const [t, r] = Wc(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || O(a) || ie(a, ce) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Jg(e) {
  let t = e;
  for (; U(t) || Te(t); ) t = t.getParent();
  return t;
}
function Yg(e) {
  const t = Jg(e.getParent());
  return nt(t) ? t : void 0;
}
function nE() {
  const e = w();
  if (!A(e)) return !1;
  const t = e.focus.getNode();
  return Rn(t) ? !!Yg(t) : !1;
}
function Xg(e) {
  const t = ge(""), r = e.getNode(), n = e.offset;
  if (E(r))
    if (n <= 0) r.insertBefore(t);
    else if (n >= r.getTextContentSize()) r.insertAfter(t);
    else {
      const [, o] = r.splitText(n);
      o.insertBefore(t);
    }
  else {
    const o = e.getNode(), a = D(o) ? o : o.getParent(), c = D(o) ? o.getChildAtIndex(n) : o;
    if (c) c.insertBefore(t);
    else if (a) a.append(t);
    else return { parent: void 0, moving: [] };
  }
  for (let o = t.getParent(); ; o = t.getParent())
    if (U(o)) yi(t, { renderGlyphs: !0 });
    else if (!Te(o) || !iE(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function iE(e, t) {
  const r = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (r.length === 0)
    return t.insertAfter(e), !0;
  const n = w();
  if (!A(n)) return !1;
  const i = t.insertNewAfter(n, !1);
  return i ? (i.append(...r), t.insertAfter(e), !0) : !1;
}
function Qg(e) {
  const t = e.anchor.getNode();
  if (O(t) && !_l(t, e.anchor.offset)) {
    const r = t.getParent();
    if (U(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = w();
      return A(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function Zg() {
  const e = w();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = Qg(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!E(r) || O(r) || !Rn(r)) return !1;
  const n = Yg(r);
  if (!n) return !1;
  const { moving: i } = Xg(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Te(o); ) o = o.getFirstChild() ?? void 0;
  return U(o) ? Ko(o) : s.select(0, 0), !0;
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
        number: `${nh(je().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = dl(e), r = El(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = yT(0, o);
        const a = Yx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || dh(c) && fl(parseInt(n, 10), c);
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
function Cc(e, t) {
  return we.isValidMarker(e, t) || !!em[e] || it.isValidMarker(e, t) || be.isValidMarker(e, t);
}
function sE(e, t) {
  return be.isNoteContentMarker(e) ? !1 : be.isValidMarker(e, t);
}
function tm(e, t, r, n, i, s) {
  const o = rg(
    e,
    void 0,
    void 0,
    t,
    n ?? Ho(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function Sc(e, t, r, n, i, s, o) {
  if (we.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = tm(
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
  const a = dE(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      A(u) && (Cl(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = md(d, br, r), g = ga(p);
      if (A(u)) {
        const h = u.anchor.getNode(), y = h.getParent(), b = Rn(h), k = u.anchor.key === u.focus.key;
        if (U(g) && b && k && !La(g, o))
          cE(
            u,
            g,
            h,
            r?.markerMode === "editable"
          );
        else if (U(g) && !k && !La(g, o) && lE(u))
          uE(u, g, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          fE(
            u,
            () => ga(p)
          );
        else if (D(g) && !g.isInline()) {
          const _ = u.insertParagraph();
          if (_) {
            const M = _.getChildren();
            g.append(...M), _.replace(g), nt(g) && Ni(g) || g.selectStart();
          }
        } else if (U(g) && E(h) && !O(h) && U(h.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        La(g, o)) {
          const _ = h.getParent();
          if (U(_)) {
            const M = u.anchor.offset;
            if (M === 0) h.insertBefore(g);
            else if (M >= h.getTextContentSize()) h.insertAfter(g);
            else {
              const [$] = h.splitText(M);
              $.insertAfter(g);
            }
            g.getChildren().forEach(($) => {
              O($) && $.setNested(!0);
            });
            const C = g.getChildren().find(($) => E($) && !O($));
            C && E(C) ? C.select(
              C.getTextContentSize(),
              C.getTextContentSize()
            ) : g.selectEnd();
          }
        } else if (E(h) && !O(h) && u.isCollapsed() && (V(y) || U(y) && V(y.getParent()))) {
          const _ = U(y) ? y : void 0, M = _ ? oE(h, u.anchor.offset) : [];
          let $ = (_ ?? h).insertAfter(g);
          if (vr(g)) {
            const R = {
              ...r || Ho(),
              markerMode: "hidden"
            }, F = md(
              d,
              br,
              R
            ), z = ga(F);
            $ = $.insertAfter(z);
          }
          if (M.length > 0 && _) {
            const R = To(_).append(...M);
            $.insertAfter(R), _.isEmpty() && _.remove();
          } else E($.getNextSibling()) || $.insertAfter(ge(L));
          D($) && $.selectEnd();
        } else if (u.insertNodes([g]), _E(g), f) {
          const _ = sp();
          _.add(g.getKey()), Zr(_);
        } else if (U(g)) {
          const _ = g.getChildren().find((M) => E(M) && !O(M));
          _ && E(_) ? _.select(
            _.getTextContentSize(),
            _.getTextContentSize()
          ) : g.selectEnd();
        } else {
          const _ = g.getNextSibling();
          _ ? _.selectStart() : g.selectStart();
        }
      } else
        u?.insertNodes([g]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function oE(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function La(e, t) {
  return ((t ?? co).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function aE(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(dt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function cE(e, t, r, n) {
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
    const [o, a] = _i(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (yi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(L) && i.setTextContent(L + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !O(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function lE(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || U(n)) continue;
    if (!E(n) || n.getType() !== We.getType() || ie(n, ce) === "attribute") return !1;
    const i = gx(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Rn(n) && (r = !0);
  }
  return r;
}
function uE(e, t, r) {
  const n = Gg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Rn(a)) return;
    yi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(L) && c.setTextContent(l.slice(L.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(L) || i.setTextContent(L + i.getTextContent());
  const s = t.getChildren().find((a) => E(a) && !O(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function dE(e, t) {
  let r = em[e];
  return r || (it.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: it.getType(), marker: e, content: [] }] })
  } : be.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: be.getType(), marker: e };
      return (be.isValidFootnoteMarker(e) || be.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function fE(e, t) {
  const r = e.getNodes(), [n, i] = _i(e);
  let s;
  r.forEach((o, a) => {
    if (D(s) && s.isParentOf(o))
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
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((d) => O(d) && d.getMarkerSyntax() === "opening") && aE(s, U(s.getParent()))), hE(c, s, l);
  }), (E(s) || D(s)) && s.selectEnd();
}
function _i(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Ql(e) {
  return Te(e) || V(e) || V(e.getParent());
}
function rm(e, t, r, n, i) {
  if (!Ql(e)) {
    if (E(e))
      return pE(e, t, r, n, i);
    if (D(e) && e.isInline())
      return e;
  }
}
function pE(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function hE(e, t, r) {
  if (E(t)) {
    const n = vc(e, t);
    t.setTextContent(n), e.remove();
  } else if (D(t)) {
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
    vc(e, t), r && U(t) && t.getChildren().some((s) => O(s)) && E(e) && !O(e) && !e.getTextContent().startsWith(L) && e.setTextContent(L + e.getTextContent());
  }
}
function vc(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    vl(n), E(n) || t.insertBefore(ge(" "));
  }
  return r;
}
function nm(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = $n(u, t);
    if (!f) return !1;
    const p = E(u) ? u.getTextContentSize() : 0;
    if (mf(f, r), E(u) && u.isAttached()) {
      const g = u.getTextContentSize(), h = Math.max(p - g, 0), y = Math.max(0, Math.min(d - h, g)), b = w();
      A(b) && b.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = _i(e);
  if (!eu(n, t, s, o)) return !1;
  const a = Zl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = $n(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = am(d, a);
    f && (mf(f, r), l = !0);
  }), cm(a, i), l;
}
function mf(e, t) {
  e.getChildren().forEach((n) => {
    Et(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Vt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    E(n) && i.startsWith(L) && n.setTextContent(i.slice(L.length));
  }), Va(e);
}
function Zl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = rm(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function $n(e, t) {
  let r = e, n;
  for (; r && !nt(r); ) {
    if (V(r)) return;
    !n && U(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function im(e) {
  const t = Ne(
    e,
    (r) => V(r) || nt(r)
  );
  return V(t);
}
function sm(e) {
  return e.filter(
    (t) => !Ql(t) && (E(t) || D(t) && t.isInline())
  );
}
function gE(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || Ql(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function mE(e, t, r) {
  return e.getChildren().some(
    (n) => D(n) && t.some((i) => n.isParentOf(i)) && !om(n, r)
  );
}
function eu(e, t, r, n, i) {
  const s = sm(e), o = gE(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = $n(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !mE(l, s, o);
  });
}
function om(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Et(r));
}
function am(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (D(u) && t.some((d) => u.isParentOf(d))) {
      if (!om(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Et(n[s - 1]) && (s -= 1), o < n.length - 1 && Et(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(To(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(To(e).append(...c)), e;
}
function To(e) {
  return Tb(e);
}
function cm(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!A(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function yE(e, t, r) {
  if (e.isCollapsed()) {
    const l = $n(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (td(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = _i(e);
  if (!eu(n, r, i, s, t)) return !1;
  const o = Zl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = $n(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = am(u, o);
    d && (td(d, t), c = !0);
  }), c;
}
function bE(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = _i(e);
  if (!!!i?.some(
    (y) => eu(s, y, o, a)
  ) && !kE(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const b = w();
    A(b) && nm(b, y, n) && (l = !0);
  });
  const u = w();
  if (!A(u)) return l;
  const d = u.isBackward(), [f, p] = _i(u), g = Zl(
    u.getNodes(),
    f,
    p
  );
  if (g.length === 0) return l;
  const h = g.filter(
    (y) => !im(y) && !$n(y, t)
  );
  return h.length > 0 && (TE(h).forEach((y) => xE(y, t)), l = !0), cm(g, d), l;
}
function kE(e, t) {
  return sm(e).some(
    (r) => !im(r) && !$n(r, t)
  );
}
function TE(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function xE(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => U(a) && a.getMarker() === t
  ), s = i ? To(i) : Lr(t);
  e[0].insertBefore(s), s.append(...e), i === r || vc(e[0], s);
}
function _E(e) {
  he(e) && (vl(e.getPreviousSibling()), Jh(e.getNextSibling()));
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
}, yf = "psc-active-text", Ks = "psc-empty-text";
function CE({ viewOptions: e }) {
  const [t] = le(), r = Q(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return B(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(yf), r.current = o, o && t.getElementByKey(o)?.classList.add(yf);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        wo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Ks}`);
          if (!c) return !1;
          const l = Si(c);
          if (!he(l)) return !1;
          const u = l.getParent();
          if (!D(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        ht
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Ia(), f = SE(), p = [], g = [];
          return je().getChildren().forEach((h) => {
            if (!D(h)) return;
            const { emptyKeys: y, nonEmptyKeys: b } = ME(h);
            p.push(...y), g.push(...b);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: g };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Ks) : t.getElementByKey(d)?.classList.add(Ks);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Ks));
      }),
      t.registerCommand(
        Gc,
        () => (i(void 0), !1),
        ht
      ),
      t.registerCommand(
        xb,
        () => {
          const o = t.getEditorState().read(Ia);
          return o !== r.current && i(o), !1;
        },
        ht
      )
    ];
    return i(t.getEditorState().read(Ia)), Le(...s);
  }, [t, n]), null;
}
function Ia() {
  return vE(w() ?? void 0)?.getKey();
}
function SE() {
  const e = w();
  if (!A(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!D(n)) return;
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
function vE(e) {
  if (A(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function ME(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!he(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (he(c)) break;
      if (!(Wt(c) || O(c)) && c.getTextContent().replaceAll(Zs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function Mc(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function um(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !ip(e, n, i);
}
function dm(e, t) {
  return e.length <= t ? e : e.slice(0, tu(e, t));
}
function tu(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of Ab(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const EE = 16;
function AE(e, { $isHidden: t, $measure: r } = {}) {
  const n = (k) => t ? ru(k, t).length : k.getTextContent().length;
  r ??= n;
  const i = w();
  if (!A(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = xo(s), l = xo(o), u = i.getNodes(), d = new Map(u.map((k) => [k.getKey(), wE(k)])), f = u.length > 0 ? d.get(u[0].getKey()) : void 0, p = f && PE(s, f) ? f : void 0, g = (k) => {
    const _ = k > 0 ? NE(u, d, p, c, l, k, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), _ ? i.focus.set(_.node.getKey(), _.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!_;
  };
  let h = Math.min(e, n(i));
  if (g(h) && r(i) <= e) return !0;
  let y = 0, b = 0;
  h -= 1;
  for (let k = 0; k < EE && y <= h; k++) {
    const _ = Math.floor((y + h) / 2);
    g(_) && r(i) <= e ? (b = _, y = _ + 1) : h = _ - 1;
  }
  return g(b), !0;
}
function Ec(e) {
  return e.isToken() || xl(e) || Pe(e.getParent());
}
function PE(e, t) {
  const r = D(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && Xs(r.getKey(), 0, "text").isBefore(e);
}
function NE(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, d;
  const f = /* @__PURE__ */ new Map(), p = (h) => {
    const y = t.get(h.getKey());
    return y && r?.is(y) ? void 0 : y;
  }, g = (h) => {
    let y = d ? d.endBefore : h;
    for (; ; ) {
      const b = OE(y, e, n);
      if (!b || !y || b.node.is(y.node)) return b;
      const k = p(b.node);
      if (!k || k.is(p(y.node))) return b;
      y = f.get(k.getKey());
    }
  };
  for (let h = 0; h <= a; h++) {
    const y = e[h], b = p(y);
    if (d && !d.node.is(b) && (u && d.node.isParentOf(u.node) && (u = d.endBefore), d = void 0), b && !d && (d = { node: b, endBefore: u }, f.set(b.getKey(), u)), !o?.(y)) {
      if (D(y) && !y.isInline()) {
        if (!l) {
          if (c + 1 > s) return g(u);
          c += 1;
        }
        l = !y.isEmpty();
        continue;
      }
      if (l = !1, E(y)) {
        const k = h === 0 ? n : 0, _ = h === a ? i : y.getTextContentSize(), M = _ - k, C = Ec(y);
        if (C && c + M > s) return g(u);
        if (!C && c + M >= s) {
          const $ = tu(y.getTextContent(), k + (s - c));
          return g({ node: y, offset: Math.max(k, $) });
        }
        c += M, u = { node: y, offset: _ };
      } else if (Un(y) || Dn(y)) {
        const k = y.getTextContentSize();
        if (c + k > s) return g(u);
        c += k;
      }
    }
  }
  return g(u);
}
function wE(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (V(r) || Kl(r)) && (t = r);
  return t;
}
function OE(e, t, r) {
  if (!e) return e;
  const n = Ne(e.node, (y) => D(y) && !y.isInline()), i = D(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((y) => y.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let y = o; y <= a; y++)
    l.push(c.length), c += i[y].getTextContent();
  const u = l[s - o], d = u + e.offset, f = tu(c, d);
  if (f === d) return e;
  const p = (y) => t[0]?.is(y) ?? !1;
  if (Ec(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= u) {
    const y = f - u;
    return y >= (p(e.node) ? r : 0) ? { ...e, offset: y } : void 0;
  }
  const g = s > o ? i[s - 1] : void 0;
  if (!g || !t.some((y) => y.is(g))) return;
  if (Ec(g))
    return { node: g, offset: p(g) ? r : 0 };
  const h = f - l[0];
  return h >= (p(g) ? r : 0) ? { node: g, offset: h } : void 0;
}
function ru(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, u) => {
    if (!t(l)) {
      if (D(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, E(l)) {
        const d = l.getTextContent();
        o ? a += d : a += d.slice(
          u === 0 ? xo(i) : 0,
          u === n ? xo(s) : d.length
        );
      } else (Un(l) || Dn(l)) && (u !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function Ac(e) {
  const t = e.getParent();
  return !!t && Ne(t, (r) => V(r) && !!r.getIsCollapsed()) !== null;
}
function fm(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    bt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), D(i)) for (const { node: s } of Fn(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function RE(e) {
  return e.getNodes().some(
    (t) => Un(t) || V(t) || he(t) || Ye(t) || Kl(t)
  );
}
function xo(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return D(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const sr = String.raw`\w-`, pm = "a-z0-9", qE = `[a-z][${pm}]*`, $E = new RegExp(
  String.raw`^\\(\+?[${sr}]+)[ \u00A0]$`
), hm = new RegExp(String.raw`^\\(\+?[${sr}]+)$`), LE = new RegExp(String.raw`^\\\+?[${sr}]*\*$`), IE = new RegExp(
  String.raw`^\\(\+?[${sr}]+)(?:[ \u00A0]|$)`
), DE = new RegExp(
  String.raw`^\\(\+?)([${sr}]+)`
), UE = new RegExp(
  String.raw`\\\+?[${sr}]+(?:\\?\*|[ \u00A0])`
), FE = new RegExp(
  String.raw`\\\+?[${sr}]*$`
), zE = new RegExp(
  String.raw`^\\(${qE})( |$)`
), KE = new RegExp(
  String.raw`\\[${pm}+*]*$`,
  "i"
), _o = "usfm:", gm = "usfmopen", mm = "usfmclosed";
function BE(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const jE = new RegExp(
  [_o, gm, mm].map(BE).join("|")
), VE = "\uFEFF", WE = /^usfm_(.+)$/;
function HE(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function GE(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function JE(e) {
  return e.startsWith(_o) ? GE(e.slice(_o.length)).replace(/\r\n?|\n/g, " ") : "";
}
function ym(e) {
  for (const t of e.classList) {
    const r = WE.exec(t);
    if (r) return r[1];
  }
}
function YE(e) {
  const t = ym(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function XE(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(_o)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(gm) && !n.contains(mm)) && ym(r) !== void 0)
      return !0;
  }
  return !1;
}
function bm(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(JE(e.nodeValue ?? ""));
    return;
  }
  if (!HE(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => bm(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? YE(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function QE(e) {
  if (!jE.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !XE(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => bm(n, !1, r)), r.join("").replaceAll(VE, "").replaceAll(L, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function ZE(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ie(e, ce);
  if (r === "attribute" || r === Cr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Pe(o) || ze(o)) return;
  const n = t.startsWith(L) && U(e.getParent()), i = n ? t.slice(1) : t, s = (n ? L : "") + i.replace(/ (?=[ \u00A0])/g, L).replace(new RegExp("(?<=\\u00A0) ", "g"), L);
  s !== t && e.setTextContent(s);
}
function eA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function tA(e, t) {
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
function Pc(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? QE(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(eA(s)) : ""),
    isInternal: tA(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const bf = String.raw`\\(?:\+?[${sr}]+\*?|\*)`, rA = new RegExp(
  String.raw`(?<=${bf})\u00A0|\u00A0(?=${bf})`,
  "g"
);
function nu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(rA, " ").replaceAll(L, "~");
}
const km = new RegExp(
  String.raw`\\c(?![${sr}])[ \u00A0]*[^\s\\]*`,
  "g"
), Tm = new RegExp(String.raw`\\id(?![${sr}])[^\n\\]*`, "g"), nA = new RegExp(
  String.raw`^(?:${km.source}|${Tm.source})`
);
function iu(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(km, "").replace(Tm, "");
    return nA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function Nc(e) {
  if (E(e) && ie(e, ce) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Fe(t)) return !0;
  return !1;
}
function iA(e) {
  return Nc(e.anchor.getNode()) || Nc(e.focus.getNode());
}
function sA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && Nc(t.getNode());
}
function oA(e, t) {
  const n = sA(e) ? t : nu(iu(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function aA(e, t = !1, r = () => {
}) {
  const n = Pc(e, di()._config.namespace);
  if (!n) return !1;
  const i = w(), s = A(i) && iA(i);
  if (!s && n.isInternal || t && A(i) && ci(i))
    return !1;
  const { text: o } = n;
  if (!o || !A(i)) return !1;
  if (e?.preventDefault(), s)
    return oA(i, o), !0;
  const a = nu(iu(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = di();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Qs, void 0), u === "") return;
    const f = w();
    A(f) && f.insertText(u);
  }), !0;
}
function cA(e) {
  if (e.getTextContent() !== L) return !1;
  const t = e.getParent();
  return V(t) ? !bt(e.getPreviousSibling()) : !1;
}
function lA(e, t) {
  if (t || e.getTextContent() !== L) return "";
  const r = e.getParent();
  if (!V(r) || !bt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function uA(e) {
  const t = e.getParent();
  return (V(t) ? t.getCaller() : void 0) || ns;
}
function dA(e) {
  const t = e.getParent();
  return !t || on(t) === void 0;
}
function su(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Wc(e);
  let l = "", u = !0;
  for (const d of t) {
    if (D(d) && !d.isInline()) {
      !u && dA(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, bt(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + uA(d));
    else if (E(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += cA(d) ? "" : f.replaceAll(L, " ") + lA(d, d === n);
    } else (Un(d) || Dn(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(L, " "));
  }
  return l;
}
function xm(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function fA(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => ke(r) || Pe(r)
    )
  );
}
function pA(e) {
  const t = w();
  if (!A(t) || t.isCollapsed()) return;
  const r = su(t), n = {
    "text/plain": r,
    "text/html": xm(r)
  };
  if (Go() || fA(t)) return n;
  const i = Nb(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function kf(e, t, r, n) {
  const i = w();
  if (!A(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Sg();
  const s = pA(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], _m(e, t, i, s, r, n)) : !1;
}
function _m(e, t, r, n, i, s) {
  const o = Mc(s);
  if (o !== void 0 && um(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), wc(e, t, { "text/plain": dm(a, o) })) : wc(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function wc(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || Pb(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function Oc(e, t) {
  const r = wl();
  if (!r?.end) return;
  const n = hA(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = Wo(r);
        return i ? su(i) : void 0;
      },
      { editor: n.editor }
    );
}
const Da = /* @__PURE__ */ new WeakMap();
function hA(e, t) {
  const r = e.getEditorState();
  if (Da.has(r)) {
    const i = Da.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = gA(r, t);
  return Da.set(r, n), n;
}
function gA(e, t) {
  const r = Ul(Ll);
  if (!r) return;
  const n = Gs.deserializeEditorState(e, t);
  if (!n) return;
  const i = _b({
    namespace: "markers-view-copy",
    nodes: [rt, ...Rl],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    br.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function mA({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = le();
  return B(() => {
    const n = (i, s) => {
      const o = w();
      if (!A(o) || o.isCollapsed()) return !1;
      const a = Oc(r, e);
      return a === void 0 ? !1 : _m(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": xm(a) },
        s,
        t
      );
    };
    return Le(
      r.registerCommand(fi, (i) => n(i, !1), Se),
      r.registerCommand(mr, (i) => n(i, !0), Se)
    );
  }, [r, e, t]), null;
}
const Tf = /* @__PURE__ */ new WeakMap();
function yA({
  limit: e,
  viewOptions: t
}) {
  const [r] = le(), n = Q(Mc(e)), i = Q(t), s = Q(!1), o = Q(void 0);
  return B(() => {
    n.current = Mc(e), i.current = t, o.current?.();
  }, [e, t]), B(() => {
    let a, c;
    const l = (b) => {
      const k = n.current;
      if (k === void 0) return;
      const _ = Tf.get(b);
      if (b.defaultPrevented && _ === void 0) return;
      const M = r.getRootElement();
      if (!M) return;
      const C = M.ownerDocument.getSelection();
      if (!C || !TA(C, M)) return;
      b.preventDefault();
      const $ = dm(
        _ ?? C.toString().replaceAll(L, " "),
        k
      );
      Tf.set(b, $);
      const R = b.clipboardData;
      if (R) {
        if (!$) {
          _ !== void 0 && R.clearData();
          return;
        }
        R.setData("text/plain", $);
      }
    }, u = (b) => {
      n.current !== void 0 && Sb(b, "a", { ctrlKey: !pi, metaKey: pi }) && (_A(c?.activeElement, r.getRootElement()) || b.preventDefault());
    }, d = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, f = () => {
      const b = n.current === void 0 ? void 0 : a;
      b !== c && (d(), c = b, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = f;
    const p = (b) => (b?.preventDefault(), !0), g = (b) => {
      const k = n.current;
      if (k === void 0 || (s.current = !1, um(r, b))) return !1;
      if (k <= 0) return p(b);
      const _ = w();
      if (No(_))
        return _.getTextContent().length + fm(_.getNodes()) <= k ? !1 : p(b);
      if (!A(_) || _.isCollapsed()) return !1;
      const M = bA(r, i.current);
      return M.$size(_) <= k ? !1 : (AE(k, M.options), _.isCollapsed() ? p(b) : (r.isEditable() || op(() => kA(r)), s.current = !0, !1));
    }, h = (b, k) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const _ = w();
      if (!A(_) || _.isCollapsed()) return !1;
      const M = k && r.isEditable() && !RE(_);
      return wc(
        b && typeof b == "object" && "clipboardData" in b ? b : null,
        r,
        { "text/plain": ru(_, Ac) },
        M ? () => _.removeText() : void 0
      );
    }, y = Le(
      r.registerCommand(fi, g, tt),
      r.registerCommand(mr, g, tt),
      r.registerCommand(
        fi,
        (b) => h(b, !1),
        qr
      ),
      r.registerCommand(
        mr,
        (b) => h(b, !0),
        qr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        Cb,
        (b) => n.current === void 0 ? !1 : (b?.preventDefault(), !0),
        tt
      ),
      r.registerRootListener((b) => {
        a = b?.ownerDocument ?? void 0, f();
      })
    );
    return () => {
      y(), o.current = void 0, d();
    };
  }, [r]), null;
}
function bA(e, t) {
  if (Ns(t)) {
    const n = (i) => su(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && Oc(e, r) !== void 0) {
    const n = (i) => Oc(e, r)?.length ?? ru(i, Ac).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + fm(n.getNodes()),
    options: { $isHidden: Ac }
  };
}
function kA(e) {
  e.getEditorState().read(() => {
    const t = w(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!A(t) || !r) return;
    const n = xf(e, t.anchor), i = xf(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function xf(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = vb(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = D(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function TA(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const xA = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function _A(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? xA.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const CA = /^\+/;
function ou(e, t) {
  const r = t.replace(CA, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Cm(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Sm(e, t) {
  return Cm(e, t) !== void 0;
}
function Rc(e, t) {
  const r = Cm(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Co(e, t, r) {
  const n = D(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function SA(e, t, r, n, i) {
  const s = ou(n, t);
  if (!s) {
    Co(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Co(e, "invalid", i);
}
function li(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || SA(s, o, t, r, n), li(s, t, r, n, i || o === "xq");
    } else if (he(s)) {
      if (i) continue;
      const o = ou(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else V(s) ? li(s, s.getMarker(), r, n, i) : ze(s) || D(s) && li(s, t, r, n, i);
}
function vA(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = ou(e, a);
    if (!c) {
      Co(o, "unknown", r), Rc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Rc(n, l) || Co(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of je().getChildren())
    ze(o) || (ke(o) ? (i(o, o.getMarker()), s(o) && li(o, void 0, e, r, !1)) : Ye(o) ? i(o, o.getMarker()) : ae(o) ? (i(o, o.getMarker()), s(o) && li(o, o.getMarker(), e, r, !1)) : D(o) && s(o) && li(o, "p", e, r, !1));
  return r;
}
function MA(e) {
  return !!e?.includes("(basic)");
}
function EA(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function vm(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Cc(e, t);
}
function au(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Mm(e, t) {
  const r = [];
  for (const n of t) {
    const i = au(e, n);
    i && Rc(r, i);
  }
  return r;
}
function Js(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: EA(e.description),
    isBasic: MA(e.description)
  };
}
function AA(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function qc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : AA(e.marker, t.marker);
}
function $c(e, t, r) {
  if (t.noteMarker) return [];
  const n = Mm(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && vm(i.marker, r)
  ).filter((i) => {
    const s = au(e, i.marker);
    return s !== void 0 && Sm(n, s);
  }).map((i) => Js(i, "paragraph")).sort(qc);
}
function PA(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => vm(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Js(c, "character")).sort(qc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Js(c, "character")),
    ...a.map((c) => Js(c, "note"))
  ].sort(qc);
}
function NA(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function wA(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function OA(e, t, r) {
  return [
    ...NA(e, t.openCharMarkers),
    ...PA(e, t, r)
  ].sort(wA);
}
function RA(e, t, r) {
  if (t.source === "paragraph") return $c(e, t, r);
  const n = OA(e, t, r);
  return n.length > 0 ? n : $c(e, t, r);
}
function qA(e, t, r) {
  const n = $c(e, t, r), i = Mm(e, t.previousParaMarkers), s = au(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Sm(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const ot = "￼";
function Em(e) {
  return e.length > 1 && e.startsWith(L) && e.charAt(1) !== ot ? e.slice(1) : e;
}
function _f(e) {
  return hl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Am(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = br.serializeEditorState(
    {
      type: gr,
      version: hr,
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
  for (; _f(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Rt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && _f(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Pm(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = br.serializeEditorState(
    { type: gr, version: hr, content: [s, ...r] },
    n
  ).root.children;
  if (!il(o)) return { failure: "shape" };
  const c = lh(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function Bs(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Vi(e, t) {
  FE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += ot;
}
function Kt(e) {
  return e.replaceAll(L, " ");
}
function $A(e, t, r = !1) {
  if (Ns(t)) return Kt(e);
  if (e === L) return " ";
  const n = r && e.startsWith(L), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(L, "~");
}
function es(e) {
  const t = e.getTextContent();
  return un(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function cu(e, t) {
  const r = e[t];
  if (!Je(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Uo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Nm(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function lu(e, t) {
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
function uu(e) {
  return !!e.getUnknownAttributes();
}
function Xo(e, t) {
  const r = t(e)?.type;
  return r === T.Milestone || r === void 0 && tl(e);
}
function du(e, t) {
  return Je(e) ? !Xo(e.getMarker(), t) : V(e) || ze(e) ? !0 : qe(e) ? uu(e) : U(e) ? wm(e, t) : !1;
}
function wm(e, t) {
  if (ET(e)) return !0;
  const r = e.getMarker();
  return !mk(r) && t(r) === void 0;
}
const Ft = "", zt = "";
function Cf(e) {
  return e.flatMap((t) => Fe(t) ? t.getChildren() : [t]);
}
function Ji(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Je(s)) {
      const o = cu(e, i);
      Xo(s.getMarker(), r) && Nm(o) ? (t.push(
        Ft,
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
      ), Ji(Cf(o), t, r), t.push(zt)) : t.push(ot), i += o.length;
    } else if (qe(s)) {
      const o = lu(e, i);
      uu(s) ? t.push(ot) : (t.push(
        Ft,
        "verse",
        Kt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ji(Cf(o), t, r), t.push(zt)), i += o.length;
    } else O(s) ? t.push(Ft, "marker", Kt(s.getTextContent()), zt) : fn(s) ? t.push(Ft, "unmatched", Kt(s.getTextContent()), zt) : du(s, r) ? t.push(ot) : Dn(s) ? t.push(" ") : E(s) ? t.push(
      Kt(
        n ? Em(es(s)) : es(s)
      )
    ) : U(s) ? (t.push(Ft, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ji(s.getChildren(), t, r, !0), t.push(zt)) : D(s) ? (t.push(Ft, s.getType()), Ji(s.getChildren(), t, r), t.push(zt)) : t.push(ot);
  }
}
function kr(e, t) {
  const r = [];
  return Ji(e, r, t), r.join("");
}
function Tr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Ci(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function fu(e) {
  return e.type ?? "";
}
function Om(e, t, r) {
  return t === "closing" ? at(e, r) : t === "selfClosing" ? at("") : $e(e, r);
}
function Ua(e, t) {
  const r = e[t];
  if (!(!r || fu(r) !== "attribute-run"))
    return Tr(r) ?? [];
}
function xr(e, t) {
  const r = [];
  return Yi(e, r, t), r.join("");
}
function Yi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = fu(s);
    if (o === "ms") {
      const l = s, u = Ua(e, i + 1);
      u && Xo(l.marker ?? "", r) ? (t.push(
        Ft,
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
      ), Yi(u, t, r), t.push(zt), i += 1) : t.push(ot);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(ot);
        continue;
      }
      t.push(
        Ft,
        "verse",
        Kt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Ua(e, i + 1 + u);
      for (; d; )
        Yi(d, t, r), u++, d = Ua(e, i + 1 + u);
      t.push(zt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Ft,
        "marker",
        Kt(
          Om(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        zt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Ft, "char", JSON.stringify(l.unknownAttributes ?? null)), Yi(Tr(s) ?? [], t, r, !0), t.push(zt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(ot);
      continue;
    }
    if (o === "unmatched") {
      t.push(Ft, "unmatched", Kt(Ci(s) ?? "")), t.push(zt);
      continue;
    }
    const a = Ci(s);
    if (a !== void 0) {
      t.push(Kt(n ? Em(a) : a));
      continue;
    }
    const c = Tr(s);
    c ? (t.push(Ft, o), Yi(c, t, r), t.push(zt)) : t.push(ot);
  }
}
function wi(e) {
  let t = 0;
  for (const r of e) {
    const n = Tr(r);
    if (n) {
      t += wi(n);
      continue;
    }
    const i = Ci(r);
    if (i !== void 0)
      for (const s of i) s === ot && t++;
  }
  return t;
}
function ys(e, t, r, n, i) {
  cn(e.getChildren(), t, r, n, i);
}
function cn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      Bs(t, a, Kt(a.getTextContent()));
    else if (Je(a)) {
      s();
      const c = cu(e, o);
      Xo(a.getMarker(), r) && Nm(c) ? cn(c, t, r, n) : Vi(t, [a, ...c]), o += c.length;
    } else if (V(a) || ze(a))
      s(), Vi(t, [a]);
    else if (qe(a)) {
      s();
      const c = lu(e, o);
      uu(a) ? Vi(t, [a, ...c]) : (Bs(t, a, Kt(es(a))), cn(c, t, r, n)), o += c.length;
    } else if (U(a))
      s(), wm(a, r) ? Vi(t, [a]) : ys(a, t, r, n, { pending: !0 });
    else if (Dn(a))
      s(), Bs(t, a, " ");
    else if (E(a)) {
      const c = un(a) || ie(a, ce) === "attribute", l = s() && !c;
      Bs(
        t,
        a,
        c ? Kt(es(a)) : $A(es(a), n, l)
      );
    } else D(a) ? ys(a, t, r, n, i) : (s(), Vi(t, [a]));
  }
}
function Rm(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== T.Unknown && n !== T.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (ze(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ys(e, i, t, r), i;
}
function Qo(e, t, r, n) {
  for (const i of t) {
    const s = Rm(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function pu(e, t) {
  let r = 0;
  const n = (i) => {
    if (E(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(ot);
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
    } else D(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function bs(e, t = []) {
  for (const r of e)
    qe(r) ? t.push(r) : D(r) && bs(r.getChildren(), t);
  return t;
}
function hu(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === ot && t++;
    else D(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Br(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === ot && t++;
    else r.content && (t += Br(r.content));
  return t;
}
function LA(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), D(i) && ys(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const ks = /\s/;
function qm(e) {
  return e.filter(Zo).length;
}
function Zo(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return E(t) && !O(t) && ie(t, ce) === "attribute";
}
function IA(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return O(t) || Zo(e);
}
function Sf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Zo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      ks.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function DA(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !D(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = se(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function ea(e, t, r, n) {
  const { key: i, offset: s } = DA(
    e,
    t,
    r,
    n
  ), o = Sf(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !IA(a) ? Sf(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: qm(t.spans) };
}
function Fa(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function UA(e) {
  const t = se(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return U(r) ? (r.selectNext(0, 0), !0) : !1;
}
function FA(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = qe(t) ? lu(r, n) : Je(t) ? cu(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function $m(e, t, r) {
  const { text: n, spans: i } = e, s = qm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !Fa(d);
    if (!(o && Zo(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let g = 0; g < f; g++) {
        const h = n[d.start + g];
        if (c === 0 && (l === 0 || !ks.test(h))) {
          if (p) {
            a = { key: d.key, offset: g };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? ks.test(h) || c-- : l--;
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
    if (d && Fa(d) && UA(d) || d?.isSentinel && FA(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Fa(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = se(a.key);
    if (d && E(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(D)?.selectStart();
}
function Lm(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(D)?.selectStart();
      return;
    }
    $m(LA(e, n, i), t, e);
  }
}
function Im(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    zA(e, n);
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  cn(e, s, n, i), $m({ text: s.text, spans: s.spans }, t, e);
}
function zA(e, t) {
  const r = e.find(D);
  if (r && du(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function Dm(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Qo(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = w();
  if (A(c)) {
    for (let h = c.anchor.getNode(); h; h = h.getParent())
      if (e.some((y) => y.is(h))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = ea(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = _r(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Br(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = br.serializeEditorState(
    { type: gr, version: hr, content: l },
    r
  );
  if (xr(u.root.children, n) === kr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((h) => ui(h));
  if (hu(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = bs(e).map((h) => ({
    number: h.getNumber(),
    sid: h.getSid()
  })), p = e[0];
  d.forEach((h) => p.insertBefore(h)), pu(d, s.sentinels), e.forEach((h) => h.remove());
  const g = bs(d);
  for (let h = 0; h < f.length && h < g.length; h++)
    g[h].getNumber() === f[h].number && g[h].setSid(f[h].sid);
  return Lm(d, o, a, n, r), !0;
}
function Um(e) {
  if (e.getIsCollapsed() !== !1 || !we.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!O(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(bt(n) || E(n) && n.getTextContent() === Rt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!O(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function Fm(e, t, r) {
  const n = Um(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return cn(n, i, t, r), { out: i, contentNodes: n };
}
function zm(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(ot)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function KA(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Fm(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (A(u)) {
    for (let C = u.anchor.getNode(); C; C = C.getParent())
      if (e.is(C)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = ea(
      [e],
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const d = _r(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Br(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], g = zm(p), h = Am(e, p, g, r);
  if (h.failure !== void 0)
    return h.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      h.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (wi(h.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== g;
  if (y && e.setCategory(g), xr(h.children, n) === kr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const b = h.children.map((C) => ui(C));
  if (hu(b) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const k = a[0];
  if (k)
    b.forEach((C) => k.insertBefore(C));
  else {
    const C = e.getChildren().find(($) => O($) && $.getMarkerSyntax() === "closing");
    b.forEach(($) => C ? C.insertBefore($) : e.append($));
  }
  pu(b, o.sentinels);
  const _ = new Set(o.sentinels.flat().map((C) => C.getKey()));
  a.forEach((C) => {
    _.has(C.getKey()) || C.remove();
  });
  const M = Um(e) ?? b;
  return Im(
    M,
    c,
    l,
    n,
    r
  ), !0;
}
function Km(e) {
  const t = e.getChildren();
  return ul(t[0]) ? t.slice(1) : t;
}
function gu(e, t, r) {
  const n = Km(e), i = { text: "", spans: [], sentinels: [] };
  return cn(n, i, t, r), { out: i, contentNodes: n };
}
const BA = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${Bt}(?=[\\s\\u200B\\\\|]|$)`
);
function Bm(e, t) {
  const r = _r(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === Bt && !BA.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function jm(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = gu(e, i, n);
  if (!Qo(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, u = !1;
  const d = w();
  if (A(d)) {
    for (let R = d.anchor.getNode(); R; R = R.getParent())
      if (c.some((F) => F.is(R))) {
        u = !0;
        break;
      }
    d.isCollapsed() && (l = ea(
      c,
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const f = Bm(o.text, i);
  if (Br(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = Pm(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const g = [...p.children, ...p.followingBlocks];
  if (wi(g) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && xr(p.followingBlocks, i) === kr(r, i) && xr(p.children, i) === kr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const h = p.children.map((R) => ui(R)), y = p.followingBlocks.map((R) => ui(R)), b = [...h, ...y];
  if (hu(b) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const k = bs([...a, ...r]).map((R) => ({
    number: R.getNumber(),
    sid: R.getSid()
  })), _ = a[0];
  _ ? h.forEach((R) => _.insertBefore(R)) : h.forEach((R) => e.append(R)), y.reduce((R, F) => R.insertAfter(F), e), pu(b, o.sentinels);
  const M = new Set(o.sentinels.flat().map((R) => R.getKey()));
  a.forEach((R) => {
    M.has(R.getKey()) || R.remove();
  }), r.forEach((R) => R.remove());
  const C = [...Km(e), ...y], $ = bs(C);
  for (let R = 0; R < k.length && R < $.length; R++)
    $[R].getNumber() === k[R].number && $[R].setSid(k[R].sid);
  return Im(
    C,
    l,
    u,
    i,
    n
  ), !0;
}
const Vm = /* @__PURE__ */ new Set(["ca", "cp"]), mu = "cp";
function Wm(e) {
  if (!yr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ys(e, t, pr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = _r(r, { getMarker: pr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === mu)
  );
}
function ta(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (U(r) && Vm.has(r.getMarker()) || Wm(r)) {
      t.push(r);
      continue;
    }
    ae(r) && r.getMarker() === mu && t.push(r);
    break;
  }
  return t;
}
function jA(e) {
  const t = (n) => U(n) && Vm.has(n.getMarker()) || Wm(n);
  if (t(e) || ae(e) && e.getMarker() === mu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Pe(n)) return n;
      if (!t(n)) return;
    }
}
function Hm(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = ta(e);
  if (n.some((s) => ae(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (cn(e.getChildren(), i, t, r), cn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function VA(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...ta(e)], o = Hm(e, n, r);
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
    l.isCollapsed() && (a = ea(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const u = _r(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Br(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = br.serializeEditorState(
    { type: gr, version: hr, content: u },
    r
  );
  if (xr(f.root.children, n) === kr(s, n)) {
    let g = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), g = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), g = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const p = f.root.children.map((g) => ui(g));
  return Pe(p[0]) ? (p.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), Lm(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Ts(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (ze(n)) return;
    !t && (V(n) || ae(n) || Pe(n) || ke(n)) && (t = n), np(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? jA(r) : void 0) ?? t;
}
function Qt(e, t) {
  const r = Ts(e);
  return r ? V(r) ? KA(r, t) : Pe(r) ? VA(r, t) : ke(r) ? jm(r, t) : Dm([r], t) : !1;
}
const WA = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function vf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !WA.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Ys(e, t) {
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
          t.push(`\\${n}`), vf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Ys(r.content, t), vf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Ys(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Ys(r.content, t);
      }
    }
}
function Mf(e, t, r) {
  const n = Ts(e);
  if (!Ke(n)) return !1;
  const i = w();
  if (!A(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = ke(n) ? gu(n, t, r).out : Rm(n, t, r);
  if (!o) return !1;
  const a = _r(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    ks.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Ys(a, l);
  for (const u of l.join("").replaceAll(L, "~")) {
    if (ks.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function yu(e, t) {
  return Gm(e, t, T.Paragraph);
}
function HA(e, t) {
  return Gm(e, t, T.Character);
}
function Gm(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== T.Unknown ? i === r : !(we.isValidMarker(n) || tl(n));
}
function GA(e) {
  return [dt(e), Lo()];
}
function bu(e) {
  Ht(e, 2);
}
function JA(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function ra(e) {
  const t = JA(e);
  e.splice(0, 0, GA(e.getMarker())), t && bu(e);
}
function So(e, t) {
  e.setMarker(t), ra(e), bu(e);
}
function YA(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!un(n)) {
    if (E(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(L), Ct(n, ce, Cr), n.setMode("token");
      return;
    }
    if (ph(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Lo());
  }
}
function Ef(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : D(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function ts(e) {
  for (let t = e; t; t = t.getParent())
    if (ae(t)) return t;
}
function XA(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = ts(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = ts(r.getNode())?.is(s) ?? !1, a = ts(n.getNode())?.is(s) ?? !1;
    return !(o && !Ef(r, s, "start") || a && !Ef(n, s, "end"));
  });
}
function Lc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!A(r) || r.isCollapsed()))
    for (const n of XA(r)) t.add(n.getKey());
}
function QA(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!A(r) || !r.isCollapsed()) return;
  const n = ts(r.focus.getNode());
  n && t.add(n.getKey());
}
function ZA(e) {
  const t = w();
  !A(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (Lc(e), t.removeText());
}
const eP = new RegExp(
  String.raw`^\\\+?([${sr}]+)(?:[ \u00A0]|$)`
);
function tP(e, t) {
  const r = eP.exec(e.getTextContent());
  return !!r && yu(r[1], t);
}
function rP(e, t) {
  if (!jn(t.viewOptions)) return;
  if (Et(e.getFirstChild())) {
    YA(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (tP(e, t.getMarker)) return;
    ra(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ae(o) && !o.is(e))) {
      So(e, Bt), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (Ke(r)) {
    const n = e.getChildren().filter((a) => !un(a)), i = w();
    let s = !1;
    if (A(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ts(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || D(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Ht(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  So(e, Bt);
}
function nP(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = dr(t, Ro(e.getMarker()));
  return r === "" ? void 0 : r;
}
function iP(e) {
  const t = e.getChildren().filter((s) => !O(s) && ie(s, ce) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(L) && r.setTextContent(r.getTextContent().slice(1));
  const n = nP(e);
  n && t.push(ge(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function sP(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !O(c) && c.getTextContent() === Rt(s)
    ), a = Fn(e).some(({ node: c }) => O(c));
    if (!o && !a) return;
    r.forEach((c) => {
      O(c) || (E(c) && c.getTextContent() === Rt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => O(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function oP(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    iP(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && Qt(e, t);
}
function Jm(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && jn(r)) {
    So(e, t);
    return;
  }
  dg(e, t);
}
function Ym() {
  const e = w();
  if (!A(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Xm(e);
    return t !== "removed" ? t : (Ic(), "handled");
  }
  return Ic() ? "handled" : "declined";
}
function aP(e, t) {
  if (!t) return e;
  const r = zE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== T.Paragraph ? e : e.slice(r[0].length);
}
function Af(e, t) {
  const r = w();
  if (!A(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Qm())
      return "declined";
  } else {
    const s = Xm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => aP(s, t)
  );
  Pf(n ?? "");
  for (const s of i)
    Ic(), Pf(s);
  return "handled";
}
function cP(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Si(n);
  if (!i) return !1;
  const s = nr(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Xm(e) {
  const t = nr(e.anchor.getNode()), r = nr(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), lP() ? "removed" : "needs-plain-split");
}
function Pf(e) {
  if (e === "") return;
  const t = w();
  A(t) && t.insertText(e);
}
function lP() {
  const e = w();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = nr(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function Qm() {
  const e = w();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = nr(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Ic() {
  const e = w();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Qm();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Lr("fp", { closed: "false" });
  i.append(dt("fp"));
  const s = E(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
    const [u] = l;
    u && (bT(u), i.append(u));
  }
  return i.getChildren().every(O) && i.append(ge(Vt)), Zm(i), !0;
}
function Zm(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (E(t)) {
    const r = t.getTextContent().startsWith(L) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (D(t)) {
    Zm(t);
    return;
  }
  e.selectEnd();
}
function uP(e) {
  const t = [];
  let r = e;
  for (; r; )
    U(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function dP(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of je().getChildren()) {
    if (t && n.is(t)) {
      ke(n) && r.push(n.getMarker());
      break;
    }
    (ke(n) || Ye(n) || ae(n)) && r.push(n.getMarker());
  }
  return r;
}
function fP(e) {
  let t = e;
  for (; D(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function pP(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Et(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && un(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(fP(i)) && r === 0 : !1;
}
function hP(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Et(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && un(i) && t.is(i) && r === 0;
}
function gP() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function mP() {
  const e = w();
  if (!A(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Ne(t, ae), s = i ? void 0 : Ne(t, ke), o = !n && !s && (!i || hP(i, t, r)) ? "paragraph" : "character", a = nr(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: dP(t),
    openCharMarkers: uP(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: _l(t, r),
    anchorRect: gP()
  };
}
function yP() {
  const e = w();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = KE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function bP(e, t, r) {
  Jm(e, t, r), bu(e);
}
function kP(e, t, r) {
  const n = w();
  if (!A(n)) return;
  const i = n.focus.getNode(), s = Ne(i, ae);
  if (t === "backslash" && s && pP(s, i, n.focus.offset)) {
    bP(s, e, r);
    return;
  }
  Dc(e, r);
}
function ey(e, t) {
  const r = e.getNode(), n = Jg(D(r) ? r : r.getParent());
  return t.is(n);
}
function TP(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !ey(e, t);
}
function vo(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function xP(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!O(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!U(r)) return e;
  const n = r.getParent();
  return n ? Xs(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function _P(e, t, r) {
  const n = w();
  if (!A(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!ey(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && TP(s, e)) return !1;
  const o = ul(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (vo(n.anchor, e, o), vo(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = w();
  if (!A(a) || !a.isCollapsed()) return !1;
  const c = Qg(a);
  if (!c) return !1;
  const { parent: l, moving: u } = Xg(
    xP(c.anchor)
  );
  if (!e.is(l)) return !1;
  const d = u.filter((g) => !g.is(o)), f = hi(t);
  e.insertAfter(f), f.append(...d);
  const [p] = d;
  return U(p) ? Ko(p) : f.select(0, 0), jn(r) && ra(f), !0;
}
function CP(e, t) {
  const r = w();
  return !A(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function ty(e) {
  const t = w();
  return A(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function SP(e) {
  const t = Ne(e.anchor.getNode(), ke);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !ul(r) || (vo(e.anchor, t, r), vo(e.focus, t, r));
}
function vP(e, t, r, n) {
  const i = w();
  if (A(i) ? SP(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && yP(), e.kind === "closeTag") {
    ty(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Ym() !== "declined") return;
  if (e.kind === "paragraph" && it.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    kP(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (we.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return tm(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  Sc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: di(), reference: r });
}
function Dc(e, t) {
  const r = w();
  if (!A(r)) return !1;
  Cl(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!Ne(n, ae)) {
    const o = Ne(n, ke);
    if (o) return _P(o, e, t);
  }
  const i = jn(t);
  if (Zg()) {
    const o = w();
    if (!A(o)) return !1;
    const a = Ne(o.anchor.getNode(), ae);
    return a ? (a.setMarker(e), i && ra(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return ae(s) ? (i ? So(s, e) : s.setMarker(e), !0) : !1;
}
function MP() {
  const [e] = le();
  return B(() => e.registerCommand(lp, () => !0, ht), [e]), null;
}
function EP(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = IE.exec(e)?.[1];
  return r === void 0 ? !1 : !yu(r, t);
}
function ry(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !EP(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ae(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== T.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!ae(i) && !ke(i)))
    return [i, r];
}
function ny(e, t) {
  const r = ry(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return ke(n) ? jm(n, t, [i]) : Dm([n, i], t);
}
function AP(e, t) {
  const r = w();
  A(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function iy(e) {
  const t = DE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function PP(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = iy(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function NP(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (V(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if (U(n)) {
      Ko(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Nf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = iy(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  NP(e);
}
function wf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function sy(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Qt(e, r);
  const n = PP(e), i = e.getParent();
  if (ae(i)) {
    if (!yu(t, r.getMarker))
      return ny(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Qt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), wf(s, t) && Nf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || V(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? HA(t, r.getMarker) : we.isValidMarker(s)))
      return Qt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Qt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (AP(c, at(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), wf(a, s) && Nf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Qt(e, r);
}
function wP(e) {
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
function OP(e, t) {
  const r = e.getTextContent();
  if (dn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Fe(e.getParent()) && gl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !wP(e)) {
    vT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = $E.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), sy(e, n[1], t);
      return;
    }
    if (LE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Qt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = at(e.getMarker(), e.getNested());
    if (U(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ge(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function RP(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Rh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function oy(e) {
  if (!Tp(e)?.length)
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
const Wi = oy("v"), qP = oy("c"), Of = /^[ \u00A0]*$/;
function Rf(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === We.getType() && n.getMode() === "normal" && ie(n, ce) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = ge(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function $P(e, t) {
  const r = e.getTextContent(), n = jt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Wi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Wi.valueAndRest.exec(c);
    if (l && Of.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Wi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Wi.valueAndRest.exec(r);
  if (!s) {
    const c = Wi.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = w(), p = A(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(jt("v", u));
      const g = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      Rf(e, d, g);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Qt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Of.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(jt("v", o)), a && Rf(e, a, a.length);
}
const LP = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function IP(e, t) {
  const r = e.getParent();
  if (!V(r) || r.getIsCollapsed() !== !1 || !Tp(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!O(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Rt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = LP.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Rt(a)), !0;
}
function DP(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = jt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = qP.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function ay(e) {
  if (Je(e)) {
    const { wrapper: t } = Uo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (V(e)) {
    const { wrapper: t } = kh(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Pe(e)) {
    const t = [], r = Th(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = _h(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (qe(e)) {
    const t = [], r = cs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = cs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function UP(e) {
  const t = w();
  if (!A(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return ay(e).some((n) => r.is(n));
}
function FP(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ae(e) && ph(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of us)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ps(l, e) && (i || UP(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ay(e))
    l.remove(), n = !0;
  let s = !1;
  if (U(e)) {
    const l = NT(e);
    l !== void 0 && fk(l) && (vh(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of us)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (vx(l, e)) {
        fs(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Kh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Bo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function qf(e) {
  return E(e) && e.getType() === We.getType() && e.getMode() === "normal" && ie(e, ce) !== "attribute";
}
function zP(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && qf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && qf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function js(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = zP(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (dn(c)) continue;
      const g = hm.exec(p);
      c.getMarkerSyntax() === "opening" && g ? n = sy(c, g[1], e) || n : r === "idle" && Mf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : ny(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Qt(c, e) || n;
      continue;
    }
    const l = On(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = FP(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Mf(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Qt(u, e) || n;
    }
  }
  return n;
}
function cy(e) {
  if (fn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return Xi(t) !== void 0;
  return !1;
}
function KP(e) {
  const t = On(e);
  if (!t) return !1;
  const r = wn(t.kind);
  return !Bo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function $f(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ze(t) || Lh(t)) return !0;
  return !1;
}
function BP(e, t) {
  const r = e.getTextContent(), n = ie(e, ce), i = e.getParent();
  if (n !== "attribute" && Pe(i)) {
    r.replace(/^[ \u00A0]+/, "") === jt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (IP(e, t)) return;
  if (n === "attribute") {
    KP(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && cy(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !$f(e))
      t.pendingKeys.add(e.getKey());
    else if (Ch(e)) t.pendingKeys.add(e.getKey());
    else if (Pe(Ts(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      U(a) && Mh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if ($f(e)) return;
  const s = w(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (UE.test(o)) {
    if (xk(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Qt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function jP(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Kh(e, t);
}
function VP(e) {
  const t = (r) => {
    if (O(r)) {
      dn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (fn(r)) {
      Rh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of us)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ps(n, r) || jP(n, r)) && e.pendingKeys.add(r.getKey());
    if (qe(r)) {
      r.getTextContent() !== jt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== We.getType() || ie(r, ce) === "attribute") return;
      const n = r.getParent();
      if (Pe(n)) {
        r.getTextContent() !== jt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && cy(r) || i.includes("//") || Ch(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (U(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!ze(r)) {
      if (Fe(r) && r.getChildrenSize() === 0) {
        const n = On(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      D(r) && r.getChildren().forEach(t);
    }
  };
  je().getChildren().forEach(t);
}
const ly = Jc(
  "COMMIT_PENDING_MARKERS_COMMAND"
), uy = Jc(
  "SET_MARKER_SETTLE_SUSPENDED_COMMAND"
);
function za(e) {
  const t = e();
  return en(Zf), en(Sp), t;
}
const Lf = 8, WP = 1e3;
function ni(e, t) {
  const r = qe(e) ? ["va", "vp"] : Je(e) ? ["milestone"] : V(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    Nx(wn(n), e, t.pendingKeys);
}
function HP(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Yc) || i.updateTags.has(is)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = se(o);
        if (!c) continue;
        const l = On(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = se(o.getKey());
        c?.isAttached() && wn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Le(
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
    e.registerMutationListener(Mr, r),
    e.registerMutationListener(Ur, r),
    e.registerMutationListener(Fr, r)
  );
}
function Uc(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = w();
  return r ? t ? Og(r, t) : A(r) && ci(r) : !1;
}
function GP(e, t, r) {
  return Le(
    e.registerCommand(
      fr,
      (n) => {
        if (Go() || Uc(t)) return !1;
        const i = Pc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? nu(iu(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Af(o, t.getMarker);
          if (a === "declined" && cP(e) && (a = Af(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      tt
    ),
    e.registerCommand(
      fr,
      (n) => {
        const i = Pc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !nE()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && A(o) && ci(o) ? !1 : (n?.preventDefault(), A(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Qs, void 0), a === "") return;
          const l = w();
          A(l) && l.insertText(a);
        }), !0);
      },
      Se
    ),
    e.registerCommand(
      fr,
      () => (t.splitExpected.current = !0, !1),
      ht
    )
  );
}
function JP({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = le(), a = e?.markerMode === "editable", c = !!e && Ns(e), l = Q(void 0), u = Q(n), d = Q(!1), f = Q(s);
  return B(() => {
    u.current = n, f.current = s;
    const p = l.current;
    p && (e && (p.viewOptions = e), p.getMarker = t ?? pr, p.logger = r, p.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), B(() => {
    if (!a || !e) return;
    const p = {
      viewOptions: e,
      getMarker: t ?? pr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = p;
    const g = xx(o, p.pendingKeys);
    let h, y = !1, b, k = !1, _ = !1, M = 0;
    const C = () => M < Lf ? !1 : (p.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Lf} consecutive mutating passes; leaving ${p.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...p.pendingKeys].join(", ")}`
    ), !0), $ = (P, W = "departure") => {
      o.update(() => {
        M = za(
          () => js(p, P, W)
        ) ? M + 1 : 0;
      });
    };
    let R;
    const F = () => {
      if (R !== void 0 && clearTimeout(R), R = void 0, _ || p.pendingKeys.size === 0 || d.current) return;
      const P = u.current ?? WP;
      P < 0 || (R = setTimeout(() => {
        R = void 0, !(_ || p.pendingKeys.size === 0) && (y || C() || $(void 0, "idle"));
      }, P));
    }, z = Le(
      o.registerNodeTransform(Mr, (P) => {
        if (o.isComposing()) return;
        OP(P, p);
        const W = On(P);
        W && (qe(W.owner) || V(W.owner) || Pe(W.owner) || Je(W.owner) && Uo(W.owner).wrapper === void 0) && ni(W.owner, p);
      }),
      o.registerNodeTransform(gt, (P) => {
        o.isComposing() || ($P(P, p), ni(P, p));
      }),
      o.registerNodeTransform($t, (P) => {
        o.isComposing() || (DP(P), P.isAttached() && ni(P, p));
      }),
      o.registerNodeTransform(it, (P) => {
        o.isComposing() || rP(P, p);
      }),
      o.registerNodeTransform(be, (P) => {
        if (!o.isComposing()) {
          oP(P, p);
          for (const W of ["separator", "char"])
            P.isAttached() && Ps(wn(W), P) && p.pendingKeys.add(P.getKey());
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
      o.registerNodeTransform(rr, (P) => {
        o.isComposing() || ni(P, p);
      }),
      o.registerNodeTransform(Fr, (P) => {
        if (o.isComposing()) return;
        const W = On(P);
        W && (Je(W.owner) || qe(W.owner) || V(W.owner) || Pe(W.owner)) && ni(W.owner, p);
      }),
      o.registerNodeTransform(we, (P) => {
        o.isComposing() || (sP(P, p), ni(P, p));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(Kr, (P) => {
        o.isComposing() || RP(P, p);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(We, (P) => {
        o.isComposing() || BP(P, p);
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
        (P) => {
          o.getEditorState().read(() => {
            for (const [W, re] of P) {
              if (re === "destroyed") continue;
              const Z = se(W);
              !Z || ie(Z, ce) !== "attribute" || Fe(Z.getParent()) || o.getElementByKey(W)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      HP(o, p),
      ...c ? [
        o.registerNodeTransform(We, (P) => {
          o.isComposing() || ZE(P);
        }),
        o.registerCommand(
          fi,
          (P) => kf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            P && typeof P == "object" && "clipboardData" in P ? P : null,
            o,
            !1,
            f.current
          ),
          Se
        ),
        o.registerCommand(
          mr,
          (P) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            kf(
              P && typeof P == "object" && "clipboardData" in P ? P : null,
              o,
              !0,
              f.current
            )
          ),
          Se
        ),
        o.registerCommand(
          fr,
          (P) => aA(
            // Same jsdom-safe duck-check as COPY above.
            P && typeof P == "object" && "clipboardData" in P ? P : null,
            p.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              p.splitExpected.current = !0;
            }
          ),
          Se
        )
      ] : [],
      o.registerCommand(
        mr,
        () => (!Uc(p) && !Go() && Lc(p), !1),
        tt
      ),
      o.registerCommand(
        Oo,
        () => (o.isComposing() || ZA(p), !1),
        qr
      ),
      o.registerCommand(
        wo,
        () => (y = !1, M = 0, F(), !1),
        ht
      ),
      o.registerCommand(
        Dr,
        (P) => (y = !1, M = 0, F(), (P.key === "Backspace" || P.key === "Delete") && !Uc(p, Ag(P)) && (Lc(p), QA(p), queueMicrotask(() => {
          p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !P.ctrlKey || P.altKey || P.shiftKey || P.metaKey || P.key !== " " && P.code !== "Space" || !rE() ? !1 : (P.preventDefault(), !0)),
        Se
      ),
      o.registerCommand(
        ap,
        (P) => {
          const W = Ym();
          W === "needs-plain-split" && o.dispatchCommand(Qs, void 0);
          const re = W !== "declined" || wx();
          return re && P?.preventDefault(), js(p), re;
        },
        Se
      ),
      o.registerCommand(
        Qs,
        () => (p.splitExpected.current = !0, Zg()),
        Se
      ),
      GP(o, p, c),
      o.registerCommand(
        uy,
        (P) => (d.current === P || (d.current = P, P ? (R !== void 0 && clearTimeout(R), R = void 0) : F()), !0),
        // LOW, matching the sibling host-dispatched `COMMIT_PENDING_MARKERS_COMMAND` below. This
        // command has exactly one handler, so priority decides nothing; CRITICAL is reserved in
        // this file for handlers that must beat Lexical's built-ins on NATIVE commands, and using
        // it here would imply a priority contest that does not exist.
        ht
      ),
      o.registerCommand(
        ly,
        () => {
          if (y) return !0;
          const P = o.getRootElement(), W = P?.ownerDocument, re = !!P && !!W && W.hasFocus() && P.contains(W.activeElement);
          let Z;
          if (re) {
            const ye = w();
            Z = A(ye) ? ye.focus.key : h;
          }
          return za(() => js(p, Z)), !0;
        },
        ht
      ),
      o.registerCommand(
        Gc,
        () => {
          if (d.current || y) return !1;
          const P = w(), W = A(P) ? P.focus.key : h;
          return za(() => js(p, W)), !1;
        },
        ht
      ),
      o.registerUpdateListener(({ editorState: P, tags: W }) => {
        p.splitExpected.current = !1, p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear(), p.rebuildAttempted.clear();
        const re = P.read(() => {
          const ye = w();
          return A(ye) ? ye.focus.key : void 0;
        }), Z = b;
        if (re !== void 0 && (b = re), W.has(Yc)) {
          p.pendingKeys.clear(), P.read(() => VP(p)), y = !0, re !== void 0 && (h = re);
          return;
        }
        if (W.has(tn)) {
          re !== void 0 && re !== Z && (y = !0);
          return;
        }
        y || (re !== void 0 && (h = re), F(), !(k || re === void 0) && (d.current || [...p.pendingKeys].some((ye) => ye !== re) && (k = !0, queueMicrotask(() => {
          k = !1, !_ && (d.current || C() || $(h));
        }))));
      })
    );
    return () => {
      _ = !0, R !== void 0 && clearTimeout(R), R = void 0, g(), z(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const YP = ["status_unknown", "status_invalid"], dy = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, XP = Object.values(dy);
function QP(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = dy[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function If(e) {
  e.classList.remove(...YP), e.removeAttribute("aria-description"), XP.includes(e.title) && e.removeAttribute("title");
}
function ZP(e, t, r, n) {
  const i = (a) => a.read(() => je().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = se(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function e1(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function t1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return B(() => {
    if (!i) return;
    const s = t ?? co;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = vA(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || e1(f)) continue;
            const g = se(f)?.getTopLevelElement();
            !g || l.has(g.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && If(p);
        }
        for (const [f, p] of d) {
          const g = n.getElementByKey(f);
          g && QP(g, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          ZP(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && If(u);
      }
    };
  }, [n, i, t, r]), null;
}
function fy(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Tr(o);
    a && D(s) && fy(s.getChildren(), a, r);
  }
}
function Mo(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = Tr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Ci(a);
      if (l === void 0 || !l.includes(ot)) continue;
      const u = l.split(ot), d = [];
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (f > 0 && d.push(...t[n++] ?? []), p.length > 0) {
          const g = {
            ...a,
            text: p
          };
          d.push(g);
        }
      }
      s.splice(o, 1, ...d), o += d.length - 1;
    }
  };
  return i(e), n;
}
function ku(e, t, r) {
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
function py(e, t) {
  const r = [];
  for (const n of e)
    du(n, t) || ((ae(n) || U(n)) && r.push(n.getMarker()), D(n) && r.push(...py(n.getChildren(), t)));
  return r;
}
function hy(e) {
  const t = [];
  for (const r of e) {
    const n = fu(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Tr(r);
    i && t.push(...hy(i));
  }
  return t;
}
function xs(e, t, r) {
  const n = py(e, r), i = hy(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function r1(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
  let n, i;
  if (A(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = se(t.key), i = t.offset;
  else
    return;
  if (!(!E(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function na(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function n1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Qo(c, e, o, s)) return;
  const l = i ? na(c, i) : c.text, u = _r(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Br(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = br.serializeEditorState(
    { type: gr, version: hr, content: u },
    s
  ).root.children;
  if (wi(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = ku(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (xr(d, o) === kr(e, o) && xs(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Mo(d, f);
  const g = gy(e), h = Tu(d);
  for (let y = 0; y < g.length && y < h.length; y++)
    g[y].sid !== void 0 && h[y].number === g[y].number && (h[y].sid = g[y].sid);
  return d;
}
function gy(e) {
  const t = [], r = (n) => {
    qe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : D(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Tu(e) {
  const t = [];
  for (const r of e) {
    th(r) && t.push(r);
    const n = Tr(r);
    n && t.push(...Tu(n));
  }
  return t;
}
function i1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Fm(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? na(l, i) : l.text, f = _r(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Br(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = p.content ?? [], h = zm(g), y = e.getCategory() !== h, b = Am(e, g, h, s);
  if (b.failure !== void 0) {
    b.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : b.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const k = b.children;
  if (wi(k) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const _ = ku(l, t, n);
  if (!_) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (xr(k, o) === kr(u, o) && xs(u, k, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: h, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Mo(k, _), { rebuilt: k, contentNodes: u, category: h, categoryChanged: y };
}
function Df(e) {
  return e.$?.textType;
}
function s1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Df(e) === Df(t);
}
function o1(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && ze(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function a1(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!V(t)) return;
  const r = e.getTextContent();
  if (dn(e)) return;
  const n = hm.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Uf(e, t) {
  const r = e;
  r.marker = t, r.text = Om(t, r.markerSyntax, r.nested);
}
function c1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!we.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Uf(a.node, s);
  const c = n.getChildren().filter(O).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Uf(l.node, s);
}
function l1(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: u } = gu(e, a, o);
  if (u.length === 0 && s.length === 0 || !Qo(l, s, a, o)) return;
  const d = i ? na(l, i) : l.text, f = Bm(d, a);
  if (Br(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = Pm(
    e,
    f.lineContent,
    f.followingBlocks,
    o
  );
  if (p.failure !== void 0) {
    p.failure === "shape" && c?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: g, followingBlocks: h } = p;
  if (wi([...g, ...h]) !== l.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const y = ku(l, t, n);
  if (!y) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (h.length === s.length && xr(h, a) === kr(s, a) && xs(s, h, a) && xr(g, a) === kr(u, a) && xs(u, g, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const b = Mo(g, y);
  Mo(h, y, b);
  const k = gy([...u, ...s]), _ = Tu([...g, ...h]);
  for (let M = 0; M < k.length && M < _.length; M++)
    k[M].sid !== void 0 && _[M].number === k[M].number && (_[M].sid = k[M].sid);
  return { rebuilt: g, contentNodes: u, followingBlocks: h };
}
function u1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Hm(e, i, n);
  if (!o) return;
  const a = r ? na(o, r) : o.text, c = _r(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Br(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = br.serializeEditorState(
    { type: gr, version: hr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...ta(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && xr(u, i) === kr(d, i) && xs(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function d1(e, t, r, n, i) {
  const s = r1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (k) => {
    V(k) ? c.set(k.getKey(), k) : Pe(k) ? l.set(k.getKey(), k) : ke(k) ? u.set(k.getKey(), k) : o.set(k.getKey(), [k]);
  };
  for (const k of t) {
    const _ = se(k);
    if (!_?.isAttached()) continue;
    const M = Ts(_);
    if (M) {
      if (p(M), O(_)) {
        const C = ry(_, r.getMarker);
        C && a.push(C);
      }
      if (V(M)) {
        const C = a1(_);
        C && f.set(M.getKey(), C);
      }
    }
  }
  const g = /* @__PURE__ */ new Set();
  for (const [k, _] of a)
    g.has(k.getKey()) || g.has(_.getKey()) || ([k, _].forEach((M) => {
      g.add(M.getKey()), o.delete(M.getKey());
    }), ke(k) ? (u.set(k.getKey(), k), d.set(k.getKey(), [_])) : o.set(k.getKey(), [k, _]));
  if (s) {
    const k = Ts(s.node);
    k && !g.has(k.getKey()) && p(k);
  }
  const h = o1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && u.size === 0 && h.length === 0)
    return;
  const y = new Set(h.map((k) => k.getKey())), b = /* @__PURE__ */ new Map();
  fy(je().getChildren(), e.root.children, b);
  for (const k of f.values()) c1(k, b);
  for (const k of c.values()) {
    const _ = b.get(k.getKey()), M = _ ? Tr(_.node) : void 0;
    if (!_ || !M) continue;
    const C = i1(k, b, r, y, s);
    if (!C) continue;
    if (C.categoryChanged) {
      const F = _.node;
      C.category === void 0 ? delete F.category : F.category = C.category;
    }
    if (!C.rebuilt) continue;
    const $ = b.get(C.contentNodes[0].getKey());
    if (!$) continue;
    const R = M.indexOf($.node);
    R < 0 || M.splice(R, C.contentNodes.length, ...C.rebuilt);
  }
  for (const k of o.values()) {
    const _ = b.get(k[0].getKey());
    if (!_) continue;
    const M = n1(k, b, r, y, s);
    if (!M) continue;
    const C = _.siblings.indexOf(_.node);
    C < 0 || _.siblings.splice(C, k.length, ...M);
  }
  for (const k of u.values()) {
    const _ = b.get(k.getKey()), M = _ ? Tr(_.node) : void 0;
    if (!_ || !M) continue;
    const C = d.get(k.getKey()) ?? [], $ = l1(k, b, r, y, s, C);
    if (!$) continue;
    const R = $.contentNodes.at(0), F = R ? b.get(R.getKey()) : void 0;
    if (R && !F) continue;
    const z = F ? M.indexOf(F.node) : M.length, P = _.siblings.indexOf(_.node);
    z < 0 || P < 0 || (M.splice(z, $.contentNodes.length, ...$.rebuilt), _.siblings.splice(P + 1, C.length, ...$.followingBlocks));
  }
  for (const k of l.values()) {
    const _ = b.get(k.getKey());
    if (!_) continue;
    const M = 1 + ta(k).length, C = u1(k, r, s);
    if (!C) continue;
    const $ = _.siblings.indexOf(_.node);
    $ < 0 || _.siblings.splice($, M, ...C);
  }
  for (const k of h) {
    const _ = b.get(k.getKey());
    if (!_) continue;
    const M = _.siblings.indexOf(_.node);
    if (M < 0) continue;
    _.siblings.splice(M, 1);
    const C = _.siblings[M - 1], $ = _.siblings[M], R = C && Ci(C), F = $ && Ci($);
    C && $ && R !== void 0 && F !== void 0 && s1(C, $) && (C.text = R + F, _.siblings.splice(M, 1));
  }
  return Fg(e, r.viewOptions);
}
function f1({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = jn(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return B(() => {
    if (n)
      return r.registerNodeTransform(
        it,
        (i) => p1(i, t)
      );
  }, [r, n, t]), null;
}
function p1(e, t) {
  e.getMarker() !== Bt && (e.isEmpty() || Et(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Bt}" (key ${e.getKey()})`
  ), e.setMarker(Bt)));
}
function h1({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = le(), n = Q({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return B(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Eo(s, e) || g1(i, r, e);
  }, [r, e, t]), B(
    () => r.registerMutationListener(
      Ot,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Fc(r);
        Ff(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Vs(s) === Vs(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), B(() => {
    const i = (a) => a.read(
      () => new Set(
        je().getChildren().filter(Ye).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Fc(r) || Ff(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Vs(a) === Vs(c)
      }));
    };
    return Le(
      ...[$t, Sr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), B(
    () => r.registerCommand(
      tr,
      () => {
        const i = n.current;
        return i.phase === "idle" && k1(i, y1()), !1;
      },
      ht
    ),
    [r]
  ), B(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(tr, void 0));
    };
    return Le(
      r.registerMutationListener(At, i),
      r.registerMutationListener(gt, i)
    );
  }, [r]), B(() => {
    const i = () => C1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function g1(e, t, r) {
  if (m1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Fc(t);
  (!n || n === r.book) && t.update(() => my(r.chapterNum, r.verseNum), {
    tag: tn
  });
}
function m1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => Eo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function y1() {
  const e = w(), t = dl(e);
  if (!t) return;
  const r = xu(), n = ih(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Ml(t, e), { verseNum: o, verse: a } = e_(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Fc(e) {
  return e.getEditorState().read(() => xu()?.getCode() || void 0);
}
function xu() {
  return je().getChildren().find(ke);
}
function Ff(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Ka(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Ka(e, t), e.phase = "navigating") : i && Ka(e, t), r && r !== e.scrRef.book && ky(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Ka(e, t) {
  queueMicrotask(() => {
    t.update(
      () => my(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: tn }
    );
  });
}
function my(e, t) {
  const r = dl(w()), n = El(r)?.getNumber(), i = ih(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (dh(n) ? by(t, n) : parseInt(n, 10) === t))
    return;
  const o = je().getChildren(), a = nh(o, e);
  if (!a) return;
  const c = pT(o, a), l = aT(c, !0);
  fT(c, l);
  let u;
  try {
    u = Jx(c, t);
  } catch {
    return;
  }
  u && (ae(u) ? !E(u.getFirstChild()) && Ni(u) || Ht(u, 0) : b1(u));
}
function b1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || he(n)) {
    E(e) ? e.selectEnd() : Ht(t, r);
    return;
  }
  const i = As(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    e.selectEnd();
    return;
  }
  const s = D(n) && !V(n) ? yy(n) : void 0;
  s ? s.select(0, 0) : Ht(t, r);
}
function yy(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (D(t) && !V(t)) return yy(t);
}
function Vs(e) {
  return e.read(() => {
    const t = je().getChildren().find(Ye);
    return `${xu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function k1(e, t) {
  e.phase !== "navigating" && t && (T1(t, e.scrRef) || ky(e, x1(t, e.scrRef)));
}
function T1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? by(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function by(e, t) {
  try {
    return fl(e, t);
  } catch {
    return !1;
  }
}
function x1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const _1 = 8;
function ky(e, t) {
  return Eo(t, e.scrRef) || e.pendingEchoes.some((r) => Eo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > _1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Eo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function C1(e) {
  e.phase = "idle";
}
function S1(e) {
  return ke(e) ? `${e.__code}` : Pe(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : vs(e) ? `${e.__marker} "${e.__number}"` : bt(e) ? `${e.__caller}` : Bn(e) ? `${e.__marker} "${e.__number}"` : V(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ae(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${v1(e)}` : Te(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : qe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function v1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ss]) : "";
}
function M1() {
  const [e] = le();
  return /* @__PURE__ */ v(
    wb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: S1,
      editor: e
    }
  );
}
const Ty = Jf(null), zf = 4;
function E1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Q(null), s = Yf(Ty);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return B(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ v("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function A1({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = fe(), [s, o] = fe(), a = me(
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
  }, l = Ve(() => ({ registerItem: a }), [a]);
  return B(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ v(Ty.Provider, { value: l, children: /* @__PURE__ */ v("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function P1({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Q(null), c = Q(null), [l, u] = fe(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return B(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: g, left: h } = f.getBoundingClientRect();
      p.style.top = `${g + f.offsetHeight + zf}px`, p.style.left = `${Math.min(h, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), B(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (g) => {
        const h = g.target;
        o && a.current && a.current.contains(h) || f.contains(h) || u(!1);
      };
      return document.addEventListener("click", p), () => {
        document.removeEventListener("click", p);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), B(() => {
    const f = () => {
      if (l) {
        const p = c.current, g = a.current;
        if (p !== null && g !== null) {
          const { top: h } = p.getBoundingClientRect(), y = h + p.offsetHeight + zf;
          y !== g.getBoundingClientRect().top && (g.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ ve(Mn, { children: [
    /* @__PURE__ */ ve(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ v("span", { className: i }),
          t && /* @__PURE__ */ v("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ v("i", { className: "chevron-down" })
        ]
      }
    ),
    l && vn(
      /* @__PURE__ */ v(A1, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const zc = {
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
  ...zc,
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
function N1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ v(
    P1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + w1(t),
      buttonLabel: O1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(zc).map((n) => /* @__PURE__ */ ve(
        E1,
        {
          className: "item block-marker " + R1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ v("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ v("span", { className: "text usfm_" + n, children: zc[n] })
          ]
        },
        n
      ))
    }
  );
}
function w1(e) {
  return e && e in Kc ? e : "ban";
}
function O1(e) {
  return e && e in Kc ? Kc[e] : "No Style";
}
function R1(e) {
  return e ? "active dropdown-item-active" : "";
}
function Kf() {
  return /* @__PURE__ */ v("div", { className: "divider" });
}
const q1 = Ln(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = fe(s), [c, l] = fe(), [u, d] = fe(!1), [f, p] = fe(!1), g = me(
    ({
      canUndo: h,
      canRedo: y,
      blockMarker: b,
      contextMarker: k
    }) => {
      d(h), p(y), l(b), n?.({
        canUndo: h,
        canRedo: y,
        blockMarker: b,
        contextMarker: k
      });
    },
    [n]
  );
  return B(() => s.registerCommand(
    tr,
    (h, y) => (a(y), !1),
    tt
  ), [s]), /* @__PURE__ */ ve(Mn, { children: [
    /* @__PURE__ */ v(Eg, { onStateChange: g }),
    /* @__PURE__ */ ve("div", { className: "toolbar", children: [
      /* @__PURE__ */ v(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(up, void 0);
          },
          title: pi ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(dp, void 0);
          },
          title: pi ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ v("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ v(Kf, {}),
      o === s && /* @__PURE__ */ ve(Mn, { children: [
        /* @__PURE__ */ v(
          N1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ v(Kf, {})
      ] }),
      /* @__PURE__ */ v("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), $1 = Ho(), L1 = {}, I1 = {};
function D1() {
  return /* @__PURE__ */ v("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Bf(e, t, r) {
  qb(e, () => hi(t));
  const n = w();
  if (!A(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    ae(o) && i.add(o);
  }), i.forEach((s) => Jm(s, t, r));
}
const xy = Ln(function({
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
  const d = Q(null), f = Q(null), p = Q(null), g = Q(t), h = Q(void 0), y = Q(void 0), b = Q(void 0), k = Q(void 0), _ = Q(!1), [M, C] = fe(t), [$, R] = fe(0), [F, z] = fe(), {
    isReadonly: P = !1,
    structureProtectionMode: W = "off",
    hasExternalUI: re = !1,
    hasSpellCheck: Z = !1,
    textDirection: ye = "ltr",
    markerMenuTrigger: xe = "\\",
    view: or,
    nodes: Ie,
    debug: hn = !1,
    contextMenu: Er,
    styleInfo: Pt,
    markerSettleDelayMs: ne,
    copyLimit: N
  } = a ?? I1, J = or ?? $1, de = gs(J) && (J.markerMode !== "hidden" || !J.hasSpacing || J.hasGutterParaMarkers || J.hasActiveTextFocusBox) ? {
    ...J,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : J, Ae = Q(de);
  Dt(Ae.current, de) || (Ae.current = de);
  const X = Ae.current, Ee = Ve(() => Ie ?? L1, [Ie]), Ar = Ve(() => Er, [Er]), Lt = Ve(
    () => Fx(Pt ?? co),
    [Pt]
  ), gn = Q(c);
  Dt(gn.current, c) || (gn.current = c);
  const Ge = gn.current, ue = gs(X), kt = P || ue, Me = de !== J;
  B(() => {
    ue && !P && Ge?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Me && Ge?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), X?.markerMode === "visible" && !P && Ge?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ue, P, Me, Ge, X?.markerMode]);
  const Pr = Q(null), Re = Ve(() => {
    if (X.markerMode !== "editable") return;
    const q = Pt ?? co;
    return {
      getContext: () => Pr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (j) => RA(
        q,
        j,
        Ee.extraValidMarkers
      ),
      getEnterItems: (j) => qA(
        q,
        j,
        Ee.extraValidMarkers
      ),
      apply: (j, G) => {
        const ee = Pr.current;
        ee && (G.trigger === "enter" ? ee.splitParagraphWithMarker(j.marker) : ee.applyMarkerMenuSelection(j, G));
      },
      commitTypedCloser: (j) => {
        Pr.current?.commitTypedCloser(j);
      }
    };
  }, [X, Pt, Ee.extraValidMarkers]), Nr = (q) => {
    _.current || (_.current = !0, gn.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Oi = (q) => {
    if (ue)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Tt = (q) => {
    if (Oi(q), kt) throw new Error(`Cannot ${q} in readonly mode`);
  }, ws = Ve(
    () => ({
      namespace: "platformEditor",
      theme: { ...lm, showCharMarkerTitles: X.showCharMarkerTitles },
      editable: !kt,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [rt, ...ue ? Z_ : Rl]
    }),
    [kt, ue, X.showCharMarkerTitles]
  );
  Gs.initialize(Ge);
  function wr(q) {
    if (q !== void 0 && !sE(q, Ee.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const Vn = me(() => {
    const q = d.current;
    if (!q) return g.current;
    const j = cd(q), G = y.current;
    if ((!j || j.size === 0) && !G) return g.current;
    const ee = q.getEditorState(), _e = ee.toJSON();
    return ee.read(
      () => d1(
        _e,
        j ?? /* @__PURE__ */ new Set(),
        { viewOptions: X, getMarker: Lt, logger: Ge },
        G,
        b.current
      )
    ) ?? g.current;
  }, [X, Lt, Ge]), Ri = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const q = d.current?.getRootElement();
      return !!q && q.ownerDocument.activeElement === q;
    },
    undo() {
      d.current?.dispatchCommand(up, void 0);
    },
    redo() {
      d.current?.dispatchCommand(dp, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      Tt("cut"), d.current && Vl(d.current);
    },
    copy() {
      d.current && jl(d.current);
    },
    paste() {
      Tt("paste"), d.current && Wl(d.current);
    },
    pastePlainText() {
      Tt("paste as plain text"), d.current && Hl(d.current);
    },
    getUsj() {
      return Vn();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(ly, void 0);
        },
        { discrete: !0 }
      );
    },
    setMarkerSettleSuspended(q) {
      d.current?.dispatchCommand(uy, q);
    },
    setTransientInput(q) {
      if (!q) {
        y.current = void 0;
        return;
      }
      const j = d.current?.getEditorState().read(() => {
        const G = w();
        return A(G) && G.isCollapsed() ? G.focus.key : void 0;
      });
      y.current = { input: q, nodeKey: j ?? b.current?.key };
    },
    setUsj(q) {
      if (!Dt(g.current, q)) {
        g.current = q, y.current = void 0;
        const j = Dt(M, q);
        C(q), j && R((G) => G + 1);
      }
    },
    applyUpdate(q, j = "remote") {
      if (ue && j === "remote") {
        gn.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Oi("apply an update"), d.current?.update(
        () => {
          j === "remote" && en(is), MC(q, X, Ee, Ge);
        },
        { discrete: !0 }
      );
      const G = d.current?.getEditorState();
      if (!G) return;
      const ee = Gs.deserializeEditorState(G, X);
      if (ee) {
        const _e = !Dt(g.current, ee);
        if (_e && (g.current = ee), _e || !Dt(M, ee)) {
          const lt = Td(q, G, "apply");
          k.current = ee, s?.(ee, q, j, lt);
        }
      }
    },
    replaceEmbedUpdate(q, j) {
      const G = d.current?.read(() => f_(q, j));
      G ? this.applyUpdate(G) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ue) {
        Nr("get the selection");
        return;
      }
      return d.current?.read(wl);
    },
    setSelection(q) {
      if (ue) {
        Nr("set the selection");
        return;
      }
      d.current?.update(() => {
        const j = Wo(q);
        j !== void 0 && (Zr(j), en(Cp));
      });
    },
    setAnnotation(q, j, G, ee, _e) {
      if (ue) {
        Nr("set an annotation");
        return;
      }
      let lt, Nt, Jt, jr;
      typeof ee == "function" || ee === void 0 ? (lt = ee, Nt = _e) : (lt = ee.onClick, Nt = ee.onRemove, Jt = ee.onMouseEnter, jr = ee.onMouseLeave), f.current?.setAnnotation(
        q,
        Yu(j),
        G,
        lt,
        Nt,
        Jt,
        jr
      );
    },
    removeAnnotation(q, j) {
      f.current?.removeAnnotation(Yu(q), j);
    },
    formatPara(q) {
      Tt("format a paragraph"), d.current?.update(
        () => {
          const j = w();
          if (!A(j)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${q}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const G = j.isBackward() ? j.focus : j.anchor, ee = Ne(G.getNode(), ke);
          if (ee) {
            const _e = j.isBackward() ? j.anchor : j.focus, Nt = !j.isCollapsed() && !ee.is(_e.getNode()) && !ee.isParentOf(_e.getNode()) ? { key: _e.key, offset: _e.offset, type: _e.type } : void 0, Jt = rs();
            if (Jt.anchor.set(G.key, G.offset, G.type), Jt.focus.set(G.key, G.offset, G.type), Zr(Jt), !Dc(q, X)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${q}"`
              );
              return;
            }
            if (!Nt) return;
            const jr = se(Nt.key);
            if (!jr?.isAttached()) return;
            const qi = jr.getTopLevelElement();
            if (!qi) return;
            const $i = ee.getNextSibling();
            if (!ae($i)) return;
            let It = $i.getNextSibling();
            for (; It; ) {
              const Wn = It.is(qi), Vr = It.getNextSibling();
              if (ae(It)) {
                const ft = rs();
                ft.anchor.set(It.getKey(), 0, "element"), ft.focus.set(It.getKey(), It.getChildrenSize(), "element"), Zr(ft), Bf(ft, q, X);
              }
              if (Wn) break;
              It = Vr;
            }
            return;
          }
          Bf(j, q, X);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(q) {
      return d.current?.read(
        () => d.current?.getElementByKey(q) ?? void 0
      );
    },
    removeCharacterMarker(q) {
      if (kt) throw new Error("Cannot remove character marker in readonly mode");
      wr(q);
      let j = !1;
      return d.current?.update(
        () => {
          const G = w();
          A(G) && (j = nm(G, q, X));
        },
        { discrete: !0 }
      ), j;
    },
    replaceCharacterMarker(q, j) {
      if (kt) throw new Error("Cannot replace character marker in readonly mode");
      wr(q), wr(j);
      let G = !1;
      return d.current?.update(
        () => {
          const ee = w();
          A(ee) && (G = yE(ee, q, j));
        },
        { discrete: !0 }
      ), G;
    },
    extendCharacterMarker(q, j) {
      if (kt) throw new Error("Cannot extend character marker in readonly mode");
      wr(q), j?.forEach(
        (ee) => wr(ee)
      );
      let G = !1;
      return d.current?.update(
        () => {
          const ee = w();
          A(ee) && (G = bE(
            ee,
            q,
            j,
            X
          ));
        },
        { discrete: !0 }
      ), G;
    },
    insertMarker(q) {
      if (kt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!Cc(q, Ee.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const j = Sc(
        q,
        h,
        X,
        Ee,
        Ge,
        void 0,
        Pt
      );
      return j.action({ editor: d.current, reference: r }), j.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!P)
        return d.current?.getEditorState().read(() => mP());
    },
    applyMarkerMenuSelection(q, j) {
      if (P) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (q.kind !== "closeTag" && !Cc(q.marker, Ee.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let G;
      return d.current.update(() => {
        G = vP(q, j, r, {
          expandedNoteKeyRef: h,
          viewOptions: X,
          nodeOptions: Ee,
          logger: c,
          styleInfo: Pt
        });
      }), G;
    },
    splitParagraphWithMarker(q) {
      if (P) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        Dc(q, X);
      });
    },
    commitTypedMarker(q, j) {
      if (P) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let G = !1;
      return d.current.update(() => {
        G = CP(q, j), G || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), G;
    },
    commitTypedCloser(q) {
      if (P) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let j = !1;
      return d.current.update(() => {
        j = ty(q), j || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), j;
    },
    insertNote(q, j, G) {
      Tt("insert a note"), d.current?.update(
        () => {
          const ee = rg(
            q,
            j,
            G,
            r,
            X,
            Ee,
            Ge
          );
          ee && !ee.getIsCollapsed() && (h.current = ee.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      d.current?.update(() => {
        const j = Md(q);
        j && (Y_(j, X), j.getIsCollapsed() || (h.current = j.getKey()));
      });
    },
    getNoteOps(q) {
      return d.current?.read(() => {
        const j = Md(q);
        if (j)
          return Pl(j);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Pr.current = Ri, jc(u, () => Ri), B(() => {
    const q = d.current;
    if (q)
      return q.registerUpdateListener(({ editorState: j }) => {
        j.read(() => {
          const G = w();
          if (!A(G) || !G.isCollapsed()) return;
          const ee = G.focus.getNode();
          E(ee) && (b.current = { key: ee.getKey(), offset: G.focus.offset });
        });
      });
  }, []);
  const ar = me(
    (q, j, G, ee) => {
      if (ue) return;
      const _e = Gs.deserializeEditorState(q, X);
      if (_e) {
        const lt = !Dt(g.current, _e);
        if (lt && (g.current = _e), lt || !Dt(M, _e)) {
          const Nt = Td(ee, q);
          k.current = _e, s?.(_e, ee, "local", Nt);
        }
      }
    },
    [M, s, X, ue]
  );
  B(() => {
    const q = d.current;
    if (!(!q || !s))
      return q.registerUpdateListener(({ tags: j, dirtyElements: G, dirtyLeaves: ee }) => {
        !j.has(Yc) && (G.size === 0 && ee.size === 0 || j.has(is) || !cd(q)?.size) || queueMicrotask(() => {
          const _e = Vn();
          !_e || Dt(k.current, _e) || (k.current = _e, s(_e, void 0, "local", void 0));
        });
      });
  }, [s, Vn]);
  const Gt = me(
    (q) => {
      z(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ ve(hp, { initialConfig: ws, children: [
      /* @__PURE__ */ v(qS, { isEditable: !kt }),
      /* @__PURE__ */ ve("div", { className: "editor-container", children: [
        re ? /* @__PURE__ */ v(Eg, { onStateChange: Gt }) : /* @__PURE__ */ v(
          "div",
          {
            className: "editor-toolbar-container" + (kt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ v(
              q1,
              {
                ref: p,
                editorRef: Pr,
                isReadonly: kt,
                onStateChange: Gt
              }
            )
          }
        ),
        /* @__PURE__ */ ve("div", { className: "editor-inner", children: [
          /* @__PURE__ */ v(mp, { editorRef: d }),
          /* @__PURE__ */ v(
            Rb,
            {
              contentEditable: /* @__PURE__ */ v(
                gp,
                {
                  className: `editor-input usfm ${vC(X).join(" ")}${X.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${X.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Z
                }
              ),
              placeholder: /* @__PURE__ */ v(D1, {}),
              ErrorBoundary: yp
            }
          ),
          re && /* @__PURE__ */ v(RS, {}),
          /* @__PURE__ */ v(bp, {}),
          r && n && /* @__PURE__ */ v(h1, { scrRef: r, onScrRefChange: n }),
          r && !re && /* @__PURE__ */ v(
            rM,
            {
              trigger: xe,
              scrRef: r,
              contextMarker: F,
              getMarkerAction: (q) => Sc(
                q,
                h,
                X,
                Ee,
                Ge,
                void 0,
                Pt
              ),
              editableHarness: Re
            }
          ),
          /* @__PURE__ */ v(
            IS,
            {
              scripture: M,
              scriptureRef: g,
              nodeOptions: Ee,
              editorAdaptor: br,
              viewOptions: X,
              logger: Ge
            },
            $
          ),
          /* @__PURE__ */ v(nv, { onChange: i }),
          /* @__PURE__ */ v(
            kC,
            {
              onChange: ar,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: tk
            }
          ),
          /* @__PURE__ */ v(CE, { viewOptions: X }),
          /* @__PURE__ */ v(yC, { ref: f, logger: Ge }),
          /* @__PURE__ */ v(tS, { viewOptions: X }),
          /* @__PURE__ */ v(gS, {}),
          /* @__PURE__ */ v(xS, {}),
          X?.markerMode !== "editable" && /* @__PURE__ */ v(_S, { logger: Ge }),
          /* @__PURE__ */ v(ES, { options: Ar }),
          /* @__PURE__ */ v(yA, { limit: N, viewOptions: X }),
          /* @__PURE__ */ v(OS, {}),
          /* @__PURE__ */ v(LS, {}),
          /* @__PURE__ */ v(MP, {}),
          /* @__PURE__ */ v(
            JP,
            {
              viewOptions: X,
              getMarker: Lt,
              logger: Ge,
              markerSettleDelayMs: ne,
              structureProtectionMode: W,
              copyLimit: N
            }
          ),
          X?.markerMode === "visible" && /* @__PURE__ */ v(mA, { viewOptions: X, copyLimit: N }),
          /* @__PURE__ */ v(
            t1,
            {
              styleInfo: Pt,
              viewOptions: X,
              logger: Ge
            }
          ),
          /* @__PURE__ */ v(
            DS,
            {
              expandedNoteKeyRef: h,
              nodeOptions: Ee,
              viewOptions: X,
              logger: Ge
            }
          ),
          /* @__PURE__ */ v(rv, {}),
          /* @__PURE__ */ v(YC, {}),
          /* @__PURE__ */ v(WC, {}),
          /* @__PURE__ */ v(f1, { viewOptions: X, logger: Ge }),
          /* @__PURE__ */ v(iv, {}),
          /* @__PURE__ */ v(Bv, { structureProtectionMode: W }),
          /* @__PURE__ */ v(jv, { textDirection: ye }),
          /* @__PURE__ */ v(Wv, {}),
          /* @__PURE__ */ v(eM, {}),
          l
        ] }),
        hn && /* @__PURE__ */ v(M1, {})
      ] })
    ] }, X.verseLayout ?? "inline")
  );
}), HN = Ln(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ v(xy, { ref: r, ...i });
});
function _y() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Ao(e, t, r, n, i) {
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
function jf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function U1(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Ba(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class F1 {
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
    this._comments = t, Ba(this);
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
          const c = jf(a);
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
    this._comments = i, Ba(this);
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
          const c = jf(a);
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
    return this._comments = n, Ba(this), t.type === "comment" ? {
      index: s,
      markedComment: U1(t)
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
    return t !== null ? t.doc.get("comments", Iu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Du(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Iu();
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
      Jb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      ht
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Yb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const g = p.insert, h = p.retain, y = p.delete, b = u.parent, k = u === r ? void 0 : b instanceof Du && this._comments.find((_) => _.id === b.get("id"));
              if (Array.isArray(g)) {
                const _ = f;
                g.slice().reverse().forEach((M) => {
                  const C = M.get("id"), R = M.get("type") === "thread" ? Cy(
                    M.get("quote"),
                    M.get("comments").toArray().map(
                      (F) => Ao(
                        F.get("content"),
                        F.get("author"),
                        F.get("id"),
                        F.get("timeStamp"),
                        F.get("deleted")
                      )
                    ),
                    C
                  ) : Ao(
                    M.get("content"),
                    M.get("author"),
                    C,
                    M.get("timeStamp"),
                    M.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(R, k, _);
                  });
                });
              } else if (typeof h == "number")
                f += h;
              else if (typeof y == "number")
                for (let _ = 0; _ < y; _++) {
                  const M = k === void 0 || k === !1 ? this._comments[f] : k.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(M, k);
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
function z1(e) {
  const [t, r] = fe(e.getComments());
  return B(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function K1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Q(null);
  return B(() => {
    i.current !== null && i.current.focus();
  }, []), B(() => {
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
  }, [n, e]), /* @__PURE__ */ v("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ ve("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function B1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return vn(
    /* @__PURE__ */ v(K1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Sy() {
  const [e, t] = fe(null), r = me(() => {
    t(null);
  }, []), n = Ve(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ v(B1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const j1 = {
  ...lm,
  paragraph: "CommentEditorTheme__paragraph"
};
function V1(...e) {
  return e.filter(Boolean).join(" ");
}
function ln({
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
      className: V1(
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
function W1({
  className: e
}) {
  return /* @__PURE__ */ v(gp, { className: e || "ContentEditable__root" });
}
function H1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ v("div", { className: t || "Placeholder__root", children: e });
}
const Vf = Jc("INSERT_INLINE_COMMAND");
function G1({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Q(null), s = me(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return B(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), _s(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ v("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ v("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ v("i", { className: "icon add-comment" }) }) });
}
function J1({ onEscape: e }) {
  const [t] = le();
  return B(() => t.registerCommand(
    lp,
    (r) => e(r),
    qr
  ), [t, e]), null;
}
function vy({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ v(hp, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: j1
  }, children: /* @__PURE__ */ ve("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ v(
      Wb,
      {
        contentEditable: /* @__PURE__ */ v(W1, { className: e }),
        placeholder: /* @__PURE__ */ v(H1, { children: s }),
        ErrorBoundary: yp
      }
    ),
    /* @__PURE__ */ v(Vb, { onChange: n }),
    /* @__PURE__ */ v(bp, {}),
    t !== !1 && /* @__PURE__ */ v(Kb, {}),
    /* @__PURE__ */ v(J1, { onEscape: r }),
    /* @__PURE__ */ v(Bb, {}),
    i !== void 0 && /* @__PURE__ */ v(mp, { editorRef: i })
  ] }) });
}
function My(e, t) {
  return me(
    (r, n) => {
      r.read(() => {
        e(Hb()), t(!Gb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function Y1({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Q(null), c = Ve(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Q(null), u = Ay(), d = me(() => {
    e.getEditorState().read(() => {
      const h = w();
      if (A(h)) {
        l.current = h.clone();
        const y = h.anchor, b = h.focus, k = $b(
          e,
          y.getNode(),
          y.offset,
          b.getNode(),
          b.offset
        ), _ = a.current;
        if (k !== null && _ !== null) {
          const { left: M, bottom: C, width: $ } = k.getBoundingClientRect(), R = Lb(e, k);
          let F = R.length === 1 ? M + $ / 2 - 125 : M - 125;
          F < 10 && (F = 10), _.style.left = `${F}px`, _.style.top = `${C + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const z = R.length, { container: P } = c, W = c.elements, re = W.length;
          for (let Z = 0; Z < z; Z++) {
            const ye = R[Z];
            let xe = W[Z];
            xe === void 0 && (xe = document.createElement("span"), W[Z] = xe, P.appendChild(xe));
            const Ie = `position:absolute;top:${ye.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${ye.left}px;height:${ye.height}px;width:${ye.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            xe.style.cssText = Ie;
          }
          for (let Z = re - 1; Z >= z; Z--) {
            const ye = W[Z];
            P.removeChild(ye), W.pop();
          }
        }
      }
    });
  }, [e, c]);
  _s(() => {
    d();
    const h = c.container, y = document.body;
    return y !== null ? (y.appendChild(h), () => {
      y.removeChild(h);
    }) : () => {
    };
  }, [c.container, d]), B(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (h) => (h.preventDefault(), t(), !0), p = () => {
    if (s) {
      let h = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      h.length > 100 && (h = h.slice(0, 99) + "…"), r(
        Cy(h, [Ao(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, g = My(i, o);
  return /* @__PURE__ */ ve("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ v(
      vy,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: g
      }
    ),
    /* @__PURE__ */ ve("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ v(ln, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ v(
        ln,
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
function X1({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Q(null), c = Ay(), l = My(i, o);
  return /* @__PURE__ */ ve(Mn, { children: [
    /* @__PURE__ */ v(
      vy,
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
      ln,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Ao(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(Mb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ v("i", { className: "send" })
      }
    )
  ] });
}
function Ey({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ ve(Mn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ ve("div", { className: "Modal__content", children: [
      /* @__PURE__ */ v(
        ln,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ v(
        ln,
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
function Wf({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = fe(0);
  B(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const d = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(d);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Sy();
  return /* @__PURE__ */ ve("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ ve("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ v("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ ve("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ v("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ ve(Mn, { children: [
      /* @__PURE__ */ v(
        ln,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ v(
              Ey,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
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
function Q1({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = fe(0), [l, u] = Sy(), d = Ve(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return B(() => {
    const f = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(f);
    };
  }, [a]), /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ ve(
      "li",
      {
        onClick: () => {
          const h = s.get(p);
          if (h !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const b = Array.from(h)[0], k = se(b);
                Te(k) && k.selectStart();
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
          /* @__PURE__ */ ve("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ ve("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ v("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ v(
              ln,
              {
                onClick: () => {
                  u("Delete Thread", (h) => /* @__PURE__ */ v(
                    Ey,
                    {
                      commentOrThread: f,
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
          /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((h) => /* @__PURE__ */ v(
            Wf,
            {
              comment: h,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            h.id
          )) }),
          /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ v(
            X1,
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
      Wf,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function Z1({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Q(null), o = r.length === 0;
  return /* @__PURE__ */ ve("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ v("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ v(
      Q1,
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
function Ay() {
  const e = kp(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function eN({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = kp(), [a] = le(), c = Ve(() => {
    const F = new F1(a, s);
    return r && F.registerOnChange(r), t?.(F), F;
  }, [a, s, r, t]), l = z1(c), u = Ve(() => /* @__PURE__ */ new Map(), []), [d, f] = fe(), [p, g] = fe([]), [h, y] = fe(!1), [b, k] = fe(!1), { yjsDocMap: _ } = o;
  B(() => {
    if (e) {
      const F = e("comments", _);
      return c.registerCollaboration(F);
    }
    return () => {
    };
  }, [c, e, _]);
  const M = me(() => {
    a.update(() => {
      const F = w();
      F !== null && (F.dirty = !0);
    }), y(!1);
  }, [a]), C = me(
    (F, z) => {
      if (F.type === "comment") {
        const P = c.deleteCommentOrThread(F, z);
        if (!P)
          return;
        const { markedComment: W, index: re } = P;
        c.addComment(W, z, re);
      } else {
        c.deleteCommentOrThread(F);
        const P = z !== void 0 ? z.id : F.id, W = u.get(P);
        W !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const re of W) {
              const Z = se(re);
              Te(Z) && (Z.deleteID(Qr, P), Z.hasNoIDsForEveryType() && ro(Z));
            }
          });
        });
      }
    },
    [c, a, u]
  ), $ = me(
    (F, z, P, W) => {
      c.addComment(F, P), z && (a.update(() => {
        A(W) && Ip(W, Qr, F.id);
      }), y(!1));
    },
    [c, a]
  );
  B(() => {
    const F = [];
    let z;
    for (const P of p) {
      const W = u.get(P);
      if (W !== void 0)
        for (const re of W) {
          const Z = a.getElementByKey(re);
          Z !== null && (Z.classList.add("selected"), F.push(Z), z = window.setTimeout(() => {
            k(!0);
          }, 0));
        }
    }
    return () => {
      z !== void 0 && window.clearTimeout(z);
      for (const P of F)
        P.classList.remove("selected");
    };
  }, [p, a, u]), B(() => {
    if (!a.hasNodes([rt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const F = /* @__PURE__ */ new Map();
    return Le(
      pp(
        a,
        rt,
        (z) => os(z.getTypedIDs()),
        (z, P) => {
          for (const [W, re] of Object.entries(z.getTypedIDs()))
            re.forEach((Z) => {
              P.addID(W, Z);
            });
        }
      ),
      a.registerMutationListener(
        rt,
        (z) => {
          a.getEditorState().read(() => {
            for (const [P, W] of z) {
              const re = se(P);
              let Z = [];
              W === "destroyed" ? Z = F.get(P) ?? [] : Te(re) && (Z = re.getTypedIDs()[Qr] ?? []);
              for (const ye of Z) {
                let xe = u.get(ye);
                F.set(P, Z), W === "destroyed" ? xe !== void 0 && (xe.delete(P), xe.size === 0 && u.delete(ye)) : (xe === void 0 && (xe = /* @__PURE__ */ new Set(), u.set(ye, xe)), xe.has(P) || xe.add(P));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: z, tags: P }) => {
        z.read(() => {
          const W = w();
          let re = !1, Z = !1;
          if (A(W)) {
            const ye = W.anchor.getNode();
            if (E(ye)) {
              const xe = Ik(ye, Qr, W.anchor.offset) ?? [];
              xe !== null && (g(xe), re = !0), W.isCollapsed() || (f(ye.getKey()), Z = !0);
            }
          }
          re || g((ye) => ye.length === 0 ? ye : []), Z || f(null), !P.has("collaboration") && A(W) && y(!1);
        });
      }),
      a.registerCommand(
        Vf,
        () => {
          const z = window.getSelection();
          return z !== null && z.removeAllRanges(), y(!0), !0;
        },
        En
      )
    );
  }, [a, u]);
  const R = () => {
    a.dispatchCommand(Vf, void 0);
  };
  return /* @__PURE__ */ ve(Mn, { children: [
    h && vn(
      /* @__PURE__ */ v(
        Y1,
        {
          editor: a,
          cancelAddComment: M,
          submitAddComment: $
        }
      ),
      document.body
    ),
    d != null && !h && vn(
      /* @__PURE__ */ v(
        G1,
        {
          anchorKey: d,
          editor: a,
          showComments: b,
          onAddComment: R
        }
      ),
      document.body
    ),
    n !== null && vn(
      /* @__PURE__ */ v(
        ln,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => k(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ v("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && vn(
      /* @__PURE__ */ v(
        Z1,
        {
          comments: l,
          submitAddComment: $,
          deleteCommentOrThread: C,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function tN() {
  const e = Q(void 0), t = me((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function rN(e, t) {
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
function nN(e, t) {
  B(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      rN(r, t);
    };
  }, [t, e]);
}
const GN = Ln(function(t, r) {
  const n = Q(null), i = Q(!0), s = Q(null), [o, a] = fe(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: g, view: h } = {} } = t, y = (g ?? !1) || gs(h), [b, k] = tN();
  nN(f, b), B(() => {
    if (process.env.NODE_ENV !== "production") {
      const C = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(C), p || console.warn(C);
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
    setMarkerSettleSuspended(C) {
      n.current?.setMarkerSettleSuspended(C);
    },
    setTransientInput(C) {
      n.current?.setTransientInput(C);
    },
    setUsj(C) {
      n.current?.setUsj(C);
    },
    applyUpdate(C, $) {
      n.current?.applyUpdate(C, $);
    },
    replaceEmbedUpdate(C, $) {
      return n.current?.replaceEmbedUpdate(C, $);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(C) {
      n.current?.setSelection(C);
    },
    setAnnotation(C, $, R, F, z) {
      typeof F == "function" || F === void 0 ? n.current?.setAnnotation(C, $, R, F, z) : n.current?.setAnnotation(C, $, R, F);
    },
    removeAnnotation(C, $) {
      n.current?.removeAnnotation(C, $);
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
    replaceCharacterMarker(C, $) {
      return n.current?.replaceCharacterMarker(C, $) ?? !1;
    },
    extendCharacterMarker(C, $) {
      return n.current?.extendCharacterMarker(C, $) ?? !1;
    },
    insertMarker(C) {
      return n.current?.insertMarker(C);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(C, $) {
      return n.current?.applyMarkerMenuSelection(C, $);
    },
    splitParagraphWithMarker(C) {
      n.current?.splitParagraphWithMarker(C);
    },
    commitTypedMarker(C, $) {
      return n.current?.commitTypedMarker(C, $) ?? !1;
    },
    commitTypedCloser(C) {
      return n.current?.commitTypedCloser(C) ?? !1;
    },
    insertNote(C, $, R) {
      n.current?.insertNote(C, $, R);
    },
    selectNote(C) {
      n.current?.selectNote(C);
    },
    getNoteOps(C) {
      return n.current?.getNoteOps(C);
    },
    setComments(C) {
      b.current?.setComments(C), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const _ = me(
    (C, $, R, F) => {
      if (!u) return;
      const z = b.current?.getComments();
      u(C, z, $, R, F);
    },
    [b, u]
  ), M = me(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const C = b.current?.getComments();
    l(C);
  }, [b, i, l]);
  return B(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ v(jb, { children: /* @__PURE__ */ ve(xy, { ref: n, onUsjChange: _, ...f, children: [
    /* @__PURE__ */ v(
      eN,
      {
        setCommentStore: k,
        onChange: M,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ v("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Sn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function iN(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function sN(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const oN = /^[#\w().,%/\s-]+$/;
function Rr(e) {
  return e != null;
}
const aN = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, cN = {
  left: "right",
  right: "left"
}, lN = "var(--usj-font-fallback, serif)";
function Py(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${iN(i)}"`).join(", ")}, ${lN}`;
}
const Bc = ".editor-input.usfm", uN = /^[\w.#[\]="':()>+~*,\s-]+$/;
function dN(e) {
  return uN.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Bc}".`
  ), Bc);
}
function fN(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Py(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (oN.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Rr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Rr(t.firstLineIndent) && s.push(`text-indent: ${Sn(t.firstLineIndent * 20 * r)}vw`), Rr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Sn(t.leftMargin * 20 * r)}vw`), Rr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Sn(t.rightMargin * 20 * r)}vw`
  ), Rr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Sn(t.spaceBefore * r)}pt`), Rr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Sn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = aN[n ? cN[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Hf = { c: 150, ca: 133, cp: 150 };
function Gf(e, t) {
  return e && Rr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function pN(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Rr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Gf(e.markers.c, Hf.c);
  return ["ca", "cp"].map((i) => {
    const s = Gf(
      e.markers[i],
      Hf[i]
    ), o = Sn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function JN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Bc } = t, s = dN(i), o = [], a = [];
  e.defaultFont && a.push(Py(e.defaultFont)), Rr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Sn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = fN(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${sN(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...pN(e, s)), o.join(`
`);
}
export {
  ug as BLOCK_VERSE_VIEW_MODE,
  x as CategoryType,
  HN as Editorial,
  ns as GENERATOR_NOTE_CALLER,
  xp as HIDDEN_NOTE_CALLER,
  GN as Marginal,
  T as MarkerType,
  lg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Ll as STANDARD_VIEW_MODE,
  co as defaultStyleInfo,
  WN as directionToNames,
  cC as filterAndRankItems,
  JN as generateUsjCss,
  jN as getDefaultViewMode,
  Ho as getDefaultViewOptions,
  qA as getEnterMenuItems,
  RA as getMarkerMenuItems,
  VN as getViewMode,
  Ul as getViewOptions,
  gs as isBlockVerseLayout,
  Yr as isInsertEmbedOpOfType,
  xC as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
