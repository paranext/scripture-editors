import { jsx as _, jsxs as Me, Fragment as Ln } from "react/jsx-runtime";
import { forwardRef as ti, useState as fe, useRef as Z, useCallback as de, useEffect as j, useMemo as Fe, memo as fk, createContext as Wp, useContext as Hp, Children as pk, isValidElement as hk, cloneElement as gk, useImperativeHandle as yl, useLayoutEffect as Bs } from "react";
import { assertSafeKey as Je, isValidBookCode as mk, MARKER_OBJECT_PROPS as yk, USJ_VERSION as Lr, USJ_TYPE as Dr, indexesFromUsjJsonPath as Zt, isUsjTextContentLocation as Dn, usjJsonPathFromIndexes as ct, isUsjPropertyValueLocation as wo, isUsjClosingMarkerLocation as Oo, isUsjClosingAttributeMarkerLocation as No, isUsjAttributeKeyLocation as Ro, isUsjAttributeMarkerLocation as bl, isUsjMarkerLocation as Gp, getUsjDocumentLocationTypeName as bk, EMPTY_USJ as Jp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as He, $parseSerializedNode as Vi, createCommand as kl, DecoratorNode as js, ElementNode as lr, isHTMLElement as ri, TextNode as We, createState as Vs, $isRangeSelection as A, $isElementNode as O, $isTextNode as S, $getState as ne, ParagraphNode as xl, $isRootNode as vr, $createTextNode as ke, $getSelection as N, $setState as Mt, $getCommonAncestor as kk, $isLineBreakNode as fa, NODE_STATE_KEY as Un, HISTORIC_TAG as Tl, $getEditor as Wi, $hasUpdateTag as xk, $getNodeByKey as H, $getRoot as pe, $createRangeSelection as Ws, $createPoint as md, $setSelection as un, $getCharacterOffsets as Yp, KEY_DOWN_COMMAND as Wr, COMMAND_PRIORITY_HIGH as Ke, HISTORY_MERGE_TAG as Xp, CLICK_COMMAND as pa, COMMAND_PRIORITY_EDITOR as Fn, isDOMNode as Qp, $getNearestNodeFromDOMNode as Hs, CONTROLLED_TEXT_INSERTION_COMMAND as vl, PASTE_COMMAND as $r, COMMAND_PRIORITY_CRITICAL as Ir, CUT_COMMAND as Kn, DROP_COMMAND as Cl, DELETE_CHARACTER_COMMAND as Tk, DELETE_WORD_COMMAND as vk, DELETE_LINE_COMMAND as Ck, $isDecoratorNode as Zp, COPY_COMMAND as ha, COMMAND_PRIORITY_NORMAL as Ni, SELECTION_CHANGE_COMMAND as Cr, BLUR_COMMAND as _l, $addUpdateTag as zn, SKIP_DOM_SELECTION_TAG as _k, CLEAR_HISTORY_COMMAND as Sk, COMMAND_PRIORITY_LOW as $t, $getPreviousSelection as Mk, $isRootOrShadowRoot as Ek, CAN_UNDO_COMMAND as Pk, CAN_REDO_COMMAND as Ak, $isNodeSelection as eh, DRAGSTART_COMMAND as wk, $createNodeSelection as th, getDOMSelectionFromTarget as Ok, $onUpdate as Nk, KEY_ENTER_COMMAND as rh, LineBreakNode as nh, $copyNode as Rk, FOCUS_COMMAND as qk, createEditor as ih, KEY_ESCAPE_COMMAND as sh, INSERT_PARAGRAPH_COMMAND as qo, UNDO_COMMAND as oh, REDO_COMMAND as ah, CLEAR_EDITOR_COMMAND as $k } from "lexical";
import { addClassNamesToElement as bi, removeClassNamesFromElement as Ga, $findMatchingParent as rt, $dfsIterator as ch, $dfs as Hi, mergeRegister as nt, registerNestedElementResolver as Sl, $unwrapNode as Cc, IS_APPLE as $o } from "@lexical/utils";
import { useLexicalNodeSelection as Ik } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as yr } from "fast-equals";
import wi from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as Lk, $getHtmlContent as Dk, $getLexicalContent as Uk } from "@lexical/clipboard";
import { TreeView as Fk } from "@lexical/react/LexicalTreeView";
import * as Kk from "react-dom";
import { createPortal as qn } from "react-dom";
import { LexicalComposer as lh } from "@lexical/react/LexicalComposer";
import { ContentEditable as uh } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as dh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as fh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as ph } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as zk } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Bk, createDOMRange as jk, createRectsFromDOMRange as Vk } from "@lexical/selection";
import { autoUpdate as Wk, computePosition as Hk, shift as Gk, flip as Jk } from "@floating-ui/dom";
import { $generateNodesFromDOM as Yk } from "@lexical/html";
import { AutoFocusPlugin as Xk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Qk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as hh, LexicalCollaboration as Zk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as ex } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as tx } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as rx, $isRootTextContentEmpty as nx } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as ix } from "@lexical/yjs";
import { Array as yd, Map as bd, YArrayEvent as sx } from "yjs";
const Ja = (e) => He(Vi(e)), ox = {
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
function gh(e) {
  return ox[e];
}
const q = " ", Io = "​", Gt = q, Ml = `${q}|`, kr = "p", Lo = "+", mh = "-", Gs = "immutable-note-caller", Do = "chapter", _c = "verse", kd = "invalid", ax = "text-spacing", cx = "formatted-font", lx = "marker-", El = "external-usj-mutation", ux = "selection-change", As = "cursor-change", Pl = kl("APP_PLACED_CARET_COMMAND"), Sc = "annotation-change", ws = "delta-change", yh = "marker-settle", xd = [
  El,
  ux,
  As,
  Sc,
  ws
], Bn = "zmsc-s", Ri = "zmsc-e", dx = [Bn, Ri], fx = [
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
  Bn,
  Ri
], bh = 1, Al = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], px = Al.filter((e) => e !== "sid" && e !== "eid");
class sr extends js {
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
    return new sr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return xh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (fx.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: bh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function kh(e) {
  return dx.includes(e);
}
function xh(e, t, r, n, i) {
  return He(new sr(e, t, r, n, void 0, i));
}
function we(e) {
  return e instanceof sr;
}
const wl = "f", hx = [
  // Footnote
  wl,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function ys(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const gx = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Th = 1;
class qe extends lr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = wl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (ys(t) === "crossref" ? mh : Lo), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new qe(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => yx(t) ? {
        conversion: mx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ol().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (hx.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", ys(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", ys(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", ys(this.getMarker()))), { element: r };
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
      version: Th
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
function mx(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Ol(t, r, n) };
}
function Ol(e, t, r, n, i) {
  return He(new qe(e, t, r, n, i));
}
function yx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return qe.isValidMarker(t) && e.classList.contains(qe.getType());
}
function U(e) {
  return e instanceof qe;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Mc = {
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
}, En = {
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
}, Td = {
  p: { children: En },
  q: { children: En },
  q1: { children: En },
  q2: { children: En },
  q3: { children: En },
  q4: { children: En },
  b: { children: En },
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
function xr(e) {
  const t = Object.hasOwn(Mc, e) ? Mc[e] : void 0, r = Object.hasOwn(Td, e) ? Td[e] : void 0;
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
const vh = "v", Ch = "c", Pn = "fig", vd = "tr", Ec = "esb", _h = "esbe", bx = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, kx = {
  "": "start",
  c: "center",
  r: "end"
};
function xx(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Cd(e) {
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
const Tx = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function vx(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Io && s + 1 < e.length && Cd(e[s + 1]) || (Cd(o) ? (r || (i = t.length, t += o), r = !0) : Tx.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Cx(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function _x(e, t) {
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
const Sx = /^(?:qt[1-5]?|ts)-[se]$/;
function ga(e) {
  return Sx.test(e) || kh(e);
}
function Ya(e, t) {
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
function Mx(e, t, r) {
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
      a(vx(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: d } = _x(e, i + 1);
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
    if (l === vh) {
      const { word: m, next: y } = Ya(e, i);
      i = y, n.push({ kind: "verse", number: m });
      continue;
    }
    if (l === Ch) {
      const { word: m, next: y } = Ya(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: m });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === b.Note || h === void 0 && qe.isValidMarker(l)) {
      const { word: m, next: y } = Ya(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: m || "+" });
      continue;
    }
    if (h === b.Milestone || h === void 0 && ga(l)) {
      const m = qx(e, c, l, i);
      if (m)
        n.push(m.token), m.ejectedText && o(m.ejectedText), i = m.next;
      else {
        const y = e.indexOf("\\", i), x = y === -1 ? e.length : y;
        o(e.slice(c, x)), i = x;
      }
      continue;
    }
    h === b.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : h === b.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Uo(p) ? (u(), Uo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === Ec || l === _h ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const _d = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Uo(e) {
  return Object.hasOwn(_d, e) ? _d[e] : void 0;
}
function Ex(e) {
  return Uo(e) !== void 0;
}
const Px = /([-\w]+)\s*=\s*"(.*?)"/g, Ax = /[\s\u200B]*[\n\r][\s\u200B]*/g, Sh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Js(e) {
  return Sh[e];
}
const wx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Ox(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ma(e, t, r = Sh[t]) {
  const n = e.replace(Ax, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Px)];
  if (s.length > 0) {
    if (!Ox(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      wx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Ys(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Nx(e) {
  const t = Hr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Rx(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ma(e.slice(n + 1, i), r, Ys(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function qx(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ma(s.slice(o + 1), r, Ys(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Rx(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Rr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function An(e) {
  return e.content || (e.content = []), e.content;
}
function Hr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d;
  const u = () => d ? An(d) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? An(o[o.length - 1].object) : An(s);
    if (o.length > 0)
      return An(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return u();
      i = { type: "para", marker: kr, content: [] }, u().push(i);
    }
    return An(i);
  }, h = (Q) => {
    const z = p();
    typeof Q == "string" && typeof z[z.length - 1] == "string" ? z[z.length - 1] = z[z.length - 1] + Q : z.push(Q);
  }, m = (Q) => {
    for (let z = Q; z < o.length; z += 1) {
      const se = o[z].object;
      se.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, x = (Q) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, Q || (s.closed = "false"), s = void 0);
  }, C = () => {
    c = void 0, l = void 0;
  }, M = (Q) => {
    if (!l)
      return !1;
    const z = bx.exec(Q);
    if (!z || !xx(z))
      return !1;
    y();
    const [, se, je, Ze] = z, ue = {
      type: "table:cell",
      marker: Ze ? Q.slice(0, Q.indexOf("-")) : Q,
      align: kx[se],
      content: []
    };
    return Ze && (ue.colspan = String(Number(Ze) + 1 - Number(je))), An(l).push(ue), i = ue, !0;
  }, R = (Q) => {
    d && (Q || (d.closed = "false"), d = void 0);
  };
  let E, L = "", T;
  const $ = () => {
    L && h(Rr(L)), L = "";
  }, W = (Q = !1) => {
    E?.type === "sidebar" ? L = "" : Q && L.endsWith(`
`) && (L = L.slice(0, -1)), E = void 0, $();
  }, G = () => {
    if (!T)
      return;
    const Q = { type: "char", marker: T.marker, content: [] };
    T.value && (Q.content = [Rr(T.value)]), p().push(Q), o.push({ object: Q }), T = void 0;
  }, ee = (Q, z) => {
    f = !1, C(), y(), x(!1), i = { type: "para", marker: Q, content: [] }, z && (i.content = [Rr(z)]), u().push(i);
  }, Ae = () => {
    T && (ee(T.marker, T.value), T = void 0);
  };
  let X;
  const Ie = () => {
    if (X) {
      if (X.shape === "para")
        ee(Pn, X.value);
      else {
        const Q = { type: "char", marker: Pn, content: [] };
        X.value && (Q.content = [Rr(X.value)]), p().push(Q), o.push({ object: Q });
      }
      X = void 0;
    }
  }, me = Mx(e, t?.getMarker ?? xr, n);
  for (let Q = 0; Q < me.length; Q++) {
    const z = me[Q];
    if (T) {
      if (z.kind === "text") {
        T.value += z.text;
        continue;
      }
      if (T.shape === "char" && z.kind === "end" && z.marker.replace(/^\+/, "") === T.marker) {
        if (T.value.trim() === "") {
          p().push({ type: "char", marker: T.marker, content: [] }), T = void 0, W();
          continue;
        }
        Object.assign(T.target, {
          [T.attrName]: Rr(T.value.trim())
        });
        const se = T.marker;
        if (T = void 0, se === "ca") {
          const je = me[Q + 1];
          je?.kind === "text" && /^[\s\u200B]*$/.test(je.text) && Q++;
        }
        continue;
      }
      if (T.shape === "para" && (z.kind === "para" || z.kind === "chapter")) {
        const se = T.value.replace(/[\s\u200B]+$/, "");
        se === "" ? (ee(T.marker), T = void 0) : (Object.assign(T.target, { [T.attrName]: Rr(se) }), T = void 0);
      } else {
        E = void 0, (z.kind === "para" || z.kind === "chapter") && T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), T.shape === "para" ? Ae() : G(), Q--;
        continue;
      }
    }
    if (X) {
      if (z.kind === "text" || z.kind === "optbreak") {
        X.value += z.kind === "text" ? z.text : "//";
        continue;
      }
      if (z.kind === "end" && z.marker.replace(/^\+/, "") === Pn) {
        const se = X.value.indexOf("|"), je = se >= 0 ? ma(X.value.slice(se + 1), Pn) : void 0;
        if (je) {
          const Ze = {};
          for (const [Cn, Ft] of Object.entries(je))
            Ze[Cn === "src" ? "file" : Cn] = Ft;
          const ue = {
            type: "figure",
            marker: Pn,
            ...Ze
          }, Qr = X.value.slice(0, se);
          Qr && (ue.content = [Rr(Qr)]), h(ue), X = void 0;
          continue;
        }
      }
      Ie(), Q--;
      continue;
    }
    if (E)
      if (z.kind === "text") {
        if (z.text.includes(`
`) && /^[\s\u200B]*$/.test(z.text)) {
          L += z.text;
          continue;
        }
        W();
      } else if (z.kind === "charOpen" || z.kind === "para") {
        const se = z.kind === "para" || !z.isNested ? Uo(z.marker) : void 0;
        if (se && se.targetTypes.includes(E.type)) {
          L = "", T = {
            target: E,
            attrName: se.attrName,
            marker: z.marker,
            shape: se.shape,
            value: ""
          };
          continue;
        }
        W(z.kind === "para");
      } else
        W(z.kind === "chapter");
    if (!s && !n && (z.kind === "charOpen" && !z.isNested && z.marker === Pn || z.kind === "para" && z.marker === Pn)) {
      y(), X = { shape: z.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (z.kind) {
      case "text": {
        let se = z.text;
        if (!s && se.endsWith(`
`)) {
          const je = me[Q + 1];
          (je === void 0 || je.kind === "para" || je.kind === "chapter") && (se = se.slice(0, -1));
        }
        se && h(Rr(se));
        break;
      }
      case "para": {
        const se = !s && !n;
        if (se && z.marker === vd) {
          y(), c || (c = { type: "table", content: [] }, u().push(c)), l = { type: "table:row", marker: vd, content: [] }, An(c).push(l), i = l, f = !1;
          break;
        }
        if (se && M(z.marker))
          break;
        if (C(), !n && z.marker === Ec) {
          y(), x(!1), R(!1), d = { type: "sidebar", marker: Ec, content: [] }, r.push(d), i = void 0, E = d, f = !1;
          break;
        }
        if (z.marker === _h && d) {
          y(), x(!1), R(!0), i = void 0;
          break;
        }
        ee(z.marker);
        break;
      }
      case "verse": {
        x(!1);
        const se = { type: "verse", marker: vh, number: z.number };
        h(se), E = se;
        break;
      }
      case "chapter": {
        y(), x(!1), C(), R(!1), i = void 0;
        const se = {
          type: "chapter",
          marker: Ch,
          number: z.number
        };
        r.push(se), E = se, f = !0;
        break;
      }
      case "note": {
        x(!1);
        const se = p();
        s = { type: "note", marker: z.marker, caller: z.caller, content: [] }, a = o.length, se.push(s), E = s;
        break;
      }
      case "charOpen": {
        if (!z.isNested && !s && !n && M(z.marker))
          break;
        if (!z.isNested) {
          const Ze = s ? a : 0;
          m(Ze), o.length = Ze;
        }
        const se = p(), je = { type: "char", marker: z.marker, content: [] };
        se.push(je), o.push({ object: je });
        break;
      }
      case "end": {
        const se = z.marker.replace(/^\+/, ""), je = s ? a : 0, Ze = o.findLastIndex((ue, Qr) => Qr >= je && ue.object.marker === se);
        Ze >= 0 ? ($x(o[Ze].object), m(Ze + 1), o.length = Ze) : s && s.marker === se ? x(!0) : (m(je), o.length = je, h({ type: "unmatched", marker: `${z.marker}*` }));
        break;
      }
      case "milestone":
        h({ type: "ms", marker: z.marker, ...z.attributes });
        break;
      case "optbreak":
        h({ type: "optbreak" });
        break;
    }
  }
  if (X && Ie(), T)
    if (T.shape === "para") {
      const Q = T.value.replace(/[\s\u200B]+$/, "");
      Q === "" ? ee(T.marker) : Object.assign(T.target, { [T.attrName]: Rr(Q) }), T = void 0;
    } else
      T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), G();
  y(), x(!1), R(!1);
  const ur = (Q) => {
    for (const z of Q)
      typeof z != "string" && z.content && (ur(z.content), z.content.length === 0 && delete z.content);
  };
  return ur(r), r;
}
function $x(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ma(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
function Ee(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function Ge(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Wt(e, t) {
  let r = Ee(e);
  return t && (r += `${q}${t}`), r += " ", r;
}
function Lt(e) {
  return " " + e + q;
}
const Ix = 1;
class Sr extends We {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Nn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Sr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return ht().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || Nn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Nn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Nn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Nn(r.__marker, r.__markerSyntax, t), r;
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
      version: Ix
    };
  }
}
function ht(e, t, r) {
  return He(new Sr(e, t, void 0, r));
}
function P(e) {
  return e instanceof Sr;
}
function Xs(e) {
  return e?.type === Sr.getType();
}
function kn(e) {
  return e.getTextContent() === Nn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Lx(e) {
  e.setTextContent(Nn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Nn(e, t, r = !1) {
  return t === "closing" ? Ge(e, r) : t === "selfClosing" ? Ge("") : Ee(e, r);
}
const jn = Vs("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), dn = Vs("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ce = Vs("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Mr = "marker-trailing-space", cn = "internal-comment", Dx = [cn], Mh = Object.freeze({}), Pc = Object.freeze({}), Ac = Object.freeze({}), wc = Object.freeze({}), Oc = Object.freeze({}), Ux = 1, ki = /* @__PURE__ */ new Map(), cs = /* @__PURE__ */ new Map(), xi = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map();
class Xe extends lr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Mh, r, n, i, s, o) {
    super(o), this.__typedIDs = mo(t), this.__typedOnClicks = Xa(r), this.__typedOnRemoves = Qa(n), this.__typedOnMouseEnters = Za(i), this.__typedOnMouseLeaves = ec(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = mo(t.__typedIDs), n = Xa(t.__typedOnClicks), i = Qa(t.__typedOnRemoves), s = Za(t.__typedOnMouseEnters), o = ec(t.__typedOnMouseLeaves);
    return new Xe(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Dx.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Vn().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Ux
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      bi(n, wn(t.theme.typedMark, a)), c.length > 1 && bi(n, wn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        bi(n, wn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = wn(n.theme.typedMark, s), u = wn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && bi(r, d) : l === 0 && Ga(r, d), c === 1 ? l === 2 && bi(r, u) : l === 1 && Ga(r, u));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ga(r, wn("annotationId", h));
      for (const h of a)
        f.has(h) || bi(r, wn("annotationId", h));
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
    return ye(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = mo(r.__typedIDs);
    r.__typedIDs = mo(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Fo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Xa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ye(t) ? ki.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Qa(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ye(t) ? cs.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Za(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ye(t) ? xi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ec(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ye(t) ? Ti.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!ye(a))
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
    if (!ye(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Fo(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Vn(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), ki.delete(r.getKey()), cs.delete(r.getKey()), xi.delete(r.getKey()), Ti.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = ki.get(this.getKey());
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
    const n = xi.get(this.getKey());
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
    const n = Ti.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Pc) {
      const t = ki.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      ki.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    ki.set(this.getKey(), this.__typedOnClicks);
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
    const i = rn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = rn(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Pc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Ac) {
      const t = cs.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      cs.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    cs.set(this.getKey(), this.__typedOnRemoves);
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
    const i = rn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = rn(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Ac) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === wc) {
      const t = xi.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      xi.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    xi.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = rn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = rn(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === wc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Oc) {
      const t = Ti.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Ti.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Ti.set(this.getKey(), this.__typedOnMouseLeaves);
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
    const i = rn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = rn(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Oc) {
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
    const i = Fx(t, r);
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
    for (; ye(t) && Md(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; ye(r) && Md(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Kx(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = zx(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Bx(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = jx(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function mo(e = Mh) {
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
function Xa(e) {
  if (!e || e === Pc)
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
function Qa(e) {
  if (!e || e === Ac)
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
function Za(e) {
  if (!e || e === wc)
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
function ec(e) {
  if (!e || e === Oc)
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
function rn(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Sd(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Fx(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Md(e, t) {
  const r = Sd(e), n = Sd(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Kx(e, t) {
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
function zx(e, t) {
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
function Bx(e, t) {
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
function jx(e, t) {
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
function wn(e, t) {
  return `${e}-${t}`;
}
function Ed(e) {
  return `external-${e}`;
}
function Vn(e, t, r, n, i) {
  return He(new Xe(e, t, r, n, i));
}
function ye(e) {
  return e instanceof Xe;
}
function Qs(e) {
  return e?.type === Xe.getType();
}
function Fo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Vx(e) {
  return S(e) && ne(e, ce) === "attribute";
}
function Nl(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let h, m;
  for (let y = 0; y < d; y++) {
    const x = a[y];
    if (O(m) && m.isParentOf(x))
      continue;
    if (P(x) || Vx(x)) {
      h = x.getParent(), m = void 0;
      continue;
    }
    const C = y === 0, M = y === d - 1;
    let R = null;
    if (S(x)) {
      const E = x.getTextContentSize(), L = C ? f : 0, T = M ? p : E;
      if (L === 0 && T === 0)
        continue;
      const $ = x.splitText(L, T);
      R = $.length > 1 && ($.length === 3 || C && !M || T === E) ? $[1] : $[0];
    } else {
      if (ye(x))
        continue;
      O(x) && x.isInline() && (R = x);
    }
    if (R !== null) {
      if (R && R.is(h))
        continue;
      const E = R.getParent();
      (E == null || !E.is(h)) && (m = void 0), h = E, m === void 0 && (m = Vn(), m.addID(t, r, n, i, s, o), R.insertBefore(m)), m.append(R);
    } else
      h = void 0, m = void 0;
  }
  t === cn && O(m) && (u ? m.selectStart() : m.selectEnd());
}
function Wx(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (ye(n))
      return n.getTypedIDs()[t];
    if (S(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (ye(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Eh = 1, Hx = "attribute-run";
function tc(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Gr extends lr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Gr(r, n);
  }
  static importJSON(t) {
    return Ph(t.runKind).updateFromJSON(t);
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
    t.classList.add(Hx);
    const r = tc(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = tc(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = tc(this.__runKind);
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
      version: Eh
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
function Ph(e) {
  return He(new Gr(e));
}
function Ve(e) {
  return e instanceof Gr;
}
const Ah = [
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
], wh = [
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
], Gx = [
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
  ...Ah,
  ...wh
], Oh = 1, Jx = ["type", "marker", "content"];
class xe extends lr {
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
    return t !== void 0 && (Gx.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Ah.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && wh.includes(t);
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
      span: (t) => Xx(t) ? {
        conversion: Yx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ur().updateFromJSON(t);
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
    return Pd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Pd(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Oh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Ur(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Pd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Yx(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Ur(t) };
}
function Ur(e, t) {
  return He(new xe(e, t));
}
function Xx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return xe.isValidMarker(t) && e.classList.contains(xe.getType());
}
function D(e) {
  return e instanceof xe;
}
function Qx(e) {
  return e?.type === xe.getType();
}
const Ko = "v", Nh = 1, Zx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class bt extends We {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Ko, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new bt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Rh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(_c, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Nh
    };
  }
}
function Rh(e, t, r, n, i, s) {
  return He(new bt(e, t, r, n, i, s));
}
function Oe(e) {
  return e instanceof bt;
}
function qh(e) {
  return e?.type === bt.getType();
}
const eT = /* @__PURE__ */ new Set(["closed"]);
function br(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !eT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function $h(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Ih(e) {
  const t = Object.keys(e).filter((n) => !px.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Lh(e, t, r, n) {
  return $h(
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
function xs(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function tT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : xs(e) === void 0 && Dh(e) === void 0;
}
function Dh(e) {
  return e.getChildren().find((t) => S(t) && ne(t, ce) === "attribute");
}
function Os(e, t) {
  return Zs(e.getNextSibling(), t);
}
const rT = /^[ \u00A0]+$/;
function Rl(e) {
  if (kn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ee(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && rT.test(r.slice(t.length));
}
function Zs(e, t) {
  let r, n, i, s;
  return Ve(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Rl(e) && (r = e, e = e.getNextSibling()), S(e) && ne(e, ce) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && kn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function nT(e) {
  let t = e;
  for (; ye(t); )
    t = t.getChildren()[0];
  return t;
}
function Fr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = nT(t[r]);
  if (S(n) && n.getTextContent() === Lt(e.getCaller()))
    return n;
}
function ql(e) {
  const t = Fr(e);
  return t ? Zs(t.getNextSibling(), "cat") : {};
}
function Gi(e) {
  const t = e.getFirstChild();
  if (!(!S(t) || P(t)) && ne(t, ce) !== "attribute")
    return t;
}
function Uh(e) {
  const t = Gi(e);
  return t ? Zs(t.getNextSibling(), "ca") : {};
}
function Fh(e) {
  const t = Gi(e);
  if (!t)
    return;
  const r = Zs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Kh(e) {
  const t = Fh(e);
  return t ? Zs(t.getNextSibling(), "cp") : {};
}
function zh(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Oe(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || S(n) && ne(n, ce) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ve(n)))
        return;
    }
}
function ya(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ve(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Rl(s) && (t = s, s = s.getNextSibling()), S(s) && ne(s, ce) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && kn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const zo = "c", Bh = 1, iT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ut extends lr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = zo, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Ut(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return jh().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Do, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Bh
    };
  }
}
function jh(e, t, r, n, i) {
  return He(new Ut(e, t, r, n, i));
}
function ve(e) {
  return e instanceof Ut;
}
function sT(e) {
  return e?.type === Ut.getType();
}
const Vh = 1;
class fn extends xl {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new fn(t.__key);
  }
  static importJSON(t) {
    return Ht().updateFromJSON(t);
  }
  getMarker() {
    return kr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Vh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ht();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ht() {
  return He(new fn());
}
function Qe(e) {
  return e instanceof fn;
}
function ba(e) {
  return e?.type === fn.getType();
}
function Wh(e) {
  return Qe(e) && vr(e.getParent());
}
function $l(e) {
  return ye(e) || Wh(e);
}
function xn(e) {
  let t = e.getParent();
  for (; t && $l(t); )
    t = t.getParent();
  return t;
}
function ka(e) {
  return D(xn(e));
}
function Bo(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? ka(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function oT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Bo(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function eo(e) {
  return S(e) && e.getType() === We.getType() && ne(e, ce) !== "attribute";
}
function aT(e) {
  if (!eo(e) || !e.getTextContent().startsWith(q))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && ye(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!D(n))
    return 0;
  for (; ye(r); )
    r = r.getLastChild();
  return !P(r) || r.getMarkerSyntax() !== "opening" || Bo(r, n) === void 0 ? 0 : 1;
}
function Il(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Bo(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? Bo(r, t) === !0 ? "spacer" : void 0 : eo(r) ? r.getTextContent().startsWith(q) ? void 0 : "prefix" : "spacer";
}
function cT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Il(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Hh(e, t) {
  const r = N();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Gh(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Il(t, e);
    if (r !== void 0 && !Hh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        S(n) && n.setTextContent(q + n.getTextContent());
      } else
        t.insertAfter(ke(q));
  });
}
function Jh(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Il(t, e) !== void 0 && Hh(t, e)) : !1;
}
const Yh = 1, lT = "marker", Ll = Vs("isGutterMarker", {
  parse: (e) => e === !0
});
class Jr extends js {
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
    return new Jr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => pT(t) ? {
        conversion: uT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kr().updateFromJSON(t);
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
    return r && ri(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Yh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function uT(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Kr(t, r) };
}
function Kr(e, t) {
  return He(new Jr(e, t));
}
function dT(e) {
  return Mt(Kr(lT, e), Ll, !0);
}
function fT(e) {
  return Tt(e) && ne(e, Ll);
}
function pT(e) {
  return e?.tagName === "span";
}
function Tt(e) {
  return e instanceof Jr;
}
function Xh(e) {
  return e?.type === Jr.getType();
}
const hT = ["type", "marker", "content"], Nc = "unknown", Qh = 1, gT = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ni extends lr {
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
    return new ni(r, n, i, s);
  }
  static importDOM() {
    return {
      [Nc]: (t) => yT(t) ? {
        conversion: mT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Dl().updateFromJSON(t);
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
    return gT.has(this.getTag());
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
    const t = document.createElement(Nc);
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
      version: Qh
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
function mT(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Dl(t, r) };
}
function Dl(e, t, r) {
  return He(new ni(e, t, r));
}
function yT(e) {
  return e?.tagName.toLowerCase() === Nc;
}
function Pe(e) {
  return e instanceof ni;
}
const Zh = "file", eg = "src", bT = "colspan", kT = "category", xT = "alt", TT = "closed", vT = "false";
function CT(e) {
  return e[TT] !== vT;
}
function _T(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === Zh ? eg : t,
    r
  ]));
}
function ST(e, t) {
  return e === "figure" && t === eg ? Zh : t;
}
function MT(e, t) {
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
function xa(e, t, r) {
  const n = r ?? {}, i = CT(n);
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
        opening: `\\${MT(t, n[bT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: br(_T(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [kT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + br(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [xT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: br(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: br(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const Pt = { wantsRun: !1, valueText: void 0 }, Yr = {};
function rc(e, t) {
  if (t === "va")
    return e;
  const r = Os(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Ul(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (O(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function Ta(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!A(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function ET(e) {
  return Ve(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : S(e) && ne(e, ce) === "attribute";
}
function PT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!S(e) || ne(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function nc(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Oe(t))
      return t;
    if (!ET(t))
      return;
  }
}
function Ad(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Oe(t),
    ownerOf: (t) => {
      if (Ve(t))
        return t.getRunKind() === e ? nc(t) : void 0;
      const r = t.getParent();
      return Ve(r) ? r.getRunKind() === e ? nc(r) : void 0 : PT(t) === e ? nc(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Oe(t))
        return Pt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Pt : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (t) => Oe(t) ? Os(rc(t, e), e) : Yr,
    graceSite: (t, r) => Oe(t) ? !r.opener && !r.closer ? Ul(rc(t, e)) : Ta(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Oe(t) ? rc(t, e) : void 0
    }
  };
}
const AT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => Pt,
  scanPieces: () => Yr,
  graceSite: (e) => D(e) && Jh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, wT = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!S(e) || ne(e, ce) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || xs(e) === void 0)
      return Pt;
    const t = br(e.getUnknownAttributes() ?? {}, Js(e.getMarker()));
    return t === "" ? Pt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: Dh(e) } : Yr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = xs(e);
    if (!r)
      return !1;
    const n = N();
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
    insertRunBefore: (e) => D(e) ? xs(e) : void 0
  }
};
function tg(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!S(e) || ne(e, ce) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function OT(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = Fr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!tg(n))
        return;
    }
}
const NT = {
  kind: "cat",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (Ve(e))
      return e.getRunKind() === "cat" && U(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ve(t) ? t.getRunKind() === "cat" && U(t.getParent()) ? t.getParent() ?? void 0 : void 0 : tg(e) ? OT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || e.getIsCollapsed() !== !1)
      return Pt;
    const t = e.getCategory();
    return t === void 0 ? Pt : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => U(e) ? ql(e) : Yr,
  graceSite: (e, t) => {
    if (!U(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Fr(e);
      return r !== void 0 && Ul(r);
    }
    return Ta(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => U(e) ? Fr(e) : void 0
  }
};
function RT(e) {
  return Ve(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : S(e) && ne(e, ce) === "attribute";
}
function qT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!S(e) || ne(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function $T(e) {
  const t = e.getParent();
  if (!ve(t))
    return;
  const r = Gi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!RT(n))
        return;
    }
}
function wd(e) {
  const t = (r) => ve(r) ? e === "ca" ? Gi(r) : Fh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => ve(r),
    ownerOf: (r) => {
      if (Ve(r))
        return r.getRunKind() === e && ve(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ve(n) ? n.getRunKind() === e && ve(n.getParent()) ? n.getParent() ?? void 0 : void 0 : qT(r) === e ? $T(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!ve(r))
        return Pt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Pt : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (r) => ve(r) ? e === "ca" ? Uh(r) : Kh(r) : Yr,
    graceSite: (r, n) => {
      if (!ve(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Ul(i);
      }
      return Ta(n);
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
function rg(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return S(e) && ne(e, ce) === "attribute";
}
function IT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (we(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!rg(t))
      return;
  }
}
const LT = {
  kind: "milestone",
  ownerPredicate: (e) => we(e),
  ownerOf: (e) => {
    const t = Ve(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ve(e.getParent()) ? e.getParent() : rg(e) ? e : void 0;
    if (!t || Ve(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ve(t) ? we(r) ? r : void 0 : IT(t);
  },
  expectedPieces: (e) => {
    if (!we(e))
      return Pt;
    const t = Lh(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = br(t, Ys(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : q + r };
  },
  scanPieces: (e) => {
    if (!we(e))
      return Yr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ya(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!we(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = N();
      if (!A(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Ta(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => we(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, DT = xa("optbreak", void 0, void 0).opening, UT = {
  kind: "optbreak",
  ownerPredicate: (e) => Pe(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Pe(t) || t.getTag() !== "optbreak"))
      return S(e) || Tt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: DT }),
  scanPieces: (e) => Pe(e) ? { value: e.getFirstChild() ?? void 0 } : Yr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, FT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Pe(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => Pt,
  scanPieces: () => Yr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, KT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => Pt,
  scanPieces: () => Yr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ns = [
  AT,
  wT,
  Ad("va"),
  Ad("vp"),
  NT,
  wd("ca"),
  wd("cp"),
  LT,
  UT,
  FT,
  KT
], zT = new Map(Ns.map((e) => [e.kind, e]));
function zr(e) {
  const t = zT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function pn(e) {
  for (const t of Ns) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function ng(e) {
  return pn(e) !== void 0;
}
const jo = "unmatched", ig = 2;
function Ts(e) {
  return `\\${e}`;
}
class Xr extends We {
  __marker;
  constructor(t = "", r) {
    super(Ts(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Xr(r, n);
  }
  static importDOM() {
    return {
      [jo]: (t) => jT(t) ? {
        conversion: BT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Fl().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Ts(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Ts(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(kd), r.title = Od(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Od(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(jo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(kd), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: ig
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function sg(e) {
  return e.getTextContent() === Ts(e.getMarker());
}
function Od(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function BT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Fl(t) };
}
function Fl(e) {
  return He(new Xr(e));
}
function jT(e) {
  return e?.tagName.toLowerCase() === jo;
}
function Tn(e) {
  return e instanceof Xr;
}
const Rs = "id", og = 1, VT = [
  "type",
  "marker",
  "code",
  "content"
];
class Jt extends lr {
  __marker = Rs;
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
    return new Jt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return ag(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return mk(t);
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
      version: og
    };
  }
}
function ag(e, t) {
  return He(new Jt(e, t));
}
function lt(e) {
  return e instanceof Jt;
}
function cg(e) {
  return e?.type === Jt.getType();
}
const lg = 1, WT = "c", ug = "span";
class Er extends js {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = WT, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Er(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => dg(t) ? {
        conversion: HT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kl().updateFromJSON(t);
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
    const t = document.createElement(ug);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Do, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Do, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Wt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: lg
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
function HT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Kl(t) };
}
function Kl(e, t, r, n, i, s) {
  return He(new Er(e, t, r, n, i, s));
}
function dg(e) {
  return e ? e.classList.contains(Do) && e.tagName.toLowerCase() === ug : !1;
}
function to(e) {
  return e instanceof Er;
}
function GT(e) {
  return e?.type === Er.getType();
}
const fg = "table", Rc = "immutable-table", pg = 1, JT = ["type", "marker", "content"];
class ii extends lr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Rc;
  }
  static clone(t) {
    return new ii(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return YT().updateFromJSON(t);
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
      type: Rc,
      ...t !== void 0 && { unknownAttributes: t },
      version: pg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function YT(e) {
  return He(new ii(e));
}
function hg(e) {
  return e instanceof ii;
}
function XT(e) {
  return e?.type === Rc;
}
const gg = "table:row", Nd = "immutable-table-row", mg = 1, qc = "tr", QT = ["type", "marker", "content"];
class si extends lr {
  __marker;
  __unknownAttributes;
  constructor(t = qc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Nd;
  }
  static clone(t) {
    return new si(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return ZT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? qc).setUnknownAttributes(t.unknownAttributes);
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
      type: Nd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: mg
    };
  }
}
function ZT(e, t) {
  return He(new si(e, t));
}
function yg(e) {
  return e instanceof si;
}
const bg = "table:cell", Rd = "immutable-table-cell", kg = 1, $c = "tc1", ev = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function tv(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class oi extends lr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = $c, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Rd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new oi(r, n, i, s, o);
  }
  static importJSON(t) {
    return rv().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? $c).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = tv(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Rd,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: kg
    };
  }
}
function rv(e, t, r, n) {
  return He(new oi(e, t, r, n));
}
function nv(e) {
  return e instanceof oi;
}
const iv = [
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
  kr,
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
], xg = 1, sv = ["type", "marker", "content"];
class it extends xl {
  __marker;
  __unknownAttributes;
  constructor(t = kr, r, n) {
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
    return t !== void 0 && (iv.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: ov,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return qs().updateFromJSON(t);
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
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: xg
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = qs(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function ov(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = qs(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function qs(e, t) {
  return He(new it(e, t));
}
function re(e) {
  return e instanceof it;
}
function zl(e) {
  return e?.type === it.getType();
}
function va(e, t) {
  const r = e.getChildAtIndex(t);
  return S(r) ? r : void 0;
}
function or(e, t) {
  const r = va(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function $s(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function av(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function cv(e) {
  return $s(e) ? void 0 : { closed: "false" };
}
function lv(e, t, r, n) {
  const i = t.getMarker(), s = ka(t), o = av(t);
  if (n) {
    e.append(ht(i, "opening", s));
    const [a] = r;
    eo(a) && !a.getTextContent().startsWith(q) && a.setTextContent(q + a.getTextContent());
  }
  e.append(...r), o && e.append(ht(i, "closing", s));
}
function Wn(e) {
  return rt(e, D) ?? void 0;
}
function Bl(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Ic(e) {
  const t = Tg(e);
  return e.getChildren().every((r) => P(r) || t && ne(r, ce) === "attribute" || S(r) && r.getTextContent().replaceAll(q, "") === "");
}
function Tg(e) {
  return $s(e);
}
function uv(e, t) {
  const r = e.getUnknownAttributes(), n = r ? br(r, Js(e.getMarker())) : "";
  n !== "" && t.insertAfter(ke(n)), e.remove();
}
function dv(e, t) {
  if ($s(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ht(e.getMarker(), "closing", ka(e)));
}
function fv(e, t) {
  return D(e) && !$s(e) && !$s(t);
}
function pv(e, t, r) {
  Ic(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && eo(n) && !n.getTextContent().startsWith(q) && n.setTextContent(q + n.getTextContent()), e.append(...t);
}
function hv(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Tg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = P(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, ce) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = fv(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      pv(e, o, n);
    else {
      const l = Ur(t.getMarker(), cv(t));
      lv(l, t, o, n), e.insertAfter(l), Ic(l) ? l.remove() : c = l;
    }
  i && !a && dv(t, n), Ic(t) && uv(t, c);
}
function $i(e, t) {
  let r = e.getParent();
  for (; D(r); )
    hv(e, r, t), r = e.getParent();
}
function jl(e) {
  if (S(e) && !P(e)) {
    const t = e.getTextContent().startsWith(q) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (O(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      jl(t);
      return;
    }
    e.selectEnd();
  }
}
const vg = /[ \u00A0]{2,}/g;
function gv(e) {
  return [...e.matchAll(vg)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function mv(e) {
  return e.replace(vg, (t) => t[0]);
}
const yv = "​", Ii = yv;
var qd;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(qd || (qd = {}));
var $d;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})($d || ($d = {}));
function bv() {
  return ke(Ii);
}
function kv(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Ii, ""));
}
function ro(e) {
  return e.length > 0 && e.includes(Ii) && e.replaceAll(Ii, "") === "";
}
function Vl(e) {
  return S(e) && ro(e.getTextContent());
}
function Cg(e) {
  return sT(e) || GT(e);
}
function ze(e) {
  return ve(e) || to(e);
}
function _g(e, t) {
  return e.find((r) => ze(r) && r.getNumber() === t.toString());
}
function xv(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && ze(r));
}
function Id(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Sg(e) {
  if (!e)
    return;
  if (ze(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !ze(t); )
    t = t.getPreviousSibling();
  if (t && ze(t))
    return t;
}
function ar(e) {
  return rt(e, U) ?? void 0;
}
function Tv(e) {
  return lt(e) || ve(e) || D(e) || to(e) || Qe(e) || we(e) || re(e) || U(e) || Oe(e) || Pe(e);
}
function Mg(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function vv(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Yt(e) {
  return Ne(e) || lt(e);
}
function Ne(e) {
  return re(e) || Qe(e);
}
function Cv(e) {
  return zl(e) || ba(e);
}
function Li(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Hn(e, t) {
  const r = ne(t, jn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function _v(e, t) {
  const r = O(e) ? e : e.getParent(), n = O(t) ? t : t.getParent(), i = r && n ? kk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Sv(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Gn(e) {
  return e?.type === We.getType();
}
function Mv(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Ev(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Eg(e, t, r) {
  const n = Ee(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Pv(e) {
  const t = e[Un];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Pg(e) {
  return Xs(e) || Xh(e) && e.textType === "marker" || Gn(e) && Pv(e) === "attribute" ? "" : Gn(e) && e.text !== q ? e.text : Qx(e) ? e.children.map((t) => Pg(t)).join("") : "";
}
function Av(e) {
  return e.map((r) => Pg(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Wl(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = Ag(r);
    n !== Gt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Ag(e) {
  return P(e) || Pr(e) || S(e) && ne(e, ce) === "attribute" ? "" : S(e) ? e.getTextContent() : O(e) ? e.getChildren().map((t) => Ag(t)).join("") : "";
}
function Pr(e) {
  return Tt(e) && e.getTextType() === "marker";
}
function Xt(e) {
  return P(e) || Pr(e);
}
function Ld(e, t) {
  wv(e, t), e.setMarker(t);
}
function wv(e, t) {
  const r = e.getMarker(), n = Ee(r), i = Ee(r, !0), s = Ge(r), o = Ge(r, !0), a = xe.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Xt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (Pr(c)) {
        const f = l.startsWith(Ee("", !0));
        c.setTextContent(d ? Ee(t, f) : Ge(t, f));
      }
    }
  });
}
function Be(e, t = yk) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function $e(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function wg(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Hl(e) {
  if (!A(e))
    return Dd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !O(t) || e.anchor.type === "text" && !S(t)))
    return t ?? void 0;
  try {
    return Dd(e) ?? t ?? void 0;
  } catch (n) {
    if (wg(n))
      return t ?? void 0;
    throw n;
  }
}
function Ov(e, t) {
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
function Gl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Og(e) {
  return !!e && e.includes("-");
}
function Ng(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Dd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Jn(e) {
  if (!e)
    return !1;
  if (fa(e) || P(e) || Pr(e) || Ve(e) || e.getType() === Gs || Tt(e) && e.getTextType() === "attribute")
    return !0;
  const t = xn(e);
  if (ve(t) || S(e) && U(t) && Fr(t)?.is(e))
    return !0;
  if (S(e)) {
    const r = ne(e, ce);
    if (r === Mr || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === q || ro(n))
      return !0;
  }
  return !1;
}
function Ca() {
  const e = ke(q);
  return Mt(e, ce, Mr), e.setMode("token"), e;
}
function Nv(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function ai(e) {
  return S(e) && ne(e, ce) === Mr;
}
function Rg(e) {
  const t = e.getFirstChild();
  if (!Xt(t) || t === null || ai(t.getNextSibling()))
    return !1;
  const r = N();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function qg(e) {
  if (ve(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!Jn(s)) {
      if ($l(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (S(s) && s.getType() === We.getType()) {
        r ??= [], r.push(s);
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function Rv(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = aT(i), o = t ? gv(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, d]) => c + d - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function $g(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function qv(e, t) {
  let r = t;
  for (const [n, i] of $g(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function Ud(e, t) {
  let r = t;
  for (const [n, i] of $g(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function wt(e, t) {
  return qg(e).map((r) => r.type === "element" ? r : Rv(r.nodes, t));
}
function $v(e, t) {
  return qg(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function Vo(e, t, r) {
  const n = xn(e);
  if (!n)
    return;
  const i = wt(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: qv(a, t) };
  }
}
function Iv(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, Ud(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, Ud(r, t - r.start)];
}
function Oi(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (Wh(e)) {
    const s = e.getParentOrThrow();
    return n ? Jn(n) ? Oi(e, t + 1, r) : Fd(s, n, r) : Oi(s, e.getIndexWithinParent() + 1, r);
  }
  const i = wt(e, r);
  return n ? Jn(n) || $l(n) && !Lv(i, n) ? Oi(e, t + 1, r) : Fd(e, n, r) : { type: "index", index: i.length };
}
function Lv(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || Li(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || Li(n.node, t.getKey())));
}
function Fd(e, t, r) {
  const n = wt(e, r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type === "element") {
      if (s.node.is(t) || Li(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || Li(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: n.length };
}
const $n = /* @__PURE__ */ new WeakMap();
function Dv(e, t, r) {
  const n = { owners: t, rederive: r };
  return $n.set(e, n), () => {
    $n.get(e) === n && $n.delete(e);
  };
}
function Ig(e, t, r) {
  const n = $n.get(e);
  !n?.rederive || !r.has(Tl) || n.derivedFor === t || (n.rederive(t), n.derivedFor = t);
}
function Kd(e) {
  return $n.get(e)?.owners;
}
function Uv(e) {
  return $n.get(Wi())?.owners.has(e.getKey()) ?? !1;
}
function Fv(e) {
  $n.get(Wi())?.owners.add(e.getKey());
}
function Kv(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Lc(e) {
  return !!(e.opener || e.value || e.closer);
}
function zd(e) {
  return /^\s/.test(e);
}
function Jl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !zd(t) || !zd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function _a(e, t, r) {
  return r.wantsRun ? Jl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : Kv(t);
}
function zv(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Jl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Lg(e, t) {
  return !Lc(e.scanPieces(t));
}
function no(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!_a(e, n, r))
    return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Li(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function Bv(e, t, r, n) {
  return !r.wantsRun || Lc(n) || xk(ws) ? !1 : Wi().getEditorState().read(() => {
    const i = H(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Lc(e.scanPieces(i));
  });
}
function jv(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Bd(e) {
  const t = ke(e);
  return Mt(t, ce, "attribute"), t;
}
function Vv(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Ph(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function Wv(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    S(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Bd(n.valueText));
    return;
  }
  const l = Vv(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = ht(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : S(u) ? Jl(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Bd(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(ht(a === "selfClosing" ? "" : o(t), a));
}
function Is(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (_a(e, i, n) && !Uv(t)) {
    if (Bv(e, t, n, i)) {
      Fv(t);
      return;
    }
    if (!no(e, t)) {
      if (!n.wantsRun) {
        jv(i);
        return;
      }
      Wv(e, t, i, n);
    }
  }
}
function Hv(e, t, r) {
  Is(e, t), t.isAttached() && no(e, t) && r.add(t.getKey());
}
function Dg(e) {
  if (!S(e))
    return !1;
  if (P(e) || Oe(e) || Tn(e))
    return !0;
  const t = ne(e, ce);
  return t === "attribute" || t === Mr;
}
function Yl(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && kn(e) && D(e.getParent())) : !1;
}
function Gv() {
  const e = N();
  return A(e) ? Yl(e.focus.getNode(), e.focus.offset) : !1;
}
function Ug(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return S(t) && Dg(t) ? t : void 0;
}
function Jv(e) {
  const t = Ug(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function Yv(e) {
  const t = Ug(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function jd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Vd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function Xv(e, t) {
  let r = Yv(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!S(n))
      return;
    if (!Dg(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Wd(e, t) {
  const r = Xv(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Fg(e) {
  if (e.isCollapsed()) {
    const a = Jv(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [jd(r), jd(n)], s = Wd(r, "next"), o = Wd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Vd(r, i[0]), Vd(n, i[1]), !1) : !0;
}
const Kg = Vs("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), Wo = "verse-block", zg = 1, Qv = "verse-block";
class Ji extends lr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Wo;
  }
  static clone(t) {
    return new Ji(t.__number, t.__key);
  }
  static importJSON(t) {
    return Zv().updateFromJSON(t);
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
    return Ng(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(Qv), Hd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Hd(r, this.__number), !1;
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
      type: Wo,
      number: this.getNumber(),
      version: zg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Hd(e, t) {
  const { start: r, end: n } = Ng(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Gd(e, "data-verse-start", i ? r : NaN), Gd(e, "data-verse-end", i ? n : NaN);
}
function Gd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function Zv(e) {
  return He(new Ji(e));
}
function Yn(e) {
  return e instanceof Ji;
}
function eC(e) {
  return e?.type === Wo;
}
const tC = [
  Jt,
  Er,
  Ut,
  bt,
  xe,
  qe,
  sr,
  Sr,
  ni,
  Jr,
  Xr,
  it,
  fn,
  ii,
  si,
  oi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Gr,
  {
    replace: xl,
    with: () => Ht(),
    withKlass: fn
  }
], Ho = {
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
}, rC = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function nC(e) {
  if (!e)
    return xr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: xr(r)?.category ?? k.Uncategorized,
      type: rC[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: xr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Jd(e, t, r) {
  const n = {
    type: Dr,
    version: Lr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return ba(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Bg = "v", jg = 1, iC = "verse-selected";
class Ot extends js {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Bg, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Ot(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => aC(t) ? {
        conversion: oC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Xl().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(_c, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(_c, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Wt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Io + this.getNumber() + Io
    );
    return _(sC, { nodeKey: this.getKey(), text: t });
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
      version: jg
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (wg(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function sC({ nodeKey: e, text: t }) {
  const [r] = Ik(e);
  return _("span", { className: r ? iC : void 0, children: t });
}
function oC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Xl(t) };
}
function Xl(e, t, r, n, i, s) {
  return He(new Ot(e, t, r, n, i, s));
}
function aC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Bg;
}
function ci(e) {
  return e instanceof Ot;
}
function cC(e) {
  return e?.type === Ot.getType();
}
function ge(e) {
  return Oe(e) || ci(e);
}
function Vg(e) {
  return qh(e) || cC(e);
}
function lC(e) {
  return uC(e).find((t) => re(t));
}
function uC(e) {
  return e.some(Yn) ? e.flatMap((t) => Yn(t) ? t.getChildren() : t) : e;
}
function Sa(e) {
  return O(e) ? Yn(e) ? e.getChildren().flatMap(Sa) : e.getChildren() : [];
}
function dC(e, t) {
  return Sa(e).find((i) => ge(i) && Gl(t, i.getNumber()));
}
function fC(e, t) {
  return t === 0 ? lC(e) : e.map((r) => dC(r, t)).filter((r) => r)[0];
}
function Go(e) {
  return Sa(e).find((r) => ge(r));
}
function Wg(e, t) {
  if (!O(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ge(i))
      return i;
  }
}
function pC(e) {
  const t = e.getParent();
  if (t && O(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ge(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !ze(r); ) {
    const n = Go(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Dc(e) {
  return Sa(e).findLast((t) => ge(t));
}
function hC(e) {
  if (!Oe(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function gC(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && O(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function mC(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return gC(t, e, r);
  if (S(e)) {
    const n = hC(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Yd(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function yC(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!A(t))
    return Yd(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return mC(e, t) ? { verseNum: n } : Yd(e);
}
function bC(e) {
  return Tv(e) || ci(e);
}
function Ql(e) {
  if (S(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function Hg(e) {
  if (S(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Gg(e, t) {
  return e.getEditorState().read(() => !H(t));
}
function kC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Zl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && O(i) && O(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && O(i)) {
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
      let s = Xd(i);
      for (; s && !ze(s); ) {
        const o = Go(s);
        if (o) {
          n = o;
          break;
        }
        s = Xd(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Go(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && ze(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function xC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Zl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && O(i) && (n = Wg(i, r.getIndexWithinParent())), !n && i) {
      let o = Qd(i);
      for (; o && !ze(o); ) {
        const a = Dc(o);
        if (a) {
          n = a;
          break;
        }
        o = Qd(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !ze(s); ) {
      const o = Dc(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Xd(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Qd(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Zl(e, t) {
  if (O(e) && A(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ge(n))
      return n;
    const i = Wg(e, t.anchor.offset);
    if (i)
      return i;
    const s = Go(e);
    if (s)
      return s;
  }
  return eu(e);
}
function eu(e) {
  if (!e || ze(e))
    return;
  if (ge(e))
    return e;
  let t = Id(e);
  for (; t; ) {
    if (ze(t))
      return;
    if (ge(t))
      return t;
    const r = Dc(t);
    if (r)
      return r;
    t = Id(t);
  }
}
const TC = ["style"], vC = ["style", "code"], Jo = ["style", "cid"], CC = [
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
], MC = ["style", "caller", "category", "contents"], EC = ["tag", "marker", "contents"], PC = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Ls = `
`;
function AC(e, t) {
  const r = H(e);
  if (!Dt(r))
    return;
  const n = Jg(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Jg(e, t = "delta-doc") {
  if (!e)
    return;
  const r = ch();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Di(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Di(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Br(l) || Dt(l))
        return n;
      Yt(l) && (a = l);
    }
    if (Yt(l) && (i.includes(l) || i.push(l)), Yg(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += tu(l, t);
  }
  if (a)
    return n;
}
function Zd(e, t, r = "delta-doc") {
  if (e.length < 2 || !NC(e[0]) || !OC(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => wC(n, r)?.getKey());
}
function wC(e, t = "delta-doc") {
  const r = ch();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Di(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Di(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Yt(a) && (i.includes(a) || i.push(a)), Yg(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = tu(a, t);
    if (Br(a) && l > 0 && e >= n && e < n + l || Dt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Di(e, t) {
  return e ? t ? !Li(t.node, e.getKey()) : !0 : !1;
}
function Br(e) {
  return S(e) && !Dt(e);
}
function Dt(e) {
  return ze(e) || ge(e) || we(e) || U(e) || Pe(e) || Tn(e);
}
function on(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function OC(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && PC.includes(t);
}
function NC(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Yg(e, t) {
  return U(e) || Pe(e) ? !0 : t === "apply" && O(e) && Dt(e);
}
function Xg(e) {
  const t = e.getParent();
  return Xt(e) && re(t) && t.getFirstChild() === e;
}
function Uc(e) {
  const t = e.getParent();
  return t !== null && rt(t, Ve) !== null;
}
function RC(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === Gt && t.getChildrenSize() === 1;
}
function qC(e) {
  const t = e.getParent();
  if (!U(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === Lt(t.getCaller());
}
function $C(e) {
  return !ng(e) && tu(e, "delta-doc") === e.getTextContentSize();
}
function tu(e, t) {
  if (Dt(e))
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
    (Vl(e) || Xg(e) || ne(e, ce) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, ce) === "attribute" || Uc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Ml) || RC(e) || qC(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Fc(e, t) {
  const r = { insert: e.__text }, n = ne(e, dn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Qg(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function ef(e) {
  const t = new wi();
  return e.isEmpty() || e.read(() => {
    const r = pe();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Qe(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = IC();
    for (const s of i)
      t.push(s);
  }), t;
}
function ru(e, t) {
  const r = [], n = Hi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...tf(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...tf(c, n.length, n, i, s, o, a));
  return r;
}
function IC() {
  return ru();
}
function tf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return LC(e, a, n), DC(e, a, i, s, o), UC(e, t, r, i, o, s, a), ze(e) && a.push(BC(e)), ge(e) && a.push(VC(e)), we(e) && a.push(WC(e)), Tn(e) && a.push(HC(e)), KC(e, a, s), FC(e, a, s), XC(c, s), a;
}
function LC(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    lt(n) ? t.push(zC(n)) : re(n) ? t.push(jC(n)) : Qe(n) && t.push({ insert: Ls });
  }
  Yt(e) && (r.includes(e) || r.push(e));
}
function DC(e, t, r, n, i) {
  if (!S(e) || Oe(e) || Tn(e))
    return;
  const s = e.getParent();
  if (U(s) && s.getFirstChild() === e)
    return;
  const o = ar(e) !== void 0;
  if (P(e) && (o || Xg(e) || Uc(e) || ng(e)) || ne(e, ce) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (ro(a))
    return;
  const c = e.getPreviousSibling();
  if (U(s) && P(c) && c === s.getFirstChild() && a === Lt(s.getCaller()))
    return;
  const l = D(s) ? s : void 0, d = l?.getFirstChild();
  o && l && P(d) && c === d && a.startsWith(q) && (a = a.slice(1));
  const u = a.startsWith(Ml) || ne(e, ce) === "attribute" || Uc(e), f = !!l && a === Gt && l.getChildrenSize() === 1, p = Ma(e, n), h = p ? r.filter((x) => p.children.includes(x)) : r, m = Fc(e, h);
  if (m.insert = a, p) {
    if (!a || a === q || u)
      return;
    p.contentsOps?.push(m);
  } else
    f || u || t.push(m);
  const y = a !== "" && !f && !(u && l);
  if (r.length > 0 && y)
    for (const x of r)
      i.add(x);
}
function UC(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Di(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = JC(c), d = Ma(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function FC(e, t, r) {
  if (!U(e))
    return;
  const n = GC(e), i = Ma(e, r), s = {
    node: e,
    children: Hi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function KC(e, t, r) {
  if (!Pe(e))
    return;
  const n = YC(e), i = Ma(e, r), s = {
    node: e,
    children: Hi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function vn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function zC(e) {
  const t = { style: Rs, code: e.__code };
  return vn(t, e), { insert: Ls, attributes: { book: t } };
}
function BC(e) {
  const t = { style: zo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), vn(t, e), { insert: { chapter: t } };
}
function jC(e) {
  const t = { style: e.__marker };
  return vn(t, e), { insert: Ls, attributes: { para: t } };
}
function VC(e) {
  const t = { style: Ko, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), vn(t, e), { insert: { verse: t } };
}
function WC(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), vn(t, e), { insert: { milestone: t } };
}
function HC(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function GC(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), vn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, dn);
  return n && (r.attributes = { segment: n }), r;
}
function JC(e) {
  const t = { insert: "" }, r = Qg([e]);
  return r && (t.attributes = { char: r }), t;
}
function YC(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), vn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Ma(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function XC(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Di(t[r].node, e) && t.splice(r, 1);
}
function Qg(e) {
  if (e.length === 0)
    return;
  const t = e.map(QC);
  return t.length === 1 ? t[0] : t;
}
function QC(e) {
  const t = { style: e.__marker }, r = ne(e, jn);
  return r && (t.cid = r), vn(t, e), t;
}
const Zg = 1;
class ir extends js {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Lo, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return Gs;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new ir(r, n, i, s);
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
    return nu().updateFromJSON(t);
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
    return r && ri(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => t_(t, n), (l) => r_(t, n, s, l), () => n_(t, n), () => i_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Lo && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === mh && i ? (
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
      version: Zg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function ZC(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: nu(t, r) };
}
function nu(e, t, r) {
  return He(new ir(e, t, r));
}
function e_(e) {
  return e ? e.classList.contains(ir.getType()) : !1;
}
function Qt(e) {
  return e instanceof ir;
}
function t_(e, t) {
  return e.getEditorState().read(() => {
    const r = H(t);
    if (!U(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function r_(e, t, r, n) {
  e.update(() => {
    const i = H(t);
    if (!U(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = H(r);
    if (!Qt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function n_(e, t) {
  return e.getEditorState().read(() => {
    const r = H(t);
    if (!U(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return ru(r);
  });
}
function i_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of Hi())
      if (U(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
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
], o_ = ["†"], iu = "formatted", em = "unformatted", tm = "paragraph-structure", rm = "standard", nm = "block-verse", a_ = {
  [iu]: "Formatted",
  [em]: "Unformatted",
  [tm]: "Paragraph Structure",
  [rm]: "Standard",
  [nm]: "Block Verse"
};
function Yi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let su, ou;
function c_(e) {
  const t = im(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  su = e, ou = t;
}
c_(iu);
const _O = () => su, Ea = () => ou;
function im(e) {
  let t;
  switch (e ?? su) {
    case iu:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case em:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case tm:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case rm:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case nm:
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
function SO(e) {
  if (!e)
    return;
  const t = rf(e);
  return Object.keys(a_).find((r) => yr(rf(im(r)), t));
}
const l_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function rf(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...l_, ...t };
}
function Nt(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function u_(e) {
  if (e)
    return Ds(e) ? Ot : e.markerMode === "editable" ? bt : Ot;
}
function Ds(e) {
  return e?.verseLayout === "block";
}
function d_(e) {
  const t = [], r = e ?? ou;
  return r && (t.push(`${lx}${r.markerMode}`), r.hasSpacing && t.push(ax), r.isFormattedFont && t.push(cx)), t;
}
const f_ = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Yo(e) {
  return f_.exec(e)?.[1] ?? e;
}
function vs(e, t) {
  const r = e.jsonPath.slice(Yo(e.jsonPath).length);
  return { ...e, jsonPath: `${ct(t)}${r}` };
}
function sm(e) {
  const t = [];
  let r = 0;
  for (const c of pe().getChildren())
    if (!Jn(c))
      if (Yn(c)) {
        const l = r;
        c.getChildren().filter((d) => !Jn(d)).forEach((d, u) => t.push({ node: d, blockPrefix: [l, u], blockBase: 0 })), r += 1;
      } else Qe(c) ? (t.push({ node: c, blockPrefix: [], blockBase: r }), r += wt(c, e).length) : (t.push({ node: c, blockPrefix: [r], blockBase: 0 }), r += 1);
  const n = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = O(c.node) ? wt(c.node, e).length : 0, d = ne(c.node, Kg), u = Qe(c.node), f = d === void 0 || d !== a;
    f && (n.length > 0 && (n[n.length - 1].isSourceEnd = !0), s = i, o = 0, u || (i += 1)), n.push({
      ...c,
      count: l,
      usjPrefix: u ? [] : [s],
      usjBase: u ? s + o : o,
      isSourceStart: f,
      isSourceEnd: !1
    }), u && (i += l), o += l, a = d;
  }
  return n.length > 0 && (n[n.length - 1].isSourceEnd = !0), n;
}
function om(e, t) {
  return e.length >= t.length && t.every((r, n) => e[n] === r);
}
function am(e, t, r, n = !0) {
  const i = e.jsonPath.slice(Yo(e.jsonPath).length);
  let s = Zt(Yo(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!om(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return n && i === "" && O(o.node) && (!o.isSourceStart || Qe(o.node)) ? am(r(o.node), t, r, !1) : vs(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return vs(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function p_(e, t, r) {
  for (const n of t) {
    if (n.usjPrefix.length === 0) {
      if (e < n.usjBase || e >= n.usjBase + n.count)
        continue;
      const o = e - n.usjBase + n.blockBase;
      return n.blockPrefix.length === 0 ? { jsonPath: "$", offset: o } : { jsonPath: ct(n.blockPrefix), offset: o };
    }
    if (!n.isSourceStart || n.usjPrefix[0] !== e)
      continue;
    const [i, s] = n.blockPrefix;
    return s === void 0 ? { jsonPath: "$", offset: i } : { jsonPath: ct([i]), offset: s };
  }
  return { jsonPath: "$", offset: wt(pe(), r).length };
}
function nf(e, t, r) {
  const n = Zt(Yo(e.jsonPath));
  if (n.length === 0)
    return Dn(e) ? p_(e.offset, t, r) : e;
  for (const i of t) {
    if (!om(n, i.usjPrefix))
      continue;
    const s = n.slice(i.usjPrefix.length);
    if (s.length === 0) {
      if (i.usjPrefix.length === 0)
        continue;
      if (Dn(e)) {
        const o = e.offset - i.usjBase;
        if (o < 0 || !i.isSourceEnd && o >= i.count)
          continue;
        return {
          ...vs(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return vs(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return vs(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function au(e, t) {
  let { start: r } = e, n = e.end ?? r;
  if (um()) {
    const l = Nt(t), d = sm(l), u = nf(r, d, l), f = n === r ? u : nf(n, d, l);
    if (!u || !f)
      return;
    r = u, n = f;
  }
  let [i, s] = jr(r, t), [o, a] = jr(n, t);
  if (!i || !o || s === void 0 || a === void 0)
    return;
  [i, s] = lf(i, s), [o, a] = lf(o, a), n !== r && Oo(n) && n.closingMarkerOffset === 0 && ([o, a] = E_(o, a, Nt(t)));
  const c = Ws();
  return c.anchor = md(i.getKey(), s, uf(i)), c.focus = md(o.getKey(), a, uf(o)), c;
}
function cu(e) {
  const t = N();
  if (!t || !A(t))
    return;
  const r = um() ? sm(Nt(e)) : void 0, n = (d, u) => {
    const f = kt(d, u, e);
    return r ? am(f, r, (p) => kt(p, 0, e)) : f;
  }, i = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), s = t.isBackward() ? t.focus.offset : t.anchor.offset, o = n(i, s);
  if (!o)
    return;
  if (t.isCollapsed())
    return { start: o };
  const a = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), c = t.isBackward() ? t.anchor.offset : t.focus.offset, l = n(a, c);
  if (l)
    return { start: o, end: l };
}
const lu = {
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
}, h_ = new Map(Object.values(lu).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), sf = {
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
}, g_ = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(sf).filter((e) => sf[e])
), m_ = /([^\s="|]+)="([^"]*)"/g, y_ = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function cm(e, t) {
  return `${e}['${t}']`;
}
function qi(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function Cs(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function uu(e) {
  const t = pn(e);
  if (!t)
    return;
  const r = zr(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function Kc(e, t, r, n = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(m_)) {
    const o = s[1], a = n(o);
    i.push({
      start: t + s.index,
      base: 0,
      bytes: { kind: "attributeKey", keyName: a }
    }), i.push({
      // Past the key, its `=`, and its opening quote.
      start: t + s.index + o.length + 2,
      base: 0,
      bytes: { kind: "property", property: a }
    });
  }
  return i.length > 0 ? i : r === void 0 ? [] : [
    { start: t, base: 0, bytes: { kind: "property", property: r } }
  ];
}
function b_(e, t) {
  const r = y_.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = h_.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function lm(e) {
  if (Pr(e)) {
    const t = R_(e), r = e.getTextContent();
    if (we(t) && (r === "\\*" || r.startsWith(Ee(t.getMarker()))))
      return t;
  }
  return xn(e) ?? e;
}
function k_(e) {
  const t = e.getTextContentSize(), r = uu(e);
  if (r && r.role !== "value") {
    const i = lu[r.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? Cs(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (r.kind === "milestone")
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? Cs() : qi(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: lm(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      qi(e.getNested() ? 2 : 1)
    ) : Cs()
  };
}
function x_(e) {
  const t = e.getTextContent(), r = t.length, n = uu(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = lm(e);
  if (lt(i)) {
    const s = Ee(i.getMarker()).length;
    if (t.startsWith(Ee(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...qi(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (Pe(i)) {
    const s = xa(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: Cs() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: qi(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? Cs() : qi(t.startsWith("\\+") ? 2 : 1)
  };
}
function T_(e) {
  const t = uu(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = lu[n];
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
        ...Kc(i, 1, D(r) ? Js(r.getMarker()) : void 0)
      ]
    };
  if (n === "milestone" && we(r)) {
    const a = r.getMarker().length;
    return {
      owner: r,
      length: s,
      spans: [
        // A milestone has no text content of its own, so the separator and the `|` both keep
        // counting into its marker name's offset space.
        { start: 0, base: a, bytes: { kind: "property", property: "marker" } },
        ...Kc(i, 2, Ys(r.getMarker()))
      ]
    };
  }
}
function v_(e) {
  const t = e.getParent();
  if (!Pe(t))
    return;
  const r = e.getTextContent(), n = r.length, i = b_(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...Kc(r, 1, void 0, (s) => ST(t.getTag(), s))
      ]
    };
}
function of(e, t) {
  const r = Ee(e);
  if (t.startsWith(r))
    return [
      ...qi(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Xn(e) {
  if (P(e))
    return k_(e);
  if (Pr(e))
    return x_(e);
  if (Tt(e) && e.getTextType() === "attribute")
    return v_(e);
  if (e.getType() === Gs) {
    const n = e.getParent();
    return U(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Oe(e)) {
    const n = of(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!S(e))
    return;
  if (ne(e, ce) === "attribute")
    return T_(e);
  const t = e.getParent();
  if (ve(t) && Gi(t)?.is(e)) {
    const n = of(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = xn(e);
  if (U(r) && Fr(r)?.is(e))
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
function du(e) {
  return Pr(e) || Tt(e) && e.getTextType() === "attribute" || e.getType() === Gs;
}
function C_(e) {
  const t = [];
  if (Oe(e) && t.push(e), O(e)) {
    const r = ve(e) ? Gi(e) : void 0, n = U(e) ? Fr(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (P(i) || Pr(i) || Tt(i) && i.getTextType() === "attribute" || i.getType() === Gs || r?.is(i)) && t.push(i);
  }
  for (const r of g_) {
    const n = zr(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function __(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function af(e, t, r) {
  const n = Xn(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = ct(Tr(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: cm(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return S_(e, r);
  }
}
function cf(e, t) {
  return S(e) && !Xn(e) && !Vo(e, 0, t);
}
function S_(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && ye(o); )
    r = o, o = r.getParent();
  let n = r.getPreviousSibling();
  for (; n && cf(n, t); )
    n = n.getPreviousSibling();
  if (!n)
    return;
  const i = O(n) ? n.getLastDescendant() : n;
  if (i && (S(i) || du(i)))
    return cf(i, t) ? void 0 : In(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return In(s, n.getIndexWithinParent() + 1, t);
}
function vi(e, t, r) {
  for (const n of C_(e)) {
    const i = Xn(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!__(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function jr(e, t) {
  const r = Nt(t);
  if (Dn(e)) {
    const n = Zt(e.jsonPath);
    let i = pe();
    for (let s = 0; s < n.length; s++) {
      if (!i || !O(i))
        return [void 0, void 0];
      const o = wt(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : Iv(o, e.offset) ?? ff(e, r) ?? [void 0, void 0];
      i = o.node;
    }
    return i && O(i) ? jr(fu(i, n, e.offset, r), t) : [void 0, void 0];
  }
  if (wo(e) || Oo(e) || No(e)) {
    const n = ff(e, r);
    if (n)
      return n;
  }
  if (Ro(e) || bl(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = Ro(e) ? vi(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : vi(n, { kind: "attributeMarker", keyName: i }, 0);
    return s || df(n);
  }
  if (No(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = vi(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || df(n);
  }
  if (Gp(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = vi(n, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = O(n) ? n.getFirstChild() : null;
    return s && S(s) ? [s, 0] : Co(n, !1);
  }
  if (Oo(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = vi(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = pu(n);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return Co(n, !0);
    if (!O(n))
      return [void 0, void 0];
    const o = n.getLastChild();
    return o && S(o) ? [o, o.getTextContent().length] : [n, n.getChildrenSize()];
  }
  if (wo(e)) {
    const n = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), i = n?.[1] ?? n?.[2] ?? n?.[3], s = ls(e.jsonPath, r);
    if (!s || i === void 0)
      return [void 0, void 0];
    const o = vi(s, { kind: "property", property: i }, e.propertyOffset);
    if (o)
      return o;
    if (O(s)) {
      const c = s.getFirstChild();
      return c && S(c) ? [c, 0] : [s, 0];
    }
    const a = N_(s, i);
    return Co(s, a !== void 0 && e.propertyOffset >= a.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${bk(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function lf(e, t) {
  if (!du(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !O(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && M_.test(e.getTextContent());
  return [r, s ? n + 1 : n];
}
const M_ = /[ \u00A0]$/;
function E_(e, t, r) {
  let n;
  if (O(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; S(n) && !Xn(n) && !Vo(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = O(n) ? n.getLastDescendant() : n;
  return S(s) ? [s, s.getTextContentSize()] : [e, t];
}
function uf(e) {
  return O(e) ? "element" : "text";
}
function ls(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = Zt(n);
  let s = pe();
  for (const o of i) {
    if (!s || !O(s))
      return;
    const a = wt(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function kt(e, t, r) {
  return In(e, t, Nt(r));
}
function In(e, t, r) {
  const n = af(e, t, r);
  if (n)
    return n;
  if (ye(e)) {
    const i = e.getChildrenSize(), s = e.getChildAtIndex(Math.min(t, i - 1));
    if (S(s)) {
      const a = t >= i ? s.getTextContentSize() : 0;
      return In(s, a, r);
    }
    const o = e.getParent();
    if (o) {
      const a = e.getIndexWithinParent(), c = t >= i ? a + 1 : a;
      return In(o, c, r);
    }
  }
  if (O(e)) {
    const i = e.getChildAtIndex(t);
    if (i && Xn(i)) {
      const l = af(i, 0, r);
      if (l)
        return l;
    }
    if (i && du(i))
      return {
        jsonPath: ct(Tr(e))
      };
    const s = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!i && s && P_(s, e))
      return ic(e, !0, r);
    if (ze(e) || Jn(e))
      return ic(e, t > 0, r);
    const o = Qe(e) && vr(e.getParent()) ? e.getParentOrThrow() : e, a = Tr(o), c = Oi(e, t, r);
    return c.type === "text" ? {
      jsonPath: ct([...a, c.index]),
      offset: c.offset
    } : fu(o, a, c.index, r);
  }
  if (S(e)) {
    const i = Vo(e, t, r);
    if (i)
      return {
        jsonPath: ct([
          ...Tr(i.parent),
          i.index
        ]),
        offset: i.offset
      };
    const s = t > 0, o = s ? e.getNextSibling() : e.getPreviousSibling();
    if (S(o) && (Xn(o) || Vo(o, 0, r)))
      return In(o, s ? 0 : o.getTextContentSize(), r);
  }
  return ic(e, t > 0, r);
}
function P_(e, t) {
  const r = Xn(e);
  return !!r && r.owner.is(t) && r.spans[0]?.bytes.kind === "closingMarker";
}
function ic(e, t, r) {
  const n = e.getParent();
  return n ? In(n, e.getIndexWithinParent() + (t ? 1 : 0), r) : { jsonPath: ct(Tr(e)) };
}
function fu(e, t, r, n) {
  const i = wt(e, n), s = i[r];
  if (!s)
    return A_(e, t, i, n);
  const o = ct([...t, r]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function A_(e, t, r, n) {
  if (vr(e))
    return Xo(e, t, 1, n);
  if (pu(e) !== void 0) {
    const o = r.length - 1, a = r[o];
    return a?.type === "text" ? {
      jsonPath: ct([...t, o]),
      offset: a.length
    } : {
      jsonPath: ct(t),
      closingMarkerOffset: 0
    };
  }
  const i = xn(e), s = t[t.length - 1];
  return w_(e) || !i || s === void 0 ? Xo(e, t, 0, n) : fu(i, t.slice(0, -1), s + 1, n);
}
function Xo(e, t, r, n) {
  const i = ct(t), s = pu(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + r
    };
  if (O(e)) {
    const l = wt(e, n), d = l.length - 1, u = l[d], f = [...t, d];
    if (u?.type === "text")
      return { jsonPath: ct(f), offset: u.length + r };
    if (u)
      return Xo(u.node, f, r, n);
  }
  const o = (l, d) => ({
    jsonPath: cm(i, l),
    propertyOffset: d.length + r
  }), a = (l, d) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: Ge(d).length + r
  });
  if (ge(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (ze(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (lt(e))
    return o("code", e.getCode());
  if (U(e))
    return o("caller", e.getCaller());
  const c = Pe(e) ? e.getMarker() : O_(e);
  return c ? o("marker", c) : { jsonPath: i };
}
function pu(e) {
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : Ge(e.getMarker(), ka(e)).length;
  if (U(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : Ge(e.getMarker()).length;
  if (we(e))
    return Ge("").length;
  if (Pe(e)) {
    const { closing: t } = xa(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function w_(e) {
  const t = xn(e);
  return re(e) || Qe(e) || lt(e) || yg(e) || Pe(e) && e.getTag() === "table:row" || vr(t) || Yn(t);
}
function O_(e) {
  if (re(e) || D(e) || we(e) || yg(e) || nv(e))
    return e.getMarker();
}
function df(e) {
  if (O(e)) {
    const r = e.getLastChild();
    if (r && S(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && O(t) ? [t, 0] : Co(e, !0);
}
function Co(e, t) {
  const r = e.getParent();
  return r ? [r, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function N_(e, t) {
  if (ge(e) || ze(e)) {
    if (t === "number")
      return e.getNumber();
    if (t === "altnumber")
      return e.getAltnumber();
    if (t === "pubnumber")
      return e.getPubnumber();
    if (t === "marker")
      return e.getMarker();
  }
  if (we(e) && t === "marker")
    return e.getMarker();
}
function ff(e, t) {
  const r = pe(), n = Xo(r, [], 1, t);
  return pf(n) === pf(e) ? [r, r.getChildrenSize()] : void 0;
}
function pf(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [r]) => t.localeCompare(r)));
}
function R_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Jn(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Tr(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = xn(r);
    if (!n)
      break;
    const i = $v(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function um() {
  for (let e = pe().getFirstChild(); e; e = e.getNextSibling())
    if (Yn(e))
      return !0;
  return !1;
}
function dm(e, t, r, n, i, s, o) {
  if (!qe.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? au(r, i) : N();
  if (!A(a))
    return;
  const c = I_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (ys(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = fm(e, l, c, i, s, void 0, void 0);
  return $_(d, a, i), d;
}
function hu(e) {
  return e !== "expanded";
}
function q_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!S(r) || !D(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function $_(e, t, r) {
  const n = hu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Sv(t), Fg(t), un(t);
  const i = q_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function Ci(e, t, r) {
  const n = Ur(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ht(e)) : r?.markerMode === "visible" && n.append(Kr("marker", Ee(e)));
  const s = t === "" ? Gt : i ? q + t : t;
  return n.append(ke(s)), n;
}
function I_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Ci("fr", f, n)), !e.isCollapsed()) {
        const p = mf(e);
        p.length > 0 && o.push(Ci("fq", p, n));
      }
      o.push(Ci("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Ci("xo", f, n)), !e.isCollapsed()) {
        const p = mf(e);
        p.length > 0 && o.push(Ci("xq", p, n));
      }
      o.push(Ci("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function fm(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : hu(n?.noteMode), l = Ol(e, t, c);
  s && Mt(l, dn, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = ht(e), d && u.setMode("token"), a || (f = ht(e, "closing"))) : n?.markerMode === "visible" && (u = Kr("marker", Ee(e) + " "), a || (f = Kr("marker", Ge(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = ke(Lt(l.__caller)), d && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => Ca(), m = r.flatMap(L_(h));
    if (t === "")
      l.append(...m);
    else {
      const y = Wl(r);
      let x = () => {
      };
      i?.noteCallerOnClick && (x = i.noteCallerOnClick), p = nu(l.__caller, y, x), l.append(p, h(), ...m);
    }
  }
  return f && l.append(f), l;
}
function hf(e) {
  if (typeof e == "string") {
    const i = H(e);
    return U(i) ? i : void 0;
  }
  const t = Hi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => U(i.node))[e]?.node;
  if (U(n))
    return n;
}
function gf(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (ci(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find(D)?.selectEnd();
}
function L_(e) {
  return (t) => Tt(t) ? [t] : [t, e()];
}
function D_(e) {
  const t = e.getParent();
  return t !== null && rt(t, U) !== null;
}
function mf(e) {
  if (!A(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Yp(e);
  let a = "";
  for (const c of t)
    if (!(U(c) || Qt(c) || D_(c)) && !P(c) && !Tn(c) && ne(c, ce) !== "attribute") {
      if (ge(c)) {
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
const gu = [
  ir,
  Ot,
  ...tC
], U_ = [
  Ji,
  ...gu
], F_ = ti((e, t) => {
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
function K_() {
  const [e, t] = fe(void 0), [r, n] = fe(), i = Z(null), s = de((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Wk(l, c, () => {
      Hk(l, c, {
        placement: "bottom-start",
        middleware: [Gk(), Jk()]
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
function z_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = K_();
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
const B_ = fk(F_);
function pm({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = z_({ isOpen: e, floatingBoxRef: r }), s = Fe(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return qn(
    _(B_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const hm = Wp(void 0);
function mu() {
  const e = Hp(hm);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function j_(e, t) {
  const [r, n] = fe(0), [i, s] = fe(-1), o = Fe(() => e ?? [], [e]), a = {
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
function V_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = j_(t, r);
  return _(hm.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const gm = ti(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = mu(), d = de((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = de((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function W_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = mu(), o = Fe(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Fe(() => {
    const c = o(s);
    return t ? pk.map(c, (l, d) => hk(l) && l.type === gm && l.props.index === void 0 ? gk(l, { index: d }) : l) : c;
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
const H_ = (e, t, r) => _o(e, r).toLowerCase().includes(t.toLowerCase()), yf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", _o = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function G_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? yf(r[0]) : "") : (d = n || (r.length > 0 ? yf(r[0]) : ""), u = (h, m) => H_(h, m, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return u(h, t);
    } catch (m) {
      return console.warn("Error filtering item:", h, m), !1;
    }
  }).sort((h, m) => {
    const y = (M) => (p.has(M) || p.set(M, _o(M, f).toLowerCase()), p.get(M) ?? ""), x = a ? _o(h, f) : y(h), C = a ? _o(m, f) : y(m);
    for (const M of c)
      switch (M) {
        case "exact":
          if (x === l && C !== l)
            return -1;
          if (C === l && x !== l)
            return 1;
          break;
        case "startsWith":
          if (x.startsWith(l) && !C.startsWith(l))
            return -1;
          if (C.startsWith(l) && !x.startsWith(l))
            return 1;
          break;
        case "contains": {
          const R = x.indexOf(l), E = C.indexOf(l);
          if (R !== -1 && E === -1)
            return -1;
          if (E !== -1 && R === -1)
            return 1;
          if (R !== -1 && E !== -1)
            return R - E;
          break;
        }
      }
    return x.localeCompare(C);
  });
}
const sc = {
  Root: V_,
  Options: W_,
  Option: gm
};
function J_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Fe(() => G_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function Y_() {
  const { moveUp: e, moveDown: t, select: r } = mu();
  return Fe(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const X_ = () => {
  const e = Y_(), [t] = le();
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
    return t.registerCommand(Wr, r, Ke);
  }, [t, e]);
};
function Q_() {
  return X_(), null;
}
const Z_ = ["Shift", "Control", "Alt", "Meta"];
function mm(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), d = s !== void 0, [u, f] = fe(""), p = d ? s ?? "" : u, h = J_({ query: p, items: t, filterBy: "name" }), m = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(Wr, (y) => {
    if (d || c?.includes(y.key) || Z_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const C = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((M) => M.slice(0, -1));
      }
    }[y.key];
    return C ? (y.stopPropagation(), y.preventDefault(), C(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((M) => M + y.key), !0) : !1;
  }, Ke), [l, d, p, o, n, c]), Me(sc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => m(y), children: [!d && _("input", { value: p, type: "text", disabled: !0 }), _(Q_, {}), _(sc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((C, M) => Me(sc.Option, { index: M, children: [_("span", { className: "label", children: C.label ?? C.name }), _("span", { className: "description", children: C.description })] }, C.name)) })] });
}
function eS({ trigger: e, items: t }) {
  const [r] = le(), [n, i] = fe(!1), s = de((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = N();
      if (A(l))
        return l;
    });
    a.read(() => {
      const l = N();
      !A(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && _(pm, { isOpen: n, children: ({ placement: o }) => _(mm, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function tS({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Fe(() => {
    if (!t || !e)
      return;
    const i = xr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = xr(o), { action: c } = r(o, a);
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
function _s(e, t) {
  return `${e}:${t}`;
}
function rS(e, t) {
  j(() => {
    if (!e.hasNodes([Xe]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return nt(Sl(e, Xe, (n) => Vn(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], h = a[l]?.[u], m = c[l]?.[u];
          i.addID(l, u, f, p, h, m);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Xe, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = H(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : ye(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Xe.isReservedType(c))
              for (const d of l) {
                let u = t.get(_s(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(_s(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(_s(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const nS = ti(function({ logger: t, viewOptions: r }, n) {
  const [i] = le(), s = Fe(() => /* @__PURE__ */ new Map(), []);
  rS(i, s);
  const o = (a, c, l) => {
    const d = Array.from(l ?? s.get(_s(a, c)) ?? []);
    if (d.length !== 0)
      for (const u of d) {
        const f = H(u);
        ye(f) && (f.deleteID(a, c), f.hasNoIDsForEveryType() && Fo(f));
      }
  };
  return yl(n, () => ({
    setAnnotation(a, c, l, d, u, f, p) {
      if (Xe.isReservedType(c))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const h = au(a, r);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        o(c, l), Nl(h, c, l, d, u, f, p);
      }, { tag: Sc });
    },
    removeAnnotation(a, c) {
      if (Xe.isReservedType(a))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      const l = s.get(_s(a, c));
      l === void 0 || l.size === 0 || i.update(() => {
        o(a, c, l);
      }, { tag: Sc });
    }
  })), null;
});
function iS({ dirtyElements: e, dirtyLeaves: t, prevEditorState: r, tags: n }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  n.has(Xp) && !n.has(yh) || i.ignoreTags.some((s) => n.has(s)) || r.isEmpty();
}
function sS(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new wi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = H(i), o = s !== null && ar(s) !== void 0;
    if (t.size === 1 && S(s) && !o && $C(s)) {
      const a = Jg(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = H(i);
          return new wi([S(u) ? Fc(u) : { insert: "" }]);
        }), l = new wi([Fc(s)]), d = new wi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = ef(r), c = ef(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function oS(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += aS(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), lS(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += uS(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), fS(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function aS(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), cS(t, e.retain, e.attributes, r, n)), e.retain);
}
function cS(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = pe();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Br(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, h = Math.min(s, p);
        if (h > 0) {
          let m = d;
          const y = f > 0, x = h < u - f;
          if (y && x) {
            const [, C] = d.splitText(f);
            [m] = C.splitText(h);
          } else y ? [, m] = d.splitText(f) : x && ([m] = d.splitText(h));
          if (hn(r)) {
            const C = m.getParent();
            if (D(C)) {
              const M = r.char;
              let R;
              Array.isArray(M) ? a >= 0 && a <= M.length - 1 && (R = M[a]) : a === 0 && (R = M);
              const E = R ? Hn(R, C) : !1;
              if (E && Array.isArray(M) && M.length > 1) {
                const L = ke("");
                m.replace(L);
                const T = typeof r.segment == "string" ? r.segment : void 0, $ = Xi(M.slice(1), n, m, T);
                let W = L;
                for (const G of $)
                  W.insertAfter(G), W = G;
                L.remove(), zt(r, m);
              } else if (E)
                zt(r, m);
              else {
                m.remove();
                const L = bf(m, r, n, i);
                if (L && L.length > 0) {
                  let T = C;
                  for (const $ of L)
                    T.insertAfter($), T = $;
                }
              }
            } else {
              const M = ke("");
              m.replace(M);
              const R = bf(m, r, n, i);
              if (R && R.length > 0) {
                let E = M;
                for (const L of R)
                  E.insertAfter(L), E = L;
                M.remove();
              } else
                M.replace(m);
            }
          } else
            zt(r, m);
          s -= h;
        }
      }
      o += u;
    } else if (Dt(d))
      e <= o && o < e + t && s > 0 && (kf(d, r), s -= 1), o += 1;
    else if (D(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (hn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            zc(d, p.style), typeof p.cid == "string" && Mt(d, jn, () => p.cid);
            const h = Be(p, Jo);
            h && Object.keys(h).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...h
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || TS(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && Cc(d), !0;
        }
      }
      u && Cc(d), a -= 1;
    } else if (Yt(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Qe(d))
          kf(d, r);
        else if (yu(r)) {
          const p = km(r.para, n);
          p && d.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (O(d)) {
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
function bf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Xi(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), zt(t, e);
    return;
  }
  const a = {};
  Cm.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), zt(t, e), s;
}
function ym(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Ee(t))) : Tt(r) && r.getTextType() === "marker" && r.setTextContent(Ee(t) + q);
}
function zc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = D(e.getParent()), i = e.getFirstChild();
  Tt(i) && i.getTextType() === "marker" && i.getTextContent() === Ee(r, n) && i.setTextContent(Ee(t, n));
  const s = e.getLastChild();
  Tt(s) && s.getTextType() === "marker" && s.getTextContent() === Ge(r, n) && s.setTextContent(Ge(t, n));
}
function kf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && hn(t)) {
      const i = Bc(n);
      if (zc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Mt(e, jn, () => o);
      }
      const s = Be(i, Jo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (ze(e) || ge(e) || we(e) || U(e) || Pe(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (lt(e) || re(e) || D(e)) && (r === "style" && re(e) ? ym(e, n) : r === "style" && D(e) ? zc(e, n) : r === "code" && lt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Mt(e, dn, () => n));
  }
}
function lS(e, t, r) {
  if (t <= 0)
    return;
  const n = pe();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Br(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Dt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Yt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Yt(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Ht(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ne(p)) {
            let h = i + 1;
            const m = p.getChildren();
            for (const x of m) {
              if (s <= 0)
                break;
              const C = i;
              if (i = h, o(x)) {
                i = C;
                break;
              }
              Br(x) ? h += x.getTextContentSize() : Dt(x) && (h += 1), i = C;
            }
            const y = p.getChildren();
            for (const x of y)
              x.remove(), a.append(x);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Ht(), !0);
        } else re(a) ? a.replace(Ht(), !0) : a.remove();
      }
      i += 1;
    } else if (O(a)) {
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
function uS(e, t, r, n, i) {
  if (t === Ls)
    return xf(e, r, n, i);
  if (t.endsWith(Ls) && !yu(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (hn(r))
        throw new Error("Text + LF should not have char attributes");
      o += Qo(e, s, r, i);
    }
    return o += xf(e + o, r, n, i), o;
  } else return hn(r) ? dS(e, t, r, n, i) : Qo(e, t, r, i);
}
function dS(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ke(t === "" ? Gt : t);
  zt(r, s);
  let o;
  {
    let y = function(x) {
      if (Br(x)) {
        const C = x.getTextContentSize();
        if (e >= m && e < m + C) {
          const M = x.getParent();
          return D(M) && (o = M), !0;
        }
        m += C;
      } else if (Dt(x))
        m += 1;
      else if (D(x)) {
        const C = x.getChildren();
        for (const M of C)
          if (y(M))
            return !0;
      } else if (O(x)) {
        const C = x.getChildren();
        for (const M of C)
          if (y(M))
            return !0;
        Yt(x) && (m += 1);
      }
      return !1;
    };
    const h = pe();
    let m = 0;
    y(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Hn(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Hn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Xi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(D);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Qo(e, t, void 0, i);
  const f = {};
  for (const [h, m] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof m == "string" && (f[h] = m);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const h of d)
    if (!bm(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Qo(e, t, void 0, i));
}
function Qo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = pe();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Br(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = ke(t);
        if (zt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          D(f) && !hn(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Dt(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const u = ke(t);
        zt(r, u);
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
        return zt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Yt(c)) {
      if (!o && e === s) {
        const u = ke(t);
        zt(r, u);
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
        return zt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (O(c)) {
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
    zt(r, c);
    const l = Ht().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function bm(e, t, r) {
  const n = pe();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!O(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Ne(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Ht().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Br(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (Dt(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (Yt(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (Qe(d) && Yt(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (O(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return O(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ne(a) ? Qe(a) && re(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ne(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ne(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function fS(e, t, r, n, i) {
  let s;
  return on("chapter", t) ? s = hS(t.insert.chapter, r) : on("verse", t) ? s = gS(t.insert.verse, r) : on("ms", t) ? s = mS(t.insert.ms) : on("note", t) ? s = xm(t, r, n, i) : on("unknown", t) ? s = Tm(t, r, n, i) : on("unmatched", t) && (s = bS(t.insert.unmatched, r)), s ? bm(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function xf(e, t, r, n) {
  let i;
  yu(t) ? i = km(t.para, r) : xS(t) && (i = pS(t.book)), i ??= Ht();
  const s = i, o = re(s), a = Qe(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Br(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (re(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [m] = h > 0 ? u.splitText(h) : [void 0];
          let y, x = m?.getPreviousSibling();
          for (; x; ) {
            const C = x;
            x = x.getPreviousSibling(), y ? y.insertBefore(C) : s.append(C), y = C;
          }
          return m && s.append(m), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Dt(u))
      c += 1;
    else if (Yt(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Qe(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (re(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && re(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (O(u)) {
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
  return d(pe()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function pS(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Rs || !r || !Jt.isValidBookCode(r))
    return;
  const n = Be(e, vC);
  return ag(r, n);
}
function km(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Be(e, TC), i = qs(r, n);
  if (!Yi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ht(r), Ca());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ee(r) + q;
    i.append(t.hasGutterParaMarkers ? dT(s) : Kr("marker", s));
  }
  return i;
}
function hS(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Be(e, CC);
  let a;
  if (t.markerMode === "editable")
    a = jh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Kl(r, c, n, i, s, o);
  }
  return a;
}
function gS(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Be(e, _C);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Wt(r, n);
    c = Rh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Xl(n, l, i, s, o, a);
  }
  return c;
}
function mS(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Be(e, SC);
  return xh(t, r, n, s, i);
}
function xm(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Be(i.note, MC), d = typeof l?.closed == "string" ? l.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const p = [];
  for (const m of c?.ops ?? [])
    if (typeof m.insert == "string")
      if (hn(m.attributes)) {
        const y = Xi(m.attributes.char, t, ke(m.insert), void 0, vm(m.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(ke(m.insert));
  return fm(s, o, p, t, r, f, d).setCategory(a).setUnknownAttributes(l);
}
function Tm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Be(i, EC), l = Dl(s, o, c), d = a?.ops ?? [];
  d.length > 0 && yS(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && Mt(l, dn, () => u), l;
}
function yS(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (hn(s.attributes)) {
        const o = ke(s.insert), a = Xi(s.attributes.char, t, o, void 0, vm(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ke(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (on("unknown", s)) {
        const o = Tm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (on("note", s)) {
        const o = xm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function bS(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Fl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function vm(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Bc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Xi(e, t, r, n, i, s = !1, o = !1) {
  S(r) && r.getTextContentSize() === 0 && r.setTextContent(Gt);
  const a = () => {
    o && S(r) && r.getTextContent() !== Gt && r.setTextContent(q + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Bc), l = c[0], d = i?.[i.length - 1];
    if (D(d) && Hn(l, d))
      return c.length > 1 ? Xi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => d.append(p)) : r && d.append(r), [];
    a();
    const u = c.reduceRight((f, p, h) => {
      const m = Ur(p.style, Be(p, Jo));
      if (typeof p.cid == "string" && Mt(m, jn, () => p.cid), n && h === c.length - 1 && Mt(m, dn, () => n), f)
        if (D(f)) {
          const y = f.getMarker(), x = [];
          ac(y, x, t, !0), x.forEach((M) => m.append(M)), m.append(f);
          const C = [];
          oc(f, C, t, !0), C.forEach((M) => m.append(M));
        } else
          m.append(f);
      return m;
    }, r);
    return ac(l.style, u, t, s), oc(u, u, t, s), [u];
  } else {
    const c = Bc(e), l = i?.[i.length - 1];
    if (D(l) && Hn(c, l))
      return r && l.append(r), [];
    a();
    const d = Ur(c.style, Be(c, Jo));
    return typeof c.cid == "string" && Mt(d, jn, () => c.cid), n && Mt(d, dn, () => n), r && d.append(r), ac(c.style, d, t, s), oc(d, d, t, s), [d];
  }
}
function oc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && kS(e.getMarker(), t, r, !1, n);
}
function ac(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ht(e, "opening", n) : r?.markerMode === "visible" && (i = Kr("marker", Ee(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function kS(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ht("", "selfClosing") : s = ht(e, "closing", i) : r?.markerMode === "visible" && (s = Kr("marker", n ? Ge("") : Ge(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function xS(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function yu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function hn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function TS(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function zt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Mt(t, dn, () => n);
        continue;
      }
      if (vS(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Cm = [
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
function vS(e) {
  return Cm.includes(e);
}
function CS() {
  const [e] = le();
  return j(() => e.registerCommand(pa, (t) => (_S(t), !1), Fn), [e]), null;
}
function _S(e) {
  if (SS(e.target))
    return;
  const t = N();
  A(t) && MS(t);
}
function Qi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Xt(t))
      r++, t = t.getNextSibling(), S(t) && t.getTextContent() === q && (r++, t = t.getNextSibling());
    else if (ge(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (or(e, r), !0);
}
function SS(e) {
  if (!Qp(e))
    return !1;
  const t = Hs(e);
  if (!fT(t))
    return !1;
  const r = t.getParent();
  return r ? Ne(r) ? Qi(r) : (or(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function MS(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = H(t.key);
  if (!Ne(r))
    return !1;
  const n = r.getFirstChild();
  return !Pr(n) && !ci(n) ? !1 : Qi(r);
}
function ES() {
  const [e] = le();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !PS(r) || !_m() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return nt(
      e.registerCommand(Wr, t, Ke),
      e.registerCommand(vl, t, Ke),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand($r, t, Ir),
      e.registerCommand(Kn, t, Ir),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Cl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Hs(r.target);
        return !n || !Qn(n) ? !1 : (r.preventDefault(), !0);
      }, Ke),
      e.registerCommand(Tk, t, Ke),
      e.registerCommand(vk, t, Ke),
      e.registerCommand(Ck, t, Ke)
    );
  }, [e]), null;
}
function PS(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Qn(e) {
  return rt(e, (t) => Pe(t) || hg(t)) ?? void 0;
}
function _m() {
  const e = N();
  return A(e) ? Qn(e.anchor.getNode()) !== void 0 || Qn(e.focus.getNode()) !== void 0 : !1;
}
function AS(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function wS(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), AS(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function OS(e, t, r, n) {
  if (!VS(t) || wS(e, r))
    return !1;
  const i = r === "up" ? xC(t) : kC(t);
  return i && n.preventDefault(), i;
}
function NS({ viewOptions: e }) {
  const [t] = le();
  return RS(t, e), null;
}
function RS(e, t) {
  j(() => {
    if (!e.hasNodes([Er, Ot, qe]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!A(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = Tf(o), u = FS(i, vf(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return OS(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Tf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return vf(a, n.key) ? l = !c && Sf(i, "next") || !c && $S(i) || BS(i) || !c && s && _f(i, "next") : qS(a, n.key) && (l = !c && Sf(i, "previous") || !c && IS(i) || jS(i, t) || !c && s && _f(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Wr, r, Ke);
  }, [e, t]);
}
function Tf(e) {
  return e.dir || "ltr";
}
function vf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function qS(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function jc(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = ar(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function $S(e) {
  const t = jc(Mg(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (or(t, 0), !0);
}
function IS(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = jc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Cf(n);
  }
  if (t.offset === 0) {
    const n = jc(r);
    return n ? Cf(n) : !1;
  }
  return !1;
}
function Cf(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (S(t))
    return t.select(), !0;
  if (O(t)) {
    const i = t.getLastDescendant();
    return S(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Zo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function LS(e) {
  if (Zo)
    for (const { segment: r } of Zo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function DS(e) {
  if (Zo) {
    let n = 0;
    for (const { index: i } of Zo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Sm(e) {
  for (let t = e; t; t = t.getParent())
    if (O(t) && !t.isInline())
      return t;
}
function Mm(e) {
  return !!e && P(e) && Qn(e) !== void 0;
}
function Ui(e) {
  return S(e) && !e.isToken() && !Mm(e) && e.getTextContentSize() > 0;
}
function Em(e) {
  return fa(e) ? !0 : U(e) ? e.getIsCollapsed() === !0 : S(e) ? (e.isToken() || Mm(e)) && e.getTextContentSize() > 0 : Zp(e) ? !we(e) : !1;
}
function Fi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Pa(e, t, r) {
  for (let n = e; n; ) {
    if (Em(n))
      return n;
    if (O(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Fi(n, t, r);
      continue;
    }
    if (Ui(n))
      return n;
    n = Fi(n, t, r);
  }
}
function bu(e, t, r, n, i) {
  return r === "element" && O(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Fi(e, n, i) : r === "text" && Em(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Fi(e, n, i);
}
function cc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = bu(e.node, e.offset, e.kind, "previous", t), n = Pa(r, "previous", t);
  if (!n)
    return e;
  if (Ui(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function US(e, t) {
  const r = e.getNode(), n = Sm(r);
  if (!n)
    return;
  if (e.type === "text" && Ui(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return cc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = bu(r, e.offset, e.type, t, n), s = Pa(i, t, n);
  if (!s)
    return;
  if (Ui(s)) {
    const c = s.getTextContent(), l = t === "next" ? LS(c) : DS(c);
    return cc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return cc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Pm(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = US(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function _f(e, t) {
  return Pm(e, t, "collapse");
}
function FS(e, t) {
  return Pm(e, t, "extend");
}
function KS(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && Ui(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = bu(n, e.offset, e.type, t, r);
  return Pa(i, t, r) === void 0;
}
function zS(e, t) {
  const r = pe();
  for (let n = e; n; ) {
    const i = Fi(n, t, r), s = i && Pa(i, t, r);
    if (!s)
      return;
    if (n = Qn(s), !n)
      return s;
  }
}
function Sf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Qn(n))
    return !1;
  const i = Sm(n);
  if (!i || !KS(r, t, i))
    return !1;
  const s = Fi(i, t, pe()), o = s && Qn(s);
  if (!o)
    return !1;
  const a = zS(o, t);
  if (!a)
    return !0;
  if (Ui(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Mf(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function BS(e) {
  const t = e.anchor.getNode(), r = Mg(e);
  if (U(r) && !P(r.getFirstChild())) {
    if (Ne(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Ne(i) && Qi(i)) && i.selectStart(), !0;
      }
    } else return Tt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ne(t) && U(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Mf(r), !0;
  }
  const n = r?.getParent();
  if (Tt(r) && U(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Mf(n) : n.selectEnd(), !0;
  }
  return !1;
}
function jS(e, t) {
  const r = vv(e);
  if (to(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (lt(i.getParent()))
    return !0;
  if (U(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!ci(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Ne(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = rt(o, (c) => U(c));
    if (U(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = ar(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (Qt(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function VS(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ge(t) && Zp(t);
}
function WS() {
  const [e] = le();
  return HS(e), null;
}
function HS(e) {
  j(() => {
    if (!e.hasNodes([xe]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return nt(
      e.registerNodeTransform(xe, YS),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(xe, oT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(xe, Gh),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(xe, (t) => Is(zr("char"), t)),
      e.registerNodeTransform(We, XS)
    );
  }, [e]);
}
function lc(e) {
  return e.getChildren().some(P);
}
function GS(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (eo(n)) {
    const i = n.getTextContent();
    i.startsWith(q) && (i === q ? n.remove() : n.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function JS(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function YS(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (lc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ne(e, jn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && Hn({ style: t, cid: r }, i) && yr(n, i.getUnknownAttributes()))
    if (lc(i)) {
      if (GS(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && Hn({ style: t, cid: r }, s) && yr(n, s.getUnknownAttributes()) && (lc(s) ? JS(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function XS(e) {
  const t = e.getParent();
  if (!D(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Gt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Am(e) {
  return e.replaceAll("	", " ");
}
const ku = (e) => {
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
      n.setData(o, Am(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand($r, s);
  });
}, xu = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Am(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand($r, i);
  });
};
function QS() {
  const [e] = le();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !($o ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(ha, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(Kn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? xu(e) : ku(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function ZS({ logger: e }) {
  const [t] = le();
  return j(() => nt(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Wr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Ni),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand($r, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Ni),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Cl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Ni)
  ), [t, e]), null;
}
function eM({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function tM({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(eM, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let rM = 0;
class us {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${rM++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function nM({ options: e } = {}) {
  const [t] = le(), [r, n] = fe(() => !t.isEditable()), [i, s] = fe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = fe(void 0), c = Fe(() => {
    const u = [
      new us("Cut", {
        onSelect: () => {
          t.dispatchCommand(Kn, null);
        },
        isDisabled: r
      }),
      new us("Copy", {
        onSelect: () => {
          t.dispatchCommand(ha, null);
        }
      }),
      new us("Paste", {
        onSelect: () => {
          ku(t);
        },
        isDisabled: r
      }),
      new us("Paste as Plain Text", {
        onSelect: () => {
          xu(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new us(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = de(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  j(() => {
    const u = (f) => {
      const p = f.target;
      t.getRootElement() === p || dg(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
  const d = Z(null);
  return Bs(() => {
    const u = d.current;
    if (!u)
      return;
    const { width: f, height: p } = u.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    u.style.left = `${h}px`, u.style.top = `${m}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Kk.createPortal(_("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: _(tM, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function iM() {
  const [e] = le();
  return j(() => e.registerCommand(Wr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!($o ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Ir), [e]), null;
}
function sM({ isEditable: e }) {
  const [t] = le();
  return Bs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Ef(e) {
  return !!e && Vl(H(e));
}
function wm(e) {
  const [t] = le(), r = Z(void 0), n = de((i) => {
    let s = !1;
    const o = N(), a = A(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = Ef(c);
    c && !l && (r.current = void 0);
    let d;
    if (i) {
      const u = i.getParentOrThrow(), f = i.getIndexWithinParent() + 1, p = va(u, f);
      if (p)
        r.current = p.getKey(), d = p.getKey();
      else {
        const h = bv();
        i.insertAfter(h), r.current = h.getKey(), d = h.getKey(), s = !0;
      }
      or(u, f);
    }
    if (c && l && c !== a && c !== d) {
      const u = H(c);
      S(u) && (u.remove(), s = !0), r.current === c && (r.current = void 0);
    }
    return s;
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = N(), l = A(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && n(a) && zn(As);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (ro(c) || !c.includes(Ii))
        return;
      const l = N(), d = A(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (kv(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(Ii).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = nt(t.registerCommand(Cr, () => (i(), !1), Fn), t.registerCommand(_l, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Ef(a);
      }), c && t.update(() => {
        const l = H(a);
        S(l) && (l.remove(), zn(As));
      }), r.current = void 0, !1;
    }, Fn), t.registerNodeTransform(We, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function oM() {
  const e = N();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!O(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ge(i) || va(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ge(s))
    return i;
}
function aM() {
  return wm(oM), null;
}
function cM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
          f || zn(_k), o.setEditorState(l), o.dispatchCommand(Sk, void 0);
        }, { tag: El });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function lM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return uM(t, n), dM(i, e, r, n), null;
}
function uM(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = s_), r.current !== o && (r.current = o, Pf("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = o_), n.current !== o && (n.current = o, Pf("cross-ref-callers", o, t));
  }, [t, s]);
}
function dM(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([xe, qe, ir]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => bM(s));
    return nt(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(qe, (s) => fM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(xe, pM),
      e.registerNodeTransform(We, hM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(ir, gM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(ir, (s, { prevEditorState: o }) => mM(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Cr, () => yM(e, t, r, n), $t),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function fM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Qt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    S(i) && !P(i) && i.getTextContent() !== Lt(e.getCaller()) && e.insertBefore(i);
  }
}
function pM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => Qt(o));
  if (!D(e) || !U(t) || !n)
    return;
  const i = Wl(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  S(s) ? s.getTextContent() !== q && s.setTextContent(q) : e.insertAfter(ke(q));
}
function hM(e) {
  const t = ar(e), r = t?.getChildren(), n = r?.find((o) => Qt(o));
  if (!S(e) || !U(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && U(i) && e.getTextContent() !== q && (e.setTextContent(q), e.selectEnd()), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Gt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Wl(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function gM(e) {
  if (!Qt(e))
    return;
  const t = e.getNextSibling();
  !S(t) || P(t) ? e.insertAfter(ke(q)) : t.getTextContent() !== q && t.setTextContent(q);
}
function mM(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = H(r), a = o?.getParent();
      return Qt(o) && U(a) && a.getCaller() === Lo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function yM(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = rt(o, (c) => U(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = H(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), ds(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (U(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, ds(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (U(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, ds(e, c, n);
    } else if (!a) {
      const c = rt(o, (l) => U(l));
      if (c && c.getIsCollapsed() && Ne(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, ds(e, l, n);
      }
    }
  }
  if (Ne(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (ci(c) && U(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, ds(e, l, n);
    }
  }
  return !1;
}
function ds(e, t, r) {
  const n = H(t);
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
function bM(e) {
  const t = N();
  if (!A(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (U(i) && S(s)) {
    e.preventDefault();
    const o = Ws();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), un(o);
  }
}
function Pf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (kM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function kM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Aa(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Fr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => S(n) && n.getMode() === "token") ? t : [];
}
function xM(e) {
  const t = e.getParent();
  if (U(t))
    return Aa(t).some((r) => r.is(e)) ? t : void 0;
}
function ea(e) {
  const t = Aa(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function TM(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function vM(e) {
  const t = Mk();
  if (!A(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ea(e);
  const i = TM(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ea(e);
}
function Vc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = xM(t);
  if (r)
    return CM(r, t, e.offset) ? void 0 : r;
}
function CM(e, t, r) {
  const n = Aa(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function _M(e) {
  const t = Aa(e), r = t[t.length - 1];
  S(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : or(e, ea(e));
}
function SM(e = !1) {
  const t = N();
  if (!A(t))
    return !1;
  if (!t.isCollapsed())
    return MM(t.anchor, t.focus);
  const r = Vc(t.anchor);
  if (!r)
    return !1;
  if (!e && vM(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    or(n, r.getIndexWithinParent());
  } else
    _M(r);
  return !0;
}
function MM(e, t) {
  const r = Vc(e), n = Vc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Af(e, r, i), n && Af(t, n, !i), !0;
}
function Af(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), ea(t), "element");
}
function EM() {
  const [e] = le(), t = Z(!1);
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
  }, [e]), j(() => e.registerCommand(Cr, () => (SM(t.current) && e.dispatchCommand(Pl, void 0), !1), Fn), [e]), null;
}
function PM({ onChange: e, viewOptions: t }) {
  const [r] = le();
  return j(() => r.registerCommand(Cr, () => {
    const n = cu(t);
    return e?.(n), !1;
  }, $t), [r, e, t]), null;
}
function AM() {
  const [e] = le();
  return wM(e), null;
}
function wM(e) {
  j(() => {
    if (!e.hasNodes([it]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(it, (t) => OM(t, e));
  }, [e]);
}
function OM(e, t) {
  Gg(t, e.getKey()) && Hg(e.getFirstChild()), !(!re(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = H(e.getKey());
    return re(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Om({ onStateChange: e }) {
  const [t] = le(), [r, n] = fe(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = de(() => {
    const l = N();
    let d;
    if (A(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : rt(u, (x) => {
        const C = x.getParent();
        return C !== null && Ek(C);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Yn(p) && (p = rt(u, re) ?? p);
      const h = p.getKey(), m = r.getElementByKey(h), y = _v(u, f);
      if (y && bC(y) && (d = y.getMarker()), m !== null && (re(p) || lt(p) || to(p))) {
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
  return j(() => t.registerCommand(Cr, (l, d) => (c(), n(d), !1), Ir), [t, c]), j(() => nt(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Pk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Ir), r.registerCommand(Ak, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Ir)), [c, r, e]), null;
}
function NM(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function gn(e) {
  return e ? Ne(e) ? e : rt(e, (r) => Ne(r)) ?? void 0 : void 0;
}
function Nm(e) {
  if (!A(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = gn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Tu(e) {
  return A(e) && e.isCollapsed() && e.anchor.type === "element" || !A(e) && !eh(e) ? !1 : e.getNodes().some((t) => ge(t));
}
function Rm(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = gn(r);
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
function qm(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = gn(r);
  if (!n)
    return !1;
  if (O(r)) {
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
function wf(e, t) {
  return !!Wc(e, t);
}
function Wc(e, t) {
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && O(n)) {
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
function ta(e, t) {
  if (!A(e))
    return !1;
  const r = gn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function uc(e) {
  return Tu(e) || Nm(e);
}
function RM(e, t) {
  if (Tu(e) || Nm(e))
    return !0;
  if (!A(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Rm(e) && ta(e, "backward") || wf(e, "backward");
    case "deleteForward":
      return qm(e) && ta(e, "forward") || wf(e, "forward");
    case "insertText":
      return !1;
  }
}
function qM(e, t) {
  if (!(!A(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Wc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Rm(e) && ta(e, "backward")) {
        const n = gn(e.anchor.getNode());
        if (Ne(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Wc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (qm(e) && ta(e, "forward")) {
        const i = gn(e.anchor.getNode())?.getNextSibling();
        if (Ne(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Of(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return eh(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!A(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!A(e) || e.isCollapsed())
    return !1;
  const r = gn(e.anchor.getNode()), n = gn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function $m(e) {
  if (S(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else O(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function $M(e) {
  const t = e.getPreviousSibling();
  if (!Ne(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? $m(r) : Qi(t) || t.selectStart();
}
function Im(e) {
  return ge(e) || ze(e) ? [] : Ne(e) ? e.getChildren().flatMap(Im) : [e];
}
function IM(e) {
  const t = [];
  for (const r of e) {
    const n = Im(r);
    n.length !== 0 && (Ne(r) && t.length > 0 && t.push(ke(" ")), t.push(...n));
  }
  return t;
}
function Nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function LM(e) {
  if (Array.isArray(e)) return e;
}
function DM(e, t) {
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
function UM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FM(e, t) {
  return LM(e) || DM(e, t) || KM(e, t) || UM();
}
function KM(e, t) {
  if (e) {
    if (typeof e == "string") return Nf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Nf(e, t) : void 0;
  }
}
const Lm = Object.entries, Rf = Object.setPrototypeOf, zM = Object.isFrozen, BM = Object.getPrototypeOf, jM = Object.getOwnPropertyDescriptor;
let ot = Object.freeze, ut = Object.seal, Ei = Object.create, Dm = typeof Reflect < "u" && Reflect, Hc = Dm.apply, Gc = Dm.construct;
ot || (ot = function(t) {
  return t;
});
ut || (ut = function(t) {
  return t;
});
Hc || (Hc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Gc || (Gc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const _i = Ye(Array.prototype.forEach), VM = Ye(Array.prototype.lastIndexOf), qf = Ye(Array.prototype.pop), Si = Ye(Array.prototype.push), WM = Ye(Array.prototype.splice), an = Array.isArray, bs = Ye(String.prototype.toLowerCase), dc = Ye(String.prototype.toString), $f = Ye(String.prototype.match), fs = Ye(String.prototype.replace), If = Ye(String.prototype.indexOf), HM = Ye(String.prototype.trim), GM = Ye(Number.prototype.toString), JM = Ye(Boolean.prototype.toString), Lf = typeof BigInt > "u" ? null : Ye(BigInt.prototype.toString), Df = typeof Symbol > "u" ? null : Ye(Symbol.prototype.toString), tt = Ye(Object.prototype.hasOwnProperty), ps = Ye(Object.prototype.toString), et = Ye(RegExp.prototype.test), On = YM(TypeError);
function Ye(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Hc(e, t, n);
  };
}
function YM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Gc(e, r);
  };
}
function he(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : bs;
  if (Rf && Rf(e, null), !an(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (zM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function XM(e) {
  for (let t = 0; t < e.length; t++)
    tt(e, t) || (e[t] = null);
  return e;
}
function pt(e) {
  const t = Ei(null);
  for (const n of Lm(e)) {
    var r = FM(n, 2);
    const i = r[0], s = r[1];
    tt(e, i) && (an(s) ? t[i] = XM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = pt(s) : t[i] = s);
  }
  return t;
}
function QM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return GM(e);
    case "boolean":
      return JM(e);
    case "bigint":
      return Lf ? Lf(e) : "0";
    case "symbol":
      return Df ? Df(e) : "Symbol()";
    case "undefined":
      return ps(e);
    case "function":
    case "object": {
      if (e === null)
        return ps(e);
      const t = e, r = tr(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : ps(n);
      }
      return ps(e);
    }
    default:
      return ps(e);
  }
}
function tr(e, t) {
  for (; e !== null; ) {
    const n = jM(e, t);
    if (n) {
      if (n.get)
        return Ye(n.get);
      if (typeof n.value == "function")
        return Ye(n.value);
    }
    e = BM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function ZM(e) {
  try {
    return et(e, ""), !0;
  } catch {
    return !1;
  }
}
const Uf = ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), fc = ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pc = ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), eE = ot(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), hc = ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), tE = ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ff = ot(["#text"]), Kf = ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), gc = ot(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), zf = ot(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), yo = ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), rE = ut(/{{[\w\W]*|^[\w\W]*}}/g), nE = ut(/<%[\w\W]*|^[\w\W]*%>/g), iE = ut(/\${[\w\W]*/g), sE = ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), oE = ut(/^aria-[\-\w]+$/), Bf = ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), aE = ut(/^(?:\w+script|data):/i), cE = ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), lE = ut(/^html$/i), uE = ut(/^[a-z][.\w]*(-[.\w]+)+$/i), jf = ut(/<[/\w!]/g), Vf = ut(/<[/\w]/g), dE = ut(/<\/no(script|embed|frames)/i), fE = ut(/\/>/i), qt = {
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
}, pE = function() {
  return typeof window > "u" ? null : window;
}, hE = function(t, r) {
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
}, Wf = function() {
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
}, nn = function(t, r, n, i) {
  return tt(t, r) && an(t[r]) ? he(i.base ? pt(i.base) : {}, t[r], i.transform) : n;
};
function Um() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pE();
  const t = (K) => Um(K);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== qt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = tr(f, "cloneNode"), h = tr(f, "remove"), m = tr(f, "nextSibling"), y = tr(f, "childNodes"), x = tr(f, "parentNode"), C = tr(f, "shadowRoot"), M = tr(f, "attributes"), R = o && o.prototype ? tr(o.prototype, "nodeType") : null, E = o && o.prototype ? tr(o.prototype, "nodeName") : null, L = o && o.prototype ? tr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const K = r.createElement("template");
    K.content && K.content.ownerDocument && (r = K.content.ownerDocument);
  }
  let T, $ = "", W, G = !1, ee = 0;
  const Ae = function() {
    if (ee > 0)
      throw On('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, X = function(g) {
    Ae(), ee++;
    try {
      return T.createHTML(g);
    } finally {
      ee--;
    }
  }, Ie = function(g) {
    Ae(), ee++;
    try {
      return T.createScriptURL(g);
    } finally {
      ee--;
    }
  }, me = function() {
    return G || (W = hE(u, i), G = !0), W;
  }, ur = r, Q = ur.implementation, z = ur.createNodeIterator, se = ur.createDocumentFragment, je = ur.getElementsByTagName, Ze = n.importNode;
  let ue = Wf();
  t.isSupported = typeof Lm == "function" && typeof x == "function" && Q && Q.createHTMLDocument !== void 0;
  const Qr = rE, Cn = nE, Ft = iE, Ua = sE, dr = oE, di = aE, fi = cE, ie = uE;
  let dt = Bf, Re = null;
  const fr = he({}, [...Uf, ...fc, ...pc, ...hc, ...Ff]);
  let Ce = null;
  const _e = he({}, [...Kf, ...gc, ...zf, ...yo]);
  let be = Object.seal(Ei(null, {
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
  })), ft = null, rs = null;
  const vt = Object.seal(Ei(null, {
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
  let lo = !0, pi = !0, Zr = !1, _n = !0, pr = !1, Ct = !0, Rt = !1, Kt = !1, wr = null, en = null, ns = !1, Or = !1, Sn = !1, hi = !1, is = !0, w = !1;
  const F = "user-content-";
  let B = !0, Y = !1, Te = {}, oe = null;
  const Le = he({}, [
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
  let st = null;
  const hr = he({}, ["audio", "video", "img", "source", "image", "track"]);
  let mt = null;
  const er = he({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Nr = "http://www.w3.org/1998/Math/MathML", uo = "http://www.w3.org/2000/svg", gr = "http://www.w3.org/1999/xhtml";
  let gi = gr, Fa = !1, Ka = null;
  const Yb = he({}, [Nr, uo, gr], dc), id = ot(["mi", "mo", "mn", "ms", "mtext"]);
  let za = he({}, id);
  const sd = ot(["annotation-xml"]);
  let Ba = he({}, sd);
  const Xb = he({}, ["title", "style", "font", "a", "script"]);
  let ss = null;
  const Qb = ["application/xhtml+xml", "text/html"], Zb = "text/html";
  let De = null, mi = null;
  const ek = r.createElement("form"), od = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, ja = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (mi && mi === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = pt(g), ss = // eslint-disable-next-line unicorn/prefer-includes
    Qb.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Zb : g.PARSER_MEDIA_TYPE, De = ss === "application/xhtml+xml" ? dc : bs, Re = nn(g, "ALLOWED_TAGS", fr, {
      transform: De
    }), Ce = nn(g, "ALLOWED_ATTR", _e, {
      transform: De
    }), Ka = nn(g, "ALLOWED_NAMESPACES", Yb, {
      transform: dc
    }), mt = nn(g, "ADD_URI_SAFE_ATTR", er, {
      transform: De,
      base: er
    }), st = nn(g, "ADD_DATA_URI_TAGS", hr, {
      transform: De,
      base: hr
    }), oe = nn(g, "FORBID_CONTENTS", Le, {
      transform: De
    }), ft = nn(g, "FORBID_TAGS", pt({}), {
      transform: De
    }), rs = nn(g, "FORBID_ATTR", pt({}), {
      transform: De
    }), Te = tt(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? pt(g.USE_PROFILES) : g.USE_PROFILES : !1, lo = g.ALLOW_ARIA_ATTR !== !1, pi = g.ALLOW_DATA_ATTR !== !1, Zr = g.ALLOW_UNKNOWN_PROTOCOLS || !1, _n = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, pr = g.SAFE_FOR_TEMPLATES || !1, Ct = g.SAFE_FOR_XML !== !1, Rt = g.WHOLE_DOCUMENT || !1, Or = g.RETURN_DOM || !1, Sn = g.RETURN_DOM_FRAGMENT || !1, hi = g.RETURN_TRUSTED_TYPE || !1, ns = g.FORCE_BODY || !1, is = g.SANITIZE_DOM !== !1, w = g.SANITIZE_NAMED_PROPS || !1, B = g.KEEP_CONTENT !== !1, Y = g.IN_PLACE || !1, dt = ZM(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : Bf, gi = typeof g.NAMESPACE == "string" ? g.NAMESPACE : gr, za = tt(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? pt(g.MATHML_TEXT_INTEGRATION_POINTS) : he({}, id), Ba = tt(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? pt(g.HTML_INTEGRATION_POINTS) : he({}, sd);
    const v = tt(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? pt(g.CUSTOM_ELEMENT_HANDLING) : Ei(null);
    if (be = Ei(null), tt(v, "tagNameCheck") && od(v.tagNameCheck) && (be.tagNameCheck = v.tagNameCheck), tt(v, "attributeNameCheck") && od(v.attributeNameCheck) && (be.attributeNameCheck = v.attributeNameCheck), tt(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (be.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), ut(be), pr && (pi = !1), Sn && (Or = !0), Te && (Re = he({}, Ff), Ce = Ei(null), Te.html === !0 && (he(Re, Uf), he(Ce, Kf)), Te.svg === !0 && (he(Re, fc), he(Ce, gc), he(Ce, yo)), Te.svgFilters === !0 && (he(Re, pc), he(Ce, gc), he(Ce, yo)), Te.mathMl === !0 && (he(Re, hc), he(Ce, zf), he(Ce, yo))), vt.tagCheck = null, vt.attributeCheck = null, tt(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? vt.tagCheck = g.ADD_TAGS : an(g.ADD_TAGS) && (Re === fr && (Re = pt(Re)), he(Re, g.ADD_TAGS, De))), tt(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? vt.attributeCheck = g.ADD_ATTR : an(g.ADD_ATTR) && (Ce === _e && (Ce = pt(Ce)), he(Ce, g.ADD_ATTR, De))), tt(g, "ADD_URI_SAFE_ATTR") && an(g.ADD_URI_SAFE_ATTR) && he(mt, g.ADD_URI_SAFE_ATTR, De), tt(g, "FORBID_CONTENTS") && an(g.FORBID_CONTENTS) && (oe === Le && (oe = pt(oe)), he(oe, g.FORBID_CONTENTS, De)), tt(g, "ADD_FORBID_CONTENTS") && an(g.ADD_FORBID_CONTENTS) && (oe === Le && (oe = pt(oe)), he(oe, g.ADD_FORBID_CONTENTS, De)), B && (Re["#text"] = !0), Rt && he(Re, ["html", "head", "body"]), Re.table && (he(Re, ["tbody"]), delete ft.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw On('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw On('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = T;
      T = g.TRUSTED_TYPES_POLICY;
      try {
        $ = X("");
      } catch (V) {
        throw T = I, V;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (T = void 0, $ = "") : (T === void 0 && (T = me()), T && typeof $ == "string" && ($ = X("")));
    ot && ot(g), mi = g;
  }, ad = he({}, [...fc, ...pc, ...eE]), cd = he({}, [...hc, ...tE]), tk = function(g, v, I) {
    return v.namespaceURI === gr ? g === "svg" : v.namespaceURI === Nr ? g === "svg" && (I === "annotation-xml" || za[I]) : !!ad[g];
  }, rk = function(g, v, I) {
    return v.namespaceURI === gr ? g === "math" : v.namespaceURI === uo ? g === "math" && Ba[I] : !!cd[g];
  }, nk = function(g, v, I) {
    return v.namespaceURI === uo && !Ba[I] || v.namespaceURI === Nr && !za[I] ? !1 : !cd[g] && (Xb[g] || !ad[g]);
  }, ik = function(g) {
    let v = x(g);
    (!v || !v.tagName) && (v = {
      namespaceURI: gi,
      tagName: "template"
    });
    const I = bs(g.tagName), V = bs(v.tagName);
    return Ka[g.namespaceURI] ? g.namespaceURI === uo ? tk(I, v, V) : g.namespaceURI === Nr ? rk(I, v, V) : g.namespaceURI === gr ? nk(I, v, V) : !!(ss === "application/xhtml+xml" && Ka[g.namespaceURI]) : !1;
  }, tn = function(g) {
    Si(t.removed, {
      element: g
    });
    try {
      x(g).removeChild(g);
    } catch {
      if (h(g), !x(g))
        throw On("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, fo = function(g) {
    os(g);
    const v = y(g);
    if (v) {
      const V = [];
      _i(v, (J) => {
        Si(V, J);
      }), _i(V, (J) => {
        try {
          h(J);
        } catch {
        }
      });
    }
    const I = M(g);
    if (I)
      for (let V = I.length - 1; V >= 0; --V) {
        const J = I[V], ae = J && J.name;
        if (typeof ae == "string")
          try {
            g.removeAttribute(ae);
          } catch {
          }
      }
  }, Mn = function(g, v) {
    try {
      Si(t.removed, {
        attribute: v.getAttributeNode(g),
        from: v
      });
    } catch {
      Si(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(g), g === "is")
      if (Or || Sn)
        try {
          tn(v);
        } catch {
        }
      else
        try {
          v.setAttribute(g, "");
        } catch {
        }
  }, sk = function(g) {
    const v = M(g);
    if (v)
      for (let I = v.length - 1; I >= 0; --I) {
        const V = v[I], J = V && V.name;
        if (!(typeof J != "string" || Ce[De(J)]))
          try {
            g.removeAttribute(J);
          } catch {
          }
      }
  }, os = function(g) {
    const v = [g];
    for (; v.length > 0; ) {
      const I = v.pop();
      (R ? R(I) : I.nodeType) === qt.element && sk(I);
      const J = y(I);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          v.push(J[ae]);
    }
  }, ok = function(g) {
    if (!Ct)
      return;
    const v = [g];
    for (; v.length > 0; ) {
      const I = v.pop(), V = R ? R(I) : I.nodeType;
      if (V === qt.processingInstruction || V === qt.comment && et(Vf, I.data)) {
        try {
          h(I);
        } catch {
        }
        continue;
      }
      if (V === qt.element) {
        const ae = I, Se = De(E ? E(I) : I.nodeName);
        try {
          ae.hasAttribute && ae.hasAttribute("patchsrc") && ae.removeAttribute("patchsrc"), ae.hasAttribute && ae.hasAttribute("for") && Se !== "label" && Se !== "output" && ae.removeAttribute("for");
        } catch {
        }
      }
      const J = y(I);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          v.push(J[ae]);
    }
  }, ld = function(g) {
    let v = null, I = null;
    if (ns)
      g = "<remove></remove>" + g;
    else {
      const ae = $f(g, /^[\r\n\t ]+/);
      I = ae && ae[0];
    }
    ss === "application/xhtml+xml" && gi === gr && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const V = T ? X(g) : g;
    if (gi === gr)
      try {
        v = new d().parseFromString(V, ss);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = Q.createDocument(gi, "template", null);
      try {
        v.documentElement.innerHTML = Fa ? $ : V;
      } catch {
      }
    }
    const J = v.body || v.documentElement;
    return g && I && J.insertBefore(r.createTextNode(I), J.childNodes[0] || null), gi === gr ? je.call(v, Rt ? "html" : "body")[0] : Rt ? v.documentElement : J;
  }, ud = function(g) {
    const v = L ? L(g) : g.ownerDocument;
    return z.call(
      v || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, po = function(g) {
    return g = fs(g, Qr, " "), g = fs(g, Cn, " "), g = fs(g, Ft, " "), g;
  }, Va = function(g) {
    var v;
    g.normalize();
    const I = L ? L(g) : g.ownerDocument, V = z.call(
      I || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = V.nextNode();
    for (; J; )
      J.data = po(J.data), J = V.nextNode();
    const ae = (v = g.querySelectorAll) === null || v === void 0 ? void 0 : v.call(g, "template");
    ae && _i(ae, (Se) => {
      yi(Se.content) && Va(Se.content);
    });
  }, ho = function(g) {
    const v = E ? E(g) : null;
    return typeof v != "string" || De(v) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, yi = function(g) {
    if (!R || typeof g != "object" || g === null)
      return !1;
    try {
      return R(g) === qt.documentFragment;
    } catch {
      return !1;
    }
  }, as = function(g) {
    if (!R || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof R(g) == "number";
    } catch {
      return !1;
    }
  };
  function mr(K, g, v) {
    K.length !== 0 && _i(K, (I) => {
      I.call(t, g, v, mi);
    });
  }
  const ak = function(g, v) {
    return !!(Ct && g.hasChildNodes() && !as(g.firstElementChild) && et(jf, g.textContent) && et(jf, g.innerHTML) || Ct && g.namespaceURI === gr && v === "style" && as(g.firstElementChild) || g.nodeType === qt.processingInstruction || Ct && g.nodeType === qt.comment && et(Vf, g.data));
  }, ck = function(g, v, I) {
    if (!ft[v] && hd(v) && (be.tagNameCheck instanceof RegExp && et(be.tagNameCheck, v) || be.tagNameCheck instanceof Function && be.tagNameCheck(v)))
      return !1;
    if (B && !oe[v]) {
      const V = x(g), J = y(g);
      if (J && V) {
        const ae = J.length;
        for (let Se = ae - 1; Se >= 0; --Se) {
          const Ue = g === I ? p(J[Se], !0) : J[Se];
          V.insertBefore(Ue, m(g));
        }
      }
    }
    return tn(g), !0;
  }, dd = function(g, v, I, V) {
    return g.length === 0 ? v : v === I || v === V ? pt(v) : v;
  }, fd = function(g, v) {
    if (mr(ue.beforeSanitizeElements, g, null), g !== v && x(g) === null)
      return Y && os(g), !0;
    if (ho(g))
      return tn(g), !0;
    const I = De(E ? E(g) : g.nodeName);
    if (Re = dd(ue.uponSanitizeElement, Re, fr, wr), mr(ue.uponSanitizeElement, g, {
      tagName: I,
      allowedTags: Re
    }), g !== v && x(g) === null)
      return Y && os(g), !0;
    if (ak(g, I))
      return tn(g), !0;
    if (ft[I] || !(vt.tagCheck instanceof Function && vt.tagCheck(I)) && !Re[I]) {
      const J = ck(g, I, v);
      return J === !1 && mr(ue.afterSanitizeElements, g, null), J;
    }
    if ((R ? R(g) : g.nodeType) === qt.element && !ik(g) || (I === "noscript" || I === "noembed" || I === "noframes") && et(dE, g.innerHTML))
      return tn(g), !0;
    if (pr && g.nodeType === qt.text) {
      const J = po(g.textContent);
      g.textContent !== J && (Si(t.removed, {
        element: g.cloneNode()
      }), g.textContent = J);
    }
    return mr(ue.afterSanitizeElements, g, null), !1;
  }, pd = function(g, v, I) {
    if (rs[v] || Ct && v === "patchsrc" || Ct && v === "for" && g !== "label" && g !== "output" || is && (v === "id" || v === "name") && (I in r || I in ek))
      return !1;
    const V = Ce[v] || vt.attributeCheck instanceof Function && vt.attributeCheck(v, g);
    if (!(pi && et(Ua, v))) {
      if (!(lo && et(dr, v))) {
        if (V) {
          if (!mt[v]) {
            if (!et(dt, fs(I, fi, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && g !== "script" && If(I, "data:") === 0 && st[g])) {
                if (!(Zr && !et(di, fs(I, fi, "")))) {
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
          !(hd(g) && (be.tagNameCheck instanceof RegExp && et(be.tagNameCheck, g) || be.tagNameCheck instanceof Function && be.tagNameCheck(g)) && (be.attributeNameCheck instanceof RegExp && et(be.attributeNameCheck, v) || be.attributeNameCheck instanceof Function && be.attributeNameCheck(v, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && be.allowCustomizedBuiltInElements && (be.tagNameCheck instanceof RegExp && et(be.tagNameCheck, I) || be.tagNameCheck instanceof Function && be.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, lk = he({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), hd = function(g) {
    return !lk[bs(g)] && et(ie, g);
  }, uk = function(g, v, I, V) {
    if (T && typeof u == "object" && typeof u.getAttributeType == "function" && !I)
      switch (u.getAttributeType(g, v)) {
        case "TrustedHTML":
          return X(V);
        case "TrustedScriptURL":
          return Ie(V);
      }
    return V;
  }, dk = function(g, v, I, V) {
    try {
      I ? g.setAttributeNS(I, v, V) : g.setAttribute(v, V), ho(g) ? tn(g) : qf(t.removed);
    } catch {
      Mn(v, g);
    }
  }, gd = function(g) {
    mr(ue.beforeSanitizeAttributes, g, null);
    const v = g.attributes;
    if (!v || ho(g))
      return;
    Ce = dd(ue.uponSanitizeAttribute, Ce, _e, en);
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ce,
      forceKeepAttr: void 0
    };
    let V = v.length;
    const J = De(g.nodeName);
    for (; V--; ) {
      const ae = v[V], Se = ae.name, Ue = ae.namespaceURI, _t = ae.value, St = De(Se), Ha = _t;
      let yt = Se === "value" ? Ha : HM(Ha);
      if (I.attrName = St, I.attrValue = yt, I.keepAttr = !0, I.forceKeepAttr = void 0, mr(ue.uponSanitizeAttribute, g, I), yt = I.attrValue, w && (St === "id" || St === "name") && If(yt, F) !== 0 && (Mn(Se, g), yt = F + yt), Ct && et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, yt)) {
        Mn(Se, g);
        continue;
      }
      if (St === "attributename" && $f(yt, "href")) {
        Mn(Se, g);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          Mn(Se, g);
          continue;
        }
        if (!_n && et(fE, yt)) {
          Mn(Se, g);
          continue;
        }
        if (pr && (yt = po(yt)), !pd(J, St, yt)) {
          Mn(Se, g);
          continue;
        }
        yt = uk(J, St, Ue, yt), yt !== Ha && dk(g, Se, Ue, yt);
      }
    }
    mr(ue.afterSanitizeAttributes, g, null);
  }, go = function(g) {
    let v = null;
    const I = ud(g);
    for (mr(ue.beforeSanitizeShadowDOM, g, null); v = I.nextNode(); )
      if (mr(ue.uponSanitizeShadowNode, v, null), fd(v, g), gd(v), yi(v.content) && go(v.content), (R ? R(v) : v.nodeType) === qt.element) {
        const J = C(v);
        yi(J) && (Wa(J), go(J));
      }
    mr(ue.afterSanitizeShadowDOM, g, null);
  }, Wa = function(g) {
    const v = [{
      node: g,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const I = v.pop();
      if (I.shadow) {
        go(I.shadow);
        continue;
      }
      const V = I.node, ae = (R ? R(V) : V.nodeType) === qt.element, Se = y(V);
      if (Se)
        for (let Ue = Se.length - 1; Ue >= 0; --Ue)
          v.push({
            node: Se[Ue],
            shadow: null
          });
      if (ae) {
        const Ue = E ? E(V) : null;
        if (typeof Ue == "string" && De(Ue) === "template") {
          const _t = V.content;
          yi(_t) && v.push({
            node: _t,
            shadow: null
          });
        }
      }
      if (ae) {
        const Ue = C(V);
        yi(Ue) && v.push({
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
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, I = null, V = null, J = null;
    if (Fa = !K, Fa && (K = "<!-->"), typeof K != "string" && !as(K) && (K = QM(K), typeof K != "string"))
      throw On("dirty is not a string, aborting");
    if (!t.isSupported)
      return K;
    Kt ? (Re = wr, Ce = en) : ja(g), (ue.uponSanitizeElement.length > 0 || ue.uponSanitizeAttribute.length > 0) && (Re = pt(Re)), ue.uponSanitizeAttribute.length > 0 && (Ce = pt(Ce)), t.removed = [];
    const ae = Y && typeof K != "string" && as(K);
    if (ae) {
      ok(K);
      const _t = E ? E(K) : K.nodeName;
      if (typeof _t == "string") {
        const St = De(_t);
        if (!Re[St] || ft[St])
          throw fo(K), On("root node is forbidden and cannot be sanitized in-place");
      }
      if (ho(K))
        throw fo(K), On("root node is clobbered and cannot be sanitized in-place");
      try {
        Wa(K);
      } catch (St) {
        throw fo(K), St;
      }
    } else if (as(K))
      v = ld("<!---->"), I = v.ownerDocument.importNode(K, !0), I.nodeType === qt.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? v = I : v.appendChild(I), Wa(I);
    else {
      if (!Or && !pr && !Rt && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return T && hi ? X(K) : K;
      if (v = ld(K), !v)
        return Or ? null : hi ? $ : "";
    }
    v && ns && tn(v.firstChild);
    const Se = ae ? K : v;
    try {
      const _t = ud(Se);
      for (; V = _t.nextNode(); )
        fd(V, Se), gd(V), yi(V.content) && go(V.content);
    } catch (_t) {
      throw ae && (fo(K), _i(t.removed, (St) => {
        St.element && os(St.element);
      })), _t;
    }
    if (ae)
      return _i(t.removed, (_t) => {
        _t.element && os(_t.element);
      }), pr && Va(K), K;
    if (Or) {
      if (pr && Va(v), Sn)
        for (J = se.call(v.ownerDocument); v.firstChild; )
          J.appendChild(v.firstChild);
      else
        J = v;
      return (Ce.shadowroot || Ce.shadowrootmode) && (J = Ze.call(n, J, !0)), J;
    }
    let Ue = Rt ? v.outerHTML : v.innerHTML;
    return Rt && Re["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && et(lE, v.ownerDocument.doctype.name) && (Ue = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + Ue), pr && (Ue = po(Ue)), T && hi ? X(Ue) : Ue;
  }, t.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ja(K), Kt = !0, wr = Re, en = Ce;
  }, t.clearConfig = function() {
    mi = null, Kt = !1, wr = null, en = null, T = W, $ = "";
  }, t.isValidAttribute = function(K, g, v) {
    mi || ja({});
    const I = De(K), V = De(g);
    return pd(I, V, v);
  }, t.addHook = function(K, g) {
    typeof g == "function" && tt(ue, K) && Si(ue[K], g);
  }, t.removeHook = function(K, g) {
    if (tt(ue, K)) {
      if (g !== void 0) {
        const v = VM(ue[K], g);
        return v === -1 ? void 0 : WM(ue[K], v, 1)[0];
      }
      return qf(ue[K]);
    }
  }, t.removeHooks = function(K) {
    tt(ue, K) && (ue[K] = []);
  }, t.removeAllHooks = function() {
    ue = Wf();
  }, t;
}
var gE = Um();
function mE({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = Z(void 0), [n, i] = fe(void 0), s = de((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = NM(p);
      if (!h)
        return !1;
      const m = N();
      return e === "protected" ? m && RM(m, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const m = N(), y = r.current;
      if (y && m && Of(m, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const C = H(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (C) {
            const M = C.getParent(), R = C.getPreviousSibling(), E = C.getNextSibling();
            C.remove(), R ? $m(R) : E && S(E) ? E.select(0, 0) : M?.selectStart();
          }
        } else y.kind === "selection" ? A(m) && m.removeText() : Ne(C) && $M(C);
        return !0;
      }
      if (!m)
        return !1;
      const x = qM(m, p);
      if (x) {
        if (x.kind === "verse") {
          const C = th();
          C.add(x.node.getKey()), un(C);
        } else {
          const C = Ws();
          C.anchor.set(x.node.getKey(), 0, "element"), C.focus.set(x.node.getKey(), x.node.getChildrenSize(), "element"), un(C);
        }
        return s({ key: x.node.getKey(), kind: x.kind, intent: p }), h.preventDefault(), !0;
      }
      if (A(m) && !m.isCollapsed() && Tu(m)) {
        const C = m.getNodes().filter(ge).map((E) => E.getKey()), { anchor: M, focus: R } = m;
        return s({
          kind: "selection",
          intent: p,
          key: C[0],
          anchor: { key: M.key, offset: M.offset, type: M.type },
          focus: { key: R.key, offset: R.offset, type: R.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return !h || !uc(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const m = gE.sanitize(p), y = new DOMParser().parseFromString(m, "text/html"), x = IM(Yk(t, y)), C = N();
      return A(C) && C.insertNodes(x), h.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && uc(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && uc(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Of(N(), p) || s(void 0);
      });
    };
    return nt(t.registerCommand(Wr, o, Ke), t.registerCommand(Kn, c, Ke), t.registerCommand($r, d, Ke), t.registerCommand(wk, c, Ke), t.registerCommand(Cl, u, Ke), t.registerCommand(vl, c, Ke), t.registerUpdateListener(f));
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
const MO = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function yE({ textDirection: e }) {
  const [t] = le();
  return bE(t, e), null;
}
function bE(e, t) {
  j(() => (Hf(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Hf(e, t);
  })), [e, t]);
}
function Hf(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function kE() {
  const [e] = le();
  return xE(e), null;
}
function xE(e) {
  j(() => {
    if (!e.hasNodes([xe, Ot, qe, We, bt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return nt(
      e.registerNodeTransform(We, TE),
      e.registerNodeTransform(We, (t) => vE(t, e)),
      e.registerNodeTransform(bt, Gf),
      e.registerNodeTransform(Ot, Gf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(bt, (t) => {
        Is(zr("va"), t), Is(zr("vp"), t);
      })
    );
  }, [e]);
}
function TE(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || U(r) || D(n) || D(r) || ye(n) || ye(r) || Pe(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Pe(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ne(e, ce) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Ve(n))
    return;
  if (ge(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ge(r) && Ql(e);
}
function vE(e, t) {
  const r = e.getParent();
  !Pe(r) || !e.isAttached() || Gg(t, e.getKey()) && r.insertAfter(e);
}
function Gf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ye(t); )
    t = t.getLastChild();
  (D(t) || S(t) && ye(t.getParent())) && e.insertBefore(ke(" "));
}
function vu(e) {
  if (!U(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Vl(n)) ? void 0 : e;
}
function CE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (O(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function _E() {
  const e = N();
  if (!(!A(e) || !e.isCollapsed()))
    return vu(CE(e.anchor));
}
function SE(e) {
  const t = N();
  let r;
  return A(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Fm(e.target)), r ? vu(rt(r, U)) : void 0;
}
function Fm(e) {
  const t = Ok(e)?.anchorNode;
  if (Qp(t))
    return Hs(t) ?? void 0;
}
function ME(e) {
  if (N())
    return;
  const t = Fm(e);
  return t ? vu(rt(t, U)) : void 0;
}
function EE() {
  const [e] = le(), t = wm(_E);
  return j(() => {
    const r = (n) => {
      t(n) && zn(As);
    };
    return nt(e.registerCommand(Cr, () => {
      const n = ME(e.getRootElement());
      return n && r(n), !1;
    }, Fn), e.registerCommand(pa, (n) => {
      const i = SE(n);
      return i && r(i), !1;
    }, Fn));
  }, [e, t]), null;
}
function PE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = tS({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(eS, { trigger: e, items: i });
}
function AE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = Fe(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(NE, { trigger: e, harness: i }) : _(PE, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const wE = [" ", "*"];
function OE(e, t) {
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
function NE({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = fe(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = de((f, p, h) => {
    const m = p.find((y) => y.kind === "note" && y.marker === f);
    if (m) {
      t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = N();
      A(y) && y.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => nt(r.registerCommand(Wr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), Nk(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = N();
          A(y) && y.insertText(e);
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
  }, Ke), r.registerCommand(rh, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Ni)), [r, e, t, n, a]);
  const c = de(() => i(void 0), []), l = de((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = de((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), u = Fe(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    OE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(pm, { isOpen: !0, children: ({ placement: f }) => _(
    mm,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? wE : void 0 },
    n.session
  ) });
}
function Km(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (r) => q.repeat(r.length));
}
function RE(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
let ra;
function qE(e) {
  e && (ra = e);
}
function zm(e) {
  return Nt(e);
}
function $E(e, t) {
  return e.isEmpty() ? Jp : Bm(e.toJSON(), t);
}
function Bm(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && ba(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Jp;
  if (r.some(eC)) {
    ra?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = jm(r), i = rr(n, t);
  return i ? { type: Dr, version: Lr, content: i } : void 0;
}
function IE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), $e({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function LE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return $e({
    type: Ut.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function DE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Eg(r, a, c), $e({
    type: Ut.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function UE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Eg(t, o, a), $e({
    type: bt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function FE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !zm(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(q) && (t[0] = a.slice(1));
  }
  return $e({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function KE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return $e({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function zE(e, t) {
  const { unknownAttributes: r } = e;
  return $e({ type: fg, ...r, content: t });
}
function BE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return $e({ type: gg, marker: r, ...n, content: t });
}
function jE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return $e({
    type: bg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function VE(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return $e({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Pi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return $e({
    type: t,
    marker: r === "" ? void 0 : r,
    ...$h({ sid: n, eid: i, ...s }, o)
  });
}
function WE(e) {
  return e.text;
}
function HE(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return $e({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function GE(e) {
  const { marker: t } = e;
  return {
    type: jo,
    marker: t === "" ? void 0 : t
  };
}
function Jf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function JE(e, t, r, n, i) {
  const s = sr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = Pi({
      type: s,
      marker: Ri,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = Pi({
      type: s,
      marker: Bn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = Pi({
      type: s,
      marker: Bn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Pi({
      type: s,
      marker: Ri
    });
    i.push(l);
  }
  (!n || !Qs(n)) && t.forEach((l) => {
    const d = Pi({
      type: s,
      marker: Ri,
      eid: l
    });
    i.push(d);
  });
}
function YE(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && Qs(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return Xs(i) && i.markerSyntax === "opening";
}
function XE(e) {
  let t = e;
  for (; Qs(t); ) t = t.children[0];
  return t;
}
function QE(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!Xs(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = XE(e[r]);
  if (Gn(n) && n.text === Lt(t))
    return n;
}
function rr(e, t, r, n = !1, i) {
  const s = [];
  let o, a = [];
  return e.forEach((c, l) => {
    const d = c, u = c, f = c, p = c, h = c, m = c, y = c, x = c;
    switch (c.type) {
      case Jt.getType():
        s.push(
          IE(
            d,
            rr(d.children, t)
          )
        );
        break;
      case Er.getType():
        s.push(LE(c));
        break;
      case Ut.getType():
        s.push(
          DE(
            u,
            rr(u.children, t)
          )
        );
        break;
      case Ot.getType():
      case bt.getType():
        s.push(UE(c));
        break;
      case xe.getType():
        s.push(
          FE(
            f,
            rr(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case it.getType():
        s.push(
          KE(
            p,
            rr(p.children, t)
          )
        );
        break;
      case ii.getType():
        s.push(
          zE(
            c,
            rr(c.children, t)
          )
        );
        break;
      case si.getType():
        s.push(
          BE(
            c,
            rr(c.children, t)
          )
        );
        break;
      case oi.getType():
        s.push(
          jE(
            c,
            rr(c.children, t)
          )
        );
        break;
      case qe.getType():
        s.push(
          VE(
            h,
            rr(
              h.children,
              t,
              QE(h.children, h.caller)
            )
          )
        );
        break;
      case Gr.getType():
      case Jr.getType():
      case ir.getType():
      case nh.getType():
      case Sr.getType():
        break;
      case Xe.getType():
        if (o = rr(
          y.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const C = y.typedIDs[cn];
          if (C) {
            const M = e[l + 1];
            JE(o, C, a, M, s), a = M && Qs(M) ? C : [];
          } else {
            const M = o.shift();
            M && (typeof M == "string" ? Jf(s, M) : s.push(M)), o.length > 0 && s.push(...o);
          }
        }
        break;
      case sr.getType():
        s.push(Pi(c));
        break;
      case We.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !ro(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== q && !m.text.startsWith(Ml) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[Un]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let C = WE(m);
          zm(t) && (YE(e, l, i, n) && C.startsWith(q) && (C = C.slice(1)), C = RE(mv(C))), Jf(s, C);
        }
        break;
      case ni.getType():
        s.push(
          HE(
            x,
            rr(x.children, t)
          )
        );
        break;
      case Xr.getType():
        s.push(GE(c));
        break;
      case Ji.getType():
        ra?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        ra?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function jm(e) {
  const t = e.findIndex((r) => ba(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = jm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const bo = {
  initialize: qE,
  deserializeEditorState: $E
}, ZE = /^sd\d*$/, e1 = /* @__PURE__ */ new Set([
  ...Object.entries(Mc).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !ZE.test(e)
  ).map(([e]) => e),
  "qa"
]);
function t1(e, t) {
  const r = [];
  let n;
  for (const [i, s] of e.entries()) {
    if (cg(s) || Cg(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (!Cv(s)) {
      t && na(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(s) : r.push(s);
      continue;
    }
    if (zl(s) && e1.has(s.marker) && !na(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (s.children.length === 0) {
      n ? n.children.push(s) : r.push(s);
      continue;
    }
    Vm(s.children, t).forEach((o) => {
      const a = r1(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        n ? n.children.push(a) : r.push(a);
        return;
      }
      n = n1(o.verse), r.push(n), a && n.children.push(a);
    });
  }
  return r;
}
function Vm(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Wm(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Qs(i)) {
      const s = Vm(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Yf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Yf(i, c.nodes)] });
      });
      return;
    }
    t && na(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Yf(e, t) {
  return { ...e, children: t };
}
function Wm(e) {
  return Vg(e) && e.number !== "";
}
function na(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Wm(r) || na(r)) : !1;
}
function r1(e, t, r) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [Un]: { ...e[Un], [Kg.key]: r }
    };
}
function n1(e) {
  return {
    type: Wo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: zg
  };
}
const Xf = Gm([]), i1 = {
  type: nh.getType(),
  version: 1
};
let Cu = [], te, Zn, Hm, At;
function s1(e, t) {
  Cu = [], c1(e), l1(t);
}
function o1(e = 0) {
}
function a1(e, t) {
  te = t ?? Ea();
  let r;
  return e ? (e.type !== Dr && At?.warn(`This USJ type '${e.type}' didn't match the expected type '${Dr}'.`), e.version !== Lr && At?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${Lr}'.`
  ), e.content.length > 0 ? (r = Qc(sn(e.content)), Ds(te) && (r = t1(r, At))) : r = [Xf]) : r = [Xf], Hm?.(Cu), {
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
function c1(e) {
  e && (Zn = e), e?.addMissingComments && (Hm = e.addMissingComments);
}
function l1(e) {
  e && (At = e);
}
function _u() {
  return Nt(te);
}
function u1(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function d1(e) {
  let { marker: t } = e;
  t !== Rs && At?.warn(`Unexpected book marker '${t}'!`), t = t ?? Rs;
  const { code: r } = e;
  (!r || !Jt.isValidBookCode(r)) && At?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  te?.markerMode === "editable" || te?.markerMode === "visible" ? n.push(
    Et("marker", Ee(t) + " " + r + q)
  ) : te?.hasGutterParaMarkers && n.push(Et("marker", Ee(t) + q, !0));
  const i = u1(e.content);
  i && n.push(gt(_u() ? Km(i) : i));
  const s = Be(e, VT);
  return $e({
    type: Jt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: og
  });
}
function f1(e) {
  let { marker: t } = e;
  t !== zo && At?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? zo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Be(e, iT);
  let a;
  te?.markerMode === "visible" && (a = !0);
  const c = [
    gt(Wt(t, r) ?? "")
  ];
  return te?.markerMode === "editable" && A1(i, s, c), te?.markerMode === "editable" ? $e({
    type: Ut.getType(),
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
    version: Bh
  }) : $e({
    type: Er.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: lg
  });
}
function p1(e) {
  let { marker: t } = e;
  t !== Ko && At?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ko;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (u_(te) ?? Ot).getType(), c = te?.markerMode === "editable" ? Nh : jg;
  let l, d;
  te?.markerMode === "editable" ? l = Wt(t, r) : te?.markerMode === "visible" && (d = !0);
  const u = Be(e, Zx);
  return $e({
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
function h1(e, t = [], r = !1) {
  let { marker: n } = e;
  xe.isValidMarker(n, Zn?.extraValidMarkers) || At?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (te?.markerMode === "editable") {
    const [a] = t;
    Gn(a) ? a.text = q + a.text : a && t.unshift(gt(q));
  }
  t.length === 0 && t.push(gt(Gt)), Jc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Be(e, Jx);
  return s || S1(n, o, i), s || Yc(e.marker ?? "", i, !1, r), $e({
    type: xe.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Oh
  });
}
function Gm(e) {
  return {
    type: fn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Vh
  };
}
function g1(e, t = []) {
  let { marker: r } = e;
  it.isValidMarker(r, Zn?.extraValidMarkers) || At?.warn(`Unexpected para marker '${r}'!`), r = r ?? kr;
  const n = [];
  if (Yi(te) && (te?.markerMode === "editable" ? n.push(
    xt(r),
    gt(q, Mr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && n.push(
    Et(
      "marker",
      Ee(r) + q,
      te?.hasGutterParaMarkers
    )
  )), n.push(...t), _u()) {
    const s = n.find(
      (o) => !Xs(o) && !(Gn(o) && o.text === q)
    );
    Gn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = Be(e, sv);
  return $e({
    type: it.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: xg
  });
}
function Su() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function m1(e, t = []) {
  const r = Be(e, JT);
  return $e({
    ...Su(),
    type: ii.getType(),
    unknownAttributes: r,
    children: t,
    version: pg
  });
}
function y1(e, t = []) {
  const r = Be(e, QT), n = e.marker ?? qc, i = [];
  return te?.markerMode === "editable" ? i.push(
    xt(n),
    gt(q, Mr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && i.push(
    Et(
      "marker",
      Ee(n) + q,
      te?.hasGutterParaMarkers
    )
  ), i.push(...t), $e({
    ...Su(),
    type: si.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: mg
  });
}
function b1(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? $c;
  te?.markerMode === "editable" ? s.push(
    xt(o),
    gt(q, Mr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && s.push(
    Et(
      "marker",
      Ee(o) + q,
      te?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Be(
    e,
    ev
  );
  return $e({
    ...Su(),
    type: oi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: kg
  });
}
function k1(e, t) {
  const r = Av(t);
  let n = () => {
  };
  return Zn?.noteCallerOnClick && (n = Zn.noteCallerOnClick), $e({
    type: ir.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Zg
  });
}
function x1(e, t) {
  let { marker: r } = e;
  qe.isValidMarker(r, Zn?.extraValidMarkers) || At?.warn(`Unexpected note marker '${r}'!`), r = r ?? wl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : hu(te?.noteMode), a = Be(e, gx), c = te?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  te?.markerMode === "editable" ? (l = xt(r, "opening", !1, c), s || (d = xt(r, "closing"))) : te?.markerMode === "visible" && (l = Et("marker", Ee(r) + " "), s || (d = Et("marker", Ge(r))));
  const u = [];
  let f;
  if (l && u.push(l), te?.markerMode === "editable" && !o)
    f = gt(Lt(i), void 0, c), u.push(f), P1(n, u), u.push(...t);
  else {
    const p = gt(q, Mr, "token");
    f = k1(i, t), u.push(f, p, ...t.flatMap(T1(p)));
  }
  return d && u.push(d), $e({
    type: qe.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: Th
  });
}
function T1(e) {
  return (t) => Xh(t) ? [t] : [t, e];
}
function v1(e) {
  let { marker: t } = e;
  (!t || !sr.isValidMarker(t, Zn?.extraValidMarkers)) && At?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Be(e, Al), s = Ih(e);
  return $e({
    type: sr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: bh
  });
}
function Qf(e, t = []) {
  return {
    type: Xe.getType(),
    typedIDs: { [cn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function C1(e, t) {
  const { marker: r } = e, n = e.type, i = Be(e, hT), s = [];
  if (te?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = xa(
      n,
      r,
      i
    );
    o && s.push(Et("marker", o)), a && s.push(Et("attribute", a)), s.push(...t), c && s.push(Et("attribute", c)), l && s.push(Et("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Gn(o) && (o.mode = "token");
  }), $e({
    type: ni.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Qh
  });
}
function _1(e) {
  return {
    type: Xr.getType(),
    marker: e,
    text: Ts(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: te?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: ig
  };
}
function xt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Sr.getType(),
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
function gt(e, t = void 0, r = "normal") {
  const n = {
    type: We.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Un] = { textType: t }), n;
}
function Et(e, t, r = !1) {
  const n = {
    type: Jr.getType(),
    text: t,
    textType: e,
    version: Yh
  };
  return r && (n[Un] = { [Ll.key]: !0 }), n;
}
function Us(e, t) {
  return {
    type: Gr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Eh
  };
}
function Jc(e, t, r = !1) {
  te?.markerMode === "editable" ? t.push(xt(e, "opening", r)) : te?.markerMode === "visible" && t.push(Et("marker", Ee(e, r)));
}
function Yc(e, t, r = !1, n = !1) {
  te?.markerMode === "editable" ? r ? t.push(xt("", "selfClosing")) : t.push(xt(e, "closing", n)) : te?.markerMode === "visible" && t.push(
    Et(
      "marker",
      r ? Ge("") : Ge(e, n)
    )
  );
}
function S1(e, t, r) {
  if (te?.markerMode !== "editable" || !t) return;
  const n = br(t, Js(e));
  n && r.push(gt(n, "attribute"));
}
function Zf(e, t) {
  if (e.type !== "ms" || te?.markerMode !== "editable" && te?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Be(e, Al), o = Lh(
    n,
    i,
    s,
    Ih(e)
  ), a = br(o, Ys(r ?? ""));
  if (!a) return;
  const c = q + a;
  te?.markerMode === "editable" ? t.push(gt(c, "attribute")) : t.push(Et("attribute", c));
}
function M1(e, t) {
  const r = e.marker ?? "";
  if (te?.markerMode === "editable") {
    const n = [];
    Jc(r, n), Zf(e, n), Yc(r, n, !0), t.push(Us("milestone", n));
  } else
    Jc(r, t), Zf(e, t), Yc(r, t, !0);
}
function ep(e, t, r) {
  t !== void 0 && r.push(
    Us(e, [
      xt(e, "opening"),
      gt(q + t, "attribute"),
      xt(e, "closing")
    ])
  );
}
function E1(e, t) {
  te?.markerMode === "editable" && (ep("va", e.altnumber, t), ep("vp", e.pubnumber, t));
}
function P1(e, t) {
  e !== void 0 && t.push(
    Us("cat", [
      xt("cat", "opening"),
      gt(q + e, "attribute"),
      xt("cat", "closing")
    ])
  );
}
function A1(e, t, r) {
  e !== void 0 && r.push(
    Us("ca", [
      xt("ca", "opening"),
      gt(q + e, "attribute"),
      xt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Us("cp", [
      xt("cp", "opening"),
      gt(q + t, "attribute")
    ])
  );
}
function tp(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function w1(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function rp(e, t) {
  t.marker === Bn && t.sid !== void 0 && e.push(t.sid), t.marker === Ri && t.eid !== void 0 && w1(e, t.eid);
}
function Xc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Qf(o, [...n])] : o, c = e[i];
  rp(n, c);
  const l = Xc(
    e.slice(i + 1, s),
    tp(t, i + 1),
    c.marker === Bn,
    n
  ), d = Qf(l, [...n]), u = e[s];
  rp(n, u);
  const f = Xc(
    e.slice(s + 1),
    tp(t, s + 1),
    u.marker === Bn,
    n
  );
  return [...a, d, ...f];
}
function sn(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(gt(_u() ? Km(i) : i));
    else if (!i.type)
      At?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Jt.getType():
          n.push(d1(i));
          break;
        case Ut.getType():
          n.push(f1(i));
          break;
        case bt.getType():
          te?.hasSpacing || n.push(i1), n.push(p1(i)), E1(i, n);
          break;
        case xe.getType():
          n.push(
            h1(i, sn(i.content, !0), t)
          );
          break;
        case it.getType():
          n.push(g1(i, sn(i.content)));
          break;
        case qe.getType():
          n.push(x1(i, sn(i.content)));
          break;
        case sr.getType():
          kh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Cu?.push(i.sid)), n.push(v1(i)), M1(i, n);
          break;
        case Xr.getType():
          n.push(_1(i.marker ?? ""));
          break;
        case fg:
          n.push(m1(i, sn(i.content)));
          break;
        case gg:
          n.push(y1(i, sn(i.content)));
          break;
        case bg:
          n.push(b1(i, sn(i.content)));
          break;
        default:
          At?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(C1(i, sn(i.content)));
      }
  }), Xc(n, r);
}
function Qc(e) {
  const t = e.findIndex(
    (n) => cg(n) || Cg(n) || zl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    XT(n)
  );
  if (t >= 0) {
    const n = Qc(e.slice(0, t)), i = e[t], s = Qc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Vg(n)))
    return [Gm(e)];
  return e;
}
const mn = {
  initialize: s1,
  reset: o1,
  serializeEditorState: a1
};
function Jm(e) {
  if (e && !P(e)) {
    if (S(e)) return e;
    if (O(e))
      for (const t of e.getChildren()) {
        const r = Jm(t);
        if (r) return r;
      }
  }
}
function O1() {
  const e = N();
  if (!A(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((S(t) && !P(t) ? Wn(t) : void 0) && S(t)) {
      const i = ke(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      $i(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Jm(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return S(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Ym(e)) {
    if (!Wn(t)) continue;
    $i(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(q) && r.setTextContent(n.slice(q.length));
  }
  return !0;
}
function Ym(e) {
  const [t, r] = Yp(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!S(a) || P(a) || ne(a, ce) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function N1() {
  const e = N();
  if (!A(e)) return !1;
  const t = e.focus.getNode();
  return Wn(t) ? Ne(Bl(t)) : !1;
}
function Xm() {
  let e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !Yl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = N(), !A(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!S(t) || P(t) || !Wn(t)) return !1;
  const r = Bl(t);
  if (!Ne(r)) return !1;
  const n = ke(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  $i(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return D(a) ? jl(a) : o.select(0, 0), !0;
}
const Qm = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${_g(pe().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = Hl(e), r = eu(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Ov(0, o);
        const a = pC(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Og(c) && Gl(parseInt(n, 10), c);
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
function Zc(e, t) {
  return qe.isValidMarker(e, t) || !!Qm[e] || it.isValidMarker(e, t) || xe.isValidMarker(e, t);
}
function R1(e, t) {
  return xe.isNoteContentMarker(e) ? !1 : xe.isValidMarker(e, t);
}
function Zm(e, t, r, n, i, s) {
  const o = dm(
    e,
    void 0,
    void 0,
    t,
    n ?? Ea(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function el(e, t, r, n, i, s, o) {
  if (qe.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = Zm(
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
  const a = U1(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = N();
      A(d) && (Fg(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = Jd(u, mn, r), h = Ja(p);
      if (A(d)) {
        const m = d.anchor.getNode(), y = m.getParent(), x = Wn(m), C = d.anchor.key === d.focus.key;
        if (D(h) && x && C && !mc(h, o))
          I1(
            d,
            h,
            m,
            r?.markerMode === "editable"
          );
        else if (D(h) && !C && !mc(h, o) && L1(d))
          D1(d, h, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          F1(
            d,
            () => Ja(p)
          );
        else if (O(h) && !h.isInline()) {
          const M = d.insertParagraph();
          if (M) {
            const R = M.getChildren();
            h.append(...R), M.replace(h), Ne(h) && Qi(h) || h.selectStart();
          }
        } else if (D(h) && S(m) && !P(m) && D(m.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        mc(h, o)) {
          const M = m.getParent();
          if (D(M)) {
            const R = d.anchor.offset;
            if (R === 0) m.insertBefore(h);
            else if (R >= m.getTextContentSize()) m.insertAfter(h);
            else {
              const [L] = m.splitText(R);
              L.insertAfter(h);
            }
            h.getChildren().forEach((L) => {
              P(L) && L.setNested(!0);
            });
            const E = h.getChildren().find((L) => S(L) && !P(L));
            E && S(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (S(m) && !P(m) && d.isCollapsed() && (U(y) || D(y) && U(y.getParent()))) {
          const M = D(y) ? y : void 0, R = M ? q1(m, d.anchor.offset) : [];
          let L = (M ?? m).insertAfter(h);
          if (Pr(h)) {
            const T = {
              ...r || Ea(),
              markerMode: "hidden"
            }, $ = Jd(
              u,
              mn,
              T
            ), W = Ja($);
            L = L.insertAfter(W);
          }
          if (R.length > 0 && M) {
            const T = ia(M).append(...R);
            L.insertAfter(T), M.isEmpty() && M.remove();
          } else S(L.getNextSibling()) || L.insertAfter(ke(q));
          O(L) && L.selectEnd();
        } else if (d.insertNodes([h]), Y1(h), f) {
          const M = th();
          M.add(h.getKey()), un(M);
        } else if (D(h)) {
          const M = h.getChildren().find((R) => S(R) && !P(R));
          M && S(M) ? M.select(
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
function q1(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function mc(e, t) {
  return ((t ?? Ho).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function $1(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(ht(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function I1(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && D(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !S(r)) {
    const o = e.anchor.offset;
    if (S(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else S(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = Ki(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if ($i(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), S(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => S(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => S(o) && !P(o));
  S(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function L1(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || D(n)) continue;
    if (!S(n) || n.getType() !== We.getType() || ne(n, ce) === "attribute") return !1;
    const i = Bl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Wn(n) && (r = !0);
  }
  return r;
}
function D1(e, t, r) {
  const n = Ym(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Wn(a)) return;
    $i(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => S(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function U1(e, t) {
  let r = Qm[e];
  return r || (it.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: it.getType(), marker: e, content: [] }] })
  } : xe.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: xe.getType(), marker: e };
      return (xe.isValidFootnoteMarker(e) || xe.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function F1(e, t) {
  const r = e.getNodes(), [n, i] = Ki(e);
  let s;
  r.forEach((o, a) => {
    if (O(s) && s.isParentOf(o))
      return;
    const c = ey(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((u) => P(u) && u.getMarkerSyntax() === "opening") && $1(s, D(s.getParent()))), z1(c, s, l);
  }), (S(s) || O(s)) && s.selectEnd();
}
function Ki(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Mu(e) {
  return ye(e) || U(e) || U(e.getParent());
}
function ey(e, t, r, n, i) {
  if (!Mu(e)) {
    if (S(e))
      return K1(e, t, r, n, i);
    if (O(e) && e.isInline())
      return e;
  }
}
function K1(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function z1(e, t, r) {
  if (S(t)) {
    const n = tl(e, t);
    t.setTextContent(n), e.remove();
  } else if (O(t)) {
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
    tl(e, t), r && D(t) && t.getChildren().some((s) => P(s)) && S(e) && !P(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function tl(e, t) {
  let r = e.getTextContent();
  if (S(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Ql(n), S(n) || t.insertBefore(ke(" "));
  }
  return r;
}
function ty(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = ei(d, t);
    if (!f) return !1;
    const p = S(d) ? d.getTextContentSize() : 0;
    if (np(f, r), S(d) && d.isAttached()) {
      const h = d.getTextContentSize(), m = Math.max(p - h, 0), y = Math.max(0, Math.min(u - m, h)), x = N();
      A(x) && x.setTextNodeRange(d, y, d, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Ki(e);
  if (!Pu(n, t, s, o)) return !1;
  const a = Eu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = ei(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = sy(u, a);
    f && (np(f, r), l = !0);
  }), oy(a, i), l;
}
function np(e, t) {
  e.getChildren().forEach((n) => {
    Xt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Gt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    S(n) && i.startsWith(q) && n.setTextContent(i.slice(q.length));
  }), Cc(e);
}
function Eu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = ey(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    S(o) && n.push(o);
  }), n;
}
function ei(e, t) {
  let r = e, n;
  for (; r && !Ne(r); ) {
    if (U(r)) return;
    !n && D(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function ry(e) {
  const t = rt(
    e,
    (r) => U(r) || Ne(r)
  );
  return U(t);
}
function ny(e) {
  return e.filter(
    (t) => !Mu(t) && (S(t) || O(t) && t.isInline())
  );
}
function B1(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!S(i) || Mu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function j1(e, t, r) {
  return e.getChildren().some(
    (n) => O(n) && t.some((i) => n.isParentOf(i)) && !iy(n, r)
  );
}
function Pu(e, t, r, n, i) {
  const s = ny(e), o = B1(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ei(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !j1(l, s, o);
  });
}
function iy(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Xt(r));
}
function sy(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (O(d) && t.some((u) => d.isParentOf(u))) {
      if (!iy(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Xt(n[s - 1]) && (s -= 1), o < n.length - 1 && Xt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(ia(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(ia(e).append(...c)), e;
}
function ia(e) {
  return Rk(e);
}
function oy(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!A(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function V1(e, t, r) {
  if (e.isCollapsed()) {
    const l = ei(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Ld(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Ki(e);
  if (!Pu(n, r, i, s, t)) return !1;
  const o = Eu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = ei(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = sy(d, o);
    u && (Ld(u, t), c = !0);
  }), c;
}
function W1(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = Ki(e);
  if (!!!i?.some(
    (y) => Pu(s, y, o, a)
  ) && !H1(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const x = N();
    A(x) && ty(x, y, n) && (l = !0);
  });
  const d = N();
  if (!A(d)) return l;
  const u = d.isBackward(), [f, p] = Ki(d), h = Eu(
    d.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const m = h.filter(
    (y) => !ry(y) && !ei(y, t)
  );
  return m.length > 0 && (G1(m).forEach((y) => J1(y, t)), l = !0), oy(h, u), l;
}
function H1(e, t) {
  return ny(e).some(
    (r) => !ry(r) && !ei(r, t)
  );
}
function G1(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function J1(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? ia(i) : Ur(t);
  e[0].insertBefore(s), s.append(...e), i === r || tl(e[0], s);
}
function Y1(e) {
  ge(e) && (Ql(e.getPreviousSibling()), Hg(e.getNextSibling()));
}
const ay = {
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
}, ip = "psc-active-text", ko = "psc-empty-text";
function X1({ viewOptions: e }) {
  const [t] = le(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(ip), r.current = o, o && t.getElementByKey(o)?.classList.add(ip);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        pa,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${ko}`);
          if (!c) return !1;
          const l = Hs(c);
          if (!ge(l)) return !1;
          const d = l.getParent();
          if (!O(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        $t
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = yc(), f = Q1(), p = [], h = [];
          return pe().getChildren().forEach((m) => {
            if (!O(m)) return;
            const { emptyKeys: y, nonEmptyKeys: x } = eP(m);
            p.push(...y), h.push(...x);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(ko) : t.getElementByKey(u)?.classList.add(ko);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(ko));
      }),
      t.registerCommand(
        _l,
        () => (i(void 0), !1),
        $t
      ),
      t.registerCommand(
        qk,
        () => {
          const o = t.getEditorState().read(yc);
          return o !== r.current && i(o), !1;
        },
        $t
      )
    ];
    return i(t.getEditorState().read(yc)), nt(...s);
  }, [t, n]), null;
}
function yc() {
  return Z1(N() ?? void 0)?.getKey();
}
function Q1() {
  const e = N();
  if (!A(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!O(n)) return;
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
function Z1(e) {
  if (A(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function eP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ge(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ge(c)) break;
      if (!(Tt(c) || P(c)) && c.getTextContent().replaceAll(Io, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const tP = /^\+/;
function Au(e, t) {
  const r = t.replace(tP, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function cy(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function ly(e, t) {
  return cy(e, t) !== void 0;
}
function rl(e, t) {
  const r = cy(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function sa(e, t, r) {
  const n = O(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function rP(e, t, r, n, i) {
  const s = Au(n, t);
  if (!s) {
    sa(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && sa(e, "invalid", i);
}
function Ss(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || rP(s, o, t, r, n), Ss(s, t, r, n, i || o === "xq");
    } else if (ge(s)) {
      if (i) continue;
      const o = Au(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else U(s) ? Ss(s, s.getMarker(), r, n, i) : Pe(s) || O(s) && Ss(s, t, r, n, i);
}
function nP(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Au(e, a);
    if (!c) {
      sa(o, "unknown", r), rl(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    rl(n, l) || sa(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of pe().getChildren())
    Pe(o) || (lt(o) || ze(o) ? i(o, o.getMarker()) : re(o) ? (i(o, o.getMarker()), s(o) && Ss(o, o.getMarker(), e, r, !1)) : O(o) && s(o) && Ss(o, "p", e, r, !1));
  return r;
}
function iP(e) {
  return !!e?.includes("(basic)");
}
function sP(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function uy(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Zc(e, t);
}
function wu(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function dy(e, t) {
  const r = [];
  for (const n of t) {
    const i = wu(e, n);
    i && rl(r, i);
  }
  return r;
}
function So(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: sP(e.description),
    isBasic: iP(e.description)
  };
}
function oP(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function nl(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : oP(e.marker, t.marker);
}
function il(e, t, r) {
  if (t.noteMarker) return [];
  const n = dy(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && uy(i.marker, r)
  ).filter((i) => {
    const s = wu(e, i.marker);
    return s !== void 0 && ly(n, s);
  }).map((i) => So(i, "paragraph")).sort(nl);
}
function aP(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => uy(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => So(c, "character")).sort(nl);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => So(c, "character")),
    ...a.map((c) => So(c, "note"))
  ].sort(nl);
}
function cP(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function lP(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function uP(e, t, r) {
  return [
    ...cP(e, t.openCharMarkers),
    ...aP(e, t, r)
  ].sort(lP);
}
function dP(e, t, r) {
  if (t.source === "paragraph") return il(e, t, r);
  const n = uP(e, t, r);
  return n.length > 0 ? n : il(e, t, r);
}
function fP(e, t, r) {
  const n = il(e, t, r), i = dy(e, t.previousParaMarkers), s = wu(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && ly(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const li = String.raw`\w-`, fy = "a-z0-9", pP = `[a-z][${fy}]*`, hP = new RegExp(
  String.raw`^\\(\+?[${li}]+)[ \u00A0]$`
), py = new RegExp(String.raw`^\\(\+?[${li}]+)$`), gP = new RegExp(String.raw`^\\\+?[${li}]*\*$`), mP = new RegExp(
  String.raw`^\\(\+?[${li}]+)(?:[ \u00A0]|$)`
), yP = new RegExp(
  String.raw`^\\(\+?)([${li}]+)`
), bP = new RegExp(
  String.raw`\\\+?[${li}]+(?:\\?\*|[ \u00A0])`
), kP = new RegExp(
  String.raw`\\\+?[${li}]*$`
), xP = new RegExp(
  String.raw`^\\(${pP})( |$)`
), TP = new RegExp(
  String.raw`\\[${fy}+*]*$`,
  "i"
), sp = "￼", op = "|", hy = "\\", vP = /([-\w]+)="(.*?)"/g, CP = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), _P = /* @__PURE__ */ new Map([["file", "src"]]);
class gy {
  segments = [];
  /** Differing segments are never merged: the boundary between two of them (two adjacent literals)
   * is a position both sides share. */
  push(t, r, n, i, s) {
    if (t === r && n === i) return;
    const o = this.segments[this.segments.length - 1];
    s && o?.same && o.liveEnd === t && o.settledEnd === n ? this.segments[this.segments.length - 1] = { ...o, liveEnd: r, settledEnd: i } : this.segments.push({ liveStart: t, liveEnd: r, settledStart: n, settledEnd: i, same: s });
  }
  /** Two stretches that differ somewhere: the bytes both begin with, and then the bytes both end
   * with, line up one for one; what is left maps only its ends. */
  pushStretch(t, r, n, i) {
    const s = Math.min(t.length, n.length);
    let o = 0;
    for (; o < s && t[o] === n[o]; ) o += 1;
    let a = 0;
    for (; a < s - o && t[t.length - 1 - a] === n[n.length - 1 - a]; )
      a += 1;
    const c = r + t.length, l = i + n.length;
    this.push(r, r + o, i, i + o, !0), this.push(r + o, c - a, i + o, l - a, !1), this.push(c - a, c, l - a, l, !0);
  }
}
function ap(e, t) {
  const r = e.indexOf(hy, t + 1);
  return r < 0 ? e.length : r;
}
function cp(e) {
  const t = e.slice(1), r = [...t.matchAll(vP)];
  return r.length > 0 ? r.map((n) => n[0]).join("") !== t || r.some((n) => n[2] === "") ? void 0 : r.map((n) => {
    const i = 1 + (n.index ?? 0) + n[1].length + 2;
    return { name: n[1], valueStart: i, valueEnd: i + n[2].length, value: n[2] };
  }) : t ? [{ name: void 0, valueStart: 1, valueEnd: e.length, value: t }] : void 0;
}
function SP(e, t) {
  const r = e.map(
    (o, a) => o.name === void 0 || !CP.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), n = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && _P.get(o.name) === a.name), i = [];
  let s = -1;
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, d) => r[d] && n(l, o)
    );
    c <= s || (i.push([c, a]), s = c);
  }), i;
}
function MP(e, t, r, n, i) {
  if (e === t) {
    r.push(n, n + e.length, i, i + t.length, !0);
    return;
  }
  r.push(n, n + 1, i, i + 1, !0);
  const s = cp(e), o = cp(t);
  if (!s || !o) {
    r.pushStretch(e.slice(1), n + 1, t.slice(1), i + 1);
    return;
  }
  let a = 1, c = 1;
  for (const [l, d] of SP(s, o)) {
    const u = s[l], f = o[d];
    r.pushStretch(
      e.slice(a, u.valueStart),
      n + a,
      t.slice(c, f.valueStart),
      i + c
    ), r.push(
      n + u.valueStart,
      n + u.valueEnd,
      i + f.valueStart,
      i + f.valueEnd,
      !0
    ), a = u.valueEnd, c = f.valueEnd;
  }
  r.pushStretch(
    e.slice(a),
    n + a,
    t.slice(c),
    i + c
  );
}
function my(e, t, r, n, i) {
  let s = t, o = 0;
  for (; s < e.length && o < r.length; ) {
    const c = r[o] === sp && e[s] !== sp ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const l = new gy(), d = my(e, s, c, l, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: d,
        inner: { segments: EP(l.segments, s) }
      }), n.push(s, d, o, o + 1, !1), s = d, o += 1;
      continue;
    }
    if (e[s] === op && r[o] === op) {
      const l = ap(e, s), d = ap(r, o);
      MP(e.slice(s, l), r.slice(o, d), n, s, o), s = l, o = d;
      continue;
    }
    if (e[s] === r[o]) {
      n.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (i.prefix) {
      const l = r.lastIndexOf(hy), d = l >= o ? r.slice(l) : void 0, u = d === void 0 ? -1 : e.indexOf(d, s);
      return d === void 0 || u < 0 ? (n.push(s, s, o, r.length, !1), s) : (n.push(s, u, o, l, !1), n.push(u, u + d.length, l, r.length, !0), u + d.length);
    }
    return n.pushStretch(e.slice(s), s, r.slice(o), o), e.length;
  }
  const a = i.prefix ? s : e.length;
  return n.push(s, a, o, r.length, !1), a;
}
function EP(e, t) {
  return e.map((r) => ({
    ...r,
    liveStart: r.liveStart - t,
    liveEnd: r.liveEnd - t
  }));
}
function PP(e, t, r) {
  const n = new gy(), i = /* @__PURE__ */ new Map();
  return my(e, 0, t, n, { prefix: !1, spellings: r, literals: i }), { alignment: { segments: n.segments }, literals: i };
}
function wa(e, t) {
  return t === "live" ? {
    start: e.liveStart,
    end: e.liveEnd,
    otherStart: e.settledStart,
    otherEnd: e.settledEnd
  } : {
    start: e.settledStart,
    end: e.settledEnd,
    otherStart: e.liveStart,
    otherEnd: e.liveEnd
  };
}
function yy(e, t, r) {
  return e.segments.find((n) => {
    const { start: i, end: s } = wa(n, r);
    return i <= t && t < s;
  });
}
function by(e, t) {
  const r = e.segments[e.segments.length - 1];
  if (!r) return [0, 0];
  const { end: n, otherEnd: i } = wa(r, t);
  return [n, i];
}
function Ou(e, t, r) {
  const n = yy(e, t, r);
  if (n) {
    const { start: o, otherStart: a } = wa(n, r);
    return n.same ? a + (t - o) : void 0;
  }
  const [i, s] = by(e, r);
  return t === i ? s : void 0;
}
function io(e, t, r) {
  const n = yy(e, t, r);
  if (n) {
    const { start: i, otherStart: s } = wa(n, r);
    return n.same ? s + (t - i) : s;
  }
  return by(e, r)[1];
}
const cr = /\s/;
function AP(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function sl(e) {
  const t = [];
  for (const n of e.spans)
    for (let i = n.start; i < n.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: cr.test(s) });
    }
  const r = e.spans.filter((n) => n.isSentinel).map((n) => n.start);
  return { bytes: t, placeholders: r };
}
function Mo({ bytes: e }, t) {
  return e.filter((r) => r.position < t && !r.isWs).length;
}
function wP({ bytes: e }, t) {
  let r = 0;
  for (const n of e) n.position < t && (r = n.isWs ? r + 1 : 0);
  return r;
}
function ol({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const lp = "cat", OP = "category";
function NP(e) {
  return S(e) && e.getTextContent().trim() === "";
}
function RP(e) {
  const t = { text: "", spans: [], sentinels: [] }, r = [], n = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    n(a, AP(lp, c)), r.push({
      ownerKey: a.getKey(),
      markerName: lp,
      keyName: OP,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = ql(a);
    let d = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const u = Fr(a);
    let f = !1;
    for (const p of a.getChildren())
      d !== void 0 && f && !NP(p) && (i(a, d), d = void 0), o(p), (Qt(p) || u && (u.is(p) || p.isParentOf(u))) && (f = !0);
    d !== void 0 && i(a, d);
  }, o = (a) => {
    if (Qt(a)) {
      const c = a.getParent();
      n(a, U(c) ? c.getCaller() : "");
    } else S(a) || Tt(a) ? n(a, a.getTextContent()) : U(a) ? s(a) : O(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: r };
}
function Nu(e) {
  const t = sl(e);
  return {
    runs: e.sentinels.map((r, n) => {
      const { spelling: i, foldedAttributes: s } = RP(r);
      return {
        memberCount: r.length,
        before: Mo(t, t.placeholders[n] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: ol(sl(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: ol(t).map(({ byte: r }) => r).join("")
  };
}
function oa(e, t) {
  return {
    facts: sl(e),
    carried: e.sentinels.map((r, n) => {
      const i = new Set(t[n]?.map((s) => s.getKey()));
      return r.map((s) => i.has(s.getKey()));
    })
  };
}
function aa(e, t) {
  const r = e.carried.map(
    (f) => f.map(() => {
    })
  ), n = ol(e.facts), { alignment: i, literals: s } = PP(
    n.map(({ byte: f }) => f).join(""),
    t.bytes,
    new Map(t.runs.map((f) => [f.before, f.spelled]))
  ), o = (f, p) => {
    let h = 0;
    e.carried[f].forEach((m, y) => {
      m && (r[f][y] = { sentinelIndex: p, memberIndex: h }, h += 1);
    });
  }, a = (f) => f.filter(Boolean).length, c = e.carried.reduce((f, p) => f + a(p), 0), l = t.runs.reduce((f, p) => f + p.memberCount, 0);
  if (c === l) {
    const f = t.runs.flatMap(
      (h, m) => Array.from({ length: h.memberCount }, (y, x) => ({ sentinelIndex: m, memberIndex: x }))
    );
    let p = 0;
    return e.carried.forEach(
      (h, m) => h.forEach((y, x) => {
        y && (r[m][x] = f[p++]);
      })
    ), { sentinelMap: r, settledOnlyRuns: [], alignment: i };
  }
  const d = new Map(t.runs.map((f, p) => [f.before, p]));
  e.carried.forEach((f, p) => {
    const h = e.facts.placeholders[p];
    if (h === void 0 || a(f) === 0) return;
    const m = Ou(i, Mo(e.facts, h), "live"), y = m === void 0 ? void 0 : d.get(m);
    y === void 0 || t.runs[y].memberCount !== a(f) || o(p, y);
  });
  const u = [];
  for (const [f, p] of s) {
    const h = d.get(f);
    if (h === void 0) continue;
    const m = t.runs[h], y = n[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, x = p.liveEnd > p.liveStart ? n[p.liveEnd - 1].position + 1 : y, C = Mo(e.facts, y);
    u.push({
      sentinelIndex: h,
      liveBefore: C,
      liveLength: Mo(e.facts, x) - C,
      liveWsBefore: wP(e.facts, y),
      settledBefore: m.before,
      spelling: m.spelling,
      inner: p.inner,
      foldedAttributes: m.foldedAttributes
    });
  }
  return { sentinelMap: r, settledOnlyRuns: u, alignment: i };
}
function so(e, t, r) {
  return {
    nonWsBefore: io(
      e,
      t.nonWsBefore,
      r === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function ky(e, t, r) {
  return Ou(e.inner, t, r === "toSpelling" ? "live" : "settled");
}
function xy(e, t) {
  return e.find(
    (r) => t.nonWsBefore === r.liveBefore && t.wsRun >= r.liveWsBefore
  );
}
function Ru(e, t) {
  for (const r of e) {
    const n = t.nonWsBefore - r.liveBefore;
    if (n <= 0 || n >= r.liveLength) continue;
    const i = ky(r, n, "toSpelling");
    return {
      run: r,
      count: n,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function qu(e, t) {
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
function $u(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
const at = "￼";
function Ty(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== at ? e.slice(1) : e;
}
function up(e) {
  return Xs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function vy(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = mn.serializeEditorState(
    {
      type: Dr,
      version: Lr,
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
  for (; up(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Lt(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && up(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function xo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function hs(e, t) {
  kP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += at;
}
function Vt(e) {
  return e.replaceAll(q, " ");
}
function qP(e, t, r = !1) {
  if (Nt(t)) return Vt(e);
  if (e === q) return " ";
  const n = r && e.startsWith(q), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(q, "~");
}
function Ms(e) {
  const t = e.getTextContent();
  return ai(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Oa(e, t) {
  const r = e[t];
  if (!we(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ya(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Cy(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Na(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Os(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Iu(e) {
  return !!e.getUnknownAttributes();
}
function Ra(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && ga(e);
}
function _y(e, t) {
  return we(e) ? !Ra(e.getMarker(), t) : U(e) || Pe(e) ? !0 : Oe(e) ? Iu(e) : D(e) ? Sy(e, t) : !1;
}
function Sy(e, t) {
  if (tT(e)) return !0;
  const r = e.getMarker();
  return !Ex(r) && t(r) === void 0;
}
const Bt = "", jt = "";
function dp(e) {
  return e.flatMap((t) => Ve(t) ? t.getChildren() : [t]);
}
function Ai(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (we(s)) {
      const o = Oa(e, i);
      Ra(s.getMarker(), r) && Cy(o) ? (t.push(
        Bt,
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
      ), Ai(dp(o), t, r), t.push(jt)) : t.push(at), i += o.length;
    } else if (Oe(s)) {
      const o = Na(e, i);
      Iu(s) ? t.push(at) : (t.push(
        Bt,
        "verse",
        Vt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ai(dp(o), t, r), t.push(jt)), i += o.length;
    } else P(s) ? t.push(Bt, "marker", Vt(s.getTextContent()), jt) : Tn(s) ? t.push(Bt, "unmatched", Vt(s.getTextContent()), jt) : _y(s, r) ? t.push(at) : fa(s) ? t.push(" ") : S(s) ? t.push(
      Vt(
        n ? Ty(Ms(s)) : Ms(s)
      )
    ) : D(s) ? (t.push(Bt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ai(s.getChildren(), t, r, !0), t.push(jt)) : ye(s) ? Ai(s.getChildren(), t, r, n) : O(s) ? (t.push(Bt, s.getType()), Ai(s.getChildren(), t, r), t.push(jt)) : t.push(at);
  }
}
function Zi(e, t) {
  const r = [];
  return Ai(e, r, t), r.join("");
}
function Vr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function zi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Lu(e) {
  return e.type ?? "";
}
function My(e, t, r) {
  return t === "closing" ? Ge(e, r) : t === "selfClosing" ? Ge("") : Ee(e, r);
}
function bc(e, t) {
  const r = e[t];
  if (!(!r || Lu(r) !== "attribute-run"))
    return Vr(r) ?? [];
}
function es(e, t) {
  const r = [];
  return ks(e, r, t), r.join("");
}
function ks(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Lu(s);
    if (o === "ms") {
      const l = s, d = bc(e, i + 1);
      d && Ra(l.marker ?? "", r) ? (t.push(
        Bt,
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
      ), ks(d, t, r), t.push(jt), i += 1) : t.push(at);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(at);
        continue;
      }
      t.push(
        Bt,
        "verse",
        Vt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = bc(e, i + 1 + d);
      for (; u; )
        ks(u, t, r), d++, u = bc(e, i + 1 + d);
      t.push(jt), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Bt,
        "marker",
        Vt(
          My(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        jt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Bt, "char", JSON.stringify(l.unknownAttributes ?? null)), ks(Vr(s) ?? [], t, r, !0), t.push(jt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(at);
      continue;
    }
    if (o === "unmatched") {
      t.push(Bt, "unmatched", Vt(zi(s) ?? "")), t.push(jt);
      continue;
    }
    const a = zi(s);
    if (a !== void 0) {
      t.push(Vt(n ? Ty(a) : a));
      continue;
    }
    const c = Vr(s);
    c ? (t.push(Bt, o), ks(c, t, r), t.push(jt)) : t.push(at);
  }
}
function qa(e) {
  let t = 0;
  for (const r of e) {
    const n = Vr(r);
    if (n) {
      t += qa(n);
      continue;
    }
    const i = zi(r);
    if (i !== void 0)
      for (const s of i) s === at && t++;
  }
  return t;
}
function Bi(e, t, r, n, i) {
  _r(e.getChildren(), t, r, n, i);
}
function _r(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      xo(t, a, Vt(a.getTextContent()));
    else if (we(a)) {
      s();
      const c = Oa(e, o);
      Ra(a.getMarker(), r) && Cy(c) ? _r(c, t, r, n) : hs(t, [a, ...c]), o += c.length;
    } else if (U(a) || Pe(a))
      s(), hs(t, [a]);
    else if (Oe(a)) {
      s();
      const c = Na(e, o);
      Iu(a) ? hs(t, [a, ...c]) : (xo(t, a, Vt(Ms(a))), _r(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), Sy(a, r) ? hs(t, [a]) : Bi(a, t, r, n, { pending: !0 });
    else if (fa(a))
      s(), xo(t, a, " ");
    else if (S(a)) {
      const c = ai(a) || ne(a, ce) === "attribute", l = s() && !c;
      xo(
        t,
        a,
        c ? Vt(Ms(a)) : qP(Ms(a), n, l)
      );
    } else O(a) ? Bi(a, t, r, n, i) : (s(), hs(t, [a]));
  }
}
function Du(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Pe(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Bi(e, i, t, r), i;
}
function $P(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  return Bi(e, n, t, r), n;
}
function Uu(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!re(i)) return;
    const s = Du(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function IP(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (re(i)) {
      const s = Du(i, t, r);
      if (!s) return;
      const o = n.text.length;
      s.spans.forEach(
        (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), n.sentinels.push(...s.sentinels), n.text += s.text;
    } else ve(i) ? _r(i.getChildren(), n, t, r) : _r([i], n, t, r);
  return n;
}
function Ey(e, t) {
  let r = 0;
  const n = (i) => {
    if (S(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(at);
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
    } else O(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function al(e, t = []) {
  for (const r of e)
    Oe(r) ? t.push(r) : O(r) && al(r.getChildren(), t);
  return t;
}
function Py(e) {
  let t = 0;
  const r = (n) => {
    if (S(n))
      for (const i of n.getTextContent()) i === at && t++;
    else O(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function ui(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === at && t++;
    else r.content && (t += ui(r.content));
  return t;
}
function Fu(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), O(i) && Bi(i, n, t, r);
  return n;
}
function ji(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : r, o) : o;
    for (let l = 0; l < c; l++)
      cr.test(e.text[s.start + l]) ? i++ : (n++, i = 0);
    if (a) return { nonWsBefore: n, wsRun: i };
  }
}
function Es(e) {
  if (e.isSentinel) return !1;
  const t = H(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function Ay(e) {
  const t = H(e.key);
  if (!P(t)) return;
  const r = t.getParent();
  if (!D(r)) return;
  const n = r.getParent();
  if (n)
    return {
      key: n.getKey(),
      offset: r.getIndexWithinParent() + 1,
      type: "element"
    };
}
function LP(e) {
  const t = H(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Oe(t) ? Na(n, i) : we(t) ? Oa(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function It(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e;
  let s, o = t.nonWsBefore, a = t.wsRun, c = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && (r || !Es(u));
    if (c) {
      if (!p) continue;
      s = { key: u.key, offset: 0 };
      break;
    }
    for (let h = 0; h < f; h++) {
      const m = n[u.start + h];
      if (o === 0 && (a === 0 || !cr.test(m))) {
        if (p) {
          s = { key: u.key, offset: h };
          break e;
        }
        c = !0;
        continue e;
      }
      o > 0 ? cr.test(m) || o-- : a--;
    }
    if (o === 0 && a === 0) {
      if (p && !r) {
        s = { key: u.key, offset: f };
        break;
      }
      c = !0;
    }
  }
  if (s) return { ...s, type: "text" };
  const l = i[i.length - 1];
  if (l && Es(l)) {
    const u = Ay(l);
    if (u) return u;
  }
  if (l?.isSentinel) {
    const u = LP(l);
    if (u) return u;
  }
  const d = [...i].reverse().find((u) => !u.isSentinel && !Es(u));
  if (d) return { key: d.key, offset: d.end - d.start, type: "text" };
}
function wy(e, t = []) {
  for (const r of e)
    ye(r) && t.push(r), O(r) && wy(r.getChildren(), t);
  return t;
}
function Oy(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), O(e) && e.getChildren().forEach((r) => Oy(r, t)), t;
}
function DP(e, t, r) {
  const n = ji(e, t.key, r);
  if (n)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: n,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: n };
}
function $a(e, t, r = t.sentinels) {
  const n = [];
  for (const i of wy(e)) {
    const s = Oy(i), o = t.spans.filter((C) => s.has(C.key)), a = o.find((C) => C.isSentinel || !P(H(C.key))) ?? o[0], c = o[o.length - 1];
    if (!a || !c) continue;
    const l = t.text.slice(a.start, a.end), d = a === o[0] || a.isSentinel ? 0 : l.length - l.trimStart().length, u = DP(t, a, d), f = ji(t, c.key, c.end - c.start);
    if (!u || !f) continue;
    const p = i.getTypedOnClicks(), h = i.getTypedOnRemoves(), m = i.getTypedOnMouseEnters(), y = i.getTypedOnMouseLeaves(), x = Object.entries(i.getTypedIDs()).flatMap(
      ([C, M]) => M.map((R) => ({
        type: C,
        id: R,
        onClick: p[C]?.[R],
        onRemove: h[C]?.[R],
        onMouseEnter: m[C]?.[R],
        onMouseLeave: y[C]?.[R]
      }))
    );
    x.length > 0 && n.push({ annotations: x, start: u, end: f });
  }
  return { ranges: n, live: n.length > 0 ? oa(t, r) : void 0 };
}
function UP(e, t, r) {
  const n = Ny(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!ye(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function FP(e, t) {
  const r = Ny(e);
  if (!r) return;
  const n = Vn();
  n.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), r[0].insertBefore(n), n.append(...r);
}
function Ny(e) {
  const t = H(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = Oe(t) ? Na(r, n) : we(t) ? Oa(r, n) : [];
  return [t, ...i];
}
function fp(e) {
  return e.type === "text" && P(H(e.key));
}
function KP(e) {
  const t = H(e.key);
  if (!S(t) || P(t) || ne(t, ce) === "attribute") return !1;
  const r = t.getParent();
  if (!U(r)) return !0;
  const n = r.getChildren().find((i) => !P(i) || i.getMarkerSyntax() !== "opening");
  return !t.is(n);
}
function Ry(e, t, r, n) {
  const i = r.settledOnlyRuns, s = { addressDisplayBytes: n }, o = Ru(i, e);
  if (o) {
    if (!o.within) return;
    const d = It(o.run.spelling, o.within, s);
    return !d || !KP(d) ? void 0 : { point: d, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex };
  }
  const a = n && xy(i, e);
  if (a) {
    const d = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), u = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, f = It(t, u, s);
    return f && d ? { point: f, at: u.nonWsBefore, preservedKey: d } : void 0;
  }
  const c = so(r.alignment, e, "toSettled"), l = It(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function zP(e, t, r) {
  if (e.kind === "byte") return Ry(e.anchor, t, r, !0);
  const n = r.sentinelMap[e.run]?.find((a) => a !== void 0), i = n && t.sentinels[n.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = so(r.alignment, e.anchor, "toSettled"), o = It(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function Ia({ ranges: e, live: t }, r) {
  if (e.length === 0 || !t) return;
  const n = N()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = r();
      if (!o) continue;
      const a = aa(t, Nu(o)), c = zP(i.start, o, a), l = Ry(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const d = i.start.anchor;
      if (c.at === l.at && d.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { point: u, preservedKey: f } = c, { point: p } = l;
      if (fp(u) || fp(p)) continue;
      if (u.key === p.key && u.offset === p.offset && u.type === p.type) {
        f && FP(f, s);
        continue;
      }
      const h = Ws();
      h.anchor.set(u.key, u.offset, u.type), h.focus.set(p.key, p.offset, p.type), Nl(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && UP(f, s.type, s.id);
    }
  un(n);
}
function Ku(e, t, r) {
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
function qy(e, t) {
  return e.sentinels.filter((n, i) => n.length > 0 && (t[i]?.length ?? 0) === 0).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? Ku(n, s.start, s.end) : n;
  }, e);
}
function oo(e) {
  const t = e.exportJSON();
  return O(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(oo(r))), t;
}
function zu(e, t, r, n, i, s, o) {
  const a = $a(
    e,
    qy(t, r),
    r
  );
  if (a.ranges.length === 0) return n;
  const c = ih({
    nodes: [Xe, ...gu],
    onError: (d) => {
      throw d;
    }
  });
  Sl(
    c,
    Xe,
    (d) => Vn(d.getTypedIDs()),
    (d, u) => Object.entries(d.getTypedIDs()).forEach(
      ([f, p]) => p.forEach((h) => u.addID(f, h))
    )
  );
  let l;
  return c.update(
    () => {
      const d = pe(), u = i === "noteContent" ? Ht() : d;
      u !== d && d.append(u), l = u.getKey(), n.forEach((p) => u.append(Vi(p))), Ia(a, () => {
        const p = u.getChildren();
        if (i === "paras") return Fu(p, s, o);
        if (i === "chapter")
          return ve(p[0]) ? Ks(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return _r(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const d = l === void 0 ? void 0 : H(l);
    return O(d) ? d.getChildren().map(oo) : n;
  });
}
function cl(e) {
  const t = H(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return S(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!O(t)) return !1;
  const r = Ws();
  return r.anchor.set(e.key, e.offset, "element"), r.focus.set(e.key, e.offset, "element"), un(r), !0;
}
function BP(e, t, r) {
  const n = It(e, t);
  if (n?.type === "text") {
    if (cl(n)) return;
  } else if (n) {
    const i = H(n.key), s = O(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find(O)?.selectStart();
}
function Bu(e, t) {
  const r = t.getNode(), n = qu(e, r), i = n && $u(n.member, r);
  return {
    anchor: ji(e, t.key, t.offset),
    inRun: n && i ? {
      sentinelIndex: n.sentinelIndex,
      memberIndex: n.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: oa(e, e.sentinels)
  };
}
function $y(e, t, r) {
  const n = t && aa(t.live, Nu(e));
  if (t?.inRun && n) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: d } = t.inRun, u = n.sentinelMap[o]?.[a];
    let f = u && e.sentinels[u.sentinelIndex]?.[u.memberIndex];
    for (const p of c)
      f = O(f) ? f.getChildAtIndex(p) ?? void 0 : void 0;
    if (f && cl({ key: f.getKey(), offset: l, type: d })) return;
  }
  if (!t?.anchor || !n) {
    r.find(O)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = Ru(n.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: io(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = It(s.run.spelling, o);
    if (a && cl(a)) return;
  }
  BP(
    e,
    so(n.alignment, i, "toSettled"),
    r
  );
}
function Iy(e, t, r, n, i) {
  r && $y(Fu(e, n, i), t, e);
}
function jP(e, t, r, n, i) {
  if (!r) return;
  const s = { text: "", spans: [], sentinels: [] };
  _r(e, s, n, i), $y(s, t, e);
}
function Ly(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Uu(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (A(c)) {
    for (let y = c.anchor.getNode(); y; y = y.getParent())
      if (e.some((x) => x.is(y))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Bu(s, c.anchor));
  }
  const l = $a(e, s), d = Hr(s.text, {
    getMarker: n
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (ui(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = mn.serializeEditorState(
    { type: Dr, version: Lr, content: d },
    r
  );
  if (es(u.root.children, n) === Zi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = u.root.children.map((y) => Vi(y));
  if (Py(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = al(e).map((y) => ({
    number: y.getNumber(),
    sid: y.getSid()
  })), h = e[0];
  f.forEach((y) => h.insertBefore(y)), Ey(f, s.sentinels), e.forEach((y) => y.remove());
  const m = al(f);
  for (let y = 0; y < p.length && y < m.length; y++)
    m[y].getNumber() === p[y].number && m[y].setSid(p[y].sid);
  return Ia(l, () => Fu(f, n, r)), Iy(f, o, a, n, r), !0;
}
function Fs(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !qe.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!P(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(Qt(s) || S(s) && s.getTextContent() === Lt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const d = n[a - 1];
    if (!P(d) || d.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return _r(c, l, t, r), { out: l, contentNodes: c };
}
function Dy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(at)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function VP(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Fs(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = N();
  if (A(d)) {
    for (let L = d.anchor.getNode(); L; L = L.getParent())
      if (e.is(L)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Bu(o, d.anchor));
  }
  const u = $a(a, o), f = Hr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (f.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (ui(f) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], m = Dy(h), y = vy(e, h, m, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (qa(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const x = e.getCategory() !== m;
  if (x && e.setCategory(m), es(y.children, n) === Zi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), x;
  const C = y.children.map((L) => Vi(L));
  if (Py(C) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), x;
  const M = a[0];
  if (M)
    C.forEach((L) => M.insertBefore(L));
  else {
    const L = e.getChildren().find((T) => P(T) && T.getMarkerSyntax() === "closing");
    C.forEach((T) => L ? L.insertBefore(T) : e.append(T));
  }
  Ey(C, o.sentinels);
  const R = new Set(o.sentinels.flat().map((L) => L.getKey()));
  a.forEach((L) => {
    R.has(L.getKey()) || (ye(L) && (L.getWritable().__suppressOnRemoveCallbacks = !0), L.remove());
  });
  const E = () => Fs(e, n, r);
  return Ia(u, () => E()?.out), jP(
    E()?.contentNodes ?? C,
    c,
    l,
    n,
    r
  ), !0;
}
const Uy = /* @__PURE__ */ new Set(["ca", "cp"]), ju = "cp";
function Fy(e) {
  if (!Qe(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Bi(e, t, xr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Hr(r, { getMarker: xr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === ju)
  );
}
function ts(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && Uy.has(r.getMarker()) || Fy(r)) {
      t.push(r);
      continue;
    }
    re(r) && r.getMarker() === ju && t.push(r);
    break;
  }
  return t;
}
function WP(e) {
  const t = (n) => D(n) && Uy.has(n.getMarker()) || Fy(n);
  if (t(e) || re(e) && e.getMarker() === ju)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (ve(n)) return n;
      if (!t(n)) return;
    }
}
function Ks(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = ts(e);
  if (n.some((s) => re(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (_r(e.getChildren(), i, t, r), _r(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function HP(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...ts(e)], o = Ks(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = N();
  if (A(l)) {
    for (let y = l.anchor.getNode(); y; y = y.getParent())
      if (s.some((x) => x.is(y))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Bu(o, l.anchor));
  }
  const d = $a(s, o), u = Hr(o.text, { getMarker: n }), [f] = u;
  if (u.length === 0 || typeof f != "object" || f.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (ui(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const p = mn.serializeEditorState(
    { type: Dr, version: Lr, content: u },
    r
  );
  if (es(p.root.children, n) === Zi(s, n)) {
    let y = !1;
    return e.getNumber() !== (f.number ?? "") && (e.setNumber(f.number ?? ""), y = !0), e.getAltnumber() !== f.altnumber && (e.setAltnumber(f.altnumber), y = !0), e.getPubnumber() !== f.pubnumber && (e.setPubnumber(f.pubnumber), y = !0), y || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  }
  const h = p.root.children.map((y) => Vi(y));
  if (!ve(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const m = h[0];
  return h.forEach((y) => e.insertBefore(y)), s.forEach((y) => y.remove()), Ia(
    d,
    () => Ks(m, n, r)
  ), Iy(h, a, c, n, r), !0;
}
function zs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Pe(n)) return;
    !t && (U(n) || re(n) || ve(n)) && (t = n), vr(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? WP(r) : void 0) ?? t;
}
function nr(e, t) {
  const r = zs(e);
  return r ? U(r) ? VP(r, t) : ve(r) ? HP(r, t) : Ly([r], t) : !1;
}
const GP = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function pp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !GP.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Eo(e, t) {
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
          t.push(`\\${n}`), pp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Eo(r.content, t), pp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Eo(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Eo(r.content, t);
      }
    }
}
function hp(e, t, r) {
  const n = zs(e);
  if (!re(n)) return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Du(n, t, r);
  if (!o) return !1;
  const a = Hr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    cr.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  Eo(a, l);
  for (const d of l.join("").replaceAll(q, "~")) {
    if (cr.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function JP(e) {
  return [ht(e), Ca()];
}
function Vu(e) {
  or(e, 2);
}
function YP(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Wu(e) {
  const t = YP(e);
  e.splice(0, 0, JP(e.getMarker())), t && Vu(e);
}
function ca(e, t) {
  e.setMarker(t), Wu(e), Vu(e);
}
function XP(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!ai(n)) {
    if (S(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(q), Mt(n, ce, Mr), n.setMode("token");
      return;
    }
    if (Rg(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Ca());
  }
}
function gp(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : O(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function Ps(e) {
  for (let t = e; t; t = t.getParent())
    if (re(t)) return t;
}
function QP(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Ps(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Ps(r.getNode())?.is(s) ?? !1, a = Ps(n.getNode())?.is(s) ?? !1;
    return !(o && !gp(r, s, "start") || a && !gp(n, s, "end"));
  });
}
function ll(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!A(r) || r.isCollapsed()))
    for (const n of QP(r)) t.add(n.getKey());
}
function ZP(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!A(r) || !r.isCollapsed()) return;
  const n = Ps(r.focus.getNode());
  n && t.add(n.getKey());
}
function eA(e) {
  const t = N();
  !A(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (ll(e), t.removeText());
}
function tA(e, t) {
  if (!Yi(t.viewOptions)) return;
  if (Xt(e.getFirstChild())) {
    XP(e, t);
    return;
  }
  if (t.splitExpected.current) {
    Wu(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => re(o) && !o.is(e))) {
      ca(e, kr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (re(r)) {
    const n = e.getChildren().filter((a) => !ai(a)), i = N();
    let s = !1;
    if (A(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Ps(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || O(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && or(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  ca(e, kr);
}
function rA(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = br(t, Js(e.getMarker()));
  return r === "" ? void 0 : r;
}
function nA(e) {
  const t = e.getChildren().filter((s) => !P(s) && ne(s, ce) !== "attribute"), r = t[0];
  r && S(r) && r.getTextContent().startsWith(q) && r.setTextContent(r.getTextContent().slice(1));
  const n = rA(e);
  n && t.push(ke(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function iA(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => S(c) && !P(c) && c.getTextContent() === Lt(s)
    ), a = Hi(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (S(c) && c.getTextContent() === Lt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function sA(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    nA(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && nr(e, t);
}
function Ky(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Yi(r)) {
    ca(e, t);
    return;
  }
  ym(e, t);
}
function zy() {
  const e = N();
  if (!A(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = By(e);
    return t !== "removed" ? t : (ul(), "handled");
  }
  return ul() ? "handled" : "declined";
}
function oA(e, t) {
  if (!t) return e;
  const r = xP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function mp(e, t) {
  const r = N();
  if (!A(r)) return "declined";
  if (r.isCollapsed()) {
    if (!jy())
      return "declined";
  } else {
    const s = By(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => oA(s, t)
  );
  yp(n ?? "");
  for (const s of i)
    ul(), yp(s);
  return "handled";
}
function aA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Hs(n);
  if (!i) return !1;
  const s = ar(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !S(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function By(e) {
  const t = ar(e.anchor.getNode()), r = ar(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), cA() ? "removed" : "needs-plain-split");
}
function yp(e) {
  if (e === "") return;
  const t = N();
  A(t) && t.insertText(e);
}
function cA() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = ar(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function jy() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = ar(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function ul() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = jy();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Ur("fp", { closed: "false" });
  i.append(ht("fp"));
  const s = S(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    $i(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [d] = l;
    d && (Nv(d), i.append(d));
  }
  return i.getChildren().every(P) && i.append(ke(Gt)), Vy(i), !0;
}
function Vy(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (S(t)) {
    const r = t.getTextContent().startsWith(q) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (O(t)) {
    Vy(t);
    return;
  }
  e.selectEnd();
}
function lA(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function uA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of pe().getChildren()) {
    if (t && n.is(t)) break;
    (lt(n) || ze(n) || re(n)) && r.push(n.getMarker());
  }
  return r;
}
function dA(e) {
  let t = e;
  for (; O(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function fA(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Xt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && ai(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(dA(i)) && r === 0 : !1;
}
function pA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Xt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && ai(i) && t.is(i) && r === 0;
}
function hA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function gA() {
  const e = N();
  if (!A(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = rt(t, re), s = !n && (!i || pA(i, t, r)) ? "paragraph" : "character", o = ar(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: uA(t),
    openCharMarkers: lA(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Yl(t, r),
    anchorRect: hA()
  };
}
function mA() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!S(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = TP.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function yA(e, t, r) {
  Ky(e, t, r), Vu(e);
}
function bA(e, t, r) {
  const n = N();
  if (!A(n)) return;
  const i = n.focus.getNode(), s = rt(i, re);
  if (t === "backslash" && s && fA(s, i, n.focus.offset)) {
    yA(s, e, r);
    return;
  }
  Hy(e, r);
}
function kA(e, t) {
  const r = N();
  return !A(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Wy(e) {
  const t = N();
  return A(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function xA(e, t, r, n) {
  if (A(N()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && mA(), e.kind === "closeTag") {
    Wy(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && zy() !== "declined") return;
  if (e.kind === "paragraph" && it.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    bA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (qe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Zm(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  el(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Wi(), reference: r });
}
function Hy(e, t) {
  const r = N();
  if (!A(r)) return;
  const n = Yi(t);
  if (Xm()) {
    const s = N();
    if (!A(s)) return;
    const o = rt(s.anchor.getNode(), re);
    if (!o) return;
    o.setMarker(e), n && Wu(o);
    return;
  }
  const i = r.insertParagraph();
  re(i) && (n ? ca(i, e) : i.setMarker(e));
}
function TA() {
  const [e] = le();
  return j(() => e.registerCommand(sh, () => !0, $t), [e]), null;
}
function Gy(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(qe.isValidMarker(r) || ga(r));
}
function vA(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(qe.isValidMarker(r) || ga(r));
}
function CA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = mP.exec(e)?.[1];
  return r === void 0 ? !1 : !Gy(r, t);
}
function Jy(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !CA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!re(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (re(i))
    return [i, r];
}
function Yy(e, t) {
  const r = Jy(e, t.getMarker);
  return r !== void 0 && Ly(r, t);
}
function _A(e, t) {
  const r = N();
  A(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Xy(e) {
  const t = yP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function SA(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Xy(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function MA(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (U(e.getParent()) && S(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      jl(n);
      return;
    }
  }
  S(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function bp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Xy(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  MA(e);
}
function kp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Qy(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return nr(e, r);
  const n = SA(e), i = e.getParent();
  if (re(i)) {
    if (!Gy(t, r.getMarker))
      return Yy(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : nr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), kp(s, t) && bp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || U(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? vA(t, r.getMarker) : qe.isValidMarker(s)))
      return nr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return nr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (_A(c, Ge(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), kp(a, s) && bp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return nr(e, r);
}
function EA(e) {
  const t = N();
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
function PA(e, t) {
  const r = e.getTextContent();
  if (kn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ve(e.getParent()) && Rl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !EA(e)) {
    Lx(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = hP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Qy(e, n[1], t);
      return;
    }
    if (gP.test(r)) {
      t.pendingKeys.delete(e.getKey()), nr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = Ge(e.getMarker(), e.getNested());
    if (D(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = N(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ke(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function AA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (sg(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Zy(e) {
  if (!gh(e)?.length)
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
const gs = Zy("v"), wA = Zy("c"), xp = /^[ \u00A0]*$/;
function Tp(e, t, r) {
  const n = e.getNextSibling();
  if (S(n) && n.getType() === We.getType() && n.getMode() === "normal" && ne(n, ce) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = ke(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function OA(e, t) {
  const r = e.getTextContent(), n = Wt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (gs.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = gs.valueAndRest.exec(c);
    if (l && xp.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (gs.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = gs.valueAndRest.exec(r);
  if (!s) {
    const c = gs.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = N(), p = A(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(Wt("v", d));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Tp(e, u, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), nr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), xp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Wt("v", o)), a && Tp(e, a, a.length);
}
const NA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function RA(e, t) {
  const r = e.getParent();
  if (!U(r) || r.getIsCollapsed() !== !1 || !gh(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Lt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = NA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Lt(a)), !0;
}
function qA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!S(t)) return;
  const r = Wt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = wA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function eb(e) {
  if (we(e)) {
    const { wrapper: t } = ya(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (U(e)) {
    const { wrapper: t } = ql(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (ve(e)) {
    const t = [], r = Uh(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Kh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Oe(e)) {
    const t = [], r = Os(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Os(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function $A(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return eb(e).some((n) => r.is(n));
}
function IA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && re(e) && Rg(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ns)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && no(l, e) && (i || $A(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of eb(e))
    l.remove(), n = !0;
  let s = !1;
  if (D(e)) {
    const l = cT(e);
    l !== void 0 && Cx(l) && (Gh(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Ns)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (zv(l, e)) {
        Is(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Lg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      _a(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function vp(e) {
  return S(e) && e.getType() === We.getType() && e.getMode() === "normal" && ne(e, ce) !== "attribute";
}
function LA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = H(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && vp(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && vp(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function To(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = LA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = H(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (kn(c)) continue;
      const h = py.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = Qy(c, h[1], e) || n : r === "idle" && hp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Yy(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = nr(c, e) || n;
      continue;
    }
    const l = pn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = IA(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && hp(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = nr(d, e) || n;
    }
  }
  return n;
}
function tb(e) {
  if (Tn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return xs(t) !== void 0;
  return !1;
}
function DA(e) {
  const t = pn(e);
  if (!t) return !1;
  const r = zr(t.kind);
  return !_a(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Cp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (lt(t) || Pe(t) || hg(t)) return !0;
  return !1;
}
function UA(e, t) {
  const r = e.getTextContent(), n = ne(e, ce), i = e.getParent();
  if (n !== "attribute" && ve(i)) {
    r.replace(/^[ \u00A0]+/, "") === Wt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (RA(e, t)) return;
  if (n === "attribute") {
    DA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && tb(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Cp(e))
      t.pendingKeys.add(e.getKey());
    else if (zh(e)) t.pendingKeys.add(e.getKey());
    else if (ve(zs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      D(a) && Jh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Cp(e)) return;
  const s = N(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (bP.test(o)) {
    if (Nx(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), nr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function FA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Lg(e, t);
}
function KA(e) {
  const t = (r) => {
    if (P(r)) {
      kn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Tn(r)) {
      sg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Ns)
      n.settleScope !== "none" && n.ownerPredicate(r) && (no(n, r) || FA(n, r)) && e.pendingKeys.add(r.getKey());
    if (Oe(r)) {
      r.getTextContent() !== Wt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (S(r)) {
      if (r.getType() !== We.getType() || ne(r, ce) === "attribute") return;
      const n = r.getParent();
      if (ve(n)) {
        r.getTextContent() !== Wt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && tb(r) || i.includes("//") || zh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Pe(r) && !lt(r)) {
      if (Ve(r) && r.getChildrenSize() === 0) {
        const n = pn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      O(r) && r.getChildren().forEach(t);
    }
  };
  pe().getChildren().forEach(t);
}
function zA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, ce);
  if (r === "attribute" || r === Mr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (lt(o) || ve(o) || Pe(o)) return;
  const n = t.startsWith(q) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? q : "") + i.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  s !== t && e.setTextContent(s);
}
function BA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function dl(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(BA(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function jA(e) {
  const t = dl(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(q) ? r : n.includes(q) || i.includes(q) ? i : void 0;
  if (!s) return !1;
  const o = N();
  if (!A(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(q, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = Wi();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(qo, void 0), d === "") return;
    const f = N();
    A(f) && f.insertText(d);
  }), !0;
}
function VA(e) {
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
function WA(e) {
  const t = N();
  if (!A(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(q, " ")
  }, n = Dk(e), i = Uk(e);
  return n && (r["text/html"] = VA(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function _p(e, t, r) {
  const n = N();
  if (!A(n) || n.isCollapsed()) return !1;
  const i = WA(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return Lk(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const rb = kl(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function kc(e) {
  const t = e();
  return zn(Xp), zn(yh), t;
}
const Sp = 8, HA = 1e3;
function Mi(e, t) {
  const r = Oe(e) ? ["va", "vp"] : we(e) ? ["milestone"] : U(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    Hv(zr(n), e, t.pendingKeys);
}
function GA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Tl) || i.updateTags.has(ws)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = H(o);
        if (!c) continue;
        const l = pn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = H(o.getKey());
        c?.isAttached() && zr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return nt(
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
    e.registerMutationListener(Sr, r),
    e.registerMutationListener(Jr, r),
    e.registerMutationListener(Gr, r)
  );
}
function JA(e, t, r) {
  return nt(
    e.registerCommand(
      $r,
      (n) => {
        if (_m()) return !1;
        const i = dl(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(q, "~") : s).split(`
`);
          let c = mp(a, t.getMarker);
          if (c === "declined" && aA(e) && (c = mp(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Ir
    ),
    e.registerCommand(
      $r,
      (n) => {
        const i = dl(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !N1()) return !1;
        n?.preventDefault();
        const o = N();
        return A(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(qo, void 0), a === "") return;
          const l = N();
          A(l) && l.insertText(a);
        }), !0;
      },
      Ke
    ),
    e.registerCommand(
      $r,
      () => (t.splitExpected.current = !0, !1),
      $t
    )
  );
}
function YA({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = le(), s = e?.markerMode === "editable", o = !!e && Nt(e), a = Z(void 0), c = Z(n);
  return j(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? xr, l.logger = r);
  }, [e, t, r, n]), j(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? xr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const d = Dv(
      i,
      l.pendingKeys,
      (T) => {
        l.pendingKeys.clear(), T.read(() => KA(l));
      }
    );
    let u, f = !1, p = !1, h, m = !1, y = !1, x = 0;
    const C = () => x < Sp ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Sp} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), M = (T, $ = "departure") => {
      i.update(() => {
        x = kc(
          () => To(l, T, $)
        ) ? x + 1 : 0;
      });
    };
    let R;
    const E = () => {
      if (R !== void 0 && clearTimeout(R), R = void 0, y || l.pendingKeys.size === 0) return;
      const T = c.current ?? HA;
      T < 0 || (R = setTimeout(() => {
        R = void 0, !(y || l.pendingKeys.size === 0) && (f || C() || M(void 0, "idle"));
      }, T));
    }, L = nt(
      i.registerNodeTransform(Sr, (T) => {
        if (i.isComposing()) return;
        PA(T, l);
        const $ = pn(T);
        $ && (Oe($.owner) || U($.owner) || ve($.owner) || we($.owner) && ya($.owner).wrapper === void 0) && Mi($.owner, l);
      }),
      i.registerNodeTransform(bt, (T) => {
        i.isComposing() || (OA(T, l), Mi(T, l));
      }),
      i.registerNodeTransform(Ut, (T) => {
        i.isComposing() || (qA(T), T.isAttached() && Mi(T, l));
      }),
      i.registerNodeTransform(it, (T) => {
        i.isComposing() || tA(T, l);
      }),
      i.registerNodeTransform(xe, (T) => {
        if (!i.isComposing()) {
          sA(T, l);
          for (const $ of ["separator", "char"])
            T.isAttached() && no(zr($), T) && l.pendingKeys.add(T.getKey());
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
      i.registerNodeTransform(sr, (T) => {
        i.isComposing() || Mi(T, l);
      }),
      i.registerNodeTransform(Gr, (T) => {
        if (i.isComposing()) return;
        const $ = pn(T);
        $ && (we($.owner) || Oe($.owner) || U($.owner) || ve($.owner)) && Mi($.owner, l);
      }),
      i.registerNodeTransform(qe, (T) => {
        i.isComposing() || (iA(T, l), Mi(T, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Xr, (T) => {
        i.isComposing() || AA(T, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(We, (T) => {
        i.isComposing() || UA(T, l);
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
        We,
        (T) => {
          i.getEditorState().read(() => {
            for (const [$, W] of T) {
              if (W === "destroyed") continue;
              const G = H($);
              !G || ne(G, ce) !== "attribute" || Ve(G.getParent()) || i.getElementByKey($)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      GA(i, l),
      ...o ? [
        i.registerNodeTransform(We, (T) => {
          i.isComposing() || zA(T);
        }),
        i.registerCommand(
          ha,
          (T) => _p(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !1
          ),
          Ke
        ),
        i.registerCommand(
          Kn,
          (T) => _p(
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !0
          ),
          Ke
        ),
        i.registerCommand(
          $r,
          (T) => jA(
            // Same jsdom-safe duck-check as COPY above.
            T && typeof T == "object" && "clipboardData" in T ? T : null
          ),
          Ke
        )
      ] : [],
      i.registerCommand(
        Kn,
        () => (ll(l), !1),
        Ir
      ),
      i.registerCommand(
        vl,
        () => (i.isComposing() || eA(l), !1),
        Ni
      ),
      i.registerCommand(
        pa,
        () => (f = !1, x = 0, E(), !1),
        $t
      ),
      i.registerCommand(
        Wr,
        (T) => (f = !1, x = 0, E(), (T.key === "Backspace" || T.key === "Delete") && (ll(l), ZP(l)), i.isComposing() || !T.ctrlKey || T.altKey || T.shiftKey || T.metaKey || T.key !== " " && T.code !== "Space" || !O1() ? !1 : (T.preventDefault(), !0)),
        Ke
      ),
      i.registerCommand(
        rh,
        (T) => {
          const $ = zy();
          $ === "needs-plain-split" && i.dispatchCommand(qo, void 0);
          const W = $ !== "declined" || Gv();
          return W && T?.preventDefault(), To(l), W;
        },
        Ke
      ),
      i.registerCommand(
        qo,
        () => (l.splitExpected.current = !0, Xm()),
        Ke
      ),
      JA(i, l, o),
      i.registerCommand(
        rb,
        () => {
          if (f) return !0;
          const T = i.getRootElement(), $ = T?.ownerDocument, W = !!T && !!$ && $.hasFocus() && T.contains($.activeElement);
          let G;
          if (W) {
            const ee = N();
            G = A(ee) ? ee.focus.key : u;
          }
          return kc(() => To(l, G)), !0;
        },
        $t
      ),
      i.registerCommand(
        Pl,
        () => (p = !0, !1),
        $t
      ),
      i.registerCommand(
        _l,
        () => {
          if (f) return !1;
          const T = N(), $ = A(T) ? T.focus.key : u;
          return kc(() => To(l, $)), !1;
        },
        $t
      ),
      i.registerUpdateListener(({ editorState: T, tags: $ }) => {
        const W = p || $.has(As);
        p = !1, l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const G = T.read(() => {
          const Ae = N();
          return A(Ae) ? Ae.focus.key : void 0;
        }), ee = h;
        if (G !== void 0 && (h = G), $.has(Tl)) {
          Ig(i, T, $), f = !0, G !== void 0 && (u = G);
          return;
        }
        if (W) {
          G !== void 0 && G !== ee && (f = !0);
          return;
        }
        f || (G !== void 0 && (u = G), E(), !(m || G === void 0) && [...l.pendingKeys].some((Ae) => Ae !== G) && (m = !0, queueMicrotask(() => {
          m = !1, !y && (C() || M(u));
        })));
      })
    );
    return () => {
      y = !0, R !== void 0 && clearTimeout(R), R = void 0, d(), L(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const XA = ["status_unknown", "status_invalid"], nb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, QA = Object.values(nb);
function ZA(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = nb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Mp(e) {
  e.classList.remove(...XA), e.removeAttribute("aria-description"), QA.includes(e.title) && e.removeAttribute("title");
}
function e0(e, t, r, n) {
  const i = (a) => a.read(() => pe().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const d = H(l)?.getTopLevelElement();
        d && a.add(d.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function t0(e) {
  const t = H(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function r0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? Ho;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = nP(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || t0(f)) continue;
            const h = H(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Mp(p);
        }
        for (const [f, p] of u) {
          const h = n.getElementByKey(f);
          h && ZA(h, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          e0(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && Mp(d);
      }
    };
  }, [n, i, t, r]), null;
}
function ao(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Vr(o);
    a && O(s) && ao(s.getChildren(), a, r);
  }
}
function ib(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Vr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = zi(o);
      if (c === void 0 || !c.includes(at)) continue;
      const l = c.split(at), d = [];
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
function co(e, t, r) {
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
function sb(e, t) {
  const r = [];
  for (const n of e)
    _y(n, t) || ((re(n) || D(n)) && r.push(n.getMarker()), O(n) && r.push(...sb(n.getChildren(), t)));
  return r;
}
function ob(e) {
  const t = [];
  for (const r of e) {
    const n = Lu(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Vr(r);
    i && t.push(...ob(i));
  }
  return t;
}
function Hu(e, t, r) {
  const n = sb(e, r), i = ob(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function ab(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = N();
  let n, i;
  if (A(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = H(t.key), i = t.offset;
  else
    return;
  if (!(!S(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Gu(e, t) {
  const r = t && cb(e, t);
  return r ? Ku(e, r.start, r.end) : e;
}
function cb(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function lb(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Uu(e, o, s);
  if (!c) return;
  const l = Gu(c, i), d = Hr(l.text, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (ui(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = mn.serializeEditorState(
    { type: Dr, version: Lr, content: d },
    s
  ).root.children;
  if (qa(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = co(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (es(u, o) === Zi(e, o) && Hu(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  ib(u, f.serialized);
  const h = n0(e), m = ub(u);
  for (let y = 0; y < h.length && y < m.length; y++)
    h[y].sid !== void 0 && m[y].number === h[y].number && (m[y].sid = h[y].sid);
  return zu(
    e,
    l,
    f.live,
    u,
    "paras",
    o,
    s
  );
}
function n0(e) {
  const t = [], r = (n) => {
    Oe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : O(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function ub(e) {
  const t = [];
  for (const r of e) {
    qh(r) && t.push(r);
    const n = Vr(r);
    n && t.push(...ub(n));
  }
  return t;
}
function i0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Fs(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = Gu(l, i), f = Hr(u.text, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (ui(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], m = Dy(h), y = e.getCategory() !== m, x = vy(e, h, m, s);
  if (x.failure !== void 0) {
    x.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const C = x.children;
  if (qa(C) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const M = co(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (es(C, o) === Zi(d, o) && Hu(d, C, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: d, category: m, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return ib(C, M.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: zu(
      d,
      u,
      M.live,
      C,
      "noteContent",
      o,
      s
    ),
    contentNodes: d,
    category: m,
    categoryChanged: y
  };
}
function Ep(e) {
  return e.$?.textType;
}
function s0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Ep(e) === Ep(t);
}
function o0(e) {
  const t = [];
  for (const r of e) {
    const n = H(r);
    n?.isAttached() && Pe(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function a0(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!U(t)) return;
  const r = e.getTextContent();
  if (kn(e)) return;
  const n = py.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Pp(e, t) {
  const r = e;
  r.marker = t, r.text = My(t, r.markerSyntax, r.nested);
}
function db(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!qe.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Pp(a.node, s);
  const c = n.getChildren().filter(P).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Pp(l.node, s);
}
function fb(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Ks(e, i, n);
  if (!o) return;
  const a = Gu(o, r), c = Hr(a.text, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (ui(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = mn.serializeEditorState(
    { type: Dr, version: Lr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...ts(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && es(d, i) === Zi(u, i) && Hu(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return zu(
    u,
    a,
    [],
    d,
    "chapter",
    i,
    n
  );
}
function pb(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (u) => {
    U(u) ? s.set(u.getKey(), u) : ve(u) ? o.set(u.getKey(), u) : n.set(u.getKey(), [u]);
  };
  for (const u of e) {
    const f = H(u);
    if (!f?.isAttached()) continue;
    const p = zs(f);
    if (p) {
      if (c(p), P(f)) {
        const h = Jy(f, t.getMarker);
        h && i.push(h);
      }
      if (U(p)) {
        const h = a0(f);
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
    const u = zs(r.node);
    u && c(u);
  }
  const d = o0(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: d,
    huskKeys: new Set(d.map((u) => u.getKey()))
  };
}
function hb(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && zi(r), s = n && zi(n);
  r && n && i !== void 0 && s !== void 0 && s0(r, n) && (r.text = i + s, e.splice(t, 1));
}
function La(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Vr(s.node) : void 0;
  if (!s || !o) return !1;
  const a = i0(e, t, r, n, i);
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
function c0(e, t, r, n, i) {
  const s = ab(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: d, huskKeys: u } = pb(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  ao(pe().getChildren(), e.root.children, f);
  for (const p of l.values()) db(p, f);
  for (const p of a.values())
    La(p, f, r, u, s);
  for (const p of o.values()) {
    const h = f.get(p[0].getKey());
    if (!h) continue;
    const m = lb(p, f, r, u, s);
    if (!m) continue;
    const y = h.siblings.indexOf(h.node);
    y < 0 || h.siblings.splice(y, p.length, ...m);
  }
  for (const p of c.values()) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = 1 + ts(p).length, y = fb(p, r, s);
    if (!y) continue;
    const x = h.siblings.indexOf(h.node);
    x < 0 || h.siblings.splice(x, m, ...y);
  }
  for (const p of d) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || hb(h.siblings, m);
  }
  return Bm(e, r.viewOptions);
}
function l0({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = Yi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        it,
        (i) => u0(i, t)
      );
  }, [r, n, t]), null;
}
function u0(e, t) {
  e.getMarker() !== kr && (e.isEmpty() || Xt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${kr}" (key ${e.getKey()})`
  ), e.setMarker(kr)));
}
function ms(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const d0 = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Ar(e) {
  return d0.exec(e)?.[1] ?? e;
}
function yn(e, t) {
  const r = e.jsonPath.slice(Ar(e.jsonPath).length);
  return { ...e, jsonPath: `${ct(t)}${r}` };
}
function gb(e, t) {
  return e.length === t.length && e.every((r, n) => r === t[n]);
}
function mb(e) {
  if (Gp(e) || Oo(e)) return !0;
  const t = yb(e);
  return t === "marker" || t === "caller";
}
const f0 = /^\['([^']+)'\]$/;
function yb(e) {
  if (wo(e))
    return f0.exec(
      e.jsonPath.slice(Ar(e.jsonPath).length)
    )?.[1];
}
function bb(e, t) {
  return mb(e) && gb(Zt(Ar(e.jsonPath)), Tr(t));
}
function kb(e, t, r) {
  if (!e.isAttached()) return;
  const [n, i] = jr(
    yn(t, Tr(e)),
    r
  );
  if (!(!n || i === void 0))
    return { key: n.getKey(), offset: i, type: O(n) ? "element" : "text" };
}
function xb(e, t) {
  const r = It(e, t, { addressDisplayBytes: !0 }), n = r && H(r.key);
  return r && r.offset > 0 && P(n) && n.getMarkerSyntax() !== "opening" ? r : void 0;
}
function Tb(e, t) {
  const r = It(e, t, { addressDisplayBytes: !0 });
  if (!r || r.offset !== 0) return;
  const n = e.spans.findIndex((o) => o.key === r.key), i = e.spans[n], s = n > 0 ? e.spans[n - 1] : void 0;
  if (!(!i || !Es(i) || !s || s.end !== i.start || !Es(s)))
    return Ay(s);
}
function p0(e, t) {
  const r = xb(e, t);
  if (r) return r;
  const n = Tb(e, t);
  if (n) return n;
  const i = It(e, t);
  return i && h0(e, i);
}
function h0(e, t) {
  if (t.type !== "text") return t;
  const r = e.spans.findIndex((a) => a.key === t.key), n = e.spans[r], i = e.spans[r + 1];
  if (!n || !i || n.end === n.start || t.offset !== n.end - n.start)
    return t;
  const s = e.text[i.start] === "\\", o = cr.test(e.text[n.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function vb(e) {
  const t = e.markerName.length + 2, r = t + e.valueLength;
  return { valueStart: t, closerStart: r, closerLength: e.markerName.length + 2 };
}
function g0(e, t, r) {
  const { keyName: n } = e, { valueStart: i, closerStart: s } = vb(e);
  return r === 0 ? { jsonPath: t, keyName: n } : r < i ? { jsonPath: t, keyName: n, keyOffset: r - 1 } : r < s ? {
    jsonPath: `${t}['${n}']`,
    propertyOffset: r - i
  } : { jsonPath: t, keyName: n, keyClosingMarkerOffset: r - s };
}
function m0(e, t) {
  const { valueStart: r, closerStart: n, closerLength: i } = vb(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if (Ro(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (No(t))
    return s(t.keyClosingMarkerOffset, i, n);
  if (bl(t)) return 0;
  if (wo(t))
    return s(t.propertyOffset, e.valueLength, r);
}
function y0(e) {
  return Ro(e) || No(e) || bl(e) ? e.keyName : yb(e);
}
function b0(e, t, r) {
  const n = p0(e.spelling, t), i = n && H(n.key);
  if (!n || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === n.key);
  return s ? g0(
    s,
    ct(Tr(i)),
    n.offset
  ) : kt(i, n.offset, r);
}
function k0(e, t) {
  let r = pe();
  for (let n = 0; n < t.length; n += 1) {
    if (!O(r)) return;
    const i = wt(r, Nt(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function Cb(e, t) {
  const r = Zt(Ar(t.jsonPath));
  if (r.length === 0) {
    if (!Dn(t)) return { kind: "live", location: t };
    const o = e.settledToLiveTopIndex(t.offset);
    if (!o) {
      const a = wt(
        pe(),
        Nt(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: a } };
    }
    return o.plan && o.indexWithinScope > 0 ? Cb(e, { jsonPath: ct([t.offset]) }) : { kind: "live", location: { ...t, offset: o.liveIndex } };
  }
  const n = e.settledToLiveTopIndex(r[0]);
  if (!n) return;
  if (n.plan)
    return {
      kind: "scope",
      plan: n.plan,
      scratchIndexes: [n.indexWithinScope, ...r.slice(1)],
      location: t
    };
  const i = [n.liveIndex, ...r.slice(1)], s = k0(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: yn(t, i) };
}
function fl(e, t) {
  t.add(e.getKey()), O(e) && e.getChildren().forEach((r) => fl(r, t));
}
function _b(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function Po(e, t, r) {
  const n = (u, f) => {
    const p = ji(e, u, f), h = _b(e, u, f);
    return p && h ? { anchor: p, position: h.start + f } : void 0;
  }, i = (u) => {
    const f = u.end - u.start, p = ji(e, u.key, f);
    return p ? { anchor: p, position: u.start + f } : void 0;
  };
  if (!O(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((u) => fl(u, s));
  const o = [...e.spans].reverse().find((u) => s.has(u.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  fl(t, a);
  const c = e.spans.find((u) => a.has(u.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((u) => !a.has(u.key) && H(u.key)?.isBefore(t));
  if (l) return i(l);
  const d = e.spans[0];
  return d && !d.isSentinel ? n(d.key, 0) : void 0;
}
function Sb(e, t) {
  const r = y0(t);
  if (r === void 0) return;
  const n = Zt(Ar(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = H(s.ownerKey);
      if (s.keyName !== r || !o || !gb(Tr(o), n))
        continue;
      const a = m0(s, t), c = i.spelling.spans.find((d) => d.key === s.ownerKey), l = a !== void 0 && c ? ji(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: Ao(i.spelling, c.start + a)
        }
      };
    }
}
function x0(e, t, r, n) {
  const i = Sb(t, r);
  if (i) return i.resolution;
  const [s, o] = jr(r, n.viewOptions);
  if (!s || o === void 0) return;
  const a = qu(e, s), c = a && t.find((f) => f.sentinelIndex === a.sentinelIndex);
  if (c) {
    const f = Po(c.spelling, s, o);
    return f && {
      kind: "literal",
      run: c,
      anchor: f.anchor,
      atWordByte: Ao(c.spelling, f.position)
    };
  }
  if (!a) {
    const f = Po(e, s, o);
    return f ? {
      kind: "anchor",
      anchor: f.anchor,
      atWordByte: Ao(e, f.position)
    } : void 0;
  }
  const l = $u(a.member, s);
  if (!l) return;
  const d = U(a.member) ? Fs(a.member, n.getMarker, n.viewOptions)?.out : void 0, u = d && Po(d, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: O(s) ? "element" : "text",
    noteAnchor: u && {
      anchor: u.anchor,
      atWordByte: Ao(d, u.position)
    },
    isNoteOwnBytes: U(a.member) && bb(r, a.member)
  };
}
function T0(e, t, r) {
  const n = Sb(e, t);
  if (n) return n.resolution !== void 0;
  const [i, s] = jr(t, r);
  return i !== void 0 && s !== void 0;
}
function Ao(e, t) {
  const r = e.text[t];
  return r !== void 0 && !cr.test(r);
}
function Mb(e, t) {
  if (t.type !== "text") return t;
  const r = _b(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && cr.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function Ju(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function v0(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function Yu(e) {
  const { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } = e;
  return t && r && n && i ? { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } : void 0;
}
function Eb(e) {
  const t = e.liveNodes[0];
  if (!t.isAttached()) return;
  if (e.kind !== "note" && O(t))
    return { key: t.getKey(), offset: 0, type: "element" };
  const r = t.getParent();
  return r ? { key: r.getKey(), offset: t.getIndexWithinParent(), type: "element" } : void 0;
}
function ln(e, t) {
  return t?.warn(
    `[positions] A settled location in a pending ${e.kind} scope could not be lined up with its live bytes; it resolves to the front of the scope.`
  ), Eb(e);
}
function xc(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), Eb(e);
}
function Ap(e) {
  const t = [];
  let r = 0;
  for (const n of e.spans) {
    n.isSentinel && t.push(n.end > n.start ? r : void 0);
    for (let i = n.start; i < n.end; i += 1)
      cr.test(e.text[i]) || (r += 1);
  }
  return t;
}
function C0(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = Ap(s)[r];
  if (a === void 0) return ln(e, n);
  const c = Ap(i).findIndex(
    (f) => f !== void 0 && Ou(o, f, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], d = l?.isAttached() ? l.getParent() : void 0;
  if (l && d)
    return { key: d.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const u = It(i, {
    nonWsBefore: io(o, a, "settled"),
    wsRun: 0
  });
  return u ? Ju(e, u) : ln(e, n);
}
function Pb(e, t, r, n, i) {
  const s = Yu(e);
  if (!s) return ln(e, i);
  const o = !Dn(n), a = Qu(
    s.liveFragment,
    so(s.alignment, t, "toLive"),
    o
  ), c = It(s.liveFragment, a, {
    addressDisplayBytes: o
  });
  return c ? Ju(e, r ? Mb(s.liveFragment, c) : c) : ln(e, i);
}
function _0(e, t, r, n, i, s) {
  const o = v0(r.sentinelMap, n);
  if (!o) return C0(t, r, n.sentinelIndex, s);
  const a = r.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return xc(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && n.isNoteOwnBytes)
    return kb(a, i, e.viewOptions);
  if (c?.kind === "note")
    return n.noteAnchor ? Pb(
      c,
      n.noteAnchor.anchor,
      n.noteAnchor.atWordByte,
      i,
      s
    ) : ln(c, s);
  let l = a;
  for (const d of n.path) {
    if (!O(l)) return xc(t, s);
    const u = l.getChildAtIndex(d);
    if (!u) return xc(t, s);
    l = u;
  }
  return { key: l.getKey(), offset: n.offset, type: n.type };
}
function S0(e, t, r) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = jr(t, r);
    return vr(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (vr(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function M0(e, t, r) {
  const { plan: n } = r, { logger: i, viewOptions: s } = e.tier2;
  if (n.kind === "note" && r.scratchIndexes.length === 1 && mb(r.location))
    return kb(n.liveNodes[0], r.location, t.viewOptions);
  const o = yn(r.location, r.scratchIndexes);
  if (!n.scratch.getEditorState().read(() => T0(n.settledOnlyRuns, o, s))) return;
  const c = S0(n, o, s);
  if (c) return c;
  const l = Yu(n);
  if (!l) return ln(n, i);
  const d = n.scratch.getEditorState().read(
    () => x0(
      l.scratchFragment,
      n.settledOnlyRuns,
      o,
      e.tier2
    )
  );
  if (!d) return ln(n, i);
  if (d.kind === "preserved")
    return _0(t, n, l, d, r.location, i);
  if (d.kind === "literal") {
    const { run: u, anchor: f } = d, p = ky(u, f.nonWsBefore, "toLiteral") ?? io(u.inner, f.nonWsBefore, "settled"), h = !Dn(r.location), m = Qu(
      l.liveFragment,
      {
        nonWsBefore: u.liveBefore + p,
        wsRun: f.nonWsBefore === 0 ? u.liveWsBefore + f.wsRun : f.wsRun
      },
      h
    ), y = It(l.liveFragment, m, {
      addressDisplayBytes: h
    });
    return y ? Ju(
      n,
      d.atWordByte ? Mb(l.liveFragment, y) : y
    ) : ln(n, i);
  }
  return Pb(n, d.anchor, d.atWordByte, r.location, i);
}
function wp(e, t, r) {
  const n = Cb(t, r);
  if (!n) return;
  if (n.kind === "live") {
    const [o, a] = jr(n.location, t.viewOptions);
    return o && a !== void 0 ? n.location : void 0;
  }
  const i = M0(e, t, n), s = i && H(i.key);
  return s ? kt(s, i.offset, t.viewOptions) : void 0;
}
function E0(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = wp(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = wp(e, t, r.end);
  if (i)
    return { ...r, start: n, end: i };
}
function Ab(e, t) {
  const r = Zt(Ar(t.jsonPath));
  return r.length === 0 ? t : yn(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function wb(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function la(e, t) {
  const r = t.liveNodes[0], n = wb(e, t);
  if (n) {
    const s = Zu(e, n, r, 0);
    return typeof s == "object" ? Zt(Ar(s.jsonPath)) : void 0;
  }
  const i = P0(r, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function P0(e, t) {
  return !Qe(e) || !vr(e.getParent()) ? Tr(e) : [Oi(e, 0, Nt(t)).index];
}
function Xu(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function A0(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function w0(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!O(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return kt(s, n, i);
  }
}
function O0(e, t) {
  const r = xy(e, t);
  if (r)
    return {
      run: r,
      within: { nonWsBefore: 0, wsRun: t.wsRun - r.liveWsBefore }
    };
  const n = Ru(e, t);
  if (n)
    return {
      run: n.run,
      within: n.within ?? {
        nonWsBefore: io(n.run.inner, n.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function N0(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const r = H(e.key);
  return !(P(r) && r.getMarkerSyntax() !== "opening");
}
function Qu(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = cr.test(e.text[o]);
      if (n < t.nonWsBefore)
        a || (n += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || N0(s, r) ? t : { ...t, wsRun: i };
    }
  return t;
}
function Ob(e, t, r, n, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, d = qu(o, r);
  if (d) {
    const m = o.sentinels[d.sentinelIndex];
    if (!c[d.sentinelIndex]?.some((M) => M !== void 0)) {
      const M = m[0].getParent();
      if (M)
        return Ob(
          e,
          t,
          M,
          m[0].getIndexWithinParent(),
          i,
          s
        );
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const y = $u(d.member, r);
    if (!y) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const x = c[d.sentinelIndex]?.[d.memberIndex];
    if (!x) return;
    const C = e.scratch.getEditorState().read(
      () => w0(a, x, y, n, i)
    );
    if (C) return C;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const u = Po(o, r, A0(e, r, n));
  if (!u) return;
  const f = O0(e.settledOnlyRuns, u.anchor);
  if (f)
    return e.scratch.getEditorState().read(() => b0(f.run, f.within, i));
  const p = so(l, u.anchor, "toSettled"), h = !Dn(
    kt(r, n, i)
  );
  return e.scratch.getEditorState().read(() => {
    const m = xb(a, p), y = m && H(m.key);
    if (y) return kt(y, m.offset, i);
    const x = Tb(a, p), C = x && H(x.key);
    if (C)
      return kt(C, x.offset, i);
    const M = Qu(a, p, h), R = It(a, M, { addressDisplayBytes: h });
    return R && R0(R, i);
  });
}
function R0(e, t) {
  const r = H(e.key);
  if (!r) return;
  const n = vr(r) && e.offset >= r.getChildrenSize() && r.getLastDescendant();
  return n ? kt(
    n,
    O(n) ? n.getChildrenSize() : n.getTextContentSize(),
    t
  ) : kt(r, e.offset, t);
}
function Zu(e, t, r, n) {
  if (t.kind === "note") {
    const a = kt(r, n, e.viewOptions);
    if (bb(a, t.liveNodes[0])) {
      const c = la(e, t);
      return c && yn(a, c);
    }
  }
  const i = Yu(t);
  if (!i) return;
  const s = Ob(
    t,
    i,
    r,
    n,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = Xu(
    t,
    la(e, t),
    Zt(Ar(s.jsonPath))
  );
  return o && yn(s, o);
}
function q0(e) {
  const t = [], r = (n) => {
    if (O(n))
      n.getChildren().forEach((i, s) => {
        t.push({ node: n, offset: s }), r(i);
      }), t.push({ node: n, offset: n.getChildrenSize() });
    else if (S(n))
      for (let i = 0; i <= n.getTextContentSize(); i += 1)
        t.push({ node: n, offset: i });
  };
  return e.liveNodes.forEach(r), t;
}
function $0(e, t) {
  const r = t.scratch.getEditorState().read(() => kt(pe(), 0, e.viewOptions)), n = Xu(
    t,
    la(e, t),
    Zt(Ar(r.jsonPath))
  );
  if (n) return yn(r, n);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = wb(e, t);
  return o ? Rb(e, o, s, i.getIndexWithinParent()) : Ab(
    e,
    kt(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function Nb(e, t, r) {
  const n = q0(t), i = r ? n.findIndex((s) => s.node.is(r.node) && s.offset === r.offset) : -1;
  for (let s = (i < 0 ? n.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = n[s], c = Zu(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return $0(e, t);
}
function Rb(e, t, r, n) {
  return Zu(e, t, r, n) ?? Nb(e, t, { node: r, offset: n });
}
function Op(e, t, r) {
  const n = e.planContaining(t);
  if (n) return Rb(e, n, t, r);
  const i = vr(t) && r >= t.getChildrenSize() && t.getLastChild(), s = i ? e.planContaining(i) : void 0;
  return s ? I0(e, s) ?? Nb(e, s, void 0) : Ab(e, kt(t, r, e.viewOptions));
}
function I0(e, t) {
  const r = t.scratch.getEditorState().read(() => {
    const i = pe();
    return kt(i, i.getChildrenSize(), e.viewOptions);
  }), n = Xu(
    t,
    la(e, t),
    Zt(Ar(r.jsonPath))
  );
  return n && yn(r, n);
}
function L0(e) {
  const t = cu(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = N();
  if (!A(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = Op(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = Op(e, o.getNode(), o.offset);
  if (a)
    return { start: s, end: a };
}
function qb(e, t, r) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && Qe(i) ? $P(i, r.getMarker, r.viewOptions) : t.every(re) ? Uu(t, r.getMarker, r.viewOptions) : IP(t, r.getMarker, r.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(ve);
    return i && Ks(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(U);
  return n && Fs(n, r.getMarker, r.viewOptions)?.out;
}
function D0(e, t) {
  const r = ih({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = pe();
        t.forEach((i) => n.append(Vi(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const Np = "\0";
function $b(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), O(r) && $b(r.getChildren(), t);
  return t;
}
function U0(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(Np), a = $b(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(Np);
}
function ed(e, t = []) {
  for (const r of e)
    U(r) && t.push(r), O(r) && ed(r.getChildren(), t);
  return t;
}
function Da(e, t, r, n, i, s, o) {
  const a = D0(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l, settledSide: d } = a.getEditorState().read(() => {
    const h = qb(e, pe().getChildren(), o.tier2);
    return {
      settledCount: wt(
        pe(),
        Nt(o.tier2.viewOptions)
      ).length,
      scratchFragment: h,
      settledSide: h && Nu(h)
    };
  }), u = { kind: e, liveNodes: t, liveCut: n, scratch: a, scratchFragment: l, settledCount: c };
  if ((r?.sentinels.length ?? 0) === 0 && (d?.runs.length ?? 0) === 0) {
    const h = r && d && aa(oa(r, []), d).alignment;
    return { ...u, liveFragment: r, sentinelMap: [], settledOnlyRuns: [], alignment: h };
  }
  const f = r && s && qy(r, s.live), p = f && d && aa(oa(f, s.live), d);
  return p ? { ...u, liveFragment: f, ...p } : {
    ...u,
    liveFragment: r,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function td(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = cb(e, t);
  return r ? {
    liveFragment: Ku(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function rd(e, t) {
  for (const r of e.noteGlyphRenames.values())
    db(r, t);
}
function F0(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = td(t, i), a = oo(e), c = /* @__PURE__ */ new Map();
  if (ao([e], [a], c), rd(r, c), !La(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && co(t, c, r.huskKeys);
  return Da("note", [e], s, o, [a], l, n);
}
function K0(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = td(t, i), a = e.map(oo), c = /* @__PURE__ */ new Map();
  ao(e, a, c), rd(r, c), ed(e).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => La(u, c, n.tier2, r.huskKeys, i)
  );
  const l = lb(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const d = t && co(t, c, r.huskKeys);
  return Da("para", e, s, o, l, d, n);
}
function z0(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = td(t, n), o = fb(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...ts(e)];
  return Da("chapter", a, i, s, o, void 0, r);
}
function B0(e, t, r, n, i, s) {
  const o = oo(e), a = /* @__PURE__ */ new Map();
  ao([e], [o], a), rd(n, a), ed([e]).filter((d) => n.noteScopes.has(d.getKey())).forEach(
    (d) => La(d, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const d of r) {
    const u = a.get(d.getKey());
    if (!u) continue;
    const f = u.siblings.indexOf(u.node);
    f < 0 || (hb(u.siblings, f), c.add(d.getKey()));
  }
  if (c.size === 0) return;
  const l = t && co(t, a, c);
  return Da("para", [e], t, void 0, [o], l, i);
}
function j0(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function Rp(e, t) {
  return {
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (r) => r,
    settledToLiveTopIndex: (r) => ({ liveIndex: r, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e,
    logger: t
  };
}
function V0(e) {
  return e.liveNodes.every((r) => r.isAttached()) ? (e.liveFragment?.spans ?? []).every((r) => H(r.key) !== null) : !1;
}
function qp(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function W0(e, t) {
  const r = wt(pe(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = qp(r[o]), c = a && e.get(a.getKey());
    if (!c) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((u) => u.getKey()));
    let d = 0;
    for (; o + d < r.length; ) {
      const u = qp(r[o + d]);
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
function $p(e) {
  const t = ab(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), Rp(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = pb(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const h = f.liveNodes[0].getKey();
    n.set(h, f), f.liveNodes.forEach((m) => i.set(m.getKey(), f)), p && f.liveNodes.forEach((m) => s.set(m.getKey(), f));
  }, c = (f, p, h, m) => {
    o.add(f);
    const y = qb(p, h, e.tier2), x = U0(
      p,
      h,
      y?.text ?? "",
      e.tier2,
      t
    ), C = e.cache.entries.get(f);
    if (C?.signature === x && V0(C.plan)) return C.plan;
    const M = m(y);
    return M ? e.cache.entries.set(f, { signature: x, plan: M }) : e.cache.entries.delete(f), M;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => F0(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => K0(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...ts(f)],
        (p) => z0(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!(re(p) || Qe(p)) || j0(f, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(f), l.set(p.getKey(), h);
  }
  for (const [f, { para: p, husks: h }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (m) => B0(p, m, h, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0)
    return Rp(e.tier2.viewOptions, e.tier2.logger);
  const { liveToSettled: d, settledToLive: u } = W0(
    s,
    Nt(e.tier2.viewOptions)
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
    viewOptions: e.tier2.viewOptions,
    logger: e.tier2.logger
  };
}
function H0({
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
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, ua(s, e) || G0(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = pl(r);
        Ip(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: vo(s) === vo(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        pe().getChildren().filter(ze).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (pl(r) || Ip(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: vo(a) === vo(c)
      }));
    };
    return nt(
      ...[Ut, Er].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      Cr,
      () => {
        const i = n.current;
        return i.phase === "idle" && Z0(i, Y0()), !1;
      },
      $t
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Cr, void 0));
    };
    return nt(
      r.registerMutationListener(Ot, i),
      r.registerMutationListener(bt, i)
    );
  }, [r]), j(() => {
    const i = () => nw(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function G0(e, t, r) {
  if (J0(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = pl(t);
  (!n || n === r.book) && t.update(() => Ib(t, r.chapterNum, r.verseNum));
}
function J0(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ua(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function Y0() {
  const e = N(), t = Hl(e);
  if (!t) return;
  const r = nd(), n = Sg(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Zl(t, e), { verseNum: o, verse: a } = yC(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function pl(e) {
  return e.getEditorState().read(() => nd()?.getCode() || void 0);
}
function nd() {
  return pe().getChildren().find(lt);
}
function Ip(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Tc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Tc(e, t), e.phase = "navigating") : i && Tc(e, t), r && r !== e.scrRef.book && Ub(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Tc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Ib(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function Ib(e, t, r) {
  const n = N()?.clone();
  X0(t, r);
  const i = N();
  i && !(n && i.is(n)) && e.dispatchCommand(Pl, void 0);
}
function X0(e, t) {
  const r = Hl(N()), n = eu(r)?.getNumber(), i = Sg(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Og(n) ? Db(t, n) : parseInt(n, 10) === t))
    return;
  const o = pe().getChildren(), a = _g(o, e);
  if (!a) return;
  const c = Ev(o, a), l = xv(c, !0);
  Mv(c, l);
  let d;
  try {
    d = fC(c, t);
  } catch {
    return;
  }
  d && (re(d) ? !S(d.getFirstChild()) && Qi(d) || or(d, 0) : Q0(d));
}
function Q0(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ge(n)) {
    or(t, r);
    return;
  }
  const i = va(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (S(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = O(n) && !U(n) ? Lb(n) : void 0;
  s ? s.select(0, 0) : or(t, r);
}
function Lb(e) {
  const t = e.getFirstChild();
  if (S(t)) return t;
  if (O(t) && !U(t)) return Lb(t);
}
function vo(e) {
  return e.read(() => {
    const t = pe().getChildren().find(ze);
    return `${nd()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function Z0(e, t) {
  e.phase !== "navigating" && t && (ew(t, e.scrRef) || Ub(e, tw(t, e.scrRef)));
}
function ew(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Db(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Db(e, t) {
  try {
    return Gl(e, t);
  } catch {
    return !1;
  }
}
function tw(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const rw = 8;
function Ub(e, t) {
  return ua(t, e.scrRef) || e.pendingEchoes.some((r) => ua(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > rw && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ua(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function nw(e) {
  e.phase = "idle";
}
function iw(e) {
  return lt(e) ? `${e.__code}` : ve(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : to(e) ? `${e.__marker} "${e.__number}"` : Qt(e) ? `${e.__caller}` : ci(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : re(e) ? `${e.__marker}` : S(e) ? `"${e.__text}"${sw(e)}` : ye(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Oe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function sw(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Un]) : "";
}
function ow() {
  const [e] = le();
  return /* @__PURE__ */ _(
    Fk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: iw,
      editor: e
    }
  );
}
const Fb = Wp(null), Lp = 4;
function aw({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = Hp(Fb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function cw({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = fe(), [s, o] = fe(), a = de(
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
  }, l = Fe(() => ({ registerItem: a }), [a]);
  return j(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ _(Fb.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function lw({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Z(null), c = Z(null), [l, d] = fe(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: m } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Lp}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
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
          const { top: m } = p.getBoundingClientRect(), y = m + p.offsetHeight + Lp;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Me(Ln, { children: [
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
          i && /* @__PURE__ */ _("span", { className: i }),
          t && /* @__PURE__ */ _("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ _("i", { className: "chevron-down" })
        ]
      }
    ),
    l && qn(
      /* @__PURE__ */ _(cw, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const hl = {
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
}, gl = {
  ...hl,
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
function uw({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ _(
    lw,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + dw(t),
      buttonLabel: fw(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(hl).map((n) => /* @__PURE__ */ Me(
        aw,
        {
          className: "item block-marker " + pw(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: hl[n] })
          ]
        },
        n
      ))
    }
  );
}
function dw(e) {
  return e && e in gl ? e : "ban";
}
function fw(e) {
  return e && e in gl ? gl[e] : "No Style";
}
function pw(e) {
  return e ? "active dropdown-item-active" : "";
}
function Dp() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const hw = ti(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = fe(s), [c, l] = fe(), [d, u] = fe(!1), [f, p] = fe(!1), h = de(
    ({
      canUndo: m,
      canRedo: y,
      blockMarker: x,
      contextMarker: C
    }) => {
      u(m), p(y), l(x), n?.({
        canUndo: m,
        canRedo: y,
        blockMarker: x,
        contextMarker: C
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    Cr,
    (m, y) => (a(y), !1),
    Ir
  ), [s]), /* @__PURE__ */ Me(Ln, { children: [
    /* @__PURE__ */ _(Om, { onStateChange: h }),
    /* @__PURE__ */ Me("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(oh, void 0);
          },
          title: $o ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(ah, void 0);
          },
          title: $o ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(Dp, {}),
      o === s && /* @__PURE__ */ Me(Ln, { children: [
        /* @__PURE__ */ _(
          uw,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ _(Dp, {})
      ] }),
      /* @__PURE__ */ _("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), gw = Ea(), mw = {}, yw = {};
function bw() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Up(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function Fp() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return S(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function kw(e) {
  const t = [], r = (n, i) => n?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(ct(a)), r(s.content, a);
  });
  return r(e?.content, []), t;
}
function xw(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function Tw({
  listener: e
}) {
  const [t] = le();
  return Bs(
    () => t.registerUpdateListener((r) => e(r, t)),
    [t, e]
  ), null;
}
const Kb = ti(function({
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
  const u = Z(null), f = Z(null), p = Z(null), h = Z(t), m = Z(!1), y = Z(!1), x = Z(void 0), C = Z(void 0), M = Z(void 0), R = Z({ entries: /* @__PURE__ */ new Map() }), E = Z(void 0), L = Z(0), T = Z(!0), $ = Z(void 0), [W, G] = fe(t), [ee, Ae] = fe(0), [X, Ie] = fe(), {
    isReadonly: me = !1,
    structureProtectionMode: ur = "off",
    hasExternalUI: Q = !1,
    hasSpellCheck: z = !1,
    textDirection: se = "ltr",
    markerMenuTrigger: je = "\\",
    view: Ze,
    nodes: ue,
    debug: Qr = !1,
    contextMenu: Cn,
    styleInfo: Ft,
    markerSettleDelayMs: Ua
  } = a ?? yw, dr = Ze ?? gw, di = Ds(dr) && (dr.markerMode !== "hidden" || !dr.hasSpacing || dr.hasGutterParaMarkers || dr.hasActiveTextFocusBox) ? {
    ...dr,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : dr, fi = Z(di);
  yr(fi.current, di) || (fi.current = di);
  const ie = fi.current, dt = Fe(() => ue ?? mw, [ue]), Re = Fe(() => Cn, [Cn]), fr = Fe(
    () => nC(Ft ?? Ho),
    [Ft]
  ), Ce = Z(c);
  yr(Ce.current, c) || (Ce.current = c);
  const _e = Ce.current, be = Ds(ie), ft = me || be, rs = di !== dr;
  j(() => {
    be && !me && _e?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), rs && _e?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [be, me, rs, _e]);
  const vt = Z(null), lo = Fe(() => {
    if (ie.markerMode !== "editable") return;
    const w = Ft ?? Ho;
    return {
      getContext: () => vt.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (F) => dP(
        w,
        F,
        dt.extraValidMarkers
      ),
      getEnterItems: (F) => fP(
        w,
        F,
        dt.extraValidMarkers
      ),
      apply: (F, B) => {
        const Y = vt.current;
        Y && (B.trigger === "enter" ? Y.splitParagraphWithMarker(F.marker) : Y.applyMarkerMenuSelection(F, B));
      },
      commitTypedCloser: (F) => {
        vt.current?.commitTypedCloser(F);
      }
    };
  }, [ie, Ft, dt.extraValidMarkers]), pi = (w) => {
    if (be)
      throw new Error(
        `Cannot ${w} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Zr = (w) => {
    if (pi(w), ft) throw new Error(`Cannot ${w} in readonly mode`);
  }, _n = Fe(
    () => [Xe, ...be ? U_ : gu],
    [be]
  ), pr = Fe(
    () => ({
      namespace: "platformEditor",
      theme: { ...ay, showCharMarkerTitles: ie.showCharMarkerTitles },
      editable: !ft,
      editorState: void 0,
      // Handling of errors during update
      onError(w) {
        throw w;
      },
      nodes: _n
    }),
    [ft, _n, ie.showCharMarkerTitles]
  );
  bo.initialize(_e);
  function Ct(w) {
    if (w !== void 0 && !R1(w, dt.extraValidMarkers))
      throw new Error(`Unsupported character marker '${w}'`);
  }
  const Rt = de(() => {
    const w = u.current;
    if (!w) return h.current;
    const F = () => {
      if (!m.current) return;
      const er = bo.deserializeEditorState(w.getEditorState(), ie);
      er && (h.current = er, m.current = !1);
    }, B = Kd(w), Y = C.current;
    if ((!B || B.size === 0) && !Y)
      return F(), h.current;
    const Te = w.getEditorState(), oe = M.current, Le = {
      editorState: Te,
      pendedKeys: B ? [...B].sort().join(",") : "",
      transientInput: Y,
      caretKey: oe?.key,
      caretOffset: oe?.offset,
      viewOptions: ie,
      getMarker: fr
    }, st = E.current;
    if (st && xw(st.key, Le)) return st.usj;
    const hr = Te.toJSON(), mt = Te.read(
      () => c0(
        hr,
        B ?? /* @__PURE__ */ new Set(),
        { viewOptions: ie, getMarker: fr, logger: _e },
        Y,
        oe
      )
    );
    return mt ? (E.current = { key: Le, usj: mt }, mt) : (F(), h.current);
  }, [ie, fr, _e]), Kt = de(() => {
    const w = u.current;
    if (!w) return;
    const F = {
      pendedKeys: Kd(w) ?? /* @__PURE__ */ new Set(),
      transientInput: C.current,
      lastKnownCaret: M.current,
      tier2: { viewOptions: ie, getMarker: fr, logger: _e },
      nodes: _n,
      cache: R.current
    };
    return ms(F) && F.cache.entries.clear(), F;
  }, [ie, fr, _e, _n]), wr = de(
    (w) => {
      const F = u.current, B = Kt();
      if (!(!F || !B))
        return ms(B) ? w : F.getEditorState().read(() => {
          const Y = $p(B);
          return E0(B, Y, w);
        });
    },
    [Kt]
  );
  j(() => (T.current = !0, () => {
    T.current = !1;
  }), []);
  const en = de(
    (w, F) => w.read(() => {
      const B = Kt(), Y = B && L0($p(B));
      return !Y && A(N()) && _e?.warn(
        `${F} refused: the selection could not be expressed against the document the host is reading`
      ), Y;
    }),
    [Kt, _e]
  ), ns = de(
    (w) => {
      if (!i) return;
      const F = u.current, B = Kt();
      L.current += 1;
      const Y = L.current;
      if (!F || !B || ms(B)) {
        i(w);
        return;
      }
      queueMicrotask(() => {
        if (!T.current || Y !== L.current || u.current !== F) return;
        const Te = en(F, "onSelectionChange");
        Y === L.current && i(Te);
      });
    },
    [i, Kt, en]
  ), Or = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const w = u.current?.getRootElement();
      return !!w && w.ownerDocument.activeElement === w;
    },
    undo() {
      u.current?.dispatchCommand(oh, void 0);
    },
    redo() {
      u.current?.dispatchCommand(ah, void 0);
    },
    cut() {
      Zr("cut"), u.current?.dispatchCommand(Kn, null);
    },
    copy() {
      u.current?.dispatchCommand(ha, null);
    },
    paste() {
      Zr("paste"), u.current && ku(u.current);
    },
    pastePlainText() {
      Zr("paste as plain text"), u.current && xu(u.current);
    },
    getUsj() {
      return Rt();
    },
    commitPendingMarkerEdits() {
      u.current?.update(
        () => {
          u.current?.dispatchCommand(rb, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(w) {
      if (!w) {
        C.current = void 0;
        return;
      }
      const F = u.current?.getEditorState().read(() => {
        const B = N();
        return A(B) && B.isCollapsed() ? B.focus.key : void 0;
      });
      C.current = { input: w, nodeKey: F ?? M.current?.key };
    },
    setUsj(w) {
      if (!yr(h.current, w)) {
        h.current = w, C.current = void 0;
        const F = yr(W, w);
        G(w), F && Ae((B) => B + 1);
      }
    },
    applyUpdate(w, F = "remote") {
      if (be && F === "remote") {
        Ce.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      pi("apply an update"), y.current = F === "local";
      try {
        u.current?.update(
          () => {
            F === "remote" && zn(ws), oS(w, ie, dt, _e);
          },
          { discrete: !0 }
        );
      } finally {
        y.current = !1;
      }
      const B = u.current?.getEditorState();
      if (!B) return;
      const Y = bo.deserializeEditorState(B, ie);
      if (Y) {
        const Te = !yr(h.current, Y);
        Te && (h.current = Y);
        const oe = Rt();
        if (oe && (Te || !yr(W, Y))) {
          const Le = Zd(w, B, "apply");
          $.current = oe, s?.(oe, w, F, Le);
        }
      }
    },
    replaceEmbedUpdate(w, F) {
      const B = u.current?.read(() => AC(w, F));
      B ? this.applyUpdate(B) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${w}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      const w = u.current;
      if (!w) return;
      w.read(() => {
      });
      const F = Kt();
      return !F || ms(F) ? w.read(() => cu(ie)) : en(w, "getSelection");
    },
    setSelection(w) {
      const F = wr(w);
      if (!F) {
        _e?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      u.current?.update(() => {
        const B = au(F, ie);
        B !== void 0 && (un(B), (!Wi().isEditable() || Up(B.anchor) && Up(B.focus)) && u.current?.dispatchCommand(Cr, void 0));
      });
    },
    setAnnotation(w, F, B, Y, Te) {
      let oe, Le, st, hr;
      typeof Y == "function" || Y === void 0 ? (oe = Y, Le = Te) : (oe = Y.onClick, Le = Y.onRemove, st = Y.onMouseEnter, hr = Y.onMouseLeave);
      const mt = wr(w);
      if (!mt) {
        _e?.warn(
          `setAnnotation refused for ${F} "${B}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        mt,
        Ed(F),
        B,
        oe,
        Le,
        st,
        hr
      );
    },
    removeAnnotation(w, F) {
      f.current?.removeAnnotation(Ed(w), F);
    },
    formatPara(w) {
      Zr("format a paragraph"), u.current?.update(() => {
        const F = N();
        if (!A(F)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${w}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        Bk(F, () => qs(w));
        const B = N();
        if (!A(B)) return;
        const Y = /* @__PURE__ */ new Set();
        B.getNodes().forEach((Te) => {
          const oe = Te.getTopLevelElement();
          re(oe) && Y.add(oe);
        }), Y.forEach((Te) => Ky(Te, w, ie));
      });
    },
    getElementByKey(w) {
      return u.current?.read(
        () => u.current?.getElementByKey(w) ?? void 0
      );
    },
    removeCharacterMarker(w) {
      if (ft) throw new Error("Cannot remove character marker in readonly mode");
      Ct(w);
      let F = !1;
      return u.current?.update(
        () => {
          const B = N();
          A(B) && (F = ty(B, w, ie));
        },
        { discrete: !0 }
      ), F;
    },
    replaceCharacterMarker(w, F) {
      if (ft) throw new Error("Cannot replace character marker in readonly mode");
      Ct(w), Ct(F);
      let B = !1;
      return u.current?.update(
        () => {
          const Y = N();
          A(Y) && (B = V1(Y, w, F));
        },
        { discrete: !0 }
      ), B;
    },
    extendCharacterMarker(w, F) {
      if (ft) throw new Error("Cannot extend character marker in readonly mode");
      Ct(w), F?.forEach(
        (Y) => Ct(Y)
      );
      let B = !1;
      return u.current?.update(
        () => {
          const Y = N();
          A(Y) && (B = W1(
            Y,
            w,
            F,
            ie
          ));
        },
        { discrete: !0 }
      ), B;
    },
    insertMarker(w) {
      if (ft) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!Zc(w, dt.extraValidMarkers))
        throw new Error(`Unsupported marker '${w}'`);
      const F = el(
        w,
        x,
        ie,
        dt,
        _e,
        void 0,
        Ft
      );
      return F.action({ editor: u.current, reference: r }), F.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!me)
        return u.current?.getEditorState().read(() => gA());
    },
    applyMarkerMenuSelection(w, F) {
      if (me) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (w.kind !== "closeTag" && !Zc(w.marker, dt.extraValidMarkers))
        throw new Error(`Unsupported marker '${w.marker}'`);
      let B;
      return u.current.update(() => {
        B = xA(w, F, r, {
          expandedNoteKeyRef: x,
          viewOptions: ie,
          nodeOptions: dt,
          logger: c,
          styleInfo: Ft
        });
      }), B;
    },
    splitParagraphWithMarker(w) {
      if (me) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        Hy(w, ie);
      });
    },
    commitTypedMarker(w, F) {
      if (me) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let B = !1;
      return u.current.update(() => {
        B = kA(w, F), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(w) {
      if (me) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let F = !1;
      return u.current.update(() => {
        F = Wy(w), F || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), F;
    },
    insertNote(w, F, B) {
      Zr("insert a note");
      const Y = B && wr(B);
      if (B && !Y) {
        _e?.warn(
          `insertNote refused for \\${w}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      u.current?.update(() => {
        const Te = dm(
          w,
          F,
          Y,
          r,
          ie,
          dt,
          _e
        );
        Te && !Te.getIsCollapsed() && (x.current = Te.getKey());
      });
    },
    selectNote(w) {
      const F = u.current;
      if (!F) return;
      const B = Kt();
      if (typeof w == "string" || !B || ms(B)) {
        F.update(() => {
          const oe = hf(w);
          oe && (gf(oe, ie), oe.getIsCollapsed() || (x.current = oe.getKey()));
        });
        return;
      }
      const Y = kw(Rt())[w], Te = Y ? wr({ start: { jsonPath: Y } }) : void 0;
      Te && F.update(() => {
        const [oe, Le] = jr(Te.start, ie);
        if (!oe || Le === void 0) return;
        const st = U(oe) ? oe : rt(oe, U);
        U(st) ? (gf(st, ie), st.getIsCollapsed() || (x.current = st.getKey())) : S(oe) && oe.select(Le, Le);
      });
    },
    getNoteOps(w) {
      return u.current?.read(() => {
        const F = hf(w);
        if (F)
          return ru(F);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  vt.current = Or, yl(d, () => Or), j(() => {
    const w = u.current;
    if (w)
      return w.registerUpdateListener(({ editorState: F }) => {
        const B = F.read(Fp);
        B && (M.current = B);
      });
  }, []);
  const Sn = Z({ onUsjChange: s, viewOptions: ie, isBlockVerse: be, readSettledUsj: Rt });
  Sn.current = { onUsjChange: s, viewOptions: ie, isBlockVerse: be, readSettledUsj: Rt };
  const hi = de((w, F) => {
    const { editorState: B, dirtyElements: Y, dirtyLeaves: Te, tags: oe } = w;
    if (Y.size === 0 && Te.size === 0) return;
    if (oe.has(El)) {
      $.current = h.current;
      return;
    }
    if (oe.has(ws) || y.current) return;
    if (xd.some((Nr) => oe.has(Nr))) {
      m.current = !0;
      return;
    }
    const Le = Sn.current;
    if (Le.isBlockVerse) return;
    Ig(F, B, oe);
    const st = B.read(Fp);
    st && (M.current = st);
    const hr = iS(w, {
      ignoreTags: xd
    }), mt = hr ? [] : new wi(B.read(() => sS(F, w))).chop().ops;
    if (!hr) {
      const Nr = bo.deserializeEditorState(B, Le.viewOptions);
      Nr && (h.current = Nr);
    }
    if (!Le.onUsjChange) return;
    const er = Le.readSettledUsj();
    er && (mt.length === 0 && yr($.current, er) || ($.current = er, mt.length === 0 ? Le.onUsjChange(er, void 0, "local", void 0) : Le.onUsjChange(er, mt, "local", Zd(mt, B))));
  }, []), is = de(
    (w) => {
      Ie(w.contextMarker), o?.(w);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Me(lh, { initialConfig: pr, children: [
      /* @__PURE__ */ _(sM, { isEditable: !ft }),
      /* @__PURE__ */ Me("div", { className: "editor-container", children: [
        Q ? /* @__PURE__ */ _(Om, { onStateChange: is }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (ft ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              hw,
              {
                ref: p,
                editorRef: vt,
                isReadonly: ft,
                onStateChange: is
              }
            )
          }
        ),
        /* @__PURE__ */ Me("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(dh, { editorRef: u }),
          /* @__PURE__ */ _(
            zk,
            {
              contentEditable: /* @__PURE__ */ _(
                uh,
                {
                  className: `editor-input usfm ${d_(ie).join(" ")}${ie.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ie.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: z
                }
              ),
              placeholder: /* @__PURE__ */ _(bw, {}),
              ErrorBoundary: fh
            }
          ),
          Q && /* @__PURE__ */ _(iM, {}),
          /* @__PURE__ */ _(ph, {}),
          r && n && /* @__PURE__ */ _(H0, { scrRef: r, onScrRefChange: n }),
          r && !Q && /* @__PURE__ */ _(
            AE,
            {
              trigger: je,
              scrRef: r,
              contextMarker: X,
              getMarkerAction: (w) => el(
                w,
                x,
                ie,
                dt,
                _e,
                void 0,
                Ft
              ),
              editableHarness: lo
            }
          ),
          /* @__PURE__ */ _(
            cM,
            {
              scripture: W,
              scriptureRef: h,
              nodeOptions: dt,
              editorAdaptor: mn,
              viewOptions: ie,
              logger: _e
            },
            ee
          ),
          /* @__PURE__ */ _(PM, { onChange: ns, viewOptions: ie }),
          /* @__PURE__ */ _(Tw, { listener: hi }),
          /* @__PURE__ */ _(X1, { viewOptions: ie }),
          /* @__PURE__ */ _(nS, { ref: f, logger: _e, viewOptions: ie }),
          /* @__PURE__ */ _(NS, { viewOptions: ie }),
          /* @__PURE__ */ _(WS, {}),
          /* @__PURE__ */ _(QS, {}),
          ie?.markerMode !== "editable" && /* @__PURE__ */ _(ZS, { logger: _e }),
          /* @__PURE__ */ _(nM, { options: Re }),
          /* @__PURE__ */ _(aM, {}),
          /* @__PURE__ */ _(TA, {}),
          /* @__PURE__ */ _(
            YA,
            {
              viewOptions: ie,
              getMarker: fr,
              logger: _e,
              markerSettleDelayMs: Ua
            }
          ),
          /* @__PURE__ */ _(
            r0,
            {
              styleInfo: Ft,
              viewOptions: ie,
              logger: _e
            }
          ),
          /* @__PURE__ */ _(
            lM,
            {
              expandedNoteKeyRef: x,
              nodeOptions: dt,
              viewOptions: ie,
              logger: _e
            }
          ),
          /* @__PURE__ */ _(EM, {}),
          /* @__PURE__ */ _(ES, {}),
          /* @__PURE__ */ _(CS, {}),
          /* @__PURE__ */ _(l0, { viewOptions: ie, logger: _e }),
          /* @__PURE__ */ _(AM, {}),
          /* @__PURE__ */ _(mE, { structureProtectionMode: ur }),
          /* @__PURE__ */ _(yE, { textDirection: se }),
          /* @__PURE__ */ _(kE, {}),
          /* @__PURE__ */ _(EE, {}),
          l
        ] }),
        Qr && /* @__PURE__ */ _(ow, {})
      ] })
    ] }, ie.verseLayout ?? "inline")
  );
}), EO = ti(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(Kb, { ref: r, ...i });
});
function zb() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function da(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? zb() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Bb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? zb() : r,
    quote: e,
    type: "thread"
  };
}
function Kp(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function vw(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function vc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class Cw {
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
    this._comments = t, vc(this);
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
          const c = Kp(a);
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
    this._comments = i, vc(this);
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
          const c = Kp(a);
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
    return this._comments = n, vc(this), t.type === "comment" ? {
      index: s,
      markedComment: vw(t)
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
    return t !== null ? t.doc.get("comments", yd) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new bd(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new yd();
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
      ix,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      $t
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof sx) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const h = p.insert, m = p.retain, y = p.delete, x = d.parent, C = d === r ? void 0 : x instanceof bd && this._comments.find((M) => M.id === x.get("id"));
              if (Array.isArray(h)) {
                const M = f;
                h.slice().reverse().forEach((R) => {
                  const E = R.get("id"), T = R.get("type") === "thread" ? Bb(
                    R.get("quote"),
                    R.get("comments").toArray().map(
                      ($) => da(
                        $.get("content"),
                        $.get("author"),
                        $.get("id"),
                        $.get("timeStamp"),
                        $.get("deleted")
                      )
                    ),
                    E
                  ) : da(
                    R.get("content"),
                    R.get("author"),
                    E,
                    R.get("timeStamp"),
                    R.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(T, C, M);
                  });
                });
              } else if (typeof m == "number")
                f += m;
              else if (typeof y == "number")
                for (let M = 0; M < y; M++) {
                  const R = C === void 0 || C === !1 ? this._comments[f] : C.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(R, C);
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
function _w(e) {
  const [t, r] = fe(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function Sw({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Z(null);
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
  }, [n, e]), /* @__PURE__ */ _("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Me("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function Mw({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return qn(
    /* @__PURE__ */ _(Sw, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function jb() {
  const [e, t] = fe(null), r = de(() => {
    t(null);
  }, []), n = Fe(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _(Mw, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const Ew = {
  ...ay,
  paragraph: "CommentEditorTheme__paragraph"
};
function Pw(...e) {
  return e.filter(Boolean).join(" ");
}
function bn({
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
      className: Pw(
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
function Aw({
  className: e
}) {
  return /* @__PURE__ */ _(uh, { className: e || "ContentEditable__root" });
}
function ww({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const zp = kl("INSERT_INLINE_COMMAND");
function Ow({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = de(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Bs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ _("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ _("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ _("i", { className: "icon add-comment" }) }) });
}
function Nw({ onEscape: e }) {
  const [t] = le();
  return j(() => t.registerCommand(
    sh,
    (r) => e(r),
    Ni
  ), [t, e]), null;
}
function Vb({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(lh, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: Ew
  }, children: /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      tx,
      {
        contentEditable: /* @__PURE__ */ _(Aw, { className: e }),
        placeholder: /* @__PURE__ */ _(ww, { children: s }),
        ErrorBoundary: fh
      }
    ),
    /* @__PURE__ */ _(ex, { onChange: n }),
    /* @__PURE__ */ _(ph, {}),
    t !== !1 && /* @__PURE__ */ _(Xk, {}),
    /* @__PURE__ */ _(Nw, { onEscape: r }),
    /* @__PURE__ */ _(Qk, {}),
    i !== void 0 && /* @__PURE__ */ _(dh, { editorRef: i })
  ] }) });
}
function Wb(e, t) {
  return de(
    (r, n) => {
      r.read(() => {
        e(rx()), t(!nx(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function Rw({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Z(null), c = Fe(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), d = Gb(), u = de(() => {
    e.getEditorState().read(() => {
      const m = N();
      if (A(m)) {
        l.current = m.clone();
        const y = m.anchor, x = m.focus, C = jk(
          e,
          y.getNode(),
          y.offset,
          x.getNode(),
          x.offset
        ), M = a.current;
        if (C !== null && M !== null) {
          const { left: R, bottom: E, width: L } = C.getBoundingClientRect(), T = Vk(e, C);
          let $ = T.length === 1 ? R + L / 2 - 125 : R - 125;
          $ < 10 && ($ = 10), M.style.left = `${$}px`, M.style.top = `${E + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const W = T.length, { container: G } = c, ee = c.elements, Ae = ee.length;
          for (let X = 0; X < W; X++) {
            const Ie = T[X];
            let me = ee[X];
            me === void 0 && (me = document.createElement("span"), ee[X] = me, G.appendChild(me));
            const Q = `position:absolute;top:${Ie.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Ie.left}px;height:${Ie.height}px;width:${Ie.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            me.style.cssText = Q;
          }
          for (let X = Ae - 1; X >= W; X--) {
            const Ie = ee[X];
            G.removeChild(Ie), ee.pop();
          }
        }
      }
    });
  }, [e, c]);
  Bs(() => {
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
        Bb(m, [da(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = Wb(i, o);
  return /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      Vb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ _(bn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ _(
        bn,
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
function qw({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Z(null), c = Gb(), l = Wb(i, o);
  return /* @__PURE__ */ Me(Ln, { children: [
    /* @__PURE__ */ _(
      Vb,
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
      bn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(da(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand($k, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function Hb({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Me(Ln, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Me("div", { className: "Modal__content", children: [
      /* @__PURE__ */ _(
        bn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ _(
        bn,
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
function Bp({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = fe(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = jb();
  return /* @__PURE__ */ Me("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Me("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Me(Ln, { children: [
      /* @__PURE__ */ _(
        bn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ _(
              Hb,
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
function $w({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = fe(0), [l, d] = jb(), u = Fe(
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
    return f.type === "thread" ? /* @__PURE__ */ Me(
      "li",
      {
        onClick: () => {
          const m = s.get(p);
          if (m !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const x = Array.from(m)[0], C = H(x);
                ye(C) && C.selectStart();
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
          /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Me("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ _("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ _(
              bn,
              {
                onClick: () => {
                  d("Delete Thread", (m) => /* @__PURE__ */ _(
                    Hb,
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
            Bp,
            {
              comment: m,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            m.id
          )) }),
          /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
            qw,
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
      Bp,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function Iw({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ _("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ _(
      $w,
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
function Gb() {
  const e = hh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function Lw({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = hh(), [a] = le(), c = Fe(() => {
    const $ = new Cw(a, s);
    return r && $.registerOnChange(r), t?.($), $;
  }, [a, s, r, t]), l = _w(c), d = Fe(() => /* @__PURE__ */ new Map(), []), [u, f] = fe(), [p, h] = fe([]), [m, y] = fe(!1), [x, C] = fe(!1), { yjsDocMap: M } = o;
  j(() => {
    if (e) {
      const $ = e("comments", M);
      return c.registerCollaboration($);
    }
    return () => {
    };
  }, [c, e, M]);
  const R = de(() => {
    a.update(() => {
      const $ = N();
      $ !== null && ($.dirty = !0);
    }), y(!1);
  }, [a]), E = de(
    ($, W) => {
      if ($.type === "comment") {
        const G = c.deleteCommentOrThread($, W);
        if (!G)
          return;
        const { markedComment: ee, index: Ae } = G;
        c.addComment(ee, W, Ae);
      } else {
        c.deleteCommentOrThread($);
        const G = W !== void 0 ? W.id : $.id, ee = d.get(G);
        ee !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Ae of ee) {
              const X = H(Ae);
              ye(X) && (X.deleteID(cn, G), X.hasNoIDsForEveryType() && Fo(X));
            }
          });
        });
      }
    },
    [c, a, d]
  ), L = de(
    ($, W, G, ee) => {
      c.addComment($, G), W && (a.update(() => {
        A(ee) && Nl(ee, cn, $.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const $ = [];
    let W;
    for (const G of p) {
      const ee = d.get(G);
      if (ee !== void 0)
        for (const Ae of ee) {
          const X = a.getElementByKey(Ae);
          X !== null && (X.classList.add("selected"), $.push(X), W = window.setTimeout(() => {
            C(!0);
          }, 0));
        }
    }
    return () => {
      W !== void 0 && window.clearTimeout(W);
      for (const G of $)
        G.classList.remove("selected");
    };
  }, [p, a, d]), j(() => {
    if (!a.hasNodes([Xe]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const $ = /* @__PURE__ */ new Map();
    return nt(
      Sl(
        a,
        Xe,
        (W) => Vn(W.getTypedIDs()),
        (W, G) => {
          for (const [ee, Ae] of Object.entries(W.getTypedIDs()))
            Ae.forEach((X) => {
              G.addID(ee, X);
            });
        }
      ),
      a.registerMutationListener(
        Xe,
        (W) => {
          a.getEditorState().read(() => {
            for (const [G, ee] of W) {
              const Ae = H(G);
              let X = [];
              ee === "destroyed" ? X = $.get(G) ?? [] : ye(Ae) && (X = Ae.getTypedIDs()[cn] ?? []);
              for (const Ie of X) {
                let me = d.get(Ie);
                $.set(G, X), ee === "destroyed" ? me !== void 0 && (me.delete(G), me.size === 0 && d.delete(Ie)) : (me === void 0 && (me = /* @__PURE__ */ new Set(), d.set(Ie, me)), me.has(G) || me.add(G));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: W, tags: G }) => {
        W.read(() => {
          const ee = N();
          let Ae = !1, X = !1;
          if (A(ee)) {
            const Ie = ee.anchor.getNode();
            if (S(Ie)) {
              const me = Wx(Ie, cn, ee.anchor.offset) ?? [];
              me !== null && (h(me), Ae = !0), ee.isCollapsed() || (f(Ie.getKey()), X = !0);
            }
          }
          Ae || h((Ie) => Ie.length === 0 ? Ie : []), X || f(null), !G.has("collaboration") && A(ee) && y(!1);
        });
      }),
      a.registerCommand(
        zp,
        () => {
          const W = window.getSelection();
          return W !== null && W.removeAllRanges(), y(!0), !0;
        },
        Fn
      )
    );
  }, [a, d]);
  const T = () => {
    a.dispatchCommand(zp, void 0);
  };
  return /* @__PURE__ */ Me(Ln, { children: [
    m && qn(
      /* @__PURE__ */ _(
        Rw,
        {
          editor: a,
          cancelAddComment: R,
          submitAddComment: L
        }
      ),
      document.body
    ),
    u != null && !m && qn(
      /* @__PURE__ */ _(
        Ow,
        {
          anchorKey: u,
          editor: a,
          showComments: x,
          onAddComment: T
        }
      ),
      document.body
    ),
    n !== null && qn(
      /* @__PURE__ */ _(
        bn,
        {
          className: `CommentPlugin_ShowCommentsButton ${x ? "active" : ""}`,
          onClick: () => C(!x),
          title: x ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    x && qn(
      /* @__PURE__ */ _(
        Iw,
        {
          comments: l,
          submitAddComment: L,
          deleteCommentOrThread: E,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function Dw() {
  const e = Z(void 0), t = de((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function Uw(e, t) {
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
function Fw(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      Uw(r, t);
    };
  }, [t, e]);
}
const PO = ti(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = fe(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: h, view: m } = {} } = t, y = (h ?? !1) || Ds(m), [x, C] = Dw();
  Fw(f, x), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(E), p || console.warn(E);
    }
  }, [p]), yl(r, () => ({
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
    applyUpdate(E, L) {
      n.current?.applyUpdate(E, L);
    },
    replaceEmbedUpdate(E, L) {
      return n.current?.replaceEmbedUpdate(E, L);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(E) {
      n.current?.setSelection(E);
    },
    setAnnotation(E, L, T, $, W) {
      typeof $ == "function" || $ === void 0 ? n.current?.setAnnotation(E, L, T, $, W) : n.current?.setAnnotation(E, L, T, $);
    },
    removeAnnotation(E, L) {
      n.current?.removeAnnotation(E, L);
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
    replaceCharacterMarker(E, L) {
      return n.current?.replaceCharacterMarker(E, L) ?? !1;
    },
    extendCharacterMarker(E, L) {
      return n.current?.extendCharacterMarker(E, L) ?? !1;
    },
    insertMarker(E) {
      return n.current?.insertMarker(E);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(E, L) {
      return n.current?.applyMarkerMenuSelection(E, L);
    },
    splitParagraphWithMarker(E) {
      n.current?.splitParagraphWithMarker(E);
    },
    commitTypedMarker(E, L) {
      return n.current?.commitTypedMarker(E, L) ?? !1;
    },
    commitTypedCloser(E) {
      return n.current?.commitTypedCloser(E) ?? !1;
    },
    insertNote(E, L, T) {
      n.current?.insertNote(E, L, T);
    },
    selectNote(E) {
      n.current?.selectNote(E);
    },
    getNoteOps(E) {
      return n.current?.getNoteOps(E);
    },
    setComments(E) {
      x.current?.setComments(E), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const M = de(
    (E, L, T, $) => {
      if (!d) return;
      const W = x.current?.getComments();
      d(E, W, L, T, $);
    },
    [x, d]
  ), R = de(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = x.current?.getComments();
    l(E);
  }, [x, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(Zk, { children: /* @__PURE__ */ Me(Kb, { ref: n, onUsjChange: M, ...f, children: [
    /* @__PURE__ */ _(
      Lw,
      {
        setCommentStore: C,
        onChange: R,
        showCommentsContainerRef: y ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ _("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Rn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function Jb(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function Kw(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const zw = /^[#\w().,%/\s-]+$/;
function qr(e) {
  return e != null;
}
const Bw = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, jw = {
  left: "right",
  right: "left"
}, ml = ".editor-input.usfm", Vw = /^[\w.#[\]="':()>+~*,\s-]+$/;
function Ww(e) {
  return Vw.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${ml}".`
  ), ml);
}
function Hw(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${Jb(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (zw.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), qr(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), qr(t.firstLineIndent) && i.push(`text-indent: ${Rn(t.firstLineIndent * 20 * r)}vw`), qr(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${Rn(t.leftMargin * 20 * r)}vw`), qr(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${Rn(t.rightMargin * 20 * r)}vw`
  ), qr(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${Rn(t.spaceBefore * r)}pt`), qr(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${Rn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = Bw[n ? jw[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const jp = { c: 150, ca: 133, cp: 150 };
function Vp(e, t) {
  return e && qr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function Gw(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && qr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Vp(e.markers.c, jp.c);
  return ["ca", "cp"].map((i) => {
    const s = Vp(
      e.markers[i],
      jp[i]
    ), o = Rn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function AO(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = ml } = t, s = Ww(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${Jb(e.defaultFont)}"`), qr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Rn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = Hw(c, l, r, n);
    d.length > 0 && o.push(`${s} .usfm_${Kw(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...Gw(e, s)), o.join(`
`);
}
export {
  nm as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  EO as Editorial,
  Lo as GENERATOR_NOTE_CALLER,
  mh as HIDDEN_NOTE_CALLER,
  PO as Marginal,
  b as MarkerType,
  tm as PARAGRAPH_STRUCTURE_VIEW_MODE,
  rm as STANDARD_VIEW_MODE,
  Ho as defaultStyleInfo,
  MO as directionToNames,
  G_ as filterAndRankItems,
  AO as generateUsjCss,
  _O as getDefaultViewMode,
  Ea as getDefaultViewOptions,
  fP as getEnterMenuItems,
  dP as getMarkerMenuItems,
  SO as getViewMode,
  im as getViewOptions,
  Ds as isBlockVerseLayout,
  on as isInsertEmbedOpOfType,
  a_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
