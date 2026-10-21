import { jsx as M, jsxs as $e, Fragment as zn } from "react/jsx-runtime";
import { forwardRef as Mn, useState as ke, useRef as ee, useCallback as Ce, useEffect as W, useMemo as Ze, memo as Gb, createContext as zp, useContext as Kp, Children as Jb, isValidElement as Yb, cloneElement as Xb, useImperativeHandle as ra, useLayoutEffect as Fs } from "react";
import { assertSafeKey as ot, isValidBookCode as Qb, MARKER_OBJECT_PROPS as Zb, USJ_VERSION as mr, USJ_TYPE as yr, isUsjTextContentLocation as ek, indexesFromUsjJsonPath as Bp, isUsjAttributeKeyLocation as tk, isUsjAttributeMarkerLocation as rk, isUsjClosingAttributeMarkerLocation as nk, isUsjMarkerLocation as ik, isUsjClosingMarkerLocation as sk, isUsjPropertyValueLocation as ok, getUsjDocumentLocationTypeName as ak, usjJsonPathFromIndexes as wn, EMPTY_USJ as jp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as rt, $parseSerializedNode as Kn, DecoratorNode as zs, ElementNode as xr, isHTMLElement as ni, createState as na, $getState as le, $setState as Rt, $isRangeSelection as A, $isElementNode as L, $isTextNode as v, $getSelection as N, $isNodeSelection as ia, ParagraphNode as El, TextNode as et, $createTextNode as Ne, $getCommonAncestor as ck, $isLineBreakNode as ii, NODE_STATE_KEY as Ks, $getEditor as gn, $hasUpdateTag as lk, $getNodeByKey as oe, $getRoot as Ke, $createRangeSelection as mn, $createPoint as pr, $setSelection as Or, SELECTION_CHANGE_COMMAND as Kt, $getCharacterOffsets as Al, KEY_DOWN_COMMAND as Tr, COMMAND_PRIORITY_HIGH as Re, HISTORY_MERGE_TAG as Pl, CLICK_COMMAND as sa, COMMAND_PRIORITY_EDITOR as Bn, DELETE_CHARACTER_COMMAND as Pr, DELETE_WORD_COMMAND as $i, DELETE_LINE_COMMAND as jn, COMMAND_PRIORITY_NORMAL as Rr, CONTROLLED_TEXT_INSERTION_COMMAND as Vn, COMMAND_PRIORITY_CRITICAL as he, PASTE_COMMAND as zt, CUT_COMMAND as sr, REMOVE_TEXT_COMMAND as Nl, isDOMNode as Vp, $getNearestNodeFromDOMNode as Wi, $isRootNode as wl, DROP_COMMAND as Ol, $isDecoratorNode as si, COPY_COMMAND as Wn, COMMAND_PRIORITY_LOW as kt, getDOMSelection as uk, isSelectionWithinEditor as Wp, $createRangeSelectionFromDom as Hp, isDOMTextNode as dk, BLUR_COMMAND as Rl, $addUpdateTag as St, DRAGSTART_COMMAND as Gp, $createNodeSelection as Jp, INSERT_PARAGRAPH_COMMAND as Hn, INSERT_LINE_BREAK_COMMAND as vc, SKIP_DOM_SELECTION_TAG as dr, CLEAR_HISTORY_COMMAND as fk, $getPreviousSelection as pk, $isRootOrShadowRoot as hk, CAN_UNDO_COMMAND as gk, CAN_REDO_COMMAND as mk, getDOMSelectionFromTarget as yk, $onUpdate as Yp, KEY_ENTER_COMMAND as Xp, LineBreakNode as Qp, $copyNode as bk, FOCUS_COMMAND as Zp, createEditor as kk, SELECT_ALL_COMMAND as xk, isExactShortcutMatch as Tk, getDOMTextNode as Ck, KEY_ESCAPE_COMMAND as eh, createCommand as $l, HISTORIC_TAG as ql, UNDO_COMMAND as th, REDO_COMMAND as rh, CLEAR_EDITOR_COMMAND as Sk } from "lexical";
import { addClassNamesToElement as bi, removeClassNamesFromElement as Ba, $findMatchingParent as qe, $dfsIterator as oa, $dfs as oi, mergeRegister as Ie, registerNestedElementResolver as nh, $unwrapNode as Mc, IS_APPLE as yn } from "@lexical/utils";
import { useLexicalNodeSelection as _k } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Qt } from "fast-equals";
import ds from "quill-delta";
import { useLexicalComposerContext as de } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as vk } from "unicode-segmenter/grapheme";
import { copyToClipboard as Mk, $getLexicalContent as Ek } from "@lexical/clipboard";
import { TreeView as Ak } from "@lexical/react/LexicalTreeView";
import * as Pk from "react-dom";
import { createPortal as Un } from "react-dom";
import { LexicalComposer as ih } from "@lexical/react/LexicalComposer";
import { ContentEditable as sh } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as oh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as ah } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as ch } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Nk } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as wk, createDOMRange as Ok, createRectsFromDOMRange as Rk } from "@lexical/selection";
import { autoUpdate as $k, computePosition as qk, shift as Ik, flip as Lk } from "@floating-ui/dom";
import { $generateNodesFromDOM as Dk } from "@lexical/html";
import { AutoFocusPlugin as Uk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Fk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as lh, LexicalCollaboration as zk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Kk } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Bk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as jk, $isRootTextContentEmpty as Vk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Wk } from "@lexical/yjs";
import { Array as Sd, Map as _d, YArrayEvent as Hk } from "yjs";
const ja = (e) => rt(Kn(e)), Gk = {
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
function uh(e) {
  return Gk[e];
}
const D = " ", vo = "​", or = D, Il = `${D}|`, nr = "p", xs = "+", dh = "-", Mo = "chapter", Ec = "verse", vd = "invalid", Jk = "text-spacing", Yk = "formatted-font", Xk = "marker-", Ll = "external-usj-mutation", fh = "selection-change", $t = "cursor-change", Ac = "annotation-change", Ts = "delta-change", ph = "marker-settle", Qk = [
  Ll,
  fh,
  $t,
  Ac,
  Ts
], Gn = "zmsc-s", wi = "zmsc-e", Zk = [Gn, wi], ex = [
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
  Gn,
  wi
], hh = 1, Dl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], tx = Dl.filter((e) => e !== "sid" && e !== "eid");
class br extends zs {
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
    return new br(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return mh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (ex.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: hh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function gh(e) {
  return Zk.includes(e);
}
function mh(e, t, r, n, i) {
  return rt(new br(e, t, r, n, void 0, i));
}
function it(e) {
  return e instanceof br;
}
const Ul = "f", rx = [
  // Footnote
  Ul,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function uo(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const nx = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], yh = 1;
class Le extends xr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Ul, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (uo(t) === "crossref" ? dh : xs), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Le(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => sx(t) ? {
        conversion: ix,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Fl().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (rx.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", uo(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", uo(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", uo(this.getMarker()))), { element: r };
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
      version: yh
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
function ix(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Fl(t, r, n) };
}
function Fl(e, t, r, n, i) {
  return rt(new Le(e, t, r, n, i));
}
function sx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Le.isValidMarker(t) && e.classList.contains(Le.getType());
}
function B(e) {
  return e instanceof Le;
}
var C;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(C || (C = {}));
var x;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(x || (x = {}));
const Pc = {
  id: {
    category: C.FileIdentification,
    type: x.Paragraph,
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
    category: C.FileIdentification,
    type: x.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: C.FileIdentification,
    type: x.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: C.Remarks,
    type: x.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: C.Remarks,
    type: x.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: C.Remarks,
    type: x.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction section heading, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"],
      CharacterStyling: ["no"]
    }
  },
  is1: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
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
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: C.Introduction,
    type: x.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: C.DivisionMarks,
    type: x.Paragraph,
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
    category: C.DivisionMarks,
    type: x.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: C.DivisionMarks,
    type: x.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: C.DivisionMarks,
    type: x.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: C.DivisionMarks,
    type: x.Paragraph,
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
    category: C.DivisionMarks,
    type: x.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: C.DivisionMarks,
    type: x.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: C.DivisionMarks,
    type: x.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Paragraphs,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: C.Poetry,
    type: x.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: C.Poetry,
    type: x.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
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
    category: C.Poetry,
    type: x.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Paragraph,
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
    category: C.Lists,
    type: x.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: C.Footnotes,
    type: x.Note,
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
    category: C.Footnotes,
    type: x.Note,
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
    category: C.Footnotes,
    type: x.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: C.Footnotes,
    type: x.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: C.Footnotes,
    type: x.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: C.Footnotes,
    type: x.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: C.Footnotes,
    type: x.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: C.Footnotes,
    type: x.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: C.Footnotes,
    type: x.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: C.Footnotes,
    type: x.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: C.Footnotes,
    type: x.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: C.Footnotes,
    type: x.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: C.Footnotes,
    type: x.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: C.CrossReferences,
    type: x.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: C.CrossReferences,
    type: x.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: C.CrossReferences,
    type: x.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: C.CrossReferences,
    type: x.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: C.CrossReferences,
    type: x.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: C.CrossReferences,
    type: x.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: C.CrossReferences,
    type: x.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: C.CrossReferences,
    type: x.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: C.CrossReferences,
    type: x.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: C.CrossReferences,
    type: x.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: C.CrossReferences,
    type: x.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: C.SpecialText,
    type: x.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: C.SpecialText,
    type: x.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: C.SpecialText,
    type: x.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: C.SpecialText,
    type: x.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: C.SpecialText,
    type: x.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: C.SpecialText,
    type: x.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: C.SpecialText,
    type: x.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: C.SpecialText,
    type: x.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: C.SpecialText,
    type: x.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: C.SpecialText,
    type: x.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: C.SpecialText,
    type: x.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: C.SpecialText,
    type: x.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: C.SpecialText,
    type: x.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: C.SpecialText,
    type: x.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: C.SpecialText,
    type: x.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: C.Breaks,
    type: x.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, On = {
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
}, Md = {
  p: { children: On },
  q: { children: On },
  q1: { children: On },
  q2: { children: On },
  q3: { children: On },
  q4: { children: On },
  b: { children: On },
  qm: {
    children: {
      Paragraphs: { add: ["p"], remove: [] }
    }
  },
  c: {
    type: x.Paragraph,
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
    category: C.SpecialFeatures,
    type: x.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: C.SpecialFeatures,
    type: x.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: C.SpecialFeatures,
    type: x.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: C.SpecialFeatures,
    type: x.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function $r(e) {
  const t = Object.hasOwn(Pc, e) ? Pc[e] : void 0, r = Object.hasOwn(Md, e) ? Md[e] : void 0;
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
const bh = "v", kh = "c", Rn = "fig", Ed = "tr", Nc = "esb", xh = "esbe", Ad = "periph", Pd = "alt", Nd = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, ox = {
  "": "start",
  c: "center",
  r: "end"
};
function wd(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Od(e) {
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
const ax = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function cx(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === vo && s + 1 < e.length && Od(e[s + 1]) || (Od(o) ? (r || (i = t.length, t += o), r = !0) : ax.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function lx(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function ux(e, t) {
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
const dx = /^(?:qt[1-5]?|ts)-[se]$/;
function zl(e) {
  return dx.test(e) || gh(e);
}
function Va(e, t) {
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
function fx(e, t, r) {
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
      const g = e.indexOf("\\", i), y = g === -1 ? e.length : g;
      a(cx(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: d } = ux(e, i + 1);
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
    if (l === bh) {
      const { word: g, next: y } = Va(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === kh) {
      const { word: g, next: y } = Va(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === x.Note || h === void 0 && Le.isValidMarker(l)) {
      const { word: g, next: y } = Va(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === x.Milestone || h === void 0 && zl(l)) {
      const g = xx(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    h === x.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : h === x.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Eo(p) ? (u(), Eo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === Nc || l === xh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Rd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Eo(e) {
  return Object.hasOwn(Rd, e) ? Rd[e] : void 0;
}
function px(e) {
  return Eo(e) !== void 0;
}
const hx = /([-\w]+)\s*=\s*"(.*?)"/g, gx = /[\s\u200B]*[\n\r][\s\u200B]*/g, Th = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function aa(e) {
  return Th[e];
}
const mx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function yx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Cs(e, t, r = Th[t]) {
  const n = e.replace(gx, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(hx)];
  if (s.length > 0) {
    if (!yx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      mx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function ca(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function bx(e) {
  const t = Fr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function kx(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Cs(e.slice(n + 1, i), r, ca(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function xx(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Cs(s.slice(o + 1), r, ca(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = kx(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Er(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", D);
}
function ln(e) {
  return e.content || (e.content = []), e.content;
}
function Fr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d, u;
  const f = () => d ? ln(d) : u ? ln(u) : r;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? ln(o[o.length - 1].object) : ln(s);
    if (o.length > 0)
      return ln(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: nr, content: [] }, f().push(i);
    }
    return ln(i);
  }, g = (X) => {
    const P = h();
    typeof X == "string" && typeof P[P.length - 1] == "string" ? P[P.length - 1] = P[P.length - 1] + X : P.push(X);
  }, y = (X) => {
    for (let P = X; P < o.length; P += 1) {
      const re = o[P].object;
      re.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, b = (X) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, X || (s.closed = "false"), s = void 0);
  }, T = () => {
    c = void 0, l = void 0;
  }, E = (X, P, re) => {
    k();
    const [, ye, Se, st] = re, We = {
      type: "table:cell",
      marker: st ? P.slice(0, P.indexOf("-")) : P,
      align: ox[ye],
      content: []
    };
    st && (We.colspan = String(Number(st) + 1 - Number(Se))), ln(X).push(We), i = We;
  }, S = (X) => {
    d && (X || (d.closed = "false"), d = void 0);
  }, w = () => {
    u = void 0;
  };
  let R, K = "", z;
  const ae = () => {
    K && g(Er(K)), K = "";
  }, Y = (X = !1) => {
    R?.type === "sidebar" ? K = "" : X && K.endsWith(`
`) && (K = K.slice(0, -1)), R = void 0, ae();
  }, ge = () => {
    if (!z)
      return;
    const X = { type: "char", marker: z.marker, content: [] };
    z.value && (X.content = [Er(z.value)]), h().push(X), o.push({ object: X }), z = void 0;
  }, se = (X, P) => {
    p = !1, T(), k(), b(!1), i = { type: "para", marker: X, content: [] }, P && (i.content = [Er(P)]), f().push(i);
  }, q = () => {
    z && (se(z.marker, z.value), z = void 0);
  };
  let J;
  const j = (X) => {
    if (!J)
      return;
    let { value: P } = J;
    J = void 0, X && P.endsWith(`
`) && (P = P.slice(0, -1));
    const re = P.indexOf("|"), ye = re >= 0 ? Cs(P.slice(re + 1), Ad) : void 0, Se = re >= 0 ? P.slice(0, re) : P, st = re >= 0 && (!ye || !!Se && !!ye[Pd]), We = st ? void 0 : ye, ie = st ? P : Se, Xe = {
      type: "periph",
      ...ie ? { [Pd]: Er(ie) } : {},
      ...We
    };
    Xe.content = [], f().push(Xe), u = Xe, i = void 0;
  };
  let V;
  const Q = () => {
    if (V) {
      if (V.shape === "para")
        se(Rn, V.value);
      else {
        const X = { type: "char", marker: Rn, content: [] };
        V.value && (X.content = [Er(V.value)]), h().push(X), o.push({ object: X });
      }
      V = void 0;
    }
  }, me = fx(e, t?.getMarker ?? $r, n);
  for (let X = 0; X < me.length; X++) {
    const P = me[X];
    if (z) {
      if (P.kind === "text") {
        z.value += P.text;
        continue;
      }
      if (z.shape === "char" && P.kind === "end" && P.marker.replace(/^\+/, "") === z.marker) {
        if (z.value.trim() === "") {
          h().push({ type: "char", marker: z.marker, content: [] }), z = void 0, Y();
          continue;
        }
        Object.assign(z.target, {
          [z.attrName]: Er(z.value.trim())
        });
        const re = z.marker;
        if (z = void 0, re === "ca") {
          const ye = me[X + 1];
          ye?.kind === "text" && /^[\s\u200B]*$/.test(ye.text) && X++;
        }
        continue;
      }
      if (z.shape === "para" && (P.kind === "para" || P.kind === "chapter")) {
        const re = z.value.replace(/[\s\u200B]+$/, "");
        re === "" ? (se(z.marker), z = void 0) : (Object.assign(z.target, { [z.attrName]: Er(re) }), z = void 0);
      } else {
        R = void 0, (P.kind === "para" || P.kind === "chapter") && z.value.endsWith(`
`) && (z.value = z.value.slice(0, -1)), z.shape === "para" ? q() : ge(), X--;
        continue;
      }
    }
    if (J) {
      if (P.kind === "text" || P.kind === "optbreak") {
        J.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      j(P.kind === "para" || P.kind === "chapter"), X--;
      continue;
    }
    if (V) {
      if (P.kind === "text" || P.kind === "optbreak") {
        V.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      if (P.kind === "end" && P.marker.replace(/^\+/, "") === Rn) {
        const re = V.value.indexOf("|"), ye = re >= 0 ? Cs(V.value.slice(re + 1), Rn) : void 0;
        if (ye) {
          const Se = {};
          for (const [ie, Xe] of Object.entries(ye))
            Se[ie === "src" ? "file" : ie] = Xe;
          const st = {
            type: "figure",
            marker: Rn,
            ...Se
          }, We = V.value.slice(0, re);
          We && (st.content = [Er(We)]), g(st), V = void 0;
          continue;
        }
      }
      Q(), X--;
      continue;
    }
    if (R)
      if (P.kind === "text") {
        if (P.text.includes(`
`) && /^[\s\u200B]*$/.test(P.text)) {
          K += P.text;
          continue;
        }
        Y();
      } else if (P.kind === "charOpen" || P.kind === "para") {
        const re = P.kind === "para" || !P.isNested ? Eo(P.marker) : void 0;
        if (re && re.targetTypes.includes(R.type)) {
          K = "", z = {
            target: R,
            attrName: re.attrName,
            marker: P.marker,
            shape: re.shape,
            value: ""
          };
          continue;
        }
        Y(P.kind === "para");
      } else
        Y(P.kind === "chapter");
    if (!s && !n && (P.kind === "charOpen" && !P.isNested && P.marker === Rn || P.kind === "para" && P.marker === Rn)) {
      k(), V = { shape: P.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (P.kind) {
      case "text": {
        let re = P.text;
        if (!s && re.endsWith(`
`)) {
          const ye = me[X + 1];
          (ye === void 0 || ye.kind === "para" || ye.kind === "chapter") && (re = re.slice(0, -1));
        }
        re && g(Er(re));
        break;
      }
      case "para": {
        const re = !s && !n;
        if (re && P.marker === Ed) {
          k(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Ed, content: [] }, ln(c).push(l), i = l, p = !1;
          break;
        }
        if (re && l) {
          const ye = Nd.exec(P.marker);
          if (ye && wd(ye)) {
            E(l, P.marker, ye);
            break;
          }
        }
        if (T(), !n && P.marker === Nc) {
          k(), b(!1), S(!1);
          const ye = {
            type: "sidebar",
            marker: Nc,
            content: []
          };
          f().push(ye), d = ye, i = void 0, R = d, p = !1;
          break;
        }
        if (P.marker === xh && d) {
          k(), b(!1), S(!0), i = void 0;
          break;
        }
        if (!n && P.marker === Ad) {
          k(), b(!1), S(!1), w(), J = { value: "" }, i = void 0, p = !1;
          break;
        }
        se(P.marker);
        break;
      }
      case "verse": {
        b(!1);
        const re = { type: "verse", marker: bh, number: P.number };
        g(re), R = re;
        break;
      }
      case "chapter": {
        k(), b(!1), T(), S(!1), w(), i = void 0;
        const re = {
          type: "chapter",
          marker: kh,
          number: P.number
        };
        r.push(re), R = re, p = !0;
        break;
      }
      case "note": {
        b(!1);
        const re = h();
        s = { type: "note", marker: P.marker, caller: P.caller, content: [] }, a = o.length, re.push(s), R = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !P.isNested) {
          const Se = Nd.exec(P.marker);
          if (Se && wd(Se)) {
            E(l, P.marker, Se);
            break;
          }
        }
        if (!P.isNested) {
          const Se = s ? a : 0;
          y(Se), o.length = Se;
        }
        const re = h(), ye = { type: "char", marker: P.marker, content: [] };
        re.push(ye), o.push({ object: ye });
        break;
      }
      case "end": {
        const re = P.marker.replace(/^\+/, ""), ye = s ? a : 0, Se = o.findLastIndex((st, We) => We >= ye && st.object.marker === re);
        Se >= 0 ? (Tx(o[Se].object), y(Se + 1), o.length = Se) : s && s.marker === re ? b(!0) : (y(ye), o.length = ye, g({ type: "unmatched", marker: `${P.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: P.marker, ...P.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (J && j(!0), V && Q(), z)
    if (z.shape === "para") {
      const X = z.value.replace(/[\s\u200B]+$/, "");
      X === "" ? se(z.marker) : Object.assign(z.target, { [z.attrName]: Er(X) }), z = void 0;
    } else
      z.value.endsWith(`
`) && (z.value = z.value.slice(0, -1)), ge();
  k(), b(!1), S(!1);
  const ht = (X) => {
    for (const P of X)
      typeof P != "string" && P.content && (ht(P.content), P.content.length === 0 && delete P.content);
  };
  return ht(r), r;
}
function Tx(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Cs(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Jn = na("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), bn = na("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), pe = na("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), zr = "marker-trailing-space", Ch = 1, Cx = "marker", Kl = na("isGutterMarker", {
  parse: (e) => e === !0
});
class Zr extends zs {
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
    return new Zr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Mx(t) ? {
        conversion: Sx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Jr().updateFromJSON(t);
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
    return r && ni(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Ch
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Sx(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Jr(t, r) };
}
function Jr(e, t) {
  return rt(new Zr(e, t));
}
function _x(e) {
  return Rt(Jr(Cx, e), Kl, !0);
}
function vx(e) {
  return Bt(e) && le(e, Kl);
}
function Mx(e) {
  return e?.tagName === "span";
}
function Bt(e) {
  return e instanceof Zr;
}
function Sh(e) {
  return e?.type === Zr.getType();
}
const hn = "internal-comment", Ex = [hn], _h = Object.freeze({}), wc = Object.freeze({}), Oc = Object.freeze({}), Rc = Object.freeze({}), $c = Object.freeze({}), Ax = 1, ki = /* @__PURE__ */ new Map(), ns = /* @__PURE__ */ new Map(), xi = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map();
class dt extends xr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = _h, r, n, i, s, o) {
    super(o), this.__typedIDs = fo(t), this.__typedOnClicks = Wa(r), this.__typedOnRemoves = Ha(n), this.__typedOnMouseEnters = Ga(i), this.__typedOnMouseLeaves = Ja(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = fo(t.__typedIDs), n = Wa(t.__typedOnClicks), i = Ha(t.__typedOnRemoves), s = Ga(t.__typedOnMouseEnters), o = Ja(t.__typedOnMouseLeaves);
    return new dt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Ex.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ss().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Ax
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      bi(n, $n(t.theme.typedMark, a)), c.length > 1 && bi(n, $n(t.theme.typedMarkOverlap, a));
      for (const l of c)
        bi(n, $n("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = $n(n.theme.typedMark, s), u = $n(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && bi(r, d) : l === 0 && Ba(r, d), c === 1 ? l === 2 && bi(r, u) : l === 1 && Ba(r, u));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ba(r, $n("annotationId", h));
      for (const h of a)
        f.has(h) || bi(r, $n("annotationId", h));
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
    return Pe(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = fo(r.__typedIDs);
    r.__typedIDs = fo(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ao(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Wa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Pe(t) ? ki.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ha(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Pe(t) ? ns.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Ga(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Pe(t) ? xi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Ja(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Pe(t) ? Ti.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Pe(a))
      return;
    ot(t), ot(r);
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
    if (!Pe(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ao(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Ss(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), ki.delete(r.getKey()), ns.delete(r.getKey()), xi.delete(r.getKey()), Ti.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === wc) {
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
    ot(t), ot(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = un(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = un(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === wc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Oc) {
      const t = ns.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      ns.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    ns.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    ot(t), ot(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = un(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = un(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Oc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Rc) {
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
    ot(t), ot(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = un(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = un(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Rc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === $c) {
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
    ot(t), ot(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = un(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = un(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === $c) {
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
    const i = Px(t, r);
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
    for (; Pe(t) && qd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Pe(r) && qd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Nx(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = wx(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ox(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Rx(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function fo(e = _h) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (ot(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      ot(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Wa(e) {
  if (!e || e === wc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    ot(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      ot(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ha(e) {
  if (!e || e === Oc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    ot(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      ot(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ga(e) {
  if (!e || e === Rc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    ot(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      ot(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ja(e) {
  if (!e || e === $c)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    ot(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      ot(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function un(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function $d(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Px(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function qd(e, t) {
  const r = $d(e), n = $d(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Nx(e, t) {
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
function wx(e, t) {
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
function Ox(e, t) {
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
function Rx(e, t) {
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
function $n(e, t) {
  return `${e}-${t}`;
}
function Id(e) {
  return `external-${e}`;
}
function Ss(e, t, r, n, i) {
  return rt(new dt(e, t, r, n, i));
}
function Pe(e) {
  return e instanceof dt;
}
function vh(e) {
  return e?.type === dt.getType();
}
function Ao(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Mh(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let h, g;
  for (let y = 0; y < d; y++) {
    const k = a[y];
    if (L(g) && g.isParentOf(k))
      continue;
    const b = y === 0, T = y === d - 1;
    let E = null;
    if (v(k)) {
      const S = k.getTextContentSize(), w = b ? f : 0, R = T ? p : S;
      if (w === 0 && R === 0)
        continue;
      const K = k.splitText(w, R);
      E = K.length > 1 && (K.length === 3 || b && !T || R === S) ? K[1] : K[0];
    } else {
      if (Pe(k))
        continue;
      L(k) && k.isInline() && (E = k);
    }
    if (E !== null) {
      if (E && E.is(h))
        continue;
      const S = E.getParent();
      (S == null || !S.is(h)) && (g = void 0), h = S, g === void 0 && (g = Ss(), g.addID(t, r, n, i, s, o), E.insertBefore(g)), g.append(E);
    } else
      h = void 0, g = void 0;
  }
  t === hn && L(g) && (u ? g.selectStart() : g.selectEnd());
}
function $x(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Pe(n))
      return n.getTypedIDs()[t];
    if (v(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Pe(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const qx = ["type", "marker", "content"], qc = "unknown", Eh = 1, Ix = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ai extends xr {
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
    return new ai(r, n, i, s);
  }
  static importDOM() {
    return {
      [qc]: (t) => Dx(t) ? {
        conversion: Lx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Bl().updateFromJSON(t);
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
    return Ix.has(this.getTag());
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
    const t = document.createElement(qc);
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
    const r = t ?? N();
    if (!r)
      return !1;
    if (ia(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function Lx(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Bl(t, r) };
}
function Bl(e, t, r) {
  return rt(new ai(e, t, r));
}
function Dx(e) {
  return e?.tagName.toLowerCase() === qc;
}
function ve(e) {
  return e instanceof ai;
}
const Ah = 1, Ux = "attribute-run";
function Ya(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class en extends xr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new en(r, n);
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
    t.classList.add(Ux);
    const r = Ya(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Ya(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Ya(this.__runKind);
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
      version: Ah
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
  return rt(new en(e));
}
function je(e) {
  return e instanceof en;
}
const _s = "id", Nh = 1, Fx = [
  "type",
  "marker",
  "code",
  "content"
];
class jt extends xr {
  __marker = _s;
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
    return wh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Qb(t);
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
      version: Nh
    };
  }
}
function wh(e, t) {
  return rt(new jt(e, t));
}
function Ee(e) {
  return e instanceof jt;
}
function jl(e) {
  return e?.type === jt.getType();
}
const Po = "c", Oh = 1, zx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Gt extends xr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Po, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Gt(r, n, i, s, o, a);
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
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Mo, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Oh
    };
  }
}
function Rh(e, t, r, n, i) {
  return rt(new Gt(e, t, r, n, i));
}
function Fe(e) {
  return e instanceof Gt;
}
function Kx(e) {
  return e?.type === Gt.getType();
}
const $h = [
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
], qh = [
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
], Bx = [
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
  ...$h,
  ...qh
], Ih = 1, jx = ["type", "marker", "content"];
class Me extends xr {
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
    return new Me(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Bx.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && $h.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && qh.includes(t);
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
    return Me.isValidFootnoteMarker(t) || Me.isValidCrossReferenceMarker(t);
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
    return Yr().updateFromJSON(t);
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
    return Ld(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Ld(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Ih
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Yr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Ld(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Vx(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Yr(t) };
}
function Yr(e, t) {
  return rt(new Me(e, t));
}
function Wx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Me.isValidMarker(t) && e.classList.contains(Me.getType());
}
function F(e) {
  return e instanceof Me;
}
function Hx(e) {
  return e?.type === Me.getType();
}
const Lh = 1, Gx = "c", Dh = "span";
class Kr extends zs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Gx, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Kr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Uh(t) ? {
        conversion: Jx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Vl().updateFromJSON(t);
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
    const t = document.createElement(Dh);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Mo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Mo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? ir(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Lh
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
function Jx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Vl(t) };
}
function Vl(e, t, r, n, i, s) {
  return rt(new Kr(e, t, r, n, i, s));
}
function Uh(e) {
  return e ? e.classList.contains(Mo) && e.tagName.toLowerCase() === Dh : !1;
}
function Bs(e) {
  return e instanceof Kr;
}
function Yx(e) {
  return e?.type === Kr.getType();
}
const Fh = 1;
class kn extends El {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new kn(t.__key);
  }
  static importJSON(t) {
    return hr().updateFromJSON(t);
  }
  getMarker() {
    return nr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Fh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = hr();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function hr() {
  return rt(new kn());
}
function Ir(e) {
  return e instanceof kn;
}
function la(e) {
  return e?.type === kn.getType();
}
const Xx = [
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
  nr,
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
], zh = 1, Qx = ["type", "marker", "content"];
class pt extends El {
  __marker;
  __unknownAttributes;
  constructor(t = nr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new pt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Xx.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Zx,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return qi().updateFromJSON(t);
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
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: zh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = qi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Zx(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = qi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function qi(e, t) {
  return rt(new pt(e, t));
}
function fe(e) {
  return e instanceof pt;
}
function Wl(e) {
  return e?.type === pt.getType();
}
const No = "v", Kh = 1, eT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class _t extends et {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = No, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new _t(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Bh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ec, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Kh
    };
  }
}
function Bh(e, t, r, n, i, s) {
  return rt(new _t(e, t, r, n, i, s));
}
function Be(e) {
  return e instanceof _t;
}
function jh(e) {
  return e?.type === _t.getType();
}
const tT = "​", Ii = tT;
var Dd;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Dd || (Dd = {}));
var Ud;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ud || (Ud = {}));
function rT() {
  return Ne(Ii);
}
function nT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Ii, ""));
}
function js(e) {
  return e.length > 0 && e.includes(Ii) && e.replaceAll(Ii, "") === "";
}
function Vs(e) {
  return v(e) && js(e.getTextContent());
}
function Vh(e) {
  return Kx(e) || Yx(e);
}
function tt(e) {
  return Fe(e) || Bs(e);
}
function Wh(e, t) {
  return e.find((r) => tt(r) && r.getNumber() === t.toString());
}
function iT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && tt(r));
}
function Ic(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function sT(e) {
  if (!e)
    return;
  if (tt(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !tt(t); )
    t = t.getPreviousSibling();
  if (t && tt(t))
    return t;
}
function Vt(e) {
  return qe(e, B) ?? void 0;
}
function oT(e) {
  return Ee(e) || Fe(e) || F(e) || Bs(e) || Ir(e) || it(e) || fe(e) || B(e) || Be(e) || ve(e);
}
function Hl(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Hh(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function we(e) {
  return ft(e) || Ee(e);
}
function ft(e) {
  return fe(e) || Ir(e);
}
function aT(e) {
  return Wl(e) || la(e);
}
function wo(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Yn(e, t) {
  const r = le(t, Jn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function cT(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? ck(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function lT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Li(e) {
  return e?.type === et.getType();
}
function uT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function dT(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Ve(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ct(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Gh(e, t, r) {
  const n = Ve(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function ir(e, t) {
  let r = Ve(e);
  return t && (r += `${D}${t}`), r += " ", r;
}
function fT(e) {
  const t = e[Ks];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Jh(e) {
  return Xh(e) || Li(e) && fT(e) === "attribute" ? "" : Li(e) && e.text !== D ? e.text : Hx(e) ? e.children.map((t) => Jh(t)).join("") : "";
}
function pT(e) {
  return e.map((r) => Jh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Wt(e) {
  return " " + e + D;
}
function Gl(e) {
  const t = [];
  for (const r of e) {
    if (!F(r))
      continue;
    const n = Yh(r);
    n !== or && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Yh(e) {
  return O(e) || Cr(e) || v(e) && le(e, pe) === "attribute" ? "" : v(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => Yh(t)).join("") : "";
}
function Cr(e) {
  return Bt(e) && e.getTextType() === "marker";
}
function Mt(e) {
  return O(e) || Cr(e);
}
function Jl(e) {
  if (!e || !Mt(e))
    return !1;
  const t = e.getParent();
  return Ee(t) && e.is(t.getFirstChild());
}
function Xh(e) {
  return Xl(e) || Sh(e) && e.textType === "marker";
}
function Fd(e, t) {
  hT(e, t), e.setMarker(t);
}
function hT(e, t) {
  const r = e.getMarker(), n = Ve(r), i = Ve(r, !0), s = ct(r), o = ct(r, !0), a = Me.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Mt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (Cr(c)) {
        const f = l.startsWith(Ve("", !0));
        c.setTextContent(d ? Ve(t, f) : ct(t, f));
      }
    }
  });
}
function Ye(e, t = Zb) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function ze(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Qh(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Zh(e) {
  if (!A(e))
    return zd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return zd(e) ?? t ?? void 0;
  } catch (n) {
    if (Qh(n))
      return t ?? void 0;
    throw n;
  }
}
function gT(e, t) {
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
function Yl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function mT(e) {
  return !!e && e.includes("-");
}
function eg(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function zd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Ws(e) {
  if (!e)
    return !1;
  if (ii(e) || O(e) || Cr(e) || je(e) || Bt(e) && e.getTextType() === "attribute")
    return !0;
  if (v(e)) {
    const t = le(e, pe);
    if (t === zr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === D || js(r))
      return !0;
  }
  return !1;
}
function Hs() {
  const e = Ne(D);
  return Rt(e, pe, zr), e.setMode("token"), e;
}
function yT(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function Br(e) {
  return v(e) && le(e, pe) === zr;
}
function tg(e) {
  const t = e.getFirstChild();
  if (!Mt(t) || t === null || Br(t.getNextSibling()))
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
function Hi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Ws(s)) {
      if (Pe(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === et.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function ua(e) {
  let t = e.getParent();
  for (; t && Pe(t); )
    t = t.getParent();
  return t;
}
function bT(e, t) {
  return Hi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function kT(e, t) {
  const r = ua(e);
  if (!r)
    return;
  const n = Hi(r);
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
function rg(e, t) {
  const r = Hi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Ws(n))
    return rg(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || wo(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || wo(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function TT(e, t) {
  if (t <= 0)
    return 0;
  const r = Hi(e);
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
class jr extends et {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Ln(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new jr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return xt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || Ln(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Ln(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Ln(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Ln(r.__marker, r.__markerSyntax, t), r;
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
function xt(e, t, r) {
  return rt(new jr(e, t, void 0, r));
}
function O(e) {
  return e instanceof jr;
}
function Xl(e) {
  return e?.type === jr.getType();
}
function tn(e) {
  return e.getTextContent() === Ln(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function _T(e) {
  e.setTextContent(Ln(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ln(e, t, r = !1) {
  return t === "closing" ? ct(e, r) : t === "selfClosing" ? ct("") : Ve(e, r);
}
const vT = /* @__PURE__ */ new Set(["closed"]);
function Nr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !vT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function ng(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function ig(e) {
  const t = Object.keys(e).filter((n) => !tx.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function sg(e, t, r, n) {
  return ng(
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
function gs(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function MT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : gs(e) === void 0 && og(e) === void 0;
}
function og(e) {
  return e.getChildren().find((t) => v(t) && le(t, pe) === "attribute");
}
function vs(e, t) {
  return Gs(e.getNextSibling(), t);
}
const ET = /^[ \u00A0]+$/;
function Ql(e) {
  if (tn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ve(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && ET.test(r.slice(t.length));
}
function Gs(e, t) {
  let r, n, i, s;
  return je(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Ql(e) && (r = e, e = e.getNextSibling()), v(e) && le(e, pe) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && tn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Xr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!O(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (v(n) && n.getTextContent() === Wt(e.getCaller()))
    return n;
}
function Zl(e) {
  const t = Xr(e);
  return t ? Gs(t.getNextSibling(), "cat") : {};
}
function da(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || O(t)) && le(t, pe) !== "attribute")
    return t;
}
function ag(e) {
  const t = da(e);
  return t ? Gs(t.getNextSibling(), "ca") : {};
}
function cg(e) {
  const t = da(e);
  if (!t)
    return;
  const r = Gs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function lg(e) {
  const t = cg(e);
  return t ? Gs(t.getNextSibling(), "cp") : {};
}
function ug(e) {
  const t = e.getParent();
  if (!F(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Be(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && le(n, pe) === "attribute" || F(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || je(n)))
        return;
    }
}
function fa(e) {
  let t, r, n, i, s = e.getNextSibling();
  return je(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Ql(s) && (t = s, s = s.getNextSibling()), v(s) && le(s, pe) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && tn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function eu(e) {
  return F(ua(e));
}
function tu(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? eu(t) : t.getChildren().some((i) => F(i) && i.getMarker() === r) ? !0 : void 0;
}
function AT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = tu(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Gi(e) {
  return v(e) && e.getType() === et.getType() && le(e, pe) !== "attribute";
}
function pa(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !O(t) || !F(r) || !dg(t, r) || !Gi(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function dg(e, t) {
  return e.getMarkerSyntax() === "opening" && tu(e, t) !== void 0;
}
function ru(e, t) {
  if (!dg(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? tu(r, t) === !0 ? "spacer" : void 0 : Gi(r) ? r.getTextContent().startsWith(D) ? void 0 : "prefix" : "spacer";
}
function PT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && ru(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function fg(e, t) {
  const r = N();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function pg(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = ru(t, e);
    if (r !== void 0 && !fg(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        v(n) && n.setTextContent(D + n.getTextContent());
      } else
        t.insertAfter(Ne(D));
  });
}
function hg(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && ru(t, e) !== void 0 && fg(t, e)) : !1;
}
const NT = "file", wT = "src", OT = "colspan", RT = "category", $T = "alt", qT = "closed", IT = "false";
function LT(e) {
  return e[qT] !== IT;
}
function DT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === NT ? wT : t,
    r
  ]));
}
function gg(e, t) {
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
function mg(e, t, r) {
  const n = r ?? {}, i = LT(n);
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
        opening: `\\${gg(t, n[OT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Nr(DT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [RT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Nr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [$T]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Nr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Nr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const It = { wantsRun: !1, valueText: void 0 }, rn = {};
function Xa(e, t) {
  if (t === "va")
    return e;
  const r = vs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function nu(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed())
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
function ha(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!A(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function UT(e) {
  return je(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && le(e, pe) === "attribute";
}
function FT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!v(e) || le(e, pe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Qa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Be(t))
      return t;
    if (!UT(t))
      return;
  }
}
function Kd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Be(t),
    ownerOf: (t) => {
      if (je(t))
        return t.getRunKind() === e ? Qa(t) : void 0;
      const r = t.getParent();
      return je(r) ? r.getRunKind() === e ? Qa(r) : void 0 : FT(t) === e ? Qa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Be(t))
        return It;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? It : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (t) => Be(t) ? vs(Xa(t, e), e) : rn,
    graceSite: (t, r) => Be(t) ? !r.opener && !r.closer ? nu(Xa(t, e)) : ha(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Be(t) ? Xa(t, e) : void 0
    }
  };
}
const zT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => It,
  scanPieces: () => rn,
  graceSite: (e) => F(e) && hg(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, KT = {
  kind: "char",
  ownerPredicate: (e) => F(e),
  ownerOf: (e) => {
    if (!v(e) || le(e, pe) !== "attribute")
      return;
    const t = e.getParent();
    return F(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!F(e) || gs(e) === void 0)
      return It;
    const t = Nr(e.getUnknownAttributes() ?? {}, aa(e.getMarker()));
    return t === "" ? It : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => F(e) ? { value: og(e) } : rn,
  graceSite: (e, t) => {
    if (!F(e) || t.value)
      return !1;
    const r = gs(e);
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
    insertRunBefore: (e) => F(e) ? gs(e) : void 0
  }
};
function yg(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!v(e) || le(e, pe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function BT(e) {
  const t = e.getParent();
  if (!B(t))
    return;
  const r = Xr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!yg(n))
        return;
    }
}
const jT = {
  kind: "cat",
  ownerPredicate: (e) => B(e),
  ownerOf: (e) => {
    if (je(e))
      return e.getRunKind() === "cat" && B(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return je(t) ? t.getRunKind() === "cat" && B(t.getParent()) ? t.getParent() ?? void 0 : void 0 : yg(e) ? BT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!B(e) || e.getIsCollapsed() !== !1)
      return It;
    const t = e.getCategory();
    return t === void 0 ? It : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => B(e) ? Zl(e) : rn,
  graceSite: (e, t) => {
    if (!B(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Xr(e);
      return r !== void 0 && nu(r);
    }
    return ha(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => B(e) ? Xr(e) : void 0
  }
};
function VT(e) {
  return je(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && le(e, pe) === "attribute";
}
function WT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!v(e) || le(e, pe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function HT(e) {
  const t = e.getParent();
  if (!Fe(t))
    return;
  const r = da(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!VT(n))
        return;
    }
}
function Bd(e) {
  const t = (r) => Fe(r) ? e === "ca" ? da(r) : cg(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Fe(r),
    ownerOf: (r) => {
      if (je(r))
        return r.getRunKind() === e && Fe(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return je(n) ? n.getRunKind() === e && Fe(n.getParent()) ? n.getParent() ?? void 0 : void 0 : WT(r) === e ? HT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Fe(r))
        return It;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? It : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (r) => Fe(r) ? e === "ca" ? ag(r) : lg(r) : rn,
    graceSite: (r, n) => {
      if (!Fe(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && nu(i);
      }
      return ha(n);
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
function bg(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && le(e, pe) === "attribute";
}
function GT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (it(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!bg(t))
      return;
  }
}
const JT = {
  kind: "milestone",
  ownerPredicate: (e) => it(e),
  ownerOf: (e) => {
    const t = je(e) ? e.getRunKind() === "milestone" ? e : void 0 : je(e.getParent()) ? e.getParent() : bg(e) ? e : void 0;
    if (!t || je(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return je(t) ? it(r) ? r : void 0 : GT(t);
  },
  expectedPieces: (e) => {
    if (!it(e))
      return It;
    const t = sg(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Nr(t, ca(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : D + r };
  },
  scanPieces: (e) => {
    if (!it(e))
      return rn;
    const { opening: t, attribute: r, closing: n, wrapper: i } = fa(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!it(e))
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
    return ha(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => it(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, YT = mg("optbreak", void 0, void 0).opening, XT = {
  kind: "optbreak",
  ownerPredicate: (e) => ve(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!ve(t) || t.getTag() !== "optbreak"))
      return v(e) || Bt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: YT }),
  scanPieces: (e) => ve(e) ? { value: e.getFirstChild() ?? void 0 } : rn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, QT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => ve(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => It,
  scanPieces: () => rn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, ZT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => It,
  scanPieces: () => rn,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ms = [
  zT,
  KT,
  Kd("va"),
  Kd("vp"),
  jT,
  Bd("ca"),
  Bd("cp"),
  JT,
  XT,
  QT,
  ZT
], eC = new Map(Ms.map((e) => [e.kind, e]));
function Xn(e) {
  const t = eC.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Qn(e) {
  for (const t of Ms) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function kg(e) {
  return Qn(e) !== void 0;
}
const Oo = "unmatched", xg = 2;
function ms(e) {
  return `\\${e}`;
}
class nn extends et {
  __marker;
  constructor(t = "", r) {
    super(ms(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new nn(r, n);
  }
  static importDOM() {
    return {
      [Oo]: (t) => rC(t) ? {
        conversion: tC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return iu().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? ms(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ms(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(vd), r.title = jd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = jd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Oo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(vd), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: xg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Tg(e) {
  return e.getTextContent() === ms(e.getMarker());
}
function jd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function tC(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: iu(t) };
}
function iu(e) {
  return rt(new nn(e));
}
function rC(e) {
  return e?.tagName.toLowerCase() === Oo;
}
function sn(e) {
  return e instanceof nn;
}
const Cg = "table", Lc = "immutable-table", Sg = 1, nC = ["type", "marker", "content"];
class ci extends xr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Lc;
  }
  static clone(t) {
    return new ci(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return iC().updateFromJSON(t);
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
      type: Lc,
      ...t !== void 0 && { unknownAttributes: t },
      version: Sg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function iC(e) {
  return rt(new ci(e));
}
function _g(e) {
  return e instanceof ci;
}
function sC(e) {
  return e?.type === Lc;
}
const vg = "table:row", Vd = "immutable-table-row", Mg = 1, Dc = "tr", oC = ["type", "marker", "content"];
class Ji extends xr {
  __marker;
  __unknownAttributes;
  constructor(t = Dc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Vd;
  }
  static clone(t) {
    return new Ji(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return aC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Dc).setUnknownAttributes(t.unknownAttributes);
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
      type: Vd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Mg
    };
  }
}
function aC(e, t) {
  return rt(new Ji(e, t));
}
const Eg = "table:cell", Wd = "immutable-table-cell", Ag = 1, Uc = "tc1", cC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function lC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Yi extends xr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Uc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Wd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Yi(r, n, i, s, o);
  }
  static importJSON(t) {
    return uC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Uc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = lC(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Wd,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Ag
    };
  }
}
function uC(e, t, r, n) {
  return rt(new Yi(e, t, r, n));
}
function Js(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function ar(e, t) {
  const r = Js(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Es(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function dC(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function fC(e) {
  return Es(e) ? void 0 : { closed: "false" };
}
function pC(e, t, r, n) {
  const i = t.getMarker(), s = eu(t), o = dC(t);
  if (n) {
    e.append(xt(i, "opening", s));
    const [a] = r;
    Gi(a) && !a.getTextContent().startsWith(D) && a.setTextContent(D + a.getTextContent());
  }
  e.append(...r), o && e.append(xt(i, "closing", s));
}
function Zn(e) {
  return qe(e, F) ?? void 0;
}
function hC(e) {
  let t = e.getParent();
  for (; F(t); )
    t = t.getParent();
  return t;
}
function Fc(e) {
  const t = Pg(e);
  return e.getChildren().every((r) => O(r) || t && le(r, pe) === "attribute" || v(r) && r.getTextContent().replaceAll(D, "") === "");
}
function Pg(e) {
  return Es(e);
}
function gC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Nr(r, aa(e.getMarker())) : "";
  n !== "" && t.insertAfter(Ne(n)), e.remove();
}
function mC(e, t) {
  if (Es(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(xt(e.getMarker(), "closing", eu(e)));
}
function yC(e, t) {
  return F(e) && !Es(e) && !Es(t);
}
function bC(e, t, r) {
  Fc(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && Gi(n) && !n.getTextContent().startsWith(D) && n.setTextContent(D + n.getTextContent()), e.append(...t);
}
function kC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Pg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = O(l) && l.getMarkerSyntax() === "closing", f = s && le(l, pe) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = yC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      bC(e, o, n);
    else {
      const l = Yr(t.getMarker(), fC(t));
      pC(l, t, o, n), e.insertAfter(l), Fc(l) ? l.remove() : c = l;
    }
  i && !a && mC(t, n), Fc(t) && gC(t, c);
}
function Di(e, t) {
  let r = e.getParent();
  for (; F(r); )
    kC(e, r, t), r = e.getParent();
}
function ga(e) {
  if (v(e) && !O(e)) {
    const t = pa(e);
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      ga(t);
      return;
    }
    e.selectEnd();
  }
}
const Oi = /* @__PURE__ */ new WeakMap();
function xC(e, t) {
  return Oi.set(e, t), () => {
    Oi.get(e) === t && Oi.delete(e);
  };
}
function Hd(e) {
  return Oi.get(e);
}
function TC(e) {
  return Oi.get(gn())?.has(e.getKey()) ?? !1;
}
function CC(e) {
  Oi.get(gn())?.add(e.getKey());
}
function SC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function zc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Gd(e) {
  return /^\s/.test(e);
}
function su(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Gd(t) || !Gd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function ma(e, t, r) {
  return r.wantsRun ? su(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : SC(t);
}
function _C(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return su(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Ng(e, t) {
  return !zc(e.scanPieces(t));
}
function Ys(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!ma(e, n, r))
    return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || wo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function vC(e, t, r, n) {
  return !r.wantsRun || zc(n) || lk(Ts) ? !1 : gn().getEditorState().read(() => {
    const i = oe(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : zc(e.scanPieces(i));
  });
}
function MC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Jd(e) {
  const t = Ne(e);
  return Rt(t, pe, "attribute"), t;
}
function EC(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Ph(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function AC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    v(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Jd(n.valueText));
    return;
  }
  const l = EC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = xt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : v(u) ? su(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Jd(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(xt(a === "selfClosing" ? "" : o(t), a));
}
function As(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (ma(e, i, n) && !TC(t)) {
    if (vC(e, t, n, i)) {
      CC(t);
      return;
    }
    if (!Ys(e, t)) {
      if (!n.wantsRun) {
        MC(i);
        return;
      }
      AC(e, t, i, n);
    }
  }
}
function PC(e, t, r) {
  As(e, t), t.isAttached() && Ys(e, t) && r.add(t.getKey());
}
function Xs(e) {
  if (!v(e))
    return !1;
  if (O(e) || Be(e) || sn(e))
    return !0;
  const t = le(e, pe);
  return t === "attribute" || t === zr;
}
function ou(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && tn(e) && F(e.getParent())) : !1;
}
function NC() {
  const e = N();
  return A(e) ? ou(e.focus.getNode(), e.focus.offset) : !1;
}
function wg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && Xs(t) ? t : void 0;
}
function wC(e) {
  const t = wg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function OC(e) {
  const t = wg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Yd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Xd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function RC(e, t) {
  let r = OC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!v(n))
      return;
    if (!Xs(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Qd(e, t) {
  const r = RC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function au(e) {
  if (e.isCollapsed()) {
    const a = wC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Yd(r), Yd(n)], s = Qd(r, "next"), o = Qd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Xd(r, i[0]), Xd(n, i[1]), !1) : !0;
}
const Ro = "verse-block", Og = 1, $C = "verse-block";
class Xi extends xr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Ro;
  }
  static clone(t) {
    return new Xi(t.__number, t.__key);
  }
  static importJSON(t) {
    return qC().updateFromJSON(t);
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
    return eg(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add($C), Zd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Zd(r, this.__number), !1;
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
      type: Ro,
      number: this.getNumber(),
      version: Og
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Zd(e, t) {
  const { start: r, end: n } = eg(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), ef(e, "data-verse-start", i ? r : NaN), ef(e, "data-verse-end", i ? n : NaN);
}
function ef(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function qC(e) {
  return rt(new Xi(e));
}
function Ps(e) {
  return e instanceof Xi;
}
function IC(e) {
  return e?.type === Ro;
}
const LC = [
  jt,
  Kr,
  Gt,
  _t,
  Me,
  Le,
  br,
  jr,
  ai,
  Zr,
  nn,
  pt,
  kn,
  ci,
  Ji,
  Yi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  en,
  {
    replace: El,
    with: () => hr(),
    withKlass: kn
  }
], $o = {
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
}, DC = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function UC(e) {
  if (!e)
    return $r;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: $r(r)?.category ?? C.Uncategorized,
      type: DC[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: $r(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function tf(e, t, r) {
  const n = {
    type: yr,
    version: mr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return la(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Rg = "v", $g = 1, FC = "verse-selected";
class Dt extends zs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Rg, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Dt(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => BC(t) ? {
        conversion: KC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return cu().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ec, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ec, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? ir(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      vo + this.getNumber() + vo
    );
    return M(zC, { nodeKey: this.getKey(), text: t });
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
      version: $g
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Qh(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function zC({ nodeKey: e, text: t }) {
  const [r] = _k(e);
  return M("span", { className: r ? FC : void 0, children: t });
}
function KC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: cu(t) };
}
function cu(e, t, r, n, i, s) {
  return rt(new Dt(e, t, r, n, i, s));
}
function BC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Rg;
}
function li(e) {
  return e instanceof Dt;
}
function jC(e) {
  return e?.type === Dt.getType();
}
function Te(e) {
  return Be(e) || li(e);
}
function qg(e) {
  return jh(e) || jC(e);
}
function VC(e) {
  return WC(e).find((t) => fe(t));
}
function WC(e) {
  return e.some(Ps) ? e.flatMap((t) => Ps(t) ? t.getChildren() : t) : e;
}
function ya(e) {
  return L(e) ? Ps(e) ? e.getChildren().flatMap(ya) : e.getChildren() : [];
}
function HC(e, t) {
  return ya(e).find((i) => Te(i) && Yl(t, i.getNumber()));
}
function GC(e, t) {
  return t === 0 ? VC(e) : e.map((r) => HC(r, t)).filter((r) => r)[0];
}
function qo(e) {
  return ya(e).find((r) => Te(r));
}
function Ig(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (Te(i))
      return i;
  }
}
function JC(e) {
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
  for (; r && !tt(r); ) {
    const n = qo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Io(e) {
  return ya(e).findLast((t) => Te(t));
}
function YC(e) {
  if (!Be(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function XC(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function QC(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return XC(t, e, r);
  if (v(e)) {
    const n = YC(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Za(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function ZC(e) {
  const t = Ic(e);
  if (!(!t || tt(t)))
    return Te(t) ? t : Io(t) ?? du(t);
}
function eS(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!A(t))
    return Za(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (QC(e, t)) {
    const i = ZC(e);
    return i ? Za(i) : { verseNum: n };
  }
  return Za(e);
}
function tS(e) {
  return oT(e) || li(e);
}
function lu(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(D) && e.setTextContent(`${t} `);
  }
}
function Lg(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Kc(e, t) {
  return e.getEditorState().read(() => !oe(t));
}
function rS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = uu(t, e);
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
      let s = rf(i);
      for (; s && !tt(s); ) {
        const o = qo(s);
        if (o) {
          n = o;
          break;
        }
        s = rf(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = qo(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && tt(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function nS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = uu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = Ig(i, r.getIndexWithinParent())), !n && i) {
      let o = nf(i);
      for (; o && !tt(o); ) {
        const a = Io(o);
        if (a) {
          n = a;
          break;
        }
        o = nf(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !tt(s); ) {
      const o = Io(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function rf(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function nf(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function uu(e, t) {
  if (L(e) && A(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && Te(n))
      return n;
    const i = Ig(e, t.anchor.offset);
    if (i)
      return i;
    const s = qo(e);
    if (s)
      return s;
  }
  return du(e);
}
function du(e) {
  if (!e || tt(e))
    return;
  if (Te(e))
    return e;
  let t = Ic(e);
  for (; t; ) {
    if (tt(t))
      return;
    if (Te(t))
      return t;
    const r = Io(t);
    if (r)
      return r;
    t = Ic(t);
  }
}
const iS = ["style"], sS = ["style", "code"], Lo = ["style", "cid"], oS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], aS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], cS = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], lS = ["style", "caller", "category", "contents"], uS = ["tag", "marker", "contents"], dS = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Ns = `
`;
function fS(e, t) {
  const r = oe(e);
  if (!Ht(r))
    return;
  const n = fu(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function fu(e, t = "delta-doc") {
  if (!e)
    return;
  const r = oa();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Ui(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Ui(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Qr(l) || Ht(l))
        return n;
      we(l) && (a = l);
    }
    if (we(l) && (i.includes(l) || i.push(l)), Dg(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += pu(l, t);
  }
  if (a)
    return n;
}
function sf(e, t, r = "delta-doc") {
  if (e.length < 2 || !gS(e[0]) || !hS(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => pS(n, r)?.getKey());
}
function pS(e, t = "delta-doc") {
  const r = oa();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Ui(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Ui(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (we(a) && (i.includes(a) || i.push(a)), Dg(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = pu(a, t);
    if (Qr(a) && l > 0 && e >= n && e < n + l || Ht(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Ui(e, t) {
  return e ? t ? !wo(t.node, e.getKey()) : !0 : !1;
}
function Qr(e) {
  return v(e) && !Ht(e);
}
function Ht(e) {
  return tt(e) || Te(e) || it(e) || B(e) || ve(e) || sn(e);
}
function fn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function hS(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && dS.includes(t);
}
function gS(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Dg(e, t) {
  return B(e) || ve(e) ? !0 : t === "apply" && L(e) && Ht(e);
}
function Ug(e) {
  const t = e.getParent();
  return Mt(e) && fe(t) && t.getFirstChild() === e;
}
function Bc(e) {
  const t = e.getParent();
  return t !== null && qe(t, je) !== null;
}
function mS(e) {
  const t = e.getParent();
  return F(t) && e.getTextContent() === or && t.getChildrenSize() === 1;
}
function yS(e) {
  const t = e.getParent();
  if (!B(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === Wt(t.getCaller());
}
function bS(e) {
  return !kg(e) && pu(e, "delta-doc") === e.getTextContentSize();
}
function pu(e, t) {
  if (Ht(e))
    return 1;
  if (v(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (Vs(e) || Ug(e) || le(e, pe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    le(e, pe) === "attribute" || Bc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Il) || mS(e) || yS(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function jc(e, t) {
  const r = { insert: e.__text }, n = le(e, bn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Fg(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function of(e) {
  const t = new ds();
  return e.isEmpty() || e.read(() => {
    const r = Ke();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Ir(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = kS();
    for (const s of i)
      t.push(s);
  }), t;
}
function ba(e, t) {
  const r = [], n = oi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...af(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...af(c, n.length, n, i, s, o, a));
  return r;
}
function kS() {
  return ba();
}
function af(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return xS(e, a, n), TS(e, a, i, s, o), CS(e, t, r, i, o, s, a), tt(e) && a.push(MS(e)), Te(e) && a.push(AS(e)), it(e) && a.push(PS(e)), sn(e) && a.push(NS(e)), _S(e, a, s), SS(e, a, s), $S(c, s), a;
}
function xS(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Ee(n) ? t.push(vS(n)) : fe(n) ? t.push(ES(n)) : Ir(n) && t.push({ insert: Ns });
  }
  we(e) && (r.includes(e) || r.push(e));
}
function TS(e, t, r, n, i) {
  if (!v(e) || Be(e) || sn(e))
    return;
  const s = e.getParent();
  if (B(s) && s.getFirstChild() === e)
    return;
  const o = Vt(e) !== void 0;
  if (O(e) && (o || Ug(e) || Bc(e) || kg(e)) || le(e, pe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (js(a))
    return;
  const c = e.getPreviousSibling();
  if (B(s) && O(c) && c === s.getFirstChild() && a === Wt(s.getCaller()))
    return;
  const l = F(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(pa(e)));
  const d = a.startsWith(Il) || le(e, pe) === "attribute" || Bc(e), u = !!l && a === or && l.getChildrenSize() === 1, f = ka(e, n), p = f ? r.filter((y) => f.children.includes(y)) : r, h = jc(e, p);
  if (h.insert = a, f) {
    if (!a || a === D || d)
      return;
    f.contentsOps?.push(h);
  } else
    u || d || t.push(h);
  const g = a !== "" && !u && !(d && l);
  if (r.length > 0 && g)
    for (const y of r)
      i.add(y);
}
function CS(e, t, r, n, i, s, o) {
  F(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Ui(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = OS(c), d = ka(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function SS(e, t, r) {
  if (!B(e))
    return;
  const n = wS(e), i = ka(e, r), s = {
    node: e,
    children: oi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function _S(e, t, r) {
  if (!ve(e))
    return;
  const n = RS(e), i = ka(e, r), s = {
    node: e,
    children: oi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function En(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function vS(e) {
  const t = { style: _s, code: e.__code };
  return En(t, e), { insert: Ns, attributes: { book: t } };
}
function MS(e) {
  const t = { style: Po, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), En(t, e), { insert: { chapter: t } };
}
function ES(e) {
  const t = { style: e.__marker };
  return En(t, e), { insert: Ns, attributes: { para: t } };
}
function AS(e) {
  const t = { style: No, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), En(t, e), { insert: { verse: t } };
}
function PS(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), En(t, e), { insert: { milestone: t } };
}
function NS(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function wS(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), En(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = le(e, bn);
  return n && (r.attributes = { segment: n }), r;
}
function OS(e) {
  const t = { insert: "" }, r = Fg([e]);
  return r && (t.attributes = { char: r }), t;
}
function RS(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), En(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function ka(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function $S(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Ui(t[r].node, e) && t.splice(r, 1);
}
function Fg(e) {
  if (e.length === 0)
    return;
  const t = e.map(qS);
  return t.length === 1 ? t[0] : t;
}
function qS(e) {
  const t = { style: e.__marker }, r = le(e, Jn);
  return r && (t.cid = r), En(t, e), t;
}
function hu(e) {
  let t = 0;
  for (const { node: r } of oa())
    if (B(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function IS(e) {
  let t = 0;
  for (const { node: r } of oa())
    if (B(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const zg = 1;
class gr extends zs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = xs, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new gr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => DS(t) ? {
        conversion: LS,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return gu().updateFromJSON(t);
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
    return r && ni(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => US(t, n), (l) => FS(t, n, s, l), () => zS(t, n), () => KS(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return M("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === xs && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === dh && i ? (
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
      version: zg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function LS(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: gu(t, r) };
}
function gu(e, t, r) {
  return rt(new gr(e, t, r));
}
function DS(e) {
  return e ? e.classList.contains(gr.getType()) : !1;
}
function Tt(e) {
  return e instanceof gr;
}
function US(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!B(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function FS(e, t, r, n) {
  e.update(() => {
    const i = oe(t);
    if (!B(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = oe(r);
    if (!Tt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function zS(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!B(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return ba(r);
  });
}
function KS(e, t) {
  return e.getEditorState().read(() => hu(t));
}
const BS = [
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
], jS = ["†"];
function xa(e) {
  if (Kg())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = cf(t), [s, o] = cf(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = lf(n, i), [s, o] = lf(s, o);
  const a = mn();
  return a.anchor = pr(n.getKey(), i, uf(n)), a.focus = pr(s.getKey(), o, uf(s)), a;
}
function mu() {
  if (Kg())
    return;
  const e = N();
  if (!e || !A(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Do(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Do(i, s);
  return { start: n, end: o };
}
function cf(e) {
  if (ek(e)) {
    const t = Bp(e.jsonPath);
    let r = Ke();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = Hi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : xT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, TT(r, e.offset)] : [void 0, void 0];
  }
  if (tk(e) || rk(e)) {
    const t = is(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (nk(e)) {
    const t = is(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (ik(e)) {
    const t = is(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ec(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && v(n) ? [n, 0] : [void 0, void 0];
  }
  if (sk(e)) {
    const t = is(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ec(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && v(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (ok(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = is(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ec(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && v(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${ak(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function lf(e, t) {
  if (!Cr(e))
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
function uf(e) {
  return L(e) ? "element" : "text";
}
function ec(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Cr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function is(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Bp(r);
  let i = Ke();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = Hi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Do(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = VS(e), i = n ? wn(qn(n)) : wn(qn(e));
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
  if (Pe(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (v(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Do(n, s);
    }
    const i = ua(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Do(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (Cr(r)) {
      const i = r.getTextContent().endsWith("*"), s = wn(qn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = rg(e, t);
    return n.type === "text" ? {
      jsonPath: wn([...qn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: wn(qn(e)),
      offset: n.index
    };
  }
  if (v(e)) {
    const r = kT(e, t);
    if (r)
      return {
        jsonPath: wn([
          ...qn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: wn(qn(e)), offset: t };
}
function VS(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = WS(e);
  return r && !we(r) && !v(r) && !Pe(r) ? r : t;
}
function WS(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Ws(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function qn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = ua(r);
    if (!n)
      break;
    const i = bT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Kg() {
  for (let e = Ke().getFirstChild(); e; e = e.getNextSibling())
    if (Ps(e))
      return !0;
  return !1;
}
function HS(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Bg(e, t, r, n, i, s, o) {
  if (!Le.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? xa(r) : N();
  if (!A(a))
    return;
  const c = YS(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? HS(e, s), d = jg(e, l, c, i, s, void 0, void 0);
  return JS(d, a, i), d;
}
function yu(e) {
  return e !== "expanded";
}
function GS(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!v(r) || !F(r.getParent()))
    return;
  if (O(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return O(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function JS(e, t, r) {
  const n = yu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || lT(t), au(t);
  const i = GS(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(F)?.selectEnd();
}
function Ci(e, t, r) {
  const n = Yr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(xt(e)) : r?.markerMode === "visible" && n.append(Jr("marker", Ve(e)));
  const s = t === "" ? or : i ? D + t : t;
  return n.append(Ne(s)), n;
}
function YS(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Ci("fr", f, n)), !e.isCollapsed()) {
        const p = ff(e);
        p.length > 0 && o.push(Ci("fq", p, n));
      }
      o.push(Ci("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Ci("xo", f, n)), !e.isCollapsed()) {
        const p = ff(e);
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
function jg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : yu(n?.noteMode), l = Fl(e, t, c);
  s && Rt(l, bn, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = xt(e), d && u.setMode("token"), a || (f = xt(e, "closing"))) : n?.markerMode === "visible" && (u = Jr("marker", Ve(e) + " "), a || (f = Jr("marker", ct(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    p = Ne(Wt(l.__caller)), d && p.setMode("token"), l.append(p, ...r);
  else {
    const h = () => Hs(), g = r.flatMap(i_(h));
    if (t === "")
      l.append(...g);
    else {
      const y = Gl(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = gu(l.__caller, y, k), l.append(p, h(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Ar(e) {
  if (typeof e == "string") {
    const t = oe(e);
    return B(t) ? t : void 0;
  }
  return IS(e);
}
function Vc(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (li(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else {
    const n = e.getChildren(), i = n.slice().reverse().find(F);
    if (i)
      XS(i);
    else {
      const s = bu(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function bu(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return O(r) && r.getMarkerSyntax() === "closing" || Cr(r) && r.getTextContent() === ct(e.getMarker()) ? t : -1;
}
function XS(e) {
  const t = bu(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  v(r) && !Ws(r) ? r.selectEnd() : e.select(t, t);
}
function Vg(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (v(r) && !Xs(r)) {
    r.select(0, 0);
    return;
  }
  const n = e.getParent();
  if (!n)
    return;
  const i = e.getIndexWithinParent() + 1;
  n.canBeEmpty() ? n.select(i, i) : ku(n, i, { announce: !t });
}
function ku(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!B(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = mn();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Or(i), r && gn().dispatchCommand(Kt, void 0);
}
function df(e, t, r) {
  const n = Xr(e), i = QS(e, n);
  if (r && Hg(i, t, r, Wg(e, n)))
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
function QS(e, t) {
  const r = [];
  for (const { node: n } of oi(e))
    !v(n) || qe(n, je) || (xu(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: pa(n) }) : ZS(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function ZS(e, t) {
  return sn(e) ? !0 : O(e) && !t.is(e.getParent());
}
function Wg(e, t) {
  return (r) => {
    let n = r;
    for (; !n.getPreviousSibling(); ) {
      const o = n.getParent();
      if (!o || o.is(e))
        return;
      n = o;
    }
    const i = n.getPreviousSibling(), s = L(i) ? i.getLastDescendant() : i;
    if (v(s) && (t?.is(s) || xu(s, t)))
      return s;
  };
}
function Hg(e, t, r, n) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === r.index)
      return e_(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function e_(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function t_(e, t, r) {
  const { opener: n, value: i, closer: s } = Zl(e);
  if (!i)
    return !1;
  const o = r_(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = Xr(e);
    if (Hg(c, t, r, Wg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function r_(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function xu(e, t) {
  return !v(e) || Ws(e) || Xs(e) ? !1 : !t || !e.is(t);
}
function n_(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(F))
    return;
  const t = Xr(e);
  for (const { node: n } of oi(e))
    if (xu(n, t))
      return;
  const r = bu(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function i_(e) {
  return (t) => Bt(t) ? [t] : [t, e()];
}
function s_(e) {
  const t = e.getParent();
  return t !== null && qe(t, B) !== null;
}
function ff(e) {
  if (!A(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Al(e);
  let a = "";
  for (const c of t)
    if (!(B(c) || Tt(c) || s_(c)) && !O(c) && !sn(c) && le(c, pe) !== "attribute") {
      if (Te(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (v(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const Tu = [
  gr,
  Dt,
  ...LC
], o_ = [
  Xi,
  ...Tu
], a_ = Mn((e, t) => {
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
function c_() {
  const [e, t] = ke(void 0), [r, n] = ke(), i = ee(null), s = Ce((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = $k(l, c, () => {
      qk(l, c, {
        placement: "bottom-start",
        middleware: [Ik(), Lk()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = Ce(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return W(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function l_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = c_();
  return W(() => {
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
const u_ = Gb(a_);
function Gg({ isOpen: e = !1, children: t }) {
  const r = ee(null), { coords: n, placement: i } = l_({ isOpen: e, floatingBoxRef: r }), s = Ze(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Un(
    M(u_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Jg = zp(void 0);
function Cu() {
  const e = Kp(Jg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function d_(e, t) {
  const [r, n] = ke(0), [i, s] = ke(-1), o = Ze(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = Ce(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = Ce(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = Ce(() => {
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
function f_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = d_(t, r);
  return M(Jg.Provider, { value: i, children: M("div", { ...n, children: e }) });
}
const Yg = Mn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Cu(), d = Ce((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = Ce((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return M("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function p_({ children: e, autoIndex: t = !0, ...r }) {
  const n = ee(null), { state: { activeIndex: i, menuItems: s } } = Cu(), o = Ze(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ze(() => {
    const c = o(s);
    return t ? Jb.map(c, (l, d) => Yb(l) && l.type === Yg && l.props.index === void 0 ? Xb(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return W(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), M("div", { ref: n, role: "menu", ...r, children: a });
}
const h_ = (e, t, r) => ko(e, r).toLowerCase().includes(t.toLowerCase()), pf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", ko = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function g_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? pf(r[0]) : "") : (d = n || (r.length > 0 ? pf(r[0]) : ""), u = (h, g) => h_(h, g, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return u(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const y = (T) => (p.has(T) || p.set(T, ko(T, f).toLowerCase()), p.get(T) ?? ""), k = a ? ko(h, f) : y(h), b = a ? ko(g, f) : y(g);
    for (const T of c)
      switch (T) {
        case "exact":
          if (k === l && b !== l)
            return -1;
          if (b === l && k !== l)
            return 1;
          break;
        case "startsWith":
          if (k.startsWith(l) && !b.startsWith(l))
            return -1;
          if (b.startsWith(l) && !k.startsWith(l))
            return 1;
          break;
        case "contains": {
          const E = k.indexOf(l), S = b.indexOf(l);
          if (E !== -1 && S === -1)
            return -1;
          if (S !== -1 && E === -1)
            return 1;
          if (E !== -1 && S !== -1)
            return E - S;
          break;
        }
      }
    return k.localeCompare(b);
  });
}
const tc = {
  Root: f_,
  Options: p_,
  Option: Yg
};
function m_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ze(() => g_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function y_() {
  const { moveUp: e, moveDown: t, select: r } = Cu();
  return Ze(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const b_ = () => {
  const e = y_(), [t] = de();
  W(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(Tr, r, Re);
  }, [t, e]);
};
function k_() {
  return b_(), null;
}
const x_ = ["Shift", "Control", "Alt", "Meta"];
function Xg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = de(), d = s !== void 0, [u, f] = ke(""), p = d ? s ?? "" : u, h = m_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return W(() => {
    a?.(p, h);
  }, [a, p, h]), W(() => l.registerCommand(Tr, (y) => {
    if (d || c?.includes(y.key) || x_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const b = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((T) => T.slice(0, -1));
      }
    }[y.key];
    return b ? (y.stopPropagation(), y.preventDefault(), b(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((T) => T + y.key), !0) : !1;
  }, Re), [l, d, p, o, n, c]), $e(tc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => g(y), children: [!d && M("input", { value: p, type: "text", disabled: !0 }), M(k_, {}), M(tc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((b, T) => $e(tc.Option, { index: T, children: [M("span", { className: "label", children: b.label ?? b.name }), M("span", { className: "description", children: b.description })] }, b.name)) })] });
}
function T_({ trigger: e, items: t }) {
  const [r] = de(), [n, i] = ke(!1), s = Ce((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return W(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), W(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = N();
      if (A(l))
        return l;
    });
    a.read(() => {
      const l = N();
      !A(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && M(Gg, { isOpen: n, children: ({ placement: o }) => M(Xg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function C_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Ze(() => {
    if (!t || !e)
      return;
    const i = $r(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = $r(o), { action: c } = r(o, a);
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
function ys(e, t) {
  return `${e}:${t}`;
}
function S_(e, t) {
  W(() => {
    if (!e.hasNodes([dt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ie(nh(e, dt, (n) => Ss(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], h = a[l]?.[u], g = c[l]?.[u];
          i.addID(l, u, f, p, h, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(dt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = oe(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Pe(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!dt.isReservedType(c))
              for (const d of l) {
                let u = t.get(ys(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(ys(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(ys(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const __ = Mn(function({ logger: t }, r) {
  const [n] = de(), i = Ze(() => /* @__PURE__ */ new Map(), []);
  S_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(ys(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = oe(d);
        Pe(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && Ao(u));
      }
  };
  return ra(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (dt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = xa(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Mh(p, a, c, l, d, u, f);
      }, { tag: Ac });
    },
    removeAnnotation(o, a) {
      if (dt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(ys(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ac });
    }
  })), null;
}), v_ = [];
function M_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = v_, onChange: n }) {
  const [i] = de();
  return Fs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(Pl) && !d.has(ph) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = E_(i, s);
        u.length !== 0 && n(o, i, d, u, l);
      });
  }, [i, e, t, r, n]), null;
}
function E_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new ds();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = oe(i), o = s !== null && Vt(s) !== void 0;
    if (t.size === 1 && v(s) && !o && bS(s)) {
      const a = fu(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = oe(i);
          return new ds([v(u) ? jc(u) : { insert: "" }]);
        }), l = new ds([jc(s)]), d = new ds(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = of(r), c = of(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const Su = "formatted", Qg = "unformatted", Zg = "paragraph-structure", _u = "standard", em = "block-verse", A_ = {
  [Su]: "Formatted",
  [Qg]: "Unformatted",
  [Zg]: "Paragraph Structure",
  [_u]: "Standard",
  [em]: "Block Verse"
};
function ui(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let vu, Mu;
function P_(e) {
  const t = Eu(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  vu = e, Mu = t;
}
P_(Su);
const Nw = () => vu, Ta = () => Mu;
function Eu(e) {
  let t;
  switch (e ?? vu) {
    case Su:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Qg:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Zg:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case _u:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case em:
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
function ww(e) {
  if (!e)
    return;
  const t = hf(e);
  return Object.keys(A_).find((r) => Qt(hf(Eu(r)), t));
}
const N_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function hf(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...N_, ...t };
}
function Qs(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function w_(e) {
  if (e)
    return ws(e) ? Dt : e.markerMode === "editable" ? _t : Dt;
}
function ws(e) {
  return e?.verseLayout === "block";
}
function O_(e) {
  const t = [], r = e ?? Mu;
  return r && (t.push(`${Xk}${r.markerMode}`), r.hasSpacing && t.push(Jk), r.isFormattedFont && t.push(Yk)), t;
}
function R_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += $_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), I_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += L_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), U_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function $_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), q_(t, e.retain, e.attributes, r, n)), e.retain);
}
function q_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ke();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Qr(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, h = Math.min(s, p);
        if (h > 0) {
          let g = d;
          const y = f > 0, k = h < u - f;
          if (y && k) {
            const [, b] = d.splitText(f);
            [g] = b.splitText(h);
          } else y ? [, g] = d.splitText(f) : k && ([g] = d.splitText(h));
          if (xn(r)) {
            const b = g.getParent();
            if (F(b)) {
              const T = r.char;
              let E;
              Array.isArray(T) ? a >= 0 && a <= T.length - 1 && (E = T[a]) : a === 0 && (E = T);
              const S = E ? Yn(E, b) : !1;
              if (S && Array.isArray(T) && T.length > 1) {
                const w = Ne("");
                g.replace(w);
                const R = typeof r.segment == "string" ? r.segment : void 0, K = Qi(T.slice(1), n, g, R);
                let z = w;
                for (const ae of K)
                  z.insertAfter(ae), z = ae;
                w.remove(), Zt(r, g);
              } else if (S)
                Zt(r, g);
              else {
                g.remove();
                const w = gf(g, r, n, i);
                if (w && w.length > 0) {
                  let R = b;
                  for (const K of w)
                    R.insertAfter(K), R = K;
                }
              }
            } else {
              const T = Ne("");
              g.replace(T);
              const E = gf(g, r, n, i);
              if (E && E.length > 0) {
                let S = T;
                for (const w of E)
                  S.insertAfter(w), S = w;
                T.remove();
              } else
                T.replace(g);
            }
          } else
            Zt(r, g);
          s -= h;
        }
      }
      o += u;
    } else if (Ht(d))
      e <= o && o < e + t && s > 0 && (mf(d, r), s -= 1), o += 1;
    else if (F(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (xn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Wc(d, p.style), typeof p.cid == "string" && Rt(d, Jn, () => p.cid);
            const h = Ye(p, Lo);
            h && Object.keys(h).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...h
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || G_(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && Mc(d), !0;
        }
      }
      u && Mc(d), a -= 1;
    } else if (we(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Ir(d))
          mf(d, r);
        else if (Au(r)) {
          const p = nm(r.para, n);
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
function gf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Qi(t.char, r, e, i), o = s.find(F);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Zt(t, e);
    return;
  }
  const a = {};
  am.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Zt(t, e), s;
}
function tm(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(Ve(t))) : Bt(r) && r.getTextType() === "marker" && r.setTextContent(Ve(t) + D);
}
function Wc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = F(e.getParent()), i = e.getFirstChild();
  Bt(i) && i.getTextType() === "marker" && i.getTextContent() === Ve(r, n) && i.setTextContent(Ve(t, n));
  const s = e.getLastChild();
  Bt(s) && s.getTextType() === "marker" && s.getTextContent() === ct(r, n) && s.setTextContent(ct(t, n));
}
function mf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && F(e) && xn(t)) {
      const i = Hc(n);
      if (Wc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Rt(e, Jn, () => o);
      }
      const s = Ye(i, Lo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (tt(e) || Te(e) || it(e) || B(e) || ve(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Ee(e) || fe(e) || F(e)) && (r === "style" && fe(e) ? tm(e, n) : r === "style" && F(e) ? Wc(e, n) : r === "code" && Ee(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Rt(e, bn, () => n));
  }
}
function I_(e, t, r) {
  if (t <= 0)
    return;
  const n = Ke();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Qr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Ht(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (we(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && we(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(hr(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && ft(p)) {
            let h = i + 1;
            const g = p.getChildren();
            for (const k of g) {
              if (s <= 0)
                break;
              const b = i;
              if (i = h, o(k)) {
                i = b;
                break;
              }
              Qr(k) ? h += k.getTextContentSize() : Ht(k) && (h += 1), i = b;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(hr(), !0);
        } else fe(a) ? a.replace(hr(), !0) : a.remove();
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
function L_(e, t, r, n, i) {
  if (t === Ns)
    return yf(e, r, n, i);
  if (t.endsWith(Ns) && !Au(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (xn(r))
        throw new Error("Text + LF should not have char attributes");
      o += Uo(e, s, r, i);
    }
    return o += yf(e + o, r, n, i), o;
  } else return xn(r) ? D_(e, t, r, n, i) : Uo(e, t, r, i);
}
function D_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Ne(t === "" ? or : t);
  Zt(r, s);
  let o;
  {
    let y = function(k) {
      if (Qr(k)) {
        const b = k.getTextContentSize();
        if (e >= g && e < g + b) {
          const T = k.getParent();
          return F(T) && (o = T), !0;
        }
        g += b;
      } else if (Ht(k))
        g += 1;
      else if (F(k)) {
        const b = k.getChildren();
        for (const T of b)
          if (y(T))
            return !0;
      } else if (L(k)) {
        const b = k.getChildren();
        for (const T of b)
          if (y(T))
            return !0;
        we(k) && (g += 1);
      }
      return !1;
    };
    const h = Ke();
    let g = 0;
    y(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Yn(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Yn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Qi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(F);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Uo(e, t, void 0, i);
  const f = {};
  for (const [h, g] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof g == "string" && (f[h] = g);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const h of d)
    if (!rm(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Uo(e, t, void 0, i));
}
function Uo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ke();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Qr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = Ne(t);
        if (Zt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          F(f) && !xn(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Ht(c))
      s += 1;
    else if (F(c)) {
      if (!o && e === s) {
        const u = Ne(t);
        Zt(r, u);
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
        const u = Ne(t);
        return Zt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (we(c)) {
      if (!o && e === s) {
        const u = Ne(t);
        Zt(r, u);
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
        const u = Ne(t);
        return Zt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = Ne(t);
    Zt(r, c);
    const l = hr().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function rm(e, t, r) {
  const n = Ke();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(hr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (ft(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(hr().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Qr(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (Ht(l))
        i += 1;
      else if (F(l)) {
        if (o(l))
          return !0;
      } else if (we(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (Ir(d) && we(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(hr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      ft(a) ? Ir(a) && fe(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ft(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (F(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ft(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function U_(e, t, r, n, i) {
  let s;
  return fn("chapter", t) ? s = z_(t.insert.chapter, r) : fn("verse", t) ? s = K_(t.insert.verse, r) : fn("ms", t) ? s = B_(t.insert.ms) : fn("note", t) ? s = im(t, r, n) : fn("unknown", t) ? s = sm(t, r, n, i) : fn("unmatched", t) && (s = V_(t.insert.unmatched, r)), s ? rm(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function yf(e, t, r, n) {
  let i;
  Au(t) ? i = nm(t.para, r) : H_(t) && (i = F_(t.book)), i ??= hr();
  const s = i, o = fe(s), a = Ir(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Qr(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (fe(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? u.splitText(h) : [void 0];
          let y, k = g?.getPreviousSibling();
          for (; k; ) {
            const b = k;
            k = k.getPreviousSibling(), y ? y.insertBefore(b) : s.append(b), y = b;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Ht(u))
      c += 1;
    else if (we(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Ir(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (fe(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && fe(u) && s)
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
  return d(Ke()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function F_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== _s || !r || !jt.isValidBookCode(r))
    return;
  const n = Ye(e, sS);
  return wh(r, n);
}
function nm(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ye(e, iS), i = qi(r, n);
  if (!ui(t))
    return i;
  if (t.markerMode === "editable")
    i.append(xt(r), Hs());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ve(r) + D;
    i.append(t.hasGutterParaMarkers ? _x(s) : Jr("marker", s));
  }
  return i;
}
function z_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ye(e, oS);
  let a;
  if (t.markerMode === "editable")
    a = Rh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Vl(r, c, n, i, s, o);
  }
  return a;
}
function K_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ye(e, aS);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = ir(r, n);
    c = Bh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = cu(n, l, i, s, o, a);
  }
  return c;
}
function B_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ye(e, cS);
  return mh(t, r, n, s, i);
}
function im(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = Ye(n.note, lS), l = typeof c?.closed == "string" ? c.closed : void 0, d = e.attributes?.segment;
  let u;
  d && typeof d == "string" && (u = d);
  const f = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (xn(h.attributes)) {
        const g = Qi(h.attributes.char, t, Ne(h.insert), void 0, om(h.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...g);
      } else
        f.push(Ne(h.insert));
  return jg(i, s, f, t, r, u, l).setCategory(o).setUnknownAttributes(c);
}
function sm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ye(i, uS), l = Bl(s, o, c), d = a?.ops ?? [];
  d.length > 0 && j_(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && Rt(l, bn, () => u), l;
}
function j_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (xn(s.attributes)) {
        const o = Ne(s.insert), a = Qi(s.attributes.char, t, o, void 0, om(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Ne(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (fn("unknown", s)) {
        const o = sm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (fn("note", s)) {
        const o = im(s, t, r);
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
  const n = iu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function om(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Hc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Qi(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(or);
  const a = () => {
    o && v(r) && r.getTextContent() !== or && r.setTextContent(D + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Hc), l = c[0], d = i?.[i.length - 1];
    if (F(d) && Yn(l, d)) {
      if (c.length > 1) {
        const f = Qi(c.slice(1), t, r, void 0, void 0, !0, o);
        rc(d, f);
      } else
        r && rc(d, [r]);
      return [];
    }
    a();
    const u = c.reduceRight((f, p, h) => {
      const g = Yr(p.style, Ye(p, Lo));
      return typeof p.cid == "string" && Rt(g, Jn, () => p.cid), n && h === c.length - 1 && Rt(g, bn, () => n), f && (F(f) && (ic(f.getMarker(), f, t, !0), nc(f, f, t, !0)), g.append(f)), g;
    }, r);
    return ic(l.style, u, t, s), nc(u, u, t, s), [u];
  } else {
    const c = Hc(e), l = i?.[i.length - 1];
    if (F(l) && Yn(c, l))
      return r && rc(l, [r]), [];
    a();
    const d = Yr(c.style, Ye(c, Lo));
    return typeof c.cid == "string" && Rt(d, Jn, () => c.cid), n && Rt(d, bn, () => n), r && d.append(r), ic(c.style, d, t, s), nc(d, d, t, s), [d];
  }
}
function rc(e, t) {
  const r = e.getLastChild();
  O(r) && r.getMarkerSyntax() === "closing" || Bt(r) && r.getTextType() === "marker" && r.getTextContent() === ct(e.getMarker(), F(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function nc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && W_(e.getMarker(), t, r, !1, n);
}
function ic(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = xt(e, "opening", n) : r?.markerMode === "visible" && (i = Jr("marker", Ve(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function W_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = xt("", "selfClosing") : s = xt(e, "closing", i) : r?.markerMode === "visible" && (s = Jr("marker", n ? ct("") : ct(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function H_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Au(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function xn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function G_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Zt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Rt(t, bn, () => n);
        continue;
      }
      if (J_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const am = [
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
  return am.includes(e);
}
function Fi(e) {
  return Bt(e) && Ee(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function cm(e) {
  const t = Js(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function Pu(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(wl(r) && t.offset === 0 || Ee(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Fi);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Ee(s))
    return !1;
  const o = cm(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function xo(e) {
  const t = N();
  if (!A(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : v(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? Hh(t) : Hl(t);
    return Fi(n);
  }
  return Pu(t) && t.isCollapsed();
}
function Y_(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed())
    return !1;
  const r = qe(t.anchor.getNode(), Ee);
  if (!r || !Fi(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return xo(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Fi)) {
    const n = cm(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function po() {
  const e = N();
  return A(e) && Pu(e), !1;
}
function X_() {
  const e = N();
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !Ee(r) || !Fi(r.getFirstChild()) ? !1 : (ar(r, 1), !0);
}
function Q_(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => Cr(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function Z_() {
  const [e] = de();
  return W(() => e.registerCommand(sa, (t) => (ev(t), !1), Bn), [e]), W(() => Ie(
    e.registerCommand(Pr, xo, Re),
    e.registerCommand($i, xo, Re),
    e.registerCommand(jn, xo, Re),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(jn, Y_, Rr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(Vn, po, he),
    e.registerCommand(zt, po, he),
    e.registerCommand(sr, po, he),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Nl, po, he)
  ), [e]), W(() => Ie(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(Kt, () => (X_(), !1), Re),
    e.registerNodeTransform(jt, Q_)
  ), [e]), null;
}
function ev(e) {
  if (tv(e.target))
    return;
  const t = N();
  A(t) && rv(t);
}
function di(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Mt(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === D && (r++, t = t.getNextSibling());
    else if (Te(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (ar(e, r), !0);
}
function tv(e) {
  if (!Vp(e))
    return !1;
  const t = Wi(e);
  if (!vx(t))
    return !1;
  const r = t.getParent();
  return r ? ft(r) ? di(r) : (ar(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function rv(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = oe(t.key);
  if (!we(r))
    return !1;
  const n = r.getFirstChild();
  return !Cr(n) && !li(n) ? !1 : di(r);
}
function nv() {
  const [e] = de();
  return W(() => {
    const t = (r) => r instanceof KeyboardEvent && !lm(r) || !Zs() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ie(
      e.registerCommand(Tr, t, Re),
      e.registerCommand(Vn, t, Re),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(zt, t, he),
      e.registerCommand(sr, t, he),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Ol, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Wi(r.target);
        return !n || !Tn(n) ? !1 : (r.preventDefault(), !0);
      }, Re),
      e.registerCommand(Pr, t, Re),
      e.registerCommand($i, t, Re),
      e.registerCommand(jn, t, Re)
    );
  }, [e]), null;
}
function lm(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Tn(e) {
  return qe(e, Nu) ?? void 0;
}
function Nu(e) {
  return ve(e) || _g(e);
}
function Zs() {
  const e = N();
  return A(e) ? Tn(e.anchor.getNode()) !== void 0 || Tn(e.focus.getNode()) !== void 0 : !1;
}
function iv(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function sv(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), iv(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function ov(e, t, r, n) {
  if (!xv(t) || sv(e, r))
    return !1;
  const i = r === "up" ? nS(t) : rS(t);
  return i && n.preventDefault(), i;
}
function av({ viewOptions: e }) {
  const [t] = de();
  return cv(t, e), null;
}
function cv(e, t) {
  W(() => {
    if (!e.hasNodes([Kr, Dt, Le]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!A(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = bf(o), u = gv(i, kf(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return ov(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = bf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return kf(a, n.key) ? l = !c && Cf(i, "next") || !c && uv(i) || bv(i) || !c && s && Tf(i, "next") : lv(a, n.key) && (l = !c && Cf(i, "previous") || !c && dv(i) || kv(i, t) || !c && s && Tf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Tr, r, Re);
  }, [e, t]);
}
function bf(e) {
  return e.dir || "ltr";
}
function kf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function lv(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Gc(e) {
  if (!F(e) || e.getMarker() !== "fp")
    return;
  const t = Vt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function uv(e) {
  const t = Gc(Hl(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (ar(t, 0), !0);
}
function dv(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Gc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : xf(n);
  }
  if (t.offset === 0) {
    const n = Gc(r);
    return n ? xf(n) : !1;
  }
  return !1;
}
function xf(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (v(t))
    return t.select(), !0;
  if (L(t)) {
    const i = t.getLastDescendant();
    return v(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Fo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function fv(e) {
  if (Fo)
    for (const { segment: r } of Fo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function pv(e) {
  if (Fo) {
    let n = 0;
    for (const { index: i } of Fo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function um(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function dm(e) {
  return !!e && O(e) && Tn(e) !== void 0;
}
function zi(e) {
  return v(e) && !e.isToken() && !dm(e) && e.getTextContentSize() > 0;
}
function fm(e) {
  return ii(e) ? !0 : B(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || dm(e)) && e.getTextContentSize() > 0 : si(e) ? !it(e) : !1;
}
function Ki(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Ca(e, t, r) {
  for (let n = e; n; ) {
    if (fm(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Ki(n, t, r);
      continue;
    }
    if (zi(n))
      return n;
    n = Ki(n, t, r);
  }
}
function wu(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Ki(e, n, i) : r === "text" && fm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Ki(e, n, i);
}
function sc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = wu(e.node, e.offset, e.kind, "previous", t), n = Ca(r, "previous", t);
  if (!n)
    return e;
  if (zi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function hv(e, t) {
  const r = e.getNode(), n = um(r);
  if (!n)
    return;
  if (e.type === "text" && zi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return sc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = wu(r, e.offset, e.type, t, n), s = Ca(i, t, n);
  if (!s)
    return;
  if (zi(s)) {
    const c = s.getTextContent(), l = t === "next" ? fv(c) : pv(c);
    return sc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return sc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function pm(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = hv(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && L(i.node) ? ku(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Tf(e, t) {
  return pm(e, t, "collapse");
}
function gv(e, t) {
  return pm(e, t, "extend");
}
function mv(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && zi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = wu(n, e.offset, e.type, t, r);
  return Ca(i, t, r) === void 0;
}
function yv(e, t) {
  const r = Ke();
  for (let n = e; n; ) {
    const i = Ki(n, t, r), s = i && Ca(i, t, r);
    if (!s)
      return;
    if (n = Tn(s), !n)
      return s;
  }
}
function Cf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Tn(n))
    return !1;
  const i = um(n);
  if (!i || !mv(r, t, i))
    return !1;
  const s = Ki(i, t, Ke()), o = s && Tn(s);
  if (!o)
    return !1;
  const a = yv(o, t);
  if (!a)
    return !0;
  if (zi(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Sf(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  ku(t, r);
}
function bv(e) {
  const t = e.anchor.getNode(), r = Hl(e);
  if (B(r) && !O(r.getFirstChild())) {
    if (we(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(ft(i) && di(i)) && i.selectStart(), !0;
      }
    } else return Bt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (we(t) && B(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Sf(r), !0;
  }
  const n = r?.getParent();
  if (Bt(r) && B(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Sf(n) : n.selectEnd(), !0;
  }
  return !1;
}
function kv(e, t) {
  const r = Hh(e);
  if (Bs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && Fi(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Ee(o) && !r)
    return !0;
  if (B(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!li(c) && !Ee(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const d = r.getIndexWithinParent();
    return l.select(d, d), !0;
  }
  if (we(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = qe(c, (d) => B(d));
    if (B(l) && l.getIsCollapsed()) {
      const d = l.getParent();
      if (!d)
        return !1;
      const u = l.getIndexWithinParent();
      return d.select(u, u), !0;
    }
  }
  const a = Vt(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (Tt(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function xv(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Te(t) && si(t);
}
function Tv() {
  const [e] = de();
  return Cv(e), null;
}
function Cv(e) {
  W(() => {
    if (!e.hasNodes([Me]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ie(
      e.registerNodeTransform(Me, vv),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(Me, AT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(Me, pg),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(Me, (t) => As(Xn("char"), t)),
      e.registerNodeTransform(et, Mv)
    );
  }, [e]);
}
function oc(e) {
  return e.getChildren().some(O);
}
function Sv(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Gi(n)) {
    const i = n.getTextContent();
    i.startsWith(D) && (i === D ? n.remove() : n.setTextContent(i.slice(D.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function _v(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function vv(e) {
  if (!F(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (oc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = le(e, Jn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (F(i) && Yn({ style: t, cid: r }, i) && Qt(n, i.getUnknownAttributes()))
    if (oc(i)) {
      if (Sv(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  F(s) && Yn({ style: t, cid: r }, s) && Qt(n, s.getUnknownAttributes()) && (oc(s) ? _v(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function Mv(e) {
  const t = e.getParent();
  if (!F(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(or)) {
    const n = N();
    if (A(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function hm(e) {
  return e.replaceAll("	", " ");
}
function gm() {
  const e = N();
  return !!e && !e.isCollapsed();
}
function mm(e) {
  const t = () => !gm();
  return Ie(e.registerCommand(Wn, t, kt), e.registerCommand(sr, t, kt));
}
const Ou = (e) => {
  e.dispatchCommand(Wn, null);
}, Ru = (e) => {
  e.dispatchCommand(sr, null);
}, $u = (e) => {
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
      n.setData(o, hm(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(zt, s);
  });
}, qu = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", hm(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(zt, i);
  });
};
function Ev() {
  const [e] = de();
  return W(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(yn ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Ou(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Ru(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? qu(e) : $u(e)));
    };
    return Ie(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      mm(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function Av({ logger: e }) {
  const [t] = de();
  return W(() => Ie(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Tr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Rr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(zt, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Rr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Ol, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Rr)
  ), [t, e]), null;
}
const zo = "editor-context-menu";
function Jc(e) {
  return `${zo}-item-${e}`;
}
const Pv = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function Nv({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), M("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Jc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: M("span", { className: "text", children: i.title }) });
}
function wv({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return M("div", { className: "typeahead-popover", children: M("ul", { id: zo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => M(Nv, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let Ov = 0;
class ss {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${Ov++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function Rv({ options: e } = {}) {
  const [t] = de(), [r, n] = ke(() => !t.isEditable()), [i, s] = ke({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = ke(void 0), c = Ze(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new ss("Cut", {
        onSelect: () => {
          Ru(t);
        },
        isDisabled: r
      }),
      new ss("Copy", {
        onSelect: () => {
          Ou(t);
        }
      }),
      new ss("Paste", {
        onSelect: () => {
          $u(t);
        },
        isDisabled: r
      }),
      new ss("Paste as Plain Text", {
        onSelect: () => {
          qu(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((h) => new ss(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = ee(null), d = ee(null), u = Ce(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return W(() => mm(t), [t]), W(() => {
    const f = (p) => {
      const h = p.target;
      t.getRootElement() === h || Uh(h) || (p.preventDefault(), d.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, h) => {
      h?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), W(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const h = p.target;
      h instanceof Node && l.current?.contains(h) || u();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, u]), W(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      u();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, u]), W(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      if (p.isComposing || p.keyCode === 229)
        return;
      if (p.key === "Escape") {
        p.preventDefault(), u();
        return;
      }
      const h = document.activeElement;
      if (!(h && h !== document.body && h !== d.current && !t.getRootElement()?.contains(h) && !l.current?.contains(h)))
        if (p.key === "ArrowDown")
          p.preventDefault(), p.stopPropagation(), a((g) => g === void 0 ? 0 : (g + 1) % c.length);
        else if (p.key === "ArrowUp")
          p.preventDefault(), p.stopPropagation(), a((g) => g === void 0 ? c.length - 1 : (g - 1 + c.length) % c.length);
        else if (p.key === "Enter") {
          p.preventDefault(), p.stopPropagation();
          const g = o === void 0 ? void 0 : c[o];
          g && !g.isDisabled && (t.update(() => {
            g.onSelect();
          }), u());
        } else {
          if (Pv.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, u, c, o, t]), W(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", zo), () => {
        f.removeAttribute("aria-controls"), f.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), W(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (!f)
      return;
    if (o === void 0) {
      f.removeAttribute("aria-activedescendant");
      return;
    }
    f.setAttribute("aria-activedescendant", Jc(o));
    const p = document.getElementById(zo), h = document.getElementById(Jc(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), y = h.getBoundingClientRect(), k = y.top - g.top + p.scrollTop, b = y.bottom - g.top + p.scrollTop;
    k < p.scrollTop ? p.scrollTop = k : b > p.scrollTop + p.clientHeight && (p.scrollTop = b - p.clientHeight);
  }, [t, i.isOpen, o]), W(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), Fs(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: h } = f.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), y = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    f.style.left = `${g}px`, f.style.top = `${y}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Pk.createPortal(M("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: M(wv, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), u());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function $v(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function qv(e) {
  if (!dk(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function Iv(e) {
  return Tt(e);
}
function ac(e, t, r) {
  const n = Wi(t.node);
  if (!si(n) || Iv(n))
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
function Lv(e, t) {
  if (N())
    return !1;
  const r = e.getRootElement(), n = uk(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Wp(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let d, u;
  if (n.isCollapsed)
    d = ac(e, c, qv(c)), u = d;
  else {
    const y = $v(n.getRangeAt(0), c);
    d = ac(e, c, y ? "before" : "after"), u = ac(e, l, y ? "after" : "before");
  }
  if (!d && !u)
    return !1;
  const f = d ?? c, p = u ?? l, h = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = Hp(h, e);
  return g ? (Or(g), g.dirty = !t, t) : !1;
}
function Dv() {
  const [e] = de(), t = ee(!1), r = ee(!1);
  return W(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = N();
        A(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), W(() => e.registerCommand(Kt, () => (Lv(e, t.current) && (r.current = !0), !1), he), [e]), null;
}
function Uv() {
  const [e] = de();
  return W(() => e.registerCommand(Tr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(yn ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, he), [e]), null;
}
function Fv({ isEditable: e }) {
  const [t] = de();
  return Fs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Iu(e) {
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
function cc(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = N();
    if (!A(i))
      return !1;
    const s = Hp(r, e);
    return !!s && i.is(s);
  }, { editor: e }) || r.removeAllRanges();
}
function Ei(e, t) {
  let r;
  try {
    r = gn();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function _f(e) {
  return !!e && Vs(oe(e));
}
function Lu(e) {
  const [t] = de(), r = ee(void 0), n = Ce((i) => {
    const s = N(), o = A(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = _f(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = Js(d, u), p = Vs(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const h = rT();
        i.insertAfter(h), r.current = h.getKey(), l = h.getKey();
      }
      ar(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = oe(a);
      v(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return W(() => {
    const i = () => {
      const a = e(), c = N(), l = A(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (St($t), wr(t, $t), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (js(c) || !c.includes(Ii))
        return;
      const l = N(), d = A(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (nT(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(Ii).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = Ie(t.registerCommand(Kt, () => (i(), !1), Bn), t.registerCommand(Rl, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = _f(a);
      }), c && t.update(() => {
        const l = oe(a);
        v(l) && l.remove();
      }, { tag: $t }), r.current = void 0, !1;
    }, Bn), t.registerNodeTransform(et, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function zv() {
  const e = N();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = B(r) ? r : r.getParent();
  if (!B(n))
    return;
  const i = n_(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && Vs(s); )
    s = s.getPreviousSibling();
  if (!s || v(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (r.is(n))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (r.is(s))
    return v(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = r.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function Kv() {
  return Lu(zv), null;
}
function Bv() {
  const e = N();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!Te(i) || Js(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || Te(s))
    return i;
}
function jv() {
  return Lu(Bv), null;
}
function Du(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Cn(e) {
  return e ? we(e) ? e : qe(e, (r) => we(r)) ?? void 0 : void 0;
}
function ym(e) {
  if (!A(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Cn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Sa(e) {
  return A(e) && e.isCollapsed() && e.anchor.type === "element" || !A(e) && !ia(e) ? !1 : e.getNodes().some((t) => Te(t));
}
function bm(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Cn(r);
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
function km(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Cn(r);
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
function vf(e, t) {
  return !!Yc(e, t);
}
function Yc(e, t) {
  if (!A(e) || !e.isCollapsed())
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
function Ko(e, t) {
  if (!A(e))
    return !1;
  const r = Cn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Fn(e) {
  return Sa(e) || ym(e);
}
function Uu(e, t) {
  if (Sa(e) || ym(e))
    return !0;
  if (!A(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return bm(e) && Ko(e, "backward") || vf(e, "backward");
    case "deleteForward":
      return km(e) && Ko(e, "forward") || vf(e, "forward");
    case "insertText":
      return !1;
  }
}
function Vv(e, t) {
  if (!(!A(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Yc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (bm(e) && Ko(e, "backward")) {
        const n = Cn(e.anchor.getNode());
        if (ft(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Yc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (km(e) && Ko(e, "forward")) {
        const i = Cn(e.anchor.getNode())?.getNextSibling();
        if (ft(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Mf(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return ia(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!A(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!A(e) || e.isCollapsed())
    return !1;
  const r = Cn(e.anchor.getNode()), n = Cn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Fu(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function Wv(e) {
  const t = e.getPreviousSibling();
  if (!we(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = Mt(n), s = e.getChildren().filter((o) => !Br(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? Fu(r) : di(t) || t.selectStart();
}
function xm(e) {
  return Te(e) || tt(e) ? [] : ft(e) ? e.getChildren().flatMap(xm) : [e];
}
function Hv(e) {
  const t = [];
  for (const r of e) {
    const n = xm(r);
    n.length !== 0 && (ft(r) && t.length > 0 && t.push(Ne(" ")), t.push(...n));
  }
  return t;
}
function Gv(e, t) {
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (wl(n)) {
    const a = n.getChildAtIndex(t === "backward" ? r.offset - 1 : r.offset);
    return ve(a) ? Af(a, t, !0) : void 0;
  }
  const i = Tm(n);
  if (!i || r.type === "text" && !(t === "backward" ? r.offset === 0 : r.offset === n.getTextContentSize()))
    return;
  let s = Cm(e, t, i);
  const o = [];
  for (; s; ) {
    if (ve(s))
      o.push(s);
    else if (!Qv(s))
      break;
    s = Os(s, t, i);
  }
  if (o.length > 0)
    return { nodes: t === "backward" ? o.reverse() : o, placement: "inline" };
  if (t === "backward")
    for (; s && Mt(s); )
      s = Os(s, t, i);
  if (!(s || !we(i)))
    return Af(i, t, !1);
}
function To(e) {
  if (!A(e) || e.isCollapsed())
    return [];
  const t = [];
  for (const r of e.getNodes()) {
    const n = Zv(r);
    n && !t.some((i) => i.is(n)) && t.push(n);
  }
  return t;
}
function Jv(e, t) {
  if (!A(e) || !e.isCollapsed())
    return [];
  const r = Tm(e.anchor.getNode());
  if (!r)
    return [];
  const n = [];
  let i = Cm(e, t, r);
  for (; i; )
    ve(i) && n.push(i), i = Os(i, t, r);
  return t === "backward" ? n.reverse() : n;
}
function Ef(e, t) {
  const r = e.nodes[0], n = e.nodes[e.nodes.length - 1];
  if (e.placement === "inline")
    return t === "backward" ? eM(r) : tM(n), !0;
  if (t === "backward") {
    const s = r.getPreviousSibling();
    return we(s) ? (Fu(s), !0) : !1;
  }
  const i = n.getNextSibling();
  return we(i) ? (di(i) || i.selectStart(), !0) : !1;
}
function Yv(e, t) {
  if (e.placement === "inline")
    return !0;
  const r = t === "backward" ? e.nodes[0].getPreviousSibling() : e.nodes[e.nodes.length - 1].getNextSibling();
  return we(r);
}
function Xv(e) {
  return e.map((t) => {
    const r = t.getMarker();
    return r ? { tag: t.getTag(), marker: r } : { tag: t.getTag() };
  });
}
function Tm(e) {
  return we(e) || B(e) ? e : qe(e, (t) => we(t) || B(t)) ?? void 0;
}
function Cm(e, t, r) {
  const { anchor: n } = e, i = n.getNode();
  if (n.type === "text" || !L(i))
    return Os(i, t, r);
  const s = i.getChildAtIndex(t === "backward" ? n.offset - 1 : n.offset);
  return s ? _m(s, t, r) : i.is(r) ? void 0 : Os(i, t, r);
}
function Sm(e, t, r) {
  let n = e;
  for (; ; ) {
    const i = t === "backward" ? n.getPreviousSibling() : n.getNextSibling();
    if (i)
      return i;
    const s = n.getParent();
    if (!s || s.is(r))
      return;
    n = s;
  }
}
function _m(e, t, r) {
  let n = e;
  for (; n; ) {
    if (ve(n) || B(n) || !L(n))
      return n;
    n = (t === "backward" ? n.getLastChild() : n.getFirstChild()) ?? Sm(n, t, r);
  }
}
function Os(e, t, r) {
  const n = Sm(e, t, r);
  return n ? _m(n, t, r) : void 0;
}
function Af(e, t, r) {
  const n = [];
  let i = r ? e : t === "backward" ? e.getPreviousSibling() : e.getNextSibling();
  for (; ve(i); )
    n.push(i), i = t === "backward" ? i.getPreviousSibling() : i.getNextSibling();
  if (n.length !== 0)
    return { nodes: t === "backward" ? n.reverse() : n, placement: "block" };
}
function Qv(e) {
  return v(e) && e.getTextContentSize() === 0;
}
function Zv(e) {
  let t = ve(e) ? e : void 0;
  for (const r of e.getParents())
    ve(r) && (t = r);
  return t;
}
function eM(e) {
  const t = e.getPreviousSibling();
  if (v(t) && !t.isToken()) {
    const n = t.getTextContentSize();
    t.select(n, n);
    return;
  }
  const r = e.getIndexWithinParent();
  e.getParentOrThrow().select(r, r);
}
function tM(e) {
  const t = e.getNextSibling();
  if (v(t) && !t.isToken()) {
    t.select(0, 0);
    return;
  }
  const r = e.getIndexWithinParent() + 1;
  e.getParentOrThrow().select(r, r);
}
function Pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function rM(e) {
  if (Array.isArray(e)) return e;
}
function nM(e, t) {
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
function iM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sM(e, t) {
  return rM(e) || nM(e, t) || oM(e, t) || iM();
}
function oM(e, t) {
  if (e) {
    if (typeof e == "string") return Pf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Pf(e, t) : void 0;
  }
}
const vm = Object.entries, Nf = Object.setPrototypeOf, aM = Object.isFrozen, cM = Object.getPrototypeOf, lM = Object.getOwnPropertyDescriptor;
let gt = Object.freeze, yt = Object.seal, Ai = Object.create, Mm = typeof Reflect < "u" && Reflect, Xc = Mm.apply, Qc = Mm.construct;
gt || (gt = function(t) {
  return t;
});
yt || (yt = function(t) {
  return t;
});
Xc || (Xc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Qc || (Qc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Si = at(Array.prototype.forEach), uM = at(Array.prototype.lastIndexOf), wf = at(Array.prototype.pop), _i = at(Array.prototype.push), dM = at(Array.prototype.splice), pn = Array.isArray, fs = at(String.prototype.toLowerCase), lc = at(String.prototype.toString), Of = at(String.prototype.match), os = at(String.prototype.replace), Rf = at(String.prototype.indexOf), fM = at(String.prototype.trim), pM = at(Number.prototype.toString), hM = at(Boolean.prototype.toString), $f = typeof BigInt > "u" ? null : at(BigInt.prototype.toString), qf = typeof Symbol > "u" ? null : at(Symbol.prototype.toString), ut = at(Object.prototype.hasOwnProperty), as = at(Object.prototype.toString), lt = at(RegExp.prototype.test), In = gM(TypeError);
function at(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Xc(e, t, n);
  };
}
function gM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Qc(e, r);
  };
}
function xe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fs;
  if (Nf && Nf(e, null), !pn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (aM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function mM(e) {
  for (let t = 0; t < e.length; t++)
    ut(e, t) || (e[t] = null);
  return e;
}
function bt(e) {
  const t = Ai(null);
  for (const n of vm(e)) {
    var r = sM(n, 2);
    const i = r[0], s = r[1];
    ut(e, i) && (pn(s) ? t[i] = mM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = bt(s) : t[i] = s);
  }
  return t;
}
function yM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return pM(e);
    case "boolean":
      return hM(e);
    case "bigint":
      return $f ? $f(e) : "0";
    case "symbol":
      return qf ? qf(e) : "Symbol()";
    case "undefined":
      return as(e);
    case "function":
    case "object": {
      if (e === null)
        return as(e);
      const t = e, r = lr(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : as(n);
      }
      return as(e);
    }
    default:
      return as(e);
  }
}
function lr(e, t) {
  for (; e !== null; ) {
    const n = lM(e, t);
    if (n) {
      if (n.get)
        return at(n.get);
      if (typeof n.value == "function")
        return at(n.value);
    }
    e = cM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function bM(e) {
  try {
    return lt(e, ""), !0;
  } catch {
    return !1;
  }
}
const If = gt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), uc = gt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), dc = gt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), kM = gt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), fc = gt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), xM = gt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Lf = gt(["#text"]), Df = gt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), pc = gt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Uf = gt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ho = gt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), TM = yt(/{{[\w\W]*|^[\w\W]*}}/g), CM = yt(/<%[\w\W]*|^[\w\W]*%>/g), SM = yt(/\${[\w\W]*/g), _M = yt(/^data-[\-\w.\u00B7-\uFFFF]+$/), vM = yt(/^aria-[\-\w]+$/), Ff = yt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), MM = yt(/^(?:\w+script|data):/i), EM = yt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), AM = yt(/^html$/i), PM = yt(/^[a-z][.\w]*(-[.\w]+)+$/i), zf = yt(/<[/\w!]/g), Kf = yt(/<[/\w]/g), NM = yt(/<\/no(script|embed|frames)/i), wM = yt(/\/>/i), Ft = {
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
}, OM = function() {
  return typeof window > "u" ? null : window;
}, RM = function(t, r) {
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
}, Bf = function() {
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
}, dn = function(t, r, n, i) {
  return ut(t, r) && pn(t[r]) ? xe(i.base ? bt(i.base) : {}, t[r], i.transform) : n;
};
function Em() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : OM();
  const t = (H) => Em(H);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Ft.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = lr(f, "cloneNode"), h = lr(f, "remove"), g = lr(f, "nextSibling"), y = lr(f, "childNodes"), k = lr(f, "parentNode"), b = lr(f, "shadowRoot"), T = lr(f, "attributes"), E = o && o.prototype ? lr(o.prototype, "nodeType") : null, S = o && o.prototype ? lr(o.prototype, "nodeName") : null, w = o && o.prototype ? lr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const H = r.createElement("template");
    H.content && H.content.ownerDocument && (r = H.content.ownerDocument);
  }
  let R, K = "", z, ae = !1, Y = 0;
  const ge = function() {
    if (Y > 0)
      throw In('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, se = function(m) {
    ge(), Y++;
    try {
      return R.createHTML(m);
    } finally {
      Y--;
    }
  }, q = function(m) {
    ge(), Y++;
    try {
      return R.createScriptURL(m);
    } finally {
      Y--;
    }
  }, J = function() {
    return ae || (z = RM(u, i), ae = !0), z;
  }, j = r, V = j.implementation, Q = j.createNodeIterator, me = j.createDocumentFragment, ht = j.getElementsByTagName, X = n.importNode;
  let P = Bf();
  t.isSupported = typeof vm == "function" && typeof k == "function" && V && V.createHTMLDocument !== void 0;
  const re = TM, ye = CM, Se = SM, st = _M, We = vM, ie = MM, Xe = EM, $a = PM;
  let fi = Ff, Ae = null;
  const He = xe({}, [...If, ...uc, ...dc, ...fc, ...Lf]);
  let be = null;
  const At = xe({}, [...Df, ...pc, ...Uf, ...ho]);
  let De = Object.seal(Ai(null, {
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
  })), cr = null, eo = null;
  const Jt = Object.seal(Ai(null, {
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
  let Zi = !0, Vr = !0, An = !1, to = !0, Pt = !1, Yt = !0, _r = !1, pi = !1, hi = null, Pn = null, $ = !1, I = !1, G = !1, Z = !1, _e = !0, nt = !1;
  const Ue = "user-content-";
  let Qe = !0, Nt = !1, Wr = {}, Ut = null;
  const Xt = xe({}, [
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
  let ro = null;
  const no = xe({}, ["audio", "video", "img", "source", "image", "track"]);
  let an = null;
  const ud = xe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), io = "http://www.w3.org/1998/Math/MathML", so = "http://www.w3.org/2000/svg", vr = "http://www.w3.org/1999/xhtml";
  let gi = vr, qa = !1, Ia = null;
  const Ob = xe({}, [io, so, vr], lc), dd = gt(["mi", "mo", "mn", "ms", "mtext"]);
  let La = xe({}, dd);
  const fd = gt(["annotation-xml"]);
  let Da = xe({}, fd);
  const Rb = xe({}, ["title", "style", "font", "a", "script"]);
  let es = null;
  const $b = ["application/xhtml+xml", "text/html"], qb = "text/html";
  let Ge = null, mi = null;
  const Ib = r.createElement("form"), pd = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Ua = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (mi && mi === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = bt(m), es = // eslint-disable-next-line unicorn/prefer-includes
    $b.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? qb : m.PARSER_MEDIA_TYPE, Ge = es === "application/xhtml+xml" ? lc : fs, Ae = dn(m, "ALLOWED_TAGS", He, {
      transform: Ge
    }), be = dn(m, "ALLOWED_ATTR", At, {
      transform: Ge
    }), Ia = dn(m, "ALLOWED_NAMESPACES", Ob, {
      transform: lc
    }), an = dn(m, "ADD_URI_SAFE_ATTR", ud, {
      transform: Ge,
      base: ud
    }), ro = dn(m, "ADD_DATA_URI_TAGS", no, {
      transform: Ge,
      base: no
    }), Ut = dn(m, "FORBID_CONTENTS", Xt, {
      transform: Ge
    }), cr = dn(m, "FORBID_TAGS", bt({}), {
      transform: Ge
    }), eo = dn(m, "FORBID_ATTR", bt({}), {
      transform: Ge
    }), Wr = ut(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? bt(m.USE_PROFILES) : m.USE_PROFILES : !1, Zi = m.ALLOW_ARIA_ATTR !== !1, Vr = m.ALLOW_DATA_ATTR !== !1, An = m.ALLOW_UNKNOWN_PROTOCOLS || !1, to = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Pt = m.SAFE_FOR_TEMPLATES || !1, Yt = m.SAFE_FOR_XML !== !1, _r = m.WHOLE_DOCUMENT || !1, I = m.RETURN_DOM || !1, G = m.RETURN_DOM_FRAGMENT || !1, Z = m.RETURN_TRUSTED_TYPE || !1, $ = m.FORCE_BODY || !1, _e = m.SANITIZE_DOM !== !1, nt = m.SANITIZE_NAMED_PROPS || !1, Qe = m.KEEP_CONTENT !== !1, Nt = m.IN_PLACE || !1, fi = bM(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Ff, gi = typeof m.NAMESPACE == "string" ? m.NAMESPACE : vr, La = ut(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? bt(m.MATHML_TEXT_INTEGRATION_POINTS) : xe({}, dd), Da = ut(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? bt(m.HTML_INTEGRATION_POINTS) : xe({}, fd);
    const _ = ut(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? bt(m.CUSTOM_ELEMENT_HANDLING) : Ai(null);
    if (De = Ai(null), ut(_, "tagNameCheck") && pd(_.tagNameCheck) && (De.tagNameCheck = _.tagNameCheck), ut(_, "attributeNameCheck") && pd(_.attributeNameCheck) && (De.attributeNameCheck = _.attributeNameCheck), ut(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (De.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), yt(De), Pt && (Vr = !1), G && (I = !0), Wr && (Ae = xe({}, Lf), be = Ai(null), Wr.html === !0 && (xe(Ae, If), xe(be, Df)), Wr.svg === !0 && (xe(Ae, uc), xe(be, pc), xe(be, ho)), Wr.svgFilters === !0 && (xe(Ae, dc), xe(be, pc), xe(be, ho)), Wr.mathMl === !0 && (xe(Ae, fc), xe(be, Uf), xe(be, ho))), Jt.tagCheck = null, Jt.attributeCheck = null, ut(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Jt.tagCheck = m.ADD_TAGS : pn(m.ADD_TAGS) && (Ae === He && (Ae = bt(Ae)), xe(Ae, m.ADD_TAGS, Ge))), ut(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Jt.attributeCheck = m.ADD_ATTR : pn(m.ADD_ATTR) && (be === At && (be = bt(be)), xe(be, m.ADD_ATTR, Ge))), ut(m, "ADD_URI_SAFE_ATTR") && pn(m.ADD_URI_SAFE_ATTR) && xe(an, m.ADD_URI_SAFE_ATTR, Ge), ut(m, "FORBID_CONTENTS") && pn(m.FORBID_CONTENTS) && (Ut === Xt && (Ut = bt(Ut)), xe(Ut, m.FORBID_CONTENTS, Ge)), ut(m, "ADD_FORBID_CONTENTS") && pn(m.ADD_FORBID_CONTENTS) && (Ut === Xt && (Ut = bt(Ut)), xe(Ut, m.ADD_FORBID_CONTENTS, Ge)), Qe && (Ae["#text"] = !0), _r && xe(Ae, ["html", "head", "body"]), Ae.table && (xe(Ae, ["tbody"]), delete cr.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = R;
      R = m.TRUSTED_TYPES_POLICY;
      try {
        K = se("");
      } catch (te) {
        throw R = U, te;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (R = void 0, K = "") : (R === void 0 && (R = J()), R && typeof K == "string" && (K = se("")));
    gt && gt(m), mi = m;
  }, hd = xe({}, [...uc, ...dc, ...kM]), gd = xe({}, [...fc, ...xM]), Lb = function(m, _, U) {
    return _.namespaceURI === vr ? m === "svg" : _.namespaceURI === io ? m === "svg" && (U === "annotation-xml" || La[U]) : !!hd[m];
  }, Db = function(m, _, U) {
    return _.namespaceURI === vr ? m === "math" : _.namespaceURI === so ? m === "math" && Da[U] : !!gd[m];
  }, Ub = function(m, _, U) {
    return _.namespaceURI === so && !Da[U] || _.namespaceURI === io && !La[U] ? !1 : !gd[m] && (Rb[m] || !hd[m]);
  }, Fb = function(m) {
    let _ = k(m);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: gi,
      tagName: "template"
    });
    const U = fs(m.tagName), te = fs(_.tagName);
    return Ia[m.namespaceURI] ? m.namespaceURI === so ? Lb(U, _, te) : m.namespaceURI === io ? Db(U, _, te) : m.namespaceURI === vr ? Ub(U, _, te) : !!(es === "application/xhtml+xml" && Ia[m.namespaceURI]) : !1;
  }, cn = function(m) {
    _i(t.removed, {
      element: m
    });
    try {
      k(m).removeChild(m);
    } catch {
      if (h(m), !k(m))
        throw In("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, oo = function(m) {
    ts(m);
    const _ = y(m);
    if (_) {
      const te = [];
      Si(_, (ne) => {
        _i(te, ne);
      }), Si(te, (ne) => {
        try {
          h(ne);
        } catch {
        }
      });
    }
    const U = T(m);
    if (U)
      for (let te = U.length - 1; te >= 0; --te) {
        const ne = U[te], ue = ne && ne.name;
        if (typeof ue == "string")
          try {
            m.removeAttribute(ue);
          } catch {
          }
      }
  }, Nn = function(m, _) {
    try {
      _i(t.removed, {
        attribute: _.getAttributeNode(m),
        from: _
      });
    } catch {
      _i(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(m), m === "is")
      if (I || G)
        try {
          cn(_);
        } catch {
        }
      else
        try {
          _.setAttribute(m, "");
        } catch {
        }
  }, zb = function(m) {
    const _ = T(m);
    if (_)
      for (let U = _.length - 1; U >= 0; --U) {
        const te = _[U], ne = te && te.name;
        if (!(typeof ne != "string" || be[Ge(ne)]))
          try {
            m.removeAttribute(ne);
          } catch {
          }
      }
  }, ts = function(m) {
    const _ = [m];
    for (; _.length > 0; ) {
      const U = _.pop();
      (E ? E(U) : U.nodeType) === Ft.element && zb(U);
      const ne = y(U);
      if (ne)
        for (let ue = ne.length - 1; ue >= 0; --ue)
          _.push(ne[ue]);
    }
  }, Kb = function(m) {
    if (!Yt)
      return;
    const _ = [m];
    for (; _.length > 0; ) {
      const U = _.pop(), te = E ? E(U) : U.nodeType;
      if (te === Ft.processingInstruction || te === Ft.comment && lt(Kf, U.data)) {
        try {
          h(U);
        } catch {
        }
        continue;
      }
      if (te === Ft.element) {
        const ue = U, Oe = Ge(S ? S(U) : U.nodeName);
        try {
          ue.hasAttribute && ue.hasAttribute("patchsrc") && ue.removeAttribute("patchsrc"), ue.hasAttribute && ue.hasAttribute("for") && Oe !== "label" && Oe !== "output" && ue.removeAttribute("for");
        } catch {
        }
      }
      const ne = y(U);
      if (ne)
        for (let ue = ne.length - 1; ue >= 0; --ue)
          _.push(ne[ue]);
    }
  }, md = function(m) {
    let _ = null, U = null;
    if ($)
      m = "<remove></remove>" + m;
    else {
      const ue = Of(m, /^[\r\n\t ]+/);
      U = ue && ue[0];
    }
    es === "application/xhtml+xml" && gi === vr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const te = R ? se(m) : m;
    if (gi === vr)
      try {
        _ = new d().parseFromString(te, es);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = V.createDocument(gi, "template", null);
      try {
        _.documentElement.innerHTML = qa ? K : te;
      } catch {
      }
    }
    const ne = _.body || _.documentElement;
    return m && U && ne.insertBefore(r.createTextNode(U), ne.childNodes[0] || null), gi === vr ? ht.call(_, _r ? "html" : "body")[0] : _r ? _.documentElement : ne;
  }, yd = function(m) {
    const _ = w ? w(m) : m.ownerDocument;
    return Q.call(
      _ || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ao = function(m) {
    return m = os(m, re, " "), m = os(m, ye, " "), m = os(m, Se, " "), m;
  }, Fa = function(m) {
    var _;
    m.normalize();
    const U = w ? w(m) : m.ownerDocument, te = Q.call(
      U || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ne = te.nextNode();
    for (; ne; )
      ne.data = ao(ne.data), ne = te.nextNode();
    const ue = (_ = m.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(m, "template");
    ue && Si(ue, (Oe) => {
      yi(Oe.content) && Fa(Oe.content);
    });
  }, co = function(m) {
    const _ = S ? S(m) : null;
    return typeof _ != "string" || Ge(_) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    m.attributes !== T(m) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    m.nodeType !== E(m) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, yi = function(m) {
    if (!E || typeof m != "object" || m === null)
      return !1;
    try {
      return E(m) === Ft.documentFragment;
    } catch {
      return !1;
    }
  }, rs = function(m) {
    if (!E || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof E(m) == "number";
    } catch {
      return !1;
    }
  };
  function Mr(H, m, _) {
    H.length !== 0 && Si(H, (U) => {
      U.call(t, m, _, mi);
    });
  }
  const Bb = function(m, _) {
    return !!(Yt && m.hasChildNodes() && !rs(m.firstElementChild) && lt(zf, m.textContent) && lt(zf, m.innerHTML) || Yt && m.namespaceURI === vr && _ === "style" && rs(m.firstElementChild) || m.nodeType === Ft.processingInstruction || Yt && m.nodeType === Ft.comment && lt(Kf, m.data));
  }, jb = function(m, _, U) {
    if (!cr[_] && Td(_) && (De.tagNameCheck instanceof RegExp && lt(De.tagNameCheck, _) || De.tagNameCheck instanceof Function && De.tagNameCheck(_)))
      return !1;
    if (Qe && !Ut[_]) {
      const te = k(m), ne = y(m);
      if (ne && te) {
        const ue = ne.length;
        for (let Oe = ue - 1; Oe >= 0; --Oe) {
          const Je = m === U ? p(ne[Oe], !0) : ne[Oe];
          te.insertBefore(Je, g(m));
        }
      }
    }
    return cn(m), !0;
  }, bd = function(m, _, U, te) {
    return m.length === 0 ? _ : _ === U || _ === te ? bt(_) : _;
  }, kd = function(m, _) {
    if (Mr(P.beforeSanitizeElements, m, null), m !== _ && k(m) === null)
      return Nt && ts(m), !0;
    if (co(m))
      return cn(m), !0;
    const U = Ge(S ? S(m) : m.nodeName);
    if (Ae = bd(P.uponSanitizeElement, Ae, He, hi), Mr(P.uponSanitizeElement, m, {
      tagName: U,
      allowedTags: Ae
    }), m !== _ && k(m) === null)
      return Nt && ts(m), !0;
    if (Bb(m, U))
      return cn(m), !0;
    if (cr[U] || !(Jt.tagCheck instanceof Function && Jt.tagCheck(U)) && !Ae[U]) {
      const ne = jb(m, U, _);
      return ne === !1 && Mr(P.afterSanitizeElements, m, null), ne;
    }
    if ((E ? E(m) : m.nodeType) === Ft.element && !Fb(m) || (U === "noscript" || U === "noembed" || U === "noframes") && lt(NM, m.innerHTML))
      return cn(m), !0;
    if (Pt && m.nodeType === Ft.text) {
      const ne = ao(m.textContent);
      m.textContent !== ne && (_i(t.removed, {
        element: m.cloneNode()
      }), m.textContent = ne);
    }
    return Mr(P.afterSanitizeElements, m, null), !1;
  }, xd = function(m, _, U) {
    if (eo[_] || Yt && _ === "patchsrc" || Yt && _ === "for" && m !== "label" && m !== "output" || _e && (_ === "id" || _ === "name") && (U in r || U in Ib))
      return !1;
    const te = be[_] || Jt.attributeCheck instanceof Function && Jt.attributeCheck(_, m);
    if (!(Vr && lt(st, _))) {
      if (!(Zi && lt(We, _))) {
        if (te) {
          if (!an[_]) {
            if (!lt(fi, os(U, Xe, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && m !== "script" && Rf(U, "data:") === 0 && ro[m])) {
                if (!(An && !lt(ie, os(U, Xe, "")))) {
                  if (U)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Td(m) && (De.tagNameCheck instanceof RegExp && lt(De.tagNameCheck, m) || De.tagNameCheck instanceof Function && De.tagNameCheck(m)) && (De.attributeNameCheck instanceof RegExp && lt(De.attributeNameCheck, _) || De.attributeNameCheck instanceof Function && De.attributeNameCheck(_, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && De.allowCustomizedBuiltInElements && (De.tagNameCheck instanceof RegExp && lt(De.tagNameCheck, U) || De.tagNameCheck instanceof Function && De.tagNameCheck(U)))
        ) return !1;
      }
    }
    return !0;
  }, Vb = xe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Td = function(m) {
    return !Vb[fs(m)] && lt($a, m);
  }, Wb = function(m, _, U, te) {
    if (R && typeof u == "object" && typeof u.getAttributeType == "function" && !U)
      switch (u.getAttributeType(m, _)) {
        case "TrustedHTML":
          return se(te);
        case "TrustedScriptURL":
          return q(te);
      }
    return te;
  }, Hb = function(m, _, U, te) {
    try {
      U ? m.setAttributeNS(U, _, te) : m.setAttribute(_, te), co(m) ? cn(m) : wf(t.removed);
    } catch {
      Nn(_, m);
    }
  }, Cd = function(m) {
    Mr(P.beforeSanitizeAttributes, m, null);
    const _ = m.attributes;
    if (!_ || co(m))
      return;
    be = bd(P.uponSanitizeAttribute, be, At, Pn);
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: be,
      forceKeepAttr: void 0
    };
    let te = _.length;
    const ne = Ge(m.nodeName);
    for (; te--; ) {
      const ue = _[te], Oe = ue.name, Je = ue.namespaceURI, wt = ue.value, Ot = Ge(Oe), Ka = wt;
      let Ct = Oe === "value" ? Ka : fM(Ka);
      if (U.attrName = Ot, U.attrValue = Ct, U.keepAttr = !0, U.forceKeepAttr = void 0, Mr(P.uponSanitizeAttribute, m, U), Ct = U.attrValue, nt && (Ot === "id" || Ot === "name") && Rf(Ct, Ue) !== 0 && (Nn(Oe, m), Ct = Ue + Ct), Yt && lt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ct)) {
        Nn(Oe, m);
        continue;
      }
      if (Ot === "attributename" && Of(Ct, "href")) {
        Nn(Oe, m);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          Nn(Oe, m);
          continue;
        }
        if (!to && lt(wM, Ct)) {
          Nn(Oe, m);
          continue;
        }
        if (Pt && (Ct = ao(Ct)), !xd(ne, Ot, Ct)) {
          Nn(Oe, m);
          continue;
        }
        Ct = Wb(ne, Ot, Je, Ct), Ct !== Ka && Hb(m, Oe, Je, Ct);
      }
    }
    Mr(P.afterSanitizeAttributes, m, null);
  }, lo = function(m) {
    let _ = null;
    const U = yd(m);
    for (Mr(P.beforeSanitizeShadowDOM, m, null); _ = U.nextNode(); )
      if (Mr(P.uponSanitizeShadowNode, _, null), kd(_, m), Cd(_), yi(_.content) && lo(_.content), (E ? E(_) : _.nodeType) === Ft.element) {
        const ne = b(_);
        yi(ne) && (za(ne), lo(ne));
      }
    Mr(P.afterSanitizeShadowDOM, m, null);
  }, za = function(m) {
    const _ = [{
      node: m,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const U = _.pop();
      if (U.shadow) {
        lo(U.shadow);
        continue;
      }
      const te = U.node, ue = (E ? E(te) : te.nodeType) === Ft.element, Oe = y(te);
      if (Oe)
        for (let Je = Oe.length - 1; Je >= 0; --Je)
          _.push({
            node: Oe[Je],
            shadow: null
          });
      if (ue) {
        const Je = S ? S(te) : null;
        if (typeof Je == "string" && Ge(Je) === "template") {
          const wt = te.content;
          yi(wt) && _.push({
            node: wt,
            shadow: null
          });
        }
      }
      if (ue) {
        const Je = b(te);
        yi(Je) && _.push({
          node: null,
          shadow: Je
        }, {
          node: Je,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(H) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, U = null, te = null, ne = null;
    if (qa = !H, qa && (H = "<!-->"), typeof H != "string" && !rs(H) && (H = yM(H), typeof H != "string"))
      throw In("dirty is not a string, aborting");
    if (!t.isSupported)
      return H;
    pi ? (Ae = hi, be = Pn) : Ua(m), (P.uponSanitizeElement.length > 0 || P.uponSanitizeAttribute.length > 0) && (Ae = bt(Ae)), P.uponSanitizeAttribute.length > 0 && (be = bt(be)), t.removed = [];
    const ue = Nt && typeof H != "string" && rs(H);
    if (ue) {
      Kb(H);
      const wt = S ? S(H) : H.nodeName;
      if (typeof wt == "string") {
        const Ot = Ge(wt);
        if (!Ae[Ot] || cr[Ot])
          throw oo(H), In("root node is forbidden and cannot be sanitized in-place");
      }
      if (co(H))
        throw oo(H), In("root node is clobbered and cannot be sanitized in-place");
      try {
        za(H);
      } catch (Ot) {
        throw oo(H), Ot;
      }
    } else if (rs(H))
      _ = md("<!---->"), U = _.ownerDocument.importNode(H, !0), U.nodeType === Ft.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? _ = U : _.appendChild(U), za(U);
    else {
      if (!I && !Pt && !_r && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return R && Z ? se(H) : H;
      if (_ = md(H), !_)
        return I ? null : Z ? K : "";
    }
    _ && $ && cn(_.firstChild);
    const Oe = ue ? H : _;
    try {
      const wt = yd(Oe);
      for (; te = wt.nextNode(); )
        kd(te, Oe), Cd(te), yi(te.content) && lo(te.content);
    } catch (wt) {
      throw ue && (oo(H), Si(t.removed, (Ot) => {
        Ot.element && ts(Ot.element);
      })), wt;
    }
    if (ue)
      return Si(t.removed, (wt) => {
        wt.element && ts(wt.element);
      }), Pt && Fa(H), H;
    if (I) {
      if (Pt && Fa(_), G)
        for (ne = me.call(_.ownerDocument); _.firstChild; )
          ne.appendChild(_.firstChild);
      else
        ne = _;
      return (be.shadowroot || be.shadowrootmode) && (ne = X.call(n, ne, !0)), ne;
    }
    let Je = _r ? _.outerHTML : _.innerHTML;
    return _r && Ae["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && lt(AM, _.ownerDocument.doctype.name) && (Je = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + Je), Pt && (Je = ao(Je)), R && Z ? se(Je) : Je;
  }, t.setConfig = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ua(H), pi = !0, hi = Ae, Pn = be;
  }, t.clearConfig = function() {
    mi = null, pi = !1, hi = null, Pn = null, R = z, K = "";
  }, t.isValidAttribute = function(H, m, _) {
    mi || Ua({});
    const U = Ge(H), te = Ge(m);
    return xd(U, te, _);
  }, t.addHook = function(H, m) {
    typeof m == "function" && ut(P, H) && _i(P[H], m);
  }, t.removeHook = function(H, m) {
    if (ut(P, H)) {
      if (m !== void 0) {
        const _ = uM(P[H], m);
        return _ === -1 ? void 0 : dM(P[H], _, 1)[0];
      }
      return wf(P[H]);
    }
  }, t.removeHooks = function(H) {
    ut(P, H) && (P[H] = []);
  }, t.removeAllHooks = function() {
    P = Bf();
  }, t;
}
var $M = Em();
function qM(e) {
  const t = e.getRootElement();
  if (!t?.classList.contains("verse-delete-armed") || t.getAttribute("data-verse-delete-kind") !== "selection")
    return;
  const r = t.getAttribute("data-verse-delete-intent");
  return r === "deleteBackward" || r === "deleteForward" ? r : void 0;
}
function IM({ structureProtectionMode: e = "off" }) {
  const [t] = de(), r = ee(void 0), [n, i] = ke(void 0), s = Ce((o) => {
    r.current = o, i(o);
  }, []);
  return W(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = Du(p);
      if (!h)
        return !1;
      const g = N();
      return e === "protected" ? g && Uu(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = N(), y = r.current;
      if (y && g && Mf(g, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const b = oe(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (b) {
            const T = b.getParent(), E = b.getPreviousSibling(), S = b.getNextSibling();
            b.remove(), E ? Fu(E) : S && v(S) ? S.select(0, 0) : T?.selectStart();
          }
        } else y.kind === "selection" ? A(g) && (Pu(g), g.removeText()) : ft(b) && Wv(b);
        return !0;
      }
      if (!g)
        return !1;
      const k = Vv(g, p);
      if (k) {
        if (k.kind === "verse") {
          const b = Jp();
          b.add(k.node.getKey()), Or(b);
        } else {
          const b = mn();
          b.anchor.set(k.node.getKey(), 0, "element"), b.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), Or(b);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), h.preventDefault(), !0;
      }
      if (A(g) && !g.isCollapsed() && Sa(g)) {
        const b = g.getNodes().filter(Te).map((S) => S.getKey()), { anchor: T, focus: E } = g;
        return s({
          kind: "selection",
          intent: p,
          key: b[0],
          anchor: { key: T.key, offset: T.offset, type: T.type },
          focus: { key: E.key, offset: E.offset, type: E.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return !h || !Fn(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = $M.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), k = Hv(Dk(t, y)), b = N();
      return A(b) && b.insertNodes(k), h.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Fn(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Fn(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Mf(N(), p) || s(void 0);
      });
    };
    return Ie(
      t.registerCommand(Tr, o, Re),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(sr, c, he),
      t.registerCommand(zt, d, Re),
      t.registerCommand(Gp, c, Re),
      t.registerCommand(Ol, u, Re),
      t.registerCommand(Vn, c, Re),
      t.registerUpdateListener(f)
    );
  }, [t, e, s]), W(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const LM = /* @__PURE__ */ new Set(["​", " "]), jf = 6e4;
function DM({ isEnabled: e, structureProtectionMode: t = "off", copyLimit: r, onHiddenContentDelete: n, logger: i }) {
  const [s] = de(), o = ee(n), a = ee(t), c = ee(r), l = ee(i);
  W(() => {
    o.current = n, a.current = t, c.current = r, l.current = i;
  }, [n, t, r, i]);
  const d = !!n;
  return W(() => {
    if (!e || !d)
      return;
    let u = !1, f = !1, p = !1;
    const h = (j) => {
      u = !0;
      try {
        j();
      } finally {
        u = !1;
      }
    }, g = async (j) => {
      const V = o.current;
      if (!V)
        return "keep";
      try {
        const Q = await V(j);
        return Q !== "delete" && Q !== "keep" && l.current?.warn(`[HiddenContentDeleteGuard] onHiddenContentDelete answered ${JSON.stringify(Q)}, which is neither "delete" nor "keep"; keeping the hidden content.`), Q === "delete" ? "delete" : "keep";
      } catch (Q) {
        return l.current?.error("[HiddenContentDeleteGuard] onHiddenContentDelete failed; keeping the hidden content.", Q), "keep";
      }
    }, y = (j, V) => l.current?.info(`[HiddenContentDeleteGuard] Dropped the "${j}" answer: ${V}. Nothing was changed.`), k = (j, V, Q, me) => {
      const ht = jM(j, V), X = {
        items: Xv(V),
        action: Q,
        canSkip: !!me.$keep
      };
      f = !0;
      const P = setTimeout(() => !p && l.current?.warn(`[HiddenContentDeleteGuard] onHiddenContentDelete has not answered after ${jf / 1e3}s; editing stays held until it does.`), jf);
      return g(X).then((re) => {
        clearTimeout(P), f = !1, p ? y(re, "the editor's guard was torn down while asking") : b(ht, re, me);
      }), !0;
    }, b = (j, V, Q) => {
      if (!s.getEditorState().read(() => WM(j))) {
        y(V, "the selection moved while asking");
        return;
      }
      s.focus(() => queueMicrotask(() => T(j, V, Q)));
    }, T = (j, V, Q) => {
      if (p) {
        y(V, "the editor's guard was torn down while asking");
        return;
      }
      let me = !1;
      s.update(() => {
        if (!s.isEditable()) {
          y(V, "the editor became read-only while asking");
          return;
        }
        if (!VM(j)) {
          y(V, "the document changed while asking");
          return;
        }
        if (HM(j), V === "keep") {
          Q.$keep?.();
          return;
        }
        Q.$delete?.(), me = !0;
      }, { discrete: !0 });
      const { replay: ht } = Q;
      me && ht && h(ht);
    }, E = (j) => {
      for (const V of j) {
        const Q = oe(V);
        ve(Q) && Q.isAttached() && Q.remove();
      }
    }, S = (j, V, Q) => {
      const me = V === "backward", ht = me ? "deleteBackward" : "deleteForward", X = Gv(j, V);
      if (X?.placement === "block") {
        const We = X.nodes.map((ie) => ie.getKey());
        return k(j, X.nodes, ht, {
          // With no paragraph on the far side (a chapter marker, the document's edge) there is
          // nowhere to skip to, so "keep" cancels rather than leaving the caret to ask again.
          $keep: Yv(X, V) ? () => Ef(Vf(X, We), V) : void 0,
          $delete: () => E(We)
        });
      }
      const P = Q === "character" ? [] : KM(s, j, V, Q), re = BM([...X?.nodes ?? [], ...P]);
      if (re.length === 0)
        return !1;
      const ye = re.map((We) => We.getKey()), Se = !!X && re.length === X.nodes.length, st = X?.nodes.map((We) => We.getKey()) ?? [];
      return k(j, re, ht, {
        $keep: X && Se ? () => Ef(Vf(X, st), V) : void 0,
        $delete: () => E(ye),
        replay: Q === "character" ? void 0 : () => s.dispatchCommand(FM(Q), me)
      });
    }, w = (j, V) => {
      const Q = To(j);
      return Q.length === 0 ? !1 : k(j, Q, "replaceSelection", { replay: V });
    }, R = () => {
      if (u)
        return;
      const j = N();
      if (!(!A(j) || Zs()))
        return j;
    }, K = (j) => {
      if (u)
        return !1;
      const V = Du(j), Q = V === "deleteBackward" || V === "deleteForward";
      if (f)
        return !Q && !lm(j) ? !1 : (j.preventDefault(), !0);
      if (!Q || !yn && j.key === "Delete" && j.shiftKey)
        return !1;
      const me = R();
      if (!me || a.current === "protected" && Uu(me, V))
        return !1;
      const ht = V === "deleteBackward";
      if (!me.isCollapsed() && a.current === "guarded" && Sa(me) && qM(s) !== V)
        return !1;
      const X = me.isCollapsed() ? S(me, ht ? "backward" : "forward", UM(j)) : (
        // Claimed here rather than left to DELETE_CHARACTER_COMMAND: in guarded mode
        // StructureKeyboardPlugin removes an armed selection itself, straight off the keystroke.
        w(me, () => s.dispatchCommand(Pr, ht))
      );
      return X && j.preventDefault(), X;
    }, z = (j, V) => (Q) => {
      if (f && !u)
        return !0;
      const me = R();
      return me ? me.isCollapsed() ? S(me, Q ? "backward" : "forward", V) : ge(me) ? !1 : w(me, () => s.dispatchCommand(j, Q)) : !1;
    }, ae = (j) => (V) => {
      if (f && !u)
        return !0;
      const Q = R();
      return !Q || Q.isCollapsed() || ge(Q) ? !1 : w(Q, () => s.dispatchCommand(j, V));
    }, Y = (j) => {
      if (f && !u)
        return !0;
      const V = R();
      if (!V || V.isCollapsed() || ge(V))
        return !1;
      const Q = typeof j == "string" ? j : j.data ?? j.dataTransfer?.getData("text/plain") ?? "", me = s.isComposing() && LM.has(Q);
      return w(V, () => me || Q === "" ? s.dispatchCommand(Pr, !0) : s.dispatchCommand(Vn, Q));
    }, ge = (j) => a.current === "protected" && Fn(j), se = (j) => {
      if (u)
        return !1;
      const V = R();
      return !V || To(V).length === 0 ? !1 : vi(j);
    }, q = (j) => {
      if (f && !u)
        return vi(j);
      const V = R();
      if (!V || V.isCollapsed() || ge(V))
        return !1;
      const Q = zM(j), me = w(V, () => s.dispatchCommand(zt, Q));
      return me && vi(j), me;
    }, J = (j) => {
      if (f && !u)
        return vi(j);
      const V = R();
      return !V || V.isCollapsed() || ge(V) || To(V).length === 0 ? !1 : c.current !== void 0 ? vi(j) : (s.dispatchCommand(Wn, j), vi(j), w(V, () => s.dispatchCommand(Pr, !0)));
    };
    return Ie(() => {
      p = !0;
    }, s.registerCommand(Tr, K, he), s.registerCommand(Pr, z(Pr, "character"), he), s.registerCommand($i, z($i, "word"), he), s.registerCommand(jn, z(jn, "line"), he), s.registerCommand(Vn, Y, he), s.registerCommand(Hn, ae(Hn), he), s.registerCommand(vc, ae(vc), he), s.registerCommand(Gp, se, he), s.registerCommand(Nl, se, he), s.registerCommand(zt, q, he), s.registerCommand(sr, J, he));
  }, [s, e, d]), null;
}
function UM(e) {
  return yn ? e.metaKey ? "line" : e.altKey ? "word" : "character" : e.ctrlKey ? "word" : "character";
}
function FM(e) {
  return e === "word" ? $i : e === "line" ? jn : Pr;
}
function vi(e) {
  return e?.preventDefault(), !0;
}
function zM(e) {
  if (typeof ClipboardEvent > "u" || typeof DataTransfer > "u" || !(e instanceof ClipboardEvent) || !e.clipboardData)
    return e;
  const t = new DataTransfer();
  for (const r of e.clipboardData.types)
    r !== "Files" && t.setData(r, e.clipboardData.getData(r));
  for (const r of Array.from(e.clipboardData.files))
    t.items.add(r);
  return new ClipboardEvent("paste", { clipboardData: t, cancelable: !0 });
}
function KM(e, t, r, n) {
  const i = e.getRootElement()?.ownerDocument.defaultView?.getSelection();
  if (!i || typeof i.modify != "function")
    return n === "line" ? Jv(t, r) : [];
  const s = t.clone();
  return s.dirty = !0, s.modify("extend", r === "backward", n === "line" ? "lineboundary" : "word"), t.dirty = !0, To(s);
}
function BM(e) {
  return e.filter((r, n) => e.findIndex((i) => i.is(r)) === n).sort((r, n) => r.isBefore(n) ? -1 : 1);
}
function jM(e, t) {
  const r = ({ key: n, offset: i, type: s }) => ({ key: n, offset: i, type: s });
  return {
    anchor: r(e.anchor),
    focus: r(e.focus),
    hiddenKeys: t.map((n) => n.getKey()),
    text: Ke().getTextContent()
  };
}
function VM(e) {
  const t = ({ key: r, offset: n, type: i }) => {
    const s = oe(r);
    return !s || !s.isAttached() ? !1 : i === "element" ? L(s) && n <= s.getChildrenSize() : v(s) && n <= s.getTextContentSize();
  };
  return t(e.anchor) && t(e.focus) && e.hiddenKeys.every((r) => oe(r)?.isAttached()) && Ke().getTextContent() === e.text;
}
function WM(e) {
  const t = N();
  if (!t)
    return !0;
  if (!A(t))
    return !1;
  const r = (n, i) => n.key === i.key && n.offset === i.offset && n.type === i.type;
  return r(t.anchor, e.anchor) && r(t.focus, e.focus);
}
function HM(e) {
  const t = mn();
  t.anchor.set(e.anchor.key, e.anchor.offset, e.anchor.type), t.focus.set(e.focus.key, e.focus.offset, e.focus.type), Or(t);
}
function Vf(e, t) {
  return { nodes: t.map((n) => oe(n)).filter(ve), placement: e.placement };
}
function GM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = de();
  return W(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), W(() => {
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
        const d = Iu(o);
        o.update(() => {
          d || St(dr), o.setEditorState(l), o.dispatchCommand(fk, void 0);
        }, { tag: Ll });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const hc = "caller_highlight", JM = Mn(function(t, r) {
  const [n] = de(), i = ee(void 0), s = ee(void 0), o = Ce(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const d = Ar(a);
      return d ? (d.getChildren().find(Tt) ?? Xr(d))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(hc), l?.classList.add(hc), s.current = l;
  }, [n]);
  return ra(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Ei(n, () => Ar(a)?.getKey()), o();
    }
  }), [n, o]), W(() => Ie(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Le, (a, { prevEditorState: c, updateTags: l }) => {
      const d = i.current;
      if (d === void 0 || a.get(d) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const u = l.has(Ll) ? void 0 : c.read(() => hu(d)), f = u === void 0 ? void 0 : n.getEditorState().read(() => Ar(u)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), W(() => () => s.current?.classList.remove(hc), []), null;
});
function YM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = de();
  return XM(t, n), QM(i, e, r, n), null;
}
function XM(e, t) {
  const r = ee(void 0), n = ee(void 0), i = e.noteCallers, s = e.crossRefCallers;
  W(() => {
    let o = i;
    (!o || o.length <= 0) && (o = BS), r.current !== o && (r.current = o, Wf("note-callers", o, t));
  }, [t, i]), W(() => {
    let o = s;
    (!o || o.length <= 0) && (o = jS), n.current !== o && (n.current = o, Wf("cross-ref-callers", o, t));
  }, [t, s]);
}
function QM(e, t, r, n) {
  W(() => {
    if (!e.hasNodes([Me, Le, gr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => sE(s));
    return Ie(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Le, (s) => ZM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(Me, eE),
      e.registerNodeTransform(et, tE),
      // Ensure NBSP after caller.
      e.registerNodeTransform(gr, rE),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(gr, (s, { prevEditorState: o }) => nE(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Kt, () => iE(e, t, r, n), kt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function ZM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Tt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !O(i) && i.getTextContent() !== Wt(e.getCaller()) && e.insertBefore(i);
  }
}
function eE(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => Tt(s));
  if (!F(e) || !B(t) || !n)
    return;
  const i = Gl(r);
  n.getPreviewText() !== i && n.setPreviewText(i), Pm(e);
}
function Am(e) {
  const t = N();
  if (!A(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function Pm(e) {
  const t = e.getNextSibling();
  if (v(t) && !O(t)) {
    if (t.getTextContent() === D || Am(t))
      return;
    if (Br(t)) {
      t.setTextContent(D);
      return;
    }
  }
  e.insertAfter(Hs());
}
function tE(e) {
  const t = Vt(e), r = t?.getChildren(), n = r?.find((a) => Tt(a));
  if (!v(e) || !B(t) || !n || !r)
    return;
  const i = e.getParent(), s = Br(e) || Am(e);
  if (!O(e) && B(i) && s && e.getTextContent() !== D && (e.setTextContent(D), e.selectEnd()), F(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(or) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = Gl(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function rE(e) {
  Tt(e) && Pm(e);
}
function nE(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = oe(r), a = o?.getParent();
      return Tt(o) && B(a) && a.getCaller() === xs;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function iE(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = qe(o, (c) => B(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = oe(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), cs(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (B(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, cs(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (B(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, cs(e, c, n);
    } else if (!a) {
      const c = qe(o, (l) => B(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      we(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, cs(e, l, n);
      }
    }
  }
  if (ft(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (li(c) && B(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, cs(e, l, n);
    }
  }
  return !1;
}
function cs(e, t, r) {
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
function sE(e) {
  const t = N();
  if (!A(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (B(i) && v(s)) {
    e.preventDefault();
    const o = mn();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Or(o);
  }
}
function Wf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (oE(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function oE(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function qr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Xr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function aE(e) {
  const t = e.getParent();
  if (B(t))
    return qr(t).some((r) => r.is(e)) ? t : void 0;
}
function ei(e) {
  const t = qr(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function cE(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function lE(e) {
  const t = pk();
  if (!A(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ei(e);
  const i = cE(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ei(e);
}
function Ni(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = aE(t);
  if (r)
    return Nm(r, t, e.offset) ? void 0 : r;
}
function Nm(e, t, r) {
  const n = qr(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function uE(e) {
  const t = qr(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : ar(e, ei(e));
}
function dE(e = !1) {
  const t = N();
  if (!A(t))
    return !1;
  if (!t.isCollapsed())
    return $m(t);
  const r = wm(t.anchor);
  if (r) {
    const i = jo(r);
    return t.anchor.is(i) ? !1 : (Om(t, i), !0);
  }
  const n = Ni(t.anchor);
  if (!n)
    return !1;
  if (!e && lE(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    ar(i, n.getIndexWithinParent());
  } else
    uE(n);
  return !0;
}
function Bo(e) {
  const t = qr(e), r = t[t.length - 1];
  return v(r) ? pr(r.getKey(), r.getTextContentSize(), "text") : pr(e.getKey(), ei(e), "element");
}
function Bi(e) {
  const t = e.getLastChild();
  return O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function gc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === Bi(e) && O(r) && t.offset > 0;
}
function Zc(e) {
  const t = Bi(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function jo(e) {
  const t = Bi(e);
  if (t > ei(e)) {
    const r = e.getChildAtIndex(t - 1), n = L(r) ? r.getLastDescendant() : r;
    if (v(n))
      return pr(n.getKey(), n.getTextContentSize(), "text");
  }
  return Bo(e);
}
function wm(e) {
  const t = e.getNode(), r = t.getParent();
  if (B(r) && qr(r).length > 0 && Zc(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (B(t) && qr(t).length > 0 && Zc(t))
    return e.offset > Bi(t) || e.offset === Bi(t) && e.offset > ei(t) ? t : void 0;
  if (!L(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return B(n) && qr(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function Om(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function Rm(e) {
  const t = Vt(e);
  return t && qr(t).length > 0 ? t : void 0;
}
function fE(e) {
  const t = [], r = (n) => {
    const i = Rm(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function $m(e) {
  const t = fE(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => pr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const d = pr(l.getKey(), ei(l), "element"), u = pr(l.getKey(), Bi(l), "element"), f = i.type === "text" && Nm(l, i.getNode(), i.offset), p = i.isBefore(d) && !f;
    (Ni(i) || gc(l, i) || p) && (!s.isBefore(d) || Ni(s)) && (i = gc(l, i) ? jo(l) : Bo(l), o = !0), (Ni(s) || gc(l, s) || u.isBefore(s)) && (i.isBefore(u) || i.is(u)) && (s = Ni(s) ? Bo(l) : jo(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function Hf(e, t) {
  const r = mn();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function Gf(e, t) {
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
function Jf(e, t, r) {
  const n = Gf(e, t), i = Gf(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function pE(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return L(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function hE(e, t, r, n) {
  const i = t.anchor, s = wm(i);
  if (s)
    return Om(t, jo(s)), !0;
  const o = Rm(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const u = pE(t.focus);
    return B(u) && qr(u).length > 0;
  }
  if (Ni(i))
    return !0;
  const a = Bo(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const u = Hf(a, i);
    return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && Jf(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = Zc(o);
  if (!c)
    return !1;
  const l = pr(c.getKey(), 0, "text"), d = Hf(i, l);
  return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && Jf(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function gE() {
  const [e] = de(), t = ee(!1);
  return W(() => {
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
  }, [e]), W(() => {
    const r = (o) => () => {
      const a = N();
      return !A(a) || a.isCollapsed() || !$m(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = N();
      return A(c) ? c.isCollapsed() ? hE(e, c, a, o) : i() : !1;
    };
    return Ie(e.registerCommand(Vn, n, he), e.registerCommand(zt, n, he), e.registerCommand(Hn, n, he), e.registerCommand(vc, n, he), e.registerCommand(Pr, s("character"), he), e.registerCommand($i, s("word"), he), e.registerCommand(jn, s("line"), he), e.registerCommand(Nl, i, he), e.registerCommand(sr, i, he));
  }, [e]), W(() => e.registerCommand(Kt, () => (dE(t.current) && (St($t), wr(e, $t)), !1), Bn), [e]), null;
}
function mE({ onChange: e }) {
  const [t] = de();
  return W(() => t.registerCommand(Kt, () => {
    const r = mu();
    return e?.(r), !1;
  }, kt), [t, e]), null;
}
function yE() {
  const [e] = de();
  return bE(e), null;
}
function bE(e) {
  W(() => {
    if (!e.hasNodes([pt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(pt, (t) => kE(t, e));
  }, [e]);
}
function kE(e, t) {
  Kc(t, e.getKey()) && Lg(e.getFirstChild()), !(!fe(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = oe(e.getKey());
    return fe(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function qm({ onStateChange: e }) {
  const [t] = de(), [r, n] = ke(t), i = ee(!1), s = ee(!1), o = ee(void 0), a = ee(void 0), c = Ce(() => {
    const l = N();
    let d;
    if (A(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : qe(u, (k) => {
        const b = k.getParent();
        return b !== null && hk(b);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Ps(p) && (p = qe(u, fe) ?? p);
      const h = p.getKey(), g = r.getElementByKey(h), y = cT(u, f);
      if (y && tS(y) && (d = y.getMarker()), g !== null && (fe(p) || Ee(p) || Bs(p))) {
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
  return W(() => t.registerCommand(Kt, (l, d) => (c(), n(d), !1), he), [t, c]), W(() => Ie(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(gk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), he), r.registerCommand(mk, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), he)), [c, r, e]), null;
}
const Ow = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function xE({ textDirection: e }) {
  const [t] = de();
  return TE(t, e), null;
}
function TE(e, t) {
  W(() => (Yf(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Yf(e, t);
  })), [e, t]);
}
function Yf(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function CE() {
  const [e] = de();
  return SE(e), null;
}
function SE(e) {
  W(() => {
    if (!e.hasNodes([Me, Dt, Le, et, _t]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ie(
      e.registerNodeTransform(et, _E),
      e.registerNodeTransform(et, (t) => vE(t, e)),
      e.registerNodeTransform(_t, Xf),
      e.registerNodeTransform(Dt, Xf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(_t, (t) => {
        As(Xn("va"), t), As(Xn("vp"), t);
      })
    );
  }, [e]);
}
function _E(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || B(r) || F(n) || F(r) || Pe(n) || Pe(r) || ve(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  v(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  ve(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  le(e, pe) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  je(n))
    return;
  if (Te(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  Te(r) && lu(e);
}
function vE(e, t) {
  const r = e.getParent();
  !ve(r) || !e.isAttached() || Kc(t, e.getKey()) && !Kc(t, r.getKey()) && r.insertAfter(e);
}
function Xf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Pe(t); )
    t = t.getLastChild();
  (F(t) || v(t) && Pe(t.getParent())) && e.insertBefore(Ne(" "));
}
function _a(e) {
  if (!B(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !Vs(i)))
      return;
    const n = t.getParent();
    if (!n)
      return;
    if (!L(n) || !n.isInline())
      return e;
    t = n;
  }
}
function ME(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function EE() {
  const e = N();
  if (!(!A(e) || !e.isCollapsed()))
    return _a(ME(e.anchor));
}
function AE(e) {
  const t = N();
  let r;
  return A(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Im(e.target)), r ? _a(qe(r, B)) : void 0;
}
function Im(e) {
  const t = yk(e)?.anchorNode;
  if (Vp(t))
    return Wi(t) ?? void 0;
}
function PE(e) {
  if (N())
    return;
  const t = Im(e);
  return t ? _a(qe(t, B)) : void 0;
}
function Qf(e) {
  const t = qe(e.getNode(), B);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function NE() {
  const e = N();
  if (!A(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = Qf(t), i = Qf(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const wE = 500;
function OE(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function RE() {
  const e = N();
  if (!A(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (L(n))
    return _a(n.getChildAtIndex(t.offset));
}
function $E() {
  const [e] = de(), t = Lu(EE), r = ee(void 0);
  return W(() => {
    const n = (i) => {
      St($t), wr(e, $t), t(i);
    };
    return Ie(e.registerCommand(
      Tr,
      (i) => (r.current = OE(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      he
    ), e.registerCommand(Kt, () => {
      if (r.current !== void 0 && performance.now() - r.current < wE) {
        const o = RE();
        if (o)
          return n(o), !1;
      }
      if (NE())
        return St($t), wr(e, $t), !1;
      const s = PE(e.getRootElement());
      return s && n(s), !1;
    }, Bn), e.registerCommand(sa, (i) => {
      const s = AE(i);
      return s && n(s), !1;
    }, Bn));
  }, [e, t]), null;
}
function qE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = C_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return M(T_, { trigger: e, items: i });
}
function IE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = Ze(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? M(UE, { trigger: e, harness: i }) : M(qE, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const LE = [" ", "*"];
function DE(e, t) {
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
function UE({ trigger: e, harness: t }) {
  const [r] = de(), [n, i] = ke(void 0), s = ee({ query: "", options: [] }), o = ee(0), a = Ce((f, p, h) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = N();
      A(y) && y.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  W(() => Ie(r.registerCommand(Tr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), Yp(() => {
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
        const g = n.items.find((y) => y.marker === h);
        return g && t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
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
  }, Re), r.registerCommand(Xp, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Rr)), [r, e, t, n, a]);
  const c = Ce(() => i(void 0), []), l = Ce((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = Ce((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), u = Ze(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    DE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && M(Gg, { isOpen: !0, children: ({ placement: f }) => M(
    Xg,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? LE : void 0 },
    n.session
  ) });
}
function FE(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (r) => D.repeat(r.length));
}
function zE(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
function KE(e) {
  return e.replace(/ {2,}/g, " ");
}
let Vo;
function BE(e) {
  e && (Vo = e);
}
function el(e) {
  return Qs(e);
}
function jE(e, t) {
  return e.isEmpty() ? jp : Lm(e.toJSON(), t);
}
function Lm(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && la(r[0]) && (!r[0].children || r[0].children.length === 0))
    return jp;
  if (r.some(IC)) {
    Vo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Dm(r), i = ur(n, t);
  return i ? { type: yr, version: mr, content: i } : void 0;
}
function VE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), ze({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function WE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return ze({
    type: Gt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function HE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Gh(r, a, c), ze({
    type: Gt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function GE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Gh(t, o, a), ze({
    type: _t.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function JE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !el(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(D) && (t[0] = a.slice(1));
  }
  return ze({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function YE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return ze({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function XE(e, t) {
  const { unknownAttributes: r } = e;
  return ze({ type: Cg, ...r, content: t });
}
function QE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return ze({ type: vg, marker: r, ...n, content: t });
}
function ZE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return ze({
    type: Eg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function eA(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function tA(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return ze({
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
  return ze({
    type: t,
    marker: r === "" ? void 0 : r,
    ...ng({ sid: n, eid: i, ...s }, o)
  });
}
function rA(e) {
  return e.text;
}
function nA(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return ze({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function iA(e) {
  const { marker: t } = e;
  return {
    type: Oo,
    marker: t === "" ? void 0 : t
  };
}
function Zf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function sA(e, t, r, n, i) {
  const s = br.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = Pi({
      type: s,
      marker: wi,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = Pi({
      type: s,
      marker: Gn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = Pi({
      type: s,
      marker: Gn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Pi({
      type: s,
      marker: wi
    });
    i.push(l);
  }
  (!n || !vh(n)) && t.forEach((l) => {
    const d = Pi({
      type: s,
      marker: wi,
      eid: l
    });
    i.push(d);
  });
}
function ur(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, p = a, h = a, g = a, y = a;
    switch (a.type) {
      case jt.getType():
        i.push(
          VE(
            l,
            ur(l.children, t)
          )
        );
        break;
      case Kr.getType():
        i.push(WE(a));
        break;
      case Gt.getType():
        i.push(
          HE(
            d,
            ur(d.children, t)
          )
        );
        break;
      case Dt.getType():
      case _t.getType():
        i.push(GE(a));
        break;
      case Me.getType():
        i.push(
          JE(
            u,
            ur(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case pt.getType():
        i.push(
          YE(
            f,
            ur(f.children, t)
          )
        );
        break;
      case ci.getType():
        i.push(
          XE(
            a,
            ur(a.children, t)
          )
        );
        break;
      case Ji.getType():
        i.push(
          QE(
            a,
            ur(a.children, t)
          )
        );
        break;
      case Yi.getType():
        i.push(
          ZE(
            a,
            ur(a.children, t)
          )
        );
        break;
      case Le.getType(): {
        const k = ur(
          p.children,
          t,
          p.caller
        );
        i.push(
          tA(
            p,
            el(t) && p.category === void 0 ? eA(k) : k
          )
        );
        break;
      }
      case en.getType():
      case Zr.getType():
      case gr.getType():
      case Qp.getType():
      case jr.getType():
        break;
      case dt.getType():
        if (s = ur(
          g.children,
          t,
          r,
          n
        ), s) {
          const k = g.typedIDs[hn];
          if (k)
            sA(s, k, o, e[c + 1], i), o = k;
          else {
            const b = s.shift();
            b && (typeof b == "string" ? Zf(i, b) : i.push(b)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case br.getType():
        i.push(Pi(a));
        break;
      case et.getType():
        if (h.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !js(h.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        h.text !== D && !h.text.startsWith(Il) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        h[Ks]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || h.text !== Wt(r))) {
          let k = rA(h);
          el(t) && (n && k.startsWith(D) && (k = k.slice(1)), k = KE(zE(k))), Zf(i, k);
        }
        break;
      case ai.getType():
        i.push(
          nA(
            y,
            ur(y.children, t)
          )
        );
        break;
      case nn.getType():
        i.push(iA(a));
        break;
      case Xi.getType():
        Vo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Vo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Dm(e) {
  const t = e.findIndex((r) => la(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Dm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Co = {
  initialize: BE,
  deserializeEditorState: jE
}, oA = /^sd\d*$/, aA = /* @__PURE__ */ new Set([
  ...Object.entries(Pc).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === x.Paragraph && !oA.test(e)
  ).map(([e]) => e),
  "qa"
]);
function cA(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (jl(i) || Vh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!aT(i)) {
      t && Wo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Wl(i) && aA.has(i.marker) && !Wo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Um(i.children, t).forEach((s) => {
      const o = lA(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = uA(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Um(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Fm(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (vh(i)) {
      const s = Um(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(ep(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [ep(i, c.nodes)] });
      });
      return;
    }
    t && Wo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function ep(e, t) {
  return { ...e, children: t };
}
function Fm(e) {
  return qg(e) && e.number !== "";
}
function Wo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Fm(r) || Wo(r)) : !1;
}
function lA(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function uA(e) {
  return {
    type: Ro,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Og
  };
}
const tp = Bm([]), dA = {
  type: Qp.getType(),
  version: 1
};
let zu = [], ce, ti, zm, Lt;
function fA(e, t) {
  zu = [], gA(e), mA(t);
}
function pA(e = 0) {
}
function hA(e, t) {
  ce = t ?? Ta();
  let r;
  return e ? (e.type !== yr && Lt?.warn(`This USJ type '${e.type}' didn't match the expected type '${yr}'.`), e.version !== mr && Lt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${mr}'.`
  ), e.content.length > 0 ? (r = il(Hr(e.content)), ws(ce) && (r = cA(r, Lt))) : r = [tp]) : r = [tp], zm?.(zu), {
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
function gA(e) {
  e && (ti = e), e?.addMissingComments && (zm = e.addMissingComments);
}
function mA(e) {
  e && (Lt = e);
}
function Km() {
  return Qs(ce);
}
function yA(e, t) {
  let { marker: r } = e;
  r !== _s && Lt?.warn(`Unexpected book marker '${r}'!`), r = r ?? _s;
  const { code: n } = e;
  (!n || !jt.isValidBookCode(n)) && Lt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  ce?.markerMode === "editable" || ce?.markerMode === "visible" ? i.push(
    qt("marker", Ve(r) + " " + n + D)
  ) : ce?.hasGutterParaMarkers && i.push(qt("marker", Ve(r) + D, !0)), i.push(...t);
  const s = Ye(e, Fx);
  return ze({
    type: jt.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Nh
  });
}
function bA(e) {
  let { marker: t } = e;
  t !== Po && Lt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Po;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ye(e, zx);
  let a;
  ce?.markerMode === "visible" && (a = !0);
  const c = [
    Et(ir(t, r) ?? "")
  ];
  return ce?.markerMode === "editable" && qA(i, s, c), ce?.markerMode === "editable" ? ze({
    type: Gt.getType(),
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
    version: Oh
  }) : ze({
    type: Kr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Lh
  });
}
function kA(e) {
  let { marker: t } = e;
  t !== No && Lt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? No;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (w_(ce) ?? Dt).getType(), c = ce?.markerMode === "editable" ? Kh : $g;
  let l, d;
  ce?.markerMode === "editable" ? l = ir(t, r) : ce?.markerMode === "visible" && (d = !0);
  const u = Ye(e, eT);
  return ze({
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
function xA(e, t = [], r = !1) {
  let { marker: n } = e;
  Me.isValidMarker(n, ti?.extraValidMarkers) || Lt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ce?.markerMode === "editable") {
    const [a] = t;
    Li(a) ? a.text = D + a.text : a && t.unshift(Et(D));
  }
  t.length === 0 && t.push(Et(or)), tl(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ye(e, jx);
  return s || wA(n, o, i), s || rl(e.marker ?? "", i, !1, r), ze({
    type: Me.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Ih
  });
}
function Bm(e) {
  return {
    type: kn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Fh
  };
}
function TA(e, t = []) {
  let { marker: r } = e;
  pt.isValidMarker(r, ti?.extraValidMarkers) || Lt?.warn(`Unexpected para marker '${r}'!`), r = r ?? nr;
  const n = [];
  if (ui(ce) && (ce?.markerMode === "editable" ? n.push(
    vt(r),
    Et(D, zr, "token")
  ) : (ce?.markerMode === "visible" || ce?.hasGutterParaMarkers) && n.push(
    qt(
      "marker",
      Ve(r) + D,
      ce?.hasGutterParaMarkers
    )
  )), n.push(...t), Km()) {
    const s = n.find(
      (o) => !Xl(o) && !(Li(o) && o.text === D)
    );
    Li(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = Ye(e, Qx);
  return ze({
    type: pt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: zh
  });
}
function Ku() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function CA(e, t = []) {
  const r = Ye(e, nC);
  return ze({
    ...Ku(),
    type: ci.getType(),
    unknownAttributes: r,
    children: t,
    version: Sg
  });
}
function SA(e, t = []) {
  const r = Ye(e, oC), n = e.marker ?? Dc, i = [];
  return ce?.markerMode === "editable" ? i.push(
    vt(n),
    Et(D, zr, "token")
  ) : (ce?.markerMode === "visible" || ce?.hasGutterParaMarkers) && i.push(
    qt(
      "marker",
      Ve(n) + D,
      ce?.hasGutterParaMarkers
    )
  ), i.push(...t), ze({
    ...Ku(),
    type: Ji.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Mg
  });
}
function _A(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Uc, a = gg(o, i) ?? o;
  ce?.markerMode === "editable" ? s.push(
    vt(a),
    Et(D, zr, "token")
  ) : (ce?.markerMode === "visible" || ce?.hasGutterParaMarkers) && s.push(
    qt(
      "marker",
      Ve(a) + D,
      ce?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Ye(
    e,
    cC
  );
  return ze({
    ...Ku(),
    type: Yi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Ag
  });
}
function vA(e, t) {
  const r = pT(t);
  let n = () => {
  };
  return ti?.noteCallerOnClick && (n = ti.noteCallerOnClick), ze({
    type: gr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: zg
  });
}
function MA(e, t) {
  let { marker: r } = e;
  Le.isValidMarker(r, ti?.extraValidMarkers) || Lt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Ul;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : yu(ce?.noteMode), a = Ye(e, nx), c = ce?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  ce?.markerMode === "editable" ? (l = vt(r, "opening", !1, c), s || (d = vt(r, "closing"))) : ce?.markerMode === "visible" && (l = qt("marker", Ve(r) + " "), s || (d = qt("marker", ct(r))));
  const u = [];
  let f;
  if (l && u.push(l), ce?.markerMode === "editable" && !o)
    f = Et(Wt(i), void 0, c), u.push(f), $A(n, u), u.push(...t);
  else {
    const p = Et(D, zr, "token");
    f = vA(i, t), u.push(f, p, ...t.flatMap(EA(p)));
  }
  return d && u.push(d), ze({
    type: Le.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: yh
  });
}
function EA(e) {
  return (t) => Sh(t) ? [t] : [t, e];
}
function AA(e) {
  let { marker: t } = e;
  (!t || !br.isValidMarker(t, ti?.extraValidMarkers)) && Lt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ye(e, Dl), s = ig(e);
  return ze({
    type: br.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: hh
  });
}
function rp(e, t = []) {
  return {
    type: dt.getType(),
    typedIDs: { [hn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function PA(e, t) {
  const { marker: r } = e, n = e.type, i = Ye(e, qx), s = [];
  if (ce?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = mg(
      n,
      r,
      i
    );
    o && s.push(qt("marker", o)), a && s.push(qt("attribute", a)), s.push(...t), c && s.push(qt("attribute", c)), l && s.push(qt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Li(o) && (o.mode = "token");
  }), ze({
    type: ai.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Eh
  });
}
function NA(e) {
  return {
    type: nn.getType(),
    marker: e,
    text: ms(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ce?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: xg
  };
}
function vt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: jr.getType(),
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
function Et(e, t = void 0, r = "normal") {
  const n = {
    type: et.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Ks] = { textType: t }), n;
}
function qt(e, t, r = !1) {
  const n = {
    type: Zr.getType(),
    text: t,
    textType: e,
    version: Ch
  };
  return r && (n[Ks] = { [Kl.key]: !0 }), n;
}
function Rs(e, t) {
  return {
    type: en.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Ah
  };
}
function tl(e, t, r = !1) {
  ce?.markerMode === "editable" ? t.push(vt(e, "opening", r)) : ce?.markerMode === "visible" && t.push(qt("marker", Ve(e, r)));
}
function rl(e, t, r = !1, n = !1) {
  ce?.markerMode === "editable" ? r ? t.push(vt("", "selfClosing")) : t.push(vt(e, "closing", n)) : ce?.markerMode === "visible" && t.push(
    qt(
      "marker",
      r ? ct("") : ct(e, n)
    )
  );
}
function wA(e, t, r) {
  if (ce?.markerMode !== "editable" || !t) return;
  const n = Nr(t, aa(e));
  n && r.push(Et(n, "attribute"));
}
function np(e, t) {
  if (e.type !== "ms" || ce?.markerMode !== "editable" && ce?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ye(e, Dl), o = sg(
    n,
    i,
    s,
    ig(e)
  ), a = Nr(o, ca(r ?? ""));
  if (!a) return;
  const c = D + a;
  ce?.markerMode === "editable" ? t.push(Et(c, "attribute")) : t.push(qt("attribute", c));
}
function OA(e, t) {
  const r = e.marker ?? "";
  if (ce?.markerMode === "editable") {
    const n = [];
    tl(r, n), np(e, n), rl(r, n, !0), t.push(Rs("milestone", n));
  } else
    tl(r, t), np(e, t), rl(r, t, !0);
}
function ip(e, t, r) {
  t !== void 0 && r.push(
    Rs(e, [
      vt(e, "opening"),
      Et(D + t, "attribute"),
      vt(e, "closing")
    ])
  );
}
function RA(e, t) {
  ce?.markerMode === "editable" && (ip("va", e.altnumber, t), ip("vp", e.pubnumber, t));
}
function $A(e, t) {
  e !== void 0 && t.push(
    Rs("cat", [
      vt("cat", "opening"),
      Et(D + e, "attribute"),
      vt("cat", "closing")
    ])
  );
}
function qA(e, t, r) {
  e !== void 0 && r.push(
    Rs("ca", [
      vt("ca", "opening"),
      Et(D + e, "attribute"),
      vt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Rs("cp", [
      vt("cp", "opening"),
      Et(D + t, "attribute")
    ])
  );
}
function sp(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function IA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function op(e, t) {
  t.marker === Gn && t.sid !== void 0 && e.push(t.sid), t.marker === wi && t.eid !== void 0 && IA(e, t.eid);
}
function nl(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [rp(o, [...n])] : o, c = e[i];
  op(n, c);
  const l = nl(
    e.slice(i + 1, s),
    sp(t, i + 1),
    c.marker === Gn,
    n
  ), d = rp(l, [...n]), u = e[s];
  op(n, u);
  const f = nl(
    e.slice(s + 1),
    sp(t, s + 1),
    u.marker === Gn,
    n
  );
  return [...a, d, ...f];
}
function Hr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(Et(Km() ? FE(i) : i));
    else if (!i.type)
      Lt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case jt.getType():
          n.push(yA(i, Hr(i.content)));
          break;
        case Gt.getType():
          n.push(bA(i));
          break;
        case _t.getType():
          ce?.hasSpacing || n.push(dA), n.push(kA(i)), RA(i, n);
          break;
        case Me.getType():
          n.push(
            xA(i, Hr(i.content, !0), t)
          );
          break;
        case pt.getType():
          n.push(TA(i, Hr(i.content)));
          break;
        case Le.getType():
          n.push(MA(i, Hr(i.content)));
          break;
        case br.getType():
          gh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && zu?.push(i.sid)), n.push(AA(i)), OA(i, n);
          break;
        case nn.getType():
          n.push(NA(i.marker ?? ""));
          break;
        case Cg:
          n.push(CA(i, Hr(i.content)));
          break;
        case vg:
          n.push(SA(i, Hr(i.content)));
          break;
        case Eg:
          n.push(_A(i, Hr(i.content)));
          break;
        default:
          Lt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(PA(i, Hr(i.content)));
      }
  }), nl(n, r);
}
function il(e) {
  const t = e.findIndex(
    (n) => jl(n) || Vh(n) || Wl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    sC(n)
  );
  if (t >= 0) {
    const n = il(e.slice(0, t)), i = e[t], s = il(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || qg(n)))
    return [Bm(e)];
  return e;
}
const kr = {
  initialize: fA,
  reset: pA,
  serializeEditorState: hA
};
function jm(e) {
  if (e && !O(e)) {
    if (v(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = jm(t);
        if (r) return r;
      }
  }
}
function LA() {
  const e = N();
  if (!A(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((v(t) && !O(t) ? Zn(t) : void 0) && v(t)) {
      const i = Ne(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Di(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = jm(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(D) ? D : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Vm(e)) {
    if (!Zn(t)) continue;
    Di(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(D) && r.setTextContent(n.slice(D.length));
  }
  return !0;
}
function Vm(e) {
  const [t, r] = Al(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || O(a) || le(a, pe) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Wm(e) {
  let t = e;
  for (; F(t) || Pe(t); ) t = t.getParent();
  return t;
}
function Hm(e) {
  const t = Wm(e.getParent());
  return ft(t) ? t : void 0;
}
function DA() {
  const e = N();
  if (!A(e)) return !1;
  const t = e.focus.getNode();
  return Zn(t) ? !!Hm(t) : !1;
}
function Gm(e) {
  const t = Ne(""), r = e.getNode(), n = e.offset;
  if (v(r))
    if (n <= 0) r.insertBefore(t);
    else if (n >= r.getTextContentSize()) r.insertAfter(t);
    else {
      const [, o] = r.splitText(n);
      o.insertBefore(t);
    }
  else {
    const o = e.getNode(), a = L(o) ? o : o.getParent(), c = L(o) ? o.getChildAtIndex(n) : o;
    if (c) c.insertBefore(t);
    else if (a) a.append(t);
    else return { parent: void 0, moving: [] };
  }
  for (let o = t.getParent(); ; o = t.getParent())
    if (F(o)) Di(t, { renderGlyphs: !0 });
    else if (!Pe(o) || !UA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function UA(e, t) {
  const r = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (r.length === 0)
    return t.insertAfter(e), !0;
  const n = N();
  if (!A(n)) return !1;
  const i = t.insertNewAfter(n, !1);
  return i ? (i.append(...r), t.insertAfter(e), !0) : !1;
}
function Jm(e) {
  const t = e.anchor.getNode();
  if (O(t) && !ou(t, e.anchor.offset)) {
    const r = t.getParent();
    if (F(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = N();
      return A(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function Ym() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = Jm(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!v(r) || O(r) || !Zn(r)) return !1;
  const n = Hm(r);
  if (!n) return !1;
  const { moving: i } = Gm(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Pe(o); ) o = o.getFirstChild() ?? void 0;
  return F(o) ? ga(o) : s.select(0, 0), !0;
}
const Xm = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Wh(Ke().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = Zh(e), r = du(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = gT(0, o);
        const a = JC(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || mT(c) && Yl(parseInt(n, 10), c);
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
function sl(e, t) {
  return Le.isValidMarker(e, t) || !!Xm[e] || pt.isValidMarker(e, t) || Me.isValidMarker(e, t);
}
function FA(e, t) {
  return Me.isNoteContentMarker(e) ? !1 : Me.isValidMarker(e, t);
}
function Qm(e, t, r, n, i, s) {
  const o = Bg(
    e,
    void 0,
    void 0,
    t,
    n ?? Ta(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function ol(e, t, r, n, i, s, o) {
  if (Le.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = Qm(
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
  const a = WA(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = N();
      A(d) && (au(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = tf(u, kr, r), h = ja(p);
      if (A(d)) {
        const g = d.anchor.getNode(), y = g.getParent(), k = Zn(g), b = d.anchor.key === d.focus.key;
        if (F(h) && k && b && !mc(h, o))
          BA(
            d,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (F(h) && !b && !mc(h, o) && jA(d))
          VA(d, h, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          HA(
            d,
            () => ja(p)
          );
        else if (L(h) && !h.isInline()) {
          const T = d.insertParagraph();
          if (T) {
            const E = T.getChildren();
            h.append(...E), T.replace(h), ft(h) && di(h) || h.selectStart();
          }
        } else if (F(h) && v(g) && !O(g) && F(g.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        mc(h, o)) {
          const T = g.getParent();
          if (F(T)) {
            const E = d.anchor.offset;
            if (E === 0) g.insertBefore(h);
            else if (E >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [w] = g.splitText(E);
              w.insertAfter(h);
            }
            h.getChildren().forEach((w) => {
              O(w) && w.setNested(!0);
            });
            const S = h.getChildren().find((w) => v(w) && !O(w));
            S && v(S) ? S.select(
              S.getTextContentSize(),
              S.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (v(g) && !O(g) && d.isCollapsed() && (B(y) || F(y) && B(y.getParent()))) {
          const T = F(y) ? y : void 0, E = T ? zA(g, d.anchor.offset) : [];
          let w = (T ?? g).insertAfter(h);
          if (Cr(h)) {
            const R = {
              ...r || Ta(),
              markerMode: "hidden"
            }, K = tf(
              u,
              kr,
              R
            ), z = ja(K);
            w = w.insertAfter(z);
          }
          if (E.length > 0 && T) {
            const R = Ho(T).append(...E);
            w.insertAfter(R), T.isEmpty() && T.remove();
          } else v(w.getNextSibling()) || w.insertAfter(Ne(D));
          L(w) && w.selectEnd();
        } else if (d.insertNodes([h]), nP(h), f) {
          const T = Jp();
          T.add(h.getKey()), Or(T);
        } else if (F(h)) {
          const T = h.getChildren().find((E) => v(E) && !O(E));
          T && v(T) ? T.select(
            T.getTextContentSize(),
            T.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const T = h.getNextSibling();
          T ? T.selectStart() : h.selectStart();
        }
      } else
        d?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function zA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function mc(e, t) {
  return ((t ?? $o).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function KA(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(xt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function BA(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && F(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !v(r)) {
    const o = e.anchor.offset;
    if (v(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else v(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = ji(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Di(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !O(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function jA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || F(n)) continue;
    if (!v(n) || n.getType() !== et.getType() || le(n, pe) === "attribute") return !1;
    const i = hC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Zn(n) && (r = !0);
  }
  return r;
}
function VA(e, t, r) {
  const n = Vm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Zn(a)) return;
    Di(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(D) && c.setTextContent(l.slice(D.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(D) || i.setTextContent(D + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !O(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function WA(e, t) {
  let r = Xm[e];
  return r || (pt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: pt.getType(), marker: e, content: [] }] })
  } : Me.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: Me.getType(), marker: e };
      return (Me.isValidFootnoteMarker(e) || Me.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function HA(e, t) {
  const r = e.getNodes(), [n, i] = ji(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = Zm(
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
    s || (s = t(), c.insertBefore(s), l = !0, F(s) && s.getChildren().some((u) => O(u) && u.getMarkerSyntax() === "opening") && KA(s, F(s.getParent()))), JA(c, s, l);
  }), (v(s) || L(s)) && s.selectEnd();
}
function ji(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Bu(e) {
  return Pe(e) || B(e) || B(e.getParent());
}
function Zm(e, t, r, n, i) {
  if (!Bu(e)) {
    if (v(e))
      return GA(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function GA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function JA(e, t, r) {
  if (v(t)) {
    const n = al(e, t);
    t.setTextContent(n), e.remove();
  } else if (L(t)) {
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
    al(e, t), r && F(t) && t.getChildren().some((s) => O(s)) && v(e) && !O(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function al(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    lu(n), v(n) || t.insertBefore(Ne(" "));
  }
  return r;
}
function ey(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = ri(d, t);
    if (!f) return !1;
    const p = v(d) ? d.getTextContentSize() : 0;
    if (ap(f, r), v(d) && d.isAttached()) {
      const h = d.getTextContentSize(), g = Math.max(p - h, 0), y = Math.max(0, Math.min(u - g, h)), k = N();
      A(k) && k.setTextNodeRange(d, y, d, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ji(e);
  if (!Vu(n, t, s, o)) return !1;
  const a = ju(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = ri(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = iy(u, a);
    f && (ap(f, r), l = !0);
  }), sy(a, i), l;
}
function ap(e, t) {
  e.getChildren().forEach((n) => {
    Mt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === or) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    v(n) && i.startsWith(D) && n.setTextContent(i.slice(D.length));
  }), Mc(e);
}
function ju(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Zm(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    v(o) && n.push(o);
  }), n;
}
function ri(e, t) {
  let r = e, n;
  for (; r && !ft(r); ) {
    if (B(r)) return;
    !n && F(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function ty(e) {
  const t = qe(
    e,
    (r) => B(r) || ft(r)
  );
  return B(t);
}
function ry(e) {
  return e.filter(
    (t) => !Bu(t) && (v(t) || L(t) && t.isInline())
  );
}
function YA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || Bu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function XA(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !ny(n, r)
  );
}
function Vu(e, t, r, n, i) {
  const s = ry(e), o = YA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ri(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !XA(l, s, o);
  });
}
function ny(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Mt(r));
}
function iy(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (L(d) && t.some((u) => d.isParentOf(u))) {
      if (!ny(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Mt(n[s - 1]) && (s -= 1), o < n.length - 1 && Mt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Ho(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Ho(e).append(...c)), e;
}
function Ho(e) {
  return bk(e);
}
function sy(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!A(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function QA(e, t, r) {
  if (e.isCollapsed()) {
    const l = ri(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Fd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ji(e);
  if (!Vu(n, r, i, s, t)) return !1;
  const o = ju(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = ri(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = iy(d, o);
    u && (Fd(u, t), c = !0);
  }), c;
}
function ZA(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ji(e);
  if (!!!i?.some(
    (y) => Vu(s, y, o, a)
  ) && !eP(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = N();
    A(k) && ey(k, y, n) && (l = !0);
  });
  const d = N();
  if (!A(d)) return l;
  const u = d.isBackward(), [f, p] = ji(d), h = ju(
    d.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (y) => !ty(y) && !ri(y, t)
  );
  return g.length > 0 && (tP(g).forEach((y) => rP(y, t)), l = !0), sy(h, u), l;
}
function eP(e, t) {
  return ry(e).some(
    (r) => !ty(r) && !ri(r, t)
  );
}
function tP(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function rP(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => F(a) && a.getMarker() === t
  ), s = i ? Ho(i) : Yr(t);
  e[0].insertBefore(s), s.append(...e), i === r || al(e[0], s);
}
function nP(e) {
  Te(e) && (lu(e.getPreviousSibling()), Lg(e.getNextSibling()));
}
const oy = {
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
}, cp = "psc-active-text", go = "psc-empty-text";
function iP({ viewOptions: e }) {
  const [t] = de(), r = ee(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return W(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(cp), r.current = o, o && t.getElementByKey(o)?.classList.add(cp);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        sa,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${go}`);
          if (!c) return !1;
          const l = Wi(c);
          if (!Te(l)) return !1;
          const d = l.getParent();
          if (!L(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        kt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = yc(), f = sP(), p = [], h = [];
          return Ke().getChildren().forEach((g) => {
            if (!L(g)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = aP(g);
            p.push(...y), h.push(...k);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(go) : t.getElementByKey(u)?.classList.add(go);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(go));
      }),
      t.registerCommand(
        Rl,
        () => (i(void 0), !1),
        kt
      ),
      t.registerCommand(
        Zp,
        () => {
          const o = t.getEditorState().read(yc);
          return o !== r.current && i(o), !1;
        },
        kt
      )
    ];
    return i(t.getEditorState().read(yc)), Ie(...s);
  }, [t, n]), null;
}
function yc() {
  return oP(N() ?? void 0)?.getKey();
}
function sP() {
  const e = N();
  if (!A(e)) return;
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
function oP(e) {
  if (A(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function aP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Te(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Te(c)) break;
      if (!(Bt(c) || O(c)) && c.getTextContent().replaceAll(vo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function cl(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function ay(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !Wp(e, n, i);
}
function cy(e, t) {
  return e.length <= t ? e : e.slice(0, Wu(e, t));
}
function Wu(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of vk(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const cP = 16;
function lP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (b) => t ? Hu(b, t).length : b.getTextContent().length;
  r ??= n;
  const i = N();
  if (!A(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Go(s), l = Go(o), d = i.getNodes(), u = new Map(d.map((b) => [b.getKey(), fP(b)])), f = d.length > 0 ? u.get(d[0].getKey()) : void 0, p = f && uP(s, f) ? f : void 0, h = (b) => {
    const T = b > 0 ? dP(d, u, p, c, l, b, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), T ? i.focus.set(T.node.getKey(), T.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!T;
  };
  let g = Math.min(e, n(i));
  if (h(g) && r(i) <= e) return !0;
  let y = 0, k = 0;
  g -= 1;
  for (let b = 0; b < cP && y <= g; b++) {
    const T = Math.floor((y + g) / 2);
    h(T) && r(i) <= e ? (k = T, y = T + 1) : g = T - 1;
  }
  return h(k), !0;
}
function ll(e) {
  return e.isToken() || Xs(e) || Fe(e.getParent());
}
function uP(e, t) {
  const r = L(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && pr(r.getKey(), 0, "text").isBefore(e);
}
function dP(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, d, u;
  const f = /* @__PURE__ */ new Map(), p = (g) => {
    const y = t.get(g.getKey());
    return y && r?.is(y) ? void 0 : y;
  }, h = (g) => {
    let y = u ? u.endBefore : g;
    for (; ; ) {
      const k = pP(y, e, n);
      if (!k || !y || k.node.is(y.node)) return k;
      const b = p(k.node);
      if (!b || b.is(p(y.node))) return k;
      y = f.get(b.getKey());
    }
  };
  for (let g = 0; g <= a; g++) {
    const y = e[g], k = p(y);
    if (u && !u.node.is(k) && (d && u.node.isParentOf(d.node) && (d = u.endBefore), u = void 0), k && !u && (u = { node: k, endBefore: d }, f.set(k.getKey(), d)), !o?.(y)) {
      if (L(y) && !y.isInline()) {
        if (!l) {
          if (c + 1 > s) return h(d);
          c += 1;
        }
        l = !y.isEmpty();
        continue;
      }
      if (l = !1, v(y)) {
        const b = g === 0 ? n : 0, T = g === a ? i : y.getTextContentSize(), E = T - b, S = ll(y);
        if (S && c + E > s) return h(d);
        if (!S && c + E >= s) {
          const w = Wu(y.getTextContent(), b + (s - c));
          return h({ node: y, offset: Math.max(b, w) });
        }
        c += E, d = { node: y, offset: T };
      } else if (si(y) || ii(y)) {
        const b = y.getTextContentSize();
        if (c + b > s) return h(d);
        c += b;
      }
    }
  }
  return h(d);
}
function fP(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (B(r) || Nu(r)) && (t = r);
  return t;
}
function pP(e, t, r) {
  if (!e) return e;
  const n = qe(e.node, (y) => L(y) && !y.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((y) => y.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let y = o; y <= a; y++)
    l.push(c.length), c += i[y].getTextContent();
  const d = l[s - o], u = d + e.offset, f = Wu(c, u);
  if (f === u) return e;
  const p = (y) => t[0]?.is(y) ?? !1;
  if (ll(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= d) {
    const y = f - d;
    return y >= (p(e.node) ? r : 0) ? { ...e, offset: y } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((y) => y.is(h))) return;
  if (ll(h))
    return { node: h, offset: p(h) ? r : 0 };
  const g = f - l[0];
  return g >= (p(h) ? r : 0) ? { node: h, offset: g } : void 0;
}
function Hu(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, d) => {
    if (!t(l)) {
      if (L(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, v(l)) {
        const u = l.getTextContent();
        o ? a += u : a += u.slice(
          d === 0 ? Go(i) : 0,
          d === n ? Go(s) : u.length
        );
      } else (si(l) || ii(l)) && (d !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function ul(e) {
  const t = e.getParent();
  return !!t && qe(t, (r) => B(r) && !!r.getIsCollapsed()) !== null;
}
function ly(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    Tt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), L(i)) for (const { node: s } of oi(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function hP(e) {
  return e.getNodes().some(
    (t) => si(t) || B(t) || Te(t) || tt(t) || Nu(t)
  );
}
function Go(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Sr = String.raw`\w-`, uy = "a-z0-9", gP = `[a-z][${uy}]*`, mP = new RegExp(
  String.raw`^\\(\+?[${Sr}]+)[ \u00A0]$`
), dy = new RegExp(String.raw`^\\(\+?[${Sr}]+)$`), yP = new RegExp(String.raw`^\\\+?[${Sr}]*\*$`), bP = new RegExp(
  String.raw`^\\(\+?[${Sr}]+)(?:[ \u00A0]|$)`
), kP = new RegExp(
  String.raw`^\\(\+?)([${Sr}]+)`
), xP = new RegExp(
  String.raw`\\\+?[${Sr}]+(?:\\?\*|[ \u00A0])`
), TP = new RegExp(
  String.raw`\\\+?[${Sr}]*$`
), CP = new RegExp(
  String.raw`^\\(${gP})( |$)`
), SP = new RegExp(
  String.raw`\\[${uy}+*]*$`,
  "i"
);
function fy(e) {
  const t = e.getParent();
  if (!B(t) || t.getIsCollapsed() !== !1 || !uh(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!O(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const Jo = "usfm:", py = "usfmopen", hy = "usfmclosed";
function _P(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const vP = new RegExp(
  [Jo, py, hy].map(_P).join("|")
), MP = "\uFEFF", EP = /^usfm_(.+)$/;
function AP(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function PP(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function NP(e) {
  return e.startsWith(Jo) ? PP(e.slice(Jo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function gy(e) {
  for (const t of e.classList) {
    const r = EP.exec(t);
    if (r) return r[1];
  }
}
function wP(e) {
  const t = gy(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function OP(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(Jo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(py) && !n.contains(hy)) && gy(r) !== void 0)
      return !0;
  }
  return !1;
}
function my(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(NP(e.nodeValue ?? ""));
    return;
  }
  if (!AP(e)) return;
  const { classList: n } = e, i = (d) => e.childNodes.forEach((u) => my(u, d, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? wP(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function RP(e) {
  if (!vP.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !OP(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => my(n, !1, r)), r.join("").replaceAll(MP, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function $P(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = le(e, pe);
  if (r === "attribute" || r === zr || fy(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Fe(o) || ve(o)) return;
  const n = t.startsWith(D) && F(e.getParent()), i = n ? t.slice(1) : t, s = (n ? D : "") + i.replace(/ (?=[ \u00A0])/g, D).replace(new RegExp("(?<=\\u00A0) ", "g"), D);
  s !== t && e.setTextContent(s);
}
function qP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function IP(e, t) {
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
function dl(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? RP(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(qP(s)) : ""),
    isInternal: IP(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const lp = String.raw`\\(?:\+?[${Sr}]+\*?|\*)`, LP = new RegExp(
  String.raw`(?<=${lp})\u00A0|\u00A0(?=${lp})`,
  "g"
);
function Gu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(LP, " ").replaceAll(D, "~");
}
const yy = new RegExp(
  String.raw`\\c(?![${Sr}])[ \u00A0]*[^\s\\]*`,
  "g"
), by = new RegExp(String.raw`\\id(?![${Sr}])[^\n\\]*`, "g"), DP = new RegExp(
  String.raw`^(?:${yy.source}|${by.source})`
);
function Ju(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(yy, "").replace(by, "");
    return DP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function fl(e) {
  if (v(e) && le(e, pe) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (je(t)) return !0;
  return !1;
}
function UP(e) {
  return fl(e.anchor.getNode()) || fl(e.focus.getNode());
}
function FP(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && fl(t.getNode());
}
function zP(e, t) {
  const n = FP(e) ? t : Gu(Ju(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function KP(e, t = !1, r = () => {
}) {
  const n = dl(e, gn()._config.namespace);
  if (!n) return !1;
  const i = N(), s = A(i) && UP(i);
  if (!s && n.isInternal || t && A(i) && Fn(i))
    return !1;
  const { text: o } = n;
  if (!o || !A(i)) return !1;
  if (e?.preventDefault(), s)
    return zP(i, o), !0;
  const a = Gu(Ju(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = gn();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(Hn, void 0), d === "") return;
    const f = N();
    A(f) && f.insertText(d);
  }), !0;
}
function BP(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return B(t) ? !Tt(e.getPreviousSibling()) : !1;
}
function jP(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const r = e.getParent();
  if (!B(r) || !Tt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function VP(e) {
  const t = e.getParent();
  return (B(t) ? t.getCaller() : void 0) || xs;
}
function WP(e) {
  const t = e.getParent();
  return !t || Tn(t) === void 0;
}
function Yu(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Al(e);
  let l = "", d = !0;
  for (const u of t) {
    if (L(u) && !u.isInline()) {
      !d && WP(u) && (l += `
`), d = !u.isEmpty();
      continue;
    }
    if (d = !1, Tt(u))
      (u !== n || !e.isCollapsed()) && (l += (u === r ? "" : " ") + VP(u));
    else if (v(u)) {
      let f = u.getTextContent();
      u === r ? u === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : u === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += BP(u) ? "" : f.replaceAll(D, " ") + jP(u, u === n);
    } else (si(u) || ii(u)) && (u !== n || !e.isCollapsed()) && (l += u.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function ky(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function HP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => Ee(r) || Fe(r)
    )
  );
}
function GP(e) {
  const t = N();
  if (!A(t) || t.isCollapsed()) return;
  const r = Yu(t), n = {
    "text/plain": r,
    "text/html": ky(r)
  };
  if (Zs() || HP(t)) return n;
  const i = Ek(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function up(e, t, r, n) {
  const i = N();
  if (!A(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !gm();
  const s = GP(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], xy(e, t, i, s, r, n)) : !1;
}
function xy(e, t, r, n, i, s) {
  const o = cl(s);
  if (o !== void 0 && ay(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), pl(e, t, { "text/plain": cy(a, o) })) : pl(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function pl(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || Mk(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function hl(e, t) {
  const r = mu();
  if (!r?.end) return;
  const n = JP(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = xa(r);
        return i ? Yu(i) : void 0;
      },
      { editor: n.editor }
    );
}
const bc = /* @__PURE__ */ new WeakMap();
function JP(e, t) {
  const r = e.getEditorState();
  if (bc.has(r)) {
    const i = bc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = YP(r, t);
  return bc.set(r, n), n;
}
function YP(e, t) {
  const r = Eu(_u);
  if (!r) return;
  const n = Co.deserializeEditorState(e, t);
  if (!n) return;
  const i = kk({
    namespace: "markers-view-copy",
    nodes: [dt, ...Tu],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    kr.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function XP({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = de();
  return W(() => {
    const n = (i, s) => {
      const o = N();
      if (!A(o) || o.isCollapsed()) return !1;
      const a = hl(r, e);
      return a === void 0 ? !1 : xy(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": ky(a) },
        s,
        t
      );
    };
    return Ie(
      r.registerCommand(Wn, (i) => n(i, !1), Re),
      r.registerCommand(sr, (i) => n(i, !0), Re)
    );
  }, [r, e, t]), null;
}
const dp = /* @__PURE__ */ new WeakMap();
function QP({
  limit: e,
  viewOptions: t
}) {
  const [r] = de(), n = ee(cl(e)), i = ee(t), s = ee(!1), o = ee(void 0);
  return W(() => {
    n.current = cl(e), i.current = t, o.current?.();
  }, [e, t]), W(() => {
    let a, c;
    const l = (k) => {
      const b = n.current;
      if (b === void 0) return;
      const T = dp.get(k);
      if (k.defaultPrevented && T === void 0) return;
      const E = r.getRootElement();
      if (!E) return;
      const S = E.ownerDocument.getSelection();
      if (!S || !t1(S, E)) return;
      k.preventDefault();
      const w = cy(
        T ?? S.toString().replaceAll(D, " "),
        b
      );
      dp.set(k, w);
      const R = k.clipboardData;
      if (R) {
        if (!w) {
          T !== void 0 && R.clearData();
          return;
        }
        R.setData("text/plain", w);
      }
    }, d = (k) => {
      n.current !== void 0 && Tk(k, "a", { ctrlKey: !yn, metaKey: yn }) && (n1(c?.activeElement, r.getRootElement()) || k.preventDefault());
    }, u = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", d, !0), c = void 0;
    }, f = () => {
      const k = n.current === void 0 ? void 0 : a;
      k !== c && (u(), c = k, c?.addEventListener("copy", l), c?.addEventListener("keydown", d, !0));
    };
    o.current = f;
    const p = (k) => (k?.preventDefault(), !0), h = (k) => {
      const b = n.current;
      if (b === void 0 || (s.current = !1, ay(r, k))) return !1;
      if (b <= 0) return p(k);
      const T = N();
      if (ia(T))
        return T.getTextContent().length + ly(T.getNodes()) <= b ? !1 : p(k);
      if (!A(T) || T.isCollapsed()) return !1;
      const E = ZP(r, i.current);
      return E.$size(T) <= b ? !1 : (lP(b, E.options), T.isCollapsed() ? p(k) : (r.isEditable() || Yp(() => e1(r)), s.current = !0, !1));
    }, g = (k, b) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const T = N();
      if (!A(T) || T.isCollapsed()) return !1;
      const E = b && r.isEditable() && !hP(T);
      return pl(
        k && typeof k == "object" && "clipboardData" in k ? k : null,
        r,
        { "text/plain": Hu(T, ul) },
        E ? () => T.removeText() : void 0
      );
    }, y = Ie(
      r.registerCommand(Wn, h, he),
      r.registerCommand(sr, h, he),
      r.registerCommand(
        Wn,
        (k) => g(k, !1),
        Rr
      ),
      r.registerCommand(
        sr,
        (k) => g(k, !0),
        Rr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        xk,
        (k) => n.current === void 0 ? !1 : (k?.preventDefault(), !0),
        he
      ),
      r.registerRootListener((k) => {
        a = k?.ownerDocument ?? void 0, f();
      })
    );
    return () => {
      y(), o.current = void 0, u();
    };
  }, [r]), null;
}
function ZP(e, t) {
  if (Qs(t)) {
    const n = (i) => Yu(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && hl(e, r) !== void 0) {
    const n = (i) => hl(e, r)?.length ?? Hu(i, ul).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + ly(n.getNodes()),
    options: { $isHidden: ul }
  };
}
function e1(e) {
  e.getEditorState().read(() => {
    const t = N(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!A(t) || !r) return;
    const n = fp(e, t.anchor), i = fp(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function fp(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = Ck(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = L(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function t1(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const r1 = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function n1(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? r1.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const i1 = /^\+/;
function Xu(e, t) {
  const r = t.replace(i1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Ty(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Cy(e, t) {
  return Ty(e, t) !== void 0;
}
function gl(e, t) {
  const r = Ty(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Yo(e, t, r) {
  const n = L(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function s1(e, t, r, n, i) {
  const s = Xu(n, t);
  if (!s) {
    Yo(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Yo(e, "invalid", i);
}
function Ri(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (F(s)) {
      const o = s.getMarker();
      i || s1(s, o, t, r, n), Ri(s, t, r, n, i || o === "xq");
    } else if (Te(s)) {
      if (i) continue;
      const o = Xu(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else B(s) ? Ri(s, s.getMarker(), r, n, i) : ve(s) || L(s) && Ri(s, t, r, n, i);
}
function o1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Xu(e, a);
    if (!c) {
      Yo(o, "unknown", r), gl(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    gl(n, l) || Yo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ke().getChildren())
    ve(o) || (Ee(o) ? (i(o, o.getMarker()), s(o) && Ri(o, void 0, e, r, !1)) : tt(o) ? i(o, o.getMarker()) : fe(o) ? (i(o, o.getMarker()), s(o) && Ri(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && Ri(o, "p", e, r, !1));
  return r;
}
function a1(e) {
  return !!e?.includes("(basic)");
}
function c1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Sy(e, t) {
  return !e.startsWith("zpa") && e !== "c" && sl(e, t);
}
function Qu(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function _y(e, t) {
  const r = [];
  for (const n of t) {
    const i = Qu(e, n);
    i && gl(r, i);
  }
  return r;
}
function So(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: c1(e.description),
    isBasic: a1(e.description)
  };
}
function l1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function ml(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : l1(e.marker, t.marker);
}
function yl(e, t, r) {
  if (t.noteMarker) return [];
  const n = _y(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Sy(i.marker, r)
  ).filter((i) => {
    const s = Qu(e, i.marker);
    return s !== void 0 && Cy(n, s);
  }).map((i) => So(i, "paragraph")).sort(ml);
}
function u1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Sy(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => So(c, "character")).sort(ml);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => So(c, "character")),
    ...a.map((c) => So(c, "note"))
  ].sort(ml);
}
function d1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function f1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function p1(e, t, r) {
  return [
    ...d1(e, t.openCharMarkers),
    ...u1(e, t, r)
  ].sort(f1);
}
function h1(e, t, r) {
  if (t.source === "paragraph") return yl(e, t, r);
  const n = p1(e, t, r);
  return n.length > 0 ? n : yl(e, t, r);
}
function g1(e, t, r) {
  const n = yl(e, t, r), i = _y(e, t.previousParaMarkers), s = Qu(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Cy(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const mt = "￼";
function vy(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== mt ? e.slice(1) : e;
}
function pp(e) {
  return Xl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function My(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = kr.serializeEditorState(
    {
      type: yr,
      version: mr,
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
  for (; pp(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Wt(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && pp(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function Ey(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function Ay(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([d]) => d !== "closed")
  ), o = kr.serializeEditorState(
    {
      type: yr,
      version: mr,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((d) => d.type === Le.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function Py(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = kr.serializeEditorState(
    { type: yr, version: mr, content: [s, ...r] },
    n
  ).root.children;
  if (!jl(o)) return { failure: "shape" };
  const c = Xh(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function mo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function ls(e, t) {
  TP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += mt;
}
function rr(e) {
  return e.replaceAll(D, " ");
}
function m1(e, t, r = !1) {
  if (Qs(t)) return rr(e);
  if (e === D) return " ";
  const n = r && e.startsWith(D), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(D, "~");
}
function bs(e) {
  const t = e.getTextContent();
  return Br(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Zu(e, t) {
  const r = e[t];
  if (!it(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = fa(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Ny(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function ed(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = vs(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function td(e) {
  return !!e.getUnknownAttributes();
}
function va(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && zl(e);
}
function rd(e, t) {
  return it(e) ? !va(e.getMarker(), t) : B(e) || ve(e) ? !0 : Be(e) ? td(e) : F(e) ? wy(e, t) : !1;
}
function wy(e, t) {
  if (MT(e)) return !0;
  const r = e.getMarker();
  return px(r) || t(r) !== void 0 || y1(e) && !b1(e) ? !1 : !k1(e);
}
function y1(e) {
  const t = e.getParent();
  return t !== null && Vt(t) !== void 0;
}
function b1(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function k1(e) {
  const t = e.getChildren().filter((i) => O(i) && i.getMarker() === e.getMarker()).filter(O);
  if (t.some((i) => !tn(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const er = "", tr = "";
function hp(e) {
  return e.flatMap((t) => je(t) ? t.getChildren() : [t]);
}
function ps(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (it(s)) {
      const o = Zu(e, i);
      va(s.getMarker(), r) && Ny(o) ? (t.push(
        er,
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
      ), ps(hp(o), t, r), t.push(tr)) : t.push(mt), i += o.length;
    } else if (Be(s)) {
      const o = ed(e, i);
      td(s) ? t.push(mt) : (t.push(
        er,
        "verse",
        rr(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ps(hp(o), t, r), t.push(tr)), i += o.length;
    } else O(s) ? t.push(er, "marker", rr(s.getTextContent()), tr) : sn(s) ? t.push(er, "unmatched", rr(s.getTextContent()), tr) : rd(s, r) ? t.push(mt) : ii(s) ? t.push(" ") : v(s) ? t.push(
      rr(
        n ? vy(bs(s)) : bs(s)
      )
    ) : F(s) ? (t.push(er, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ps(s.getChildren(), t, r, !0), t.push(tr)) : L(s) ? (t.push(er, s.getType()), ps(s.getChildren(), t, r), t.push(tr)) : t.push(mt);
  }
}
function Lr(e, t) {
  const r = [];
  return ps(e, r, t), r.join("");
}
function Dr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Vi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function nd(e) {
  return e.type ?? "";
}
function Oy(e, t, r) {
  return t === "closing" ? ct(e, r) : t === "selfClosing" ? ct("") : Ve(e, r);
}
function kc(e, t) {
  const r = e[t];
  if (!(!r || nd(r) !== "attribute-run"))
    return Dr(r) ?? [];
}
function Ur(e, t) {
  const r = [];
  return hs(e, r, t), r.join("");
}
function hs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = nd(s);
    if (o === "ms") {
      const l = s, d = kc(e, i + 1);
      d && va(l.marker ?? "", r) ? (t.push(
        er,
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
      ), hs(d, t, r), t.push(tr), i += 1) : t.push(mt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(mt);
        continue;
      }
      t.push(
        er,
        "verse",
        rr(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = kc(e, i + 1 + d);
      for (; u; )
        hs(u, t, r), d++, u = kc(e, i + 1 + d);
      t.push(tr), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        er,
        "marker",
        rr(
          Oy(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        tr
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(er, "char", JSON.stringify(l.unknownAttributes ?? null)), hs(Dr(s) ?? [], t, r, !0), t.push(tr);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(mt);
      continue;
    }
    if (o === "unmatched") {
      t.push(er, "unmatched", rr(Vi(s) ?? "")), t.push(tr);
      continue;
    }
    const a = Vi(s);
    if (a !== void 0) {
      t.push(rr(n ? vy(a) : a));
      continue;
    }
    const c = Dr(s);
    c ? (t.push(er, o), hs(c, t, r), t.push(tr)) : t.push(mt);
  }
}
function Sn(e) {
  let t = 0;
  for (const r of e) {
    const n = Dr(r);
    if (n) {
      t += Sn(n);
      continue;
    }
    const i = Vi(r);
    if (i !== void 0)
      for (const s of i) s === mt && t++;
  }
  return t;
}
function $s(e, t, r, n, i) {
  _n(e.getChildren(), t, r, n, i);
}
function _n(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      mo(t, a, rr(a.getTextContent()));
    else if (it(a)) {
      s();
      const c = Zu(e, o);
      va(a.getMarker(), r) && Ny(c) ? _n(c, t, r, n) : ls(t, [a, ...c]), o += c.length;
    } else if (B(a) || ve(a))
      s(), ls(t, [a]);
    else if (Be(a)) {
      s();
      const c = ed(e, o);
      td(a) ? ls(t, [a, ...c]) : (mo(t, a, rr(bs(a))), _n(c, t, r, n)), o += c.length;
    } else if (F(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && wy(a, r) ? ls(t, [a]) : $s(a, t, r, n, { pending: !0 });
    else if (ii(a))
      s(), mo(t, a, " ");
    else if (v(a)) {
      const c = Br(a) || le(a, pe) === "attribute", l = s() && !c;
      mo(
        t,
        a,
        c ? rr(bs(a)) : m1(bs(a), n, l)
      );
    } else L(a) ? $s(a, t, r, n, i) : (s(), ls(t, [a]));
  }
}
function Ry(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (ve(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return $s(e, i, t, r), i;
}
function Ma(e, t, r, n) {
  for (const i of t) {
    const s = Ry(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Ea(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(mt);
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
function qs(e, t = []) {
  for (const r of e)
    Be(r) ? t.push(r) : L(r) && qs(r.getChildren(), t);
  return t;
}
function Aa(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === mt && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function on(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === mt && t++;
    else r.content && (t += on(r.content));
  return t;
}
function x1(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), L(s) && $s(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const Is = /\s/;
function $y(e) {
  return e.filter(Pa).length;
}
function Pa(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return v(t) && !O(t) && le(t, pe) === "attribute";
}
function T1(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return O(t) || Pa(e);
}
function gp(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Pa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      Is.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function C1(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !L(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = oe(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function Na(e, t, r, n) {
  const { key: i, offset: s } = C1(
    e,
    t,
    r,
    n
  ), o = gp(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !T1(a) ? gp(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: $y(t.spans) };
}
function xc(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function S1(e) {
  const t = oe(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return F(r) ? (r.selectNext(0, 0), !0) : !1;
}
function _1(e) {
  const t = oe(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Be(t) ? ed(r, n) : it(t) ? Zu(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function qy(e, t, r) {
  const { text: n, spans: i } = e, s = $y(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && !xc(u);
    if (!(o && Pa(u))) {
      if (d) {
        if (!p) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let h = 0; h < f; h++) {
        const g = n[u.start + h];
        if (c === 0 && (l === 0 || !Is.test(g))) {
          if (p) {
            a = { key: u.key, offset: h };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? Is.test(g) || c-- : l--;
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
    if (u && xc(u) && S1(u) || u?.isSentinel && _1(u)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !xc(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const u = oe(a.key);
    if (u && v(u)) {
      u.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function Iy(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    qy(
      x1(e, n, i, s),
      t,
      e
    );
  }
}
function Ly(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    v1(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  _n(e, o, n, i), qy({ text: o.text, spans: o.spans }, t, e);
}
function v1(e, t) {
  const r = e.find(L);
  if (r && rd(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function Dy(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Ma(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (A(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Na(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = Fr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (on(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = kr.serializeEditorState(
    { type: yr, version: mr, content: l },
    r
  );
  if (Ur(d.root.children, n) === Lr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((g) => Kn(g));
  if (Aa(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = qs(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  u.forEach((g) => p.insertBefore(g)), Ea(u, s.sentinels), e.forEach((g) => g.remove());
  const h = qs(u);
  for (let g = 0; g < f.length && g < h.length; g++)
    h[g].getNumber() === f[g].number && h[g].setSid(f[g].sid);
  return Iy(
    u,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((g) => g.getKey()))
  ), !0;
}
function Uy(e) {
  if (e.getIsCollapsed() !== !1 || !Le.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!O(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(Tt(n) || v(n) && n.getTextContent() === Wt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!O(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function Fy(e, t, r) {
  const n = Uy(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return _n(n, i, t, r), { out: i, contentNodes: n };
}
function zy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(mt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function M1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Fy(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = N();
  if (A(d)) {
    for (let w = d.anchor.getNode(); w; w = w.getParent())
      if (e.is(w)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Na(
      [e],
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const u = Fr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (on(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = u;
  if (u.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], h = zy(p), g = Ey(e, p);
  if (g)
    return E1(
      e,
      g,
      h,
      o.sentinels,
      t,
      l
    );
  const y = My(e, p, h, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Sn(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== h;
  if (k && e.setCategory(h), Ur(y.children, n) === Lr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const b = y.children.map((w) => Kn(w));
  if (Aa(b) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const T = a[0];
  if (T)
    b.forEach((w) => T.insertBefore(w));
  else {
    const w = e.getChildren().find((R) => O(R) && R.getMarkerSyntax() === "closing");
    b.forEach((R) => w ? w.insertBefore(R) : e.append(R));
  }
  Ea(b, o.sentinels);
  const E = new Set(o.sentinels.flat().map((w) => w.getKey()));
  a.forEach((w) => {
    E.has(w.getKey()) || w.remove();
  });
  const S = Uy(e) ?? b;
  return Ly(
    S,
    c,
    l,
    n,
    r,
    E
  ), !0;
}
function E1(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = Ay(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || Sn(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const d = l.map((h) => Kn(h)), [u] = d;
  if (!B(u) || Aa(d) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const h of d)
    f.insertAfter(h), f = h;
  Ea(d, i);
  const p = e.getChildren();
  return e.append(...u.getChildren()), p.forEach((h) => h.remove()), e.setCaller(u.getCaller()).setCategory(u.getCategory()).setUnknownAttributes(u.getUnknownAttributes()).setIsCollapsed(u.getIsCollapsed()), u.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Vc(e, a) : Vg(e, { isContentChange: !0 })), !0;
}
function Ky(e) {
  const t = e.getChildren();
  return Jl(t[0]) ? t.slice(1) : t;
}
function id(e, t, r) {
  const n = Ky(e), i = { text: "", spans: [], sentinels: [] };
  return _n(n, i, t, r), { out: i, contentNodes: n };
}
const A1 = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${nr}(?=[\\s\\u200B\\\\|]|$)`
);
function By(e, t) {
  const r = Fr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === nr && !A1.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function jy(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = id(e, i, n);
  if (!Ma(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, d = !1;
  const u = N();
  if (A(u)) {
    for (let R = u.anchor.getNode(); R; R = R.getParent())
      if (c.some((K) => K.is(R))) {
        d = !0;
        break;
      }
    u.isCollapsed() && (l = Na(
      c,
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const f = By(o.text, i);
  if (on(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = Py(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const h = [...p.children, ...p.followingBlocks];
  if (Sn(h) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && Ur(p.followingBlocks, i) === Lr(r, i) && Ur(p.children, i) === Lr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map((R) => Kn(R)), y = p.followingBlocks.map((R) => Kn(R)), k = [...g, ...y];
  if (Aa(k) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const b = qs([...a, ...r]).map((R) => ({
    number: R.getNumber(),
    sid: R.getSid()
  })), T = a[0];
  T ? g.forEach((R) => T.insertBefore(R)) : g.forEach((R) => e.append(R)), y.reduce((R, K) => R.insertAfter(K), e), Ea(k, o.sentinels);
  const E = new Set(o.sentinels.flat().map((R) => R.getKey()));
  a.forEach((R) => {
    E.has(R.getKey()) || R.remove();
  }), r.forEach((R) => R.remove());
  const S = [...Ky(e), ...y], w = qs(S);
  for (let R = 0; R < b.length && R < w.length; R++)
    w[R].getNumber() === b[R].number && w[R].setSid(b[R].sid);
  return Ly(
    S,
    l,
    d,
    i,
    n,
    E
  ), !0;
}
const Vy = /* @__PURE__ */ new Set(["ca", "cp"]), sd = "cp";
function Wy(e) {
  if (!Ir(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if ($s(e, t, $r, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Fr(r, { getMarker: $r }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === sd)
  );
}
function wa(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (F(r) && Vy.has(r.getMarker()) || Wy(r)) {
      t.push(r);
      continue;
    }
    fe(r) && r.getMarker() === sd && t.push(r);
    break;
  }
  return t;
}
function P1(e) {
  const t = (n) => F(n) && Vy.has(n.getMarker()) || Wy(n);
  if (t(e) || fe(e) && e.getMarker() === sd)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Fe(n)) return n;
      if (!t(n)) return;
    }
}
function Hy(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = wa(e);
  if (n.some((s) => fe(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (_n(e.getChildren(), i, t, r), _n(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function N1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...wa(e)], o = Hy(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = N();
  if (A(l)) {
    for (let h = l.anchor.getNode(); h; h = h.getParent())
      if (s.some((g) => g.is(h))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Na(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const d = Fr(o.text, { getMarker: n }), [u] = d;
  if (d.length === 0 || typeof u != "object" || u.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (on(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (u.sid = e.getSid());
  const f = kr.serializeEditorState(
    { type: yr, version: mr, content: d },
    r
  );
  if (Ur(f.root.children, n) === Lr(s, n)) {
    let h = !1;
    return e.getNumber() !== (u.number ?? "") && (e.setNumber(u.number ?? ""), h = !0), e.getAltnumber() !== u.altnumber && (e.setAltnumber(u.altnumber), h = !0), e.getPubnumber() !== u.pubnumber && (e.setPubnumber(u.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => Kn(h));
  return Fe(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), Iy(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Ls(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (ve(n)) return;
    !t && (B(n) || fe(n) || Fe(n) || Ee(n)) && (t = n), wl(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? P1(r) : void 0) ?? t;
}
function fr(e, t) {
  const r = Ls(e);
  return r ? B(r) ? M1(r, t) : Fe(r) ? N1(r, t) : Ee(r) ? jy(r, t) : Dy([r], t) : !1;
}
const w1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function mp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !w1.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function _o(e, t) {
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
          t.push(`\\${n}`), mp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), _o(r.content, t), mp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), _o(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), _o(r.content, t);
      }
    }
}
function yp(e, t, r) {
  const n = Ls(e);
  if (!we(n)) return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ee(n) ? id(n, t, r).out : Ry(n, t, r);
  if (!o) return !1;
  const a = Fr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    Is.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  _o(a, l);
  for (const d of l.join("").replaceAll(D, "~")) {
    if (Is.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function od(e, t) {
  return Gy(e, t, x.Paragraph);
}
function O1(e, t) {
  return Gy(e, t, x.Character);
}
function Gy(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !(Le.isValidMarker(n) || zl(n));
}
function R1(e) {
  return [xt(e), Hs()];
}
function ad(e) {
  ar(e, 2);
}
function $1(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Oa(e) {
  const t = $1(e);
  e.splice(0, 0, R1(e.getMarker())), t && ad(e);
}
function Xo(e, t) {
  e.setMarker(t), Oa(e), ad(e);
}
function q1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Br(n)) {
    if (v(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(D), Rt(n, pe, zr), n.setMode("token");
      return;
    }
    if (tg(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Hs());
  }
}
function bp(e, t, r) {
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
function ks(e) {
  for (let t = e; t; t = t.getParent())
    if (fe(t)) return t;
}
function I1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = ks(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = ks(r.getNode())?.is(s) ?? !1, a = ks(n.getNode())?.is(s) ?? !1;
    return !(o && !bp(r, s, "start") || a && !bp(n, s, "end"));
  });
}
function bl(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!A(r) || r.isCollapsed()))
    for (const n of I1(r)) t.add(n.getKey());
}
function L1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!A(r) || !r.isCollapsed()) return;
  const n = ks(r.focus.getNode());
  n && t.add(n.getKey());
}
function D1(e) {
  const t = N();
  !A(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (bl(e), t.removeText());
}
const U1 = new RegExp(
  String.raw`^\\\+?([${Sr}]+)(?:[ \u00A0]|$)`
);
function F1(e, t) {
  const r = U1.exec(e.getTextContent());
  return !!r && od(r[1], t);
}
function z1(e, t) {
  if (!ui(t.viewOptions)) return;
  if (Mt(e.getFirstChild())) {
    q1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (F1(e, t.getMarker)) return;
    Oa(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => fe(o) && !o.is(e))) {
      Xo(e, nr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (we(r)) {
    const n = e.getChildren().filter((a) => !Br(a)), i = N();
    let s = !1;
    if (A(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ks(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && ar(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Xo(e, nr);
}
function K1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Nr(t, aa(e.getMarker()));
  return r === "" ? void 0 : r;
}
function Jy(e) {
  const t = e.getChildren().filter((s) => !O(s) && le(s, pe) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith(D) && r.setTextContent(r.getTextContent().slice(1));
  const n = K1(e);
  n && t.push(Ne(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function B1(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && L(t) ? r = t.getChildAtIndex(e.offset) : O(t) && e.offset === 0 ? r = t : v(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), F(r) && (r = r.getFirstChild()), !O(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!F(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function j1() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = B1(e.anchor), r = t?.getParent();
  if (!t || !F(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), Gi(n) && n.getTextContent().startsWith(D) && n.setTextContent(` ${n.getTextContent().slice(D.length)}`), Jy(r), v(n) && n.isAttached() && n.select(0, 0), !0;
}
function V1(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => v(c) && !O(c) && c.getTextContent() === Wt(s)
    ), a = oi(e).some(({ node: c }) => O(c));
    if (!o && !a) return;
    r.forEach((c) => {
      O(c) || (v(c) && c.getTextContent() === Wt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => O(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function W1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    Jy(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && fr(e, t);
}
function Yy(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && ui(r)) {
    Xo(e, t);
    return;
  }
  tm(e, t);
}
function Xy() {
  const e = N();
  if (!A(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Qy(e);
    return t !== "removed" ? t : (kl(), "handled");
  }
  return kl() ? "handled" : "declined";
}
function H1(e, t) {
  if (!t) return e;
  const r = CP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function kp(e, t) {
  const r = N();
  if (!A(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Zy())
      return "declined";
  } else {
    const s = Qy(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => H1(s, t)
  );
  xp(n ?? "");
  for (const s of i)
    kl(), xp(s);
  return "handled";
}
function G1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Wi(n);
  if (!i) return !1;
  const s = Vt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Qy(e) {
  const t = Vt(e.anchor.getNode()), r = Vt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), J1() ? "removed" : "needs-plain-split");
}
function xp(e) {
  if (e === "") return;
  const t = N();
  A(t) && t.insertText(e);
}
function J1() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = Vt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function Zy() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Vt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function kl() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Zy();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Yr("fp", { closed: "false" });
  i.append(xt("fp"));
  const s = v(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Di(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [d] = l;
    d && (yT(d), i.append(d));
  }
  return i.getChildren().every(O) && i.append(Ne(or)), eb(i), !0;
}
function eb(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (v(t)) {
    const r = pa(t);
    t.select(r, r);
    return;
  }
  if (L(t)) {
    eb(t);
    return;
  }
  e.selectEnd();
}
function Y1(e) {
  const t = [];
  let r = e;
  for (; r; )
    F(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function X1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ke().getChildren()) {
    if (t && n.is(t)) {
      Ee(n) && r.push(n.getMarker());
      break;
    }
    (Ee(n) || tt(n) || fe(n)) && r.push(n.getMarker());
  }
  return r;
}
function Q1(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function Z1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Mt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Br(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(Q1(i)) && r === 0 : !1;
}
function e0(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Mt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Br(i) && t.is(i) && r === 0;
}
function t0() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function r0() {
  const e = N();
  if (!A(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = qe(t, fe), s = i ? void 0 : qe(t, Ee), o = !n && !s && (!i || e0(i, t, r)) ? "paragraph" : "character", a = Vt(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: X1(t),
    openCharMarkers: Y1(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: ou(t, r),
    anchorRect: t0()
  };
}
function n0() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = SP.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function i0(e, t, r) {
  Yy(e, t, r), ad(e);
}
function s0(e, t, r) {
  const n = N();
  if (!A(n)) return;
  const i = n.focus.getNode(), s = qe(i, fe);
  if (t === "backslash" && s && Z1(s, i, n.focus.offset)) {
    i0(s, e, r);
    return;
  }
  xl(e, r);
}
function tb(e, t) {
  const r = e.getNode(), n = Wm(L(r) ? r : r.getParent());
  return t.is(n);
}
function o0(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !tb(e, t);
}
function Qo(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function a0(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!O(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!F(r)) return e;
  const n = r.getParent();
  return n ? pr(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function c0(e, t, r) {
  const n = N();
  if (!A(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!tb(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && o0(s, e)) return !1;
  const o = Jl(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (Qo(n.anchor, e, o), Qo(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = N();
  if (!A(a) || !a.isCollapsed()) return !1;
  const c = Jm(a);
  if (!c) return !1;
  const { parent: l, moving: d } = Gm(
    a0(c.anchor)
  );
  if (!e.is(l)) return !1;
  const u = d.filter((h) => !h.is(o)), f = qi(t);
  e.insertAfter(f), f.append(...u);
  const [p] = u;
  return F(p) ? ga(p) : f.select(0, 0), ui(r) && Oa(f), !0;
}
function l0(e, t) {
  const r = N();
  return !A(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function rb(e) {
  const t = N();
  return A(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function u0(e) {
  const t = qe(e.anchor.getNode(), Ee);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !Jl(r) || (Qo(e.anchor, t, r), Qo(e.focus, t, r));
}
function d0(e, t, r, n) {
  const i = N();
  if (A(i) ? u0(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && n0(), e.kind === "closeTag") {
    rb(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Xy() !== "declined") return;
  if (e.kind === "paragraph" && pt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    s0(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Le.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Qm(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  ol(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: gn(), reference: r });
}
function xl(e, t) {
  const r = N();
  if (!A(r)) return !1;
  au(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!qe(n, fe)) {
    const o = qe(n, Ee);
    if (o) return c0(o, e, t);
  }
  const i = ui(t);
  if (Ym()) {
    const o = N();
    if (!A(o)) return !1;
    const a = qe(o.anchor.getNode(), fe);
    return a ? (a.setMarker(e), i && Oa(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return fe(s) ? (i ? Xo(s, e) : s.setMarker(e), !0) : !1;
}
function f0() {
  const [e] = de();
  return W(() => e.registerCommand(eh, () => !0, kt), [e]), null;
}
function p0(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = bP.exec(e)?.[1];
  return r === void 0 ? !1 : !od(r, t);
}
function nb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !p0(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!fe(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!fe(i) && !Ee(i)))
    return [i, r];
}
function ib(e, t) {
  const r = nb(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return Ee(n) ? jy(n, t, [i]) : Dy([n, i], t);
}
function h0(e, t) {
  const r = N();
  A(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function sb(e) {
  const t = kP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function g0(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = sb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function m0(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (B(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (F(n)) {
      ga(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Tp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = sb(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  m0(e);
}
function Cp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function ob(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return fr(e, r);
  const n = g0(e), i = e.getParent();
  if (fe(i)) {
    if (!od(t, r.getMarker))
      return ib(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : fr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Cp(s, t) && Tp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (F(i) || B(i)) {
    const s = t.replace(/^\+/, "");
    if (!(F(i) ? O1(t, r.getMarker) : Le.isValidMarker(s)))
      return fr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return fr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (h0(c, ct(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Cp(a, s) && Tp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return fr(e, r);
}
function y0(e) {
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
function b0(e, t) {
  const r = e.getTextContent();
  if (tn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (je(e.getParent()) && Ql(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !y0(e)) {
    _T(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = mP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), ob(e, n[1], t);
      return;
    }
    if (yP.test(r)) {
      t.pendingKeys.delete(e.getKey()), fr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ct(e.getMarker(), e.getNested());
    if ((F(n) || B(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = N(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Ne(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function k0(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Tg(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function ab(e) {
  if (!uh(e)?.length)
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
const us = ab("v"), x0 = ab("c"), Sp = /^[ \u00A0]*$/;
function Tl(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === et.getType() && n.getMode() === "normal" && le(n, pe) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = Ne(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function T0(e, t) {
  const r = e.getTextContent(), n = ir("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (us.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = us.valueAndRest.exec(c);
    if (l && Sp.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (us.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = us.valueAndRest.exec(r);
  if (!s) {
    const c = us.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = N(), p = A(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(ir("v", d));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Tl(e, u, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), fr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Sp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(ir("v", o)), a && Tl(e, a, a.length);
}
const C0 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function S0(e, t) {
  if (!fy(e)) return !1;
  const r = e.getParent();
  if (!B(r)) return !1;
  const n = e.getTextContent();
  if (n === Wt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = C0.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = N(), c = A(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Wt(s)), o) {
    const l = n.length - o.length, d = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const u = Tl(e, o, d);
    u.isUnmergeable() || u.toggleUnmergeable();
  }
  return !0;
}
function _0(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const r = ir("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = x0.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function cb(e) {
  if (it(e)) {
    const { wrapper: t } = fa(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (B(e)) {
    const { wrapper: t } = Zl(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Fe(e)) {
    const t = [], r = ag(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = lg(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Be(e)) {
    const t = [], r = vs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = vs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function v0(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return cb(e).some((n) => r.is(n));
}
function M0(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && fe(e) && tg(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ms)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ys(l, e) && (i || v0(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of cb(e))
    l.remove(), n = !0;
  let s = !1;
  if (F(e)) {
    const l = PT(e);
    l !== void 0 && lx(l) && (pg(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Ms)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (_C(l, e)) {
        As(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Ng(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      ma(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function _p(e) {
  return v(e) && e.getType() === et.getType() && e.getMode() === "normal" && le(e, pe) !== "attribute";
}
function E0(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = oe(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && _p(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && _p(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function yo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = E0(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = oe(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (tn(c)) continue;
      const h = dy.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = ob(c, h[1], e) || n : r === "idle" && yp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : ib(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = fr(c, e) || n;
      continue;
    }
    const l = Qn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = M0(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && yp(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = fr(d, e) || n;
    }
  }
  return n;
}
function lb(e) {
  if (sn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (F(t)) return gs(t) !== void 0;
  return !1;
}
function A0(e) {
  const t = Qn(e);
  if (!t) return !1;
  const r = Xn(t.kind);
  return !ma(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function vp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ve(t) || _g(t)) return !0;
  return !1;
}
function P0(e, t) {
  const r = e.getTextContent(), n = le(e, pe), i = e.getParent();
  if (n !== "attribute" && Fe(i)) {
    r.replace(/^[ \u00A0]+/, "") === ir("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (S0(e, t)) return;
  if (n === "attribute") {
    A0(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && lb(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !vp(e))
      t.pendingKeys.add(e.getKey());
    else if (ug(e)) t.pendingKeys.add(e.getKey());
    else if (Fe(Ls(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      F(a) && hg(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (vp(e)) return;
  const s = N(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (xP.test(o)) {
    if (bx(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), fr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function N0(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Ng(e, t);
}
function w0(e) {
  const t = (r) => {
    if (O(r)) {
      tn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (sn(r)) {
      Tg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Ms)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ys(n, r) || N0(n, r)) && e.pendingKeys.add(r.getKey());
    if (Be(r)) {
      r.getTextContent() !== ir("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== et.getType() || le(r, pe) === "attribute") return;
      const n = r.getParent();
      if (Fe(n)) {
        r.getTextContent() !== ir("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && lb(r) || i.includes("//") || ug(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (F(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!ve(r)) {
      if (je(r) && r.getChildrenSize() === 0) {
        const n = Qn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Ke().getChildren().forEach(t);
}
const ub = $l(
  "COMMIT_PENDING_MARKERS_COMMAND"
), db = $l(
  "SET_MARKER_SETTLE_SUSPENDED_COMMAND"
);
function Tc(e) {
  const t = e();
  return St(Pl), St(ph), t;
}
const Mp = 8, Ep = 1e3, O0 = 1e3;
function Mi(e, t) {
  const r = Be(e) ? ["va", "vp"] : it(e) ? ["milestone"] : B(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    PC(Xn(n), e, t.pendingKeys);
}
function R0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(ql) || i.updateTags.has(Ts)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = oe(o);
        if (!c) continue;
        const l = Qn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = oe(o.getKey());
        c?.isAttached() && Xn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ie(
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
    e.registerMutationListener(et, r),
    e.registerMutationListener(jr, r),
    e.registerMutationListener(Zr, r),
    e.registerMutationListener(en, r)
  );
}
function Cl(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = N();
  return r ? t ? Uu(r, t) : A(r) && Fn(r) : !1;
}
function $0(e, t, r) {
  return Ie(
    e.registerCommand(
      zt,
      (n) => {
        if (Zs() || Cl(t)) return !1;
        const i = dl(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Gu(Ju(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = kp(o, t.getMarker);
          if (a === "declined" && G1(e) && (a = kp(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      he
    ),
    e.registerCommand(
      zt,
      (n) => {
        const i = dl(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !DA()) return !1;
        const o = N();
        return t.structureProtectionMode === "protected" && A(o) && Fn(o) ? !1 : (n?.preventDefault(), A(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Hn, void 0), a === "") return;
          const l = N();
          A(l) && l.insertText(a);
        }), !0);
      },
      Re
    ),
    e.registerCommand(
      zt,
      () => (t.splitExpected.current = !0, !1),
      kt
    )
  );
}
function q0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = de(), a = e?.markerMode === "editable", c = !!e && Qs(e), l = ee(void 0), d = ee(n), u = ee(!1), f = ee(s);
  return W(() => {
    d.current = n, f.current = s;
    const p = l.current;
    p && (e && (p.viewOptions = e), p.getMarker = t ?? $r, p.logger = r, p.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), W(() => {
    if (!a || !e) return;
    const p = {
      viewOptions: e,
      getMarker: t ?? $r,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = p;
    const h = xC(o, p.pendingKeys);
    let g, y = !1, k, b = !1, T = !1, E = 0;
    const S = () => E < Mp ? !1 : (p.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Mp} consecutive mutating passes; leaving ${p.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...p.pendingKeys].join(", ")}`
    ), !0), w = (q, J = "departure", j = !1) => {
      const V = j && !Iu(o), Q = V ? wr(o, dr) : void 0;
      o.update(
        () => {
          V && St(dr), E = Tc(
            () => yo(p, q, J)
          ) ? E + 1 : 0;
        },
        // DISCRETE whenever the tag is in play, the way `commitPendingMarkerEdits` does it:
        // Lexical commits inside the call only for a discrete update (`_flushSync`) and otherwise
        // schedules the commit on a microtask, so the release below would disarm before the commit
        // it exists to catch. A settle that only moves the selection — which an update running
        // outside an event can produce on its own, by re-reading the DOM selection — would then
        // leave the tag pending to ride onto the next commit, where it stops a later `focus()`
        // from focusing the editor.
        V ? { discrete: !0 } : void 0
      ), Q?.();
    };
    let R = !1, K;
    const z = () => {
      K !== void 0 && clearTimeout(K), K = void 0;
    }, ae = (q) => {
      u.current !== q && (u.current = q, R = !1, z(), q ? (Y !== void 0 && clearTimeout(Y), Y = void 0) : queueMicrotask(() => {
        T || u.current || (!y && !S() && w(g, "departure", !0), ge());
      }));
    };
    let Y;
    const ge = () => {
      if (Y !== void 0 && clearTimeout(Y), Y = void 0, T || p.pendingKeys.size === 0 || u.current) return;
      const q = d.current ?? O0;
      q < 0 || (Y = setTimeout(() => {
        Y = void 0, !(T || p.pendingKeys.size === 0) && (y || S() || w(void 0, "idle"));
      }, q));
    }, se = Ie(
      o.registerNodeTransform(jr, (q) => {
        if (o.isComposing()) return;
        b0(q, p);
        const J = Qn(q);
        J && (Be(J.owner) || B(J.owner) || Fe(J.owner) || it(J.owner) && fa(J.owner).wrapper === void 0) && Mi(J.owner, p);
      }),
      o.registerNodeTransform(_t, (q) => {
        o.isComposing() || (T0(q, p), Mi(q, p));
      }),
      o.registerNodeTransform(Gt, (q) => {
        o.isComposing() || (_0(q), q.isAttached() && Mi(q, p));
      }),
      o.registerNodeTransform(pt, (q) => {
        o.isComposing() || z1(q, p);
      }),
      o.registerNodeTransform(Me, (q) => {
        if (!o.isComposing()) {
          W1(q, p);
          for (const J of ["separator", "char"])
            q.isAttached() && Ys(Xn(J), q) && p.pendingKeys.add(q.getKey());
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
      o.registerNodeTransform(br, (q) => {
        o.isComposing() || Mi(q, p);
      }),
      o.registerNodeTransform(en, (q) => {
        if (o.isComposing()) return;
        const J = Qn(q);
        J && (it(J.owner) || Be(J.owner) || B(J.owner) || Fe(J.owner)) && Mi(J.owner, p);
      }),
      o.registerNodeTransform(Le, (q) => {
        o.isComposing() || (V1(q, p), Mi(q, p));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(nn, (q) => {
        o.isComposing() || k0(q, p);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(et, (q) => {
        o.isComposing() || P0(q, p);
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
        et,
        (q) => {
          o.getEditorState().read(() => {
            for (const [J, j] of q) {
              if (j === "destroyed") continue;
              const V = oe(J);
              !V || le(V, pe) !== "attribute" || je(V.getParent()) || o.getElementByKey(J)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      R0(o, p),
      ...c ? [
        o.registerNodeTransform(et, (q) => {
          o.isComposing() || $P(q);
        }),
        o.registerCommand(
          Wn,
          (q) => up(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            q && typeof q == "object" && "clipboardData" in q ? q : null,
            o,
            !1,
            f.current
          ),
          Re
        ),
        o.registerCommand(
          sr,
          (q) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            up(
              q && typeof q == "object" && "clipboardData" in q ? q : null,
              o,
              !0,
              f.current
            )
          ),
          Re
        ),
        o.registerCommand(
          zt,
          (q) => KP(
            // Same jsdom-safe duck-check as COPY above.
            q && typeof q == "object" && "clipboardData" in q ? q : null,
            p.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              p.splitExpected.current = !0;
            }
          ),
          Re
        )
      ] : [],
      o.registerCommand(
        sr,
        () => (!Cl(p) && !Zs() && bl(p), !1),
        he
      ),
      o.registerCommand(
        Vn,
        () => (o.isComposing() || D1(p), !1),
        Rr
      ),
      o.registerCommand(
        Pr,
        (q) => q || o.isComposing() ? !1 : j1(),
        Rr
      ),
      o.registerCommand(
        sa,
        () => (y = !1, E = 0, ge(), !1),
        kt
      ),
      o.registerCommand(
        Tr,
        (q) => (y = !1, E = 0, ge(), (q.key === "Backspace" || q.key === "Delete") && !Cl(p, Du(q)) && (bl(p), L1(p), queueMicrotask(() => {
          p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !q.ctrlKey || q.altKey || q.shiftKey || q.metaKey || q.key !== " " && q.code !== "Space" || !LA() ? !1 : (q.preventDefault(), !0)),
        Re
      ),
      o.registerCommand(
        Xp,
        (q) => {
          const J = Xy();
          J === "needs-plain-split" && o.dispatchCommand(Hn, void 0);
          const j = J !== "declined" || NC();
          return j && q?.preventDefault(), yo(p), j;
        },
        Re
      ),
      o.registerCommand(
        Hn,
        () => (p.splitExpected.current = !0, Ym()),
        Re
      ),
      $0(o, p, c),
      o.registerCommand(
        db,
        (q) => (ae(q), !0),
        // LOW, matching the sibling host-dispatched `COMMIT_PENDING_MARKERS_COMMAND` below. This
        // command has exactly one handler, so priority decides nothing; CRITICAL is reserved in
        // this file for handlers that must beat Lexical's built-ins on NATIVE commands, and using
        // it here would imply a priority contest that does not exist.
        kt
      ),
      o.registerCommand(
        Zp,
        () => (u.current && R && (z(), K = setTimeout(() => {
          if (K = void 0, T || !u.current) return;
          const q = o.getRootElement(), J = q?.ownerDocument, j = J?.activeElement;
          !q || !J?.hasFocus() || !j || !(q === j || q.contains(j)) || (p.logger?.warn(
            `[MarkerEdit] marker settling has been suspended while the editor held focus for ${Ep}ms, so the suspension was lifted and held edits settled. The host did not resume on one of its close paths.`
          ), ae(!1));
        }, Ep)), !1),
        kt
      ),
      o.registerCommand(
        ub,
        () => {
          if (y) return !0;
          const q = o.getRootElement(), J = q?.ownerDocument, j = !!q && !!J && J.hasFocus() && q.contains(J.activeElement);
          let V;
          if (j) {
            const Q = N();
            V = A(Q) ? Q.focus.key : g;
          }
          return Tc(() => yo(p, V)), !0;
        },
        kt
      ),
      o.registerCommand(
        Rl,
        () => {
          if (u.current)
            return R = !0, z(), !1;
          if (y) return !1;
          const q = N(), J = A(q) ? q.focus.key : g;
          return Tc(() => yo(p, J)), !1;
        },
        kt
      ),
      o.registerUpdateListener(({ editorState: q, tags: J }) => {
        p.splitExpected.current = !1, p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear(), p.rebuildAttempted.clear();
        const j = q.read(() => {
          const Q = N();
          return A(Q) ? Q.focus.key : void 0;
        }), V = k;
        if (j !== void 0 && (k = j), J.has(ql)) {
          p.pendingKeys.clear(), q.read(() => w0(p)), y = !0, j !== void 0 && (g = j);
          return;
        }
        if (J.has($t)) {
          j !== void 0 && j !== V && (y = !0);
          return;
        }
        y || (j !== void 0 && (g = j), ge(), !(b || j === void 0) && [...p.pendingKeys].some((Q) => Q !== j) && (b = !0, queueMicrotask(() => {
          b = !1, !T && (u.current || S() || w(g));
        })));
      })
    );
    return () => {
      T = !0, Y !== void 0 && clearTimeout(Y), Y = void 0, z(), h(), se(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const I0 = ["status_unknown", "status_invalid"], fb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, L0 = Object.values(fb);
function D0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = fb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Ap(e) {
  e.classList.remove(...I0), e.removeAttribute("aria-description"), L0.includes(e.title) && e.removeAttribute("title");
}
function U0(e, t, r, n) {
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
function F0(e) {
  const t = oe(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function z0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = de(), i = e?.markerMode === "editable";
  return W(() => {
    if (!i) return;
    const s = t ?? $o;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = o1(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || F0(f)) continue;
            const h = oe(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Ap(p);
        }
        for (const [f, p] of u) {
          const h = n.getElementByKey(f);
          h && D0(h, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          U0(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && Ap(d);
      }
    };
  }, [n, i, t, r]), null;
}
function pb(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Dr(o);
    a && L(s) && pb(s.getChildren(), a, r);
  }
}
function Ds(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = Dr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Vi(a);
      if (l === void 0 || !l.includes(mt)) continue;
      const d = l.split(mt), u = [];
      for (let f = 0; f < d.length; f++) {
        const p = d[f];
        if (f > 0 && u.push(...t[n++] ?? []), p.length > 0) {
          const h = {
            ...a,
            text: p
          };
          u.push(h);
        }
      }
      s.splice(o, 1, ...u), o += u.length - 1;
    }
  };
  return i(e), n;
}
function Zo(e, t, r) {
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
function hb(e, t) {
  const r = [];
  for (const n of e)
    rd(n, t) || ((fe(n) || F(n)) && r.push(n.getMarker()), L(n) && r.push(...hb(n.getChildren(), t)));
  return r;
}
function gb(e) {
  const t = [];
  for (const r of e) {
    const n = nd(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Dr(r);
    i && t.push(...gb(i));
  }
  return t;
}
function Us(e, t, r) {
  const n = hb(e, r), i = gb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function K0(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = N();
  let n, i;
  if (A(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = oe(t.key), i = t.offset;
  else
    return;
  if (!(!v(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Ra(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function B0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Ma(c, e, o, s)) return;
  const l = i ? Ra(c, i) : c.text, d = Fr(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (on(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = kr.serializeEditorState(
    { type: yr, version: mr, content: d },
    s
  ).root.children;
  if (Sn(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Zo(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ur(u, o) === Lr(e, o) && Us(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Ds(u, f);
  const h = mb(e), g = cd(u);
  for (let y = 0; y < h.length && y < g.length; y++)
    h[y].sid !== void 0 && g[y].number === h[y].number && (g[y].sid = h[y].sid);
  return u;
}
function mb(e) {
  const t = [], r = (n) => {
    Be(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function cd(e) {
  const t = [];
  for (const r of e) {
    jh(r) && t.push(r);
    const n = Dr(r);
    n && t.push(...cd(n));
  }
  return t;
}
function j0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Fy(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? Ra(l, i) : l.text, f = Fr(u, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (on(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], g = zy(h), y = e.getCategory() !== g, k = Ey(e, h);
  if (k) {
    const S = Ay(
      e,
      k.before,
      k.after,
      g,
      s
    );
    if (!S || Sn(S) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const w = Zo(l, t, n);
    return w ? (Ds(S, w), {
      rebuilt: void 0,
      contentNodes: d,
      category: g,
      categoryChanged: !1,
      closedAs: S
    }) : void 0;
  }
  const b = My(e, h, g, s);
  if (b.failure !== void 0) {
    b.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : b.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const T = b.children;
  if (Sn(T) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const E = Zo(l, t, n);
  if (!E) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ur(T, o) === Lr(d, o) && Us(d, T, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: d, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Ds(T, E), { rebuilt: T, contentNodes: d, category: g, categoryChanged: y };
}
function Pp(e) {
  return e.$?.textType;
}
function V0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Pp(e) === Pp(t);
}
function W0(e) {
  const t = [];
  for (const r of e) {
    const n = oe(r);
    n?.isAttached() && ve(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function H0(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!B(t)) return;
  const r = e.getTextContent();
  if (tn(e)) return;
  const n = dy.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Np(e, t) {
  const r = e;
  r.marker = t, r.text = Oy(t, r.markerSyntax, r.nested);
}
function G0(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Le.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Np(a.node, s);
  const c = n.getChildren().filter(O).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Np(l.node, s);
}
function J0(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: d } = id(e, a, o);
  if (d.length === 0 && s.length === 0 || !Ma(l, s, a, o)) return;
  const u = i ? Ra(l, i) : l.text, f = By(u, a);
  if (on(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = Py(
    e,
    f.lineContent,
    f.followingBlocks,
    o
  );
  if (p.failure !== void 0) {
    p.failure === "shape" && c?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: h, followingBlocks: g } = p;
  if (Sn([...h, ...g]) !== l.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const y = Zo(l, t, n);
  if (!y) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (g.length === s.length && Ur(g, a) === Lr(s, a) && Us(s, g, a) && Ur(h, a) === Lr(d, a) && Us(d, h, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const k = Ds(h, y);
  Ds(g, y, k);
  const b = mb([...d, ...s]), T = cd([...h, ...g]);
  for (let E = 0; E < b.length && E < T.length; E++)
    b[E].sid !== void 0 && T[E].number === b[E].number && (T[E].sid = b[E].sid);
  return { rebuilt: h, contentNodes: d, followingBlocks: g };
}
function Y0(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Hy(e, i, n);
  if (!o) return;
  const a = r ? Ra(o, r) : o.text, c = Fr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (on(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = kr.serializeEditorState(
    { type: yr, version: mr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...wa(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ur(d, i) === Lr(u, i) && Us(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function X0(e, t, r, n, i) {
  const s = K0(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (b) => {
    B(b) ? c.set(b.getKey(), b) : Fe(b) ? l.set(b.getKey(), b) : Ee(b) ? d.set(b.getKey(), b) : o.set(b.getKey(), [b]);
  };
  for (const b of t) {
    const T = oe(b);
    if (!T?.isAttached()) continue;
    const E = Ls(T);
    if (E) {
      if (p(E), O(T)) {
        const S = nb(T, r.getMarker);
        S && a.push(S);
      }
      if (B(E)) {
        const S = H0(T);
        S && f.set(E.getKey(), S);
      }
    }
  }
  const h = /* @__PURE__ */ new Set();
  for (const [b, T] of a)
    h.has(b.getKey()) || h.has(T.getKey()) || ([b, T].forEach((E) => {
      h.add(E.getKey()), o.delete(E.getKey());
    }), Ee(b) ? (d.set(b.getKey(), b), u.set(b.getKey(), [T])) : o.set(b.getKey(), [b, T]));
  if (s) {
    const b = Ls(s.node);
    b && !h.has(b.getKey()) && p(b);
  }
  const g = W0(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && d.size === 0 && g.length === 0)
    return;
  const y = new Set(g.map((b) => b.getKey())), k = /* @__PURE__ */ new Map();
  pb(Ke().getChildren(), e.root.children, k);
  for (const b of f.values()) G0(b, k);
  for (const b of c.values()) {
    const T = k.get(b.getKey()), E = T ? Dr(T.node) : void 0;
    if (!T || !E) continue;
    const S = j0(b, k, r, y, s);
    if (!S) continue;
    if (S.closedAs) {
      const K = T.siblings.indexOf(T.node);
      if (K < 0) continue;
      const [z, ...ae] = S.closedAs, Y = T.node;
      for (const ge of Object.keys(Y)) Reflect.deleteProperty(Y, ge);
      Object.assign(Y, z), T.siblings.splice(K + 1, 0, ...ae);
      continue;
    }
    if (S.categoryChanged) {
      const K = T.node;
      S.category === void 0 ? delete K.category : K.category = S.category;
    }
    if (!S.rebuilt) continue;
    const w = k.get(S.contentNodes[0].getKey());
    if (!w) continue;
    const R = E.indexOf(w.node);
    R < 0 || E.splice(R, S.contentNodes.length, ...S.rebuilt);
  }
  for (const b of o.values()) {
    const T = k.get(b[0].getKey());
    if (!T) continue;
    const E = B0(b, k, r, y, s);
    if (!E) continue;
    const S = T.siblings.indexOf(T.node);
    S < 0 || T.siblings.splice(S, b.length, ...E);
  }
  for (const b of d.values()) {
    const T = k.get(b.getKey()), E = T ? Dr(T.node) : void 0;
    if (!T || !E) continue;
    const S = u.get(b.getKey()) ?? [], w = J0(b, k, r, y, s, S);
    if (!w) continue;
    const R = w.contentNodes.at(0), K = R ? k.get(R.getKey()) : void 0;
    if (R && !K) continue;
    const z = K ? E.indexOf(K.node) : E.length, ae = T.siblings.indexOf(T.node);
    z < 0 || ae < 0 || (E.splice(z, w.contentNodes.length, ...w.rebuilt), T.siblings.splice(ae + 1, S.length, ...w.followingBlocks));
  }
  for (const b of l.values()) {
    const T = k.get(b.getKey());
    if (!T) continue;
    const E = 1 + wa(b).length, S = Y0(b, r, s);
    if (!S) continue;
    const w = T.siblings.indexOf(T.node);
    w < 0 || T.siblings.splice(w, E, ...S);
  }
  for (const b of g) {
    const T = k.get(b.getKey());
    if (!T) continue;
    const E = T.siblings.indexOf(T.node);
    if (E < 0) continue;
    T.siblings.splice(E, 1);
    const S = T.siblings[E - 1], w = T.siblings[E], R = S && Vi(S), K = w && Vi(w);
    S && w && R !== void 0 && K !== void 0 && V0(S, w) && (S.text = R + K, T.siblings.splice(E, 1));
  }
  return Lm(e, r.viewOptions);
}
function Q0({
  viewOptions: e,
  logger: t
}) {
  const [r] = de(), n = ui(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return W(() => {
    if (n)
      return r.registerNodeTransform(
        pt,
        (i) => Z0(i, t)
      );
  }, [r, n, t]), null;
}
function Z0(e, t) {
  e.getMarker() !== nr && (e.isEmpty() || Mt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${nr}" (key ${e.getKey()})`
  ), e.setMarker(nr)));
}
function eN({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = de(), n = ee({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return W(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, ea(s, e) || tN(i, r, e);
  }, [r, e, t]), W(
    () => r.registerMutationListener(
      jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Sl(r);
        wp(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: bo(s) === bo(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), W(() => {
    const i = (a) => a.read(
      () => new Set(
        Ke().getChildren().filter(tt).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (Sl(r) || wp(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: bo(a) === bo(c)
      }));
    };
    return Ie(
      ...[Gt, Kr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), W(
    () => r.registerCommand(
      Kt,
      () => {
        const i = n.current;
        return i.phase === "idle" && sN(i, yb()), !1;
      },
      kt
    ),
    [r]
  ), W(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Kt, void 0));
    };
    return Ie(
      r.registerMutationListener(Dt, i),
      r.registerMutationListener(_t, i)
    );
  }, [r]), W(() => {
    const i = () => lN(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function tN(e, t, r) {
  if (rN(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Sl(t);
  (!n || n === r.book) && t.update(() => bb(t, r.chapterNum, r.verseNum), {
    tag: $t
  });
}
function rN(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ea(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function yb() {
  const e = N(), t = Zh(e);
  if (!t) return;
  const r = ld(), n = sT(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = uu(t, e), { verseNum: o, verse: a } = eS(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Sl(e) {
  return e.getEditorState().read(() => ld()?.getCode() || void 0);
}
function ld() {
  return Ke().getChildren().find(Ee);
}
function wp(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Cc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Cc(e, t), e.phase = "navigating") : i && Cc(e, t), r && r !== e.scrRef.book && Tb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Cc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => bb(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: $t }
    );
  });
}
function bb(e, t, r) {
  const n = N()?.clone();
  nN(t, r);
  const i = N();
  i && !(n && i.is(n)) && wr(e, $t);
}
function nN(e, t) {
  const r = yb();
  if (r?.chapterNum === e && (r.verse ? xb(t, r.verse) : r.verseNum === t))
    return;
  const n = Ke().getChildren(), i = Wh(n, e);
  if (!i) return;
  const s = dT(n, i), o = iT(s, !0);
  uT(s, o);
  let a;
  try {
    a = GC(s, t);
  } catch {
    return;
  }
  a && (fe(a) ? !v(a.getFirstChild()) && di(a) || ar(a, 0) : iN(a));
}
function iN(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || Te(n)) {
    v(e) ? e.selectEnd() : ar(t, r);
    return;
  }
  const i = Js(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    e.selectEnd();
    return;
  }
  const s = L(n) && !B(n) ? kb(n) : void 0;
  s ? s.select(0, 0) : ar(t, r);
}
function kb(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (L(t) && !B(t)) return kb(t);
}
function bo(e) {
  return e.read(() => {
    const t = Ke().getChildren().find(tt);
    return `${ld()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function sN(e, t) {
  e.phase !== "navigating" && t && (oN(t, e.scrRef) || Tb(e, aN(t, e.scrRef)));
}
function oN(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? xb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function xb(e, t) {
  try {
    return Yl(e, t);
  } catch {
    return !1;
  }
}
function aN(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const cN = 8;
function Tb(e, t) {
  return ea(t, e.scrRef) || e.pendingEchoes.some((r) => ea(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > cN && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ea(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function lN(e) {
  e.phase = "idle";
}
function uN(e) {
  return Ee(e) ? `${e.__code}` : Fe(e) ? `${e.__marker} "${e.__number}"` : F(e) ? `${e.__marker}` : Bs(e) ? `${e.__marker} "${e.__number}"` : Tt(e) ? `${e.__caller}` : li(e) ? `${e.__marker} "${e.__number}"` : B(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : fe(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${dN(e)}` : Pe(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Be(e) ? `${e.__marker} "${e.__number}"` : "";
}
function dN(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ks]) : "";
}
function fN() {
  const [e] = de();
  return /* @__PURE__ */ M(
    Ak,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: uN,
      editor: e
    }
  );
}
const Cb = zp(null), Op = 4;
function pN({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = ee(null), s = Kp(Cb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return W(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ M("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function hN({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = ke(), [s, o] = ke(), a = Ce(
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
  }, l = Ze(() => ({ registerItem: a }), [a]);
  return W(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ M(Cb.Provider, { value: l, children: /* @__PURE__ */ M("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function gN({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = ee(null), c = ee(null), [l, d] = ke(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return W(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: g } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Op}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), W(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (h) => {
        const g = h.target;
        o && a.current && a.current.contains(g) || f.contains(g) || d(!1);
      };
      return document.addEventListener("click", p), () => {
        document.removeEventListener("click", p);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), W(() => {
    const f = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Op;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ $e(zn, { children: [
    /* @__PURE__ */ $e(
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
    l && Un(
      /* @__PURE__ */ M(hN, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const _l = {
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
}, vl = {
  ..._l,
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
function mN({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ M(
    gN,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + yN(t),
      buttonLabel: bN(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(_l).map((n) => /* @__PURE__ */ $e(
        pN,
        {
          className: "item block-marker " + kN(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ M("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ M("span", { className: "text usfm_" + n, children: _l[n] })
          ]
        },
        n
      ))
    }
  );
}
function yN(e) {
  return e && e in vl ? e : "ban";
}
function bN(e) {
  return e && e in vl ? vl[e] : "No Style";
}
function kN(e) {
  return e ? "active dropdown-item-active" : "";
}
function Rp() {
  return /* @__PURE__ */ M("div", { className: "divider" });
}
const xN = Mn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = de(), [o, a] = ke(s), [c, l] = ke(), [d, u] = ke(!1), [f, p] = ke(!1), h = Ce(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: k,
      contextMarker: b
    }) => {
      u(g), p(y), l(k), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: k,
        contextMarker: b
      });
    },
    [n]
  );
  return W(() => s.registerCommand(
    Kt,
    (g, y) => (a(y), !1),
    he
  ), [s]), /* @__PURE__ */ $e(zn, { children: [
    /* @__PURE__ */ M(qm, { onStateChange: h }),
    /* @__PURE__ */ $e("div", { className: "toolbar", children: [
      /* @__PURE__ */ M(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(th, void 0);
          },
          title: yn ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(rh, void 0);
          },
          title: yn ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ M("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ M(Rp, {}),
      o === s && /* @__PURE__ */ $e(zn, { children: [
        /* @__PURE__ */ M(
          mN,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ M(Rp, {})
      ] }),
      /* @__PURE__ */ M("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), TN = Ta(), CN = {}, SN = {};
function _N() {
  return /* @__PURE__ */ M("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Sc(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function $p(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = L(n) ? n.getLastDescendant() ?? n : n;
  return ba(r, i);
}
function qp(e, t, r) {
  wk(e, () => qi(t));
  const n = N();
  if (!A(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    fe(o) && i.add(o);
  }), i.forEach((s) => Yy(s, t, r));
}
const Sb = Mn(function({
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
  const u = ee(null), f = ee(null), p = ee(null), h = ee(null), g = ee(t), y = ee(void 0), k = ee(void 0), b = ee(void 0), T = ee(void 0), E = ee(!1), [S, w] = ke(t), [R, K] = ke(0), [z, ae] = ke(), {
    isReadonly: Y = !1,
    structureProtectionMode: ge = "off",
    onHiddenContentDelete: se,
    hasExternalUI: q = !1,
    hasSpellCheck: J = !1,
    textDirection: j = "ltr",
    markerMenuTrigger: V = "\\",
    view: Q,
    nodes: me,
    debug: ht = !1,
    contextMenu: X,
    styleInfo: P,
    markerSettleDelayMs: re,
    copyLimit: ye
  } = a ?? SN, Se = Q ?? TN, st = ws(Se) && (Se.markerMode !== "hidden" || !Se.hasSpacing || Se.hasGutterParaMarkers || Se.hasActiveTextFocusBox) ? {
    ...Se,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : Se, We = ee(st);
  Qt(We.current, st) || (We.current = st);
  const ie = We.current, Xe = Ze(() => me ?? CN, [me]), $a = Ze(() => X, [X]), fi = Ze(
    () => UC(P ?? $o),
    [P]
  ), Ae = ee(c);
  Qt(Ae.current, c) || (Ae.current = c);
  const He = Ae.current, be = ws(ie), At = Y || be, De = st !== Se;
  W(() => {
    be && !Y && He?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), De && He?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ie?.markerMode === "visible" && !Y && He?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [be, Y, De, He, ie?.markerMode]);
  const cr = ee(null), eo = Ze(() => {
    if (ie.markerMode !== "editable") return;
    const $ = P ?? $o;
    return {
      getContext: () => cr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (I) => h1(
        $,
        I,
        Xe.extraValidMarkers
      ),
      getEnterItems: (I) => g1(
        $,
        I,
        Xe.extraValidMarkers
      ),
      apply: (I, G) => {
        const Z = cr.current;
        Z && (G.trigger === "enter" ? Z.splitParagraphWithMarker(I.marker) : Z.applyMarkerMenuSelection(I, G));
      },
      commitTypedCloser: (I) => {
        cr.current?.commitTypedCloser(I);
      }
    };
  }, [ie, P, Xe.extraValidMarkers]), Jt = ($) => {
    E.current || (E.current = !0, Ae.current?.warn(
      `Editor: cannot ${$} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Zi = ($) => {
    if (be)
      throw new Error(
        `Cannot ${$} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Vr = ($) => {
    if (Zi($), At) throw new Error(`Cannot ${$} in readonly mode`);
  }, An = () => !!u.current && Iu(u.current), to = Ze(
    () => ({
      namespace: "platformEditor",
      theme: { ...oy, showCharMarkerTitles: ie.showCharMarkerTitles },
      editable: !At,
      editorState: void 0,
      // Handling of errors during update
      onError($) {
        throw $;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [dt, ...be ? o_ : Tu]
    }),
    [At, be, ie.showCharMarkerTitles]
  );
  Co.initialize(He);
  function Pt($) {
    if ($ !== void 0 && !FA($, Xe.extraValidMarkers))
      throw new Error(`Unsupported character marker '${$}'`);
  }
  const Yt = Ce(() => {
    const $ = u.current;
    if (!$) return g.current;
    const I = Hd($), G = k.current;
    if ((!I || I.size === 0) && !G) return g.current;
    const Z = $.getEditorState(), _e = Z.toJSON();
    return Z.read(
      () => X0(
        _e,
        I ?? /* @__PURE__ */ new Set(),
        { viewOptions: ie, getMarker: fi, logger: He },
        G,
        b.current
      )
    ) ?? g.current;
  }, [ie, fi, He]);
  function _r($, I, G) {
    if (be && I === "remote") {
      Ae.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    Zi("apply an update");
    const Z = An(), _e = !Z && u.current ? wr(u.current, dr) : void 0;
    u.current?.update(
      () => {
        I === "remote" && St(Ts), Z || St(dr), G && St(G), R_($, ie, Xe, He);
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
          _e?.(), !Z && u.current && cc(u.current);
          const nt = u.current?.getEditorState();
          if (!nt) return;
          const Ue = Co.deserializeEditorState(nt, ie);
          if (Ue) {
            const Qe = !Qt(g.current, Ue);
            if (Qe && (g.current = Ue), Qe || !Qt(S, Ue)) {
              const Nt = sf($, nt, "apply");
              T.current = Ue, s?.(Ue, $, I, Nt);
            }
          }
        }
      }
    );
  }
  const pi = {
    focus() {
      u.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return An();
    },
    undo() {
      u.current?.dispatchCommand(th, void 0);
    },
    redo() {
      u.current?.dispatchCommand(rh, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      Vr("cut"), u.current && Ru(u.current);
    },
    copy() {
      u.current && Ou(u.current);
    },
    paste() {
      Vr("paste"), u.current && $u(u.current);
    },
    pastePlainText() {
      Vr("paste as plain text"), u.current && qu(u.current);
    },
    getUsj() {
      return Yt();
    },
    commitPendingMarkerEdits() {
      const $ = u.current;
      if (!$) return;
      const I = !An(), G = I ? wr($, dr) : void 0;
      $.update(
        () => {
          I && St(dr), $.dispatchCommand(ub, void 0);
        },
        { discrete: !0 }
      ), G?.(), I && cc($);
    },
    setMarkerSettleSuspended($) {
      u.current?.dispatchCommand(db, $);
    },
    setTransientInput($) {
      if (!$) {
        k.current = void 0;
        return;
      }
      const I = u.current?.getEditorState().read(() => {
        const G = N();
        return A(G) && G.isCollapsed() ? G.focus.key : void 0;
      });
      k.current = { input: $, nodeKey: I ?? b.current?.key };
    },
    setUsj($) {
      if (!Qt(g.current, $)) {
        g.current = $, k.current = void 0;
        const I = Qt(S, $);
        w($), I && K((G) => G + 1);
      }
    },
    applyUpdate($, I = "remote") {
      _r($, I);
    },
    replaceEmbedUpdate($, I) {
      const G = u.current?.read(() => fS($, I));
      G ? this.applyUpdate(G) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${$}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (be) {
        Jt("get the selection");
        return;
      }
      return u.current?.read(mu);
    },
    setSelection($) {
      if (be) {
        Jt("set the selection");
        return;
      }
      u.current?.update(() => {
        const I = xa($);
        I !== void 0 && (Or(I), St(fh));
      });
    },
    setAnnotation($, I, G, Z, _e) {
      if (be) {
        Jt("set an annotation");
        return;
      }
      let nt, Ue, Qe, Nt;
      typeof Z == "function" || Z === void 0 ? (nt = Z, Ue = _e) : (nt = Z.onClick, Ue = Z.onRemove, Qe = Z.onMouseEnter, Nt = Z.onMouseLeave), f.current?.setAnnotation(
        $,
        Id(I),
        G,
        nt,
        Ue,
        Qe,
        Nt
      );
    },
    removeAnnotation($, I) {
      f.current?.removeAnnotation(Id($), I);
    },
    formatPara($) {
      Vr("format a paragraph"), u.current?.update(
        () => {
          const I = N();
          if (!A(I)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${$}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const G = I.isBackward() ? I.focus : I.anchor, Z = qe(G.getNode(), Ee);
          if (Z) {
            const _e = I.isBackward() ? I.anchor : I.focus, Ue = !I.isCollapsed() && !Z.is(_e.getNode()) && !Z.isParentOf(_e.getNode()) ? { key: _e.key, offset: _e.offset, type: _e.type } : void 0, Qe = mn();
            if (Qe.anchor.set(G.key, G.offset, G.type), Qe.focus.set(G.key, G.offset, G.type), Or(Qe), !xl($, ie)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${$}"`
              );
              return;
            }
            if (!Ue) return;
            const Nt = oe(Ue.key);
            if (!Nt?.isAttached()) return;
            const Wr = Nt.getTopLevelElement();
            if (!Wr) return;
            const Ut = Z.getNextSibling();
            if (!fe(Ut)) return;
            let Xt = Ut.getNextSibling();
            for (; Xt; ) {
              const ro = Xt.is(Wr), no = Xt.getNextSibling();
              if (fe(Xt)) {
                const an = mn();
                an.anchor.set(Xt.getKey(), 0, "element"), an.focus.set(Xt.getKey(), Xt.getChildrenSize(), "element"), Or(an), qp(an, $, ie);
              }
              if (ro) break;
              Xt = no;
            }
            return;
          }
          qp(I, $, ie);
        },
        { discrete: !0 }
      );
    },
    getElementByKey($) {
      return u.current?.read(
        () => u.current?.getElementByKey($) ?? void 0
      );
    },
    removeCharacterMarker($) {
      if (At) throw new Error("Cannot remove character marker in readonly mode");
      Pt($);
      let I = !1;
      return u.current?.update(
        () => {
          const G = N();
          A(G) && (I = ey(G, $, ie));
        },
        { discrete: !0 }
      ), I;
    },
    replaceCharacterMarker($, I) {
      if (At) throw new Error("Cannot replace character marker in readonly mode");
      Pt($), Pt(I);
      let G = !1;
      return u.current?.update(
        () => {
          const Z = N();
          A(Z) && (G = QA(Z, $, I));
        },
        { discrete: !0 }
      ), G;
    },
    extendCharacterMarker($, I) {
      if (At) throw new Error("Cannot extend character marker in readonly mode");
      Pt($), I?.forEach(
        (Z) => Pt(Z)
      );
      let G = !1;
      return u.current?.update(
        () => {
          const Z = N();
          A(Z) && (G = ZA(
            Z,
            $,
            I,
            ie
          ));
        },
        { discrete: !0 }
      ), G;
    },
    insertMarker($) {
      if (At) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!sl($, Xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${$}'`);
      const I = ol(
        $,
        y,
        ie,
        Xe,
        He,
        void 0,
        P
      );
      return I.action({ editor: u.current, reference: r }), I.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!Y)
        return u.current?.getEditorState().read(() => r0());
    },
    applyMarkerMenuSelection($, I) {
      if (Y) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if ($.kind !== "closeTag" && !sl($.marker, Xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${$.marker}'`);
      let G;
      return u.current.update(() => {
        G = d0($, I, r, {
          expandedNoteKeyRef: y,
          viewOptions: ie,
          nodeOptions: Xe,
          logger: c,
          styleInfo: P
        });
      }), G;
    },
    splitParagraphWithMarker($) {
      if (Y) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        xl($, ie);
      });
    },
    commitTypedMarker($, I) {
      if (Y) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let G = !1;
      return u.current.update(() => {
        G = l0($, I), G || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), G;
    },
    commitTypedCloser($) {
      if (Y) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let I = !1;
      return u.current.update(() => {
        I = rb($), I || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), I;
    },
    insertNote($, I, G) {
      Vr("insert a note"), u.current?.update(
        () => {
          const Z = Bg(
            $,
            I,
            G,
            r,
            ie,
            Xe,
            He
          );
          Sc(Z, y);
        },
        { discrete: !0 }
      );
    },
    selectNote($) {
      u.current?.update(() => {
        const I = Ar($);
        I && (Vc(I, ie), Sc(I, y));
      });
    },
    selectAfterNote($) {
      const I = u.current;
      if (!I) return;
      const G = !An(), Z = G ? wr(I, dr) : void 0;
      if (I.update(
        () => {
          G && St(dr);
          const _e = Ar($);
          _e && Vg(_e);
        },
        { discrete: !0 }
      ), Z?.(), G) {
        cc(I);
        const _e = wr(
          I,
          dr
        );
        I.update(
          () => {
            St(dr), I.dispatchCommand(Kt, void 0);
          },
          { discrete: !0 }
        ), _e();
      }
    },
    selectNoteTextOffset($, I, G) {
      u.current?.update(() => {
        const Z = Ar($);
        if (!Z) return;
        const _e = G?.glyph;
        (G?.field === "category" ? t_(Z, I, _e) || df(Z, 0) : df(Z, I, _e)) || Vc(Z, ie), Sc(Z, y);
      });
    },
    getNoteOps($) {
      const I = u.current;
      return I ? Ei(I, () => {
        const G = Ar($);
        if (G)
          return ba(G);
      }) : void 0;
    },
    getOpsAfterNote($) {
      const I = u.current;
      return I ? Ei(I, () => {
        const G = Ar($);
        return G ? $p(G) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote($) {
      const I = u.current, G = I ? Ei(I, () => {
        const Ue = Ar($);
        if (!Ue) return;
        const Qe = fu(Ue, "apply");
        return { ops: $p(Ue), notePosition: Qe };
      }) : void 0;
      if (!G) return;
      const { ops: Z, notePosition: _e } = G;
      if (Z.length === 0 || _e === void 0) return Z;
      const nt = Z.reduce(
        (Ue, Qe) => Ue + (typeof Qe.insert == "string" ? Qe.insert.length : 1),
        0
      );
      return _r([{ retain: _e + 1 }, { delete: nt }], "remote", Pl), Z;
    },
    getNoteIndex($) {
      const I = u.current;
      return I ? Ei(I, () => hu($)) : void 0;
    },
    getNoteKey($) {
      const I = u.current;
      return I ? Ei(I, () => Ar($)?.getKey()) : void 0;
    },
    highlightNote($) {
      p.current?.setHighlightedNote($);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  cr.current = pi, ra(d, () => pi), W(() => {
    const $ = u.current;
    if ($)
      return $.registerUpdateListener(({ editorState: I }) => {
        I.read(() => {
          const G = N();
          if (!A(G) || !G.isCollapsed()) return;
          const Z = G.focus.getNode();
          v(Z) && (b.current = { key: Z.getKey(), offset: G.focus.offset });
        });
      });
  }, []);
  const hi = Ce(
    ($, I, G, Z, _e) => {
      if (be) return;
      const nt = Co.deserializeEditorState($, ie);
      if (nt) {
        const Ue = !Qt(g.current, nt);
        if (Ue && (g.current = nt), Ue || !Qt(S, nt)) {
          const Qe = sf(Z, $), Nt = Qe && !_e.read(() => oe(Qe)) ? Qe : void 0;
          T.current = nt, s?.(nt, Z, "local", Nt);
        }
      }
    },
    [S, s, ie, be]
  );
  W(() => {
    const $ = u.current;
    if (!(!$ || !s))
      return $.registerUpdateListener(({ tags: I, dirtyElements: G, dirtyLeaves: Z }) => {
        !I.has(ql) && (G.size === 0 && Z.size === 0 || I.has(Ts) || !Hd($)?.size) || queueMicrotask(() => {
          const _e = Yt();
          !_e || Qt(T.current, _e) || (T.current = _e, s(_e, void 0, "local", void 0));
        });
      });
  }, [s, Yt]);
  const Pn = Ce(
    ($) => {
      ae($.contextMarker), o?.($);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ $e(ih, { initialConfig: to, children: [
      /* @__PURE__ */ M(Fv, { isEditable: !At }),
      /* @__PURE__ */ $e("div", { className: "editor-container", children: [
        q ? /* @__PURE__ */ M(qm, { onStateChange: Pn }) : /* @__PURE__ */ M(
          "div",
          {
            className: "editor-toolbar-container" + (At ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ M(
              xN,
              {
                ref: h,
                editorRef: cr,
                isReadonly: At,
                onStateChange: Pn
              }
            )
          }
        ),
        /* @__PURE__ */ $e("div", { className: "editor-inner", children: [
          /* @__PURE__ */ M(oh, { editorRef: u }),
          /* @__PURE__ */ M(
            Nk,
            {
              contentEditable: /* @__PURE__ */ M(
                sh,
                {
                  className: `editor-input usfm ${O_(ie).join(" ")}${ie.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ie.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: J
                }
              ),
              placeholder: /* @__PURE__ */ M(_N, {}),
              ErrorBoundary: ah
            }
          ),
          q && /* @__PURE__ */ M(Uv, {}),
          /* @__PURE__ */ M(ch, {}),
          r && n && /* @__PURE__ */ M(eN, { scrRef: r, onScrRefChange: n }),
          r && !q && /* @__PURE__ */ M(
            IE,
            {
              trigger: V,
              scrRef: r,
              contextMarker: z,
              getMarkerAction: ($) => ol(
                $,
                y,
                ie,
                Xe,
                He,
                void 0,
                P
              ),
              editableHarness: eo
            }
          ),
          /* @__PURE__ */ M(
            GM,
            {
              scripture: S,
              scriptureRef: g,
              nodeOptions: Xe,
              editorAdaptor: kr,
              viewOptions: ie,
              logger: He
            },
            R
          ),
          /* @__PURE__ */ M(mE, { onChange: i }),
          /* @__PURE__ */ M(
            M_,
            {
              onChange: hi,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Qk
            }
          ),
          /* @__PURE__ */ M(iP, { viewOptions: ie }),
          /* @__PURE__ */ M(__, { ref: f, logger: He }),
          /* @__PURE__ */ M(av, { viewOptions: ie }),
          /* @__PURE__ */ M(Tv, {}),
          /* @__PURE__ */ M(Ev, {}),
          ie?.markerMode !== "editable" && /* @__PURE__ */ M(Av, { logger: He }),
          /* @__PURE__ */ M(Rv, { options: $a }),
          /* @__PURE__ */ M(QP, { limit: ye, viewOptions: ie }),
          /* @__PURE__ */ M(Dv, {}),
          /* @__PURE__ */ M(Kv, {}),
          /* @__PURE__ */ M(jv, {}),
          /* @__PURE__ */ M(f0, {}),
          /* @__PURE__ */ M(
            DM,
            {
              isEnabled: ie?.markerMode !== "editable",
              structureProtectionMode: ge,
              copyLimit: ye,
              onHiddenContentDelete: se,
              logger: He
            }
          ),
          /* @__PURE__ */ M(
            q0,
            {
              viewOptions: ie,
              getMarker: fi,
              logger: He,
              markerSettleDelayMs: re,
              structureProtectionMode: ge,
              copyLimit: ye
            }
          ),
          ie?.markerMode === "visible" && /* @__PURE__ */ M(XP, { viewOptions: ie, copyLimit: ye }),
          /* @__PURE__ */ M(
            z0,
            {
              styleInfo: P,
              viewOptions: ie,
              logger: He
            }
          ),
          /* @__PURE__ */ M(JM, { ref: p }),
          /* @__PURE__ */ M(
            YM,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Xe,
              viewOptions: ie,
              logger: He
            }
          ),
          /* @__PURE__ */ M(gE, {}),
          /* @__PURE__ */ M(nv, {}),
          /* @__PURE__ */ M(Z_, {}),
          /* @__PURE__ */ M(Q0, { viewOptions: ie, logger: He }),
          /* @__PURE__ */ M(yE, {}),
          /* @__PURE__ */ M(IM, { structureProtectionMode: ge }),
          /* @__PURE__ */ M(xE, { textDirection: j }),
          /* @__PURE__ */ M(CE, {}),
          /* @__PURE__ */ M($E, {}),
          l
        ] }),
        ht && /* @__PURE__ */ M(fN, {})
      ] })
    ] }, ie.verseLayout ?? "inline")
  );
}), Rw = Mn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ M(Sb, { ref: r, ...i });
});
function _b() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ta(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? _b() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function vb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? _b() : r,
    quote: e,
    type: "thread"
  };
}
function Ip(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function vN(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function _c(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class MN {
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
    this._comments = t, _c(this);
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
          const c = Ip(a);
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
    this._comments = i, _c(this);
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
          const c = Ip(a);
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
    return this._comments = n, _c(this), t.type === "comment" ? {
      index: s,
      markedComment: vN(t)
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
    return t !== null ? t.doc.get("comments", Sd) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new _d(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Sd();
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
      Wk,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      kt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Hk) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const h = p.insert, g = p.retain, y = p.delete, k = d.parent, b = d === r ? void 0 : k instanceof _d && this._comments.find((T) => T.id === k.get("id"));
              if (Array.isArray(h)) {
                const T = f;
                h.slice().reverse().forEach((E) => {
                  const S = E.get("id"), R = E.get("type") === "thread" ? vb(
                    E.get("quote"),
                    E.get("comments").toArray().map(
                      (K) => ta(
                        K.get("content"),
                        K.get("author"),
                        K.get("id"),
                        K.get("timeStamp"),
                        K.get("deleted")
                      )
                    ),
                    S
                  ) : ta(
                    E.get("content"),
                    E.get("author"),
                    S,
                    E.get("timeStamp"),
                    E.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(R, b, T);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let T = 0; T < y; T++) {
                  const E = b === void 0 || b === !1 ? this._comments[f] : b.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(E, b);
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
function EN(e) {
  const [t, r] = ke(e.getComments());
  return W(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function AN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = ee(null);
  return W(() => {
    i.current !== null && i.current.focus();
  }, []), W(() => {
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
  }, [n, e]), /* @__PURE__ */ M("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ $e("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function PN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Un(
    /* @__PURE__ */ M(AN, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Mb() {
  const [e, t] = ke(null), r = Ce(() => {
    t(null);
  }, []), n = Ze(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ M(PN, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = Ce(
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
const NN = {
  ...oy,
  paragraph: "CommentEditorTheme__paragraph"
};
function wN(...e) {
  return e.filter(Boolean).join(" ");
}
function vn({
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
      className: wN(
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
function ON({
  className: e
}) {
  return /* @__PURE__ */ M(sh, { className: e || "ContentEditable__root" });
}
function RN({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ M("div", { className: t || "Placeholder__root", children: e });
}
const Lp = $l("INSERT_INLINE_COMMAND");
function $N({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = ee(null), s = Ce(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return W(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Fs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ M("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ M("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ M("i", { className: "icon add-comment" }) }) });
}
function qN({ onEscape: e }) {
  const [t] = de();
  return W(() => t.registerCommand(
    eh,
    (r) => e(r),
    Rr
  ), [t, e]), null;
}
function Eb({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ M(ih, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: NN
  }, children: /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ M(
      Bk,
      {
        contentEditable: /* @__PURE__ */ M(ON, { className: e }),
        placeholder: /* @__PURE__ */ M(RN, { children: s }),
        ErrorBoundary: ah
      }
    ),
    /* @__PURE__ */ M(Kk, { onChange: n }),
    /* @__PURE__ */ M(ch, {}),
    t !== !1 && /* @__PURE__ */ M(Uk, {}),
    /* @__PURE__ */ M(qN, { onEscape: r }),
    /* @__PURE__ */ M(Fk, {}),
    i !== void 0 && /* @__PURE__ */ M(oh, { editorRef: i })
  ] }) });
}
function Ab(e, t) {
  return Ce(
    (r, n) => {
      r.read(() => {
        e(jk()), t(!Vk(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function IN({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = ke(""), [s, o] = ke(!1), a = ee(null), c = Ze(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = ee(null), d = Nb(), u = Ce(() => {
    e.getEditorState().read(() => {
      const g = N();
      if (A(g)) {
        l.current = g.clone();
        const y = g.anchor, k = g.focus, b = Ok(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), T = a.current;
        if (b !== null && T !== null) {
          const { left: E, bottom: S, width: w } = b.getBoundingClientRect(), R = Rk(e, b);
          let K = R.length === 1 ? E + w / 2 - 125 : E - 125;
          K < 10 && (K = 10), T.style.left = `${K}px`, T.style.top = `${S + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const z = R.length, { container: ae } = c, Y = c.elements, ge = Y.length;
          for (let se = 0; se < z; se++) {
            const q = R[se];
            let J = Y[se];
            J === void 0 && (J = document.createElement("span"), Y[se] = J, ae.appendChild(J));
            const V = `position:absolute;top:${q.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${q.left}px;height:${q.height}px;width:${q.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            J.style.cssText = V;
          }
          for (let se = ge - 1; se >= z; se--) {
            const q = Y[se];
            ae.removeChild(q), Y.pop();
          }
        }
      }
    });
  }, [e, c]);
  Fs(() => {
    u();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, u]), W(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        vb(g, [ta(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = Ab(i, o);
  return /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ M(
      Eb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ M(vn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ M(
        vn,
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
function LN({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = ke(""), [s, o] = ke(!1), a = ee(null), c = Nb(), l = Ab(i, o);
  return /* @__PURE__ */ $e(zn, { children: [
    /* @__PURE__ */ M(
      Eb,
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
      vn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(ta(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(Sk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ M("i", { className: "send" })
      }
    )
  ] });
}
function Pb({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ $e(zn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ $e("div", { className: "Modal__content", children: [
      /* @__PURE__ */ M(
        vn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ M(
        vn,
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
function Dp({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = ke(0);
  W(() => {
    const d = () => {
      s(performance.timeOrigin + performance.now());
    };
    d();
    const u = window.setInterval(d, 6e4);
    return () => {
      window.clearInterval(u);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Mb();
  return /* @__PURE__ */ $e("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ M("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ $e("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ M("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ $e(zn, { children: [
      /* @__PURE__ */ M(
        vn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ M(
              Pb,
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
function DN({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = de(), [a, c] = ke(0), [l, d] = Mb(), u = Ze(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return W(() => {
    const f = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(f);
    };
  }, [a]), /* @__PURE__ */ M("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ $e(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(g)[0], b = oe(k);
                Pe(b) && b.selectStart();
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
          /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ $e("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ M("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ M(
              vn,
              {
                onClick: () => {
                  d("Delete Thread", (g) => /* @__PURE__ */ M(
                    Pb,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: g
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ M("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ M("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((g) => /* @__PURE__ */ M(
            Dp,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            g.id
          )) }),
          /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ M(
            LN,
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
      Dp,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function UN({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = ee(null), o = r.length === 0;
  return /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ M("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ M(
      DN,
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
function Nb() {
  const e = lh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function FN({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = lh(), [a] = de(), c = Ze(() => {
    const K = new MN(a, s);
    return r && K.registerOnChange(r), t?.(K), K;
  }, [a, s, r, t]), l = EN(c), d = Ze(() => /* @__PURE__ */ new Map(), []), [u, f] = ke(), [p, h] = ke([]), [g, y] = ke(!1), [k, b] = ke(!1), { yjsDocMap: T } = o;
  W(() => {
    if (e) {
      const K = e("comments", T);
      return c.registerCollaboration(K);
    }
    return () => {
    };
  }, [c, e, T]);
  const E = Ce(() => {
    a.update(() => {
      const K = N();
      K !== null && (K.dirty = !0);
    }), y(!1);
  }, [a]), S = Ce(
    (K, z) => {
      if (K.type === "comment") {
        const ae = c.deleteCommentOrThread(K, z);
        if (!ae)
          return;
        const { markedComment: Y, index: ge } = ae;
        c.addComment(Y, z, ge);
      } else {
        c.deleteCommentOrThread(K);
        const ae = z !== void 0 ? z.id : K.id, Y = d.get(ae);
        Y !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ge of Y) {
              const se = oe(ge);
              Pe(se) && (se.deleteID(hn, ae), se.hasNoIDsForEveryType() && Ao(se));
            }
          });
        });
      }
    },
    [c, a, d]
  ), w = Ce(
    (K, z, ae, Y) => {
      c.addComment(K, ae), z && (a.update(() => {
        A(Y) && Mh(Y, hn, K.id);
      }), y(!1));
    },
    [c, a]
  );
  W(() => {
    const K = [];
    let z;
    for (const ae of p) {
      const Y = d.get(ae);
      if (Y !== void 0)
        for (const ge of Y) {
          const se = a.getElementByKey(ge);
          se !== null && (se.classList.add("selected"), K.push(se), z = window.setTimeout(() => {
            b(!0);
          }, 0));
        }
    }
    return () => {
      z !== void 0 && window.clearTimeout(z);
      for (const ae of K)
        ae.classList.remove("selected");
    };
  }, [p, a, d]), W(() => {
    if (!a.hasNodes([dt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const K = /* @__PURE__ */ new Map();
    return Ie(
      nh(
        a,
        dt,
        (z) => Ss(z.getTypedIDs()),
        (z, ae) => {
          for (const [Y, ge] of Object.entries(z.getTypedIDs()))
            ge.forEach((se) => {
              ae.addID(Y, se);
            });
        }
      ),
      a.registerMutationListener(
        dt,
        (z) => {
          a.getEditorState().read(() => {
            for (const [ae, Y] of z) {
              const ge = oe(ae);
              let se = [];
              Y === "destroyed" ? se = K.get(ae) ?? [] : Pe(ge) && (se = ge.getTypedIDs()[hn] ?? []);
              for (const q of se) {
                let J = d.get(q);
                K.set(ae, se), Y === "destroyed" ? J !== void 0 && (J.delete(ae), J.size === 0 && d.delete(q)) : (J === void 0 && (J = /* @__PURE__ */ new Set(), d.set(q, J)), J.has(ae) || J.add(ae));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: z, tags: ae }) => {
        z.read(() => {
          const Y = N();
          let ge = !1, se = !1;
          if (A(Y)) {
            const q = Y.anchor.getNode();
            if (v(q)) {
              const J = $x(q, hn, Y.anchor.offset) ?? [];
              J !== null && (h(J), ge = !0), Y.isCollapsed() || (f(q.getKey()), se = !0);
            }
          }
          ge || h((q) => q.length === 0 ? q : []), se || f(null), !ae.has("collaboration") && A(Y) && y(!1);
        });
      }),
      a.registerCommand(
        Lp,
        () => {
          const z = window.getSelection();
          return z !== null && z.removeAllRanges(), y(!0), !0;
        },
        Bn
      )
    );
  }, [a, d]);
  const R = () => {
    a.dispatchCommand(Lp, void 0);
  };
  return /* @__PURE__ */ $e(zn, { children: [
    g && Un(
      /* @__PURE__ */ M(
        IN,
        {
          editor: a,
          cancelAddComment: E,
          submitAddComment: w
        }
      ),
      document.body
    ),
    u != null && !g && Un(
      /* @__PURE__ */ M(
        $N,
        {
          anchorKey: u,
          editor: a,
          showComments: k,
          onAddComment: R
        }
      ),
      document.body
    ),
    n !== null && Un(
      /* @__PURE__ */ M(
        vn,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => b(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ M("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && Un(
      /* @__PURE__ */ M(
        UN,
        {
          comments: l,
          submitAddComment: w,
          deleteCommentOrThread: S,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function zN() {
  const e = ee(void 0), t = Ce((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function KN(e, t) {
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
function BN(e, t) {
  W(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      KN(r, t);
    };
  }, [t, e]);
}
const $w = Mn(function(t, r) {
  const n = ee(null), i = ee(!0), s = ee(null), [o, a] = ke(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, y = (h ?? !1) || ws(g), [k, b] = zN();
  BN(f, k), W(() => {
    if (process.env.NODE_ENV !== "production") {
      const S = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(S), p || console.warn(S);
    }
  }, [p]), ra(r, () => ({
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
    setMarkerSettleSuspended(S) {
      n.current?.setMarkerSettleSuspended(S);
    },
    setTransientInput(S) {
      n.current?.setTransientInput(S);
    },
    setUsj(S) {
      n.current?.setUsj(S);
    },
    applyUpdate(S, w) {
      n.current?.applyUpdate(S, w);
    },
    replaceEmbedUpdate(S, w) {
      return n.current?.replaceEmbedUpdate(S, w);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(S) {
      n.current?.setSelection(S);
    },
    setAnnotation(S, w, R, K, z) {
      typeof K == "function" || K === void 0 ? n.current?.setAnnotation(S, w, R, K, z) : n.current?.setAnnotation(S, w, R, K);
    },
    removeAnnotation(S, w) {
      n.current?.removeAnnotation(S, w);
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
    replaceCharacterMarker(S, w) {
      return n.current?.replaceCharacterMarker(S, w) ?? !1;
    },
    extendCharacterMarker(S, w) {
      return n.current?.extendCharacterMarker(S, w) ?? !1;
    },
    insertMarker(S) {
      return n.current?.insertMarker(S);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(S, w) {
      return n.current?.applyMarkerMenuSelection(S, w);
    },
    splitParagraphWithMarker(S) {
      n.current?.splitParagraphWithMarker(S);
    },
    commitTypedMarker(S, w) {
      return n.current?.commitTypedMarker(S, w) ?? !1;
    },
    commitTypedCloser(S) {
      return n.current?.commitTypedCloser(S) ?? !1;
    },
    insertNote(S, w, R) {
      n.current?.insertNote(S, w, R);
    },
    selectNote(S) {
      n.current?.selectNote(S);
    },
    selectAfterNote(S) {
      n.current?.selectAfterNote(S);
    },
    selectNoteTextOffset(S, w, R) {
      n.current?.selectNoteTextOffset(S, w, R);
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
      k.current?.setComments(S), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const T = Ce(
    (S, w, R, K) => {
      if (!d) return;
      const z = k.current?.getComments();
      d(S, z, w, R, K);
    },
    [k, d]
  ), E = Ce(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const S = k.current?.getComments();
    l(S);
  }, [k, i, l]);
  return W(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ M(zk, { children: /* @__PURE__ */ $e(Sb, { ref: n, onUsjChange: T, ...f, children: [
    /* @__PURE__ */ M(
      FN,
      {
        setCommentStore: b,
        onChange: E,
        showCommentsContainerRef: y ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ M("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Dn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function jN(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function VN(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const WN = /^[#\w().,%/\s-]+$/;
function Gr(e) {
  return e != null;
}
const HN = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, GN = {
  left: "right",
  right: "left"
}, JN = "var(--usj-font-fallback, serif)";
function wb(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${jN(i)}"`).join(", ")}, ${JN}`;
}
const Ml = ".editor-input.usfm", YN = /^[\w.#[\]="':()>+~*,\s-]+$/;
function XN(e) {
  return YN.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Ml}".`
  ), Ml);
}
function QN(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(wb(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (WN.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Gr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Gr(t.firstLineIndent) && s.push(`text-indent: ${Dn(t.firstLineIndent * 20 * r)}vw`), Gr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Dn(t.leftMargin * 20 * r)}vw`), Gr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Dn(t.rightMargin * 20 * r)}vw`
  ), Gr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Dn(t.spaceBefore * r)}pt`), Gr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Dn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = HN[n ? GN[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Up = { c: 150, ca: 133, cp: 150 };
function Fp(e, t) {
  return e && Gr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function ZN(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Gr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Fp(e.markers.c, Up.c);
  return ["ca", "cp"].map((i) => {
    const s = Fp(
      e.markers[i],
      Up[i]
    ), o = Dn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function qw(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Ml } = t, s = XN(i), o = [], a = [];
  e.defaultFont && a.push(wb(e.defaultFont)), Gr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Dn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = QN(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${VN(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...ZN(e, s)), o.join(`
`);
}
export {
  em as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  Rw as Editorial,
  xs as GENERATOR_NOTE_CALLER,
  dh as HIDDEN_NOTE_CALLER,
  $w as Marginal,
  x as MarkerType,
  Zg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  _u as STANDARD_VIEW_MODE,
  $o as defaultStyleInfo,
  Ow as directionToNames,
  g_ as filterAndRankItems,
  qw as generateUsjCss,
  Nw as getDefaultViewMode,
  Ta as getDefaultViewOptions,
  g1 as getEnterMenuItems,
  h1 as getMarkerMenuItems,
  ww as getViewMode,
  Eu as getViewOptions,
  ws as isBlockVerseLayout,
  fn as isInsertEmbedOpOfType,
  A_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
