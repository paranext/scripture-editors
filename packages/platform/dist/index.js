import { jsx as S, jsxs as qe, Fragment as fi } from "react/jsx-runtime";
import { forwardRef as Ci, useState as Te, useRef as se, useCallback as xe, useEffect as V, useMemo as je, memo as oT, createContext as sg, useContext as og, Children as aT, isValidElement as cT, cloneElement as lT, useLayoutEffect as ds, useImperativeHandle as lu } from "react";
import { assertSafeKey as nt, isValidBookCode as uT, MARKER_OBJECT_PROPS as fT, USJ_VERSION as nn, USJ_TYPE as sn, indexesFromUsjJsonPath as ur, isUsjTextContentLocation as on, usjJsonPathFromIndexes as mt, isUsjPropertyValueLocation as Xs, isUsjClosingMarkerLocation as ia, isUsjClosingAttributeMarkerLocation as Qs, isUsjAttributeKeyLocation as Zs, isUsjAttributeMarkerLocation as Ua, isUsjMarkerLocation as uu, getUsjDocumentLocationTypeName as dT, EMPTY_USJ as ag } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as tt, $parseSerializedNode as ps, createCommand as fu, DecoratorNode as ko, ElementNode as Er, isHTMLElement as Si, TextNode as We, $isRangeSelection as P, $getEditor as Ot, $getNodeByKey as ee, $isTextNode as C, createState as hs, $getState as ce, $getSelection as R, $isNodeSelection as du, ParagraphNode as pu, $isRootNode as Br, HISTORIC_TAG as Ka, $createTextNode as Oe, $setState as xt, $isElementNode as O, $getCommonAncestor as pT, $isLineBreakNode as xo, NODE_STATE_KEY as an, $isDecoratorNode as gs, $addUpdateTag as Kr, $getRoot as ve, $createRangeSelection as To, $createPoint as Qi, $setSelection as cn, $getCharacterOffsets as hu, KEY_DOWN_COMMAND as mn, COMMAND_PRIORITY_HIGH as Ve, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as hT, COMMAND_PRIORITY_CRITICAL as rr, $getNearestNodeFromDOMNode as _i, HISTORY_MERGE_TAG as cg, CLICK_COMMAND as Fa, COMMAND_PRIORITY_EDITOR as di, isDOMNode as lg, CONTROLLED_TEXT_INSERTION_COMMAND as gu, PASTE_COMMAND as rn, CUT_COMMAND as pi, DROP_COMMAND as mu, DELETE_CHARACTER_COMMAND as gT, DELETE_WORD_COMMAND as mT, DELETE_LINE_COMMAND as yT, COPY_COMMAND as za, COMMAND_PRIORITY_LOW as Pt, COMMAND_PRIORITY_NORMAL as Zi, SELECTION_CHANGE_COMMAND as xr, getDOMSelection as bT, isSelectionWithinEditor as kT, $createRangeSelectionFromDom as xT, isDOMTextNode as TT, BLUR_COMMAND as yu, SKIP_DOM_SELECTION_TAG as vT, CLEAR_HISTORY_COMMAND as CT, $getPreviousSelection as ST, $isRootOrShadowRoot as _T, CAN_UNDO_COMMAND as MT, CAN_REDO_COMMAND as ET, DRAGSTART_COMMAND as AT, $createNodeSelection as ug, $hasUpdateTag as PT, getDOMSelectionFromTarget as wT, $onUpdate as NT, KEY_ENTER_COMMAND as fg, LineBreakNode as dg, $copyNode as OT, FOCUS_COMMAND as RT, createEditor as bu, KEY_ESCAPE_COMMAND as pg, INSERT_PARAGRAPH_COMMAND as sa, UNDO_COMMAND as hg, REDO_COMMAND as gg, CLEAR_EDITOR_COMMAND as $T } from "lexical";
import { addClassNamesToElement as Ds, removeClassNamesFromElement as Ho, $findMatchingParent as lt, $dfsIterator as mg, $dfs as ms, mergeRegister as et, registerNestedElementResolver as ku, $unwrapNode as el, IS_APPLE as oa } from "@lexical/utils";
import { useLexicalNodeSelection as IT } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Ur } from "fast-equals";
import Yi from "quill-delta";
import { useLexicalComposerContext as ye } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as qT, copyToClipboard as LT } from "@lexical/clipboard";
import { TreeView as DT } from "@lexical/react/LexicalTreeView";
import * as UT from "react-dom";
import { createPortal as ai } from "react-dom";
import { LexicalComposer as yg } from "@lexical/react/LexicalComposer";
import { ContentEditable as bg } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as kg } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as xg } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Tg } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as KT } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as FT, createDOMRange as zT, createRectsFromDOMRange as BT } from "@lexical/selection";
import { autoUpdate as jT, computePosition as VT, shift as WT, flip as HT } from "@floating-ui/dom";
import { $generateNodesFromDOM as GT } from "@lexical/html";
import { AutoFocusPlugin as JT } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as YT } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as vg, LexicalCollaboration as XT } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as QT } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as ZT } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as ev, $isRootTextContentEmpty as tv } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as rv } from "@lexical/yjs";
import { Array as Md, Map as Ed, YArrayEvent as nv } from "yjs";
const _c = (e) => tt(ps(e)), iv = {
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
function Cg(e) {
  return iv[e];
}
const q = " ", aa = "​", ct = q, xu = `${q}|`, Fr = "p", eo = "+", Sg = "-", zn = "immutable-note-caller", _g = "immutable-verse", ca = "chapter", tl = "verse", Ad = "invalid", sv = "text-spacing", ov = "formatted-font", av = "marker-", Ba = "external-usj-mutation", cv = "selection-change", to = "cursor-change", Tu = fu("APP_PLACED_CARET_COMMAND"), rl = "annotation-change", Go = "typed-mark-wrap", vu = "delta-change", Mg = "marker-settle", lv = [
  Ba,
  cv,
  to,
  rl,
  vu
], hi = "zmsc-s", es = "zmsc-e", uv = [hi, es], fv = [
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
  hi,
  es
], Eg = 1, Cu = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], dv = Cu.filter((e) => e !== "sid" && e !== "eid");
class Tr extends ko {
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
    return new Tr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Pg().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (fv.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Eg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Ag(e) {
  return uv.includes(e);
}
function Pg(e, t, r, n, i) {
  return tt(new Tr(e, t, r, n, void 0, i));
}
function Pe(e) {
  return e instanceof Tr;
}
const Su = "f", pv = [
  // Footnote
  Su,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Us(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const hv = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], wg = 1;
class ze extends Er {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Su, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Us(t) === "crossref" ? Sg : eo), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new ze(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => mv(t) ? {
        conversion: gv,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return _u().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (pv.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Us(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Us(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Si(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Us(this.getMarker()))), { element: r };
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
      version: wg
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
function gv(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: _u(t, r, n) };
}
function _u(e, t, r, n, i) {
  return tt(new ze(e, t, r, n, i));
}
function mv(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ze.isValidMarker(t) && e.classList.contains(ze.getType());
}
function U(e) {
  return e instanceof ze;
}
var x;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(x || (x = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const nl = {
  id: {
    category: x.FileIdentification,
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
    category: x.FileIdentification,
    type: b.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: x.FileIdentification,
    type: b.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: x.Headers,
    type: b.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: x.Headers,
    type: b.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: x.Headers,
    type: b.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: x.Headers,
    type: b.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: x.Headers,
    type: b.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: x.Headers,
    type: b.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: x.Headers,
    type: b.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: x.Headers,
    type: b.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: x.Headers,
    type: b.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: x.Headers,
    type: b.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: x.Remarks,
    type: b.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: x.Remarks,
    type: b.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: x.Remarks,
    type: b.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: x.Introduction,
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
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
    type: b.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: x.Introduction,
    type: b.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: x.Introduction,
    type: b.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: x.DivisionMarks,
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
    category: x.DivisionMarks,
    type: b.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: x.DivisionMarks,
    type: b.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: x.DivisionMarks,
    type: b.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: x.DivisionMarks,
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
    category: x.DivisionMarks,
    type: b.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: x.DivisionMarks,
    type: b.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: x.DivisionMarks,
    type: b.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
    type: b.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
    type: b.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: x.Poetry,
    type: b.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: x.Poetry,
    type: b.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
    type: b.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: x.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
    type: b.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: x.Lists,
    type: b.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: x.Lists,
    type: b.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: x.Lists,
    type: b.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: x.Lists,
    type: b.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: x.Lists,
    type: b.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: x.Lists,
    type: b.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: x.Lists,
    type: b.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: x.Footnotes,
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
    category: x.Footnotes,
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
    category: x.Footnotes,
    type: b.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: x.Footnotes,
    type: b.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: x.Footnotes,
    type: b.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: x.Footnotes,
    type: b.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: x.Footnotes,
    type: b.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: x.Footnotes,
    type: b.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: x.Footnotes,
    type: b.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: x.Footnotes,
    type: b.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: x.Footnotes,
    type: b.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: x.Footnotes,
    type: b.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: x.Footnotes,
    type: b.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: x.CrossReferences,
    type: b.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: x.CrossReferences,
    type: b.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: x.CrossReferences,
    type: b.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: x.CrossReferences,
    type: b.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: x.CrossReferences,
    type: b.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: x.CrossReferences,
    type: b.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: x.CrossReferences,
    type: b.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: x.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: x.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: x.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: x.CrossReferences,
    type: b.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: x.SpecialText,
    type: b.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: x.SpecialText,
    type: b.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: x.SpecialText,
    type: b.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: x.SpecialText,
    type: b.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: x.SpecialText,
    type: b.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: x.SpecialText,
    type: b.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: x.SpecialText,
    type: b.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: x.SpecialText,
    type: b.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: x.SpecialText,
    type: b.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: x.SpecialText,
    type: b.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: x.SpecialText,
    type: b.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: x.SpecialText,
    type: b.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: x.SpecialText,
    type: b.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: x.SpecialText,
    type: b.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: x.SpecialText,
    type: b.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: x.CharacterStyling,
    type: b.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: x.CharacterStyling,
    type: b.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: x.CharacterStyling,
    type: b.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: x.CharacterStyling,
    type: b.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: x.CharacterStyling,
    type: b.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: x.CharacterStyling,
    type: b.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: x.CharacterStyling,
    type: b.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: x.Breaks,
    type: b.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, Xn = {
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
}, Pd = {
  p: { children: Xn },
  q: { children: Xn },
  q1: { children: Xn },
  q2: { children: Xn },
  q3: { children: Xn },
  q4: { children: Xn },
  b: { children: Xn },
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
    category: x.SpecialFeatures,
    type: b.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: x.SpecialFeatures,
    type: b.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: x.SpecialFeatures,
    type: b.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: x.SpecialFeatures,
    type: b.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function zr(e) {
  const t = Object.hasOwn(nl, e) ? nl[e] : void 0, r = Object.hasOwn(Pd, e) ? Pd[e] : void 0;
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
const Ng = "v", Og = "c", Qn = "fig", wd = "tr", il = "esb", Rg = "esbe", Nd = "periph", Od = "alt", Rd = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, yv = {
  "": "start",
  c: "center",
  r: "end"
};
function $d(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Id(e) {
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
const bv = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function kv(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === aa && s + 1 < e.length && Id(e[s + 1]) || (Id(o) ? (r || (i = t.length, t += o), r = !0) : bv.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function xv(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Tv(e, t) {
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
const vv = /^(?:qt[1-5]?|ts)-[se]$/;
function Mu(e) {
  return vv.test(e) || Ag(e);
}
function Mc(e, t) {
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
function Cv(e, t, r) {
  const n = [];
  let i = 0, s;
  const o = (c) => {
    if (!c)
      return;
    const l = n[n.length - 1];
    l?.kind === "text" ? l.text += c : n.push({ kind: "text", text: c });
  }, a = (c) => {
    c.split("//").forEach((u, f) => {
      f > 0 && n.push({ kind: "optbreak" }), o(u);
    });
  };
  for (; i < e.length; ) {
    if (e[i] !== "\\") {
      const g = e.indexOf("\\", i), m = g === -1 ? e.length : g;
      a(kv(e.slice(i, m))), i = m;
      continue;
    }
    const c = i, { name: l, next: u } = Tv(e, i + 1);
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
    const f = () => {
      for (; i < e.length && /[\s\u00A0\u200B]/.test(e[i]); )
        i++;
    };
    if (l === Ng) {
      const { word: g, next: m } = Mc(e, i);
      i = m, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === Og) {
      const { word: g, next: m } = Mc(e, i);
      i = m, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const d = l.startsWith("+"), p = d ? l.slice(1) : l, h = t(p)?.type;
    if (h === b.Note || h === void 0 && ze.isValidMarker(l)) {
      const { word: g, next: m } = Mc(e, i);
      i = m, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === b.Milestone || h === void 0 && Mu(l)) {
      const g = Nv(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const m = e.indexOf("\\", i), k = m === -1 ? e.length : m;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    h === b.Paragraph ? (f(), n.push({ kind: "para", marker: l })) : h === b.Character ? (f(), n.push({ kind: "charOpen", marker: p, isNested: d })) : la(p) ? (f(), la(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: d })) : (f(), !(r || s !== void 0) || l === il || l === Rg ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: d }));
  }
  return n;
}
const qd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function la(e) {
  return Object.hasOwn(qd, e) ? qd[e] : void 0;
}
function Sv(e) {
  return la(e) !== void 0;
}
const _v = /([-\w]+)\s*=\s*"(.*?)"/g, Mv = /[\s\u200B]*[\n\r][\s\u200B]*/g, $g = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function ys(e) {
  return $g[e];
}
const Ev = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Av(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ro(e, t, r = $g[t]) {
  const n = e.replace(Mv, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(_v)];
  if (s.length > 0) {
    if (!Av(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Ev.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function vo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Pv(e) {
  const t = yn(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function wv(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ro(e.slice(n + 1, i), r, vo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Nv(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ro(s.slice(o + 1), r, vo(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = wv(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Lr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function Sn(e) {
  return e.content || (e.content = []), e.content;
}
function yn(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, f;
  const d = () => u ? Sn(u) : f ? Sn(f) : r;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? Sn(o[o.length - 1].object) : Sn(s);
    if (o.length > 0)
      return Sn(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return d();
      i = { type: "para", marker: Fr, content: [] }, d().push(i);
    }
    return Sn(i);
  }, g = (G) => {
    const _ = h();
    typeof G == "string" && typeof _[_.length - 1] == "string" ? _[_.length - 1] = _[_.length - 1] + G : _.push(G);
  }, m = (G) => {
    for (let _ = G; _ < o.length; _ += 1) {
      const Z = o[_].object;
      Z.closed = "false";
    }
  }, k = () => {
    m(0), o.length = 0;
  }, T = (G) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, G || (s.closed = "false"), s = void 0);
  }, M = () => {
    c = void 0, l = void 0;
  }, I = (G, _, Z) => {
    k();
    const [, ie, Ke, Qe] = Z, dt = {
      type: "table:cell",
      marker: Qe ? _.slice(0, _.indexOf("-")) : _,
      align: yv[ie],
      content: []
    };
    Qe && (dt.colspan = String(Number(Qe) + 1 - Number(Ke))), Sn(G).push(dt), i = dt;
  }, A = (G) => {
    u && (G || (u.closed = "false"), u = void 0);
  }, K = () => {
    f = void 0;
  };
  let J, E = "", w;
  const fe = () => {
    E && g(Lr(E)), E = "";
  }, Y = (G = !1) => {
    J?.type === "sidebar" ? E = "" : G && E.endsWith(`
`) && (E = E.slice(0, -1)), J = void 0, fe();
  }, be = () => {
    if (!w)
      return;
    const G = { type: "char", marker: w.marker, content: [] };
    w.value && (G.content = [Lr(w.value)]), h().push(G), o.push({ object: G }), w = void 0;
  }, le = (G, _) => {
    p = !1, M(), k(), T(!1), i = { type: "para", marker: G, content: [] }, _ && (i.content = [Lr(_)]), d().push(i);
  }, B = () => {
    w && (le(w.marker, w.value), w = void 0);
  };
  let W;
  const H = (G) => {
    if (!W)
      return;
    let { value: _ } = W;
    W = void 0, G && _.endsWith(`
`) && (_ = _.slice(0, -1));
    const Z = _.indexOf("|"), ie = Z >= 0 ? ro(_.slice(Z + 1), Nd) : void 0, Ke = Z >= 0 ? _.slice(0, Z) : _, Qe = Z >= 0 && (!ie || !!Ke && !!ie[Od]), dt = Qe ? void 0 : ie, hr = Qe ? _ : Ke, re = {
      type: "periph",
      ...hr ? { [Od]: Lr(hr) } : {},
      ...dt
    };
    re.content = [], d().push(re), f = re, i = void 0;
  };
  let Q;
  const ue = () => {
    if (Q) {
      if (Q.shape === "para")
        le(Qn, Q.value);
      else {
        const G = { type: "char", marker: Qn, content: [] };
        Q.value && (G.content = [Lr(Q.value)]), h().push(G), o.push({ object: G });
      }
      Q = void 0;
    }
  }, te = Cv(e, t?.getMarker ?? zr, n);
  for (let G = 0; G < te.length; G++) {
    const _ = te[G];
    if (w) {
      if (_.kind === "text") {
        w.value += _.text;
        continue;
      }
      if (w.shape === "char" && _.kind === "end" && _.marker.replace(/^\+/, "") === w.marker) {
        if (w.value.trim() === "") {
          h().push({ type: "char", marker: w.marker, content: [] }), w = void 0, Y();
          continue;
        }
        Object.assign(w.target, {
          [w.attrName]: Lr(w.value.trim())
        });
        const Z = w.marker;
        if (w = void 0, Z === "ca") {
          const ie = te[G + 1];
          ie?.kind === "text" && /^[\s\u200B]*$/.test(ie.text) && G++;
        }
        continue;
      }
      if (w.shape === "para" && (_.kind === "para" || _.kind === "chapter")) {
        const Z = w.value.replace(/[\s\u200B]+$/, "");
        Z === "" ? (le(w.marker), w = void 0) : (Object.assign(w.target, { [w.attrName]: Lr(Z) }), w = void 0);
      } else {
        J = void 0, (_.kind === "para" || _.kind === "chapter") && w.value.endsWith(`
`) && (w.value = w.value.slice(0, -1)), w.shape === "para" ? B() : be(), G--;
        continue;
      }
    }
    if (W) {
      if (_.kind === "text" || _.kind === "optbreak") {
        W.value += _.kind === "text" ? _.text : "//";
        continue;
      }
      H(_.kind === "para" || _.kind === "chapter"), G--;
      continue;
    }
    if (Q) {
      if (_.kind === "text" || _.kind === "optbreak") {
        Q.value += _.kind === "text" ? _.text : "//";
        continue;
      }
      if (_.kind === "end" && _.marker.replace(/^\+/, "") === Qn) {
        const Z = Q.value.indexOf("|"), ie = Z >= 0 ? ro(Q.value.slice(Z + 1), Qn) : void 0;
        if (ie) {
          const Ke = {};
          for (const [hr, re] of Object.entries(ie))
            Ke[hr === "src" ? "file" : hr] = re;
          const Qe = {
            type: "figure",
            marker: Qn,
            ...Ke
          }, dt = Q.value.slice(0, Z);
          dt && (Qe.content = [Lr(dt)]), g(Qe), Q = void 0;
          continue;
        }
      }
      ue(), G--;
      continue;
    }
    if (J)
      if (_.kind === "text") {
        if (_.text.includes(`
`) && /^[\s\u200B]*$/.test(_.text)) {
          E += _.text;
          continue;
        }
        Y();
      } else if (_.kind === "charOpen" || _.kind === "para") {
        const Z = _.kind === "para" || !_.isNested ? la(_.marker) : void 0;
        if (Z && Z.targetTypes.includes(J.type)) {
          E = "", w = {
            target: J,
            attrName: Z.attrName,
            marker: _.marker,
            shape: Z.shape,
            value: ""
          };
          continue;
        }
        Y(_.kind === "para");
      } else
        Y(_.kind === "chapter");
    if (!s && !n && (_.kind === "charOpen" && !_.isNested && _.marker === Qn || _.kind === "para" && _.marker === Qn)) {
      k(), Q = { shape: _.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (_.kind) {
      case "text": {
        let Z = _.text;
        if (!s && Z.endsWith(`
`)) {
          const ie = te[G + 1];
          (ie === void 0 || ie.kind === "para" || ie.kind === "chapter") && (Z = Z.slice(0, -1));
        }
        Z && g(Lr(Z));
        break;
      }
      case "para": {
        const Z = !s && !n;
        if (Z && _.marker === wd) {
          k(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: wd, content: [] }, Sn(c).push(l), i = l, p = !1;
          break;
        }
        if (Z && l) {
          const ie = Rd.exec(_.marker);
          if (ie && $d(ie)) {
            I(l, _.marker, ie);
            break;
          }
        }
        if (M(), !n && _.marker === il) {
          k(), T(!1), A(!1);
          const ie = {
            type: "sidebar",
            marker: il,
            content: []
          };
          d().push(ie), u = ie, i = void 0, J = u, p = !1;
          break;
        }
        if (_.marker === Rg && u) {
          k(), T(!1), A(!0), i = void 0;
          break;
        }
        if (!n && _.marker === Nd) {
          k(), T(!1), A(!1), K(), W = { value: "" }, i = void 0, p = !1;
          break;
        }
        le(_.marker);
        break;
      }
      case "verse": {
        T(!1);
        const Z = { type: "verse", marker: Ng, number: _.number };
        g(Z), J = Z;
        break;
      }
      case "chapter": {
        k(), T(!1), M(), A(!1), K(), i = void 0;
        const Z = {
          type: "chapter",
          marker: Og,
          number: _.number
        };
        r.push(Z), J = Z, p = !0;
        break;
      }
      case "note": {
        T(!1);
        const Z = h();
        s = { type: "note", marker: _.marker, caller: _.caller, content: [] }, a = o.length, Z.push(s), J = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !_.isNested) {
          const Ke = Rd.exec(_.marker);
          if (Ke && $d(Ke)) {
            I(l, _.marker, Ke);
            break;
          }
        }
        if (!_.isNested) {
          const Ke = s ? a : 0;
          m(Ke), o.length = Ke;
        }
        const Z = h(), ie = { type: "char", marker: _.marker, content: [] };
        Z.push(ie), o.push({ object: ie });
        break;
      }
      case "end": {
        const Z = _.marker.replace(/^\+/, ""), ie = s ? a : 0, Ke = o.findLastIndex((Qe, dt) => dt >= ie && Qe.object.marker === Z);
        Ke >= 0 ? (Ov(o[Ke].object), m(Ke + 1), o.length = Ke) : s && s.marker === Z ? T(!0) : (m(ie), o.length = ie, g({ type: "unmatched", marker: `${_.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: _.marker, ..._.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (W && H(!0), Q && ue(), w)
    if (w.shape === "para") {
      const G = w.value.replace(/[\s\u200B]+$/, "");
      G === "" ? le(w.marker) : Object.assign(w.target, { [w.attrName]: Lr(G) }), w = void 0;
    } else
      w.value.endsWith(`
`) && (w.value = w.value.slice(0, -1)), be();
  k(), T(!1), A(!1);
  const Fe = (G) => {
    for (const _ of G)
      typeof _ != "string" && _.content && (Fe(_.content), _.content.length === 0 && delete _.content);
  };
  return Fe(r), r;
}
function Ov(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ro(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
function $e(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function Je(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function nr(e, t) {
  let r = $e(e);
  return t && (r += `${q}${t}`), r += " ", r;
}
function Ht(e) {
  return " " + e + q;
}
const Rv = 1;
class fr extends We {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(ni(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new fr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return Tt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || ni(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ni(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = ni(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = ni(r.__marker, r.__markerSyntax, t), r;
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
      version: Rv
    };
  }
}
function Tt(e, t, r) {
  return tt(new fr(e, t, void 0, r));
}
function N(e) {
  return e instanceof fr;
}
function bs(e) {
  return e?.type === fr.getType();
}
function Bn(e) {
  return e.getTextContent() === ni(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function $v(e) {
  e.setTextContent(ni(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function ni(e, t, r = !1) {
  return t === "closing" ? Je(e, r) : t === "selfClosing" ? Je("") : $e(e, r);
}
const Kt = "internal-comment", Iv = [Kt], Ig = Object.freeze({}), sl = Object.freeze({}), ol = Object.freeze({}), al = Object.freeze({}), cl = Object.freeze({}), qv = 1, ei = /* @__PURE__ */ new Map(), Vi = /* @__PURE__ */ new Map(), ti = /* @__PURE__ */ new Map(), ri = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap();
function Lv(e) {
  return no.set(e, []), io.set(e, /* @__PURE__ */ new Map()), () => {
    no.delete(e), io.delete(e);
  };
}
function Dv(e) {
  const t = no.get(e);
  return t ? (no.set(e, []), t) : [];
}
const ua = /* @__PURE__ */ new WeakMap();
function Jo(e, t) {
  return `${e}\0${t}`;
}
function Ld(e, t, r, n) {
  let i = ua.get(e);
  n ? (i || ua.set(e, i = /* @__PURE__ */ new Set()), i.add(Jo(t, r))) : (i?.delete(Jo(t, r)), io.get(e)?.delete(Jo(t, r)));
}
function Uv(e) {
  ua.delete(e), io.get(e)?.clear();
}
function Ko(e, t, r, n) {
  const i = e.get(t), s = i?.[r];
  if (!i || !s || !(n in s))
    return;
  const o = Dr(s, n), a = Object.keys(o).length > 0 ? { ...i, [r]: o } : Dr(i, r);
  Object.keys(a).length > 0 ? e.set(t, a) : e.delete(t);
}
function Kv(e, t, r) {
  Ko(ei, e, t, r), Ko(Vi, e, t, r), Ko(ti, e, t, r), Ko(ri, e, t, r);
}
class Ze extends Er {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Ig, r, n, i, s, o) {
    super(o), this.__typedIDs = Fo(t), this.__typedOnClicks = Ec(r), this.__typedOnRemoves = Ac(n), this.__typedOnMouseEnters = Pc(i), this.__typedOnMouseLeaves = wc(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Fo(t.__typedIDs), n = Ec(t.__typedOnClicks), i = Ac(t.__typedOnRemoves), s = Pc(t.__typedOnMouseEnters), o = wc(t.__typedOnMouseLeaves);
    return new Ze(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Iv.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return gi().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: qv
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    Ds(n, ...qg(t.theme, this.__typedIDs));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = ci(n.theme.typedMark, s), f = ci(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Ds(r, u) : l === 0 && Ho(r, u), c === 1 ? l === 2 && Ds(r, f) : l === 1 && Ho(r, f));
      const d = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ho(r, ci("annotationId", h));
      for (const h of a)
        d.has(h) || Ds(r, ci("annotationId", h));
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
    return de(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Fo(r.__typedIDs);
    r.__typedIDs = Fo(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && ll(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Ec(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return de(t) ? ei.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ac(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return de(t) ? Vi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Pc(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return de(t) ? ti.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = wc(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return de(t) ? ri.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!de(a))
      return;
    nt(t), nt(r);
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
    if (!de(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && ll(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = gi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), ei.delete(r.getKey()), Vi.delete(r.getKey()), ti.delete(r.getKey()), ri.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
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
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (r) => {
      this.handleDOMMouseLeave(r, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, r) {
    const n = ri.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === sl) {
      const t = ei.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      ei.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    ei.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    nt(t), nt(r);
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
    if (!this.__typedOnClicks || this.__typedOnClicks === sl) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === ol) {
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
    nt(t), nt(r);
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === ol) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === al) {
      const t = ti.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      ti.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    ti.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    nt(t), nt(r);
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === al) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === cl) {
      const t = ri.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      ri.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    ri.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    nt(t), nt(r);
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === cl) {
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
    if (!s)
      return;
    const o = Ot(), a = Jo(t, r), c = io.get(o);
    if (ua.get(o)?.has(a) || c?.get(a)?.has(this.getKey())) {
      this.removeOnRemoveFor(t, r);
      return;
    }
    if (no.get(o)?.push([t, r]), c) {
      let l = c.get(a);
      l || c.set(a, l = /* @__PURE__ */ new Set()), l.add(this.getKey());
    }
    s(t, r, n, this.getTextContent()), this.removeOnRemoveFor(t, r);
  }
  dispatchRemovedIDs(t, r, n) {
    const i = Fv(t, r);
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
    for (; de(t) && Ud(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; de(r) && Ud(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = zv(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Bv(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = jv(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Vv(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Fo(e = Ig) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (nt(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      nt(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Ec(e) {
  if (!e || e === sl)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    nt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      nt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ac(e) {
  if (!e || e === ol)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    nt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      nt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Pc(e) {
  if (!e || e === al)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    nt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      nt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function wc(e) {
  if (!e || e === cl)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    nt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      nt(s), i[s] = o;
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
function Dd(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Fv(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Ud(e, t) {
  const r = Dd(e), n = Dd(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function zv(e, t) {
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
function Bv(e, t) {
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
function jv(e, t) {
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
function Vv(e, t) {
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
function ci(e, t) {
  return `${e}-${t}`;
}
function qg(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(t)) {
    r.push(ci(e.typedMark, n)), i.length > 1 && r.push(ci(e.typedMarkOverlap, n));
    for (const s of i)
      r.push(ci("annotationId", s));
  }
  return r;
}
function Kd(e) {
  return `external-${e}`;
}
function gi(e, t, r, n, i) {
  return tt(new Ze(e, t, r, n, i));
}
function de(e) {
  return e instanceof Ze;
}
function Rn(e) {
  return e?.type === Ze.getType();
}
function Lg(e, t, r) {
  let n = 0;
  for (const i of r) {
    const s = ee(i);
    !de(s) || !s.hasID(e, t) || (n++, s.deleteID(e, t), s.hasNoIDsForEveryType() && ll(s));
  }
  return n;
}
function ll(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Wv(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (de(n))
      return n.getTypedIDs()[t];
    if (C(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (de(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const mi = hs("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), $n = hs("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ge = hs("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Gr = "marker-trailing-space", Dg = 1, Hv = "attribute-run";
function Nc(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Jr extends Er {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Jr(r, n);
  }
  static importJSON(t) {
    return Ug(t.runKind).updateFromJSON(t);
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
    t.classList.add(Hv);
    const r = Nc(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Nc(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Nc(this.__runKind);
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
      version: Dg
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
function Ug(e) {
  return tt(new Jr(e));
}
function Le(e) {
  return e instanceof Jr;
}
const Kg = [
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
], Fg = [
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
], Gv = [
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
  ...Kg,
  ...Fg
], zg = 1, Jv = ["type", "marker", "content"];
class we extends Er {
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
    return new we(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Gv.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Kg.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Fg.includes(t);
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
    return we.isValidFootnoteMarker(t) || we.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Xv(t) ? {
        conversion: Yv,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ln().updateFromJSON(t);
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
    return Fd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Fd(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Si(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: zg
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = ln(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Fd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Yv(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: ln(t) };
}
function ln(e, t) {
  return tt(new we(e, t));
}
function Xv(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return we.isValidMarker(t) && e.classList.contains(we.getType());
}
function D(e) {
  return e instanceof we;
}
function Bg(e) {
  return e?.type === we.getType();
}
const fa = "v", jg = 1, Qv = [
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
    super(r ?? t, a), this.__marker = fa, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new gt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Vg().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(tl, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: jg
    };
  }
}
function Vg(e, t, r, n, i, s) {
  return tt(new gt(e, t, r, n, i, s));
}
function Re(e) {
  return e instanceof gt;
}
function Wg(e) {
  return e?.type === gt.getType();
}
const Zv = /* @__PURE__ */ new Set(["closed"]);
function br(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Zv.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Hg(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Gg(e) {
  const t = Object.keys(e).filter((n) => !dv.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Jg(e, t, r, n) {
  return Hg(
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
function zs(e) {
  return e.getChildren().find((t) => N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function eC(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : zs(e) === void 0 && Yg(e) === void 0;
}
function Yg(e) {
  return e.getChildren().find((t) => C(t) && ce(t, ge) === "attribute");
}
function so(e, t) {
  return Co(e.getNextSibling(), t);
}
const tC = /^[ \u00A0]+$/;
function Eu(e) {
  if (Bn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = $e(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && tC.test(r.slice(t.length));
}
function Co(e, t) {
  let r, n, i, s;
  return Le(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), N(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Eu(e) && (r = e, e = e.getNextSibling()), C(e) && ce(e, ge) === "attribute" && (n = e, e = e.getNextSibling()), N(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Bn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function rC(e) {
  let t = e;
  for (; de(t); )
    t = t.getChildren()[0];
  return t;
}
function vr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!N(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = rC(t[r]);
  if (C(n) && n.getTextContent() === Ht(e.getCaller()))
    return n;
}
function Au(e) {
  const t = vr(e);
  return t ? Co(t.getNextSibling(), "cat") : {};
}
function Mi(e) {
  const t = e.getFirstChild();
  if (!(!C(t) || N(t)) && ce(t, ge) !== "attribute")
    return t;
}
function Xg(e) {
  const t = Mi(e);
  return t ? Co(t.getNextSibling(), "ca") : {};
}
function Qg(e) {
  const t = Mi(e);
  if (!t)
    return;
  const r = Co(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Zg(e) {
  const t = Qg(e);
  return t ? Co(t.getNextSibling(), "cp") : {};
}
function em(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Re(n))
        return n;
      if (!(N(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || C(n) && ce(n, ge) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Le(n)))
        return;
    }
}
function ja(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Le(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), N(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Eu(s) && (t = s, s = s.getNextSibling()), C(s) && ce(s, ge) === "attribute" && (r = s, s = s.getNextSibling()), N(s) && s.getMarkerSyntax() === "selfClosing" && Bn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const da = "c", tm = 1, nC = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Jt extends Er {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = da, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Jt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return rm().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(ca, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: tm
    };
  }
}
function rm(e, t, r, n, i) {
  return tt(new Jt(e, t, r, n, i));
}
function Ee(e) {
  return e instanceof Jt;
}
function iC(e) {
  return e?.type === Jt.getType();
}
const sC = ["type", "marker", "content"], ul = "unknown", nm = 1, oC = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Ei extends Er {
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
    return new Ei(r, n, i, s);
  }
  static importDOM() {
    return {
      [ul]: (t) => cC(t) ? {
        conversion: aC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Pu().updateFromJSON(t);
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
    return oC.has(this.getTag());
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
    const t = document.createElement(ul);
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
      version: nm
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
    const r = t ?? R();
    if (!r)
      return !1;
    if (du(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function aC(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Pu(t, r) };
}
function Pu(e, t, r) {
  return tt(new Ei(e, t, r));
}
function cC(e) {
  return e?.tagName.toLowerCase() === ul;
}
function De(e) {
  return e instanceof Ei;
}
const oo = "id", im = 1, lC = [
  "type",
  "marker",
  "code",
  "content"
];
class or extends Er {
  __marker = oo;
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
    return new or(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return sm(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return uT(t);
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
      version: im
    };
  }
}
function sm(e, t) {
  return tt(new or(e, t));
}
function ut(e) {
  return e instanceof or;
}
function om(e) {
  return e?.type === or.getType();
}
const am = "table", fl = "immutable-table", cm = 1, uC = ["type", "marker", "content"];
class Ai extends Er {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return fl;
  }
  static clone(t) {
    return new Ai(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return fC().updateFromJSON(t);
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
      type: fl,
      ...t !== void 0 && { unknownAttributes: t },
      version: cm
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function fC(e) {
  return tt(new Ai(e));
}
function lm(e) {
  return e instanceof Ai;
}
function dC(e) {
  return e?.type === fl;
}
function dl(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ut(t) || De(t) || lm(t))
      return !0;
  return !1;
}
const um = 1;
class In extends pu {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new In(t.__key);
  }
  static importJSON(t) {
    return ir().updateFromJSON(t);
  }
  getMarker() {
    return Fr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: um
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ir();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function ir() {
  return tt(new In());
}
function st(e) {
  return e instanceof In;
}
function Va(e) {
  return e?.type === In.getType();
}
function fm(e) {
  return st(e) && Br(e.getParent());
}
function wu(e) {
  return de(e) || fm(e);
}
function Ar(e) {
  let t = e.getParent();
  for (; t && wu(t); )
    t = t.getParent();
  return t;
}
function Wa(e) {
  return D(Ar(e));
}
function pa(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Wa(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function pC(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!N(t))
      return;
    const r = pa(t, e);
    r !== void 0 && t.setNested(r);
  });
}
const li = /* @__PURE__ */ new WeakMap();
function hC(e, t, r) {
  const n = { owners: t, rederive: r };
  return li.set(e, n), () => {
    li.get(e) === n && li.delete(e);
  };
}
function dm(e, t, r) {
  const n = li.get(e);
  !n?.rederive || !r.has(Ka) || n.derivedFor === t || (n.rederive(t), n.derivedFor = t);
}
function pl(e) {
  return li.get(e)?.owners;
}
function pm(e) {
  return li.get(Ot())?.owners.has(e.getKey()) ?? !1;
}
function hm(e) {
  li.get(Ot())?.owners.add(e.getKey());
}
function ks(e) {
  return C(e) && e.getType() === We.getType() && ce(e, ge) !== "attribute";
}
function Ha(e) {
  if (!ks(e) || !e.getTextContent().startsWith(q))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && de(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!D(n))
    return 0;
  for (; de(r); )
    r = r.getLastChild();
  return !N(r) || r.getMarkerSyntax() !== "opening" || pa(r, n) === void 0 ? 0 : 1;
}
function gm(e) {
  let t = e.getNextSibling();
  for (; de(t); )
    t = t.getFirstChild();
  return t;
}
function So(e, t) {
  if (e.getMarkerSyntax() !== "opening" || pa(e, t) === void 0)
    return;
  const r = e.getNextSibling(), n = gm(e);
  if (!(r === null || n === null))
    return N(n) ? pa(n, t) === !0 ? "spacer" : void 0 : ks(n) ? n.getTextContent().startsWith(q) ? void 0 : n.is(r) ? "prefix" : "spacer" : "spacer";
}
function Nu(e) {
  return !ks(gm(e)) || dl(e) ? !1 : !xv(e.getNextSibling()?.getTextContent() ?? "");
}
function mm(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (N(t) && So(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Ou(e, t) {
  const r = R();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  if (r.anchor.offset !== 0)
    return !1;
  for (let i = e.getNextSibling(); i; ) {
    if (n.is(i))
      return !0;
    if (!de(i))
      return !1;
    i = i.getFirstChild();
  }
  return !1;
}
function ym(e) {
  if (!e.isAttached() || pm(e))
    return;
  const t = pl(Ot()) !== void 0;
  e.getChildren().forEach((r) => {
    if (!N(r))
      return;
    const n = So(r, e);
    if (n === void 0 || Ou(r, e))
      return;
    if (t && Nu(r)) {
      hm(e);
      return;
    }
    if (n === "spacer") {
      r.insertAfter(Oe(q));
      return;
    }
    const i = r.getNextSibling();
    C(i) && gC(i);
  });
}
function gC(e) {
  e.setTextContent(q + e.getTextContent());
  const t = R();
  if (P(t))
    for (const r of [t.anchor, t.focus])
      r.type === "text" && r.key === e.getKey() && r.set(r.key, r.offset + 1, "text");
}
function mC(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && So(t, e) !== void 0 && Ou(t, e)) : !1;
}
function Ru(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && So(t, e) !== void 0 && (Ou(t, e) || Nu(t))) : !1;
}
function yC(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && So(t, e) !== void 0 && Nu(t)) : !1;
}
function bC(e) {
  if (mC(e))
    return !0;
  const t = R();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  return (r.is(e) || e.isParentOf(r)) && Ru(e);
}
const bm = 1, kC = "marker", $u = hs("isGutterMarker", {
  parse: (e) => e === !0
});
class Pr extends ko {
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
      span: (t) => CC(t) ? {
        conversion: xC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return un().updateFromJSON(t);
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
    return r && Si(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: bm
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function xC(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: un(t, r) };
}
function un(e, t) {
  return tt(new Pr(e, t));
}
function TC(e) {
  return xt(un(kC, e), $u, !0);
}
function vC(e) {
  return vt(e) && ce(e, $u);
}
function CC(e) {
  return e?.tagName === "span";
}
function vt(e) {
  return e instanceof Pr;
}
function km(e) {
  return e?.type === Pr.getType();
}
const xm = "file", Tm = "src", SC = "colspan", _C = "category", MC = "alt", EC = "closed", AC = "false";
function PC(e) {
  return e[EC] !== AC;
}
function wC(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === xm ? Tm : t,
    r
  ]));
}
function NC(e, t) {
  return e === "figure" && t === Tm ? xm : t;
}
function vm(e, t) {
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
function Ga(e, t, r) {
  const n = r ?? {}, i = PC(n);
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
        opening: `\\${vm(t, n[SC])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: br(wC(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [_C]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + br(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [MC]: s, ...o } = n;
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
const zt = { wantsRun: !1, valueText: void 0 }, bn = {};
function Oc(e, t) {
  if (t === "va")
    return e;
  const r = so(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Iu(e) {
  const t = R();
  if (!P(t) || !t.isCollapsed())
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
function Ja(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = R();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function OC(e) {
  return Le(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : N(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : C(e) && ce(e, ge) === "attribute";
}
function RC(e) {
  if (N(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!C(e) || ce(e, ge) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Rc(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Re(t))
      return t;
    if (!OC(t))
      return;
  }
}
function zd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Re(t),
    ownerOf: (t) => {
      if (Le(t))
        return t.getRunKind() === e ? Rc(t) : void 0;
      const r = t.getParent();
      return Le(r) ? r.getRunKind() === e ? Rc(r) : void 0 : RC(t) === e ? Rc(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Re(t))
        return zt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? zt : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (t) => Re(t) ? so(Oc(t, e), e) : bn,
    graceSite: (t, r) => Re(t) ? !r.opener && !r.closer ? Iu(Oc(t, e)) : Ja(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Re(t) ? Oc(t, e) : void 0
    }
  };
}
const $C = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => zt,
  scanPieces: () => bn,
  graceSite: (e) => D(e) && bC(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, IC = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!C(e) || ce(e, ge) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || zs(e) === void 0)
      return zt;
    const t = br(e.getUnknownAttributes() ?? {}, ys(e.getMarker()));
    return t === "" ? zt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: Yg(e) } : bn,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = zs(e);
    if (!r)
      return !1;
    const n = R();
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
    insertRunBefore: (e) => D(e) ? zs(e) : void 0
  }
};
function Cm(e) {
  if (N(e))
    return e.getMarker() === "cat";
  if (!C(e) || ce(e, ge) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return N(t) && t.getMarker() === "cat";
}
function qC(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = vr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Cm(n))
        return;
    }
}
const LC = {
  kind: "cat",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (Le(e))
      return e.getRunKind() === "cat" && U(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Le(t) ? t.getRunKind() === "cat" && U(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Cm(e) ? qC(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || e.getIsCollapsed() !== !1)
      return zt;
    const t = e.getCategory();
    return t === void 0 ? zt : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => U(e) ? Au(e) : bn,
  graceSite: (e, t) => {
    if (!U(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = vr(e);
      return r !== void 0 && Iu(r);
    }
    return Ja(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => U(e) ? vr(e) : void 0
  }
};
function DC(e) {
  return Le(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : N(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : C(e) && ce(e, ge) === "attribute";
}
function UC(e) {
  if (N(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!C(e) || ce(e, ge) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function KC(e) {
  const t = e.getParent();
  if (!Ee(t))
    return;
  const r = Mi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!DC(n))
        return;
    }
}
function Bd(e) {
  const t = (r) => Ee(r) ? e === "ca" ? Mi(r) : Qg(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ee(r),
    ownerOf: (r) => {
      if (Le(r))
        return r.getRunKind() === e && Ee(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Le(n) ? n.getRunKind() === e && Ee(n.getParent()) ? n.getParent() ?? void 0 : void 0 : UC(r) === e ? KC(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ee(r))
        return zt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? zt : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (r) => Ee(r) ? e === "ca" ? Xg(r) : Zg(r) : bn,
    graceSite: (r, n) => {
      if (!Ee(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Iu(i);
      }
      return Ja(n);
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
function Sm(e) {
  if (N(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return C(e) && ce(e, ge) === "attribute";
}
function FC(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Pe(t)) {
      const r = N(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Sm(t))
      return;
  }
}
const zC = {
  kind: "milestone",
  ownerPredicate: (e) => Pe(e),
  ownerOf: (e) => {
    const t = Le(e) ? e.getRunKind() === "milestone" ? e : void 0 : Le(e.getParent()) ? e.getParent() : Sm(e) ? e : void 0;
    if (!t || Le(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Le(t) ? Pe(r) ? r : void 0 : FC(t);
  },
  expectedPieces: (e) => {
    if (!Pe(e))
      return zt;
    const t = Jg(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = br(t, vo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : q + r };
  },
  scanPieces: (e) => {
    if (!Pe(e))
      return bn;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ja(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Pe(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = R();
      if (!P(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Ja(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Pe(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, BC = Ga("optbreak", void 0, void 0).opening, jC = {
  kind: "optbreak",
  ownerPredicate: (e) => De(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!De(t) || t.getTag() !== "optbreak"))
      return C(e) || vt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: BC }),
  scanPieces: (e) => De(e) ? { value: e.getFirstChild() ?? void 0 } : bn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, VC = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => De(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => zt,
  scanPieces: () => bn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, WC = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => zt,
  scanPieces: () => bn,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, ao = [
  $C,
  IC,
  zd("va"),
  zd("vp"),
  LC,
  Bd("ca"),
  Bd("cp"),
  zC,
  jC,
  VC,
  WC
], HC = new Map(ao.map((e) => [e.kind, e]));
function fn(e) {
  const t = HC.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function qn(e) {
  for (const t of ao) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function _m(e) {
  return qn(e) !== void 0;
}
function GC(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const { type: t, id: r, start: n, end: i } = e;
  return typeof t == "string" && typeof r == "string" && Number.isInteger(n) && Number.isInteger(i);
}
const Ya = hs("displayAnnotations", {
  parse: (e) => {
    if (typeof e != "object" || e === null)
      return;
    const { basis: t, annotations: r } = e;
    if (!(typeof t != "string" || !Array.isArray(r)) && r.every(GC))
      return { basis: t, annotations: r };
  }
});
function JC(e, t) {
  const r = new Array(e.length).fill(void 0);
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; )
    r[n] = n, n++;
  let i = 0;
  for (; i < e.length - n && i < t.length - n && e[e.length - 1 - i] === t[t.length - 1 - i]; )
    r[e.length - 1 - i] = t.length - 1 - i, i++;
  const s = e.slice(n, e.length - i), o = t.slice(n, t.length - i), a = Array.from({ length: s.length + 1 }, () => new Array(o.length + 1).fill(0));
  for (let u = s.length - 1; u >= 0; u--)
    for (let f = o.length - 1; f >= 0; f--)
      a[u][f] = s[u] === o[f] ? a[u + 1][f + 1] + 1 : Math.max(a[u + 1][f], a[u][f + 1]);
  let c = 0, l = 0;
  for (; c < s.length && l < o.length; )
    s[c] === o[l] ? (r[n + c] = n + l, c++, l++) : a[c + 1][l] >= a[c][l + 1] ? c++ : l++;
  return r;
}
function YC(e, t, r) {
  let n, i;
  for (let s = t; s < r; s++) {
    const o = e[s];
    o !== void 0 && (n ??= o, i = o);
  }
  return n === void 0 || i === void 0 ? void 0 : [n, i + 1];
}
const Mm = 1, XC = "c", Em = "span";
class dr extends ko {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = XC, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Am(t) ? {
        conversion: QC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return qu().updateFromJSON(t);
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
    const t = document.createElement(Em);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(ca, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Si(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(ca, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? nr(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Mm
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
function QC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: qu(t) };
}
function qu(e, t, r, n, i, s) {
  return tt(new dr(e, t, r, n, i, s));
}
function Am(e) {
  return e ? e.classList.contains(ca) && e.tagName.toLowerCase() === Em : !1;
}
function Pi(e) {
  return e instanceof dr;
}
function ZC(e) {
  return e?.type === dr.getType();
}
const eS = [
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
  Fr,
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
], Pm = 1, tS = ["type", "marker", "content"];
class ft extends pu {
  __marker;
  __unknownAttributes;
  constructor(t = Fr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new ft(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (eS.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: rS,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return co().updateFromJSON(t);
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
    return r && Si(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Pm
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = co(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function rS(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = co(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function co(e, t) {
  return tt(new ft(e, t));
}
function he(e) {
  return e instanceof ft;
}
function Lu(e) {
  return e?.type === ft.getType();
}
const wm = /[ \u00A0]{2,}/g;
function nS(e) {
  return [...e.matchAll(wm)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function iS(e) {
  return e.replace(wm, (t) => t[0]);
}
const sS = "​", ns = sS;
var jd;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(jd || (jd = {}));
var Vd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Vd || (Vd = {}));
function oS() {
  return Oe(ns);
}
function aS(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ns, ""));
}
function wi(e) {
  return e.length > 0 && e.includes(ns) && e.replaceAll(ns, "") === "";
}
function Du(e) {
  return C(e) && wi(e.getTextContent());
}
function Nm(e) {
  return iC(e) || ZC(e);
}
function Ye(e) {
  return Ee(e) || Pi(e);
}
function Om(e, t) {
  return e.find((r) => Ye(r) && r.getNumber() === t.toString());
}
function cS(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ye(r));
}
function Wd(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Rm(e) {
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
function Cr(e) {
  return lt(e, U) ?? void 0;
}
function lS(e) {
  return ut(e) || Ee(e) || D(e) || Pi(e) || st(e) || Pe(e) || he(e) || U(e) || Re(e) || De(e);
}
function $m(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function uS(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function ar(e) {
  return Ue(e) || ut(e);
}
function Ue(e) {
  return he(e) || st(e);
}
function fS(e) {
  return Lu(e) || Va(e);
}
function is(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function yi(e, t) {
  const r = ce(t, mi), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function dS(e, t) {
  const r = O(e) ? e : e.getParent(), n = O(t) ? t : t.getParent(), i = r && n ? pT(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function pS(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function dn(e) {
  return e?.type === We.getType();
}
function hS(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function gS(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Im(e, t, r) {
  const n = $e(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function mS(e) {
  const t = e[an];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function qm(e) {
  return bs(e) || km(e) && e.textType === "marker" || dn(e) && mS(e) === "attribute" ? "" : dn(e) && e.text !== q ? e.text : Bg(e) ? e.children.map((t) => qm(t)).join("") : "";
}
function yS(e) {
  return e.map((r) => qm(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Uu(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = Lm(r);
    n !== ct && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Lm(e) {
  return N(e) || cr(e) || C(e) && ce(e, ge) === "attribute" ? "" : C(e) ? e.getTextContent() : O(e) ? e.getChildren().map((t) => Lm(t)).join("") : "";
}
function cr(e) {
  return vt(e) && e.getTextType() === "marker";
}
function lr(e) {
  return N(e) || cr(e);
}
function Hd(e, t) {
  bS(e, t), e.setMarker(t);
}
function bS(e, t) {
  const r = e.getMarker(), n = $e(r), i = $e(r, !0), s = Je(r), o = Je(r, !0), a = we.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!lr(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, f = !u && (l === s || l === o);
    if (!(!u && !f)) {
      if (f && a) {
        c.remove();
        return;
      }
      if (N(c))
        c.setMarker(t);
      else if (cr(c)) {
        const d = l.startsWith($e("", !0));
        c.setTextContent(u ? $e(t, d) : Je(t, d));
      }
    }
  });
}
function Xe(e, t = fT) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Be(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Dm(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Ku(e) {
  if (!P(e))
    return Gd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !O(t) || e.anchor.type === "text" && !C(t)))
    return t ?? void 0;
  try {
    return Gd(e) ?? t ?? void 0;
  } catch (n) {
    if (Dm(n))
      return t ?? void 0;
    throw n;
  }
}
function kS(e, t) {
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
function Fu(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Um(e) {
  return !!e && e.includes("-");
}
function Km(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Gd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Sr(e) {
  if (!e)
    return !1;
  if (xo(e) || N(e) || cr(e) || Le(e) || e.getType() === zn || vt(e) && e.getTextType() === "attribute")
    return !0;
  const t = Ar(e);
  if (Ee(t) || C(e) && U(t) && vr(t)?.is(e))
    return !0;
  if (C(e)) {
    const r = ce(e, ge);
    if (r === Gr || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || wi(n))
      return !0;
    if (n === q)
      return !Fm(e);
  }
  return !1;
}
function Fm(e) {
  if (e.getTextContent() !== q || ce(e, ge) !== void 0 || !(de(e.getParent()) || de(e.getPreviousSibling()) || de(e.getNextSibling())) || Ha(e) > 0)
    return !1;
  const r = Ar(e);
  return !D(r) || zm(r, e);
}
function zm(e, t) {
  return e.getChildren().some((r) => r.is(t) ? !1 : de(r) ? zm(r, t) : C(r) ? !N(r) && ce(r, ge) === void 0 && r.getTextContent() !== "" && r.getTextContent() !== q && !wi(r.getTextContent()) : O(r) && !Le(r));
}
function bi() {
  const e = Oe(q);
  return xt(e, ge, Gr), e.setMode("token"), e;
}
function xS(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function pr(e) {
  return C(e) && ce(e, ge) === Gr;
}
function Bm(e) {
  const t = e.getFirstChild();
  if (!lr(t) || t === null || pr(t.getNextSibling()))
    return !1;
  const r = R();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function jm(e) {
  if (Ee(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!Sr(s)) {
      if (wu(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (C(s) && s.getType() === We.getType()) {
        r ??= [], r.push(s);
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function TS(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = Ha(i), o = t ? nS(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, u]) => c + u - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function Vm(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function vS(e, t) {
  let r = t;
  for (const [n, i] of Vm(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function Jd(e, t) {
  let r = t;
  for (const [n, i] of Vm(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function Rt(e, t) {
  return jm(e).map((r) => r.type === "element" ? r : TS(r.nodes, t));
}
function CS(e, t) {
  return jm(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function lo(e, t, r) {
  const n = Ar(e);
  if (!n)
    return;
  const i = Rt(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: vS(a, t) };
  }
}
function SS(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, Jd(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, Jd(r, t - r.start)];
}
function Xi(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (fm(e)) {
    const s = e.getParentOrThrow();
    return n ? Sr(n) ? Xi(e, t + 1, r) : hl(s, n, r) : Xi(s, e.getIndexWithinParent() + 1, r);
  }
  const i = Rt(e, r);
  return n ? Sr(n) || wu(n) && !Wm(i, n) ? Xi(e, t + 1, r) : hl(e, n, r) : { type: "index", index: i.length };
}
function _S(e, t) {
  const r = Ar(e);
  if (r && Wm(Rt(r, t), e))
    return { parent: r, point: hl(r, e, t) };
}
function Wm(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || is(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || is(n.node, t.getKey())));
}
function hl(e, t, r) {
  const n = Rt(e, r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type === "element") {
      if (s.node.is(t) || is(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || is(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: n.length };
}
const ha = "unmatched", Hm = 2;
function Bs(e) {
  return `\\${e}`;
}
class Yr extends We {
  __marker;
  constructor(t = "", r) {
    super(Bs(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Yr(r, n);
  }
  static importDOM() {
    return {
      [ha]: (t) => ES(t) ? {
        conversion: MS,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return zu().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Bs(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Bs(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ad), r.title = Yd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Yd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(ha);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Ad), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Hm
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Gm(e) {
  return e.getTextContent() === Bs(e.getMarker());
}
function Yd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function MS(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: zu(t) };
}
function zu(e) {
  return tt(new Yr(e));
}
function ES(e) {
  return e?.tagName.toLowerCase() === ha;
}
function Yt(e) {
  return e instanceof Yr;
}
const AS = /* @__PURE__ */ new Set([
  zn,
  _g,
  Pr.getType(),
  // A chapter in the views without editable markers: the same whole-node treatment as a verse.
  dr.getType()
]);
function Bu(e) {
  return C(e) && ce(e, ge) === "attribute";
}
function Jm(e) {
  if (!C(e))
    return !1;
  let t = e.getParent();
  for (; de(t); )
    t = t.getParent();
  return U(t) ? vr(t)?.is(e) ?? !1 : Ee(t) ? Mi(t)?.is(e) ?? !1 : !1;
}
function PS(e) {
  return gs(e) ? AS.has(e.getType()) : !C(e) || pr(e) ? !1 : N(e) || Re(e) || Bu(e) || Jm(e) || // An unmatched closer (`ImmutableUnmatchedNode`) is a `TextNode` subclass, not a decorator, so
  // the decorator-type set above cannot reach it.
  Yt(e);
}
function Ym(e) {
  if (!C(e))
    return [0, 0];
  if (Yt(e))
    return [0, e.getTextContentSize()];
  const t = e.getTextContent(), r = t.length - t.trimStart().length;
  return r === t.length ? [r, r] : [r, t.trimEnd().length];
}
function Xm(e, t, r) {
  return e.type === t && e.id === r;
}
function Qm(e, t) {
  if (e.basis === t)
    return e.annotations;
  const r = JC(e.basis, t);
  return e.annotations.flatMap((n) => {
    if (n.start === n.end)
      return [n];
    const i = YC(r, n.start, n.end);
    return i ? [{ ...n, start: i[0], end: i[1] }] : [];
  });
}
function wn(e) {
  const t = ce(e, Ya);
  return t ? Qm(t, e.getTextContent()) : [];
}
function ju(e, t) {
  xt(e, Ya, t.length > 0 ? { basis: e.getTextContent(), annotations: t } : void 0);
}
function wS(e, t, r, n, i) {
  let s = { type: t, id: r, start: n, end: i };
  const o = [];
  for (const a of wn(e))
    Xm(a, t, r) && a.start <= s.end && s.start <= a.end ? s = {
      ...s,
      start: Math.min(s.start, a.start),
      end: Math.max(s.end, a.end)
    } : o.push(a);
  ju(e, [...o, s]);
}
function Zm(e, t, r) {
  const n = wn(e), i = n.filter((s) => !Xm(s, t, r));
  return i.length === n.length ? !1 : (ju(e, i), !0);
}
function ey(e) {
  if (e.getType() !== zn)
    return e.getTextContent();
  const t = e.getParent();
  return U(t) ? t.getCaller() : "";
}
function gl(e, t) {
  const r = ey(e);
  return t.start === t.end ? r : r.slice(t.start, t.end);
}
function NS(e, t, r) {
  return wn(e).filter((n) => n.type === t && (n.start === n.end || n.start <= r && r <= n.end)).map((n) => n.id);
}
function OS(e) {
  const t = ce(e, Ya);
  !t || t.basis === e.getTextContent() || ju(e, Qm(t, e.getTextContent()));
}
const ga = /* @__PURE__ */ new WeakMap();
function Vu(e, t) {
  return JSON.stringify([e, t]);
}
function RS(e, t, r) {
  const n = Ot();
  let i = ga.get(n);
  i || (i = /* @__PURE__ */ new Map(), ga.set(n, i));
  const s = Vu(e, t), o = i.get(s), a = Object.fromEntries(Object.entries(r).filter(([, c]) => c !== void 0));
  i.set(s, { ...o, ...a });
}
function ma(e, t, r) {
  return ga.get(e)?.get(Vu(t, r));
}
function ty(e, t, r) {
  ga.get(e)?.delete(Vu(t, r));
}
function $S(e) {
  const r = [We, fr, gt].filter((n) => e.hasNodes([n])).map((n) => e.registerNodeTransform(n, OS));
  return () => r.forEach((n) => n());
}
function IS(e) {
  return Re(e) || Pe(e) || Le(e) || Le(e.getParent()) || Jm(e) || Yt(e);
}
function Wu(e) {
  return C(e) ? e.getTextContentSize() : 1;
}
function Hu(e) {
  let t = e;
  for (; O(t); ) {
    const r = t.getFirstChild();
    if (!r)
      return t;
    t = r;
  }
  return t;
}
function ry(e) {
  let t = e;
  for (; O(t); ) {
    const r = t.getLastChild();
    if (!r)
      return t;
    t = r;
  }
  return t;
}
function Xd(e) {
  const t = e.getNode();
  if (!O(t))
    return { leaf: t, offset: C(t) ? e.offset : Math.min(e.offset, 1) };
  const r = t.getChildAtIndex(e.offset);
  if (r)
    return { leaf: Hu(r), offset: 0 };
  const n = t.getLastChild();
  if (!n)
    return { leaf: t, offset: 0 };
  const i = ry(n);
  return { leaf: i, offset: Wu(i) };
}
function Yo(e, t) {
  return e.leaf.is(t.leaf) ? e.offset - t.offset : e.leaf.isBefore(t.leaf) ? -1 : 1;
}
function ny(e, t, r) {
  const n = Wu(e);
  let i = n;
  t.leaf.is(e) ? i = t.offset : t.leaf.isBefore(e) && (i = 0);
  let s = 0;
  return r.leaf.is(e) ? s = r.offset : e.isBefore(r.leaf) && (s = n), [i, Math.max(i, s)];
}
function qS(e) {
  for (let t = e; t; t = t.getParent()) {
    const r = t.getNextSibling();
    if (r)
      return Hu(r);
  }
}
function LS(e, t, r) {
  const n = Hu(e), i = ry(e);
  if (Yo(t, { leaf: n, offset: 0 }) > 0 || Yo(r, { leaf: i, offset: Wu(i) }) < 0)
    return !1;
  if (pr(i)) {
    const s = qS(e);
    if (!s || Yo(r, { leaf: s, offset: 0 }) <= 0)
      return !1;
  }
  return !0;
}
function DS(e, t, r) {
  if (!PS(e))
    return;
  const [n, i] = ny(e, t, r);
  if (i <= n)
    return;
  if (!C(e))
    return [0, 0];
  const [s, o] = Ym(e), a = [Math.max(n, s), Math.min(i, o)];
  return a[1] > a[0] ? a : void 0;
}
function Gu(e, t, r, n, i, s, o) {
  if (e.isCollapsed())
    return;
  const a = e.getNodes(), c = e.isBackward(), [l, u] = c ? [e.focus, e.anchor] : [e.anchor, e.focus], f = Xd(l), d = Xd(u);
  if (Yo(f, d) >= 0)
    return;
  let p = !1;
  const h = (k) => {
    const T = DS(k, f, d);
    T && (Kr(Go), wS(k, t, r, T[0], T[1]), p = !0);
  };
  let g, m;
  for (const k of a) {
    if (O(m) && m.isParentOf(k))
      continue;
    if (N(k) || pr(k) || Bu(k) || IS(k)) {
      h(k), g = k.getParent(), m = void 0;
      continue;
    }
    let T = null;
    if (C(k)) {
      const [M, I] = ny(k, f, d), A = Math.max(M, Ha(k));
      if (A >= I)
        continue;
      Kr(Go), T = k.splitText(A, I)[A > 0 ? 1 : 0];
    } else {
      if (de(k))
        continue;
      if (O(k) && k.isInline()) {
        if (!LS(k, f, d))
          continue;
        T = k;
      }
    }
    if (T !== null) {
      if (T && T.is(g))
        continue;
      Kr(Go);
      const M = T.getParent();
      (M == null || !M.is(g)) && (m = void 0), g = M, m === void 0 && (m = gi(), m.addID(t, r, n, i, s, o), T.insertBefore(m)), m.append(T);
    } else
      h(k), g = void 0, m = void 0;
  }
  p && RS(t, r, { onClick: n, onRemove: i, onMouseEnter: s, onMouseLeave: o }), t === Kt && O(m) && (c ? m.selectStart() : m.selectEnd());
}
const iy = "table:row", Qd = "immutable-table-row", sy = 1, ml = "tr", US = ["type", "marker", "content"];
class Ni extends Er {
  __marker;
  __unknownAttributes;
  constructor(t = ml, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Qd;
  }
  static clone(t) {
    return new Ni(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return KS().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? ml).setUnknownAttributes(t.unknownAttributes);
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
      type: Qd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: sy
    };
  }
}
function KS(e, t) {
  return tt(new Ni(e, t));
}
function oy(e) {
  return e instanceof Ni;
}
const ay = "table:cell", Zd = "immutable-table-cell", cy = 1, yl = "tc1", FS = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function zS(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Oi extends Er {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = yl, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Zd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Oi(r, n, i, s, o);
  }
  static importJSON(t) {
    return BS().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? yl).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = zS(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Zd,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: cy
    };
  }
}
function BS(e, t, r, n) {
  return tt(new Oi(e, t, r, n));
}
function jS(e) {
  return e instanceof Oi;
}
const bl = /* @__PURE__ */ new WeakMap();
function ep(e, t) {
  t ? bl.set(e, t) : bl.delete(e);
}
function Ju(e) {
  return bl.get(e);
}
function Xa(e, t) {
  const r = e.getChildAtIndex(t);
  return C(r) ? r : void 0;
}
function _r(e, t) {
  const r = Xa(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function uo(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function VS(e) {
  return e.getChildren().some((t) => N(t) && t.getMarkerSyntax() === "closing");
}
function WS(e) {
  return uo(e) ? void 0 : { closed: "false" };
}
function HS(e, t, r, n) {
  const i = t.getMarker(), s = Wa(t), o = VS(t);
  if (n) {
    e.append(Tt(i, "opening", s));
    const [a] = r;
    ks(a) && !a.getTextContent().startsWith(q) && a.setTextContent(q + a.getTextContent());
  }
  e.append(...r), o && e.append(Tt(i, "closing", s));
}
function ki(e) {
  return lt(e, D) ?? void 0;
}
function Yu(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function kl(e) {
  const t = ly(e);
  return e.getChildren().every((r) => N(r) || t && ce(r, ge) === "attribute" || C(r) && r.getTextContent().replaceAll(q, "") === "");
}
function ly(e) {
  return uo(e);
}
function GS(e, t) {
  const r = e.getUnknownAttributes(), n = r ? br(r, ys(e.getMarker())) : "";
  n !== "" && t.insertAfter(Oe(n)), e.remove();
}
function JS(e, t) {
  if (uo(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(Tt(e.getMarker(), "closing", Wa(e)));
}
function YS(e, t) {
  return D(e) && !uo(e) && !uo(t);
}
function XS(e, t, r) {
  kl(e) && e.getChildren().forEach((i) => {
    N(i) || i.remove();
  });
  const [n] = t;
  r && ks(n) && !n.getTextContent().startsWith(q) && n.setTextContent(q + n.getTextContent()), e.append(...t);
}
function QS(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = ly(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), f = N(l) && l.getMarkerSyntax() === "closing", d = s && ce(l, ge) === "attribute";
    !f && !d && o.push(l), l = u;
  }
  const a = YS(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      XS(e, o, n);
    else {
      const l = ln(t.getMarker(), WS(t));
      HS(l, t, o, n), e.insertAfter(l), kl(l) ? l.remove() : c = l;
    }
  i && !a && JS(t, n), kl(t) && GS(t, c);
}
function ss(e, t) {
  let r = e.getParent();
  for (; D(r); )
    QS(e, r, t), r = e.getParent();
}
function Xu(e) {
  if (C(e) && !N(e)) {
    const t = e.getTextContent().startsWith(q) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (O(e)) {
    const t = e.getChildren().find((r) => !N(r));
    if (t) {
      Xu(t);
      return;
    }
    e.selectEnd();
  }
}
function ZS(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function xl(e) {
  return !!(e.opener || e.value || e.closer);
}
function tp(e) {
  return /^\s/.test(e);
}
function Qu(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !tp(t) || !tp(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Qa(e, t, r) {
  return r.wantsRun ? Qu(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : ZS(t);
}
function e_(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Qu(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function uy(e, t) {
  return !xl(e.scanPieces(t));
}
function _o(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Qa(e, n, r))
    return !1;
  const i = R();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || is(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function t_(e, t, r, n) {
  return !r.wantsRun || xl(n) || Ju(Ot()) === "remote" ? !1 : Ot().getEditorState().read(() => {
    const i = ee(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : xl(e.scanPieces(i));
  });
}
function r_(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function rp(e) {
  const t = Oe(e);
  return xt(t, ge, "attribute"), t;
}
function n_(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Ug(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function i_(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const d = c?.(t);
    if (!d || n.valueText === void 0)
      return;
    C(r.value) ? r.value.setTextContent(n.valueText) : d.insertBefore(rp(n.valueText));
    return;
  }
  const l = n_(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const d = Tt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(d) : l.append(d), d;
  })();
  let f = r.value;
  n.valueText === void 0 ? (f?.remove(), f = void 0) : C(f) ? Qu(f.getTextContent(), n.valueText) && f.setTextContent(n.valueText) : (f = rp(n.valueText), u.insertAfter(f)), a !== "none" && !r.closer && (f ?? u).insertAfter(Tt(a === "selfClosing" ? "" : o(t), a));
}
function fo(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Qa(e, i, n) && !pm(t)) {
    if (t_(e, t, n, i)) {
      hm(t);
      return;
    }
    if (!_o(e, t)) {
      if (!n.wantsRun) {
        r_(i);
        return;
      }
      i_(e, t, i, n);
    }
  }
}
function s_(e, t, r) {
  fo(e, t), t.isAttached() && _o(e, t) && r.add(t.getKey());
}
function fy(e) {
  if (!C(e))
    return !1;
  if (N(e) || Re(e) || Yt(e))
    return !0;
  const t = ce(e, ge);
  return t === "attribute" || t === Gr;
}
function Zu(e, t) {
  return N(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Bn(e) && D(e.getParent())) : !1;
}
function o_() {
  const e = R();
  return P(e) ? Zu(e.focus.getNode(), e.focus.offset) : !1;
}
function dy(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return C(t) && fy(t) ? t : void 0;
}
function a_(e) {
  const t = dy(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function c_(e) {
  const t = dy(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function np(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function ip(e, t) {
  e.set(t.key, t.offset, t.type);
}
function l_(e, t) {
  let r = c_(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!C(n))
      return;
    if (!fy(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function sp(e, t) {
  const r = l_(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function py(e) {
  if (e.isCollapsed()) {
    const a = a_(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [np(r), np(n)], s = sp(r, "next"), o = sp(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (ip(r, i[0]), ip(n, i[1]), !1) : !0;
}
const hy = hs("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), ya = "verse-block", gy = 1, u_ = "verse-block";
class xs extends Er {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return ya;
  }
  static clone(t) {
    return new xs(t.__number, t.__key);
  }
  static importJSON(t) {
    return f_().updateFromJSON(t);
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
    return Km(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(u_), op(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && op(r, this.__number), !1;
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
      type: ya,
      number: this.getNumber(),
      version: gy
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function op(e, t) {
  const { start: r, end: n } = Km(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), ap(e, "data-verse-start", i ? r : NaN), ap(e, "data-verse-end", i ? n : NaN);
}
function ap(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function f_(e) {
  return tt(new xs(e));
}
function xi(e) {
  return e instanceof xs;
}
function d_(e) {
  return e?.type === ya;
}
const p_ = [
  or,
  dr,
  Jt,
  gt,
  we,
  ze,
  Tr,
  fr,
  Ei,
  Pr,
  Yr,
  ft,
  In,
  Ai,
  Ni,
  Oi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Jr,
  {
    replace: pu,
    with: () => ir(),
    withKlass: In
  }
], ba = {
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
}, h_ = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function g_(e) {
  if (!e)
    return zr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: zr(r)?.category ?? x.Uncategorized,
      type: h_[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: zr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function cp(e, t, r) {
  const n = {
    type: sn,
    version: nn,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Va(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const my = "v", yy = 1, m_ = "verse-selected";
class $t extends ko {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = my, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return _g;
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new $t(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => k_(t) ? {
        conversion: b_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ef().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(tl, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Si(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(tl, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? nr(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      aa + this.getNumber() + aa
    );
    return S(y_, { nodeKey: this.getKey(), text: t });
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
      version: yy
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Dm(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function y_({ nodeKey: e, text: t }) {
  const [r] = IT(e);
  return S("span", { className: r ? m_ : void 0, children: t });
}
function b_(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: ef(t) };
}
function ef(e, t, r, n, i, s) {
  return tt(new $t(e, t, r, n, i, s));
}
function k_(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === my;
}
function jn(e) {
  return e instanceof $t;
}
function x_(e) {
  return e?.type === $t.getType();
}
function Se(e) {
  return Re(e) || jn(e);
}
function by(e) {
  return Wg(e) || x_(e);
}
function T_(e) {
  return v_(e).find((t) => he(t));
}
function v_(e) {
  return e.some(xi) ? e.flatMap((t) => xi(t) ? t.getChildren() : t) : e;
}
function Za(e) {
  return O(e) ? xi(e) ? e.getChildren().flatMap(Za) : e.getChildren() : [];
}
function C_(e, t) {
  return Za(e).find((i) => Se(i) && Fu(t, i.getNumber()));
}
function S_(e, t) {
  return t === 0 ? T_(e) : e.map((r) => C_(r, t)).filter((r) => r)[0];
}
function ka(e) {
  return Za(e).find((r) => Se(r));
}
function ky(e, t) {
  if (!O(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (Se(i))
      return i;
  }
}
function __(e) {
  const t = e.getParent();
  if (t && O(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (Se(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ye(r); ) {
    const n = ka(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Tl(e) {
  return Za(e).findLast((t) => Se(t));
}
function M_(e) {
  if (!Re(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function E_(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && O(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function A_(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return E_(t, e, r);
  if (C(e)) {
    const n = M_(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function lp(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function P_(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return lp(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return A_(e, t) ? { verseNum: n } : lp(e);
}
function w_(e) {
  return lS(e) || jn(e);
}
function tf(e) {
  if (C(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function xy(e) {
  if (C(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function vl(e, t) {
  return e.getEditorState().read(() => !ee(t));
}
function N_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = rf(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && O(i) && O(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && O(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (Se(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = up(i);
      for (; s && !Ye(s); ) {
        const o = ka(s);
        if (o) {
          n = o;
          break;
        }
        s = up(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = ka(s);
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
function O_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = rf(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && O(i) && (n = ky(i, r.getIndexWithinParent())), !n && i) {
      let o = fp(i);
      for (; o && !Ye(o); ) {
        const a = Tl(o);
        if (a) {
          n = a;
          break;
        }
        o = fp(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ye(s); ) {
      const o = Tl(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function up(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function fp(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function rf(e, t) {
  if (O(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && Se(n))
      return n;
    const i = ky(e, t.anchor.offset);
    if (i)
      return i;
    const s = ka(e);
    if (s)
      return s;
  }
  return nf(e);
}
function nf(e) {
  if (!e || Ye(e))
    return;
  if (Se(e))
    return e;
  let t = Wd(e);
  for (; t; ) {
    if (Ye(t))
      return;
    if (Se(t))
      return t;
    const r = Tl(t);
    if (r)
      return r;
    t = Wd(t);
  }
}
const R_ = ["style"], $_ = ["style", "code"], xa = ["style", "cid"], I_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], q_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], L_ = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], D_ = ["style", "caller", "category", "contents"], U_ = ["tag", "marker", "contents"], K_ = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], po = `
`;
function F_(e, t) {
  const r = ee(e);
  if (!Gt(r))
    return;
  const n = Ty(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Ty(e, t = "delta-doc") {
  if (!e)
    return;
  const r = mg();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let f = i.length - 1; f >= 0; f--)
      if (os(i[f], c)) {
        const d = i[f];
        if (i.splice(f, 1), n += 1, a && d.getKey() === a.getKey())
          return n - 1;
      }
    for (let f = s.length - 1; f >= 0; f--)
      os(s[f].node, c) && s.splice(f, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (pn(l) || Gt(l))
        return n;
      ar(l) && (a = l);
    }
    if (ar(l) && (i.includes(l) || i.push(l)), vy(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += sf(l, t);
  }
  if (a)
    return n;
}
function dp(e, t, r = "delta-doc") {
  if (e.length < 2 || !j_(e[0]) || !B_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => z_(n, r)?.getKey());
}
function z_(e, t = "delta-doc") {
  const r = mg();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (os(i[u], o)) {
        const f = i[u];
        if (i.splice(u, 1), n === e)
          return f;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      os(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (ar(a) && (i.includes(a) || i.push(a)), vy(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = sf(a, t);
    if (pn(a) && l > 0 && e >= n && e < n + l || Gt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function os(e, t) {
  return e ? t ? !is(t.node, e.getKey()) : !0 : !1;
}
function pn(e) {
  return C(e) && !Gt(e);
}
function Gt(e) {
  return Ye(e) || Se(e) || Pe(e) || U(e) || De(e) || Yt(e);
}
function En(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function B_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && K_.includes(t);
}
function j_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function vy(e, t) {
  return U(e) || De(e) ? !0 : t === "apply" && O(e) && Gt(e);
}
function Cy(e) {
  const t = e.getParent();
  return lr(e) && he(t) && t.getFirstChild() === e;
}
function Cl(e) {
  const t = e.getParent();
  return t !== null && lt(t, Le) !== null;
}
function V_(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === ct && t.getChildrenSize() === 1;
}
function W_(e) {
  const t = e.getParent();
  if (!U(t))
    return !1;
  const r = e.getPreviousSibling();
  return N(r) && r === t.getFirstChild() && e.getTextContent() === Ht(t.getCaller());
}
function H_(e) {
  return !_m(e) && sf(e, "delta-doc") === e.getTextContentSize();
}
function sf(e, t) {
  if (Gt(e))
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
    (Du(e) || Cy(e) || ce(e, ge) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ce(e, ge) === "attribute" || Cl(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(xu) || V_(e) || W_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Sl(e, t) {
  const r = { insert: e.__text }, n = ce(e, $n);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Sy(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function pp(e) {
  const t = new Yi();
  return e.isEmpty() || e.read(() => {
    const r = ve();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && st(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = G_();
    for (const s of i)
      t.push(s);
  }), t;
}
function of(e, t) {
  const r = [], n = ms(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...hp(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...hp(c, n.length, n, i, s, o, a));
  return r;
}
function G_() {
  return of();
}
function hp(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return J_(e, a, n), Y_(e, a, i, s, o), X_(e, t, r, i, o, s, a), Ye(e) && a.push(tM(e)), Se(e) && a.push(nM(e)), Pe(e) && a.push(iM(e)), Yt(e) && a.push(sM(e)), Z_(e, a, s), Q_(e, a, s), lM(c, s), a;
}
function J_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ut(n) ? t.push(eM(n)) : he(n) ? t.push(rM(n)) : st(n) && t.push({ insert: po });
  }
  ar(e) && (r.includes(e) || r.push(e));
}
function Y_(e, t, r, n, i) {
  if (!C(e) || Re(e) || Yt(e))
    return;
  const s = e.getParent();
  if (U(s) && s.getFirstChild() === e)
    return;
  const o = Cr(e) !== void 0;
  if (N(e) && (o || Cy(e) || Cl(e) || _m(e)) || ce(e, ge) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (wi(a))
    return;
  const c = e.getPreviousSibling();
  if (U(s) && N(c) && c === s.getFirstChild() && a === Ht(s.getCaller()))
    return;
  const l = D(s) ? s : void 0, u = l?.getFirstChild();
  o && l && N(u) && c === u && a.startsWith(q) && (a = a.slice(1));
  const f = a.startsWith(xu) || ce(e, ge) === "attribute" || Cl(e), d = !!l && a === ct && l.getChildrenSize() === 1, p = ec(e, n), h = p ? r.filter((k) => p.children.includes(k)) : r, g = Sl(e, h);
  if (g.insert = a, p) {
    if (!a || a === q || f)
      return;
    p.contentsOps?.push(g);
  } else
    d || f || t.push(g);
  const m = a !== "" && !d && !(f && l);
  if (r.length > 0 && m)
    for (const k of r)
      i.add(k);
}
function X_(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (os(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = aM(c), u = ec(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Q_(e, t, r) {
  if (!U(e))
    return;
  const n = oM(e), i = ec(e, r), s = {
    node: e,
    children: ms(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Z_(e, t, r) {
  if (!De(e))
    return;
  const n = cM(e), i = ec(e, r), s = {
    node: e,
    children: ms(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Vn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function eM(e) {
  const t = { style: oo, code: e.__code };
  return Vn(t, e), { insert: po, attributes: { book: t } };
}
function tM(e) {
  const t = { style: da, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Vn(t, e), { insert: { chapter: t } };
}
function rM(e) {
  const t = { style: e.__marker };
  return Vn(t, e), { insert: po, attributes: { para: t } };
}
function nM(e) {
  const t = { style: fa, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Vn(t, e), { insert: { verse: t } };
}
function iM(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Vn(t, e), { insert: { milestone: t } };
}
function sM(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function oM(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Vn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ce(e, $n);
  return n && (r.attributes = { segment: n }), r;
}
function aM(e) {
  const t = { insert: "" }, r = Sy([e]);
  return r && (t.attributes = { char: r }), t;
}
function cM(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Vn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function ec(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function lM(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    os(t[r].node, e) && t.splice(r, 1);
}
function Sy(e) {
  if (e.length === 0)
    return;
  const t = e.map(uM);
  return t.length === 1 ? t[0] : t;
}
function uM(e) {
  const t = { style: e.__marker }, r = ce(e, mi);
  return r && (t.cid = r), Vn(t, e), t;
}
const _y = 1;
class sr extends ko {
  __caller;
  __previewText;
  __onClick;
  constructor(t = eo, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return zn;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new sr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => dM(t) ? {
        conversion: fM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return af().updateFromJSON(t);
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
    return r && Si(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => pM(t, n), (l) => hM(t, n, s, l), () => gM(t, n), () => mM(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return S("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === eo && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Sg && i ? (
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
      version: _y
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function fM(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: af(t, r) };
}
function af(e, t, r) {
  return tt(new sr(e, t, r));
}
function dM(e) {
  return e ? e.classList.contains(sr.getType()) : !1;
}
function Ct(e) {
  return e instanceof sr;
}
function pM(e, t) {
  return e.getEditorState().read(() => {
    const r = ee(t);
    if (!U(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function hM(e, t, r, n) {
  e.update(() => {
    const i = ee(t);
    if (!U(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ee(r);
    if (!Ct(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function gM(e, t) {
  return e.getEditorState().read(() => {
    const r = ee(t);
    if (!U(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return of(r);
  });
}
function mM(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of ms())
      if (U(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const yM = [
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
], bM = ["†"], cf = "formatted", My = "unformatted", Ey = "paragraph-structure", lf = "standard", Ay = "block-verse", kM = {
  [cf]: "Formatted",
  [My]: "Unformatted",
  [Ey]: "Paragraph Structure",
  [lf]: "Standard",
  [Ay]: "Block Verse"
};
function Ts(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let uf, ff;
function xM(e) {
  const t = df(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  uf = e, ff = t;
}
xM(cf);
const $R = () => uf, tc = () => ff;
function df(e) {
  let t;
  switch (e ?? uf) {
    case cf:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case My:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Ey:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case lf:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Ay:
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
function IR(e) {
  if (!e)
    return;
  const t = gp(e);
  return Object.keys(kM).find((r) => Ur(gp(df(r)), t));
}
const TM = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function gp(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...TM, ...t };
}
function St(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function vM(e) {
  if (e)
    return ho(e) ? $t : e.markerMode === "editable" ? gt : $t;
}
function ho(e) {
  return e?.verseLayout === "block";
}
function CM(e) {
  const t = [], r = e ?? ff;
  return r && (t.push(`${av}${r.markerMode}`), r.hasSpacing && t.push(sv), r.isFormattedFont && t.push(ov)), t;
}
const SM = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Ta(e) {
  return SM.exec(e)?.[1] ?? e;
}
function js(e, t) {
  const r = e.jsonPath.slice(Ta(e.jsonPath).length);
  return { ...e, jsonPath: `${mt(t)}${r}` };
}
function Py(e) {
  const t = [];
  let r = 0;
  for (const c of ve().getChildren())
    if (!Sr(c))
      if (xi(c)) {
        const l = r;
        c.getChildren().filter((u) => !Sr(u)).forEach((u, f) => t.push({ node: u, blockPrefix: [l, f], blockBase: 0 })), r += 1;
      } else st(c) ? (t.push({ node: c, blockPrefix: [], blockBase: r }), r += Rt(c, e).length) : (t.push({ node: c, blockPrefix: [r], blockBase: 0 }), r += 1);
  const n = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = O(c.node) ? Rt(c.node, e).length : 0, u = ce(c.node, hy), f = st(c.node), d = u === void 0 || u !== a;
    d && (n.length > 0 && (n[n.length - 1].isSourceEnd = !0), s = i, o = 0, f || (i += 1)), n.push({
      ...c,
      count: l,
      usjPrefix: f ? [] : [s],
      usjBase: f ? s + o : o,
      isSourceStart: d,
      isSourceEnd: !1
    }), f && (i += l), o += l, a = u;
  }
  return n.length > 0 && (n[n.length - 1].isSourceEnd = !0), n;
}
function wy(e, t) {
  return e.length >= t.length && t.every((r, n) => e[n] === r);
}
function Ny(e, t, r, n = !0) {
  const i = e.jsonPath.slice(Ta(e.jsonPath).length);
  let s = ur(Ta(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!wy(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return n && i === "" && O(o.node) && (!o.isSourceStart || st(o.node)) ? Ny(r(o.node), t, r, !1) : js(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return js(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function _M(e, t, r) {
  for (const n of t) {
    if (n.usjPrefix.length === 0) {
      if (e < n.usjBase || e >= n.usjBase + n.count)
        continue;
      const o = e - n.usjBase + n.blockBase;
      return n.blockPrefix.length === 0 ? { jsonPath: "$", offset: o } : { jsonPath: mt(n.blockPrefix), offset: o };
    }
    if (!n.isSourceStart || n.usjPrefix[0] !== e)
      continue;
    const [i, s] = n.blockPrefix;
    return s === void 0 ? { jsonPath: "$", offset: i } : { jsonPath: mt([i]), offset: s };
  }
  return { jsonPath: "$", offset: Rt(ve(), r).length };
}
function mp(e, t, r) {
  const n = ur(Ta(e.jsonPath));
  if (n.length === 0)
    return on(e) ? _M(e.offset, t, r) : e;
  for (const i of t) {
    if (!wy(n, i.usjPrefix))
      continue;
    const s = n.slice(i.usjPrefix.length);
    if (s.length === 0) {
      if (i.usjPrefix.length === 0)
        continue;
      if (on(e)) {
        const o = e.offset - i.usjBase;
        if (o < 0 || !i.isSourceEnd && o >= i.count)
          continue;
        return {
          ...js(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return js(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return js(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function rc(e, t, r) {
  let { start: n } = e, i = e.end ?? n;
  if (zy()) {
    const g = St(t), m = Py(g), k = mp(n, m, g), T = i === n ? k : mp(i, m, g);
    if (!k || !T)
      return;
    n = k, i = T;
  }
  const s = !!r?.forAnnotation, o = kp(n, t, s), a = i === n ? o : kp(i, t, s), [c, l] = o.point, [u, f] = a.point;
  if (!c || !u || l === void 0 || f === void 0)
    return;
  let d = xp(c, l), p = xp(u, f);
  i !== n && ia(i) && i.closingMarkerOffset === 0 && (p = VM(p[0], p[1], St(t))), r?.forAnnotation && i !== n && ([d, p] = MM({ edge: d, inside: o.insideDecorator }, { edge: p, inside: a.insideDecorator }));
  const h = To();
  return h.anchor = Qi(d[0].getKey(), d[1], Pl(d[0])), h.focus = Qi(p[0].getKey(), p[1], Pl(p[0])), h;
}
function MM(e, t) {
  const { inside: r } = e, { inside: n } = t;
  if (!r && !n)
    return [e.edge, t.edge];
  const i = !!r && !!n && r.decorator.is(n.decorator), s = r && n && i ? n.before < r.before : EM(t, e), [o, a] = s ? [t, e] : [e, t], c = o.inside ? _l(o.inside, o.inside.before >= o.inside.total, o.edge) : o.edge;
  if (i && r.before === n.before)
    return [c, c];
  const l = a.inside ? _l(a.inside, a.inside.before > 0, a.edge) : a.edge;
  return s ? [l, c] : [c, l];
}
function _l(e, t, r) {
  const [n, i] = si(e.decorator, t);
  return n && i !== void 0 ? [n, i] : r;
}
function EM(e, t) {
  const r = ({ edge: s, inside: o }) => {
    const [a, c] = o ? _l(o, !1, s) : s;
    return Qi(a.getKey(), c, Pl(a));
  }, n = r(e), i = r(t);
  return n.isBefore(i) ? !0 : i.isBefore(n) ? !1 : !e.inside && !!t.inside;
}
function nc(e) {
  const t = R();
  if (!t || !P(t))
    return;
  const r = zy() ? Py(St(e)) : void 0, n = (u, f) => {
    const d = wt(u, f, e);
    return r ? Ny(d, r, (p) => wt(p, 0, e)) : d;
  }, i = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), s = t.isBackward() ? t.focus.offset : t.anchor.offset, o = n(i, s);
  if (!o)
    return;
  if (t.isCollapsed())
    return { start: o };
  const a = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), c = t.isBackward() ? t.anchor.offset : t.focus.offset, l = n(a, c);
  if (l)
    return { start: o, end: l };
}
const Pn = {
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
}, AM = new Map(Object.values(Pn).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), yp = {
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
}, PM = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(yp).filter((e) => yp[e])
), wM = /([^\s="|]+)="([^"]*)"/g, NM = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Oy(e, t) {
  return `${e}['${t}']`;
}
function ui(e) {
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
function pf(e) {
  const t = qn(e);
  if (!t)
    return;
  const r = fn(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function ic(e, t, r, n = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(wM)) {
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
function OM(e, t) {
  const r = NM.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = AM.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function hf(e) {
  if (cr(e)) {
    const t = Fy(e), r = e.getTextContent();
    if (Pe(t) && (r === "\\*" || r.startsWith($e(t.getMarker()))))
      return t;
  }
  return Ar(e) ?? e;
}
function RM(e) {
  const t = e.getTextContentSize(), r = pf(e);
  if (r && r.role !== "value") {
    const i = Pn[r.kind];
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
        spans: r.role === "closer" ? ts() : ui(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: hf(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      ui(e.getNested() ? 2 : 1)
    ) : ts()
  };
}
function $M(e) {
  const t = e.getTextContent(), r = t.length, n = pf(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = hf(e);
  if (ut(i)) {
    const s = $e(i.getMarker()).length;
    if (t.startsWith($e(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...ui(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (De(i)) {
    const s = Ga(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: ts() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: ui(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? ts() : ui(t.startsWith("\\+") ? 2 : 1)
  };
}
function IM(e) {
  const t = pf(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = Pn[n];
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
        ...ic(i, 1, D(r) ? ys(r.getMarker()) : void 0)
      ]
    };
  if (n === "milestone" && Pe(r))
    return { owner: r, length: s, spans: Ry(r.getMarker(), i) };
}
function Ry(e, t) {
  return [
    { start: 0, base: e.length, bytes: { kind: "property", property: "marker" } },
    ...ic(t, 2, vo(e))
  ];
}
function qM(e) {
  const t = e.getTextContent(), r = t.length, n = e.getParent();
  if (!De(n)) {
    const s = Fy(e);
    return Pe(s) ? { owner: s, length: r, spans: Ry(s.getMarker(), t) } : void 0;
  }
  const i = OM(t, (n.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: n, length: r, spans: i };
  if (t.startsWith("|"))
    return {
      owner: n,
      length: r,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...ic(t, 1, void 0, (s) => NC(n.getTag(), s))
      ]
    };
}
function bp(e, t) {
  const r = $e(e);
  if (t.startsWith(r))
    return [
      ...ui(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function _t(e) {
  if (N(e))
    return RM(e);
  if (cr(e))
    return $M(e);
  if (vt(e) && e.getTextType() === "attribute")
    return qM(e);
  if (e.getType() === zn) {
    const n = e.getParent();
    return U(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Re(e)) {
    const n = bp(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!C(e))
    return;
  if (Yt(e))
    return { owner: e, length: e.getTextContentSize(), spans: ui(1) };
  if (ce(e, ge) === "attribute")
    return IM(e);
  const t = e.getParent();
  if (Ee(t) && Mi(t)?.is(e)) {
    const n = bp(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = Ar(e);
  if (U(r) && vr(r)?.is(e))
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
function Wn(e) {
  return cr(e) || vt(e) && e.getTextType() === "attribute" || e.getType() === zn;
}
function Mo(e) {
  const t = [];
  if ((Re(e) || Yt(e)) && t.push(e), O(e)) {
    const r = Ee(e) ? Mi(e) : void 0, n = U(e) ? vr(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (N(i) || cr(i) || vt(i) && i.getTextType() === "attribute" || i.getType() === zn || r?.is(i)) && t.push(i);
  }
  if (Pe(e))
    for (let r = e.getNextSibling(); r && Wn(r); r = r.getNextSibling())
      (!cr(r) || hf(r).is(e)) && t.push(r);
  for (const r of PM) {
    const n = fn(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function Ln(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function Ml(e, t, r) {
  const n = _t(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = mt(Vr(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Oy(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return LM(e, r);
  }
}
function El(e, t) {
  return C(e) && !_t(e) && !lo(e, 0, t);
}
function LM(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && de(o); )
    r = o, o = r.getParent();
  let n = r.getPreviousSibling();
  for (; n && El(n, t); )
    n = n.getPreviousSibling();
  if (!n)
    return;
  const i = O(n) ? n.getLastDescendant() : n;
  if (i && (C(i) || Wn(i)))
    return El(i, t) ? void 0 : kr(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return kr(s, n.getIndexWithinParent() + 1, t);
}
function Ki(e, t, r) {
  for (const n of Mo(e)) {
    const i = _t(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!Ln(o.bytes, t))
          continue;
        const a = gf(i, s);
        if (!(r < o.base || r > a))
          return [n, o.start + (r - o.base)];
      }
  }
}
function gf(e, t) {
  const r = e.spans[t], n = e.spans[t + 1];
  return n ? r.base + (n.start - r.start) - 1 : r.base + (e.length - r.start);
}
function jr(e, t) {
  const r = St(t);
  if (on(e)) {
    const n = ur(e.jsonPath);
    let i = ve();
    for (let s = 0; s < n.length; s++) {
      if (!i || !O(i))
        return [void 0, void 0];
      const o = Rt(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : SS(o, e.offset) ?? Tp(e, r) ?? [void 0, void 0];
      i = o.node;
    }
    return i && O(i) ? jr(mf(i, n, e.offset, r), t) : [void 0, void 0];
  }
  if (Xs(e) || ia(e) || Qs(e)) {
    const n = Tp(e, r);
    if (n)
      return n;
  }
  if (Zs(e) || Ua(e)) {
    const n = ii(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = Zs(e) ? Ki(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : Ki(n, { kind: "attributeMarker", keyName: i }, 0);
    if (s)
      return s;
    const o = ZM(n, i);
    return o || (Pe(n) ? si(n, !1) : $c(n));
  }
  if (Qs(e)) {
    const n = ii(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = Ki(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || $c(n);
  }
  if (uu(e)) {
    const n = ii(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = Ki(n, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = O(n) ? n.getFirstChild() : null;
    return s && C(s) ? [s, 0] : si(n, !1);
  }
  if (ia(e)) {
    const n = ii(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = Ki(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = yf(n);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return si(n, !0);
    if (!O(n))
      return si(n, !1);
    const o = n.getLastChild();
    return o && C(o) ? [o, o.getTextContent().length] : [n, n.getChildrenSize()];
  }
  if (Xs(e)) {
    const n = $y(e.jsonPath), i = ii(e.jsonPath, r);
    if (!i || n === void 0)
      return [void 0, void 0];
    const s = { kind: "property", property: n }, o = Ki(i, s, e.propertyOffset);
    if (o)
      return o;
    const a = eE(i, s, e.propertyOffset);
    if (a)
      return a;
    if (O(i)) {
      if (!DM.has(n))
        return $c(i);
      const l = i.getFirstChild();
      return l && C(l) ? [l, 0] : [i, 0];
    }
    const c = tE(i, n);
    return si(i, c !== void 0 && e.propertyOffset >= c.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${dT(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function $y(e) {
  const t = /\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/.exec(e);
  return t?.[1] ?? t?.[2] ?? t?.[3];
}
const DM = /* @__PURE__ */ new Set([
  "marker",
  "code",
  "caller",
  "category"
]);
function Al(e, t) {
  const r = e.length - e.trimStart().length, n = Math.max(r, e.trimEnd().length);
  return { before: Math.min(Math.max(t, r), n) - r, total: n - r };
}
function kp(e, t, r) {
  const n = jr(e, t), [i, s] = n;
  if (r && !on(e)) {
    const c = ii(e.jsonPath, St(t)), l = c && zM(c, e);
    if (l)
      return l.before > 0 ? { point: n, insideDecorator: l } : { point: n };
  }
  if (i && s !== void 0 && s > 0 && Wn(i)) {
    const c = ey(i);
    return {
      point: n,
      insideDecorator: { decorator: i, ...Al(c, s) }
    };
  }
  if (on(e))
    return { point: n };
  const o = ii(e.jsonPath, St(t));
  if (!jn(o) && !Pi(o))
    return { point: n };
  const a = BM(o, e);
  return a && a.before > 0 ? { point: n, insideDecorator: a } : { point: n };
}
function UM(e) {
  if (D(e))
    return KM(e);
  if (!U(e))
    return;
  const t = e.getCategory(), r = e.getChildren().find((o) => o.getType() === zn), n = Pn.cat;
  if (!r || !t || !n || FM(e, n.keyName))
    return;
  const { markerName: i, keyName: s } = n;
  return {
    decorator: r,
    pieces: [
      {
        text: e.getCaller(),
        spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
      },
      {
        text: $e(i),
        spans: [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      },
      {
        // The separator before the value is the space after the attribute marker, which counts
        // into that marker name's offset space — the editable run's value spelling.
        text: ` ${t}`,
        spans: [
          { start: 0, base: i.length, bytes: { kind: "attributeKey", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "property", property: s } }
        ]
      },
      { text: Je(i), spans: ts(s) }
    ]
  };
}
function KM(e) {
  const t = e.getFirstChild();
  if (!t || !cr(t))
    return;
  const r = _t(t);
  if (r?.spans[0]?.bytes.kind !== "marker" || !r.owner.is(e) || !e.getChildren().every((c) => Wn(c) || C(c) && Sr(c)))
    return;
  const i = ys(e.getMarker()), s = br(e.getUnknownAttributes() ?? {}, i);
  if (!s)
    return;
  const o = ic(s, 1, i);
  if (!Mo(e).some((c) => _t(c)?.spans.some((l) => o.some((u) => Ln(l.bytes, u.bytes)))))
    return {
      decorator: t,
      pieces: [
        { text: t.getTextContent(), spans: r.spans },
        {
          text: s,
          spans: [{ start: 0, base: 0, bytes: { kind: "precedingText" } }, ...o]
        }
      ]
    };
}
function FM(e, t) {
  return Mo(e).some((r) => {
    const n = _t(r);
    return !!n?.owner.is(e) && n.spans.some((i) => Ln(i.bytes, { kind: "attributeKey", keyName: t }));
  });
}
function zM(e, t) {
  const r = UM(e), n = r && Iy(t);
  if (!r || !n)
    return;
  let i = 0, s;
  for (const { text: o, spans: a } of r.pieces) {
    const c = { spans: a, length: o.length };
    if (s === void 0) {
      const l = a.findIndex((u, f) => Ln(u.bytes, n.bytes) && n.offset >= u.base && n.offset <= gf(c, f));
      if (l >= 0) {
        const u = a[l].start + (n.offset - a[l].base);
        s = i + Al(o, u).before;
      }
    }
    i += Al(o, 0).total;
  }
  return s === void 0 ? void 0 : { decorator: r.decorator, before: s, total: i };
}
function BM(e, t) {
  const r = Iy(t);
  if (!r)
    return;
  const n = jM(e), i = n.findIndex((a) => Ln(a.bytes, r.bytes));
  if (i < 0)
    return;
  const s = n.reduce((a, c) => a + c.length, 0), o = n.slice(0, i).reduce((a, c) => a + c.length, 0) + Math.min(Math.max(r.offset, 0), n[i].length);
  return { decorator: e, before: o, total: s };
}
function Iy(e) {
  if (Zs(e))
    return {
      bytes: { kind: "attributeKey", keyName: e.keyName },
      offset: e.keyOffset
    };
  if (Ua(e))
    return { bytes: { kind: "attributeMarker", keyName: e.keyName }, offset: 0 };
  if (Qs(e))
    return {
      bytes: { kind: "closingAttributeMarker", keyName: e.keyName },
      offset: e.keyClosingMarkerOffset
    };
  if (uu(e))
    return { bytes: { kind: "marker" }, offset: 0 };
  if (Xs(e)) {
    const t = $y(e.jsonPath);
    return t === void 0 ? void 0 : { bytes: { kind: "property", property: t }, offset: e.propertyOffset };
  }
}
function jM(e) {
  const t = [
    { bytes: { kind: "marker" }, length: 1 },
    // The space after the marker name is inside the glyph Standard view spells, so it counts.
    { bytes: { kind: "property", property: "marker" }, length: e.getMarker().length + 1 },
    { bytes: { kind: "property", property: "number" }, length: e.getNumber().length }
  ], r = Pi(e), n = r ? [Pn.ca, Pn.cp] : [Pn.va, Pn.vp];
  for (const i of n) {
    if (!i)
      continue;
    const { markerName: s, keyName: o } = i, a = o === "altnumber" ? e.getAltnumber() : e.getPubnumber();
    a !== void 0 && (t.push({ bytes: { kind: "attributeMarker", keyName: o }, length: 1 }, { bytes: { kind: "attributeKey", keyName: o }, length: s.length }, { bytes: { kind: "property", property: o }, length: a.length }), r && o === "pubnumber" || t.push({
      bytes: { kind: "closingAttributeMarker", keyName: o },
      length: Je(s).length
    }));
  }
  return t;
}
function xp(e, t) {
  if (!Wn(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !O(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && qy.test(e.getTextContent());
  return [r, s ? n + 1 : n];
}
const qy = /[ \u00A0]$/;
function VM(e, t, r) {
  let n;
  if (O(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; C(n) && !_t(n) && !lo(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = n?.getParent();
  if (n && s && Wn(n))
    return [s, n.getIndexWithinParent() + 1];
  const o = O(n) ? n.getLastDescendant() : n;
  return C(o) ? [o, o.getTextContentSize()] : [e, t];
}
function Pl(e) {
  return O(e) ? "element" : "text";
}
function ii(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = ur(n);
  let s = ve();
  for (const o of i) {
    if (!s || !O(s))
      return;
    const a = Rt(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function wt(e, t, r) {
  return kr(e, t, St(r));
}
function kr(e, t, r) {
  if (C(e) && t > 0 && t === e.getTextContentSize() && WM(e)) {
    const i = HM(e, r);
    if (i)
      return i;
  }
  const n = Ml(e, t, r);
  if (n)
    return n;
  if (de(e)) {
    const i = e.getChildrenSize(), s = e.getChildAtIndex(Math.min(t, i - 1));
    if (C(s)) {
      const a = t >= i ? s.getTextContentSize() : 0;
      return kr(s, a, r);
    }
    if (s && t > 0 && t < i) {
      const a = Dy(e, t, r);
      if (a)
        return a;
    }
    const o = e.getParent();
    if (o) {
      const a = e.getIndexWithinParent(), c = t > 0 ? a + 1 : a;
      return kr(o, c, r);
    }
  }
  if (O(e)) {
    const i = e.getChildAtIndex(t), s = i && Ly(i);
    if (s) {
      const c = Ml(s, 0, r);
      if (c)
        return c;
    }
    if (i && Wn(i))
      return {
        jsonPath: mt(Vr(e))
      };
    const o = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!i && o && Ky(o, e))
      return Xo(e, !0, r);
    if (Ye(e) || Sr(e))
      return Xo(e, t > 0, r);
    const a = st(e) && Br(e.getParent()) ? e.getParentOrThrow() : e;
    return Uy(a, Xi(e, t, r), r);
  }
  if (C(e)) {
    if (t < Ha(e)) {
      const a = e.getPreviousSibling();
      if (N(a))
        return kr(a, a.getTextContentSize(), r);
    }
    const i = lo(e, t, r);
    if (i)
      return {
        jsonPath: mt([
          ...Vr(i.parent),
          i.index
        ]),
        offset: i.offset
      };
    const s = t > 0;
    let o = s ? e.getNextSibling() : e.getPreviousSibling();
    for (; de(o); )
      o = s ? o.getFirstChild() : o.getLastChild();
    if (C(o) && (_t(o) || lo(o, 0, r)))
      return kr(o, s ? 0 : o.getTextContentSize(), r);
  }
  return Xo(e, t > 0, r);
}
function WM(e) {
  if (!qy.test(e.getTextContent()))
    return !1;
  if (Re(e))
    return !0;
  const t = Ar(e);
  return U(t) && !!vr(t)?.is(e);
}
function HM(e, t) {
  let r = e;
  for (let s = r.getParent(); !r.getNextSibling() && de(s); s = r.getParent())
    r = s;
  const n = r.getNextSibling();
  if (!n) {
    const s = r.getParent();
    return !s || GM(r) ? void 0 : kr(s, s.getChildrenSize(), t);
  }
  const i = O(n) ? n.getFirstDescendant() ?? n : n;
  if (!(El(i, t) || _t(i)?.spans[0]?.bytes.kind === "precedingText"))
    return kr(i, 0, t);
}
function GM(e) {
  for (let t = e; t; t = t.getParent())
    if (t.getNextSibling())
      return !1;
  return !0;
}
function Ly(e) {
  if (_t(e))
    return e;
  if (!Le(e))
    return;
  const t = e.getFirstDescendant();
  return t && _t(t) ? t : void 0;
}
function Dy(e, t, r) {
  for (let n = t; n < e.getChildrenSize(); n++) {
    const i = e.getChildAtIndex(n);
    if (!i)
      return;
    const s = Ly(i);
    if (s)
      return Ml(s, 0, r);
    if (C(i) && lo(i, 0, r))
      return kr(i, 0, r);
    if (C(i) || Sr(i))
      continue;
    const o = _S(i, r);
    if (o)
      return Uy(o.parent, o.point, r);
  }
}
function Uy(e, t, r) {
  const n = Vr(e);
  return t.type === "text" ? {
    jsonPath: mt([...n, t.index]),
    offset: t.offset
  } : mf(e, n, t.index, r);
}
function Ky(e, t) {
  const r = _t(e);
  return !!r && r.owner.is(t) && r.spans[0]?.bytes.kind === "closingMarker";
}
function Xo(e, t, r) {
  const n = e.getParent();
  if (!n)
    return { jsonPath: mt(Vr(e)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (de(n)) {
    if (i > 0 && i < n.getChildrenSize()) {
      const s = Dy(n, i, r);
      if (s)
        return s;
    }
    return Xo(n, i > 0, r);
  }
  return kr(n, i, r);
}
function mf(e, t, r, n) {
  const i = Rt(e, n), s = i[r];
  if (!s)
    return JM(e, t, i, n);
  const o = mt([...t, r]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function JM(e, t, r, n) {
  if (Br(e))
    return va(e, t, 1, n);
  if (yf(e) !== void 0) {
    const o = r.length - 1, a = r[o];
    return a?.type === "text" ? {
      jsonPath: mt([...t, o]),
      offset: a.length
    } : {
      jsonPath: mt(t),
      closingMarkerOffset: 0
    };
  }
  const i = Ar(e), s = t[t.length - 1];
  return YM(e) || !i || s === void 0 ? va(e, t, 0, n) : mf(i, t.slice(0, -1), s + 1, n);
}
function va(e, t, r, n) {
  const i = mt(t), s = yf(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + r
    };
  if (O(e)) {
    const l = Rt(e, n), u = l.length - 1, f = l[u], d = [...t, u];
    if (f?.type === "text")
      return { jsonPath: mt(d), offset: f.length + r };
    if (f)
      return va(f.node, d, r, n);
  }
  const o = (l, u) => ({
    jsonPath: Oy(i, l),
    propertyOffset: u.length + r
  }), a = (l, u) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: Je(u).length + r
  });
  if (Se(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (Ye(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (ut(e))
    return o("code", e.getCode());
  if (U(e))
    return o("caller", e.getCaller());
  const c = De(e) ? e.getMarker() : XM(e);
  return c ? o("marker", c) : { jsonPath: i };
}
function yf(e) {
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : Je(e.getMarker(), Wa(e)).length;
  if (U(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : Je(e.getMarker()).length;
  if (Pe(e))
    return Je("").length;
  if (De(e)) {
    const { closing: t } = Ga(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function YM(e) {
  const t = Ar(e);
  return he(e) || st(e) || ut(e) || oy(e) || De(e) && e.getTag() === "table:row" || Br(t) || xi(t);
}
function XM(e) {
  if (he(e) || D(e) || Pe(e) || oy(e) || jS(e))
    return e.getMarker();
}
function $c(e) {
  if (O(e)) {
    const r = e.getLastChild();
    let n = r;
    for (; n && QM(n, e); )
      n = n.getPreviousSibling();
    if (n !== r)
      return C(n) && !_t(n) ? [
        n,
        Sr(n) ? 0 : n.getTextContentSize()
      ] : [e, n ? n.getIndexWithinParent() + 1 : 0];
    if (r && C(r))
      return [
        r,
        !_t(r) && Sr(r) ? 0 : r.getTextContentSize()
      ];
  }
  const t = e.getNextSibling();
  return t && O(t) ? [t, 0] : si(e, !0);
}
function QM(e, t) {
  return Bu(e) || Le(e) || vt(e) && e.getTextType() === "attribute" || Ky(e, t);
}
function ZM(e, t) {
  for (const r of Mo(e)) {
    const n = _t(r);
    if (!n?.owner.is(e))
      continue;
    const { spans: i } = n;
    if (i.some((o) => Ln(o.bytes, { kind: "attributeKey", keyName: t })))
      return;
    const s = i.find((o) => Ln(o.bytes, { kind: "property", property: t }));
    if (s && r.getTextContent()[s.start - 1] === "|")
      return [r, s.start];
  }
}
function eE(e, t, r) {
  for (const n of Mo(e)) {
    if (!Wn(n))
      continue;
    const i = _t(n);
    if (!i?.owner.is(e))
      continue;
    const s = i.spans.findIndex((o) => Ln(o.bytes, t));
    if (!(s < 0))
      return r > gf(i, s) ? [n, i.spans[s + 1]?.start ?? i.length] : void 0;
  }
}
function si(e, t) {
  const r = e.getParent();
  return r ? [r, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function tE(e, t) {
  if (Se(e) || Ye(e)) {
    if (t === "number")
      return e.getNumber();
    if (t === "altnumber")
      return e.getAltnumber();
    if (t === "pubnumber")
      return e.getPubnumber();
    if (t === "marker")
      return e.getMarker();
  }
  if (Pe(e) && t === "marker")
    return e.getMarker();
}
function Tp(e, t) {
  const r = ve(), n = va(r, [], 1, t);
  return vp(n) === vp(e) ? [r, r.getChildrenSize()] : void 0;
}
function vp(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [r]) => t.localeCompare(r)));
}
function Fy(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Sr(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Vr(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Ar(r);
    if (!n)
      break;
    const i = CS(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function zy() {
  for (let e = ve().getFirstChild(); e; e = e.getNextSibling())
    if (xi(e))
      return !0;
  return !1;
}
function By(e, t, r, n, i, s, o) {
  if (!ze.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? rc(r, i) : R();
  if (!P(a))
    return;
  const c = iE(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Us(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = jy(e, l, c, i, s, void 0, void 0);
  return nE(u, a, i), u;
}
function bf(e) {
  return e !== "expanded";
}
function rE(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!C(r) || !D(r.getParent()))
    return;
  if (N(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return N(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function nE(e, t, r) {
  const n = bf(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || pS(t), py(t), cn(t);
  const i = rE(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function Fi(e, t, r) {
  const n = ln(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(Tt(e)) : r?.markerMode === "visible" && n.append(un("marker", $e(e)));
  const s = t === "" ? ct : i ? q + t : t;
  return n.append(Oe(s)), n;
}
function iE(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", f = i.verseRangeSeparator ?? "-", d = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => f)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (d !== void 0 && o.push(Fi("fr", d, n)), !e.isCollapsed()) {
        const p = _p(e);
        p.length > 0 && o.push(Fi("fq", p, n));
      }
      o.push(Fi("ft", "", n));
      break;
    case "x":
    case "ex":
      if (d !== void 0 && o.push(Fi("xo", d, n)), !e.isCollapsed()) {
        const p = _p(e);
        p.length > 0 && o.push(Fi("xq", p, n));
      }
      o.push(Fi("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function jy(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : bf(n?.noteMode), l = _u(e, t, c);
  s && xt(l, $n, () => s);
  const u = n?.isNoteShellEditable === !1;
  let f, d;
  n?.markerMode === "editable" ? (f = Tt(e), u && f.setMode("token"), a || (d = Tt(e, "closing"))) : n?.markerMode === "visible" && (f = un("marker", $e(e) + " "), a || (d = un("marker", Je(e))));
  let p;
  if (f && l.append(f), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = Oe(Ht(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => bi(), g = r.flatMap(sE(h));
    if (t === "")
      l.append(...g);
    else {
      const m = Uu(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = af(l.__caller, m, k), l.append(p, h(), ...g);
    }
  }
  return d && l.append(d), l;
}
function Cp(e) {
  if (typeof e == "string") {
    const i = ee(e);
    return U(i) ? i : void 0;
  }
  const t = ms();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => U(i.node))[e]?.node;
  if (U(n))
    return n;
}
function Sp(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (jn(n) || !n) {
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
function sE(e) {
  return (t) => vt(t) ? [t] : [t, e()];
}
function oE(e) {
  const t = e.getParent();
  return t !== null && lt(t, U) !== null;
}
function _p(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = hu(e);
  let a = "";
  for (const c of t)
    if (!(U(c) || Ct(c) || oE(c)) && !N(c) && !Yt(c) && ce(c, ge) !== "attribute") {
      if (Se(c)) {
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
const sc = [
  sr,
  $t,
  ...p_
], aE = [
  xs,
  ...sc
], cE = Ci((e, t) => {
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
function lE() {
  const [e, t] = Te(void 0), [r, n] = Te(), i = se(null), s = xe((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = jT(l, c, () => {
      VT(l, c, {
        placement: "bottom-start",
        middleware: [WT(), HT()]
      }).then((u) => {
        n(u.placement), t((f) => f?.x === u.x && f?.y === u.y ? f : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = xe(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return V(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function uE({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = lE();
  return V(() => {
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
const fE = oT(cE);
function Vy({ isOpen: e = !1, children: t }) {
  const r = se(null), { coords: n, placement: i } = uE({ isOpen: e, floatingBoxRef: r }), s = je(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return ai(
    S(fE, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Wy = sg(void 0);
function kf() {
  const e = og(Wy);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function dE(e, t) {
  const [r, n] = Te(0), [i, s] = Te(-1), o = je(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = xe(() => {
    n((f) => {
      const d = o.length;
      return d ? (f - 1 + d) % d : 0;
    });
  }, [o.length]), l = xe(() => {
    n((f) => {
      const d = o.length;
      return d ? (f + 1) % d : 0;
    });
  }, [o.length]), u = xe(() => {
    const f = o.length;
    if (r >= 0 && r < f) {
      const d = o[r];
      t?.(d), s(r);
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
function pE({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = dE(t, r);
  return S(Wy.Provider, { value: i, children: S("div", { ...n, children: e }) });
}
const Hy = Ci(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = kf(), u = xe((d) => {
    l(), c(-1), n?.(d);
  }, [n, l, c]), f = xe((d) => {
    a(e), r?.(d);
  }, [e, a, r]);
  return S("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: f, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function hE({ children: e, autoIndex: t = !0, ...r }) {
  const n = se(null), { state: { activeIndex: i, menuItems: s } } = kf(), o = je(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = je(() => {
    const c = o(s);
    return t ? aT.map(c, (l, u) => cT(l) && l.type === Hy && l.props.index === void 0 ? lT(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return V(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), f = l.getBoundingClientRect();
        f.bottom > u.bottom ? c.scrollTop += f.bottom - u.bottom : f.top < u.top && (c.scrollTop -= u.top - f.top);
      }
    }
  }, [i]), S("div", { ref: n, role: "menu", ...r, children: a });
}
const gE = (e, t, r) => Qo(e, r).toLowerCase().includes(t.toLowerCase()), Mp = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Qo = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function mE(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, f;
  i ? (f = i, u = r.length > 0 ? Mp(r[0]) : "") : (u = n || (r.length > 0 ? Mp(r[0]) : ""), f = (h, g) => gE(h, g, u));
  const d = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return f(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const m = (M) => (p.has(M) || p.set(M, Qo(M, d).toLowerCase()), p.get(M) ?? ""), k = a ? Qo(h, d) : m(h), T = a ? Qo(g, d) : m(g);
    for (const M of c)
      switch (M) {
        case "exact":
          if (k === l && T !== l)
            return -1;
          if (T === l && k !== l)
            return 1;
          break;
        case "startsWith":
          if (k.startsWith(l) && !T.startsWith(l))
            return -1;
          if (T.startsWith(l) && !k.startsWith(l))
            return 1;
          break;
        case "contains": {
          const I = k.indexOf(l), A = T.indexOf(l);
          if (I !== -1 && A === -1)
            return -1;
          if (A !== -1 && I === -1)
            return 1;
          if (I !== -1 && A !== -1)
            return I - A;
          break;
        }
      }
    return k.localeCompare(T);
  });
}
const Ic = {
  Root: pE,
  Options: hE,
  Option: Hy
};
function yE(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return je(() => mE({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function bE() {
  const { moveUp: e, moveDown: t, select: r } = kf();
  return je(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const kE = () => {
  const e = bE(), [t] = ye();
  V(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(mn, r, Ve);
  }, [t, e]);
};
function xE() {
  return kE(), null;
}
const TE = ["Shift", "Control", "Alt", "Meta"];
function Gy(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ye(), u = s !== void 0, [f, d] = Te(""), p = u ? s ?? "" : f, h = yE({ query: p, items: t, filterBy: "name" }), g = (m) => {
    n?.(), r ? r(m) : m.action(l);
  };
  return V(() => {
    a?.(p, h);
  }, [a, p, h]), V(() => l.registerCommand(mn, (m) => {
    if (u || c?.includes(m.key) || TE.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return n?.(), !1;
    const T = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : d((M) => M.slice(0, -1));
      }
    }[m.key];
    return T ? (m.stopPropagation(), m.preventDefault(), T(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && d((M) => M + m.key), !0) : !1;
  }, Ve), [l, u, p, o, n, c]), qe(Ic.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => g(m), children: [!u && S("input", { value: p, type: "text", disabled: !0 }), S(xE, {}), S(Ic.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((T, M) => qe(Ic.Option, { index: M, children: [S("span", { className: "label", children: T.label ?? T.name }), S("span", { className: "description", children: T.description })] }, T.name)) })] });
}
function vE({ trigger: e, items: t }) {
  const [r] = ye(), [n, i] = Te(!1), s = xe((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return V(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), V(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = R();
      if (P(l))
        return l;
    });
    a.read(() => {
      const l = R();
      !P(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && S(Vy, { isOpen: n, children: ({ placement: o }) => S(Gy, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function CE({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: je(() => {
    if (!t || !e)
      return;
    const i = zr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = zr(o), { action: c } = r(o, a);
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
const SE = "display-annotation", _E = [
  We,
  fr,
  gt,
  Pr,
  sr,
  $t,
  dr,
  Yr
], Jy = /* @__PURE__ */ new Set();
function en(e, t) {
  return JSON.stringify([e, t]);
}
function ME(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string";
}
function qc(e) {
  const t = JSON.parse(e);
  if (!ME(t))
    throw new Error(`not an annotation index key: ${e}`);
  return t;
}
function EE(e) {
  const t = {};
  for (const { type: r, id: n } of e) {
    const i = t[r] ??= [];
    i.includes(n) || i.push(n);
  }
  return t;
}
function Yy(e) {
  xt(e, Ya, void 0), O(e) && e.getChildren().forEach(Yy);
}
const Lc = /* @__PURE__ */ new WeakMap();
function AE(e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  const u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakSet();
  let d = /* @__PURE__ */ new Set();
  const p = e._config.theme;
  function h(B) {
    return (t.get(B)?.size ?? 0) + (n.get(B)?.size ?? 0);
  }
  function g(B, W, H) {
    let Q = B.get(W);
    Q || B.set(W, Q = /* @__PURE__ */ new Set()), Q.add(H);
  }
  function m(B, W, H) {
    const Q = B.get(W);
    Q?.delete(H) && (Q.size === 0 && B.delete(W), h(W) === 0 && d.add(W));
  }
  function k(B) {
    const W = B.getTextContent();
    for (const [H, Q] of Object.entries(B.getTypedIDs()))
      for (const ue of Q)
        o.set(en(H, ue), W);
  }
  function T(B, W, H) {
    const Q = Array.from(B, (ue) => ee(ue)).filter((ue) => ue !== null);
    return Q.sort((ue, te) => ue.isBefore(te) ? -1 : 1), Q.map((ue) => {
      const te = wn(ue).find((Fe) => Fe.type === W && Fe.id === H);
      return te ? gl(ue, te) : "";
    }).join("");
  }
  function M(B, W, H) {
    e.getEditorState().read(() => {
      const Q = _i(B);
      if (Q)
        for (const ue of wn(Q)) {
          const te = ma(e, ue.type, ue.id)?.[H];
          te?.(W, ue.type, ue.id, gl(Q, ue));
        }
    }, { editor: e });
  }
  function I(B, W) {
    const H = e.getElementByKey(B);
    if (!H)
      return;
    const Q = W.length > 0 ? [
      ...qg(p, EE(W)),
      SE
    ].flatMap((te) => te.match(/\S+/g) ?? []) : [], ue = u.get(H) ?? [];
    Ho(H, ...ue.filter((te) => !Q.includes(te))), Ds(H, ...Q), u.set(H, Q), Q.length > 0 && !f.has(H) && (f.add(H), H.addEventListener("click", (te) => M(H, te, "onClick")), H.addEventListener("mouseenter", (te) => M(H, te, "onMouseEnter")), H.addEventListener("mouseleave", (te) => M(H, te, "onMouseLeave")));
  }
  function A(B) {
    e.getEditorState().read(() => {
      const W = /* @__PURE__ */ new Set();
      for (const [H, Q] of B) {
        const ue = Q === "destroyed" ? null : ee(H), te = ue ? wn(ue) : [], Fe = r.get(H) ?? [];
        for (const { type: G, id: _ } of Fe) {
          const Z = en(G, _);
          W.add(Z), te.some((ie) => ie.type === G && ie.id === _) || m(t, Z, H);
        }
        for (const G of te) {
          const _ = en(G.type, G.id);
          W.add(_), g(t, _, H);
        }
        te.length > 0 ? r.set(H, te) : r.delete(H), ue && (te.length > 0 || Fe.length > 0) && I(H, te);
        for (let G = ue?.getParent(); G; G = G.getParent())
          de(G) && k(G);
      }
      for (const H of W) {
        const Q = t.get(H);
        if (!Q || Q.size === 0)
          continue;
        const [ue, te] = qc(H);
        o.set(H, T(Q, ue, te));
      }
    }, { editor: e });
  }
  function K(B) {
    e.getEditorState().read(() => {
      for (const [W, H] of B) {
        const Q = H === "destroyed" ? null : ee(W), ue = de(Q) ? Q : void 0, te = ue ? Object.entries(ue.getTypedIDs()) : [], Fe = te.flatMap(([_, Z]) => Z.map((ie) => en(_, ie)));
        for (const _ of i.get(W) ?? [])
          Fe.includes(_) || (m(n, _, W), ue || l.set(_, [...l.get(_) ?? [], W]));
        for (const _ of Fe)
          g(n, _, W);
        if (Fe.length > 0 ? i.set(W, Fe) : i.delete(W), !ue)
          continue;
        k(ue);
        const G = ue.getTypedOnRemoves();
        for (const [_, Z] of te)
          for (const ie of Z) {
            const Ke = G[_]?.[ie];
            Ke && s.set(en(_, ie), Ke);
          }
      }
    });
  }
  function J(B, W, H) {
    ty(e, W, H), s.delete(B), o.delete(B);
  }
  function E() {
    for (const [B, W] of Dv(e))
      w(B, W);
  }
  function w(B, W) {
    const H = en(B, W);
    a.add(H), c.add(H);
  }
  function fe() {
    a.clear(), Uv(e);
    for (const B of /* @__PURE__ */ new Set([...s.keys(), ...o.keys()])) {
      if (h(B) > 0)
        continue;
      const [W, H] = qc(B);
      J(B, W, H);
    }
  }
  function Y({ tags: B }) {
    E();
    const W = d, H = c, Q = l;
    if (d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), B.has(Ba)) {
      fe();
      return;
    }
    if (B.has(Ka))
      return;
    const ue = [];
    for (const te of W) {
      if (h(te) > 0)
        continue;
      const [Fe, G] = qc(te), _ = ma(e, Fe, G)?.onRemove ?? s.get(te), Z = o.get(te) ?? "";
      if (J(te, Fe, G), !(!_ || a.has(te) || H.has(te))) {
        a.add(te), Ld(e, Fe, G, !0);
        for (const ie of Q.get(te) ?? [])
          Kv(ie, Fe, G);
        try {
          _(Fe, G, "destroyed", Z);
        } catch (ie) {
          ue.push(ie);
        }
      }
    }
    for (const te of ue)
      queueMicrotask(() => e._onError(te instanceof Error ? te : new Error(String(te))));
  }
  function be(B, W) {
    E();
    const H = en(B, W);
    a.delete(H), Ld(e, B, W, !1);
  }
  const le = et(..._E.filter((B) => e.hasNodes([B])).map((B) => e.registerMutationListener(B, A, { skipInitialization: !1 })), e.hasNodes([Ze]) ? e.registerMutationListener(Ze, K, {
    skipInitialization: !1
  }) : () => {
  }, Lv(e), e.registerUpdateListener(Y), $S(e), e.registerCommand(
    hT,
    ({ nodes: B }) => (B.forEach(Yy), !1),
    // Critical, and never handling the command, so a handler that does handle it cannot skip the
    // strip.
    rr
  ));
  return {
    index: {
      keysFor: (B, W) => t.get(en(B, W)) ?? Jy,
      noteSet: be,
      noteReported: w,
      hasReported: (B, W) => (E(), a.has(en(B, W)))
    },
    references: 0,
    unregister: le
  };
}
function PE(e) {
  let t = Lc.get(e);
  t || (t = AE(e), Lc.set(e, t)), t.references++;
  const r = t;
  let n = !1;
  return {
    index: r.index,
    release: () => {
      n || (n = !0, r.references--, !(r.references > 0) && (r.unregister(), Lc.delete(e)));
    }
  };
}
function Xy(e) {
  const t = se(void 0);
  return ds(() => {
    const r = PE(e);
    return t.current = r.index, () => {
      t.current = void 0, r.release();
    };
  }, [e]), je(() => ({
    keysFor: (r, n) => t.current?.keysFor(r, n) ?? Jy,
    noteSet: (r, n) => t.current?.noteSet(r, n),
    noteReported: (r, n) => t.current?.noteReported(r, n),
    hasReported: (r, n) => t.current?.hasReported(r, n) ?? !1
  }), []);
}
function Vs(e, t) {
  return `${e}:${t}`;
}
function wE(e, t) {
  V(() => {
    if (!e.hasNodes([Ze]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return et(ku(e, Ze, (n) => gi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((f) => {
          const d = s[l]?.[f], p = o[l]?.[f], h = a[l]?.[f], g = c[l]?.[f];
          i.addID(l, f, d, p, h, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Ze, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ee(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : de(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Ze.isReservedType(c))
              for (const u of l) {
                let f = t.get(Vs(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? f !== void 0 && (f.delete(i), f.size === 0 && t.delete(Vs(c, u))) : (f === void 0 && (f = /* @__PURE__ */ new Set(), t.set(Vs(c, u), f)), f.has(i) || f.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const NE = Ci(function({ logger: t, viewOptions: r }, n) {
  const [i] = ye(), s = je(() => /* @__PURE__ */ new Map(), []);
  wE(i, s);
  const o = Xy(i), a = (c, l, u) => {
    const f = Array.from(u ?? s.get(Vs(c, l)) ?? []);
    Lg(c, l, f);
    const d = [];
    for (const h of Array.from(o.keysFor(c, l))) {
      const g = ee(h);
      if (!g)
        continue;
      const m = wn(g).filter((k) => k.type === c && k.id === l);
      Zm(g, c, l) && d.push(...m.map((k) => gl(g, k)));
    }
    const p = ma(i, c, l);
    ty(i, c, l), d.length > 0 && p && f.length === 0 && !o.hasReported(c, l) && (o.noteReported(c, l), p.onRemove?.(c, l, "removed", d.join("")));
  };
  return lu(n, () => ({
    setAnnotation(c, l, u, f, d, p, h) {
      if (Ze.isReservedType(l))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${l}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const g = rc(c, r, {
          forAnnotation: !0
        });
        if (g === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        a(l, u), o.noteSet(l, u), Gu(g, l, u, f, d, p, h);
      }, { tag: rl });
    },
    removeAnnotation(c, l) {
      if (Ze.isReservedType(c))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      const u = s.get(Vs(c, l));
      (u === void 0 || u.size === 0) && o.keysFor(c, l).size === 0 || i.update(() => {
        a(c, l, u);
      }, { tag: rl });
    }
  })), null;
});
function OE({ dirtyElements: e, dirtyLeaves: t, prevEditorState: r, tags: n }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  n.has(cg) && !n.has(Mg) || i.ignoreTags.some((s) => n.has(s)) || r.isEmpty();
}
function RE(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Yi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ee(i), o = s !== null && Cr(s) !== void 0;
    if (t.size === 1 && C(s) && !o && H_(s)) {
      const a = Ty(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const f = ee(i);
          return new Yi([C(f) ? Sl(f) : { insert: "" }]);
        }), l = new Yi([Sl(s)]), u = new Yi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = pp(r), c = pp(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function $E(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += IE(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), LE(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += DE(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), KE(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function IE(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), qE(t, e.retain, e.attributes, r, n)), e.retain);
}
function qE(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = ve();
  function l(u) {
    if (s <= 0)
      return !0;
    if (pn(u)) {
      const f = u.getTextContentSize();
      if (e < o + f && o < e + t) {
        const d = Math.max(0, e - o), p = f - d, h = Math.min(s, p);
        if (h > 0) {
          let g = u;
          const m = d > 0, k = h < f - d;
          if (m && k) {
            const [, T] = u.splitText(d);
            [g] = T.splitText(h);
          } else m ? [, g] = u.splitText(d) : k && ([g] = u.splitText(h));
          if (Dn(r)) {
            const T = g.getParent();
            if (D(T)) {
              const M = r.char;
              let I;
              Array.isArray(M) ? a >= 0 && a <= M.length - 1 && (I = M[a]) : a === 0 && (I = M);
              const A = I ? yi(I, T) : !1;
              if (A && Array.isArray(M) && M.length > 1) {
                const K = Oe("");
                g.replace(K);
                const J = typeof r.segment == "string" ? r.segment : void 0, E = vs(M.slice(1), n, g, J);
                let w = K;
                for (const fe of E)
                  w.insertAfter(fe), w = fe;
                K.remove(), Qt(r, g);
              } else if (A)
                Qt(r, g);
              else {
                g.remove();
                const K = Ep(g, r, n, i);
                if (K && K.length > 0) {
                  let J = T;
                  for (const E of K)
                    J.insertAfter(E), J = E;
                }
              }
            } else {
              const M = Oe("");
              g.replace(M);
              const I = Ep(g, r, n, i);
              if (I && I.length > 0) {
                let A = M;
                for (const K of I)
                  A.insertAfter(K), A = K;
                M.remove();
              } else
                M.replace(g);
            }
          } else
            Qt(r, g);
          s -= h;
        }
      }
      o += f;
    } else if (Gt(u))
      e <= o && o < e + t && s > 0 && (Ap(u, r), s -= 1), o += 1;
    else if (D(u)) {
      a += 1;
      let f = !1;
      if (e <= o && o < e + t && s > 0)
        if (Dn(r)) {
          const d = r.char;
          let p;
          if (Array.isArray(d) ? a >= 0 && a <= d.length - 1 && (p = d[a]) : a === 0 && (p = d), p) {
            wl(u, p.style), typeof p.cid == "string" && xt(u, mi, () => p.cid);
            const h = Xe(p, xa);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || JE(r.char)) && (f = !0);
      if (s > 0) {
        const d = u.getChildren();
        for (const p of d) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return f && el(u), !0;
        }
      }
      f && el(u), a -= 1;
    } else if (ar(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const d = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!st(u))
          Ap(u, r);
        else if (xf(r)) {
          const p = eb(r.para, n);
          p && u.replace(p, !0);
        }
        s -= d;
      }
      o += d;
    } else if (O(u)) {
      const f = u.getChildren();
      for (const d of f) {
        if (s <= 0)
          break;
        if (l(d) && s <= 0)
          return !0;
      }
    }
    return s <= 0;
  }
  l(c), s > 0 && i?.warn(`$applyAttributes: Not all characters in the retain operation (length ${t}) could be processed. Remaining: ${s}. targetIndex: ${e}, final currentIndex: ${o}`);
}
function Ep(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = vs(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Qt(t, e);
    return;
  }
  const a = {};
  ib.forEach((u) => {
    e.hasFormat(u) && (a[u] = "true");
  });
  const c = {};
  Object.entries(t).forEach(([u, f]) => {
    u === "segment" || u === "char" || (typeof f == "string" ? c[u] = f : f === !0 ? c[u] = "true" : f === !1 && (c[u] = "false"));
  });
  const l = {
    ...o.getUnknownAttributes() ?? {},
    ...a,
    ...c
  };
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Qt(t, e), s;
}
function Qy(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  N(r) ? (r.setMarker(t), r.setTextContent($e(t))) : vt(r) && r.getTextType() === "marker" && r.setTextContent($e(t) + q);
}
function wl(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    N(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = D(e.getParent()), i = e.getFirstChild();
  vt(i) && i.getTextType() === "marker" && i.getTextContent() === $e(r, n) && i.setTextContent($e(t, n));
  const s = e.getLastChild();
  vt(s) && s.getTextType() === "marker" && s.getTextContent() === Je(r, n) && s.setTextContent(Je(t, n));
}
function Ap(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && Dn(t)) {
      const i = Nl(n);
      if (wl(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        xt(e, mi, () => o);
      }
      const s = Xe(i, xa);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ye(e) || Se(e) || Pe(e) || U(e) || De(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ut(e) || he(e) || D(e)) && (r === "style" && he(e) ? Qy(e, n) : r === "style" && D(e) ? wl(e, n) : r === "code" && ut(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && xt(e, $n, () => n));
  }
}
function LE(e, t, r) {
  if (t <= 0)
    return;
  const n = ve();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (pn(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, f = Math.min(s, u);
        f > 0 && (a.spliceText(l, f, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${f} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= f, c -= f);
      }
      i += c;
    } else if (Gt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (ar(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && ar(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(ir(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ue(p)) {
            let h = i + 1;
            const g = p.getChildren();
            for (const k of g) {
              if (s <= 0)
                break;
              const T = i;
              if (i = h, o(k)) {
                i = T;
                break;
              }
              pn(k) ? h += k.getTextContentSize() : Gt(k) && (h += 1), i = T;
            }
            const m = p.getChildren();
            for (const k of m)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(ir(), !0);
        } else he(a) ? a.replace(ir(), !0) : a.remove();
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
function DE(e, t, r, n, i) {
  if (t === po)
    return Pp(e, r, n, i);
  if (t.endsWith(po) && !xf(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Dn(r))
        throw new Error("Text + LF should not have char attributes");
      o += Ca(e, s, r, i);
    }
    return o += Pp(e + o, r, n, i), o;
  } else return Dn(r) ? UE(e, t, r, n, i) : Ca(e, t, r, i);
}
function UE(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Oe(t === "" ? ct : t);
  Qt(r, s);
  let o;
  {
    let m = function(k) {
      if (pn(k)) {
        const T = k.getTextContentSize();
        if (e >= g && e < g + T) {
          const M = k.getParent();
          return D(M) && (o = M), !0;
        }
        g += T;
      } else if (Gt(k))
        g += 1;
      else if (D(k)) {
        const T = k.getChildren();
        for (const M of T)
          if (m(M))
            return !0;
      } else if (O(k)) {
        const T = k.getChildren();
        for (const M of T)
          if (m(M))
            return !0;
        ar(k) && (g += 1);
      }
      return !1;
    };
    const h = ve();
    let g = 0;
    m(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && yi(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (yi(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = vs(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const f = u.find(D);
  if (!f)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Ca(e, t, void 0, i);
  const d = {};
  for (const [h, g] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof g == "string" && (d[h] = g);
  Object.keys(d).length > 0 && f.setUnknownAttributes(d);
  let p = !0;
  for (const h of u)
    if (!Zy(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Ca(e, t, void 0, i));
}
function Ca(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = ve();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (pn(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, f = Oe(t);
        if (Qt(r, f), u === 0)
          c.insertBefore(f);
        else if (u === l) {
          const d = c.getParent();
          D(d) && !Dn(r) ? d.insertAfter(f) : c.insertAfter(f);
        } else {
          const [, d] = c.splitText(u);
          d.insertBefore(f);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Gt(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const f = Oe(t);
        Qt(r, f);
        const d = c.getFirstChild();
        return d ? d.insertBefore(f) : c.append(f), n?.debug(`Inserted text "${t}" at beginning of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const u = c.getChildren();
      for (const f of u) {
        if (a(f))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const f = Oe(t);
        return Qt(r, f), c.append(f), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (ar(c)) {
      if (!o && e === s) {
        const f = Oe(t);
        Qt(r, f);
        const d = c.getFirstChild();
        return d ? d.insertBefore(f) : c.append(f), n?.debug(`Inserted text "${t}" at beginning of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const u = c.getChildren();
      for (const f of u) {
        if (a(f))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const f = Oe(t);
        return Qt(r, f), c.append(f), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (O(c)) {
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
    const c = Oe(t);
    Qt(r, c);
    const l = ir().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Zy(e, t, r) {
  const n = ve();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(ir().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!O(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Ue(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(ir().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (pn(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const f = e - i, [d] = l.splitText(f);
          return d.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${f}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Gt(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (ar(l)) {
        const u = l;
        if (o(u))
          return !0;
        const f = i;
        if (st(u) && ar(t) && // Target is at the ImpliedPara's implicit newline
        e === f && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = f + 1, s = !0, !0;
        i += 1;
      } else if (O(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return O(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(ir().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ue(a) ? st(a) && he(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ue(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ue(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function KE(e, t, r, n, i) {
  let s;
  return En("chapter", t) ? s = zE(t.insert.chapter, r) : En("verse", t) ? s = BE(t.insert.verse, r) : En("ms", t) ? s = jE(t.insert.ms) : En("note", t) ? s = tb(t, r, n, i) : En("unknown", t) ? s = rb(t, r, n, i) : En("unmatched", t) && (s = WE(t.insert.unmatched, r)), s ? Zy(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Pp(e, t, r, n) {
  let i;
  xf(t) ? i = eb(t.para, r) : GE(t) && (i = FE(t.book)), i ??= ir();
  const s = i, o = he(s), a = st(s);
  let c = 0, l = !1;
  function u(f) {
    if (l)
      return !0;
    if (pn(f)) {
      const d = f.getTextContentSize();
      if (e >= c && e <= c + d) {
        const p = f.getParent();
        if (he(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? f.splitText(h) : [void 0];
          let m, k = g?.getPreviousSibling();
          for (; k; ) {
            const T = k;
            k = k.getPreviousSibling(), m ? m.insertBefore(T) : s.append(T), m = T;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += d;
    } else if (Gt(f))
      c += 1;
    else if (ar(f)) {
      const d = f.getChildren();
      for (const p of d) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (st(f) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${f.getKey()}) with ParaNode at targetIndex ${e}`), f.replace(s, !0), l = !0, !0;
        if (he(f) && s) {
          const p = f;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && he(f) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${f.getMarker()}) at targetIndex ${e}`), f.insertAfter(s), l = !0, !0;
    } else if (O(f)) {
      const d = f.getChildren();
      for (const p of d) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
    }
    return l;
  }
  return u(ve()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function FE(e) {
  const { style: t, code: r } = e;
  if (!t || t !== oo || !r || !or.isValidBookCode(r))
    return;
  const n = Xe(e, $_);
  return sm(r, n);
}
function eb(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Xe(e, R_), i = co(r, n);
  if (!Ts(t))
    return i;
  if (t.markerMode === "editable")
    i.append(Tt(r), bi());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = $e(r) + q;
    i.append(t.hasGutterParaMarkers ? TC(s) : un("marker", s));
  }
  return i;
}
function zE(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Xe(e, I_);
  let a;
  if (t.markerMode === "editable")
    a = rm(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = qu(r, c, n, i, s, o);
  }
  return a;
}
function BE(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Xe(e, q_);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = nr(r, n);
    c = Vg(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = ef(n, l, i, s, o, a);
  }
  return c;
}
function jE(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Xe(e, L_);
  return Pg(t, r, n, s, i);
}
function tb(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Xe(i.note, D_), u = typeof l?.closed == "string" ? l.closed : void 0, f = e.attributes?.segment;
  let d;
  f && typeof f == "string" && (d = f);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (Dn(g.attributes)) {
        const m = vs(g.attributes.char, t, Oe(g.insert), void 0, nb(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...m);
      } else
        p.push(Oe(g.insert));
  return jy(s, o, p, t, r, d, u).setCategory(a).setUnknownAttributes(l);
}
function rb(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Xe(i, U_), l = Pu(s, o, c), u = a?.ops ?? [];
  u.length > 0 && VE(u, t, r, n).forEach((p) => l.append(p));
  const f = e.attributes?.segment;
  return typeof f == "string" && xt(l, $n, () => f), l;
}
function VE(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Dn(s.attributes)) {
        const o = Oe(s.insert), a = vs(s.attributes.char, t, o, void 0, nb(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Oe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (En("unknown", s)) {
        const o = rb(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (En("note", s)) {
        const o = tb(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function WE(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = zu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function nb(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Nl(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function vs(e, t, r, n, i, s = !1, o = !1) {
  C(r) && r.getTextContentSize() === 0 && r.setTextContent(ct);
  const a = () => {
    o && C(r) && r.getTextContent() !== ct && r.setTextContent(q + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Nl), l = c[0], u = i?.[i.length - 1];
    if (D(u) && yi(l, u))
      return c.length > 1 ? vs(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const f = c.reduceRight((d, p, h) => {
      const g = ln(p.style, Xe(p, xa));
      if (typeof p.cid == "string" && xt(g, mi, () => p.cid), n && h === c.length - 1 && xt(g, $n, () => n), d)
        if (D(d)) {
          const m = d.getMarker(), k = [];
          Uc(m, k, t, !0), k.forEach((M) => g.append(M)), g.append(d);
          const T = [];
          Dc(d, T, t, !0), T.forEach((M) => g.append(M));
        } else
          g.append(d);
      return g;
    }, r);
    return Uc(l.style, f, t, s), Dc(f, f, t, s), [f];
  } else {
    const c = Nl(e), l = i?.[i.length - 1];
    if (D(l) && yi(c, l))
      return r && l.append(r), [];
    a();
    const u = ln(c.style, Xe(c, xa));
    return typeof c.cid == "string" && xt(u, mi, () => c.cid), n && xt(u, $n, () => n), r && u.append(r), Uc(c.style, u, t, s), Dc(u, u, t, s), [u];
  }
}
function Dc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && HE(e.getMarker(), t, r, !1, n);
}
function Uc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = Tt(e, "opening", n) : r?.markerMode === "visible" && (i = un("marker", $e(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function HE(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = Tt("", "selfClosing") : s = Tt(e, "closing", i) : r?.markerMode === "visible" && (s = un("marker", n ? Je("") : Je(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function GE(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function xf(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Dn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function JE(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Qt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        xt(t, $n, () => n);
        continue;
      }
      if (YE(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const ib = [
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
function YE(e) {
  return ib.includes(e);
}
function XE() {
  const [e] = ye();
  return V(() => e.registerCommand(Fa, (t) => (QE(t), !1), di), [e]), null;
}
function QE(e) {
  if (ZE(e.target))
    return;
  const t = R();
  P(t) && eA(t);
}
function Cs(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (lr(t))
      r++, t = t.getNextSibling(), C(t) && t.getTextContent() === q && (r++, t = t.getNextSibling());
    else if (Se(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (_r(e, r), !0);
}
function ZE(e) {
  if (!lg(e))
    return !1;
  const t = _i(e);
  if (!vC(t))
    return !1;
  const r = t.getParent();
  return r ? Ue(r) ? Cs(r) : (_r(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function eA(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ee(t.key);
  if (!Ue(r))
    return !1;
  const n = r.getFirstChild();
  return !cr(n) && !jn(n) ? !1 : Cs(r);
}
function tA() {
  const [e] = ye();
  return V(() => {
    const t = (r) => r instanceof KeyboardEvent && !rA(r) || !oc() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return et(
      e.registerCommand(mn, t, Ve),
      e.registerCommand(gu, t, Ve),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(rn, t, rr),
      e.registerCommand(pi, t, rr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(mu, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = _i(r.target);
        return !n || !Un(n) ? !1 : (r.preventDefault(), !0);
      }, Ve),
      e.registerCommand(gT, t, Ve),
      e.registerCommand(mT, t, Ve),
      e.registerCommand(yT, t, Ve)
    );
  }, [e]), null;
}
function rA(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Un(e) {
  return lt(e, (t) => De(t) || lm(t)) ?? void 0;
}
function oc() {
  const e = R();
  return P(e) ? Un(e.anchor.getNode()) !== void 0 || Un(e.focus.getNode()) !== void 0 : !1;
}
function nA(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function iA(e, t) {
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
    for (const f of a) {
      const d = document.createRange();
      if (d.selectNode(f), o.compareBoundaryPoints(Range.START_TO_START, d) > 0)
        c = f;
      else {
        l = f;
        break;
      }
    }
    if (!c)
      return !1;
    const u = document.createRange();
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), nA(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function sA(e, t, r, n) {
  if (!kA(t) || iA(e, r))
    return !1;
  const i = r === "up" ? O_(t) : N_(t);
  return i && n.preventDefault(), i;
}
function oA({ viewOptions: e }) {
  const [t] = ye();
  return aA(t, e), null;
}
function aA(e, t) {
  V(() => {
    if (!e.hasNodes([dr, $t, ze]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = R();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = wp(o), f = hA(i, Np(u, n.key) ? "next" : "previous");
        return f && n.preventDefault(), f;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return sA(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = wp(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Np(a, n.key) ? l = !c && $p(i, "next") || !c && lA(i) || yA(i) || !c && s && Rp(i, "next") : cA(a, n.key) && (l = !c && $p(i, "previous") || !c && uA(i) || bA(i, t) || !c && s && Rp(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(mn, r, Ve);
  }, [e, t]);
}
function wp(e) {
  return e.dir || "ltr";
}
function Np(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function cA(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Ol(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = Cr(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function lA(e) {
  const t = Ol($m(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (_r(t, 0), !0);
}
function uA(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Ol(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Op(n);
  }
  if (t.offset === 0) {
    const n = Ol(r);
    return n ? Op(n) : !1;
  }
  return !1;
}
function Op(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (C(t))
    return t.select(), !0;
  if (O(t)) {
    const i = t.getLastDescendant();
    return C(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Sa = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function fA(e) {
  if (Sa)
    for (const { segment: r } of Sa.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function dA(e) {
  if (Sa) {
    let n = 0;
    for (const { index: i } of Sa.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function sb(e) {
  for (let t = e; t; t = t.getParent())
    if (O(t) && !t.isInline())
      return t;
}
function ob(e) {
  return !!e && N(e) && Un(e) !== void 0;
}
function as(e) {
  return C(e) && !e.isToken() && !ob(e) && e.getTextContentSize() > 0;
}
function ab(e) {
  return xo(e) ? !0 : U(e) ? e.getIsCollapsed() === !0 : C(e) ? (e.isToken() || ob(e)) && e.getTextContentSize() > 0 : gs(e) ? !Pe(e) : !1;
}
function cs(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function ac(e, t, r) {
  for (let n = e; n; ) {
    if (ab(n))
      return n;
    if (O(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? cs(n, t, r);
      continue;
    }
    if (as(n))
      return n;
    n = cs(n, t, r);
  }
}
function Tf(e, t, r, n, i) {
  return r === "element" && O(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? cs(e, n, i) : r === "text" && ab(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : cs(e, n, i);
}
function Kc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Tf(e.node, e.offset, e.kind, "previous", t), n = ac(r, "previous", t);
  if (!n)
    return e;
  if (as(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function pA(e, t) {
  const r = e.getNode(), n = sb(r);
  if (!n)
    return;
  if (e.type === "text" && as(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Kc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Tf(r, e.offset, e.type, t, n), s = ac(i, t, n);
  if (!s)
    return;
  if (as(s)) {
    const c = s.getTextContent(), l = t === "next" ? fA(c) : dA(c);
    return Kc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Kc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function cb(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = pA(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Rp(e, t) {
  return cb(e, t, "collapse");
}
function hA(e, t) {
  return cb(e, t, "extend");
}
function gA(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && as(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Tf(n, e.offset, e.type, t, r);
  return ac(i, t, r) === void 0;
}
function mA(e, t) {
  const r = ve();
  for (let n = e; n; ) {
    const i = cs(n, t, r), s = i && ac(i, t, r);
    if (!s)
      return;
    if (n = Un(s), !n)
      return s;
  }
}
function $p(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Un(n))
    return !1;
  const i = sb(n);
  if (!i || !gA(r, t, i))
    return !1;
  const s = cs(i, t, ve()), o = s && Un(s);
  if (!o)
    return !1;
  const a = mA(o, t);
  if (!a)
    return !0;
  if (as(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Ip(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function yA(e) {
  const t = e.anchor.getNode(), r = $m(e);
  if (U(r) && !N(r.getFirstChild())) {
    if (Ue(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Ue(i) && Cs(i)) && i.selectStart(), !0;
      }
    } else return vt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ue(t) && U(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Ip(r), !0;
  }
  const n = r?.getParent();
  if (vt(r) && U(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Ip(n) : n.selectEnd(), !0;
  }
  return !1;
}
function bA(e, t) {
  const r = uS(e);
  if (Pi(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (ut(i.getParent()))
    return !0;
  if (U(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!jn(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Ue(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = lt(o, (c) => U(c));
    if (U(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Cr(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (Ct(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function kA(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Se(t) && gs(t);
}
function xA() {
  const [e] = ye();
  return TA(e), null;
}
function TA(e) {
  V(() => {
    if (!e.hasNodes([we]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return et(
      e.registerNodeTransform(we, SA),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(we, pC),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(we, ym),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(we, (t) => fo(fn("char"), t)),
      e.registerNodeTransform(We, _A)
    );
  }, [e]);
}
function Zo(e) {
  return e.getChildren().some(N);
}
function vA(e, t) {
  const r = t.getFirstChild();
  if (!N(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (ks(n)) {
    const i = n.getTextContent();
    i.startsWith(q) && (i === q ? n.remove() : n.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function CA(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  N(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function SA(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Zo(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ce(e, mi), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && yi({ style: t, cid: r }, i) && Ur(n, i.getUnknownAttributes()))
    if (Zo(i)) {
      if (vA(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && yi({ style: t, cid: r }, s) && Ur(n, s.getUnknownAttributes()) && (Zo(s) ? CA(e, s) : (s.append(...e.getChildren()), e.remove()));
}
const lb = /* @__PURE__ */ new WeakSet();
function _A(e) {
  const t = e.getParent();
  if (!D(t) || Zo(t) || lb.has(e))
    return;
  const r = e.getTextContent();
  if (r.length < 2 || !r.includes(ct))
    return;
  const n = EA(t.getKey());
  if (n === void 0) {
    t.getChildrenSize() === 1 && r.startsWith(ct) && qp(e, 0);
    return;
  }
  if (n !== e.getKey())
    return;
  const i = MA(e, r);
  i !== void 0 && qp(e, i);
}
function MA(e, t) {
  const r = R();
  if (P(r) && r.isCollapsed() && r.anchor.key === e.getKey()) {
    const { offset: n } = r.anchor;
    if (n === t.length && t.startsWith(ct))
      return 0;
    if (t[n] === ct)
      return n;
  }
  if (t.startsWith(ct))
    return 0;
  if (t.endsWith(ct))
    return t.length - 1;
}
function qp(e, t) {
  const r = R(), n = P(r) ? [r.anchor, r.focus].filter((a) => a.type === "text" && a.key === e.getKey()) : [], i = n.map((a) => a.offset), s = e.getTextContent(), o = e.setTextContent(s.slice(0, t) + s.slice(t + 1));
  lb.add(o), n.forEach((a, c) => {
    const l = i[c];
    a.set(o.getKey(), l > t ? l - 1 : l, "text");
  });
}
function EA(e) {
  return Ot().getEditorState().read(() => {
    const t = ee(e);
    if (!D(t))
      return;
    const r = t.getChildren().filter((i) => !gs(i)), [n] = r;
    return r.length === 1 && C(n) && n.getTextContent() === ct ? n.getKey() : null;
  });
}
function ub(e) {
  return e.replaceAll("	", " ");
}
function fb() {
  const e = R();
  return !!e && !e.isCollapsed();
}
function db(e) {
  const t = () => !fb();
  return et(e.registerCommand(za, t, Pt), e.registerCommand(pi, t, Pt));
}
const vf = (e) => {
  e.dispatchCommand(za, null);
}, Cf = (e) => {
  e.dispatchCommand(pi, null);
}, Sf = (e) => {
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
      n.setData(o, ub(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(rn, s);
  });
}, _f = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", ub(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(rn, i);
  });
};
function AA() {
  const [e] = ye();
  return V(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(oa ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), vf(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Cf(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? _f(e) : Sf(e)));
    };
    return et(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      db(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function PA({ logger: e }) {
  const [t] = ye();
  return V(() => et(
    // When the backslash or forward slash key is typed.
    t.registerCommand(mn, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Zi),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(rn, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Zi),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(mu, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Zi)
  ), [t, e]), null;
}
function wA({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), S("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: S("span", { className: "text", children: i.title }) });
}
function NA({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return S("div", { className: "typeahead-popover", children: S("ul", { children: e.map((i, s) => S(wA, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let OA = 0;
class Ns {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${OA++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function RA({ options: e } = {}) {
  const [t] = ye(), [r, n] = Te(() => !t.isEditable()), [i, s] = Te({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = Te(void 0), c = je(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new Ns("Cut", {
        onSelect: () => {
          Cf(t);
        },
        isDisabled: r
      }),
      new Ns("Copy", {
        onSelect: () => {
          vf(t);
        }
      }),
      new Ns("Paste", {
        onSelect: () => {
          Sf(t);
        },
        isDisabled: r
      }),
      new Ns("Paste as Plain Text", {
        onSelect: () => {
          _f(t);
        },
        isDisabled: r
      })
    ], d = (e ?? []).map((p) => new Ns(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...f, ...d];
  }, [t, r, e]), l = xe(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  V(() => db(t), [t]), V(() => {
    const f = (d) => {
      const p = d.target;
      t.getRootElement() === p || Am(p) || (d.preventDefault(), s({ isOpen: !0, x: d.clientX, y: d.clientY }), a(void 0));
    };
    return t.registerRootListener((d, p) => {
      p?.removeEventListener("contextmenu", f), d && d.addEventListener("contextmenu", f);
    });
  }, [t]), V(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      l();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, l]), V(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      l();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, l]), V(() => {
    if (!i.isOpen)
      return;
    const f = (d) => {
      if (d.key === "Escape")
        l();
      else if (d.key === "ArrowDown")
        d.preventDefault(), d.stopPropagation(), a((p) => p === void 0 ? 0 : (p + 1) % c.length);
      else if (d.key === "ArrowUp")
        d.preventDefault(), d.stopPropagation(), a((p) => p === void 0 ? c.length - 1 : (p - 1 + c.length) % c.length);
      else if (d.key === "Enter" && o !== void 0) {
        d.preventDefault(), d.stopPropagation();
        const p = c[o];
        p && !p.isDisabled && (t.update(() => {
          p.onSelect();
        }), l());
      }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, l, c, o, t]), V(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]);
  const u = se(null);
  return ds(() => {
    const f = u.current;
    if (!f)
      return;
    const { width: d, height: p } = f.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - d)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    f.style.left = `${h}px`, f.style.top = `${g}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? UT.createPortal(S("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: S(NA, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), l());
  }, onOptionMouseEnter: (f) => {
    a(f);
  } }) }), document.body) : null;
}
function $A(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function IA(e) {
  if (!TT(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function qA(e) {
  return Ct(e);
}
function Fc(e, t, r) {
  const n = _i(t.node);
  if (!gs(n) || qA(n))
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
function LA(e, t) {
  if (R())
    return !1;
  const r = e.getRootElement(), n = bT(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !kT(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, f;
  if (n.isCollapsed)
    u = Fc(e, c, IA(c)), f = u;
  else {
    const m = $A(n.getRangeAt(0), c);
    u = Fc(e, c, m ? "before" : "after"), f = Fc(e, l, m ? "after" : "before");
  }
  if (!u && !f)
    return !1;
  const d = u ?? c, p = f ?? l, h = {
    anchorNode: d.node,
    anchorOffset: d.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = xT(h, e);
  return g ? (cn(g), g.dirty = !t, t) : !1;
}
function DA() {
  const [e] = ye(), t = se(!1), r = se(!1);
  return V(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = R();
        P(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), V(() => e.registerCommand(xr, () => (LA(e, t.current) && (r.current = !0), !1), rr), [e]), null;
}
function UA() {
  const [e] = ye();
  return V(() => e.registerCommand(mn, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(oa ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, rr), [e]), null;
}
function KA({ isEditable: e }) {
  const [t] = ye();
  return ds(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Lp(e) {
  return !!e && Du(ee(e));
}
function pb(e) {
  const [t] = ye(), r = se(void 0), n = xe((i) => {
    let s = !1;
    const o = R(), a = P(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = Lp(c);
    c && !l && (r.current = void 0);
    let u;
    if (i) {
      const f = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, p = Xa(f, d);
      if (p)
        r.current = p.getKey(), u = p.getKey();
      else {
        const h = oS();
        i.insertAfter(h), r.current = h.getKey(), u = h.getKey(), s = !0;
      }
      _r(f, d);
    }
    if (c && l && c !== a && c !== u) {
      const f = ee(c);
      C(f) && (f.remove(), s = !0), r.current === c && (r.current = void 0);
    }
    return s;
  }, []);
  return V(() => {
    const i = () => {
      const a = e(), c = R(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && n(a) && Kr(to);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (wi(c) || !c.includes(ns))
        return;
      const l = R(), u = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (aS(a), r.current = void 0, u !== void 0) {
        const f = c.slice(0, u).split(ns).length - 1, d = Math.max(0, u - f);
        a.select(d, d);
      }
    }, o = et(t.registerCommand(xr, () => (i(), !1), di), t.registerCommand(yu, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Lp(a);
      }), c && t.update(() => {
        const l = ee(a);
        C(l) && (l.remove(), Kr(to));
      }), r.current = void 0, !1;
    }, di), t.registerNodeTransform(We, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function FA() {
  const e = R();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!O(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!Se(i) || Xa(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || Se(s))
    return i;
}
function zA() {
  return pb(FA), null;
}
function BA({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ye();
  return V(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), V(() => {
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
        const u = o.getRootElement(), f = u?.ownerDocument.activeElement, d = u != null && f != null && (u === f || u.contains(f));
        o.update(() => {
          d || Kr(vT), o.setEditorState(l), o.dispatchCommand(CT, void 0);
        }, { tag: Ba });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function jA({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ye();
  return VA(t, n), WA(i, e, r, n), null;
}
function VA(e, t) {
  const r = se(void 0), n = se(void 0), i = e.noteCallers, s = e.crossRefCallers;
  V(() => {
    let o = i;
    (!o || o.length <= 0) && (o = yM), r.current !== o && (r.current = o, Dp("note-callers", o, t));
  }, [t, i]), V(() => {
    let o = s;
    (!o || o.length <= 0) && (o = bM), n.current !== o && (n.current = o, Dp("cross-ref-callers", o, t));
  }, [t, s]);
}
function WA(e, t, r, n) {
  V(() => {
    if (!e.hasNodes([we, ze, sr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => eP(s));
    return et(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(ze, (s) => HA(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(we, JA),
      e.registerNodeTransform(We, YA),
      // Ensure a separator after the caller.
      e.registerNodeTransform(sr, XA),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(sr, (s, { prevEditorState: o }) => QA(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(xr, () => ZA(e, t, r, n), Pt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function HA(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Ct(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    C(i) && !N(i) && i.getTextContent() !== Ht(e.getCaller()) && e.insertBefore(i);
  }
}
function hb(e) {
  const t = e.getNextSibling();
  pr(t) || (C(t) && !N(t) && t.getTextContent() === q ? t.replace(bi()) : e.insertAfter(bi()));
}
function GA(e) {
  const t = e.getTextContent(), r = t.indexOf(q), n = r < 0 ? t : t.slice(0, r) + t.slice(r + 1);
  if (e.setTextContent(q), !n) {
    e.selectEnd();
    return;
  }
  const i = Oe(n);
  e.insertAfter(i), i.selectEnd();
}
function JA(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => Ct(s));
  if (!D(e) || !U(t) || !n)
    return;
  const i = Uu(r);
  n.getPreviewText() !== i && n.setPreviewText(i), hb(e);
}
function YA(e) {
  const t = Cr(e), r = t?.getChildren(), n = r?.find((o) => Ct(o));
  if (!C(e) || !U(t) || !n || !r)
    return;
  const i = e.getParent();
  if (U(i) && pr(e) && e.getTextContent() !== q && GA(e), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(ct) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Uu(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function XA(e) {
  Ct(e) && hb(e);
}
function QA(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ee(r), a = o?.getParent();
      return Ct(o) && U(a) && a.getCaller() === eo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function ZA(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = R();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = lt(o, (c) => U(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ee(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Os(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (U(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Os(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (U(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Os(e, c, n);
    } else if (!a) {
      const c = lt(o, (l) => U(l));
      if (c && c.getIsCollapsed() && Ue(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Os(e, l, n);
      }
    }
  }
  if (Ue(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (jn(c) && U(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Os(e, l, n);
    }
  }
  return !1;
}
function Os(e, t, r) {
  const n = ee(t);
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
function eP(e) {
  const t = R();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (U(i) && C(s)) {
    e.preventDefault();
    const o = To();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), cn(o);
  }
}
function Dp(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (tP(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function tP(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function cc(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!N(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = vr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => C(n) && n.getMode() === "token") ? t : [];
}
function rP(e) {
  const t = e.getParent();
  if (U(t))
    return cc(t).some((r) => r.is(e)) ? t : void 0;
}
function _a(e) {
  const t = cc(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function nP(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function iP(e) {
  const t = ST();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= _a(e);
  const i = nP(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= _a(e);
}
function Rl(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = rP(t);
  if (r)
    return sP(r, t, e.offset) ? void 0 : r;
}
function sP(e, t, r) {
  const n = cc(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function oP(e) {
  const t = cc(e), r = t[t.length - 1];
  C(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : _r(e, _a(e));
}
function aP(e = !1) {
  const t = R();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return cP(t.anchor, t.focus);
  const r = Rl(t.anchor);
  if (!r)
    return !1;
  if (!e && iP(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    _r(n, r.getIndexWithinParent());
  } else
    oP(r);
  return !0;
}
function cP(e, t) {
  const r = Rl(e), n = Rl(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Up(e, r, i), n && Up(t, n, !i), !0;
}
function Up(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), _a(t), "element");
}
function lP() {
  const [e] = ye(), t = se(!1);
  return V(() => {
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
  }, [e]), V(() => e.registerCommand(xr, () => (aP(t.current) && e.dispatchCommand(Tu, void 0), !1), di), [e]), null;
}
function uP({ onChange: e, viewOptions: t }) {
  const [r] = ye();
  return V(() => r.registerCommand(xr, () => {
    const n = nc(t);
    return e?.(n), !1;
  }, Pt), [r, e, t]), null;
}
function fP() {
  const [e] = ye();
  return dP(e), null;
}
function dP(e) {
  V(() => {
    if (!e.hasNodes([ft]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(ft, (t) => pP(t, e));
  }, [e]);
}
function pP(e, t) {
  vl(t, e.getKey()) && xy(e.getFirstChild()), !(!he(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ee(e.getKey());
    return he(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function gb({ onStateChange: e }) {
  const [t] = ye(), [r, n] = Te(t), i = se(!1), s = se(!1), o = se(void 0), a = se(void 0), c = xe(() => {
    const l = R();
    let u;
    if (P(l)) {
      const f = l.anchor.getNode(), d = l.focus.getNode();
      let p = f.getKey() === "root" ? f : lt(f, (k) => {
        const T = k.getParent();
        return T !== null && _T(T);
      });
      p === null && (p = f.getTopLevelElementOrThrow()), xi(p) && (p = lt(f, he) ?? p);
      const h = p.getKey(), g = r.getElementByKey(h), m = dS(f, d);
      if (m && w_(m) && (u = m.getMarker()), g !== null && (he(p) || ut(p) || Pi(p))) {
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
  return V(() => t.registerCommand(xr, (l, u) => (c(), n(u), !1), rr), [t, c]), V(() => et(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(MT, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), rr), r.registerCommand(ET, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), rr)), [c, r, e]), null;
}
function mb(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Kn(e) {
  return e ? Ue(e) ? e : lt(e, (r) => Ue(r)) ?? void 0 : void 0;
}
function yb(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Kn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Mf(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !du(e) ? !1 : e.getNodes().some((t) => Se(t));
}
function bb(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Kn(r);
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
function kb(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Kn(r);
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
function Kp(e, t) {
  return !!$l(e, t);
}
function $l(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && O(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return Se(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return Se(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return Se(i) ? i : void 0;
}
function Ma(e, t) {
  if (!P(e))
    return !1;
  const r = Kn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function rs(e) {
  return Mf(e) || yb(e);
}
function xb(e, t) {
  if (Mf(e) || yb(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return bb(e) && Ma(e, "backward") || Kp(e, "backward");
    case "deleteForward":
      return kb(e) && Ma(e, "forward") || Kp(e, "forward");
    case "insertText":
      return !1;
  }
}
function hP(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = $l(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (bb(e) && Ma(e, "backward")) {
        const n = Kn(e.anchor.getNode());
        if (Ue(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = $l(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (kb(e) && Ma(e, "forward")) {
        const i = Kn(e.anchor.getNode())?.getNextSibling();
        if (Ue(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Fp(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return du(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!P(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!P(e) || e.isCollapsed())
    return !1;
  const r = Kn(e.anchor.getNode()), n = Kn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Tb(e) {
  if (C(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else O(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function gP(e) {
  const t = e.getPreviousSibling();
  if (!Ue(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Tb(r) : Cs(t) || t.selectStart();
}
function vb(e) {
  return Se(e) || Ye(e) ? [] : Ue(e) ? e.getChildren().flatMap(vb) : [e];
}
function mP(e) {
  const t = [];
  for (const r of e) {
    const n = vb(r);
    n.length !== 0 && (Ue(r) && t.length > 0 && t.push(Oe(" ")), t.push(...n));
  }
  return t;
}
function zp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yP(e) {
  if (Array.isArray(e)) return e;
}
function bP(e, t) {
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
function kP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xP(e, t) {
  return yP(e) || bP(e, t) || TP(e, t) || kP();
}
function TP(e, t) {
  if (e) {
    if (typeof e == "string") return zp(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? zp(e, t) : void 0;
  }
}
const Cb = Object.entries, Bp = Object.setPrototypeOf, vP = Object.isFrozen, CP = Object.getPrototypeOf, SP = Object.getOwnPropertyDescriptor;
let pt = Object.freeze, yt = Object.seal, Wi = Object.create, Sb = typeof Reflect < "u" && Reflect, Il = Sb.apply, ql = Sb.construct;
pt || (pt = function(t) {
  return t;
});
yt || (yt = function(t) {
  return t;
});
Il || (Il = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
ql || (ql = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const zi = it(Array.prototype.forEach), _P = it(Array.prototype.lastIndexOf), jp = it(Array.prototype.pop), Bi = it(Array.prototype.push), MP = it(Array.prototype.splice), An = Array.isArray, Ks = it(String.prototype.toLowerCase), zc = it(String.prototype.toString), Vp = it(String.prototype.match), Rs = it(String.prototype.replace), Wp = it(String.prototype.indexOf), EP = it(String.prototype.trim), AP = it(Number.prototype.toString), PP = it(Boolean.prototype.toString), Hp = typeof BigInt > "u" ? null : it(BigInt.prototype.toString), Gp = typeof Symbol > "u" ? null : it(Symbol.prototype.toString), at = it(Object.prototype.hasOwnProperty), $s = it(Object.prototype.toString), ot = it(RegExp.prototype.test), Zn = wP(TypeError);
function it(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Il(e, t, n);
  };
}
function wP(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ql(e, r);
  };
}
function Ce(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ks;
  if (Bp && Bp(e, null), !An(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (vP(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function NP(e) {
  for (let t = 0; t < e.length; t++)
    at(e, t) || (e[t] = null);
  return e;
}
function kt(e) {
  const t = Wi(null);
  for (const n of Cb(e)) {
    var r = xP(n, 2);
    const i = r[0], s = r[1];
    at(e, i) && (An(s) ? t[i] = NP(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = kt(s) : t[i] = s);
  }
  return t;
}
function OP(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return AP(e);
    case "boolean":
      return PP(e);
    case "bigint":
      return Hp ? Hp(e) : "0";
    case "symbol":
      return Gp ? Gp(e) : "Symbol()";
    case "undefined":
      return $s(e);
    case "function":
    case "object": {
      if (e === null)
        return $s(e);
      const t = e, r = gr(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : $s(n);
      }
      return $s(e);
    }
    default:
      return $s(e);
  }
}
function gr(e, t) {
  for (; e !== null; ) {
    const n = SP(e, t);
    if (n) {
      if (n.get)
        return it(n.get);
      if (typeof n.value == "function")
        return it(n.value);
    }
    e = CP(e);
  }
  function r() {
    return null;
  }
  return r;
}
function RP(e) {
  try {
    return ot(e, ""), !0;
  } catch {
    return !1;
  }
}
const Jp = pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Bc = pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), jc = pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), $P = pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Vc = pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), IP = pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Yp = pt(["#text"]), Xp = pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Wc = pt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Qp = pt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), zo = pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), qP = yt(/{{[\w\W]*|^[\w\W]*}}/g), LP = yt(/<%[\w\W]*|^[\w\W]*%>/g), DP = yt(/\${[\w\W]*/g), UP = yt(/^data-[\-\w.\u00B7-\uFFFF]+$/), KP = yt(/^aria-[\-\w]+$/), Zp = yt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), FP = yt(/^(?:\w+script|data):/i), zP = yt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), BP = yt(/^html$/i), jP = yt(/^[a-z][.\w]*(-[.\w]+)+$/i), eh = yt(/<[/\w!]/g), th = yt(/<[/\w]/g), VP = yt(/<\/no(script|embed|frames)/i), WP = yt(/\/>/i), Vt = {
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
}, HP = function() {
  return typeof window > "u" ? null : window;
}, GP = function(t, r) {
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
}, rh = function() {
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
}, _n = function(t, r, n, i) {
  return at(t, r) && An(t[r]) ? Ce(i.base ? kt(i.base) : {}, t[r], i.transform) : n;
};
function _b() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : HP();
  const t = (z) => _b(z);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Vt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, f = e.trustedTypes, d = a.prototype, p = gr(d, "cloneNode"), h = gr(d, "remove"), g = gr(d, "nextSibling"), m = gr(d, "childNodes"), k = gr(d, "parentNode"), T = gr(d, "shadowRoot"), M = gr(d, "attributes"), I = o && o.prototype ? gr(o.prototype, "nodeType") : null, A = o && o.prototype ? gr(o.prototype, "nodeName") : null, K = o && o.prototype ? gr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const z = r.createElement("template");
    z.content && z.content.ownerDocument && (r = z.content.ownerDocument);
  }
  let J, E = "", w, fe = !1, Y = 0;
  const be = function() {
    if (Y > 0)
      throw Zn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, le = function(y) {
    be(), Y++;
    try {
      return J.createHTML(y);
    } finally {
      Y--;
    }
  }, B = function(y) {
    be(), Y++;
    try {
      return J.createScriptURL(y);
    } finally {
      Y--;
    }
  }, W = function() {
    return fe || (w = GP(f, i), fe = !0), w;
  }, H = r, Q = H.implementation, ue = H.createNodeIterator, te = H.createDocumentFragment, Fe = H.getElementsByTagName, G = n.importNode;
  let _ = rh();
  t.isSupported = typeof Cb == "function" && typeof k == "function" && Q && Q.createHTMLDocument !== void 0;
  const Z = qP, ie = LP, Ke = DP, Qe = UP, dt = KP, hr = FP, re = zP, Et = jP;
  let Ro = Zp, Ae = null;
  const Qr = Ce({}, [...Jp, ...Bc, ...jc, ...Vc, ...Yp]);
  let ae = null;
  const jt = Ce({}, [...Xp, ...Wc, ...Qp, ...zo]);
  let _e = Object.seal(Wi(null, {
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
  })), kn = null, xn = null;
  const Nr = Object.seal(Wi(null, {
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
  let Es = !0, Zr = !0, Hn = !1, $o = !0, It = !1, qt = !0, bt = !1, Tn = !1, vn = null, $i = null, Ii = !1, Or = !1, qi = !1, Gn = !1, $ = !0, F = !1;
  const j = "user-content-";
  let oe = !0, Ne = !1, ke = {}, Me = null;
  const rt = Ce({}, [
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
  let Rr = null;
  const Lt = Ce({}, ["audio", "video", "img", "source", "image", "track"]);
  let Xt = null;
  const $r = Ce({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Jn = "http://www.w3.org/1998/Math/MathML", Io = "http://www.w3.org/2000/svg", Ir = "http://www.w3.org/1999/xhtml";
  let Li = Ir, yc = !1, bc = null;
  const jx = Ce({}, [Jn, Io, Ir], zc), hd = pt(["mi", "mo", "mn", "ms", "mtext"]);
  let kc = Ce({}, hd);
  const gd = pt(["annotation-xml"]);
  let xc = Ce({}, gd);
  const Vx = Ce({}, ["title", "style", "font", "a", "script"]);
  let As = null;
  const Wx = ["application/xhtml+xml", "text/html"], Hx = "text/html";
  let He = null, Di = null;
  const Gx = r.createElement("form"), md = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Tc = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Di && Di === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = kt(y), As = // eslint-disable-next-line unicorn/prefer-includes
    Wx.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Hx : y.PARSER_MEDIA_TYPE, He = As === "application/xhtml+xml" ? zc : Ks, Ae = _n(y, "ALLOWED_TAGS", Qr, {
      transform: He
    }), ae = _n(y, "ALLOWED_ATTR", jt, {
      transform: He
    }), bc = _n(y, "ALLOWED_NAMESPACES", jx, {
      transform: zc
    }), Xt = _n(y, "ADD_URI_SAFE_ATTR", $r, {
      transform: He,
      base: $r
    }), Rr = _n(y, "ADD_DATA_URI_TAGS", Lt, {
      transform: He,
      base: Lt
    }), Me = _n(y, "FORBID_CONTENTS", rt, {
      transform: He
    }), kn = _n(y, "FORBID_TAGS", kt({}), {
      transform: He
    }), xn = _n(y, "FORBID_ATTR", kt({}), {
      transform: He
    }), ke = at(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? kt(y.USE_PROFILES) : y.USE_PROFILES : !1, Es = y.ALLOW_ARIA_ATTR !== !1, Zr = y.ALLOW_DATA_ATTR !== !1, Hn = y.ALLOW_UNKNOWN_PROTOCOLS || !1, $o = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, It = y.SAFE_FOR_TEMPLATES || !1, qt = y.SAFE_FOR_XML !== !1, bt = y.WHOLE_DOCUMENT || !1, Or = y.RETURN_DOM || !1, qi = y.RETURN_DOM_FRAGMENT || !1, Gn = y.RETURN_TRUSTED_TYPE || !1, Ii = y.FORCE_BODY || !1, $ = y.SANITIZE_DOM !== !1, F = y.SANITIZE_NAMED_PROPS || !1, oe = y.KEEP_CONTENT !== !1, Ne = y.IN_PLACE || !1, Ro = RP(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : Zp, Li = typeof y.NAMESPACE == "string" ? y.NAMESPACE : Ir, kc = at(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? kt(y.MATHML_TEXT_INTEGRATION_POINTS) : Ce({}, hd), xc = at(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? kt(y.HTML_INTEGRATION_POINTS) : Ce({}, gd);
    const v = at(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? kt(y.CUSTOM_ELEMENT_HANDLING) : Wi(null);
    if (_e = Wi(null), at(v, "tagNameCheck") && md(v.tagNameCheck) && (_e.tagNameCheck = v.tagNameCheck), at(v, "attributeNameCheck") && md(v.attributeNameCheck) && (_e.attributeNameCheck = v.attributeNameCheck), at(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (_e.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), yt(_e), It && (Zr = !1), qi && (Or = !0), ke && (Ae = Ce({}, Yp), ae = Wi(null), ke.html === !0 && (Ce(Ae, Jp), Ce(ae, Xp)), ke.svg === !0 && (Ce(Ae, Bc), Ce(ae, Wc), Ce(ae, zo)), ke.svgFilters === !0 && (Ce(Ae, jc), Ce(ae, Wc), Ce(ae, zo)), ke.mathMl === !0 && (Ce(Ae, Vc), Ce(ae, Qp), Ce(ae, zo))), Nr.tagCheck = null, Nr.attributeCheck = null, at(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? Nr.tagCheck = y.ADD_TAGS : An(y.ADD_TAGS) && (Ae === Qr && (Ae = kt(Ae)), Ce(Ae, y.ADD_TAGS, He))), at(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? Nr.attributeCheck = y.ADD_ATTR : An(y.ADD_ATTR) && (ae === jt && (ae = kt(ae)), Ce(ae, y.ADD_ATTR, He))), at(y, "ADD_URI_SAFE_ATTR") && An(y.ADD_URI_SAFE_ATTR) && Ce(Xt, y.ADD_URI_SAFE_ATTR, He), at(y, "FORBID_CONTENTS") && An(y.FORBID_CONTENTS) && (Me === rt && (Me = kt(Me)), Ce(Me, y.FORBID_CONTENTS, He)), at(y, "ADD_FORBID_CONTENTS") && An(y.ADD_FORBID_CONTENTS) && (Me === rt && (Me = kt(Me)), Ce(Me, y.ADD_FORBID_CONTENTS, He)), oe && (Ae["#text"] = !0), bt && Ce(Ae, ["html", "head", "body"]), Ae.table && (Ce(Ae, ["tbody"]), delete kn.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Zn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Zn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const L = J;
      J = y.TRUSTED_TYPES_POLICY;
      try {
        E = le("");
      } catch (X) {
        throw J = L, X;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (J = void 0, E = "") : (J === void 0 && (J = W()), J && typeof E == "string" && (E = le("")));
    pt && pt(y), Di = y;
  }, yd = Ce({}, [...Bc, ...jc, ...$P]), bd = Ce({}, [...Vc, ...IP]), Jx = function(y, v, L) {
    return v.namespaceURI === Ir ? y === "svg" : v.namespaceURI === Jn ? y === "svg" && (L === "annotation-xml" || kc[L]) : !!yd[y];
  }, Yx = function(y, v, L) {
    return v.namespaceURI === Ir ? y === "math" : v.namespaceURI === Io ? y === "math" && xc[L] : !!bd[y];
  }, Xx = function(y, v, L) {
    return v.namespaceURI === Io && !xc[L] || v.namespaceURI === Jn && !kc[L] ? !1 : !bd[y] && (Vx[y] || !yd[y]);
  }, Qx = function(y) {
    let v = k(y);
    (!v || !v.tagName) && (v = {
      namespaceURI: Li,
      tagName: "template"
    });
    const L = Ks(y.tagName), X = Ks(v.tagName);
    return bc[y.namespaceURI] ? y.namespaceURI === Io ? Jx(L, v, X) : y.namespaceURI === Jn ? Yx(L, v, X) : y.namespaceURI === Ir ? Xx(L, v, X) : !!(As === "application/xhtml+xml" && bc[y.namespaceURI]) : !1;
  }, Cn = function(y) {
    Bi(t.removed, {
      element: y
    });
    try {
      k(y).removeChild(y);
    } catch {
      if (h(y), !k(y))
        throw Zn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, qo = function(y) {
    Ps(y);
    const v = m(y);
    if (v) {
      const X = [];
      zi(v, (ne) => {
        Bi(X, ne);
      }), zi(X, (ne) => {
        try {
          h(ne);
        } catch {
        }
      });
    }
    const L = M(y);
    if (L)
      for (let X = L.length - 1; X >= 0; --X) {
        const ne = L[X], me = ne && ne.name;
        if (typeof me == "string")
          try {
            y.removeAttribute(me);
          } catch {
          }
      }
  }, Yn = function(y, v) {
    try {
      Bi(t.removed, {
        attribute: v.getAttributeNode(y),
        from: v
      });
    } catch {
      Bi(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(y), y === "is")
      if (Or || qi)
        try {
          Cn(v);
        } catch {
        }
      else
        try {
          v.setAttribute(y, "");
        } catch {
        }
  }, Zx = function(y) {
    const v = M(y);
    if (v)
      for (let L = v.length - 1; L >= 0; --L) {
        const X = v[L], ne = X && X.name;
        if (!(typeof ne != "string" || ae[He(ne)]))
          try {
            y.removeAttribute(ne);
          } catch {
          }
      }
  }, Ps = function(y) {
    const v = [y];
    for (; v.length > 0; ) {
      const L = v.pop();
      (I ? I(L) : L.nodeType) === Vt.element && Zx(L);
      const ne = m(L);
      if (ne)
        for (let me = ne.length - 1; me >= 0; --me)
          v.push(ne[me]);
    }
  }, eT = function(y) {
    if (!qt)
      return;
    const v = [y];
    for (; v.length > 0; ) {
      const L = v.pop(), X = I ? I(L) : L.nodeType;
      if (X === Vt.processingInstruction || X === Vt.comment && ot(th, L.data)) {
        try {
          h(L);
        } catch {
        }
        continue;
      }
      if (X === Vt.element) {
        const me = L, Ie = He(A ? A(L) : L.nodeName);
        try {
          me.hasAttribute && me.hasAttribute("patchsrc") && me.removeAttribute("patchsrc"), me.hasAttribute && me.hasAttribute("for") && Ie !== "label" && Ie !== "output" && me.removeAttribute("for");
        } catch {
        }
      }
      const ne = m(L);
      if (ne)
        for (let me = ne.length - 1; me >= 0; --me)
          v.push(ne[me]);
    }
  }, kd = function(y) {
    let v = null, L = null;
    if (Ii)
      y = "<remove></remove>" + y;
    else {
      const me = Vp(y, /^[\r\n\t ]+/);
      L = me && me[0];
    }
    As === "application/xhtml+xml" && Li === Ir && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const X = J ? le(y) : y;
    if (Li === Ir)
      try {
        v = new u().parseFromString(X, As);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = Q.createDocument(Li, "template", null);
      try {
        v.documentElement.innerHTML = yc ? E : X;
      } catch {
      }
    }
    const ne = v.body || v.documentElement;
    return y && L && ne.insertBefore(r.createTextNode(L), ne.childNodes[0] || null), Li === Ir ? Fe.call(v, bt ? "html" : "body")[0] : bt ? v.documentElement : ne;
  }, xd = function(y) {
    const v = K ? K(y) : y.ownerDocument;
    return ue.call(
      v || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Lo = function(y) {
    return y = Rs(y, Z, " "), y = Rs(y, ie, " "), y = Rs(y, Ke, " "), y;
  }, vc = function(y) {
    var v;
    y.normalize();
    const L = K ? K(y) : y.ownerDocument, X = ue.call(
      L || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ne = X.nextNode();
    for (; ne; )
      ne.data = Lo(ne.data), ne = X.nextNode();
    const me = (v = y.querySelectorAll) === null || v === void 0 ? void 0 : v.call(y, "template");
    me && zi(me, (Ie) => {
      Ui(Ie.content) && vc(Ie.content);
    });
  }, Do = function(y) {
    const v = A ? A(y) : null;
    return typeof v != "string" || He(v) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== M(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== I(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Ui = function(y) {
    if (!I || typeof y != "object" || y === null)
      return !1;
    try {
      return I(y) === Vt.documentFragment;
    } catch {
      return !1;
    }
  }, ws = function(y) {
    if (!I || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof I(y) == "number";
    } catch {
      return !1;
    }
  };
  function qr(z, y, v) {
    z.length !== 0 && zi(z, (L) => {
      L.call(t, y, v, Di);
    });
  }
  const tT = function(y, v) {
    return !!(qt && y.hasChildNodes() && !ws(y.firstElementChild) && ot(eh, y.textContent) && ot(eh, y.innerHTML) || qt && y.namespaceURI === Ir && v === "style" && ws(y.firstElementChild) || y.nodeType === Vt.processingInstruction || qt && y.nodeType === Vt.comment && ot(th, y.data));
  }, rT = function(y, v, L) {
    if (!kn[v] && Sd(v) && (_e.tagNameCheck instanceof RegExp && ot(_e.tagNameCheck, v) || _e.tagNameCheck instanceof Function && _e.tagNameCheck(v)))
      return !1;
    if (oe && !Me[v]) {
      const X = k(y), ne = m(y);
      if (ne && X) {
        const me = ne.length;
        for (let Ie = me - 1; Ie >= 0; --Ie) {
          const Ge = y === L ? p(ne[Ie], !0) : ne[Ie];
          X.insertBefore(Ge, g(y));
        }
      }
    }
    return Cn(y), !0;
  }, Td = function(y, v, L, X) {
    return y.length === 0 ? v : v === L || v === X ? kt(v) : v;
  }, vd = function(y, v) {
    if (qr(_.beforeSanitizeElements, y, null), y !== v && k(y) === null)
      return Ne && Ps(y), !0;
    if (Do(y))
      return Cn(y), !0;
    const L = He(A ? A(y) : y.nodeName);
    if (Ae = Td(_.uponSanitizeElement, Ae, Qr, vn), qr(_.uponSanitizeElement, y, {
      tagName: L,
      allowedTags: Ae
    }), y !== v && k(y) === null)
      return Ne && Ps(y), !0;
    if (tT(y, L))
      return Cn(y), !0;
    if (kn[L] || !(Nr.tagCheck instanceof Function && Nr.tagCheck(L)) && !Ae[L]) {
      const ne = rT(y, L, v);
      return ne === !1 && qr(_.afterSanitizeElements, y, null), ne;
    }
    if ((I ? I(y) : y.nodeType) === Vt.element && !Qx(y) || (L === "noscript" || L === "noembed" || L === "noframes") && ot(VP, y.innerHTML))
      return Cn(y), !0;
    if (It && y.nodeType === Vt.text) {
      const ne = Lo(y.textContent);
      y.textContent !== ne && (Bi(t.removed, {
        element: y.cloneNode()
      }), y.textContent = ne);
    }
    return qr(_.afterSanitizeElements, y, null), !1;
  }, Cd = function(y, v, L) {
    if (xn[v] || qt && v === "patchsrc" || qt && v === "for" && y !== "label" && y !== "output" || $ && (v === "id" || v === "name") && (L in r || L in Gx))
      return !1;
    const X = ae[v] || Nr.attributeCheck instanceof Function && Nr.attributeCheck(v, y);
    if (!(Zr && ot(Qe, v))) {
      if (!(Es && ot(dt, v))) {
        if (X) {
          if (!Xt[v]) {
            if (!ot(Ro, Rs(L, re, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && y !== "script" && Wp(L, "data:") === 0 && Rr[y])) {
                if (!(Hn && !ot(hr, Rs(L, re, "")))) {
                  if (L)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Sd(y) && (_e.tagNameCheck instanceof RegExp && ot(_e.tagNameCheck, y) || _e.tagNameCheck instanceof Function && _e.tagNameCheck(y)) && (_e.attributeNameCheck instanceof RegExp && ot(_e.attributeNameCheck, v) || _e.attributeNameCheck instanceof Function && _e.attributeNameCheck(v, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && _e.allowCustomizedBuiltInElements && (_e.tagNameCheck instanceof RegExp && ot(_e.tagNameCheck, L) || _e.tagNameCheck instanceof Function && _e.tagNameCheck(L)))
        ) return !1;
      }
    }
    return !0;
  }, nT = Ce({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Sd = function(y) {
    return !nT[Ks(y)] && ot(Et, y);
  }, iT = function(y, v, L, X) {
    if (J && typeof f == "object" && typeof f.getAttributeType == "function" && !L)
      switch (f.getAttributeType(y, v)) {
        case "TrustedHTML":
          return le(X);
        case "TrustedScriptURL":
          return B(X);
      }
    return X;
  }, sT = function(y, v, L, X) {
    try {
      L ? y.setAttributeNS(L, v, X) : y.setAttribute(v, X), Do(y) ? Cn(y) : jp(t.removed);
    } catch {
      Yn(v, y);
    }
  }, _d = function(y) {
    qr(_.beforeSanitizeAttributes, y, null);
    const v = y.attributes;
    if (!v || Do(y))
      return;
    ae = Td(_.uponSanitizeAttribute, ae, jt, $i);
    const L = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ae,
      forceKeepAttr: void 0
    };
    let X = v.length;
    const ne = He(y.nodeName);
    for (; X--; ) {
      const me = v[X], Ie = me.name, Ge = me.namespaceURI, Dt = me.value, Ut = He(Ie), Sc = Dt;
      let At = Ie === "value" ? Sc : EP(Sc);
      if (L.attrName = Ut, L.attrValue = At, L.keepAttr = !0, L.forceKeepAttr = void 0, qr(_.uponSanitizeAttribute, y, L), At = L.attrValue, F && (Ut === "id" || Ut === "name") && Wp(At, j) !== 0 && (Yn(Ie, y), At = j + At), qt && ot(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, At)) {
        Yn(Ie, y);
        continue;
      }
      if (Ut === "attributename" && Vp(At, "href")) {
        Yn(Ie, y);
        continue;
      }
      if (!L.forceKeepAttr) {
        if (!L.keepAttr) {
          Yn(Ie, y);
          continue;
        }
        if (!$o && ot(WP, At)) {
          Yn(Ie, y);
          continue;
        }
        if (It && (At = Lo(At)), !Cd(ne, Ut, At)) {
          Yn(Ie, y);
          continue;
        }
        At = iT(ne, Ut, Ge, At), At !== Sc && sT(y, Ie, Ge, At);
      }
    }
    qr(_.afterSanitizeAttributes, y, null);
  }, Uo = function(y) {
    let v = null;
    const L = xd(y);
    for (qr(_.beforeSanitizeShadowDOM, y, null); v = L.nextNode(); )
      if (qr(_.uponSanitizeShadowNode, v, null), vd(v, y), _d(v), Ui(v.content) && Uo(v.content), (I ? I(v) : v.nodeType) === Vt.element) {
        const ne = T(v);
        Ui(ne) && (Cc(ne), Uo(ne));
      }
    qr(_.afterSanitizeShadowDOM, y, null);
  }, Cc = function(y) {
    const v = [{
      node: y,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const L = v.pop();
      if (L.shadow) {
        Uo(L.shadow);
        continue;
      }
      const X = L.node, me = (I ? I(X) : X.nodeType) === Vt.element, Ie = m(X);
      if (Ie)
        for (let Ge = Ie.length - 1; Ge >= 0; --Ge)
          v.push({
            node: Ie[Ge],
            shadow: null
          });
      if (me) {
        const Ge = A ? A(X) : null;
        if (typeof Ge == "string" && He(Ge) === "template") {
          const Dt = X.content;
          Ui(Dt) && v.push({
            node: Dt,
            shadow: null
          });
        }
      }
      if (me) {
        const Ge = T(X);
        Ui(Ge) && v.push({
          node: null,
          shadow: Ge
        }, {
          node: Ge,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(z) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, L = null, X = null, ne = null;
    if (yc = !z, yc && (z = "<!-->"), typeof z != "string" && !ws(z) && (z = OP(z), typeof z != "string"))
      throw Zn("dirty is not a string, aborting");
    if (!t.isSupported)
      return z;
    Tn ? (Ae = vn, ae = $i) : Tc(y), (_.uponSanitizeElement.length > 0 || _.uponSanitizeAttribute.length > 0) && (Ae = kt(Ae)), _.uponSanitizeAttribute.length > 0 && (ae = kt(ae)), t.removed = [];
    const me = Ne && typeof z != "string" && ws(z);
    if (me) {
      eT(z);
      const Dt = A ? A(z) : z.nodeName;
      if (typeof Dt == "string") {
        const Ut = He(Dt);
        if (!Ae[Ut] || kn[Ut])
          throw qo(z), Zn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Do(z))
        throw qo(z), Zn("root node is clobbered and cannot be sanitized in-place");
      try {
        Cc(z);
      } catch (Ut) {
        throw qo(z), Ut;
      }
    } else if (ws(z))
      v = kd("<!---->"), L = v.ownerDocument.importNode(z, !0), L.nodeType === Vt.element && L.nodeName === "BODY" || L.nodeName === "HTML" ? v = L : v.appendChild(L), Cc(L);
    else {
      if (!Or && !It && !bt && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return J && Gn ? le(z) : z;
      if (v = kd(z), !v)
        return Or ? null : Gn ? E : "";
    }
    v && Ii && Cn(v.firstChild);
    const Ie = me ? z : v;
    try {
      const Dt = xd(Ie);
      for (; X = Dt.nextNode(); )
        vd(X, Ie), _d(X), Ui(X.content) && Uo(X.content);
    } catch (Dt) {
      throw me && (qo(z), zi(t.removed, (Ut) => {
        Ut.element && Ps(Ut.element);
      })), Dt;
    }
    if (me)
      return zi(t.removed, (Dt) => {
        Dt.element && Ps(Dt.element);
      }), It && vc(z), z;
    if (Or) {
      if (It && vc(v), qi)
        for (ne = te.call(v.ownerDocument); v.firstChild; )
          ne.appendChild(v.firstChild);
      else
        ne = v;
      return (ae.shadowroot || ae.shadowrootmode) && (ne = G.call(n, ne, !0)), ne;
    }
    let Ge = bt ? v.outerHTML : v.innerHTML;
    return bt && Ae["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && ot(BP, v.ownerDocument.doctype.name) && (Ge = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + Ge), It && (Ge = Lo(Ge)), J && Gn ? le(Ge) : Ge;
  }, t.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tc(z), Tn = !0, vn = Ae, $i = ae;
  }, t.clearConfig = function() {
    Di = null, Tn = !1, vn = null, $i = null, J = w, E = "";
  }, t.isValidAttribute = function(z, y, v) {
    Di || Tc({});
    const L = He(z), X = He(y);
    return Cd(L, X, v);
  }, t.addHook = function(z, y) {
    typeof y == "function" && at(_, z) && Bi(_[z], y);
  }, t.removeHook = function(z, y) {
    if (at(_, z)) {
      if (y !== void 0) {
        const v = _P(_[z], y);
        return v === -1 ? void 0 : MP(_[z], v, 1)[0];
      }
      return jp(_[z]);
    }
  }, t.removeHooks = function(z) {
    at(_, z) && (_[z] = []);
  }, t.removeAllHooks = function() {
    _ = rh();
  }, t;
}
var JP = _b();
function YP({ structureProtectionMode: e = "off" }) {
  const [t] = ye(), r = se(void 0), [n, i] = Te(void 0), s = xe((o) => {
    r.current = o, i(o);
  }, []);
  return V(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = mb(p);
      if (!h)
        return !1;
      const g = R();
      return e === "protected" ? g && xb(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = R(), m = r.current;
      if (m && g && Fp(g, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const T = ee(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (T) {
            const M = T.getParent(), I = T.getPreviousSibling(), A = T.getNextSibling();
            T.remove(), I ? Tb(I) : A && C(A) ? A.select(0, 0) : M?.selectStart();
          }
        } else m.kind === "selection" ? P(g) && g.removeText() : Ue(T) && gP(T);
        return !0;
      }
      if (!g)
        return !1;
      const k = hP(g, p);
      if (k) {
        if (k.kind === "verse") {
          const T = ug();
          T.add(k.node.getKey()), cn(T);
        } else {
          const T = To();
          T.anchor.set(k.node.getKey(), 0, "element"), T.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), cn(T);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), h.preventDefault(), !0;
      }
      if (P(g) && !g.isCollapsed() && Mf(g)) {
        const T = g.getNodes().filter(Se).map((A) => A.getKey()), { anchor: M, focus: I } = g;
        return s({
          kind: "selection",
          intent: p,
          key: T[0],
          anchor: { key: M.key, offset: M.offset, type: M.type },
          focus: { key: I.key, offset: I.offset, type: I.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = R();
      return !h || !rs(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = JP.sanitize(p), m = new DOMParser().parseFromString(g, "text/html"), k = mP(GT(t, m)), T = R();
      return P(T) && T.insertNodes(k), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = R();
      return h && rs(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, f = (p) => {
      if (e !== "protected")
        return !1;
      const h = R();
      return h && rs(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, d = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Fp(R(), p) || s(void 0);
      });
    };
    return et(
      t.registerCommand(mn, o, Ve),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(pi, c, rr),
      t.registerCommand(rn, u, Ve),
      t.registerCommand(AT, c, Ve),
      t.registerCommand(mu, f, Ve),
      t.registerCommand(gu, c, Ve),
      t.registerUpdateListener(d)
    );
  }, [t, e, s]), V(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const qR = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function XP({ textDirection: e }) {
  const [t] = ye();
  return QP(t, e), null;
}
function QP(e, t) {
  V(() => (nh(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && nh(e, t);
  })), [e, t]);
}
function nh(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function ZP() {
  const [e] = ye();
  return e0(e), null;
}
function e0(e) {
  V(() => {
    if (!e.hasNodes([we, $t, ze, We, gt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return et(
      e.registerNodeTransform(We, t0),
      e.registerNodeTransform(We, (t) => r0(t, e)),
      e.registerNodeTransform(gt, ih),
      e.registerNodeTransform($t, ih),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(gt, (t) => {
        fo(fn("va"), t), fo(fn("vp"), t);
      })
    );
  }, [e]);
}
function t0(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || U(r) || D(n) || D(r) || de(n) || de(r) || De(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  De(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ce(e, ge) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Le(n))
    return;
  if (Se(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  Se(r) && tf(e);
}
function r0(e, t) {
  const r = e.getParent();
  !De(r) || !e.isAttached() || PT(Go) || vl(t, e.getKey()) && !vl(t, r.getKey()) && r.insertAfter(e);
}
function ih(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; de(t); )
    t = t.getLastChild();
  (D(t) || C(t) && de(t.getParent()) && !n0(t)) && e.insertBefore(Oe(" "));
}
function n0(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith(q);
}
function Ef(e) {
  if (!U(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Du(n)) ? void 0 : e;
}
function i0(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (O(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function s0() {
  const e = R();
  if (!(!P(e) || !e.isCollapsed()))
    return Ef(i0(e.anchor));
}
function o0(e) {
  const t = R();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Mb(e.target)), r ? Ef(lt(r, U)) : void 0;
}
function Mb(e) {
  const t = wT(e)?.anchorNode;
  if (lg(t))
    return _i(t) ?? void 0;
}
function a0(e) {
  if (R())
    return;
  const t = Mb(e);
  return t ? Ef(lt(t, U)) : void 0;
}
function c0() {
  const [e] = ye(), t = pb(s0);
  return V(() => {
    const r = (n) => {
      t(n) && Kr(to);
    };
    return et(e.registerCommand(xr, () => {
      const n = a0(e.getRootElement());
      return n && r(n), !1;
    }, di), e.registerCommand(Fa, (n) => {
      const i = o0(n);
      return i && r(i), !1;
    }, di));
  }, [e, t]), null;
}
function l0({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = CE({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return S(vE, { trigger: e, items: i });
}
function u0({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = je(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? S(p0, { trigger: e, harness: i }) : S(l0, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const f0 = [" ", "*"];
function d0(e, t) {
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
function p0({ trigger: e, harness: t }) {
  const [r] = ye(), [n, i] = Te(void 0), s = se({ query: "", options: [] }), o = se(0), a = xe((d, p, h) => {
    const g = p.find((m) => m.kind === "note" && m.marker === d);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const m = R();
      P(m) && m.insertText(`${e}${d}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  V(() => et(r.registerCommand(mn, (d) => {
    if (n) {
      if ((d.key === "Enter" || d.key === "Tab") && s.current.options.length === 0)
        return d.preventDefault(), d.stopPropagation(), !0;
      if (d.key === "*" && n.trigger === "backslash")
        return d.preventDefault(), d.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (d.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        d.preventDefault(), d.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), NT(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const m = R();
          P(m) && m.insertText(e);
        }), !0);
      }
      if (d.key !== " " || n.trigger !== "backslash")
        return !1;
      d.preventDefault(), d.stopPropagation(), i(void 0);
      const h = s.current.query;
      if (n.hasTextSelection) {
        const g = n.items.find((m) => m.marker === h);
        return g && t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(h, n.items, !0), !0;
    }
    if (d.key !== e)
      return !1;
    const p = t.getContext();
    return p ? (d.preventDefault(), s.current = { query: "", options: [] }, o.current += 1, i({
      trigger: "backslash",
      hasTextSelection: p.hasTextSelection,
      items: t.getItems(p),
      session: o.current
    }), !0) : !1;
  }, Ve), r.registerCommand(fg, (d) => {
    if (n || d === null || d.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (d.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Zi)), [r, e, t, n, a]);
  const c = xe(() => i(void 0), []), l = xe((d, p) => {
    s.current = { query: d, options: p };
  }, []), u = xe((d) => {
    const { markerMenuItem: p, applyOpts: h } = d;
    t.apply(p, h);
  }, [t]), f = je(() => n?.items.map((d) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    d0(d, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && S(Vy, { isOpen: !0, children: ({ placement: d }) => S(
    Gy,
    { options: f ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: d === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? f0 : void 0 },
    n.session
  ) });
}
function Eb(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (r) => q.repeat(r.length));
}
function h0(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
let Ea;
function g0(e) {
  e && (Ea = e);
}
function m0(e) {
  return St(e);
}
function y0(e, t) {
  return e.isEmpty() ? ag : Ab(e.toJSON(), t);
}
function Ab(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Va(r[0]) && (!r[0].children || r[0].children.length === 0))
    return ag;
  if (r.some(d_)) {
    Ea?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = wb(r), i = mr(n, t);
  return i ? { type: sn, version: nn, content: i } : void 0;
}
function b0(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Be({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function k0(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Be({
    type: Jt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function x0(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Im(r, a, c), Be({
    type: Jt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function T0(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Im(t, o, a), Be({
    type: gt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function v0(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Be({
    type: r,
    marker: n === "" ? void 0 : n,
    ...i,
    content: t
  });
}
function C0(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Be({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function S0(e, t) {
  const { unknownAttributes: r } = e;
  return Be({ type: am, ...r, content: t });
}
function _0(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Be({ type: iy, marker: r, ...n, content: t });
}
function M0(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Be({
    type: ay,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function E0(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Be({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Hi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Be({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Hg({ sid: n, eid: i, ...s }, o)
  });
}
function A0(e) {
  return e.text;
}
function P0(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Be({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function w0(e) {
  const { marker: t } = e;
  return {
    type: ha,
    marker: t === "" ? void 0 : t
  };
}
function sh(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function N0(e, t, r, n, i) {
  const s = Tr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Hi({
      type: s,
      marker: es,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Hi({
      type: s,
      marker: hi,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Hi({
      type: s,
      marker: hi
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Hi({
      type: s,
      marker: es
    });
    i.push(l);
  }
  (!n || !Rn(n)) && t.forEach((l) => {
    const u = Hi({
      type: s,
      marker: es,
      eid: l
    });
    i.push(u);
  });
}
function Ll(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && Rn(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return !bs(i) || i.markerSyntax !== "opening" ? !1 : i.marker === n.marker ? !0 : n.children.some(
    (s) => Bg(s) && s.marker === i.marker
  );
}
function O0(e, t, r, n, i) {
  const s = e[t];
  return !dn(s) || s.text !== q || !(i || Rn(e[t - 1]) || Rn(e[t + 1])) || s[an]?.textType !== void 0 || Ll(e, t, r, n) ? !1 : !n || Pb(n.children, s);
}
function Pb(e, t) {
  return e.some((r) => r === t ? !1 : Rn(r) ? Pb(r.children, t) : bs(r) ? !1 : dn(r) ? r[an]?.textType === void 0 && r.text !== "" && r.text !== q && !wi(r.text) : "children" in r && r.type !== Jr.getType());
}
function R0(e) {
  let t = e;
  for (; Rn(t); ) t = t.children[0];
  return t;
}
function $0(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!bs(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = R0(e[r]);
  if (dn(n) && n.text === Ht(t))
    return n;
}
function mr(e, t, r, n, i, s = !1) {
  const o = [];
  let a, c = [];
  return e.forEach((l, u) => {
    const f = l, d = l, p = l, h = l, g = l, m = l, k = l, T = l;
    switch (l.type) {
      case or.getType():
        o.push(
          b0(
            f,
            mr(f.children, t)
          )
        );
        break;
      case dr.getType():
        o.push(k0(l));
        break;
      case Jt.getType():
        o.push(
          x0(
            d,
            mr(d.children, t)
          )
        );
        break;
      case $t.getType():
      case gt.getType():
        o.push(T0(l));
        break;
      case we.getType():
        o.push(
          v0(
            p,
            mr(p.children, t, void 0, p)
          )
        );
        break;
      case ft.getType():
        o.push(
          C0(
            h,
            mr(h.children, t)
          )
        );
        break;
      case Ai.getType():
        o.push(
          S0(
            l,
            mr(l.children, t)
          )
        );
        break;
      case Ni.getType():
        o.push(
          _0(
            l,
            mr(l.children, t)
          )
        );
        break;
      case Oi.getType():
        o.push(
          M0(
            l,
            mr(l.children, t)
          )
        );
        break;
      case ze.getType():
        o.push(
          E0(
            g,
            mr(
              g.children,
              t,
              $0(g.children, g.caller)
            )
          )
        );
        break;
      case Jr.getType():
      case Pr.getType():
      case sr.getType():
      case dg.getType():
      case fr.getType():
        break;
      case Ze.getType():
        if (a = mr(
          k.children,
          t,
          r,
          n,
          u > 0 ? e[u - 1] : i,
          !0
        ), a) {
          const M = k.typedIDs[Kt];
          if (M) {
            const I = e[u + 1];
            N0(a, M, c, I, o), c = I && Rn(I) ? M : [];
          } else {
            const I = a.shift();
            I && (typeof I == "string" ? sh(o, I) : o.push(I)), a.length > 0 && o.push(...a);
          }
        }
        break;
      case Tr.getType():
        o.push(Hi(l));
        break;
      case We.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !wi(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
        // text node stands in for THREE presentation shapes — the tagged separators the
        // forward adaptor builds, the empty-char placeholder, and an orphaned structural
        // prefix a split or deletion strands in its own (untagged) node. The one content shape
        // told apart is a no-break space an annotation mark split off content text, inside the
        // mark or beside it (`isNbspContentAtMark`). Any other CONTENT string which is exactly
        // one NBSP is dropped too; fixing that needs a per-context story for the untagged
        // shapes, not a tag test alone. The forward side keeps its own output clear of the
        // ambiguity: `createPara` leaves a spaces-only paragraph-leading string plain instead
        // of rewriting a lone " " into exactly this shape, so in standard view only an
        // authored lone-NBSP data string (displayed as `~`, never as a bare NBSP node) is at
        // stake — leaving the drop to genuinely structural nodes.
        (m.text !== q || O0(e, u, i, n, s)) && // The untagged NBSP-`|` form of milestone attribute text. Text right after a char span's
        // opening glyph is never that: its NBSP is the span's separator, and a `|…` after it is
        // content the attribute grammar left literal (`\w |lemma="g"grace\w*` — Paratext 9
        // parses attributes only when the whole `|…` tail before the closer matches), so it is
        // kept like any other content text.
        !(m.text.startsWith(xu) && !Ll(e, u, i, n)) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[an]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        l !== r) {
          let M = A0(m);
          t?.markerMode === "editable" && Ll(e, u, i, n) && M.startsWith(q) && (M = M.slice(1)), m0(t) && (M = h0(iS(M))), sh(o, M);
        }
        break;
      case Ei.getType():
        o.push(
          P0(
            T,
            mr(T.children, t)
          )
        );
        break;
      case Yr.getType():
        o.push(w0(l));
        break;
      case xs.getType():
        Ea?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Ea?.error(`Unexpected node type '${l.type}'!`);
    }
  }), o && o.length > 0 ? o : void 0;
}
function wb(e) {
  const t = e.findIndex((r) => Va(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = wb(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Gi = {
  initialize: g0,
  deserializeEditorState: y0
}, I0 = /^sd\d*$/, q0 = /* @__PURE__ */ new Set([
  ...Object.entries(nl).filter(
    ([e, t]) => t.category === x.TitlesHeadings && t.type === b.Paragraph && !I0.test(e)
  ).map(([e]) => e),
  "qa"
]);
function L0(e, t) {
  const r = [];
  let n;
  for (const [i, s] of e.entries()) {
    if (om(s) || Nm(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (!fS(s)) {
      t && Aa(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(s) : r.push(s);
      continue;
    }
    if (Lu(s) && q0.has(s.marker) && !Aa(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (s.children.length === 0) {
      n ? n.children.push(s) : r.push(s);
      continue;
    }
    Nb(s.children, t).forEach((o) => {
      const a = D0(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        n ? n.children.push(a) : r.push(a);
        return;
      }
      n = U0(o.verse), r.push(n), a && n.children.push(a);
    });
  }
  return r;
}
function Nb(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Ob(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Rn(i)) {
      const s = Nb(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(oh(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [oh(i, c.nodes)] });
      });
      return;
    }
    t && Aa(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function oh(e, t) {
  return { ...e, children: t };
}
function Ob(e) {
  return by(e) && e.number !== "";
}
function Aa(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Ob(r) || Aa(r)) : !1;
}
function D0(e, t, r) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [an]: { ...e[an], [hy.key]: r }
    };
}
function U0(e) {
  return {
    type: ya,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: gy
  };
}
const ah = $b([]), K0 = {
  type: dg.getType(),
  version: 1
};
let Af = [], pe, Ti, Rb, Bt;
function F0(e, t) {
  Af = [], j0(e), V0(t);
}
function z0(e = 0) {
}
function B0(e, t) {
  pe = t ?? tc();
  let r;
  return e ? (e.type !== sn && Bt?.warn(`This USJ type '${e.type}' didn't match the expected type '${sn}'.`), e.version !== nn && Bt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${nn}'.`
  ), e.content.length > 0 ? (r = Fl(Mn(e.content)), ho(pe) && (r = L0(r, Bt))) : r = [ah]) : r = [ah], Rb?.(Af), {
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
function j0(e) {
  e && (Ti = e), e?.addMissingComments && (Rb = e.addMissingComments);
}
function V0(e) {
  e && (Bt = e);
}
function Pf() {
  return St(pe);
}
function W0(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function H0(e) {
  let { marker: t } = e;
  t !== oo && Bt?.warn(`Unexpected book marker '${t}'!`), t = t ?? oo;
  const { code: r } = e;
  (!r || !or.isValidBookCode(r)) && Bt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  pe?.markerMode === "editable" || pe?.markerMode === "visible" ? n.push(
    Ft("marker", $e(t) + " " + r + q)
  ) : pe?.hasGutterParaMarkers && n.push(Ft("marker", $e(t) + q, !0));
  const i = W0(e.content);
  i && n.push(Mt(Pf() ? Eb(i) : i));
  const s = Xe(e, lC);
  return Be({
    type: or.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: im
  });
}
function G0(e) {
  let { marker: t } = e;
  t !== da && Bt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? da;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Xe(e, nC);
  let a;
  pe?.markerMode === "visible" && (a = !0);
  const c = [
    Mt(nr(t, r) ?? "")
  ];
  return pe?.markerMode === "editable" && f1(i, s, c), pe?.markerMode === "editable" ? Be({
    type: Jt.getType(),
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
    version: tm
  }) : Be({
    type: dr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Mm
  });
}
function J0(e) {
  let { marker: t } = e;
  t !== fa && Bt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? fa;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (vM(pe) ?? $t).getType(), c = pe?.markerMode === "editable" ? jg : yy;
  let l, u;
  pe?.markerMode === "editable" ? l = nr(t, r) : pe?.markerMode === "visible" && (u = !0);
  const f = Xe(e, Qv);
  return Be({
    type: a,
    text: l,
    ...l === void 0 ? void 0 : { detail: 0, format: 0, mode: "normal", style: "" },
    marker: t,
    number: r ?? "",
    sid: n,
    altnumber: i,
    pubnumber: s,
    showMarker: u,
    unknownAttributes: f,
    version: c
  });
}
function Y0(e, t = [], r = !1) {
  let { marker: n } = e;
  we.isValidMarker(n, Ti?.extraValidMarkers) || Bt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (pe?.markerMode === "editable") {
    const [a] = t;
    dn(a) ? a.text = q + a.text : a && t.unshift(Mt(q));
  }
  t.length === 0 && t.push(Mt(ct)), Dl(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Xe(e, Jv);
  return s || a1(n, o, i), s || Ul(e.marker ?? "", i, !1, r), Be({
    type: we.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: zg
  });
}
function $b(e) {
  return {
    type: In.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: um
  };
}
function X0(e, t = []) {
  let { marker: r } = e;
  ft.isValidMarker(r, Ti?.extraValidMarkers) || Bt?.warn(`Unexpected para marker '${r}'!`), r = r ?? Fr;
  const n = [];
  if (Ts(pe) && (pe?.markerMode === "editable" ? n.push(
    Nt(r),
    Mt(q, Gr, "token")
  ) : (pe?.markerMode === "visible" || pe?.hasGutterParaMarkers) && n.push(
    Ft(
      "marker",
      $e(r) + q,
      pe?.hasGutterParaMarkers
    )
  )), n.push(...t), Pf()) {
    const s = n.find(
      (o) => !bs(o) && !(dn(o) && o.text === q)
    );
    dn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = Xe(e, tS);
  return Be({
    type: ft.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Pm
  });
}
function wf() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function Q0(e, t = []) {
  const r = Xe(e, uC);
  return Be({
    ...wf(),
    type: Ai.getType(),
    unknownAttributes: r,
    children: t,
    version: cm
  });
}
function Z0(e, t = []) {
  const r = Xe(e, US), n = e.marker ?? ml, i = [];
  return pe?.markerMode === "editable" ? i.push(
    Nt(n),
    Mt(q, Gr, "token")
  ) : (pe?.markerMode === "visible" || pe?.hasGutterParaMarkers) && i.push(
    Ft(
      "marker",
      $e(n) + q,
      pe?.hasGutterParaMarkers
    )
  ), i.push(...t), Be({
    ...wf(),
    type: Ni.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: sy
  });
}
function e1(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? yl, a = vm(o, i) ?? o;
  pe?.markerMode === "editable" ? s.push(
    Nt(a),
    Mt(q, Gr, "token")
  ) : (pe?.markerMode === "visible" || pe?.hasGutterParaMarkers) && s.push(
    Ft(
      "marker",
      $e(a) + q,
      pe?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Xe(
    e,
    FS
  );
  return Be({
    ...wf(),
    type: Oi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: cy
  });
}
function t1(e, t) {
  const r = yS(t);
  let n = () => {
  };
  return Ti?.noteCallerOnClick && (n = Ti.noteCallerOnClick), Be({
    type: sr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: _y
  });
}
function r1(e, t) {
  let { marker: r } = e;
  ze.isValidMarker(r, Ti?.extraValidMarkers) || Bt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Su;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : bf(pe?.noteMode), a = Xe(e, hv), c = pe?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  pe?.markerMode === "editable" ? (l = Nt(r, "opening", !1, c), s || (u = Nt(r, "closing"))) : pe?.markerMode === "visible" && (l = Ft("marker", $e(r) + " "), s || (u = Ft("marker", Je(r))));
  const f = [];
  let d;
  if (l && f.push(l), pe?.markerMode === "editable" && !o)
    d = Mt(Ht(i), void 0, c), f.push(d), u1(n, f), f.push(...t);
  else {
    const p = Mt(q, Gr, "token");
    d = t1(i, t), f.push(d, p, ...t.flatMap(n1(p)));
  }
  return u && f.push(u), Be({
    type: ze.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: f,
    direction: null,
    format: "",
    indent: 0,
    version: wg
  });
}
function n1(e) {
  return (t) => km(t) ? [t] : [t, e];
}
function i1(e) {
  let { marker: t } = e;
  (!t || !Tr.isValidMarker(t, Ti?.extraValidMarkers)) && Bt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Xe(e, Cu), s = Gg(e);
  return Be({
    type: Tr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Eg
  });
}
function ch(e, t = []) {
  return {
    type: Ze.getType(),
    typedIDs: { [Kt]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function s1(e, t) {
  const { marker: r } = e, n = e.type, i = Xe(e, sC), s = [];
  if (pe?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Ga(
      n,
      r,
      i
    );
    o && s.push(Ft("marker", o)), a && s.push(Ft("attribute", a)), s.push(...t), c && s.push(Ft("attribute", c)), l && s.push(Ft("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    dn(o) && (o.mode = "token");
  }), Be({
    type: Ei.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: nm
  });
}
function o1(e) {
  return {
    type: Yr.getType(),
    marker: e,
    text: Bs(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: pe?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Hm
  };
}
function Nt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: fr.getType(),
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
function Mt(e, t = void 0, r = "normal") {
  const n = {
    type: We.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[an] = { textType: t }), n;
}
function Ft(e, t, r = !1) {
  const n = {
    type: Pr.getType(),
    text: t,
    textType: e,
    version: bm
  };
  return r && (n[an] = { [$u.key]: !0 }), n;
}
function go(e, t) {
  return {
    type: Jr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Dg
  };
}
function Dl(e, t, r = !1) {
  pe?.markerMode === "editable" ? t.push(Nt(e, "opening", r)) : pe?.markerMode === "visible" && t.push(Ft("marker", $e(e, r)));
}
function Ul(e, t, r = !1, n = !1) {
  pe?.markerMode === "editable" ? r ? t.push(Nt("", "selfClosing")) : t.push(Nt(e, "closing", n)) : pe?.markerMode === "visible" && t.push(
    Ft(
      "marker",
      r ? Je("") : Je(e, n)
    )
  );
}
function a1(e, t, r) {
  if (pe?.markerMode !== "editable" || !t) return;
  const n = br(t, ys(e));
  n && r.push(Mt(n, "attribute"));
}
function lh(e, t) {
  if (e.type !== "ms" || pe?.markerMode !== "editable" && pe?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Xe(e, Cu), o = Jg(
    n,
    i,
    s,
    Gg(e)
  ), a = br(o, vo(r ?? ""));
  if (!a) return;
  const c = q + a;
  pe?.markerMode === "editable" ? t.push(Mt(c, "attribute")) : t.push(Ft("attribute", c));
}
function c1(e, t) {
  const r = e.marker ?? "";
  if (pe?.markerMode === "editable") {
    const n = [];
    Dl(r, n), lh(e, n), Ul(r, n, !0), t.push(go("milestone", n));
  } else
    Dl(r, t), lh(e, t), Ul(r, t, !0);
}
function uh(e, t, r) {
  t !== void 0 && r.push(
    go(e, [
      Nt(e, "opening"),
      Mt(q + t, "attribute"),
      Nt(e, "closing")
    ])
  );
}
function l1(e, t) {
  pe?.markerMode === "editable" && (uh("va", e.altnumber, t), uh("vp", e.pubnumber, t));
}
function u1(e, t) {
  e !== void 0 && t.push(
    go("cat", [
      Nt("cat", "opening"),
      Mt(q + e, "attribute"),
      Nt("cat", "closing")
    ])
  );
}
function f1(e, t, r) {
  e !== void 0 && r.push(
    go("ca", [
      Nt("ca", "opening"),
      Mt(q + e, "attribute"),
      Nt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    go("cp", [
      Nt("cp", "opening"),
      Mt(q + t, "attribute")
    ])
  );
}
function fh(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function d1(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function dh(e, t) {
  t.marker === hi && t.sid !== void 0 && e.push(t.sid), t.marker === es && t.eid !== void 0 && d1(e, t.eid);
}
function Kl(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [ch(o, [...n])] : o, c = e[i];
  dh(n, c);
  const l = Kl(
    e.slice(i + 1, s),
    fh(t, i + 1),
    c.marker === hi,
    n
  ), u = ch(l, [...n]), f = e[s];
  dh(n, f);
  const d = Kl(
    e.slice(s + 1),
    fh(t, s + 1),
    f.marker === hi,
    n
  );
  return [...a, u, ...d];
}
function Mn(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(Mt(Pf() ? Eb(i) : i));
    else if (!i.type)
      Bt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case or.getType():
          n.push(H0(i));
          break;
        case Jt.getType():
          n.push(G0(i));
          break;
        case gt.getType():
          pe?.hasSpacing || n.push(K0), n.push(J0(i)), l1(i, n);
          break;
        case we.getType():
          n.push(
            Y0(i, Mn(i.content, !0), t)
          );
          break;
        case ft.getType():
          n.push(X0(i, Mn(i.content)));
          break;
        case ze.getType():
          n.push(r1(i, Mn(i.content)));
          break;
        case Tr.getType():
          Ag(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Af?.push(i.sid)), n.push(i1(i)), c1(i, n);
          break;
        case Yr.getType():
          n.push(o1(i.marker ?? ""));
          break;
        case am:
          n.push(Q0(i, Mn(i.content)));
          break;
        case iy:
          n.push(Z0(i, Mn(i.content)));
          break;
        case ay:
          n.push(e1(i, Mn(i.content)));
          break;
        default:
          Bt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(s1(i, Mn(i.content)));
      }
  }), Kl(n, r);
}
function Fl(e) {
  const t = e.findIndex(
    (n) => om(n) || Nm(n) || Lu(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    dC(n)
  );
  if (t >= 0) {
    const n = Fl(e.slice(0, t)), i = e[t], s = Fl(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || by(n)))
    return [$b(e)];
  return e;
}
const hn = {
  initialize: F0,
  reset: z0,
  serializeEditorState: B0
};
function Ib(e) {
  if (e && !N(e)) {
    if (C(e)) return e;
    if (O(e))
      for (const t of e.getChildren()) {
        const r = Ib(t);
        if (r) return r;
      }
  }
}
function p1() {
  const e = R();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((C(t) && !N(t) ? ki(t) : void 0) && C(t)) {
      const i = Oe(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ss(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Ib(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return C(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of qb(e)) {
    if (!ki(t)) continue;
    ss(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(q) && r.setTextContent(n.slice(q.length));
  }
  return !0;
}
function qb(e) {
  const [t, r] = hu(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!C(a) || N(a) || ce(a, ge) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, f = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= f) return;
    const d = a.splitText(u, f), p = d.length === 3 ? d[1] : f === l ? d[d.length - 1] : d[0];
    p && o.push(p);
  }), o;
}
function h1() {
  const e = R();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return ki(t) ? Ue(Yu(t)) : !1;
}
function Lb() {
  let e = R();
  if (!P(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (N(t) && !Zu(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = R(), !P(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!C(t) || N(t) || !ki(t)) return !1;
  const r = Yu(t);
  if (!Ue(r)) return !1;
  const n = Oe(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  ss(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return D(a) ? Xu(a) : o.select(0, 0), !0;
}
const Db = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Om(ve().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = R(), t = Ku(e), r = nf(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = kS(0, o);
        const a = __(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Um(c) && Fu(parseInt(n, 10), c);
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
function zl(e, t) {
  return ze.isValidMarker(e, t) || !!Db[e] || ft.isValidMarker(e, t) || we.isValidMarker(e, t);
}
function g1(e, t) {
  return we.isNoteContentMarker(e) ? !1 : we.isValidMarker(e, t);
}
function Ub(e, t, r, n, i, s) {
  const o = By(
    e,
    void 0,
    void 0,
    t,
    n ?? tc(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function Bl(e, t, r, n, i, s, o) {
  if (ze.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (f) => {
      f.editor.update(() => {
        l = Ub(
          e,
          f.reference,
          t,
          r,
          n,
          i
        );
      }, s);
    }, label: void 0, getInsertedNoteKey: () => l };
  }
  const a = T1(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = R();
      P(u) && (py(u), l.noteText = u.getTextContent());
      const { content: f, highlightInserted: d } = a.action(l), p = cp(f, hn, r), h = _c(p);
      if (P(u)) {
        const g = u.anchor.getNode(), m = g.getParent(), k = ki(g), T = u.anchor.key === u.focus.key;
        if (D(h) && k && T && !Hc(h, o))
          b1(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (D(h) && !T && !Hc(h, o) && k1(u))
          x1(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          v1(
            u,
            () => _c(p)
          );
        else if (O(h) && !h.isInline()) {
          const M = u.insertParagraph();
          if (M) {
            const I = M.getChildren();
            h.append(...I), M.replace(h), Ue(h) && Cs(h) || h.selectStart();
          }
        } else if (D(h) && C(g) && !N(g) && D(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Hc(h, o)) {
          const M = g.getParent();
          if (D(M)) {
            const I = u.anchor.offset;
            if (I === 0) g.insertBefore(h);
            else if (I >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [K] = g.splitText(I);
              K.insertAfter(h);
            }
            h.getChildren().forEach((K) => {
              N(K) && K.setNested(!0);
            });
            const A = h.getChildren().find((K) => C(K) && !N(K));
            A && C(A) ? A.select(
              A.getTextContentSize(),
              A.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (C(g) && !N(g) && u.isCollapsed() && (U(m) || D(m) && U(m.getParent()))) {
          const M = D(m) ? m : void 0, I = M ? m1(g, u.anchor.offset) : [];
          let K = (M ?? g).insertAfter(h);
          if (cr(h)) {
            const J = {
              ...r || tc(),
              markerMode: "hidden"
            }, E = cp(
              f,
              hn,
              J
            ), w = _c(E);
            K = K.insertAfter(w);
          }
          if (I.length > 0 && M) {
            const J = Pa(M).append(...I);
            K.insertAfter(J), M.isEmpty() && M.remove();
          } else C(K.getNextSibling()) || K.insertAfter(bi());
          O(K) && K.selectEnd();
        } else if (u.insertNodes([h]), O1(h), d) {
          const M = ug();
          M.add(h.getKey()), cn(M);
        } else if (D(h)) {
          const M = h.getChildren().find((I) => C(I) && !N(I));
          M && C(M) ? M.select(
            M.getTextContentSize(),
            M.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const M = h.getNextSibling();
          M ? M.selectStart() : h.selectStart();
        }
      } else
        u?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function m1(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Hc(e, t) {
  return ((t ?? ba).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function y1(e, t) {
  t && e.getChildren().forEach((i) => {
    N(i) && i.setNested(!0);
  }), e.getChildren().some((i) => N(i) && i.getMarkerSyntax() === "closing") || e.append(Tt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function b1(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && D(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !C(r)) {
    const o = e.anchor.offset;
    if (C(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else C(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = ls(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ss(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), C(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => C(a) && !N(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => C(o) && !N(o));
  C(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function k1(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (N(n) || D(n)) continue;
    if (!C(n) || n.getType() !== We.getType() || ce(n, ge) === "attribute") return !1;
    const i = Yu(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    ki(n) && (r = !0);
  }
  return r;
}
function x1(e, t, r) {
  const n = qb(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!ki(a)) return;
    ss(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => C(a) && !N(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function T1(e, t) {
  let r = Db[e];
  return r || (ft.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: ft.getType(), marker: e, content: [] }] })
  } : we.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: we.getType(), marker: e };
      return (we.isValidFootnoteMarker(e) || we.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function v1(e, t) {
  const r = e.getNodes(), [n, i] = ls(e);
  let s;
  r.forEach((o, a) => {
    if (O(s) && s.isParentOf(o))
      return;
    const c = Kb(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((f) => N(f) && f.getMarkerSyntax() === "opening") && y1(s, D(s.getParent()))), S1(c, s, l);
  }), (C(s) || O(s)) && s.selectEnd();
}
function ls(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Nf(e) {
  return de(e) || U(e) || U(e.getParent());
}
function Kb(e, t, r, n, i) {
  if (!Nf(e)) {
    if (C(e))
      return C1(e, t, r, n, i);
    if (O(e) && e.isInline())
      return e;
  }
}
function C1(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function S1(e, t, r) {
  if (C(t)) {
    const n = jl(e, t);
    t.setTextContent(n), e.remove();
  } else if (O(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => N(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !N(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    jl(e, t), r && D(t) && t.getChildren().some((s) => N(s)) && C(e) && !N(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function jl(e, t) {
  let r = e.getTextContent();
  if (C(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    tf(n), C(n) || t.insertBefore(Oe(" "));
  }
  return r;
}
function Fb(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), f = e.anchor.offset, d = vi(u, t);
    if (!d) return !1;
    const p = C(u) ? u.getTextContentSize() : 0;
    if (ph(d, r), C(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), m = Math.max(0, Math.min(f - g, h)), k = R();
      P(k) && k.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ls(e);
  if (!Rf(n, t, s, o)) return !1;
  const a = Of(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const f = vi(u, t);
    if (!f || c.has(f.getKey())) return;
    c.add(f.getKey());
    const d = Vb(f, a);
    d && (ph(d, r), l = !0);
  }), Wb(a, i), l;
}
function ph(e, t) {
  e.getChildren().forEach((n) => {
    lr(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === ct) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    C(n) && i.startsWith(q) && n.setTextContent(i.slice(q.length));
  }), el(e);
}
function Of(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Kb(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    C(o) && n.push(o);
  }), n;
}
function vi(e, t) {
  let r = e, n;
  for (; r && !Ue(r); ) {
    if (U(r)) return;
    !n && D(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function zb(e) {
  const t = lt(
    e,
    (r) => U(r) || Ue(r)
  );
  return U(t);
}
function Bb(e) {
  return e.filter(
    (t) => !Nf(t) && (C(t) || O(t) && t.isInline())
  );
}
function _1(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!C(i) || Nf(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function M1(e, t, r) {
  return e.getChildren().some(
    (n) => O(n) && t.some((i) => n.isParentOf(i)) && !jb(n, r)
  );
}
function Rf(e, t, r, n, i) {
  const s = Bb(e), o = _1(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = vi(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !M1(l, s, o);
  });
}
function jb(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || lr(r));
}
function Vb(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (O(u) && t.some((f) => u.isParentOf(f))) {
      if (!jb(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && lr(n[s - 1]) && (s -= 1), o < n.length - 1 && lr(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Pa(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Pa(e).append(...c)), e;
}
function Pa(e) {
  return OT(e);
}
function Wb(e, t) {
  const r = R(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function E1(e, t, r) {
  if (e.isCollapsed()) {
    const l = vi(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Hd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ls(e);
  if (!Rf(n, r, i, s, t)) return !1;
  const o = Of(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = vi(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const f = Vb(u, o);
    f && (Hd(f, t), c = !0);
  }), c;
}
function A1(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = ls(e);
  if (!!!i?.some(
    (m) => Rf(s, m, o, a)
  ) && !P1(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const k = R();
    P(k) && Fb(k, m, n) && (l = !0);
  });
  const u = R();
  if (!P(u)) return l;
  const f = u.isBackward(), [d, p] = ls(u), h = Of(
    u.getNodes(),
    d,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (m) => !zb(m) && !vi(m, t)
  );
  return g.length > 0 && (w1(g).forEach((m) => N1(m, t)), l = !0), Wb(h, f), l;
}
function P1(e, t) {
  return Bb(e).some(
    (r) => !zb(r) && !vi(r, t)
  );
}
function w1(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function N1(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? Pa(i) : ln(t);
  e[0].insertBefore(s), s.append(...e), i === r || jl(e[0], s);
}
function O1(e) {
  Se(e) && (tf(e.getPreviousSibling()), xy(e.getNextSibling()));
}
const Hb = {
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
}, hh = "psc-active-text", Bo = "psc-empty-text";
function R1({ viewOptions: e }) {
  const [t] = ye(), r = se(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return V(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(hh), r.current = o, o && t.getElementByKey(o)?.classList.add(hh);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Fa,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Bo}`);
          if (!c) return !1;
          const l = _i(c);
          if (!Se(l)) return !1;
          const u = l.getParent();
          if (!O(u)) return !1;
          const f = l.getIndexWithinParent() + 1;
          return u.select(f, f), !1;
        },
        Pt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const f = Gc(), d = $1(), p = [], h = [];
          return ve().getChildren().forEach((g) => {
            if (!O(g)) return;
            const { emptyKeys: m, nonEmptyKeys: k } = q1(g);
            p.push(...m), h.push(...k);
          }), { newActiveKey: f, activeVerseKey: d, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((f) => {
          f === c ? t.getElementByKey(f)?.classList.remove(Bo) : t.getElementByKey(f)?.classList.add(Bo);
        }), u.forEach((f) => t.getElementByKey(f)?.classList.remove(Bo));
      }),
      t.registerCommand(
        yu,
        () => (i(void 0), !1),
        Pt
      ),
      t.registerCommand(
        RT,
        () => {
          const o = t.getEditorState().read(Gc);
          return o !== r.current && i(o), !1;
        },
        Pt
      )
    ];
    return i(t.getEditorState().read(Gc)), et(...s);
  }, [t, n]), null;
}
function Gc() {
  return I1(R() ?? void 0)?.getKey();
}
function $1() {
  const e = R();
  if (!P(e)) return;
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
    Se(s[a]) && (o = s[a].getKey());
  return o;
}
function I1(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function q1(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Se(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Se(c)) break;
      if (!(vt(c) || N(c)) && c.getTextContent().replaceAll(aa, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const L1 = /^\+/;
function $f(e, t) {
  const r = t.replace(L1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Gb(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Jb(e, t) {
  return Gb(e, t) !== void 0;
}
function Vl(e, t) {
  const r = Gb(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function wa(e, t, r) {
  const n = O(e) ? e.getChildren().filter(N) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function D1(e, t, r, n, i) {
  const s = $f(n, t);
  if (!s) {
    wa(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && wa(e, "invalid", i);
}
function Ws(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || D1(s, o, t, r, n), Ws(s, t, r, n, i || o === "xq");
    } else if (Se(s)) {
      if (i) continue;
      const o = $f(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else U(s) ? Ws(s, s.getMarker(), r, n, i) : De(s) || O(s) && Ws(s, t, r, n, i);
}
function U1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = $f(e, a);
    if (!c) {
      wa(o, "unknown", r), Vl(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Vl(n, l) || wa(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of ve().getChildren())
    De(o) || (ut(o) || Ye(o) ? i(o, o.getMarker()) : he(o) ? (i(o, o.getMarker()), s(o) && Ws(o, o.getMarker(), e, r, !1)) : O(o) && s(o) && Ws(o, "p", e, r, !1));
  return r;
}
function K1(e) {
  return !!e?.includes("(basic)");
}
function F1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Yb(e, t) {
  return !e.startsWith("zpa") && e !== "c" && zl(e, t);
}
function If(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Xb(e, t) {
  const r = [];
  for (const n of t) {
    const i = If(e, n);
    i && Vl(r, i);
  }
  return r;
}
function ea(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: F1(e.description),
    isBasic: K1(e.description)
  };
}
function z1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Wl(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : z1(e.marker, t.marker);
}
function Hl(e, t, r) {
  if (t.noteMarker) return [];
  const n = Xb(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Yb(i.marker, r)
  ).filter((i) => {
    const s = If(e, i.marker);
    return s !== void 0 && Jb(n, s);
  }).map((i) => ea(i, "paragraph")).sort(Wl);
}
function B1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Yb(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => ea(c, "character")).sort(Wl);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => ea(c, "character")),
    ...a.map((c) => ea(c, "note"))
  ].sort(Wl);
}
function j1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function V1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function W1(e, t, r) {
  return [
    ...j1(e, t.openCharMarkers),
    ...B1(e, t, r)
  ].sort(V1);
}
function H1(e, t, r) {
  if (t.source === "paragraph") return Hl(e, t, r);
  const n = W1(e, t, r);
  return n.length > 0 ? n : Hl(e, t, r);
}
function G1(e, t, r) {
  const n = Hl(e, t, r), i = Xb(e, t.previousParaMarkers), s = If(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Jb(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const wr = String.raw`\w-`, Qb = "a-z0-9", J1 = `[a-z][${Qb}]*`, Y1 = new RegExp(
  String.raw`^\\(\+?[${wr}]+)[ \u00A0]$`
), Zb = new RegExp(String.raw`^\\(\+?[${wr}]+)$`), X1 = new RegExp(String.raw`^\\\+?[${wr}]*\*$`), Q1 = new RegExp(
  String.raw`^\\(\+?[${wr}]+)(?:[ \u00A0]|$)`
), Z1 = new RegExp(
  String.raw`^\\(\+?)([${wr}]+)`
), ew = new RegExp(
  String.raw`\\\+?[${wr}]+(?:\\?\*|[ \u00A0])`
), tw = new RegExp(
  String.raw`\\\+?[${wr}]*$`
), rw = new RegExp(
  String.raw`^\\(${J1})( |$)`
), nw = new RegExp(
  String.raw`\\[${Qb}+*]*$`,
  "i"
), Gl = "￼", gh = "|", ek = "\\", iw = /([-\w]+)="(.*?)"/g, sw = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), ow = /* @__PURE__ */ new Map([["file", "src"]]);
class qf {
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
function mh(e, t) {
  const r = [e.indexOf(ek, t + 1), e.indexOf(Gl, t + 1)].filter(
    (n) => n >= 0
  );
  return r.length > 0 ? Math.min(...r) : e.length;
}
function yh(e) {
  const t = e.slice(1), r = [...t.matchAll(iw)];
  return r.length > 0 ? r.map((n) => n[0]).join("") !== t || r.some((n) => n[2] === "") ? void 0 : r.map((n) => {
    const i = 1 + (n.index ?? 0), s = i + n[1].length + 2;
    return {
      name: n[1],
      start: i,
      end: i + n[0].length,
      valueStart: s,
      valueEnd: s + n[2].length,
      value: n[2]
    };
  }) : t ? [
    {
      name: void 0,
      start: 1,
      end: e.length,
      valueStart: 1,
      valueEnd: e.length,
      value: t
    }
  ] : void 0;
}
function aw(e, t) {
  const r = e.map(
    (o, a) => o.name === void 0 || !sw.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), n = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && ow.get(o.name) === a.name), i = /* @__PURE__ */ new Set(), s = [];
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, u) => r[u] && !i.has(u) && n(l, o)
    );
    c < 0 || (i.add(c), s.push([c, a]));
  }), s;
}
function bh(e, t, r) {
  let n = 0, i = -1;
  for (const s of e) {
    if (!s.same) continue;
    const { end: o, otherEnd: a } = Eo(s, r);
    o <= t && o > i && (i = o, n = a);
  }
  return n;
}
function cw(e, t, r, n, i) {
  if (e === t) {
    r.push(n, n + e.length, i, i + t.length, !0);
    return;
  }
  const s = yh(e), o = yh(t);
  if (!s || !o) {
    r.push(n, n + 1, i, i + 1, !0), r.pushStretch(e.slice(1), n + 1, t.slice(1), i + 1);
    return;
  }
  const a = new qf();
  a.push(0, 1, 0, 1, !0);
  const c = aw(s, o);
  for (const [d, p] of c) {
    const h = s[d], g = o[p];
    a.pushStretch(
      e.slice(h.start, h.valueStart),
      h.start,
      t.slice(g.start, g.valueStart),
      g.start
    ), a.push(h.valueStart, h.valueEnd, g.valueStart, g.valueEnd, !0), a.pushStretch(
      e.slice(h.valueEnd, h.end),
      h.valueEnd,
      t.slice(g.valueEnd, g.end),
      g.valueEnd
    );
  }
  const l = [...a.segments], u = new Set(c.map(([d]) => d));
  s.forEach((d, p) => {
    if (u.has(p)) return;
    const h = bh(l, d.start, "live");
    a.push(d.start, d.end, h, h, !1);
  });
  const f = new Set(c.map(([, d]) => d));
  o.forEach((d, p) => {
    if (f.has(p)) return;
    const h = bh(l, d.start, "settled");
    a.push(h, h, d.start, d.end, !1);
  }), a.segments.sort(
    (d, p) => d.settledStart - p.settledStart || d.settledEnd - p.settledEnd || d.liveStart - p.liveStart
  ).forEach(
    (d) => r.push(
      n + d.liveStart,
      n + d.liveEnd,
      i + d.settledStart,
      i + d.settledEnd,
      d.same
    )
  );
}
function tk(e, t, r, n, i) {
  let s = t, o = 0;
  for (; s < e.length && o < r.length; ) {
    const c = r[o] === Gl && e[s] !== Gl ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const l = new qf(), u = tk(e, s, c, l, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: u,
        inner: { segments: lw(l.segments, s) }
      }), n.push(s, u, o, o + 1, !1), s = u, o += 1;
      continue;
    }
    if (e[s] === gh && r[o] === gh) {
      const l = mh(e, s), u = mh(r, o);
      cw(e.slice(s, l), r.slice(o, u), n, s, o), s = l, o = u;
      continue;
    }
    if (e[s] === r[o]) {
      n.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (i.prefix) {
      const l = r.lastIndexOf(ek), u = l >= o ? r.slice(l) : void 0, f = u === void 0 ? -1 : e.indexOf(u, s);
      return u === void 0 || f < 0 ? (n.push(s, s, o, r.length, !1), s) : (n.push(s, f, o, l, !1), n.push(f, f + u.length, l, r.length, !0), f + u.length);
    }
    return n.pushStretch(e.slice(s), s, r.slice(o), o), e.length;
  }
  const a = i.prefix ? s : e.length;
  return n.push(s, a, o, r.length, !1), a;
}
function lw(e, t) {
  return e.map((r) => ({
    ...r,
    liveStart: r.liveStart - t,
    liveEnd: r.liveEnd - t
  }));
}
function uw(e, t, r) {
  const n = new qf(), i = /* @__PURE__ */ new Map();
  return tk(e, 0, t, n, { prefix: !1, spellings: r, literals: i }), { alignment: { segments: n.segments }, literals: i };
}
function Eo(e, t) {
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
function rk(e, t, r) {
  return e.segments.find((n) => {
    const { start: i, end: s } = Eo(n, r);
    return i <= t && t < s;
  });
}
function nk(e, t) {
  let r = 0, n = 0;
  for (const i of e.segments) {
    const { end: s, otherEnd: o } = Eo(i, t);
    r = Math.max(r, s), n = Math.max(n, o);
  }
  return [r, n];
}
function Lf(e, t, r) {
  const n = rk(e, t, r);
  if (n) {
    const { start: o, otherStart: a } = Eo(n, r);
    return n.same ? a + (t - o) : void 0;
  }
  const [i, s] = nk(e, r);
  return t === i ? s : void 0;
}
function Ao(e, t, r) {
  const n = rk(e, t, r);
  if (n) {
    const { start: i, otherStart: s } = Eo(n, r);
    return n.same ? s + (t - i) : s;
  }
  return nk(e, r)[1];
}
const Mr = /\s/;
function fw(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function Jl(e) {
  const t = [];
  for (const n of e.spans)
    for (let i = n.start; i < n.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: Mr.test(s) });
    }
  const r = e.spans.filter((n) => n.isSentinel).map((n) => n.start);
  return { bytes: t, placeholders: r };
}
function ta({ bytes: e }, t) {
  return e.filter((r) => r.position < t && !r.isWs).length;
}
function dw({ bytes: e }, t) {
  let r = 0;
  for (const n of e) n.position < t && (r = n.isWs ? r + 1 : 0);
  return r;
}
function Yl({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const kh = "cat", pw = "category";
function hw(e) {
  return C(e) && e.getTextContent().trim() === "";
}
function gw(e) {
  const t = { text: "", spans: [], sentinels: [] }, r = [], n = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    n(a, fw(kh, c)), r.push({
      ownerKey: a.getKey(),
      markerName: kh,
      keyName: pw,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = Au(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const f = vr(a);
    let d = !1;
    for (const p of a.getChildren())
      u !== void 0 && d && !hw(p) && (i(a, u), u = void 0), o(p), (Ct(p) || f && (f.is(p) || p.isParentOf(f))) && (d = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (Ct(a)) {
      const c = a.getParent();
      n(a, U(c) ? c.getCaller() : "");
    } else C(a) || vt(a) ? n(a, a.getTextContent()) : U(a) ? s(a) : O(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: r };
}
function Df(e) {
  const t = Jl(e);
  return {
    runs: e.sentinels.map((r, n) => {
      const { spelling: i, foldedAttributes: s } = gw(r);
      return {
        memberCount: r.length,
        before: ta(t, t.placeholders[n] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: Yl(Jl(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: Yl(t).map(({ byte: r }) => r).join("")
  };
}
function Na(e, t) {
  return {
    facts: Jl(e),
    carried: e.sentinels.map((r, n) => {
      const i = new Set(t[n]?.map((s) => s.getKey()));
      return r.map((s) => i.has(s.getKey()));
    })
  };
}
function Oa(e, t) {
  const r = e.carried.map(
    (d) => d.map(() => {
    })
  ), n = Yl(e.facts), { alignment: i, literals: s } = uw(
    n.map(({ byte: d }) => d).join(""),
    t.bytes,
    new Map(t.runs.map((d) => [d.before, d.spelled]))
  ), o = (d, p) => {
    let h = 0;
    e.carried[d].forEach((g, m) => {
      g && (r[d][m] = { sentinelIndex: p, memberIndex: h }, h += 1);
    });
  }, a = (d) => d.filter(Boolean).length, c = e.carried.reduce((d, p) => d + a(p), 0), l = t.runs.reduce((d, p) => d + p.memberCount, 0);
  if (c === l) {
    const d = t.runs.flatMap(
      (h, g) => Array.from({ length: h.memberCount }, (m, k) => ({ sentinelIndex: g, memberIndex: k }))
    );
    let p = 0;
    return e.carried.forEach(
      (h, g) => h.forEach((m, k) => {
        m && (r[g][k] = d[p++]);
      })
    ), { sentinelMap: r, settledOnlyRuns: [], alignment: i };
  }
  const u = new Map(t.runs.map((d, p) => [d.before, p]));
  e.carried.forEach((d, p) => {
    const h = e.facts.placeholders[p];
    if (h === void 0 || a(d) === 0) return;
    const g = Lf(i, ta(e.facts, h), "live"), m = g === void 0 ? void 0 : u.get(g);
    m === void 0 || t.runs[m].memberCount !== a(d) || o(p, m);
  });
  const f = [];
  for (const [d, p] of s) {
    const h = u.get(d);
    if (h === void 0) continue;
    const g = t.runs[h], m = n[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, k = p.liveEnd > p.liveStart ? n[p.liveEnd - 1].position + 1 : m, T = ta(e.facts, m);
    f.push({
      sentinelIndex: h,
      liveBefore: T,
      liveLength: ta(e.facts, k) - T,
      liveWsBefore: dw(e.facts, m),
      settledBefore: g.before,
      spelling: g.spelling,
      inner: p.inner,
      foldedAttributes: g.foldedAttributes
    });
  }
  return { sentinelMap: r, settledOnlyRuns: f, alignment: i };
}
function Po(e, t, r) {
  return {
    nonWsBefore: Ao(
      e,
      t.nonWsBefore,
      r === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function ik(e, t, r) {
  return Lf(e.inner, t, r === "toSpelling" ? "live" : "settled");
}
function sk(e, t) {
  return e.find(
    (r) => t.nonWsBefore === r.liveBefore && t.wsRun >= r.liveWsBefore
  );
}
function Uf(e, t) {
  for (const r of e) {
    const n = t.nonWsBefore - r.liveBefore;
    if (n <= 0 || n >= r.liveLength) continue;
    const i = ik(r, n, "toSpelling");
    return {
      run: r,
      count: n,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function Kf(e, t) {
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
function Ff(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
const ht = "￼";
function ok(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== ht ? e.slice(1) : e;
}
function xh(e) {
  return bs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function ak(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = hn.serializeEditorState(
    {
      type: sn,
      version: nn,
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
  for (; xh(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Ht(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && xh(a[u - 1]) === "closing"; )
    u--;
  const f = a.slice(c, u);
  return f.length === 0 ? { failure: "empty" } : { children: f };
}
function jo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Is(e, t) {
  tw.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += ht;
}
function tr(e) {
  return e.replaceAll(q, " ");
}
function mw(e, t, r = !1, n = !1) {
  if (St(t)) return tr(e);
  if (e === q && !n) return " ";
  const i = r && e.startsWith(q), s = i ? e.slice(1) : e;
  return (i ? " " : "") + s.replaceAll(q, "~");
}
function Hs(e) {
  const t = e.getTextContent();
  return pr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function lc(e, t) {
  const r = e[t];
  if (!Pe(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ja(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function ck(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function uc(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = so(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function zf(e) {
  return !!e.getUnknownAttributes();
}
function fc(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Mu(e);
}
function lk(e, t) {
  return Pe(e) ? !fc(e.getMarker(), t) : U(e) || De(e) ? !0 : Re(e) ? zf(e) : D(e) ? uk(e, t) : !1;
}
function uk(e, t) {
  if (eC(e)) return !0;
  const r = e.getMarker();
  return !Sv(r) && t(r) === void 0;
}
const Zt = "", er = "";
function Th(e) {
  return e.flatMap((t) => Le(t) ? t.getChildren() : [t]);
}
function Ji(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Pe(s)) {
      const o = lc(e, i);
      fc(s.getMarker(), r) && ck(o) ? (t.push(
        Zt,
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
      ), Ji(Th(o), t, r), t.push(er)) : t.push(ht), i += o.length;
    } else if (Re(s)) {
      const o = uc(e, i);
      zf(s) ? t.push(ht) : (t.push(
        Zt,
        "verse",
        tr(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ji(Th(o), t, r), t.push(er)), i += o.length;
    } else N(s) ? t.push(Zt, "marker", tr(s.getTextContent()), er) : Yt(s) ? t.push(Zt, "unmatched", tr(s.getTextContent()), er) : lk(s, r) ? t.push(ht) : xo(s) ? t.push(" ") : C(s) ? t.push(
      tr(
        n ? ok(Hs(s)) : Hs(s)
      )
    ) : D(s) ? (t.push(Zt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ji(s.getChildren(), t, r, !0), t.push(er)) : de(s) ? Ji(s.getChildren(), t, r, n) : O(s) ? (t.push(Zt, s.getType()), Ji(s.getChildren(), t, r), t.push(er)) : t.push(ht);
  }
}
function Ss(e, t) {
  const r = [];
  return Ji(e, r, t), r.join("");
}
function gn(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function us(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Bf(e) {
  return e.type ?? "";
}
function fk(e, t, r) {
  return t === "closing" ? Je(e, r) : t === "selfClosing" ? Je("") : $e(e, r);
}
function Jc(e, t) {
  const r = e[t];
  if (!(!r || Bf(r) !== "attribute-run"))
    return gn(r) ?? [];
}
function _s(e, t) {
  const r = [];
  return Fs(e, r, t), r.join("");
}
function Fs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Bf(s);
    if (o === "ms") {
      const l = s, u = Jc(e, i + 1);
      u && fc(l.marker ?? "", r) ? (t.push(
        Zt,
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
      ), Fs(u, t, r), t.push(er), i += 1) : t.push(ht);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(ht);
        continue;
      }
      t.push(
        Zt,
        "verse",
        tr(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, f = Jc(e, i + 1 + u);
      for (; f; )
        Fs(f, t, r), u++, f = Jc(e, i + 1 + u);
      t.push(er), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Zt,
        "marker",
        tr(
          fk(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        er
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Zt, "char", JSON.stringify(l.unknownAttributes ?? null)), Fs(gn(s) ?? [], t, r, !0), t.push(er);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(ht);
      continue;
    }
    if (o === "unmatched") {
      t.push(Zt, "unmatched", tr(us(s) ?? "")), t.push(er);
      continue;
    }
    const a = us(s);
    if (a !== void 0) {
      t.push(tr(n ? ok(a) : a));
      continue;
    }
    const c = gn(s);
    c ? (t.push(Zt, o), Fs(c, t, r), t.push(er)) : t.push(ht);
  }
}
function dc(e) {
  let t = 0;
  for (const r of e) {
    const n = gn(r);
    if (n) {
      t += dc(n);
      continue;
    }
    const i = us(r);
    if (i !== void 0)
      for (const s of i) s === ht && t++;
  }
  return t;
}
function fs(e, t, r, n, i) {
  Wr(e.getChildren(), t, r, n, i);
}
function Wr(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (N(a))
      jo(t, a, tr(a.getTextContent()));
    else if (Pe(a)) {
      s();
      const c = lc(e, o);
      fc(a.getMarker(), r) && ck(c) ? Wr(c, t, r, n) : Is(t, [a, ...c]), o += c.length;
    } else if (U(a) || De(a))
      s(), Is(t, [a]);
    else if (Re(a)) {
      s();
      const c = uc(e, o);
      zf(a) ? Is(t, [a, ...c]) : (jo(t, a, tr(Hs(a))), Wr(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), uk(a, r) ? Is(t, [a]) : fs(a, t, r, n, { pending: !0 });
    else if (xo(a))
      s(), jo(t, a, " ");
    else if (C(a)) {
      const c = pr(a) || ce(a, ge) === "attribute", l = s() && !c;
      jo(
        t,
        a,
        c ? tr(Hs(a)) : mw(
          Hs(a),
          n,
          l,
          Fm(a)
        )
      );
    } else O(a) ? fs(a, t, r, n, i) : (s(), Is(t, [a]));
  }
}
function jf(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (De(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return fs(e, i, t, r), i;
}
function yw(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  return fs(e, n, t, r), n;
}
function Vf(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!he(i)) return;
    const s = jf(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function bw(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (he(i)) {
      const s = jf(i, t, r);
      if (!s) return;
      const o = n.text.length;
      s.spans.forEach(
        (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), n.sentinels.push(...s.sentinels), n.text += s.text;
    } else Ee(i) ? Wr(i.getChildren(), n, t, r) : Wr([i], n, t, r);
  return n;
}
function dk(e, t) {
  let r = 0;
  const n = (i) => {
    if (C(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(ht);
        if (a < 0) break;
        let c = s, l;
        a > 0 && ([, c] = s.splitText(a)), c.getTextContent().length > 1 && ([c, l] = c.splitText(1));
        const u = t[r++];
        if (u && u.length > 0) {
          let f = c;
          for (const d of u)
            f.insertAfter(d), f = d;
        }
        c.remove(), s = l;
      }
    } else O(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function Xl(e, t = []) {
  for (const r of e)
    Re(r) ? t.push(r) : O(r) && Xl(r.getChildren(), t);
  return t;
}
function pk(e) {
  let t = 0;
  const r = (n) => {
    if (C(n))
      for (const i of n.getTextContent()) i === ht && t++;
    else O(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Ri(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === ht && t++;
    else r.content && (t += Ri(r.content));
  return t;
}
function Wf(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), O(i) && fs(i, n, t, r);
  return n;
}
function Nn(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : r, o) : o;
    for (let l = 0; l < c; l++)
      Mr.test(e.text[s.start + l]) ? i++ : (n++, i = 0);
    if (a) return { nonWsBefore: n, wsRun: i };
  }
}
function Ql(e, t) {
  t.add(e.getKey()), O(e) && e.getChildren().forEach((r) => Ql(r, t));
}
function Hf(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function Gs(e, t, r) {
  const n = (f, d) => {
    const p = Nn(e, f, d), h = Hf(e, f, d);
    return p && h ? { anchor: p, position: h.start + d } : void 0;
  }, i = (f) => {
    const d = f.end - f.start, p = Nn(e, f.key, d);
    return p ? { anchor: p, position: f.start + d } : void 0;
  };
  if (!O(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((f) => Ql(f, s));
  const o = [...e.spans].reverse().find((f) => s.has(f.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  Ql(t, a);
  const c = e.spans.find((f) => a.has(f.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((f) => !a.has(f.key) && ee(f.key)?.isBefore(t));
  if (l) return i(l);
  const u = e.spans[0];
  return u && !u.isSentinel ? n(u.key, 0) : void 0;
}
function Js(e) {
  if (e.isSentinel) return !1;
  const t = ee(e.key);
  return N(t) && t.getMarkerSyntax() !== "opening";
}
function hk(e) {
  const t = ee(e.key);
  if (!N(t)) return;
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
function kw(e) {
  const t = ee(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Re(t) ? uc(n, i) : Pe(t) ? lc(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function Wt(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e;
  let s, o = t.nonWsBefore, a = t.wsRun, c = !1;
  e: for (const f of i) {
    const d = f.end - f.start, p = !f.isSentinel && (r || !Js(f));
    if (c) {
      if (!p) continue;
      s = { key: f.key, offset: 0 };
      break;
    }
    for (let h = 0; h < d; h++) {
      const g = n[f.start + h];
      if (o === 0 && (a === 0 || !Mr.test(g))) {
        if (p) {
          s = { key: f.key, offset: h };
          break e;
        }
        c = !0;
        continue e;
      }
      o > 0 ? Mr.test(g) || o-- : a--;
    }
    if (o === 0 && a === 0) {
      if (p && !r) {
        s = { key: f.key, offset: d };
        break;
      }
      c = !0;
    }
  }
  if (s) return { ...s, type: "text" };
  const l = i[i.length - 1];
  if (l && Js(l)) {
    const f = hk(l);
    if (f) return f;
  }
  if (l?.isSentinel) {
    const f = kw(l);
    if (f) return f;
  }
  const u = [...i].reverse().find((f) => !f.isSentinel && !Js(f));
  if (u) return { key: u.key, offset: u.end - u.start, type: "text" };
}
function gk(e, t = []) {
  for (const r of e)
    de(r) && t.push(r), O(r) && gk(r.getChildren(), t);
  return t;
}
function mk(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), O(e) && e.getChildren().forEach((r) => mk(r, t)), t;
}
function xw(e, t, r) {
  const n = Nn(e, t.key, r);
  if (n)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: n,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: n };
}
function pc(e, t, r = t.sentinels, n) {
  const i = [];
  for (const o of gk(e)) {
    const a = mk(o), c = t.spans.filter((T) => a.has(T.key)), l = c[0], u = c[c.length - 1];
    if (!l || !u) continue;
    const f = xw(t, l, 0), d = Nn(t, u.key, u.end - u.start);
    if (!f || !d) continue;
    const p = o.getTypedOnClicks(), h = o.getTypedOnRemoves(), g = o.getTypedOnMouseEnters(), m = o.getTypedOnMouseLeaves(), k = Object.entries(o.getTypedIDs()).flatMap(
      ([T, M]) => M.map((I) => ({
        type: T,
        id: I,
        onClick: p[T]?.[I],
        onRemove: h[T]?.[I],
        onMouseEnter: g[T]?.[I],
        onMouseLeave: m[T]?.[I]
      }))
    );
    k.length > 0 && i.push({ annotations: k, start: f, end: d });
  }
  const s = (o) => {
    const a = o.getKey();
    for (const c of wn(o)) {
      if (c.start === c.end || !Hf(t, a, c.start)) continue;
      const l = Nn(t, a, c.start), u = Nn(t, a, c.end);
      if (!l || !u) continue;
      const f = n && ma(n, c.type, c.id);
      i.push({
        annotations: [
          {
            type: c.type,
            id: c.id,
            onClick: f?.onClick,
            onRemove: f?.onRemove,
            onMouseEnter: f?.onMouseEnter,
            onMouseLeave: f?.onMouseLeave
          }
        ],
        start: { kind: "byte", anchor: l },
        end: u
      });
    }
    O(o) && o.getChildren().forEach(s);
  };
  return e.forEach(s), { ranges: i, live: i.length > 0 ? Na(t, r) : void 0 };
}
function Tw(e, t, r) {
  const n = yk(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!de(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function vw(e, t) {
  const r = yk(e);
  if (!r) return;
  const n = gi();
  n.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), r[0].insertBefore(n), n.append(...r);
}
function yk(e) {
  const t = ee(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = Re(t) ? uc(r, n) : Pe(t) ? lc(r, n) : [];
  return [t, ...i];
}
function bk(e, t, r, n) {
  const i = r.settledOnlyRuns, s = { addressDisplayBytes: n }, o = Uf(i, e);
  if (o) {
    if (!o.within) return;
    const u = Wt(o.run.spelling, o.within, s);
    return u ? { point: u, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex } : void 0;
  }
  const a = n && sk(i, e);
  if (a) {
    const u = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), f = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, d = Wt(t, f, s);
    return d && u ? { point: d, at: f.nonWsBefore, preservedKey: u } : void 0;
  }
  const c = Po(r.alignment, e, "toSettled"), l = Wt(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function Cw(e, t, r) {
  if (e.kind === "byte") return bk(e.anchor, t, r, !0);
  const n = r.sentinelMap[e.run]?.find((a) => a !== void 0), i = n && t.sentinels[n.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = Po(r.alignment, e.anchor, "toSettled"), o = Wt(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function vh(e) {
  if (e.type !== "text") return e;
  const t = ee(e.key);
  if (C(t)) return e;
  const r = t?.getParent();
  if (!t || !r) return;
  const n = t.getIndexWithinParent() + (e.offset > 0 ? 1 : 0);
  return { key: r.getKey(), offset: n, type: "element" };
}
function hc({ ranges: e, live: t }, r) {
  if (e.length === 0 || !t) return;
  const n = R()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = r();
      if (!o) continue;
      const a = Oa(t, Df(o)), c = Cw(i.start, o, a), l = bk(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const u = i.start.anchor;
      if (c.at === l.at && u.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { preservedKey: f } = c, d = vh(c.point), p = vh(l.point);
      if (!d || !p) continue;
      if (d.key === p.key && d.offset === p.offset && d.type === p.type) {
        f && vw(f, s);
        continue;
      }
      const h = To();
      h.anchor.set(d.key, d.offset, d.type), h.focus.set(p.key, p.offset, p.type), Gu(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && Tw(f, s.type, s.id);
    }
  cn(n);
}
function Gf(e, t, r) {
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
function kk(e, t) {
  return e.sentinels.filter((n, i) => n.length > 0 && (t[i]?.length ?? 0) === 0).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? Gf(n, s.start, s.end) : n;
  }, e);
}
function wo(e) {
  const t = e.exportJSON();
  return O(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(wo(r))), t;
}
function Jf(e, t, r, n, i, s, o) {
  const a = pc(
    e,
    kk(t, r),
    r
  );
  if (a.ranges.length === 0) return n;
  const c = bu({
    nodes: [Ze, ...sc],
    onError: (u) => {
      throw u;
    }
  });
  ku(
    c,
    Ze,
    (u) => gi(u.getTypedIDs()),
    (u, f) => Object.entries(u.getTypedIDs()).forEach(
      ([d, p]) => p.forEach((h) => f.addID(d, h))
    )
  );
  let l;
  return c.update(
    () => {
      const u = ve(), f = i === "noteContent" ? ir() : u;
      f !== u && u.append(f), l = f.getKey(), n.forEach((p) => f.append(ps(p))), hc(a, () => {
        const p = f.getChildren();
        if (i === "paras") return Wf(p, s, o);
        if (i === "chapter")
          return Ee(p[0]) ? yo(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return Wr(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const u = l === void 0 ? void 0 : ee(l);
    return O(u) ? u.getChildren().map(wo) : n;
  });
}
function Zl(e) {
  const t = ee(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return C(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!O(t)) return !1;
  const r = To();
  return r.anchor.set(e.key, e.offset, "element"), r.focus.set(e.key, e.offset, "element"), cn(r), !0;
}
function Sw(e, t, r) {
  const n = Wt(e, t);
  if (n?.type === "text") {
    if (Zl(n)) return;
  } else if (n) {
    const i = ee(n.key), s = O(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find(O)?.selectStart();
}
function Yf(e, t) {
  const r = t.getNode(), n = Kf(e, r), i = n && Ff(n.member, r);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? Gs(e, r, t.offset)?.anchor : Nn(e, t.key, t.offset),
    inRun: n && i ? {
      sentinelIndex: n.sentinelIndex,
      memberIndex: n.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: Na(e, e.sentinels)
  };
}
function xk(e, t, r) {
  const n = t && Oa(t.live, Df(e));
  if (t?.inRun && n) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: u } = t.inRun, f = n.sentinelMap[o]?.[a];
    let d = f && e.sentinels[f.sentinelIndex]?.[f.memberIndex];
    for (const p of c)
      d = O(d) ? d.getChildAtIndex(p) ?? void 0 : void 0;
    if (d && Zl({ key: d.getKey(), offset: l, type: u })) return;
  }
  if (!t?.anchor || !n) {
    r.find(O)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = Uf(n.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: Ao(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = Wt(s.run.spelling, o);
    if (a && Zl(a)) return;
  }
  Sw(
    e,
    Po(n.alignment, i, "toSettled"),
    r
  );
}
function Tk(e, t, r, n, i) {
  r && xk(Wf(e, n, i), t, e);
}
function _w(e, t, r, n, i) {
  if (!r) return;
  const s = { text: "", spans: [], sentinels: [] };
  Wr(e, s, n, i), xk(s, t, e);
}
function vk(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Vf(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = R();
  if (P(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((k) => k.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Yf(s, c.anchor));
  }
  const l = pc(e, s, void 0, Ot()), u = yn(s.text, {
    getMarker: n
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Ri(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const f = hn.serializeEditorState(
    { type: sn, version: nn, content: u },
    r
  );
  if (_s(f.root.children, n) === Ss(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = f.root.children.map((m) => ps(m));
  if (pk(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = Xl(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  d.forEach((m) => h.insertBefore(m)), dk(d, s.sentinels), e.forEach((m) => m.remove());
  const g = Xl(d);
  for (let m = 0; m < p.length && m < g.length; m++)
    g[m].getNumber() === p[m].number && g[m].setSid(p[m].sid);
  return hc(l, () => Wf(d, n, r)), Tk(d, o, a, n, r), !0;
}
function mo(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !ze.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!N(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(Ct(s) || C(s) && s.getTextContent() === Ht(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!N(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Wr(c, l, t, r), { out: l, contentNodes: c };
}
function Ck(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(ht)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function Mw(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = mo(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = R();
  if (P(u)) {
    for (let K = u.anchor.getNode(); K; K = K.getParent())
      if (e.is(K)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Yf(o, u.anchor));
  }
  const f = pc(a, o, void 0, Ot()), d = yn(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Ri(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = d;
  if (d.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], g = Ck(h), m = ak(e, h, g, r);
  if (m.failure !== void 0)
    return m.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      m.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (dc(m.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== g;
  if (k && e.setCategory(g), _s(m.children, n) === Ss(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const T = m.children.map((K) => ps(K));
  if (pk(T) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const M = a[0];
  if (M)
    T.forEach((K) => M.insertBefore(K));
  else {
    const K = e.getChildren().find((J) => N(J) && J.getMarkerSyntax() === "closing");
    T.forEach((J) => K ? K.insertBefore(J) : e.append(J));
  }
  dk(T, o.sentinels);
  const I = new Set(o.sentinels.flat().map((K) => K.getKey()));
  a.forEach((K) => {
    I.has(K.getKey()) || (de(K) && (K.getWritable().__suppressOnRemoveCallbacks = !0), K.remove());
  });
  const A = () => mo(e, n, r);
  return hc(f, () => A()?.out), _w(
    A()?.contentNodes ?? T,
    c,
    l,
    n,
    r
  ), !0;
}
const Sk = /* @__PURE__ */ new Set(["ca", "cp"]), Xf = "cp";
function _k(e) {
  if (!st(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (fs(e, t, zr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = yn(r, { getMarker: zr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Xf)
  );
}
function Ms(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && Sk.has(r.getMarker()) || _k(r)) {
      t.push(r);
      continue;
    }
    he(r) && r.getMarker() === Xf && t.push(r);
    break;
  }
  return t;
}
function Ew(e) {
  const t = (n) => D(n) && Sk.has(n.getMarker()) || _k(n);
  if (t(e) || he(e) && e.getMarker() === Xf)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ee(n)) return n;
      if (!t(n)) return;
    }
}
function yo(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ms(e);
  if (n.some((s) => he(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Wr(e.getChildren(), i, t, r), Wr(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function Aw(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ms(e)], o = yo(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = R();
  if (P(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((k) => k.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Yf(o, l.anchor));
  }
  const u = pc(s, o, void 0, Ot()), f = yn(o.text, { getMarker: n }), [d] = f;
  if (f.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Ri(f) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const p = hn.serializeEditorState(
    { type: sn, version: nn, content: f },
    r
  );
  if (_s(p.root.children, n) === Ss(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = p.root.children.map((m) => ps(m));
  if (!Ee(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const g = h[0];
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), hc(
    u,
    () => yo(g, n, r)
  ), Tk(h, a, c, n, r), !0;
}
function bo(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (De(n)) return;
    !t && (U(n) || he(n) || Ee(n)) && (t = n), Br(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? Ew(r) : void 0) ?? t;
}
function yr(e, t) {
  const r = bo(e);
  return r ? U(r) ? Mw(r, t) : Ee(r) ? Aw(r, t) : vk([r], t) : !1;
}
const Pw = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Ch(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !Pw.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function ra(e, t) {
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
          t.push(`\\${n}`), Ch(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), ra(r.content, t), Ch(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), ra(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), ra(r.content, t);
      }
    }
}
function Sh(e, t, r) {
  const n = bo(e);
  if (!he(n)) return !1;
  const i = R();
  if (!P(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = jf(n, t, r);
  if (!o) return !1;
  const a = yn(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    Mr.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  ra(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (Mr.test(u)) continue;
    const f = c.get(u);
    f !== void 0 && f > 0 && c.set(u, f - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function Qf(e, t) {
  return Mk(e, t, b.Paragraph);
}
function ww(e, t) {
  return Mk(e, t, b.Character);
}
function Mk(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== b.Unknown ? i === r : !(ze.isValidMarker(n) || Mu(n));
}
function Nw(e) {
  return [Tt(e), bi()];
}
function Zf(e) {
  _r(e, 2);
}
function Ow(e) {
  const t = R();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function ed(e) {
  const t = Ow(e);
  e.splice(0, 0, Nw(e.getMarker())), t && Zf(e);
}
function Ra(e, t) {
  e.setMarker(t), ed(e), Zf(e);
}
function Rw(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!pr(n)) {
    if (C(n) && !N(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(q), xt(n, ge, Gr), n.setMode("token");
      return;
    }
    if (Bm(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(bi());
  }
}
function _h(e, t, r) {
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
function Ys(e) {
  for (let t = e; t; t = t.getParent())
    if (he(t)) return t;
}
function $w(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Ys(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Ys(r.getNode())?.is(s) ?? !1, a = Ys(n.getNode())?.is(s) ?? !1;
    return !(o && !_h(r, s, "start") || a && !_h(n, s, "end"));
  });
}
function eu(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = R();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of $w(r)) t.add(n.getKey());
}
function Iw(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = R();
  if (!P(r) || !r.isCollapsed()) return;
  const n = Ys(r.focus.getNode());
  n && t.add(n.getKey());
}
function qw(e) {
  const t = R();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => N(r)) && (eu(e), t.removeText());
}
const Lw = new RegExp(
  String.raw`^\\\+?([${wr}]+)(?:[ \u00A0]|$)`
);
function Dw(e, t) {
  const r = Lw.exec(e.getTextContent());
  return !!r && Qf(r[1], t);
}
function Uw(e, t) {
  if (!Ts(t.viewOptions)) return;
  if (lr(e.getFirstChild())) {
    Rw(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (Dw(e, t.getMarker)) return;
    ed(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => he(o) && !o.is(e))) {
      Ra(e, Fr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (he(r)) {
    const n = e.getChildren().filter((a) => !pr(a)), i = R();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Ys(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || O(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && _r(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Ra(e, Fr);
}
function Kw(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = br(t, ys(e.getMarker()));
  return r === "" ? void 0 : r;
}
function Fw(e) {
  const t = e.getChildren().filter((s) => !N(s) && ce(s, ge) !== "attribute"), r = t[0];
  r && C(r) && r.getTextContent().startsWith(q) && r.setTextContent(r.getTextContent().slice(1));
  const n = Kw(e);
  n && t.push(Oe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function zw(e, t) {
  const r = e.getChildren(), n = r.some((s) => N(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => C(c) && !N(c) && c.getTextContent() === Ht(s)
    ), a = ms(e).some(({ node: c }) => N(c));
    if (!o && !a) return;
    r.forEach((c) => {
      N(c) || (C(c) && c.getTextContent() === Ht(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => N(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function Bw(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(N(r) && r.getMarkerSyntax() === "opening")) {
    Fw(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing");
  i && !s && yr(e, t);
}
function Ek(e, t, r) {
  if (!N(e.getFirstChild()) && r?.markerMode === "editable" && Ts(r)) {
    Ra(e, t);
    return;
  }
  Qy(e, t);
}
function Ak() {
  const e = R();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Pk(e);
    return t !== "removed" ? t : (tu(), "handled");
  }
  return tu() ? "handled" : "declined";
}
function jw(e, t) {
  if (!t) return e;
  const r = rw.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Mh(e, t) {
  const r = R();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!wk())
      return "declined";
  } else {
    const s = Pk(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => jw(s, t)
  );
  Eh(n ?? "");
  for (const s of i)
    tu(), Eh(s);
  return "handled";
}
function Vw(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = _i(n);
  if (!i) return !1;
  const s = Cr(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !C(i) || N(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Pk(e) {
  const t = Cr(e.anchor.getNode()), r = Cr(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), Ww() ? "removed" : "needs-plain-split");
}
function Eh(e) {
  if (e === "") return;
  const t = R();
  P(t) && t.insertText(e);
}
function Ww() {
  const e = R();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Cr(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => N(r) && r.getMarkerSyntax() === "opening");
}
function wk() {
  const e = R();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Cr(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function tu() {
  const e = R();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = wk();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = ln("fp", { closed: "false" });
  i.append(Tt("fp"));
  const s = C(t) && !N(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    ss(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (xS(u), i.append(u));
  }
  return i.getChildren().every(N) && i.append(Oe(ct)), Nk(i), !0;
}
function Nk(e) {
  const t = e.getChildren().find((r) => !N(r));
  if (C(t)) {
    const r = t.getTextContent().startsWith(q) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (O(t)) {
    Nk(t);
    return;
  }
  e.selectEnd();
}
function Hw(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function Gw(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of ve().getChildren()) {
    if (t && n.is(t)) break;
    (ut(n) || Ye(n) || he(n)) && r.push(n.getMarker());
  }
  return r;
}
function Jw(e) {
  let t = e;
  for (; O(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function Yw(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (lr(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && pr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(Jw(i)) && r === 0 : !1;
}
function Xw(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !lr(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && pr(i) && t.is(i) && r === 0;
}
function Qw() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function Zw() {
  const e = R();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = lt(t, he), s = !n && (!i || Xw(i, t, r)) ? "paragraph" : "character", o = Cr(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: Gw(t),
    openCharMarkers: Hw(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Zu(t, r),
    anchorRect: Qw()
  };
}
function eN() {
  const e = R();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!C(t) || N(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = nw.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function tN(e, t, r) {
  Ek(e, t, r), Zf(e);
}
function rN(e, t, r) {
  const n = R();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = lt(i, he);
  if (t === "backslash" && s && Yw(s, i, n.focus.offset)) {
    tN(s, e, r);
    return;
  }
  Rk(e, r);
}
function nN(e, t) {
  const r = R();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Ok(e) {
  const t = R();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function iN(e, t, r, n) {
  if (P(R()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && eN(), e.kind === "closeTag") {
    Ok(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Ak() !== "declined") return;
  if (e.kind === "paragraph" && ft.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    rN(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (ze.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Ub(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  Bl(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Ot(), reference: r });
}
function Rk(e, t) {
  const r = R();
  if (!P(r)) return;
  const n = Ts(t);
  if (Lb()) {
    const s = R();
    if (!P(s)) return;
    const o = lt(s.anchor.getNode(), he);
    if (!o) return;
    o.setMarker(e), n && ed(o);
    return;
  }
  const i = r.insertParagraph();
  he(i) && (n ? Ra(i, e) : i.setMarker(e));
}
function sN() {
  const [e] = ye();
  return V(() => e.registerCommand(pg, () => !0, Pt), [e]), null;
}
function oN(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = Q1.exec(e)?.[1];
  return r === void 0 ? !1 : !Qf(r, t);
}
function $k(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !oN(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!he(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (he(i))
    return [i, r];
}
function Ik(e, t) {
  const r = $k(e, t.getMarker);
  return r !== void 0 && vk(r, t);
}
function aN(e, t) {
  const r = R();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function qk(e) {
  const t = Z1.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function cN(e) {
  const t = R();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = qk(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function lN(e) {
  const t = R();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (U(e.getParent()) && C(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      Xu(n);
      return;
    }
  }
  C(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Ah(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = qk(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  lN(e);
}
function Ph(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Lk(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return yr(e, r);
  const n = cN(e), i = e.getParent();
  if (he(i)) {
    if (!Qf(t, r.getMarker))
      return Ik(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : yr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Ph(s, t) && Ah(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || U(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? ww(t, r.getMarker) : ze.isValidMarker(s)))
      return yr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return yr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(N).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (aN(c, Je(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Ph(a, s) && Ah(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return yr(e, r);
}
function uN(e) {
  const t = R();
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
function fN(e, t) {
  const r = e.getTextContent();
  if (Bn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Le(e.getParent()) && Eu(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !uN(e)) {
    $v(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = Y1.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Lk(e, n[1], t);
      return;
    }
    if (X1.test(r)) {
      t.pendingKeys.delete(e.getKey()), yr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = Je(e.getMarker(), e.getNested());
    if (D(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = R(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Oe(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function dN(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Gm(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Dk(e) {
  if (!Cg(e)?.length)
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
const qs = Dk("v"), pN = Dk("c"), wh = /^[ \u00A0]*$/;
function Nh(e, t, r) {
  const n = e.getNextSibling();
  if (C(n) && n.getType() === We.getType() && n.getMode() === "normal" && ce(n, ge) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = Oe(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function hN(e, t) {
  const r = e.getTextContent(), n = nr("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (qs.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = qs.valueAndRest.exec(c);
    if (l && wh.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (qs.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = qs.valueAndRest.exec(r);
  if (!s) {
    const c = qs.markerRest.exec(r);
    if (c) {
      const [, l, u, f] = c, d = R(), p = P(d) && d.isCollapsed() && d.anchor.key === e.getKey() ? d.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(nr("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, f.length) : void 0;
      Nh(e, f, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), yr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), wh.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(nr("v", o)), a && Nh(e, a, a.length);
}
const gN = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function mN(e, t) {
  const r = e.getParent();
  if (!U(r) || r.getIsCollapsed() !== !1 || !Cg(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!N(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Ht(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = gN.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Ht(a)), !0;
}
function yN(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!C(t)) return;
  const r = nr("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = pN.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Uk(e) {
  if (Pe(e)) {
    const { wrapper: t } = ja(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (U(e)) {
    const { wrapper: t } = Au(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ee(e)) {
    const t = [], r = Xg(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Zg(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Re(e)) {
    const t = [], r = so(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = so(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function bN(e) {
  const t = R();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Uk(e).some((n) => r.is(n));
}
function kN(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && he(e) && Bm(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ao)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && _o(l, e) && (i || bN(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Uk(e))
    l.remove(), n = !0;
  let s = !1;
  D(e) && mm(e) !== void 0 && !yC(e) && (ym(e), s = !0, n = !0);
  let o = !1, a = !1, c = !1;
  for (const l of ao)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (e_(l, e)) {
        fo(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && uy(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Qa(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Oh(e) {
  return C(e) && e.getType() === We.getType() && e.getMode() === "normal" && ce(e, ge) !== "attribute";
}
function xN(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ee(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Oh(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Oh(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Vo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = xN(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ee(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (N(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Bn(c)) continue;
      const h = Zb.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = Lk(c, h[1], e) || n : r === "idle" && Sh(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Ik(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = yr(c, e) || n;
      continue;
    }
    const l = qn(c)?.owner, u = l?.isAttached() ? l : c, f = u.getKey();
    if (o.has(f)) {
      a !== f && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(f)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(f);
      continue;
    }
    e.pendingKeys.delete(a), a !== f && e.pendingKeys.delete(f), o.add(f);
    const d = kN(u, e, r);
    if (n = d.mutated || n, !d.handled) {
      if (r === "idle" && Sh(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(f);
        continue;
      }
      n = yr(u, e) || n;
    }
  }
  return n;
}
function Kk(e) {
  if (Yt(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return zs(t) !== void 0;
  return !1;
}
function TN(e) {
  const t = qn(e);
  if (!t) return !1;
  const r = fn(t.kind);
  return !Qa(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function vN(e) {
  let t = e.getParent();
  for (; de(t); ) t = t.getParent();
  return D(t) ? t : void 0;
}
function CN(e, t) {
  const r = e.getTextContent(), n = ce(e, ge), i = e.getParent();
  if (n !== "attribute" && Ee(i)) {
    r.replace(/^[ \u00A0]+/, "") === nr("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (mN(e, t)) return;
  if (n === "attribute") {
    TN(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    r.includes("|") && Kk(e) || r.includes("//") && !dl(e) || em(e) || Ee(bo(e)) ? t.pendingKeys.add(e.getKey()) : t.pendingKeys.delete(e.getKey());
    const a = vN(e);
    a && Ru(a) ? t.pendingKeys.add(a.getKey()) : a && mm(a) !== void 0 && a.markDirty();
    return;
  }
  if (dl(e)) return;
  const s = R(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (ew.test(o)) {
    if (Pv(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), yr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function SN(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : uy(e, t);
}
function _N(e) {
  const t = (r) => {
    if (N(r)) {
      Bn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Yt(r)) {
      Gm(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of ao)
      n.settleScope !== "none" && n.ownerPredicate(r) && (_o(n, r) || SN(n, r)) && e.pendingKeys.add(r.getKey());
    if (Re(r)) {
      r.getTextContent() !== nr("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (C(r)) {
      if (r.getType() !== We.getType() || ce(r, ge) === "attribute") return;
      const n = r.getParent();
      if (Ee(n)) {
        r.getTextContent() !== nr("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Kk(r) || i.includes("//") || em(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      Ru(r) && e.pendingKeys.add(r.getKey()), r.getChildren().forEach(t);
      return;
    }
    if (!De(r) && !ut(r)) {
      if (Le(r) && r.getChildrenSize() === 0) {
        const n = qn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      O(r) && r.getChildren().forEach(t);
    }
  };
  ve().getChildren().forEach(t);
}
const $a = "usfm:", Fk = "usfmopen", zk = "usfmclosed";
function MN(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const EN = new RegExp(
  [$a, Fk, zk].map(MN).join("|")
), AN = "\uFEFF", PN = /^usfm_(.+)$/;
function wN(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function NN(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function ON(e) {
  return e.startsWith($a) ? NN(e.slice($a.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Bk(e) {
  for (const t of e.classList) {
    const r = PN.exec(t);
    if (r) return r[1];
  }
}
function RN(e) {
  const t = Bk(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function $N(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith($a)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Fk) && !n.contains(zk)) && Bk(r) !== void 0)
      return !0;
  }
  return !1;
}
function jk(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(ON(e.nodeValue ?? ""));
    return;
  }
  if (!wN(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((f) => jk(f, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? RN(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function IN(e) {
  if (!EN.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !$N(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => jk(n, !1, r)), r.join("").replaceAll(AN, "").replaceAll(q, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function qN(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ce(e, ge);
  if (r === "attribute" || r === Gr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ut(o) || Ee(o) || De(o)) return;
  const n = t.startsWith(q) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? q : "") + i.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  s !== t && e.setTextContent(s);
}
function LN(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function DN(e, t) {
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
function ru(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? IN(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(LN(s)) : ""),
    isInternal: DN(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Rh = String.raw`\\(?:\+?[${wr}]+\*?|\*)`, UN = new RegExp(
  String.raw`(?<=${Rh})\u00A0|\u00A0(?=${Rh})`,
  "g"
);
function td(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(UN, " ").replaceAll(q, "~");
}
const Vk = new RegExp(
  String.raw`\\c(?![${wr}])[ \u00A0]*[^\s\\]*`,
  "g"
), Wk = new RegExp(String.raw`\\id(?![${wr}])[^\n\\]*`, "g"), KN = new RegExp(
  String.raw`^(?:${Vk.source}|${Wk.source})`
);
function rd(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Vk, "").replace(Wk, "");
    return KN.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function nu(e) {
  if (C(e) && ce(e, ge) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Le(t)) return !0;
  return !1;
}
function FN(e) {
  return nu(e.anchor.getNode()) || nu(e.focus.getNode());
}
function zN(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && nu(t.getNode());
}
function BN(e, t) {
  const n = zN(e) ? t : td(rd(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function jN(e, t = !1, r = () => {
}) {
  const n = ru(e, Ot()._config.namespace);
  if (!n) return !1;
  const i = R(), s = P(i) && FN(i);
  if (!s && n.isInternal || t && P(i) && rs(i))
    return !1;
  const { text: o } = n;
  if (!o || !P(i)) return !1;
  if (e?.preventDefault(), s)
    return BN(i, o), !0;
  const a = td(rd(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = Ot();
  return c.forEach((u, f) => {
    if (f > 0 && l.dispatchCommand(sa, void 0), u === "") return;
    const d = R();
    P(d) && d.insertText(u);
  }), !0;
}
function VN(e) {
  if (e.getTextContent() !== q) return !1;
  const t = e.getParent();
  return U(t) ? !Ct(e.getPreviousSibling()) : !1;
}
function WN(e, t) {
  if (t || e.getTextContent() !== q) return "";
  const r = e.getParent();
  if (!U(r) || !Ct(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function HN(e) {
  const t = e.getParent();
  return (U(t) ? t.getCaller() : void 0) || eo;
}
function GN(e) {
  const t = e.getParent();
  return !t || Un(t) === void 0;
}
function Hk(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = hu(e);
  let l = "", u = !0;
  for (const f of t) {
    if (O(f) && !f.isInline()) {
      !u && GN(f) && (l += `
`), u = !f.isEmpty();
      continue;
    }
    if (u = !1, Ct(f))
      (f !== n || !e.isCollapsed()) && (l += (f === r ? "" : " ") + HN(f));
    else if (C(f)) {
      let d = f.getTextContent();
      f === r ? f === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (d = a < c ? d.slice(a, c) : d.slice(c, a)) : d = o ? d.slice(a) : d.slice(c) : f === n && (d = o ? d.slice(0, c) : d.slice(0, a)), l += VN(f) ? "" : d.replaceAll(q, " ") + WN(f, f === n);
    } else (gs(f) || xo(f)) && (f !== n || !e.isCollapsed()) && (l += f.getTextContent().replaceAll(q, " "));
  }
  return l;
}
function Gk(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function JN(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => ut(r) || Ee(r)
    )
  );
}
function YN(e) {
  const t = R();
  if (!P(t) || t.isCollapsed()) return;
  const r = Hk(t), n = {
    "text/plain": r,
    "text/html": Gk(r)
  };
  if (oc() || JN(t)) return n;
  const i = qT(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function $h(e, t, r) {
  const n = R();
  if (!P(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !fb();
  const i = YN(t);
  return i ? Jk(e, t, n, i, r) : !1;
}
function Jk(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || LT(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const Yk = fu(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Yc(e) {
  const t = e();
  return Kr(cg), Kr(Mg), t;
}
const Ih = 8, XN = 1e3;
function ji(e, t) {
  const r = Re(e) ? ["va", "vp"] : Pe(e) ? ["milestone"] : U(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    s_(fn(n), e, t.pendingKeys);
}
function QN(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Ka) || Ju(e) === "remote")
      return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ee(o);
        if (!c) continue;
        const l = qn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ee(o.getKey());
        c?.isAttached() && fn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return et(
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
    e.registerMutationListener(fr, r),
    e.registerMutationListener(Pr, r),
    e.registerMutationListener(Jr, r)
  );
}
function iu(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = R();
  return r ? t ? xb(r, t) : P(r) && rs(r) : !1;
}
function ZN(e, t, r) {
  return et(
    e.registerCommand(
      rn,
      (n) => {
        if (oc() || iu(t)) return !1;
        const i = ru(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? td(rd(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Mh(o, t.getMarker);
          if (a === "declined" && Vw(e) && (a = Mh(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      rr
    ),
    e.registerCommand(
      rn,
      (n) => {
        const i = ru(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !h1()) return !1;
        const o = R();
        return t.structureProtectionMode === "protected" && P(o) && rs(o) ? !1 : (n?.preventDefault(), P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(sa, void 0), a === "") return;
          const l = R();
          P(l) && l.insertText(a);
        }), !0);
      },
      Ve
    ),
    e.registerCommand(
      rn,
      () => (t.splitExpected.current = !0, !1),
      Pt
    )
  );
}
function eO({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = ye(), o = e?.markerMode === "editable", a = !!e && St(e), c = se(void 0), l = se(n);
  return V(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? zr, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), V(() => {
    if (!o || !e) return;
    const u = {
      viewOptions: e,
      getMarker: t ?? zr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    c.current = u;
    const f = hC(
      s,
      u.pendingKeys,
      (E) => {
        u.pendingKeys.clear(), E.read(() => _N(u));
      }
    );
    let d, p = !1, h = !1, g, m = !1, k = !1, T = 0;
    const M = () => T < Ih ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Ih} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), I = (E, w = "departure") => {
      s.update(() => {
        T = Yc(
          () => Vo(u, E, w)
        ) ? T + 1 : 0;
      });
    };
    let A;
    const K = () => {
      if (A !== void 0 && clearTimeout(A), A = void 0, k || u.pendingKeys.size === 0) return;
      const E = l.current ?? XN;
      E < 0 || (A = setTimeout(() => {
        A = void 0, !(k || u.pendingKeys.size === 0) && (p || M() || I(void 0, "idle"));
      }, E));
    }, J = et(
      s.registerNodeTransform(fr, (E) => {
        if (s.isComposing()) return;
        fN(E, u);
        const w = qn(E);
        w && (Re(w.owner) || U(w.owner) || Ee(w.owner) || Pe(w.owner) && ja(w.owner).wrapper === void 0) && ji(w.owner, u);
      }),
      s.registerNodeTransform(gt, (E) => {
        s.isComposing() || (hN(E, u), ji(E, u));
      }),
      s.registerNodeTransform(Jt, (E) => {
        s.isComposing() || (yN(E), E.isAttached() && ji(E, u));
      }),
      s.registerNodeTransform(ft, (E) => {
        s.isComposing() || Uw(E, u);
      }),
      s.registerNodeTransform(we, (E) => {
        if (!s.isComposing()) {
          Bw(E, u);
          for (const w of ["separator", "char"])
            E.isAttached() && _o(fn(w), E) && u.pendingKeys.add(E.getKey());
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
      s.registerNodeTransform(Tr, (E) => {
        s.isComposing() || ji(E, u);
      }),
      s.registerNodeTransform(Jr, (E) => {
        if (s.isComposing()) return;
        const w = qn(E);
        w && (Pe(w.owner) || Re(w.owner) || U(w.owner) || Ee(w.owner)) && ji(w.owner, u);
      }),
      s.registerNodeTransform(ze, (E) => {
        s.isComposing() || (zw(E, u), ji(E, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Yr, (E) => {
        s.isComposing() || dN(E, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(We, (E) => {
        s.isComposing() || CN(E, u);
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
      s.registerMutationListener(
        We,
        (E) => {
          s.getEditorState().read(() => {
            for (const [w, fe] of E) {
              if (fe === "destroyed") continue;
              const Y = ee(w);
              !Y || ce(Y, ge) !== "attribute" || Le(Y.getParent()) || s.getElementByKey(w)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      QN(s, u),
      ...a ? [
        s.registerNodeTransform(We, (E) => {
          s.isComposing() || qN(E);
        }),
        s.registerCommand(
          za,
          (E) => $h(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            E && typeof E == "object" && "clipboardData" in E ? E : null,
            s,
            !1
          ),
          Ve
        ),
        s.registerCommand(
          pi,
          (E) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            $h(
              E && typeof E == "object" && "clipboardData" in E ? E : null,
              s,
              !0
            )
          ),
          Ve
        ),
        s.registerCommand(
          rn,
          (E) => jN(
            // Same jsdom-safe duck-check as COPY above.
            E && typeof E == "object" && "clipboardData" in E ? E : null,
            u.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              u.splitExpected.current = !0;
            }
          ),
          Ve
        )
      ] : [],
      s.registerCommand(
        pi,
        () => (!iu(u) && !oc() && eu(u), !1),
        rr
      ),
      s.registerCommand(
        gu,
        () => (s.isComposing() || qw(u), !1),
        Zi
      ),
      s.registerCommand(
        Fa,
        () => (p = !1, T = 0, K(), !1),
        Pt
      ),
      s.registerCommand(
        mn,
        (E) => (p = !1, T = 0, K(), (E.key === "Backspace" || E.key === "Delete") && !iu(u, mb(E)) && (eu(u), Iw(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !E.ctrlKey || E.altKey || E.shiftKey || E.metaKey || E.key !== " " && E.code !== "Space" || !p1() ? !1 : (E.preventDefault(), !0)),
        Ve
      ),
      s.registerCommand(
        fg,
        (E) => {
          const w = Ak();
          w === "needs-plain-split" && s.dispatchCommand(sa, void 0);
          const fe = w !== "declined" || o_();
          return fe && E?.preventDefault(), Vo(u), fe;
        },
        Ve
      ),
      s.registerCommand(
        sa,
        () => (u.splitExpected.current = !0, Lb()),
        Ve
      ),
      ZN(s, u, a),
      s.registerCommand(
        Yk,
        () => {
          if (p) return !0;
          const E = s.getRootElement(), w = E?.ownerDocument, fe = !!E && !!w && w.hasFocus() && E.contains(w.activeElement);
          let Y;
          if (fe) {
            const be = R();
            Y = P(be) ? be.focus.key : d;
          }
          return Yc(() => Vo(u, Y)), !0;
        },
        Pt
      ),
      s.registerCommand(
        Tu,
        () => (h = !0, !1),
        Pt
      ),
      s.registerCommand(
        yu,
        () => {
          if (p) return !1;
          const E = R(), w = P(E) ? E.focus.key : d;
          return Yc(() => Vo(u, w)), !1;
        },
        Pt
      ),
      s.registerUpdateListener(({ editorState: E, tags: w }) => {
        const fe = h || w.has(to);
        h = !1, u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const Y = E.read(() => {
          const le = R();
          return P(le) ? le.focus.key : void 0;
        }), be = g;
        if (Y !== void 0 && (g = Y), w.has(Ka)) {
          dm(s, E, w), p = !0, Y !== void 0 && (d = Y);
          return;
        }
        if (fe) {
          Y !== void 0 && Y !== be && (p = !0);
          return;
        }
        p || (Y !== void 0 && (d = Y), K(), !(m || Y === void 0) && [...u.pendingKeys].some((le) => le !== Y) && (m = !0, queueMicrotask(() => {
          m = !1, !k && (M() || I(d));
        })));
      })
    );
    return () => {
      k = !0, A !== void 0 && clearTimeout(A), A = void 0, f(), J(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const tO = ["status_unknown", "status_invalid"], Xk = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, rO = Object.values(Xk);
function nO(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Xk[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function qh(e) {
  e.classList.remove(...tO), e.removeAttribute("aria-description"), rO.includes(e.title) && e.removeAttribute("title");
}
function iO(e, t, r, n) {
  const i = (a) => a.read(() => ve().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = ee(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function sO(e) {
  const t = ee(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : N(t) && t.getParent()?.getKey() === r.getKey();
}
function oO({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ye(), i = e?.markerMode === "editable";
  return V(() => {
    if (!i) return;
    const s = t ?? ba;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = U1(s, l);
        let f = u;
        if (l) {
          f = new Map(u);
          for (const [d, p] of o) {
            if (f.has(d) || sO(d)) continue;
            const h = ee(d)?.getTopLevelElement();
            !h || l.has(h.getKey()) || f.set(d, p);
          }
        }
        for (const [d] of o) {
          if (f.has(d)) continue;
          const p = n.getElementByKey(d);
          p && qh(p);
        }
        for (const [d, p] of f) {
          const h = n.getElementByKey(d);
          h && nO(h, p);
        }
        o = f, r?.debug(`[MarkerValidation] pass: ${f.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: f, dirtyLeaves: d }) => {
        f.size === 0 && d.size === 0 || a(
          iO(l, u, f, d)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && qh(u);
      }
    };
  }, [n, i, t, r]), null;
}
function aO(e, t) {
  const r = df(lf), n = nc(t);
  if (!r || !n?.end) return;
  const i = Gi.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = bu({
    namespace: "markers-view-copy",
    nodes: [Ze, ...sc],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    hn.serializeEditorState(i, r)
  ).read(
    () => {
      const a = rc(n, r);
      return a ? Hk(a) : void 0;
    },
    { editor: s }
  );
}
function cO({ viewOptions: e }) {
  const [t] = ye();
  return V(() => {
    const r = (n, i) => {
      const s = R();
      if (!P(s) || s.isCollapsed()) return !1;
      const o = aO(t, e);
      return o === void 0 ? !1 : Jk(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        n && typeof n == "object" && "clipboardData" in n ? n : null,
        t,
        s,
        { "text/plain": o, "text/html": Gk(o) },
        i
      );
    };
    return et(
      t.registerCommand(za, (n) => r(n, !1), Ve),
      t.registerCommand(pi, (n) => r(n, !0), Ve)
    );
  }, [t, e]), null;
}
function No(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = gn(o);
    a && O(s) && No(s.getChildren(), a, r);
  }
}
function Qk(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = gn(o);
      if (a) {
        n(a);
        continue;
      }
      const c = us(o);
      if (c === void 0 || !c.includes(ht)) continue;
      const l = c.split(ht), u = [];
      for (let f = 0; f < l.length; f++) {
        const d = l[f];
        if (f > 0 && u.push(...t[r++] ?? []), d.length > 0) {
          const p = {
            ...o,
            text: d
          };
          u.push(p);
        }
      }
      i.splice(s, 1, ...u), s += u.length - 1;
    }
  };
  n(e);
}
function Oo(e, t, r) {
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
function Zk(e, t) {
  const r = [];
  for (const n of e)
    lk(n, t) || ((he(n) || D(n)) && r.push(n.getMarker()), O(n) && r.push(...Zk(n.getChildren(), t)));
  return r;
}
function ex(e) {
  const t = [];
  for (const r of e) {
    const n = Bf(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = gn(r);
    i && t.push(...ex(i));
  }
  return t;
}
function nd(e, t, r) {
  const n = Zk(e, r), i = ex(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function tx(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = R();
  let n, i;
  if (P(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = ee(t.key), i = t.offset;
  else
    return;
  if (!(!C(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function id(e, t) {
  const r = t && rx(e, t);
  return r ? Gf(e, r.start, r.end) : e;
}
function rx(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function nx(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Vf(e, o, s);
  if (!c) return;
  const l = id(c, i), u = yn(l.text, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Ri(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const f = hn.serializeEditorState(
    { type: sn, version: nn, content: u },
    s
  ).root.children;
  if (dc(f) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const d = Oo(c, t, n);
  if (!d) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (_s(f, o) === Ss(e, o) && nd(e, f, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Qk(f, d.serialized);
  const h = lO(e), g = ix(f);
  for (let m = 0; m < h.length && m < g.length; m++)
    h[m].sid !== void 0 && g[m].number === h[m].number && (g[m].sid = h[m].sid);
  return Jf(
    e,
    l,
    d.live,
    f,
    "paras",
    o,
    s
  );
}
function lO(e) {
  const t = [], r = (n) => {
    Re(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : O(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function ix(e) {
  const t = [];
  for (const r of e) {
    Wg(r) && t.push(r);
    const n = gn(r);
    n && t.push(...ix(n));
  }
  return t;
}
function uO(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = mo(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const f = id(l, i), d = yn(f.text, {
    getMarker: o,
    isNoteContext: !0
  });
  if (d.length === 0) return;
  if (Ri(d) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = d;
  if (d.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], g = Ck(h), m = e.getCategory() !== g, k = ak(e, h, g, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const T = k.children;
  if (dc(T) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const M = Oo(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (_s(T, o) === Ss(u, o) && nd(u, T, o)) {
    if (m)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: m };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Qk(T, M.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: Jf(
      u,
      f,
      M.live,
      T,
      "noteContent",
      o,
      s
    ),
    contentNodes: u,
    category: g,
    categoryChanged: m
  };
}
function Lh(e) {
  return e.$?.textType;
}
function fO(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Lh(e) === Lh(t);
}
function dO(e) {
  const t = [];
  for (const r of e) {
    const n = ee(r);
    n?.isAttached() && De(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function pO(e) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!U(t)) return;
  const r = e.getTextContent();
  if (Bn(e)) return;
  const n = Zb.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Dh(e, t) {
  const r = e;
  r.marker = t, r.text = fk(t, r.markerSyntax, r.nested);
}
function sx(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!ze.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Dh(a.node, s);
  const c = n.getChildren().filter(N).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Dh(l.node, s);
}
function ox(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = yo(e, i, n);
  if (!o) return;
  const a = id(o, r), c = yn(a.text, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Ri(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = hn.serializeEditorState(
    { type: sn, version: nn, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const f = [e, ...Ms(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && _s(u, i) === Ss(f, i) && nd(f, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Jf(
    f,
    a,
    [],
    u,
    "chapter",
    i,
    n
  );
}
function ax(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (f) => {
    U(f) ? s.set(f.getKey(), f) : Ee(f) ? o.set(f.getKey(), f) : n.set(f.getKey(), [f]);
  };
  for (const f of e) {
    const d = ee(f);
    if (!d?.isAttached()) continue;
    const p = bo(d);
    if (p) {
      if (c(p), N(d)) {
        const h = $k(d, t.getMarker);
        h && i.push(h);
      }
      if (U(p)) {
        const h = pO(d);
        h && a.set(p.getKey(), h);
      }
    }
  }
  const l = /* @__PURE__ */ new Set();
  for (const f of i)
    f.some((d) => l.has(d.getKey())) || (f.forEach((d) => {
      l.add(d.getKey()), n.delete(d.getKey());
    }), n.set(f[0].getKey(), f));
  if (r) {
    const f = bo(r.node);
    f && c(f);
  }
  const u = dO(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: u,
    huskKeys: new Set(u.map((f) => f.getKey()))
  };
}
function cx(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && us(r), s = n && us(n);
  r && n && i !== void 0 && s !== void 0 && fO(r, n) && (r.text = i + s, e.splice(t, 1));
}
function gc(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? gn(s.node) : void 0;
  if (!s || !o) return !1;
  const a = uO(e, t, r, n, i);
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
function hO(e, t, r, n, i) {
  const s = tx(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: u, huskKeys: f } = ax(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && u.length === 0)
    return;
  const d = /* @__PURE__ */ new Map();
  No(ve().getChildren(), e.root.children, d);
  for (const p of l.values()) sx(p, d);
  for (const p of a.values())
    gc(p, d, r, f, s);
  for (const p of o.values()) {
    const h = d.get(p[0].getKey());
    if (!h) continue;
    const g = nx(p, d, r, f, s);
    if (!g) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || h.siblings.splice(m, p.length, ...g);
  }
  for (const p of c.values()) {
    const h = d.get(p.getKey());
    if (!h) continue;
    const g = 1 + Ms(p).length, m = ox(p, r, s);
    if (!m) continue;
    const k = h.siblings.indexOf(h.node);
    k < 0 || h.siblings.splice(k, g, ...m);
  }
  for (const p of u) {
    const h = d.get(p.getKey());
    if (!h) continue;
    const g = h.siblings.indexOf(h.node);
    g < 0 || cx(h.siblings, g);
  }
  return Ab(e, r.viewOptions);
}
function gO({
  viewOptions: e,
  logger: t
}) {
  const [r] = ye(), n = Ts(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return V(() => {
    if (n)
      return r.registerNodeTransform(
        ft,
        (i) => mO(i, t)
      );
  }, [r, n, t]), null;
}
function mO(e, t) {
  e.getMarker() !== Fr && (e.isEmpty() || lr(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Fr}" (key ${e.getKey()})`
  ), e.setMarker(Fr)));
}
function Ls(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const yO = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Xr(e) {
  return yO.exec(e)?.[1] ?? e;
}
function Hr(e, t) {
  const r = e.jsonPath.slice(Xr(e.jsonPath).length);
  return { ...e, jsonPath: `${mt(t)}${r}` };
}
function lx(e, t) {
  return e.length === t.length && e.every((r, n) => r === t[n]);
}
function ux(e) {
  if (uu(e) || ia(e)) return !0;
  const t = fx(e);
  return t === "marker" || t === "caller";
}
const bO = /^\['([^']+)'\]$/;
function fx(e) {
  if (Xs(e))
    return bO.exec(
      e.jsonPath.slice(Xr(e.jsonPath).length)
    )?.[1];
}
function dx(e, t) {
  return ux(e) && lx(ur(Xr(e.jsonPath)), Vr(t));
}
function px(e, t, r) {
  if (!e.isAttached()) return;
  const [n, i] = jr(
    Hr(t, Vr(e)),
    r
  );
  if (!(!n || i === void 0))
    return { key: n.getKey(), offset: i, type: O(n) ? "element" : "text" };
}
function hx(e, t) {
  const r = Wt(e, t, { addressDisplayBytes: !0 }), n = r && ee(r.key);
  return r && r.offset > 0 && N(n) && n.getMarkerSyntax() !== "opening" ? r : void 0;
}
function gx(e, t) {
  const r = Wt(e, t, { addressDisplayBytes: !0 });
  if (!r || r.offset !== 0) return;
  const n = e.spans.findIndex((o) => o.key === r.key), i = e.spans[n], s = n > 0 ? e.spans[n - 1] : void 0;
  if (!(!i || !Js(i) || !s || s.end !== i.start || !Js(s)))
    return hk(s);
}
function kO(e, t) {
  const r = hx(e, t);
  if (r) return r;
  const n = gx(e, t);
  if (n) return n;
  const i = Wt(e, t);
  return i && xO(e, i);
}
function xO(e, t) {
  if (t.type !== "text") return t;
  const r = e.spans.findIndex((a) => a.key === t.key), n = e.spans[r], i = e.spans[r + 1];
  if (!n || !i || n.end === n.start || t.offset !== n.end - n.start)
    return t;
  const s = e.text[i.start] === "\\", o = Mr.test(e.text[n.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function mx(e) {
  const t = e.markerName.length + 2, r = t + e.valueLength;
  return { valueStart: t, closerStart: r, closerLength: e.markerName.length + 2 };
}
function TO(e, t, r) {
  const { keyName: n } = e, { valueStart: i, closerStart: s } = mx(e);
  return r === 0 ? { jsonPath: t, keyName: n } : r < i ? { jsonPath: t, keyName: n, keyOffset: r - 1 } : r < s ? {
    jsonPath: `${t}['${n}']`,
    propertyOffset: r - i
  } : { jsonPath: t, keyName: n, keyClosingMarkerOffset: r - s };
}
function vO(e, t) {
  const { valueStart: r, closerStart: n, closerLength: i } = mx(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if (Zs(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (Qs(t))
    return s(t.keyClosingMarkerOffset, i, n);
  if (Ua(t)) return 0;
  if (Xs(t))
    return s(t.propertyOffset, e.valueLength, r);
}
function CO(e) {
  return Zs(e) || Qs(e) || Ua(e) ? e.keyName : fx(e);
}
function SO(e, t, r) {
  const n = kO(e.spelling, t), i = n && ee(n.key);
  if (!n || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === n.key);
  return s ? TO(
    s,
    mt(Vr(i)),
    n.offset
  ) : wt(i, n.offset, r);
}
function _O(e, t) {
  let r = ve();
  for (let n = 0; n < t.length; n += 1) {
    if (!O(r)) return;
    const i = Rt(r, St(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function Ia(e, t) {
  const r = ur(Xr(t.jsonPath));
  if (r.length === 0) {
    if (!on(t)) return { kind: "live", location: t };
    const o = e.settledToLiveTopIndex(t.offset);
    if (!o) {
      const a = Rt(
        ve(),
        St(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: a } };
    }
    return o.plan && o.indexWithinScope > 0 ? Ia(e, { jsonPath: mt([t.offset]) }) : { kind: "live", location: { ...t, offset: o.liveIndex } };
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
  const i = [n.liveIndex, ...r.slice(1)], s = _O(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: Hr(t, i) };
}
function yx(e, t) {
  const r = CO(t);
  if (r === void 0) return;
  const n = ur(Xr(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = ee(s.ownerKey);
      if (s.keyName !== r || !o || !lx(Vr(o), n))
        continue;
      const a = vO(s, t), c = i.spelling.spans.find((u) => u.key === s.ownerKey), l = a !== void 0 && c ? Nn(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: na(i.spelling, c.start + a)
        }
      };
    }
}
function MO(e, t, r, n) {
  const i = yx(t, r);
  if (i) return i.resolution;
  const [s, o] = jr(r, n.viewOptions);
  if (!s || o === void 0) return;
  const a = Kf(e, s), c = a && t.find((d) => d.sentinelIndex === a.sentinelIndex);
  if (c) {
    const d = Gs(c.spelling, s, o);
    return d && {
      kind: "literal",
      run: c,
      anchor: d.anchor,
      atWordByte: na(c.spelling, d.position)
    };
  }
  if (!a) {
    const d = Gs(e, s, o);
    return d ? {
      kind: "anchor",
      anchor: d.anchor,
      atWordByte: na(e, d.position)
    } : void 0;
  }
  const l = Ff(a.member, s);
  if (!l) return;
  const u = U(a.member) ? mo(a.member, n.getMarker, n.viewOptions)?.out : void 0, f = u && Gs(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: O(s) ? "element" : "text",
    noteAnchor: f && {
      anchor: f.anchor,
      atWordByte: na(u, f.position)
    },
    isNoteOwnBytes: U(a.member) && dx(r, a.member)
  };
}
function EO(e, t, r) {
  const n = yx(e, t);
  if (n) return n.resolution !== void 0;
  const [i, s] = jr(t, r);
  return i !== void 0 && s !== void 0;
}
function na(e, t) {
  const r = e.text[t];
  return r !== void 0 && !Mr.test(r);
}
function bx(e, t) {
  if (t.type !== "text") return t;
  const r = Hf(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && Mr.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function sd(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function AO(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function od(e) {
  const { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } = e;
  return t && r && n && i ? { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } : void 0;
}
function kx(e) {
  const t = e.liveNodes[0];
  if (!t.isAttached()) return;
  if (e.kind !== "note" && O(t))
    return { key: t.getKey(), offset: 0, type: "element" };
  const r = t.getParent();
  return r ? { key: r.getKey(), offset: t.getIndexWithinParent(), type: "element" } : void 0;
}
function On(e, t) {
  return t?.warn(
    `[positions] A settled location in a pending ${e.kind} scope could not be lined up with its live bytes; it resolves to the front of the scope.`
  ), kx(e);
}
function Xc(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), kx(e);
}
function Uh(e) {
  const t = [];
  let r = 0;
  for (const n of e.spans) {
    n.isSentinel && t.push(n.end > n.start ? r : void 0);
    for (let i = n.start; i < n.end; i += 1)
      Mr.test(e.text[i]) || (r += 1);
  }
  return t;
}
function PO(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = Uh(s)[r];
  if (a === void 0) return On(e, n);
  const c = Uh(i).findIndex(
    (d) => d !== void 0 && Lf(o, d, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], u = l?.isAttached() ? l.getParent() : void 0;
  if (l && u)
    return { key: u.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const f = Wt(i, {
    nonWsBefore: Ao(o, a, "settled"),
    wsRun: 0
  });
  return f ? sd(e, f) : On(e, n);
}
function xx(e, t, r, n, i) {
  const s = od(e);
  if (!s) return On(e, i);
  const o = !on(n), a = cd(
    s.liveFragment,
    Po(s.alignment, t, "toLive"),
    o
  ), c = Wt(s.liveFragment, a, {
    addressDisplayBytes: o
  });
  return c ? sd(e, r ? bx(s.liveFragment, c) : c) : On(e, i);
}
function wO(e, t, r, n, i, s) {
  const o = AO(r.sentinelMap, n);
  if (!o) return PO(t, r, n.sentinelIndex, s);
  const a = r.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return Xc(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && n.isNoteOwnBytes)
    return px(a, i, e.viewOptions);
  if (c?.kind === "note")
    return n.noteAnchor ? xx(
      c,
      n.noteAnchor.anchor,
      n.noteAnchor.atWordByte,
      i,
      s
    ) : On(c, s);
  let l = a;
  for (const u of n.path) {
    if (!O(l)) return Xc(t, s);
    const f = l.getChildAtIndex(u);
    if (!f) return Xc(t, s);
    l = f;
  }
  return { key: l.getKey(), offset: n.offset, type: n.type };
}
function NO(e, t, r) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = jr(t, r);
    return Br(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (Br(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function OO(e, t, r) {
  const { plan: n } = r, { logger: i, viewOptions: s } = e.tier2;
  if (n.kind === "note" && r.scratchIndexes.length === 1 && ux(r.location))
    return px(n.liveNodes[0], r.location, t.viewOptions);
  const o = Hr(r.location, r.scratchIndexes);
  if (!n.scratch.getEditorState().read(() => EO(n.settledOnlyRuns, o, s))) return;
  const c = NO(n, o, s);
  if (c) return c;
  const l = od(n);
  if (!l) return On(n, i);
  const u = n.scratch.getEditorState().read(
    () => MO(
      l.scratchFragment,
      n.settledOnlyRuns,
      o,
      e.tier2
    )
  );
  if (!u) return On(n, i);
  if (u.kind === "preserved")
    return wO(t, n, l, u, r.location, i);
  if (u.kind === "literal") {
    const { run: f, anchor: d } = u, p = ik(f, d.nonWsBefore, "toLiteral") ?? Ao(f.inner, d.nonWsBefore, "settled"), h = !on(r.location), g = cd(
      l.liveFragment,
      {
        nonWsBefore: f.liveBefore + p,
        wsRun: d.nonWsBefore === 0 ? f.liveWsBefore + d.wsRun : d.wsRun
      },
      h
    ), m = Wt(l.liveFragment, g, {
      addressDisplayBytes: h
    });
    return m ? sd(
      n,
      u.atWordByte ? bx(l.liveFragment, m) : m
    ) : On(n, i);
  }
  return xx(n, u.anchor, u.atWordByte, r.location, i);
}
function Kh(e, t, r) {
  const n = Ia(t, r);
  if (!n) return;
  if (n.kind === "live") {
    const [o, a] = jr(n.location, t.viewOptions);
    return o && a !== void 0 ? n.location : void 0;
  }
  const i = OO(e, t, n), s = i && ee(i.key);
  return s ? wt(s, i.offset, t.viewOptions) : void 0;
}
function Fh([e, t]) {
  if (!e || t === void 0) return;
  if (C(e)) return Qi(e.getKey(), t, "text");
  if (O(e)) return Qi(e.getKey(), t, "element");
  const r = e.getParent();
  if (!r) return;
  const n = e.getIndexWithinParent() + (t > 0 ? 1 : 0);
  return Qi(r.getKey(), n, "element");
}
function Tx(e, t, r) {
  const n = jr(e, r), i = jr(t, r), [s, o] = n, [a, c] = i;
  if (s && a && s.is(a))
    return o !== void 0 && c !== void 0 && o > c;
  const l = Fh(n), u = Fh(i);
  return !!l && !!u && u.isBefore(l);
}
function vx(e, t, r) {
  const n = Ia(e, t), i = Ia(e, r);
  if (!(n?.kind !== "scope" || i?.kind !== "scope" || n.plan !== i.plan))
    return n.plan.scratch.getEditorState().read(
      () => Tx(
        Hr(n.location, n.scratchIndexes),
        Hr(i.location, i.scratchIndexes),
        e.viewOptions
      )
    );
}
function RO(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = Kh(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = Kh(e, t, r.end);
  if (!i) return;
  const s = vx(t, r.start, r.end);
  return s !== void 0 && Tx(n, i, t.viewOptions) !== s ? { ...r, start: i, end: n } : { ...r, start: n, end: i };
}
function Cx(e, t) {
  const r = ur(Xr(t.jsonPath));
  return r.length === 0 ? t : Hr(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function Sx(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function qa(e, t) {
  const r = t.liveNodes[0], n = Sx(e, t);
  if (n) {
    const s = ld(e, n, r, 0);
    return typeof s == "object" ? ur(Xr(s.jsonPath)) : void 0;
  }
  const i = $O(r, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function $O(e, t) {
  return !st(e) || !Br(e.getParent()) ? Vr(e) : [Xi(e, 0, St(t)).index];
}
function ad(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function IO(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function qO(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!O(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return wt(s, n, i);
  }
}
function LO(e, t) {
  const r = sk(e, t);
  if (r)
    return {
      run: r,
      within: { nonWsBefore: 0, wsRun: t.wsRun - r.liveWsBefore }
    };
  const n = Uf(e, t);
  if (n)
    return {
      run: n.run,
      within: n.within ?? {
        nonWsBefore: Ao(n.run.inner, n.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function DO(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const r = ee(e.key);
  return !(N(r) && r.getMarkerSyntax() !== "opening");
}
function cd(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = Mr.test(e.text[o]);
      if (n < t.nonWsBefore)
        a || (n += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || DO(s, r) ? t : { ...t, wsRun: i };
    }
  return t;
}
function _x(e, t, r, n, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, u = Kf(o, r);
  if (u) {
    const g = o.sentinels[u.sentinelIndex];
    if (!c[u.sentinelIndex]?.some((M) => M !== void 0)) {
      const M = g[0].getParent();
      if (M)
        return _x(
          e,
          t,
          M,
          g[0].getIndexWithinParent(),
          i,
          s
        );
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const m = Ff(u.member, r);
    if (!m) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const k = c[u.sentinelIndex]?.[u.memberIndex];
    if (!k) return;
    const T = e.scratch.getEditorState().read(
      () => qO(a, k, m, n, i)
    );
    if (T) return T;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const f = Gs(o, r, IO(e, r, n));
  if (!f) return;
  const d = LO(e.settledOnlyRuns, f.anchor);
  if (d)
    return e.scratch.getEditorState().read(() => SO(d.run, d.within, i));
  const p = Po(l, f.anchor, "toSettled"), h = !on(
    wt(r, n, i)
  );
  return e.scratch.getEditorState().read(() => {
    const g = hx(a, p), m = g && ee(g.key);
    if (m) return wt(m, g.offset, i);
    const k = gx(a, p), T = k && ee(k.key);
    if (T)
      return wt(T, k.offset, i);
    const M = cd(a, p, h), I = Wt(a, M, { addressDisplayBytes: h });
    return I && UO(I, i);
  });
}
function UO(e, t) {
  const r = ee(e.key);
  if (!r) return;
  const n = Br(r) && e.offset >= r.getChildrenSize() && r.getLastDescendant();
  return n ? wt(
    n,
    O(n) ? n.getChildrenSize() : n.getTextContentSize(),
    t
  ) : wt(r, e.offset, t);
}
function ld(e, t, r, n) {
  if (t.kind === "note") {
    const a = wt(r, n, e.viewOptions);
    if (dx(a, t.liveNodes[0])) {
      const c = qa(e, t);
      return c && Hr(a, c);
    }
  }
  const i = od(t);
  if (!i) return;
  const s = _x(
    t,
    i,
    r,
    n,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = ad(
    t,
    qa(e, t),
    ur(Xr(s.jsonPath))
  );
  return o && Hr(s, o);
}
function KO(e) {
  const t = [], r = (n) => {
    if (O(n))
      n.getChildren().forEach((i, s) => {
        t.push({ node: n, offset: s }), r(i);
      }), t.push({ node: n, offset: n.getChildrenSize() });
    else if (C(n))
      for (let i = 0; i <= n.getTextContentSize(); i += 1)
        t.push({ node: n, offset: i });
  };
  return e.liveNodes.forEach(r), t;
}
function FO(e, t) {
  const r = t.scratch.getEditorState().read(() => wt(ve(), 0, e.viewOptions)), n = ad(
    t,
    qa(e, t),
    ur(Xr(r.jsonPath))
  );
  if (n) return Hr(r, n);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = Sx(e, t);
  return o ? Ex(e, o, s, i.getIndexWithinParent()) : Cx(
    e,
    wt(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function Mx(e, t, r) {
  const n = KO(t), i = r ? n.findIndex((s) => s.node.is(r.node) && s.offset === r.offset) : -1;
  for (let s = (i < 0 ? n.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = n[s], c = ld(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return FO(e, t);
}
function Ex(e, t, r, n) {
  return ld(e, t, r, n) ?? Mx(e, t, { node: r, offset: n });
}
function zh(e, t, r) {
  const n = e.planContaining(t);
  if (n) return Ex(e, n, t, r);
  const i = Br(t) && r >= t.getChildrenSize() && t.getLastChild(), s = i ? e.planContaining(i) : void 0;
  return s ? zO(e, s) ?? Mx(e, s, void 0) : Cx(e, wt(t, r, e.viewOptions));
}
function zO(e, t) {
  const r = t.scratch.getEditorState().read(() => {
    const i = ve();
    return wt(i, i.getChildrenSize(), e.viewOptions);
  }), n = ad(
    t,
    qa(e, t),
    ur(Xr(r.jsonPath))
  );
  return n && Hr(r, n);
}
function BO(e) {
  const t = nc(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = R();
  if (!P(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = zh(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = zh(e, o.getNode(), o.offset);
  if (a)
    return vx(e, s, a) === !0 ? { start: a, end: s } : { start: s, end: a };
}
function Ax(e, t, r) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && st(i) ? yw(i, r.getMarker, r.viewOptions) : t.every(he) ? Vf(t, r.getMarker, r.viewOptions) : bw(t, r.getMarker, r.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(Ee);
    return i && yo(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(U);
  return n && mo(n, r.getMarker, r.viewOptions)?.out;
}
function jO(e, t) {
  const r = bu({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = ve();
        t.forEach((i) => n.append(ps(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const Bh = "\0";
function Px(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), O(r) && Px(r.getChildren(), t);
  return t;
}
function VO(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(Bh), a = Px(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(Bh);
}
function ud(e, t = []) {
  for (const r of e)
    U(r) && t.push(r), O(r) && ud(r.getChildren(), t);
  return t;
}
function mc(e, t, r, n, i, s, o) {
  const a = jO(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l, settledSide: u } = a.getEditorState().read(() => {
    const h = Ax(e, ve().getChildren(), o.tier2);
    return {
      settledCount: Rt(
        ve(),
        St(o.tier2.viewOptions)
      ).length,
      scratchFragment: h,
      settledSide: h && Df(h)
    };
  }), f = { kind: e, liveNodes: t, liveCut: n, scratch: a, scratchFragment: l, settledCount: c };
  if ((r?.sentinels.length ?? 0) === 0 && (u?.runs.length ?? 0) === 0) {
    const h = r && u && Oa(Na(r, []), u).alignment;
    return { ...f, liveFragment: r, sentinelMap: [], settledOnlyRuns: [], alignment: h };
  }
  const d = r && s && kk(r, s.live), p = d && u && Oa(Na(d, s.live), u);
  return p ? { ...f, liveFragment: d, ...p } : {
    ...f,
    liveFragment: r,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function fd(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = rx(e, t);
  return r ? {
    liveFragment: Gf(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function dd(e, t) {
  for (const r of e.noteGlyphRenames.values())
    sx(r, t);
}
function WO(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = fd(t, i), a = wo(e), c = /* @__PURE__ */ new Map();
  if (No([e], [a], c), dd(r, c), !gc(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && Oo(t, c, r.huskKeys);
  return mc("note", [e], s, o, [a], l, n);
}
function HO(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = fd(t, i), a = e.map(wo), c = /* @__PURE__ */ new Map();
  No(e, a, c), dd(r, c), ud(e).filter((f) => r.noteScopes.has(f.getKey())).forEach(
    (f) => gc(f, c, n.tier2, r.huskKeys, i)
  );
  const l = nx(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const u = t && Oo(t, c, r.huskKeys);
  return mc("para", e, s, o, l, u, n);
}
function GO(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = fd(t, n), o = ox(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...Ms(e)];
  return mc("chapter", a, i, s, o, void 0, r);
}
function JO(e, t, r, n, i, s) {
  const o = wo(e), a = /* @__PURE__ */ new Map();
  No([e], [o], a), dd(n, a), ud([e]).filter((u) => n.noteScopes.has(u.getKey())).forEach(
    (u) => gc(u, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const u of r) {
    const f = a.get(u.getKey());
    if (!f) continue;
    const d = f.siblings.indexOf(f.node);
    d < 0 || (cx(f.siblings, d), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Oo(t, a, c);
  return mc("para", [e], t, void 0, [o], l, i);
}
function YO(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function jh(e, t) {
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
function XO(e) {
  return e.liveNodes.every((r) => r.isAttached()) ? (e.liveFragment?.spans ?? []).every((r) => ee(r.key) !== null) : !1;
}
function Vh(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function QO(e, t) {
  const r = Rt(ve(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = Vh(r[o]), c = a && e.get(a.getKey());
    if (!c) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((f) => f.getKey()));
    let u = 0;
    for (; o + u < r.length; ) {
      const f = Vh(r[o + u]);
      if (!f || !l.has(f.getKey())) break;
      u += 1;
    }
    for (let f = 0; f < u; f += 1)
      n[o + f] = s;
    for (let f = 0; f < c.settledCount; f += 1)
      i.push({ liveIndex: o, plan: c, indexWithinScope: f });
    s += c.settledCount, o += u;
  }
  return { liveToSettled: n, settledToLive: i };
}
function Wh(e) {
  const t = tx(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), jh(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = ax(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (d, p) => {
    if (!d) return;
    const h = d.liveNodes[0].getKey();
    n.set(h, d), d.liveNodes.forEach((g) => i.set(g.getKey(), d)), p && d.liveNodes.forEach((g) => s.set(g.getKey(), d));
  }, c = (d, p, h, g) => {
    o.add(d);
    const m = Ax(p, h, e.tier2), k = VO(
      p,
      h,
      m?.text ?? "",
      e.tier2,
      t
    ), T = e.cache.entries.get(d);
    if (T?.signature === k && XO(T.plan)) return T.plan;
    const M = g(m);
    return M ? e.cache.entries.set(d, { signature: k, plan: M }) : e.cache.entries.delete(d), M;
  };
  for (const d of r.noteScopes.values())
    a(
      c(
        d.getKey(),
        "note",
        [d],
        (p) => WO(d, p, r, e, t)
      ),
      !1
    );
  for (const d of r.paraScopes.values())
    a(
      c(
        d[0].getKey(),
        "para",
        d,
        (p) => HO(d, p, r, e, t)
      ),
      !0
    );
  for (const d of r.chapterScopes.values())
    a(
      c(
        d.getKey(),
        "chapter",
        [d, ...Ms(d)],
        (p) => GO(d, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const d of r.husks) {
    const p = d.getTopLevelElement();
    if (!(he(p) || st(p)) || YO(d, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(d), l.set(p.getKey(), h);
  }
  for (const [d, { para: p, husks: h }] of l)
    a(
      c(
        d,
        "para",
        [p],
        (g) => JO(p, g, h, r, e, t)
      ),
      !0
    );
  for (const d of [...e.cache.entries.keys()])
    o.has(d) || e.cache.entries.delete(d);
  if (n.size === 0)
    return jh(e.tier2.viewOptions, e.tier2.logger);
  const { liveToSettled: u, settledToLive: f } = QO(
    s,
    St(e.tier2.viewOptions)
  );
  return {
    byFirstLiveKey: n,
    liveToSettledTopIndex: (d) => u[d] ?? d,
    settledToLiveTopIndex: (d) => f[d],
    planContaining: (d) => {
      for (let p = d; p; p = p.getParent()) {
        const h = i.get(p.getKey());
        if (h) return h;
      }
    },
    viewOptions: e.tier2.viewOptions,
    logger: e.tier2.logger
  };
}
function ZO({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ye(), n = se({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return V(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, La(s, e) || e2(i, r, e);
  }, [r, e, t]), V(
    () => r.registerMutationListener(
      or,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = su(r);
        Hh(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Wo(s) === Wo(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), V(() => {
    const i = (a) => a.read(
      () => new Set(
        ve().getChildren().filter(Ye).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), f = i(c), d = [...f].some((p) => !u.has(p));
      d && (su(r) || Hh(n.current, r, void 0, {
        hasCreated: d,
        hasDestroyed: [...u].some((p) => !f.has(p)),
        isSameDocumentReload: Wo(a) === Wo(c)
      }));
    };
    return et(
      ...[Jt, dr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), V(
    () => r.registerCommand(
      xr,
      () => {
        const i = n.current;
        return i.phase === "idle" && s2(i, r2()), !1;
      },
      Pt
    ),
    [r]
  ), V(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(xr, void 0));
    };
    return et(
      r.registerMutationListener($t, i),
      r.registerMutationListener(gt, i)
    );
  }, [r]), V(() => {
    const i = () => l2(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function e2(e, t, r) {
  if (t2(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = su(t);
  (!n || n === r.book) && t.update(() => wx(t, r.chapterNum, r.verseNum));
}
function t2(e, t) {
  const r = e.pendingEchoes.findIndex((n) => La(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function r2() {
  const e = R(), t = Ku(e);
  if (!t) return;
  const r = pd(), n = Rm(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = rf(t, e), { verseNum: o, verse: a } = P_(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function su(e) {
  return e.getEditorState().read(() => pd()?.getCode() || void 0);
}
function pd() {
  return ve().getChildren().find(ut);
}
function Hh(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Qc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Qc(e, t), e.phase = "navigating") : i && Qc(e, t), r && r !== e.scrRef.book && Rx(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Qc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => wx(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function wx(e, t, r) {
  const n = R()?.clone();
  n2(t, r);
  const i = R();
  i && !(n && i.is(n)) && e.dispatchCommand(Tu, void 0);
}
function n2(e, t) {
  const r = Ku(R()), n = nf(r)?.getNumber(), i = Rm(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Um(n) ? Ox(t, n) : parseInt(n, 10) === t))
    return;
  const o = ve().getChildren(), a = Om(o, e);
  if (!a) return;
  const c = gS(o, a), l = cS(c, !0);
  hS(c, l);
  let u;
  try {
    u = S_(c, t);
  } catch {
    return;
  }
  u && (he(u) ? !C(u.getFirstChild()) && Cs(u) || _r(u, 0) : i2(u));
}
function i2(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || Se(n)) {
    _r(t, r);
    return;
  }
  const i = Xa(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (C(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = O(n) && !U(n) ? Nx(n) : void 0;
  s ? s.select(0, 0) : _r(t, r);
}
function Nx(e) {
  const t = e.getFirstChild();
  if (C(t)) return t;
  if (O(t) && !U(t)) return Nx(t);
}
function Wo(e) {
  return e.read(() => {
    const t = ve().getChildren().find(Ye);
    return `${pd()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function s2(e, t) {
  e.phase !== "navigating" && t && (o2(t, e.scrRef) || Rx(e, a2(t, e.scrRef)));
}
function o2(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Ox(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Ox(e, t) {
  try {
    return Fu(e, t);
  } catch {
    return !1;
  }
}
function a2(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const c2 = 8;
function Rx(e, t) {
  return La(t, e.scrRef) || e.pendingEchoes.some((r) => La(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > c2 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function La(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function l2(e) {
  e.phase = "idle";
}
function u2(e) {
  return ut(e) ? `${e.__code}` : Ee(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : Pi(e) ? `${e.__marker} "${e.__number}"` : Ct(e) ? `${e.__caller}` : jn(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : he(e) ? `${e.__marker}` : C(e) ? `"${e.__text}"${f2(e)}` : de(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Re(e) ? `${e.__marker} "${e.__number}"` : "";
}
function f2(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[an]) : "";
}
function d2() {
  const [e] = ye();
  return /* @__PURE__ */ S(
    DT,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: u2,
      editor: e
    }
  );
}
const $x = sg(null), Gh = 4;
function p2({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = se(null), s = og($x);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return V(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ S("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function h2({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = Te(), [s, o] = Te(), a = xe(
    (u) => {
      i((f) => f ? [...f, u] : [u]);
    },
    [i]
  ), c = (u) => {
    if (!n) return;
    const f = u.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(f) && u.preventDefault(), f === "Escape" || f === "Tab" ? r() : f === "ArrowUp" ? o((d) => {
      if (!d) return n[0];
      const p = n.indexOf(d) - 1;
      return n[p === -1 ? n.length - 1 : p];
    }) : f === "ArrowDown" && o((d) => d ? n[n.indexOf(d) + 1] : n[0]);
  }, l = je(() => ({ registerItem: a }), [a]);
  return V(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ S($x.Provider, { value: l, children: /* @__PURE__ */ S("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function g2({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = se(null), c = se(null), [l, u] = Te(!1), f = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return V(() => {
    const d = c.current, p = a.current;
    if (l && d !== null && p !== null) {
      const { top: h, left: g } = d.getBoundingClientRect();
      p.style.top = `${h + d.offsetHeight + Gh}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), V(() => {
    const d = c.current;
    if (d !== null && l) {
      const p = (h) => {
        const g = h.target;
        o && a.current && a.current.contains(g) || d.contains(g) || u(!1);
      };
      return document.addEventListener("click", p), () => {
        document.removeEventListener("click", p);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), V(() => {
    const d = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: g } = p.getBoundingClientRect(), m = g + p.offsetHeight + Gh;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", d), () => {
      document.removeEventListener("scroll", d);
    };
  }, [c, a, l]), /* @__PURE__ */ qe(fi, { children: [
    /* @__PURE__ */ qe(
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
    l && ai(
      /* @__PURE__ */ S(h2, { dropDownRef: a, onClose: f, children: s }),
      document.body
    )
  ] });
}
const ou = {
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
}, au = {
  ...ou,
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
function m2({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ S(
    g2,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + y2(t),
      buttonLabel: b2(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(ou).map((n) => /* @__PURE__ */ qe(
        p2,
        {
          className: "item block-marker " + k2(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ S("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ S("span", { className: "text usfm_" + n, children: ou[n] })
          ]
        },
        n
      ))
    }
  );
}
function y2(e) {
  return e && e in au ? e : "ban";
}
function b2(e) {
  return e && e in au ? au[e] : "No Style";
}
function k2(e) {
  return e ? "active dropdown-item-active" : "";
}
function Jh() {
  return /* @__PURE__ */ S("div", { className: "divider" });
}
const x2 = Ci(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ye(), [o, a] = Te(s), [c, l] = Te(), [u, f] = Te(!1), [d, p] = Te(!1), h = xe(
    ({
      canUndo: g,
      canRedo: m,
      blockMarker: k,
      contextMarker: T
    }) => {
      f(g), p(m), l(k), n?.({
        canUndo: g,
        canRedo: m,
        blockMarker: k,
        contextMarker: T
      });
    },
    [n]
  );
  return V(() => s.registerCommand(
    xr,
    (g, m) => (a(m), !1),
    rr
  ), [s]), /* @__PURE__ */ qe(fi, { children: [
    /* @__PURE__ */ S(gb, { onStateChange: h }),
    /* @__PURE__ */ qe("div", { className: "toolbar", children: [
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(hg, void 0);
          },
          title: oa ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ S("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(gg, void 0);
          },
          title: oa ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ S("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ S(Jh, {}),
      o === s && /* @__PURE__ */ qe(fi, { children: [
        /* @__PURE__ */ S(
          m2,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ S(Jh, {})
      ] }),
      /* @__PURE__ */ S("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), T2 = tc(), v2 = {}, C2 = {}, Yh = lv.filter((e) => e !== vu);
function S2() {
  return /* @__PURE__ */ S("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Xh(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function Qh() {
  const e = R();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return C(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function _2(e) {
  const t = [], r = (n, i) => n?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(mt(a)), r(s.content, a);
  });
  return r(e?.content, []), t;
}
function M2(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function E2({
  listener: e
}) {
  const [t] = ye();
  return ds(
    () => t.registerUpdateListener((r) => e(r, t)),
    [t, e]
  ), null;
}
const Ix = Ci(function({
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
  const f = se(null), d = se(null), p = se(null), h = se(t), g = se(!1), m = se(void 0), k = se(void 0), T = se(void 0), M = se({ entries: /* @__PURE__ */ new Map() }), I = se(void 0), A = se(0), K = se(!0), J = se(void 0), [E, w] = Te(t), [fe, Y] = Te(0), [be, le] = Te(), {
    isReadonly: B = !1,
    structureProtectionMode: W = "off",
    hasExternalUI: H = !1,
    hasSpellCheck: Q = !1,
    textDirection: ue = "ltr",
    markerMenuTrigger: te = "\\",
    view: Fe,
    nodes: G,
    debug: _ = !1,
    contextMenu: Z,
    styleInfo: ie,
    markerSettleDelayMs: Ke
  } = a ?? C2, Qe = Fe ?? T2, dt = ho(Qe) && (Qe.markerMode !== "hidden" || !Qe.hasSpacing || Qe.hasGutterParaMarkers || Qe.hasActiveTextFocusBox) ? {
    ...Qe,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : Qe, hr = se(dt);
  Ur(hr.current, dt) || (hr.current = dt);
  const re = hr.current, Et = je(() => G ?? v2, [G]), Ro = je(() => Z, [Z]), Ae = je(
    () => g_(ie ?? ba),
    [ie]
  ), Qr = se(c);
  Ur(Qr.current, c) || (Qr.current = c);
  const ae = Qr.current, jt = ho(re), _e = B || jt, kn = dt !== Qe;
  V(() => {
    jt && !B && ae?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), kn && ae?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), re?.markerMode === "visible" && !B && ae?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [jt, B, kn, ae, re?.markerMode]);
  const xn = se(null), Nr = je(() => {
    if (re.markerMode !== "editable") return;
    const $ = ie ?? ba;
    return {
      getContext: () => xn.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (F) => H1(
        $,
        F,
        Et.extraValidMarkers
      ),
      getEnterItems: (F) => G1(
        $,
        F,
        Et.extraValidMarkers
      ),
      apply: (F, j) => {
        const oe = xn.current;
        oe && (j.trigger === "enter" ? oe.splitParagraphWithMarker(F.marker) : oe.applyMarkerMenuSelection(F, j));
      },
      commitTypedCloser: (F) => {
        xn.current?.commitTypedCloser(F);
      }
    };
  }, [re, ie, Et.extraValidMarkers]), Es = ($) => {
    if (jt)
      throw new Error(
        `Cannot ${$} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Zr = ($) => {
    if (Es($), _e) throw new Error(`Cannot ${$} in readonly mode`);
  }, Hn = je(
    () => [Ze, ...jt ? aE : sc],
    [jt]
  ), $o = je(
    () => ({
      namespace: "platformEditor",
      theme: { ...Hb, showCharMarkerTitles: re.showCharMarkerTitles },
      editable: !_e,
      editorState: void 0,
      // Handling of errors during update
      onError($) {
        throw $;
      },
      nodes: Hn
    }),
    [_e, Hn, re.showCharMarkerTitles]
  );
  Gi.initialize(ae);
  function It($) {
    if ($ !== void 0 && !g1($, Et.extraValidMarkers))
      throw new Error(`Unsupported character marker '${$}'`);
  }
  const qt = xe(() => {
    const $ = f.current;
    if (!$) return h.current;
    const F = () => {
      if (!g.current) return;
      const Xt = Gi.deserializeEditorState($.getEditorState(), re);
      Xt && (h.current = Xt, g.current = !1);
    }, j = pl($), oe = k.current;
    if ((!j || j.size === 0) && !oe)
      return F(), h.current;
    const Ne = $.getEditorState(), ke = T.current, Me = {
      editorState: Ne,
      pendedKeys: j ? [...j].sort().join(",") : "",
      transientInput: oe,
      caretKey: ke?.key,
      caretOffset: ke?.offset,
      viewOptions: re,
      getMarker: Ae
    }, rt = I.current;
    if (rt && M2(rt.key, Me)) return rt.usj;
    const Rr = Ne.toJSON(), Lt = Ne.read(
      () => hO(
        Rr,
        j ?? /* @__PURE__ */ new Set(),
        { viewOptions: re, getMarker: Ae, logger: ae },
        oe,
        ke
      )
    );
    return Lt ? (I.current = { key: Me, usj: Lt }, Lt) : (F(), h.current);
  }, [re, Ae, ae]), bt = xe(() => {
    const $ = f.current;
    if (!$) return;
    const F = {
      pendedKeys: pl($) ?? /* @__PURE__ */ new Set(),
      transientInput: k.current,
      lastKnownCaret: T.current,
      tier2: { viewOptions: re, getMarker: Ae, logger: ae },
      nodes: Hn,
      cache: M.current
    };
    return Ls(F) && F.cache.entries.clear(), F;
  }, [re, Ae, ae, Hn]), Tn = xe(
    ($) => {
      const F = f.current, j = bt();
      if (!(!F || !j))
        return Ls(j) ? $ : F.getEditorState().read(() => {
          const oe = Wh(j);
          return RO(j, oe, $);
        });
    },
    [bt]
  );
  V(() => (K.current = !0, () => {
    K.current = !1;
  }), []);
  const vn = xe(
    ($, F) => $.read(() => {
      const j = bt(), oe = j && BO(Wh(j));
      return !oe && P(R()) && ae?.warn(
        `${F} refused: the selection could not be expressed against the document the host is reading`
      ), oe;
    }),
    [bt, ae]
  ), $i = xe(
    ($) => {
      if (!i) return;
      const F = f.current, j = bt();
      A.current += 1;
      const oe = A.current;
      if (!F || !j || Ls(j)) {
        i($);
        return;
      }
      queueMicrotask(() => {
        if (!K.current || oe !== A.current || f.current !== F) return;
        const Ne = vn(F, "onSelectionChange");
        oe === A.current && i(Ne);
      });
    },
    [i, bt, vn]
  ), Ii = {
    focus() {
      f.current?.focus();
    },
    isFocused() {
      const $ = f.current?.getRootElement();
      return !!$ && $.ownerDocument.activeElement === $;
    },
    undo() {
      f.current?.dispatchCommand(hg, void 0);
    },
    redo() {
      f.current?.dispatchCommand(gg, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      Zr("cut"), f.current && Cf(f.current);
    },
    copy() {
      f.current && vf(f.current);
    },
    paste() {
      Zr("paste"), f.current && Sf(f.current);
    },
    pastePlainText() {
      Zr("paste as plain text"), f.current && _f(f.current);
    },
    getUsj() {
      return qt();
    },
    commitPendingMarkerEdits() {
      f.current?.update(
        () => {
          f.current?.dispatchCommand(Yk, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput($) {
      if (!$) {
        k.current = void 0;
        return;
      }
      const F = f.current?.getEditorState().read(() => {
        const j = R();
        return P(j) && j.isCollapsed() ? j.focus.key : void 0;
      });
      k.current = { input: $, nodeKey: F ?? T.current?.key };
    },
    setUsj($) {
      if (!Ur(h.current, $)) {
        h.current = $, k.current = void 0;
        const F = Ur(E, $);
        w($), F && Y((j) => j + 1);
      }
    },
    applyUpdate($, F = "remote") {
      if (jt && F === "remote") {
        Qr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Es("apply an update");
      const j = f.current;
      j?._updating && Qr.current?.error(
        "Editor: applyUpdate was called inside an update of this editor; its change will be announced as a local edit without the given ops. Call it outside editor updates, commands, and update listeners."
      ), j && ep(j, F);
      try {
        j?.update(
          () => {
            F === "remote" && Kr(vu), $E($, re, Et, ae);
          },
          { discrete: !0 }
        );
      } finally {
        j && ep(j, void 0);
      }
      const oe = f.current?.getEditorState();
      if (!oe) return;
      const Ne = Gi.deserializeEditorState(oe, re);
      if (Ne) {
        const ke = !Ur(h.current, Ne);
        ke && (h.current = Ne);
        const Me = qt();
        if (Me && (ke || !Ur(E, Ne))) {
          const rt = dp($, oe, "apply");
          J.current = Me, s?.(Me, $, F, rt);
        }
      }
    },
    replaceEmbedUpdate($, F) {
      const j = f.current?.read(() => F_($, F));
      j ? this.applyUpdate(j) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${$}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      const $ = f.current;
      if (!$) return;
      $.read(() => {
      });
      const F = bt();
      return !F || Ls(F) ? $.read(() => nc(re)) : vn($, "getSelection");
    },
    setSelection($) {
      const F = Tn($);
      if (!F) {
        ae?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      f.current?.update(() => {
        const j = rc(F, re);
        j !== void 0 && (cn(j), (!Ot().isEditable() || Xh(j.anchor) && Xh(j.focus)) && f.current?.dispatchCommand(xr, void 0));
      });
    },
    setAnnotation($, F, j, oe, Ne) {
      let ke, Me, rt, Rr;
      typeof oe == "function" || oe === void 0 ? (ke = oe, Me = Ne) : (ke = oe.onClick, Me = oe.onRemove, rt = oe.onMouseEnter, Rr = oe.onMouseLeave);
      const Lt = Tn($);
      if (!Lt) {
        ae?.warn(
          `setAnnotation refused for ${F} "${j}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.setAnnotation(
        Lt,
        Kd(F),
        j,
        ke,
        Me,
        rt,
        Rr
      );
    },
    removeAnnotation($, F) {
      d.current?.removeAnnotation(Kd($), F);
    },
    formatPara($) {
      Zr("format a paragraph"), f.current?.update(
        () => {
          const F = R();
          if (!P(F)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${$}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          FT(F, () => co($));
          const j = R();
          if (!P(j)) return;
          const oe = /* @__PURE__ */ new Set();
          j.getNodes().forEach((Ne) => {
            const ke = Ne.getTopLevelElement();
            he(ke) && oe.add(ke);
          }), oe.forEach((Ne) => Ek(Ne, $, re));
        },
        { discrete: !0 }
      );
    },
    getElementByKey($) {
      return f.current?.read(
        () => f.current?.getElementByKey($) ?? void 0
      );
    },
    removeCharacterMarker($) {
      if (_e) throw new Error("Cannot remove character marker in readonly mode");
      It($);
      let F = !1;
      return f.current?.update(
        () => {
          const j = R();
          P(j) && (F = Fb(j, $, re));
        },
        { discrete: !0 }
      ), F;
    },
    replaceCharacterMarker($, F) {
      if (_e) throw new Error("Cannot replace character marker in readonly mode");
      It($), It(F);
      let j = !1;
      return f.current?.update(
        () => {
          const oe = R();
          P(oe) && (j = E1(oe, $, F));
        },
        { discrete: !0 }
      ), j;
    },
    extendCharacterMarker($, F) {
      if (_e) throw new Error("Cannot extend character marker in readonly mode");
      It($), F?.forEach(
        (oe) => It(oe)
      );
      let j = !1;
      return f.current?.update(
        () => {
          const oe = R();
          P(oe) && (j = A1(
            oe,
            $,
            F,
            re
          ));
        },
        { discrete: !0 }
      ), j;
    },
    insertMarker($) {
      if (_e) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!zl($, Et.extraValidMarkers))
        throw new Error(`Unsupported marker '${$}'`);
      const F = Bl(
        $,
        m,
        re,
        Et,
        ae,
        void 0,
        ie
      );
      return F.action({ editor: f.current, reference: r }), F.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!B)
        return f.current?.getEditorState().read(() => Zw());
    },
    applyMarkerMenuSelection($, F) {
      if (B) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if ($.kind !== "closeTag" && !zl($.marker, Et.extraValidMarkers))
        throw new Error(`Unsupported marker '${$.marker}'`);
      let j;
      return f.current.update(() => {
        j = iN($, F, r, {
          expandedNoteKeyRef: m,
          viewOptions: re,
          nodeOptions: Et,
          logger: c,
          styleInfo: ie
        });
      }), j;
    },
    splitParagraphWithMarker($) {
      if (B) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        Rk($, re);
      });
    },
    commitTypedMarker($, F) {
      if (B) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let j = !1;
      return f.current.update(() => {
        j = nN($, F), j || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), j;
    },
    commitTypedCloser($) {
      if (B) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let F = !1;
      return f.current.update(() => {
        F = Ok($), F || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), F;
    },
    insertNote($, F, j) {
      Zr("insert a note");
      const oe = j && Tn(j);
      if (j && !oe) {
        ae?.warn(
          `insertNote refused for \\${$}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.update(
        () => {
          const Ne = By(
            $,
            F,
            oe,
            r,
            re,
            Et,
            ae
          );
          Ne && !Ne.getIsCollapsed() && (m.current = Ne.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote($) {
      const F = f.current;
      if (!F) return;
      const j = bt();
      if (typeof $ == "string" || !j || Ls(j)) {
        F.update(() => {
          const ke = Cp($);
          ke && (Sp(ke, re), ke.getIsCollapsed() || (m.current = ke.getKey()));
        });
        return;
      }
      const oe = _2(qt())[$], Ne = oe ? Tn({ start: { jsonPath: oe } }) : void 0;
      Ne && F.update(() => {
        const [ke, Me] = jr(Ne.start, re);
        if (!ke || Me === void 0) return;
        const rt = U(ke) ? ke : lt(ke, U);
        U(rt) ? (Sp(rt, re), rt.getIsCollapsed() || (m.current = rt.getKey())) : C(ke) && ke.select(Me, Me);
      });
    },
    getNoteOps($) {
      return f.current?.read(() => {
        const F = Cp($);
        if (F)
          return of(F);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  xn.current = Ii, lu(u, () => Ii), V(() => {
    const $ = f.current;
    if ($)
      return $.registerUpdateListener(({ editorState: F }) => {
        const j = F.read(Qh);
        j && (T.current = j);
      });
  }, []);
  const Or = se({ onUsjChange: s, viewOptions: re, isBlockVerse: jt, readSettledUsj: qt });
  Or.current = { onUsjChange: s, viewOptions: re, isBlockVerse: jt, readSettledUsj: qt };
  const qi = xe(($, F) => {
    const { editorState: j, dirtyElements: oe, dirtyLeaves: Ne, tags: ke } = $;
    if (oe.size === 0 && Ne.size === 0) return;
    if (ke.has(Ba)) {
      const $r = Or.current, Jn = !$r.isBlockVerse && Gi.deserializeEditorState(j, $r.viewOptions);
      Jn && (h.current = Jn), J.current = h.current;
      return;
    }
    if (Ju(F)) return;
    if (Yh.some(($r) => ke.has($r))) {
      g.current = !0;
      return;
    }
    const Me = Or.current;
    if (Me.isBlockVerse) return;
    dm(F, j, ke);
    const rt = j.read(Qh);
    rt && (T.current = rt);
    const Rr = OE($, {
      ignoreTags: Yh
    }), Lt = Rr ? [] : new Yi(j.read(() => RE(F, $))).chop().ops;
    if (!Rr) {
      const $r = Gi.deserializeEditorState(j, Me.viewOptions);
      $r && (h.current = $r);
    }
    if (!Me.onUsjChange) return;
    const Xt = Me.readSettledUsj();
    Xt && (Lt.length === 0 && Ur(J.current, Xt) || (J.current = Xt, Lt.length === 0 ? Me.onUsjChange(Xt, void 0, "local", void 0) : Me.onUsjChange(Xt, Lt, "local", dp(Lt, j))));
  }, []), Gn = xe(
    ($) => {
      le($.contextMarker), o?.($);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ qe(yg, { initialConfig: $o, children: [
      /* @__PURE__ */ S(KA, { isEditable: !_e }),
      /* @__PURE__ */ qe("div", { className: "editor-container", children: [
        H ? /* @__PURE__ */ S(gb, { onStateChange: Gn }) : /* @__PURE__ */ S(
          "div",
          {
            className: "editor-toolbar-container" + (_e ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ S(
              x2,
              {
                ref: p,
                editorRef: xn,
                isReadonly: _e,
                onStateChange: Gn
              }
            )
          }
        ),
        /* @__PURE__ */ qe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ S(kg, { editorRef: f }),
          /* @__PURE__ */ S(
            KT,
            {
              contentEditable: /* @__PURE__ */ S(
                bg,
                {
                  className: `editor-input usfm ${CM(re).join(" ")}${re.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${re.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Q
                }
              ),
              placeholder: /* @__PURE__ */ S(S2, {}),
              ErrorBoundary: xg
            }
          ),
          H && /* @__PURE__ */ S(UA, {}),
          /* @__PURE__ */ S(Tg, {}),
          r && n && /* @__PURE__ */ S(ZO, { scrRef: r, onScrRefChange: n }),
          r && !H && /* @__PURE__ */ S(
            u0,
            {
              trigger: te,
              scrRef: r,
              contextMarker: be,
              getMarkerAction: ($) => Bl(
                $,
                m,
                re,
                Et,
                ae,
                void 0,
                ie
              ),
              editableHarness: Nr
            }
          ),
          /* @__PURE__ */ S(
            BA,
            {
              scripture: E,
              scriptureRef: h,
              nodeOptions: Et,
              editorAdaptor: hn,
              viewOptions: re,
              logger: ae
            },
            fe
          ),
          /* @__PURE__ */ S(uP, { onChange: $i, viewOptions: re }),
          /* @__PURE__ */ S(E2, { listener: qi }),
          /* @__PURE__ */ S(R1, { viewOptions: re }),
          /* @__PURE__ */ S(NE, { ref: d, logger: ae, viewOptions: re }),
          /* @__PURE__ */ S(oA, { viewOptions: re }),
          /* @__PURE__ */ S(xA, {}),
          /* @__PURE__ */ S(AA, {}),
          re?.markerMode !== "editable" && /* @__PURE__ */ S(PA, { logger: ae }),
          /* @__PURE__ */ S(RA, { options: Ro }),
          /* @__PURE__ */ S(DA, {}),
          /* @__PURE__ */ S(zA, {}),
          /* @__PURE__ */ S(sN, {}),
          /* @__PURE__ */ S(
            eO,
            {
              viewOptions: re,
              getMarker: Ae,
              logger: ae,
              markerSettleDelayMs: Ke,
              structureProtectionMode: W
            }
          ),
          re?.markerMode === "visible" && /* @__PURE__ */ S(cO, { viewOptions: re }),
          /* @__PURE__ */ S(
            oO,
            {
              styleInfo: ie,
              viewOptions: re,
              logger: ae
            }
          ),
          /* @__PURE__ */ S(
            jA,
            {
              expandedNoteKeyRef: m,
              nodeOptions: Et,
              viewOptions: re,
              logger: ae
            }
          ),
          /* @__PURE__ */ S(lP, {}),
          /* @__PURE__ */ S(tA, {}),
          /* @__PURE__ */ S(XE, {}),
          /* @__PURE__ */ S(gO, { viewOptions: re, logger: ae }),
          /* @__PURE__ */ S(fP, {}),
          /* @__PURE__ */ S(YP, { structureProtectionMode: W }),
          /* @__PURE__ */ S(XP, { textDirection: ue }),
          /* @__PURE__ */ S(ZP, {}),
          /* @__PURE__ */ S(c0, {}),
          l
        ] }),
        _ && /* @__PURE__ */ S(d2, {})
      ] })
    ] }, re.verseLayout ?? "inline")
  );
}), LR = Ci(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ S(Ix, { ref: r, ...i });
});
function Zh(e, t) {
  const r = C(e) ? Wv(e, Kt, t) ?? [] : [], n = NS(e, Kt, t);
  return [.../* @__PURE__ */ new Set([...r, ...n])];
}
function A2(e, t, r) {
  Lg(Kt, e, t);
  for (const n of r) {
    const i = ee(n);
    i && Zm(i, Kt, e);
  }
}
function P2(e) {
  const t = Array.from(e, (i) => ee(i)).filter(
    (i) => i !== null
  );
  t.sort((i, s) => i.isBefore(s) ? -1 : 1);
  const r = t[0];
  if (!r) return;
  if (C(r)) {
    const [i] = Ym(r);
    r.select(i, i);
    return;
  }
  const n = r.getParent();
  n && n.select(r.getIndexWithinParent(), r.getIndexWithinParent());
}
function qx() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Da(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? qx() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Lx(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? qx() : r,
    quote: e,
    type: "thread"
  };
}
function eg(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function w2(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Zc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class N2 {
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
    this._comments = t, Zc(this);
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
          const c = eg(a);
          i.splice(o, 1, c);
          const l = n !== void 0 ? n : c.comments.length;
          if (this.isCollaborative() && s !== null) {
            const u = s.get(o).get("comments");
            this._withRemoteTransaction(() => {
              const f = this._createCollabSharedMap(t);
              u.insert(l, [f]);
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
    this._comments = i, Zc(this);
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
          const c = eg(a);
          n.splice(o, 1, c);
          const l = c.comments;
          if (s = l.indexOf(t), this.isCollaborative() && i !== null) {
            const u = i.get(o).get("comments"), f = s;
            this._withRemoteTransaction(() => {
              u.delete(f);
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
    return this._comments = n, Zc(this), t.type === "comment" ? {
      index: s,
      markedComment: w2(t)
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
    return t !== null ? t.doc.get("comments", Md) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Ed(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Md();
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
      rv,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Pt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof nv) {
            const u = l.target, f = l.delta;
            let d = 0;
            for (const p of f) {
              const h = p.insert, g = p.retain, m = p.delete, k = u.parent, T = u === r ? void 0 : k instanceof Ed && this._comments.find((M) => M.id === k.get("id"));
              if (Array.isArray(h)) {
                const M = d;
                h.slice().reverse().forEach((I) => {
                  const A = I.get("id"), J = I.get("type") === "thread" ? Lx(
                    I.get("quote"),
                    I.get("comments").toArray().map(
                      (E) => Da(
                        E.get("content"),
                        E.get("author"),
                        E.get("id"),
                        E.get("timeStamp"),
                        E.get("deleted")
                      )
                    ),
                    A
                  ) : Da(
                    I.get("content"),
                    I.get("author"),
                    A,
                    I.get("timeStamp"),
                    I.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(J, T, M);
                  });
                });
              } else if (typeof g == "number")
                d += g;
              else if (typeof m == "number")
                for (let M = 0; M < m; M++) {
                  const I = T === void 0 || T === !1 ? this._comments[d] : T.comments[d];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(I, T);
                  }), d++;
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
function O2(e) {
  const [t, r] = Te(e.getComments());
  return V(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function R2({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = se(null);
  return V(() => {
    i.current !== null && i.current.focus();
  }, []), V(() => {
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
  }, [n, e]), /* @__PURE__ */ S("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ qe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function $2({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return ai(
    /* @__PURE__ */ S(R2, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Dx() {
  const [e, t] = Te(null), r = xe(() => {
    t(null);
  }, []), n = je(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ S($2, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = xe(
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
const I2 = {
  ...Hb,
  paragraph: "CommentEditorTheme__paragraph"
};
function q2(...e) {
  return e.filter(Boolean).join(" ");
}
function Fn({
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
      className: q2(
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
function L2({
  className: e
}) {
  return /* @__PURE__ */ S(bg, { className: e || "ContentEditable__root" });
}
function D2({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ S("div", { className: t || "Placeholder__root", children: e });
}
const tg = fu("INSERT_INLINE_COMMAND");
function U2({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = se(null), s = xe(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return V(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), ds(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ S("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ S("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ S("i", { className: "icon add-comment" }) }) });
}
function K2({ onEscape: e }) {
  const [t] = ye();
  return V(() => t.registerCommand(
    pg,
    (r) => e(r),
    Zi
  ), [t, e]), null;
}
function Ux({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ S(yg, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: I2
  }, children: /* @__PURE__ */ qe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ S(
      ZT,
      {
        contentEditable: /* @__PURE__ */ S(L2, { className: e }),
        placeholder: /* @__PURE__ */ S(D2, { children: s }),
        ErrorBoundary: xg
      }
    ),
    /* @__PURE__ */ S(QT, { onChange: n }),
    /* @__PURE__ */ S(Tg, {}),
    t !== !1 && /* @__PURE__ */ S(JT, {}),
    /* @__PURE__ */ S(K2, { onEscape: r }),
    /* @__PURE__ */ S(YT, {}),
    i !== void 0 && /* @__PURE__ */ S(kg, { editorRef: i })
  ] }) });
}
function Kx(e, t) {
  return xe(
    (r, n) => {
      r.read(() => {
        e(ev()), t(!tv(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function F2({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = Te(""), [s, o] = Te(!1), a = se(null), c = je(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = se(null), u = zx(), f = xe(() => {
    e.getEditorState().read(() => {
      const g = R();
      if (P(g)) {
        l.current = g.clone();
        const m = g.anchor, k = g.focus, T = zT(
          e,
          m.getNode(),
          m.offset,
          k.getNode(),
          k.offset
        ), M = a.current;
        if (T !== null && M !== null) {
          const { left: I, bottom: A, width: K } = T.getBoundingClientRect(), J = BT(e, T);
          let E = J.length === 1 ? I + K / 2 - 125 : I - 125;
          E < 10 && (E = 10), M.style.left = `${E}px`, M.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const w = J.length, { container: fe } = c, Y = c.elements, be = Y.length;
          for (let le = 0; le < w; le++) {
            const B = J[le];
            let W = Y[le];
            W === void 0 && (W = document.createElement("span"), Y[le] = W, fe.appendChild(W));
            const Q = `position:absolute;top:${B.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${B.left}px;height:${B.height}px;width:${B.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            W.style.cssText = Q;
          }
          for (let le = be - 1; le >= w; le--) {
            const B = Y[le];
            fe.removeChild(B), Y.pop();
          }
        }
      }
    });
  }, [e, c]);
  ds(() => {
    f();
    const g = c.container, m = document.body;
    return m !== null ? (m.appendChild(g), () => {
      m.removeChild(g);
    }) : () => {
    };
  }, [c.container, f]), V(() => (window.addEventListener("resize", f), () => {
    window.removeEventListener("resize", f);
  }), [f]);
  const d = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        Lx(g, [Da(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = Kx(i, o);
  return /* @__PURE__ */ qe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ S(
      Ux,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: d,
        onChange: h
      }
    ),
    /* @__PURE__ */ qe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ S(Fn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ S(
        Fn,
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
function z2({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = Te(""), [s, o] = Te(!1), a = se(null), c = zx(), l = Kx(i, o);
  return /* @__PURE__ */ qe(fi, { children: [
    /* @__PURE__ */ S(
      Ux,
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
      Fn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Da(n, c), !1, t);
            const f = a.current;
            f !== null && f.dispatchCommand($T, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ S("i", { className: "send" })
      }
    )
  ] });
}
function Fx({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ qe(fi, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ qe("div", { className: "Modal__content", children: [
      /* @__PURE__ */ S(
        Fn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ S(
        Fn,
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
function rg({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = Te(0);
  V(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const f = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(f);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Dx();
  return /* @__PURE__ */ qe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ qe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ S("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ qe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ S("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ qe(fi, { children: [
      /* @__PURE__ */ S(
        Fn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ S(
              Fx,
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
function B2({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  displayIndex: n,
  listRef: i,
  submitAddComment: s,
  markNodeMap: o
}) {
  const [a] = ye(), [c, l] = Te(0), [u, f] = Dx(), d = je(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return V(() => {
    const p = setTimeout(() => {
      l(c + 1);
    }, 1e4);
    return () => {
      clearTimeout(p);
    };
  }, [c]), /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List", ref: i, children: t.map((p) => {
    const h = p.id;
    if (p.type === "thread") {
      const g = e !== null && e.indexOf(h) !== -1;
      return /* @__PURE__ */ qe(
        "li",
        {
          onClick: () => {
            if (g) return;
            const k = o.get(h), T = document.activeElement;
            if (k !== void 0) {
              a.update(
                () => {
                  const I = Array.from(k)[0], A = ee(I);
                  de(A) && A.selectStart();
                },
                {
                  onUpdate() {
                    T !== null && T.focus();
                  }
                }
              );
              return;
            }
            const M = n.keysFor(Kt, h);
            M.size !== 0 && a.update(
              () => {
                P2(M);
              },
              {
                onUpdate() {
                  T !== null && T.focus();
                }
              }
            );
          },
          className: `CommentPlugin_CommentsPanel_List_Thread ${o.has(h) || n.keysFor(Kt, h).size > 0 ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
          children: [
            /* @__PURE__ */ qe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
              /* @__PURE__ */ qe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
                "> ",
                /* @__PURE__ */ S("span", { children: p.quote })
              ] }),
              /* @__PURE__ */ S(
                Fn,
                {
                  onClick: () => {
                    f("Delete Thread", (k) => /* @__PURE__ */ S(
                      Fx,
                      {
                        commentOrThread: p,
                        deleteCommentOrThread: r,
                        onClose: k
                      }
                    ));
                  },
                  className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                  children: /* @__PURE__ */ S("i", { className: "delete" })
                }
              ),
              u
            ] }),
            /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: p.comments.map((k) => /* @__PURE__ */ S(
              rg,
              {
                comment: k,
                deleteComment: r,
                thread: p,
                rtf: d
              },
              k.id
            )) }),
            /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ S(
              z2,
              {
                submitAddComment: s,
                thread: p,
                placeholder: "Reply to comment..."
              }
            ) })
          ]
        },
        h
      );
    }
    return /* @__PURE__ */ S(
      rg,
      {
        comment: p,
        deleteComment: r,
        rtf: d
      },
      h
    );
  }) });
}
function j2({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i,
  displayIndex: s
}) {
  const o = se(null), a = r.length === 0;
  return /* @__PURE__ */ qe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ S("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    a ? /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ S(
      B2,
      {
        activeIDs: e,
        comments: r,
        deleteCommentOrThread: t,
        displayIndex: s,
        listRef: o,
        submitAddComment: n,
        markNodeMap: i
      }
    )
  ] });
}
function zx() {
  const e = vg(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function V2({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = vg(), [a] = ye(), c = je(() => {
    const w = new N2(a, s);
    return r && w.registerOnChange(r), t?.(w), w;
  }, [a, s, r, t]), l = O2(c), u = je(() => /* @__PURE__ */ new Map(), []), f = Xy(a), [d, p] = Te(), [h, g] = Te([]), [m, k] = Te(!1), [T, M] = Te(!1), { yjsDocMap: I } = o;
  V(() => {
    if (e) {
      const w = e("comments", I);
      return c.registerCollaboration(w);
    }
    return () => {
    };
  }, [c, e, I]);
  const A = xe(() => {
    a.update(() => {
      const w = R();
      w !== null && (w.dirty = !0);
    }), k(!1);
  }, [a]), K = xe(
    (w, fe) => {
      if (w.type === "comment") {
        const Y = c.deleteCommentOrThread(w, fe);
        if (!Y)
          return;
        const { markedComment: be, index: le } = Y;
        c.addComment(be, fe, le);
      } else {
        c.deleteCommentOrThread(w);
        const Y = fe !== void 0 ? fe.id : w.id, be = u.get(Y), le = f.keysFor(Kt, Y);
        (be !== void 0 && be.size > 0 || le.size > 0) && setTimeout(() => {
          a.update(() => {
            A2(Y, be ?? [], le);
          });
        });
      }
    },
    [c, f, a, u]
  ), J = xe(
    (w, fe, Y, be) => {
      c.addComment(w, Y), fe && (a.update(() => {
        P(be) && Gu(be, Kt, w.id);
      }), k(!1));
    },
    [c, a]
  );
  V(() => {
    const w = [];
    let fe;
    for (const Y of h) {
      const be = u.get(Y) ?? [];
      for (const le of [...be, ...f.keysFor(Kt, Y)]) {
        const B = a.getElementByKey(le);
        B !== null && (B.classList.add("selected"), w.push(B), fe = window.setTimeout(() => {
          M(!0);
        }, 0));
      }
    }
    return () => {
      fe !== void 0 && window.clearTimeout(fe);
      for (const Y of w)
        Y.classList.remove("selected");
    };
  }, [h, f, a, u]), V(() => {
    if (!a.hasNodes([Ze]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const w = /* @__PURE__ */ new Map();
    return et(
      ku(
        a,
        Ze,
        (fe) => gi(fe.getTypedIDs()),
        (fe, Y) => {
          for (const [be, le] of Object.entries(fe.getTypedIDs()))
            le.forEach((B) => {
              Y.addID(be, B);
            });
        }
      ),
      a.registerMutationListener(
        Ze,
        (fe) => {
          a.getEditorState().read(() => {
            for (const [Y, be] of fe) {
              const le = ee(Y);
              let B = [];
              be === "destroyed" ? B = w.get(Y) ?? [] : de(le) && (B = le.getTypedIDs()[Kt] ?? []);
              for (const W of B) {
                let H = u.get(W);
                w.set(Y, B), be === "destroyed" ? H !== void 0 && (H.delete(Y), H.size === 0 && u.delete(W)) : (H === void 0 && (H = /* @__PURE__ */ new Set(), u.set(W, H)), H.has(Y) || H.add(Y));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: fe, tags: Y }) => {
        fe.read(() => {
          const be = R();
          let le = !1, B = !1;
          if (P(be)) {
            const { anchor: W } = be, H = W.getNode();
            if (C(H)) {
              const Q = Zh(H, W.offset);
              g(Q), le = !0, be.isCollapsed() || (p(H.getKey()), B = !0);
            } else if (W.type === "element" && O(H)) {
              const Q = H.getChildren(), ue = /* @__PURE__ */ new Set();
              for (const [te, Fe] of [
                [Q[W.offset - 1], !0],
                [Q[W.offset], !1]
              ]) {
                if (!te) continue;
                const G = Fe && C(te) ? te.getTextContentSize() : 0;
                Zh(te, G).forEach((_) => ue.add(_));
              }
              ue.size > 0 && (g([...ue]), le = !0);
            }
          }
          le || g((W) => W.length === 0 ? W : []), B || p(null), !Y.has("collaboration") && P(be) && k(!1);
        });
      }),
      a.registerCommand(
        tg,
        () => {
          const fe = window.getSelection();
          return fe !== null && fe.removeAllRanges(), k(!0), !0;
        },
        di
      )
    );
  }, [a, u]);
  const E = () => {
    a.dispatchCommand(tg, void 0);
  };
  return /* @__PURE__ */ qe(fi, { children: [
    m && ai(
      /* @__PURE__ */ S(
        F2,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: J
        }
      ),
      document.body
    ),
    d != null && !m && ai(
      /* @__PURE__ */ S(
        U2,
        {
          anchorKey: d,
          editor: a,
          showComments: T,
          onAddComment: E
        }
      ),
      document.body
    ),
    n !== null && ai(
      /* @__PURE__ */ S(
        Fn,
        {
          className: `CommentPlugin_ShowCommentsButton ${T ? "active" : ""}`,
          onClick: () => M(!T),
          title: T ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ S("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    T && ai(
      /* @__PURE__ */ S(
        j2,
        {
          comments: l,
          submitAddComment: J,
          deleteCommentOrThread: K,
          activeIDs: h,
          markNodeMap: u,
          displayIndex: f
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function W2() {
  const e = se(void 0), t = xe((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function H2(e, t) {
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
function G2(e, t) {
  V(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      H2(r, t);
    };
  }, [t, e]);
}
const DR = Ci(function(t, r) {
  const n = se(null), i = se(!0), s = se(null), [o, a] = Te(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: f, ...d } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, m = (h ?? !1) || ho(g), [k, T] = W2();
  G2(d, k), V(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(A), p || console.warn(A);
    }
  }, [p]), lu(r, () => ({
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
    applyUpdate(A, K) {
      n.current?.applyUpdate(A, K);
    },
    replaceEmbedUpdate(A, K) {
      return n.current?.replaceEmbedUpdate(A, K);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(A) {
      n.current?.setSelection(A);
    },
    setAnnotation(A, K, J, E, w) {
      typeof E == "function" || E === void 0 ? n.current?.setAnnotation(A, K, J, E, w) : n.current?.setAnnotation(A, K, J, E);
    },
    removeAnnotation(A, K) {
      n.current?.removeAnnotation(A, K);
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
    replaceCharacterMarker(A, K) {
      return n.current?.replaceCharacterMarker(A, K) ?? !1;
    },
    extendCharacterMarker(A, K) {
      return n.current?.extendCharacterMarker(A, K) ?? !1;
    },
    insertMarker(A) {
      return n.current?.insertMarker(A);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(A, K) {
      return n.current?.applyMarkerMenuSelection(A, K);
    },
    splitParagraphWithMarker(A) {
      n.current?.splitParagraphWithMarker(A);
    },
    commitTypedMarker(A, K) {
      return n.current?.commitTypedMarker(A, K) ?? !1;
    },
    commitTypedCloser(A) {
      return n.current?.commitTypedCloser(A) ?? !1;
    },
    insertNote(A, K, J) {
      n.current?.insertNote(A, K, J);
    },
    selectNote(A) {
      n.current?.selectNote(A);
    },
    getNoteOps(A) {
      return n.current?.getNoteOps(A);
    },
    setComments(A) {
      k.current?.setComments(A), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const M = xe(
    (A, K, J, E) => {
      if (!u) return;
      const w = k.current?.getComments();
      u(A, w, K, J, E);
    },
    [k, u]
  ), I = xe(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = k.current?.getComments();
    l(A);
  }, [k, i, l]);
  return V(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ S(XT, { children: /* @__PURE__ */ qe(Ix, { ref: n, onUsjChange: M, ...d, children: [
    /* @__PURE__ */ S(
      V2,
      {
        setCommentStore: T,
        onChange: I,
        showCommentsContainerRef: m ? null : f ?? o,
        commentContainerRef: s,
        logger: d.logger
      }
    ),
    /* @__PURE__ */ S("div", { ref: s, className: "comment-container" })
  ] }) });
});
function oi(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function J2(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function Y2(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const X2 = /^[#\w().,%/\s-]+$/;
function tn(e) {
  return e != null;
}
const Q2 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, Z2 = {
  left: "right",
  right: "left"
}, eR = "var(--usj-font-fallback, serif)";
function Bx(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${J2(i)}"`).join(", ")}, ${eR}`;
}
const cu = ".editor-input.usfm", tR = /^[\w.#[\]="':()>+~*,\s-]+$/;
function rR(e) {
  return tR.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${cu}".`
  ), cu);
}
function nR(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Bx(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (X2.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), tn(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), tn(t.firstLineIndent) && s.push(`text-indent: ${oi(t.firstLineIndent * 20 * r)}vw`), tn(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${oi(t.leftMargin * 20 * r)}vw`), tn(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${oi(t.rightMargin * 20 * r)}vw`
  ), tn(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${oi(t.spaceBefore * r)}pt`), tn(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${oi(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = Q2[n ? Z2[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const ng = { c: 150, ca: 133, cp: 150 };
function ig(e, t) {
  return e && tn(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function iR(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && tn(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = ig(e.markers.c, ng.c);
  return ["ca", "cp"].map((i) => {
    const s = ig(
      e.markers[i],
      ng[i]
    ), o = oi(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function UR(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = cu } = t, s = rR(i), o = [], a = [];
  e.defaultFont && a.push(Bx(e.defaultFont)), tn(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${oi(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = nR(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${Y2(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...iR(e, s)), o.join(`
`);
}
export {
  Ay as BLOCK_VERSE_VIEW_MODE,
  x as CategoryType,
  LR as Editorial,
  eo as GENERATOR_NOTE_CALLER,
  Sg as HIDDEN_NOTE_CALLER,
  DR as Marginal,
  b as MarkerType,
  Ey as PARAGRAPH_STRUCTURE_VIEW_MODE,
  lf as STANDARD_VIEW_MODE,
  ba as defaultStyleInfo,
  qR as directionToNames,
  mE as filterAndRankItems,
  UR as generateUsjCss,
  $R as getDefaultViewMode,
  tc as getDefaultViewOptions,
  G1 as getEnterMenuItems,
  H1 as getMarkerMenuItems,
  IR as getViewMode,
  df as getViewOptions,
  ho as isBlockVerseLayout,
  En as isInsertEmbedOpOfType,
  kM as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
