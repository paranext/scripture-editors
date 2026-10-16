import { jsx as E, jsxs as Oe, Fragment as Vn } from "react/jsx-runtime";
import { forwardRef as Pn, useState as me, useRef as Z, useCallback as ke, useEffect as z, useMemo as Ze, memo as Qb, createContext as Wp, useContext as Hp, Children as Zb, isValidElement as ek, cloneElement as tk, useImperativeHandle as aa, useLayoutEffect as Gs } from "react";
import { assertSafeKey as st, isValidBookCode as rk, MARKER_OBJECT_PROPS as nk, USJ_VERSION as yr, USJ_TYPE as br, isUsjTextContentLocation as ik, indexesFromUsjJsonPath as Gp, isUsjAttributeKeyLocation as sk, isUsjAttributeMarkerLocation as ok, isUsjClosingAttributeMarkerLocation as ak, isUsjMarkerLocation as ck, isUsjClosingMarkerLocation as lk, isUsjPropertyValueLocation as uk, getUsjDocumentLocationTypeName as dk, usjJsonPathFromIndexes as In, EMPTY_USJ as Jp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as rt, $parseSerializedNode as Wn, DecoratorNode as Js, ElementNode as Tr, isHTMLElement as ii, createState as ca, $getState as le, $setState as Ot, $isRangeSelection as w, $isElementNode as L, $isTextNode as M, $getSelection as N, $isNodeSelection as si, ParagraphNode as Il, TextNode as et, $createTextNode as Ee, $getCommonAncestor as fk, $createNodeSelection as Ll, $setSelection as zt, $isLineBreakNode as oi, $getEditor as qr, NODE_STATE_KEY as Ys, $hasUpdateTag as pk, $getNodeByKey as se, $getRoot as Ye, $createRangeSelection as kn, $createPoint as hr, SELECTION_CHANGE_COMMAND as Bt, $getCharacterOffsets as Dl, KEY_DOWN_COMMAND as Cr, COMMAND_PRIORITY_HIGH as Ne, HISTORY_MERGE_TAG as Ul, DELETE_CHARACTER_COMMAND as Ji, DELETE_WORD_COMMAND as Kl, DELETE_LINE_COMMAND as Po, COMMAND_PRIORITY_NORMAL as Or, CONTROLLED_TEXT_INSERTION_COMMAND as Yi, COMMAND_PRIORITY_CRITICAL as de, PASTE_COMMAND as sr, CUT_COMMAND as jt, REMOVE_TEXT_COMMAND as Yp, CLICK_COMMAND as Li, COMMAND_PRIORITY_LOW as _t, COMMAND_PRIORITY_EDITOR as Hn, createCommand as Fl, isDOMNode as Es, $getNearestNodeFromDOMNode as Yr, $isRootNode as Xp, DROP_COMMAND as la, $isDecoratorNode as Nn, COPY_COMMAND as xn, getDOMSelection as Qp, isSelectionWithinEditor as Zp, $createRangeSelectionFromDom as zl, isDOMTextNode as hk, BLUR_COMMAND as Bl, $addUpdateTag as wt, SKIP_DOM_SELECTION_TAG as Wr, CLEAR_HISTORY_COMMAND as gk, INSERT_PARAGRAPH_COMMAND as As, INSERT_LINE_BREAK_COMMAND as mk, $getPreviousSelection as yk, KEY_ESCAPE_COMMAND as jl, BEFORE_INPUT_COMMAND as bk, COMPOSITION_START_COMMAND as kk, DRAGSTART_COMMAND as Oc, FOCUS_COMMAND as eh, $isRootOrShadowRoot as xk, CAN_UNDO_COMMAND as Tk, CAN_REDO_COMMAND as Ck, getDOMSelectionFromTarget as _k, $onUpdate as th, KEY_ENTER_COMMAND as rh, LineBreakNode as nh, $copyNode as Sk, createEditor as vk, SELECT_ALL_COMMAND as Mk, isExactShortcutMatch as Ek, getDOMTextNode as Ak, HISTORIC_TAG as Vl, UNDO_COMMAND as ih, REDO_COMMAND as sh, CLEAR_EDITOR_COMMAND as Pk } from "lexical";
import { addClassNamesToElement as ki, removeClassNamesFromElement as Ga, $findMatchingParent as Ae, $dfsIterator as ua, $dfs as ai, mergeRegister as Re, registerNestedElementResolver as oh, $unwrapNode as Rc, IS_APPLE as Gn } from "@lexical/utils";
import { useLexicalNodeSelection as Nk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Zt } from "fast-equals";
import ys from "quill-delta";
import { useLexicalComposerContext as fe } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as wk } from "unicode-segmenter/grapheme";
import { copyToClipboard as Ok, $getLexicalContent as Rk } from "@lexical/clipboard";
import { TreeView as $k } from "@lexical/react/LexicalTreeView";
import * as qk from "react-dom";
import { createPortal as jn } from "react-dom";
import { LexicalComposer as ah } from "@lexical/react/LexicalComposer";
import { ContentEditable as ch } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as lh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as uh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as dh } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Ik } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Lk, createDOMRange as Dk, createRectsFromDOMRange as Uk } from "@lexical/selection";
import { autoUpdate as Kk, computePosition as Fk, shift as zk, flip as Bk } from "@floating-ui/dom";
import { $generateNodesFromDOM as jk } from "@lexical/html";
import { AutoFocusPlugin as Vk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Wk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as fh, LexicalCollaboration as Hk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Gk } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Jk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Yk, $isRootTextContentEmpty as Xk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Qk } from "@lexical/yjs";
import { Array as Od, Map as Rd, YArrayEvent as Zk } from "yjs";
const Ja = (e) => rt(Wn(e)), ex = {
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
function ph(e) {
  return ex[e];
}
const D = " ", No = "​", cr = D, Wl = `${D}|`, or = "p", Ps = "+", hh = "-", wo = "chapter", $c = "verse", $d = "invalid", tx = "text-spacing", rx = "formatted-font", nx = "marker-", Hl = "external-usj-mutation", gh = "selection-change", Rt = "cursor-change", qc = "annotation-change", Ns = "delta-change", mh = "marker-settle", ix = [
  Hl,
  gh,
  Rt,
  qc,
  Ns
], Jn = "zmsc-s", Ri = "zmsc-e", sx = [Jn, Ri], ox = [
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
  Jn,
  Ri
], yh = 1, Gl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], ax = Gl.filter((e) => e !== "sid" && e !== "eid");
class kr extends Js {
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
    return new kr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return kh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (ox.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: yh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function bh(e) {
  return sx.includes(e);
}
function kh(e, t, r, n, i) {
  return rt(new kr(e, t, r, n, void 0, i));
}
function it(e) {
  return e instanceof kr;
}
const Jl = "f", cx = [
  // Footnote
  Jl,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function mo(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const lx = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], xh = 1;
class $e extends Tr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Jl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (mo(t) === "crossref" ? hh : Ps), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new $e(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => dx(t) ? {
        conversion: ux,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Yl().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (cx.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", mo(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", mo(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", mo(this.getMarker()))), { element: r };
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
      version: xh
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
function ux(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Yl(t, r, n) };
}
function Yl(e, t, r, n, i) {
  return rt(new $e(e, t, r, n, i));
}
function dx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return $e.isValidMarker(t) && e.classList.contains($e.getType());
}
function B(e) {
  return e instanceof $e;
}
var C;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(C || (C = {}));
var x;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(x || (x = {}));
const Ic = {
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
}, Ln = {
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
}, qd = {
  p: { children: Ln },
  q: { children: Ln },
  q1: { children: Ln },
  q2: { children: Ln },
  q3: { children: Ln },
  q4: { children: Ln },
  b: { children: Ln },
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
function Rr(e) {
  const t = Object.hasOwn(Ic, e) ? Ic[e] : void 0, r = Object.hasOwn(qd, e) ? qd[e] : void 0;
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
const Th = "v", Ch = "c", Dn = "fig", Id = "tr", Lc = "esb", _h = "esbe", Ld = "periph", Dd = "alt", Ud = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, fx = {
  "": "start",
  c: "center",
  r: "end"
};
function Kd(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Fd(e) {
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
const px = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function hx(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === No && s + 1 < e.length && Fd(e[s + 1]) || (Fd(o) ? (r || (i = t.length, t += o), r = !0) : px.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function gx(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function mx(e, t) {
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
const yx = /^(?:qt[1-5]?|ts)-[se]$/;
function Xl(e) {
  return yx.test(e) || bh(e);
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
function bx(e, t, r) {
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
      a(hx(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = mx(e, i + 1);
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
    if (l === Th) {
      const { word: g, next: y } = Ya(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === Ch) {
      const { word: g, next: y } = Ya(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), h = f ? l.slice(1) : l, p = t(h)?.type;
    if (p === x.Note || p === void 0 && $e.isValidMarker(l)) {
      const { word: g, next: y } = Ya(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (p === x.Milestone || p === void 0 && Xl(l)) {
      const g = Mx(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), b = y === -1 ? e.length : y;
        o(e.slice(c, b)), i = b;
      }
      continue;
    }
    p === x.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : p === x.Character ? (d(), n.push({ kind: "charOpen", marker: h, isNested: f })) : Oo(h) ? (d(), Oo(h)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: h, isNested: f })) : (d(), !(r || s !== void 0) || l === Lc || l === _h ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: h, isNested: f }));
  }
  return n;
}
const zd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Oo(e) {
  return Object.hasOwn(zd, e) ? zd[e] : void 0;
}
function kx(e) {
  return Oo(e) !== void 0;
}
const xx = /([-\w]+)\s*=\s*"(.*?)"/g, Tx = /[\s\u200B]*[\n\r][\s\u200B]*/g, Sh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function da(e) {
  return Sh[e];
}
const Cx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function _x(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ws(e, t, r = Sh[t]) {
  const n = e.replace(Tx, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(xx)];
  if (s.length > 0) {
    if (!_x(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Cx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function fa(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Sx(e) {
  const t = Kr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function vx(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ws(e.slice(n + 1, i), r, fa(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Mx(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ws(s.slice(o + 1), r, fa(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = vx(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Pr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", D);
}
function fn(e) {
  return e.content || (e.content = []), e.content;
}
function Kr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? fn(u) : d ? fn(d) : r;
  let h = !1;
  const p = () => {
    if (s)
      return o.length > a ? fn(o[o.length - 1].object) : fn(s);
    if (o.length > 0)
      return fn(o[o.length - 1].object);
    if (!i) {
      if (h && !n)
        return f();
      i = { type: "para", marker: or, content: [] }, f().push(i);
    }
    return fn(i);
  }, g = (X) => {
    const P = p();
    typeof X == "string" && typeof P[P.length - 1] == "string" ? P[P.length - 1] = P[P.length - 1] + X : P.push(X);
  }, y = (X) => {
    for (let P = X; P < o.length; P += 1) {
      const ee = o[P].object;
      ee.closed = "false";
    }
  }, b = () => {
    y(0), o.length = 0;
  }, T = (X) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, X || (s.closed = "false"), s = void 0);
  }, k = () => {
    c = void 0, l = void 0;
  }, A = (X, P, ee) => {
    b();
    const [, pe, Se, ct] = ee, mt = {
      type: "table:cell",
      marker: ct ? P.slice(0, P.indexOf("-")) : P,
      align: fx[pe],
      content: []
    };
    ct && (mt.colspan = String(Number(ct) + 1 - Number(Se))), fn(X).push(mt), i = mt;
  }, _ = (X) => {
    u && (X || (u.closed = "false"), u = void 0);
  }, O = () => {
    d = void 0;
  };
  let q, F = "", S;
  const W = () => {
    F && g(Pr(F)), F = "";
  }, G = (X = !1) => {
    q?.type === "sidebar" ? F = "" : X && F.endsWith(`
`) && (F = F.slice(0, -1)), q = void 0, W();
  }, ae = () => {
    if (!S)
      return;
    const X = { type: "char", marker: S.marker, content: [] };
    S.value && (X.content = [Pr(S.value)]), p().push(X), o.push({ object: X }), S = void 0;
  }, te = (X, P) => {
    h = !1, k(), b(), T(!1), i = { type: "para", marker: X, content: [] }, P && (i.content = [Pr(P)]), f().push(i);
  }, Pe = () => {
    S && (te(S.marker, S.value), S = void 0);
  };
  let xe;
  const Ut = (X) => {
    if (!xe)
      return;
    let { value: P } = xe;
    xe = void 0, X && P.endsWith(`
`) && (P = P.slice(0, -1));
    const ee = P.indexOf("|"), pe = ee >= 0 ? ws(P.slice(ee + 1), Ld) : void 0, Se = ee >= 0 ? P.slice(0, ee) : P, ct = ee >= 0 && (!pe || !!Se && !!pe[Dd]), mt = ct ? void 0 : pe, ne = ct ? P : Se, Xe = {
      type: "periph",
      ...ne ? { [Dd]: Pr(ne) } : {},
      ...mt
    };
    Xe.content = [], f().push(Xe), d = Xe, i = void 0;
  };
  let Ke;
  const j = () => {
    if (Ke) {
      if (Ke.shape === "para")
        te(Dn, Ke.value);
      else {
        const X = { type: "char", marker: Dn, content: [] };
        Ke.value && (X.content = [Pr(Ke.value)]), p().push(X), o.push({ object: X });
      }
      Ke = void 0;
    }
  }, Y = bx(e, t?.getMarker ?? Rr, n);
  for (let X = 0; X < Y.length; X++) {
    const P = Y[X];
    if (S) {
      if (P.kind === "text") {
        S.value += P.text;
        continue;
      }
      if (S.shape === "char" && P.kind === "end" && P.marker.replace(/^\+/, "") === S.marker) {
        if (S.value.trim() === "") {
          p().push({ type: "char", marker: S.marker, content: [] }), S = void 0, G();
          continue;
        }
        Object.assign(S.target, {
          [S.attrName]: Pr(S.value.trim())
        });
        const ee = S.marker;
        if (S = void 0, ee === "ca") {
          const pe = Y[X + 1];
          pe?.kind === "text" && /^[\s\u200B]*$/.test(pe.text) && X++;
        }
        continue;
      }
      if (S.shape === "para" && (P.kind === "para" || P.kind === "chapter")) {
        const ee = S.value.replace(/[\s\u200B]+$/, "");
        ee === "" ? (te(S.marker), S = void 0) : (Object.assign(S.target, { [S.attrName]: Pr(ee) }), S = void 0);
      } else {
        q = void 0, (P.kind === "para" || P.kind === "chapter") && S.value.endsWith(`
`) && (S.value = S.value.slice(0, -1)), S.shape === "para" ? Pe() : ae(), X--;
        continue;
      }
    }
    if (xe) {
      if (P.kind === "text" || P.kind === "optbreak") {
        xe.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      Ut(P.kind === "para" || P.kind === "chapter"), X--;
      continue;
    }
    if (Ke) {
      if (P.kind === "text" || P.kind === "optbreak") {
        Ke.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      if (P.kind === "end" && P.marker.replace(/^\+/, "") === Dn) {
        const ee = Ke.value.indexOf("|"), pe = ee >= 0 ? ws(Ke.value.slice(ee + 1), Dn) : void 0;
        if (pe) {
          const Se = {};
          for (const [ne, Xe] of Object.entries(pe))
            Se[ne === "src" ? "file" : ne] = Xe;
          const ct = {
            type: "figure",
            marker: Dn,
            ...Se
          }, mt = Ke.value.slice(0, ee);
          mt && (ct.content = [Pr(mt)]), g(ct), Ke = void 0;
          continue;
        }
      }
      j(), X--;
      continue;
    }
    if (q)
      if (P.kind === "text") {
        if (P.text.includes(`
`) && /^[\s\u200B]*$/.test(P.text)) {
          F += P.text;
          continue;
        }
        G();
      } else if (P.kind === "charOpen" || P.kind === "para") {
        const ee = P.kind === "para" || !P.isNested ? Oo(P.marker) : void 0;
        if (ee && ee.targetTypes.includes(q.type)) {
          F = "", S = {
            target: q,
            attrName: ee.attrName,
            marker: P.marker,
            shape: ee.shape,
            value: ""
          };
          continue;
        }
        G(P.kind === "para");
      } else
        G(P.kind === "chapter");
    if (!s && !n && (P.kind === "charOpen" && !P.isNested && P.marker === Dn || P.kind === "para" && P.marker === Dn)) {
      b(), Ke = { shape: P.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (P.kind) {
      case "text": {
        let ee = P.text;
        if (!s && ee.endsWith(`
`)) {
          const pe = Y[X + 1];
          (pe === void 0 || pe.kind === "para" || pe.kind === "chapter") && (ee = ee.slice(0, -1));
        }
        ee && g(Pr(ee));
        break;
      }
      case "para": {
        const ee = !s && !n;
        if (ee && P.marker === Id) {
          b(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Id, content: [] }, fn(c).push(l), i = l, h = !1;
          break;
        }
        if (ee && l) {
          const pe = Ud.exec(P.marker);
          if (pe && Kd(pe)) {
            A(l, P.marker, pe);
            break;
          }
        }
        if (k(), !n && P.marker === Lc) {
          b(), T(!1), _(!1);
          const pe = {
            type: "sidebar",
            marker: Lc,
            content: []
          };
          f().push(pe), u = pe, i = void 0, q = u, h = !1;
          break;
        }
        if (P.marker === _h && u) {
          b(), T(!1), _(!0), i = void 0;
          break;
        }
        if (!n && P.marker === Ld) {
          b(), T(!1), _(!1), O(), xe = { value: "" }, i = void 0, h = !1;
          break;
        }
        te(P.marker);
        break;
      }
      case "verse": {
        T(!1);
        const ee = { type: "verse", marker: Th, number: P.number };
        g(ee), q = ee;
        break;
      }
      case "chapter": {
        b(), T(!1), k(), _(!1), O(), i = void 0;
        const ee = {
          type: "chapter",
          marker: Ch,
          number: P.number
        };
        r.push(ee), q = ee, h = !0;
        break;
      }
      case "note": {
        T(!1);
        const ee = p();
        s = { type: "note", marker: P.marker, caller: P.caller, content: [] }, a = o.length, ee.push(s), q = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !P.isNested) {
          const Se = Ud.exec(P.marker);
          if (Se && Kd(Se)) {
            A(l, P.marker, Se);
            break;
          }
        }
        if (!P.isNested) {
          const Se = s ? a : 0;
          y(Se), o.length = Se;
        }
        const ee = p(), pe = { type: "char", marker: P.marker, content: [] };
        ee.push(pe), o.push({ object: pe });
        break;
      }
      case "end": {
        const ee = P.marker.replace(/^\+/, ""), pe = s ? a : 0, Se = o.findLastIndex((ct, mt) => mt >= pe && ct.object.marker === ee);
        Se >= 0 ? (Ex(o[Se].object), y(Se + 1), o.length = Se) : s && s.marker === ee ? T(!0) : (y(pe), o.length = pe, g({ type: "unmatched", marker: `${P.marker}*` }));
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
  if (xe && Ut(!0), Ke && j(), S)
    if (S.shape === "para") {
      const X = S.value.replace(/[\s\u200B]+$/, "");
      X === "" ? te(S.marker) : Object.assign(S.target, { [S.attrName]: Pr(X) }), S = void 0;
    } else
      S.value.endsWith(`
`) && (S.value = S.value.slice(0, -1)), ae();
  b(), T(!1), _(!1);
  const ie = (X) => {
    for (const P of X)
      typeof P != "string" && P.content && (ie(P.content), P.content.length === 0 && delete P.content);
  };
  return ie(r), r;
}
function Ex(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ws(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Yn = ca("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Tn = ca("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), he = ca("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Fr = "marker-trailing-space", vh = 1, Ax = "marker", Ql = ca("isGutterMarker", {
  parse: (e) => e === !0
});
class nn extends Js {
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
    return new nn(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Nx(t) ? {
        conversion: Px,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Xr().updateFromJSON(t);
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
    return r && ii(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: vh
    };
  }
  // Mutation
  /**
   * Stays `false` even though a paragraph's gutter glyph can be selected: it is selected only by
   * clicking it (`ParaMarkerSelectionPlugin`, shared-react), and arrow keys never stop on it.
   * Returning `true` would also change Lexical's native Backspace-beside-a-decorator behavior at
   * every paragraph start, where `StructureKeyboardPlugin` arms paragraph merges.
   */
  isKeyboardSelectable() {
    return !1;
  }
}
function Px(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Xr(t, r) };
}
function Xr(e, t) {
  return rt(new nn(e, t));
}
function Mh(e) {
  return Ot(Xr(Ax, e), Ql, !0);
}
function Qr(e) {
  return Vt(e) && le(e, Ql);
}
function Nx(e) {
  return e?.tagName === "span";
}
function Vt(e) {
  return e instanceof nn;
}
function Eh(e) {
  return e?.type === nn.getType();
}
const bn = "internal-comment", wx = [bn], Ah = Object.freeze({}), Dc = Object.freeze({}), Uc = Object.freeze({}), Kc = Object.freeze({}), Fc = Object.freeze({}), Ox = 1, xi = /* @__PURE__ */ new Map(), ls = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map();
class dt extends Tr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Ah, r, n, i, s, o) {
    super(o), this.__typedIDs = yo(t), this.__typedOnClicks = Xa(r), this.__typedOnRemoves = Qa(n), this.__typedOnMouseEnters = Za(i), this.__typedOnMouseLeaves = ec(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = yo(t.__typedIDs), n = Xa(t.__typedOnClicks), i = Qa(t.__typedOnRemoves), s = Za(t.__typedOnMouseEnters), o = ec(t.__typedOnMouseLeaves);
    return new dt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return wx.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Os().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Ox
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      ki(n, Un(t.theme.typedMark, a)), c.length > 1 && ki(n, Un(t.theme.typedMarkOverlap, a));
      for (const l of c)
        ki(n, Un("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = Un(n.theme.typedMark, s), d = Un(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && ki(r, u) : l === 0 && Ga(r, u), c === 1 ? l === 2 && ki(r, d) : l === 1 && Ga(r, d));
      const f = new Set(o), h = new Set(a);
      for (const p of o)
        h.has(p) || Ga(r, Un("annotationId", p));
      for (const p of a)
        f.has(p) || ki(r, Un("annotationId", p));
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
    return Me(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = yo(r.__typedIDs);
    r.__typedIDs = yo(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ro(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Xa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Me(t) ? xi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Qa(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Me(t) ? ls.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Za(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Me(t) ? Ti.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ec(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Me(t) ? Ci.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Me(a))
      return;
    st(t), st(r);
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
    if (!Me(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ro(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Os(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), xi.delete(r.getKey()), ls.delete(r.getKey()), Ti.delete(r.getKey()), Ci.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
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
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (r) => {
      this.handleDOMMouseLeave(r, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, r) {
    const n = Ci.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Dc) {
      const t = xi.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      xi.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    xi.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    st(t), st(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = pn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = pn(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Dc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Uc) {
      const t = ls.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      ls.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    ls.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    st(t), st(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = pn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = pn(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Uc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Kc) {
      const t = Ti.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Ti.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Ti.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    st(t), st(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = pn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = pn(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Kc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Fc) {
      const t = Ci.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Ci.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Ci.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    st(t), st(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = pn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = pn(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Fc) {
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
    const i = Rx(t, r);
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
    for (; Me(t) && jd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Me(r) && jd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = $x(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = qx(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ix(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Lx(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function yo(e = Ah) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (st(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      st(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Xa(e) {
  if (!e || e === Dc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    st(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      st(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Qa(e) {
  if (!e || e === Uc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    st(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      st(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Za(e) {
  if (!e || e === Kc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    st(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      st(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ec(e) {
  if (!e || e === Fc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    st(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      st(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function pn(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Bd(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Rx(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function jd(e, t) {
  const r = Bd(e), n = Bd(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function $x(e, t) {
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
function qx(e, t) {
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
function Ix(e, t) {
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
function Lx(e, t) {
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
function Un(e, t) {
  return `${e}-${t}`;
}
function Vd(e) {
  return `external-${e}`;
}
function Os(e, t, r, n, i) {
  return rt(new dt(e, t, r, n, i));
}
function Me(e) {
  return e instanceof dt;
}
function Ph(e) {
  return e?.type === dt.getType();
}
function Ro(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Nh(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, h = d ? c : l;
  let p, g;
  for (let y = 0; y < u; y++) {
    const b = a[y];
    if (L(g) && g.isParentOf(b))
      continue;
    const T = y === 0, k = y === u - 1;
    let A = null;
    if (M(b)) {
      const _ = b.getTextContentSize(), O = T ? f : 0, q = k ? h : _;
      if (O === 0 && q === 0)
        continue;
      const F = b.splitText(O, q);
      A = F.length > 1 && (F.length === 3 || T && !k || q === _) ? F[1] : F[0];
    } else {
      if (Me(b))
        continue;
      L(b) && b.isInline() && (A = b);
    }
    if (A !== null) {
      if (A && A.is(p))
        continue;
      const _ = A.getParent();
      (_ == null || !_.is(p)) && (g = void 0), p = _, g === void 0 && (g = Os(), g.addID(t, r, n, i, s, o), A.insertBefore(g)), g.append(A);
    } else
      p = void 0, g = void 0;
  }
  t === bn && L(g) && (d ? g.selectStart() : g.selectEnd());
}
function Dx(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Me(n))
      return n.getTypedIDs()[t];
    if (M(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Me(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Ux = ["type", "marker", "content"], zc = "unknown", wh = 1, Kx = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ci extends Tr {
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
    return new ci(r, n, i, s);
  }
  static importDOM() {
    return {
      [zc]: (t) => zx(t) ? {
        conversion: Fx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Zl().updateFromJSON(t);
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
    return Kx.has(this.getTag());
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
    const t = document.createElement(zc);
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
      version: wh
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
    if (si(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function Fx(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Zl(t, r) };
}
function Zl(e, t, r) {
  return rt(new ci(e, t, r));
}
function zx(e) {
  return e?.tagName.toLowerCase() === zc;
}
function je(e) {
  return e instanceof ci;
}
const Oh = 1, Bx = "attribute-run";
function tc(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class sn extends Tr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new sn(r, n);
  }
  static importJSON(t) {
    return Rh(t.runKind).updateFromJSON(t);
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
    t.classList.add(Bx);
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
      version: Oh
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
function Rh(e) {
  return rt(new sn(e));
}
function Be(e) {
  return e instanceof sn;
}
const Rs = "id", $h = 1, jx = [
  "type",
  "marker",
  "code",
  "content"
];
class Wt extends Tr {
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
    return new Wt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return qh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return rk(t);
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
      version: $h
    };
  }
}
function qh(e, t) {
  return rt(new Wt(e, t));
}
function _e(e) {
  return e instanceof Wt;
}
function eu(e) {
  return e?.type === Wt.getType();
}
const $o = "c", Ih = 1, Vx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Yt extends Tr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = $o, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Yt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Lh().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(wo, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Ih
    };
  }
}
function Lh(e, t, r, n, i) {
  return rt(new Yt(e, t, r, n, i));
}
function Le(e) {
  return e instanceof Yt;
}
function Wx(e) {
  return e?.type === Yt.getType();
}
const Dh = [
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
], Uh = [
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
], Hx = [
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
  ...Dh,
  ...Uh
], Kh = 1, Gx = ["type", "marker", "content"];
class Ce extends Tr {
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
    return new Ce(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Hx.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Dh.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Uh.includes(t);
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
    return Ce.isValidFootnoteMarker(t) || Ce.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Yx(t) ? {
        conversion: Jx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Zr().updateFromJSON(t);
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
    return Wd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Wd(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Kh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Zr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Wd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Jx(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Zr(t) };
}
function Zr(e, t) {
  return rt(new Ce(e, t));
}
function Yx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ce.isValidMarker(t) && e.classList.contains(Ce.getType());
}
function K(e) {
  return e instanceof Ce;
}
function Xx(e) {
  return e?.type === Ce.getType();
}
const Fh = 1, Qx = "c", zh = "span";
class zr extends Js {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Qx, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new zr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Bh(t) ? {
        conversion: Zx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return tu().updateFromJSON(t);
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
    const t = document.createElement(zh);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(wo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(wo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? ar(this.getMarker(), this.getNumber()) : this.getNumber();
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
  // Mutation
  isInline() {
    return !1;
  }
  isKeyboardSelectable() {
    return !1;
  }
}
function Zx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: tu(t) };
}
function tu(e, t, r, n, i, s) {
  return rt(new zr(e, t, r, n, i, s));
}
function Bh(e) {
  return e ? e.classList.contains(wo) && e.tagName.toLowerCase() === zh : !1;
}
function Xs(e) {
  return e instanceof zr;
}
function eT(e) {
  return e?.type === zr.getType();
}
const jh = 1;
class Cn extends Il {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Cn(t.__key);
  }
  static importJSON(t) {
    return gr().updateFromJSON(t);
  }
  getMarker() {
    return or;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: jh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = gr();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function gr() {
  return rt(new Cn());
}
function Ir(e) {
  return e instanceof Cn;
}
function pa(e) {
  return e?.type === Cn.getType();
}
const tT = [
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
], Vh = 1, rT = ["type", "marker", "content"];
class ft extends Il {
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
    return new ft(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (tT.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: nT,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Di().updateFromJSON(t);
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
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Vh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Di(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function nT(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Di(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Di(e, t) {
  return rt(new ft(e, t));
}
function ce(e) {
  return e instanceof ft;
}
function ru(e) {
  return e?.type === ft.getType();
}
const qo = "v", Wh = 1, iT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class St extends et {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = qo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new St(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Hh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add($c, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Wh
    };
  }
}
function Hh(e, t, r, n, i, s) {
  return rt(new St(e, t, r, n, i, s));
}
function ze(e) {
  return e instanceof St;
}
function Gh(e) {
  return e?.type === St.getType();
}
const sT = "​", Ui = sT;
var Hd;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Hd || (Hd = {}));
var Gd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Gd || (Gd = {}));
function oT() {
  return Ee(Ui);
}
function aT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Ui, ""));
}
function Qs(e) {
  return e.length > 0 && e.includes(Ui) && e.replaceAll(Ui, "") === "";
}
function Zs(e) {
  return M(e) && Qs(e.getTextContent());
}
function Jh(e) {
  return Wx(e) || eT(e);
}
function tt(e) {
  return Le(e) || Xs(e);
}
function Yh(e, t) {
  return e.find((r) => tt(r) && r.getNumber() === t.toString());
}
function cT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && tt(r));
}
function Bc(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function lT(e) {
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
function Ht(e) {
  return Ae(e, B) ?? void 0;
}
function uT(e) {
  return _e(e) || Le(e) || K(e) || Xs(e) || Ir(e) || it(e) || ce(e) || B(e) || ze(e) || je(e);
}
function nu(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Xh(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Ge(e) {
  return Fe(e) || _e(e);
}
function Fe(e) {
  return ce(e) || Ir(e);
}
function dT(e) {
  return ru(e) || pa(e);
}
function Io(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Xn(e, t) {
  const r = le(t, Yn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function fT(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? fk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function pT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Ki(e) {
  return e?.type === et.getType();
}
function hT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function gT(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function De(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function at(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Qh(e, t, r) {
  const n = De(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function ar(e, t) {
  let r = De(e);
  return t && (r += `${D}${t}`), r += " ", r;
}
function mT(e) {
  const t = e[Ys];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Zh(e) {
  return tg(e) || Ki(e) && mT(e) === "attribute" ? "" : Ki(e) && e.text !== D ? e.text : Xx(e) ? e.children.map((t) => Zh(t)).join("") : "";
}
function yT(e) {
  return e.map((r) => Zh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Gt(e) {
  return " " + e + D;
}
function iu(e) {
  const t = [];
  for (const r of e) {
    if (!K(r))
      continue;
    const n = eg(r);
    n !== cr && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function eg(e) {
  return $(e) || _r(e) || M(e) && le(e, he) === "attribute" ? "" : M(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => eg(t)).join("") : "";
}
function _r(e) {
  return Vt(e) && e.getTextType() === "marker";
}
function bt(e) {
  return $(e) || _r(e);
}
function su(e) {
  if (!e || !bt(e))
    return !1;
  const t = e.getParent();
  return _e(t) && e.is(t.getFirstChild());
}
function tg(e) {
  return cu(e) || Eh(e) && e.textType === "marker";
}
function mn(e) {
  if (!si(e))
    return;
  const t = e.getNodes();
  if (t.length !== 1)
    return;
  const [r] = t, n = ou(r.getParent());
  return n?.is(r) ? n : void 0;
}
function _n(e) {
  const t = mn(e)?.getParent();
  return ce(t) ? t : void 0;
}
function ou(e) {
  if (!ce(e))
    return;
  const t = e.getFirstChild();
  if (Qr(t))
    return Ae(e, je) ? void 0 : t;
}
const Ai = /* @__PURE__ */ new WeakMap();
function bT(e) {
  return Ai.set(e, (Ai.get(e) ?? 0) + 1), () => {
    const t = (Ai.get(e) ?? 1) - 1;
    t > 0 ? Ai.set(e, t) : Ai.delete(e);
  };
}
function kT() {
  const e = qr();
  return e.isEditable() && (Ai.get(e) ?? 0) > 0;
}
function xT(e) {
  if (!ou(e.getParent())?.is(e) || !kT())
    return !1;
  const t = Ll();
  return t.add(e.getKey()), zt(t), !0;
}
function Jd(e, t) {
  TT(e, t), e.setMarker(t);
}
function TT(e, t) {
  const r = e.getMarker(), n = De(r), i = De(r, !0), s = at(r), o = at(r, !0), a = Ce.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!bt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if ($(c))
        c.setMarker(t);
      else if (_r(c)) {
        const f = l.startsWith(De("", !0));
        c.setTextContent(u ? De(t, f) : at(t, f));
      }
    }
  });
}
function Je(e, t = nk) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ue(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function rg(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function ng(e) {
  if (!w(e))
    return Yd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !M(t)))
    return t ?? void 0;
  try {
    return Yd(e) ?? t ?? void 0;
  } catch (n) {
    if (rg(n))
      return t ?? void 0;
    throw n;
  }
}
function CT(e, t) {
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
function au(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function _T(e) {
  return !!e && e.includes("-");
}
function ig(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Yd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function eo(e) {
  if (!e)
    return !1;
  if (oi(e) || $(e) || _r(e) || Be(e) || Vt(e) && e.getTextType() === "attribute")
    return !0;
  if (M(e)) {
    const t = le(e, he);
    if (t === Fr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === D || Qs(r))
      return !0;
  }
  return !1;
}
function to() {
  const e = Ee(D);
  return Ot(e, he, Fr), e.setMode("token"), e;
}
function ST(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function Sr(e) {
  return M(e) && le(e, he) === Fr;
}
function sg(e) {
  const t = e.getFirstChild();
  if (!bt(t) || t === null || Sr(t.getNextSibling()))
    return !1;
  const r = N();
  if (!w(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Xi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!eo(s)) {
      if (Me(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (M(s) && s.getType() === et.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function ha(e) {
  let t = e.getParent();
  for (; t && Me(t); )
    t = t.getParent();
  return t;
}
function vT(e, t) {
  return Xi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function MT(e, t) {
  const r = ha(e);
  if (!r)
    return;
  const n = Xi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function ET(e, t) {
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
function og(e, t) {
  const r = Xi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (eo(n))
    return og(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Io(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Io(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function AT(e, t) {
  if (t <= 0)
    return 0;
  const r = Xi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? PT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function PT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const NT = 1;
class Br extends et {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(zn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Br(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return kt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || zn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = zn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = zn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = zn(r.__marker, r.__markerSyntax, t), r;
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
      version: NT
    };
  }
}
function kt(e, t, r) {
  return rt(new Br(e, t, void 0, r));
}
function $(e) {
  return e instanceof Br;
}
function cu(e) {
  return e?.type === Br.getType();
}
function on(e) {
  return e.getTextContent() === zn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function wT(e) {
  e.setTextContent(zn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function zn(e, t, r = !1) {
  return t === "closing" ? at(e, r) : t === "selfClosing" ? at("") : De(e, r);
}
const OT = /* @__PURE__ */ new Set(["closed"]);
function wr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !OT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function ag(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function cg(e) {
  const t = Object.keys(e).filter((n) => !ax.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function lg(e, t, r, n) {
  return ag(
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
function Ts(e) {
  return e.getChildren().find((t) => $(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function RT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Ts(e) === void 0 && ug(e) === void 0;
}
function ug(e) {
  return e.getChildren().find((t) => M(t) && le(t, he) === "attribute");
}
function $s(e, t) {
  return ro(e.getNextSibling(), t);
}
const $T = /^[ \u00A0]+$/;
function lu(e) {
  if (on(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = De(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && $T.test(r.slice(t.length));
}
function ro(e, t) {
  let r, n, i, s;
  return Be(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), $(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  lu(e) && (r = e, e = e.getNextSibling()), M(e) && le(e, he) === "attribute" && (n = e, e = e.getNextSibling()), $(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && on(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function en(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!$(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (M(n) && n.getTextContent() === Gt(e.getCaller()))
    return n;
}
function uu(e) {
  const t = en(e);
  return t ? ro(t.getNextSibling(), "cat") : {};
}
function ga(e) {
  const t = e.getFirstChild();
  if (!(!M(t) || $(t)) && le(t, he) !== "attribute")
    return t;
}
function dg(e) {
  const t = ga(e);
  return t ? ro(t.getNextSibling(), "ca") : {};
}
function fg(e) {
  const t = ga(e);
  if (!t)
    return;
  const r = ro(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function pg(e) {
  const t = fg(e);
  return t ? ro(t.getNextSibling(), "cp") : {};
}
function hg(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (ze(n))
        return n;
      if (!($(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || M(n) && le(n, he) === "attribute" || K(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Be(n)))
        return;
    }
}
function ma(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Be(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), $(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  lu(s) && (t = s, s = s.getNextSibling()), M(s) && le(s, he) === "attribute" && (r = s, s = s.getNextSibling()), $(s) && s.getMarkerSyntax() === "selfClosing" && on(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function du(e) {
  return K(ha(e));
}
function fu(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? du(t) : t.getChildren().some((i) => K(i) && i.getMarker() === r) ? !0 : void 0;
}
function qT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!$(t))
      return;
    const r = fu(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Qi(e) {
  return M(e) && e.getType() === et.getType() && le(e, he) !== "attribute";
}
function ya(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !$(t) || !K(r) || !gg(t, r) || !Qi(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function gg(e, t) {
  return e.getMarkerSyntax() === "opening" && fu(e, t) !== void 0;
}
function pu(e, t) {
  if (!gg(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return $(r) ? fu(r, t) === !0 ? "spacer" : void 0 : Qi(r) ? r.getTextContent().startsWith(D) ? void 0 : "prefix" : "spacer";
}
function IT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if ($(t) && pu(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function mg(e, t) {
  const r = N();
  if (!w(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function yg(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!$(t))
      return;
    const r = pu(t, e);
    if (r !== void 0 && !mg(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        M(n) && n.setTextContent(D + n.getTextContent());
      } else
        t.insertAfter(Ee(D));
  });
}
function bg(e) {
  return e.isAttached() ? e.getChildren().some((t) => $(t) && pu(t, e) !== void 0 && mg(t, e)) : !1;
}
const LT = "file", DT = "src", UT = "colspan", KT = "category", FT = "alt", zT = "closed", BT = "false";
function jT(e) {
  return e[zT] !== BT;
}
function VT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === LT ? DT : t,
    r
  ]));
}
function kg(e, t) {
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
function xg(e, t, r) {
  const n = r ?? {}, i = jT(n);
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
        opening: `\\${kg(t, n[UT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: wr(VT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [KT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + wr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [FT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: wr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: wr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const qt = { wantsRun: !1, valueText: void 0 }, an = {};
function rc(e, t) {
  if (t === "va")
    return e;
  const r = $s(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function hu(e) {
  const t = N();
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
function ba(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!w(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function WT(e) {
  return Be(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : $(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : M(e) && le(e, he) === "attribute";
}
function HT(e) {
  if ($(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!M(e) || le(e, he) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!$(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function nc(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (ze(t))
      return t;
    if (!WT(t))
      return;
  }
}
function Xd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => ze(t),
    ownerOf: (t) => {
      if (Be(t))
        return t.getRunKind() === e ? nc(t) : void 0;
      const r = t.getParent();
      return Be(r) ? r.getRunKind() === e ? nc(r) : void 0 : HT(t) === e ? nc(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!ze(t))
        return qt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? qt : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (t) => ze(t) ? $s(rc(t, e), e) : an,
    graceSite: (t, r) => ze(t) ? !r.opener && !r.closer ? hu(rc(t, e)) : ba(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => ze(t) ? rc(t, e) : void 0
    }
  };
}
const GT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => K(e),
  ownerOf: () => {
  },
  expectedPieces: () => qt,
  scanPieces: () => an,
  graceSite: (e) => K(e) && bg(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, JT = {
  kind: "char",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (!M(e) || le(e, he) !== "attribute")
      return;
    const t = e.getParent();
    return K(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || Ts(e) === void 0)
      return qt;
    const t = wr(e.getUnknownAttributes() ?? {}, da(e.getMarker()));
    return t === "" ? qt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => K(e) ? { value: ug(e) } : an,
  graceSite: (e, t) => {
    if (!K(e) || t.value)
      return !1;
    const r = Ts(e);
    if (!r)
      return !1;
    const n = N();
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
    insertRunBefore: (e) => K(e) ? Ts(e) : void 0
  }
};
function Tg(e) {
  if ($(e))
    return e.getMarker() === "cat";
  if (!M(e) || le(e, he) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return $(t) && t.getMarker() === "cat";
}
function YT(e) {
  const t = e.getParent();
  if (!B(t))
    return;
  const r = en(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Tg(n))
        return;
    }
}
const XT = {
  kind: "cat",
  ownerPredicate: (e) => B(e),
  ownerOf: (e) => {
    if (Be(e))
      return e.getRunKind() === "cat" && B(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Be(t) ? t.getRunKind() === "cat" && B(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Tg(e) ? YT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!B(e) || e.getIsCollapsed() !== !1)
      return qt;
    const t = e.getCategory();
    return t === void 0 ? qt : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => B(e) ? uu(e) : an,
  graceSite: (e, t) => {
    if (!B(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = en(e);
      return r !== void 0 && hu(r);
    }
    return ba(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => B(e) ? en(e) : void 0
  }
};
function QT(e) {
  return Be(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : $(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : M(e) && le(e, he) === "attribute";
}
function ZT(e) {
  if ($(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!M(e) || le(e, he) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!$(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function eC(e) {
  const t = e.getParent();
  if (!Le(t))
    return;
  const r = ga(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!QT(n))
        return;
    }
}
function Qd(e) {
  const t = (r) => Le(r) ? e === "ca" ? ga(r) : fg(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Le(r),
    ownerOf: (r) => {
      if (Be(r))
        return r.getRunKind() === e && Le(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Be(n) ? n.getRunKind() === e && Le(n.getParent()) ? n.getParent() ?? void 0 : void 0 : ZT(r) === e ? eC(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Le(r))
        return qt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? qt : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (r) => Le(r) ? e === "ca" ? dg(r) : pg(r) : an,
    graceSite: (r, n) => {
      if (!Le(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && hu(i);
      }
      return ba(n);
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
function Cg(e) {
  if ($(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return M(e) && le(e, he) === "attribute";
}
function tC(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (it(t)) {
      const r = $(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Cg(t))
      return;
  }
}
const rC = {
  kind: "milestone",
  ownerPredicate: (e) => it(e),
  ownerOf: (e) => {
    const t = Be(e) ? e.getRunKind() === "milestone" ? e : void 0 : Be(e.getParent()) ? e.getParent() : Cg(e) ? e : void 0;
    if (!t || Be(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Be(t) ? it(r) ? r : void 0 : tC(t);
  },
  expectedPieces: (e) => {
    if (!it(e))
      return qt;
    const t = lg(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = wr(t, fa(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : D + r };
  },
  scanPieces: (e) => {
    if (!it(e))
      return an;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ma(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!it(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = N();
      if (!w(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return ba(t);
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
}, nC = xg("optbreak", void 0, void 0).opening, iC = {
  kind: "optbreak",
  ownerPredicate: (e) => je(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!je(t) || t.getTag() !== "optbreak"))
      return M(e) || Vt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: nC }),
  scanPieces: (e) => je(e) ? { value: e.getFirstChild() ?? void 0 } : an,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, sC = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => je(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => qt,
  scanPieces: () => an,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, oC = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => K(e),
  ownerOf: () => {
  },
  expectedPieces: () => qt,
  scanPieces: () => an,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, qs = [
  GT,
  JT,
  Xd("va"),
  Xd("vp"),
  XT,
  Qd("ca"),
  Qd("cp"),
  rC,
  iC,
  sC,
  oC
], aC = new Map(qs.map((e) => [e.kind, e]));
function Qn(e) {
  const t = aC.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Zn(e) {
  for (const t of qs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function _g(e) {
  return Zn(e) !== void 0;
}
const Lo = "unmatched", Sg = 2;
function Cs(e) {
  return `\\${e}`;
}
class cn extends et {
  __marker;
  constructor(t = "", r) {
    super(Cs(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new cn(r, n);
  }
  static importDOM() {
    return {
      [Lo]: (t) => lC(t) ? {
        conversion: cC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return gu().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Cs(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Cs(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add($d), r.title = Zd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Zd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Lo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add($d), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Sg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function vg(e) {
  return e.getTextContent() === Cs(e.getMarker());
}
function Zd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function cC(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: gu(t) };
}
function gu(e) {
  return rt(new cn(e));
}
function lC(e) {
  return e?.tagName.toLowerCase() === Lo;
}
function ln(e) {
  return e instanceof cn;
}
const Mg = "table", jc = "immutable-table", Eg = 1, uC = ["type", "marker", "content"];
class li extends Tr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return jc;
  }
  static clone(t) {
    return new li(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return dC().updateFromJSON(t);
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
      type: jc,
      ...t !== void 0 && { unknownAttributes: t },
      version: Eg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function dC(e) {
  return rt(new li(e));
}
function Ag(e) {
  return e instanceof li;
}
function fC(e) {
  return e?.type === jc;
}
const Pg = "table:row", ef = "immutable-table-row", Ng = 1, Vc = "tr", pC = ["type", "marker", "content"];
class Zi extends Tr {
  __marker;
  __unknownAttributes;
  constructor(t = Vc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return ef;
  }
  static clone(t) {
    return new Zi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return hC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Vc).setUnknownAttributes(t.unknownAttributes);
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
      type: ef,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Ng
    };
  }
}
function hC(e, t) {
  return rt(new Zi(e, t));
}
const wg = "table:cell", tf = "immutable-table-cell", Og = 1, Wc = "tc1", gC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function mC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class es extends Tr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Wc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return tf;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new es(r, n, i, s, o);
  }
  static importJSON(t) {
    return yC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Wc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = mC(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: tf,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Og
    };
  }
}
function yC(e, t, r, n) {
  return rt(new es(e, t, r, n));
}
function ts(e, t) {
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function Lt(e, t) {
  const r = ts(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Is(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function bC(e) {
  return e.getChildren().some((t) => $(t) && t.getMarkerSyntax() === "closing");
}
function kC(e) {
  return Is(e) ? void 0 : { closed: "false" };
}
function xC(e, t, r, n) {
  const i = t.getMarker(), s = du(t), o = bC(t);
  if (n) {
    e.append(kt(i, "opening", s));
    const [a] = r;
    Qi(a) && !a.getTextContent().startsWith(D) && a.setTextContent(D + a.getTextContent());
  }
  e.append(...r), o && e.append(kt(i, "closing", s));
}
function ei(e) {
  return Ae(e, K) ?? void 0;
}
function TC(e) {
  let t = e.getParent();
  for (; K(t); )
    t = t.getParent();
  return t;
}
function Hc(e) {
  const t = Rg(e);
  return e.getChildren().every((r) => $(r) || t && le(r, he) === "attribute" || M(r) && r.getTextContent().replaceAll(D, "") === "");
}
function Rg(e) {
  return Is(e);
}
function CC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? wr(r, da(e.getMarker())) : "";
  n !== "" && t.insertAfter(Ee(n)), e.remove();
}
function _C(e, t) {
  if (Is(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(kt(e.getMarker(), "closing", du(e)));
}
function SC(e, t) {
  return K(e) && !Is(e) && !Is(t);
}
function vC(e, t, r) {
  Hc(e) && e.getChildren().forEach((i) => {
    $(i) || i.remove();
  });
  const [n] = t;
  r && Qi(n) && !n.getTextContent().startsWith(D) && n.setTextContent(D + n.getTextContent()), e.append(...t);
}
function MC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Rg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = $(l) && l.getMarkerSyntax() === "closing", f = s && le(l, he) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = SC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      vC(e, o, n);
    else {
      const l = Zr(t.getMarker(), kC(t));
      xC(l, t, o, n), e.insertAfter(l), Hc(l) ? l.remove() : c = l;
    }
  i && !a && _C(t, n), Hc(t) && CC(t, c);
}
function Fi(e, t) {
  let r = e.getParent();
  for (; K(r); )
    MC(e, r, t), r = e.getParent();
}
function ka(e) {
  if (M(e) && !$(e)) {
    const t = ya(e);
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !$(r));
    if (t) {
      ka(t);
      return;
    }
    e.selectEnd();
  }
}
const $i = /* @__PURE__ */ new WeakMap();
function EC(e, t) {
  return $i.set(e, t), () => {
    $i.get(e) === t && $i.delete(e);
  };
}
function rf(e) {
  return $i.get(e);
}
function AC(e) {
  return $i.get(qr())?.has(e.getKey()) ?? !1;
}
function PC(e) {
  $i.get(qr())?.add(e.getKey());
}
function NC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Gc(e) {
  return !!(e.opener || e.value || e.closer);
}
function nf(e) {
  return /^\s/.test(e);
}
function mu(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !nf(t) || !nf(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function xa(e, t, r) {
  return r.wantsRun ? mu(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : NC(t);
}
function wC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return mu(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function $g(e, t) {
  return !Gc(e.scanPieces(t));
}
function no(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!xa(e, n, r))
    return !1;
  const i = N();
  if (!w(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Io(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function OC(e, t, r, n) {
  return !r.wantsRun || Gc(n) || pk(Ns) ? !1 : qr().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Gc(e.scanPieces(i));
  });
}
function RC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function sf(e) {
  const t = Ee(e);
  return Ot(t, he, "attribute"), t;
}
function $C(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Rh(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function qC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    M(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(sf(n.valueText));
    return;
  }
  const l = $C(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = kt(o(t), "opening"), h = l.getFirstChild();
    return h ? h.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : M(d) ? mu(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = sf(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(kt(a === "selfClosing" ? "" : o(t), a));
}
function Ls(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (xa(e, i, n) && !AC(t)) {
    if (OC(e, t, n, i)) {
      PC(t);
      return;
    }
    if (!no(e, t)) {
      if (!n.wantsRun) {
        RC(i);
        return;
      }
      qC(e, t, i, n);
    }
  }
}
function IC(e, t, r) {
  Ls(e, t), t.isAttached() && no(e, t) && r.add(t.getKey());
}
function io(e) {
  if (!M(e))
    return !1;
  if ($(e) || ze(e) || ln(e))
    return !0;
  const t = le(e, he);
  return t === "attribute" || t === Fr;
}
function yu(e, t) {
  return $(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && on(e) && K(e.getParent())) : !1;
}
function LC() {
  const e = N();
  return w(e) ? yu(e.focus.getNode(), e.focus.offset) : !1;
}
function qg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return M(t) && io(t) ? t : void 0;
}
function DC(e) {
  const t = qg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function UC(e) {
  const t = qg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function of(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function af(e, t) {
  e.set(t.key, t.offset, t.type);
}
function KC(e, t) {
  let r = UC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!M(n))
      return;
    if (!io(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function cf(e, t) {
  const r = KC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function bu(e) {
  if (e.isCollapsed()) {
    const a = DC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [of(r), of(n)], s = cf(r, "next"), o = cf(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (af(r, i[0]), af(n, i[1]), !1) : !0;
}
const Do = "verse-block", Ig = 1, FC = "verse-block";
class rs extends Tr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Do;
  }
  static clone(t) {
    return new rs(t.__number, t.__key);
  }
  static importJSON(t) {
    return zC().updateFromJSON(t);
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
    return ig(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(FC), lf(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && lf(r, this.__number), !1;
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
      type: Do,
      number: this.getNumber(),
      version: Ig
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function lf(e, t) {
  const { start: r, end: n } = ig(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), uf(e, "data-verse-start", i ? r : NaN), uf(e, "data-verse-end", i ? n : NaN);
}
function uf(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function zC(e) {
  return rt(new rs(e));
}
function Ds(e) {
  return e instanceof rs;
}
function BC(e) {
  return e?.type === Do;
}
const jC = [
  Wt,
  zr,
  Yt,
  St,
  Ce,
  $e,
  kr,
  Br,
  ci,
  nn,
  cn,
  ft,
  Cn,
  li,
  Zi,
  es,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  sn,
  {
    replace: Il,
    with: () => gr(),
    withKlass: Cn
  }
], Uo = {
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
}, VC = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function WC(e) {
  if (!e)
    return Rr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: Rr(r)?.category ?? C.Uncategorized,
      type: VC[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: Rr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function df(e, t, r) {
  const n = {
    type: br,
    version: yr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return pa(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Lg = "v", Dg = 1, HC = "verse-selected";
class Dt extends Js {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Lg, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => YC(t) ? {
        conversion: JC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ku().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add($c, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add($c, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? ar(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      No + this.getNumber() + No
    );
    return E(GC, { nodeKey: this.getKey(), text: t });
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
      version: Dg
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (rg(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function GC({ nodeKey: e, text: t }) {
  const [r] = Nk(e);
  return E("span", { className: r ? HC : void 0, children: t });
}
function JC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: ku(t) };
}
function ku(e, t, r, n, i, s) {
  return rt(new Dt(e, t, r, n, i, s));
}
function YC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Lg;
}
function ui(e) {
  return e instanceof Dt;
}
function XC(e) {
  return e?.type === Dt.getType();
}
function ye(e) {
  return ze(e) || ui(e);
}
function Ug(e) {
  return Gh(e) || XC(e);
}
function QC(e) {
  return ZC(e).find((t) => ce(t));
}
function ZC(e) {
  return e.some(Ds) ? e.flatMap((t) => Ds(t) ? t.getChildren() : t) : e;
}
function Ta(e) {
  return L(e) ? Ds(e) ? e.getChildren().flatMap(Ta) : e.getChildren() : [];
}
function e_(e, t) {
  return Ta(e).find((i) => ye(i) && au(t, i.getNumber()));
}
function t_(e, t) {
  return t === 0 ? QC(e) : e.map((r) => e_(r, t)).filter((r) => r)[0];
}
function Ko(e) {
  return Ta(e).find((r) => ye(r));
}
function Kg(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ye(i))
      return i;
  }
}
function r_(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ye(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !tt(r); ) {
    const n = Ko(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Fo(e) {
  return Ta(e).findLast((t) => ye(t));
}
function n_(e) {
  if (!ze(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function i_(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function s_(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return i_(t, e, r);
  if (M(e)) {
    const n = n_(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function ic(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function o_(e) {
  const t = Bc(e);
  if (!(!t || tt(t)))
    return ye(t) ? t : Fo(t) ?? Cu(t);
}
function a_(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!w(t))
    return ic(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (s_(e, t)) {
    const i = o_(e);
    return i ? ic(i) : { verseNum: n };
  }
  return ic(e);
}
function c_(e) {
  return uT(e) || ui(e);
}
function xu(e) {
  if (M(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(D) && e.setTextContent(`${t} `);
  }
}
function Fg(e) {
  if (M(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Jc(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function l_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Tu(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && L(i) && L(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && L(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (ye(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = ff(i);
      for (; s && !tt(s); ) {
        const o = Ko(s);
        if (o) {
          n = o;
          break;
        }
        s = ff(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Ko(s);
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
function u_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Tu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = Kg(i, r.getIndexWithinParent())), !n && i) {
      let o = pf(i);
      for (; o && !tt(o); ) {
        const a = Fo(o);
        if (a) {
          n = a;
          break;
        }
        o = pf(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !tt(s); ) {
      const o = Fo(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function ff(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function pf(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Tu(e, t) {
  if (L(e) && w(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ye(n))
      return n;
    const i = Kg(e, t.anchor.offset);
    if (i)
      return i;
    const s = Ko(e);
    if (s)
      return s;
  }
  return Cu(e);
}
function Cu(e) {
  if (!e || tt(e))
    return;
  if (ye(e))
    return e;
  let t = Bc(e);
  for (; t; ) {
    if (tt(t))
      return;
    if (ye(t))
      return t;
    const r = Fo(t);
    if (r)
      return r;
    t = Bc(t);
  }
}
const d_ = ["style"], f_ = ["style", "code"], zo = ["style", "cid"], p_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], h_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], g_ = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], m_ = ["style", "caller", "category", "contents"], y_ = ["tag", "marker", "contents"], b_ = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Us = `
`;
function k_(e, t) {
  const r = se(e);
  if (!Jt(r))
    return;
  const n = _u(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function _u(e, t = "delta-doc") {
  if (!e)
    return;
  const r = ua();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (zi(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      zi(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (tn(l) || Jt(l))
        return n;
      Ge(l) && (a = l);
    }
    if (Ge(l) && (i.includes(l) || i.push(l)), zg(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Su(l, t);
  }
  if (a)
    return n;
}
function hf(e, t, r = "delta-doc") {
  if (e.length < 2 || !C_(e[0]) || !T_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => x_(n, r)?.getKey());
}
function x_(e, t = "delta-doc") {
  const r = ua();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (zi(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      zi(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Ge(a) && (i.includes(a) || i.push(a)), zg(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Su(a, t);
    if (tn(a) && l > 0 && e >= n && e < n + l || Jt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function zi(e, t) {
  return e ? t ? !Io(t.node, e.getKey()) : !0 : !1;
}
function tn(e) {
  return M(e) && !Jt(e);
}
function Jt(e) {
  return tt(e) || ye(e) || it(e) || B(e) || je(e) || ln(e);
}
function gn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function T_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && b_.includes(t);
}
function C_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function zg(e, t) {
  return B(e) || je(e) ? !0 : t === "apply" && L(e) && Jt(e);
}
function Bg(e) {
  const t = e.getParent();
  return bt(e) && ce(t) && t.getFirstChild() === e;
}
function Yc(e) {
  const t = e.getParent();
  return t !== null && Ae(t, Be) !== null;
}
function __(e) {
  const t = e.getParent();
  return K(t) && e.getTextContent() === cr && t.getChildrenSize() === 1;
}
function S_(e) {
  const t = e.getParent();
  if (!B(t))
    return !1;
  const r = e.getPreviousSibling();
  return $(r) && r === t.getFirstChild() && e.getTextContent() === Gt(t.getCaller());
}
function v_(e) {
  return !_g(e) && Su(e, "delta-doc") === e.getTextContentSize();
}
function Su(e, t) {
  if (Jt(e))
    return 1;
  if (M(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (Zs(e) || Bg(e) || le(e, he) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    le(e, he) === "attribute" || Yc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Wl) || __(e) || S_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Xc(e, t) {
  const r = { insert: e.__text }, n = le(e, Tn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = jg(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function gf(e) {
  const t = new ys();
  return e.isEmpty() || e.read(() => {
    const r = Ye();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Ir(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = M_();
    for (const s of i)
      t.push(s);
  }), t;
}
function Ca(e, t) {
  const r = [], n = ai(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...mf(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...mf(c, n.length, n, i, s, o, a));
  return r;
}
function M_() {
  return Ca();
}
function mf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return E_(e, a, n), A_(e, a, i, s, o), P_(e, t, r, i, o, s, a), tt(e) && a.push(R_(e)), ye(e) && a.push(q_(e)), it(e) && a.push(I_(e)), ln(e) && a.push(L_(e)), w_(e, a, s), N_(e, a, s), F_(c, s), a;
}
function E_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    _e(n) ? t.push(O_(n)) : ce(n) ? t.push($_(n)) : Ir(n) && t.push({ insert: Us });
  }
  Ge(e) && (r.includes(e) || r.push(e));
}
function A_(e, t, r, n, i) {
  if (!M(e) || ze(e) || ln(e))
    return;
  const s = e.getParent();
  if (B(s) && s.getFirstChild() === e)
    return;
  const o = Ht(e) !== void 0;
  if ($(e) && (o || Bg(e) || Yc(e) || _g(e)) || le(e, he) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Qs(a))
    return;
  const c = e.getPreviousSibling();
  if (B(s) && $(c) && c === s.getFirstChild() && a === Gt(s.getCaller()))
    return;
  const l = K(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(ya(e)));
  const u = a.startsWith(Wl) || le(e, he) === "attribute" || Yc(e), d = !!l && a === cr && l.getChildrenSize() === 1, f = _a(e, n), h = f ? r.filter((y) => f.children.includes(y)) : r, p = Xc(e, h);
  if (p.insert = a, f) {
    if (!a || a === D || u)
      return;
    f.contentsOps?.push(p);
  } else
    d || u || t.push(p);
  const g = a !== "" && !d && !(u && l);
  if (r.length > 0 && g)
    for (const y of r)
      i.add(y);
}
function P_(e, t, r, n, i, s, o) {
  K(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (zi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = U_(c), u = _a(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function N_(e, t, r) {
  if (!B(e))
    return;
  const n = D_(e), i = _a(e, r), s = {
    node: e,
    children: ai(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function w_(e, t, r) {
  if (!je(e))
    return;
  const n = K_(e), i = _a(e, r), s = {
    node: e,
    children: ai(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function wn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function O_(e) {
  const t = { style: Rs, code: e.__code };
  return wn(t, e), { insert: Us, attributes: { book: t } };
}
function R_(e) {
  const t = { style: $o, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), wn(t, e), { insert: { chapter: t } };
}
function $_(e) {
  const t = { style: e.__marker };
  return wn(t, e), { insert: Us, attributes: { para: t } };
}
function q_(e) {
  const t = { style: qo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), wn(t, e), { insert: { verse: t } };
}
function I_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), wn(t, e), { insert: { milestone: t } };
}
function L_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function D_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), wn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = le(e, Tn);
  return n && (r.attributes = { segment: n }), r;
}
function U_(e) {
  const t = { insert: "" }, r = jg([e]);
  return r && (t.attributes = { char: r }), t;
}
function K_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), wn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function _a(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function F_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    zi(t[r].node, e) && t.splice(r, 1);
}
function jg(e) {
  if (e.length === 0)
    return;
  const t = e.map(z_);
  return t.length === 1 ? t[0] : t;
}
function z_(e) {
  const t = { style: e.__marker }, r = le(e, Yn);
  return r && (t.cid = r), wn(t, e), t;
}
function vu(e) {
  let t = 0;
  for (const { node: r } of ua())
    if (B(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function B_(e) {
  let t = 0;
  for (const { node: r } of ua())
    if (B(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const Vg = 1;
class mr extends Js {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Ps, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new mr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => V_(t) ? {
        conversion: j_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Mu().updateFromJSON(t);
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
    return r && ii(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => W_(t, n), (l) => H_(t, n, s, l), () => G_(t, n), () => J_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return E("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Ps && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === hh && i ? (
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
      version: Vg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function j_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Mu(t, r) };
}
function Mu(e, t, r) {
  return rt(new mr(e, t, r));
}
function V_(e) {
  return e ? e.classList.contains(mr.getType()) : !1;
}
function xt(e) {
  return e instanceof mr;
}
function W_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!B(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function H_(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!B(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!xt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function G_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!B(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Ca(r);
  });
}
function J_(e, t) {
  return e.getEditorState().read(() => vu(t));
}
const Y_ = [
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
], X_ = ["†"];
function Sa(e) {
  if (Wg())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = yf(t), [s, o] = yf(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = bf(n, i), [s, o] = bf(s, o);
  const a = kn();
  return a.anchor = hr(n.getKey(), i, kf(n)), a.focus = hr(s.getKey(), o, kf(s)), a;
}
function Eu() {
  if (Wg())
    return;
  const e = N();
  if (!e || !w(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Bo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Bo(i, s);
  return { start: n, end: o };
}
function yf(e) {
  if (ik(e)) {
    const t = Gp(e.jsonPath);
    let r = Ye();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = Xi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : ET(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, AT(r, e.offset)] : [void 0, void 0];
  }
  if (sk(e) || ok(e)) {
    const t = us(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (ak(e)) {
    const t = us(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (ck(e)) {
    const t = us(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = sc(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && M(n) ? [n, 0] : [void 0, void 0];
  }
  if (lk(e)) {
    const t = us(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = sc(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && M(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (uk(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = us(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = sc(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && M(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${dk(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function bf(e, t) {
  if (!_r(e))
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
function kf(e) {
  return L(e) ? "element" : "text";
}
function sc(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if ($(n) && n.getMarkerSyntax() === t || t === "closing" && $(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (_r(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function us(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Gp(r);
  let i = Ye();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = Xi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Bo(e, t) {
  if ($(e)) {
    const r = e.getMarkerSyntax(), n = Q_(e), i = n ? In(Kn(n)) : In(Kn(e));
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
  if (Me(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (M(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Bo(n, s);
    }
    const i = ha(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Bo(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (_r(r)) {
      const i = r.getTextContent().endsWith("*"), s = In(Kn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = og(e, t);
    return n.type === "text" ? {
      jsonPath: In([...Kn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: In(Kn(e)),
      offset: n.index
    };
  }
  if (M(e)) {
    const r = MT(e, t);
    if (r)
      return {
        jsonPath: In([
          ...Kn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: In(Kn(e)), offset: t };
}
function Q_(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = Z_(e);
  return r && !Ge(r) && !M(r) && !Me(r) ? r : t;
}
function Z_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!eo(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Kn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = ha(r);
    if (!n)
      break;
    const i = vT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Wg() {
  for (let e = Ye().getFirstChild(); e; e = e.getNextSibling())
    if (Ds(e))
      return !0;
  return !1;
}
function eS(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Hg(e, t, r, n, i, s, o) {
  if (!$e.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Sa(r) : N();
  if (!w(a))
    return;
  const c = nS(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? eS(e, s), u = Gg(e, l, c, i, s, void 0, void 0);
  return rS(u, a, i), u;
}
function Au(e) {
  return e !== "expanded";
}
function tS(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!M(r) || !K(r.getParent()))
    return;
  if ($(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return $(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function rS(e, t, r) {
  const n = Au(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || pT(t), bu(t);
  const i = tS(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(K)?.selectEnd();
}
function _i(e, t, r) {
  const n = Zr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(kt(e)) : r?.markerMode === "visible" && n.append(Xr("marker", De(e)));
  const s = t === "" ? cr : i ? D + t : t;
  return n.append(Ee(s)), n;
}
function nS(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(_i("fr", f, n)), !e.isCollapsed()) {
        const h = Tf(e);
        h.length > 0 && o.push(_i("fq", h, n));
      }
      o.push(_i("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(_i("xo", f, n)), !e.isCollapsed()) {
        const h = Tf(e);
        h.length > 0 && o.push(_i("xq", h, n));
      }
      o.push(_i("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Gg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Au(n?.noteMode), l = Yl(e, t, c);
  s && Ot(l, Tn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = kt(e), u && d.setMode("token"), a || (f = kt(e, "closing"))) : n?.markerMode === "visible" && (d = Xr("marker", De(e) + " "), a || (f = Xr("marker", at(e))));
  let h;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    h = Ee(Gt(l.__caller)), u && h.setMode("token"), l.append(h, ...r);
  else {
    const p = () => to(), g = r.flatMap(dS(p));
    if (t === "")
      l.append(...g);
    else {
      const y = iu(r);
      let b = () => {
      };
      i?.noteCallerOnClick && (b = i.noteCallerOnClick), h = Mu(l.__caller, y, b), l.append(h, p(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Nr(e) {
  if (typeof e == "string") {
    const t = se(e);
    return B(t) ? t : void 0;
  }
  return B_(e);
}
function Qc(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (ui(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else {
    const n = e.getChildren(), i = n.slice().reverse().find(K);
    if (i)
      iS(i);
    else {
      const s = Pu(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function Pu(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return $(r) && r.getMarkerSyntax() === "closing" || _r(r) && r.getTextContent() === at(e.getMarker()) ? t : -1;
}
function iS(e) {
  const t = Pu(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  M(r) && !eo(r) ? r.selectEnd() : e.select(t, t);
}
function Jg(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (M(r) && !io(r)) {
    r.select(0, 0);
    return;
  }
  const n = e.getParent();
  if (!n)
    return;
  const i = e.getIndexWithinParent() + 1;
  n.canBeEmpty() ? n.select(i, i) : Nu(n, i, { announce: !t });
}
function Nu(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!B(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = kn();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), zt(i), r && qr().dispatchCommand(Bt, void 0);
}
function xf(e, t, r) {
  const n = en(e), i = sS(e, n);
  if (r && Xg(i, t, r, Yg(e, n)))
    return !0;
  let s = Math.max(t, 0), o;
  for (const { node: c, isGlyph: l, dataStart: u } of i) {
    if (l)
      continue;
    const d = c.getTextContentSize() - u;
    if (s < d) {
      const f = u + s;
      return c.select(f, f), !0;
    }
    s -= d, o = c;
  }
  if (!o)
    return !1;
  const a = o.getTextContentSize();
  return o.select(a, a), !0;
}
function sS(e, t) {
  const r = [];
  for (const { node: n } of ai(e))
    !M(n) || Ae(n, Be) || (wu(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: ya(n) }) : oS(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function oS(e, t) {
  return ln(e) ? !0 : $(e) && !t.is(e.getParent());
}
function Yg(e, t) {
  return (r) => {
    let n = r;
    for (; !n.getPreviousSibling(); ) {
      const o = n.getParent();
      if (!o || o.is(e))
        return;
      n = o;
    }
    const i = n.getPreviousSibling(), s = L(i) ? i.getLastDescendant() : i;
    if (M(s) && (t?.is(s) || wu(s, t)))
      return s;
  };
}
function Xg(e, t, r, n) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === r.index)
      return aS(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function aS(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function cS(e, t, r) {
  const { opener: n, value: i, closer: s } = uu(e);
  if (!i)
    return !1;
  const o = lS(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = en(e);
    if (Xg(c, t, r, Yg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function lS(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function wu(e, t) {
  return !M(e) || eo(e) || io(e) ? !1 : !t || !e.is(t);
}
function uS(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(K))
    return;
  const t = en(e);
  for (const { node: n } of ai(e))
    if (wu(n, t))
      return;
  const r = Pu(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function dS(e) {
  return (t) => Vt(t) ? [t] : [t, e()];
}
function fS(e) {
  const t = e.getParent();
  return t !== null && Ae(t, B) !== null;
}
function Tf(e) {
  if (!w(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Dl(e);
  let a = "";
  for (const c of t)
    if (!(B(c) || xt(c) || fS(c)) && !$(c) && !ln(c) && le(c, he) !== "attribute") {
      if (ye(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (M(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const Ou = [
  mr,
  Dt,
  ...jC
], pS = [
  rs,
  ...Ou
], hS = Pn((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return E("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function gS() {
  const [e, t] = me(void 0), [r, n] = me(), i = Z(null), s = ke((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Kk(l, c, () => {
      Fk(l, c, {
        placement: "bottom-start",
        middleware: [zk(), Bk()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = ke(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return z(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function mS({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = gS();
  return z(() => {
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
const yS = Qb(hS);
function Qg({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = mS({ isOpen: e, floatingBoxRef: r }), s = Ze(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return jn(
    E(yS, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Zg = Wp(void 0);
function Ru() {
  const e = Hp(Zg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function bS(e, t) {
  const [r, n] = me(0), [i, s] = me(-1), o = Ze(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ke(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = ke(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = ke(() => {
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
function kS({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = bS(t, r);
  return E(Zg.Provider, { value: i, children: E("div", { ...n, children: e }) });
}
const em = Pn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Ru(), u = ke((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = ke((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return E("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function xS({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = Ru(), o = Ze(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ze(() => {
    const c = o(s);
    return t ? Zb.map(c, (l, u) => ek(l) && l.type === em && l.props.index === void 0 ? tk(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return z(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), E("div", { ref: n, role: "menu", ...r, children: a });
}
const TS = (e, t, r) => So(e, r).toLowerCase().includes(t.toLowerCase()), Cf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", So = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function CS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? Cf(r[0]) : "") : (u = n || (r.length > 0 ? Cf(r[0]) : ""), d = (p, g) => TS(p, g, u));
  const f = s || u, h = /* @__PURE__ */ new Map();
  return r.filter((p) => {
    try {
      return d(p, t);
    } catch (g) {
      return console.warn("Error filtering item:", p, g), !1;
    }
  }).sort((p, g) => {
    const y = (k) => (h.has(k) || h.set(k, So(k, f).toLowerCase()), h.get(k) ?? ""), b = a ? So(p, f) : y(p), T = a ? So(g, f) : y(g);
    for (const k of c)
      switch (k) {
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
          const A = b.indexOf(l), _ = T.indexOf(l);
          if (A !== -1 && _ === -1)
            return -1;
          if (_ !== -1 && A === -1)
            return 1;
          if (A !== -1 && _ !== -1)
            return A - _;
          break;
        }
      }
    return b.localeCompare(T);
  });
}
const oc = {
  Root: kS,
  Options: xS,
  Option: em
};
function _S(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ze(() => CS({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function SS() {
  const { moveUp: e, moveDown: t, select: r } = Ru();
  return Ze(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const vS = () => {
  const e = SS(), [t] = fe();
  z(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(Cr, r, Ne);
  }, [t, e]);
};
function MS() {
  return vS(), null;
}
const ES = ["Shift", "Control", "Alt", "Meta"];
function tm(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = fe(), u = s !== void 0, [d, f] = me(""), h = u ? s ?? "" : d, p = _S({ query: h, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return z(() => {
    a?.(h, p);
  }, [a, h, p]), z(() => l.registerCommand(Cr, (y) => {
    if (u || c?.includes(y.key) || ES.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const T = {
      Escape: () => n?.(),
      Backspace: () => {
        h.length === 0 ? n?.() : f((k) => k.slice(0, -1));
      }
    }[y.key];
    return T ? (y.stopPropagation(), y.preventDefault(), T(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((k) => k + y.key), !0) : !1;
  }, Ne), [l, u, h, o, n, c]), Oe(oc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: p, onSelectOption: (y) => g(y), children: [!u && E("input", { value: h, type: "text", disabled: !0 }), E(MS, {}), E(oc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((T, k) => Oe(oc.Option, { index: k, children: [E("span", { className: "label", children: T.label ?? T.name }), E("span", { className: "description", children: T.description })] }, T.name)) })] });
}
function AS({ trigger: e, items: t }) {
  const [r] = fe(), [n, i] = me(!1), s = ke((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return z(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), z(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = N();
      if (w(l))
        return l;
    });
    a.read(() => {
      const l = N();
      !w(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && E(Qg, { isOpen: n, children: ({ placement: o }) => E(tm, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function PS({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Ze(() => {
    if (!t || !e)
      return;
    const i = Rr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = Rr(o), { action: c } = r(o, a);
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
function NS(e, t) {
  z(() => {
    if (!e.hasNodes([dt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Re(oh(e, dt, (n) => Os(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], h = o[l]?.[d], p = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, h, p, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(dt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = se(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Me(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!dt.isReservedType(c))
              for (const u of l) {
                let d = t.get(_s(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(_s(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(_s(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const wS = Pn(function({ logger: t }, r) {
  const [n] = fe(), i = Ze(() => /* @__PURE__ */ new Map(), []);
  NS(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(_s(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = se(u);
        Me(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Ro(d));
      }
  };
  return aa(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (dt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const h = Sa(o);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Nh(h, a, c, l, u, d, f);
      }, { tag: qc });
    },
    removeAnnotation(o, a) {
      if (dt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(_s(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: qc });
    }
  })), null;
}), OS = [];
function RS({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = OS, onChange: n }) {
  const [i] = fe();
  return Gs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Ul) && !u.has(mh) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = $S(i, s);
        d.length !== 0 && n(o, i, u, d, l);
      });
  }, [i, e, t, r, n]), null;
}
function $S(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new ys();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && Ht(s) !== void 0;
    if (t.size === 1 && M(s) && !o && v_(s)) {
      const a = _u(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = se(i);
          return new ys([M(d) ? Xc(d) : { insert: "" }]);
        }), l = new ys([Xc(s)]), u = new ys(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = gf(r), c = gf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const $u = "formatted", rm = "unformatted", nm = "paragraph-structure", qu = "standard", im = "block-verse", qS = {
  [$u]: "Formatted",
  [rm]: "Unformatted",
  [nm]: "Paragraph Structure",
  [qu]: "Standard",
  [im]: "Block Verse"
};
function di(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Iu, Lu;
function IS(e) {
  const t = Du(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Iu = e, Lu = t;
}
IS($u);
const Rw = () => Iu, va = () => Lu;
function Du(e) {
  let t;
  switch (e ?? Iu) {
    case $u:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case rm:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case nm:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case qu:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case im:
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
function $w(e) {
  if (!e)
    return;
  const t = _f(e);
  return Object.keys(qS).find((r) => Zt(_f(Du(r)), t));
}
const LS = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function _f(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...LS, ...t };
}
function so(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function DS(e) {
  if (e)
    return Ks(e) ? Dt : e.markerMode === "editable" ? St : Dt;
}
function Ks(e) {
  return e?.verseLayout === "block";
}
function US(e) {
  const t = [], r = e ?? Lu;
  return r && (t.push(`${nx}${r.markerMode}`), r.hasSpacing && t.push(tx), r.isFormattedFont && t.push(rx)), t;
}
function KS(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += FS(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), BS(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += jS(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), WS(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function FS(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), zS(t, e.retain, e.attributes, r, n)), e.retain);
}
function zS(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ye();
  function l(u) {
    if (s <= 0)
      return !0;
    if (tn(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), h = d - f, p = Math.min(s, h);
        if (p > 0) {
          let g = u;
          const y = f > 0, b = p < d - f;
          if (y && b) {
            const [, T] = u.splitText(f);
            [g] = T.splitText(p);
          } else y ? [, g] = u.splitText(f) : b && ([g] = u.splitText(p));
          if (Sn(r)) {
            const T = g.getParent();
            if (K(T)) {
              const k = r.char;
              let A;
              Array.isArray(k) ? a >= 0 && a <= k.length - 1 && (A = k[a]) : a === 0 && (A = k);
              const _ = A ? Xn(A, T) : !1;
              if (_ && Array.isArray(k) && k.length > 1) {
                const O = Ee("");
                g.replace(O);
                const q = typeof r.segment == "string" ? r.segment : void 0, F = ns(k.slice(1), n, g, q);
                let S = O;
                for (const W of F)
                  S.insertAfter(W), S = W;
                O.remove(), er(r, g);
              } else if (_)
                er(r, g);
              else {
                g.remove();
                const O = Sf(g, r, n, i);
                if (O && O.length > 0) {
                  let q = T;
                  for (const F of O)
                    q.insertAfter(F), q = F;
                }
              }
            } else {
              const k = Ee("");
              g.replace(k);
              const A = Sf(g, r, n, i);
              if (A && A.length > 0) {
                let _ = k;
                for (const O of A)
                  _.insertAfter(O), _ = O;
                k.remove();
              } else
                k.replace(g);
            }
          } else
            er(r, g);
          s -= p;
        }
      }
      o += d;
    } else if (Jt(u))
      e <= o && o < e + t && s > 0 && (vf(u, r), s -= 1), o += 1;
    else if (K(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Sn(r)) {
          const f = r.char;
          let h;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (h = f[a]) : a === 0 && (h = f), h) {
            Zc(u, h.style), typeof h.cid == "string" && Ot(u, Yn, () => h.cid);
            const p = Je(h, zo);
            p && Object.keys(p).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...p
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || tv(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const h of f) {
          if (s <= 0)
            break;
          if (l(h) && s <= 0)
            return d && Rc(u), !0;
        }
      }
      d && Rc(u), a -= 1;
    } else if (Ge(u)) {
      const d = u.getChildren();
      for (const h of d) {
        if (s <= 0)
          break;
        if (l(h) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Ir(u))
          vf(u, r);
        else if (Uu(r)) {
          const h = am(r.para, n);
          h && u.replace(h, !0);
        }
        s -= f;
      }
      o += f;
    } else if (L(u)) {
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
function Sf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = ns(t.char, r, e, i), o = s.find(K);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), er(t, e);
    return;
  }
  const a = {};
  dm.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), er(t, e), s;
}
function sm(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  $(r) ? (r.setMarker(t), r.setTextContent(De(t))) : Vt(r) && r.getTextType() === "marker" && r.setTextContent(De(t) + D);
}
function Zc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    $(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = K(e.getParent()), i = e.getFirstChild();
  Vt(i) && i.getTextType() === "marker" && i.getTextContent() === De(r, n) && i.setTextContent(De(t, n));
  const s = e.getLastChild();
  Vt(s) && s.getTextType() === "marker" && s.getTextContent() === at(r, n) && s.setTextContent(at(t, n));
}
function vf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && K(e) && Sn(t)) {
      const i = el(n);
      if (Zc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Ot(e, Yn, () => o);
      }
      const s = Je(i, zo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (tt(e) || ye(e) || it(e) || B(e) || je(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (_e(e) || ce(e) || K(e)) && (r === "style" && ce(e) ? sm(e, n) : r === "style" && K(e) ? Zc(e, n) : r === "code" && _e(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Ot(e, Tn, () => n));
  }
}
function BS(e, t, r) {
  if (t <= 0)
    return;
  const n = Ye();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (tn(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Jt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Ge(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Ge(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(gr(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const h = a.getNextSibling();
          if (h && Fe(h)) {
            let p = i + 1;
            const g = h.getChildren();
            for (const b of g) {
              if (s <= 0)
                break;
              const T = i;
              if (i = p, o(b)) {
                i = T;
                break;
              }
              tn(b) ? p += b.getTextContentSize() : Jt(b) && (p += 1), i = T;
            }
            const y = h.getChildren();
            for (const b of y)
              b.remove(), a.append(b);
            h.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(gr(), !0);
        } else ce(a) ? a.replace(gr(), !0) : a.remove();
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
function jS(e, t, r, n, i) {
  if (t === Us)
    return Mf(e, r, n, i);
  if (t.endsWith(Us) && !Uu(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Sn(r))
        throw new Error("Text + LF should not have char attributes");
      o += jo(e, s, r, i);
    }
    return o += Mf(e + o, r, n, i), o;
  } else return Sn(r) ? VS(e, t, r, n, i) : jo(e, t, r, i);
}
function VS(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Ee(t === "" ? cr : t);
  er(r, s);
  let o;
  {
    let y = function(b) {
      if (tn(b)) {
        const T = b.getTextContentSize();
        if (e >= g && e < g + T) {
          const k = b.getParent();
          return K(k) && (o = k), !0;
        }
        g += T;
      } else if (Jt(b))
        g += 1;
      else if (K(b)) {
        const T = b.getChildren();
        for (const k of T)
          if (y(k))
            return !0;
      } else if (L(b)) {
        const T = b.getChildren();
        for (const k of T)
          if (y(k))
            return !0;
        Ge(b) && (g += 1);
      }
      return !1;
    };
    const p = Ye();
    let g = 0;
    y(p);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const p = a[0];
      p && Xn(p, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Xn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = ns(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(K);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), jo(e, t, void 0, i);
  const f = {};
  for (const [p, g] of Object.entries(r))
    p !== "char" && p !== "segment" && typeof g == "string" && (f[p] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let h = !0;
  for (const p of u)
    if (!om(e, p, i)) {
      h = !1;
      break;
    }
  return h ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), jo(e, t, void 0, i));
}
function jo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ye();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (tn(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = Ee(t);
        if (er(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          K(f) && !Sn(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Jt(c))
      s += 1;
    else if (K(c)) {
      if (!o && e === s) {
        const d = Ee(t);
        er(r, d);
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
        const d = Ee(t);
        return er(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Ge(c)) {
      if (!o && e === s) {
        const d = Ee(t);
        er(r, d);
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
        const d = Ee(t);
        return er(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (L(c)) {
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
    const c = Ee(t);
    er(r, c);
    const l = gr().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function om(e, t, r) {
  const n = Ye();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(gr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Fe(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(gr().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (tn(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Jt(l))
        i += 1;
      else if (K(l)) {
        if (o(l))
          return !0;
      } else if (Ge(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (Ir(u) && Ge(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(gr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Fe(a) ? Ir(a) && ce(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Fe(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (K(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Fe(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function WS(e, t, r, n, i) {
  let s;
  return gn("chapter", t) ? s = GS(t.insert.chapter, r) : gn("verse", t) ? s = JS(t.insert.verse, r) : gn("ms", t) ? s = YS(t.insert.ms) : gn("note", t) ? s = cm(t, r, n) : gn("unknown", t) ? s = lm(t, r, n, i) : gn("unmatched", t) && (s = QS(t.insert.unmatched, r)), s ? om(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Mf(e, t, r, n) {
  let i;
  Uu(t) ? i = am(t.para, r) : ev(t) && (i = HS(t.book)), i ??= gr();
  const s = i, o = ce(s), a = Ir(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (tn(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const h = d.getParent();
        if (ce(h) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${h.getMarker()}) with LF attributes at targetIndex ${e}`);
          const p = e - c, [g] = p > 0 ? d.splitText(p) : [void 0];
          let y, b = g?.getPreviousSibling();
          for (; b; ) {
            const T = b;
            b = b.getPreviousSibling(), y ? y.insertBefore(T) : s.append(T), y = T;
          }
          return g && s.append(g), h.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Jt(d))
      c += 1;
    else if (Ge(d)) {
      const f = d.getChildren();
      for (const h of f) {
        if (u(h))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Ir(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ce(d) && s) {
          const h = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${h.getMarker()}) at targetIndex ${e}`), h.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ce(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (L(d)) {
      const f = d.getChildren();
      for (const h of f) {
        if (u(h))
          return !0;
        if (l)
          break;
      }
    }
    return l;
  }
  return u(Ye()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function HS(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Rs || !r || !Wt.isValidBookCode(r))
    return;
  const n = Je(e, f_);
  return qh(r, n);
}
function am(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Je(e, d_), i = Di(r, n);
  if (!di(t))
    return i;
  if (t.markerMode === "editable")
    i.append(kt(r), to());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = De(r) + D;
    i.append(t.hasGutterParaMarkers ? Mh(s) : Xr("marker", s));
  }
  return i;
}
function GS(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Je(e, p_);
  let a;
  if (t.markerMode === "editable")
    a = Lh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = tu(r, c, n, i, s, o);
  }
  return a;
}
function JS(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Je(e, h_);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = ar(r, n);
    c = Hh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = ku(n, l, i, s, o, a);
  }
  return c;
}
function YS(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Je(e, g_);
  return kh(t, r, n, s, i);
}
function cm(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = Je(n.note, m_), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let d;
  u && typeof u == "string" && (d = u);
  const f = [];
  for (const p of a?.ops ?? [])
    if (typeof p.insert == "string")
      if (Sn(p.attributes)) {
        const g = ns(p.attributes.char, t, Ee(p.insert), void 0, um(p.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...g);
      } else
        f.push(Ee(p.insert));
  return Gg(i, s, f, t, r, d, l).setCategory(o).setUnknownAttributes(c);
}
function lm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Je(i, y_), l = Zl(s, o, c), u = a?.ops ?? [];
  u.length > 0 && XS(u, t, r, n).forEach((h) => l.append(h));
  const d = e.attributes?.segment;
  return typeof d == "string" && Ot(l, Tn, () => d), l;
}
function XS(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Sn(s.attributes)) {
        const o = Ee(s.insert), a = ns(s.attributes.char, t, o, void 0, um(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Ee(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (gn("unknown", s)) {
        const o = lm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (gn("note", s)) {
        const o = cm(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function QS(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = gu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function um(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function el(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function ns(e, t, r, n, i, s = !1, o = !1) {
  M(r) && r.getTextContentSize() === 0 && r.setTextContent(cr);
  const a = () => {
    o && M(r) && r.getTextContent() !== cr && r.setTextContent(D + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(el), l = c[0], u = i?.[i.length - 1];
    if (K(u) && Xn(l, u)) {
      if (c.length > 1) {
        const f = ns(c.slice(1), t, r, void 0, void 0, !0, o);
        ac(u, f);
      } else
        r && ac(u, [r]);
      return [];
    }
    a();
    const d = c.reduceRight((f, h, p) => {
      const g = Zr(h.style, Je(h, zo));
      return typeof h.cid == "string" && Ot(g, Yn, () => h.cid), n && p === c.length - 1 && Ot(g, Tn, () => n), f && (K(f) && (lc(f.getMarker(), f, t, !0), cc(f, f, t, !0)), g.append(f)), g;
    }, r);
    return lc(l.style, d, t, s), cc(d, d, t, s), [d];
  } else {
    const c = el(e), l = i?.[i.length - 1];
    if (K(l) && Xn(c, l))
      return r && ac(l, [r]), [];
    a();
    const u = Zr(c.style, Je(c, zo));
    return typeof c.cid == "string" && Ot(u, Yn, () => c.cid), n && Ot(u, Tn, () => n), r && u.append(r), lc(c.style, u, t, s), cc(u, u, t, s), [u];
  }
}
function ac(e, t) {
  const r = e.getLastChild();
  $(r) && r.getMarkerSyntax() === "closing" || Vt(r) && r.getTextType() === "marker" && r.getTextContent() === at(e.getMarker(), K(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function cc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && ZS(e.getMarker(), t, r, !1, n);
}
function lc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = kt(e, "opening", n) : r?.markerMode === "visible" && (i = Xr("marker", De(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function ZS(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = kt("", "selfClosing") : s = kt(e, "closing", i) : r?.markerMode === "visible" && (s = Xr("marker", n ? at("") : at(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function ev(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Uu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Sn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function tv(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function er(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Ot(t, Tn, () => n);
        continue;
      }
      if (rv(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const dm = [
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
function rv(e) {
  return dm.includes(e);
}
function Bi(e) {
  return Vt(e) && _e(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function fm(e) {
  const t = ts(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function Ku(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(Xp(r) && t.offset === 0 || _e(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Bi);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!_e(s))
    return !1;
  const o = fm(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function vo(e) {
  const t = N();
  if (!w(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : M(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? Xh(t) : nu(t);
    return Bi(n);
  }
  return Ku(t) && t.isCollapsed();
}
function nv(e) {
  const t = N();
  if (!w(t) || !t.isCollapsed())
    return !1;
  const r = Ae(t.anchor.getNode(), _e);
  if (!r || !Bi(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return vo(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Bi)) {
    const n = fm(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function bo() {
  const e = N();
  return w(e) && Ku(e), !1;
}
function iv() {
  const e = N();
  if (!w(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !_e(r) || !Bi(r.getFirstChild()) ? !1 : (Lt(r, 1), !0);
}
function sv(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => _r(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function ov() {
  const [e] = fe();
  return z(() => av(e), [e]), z(() => Re(
    e.registerCommand(Ji, vo, Ne),
    e.registerCommand(Kl, vo, Ne),
    e.registerCommand(Po, vo, Ne),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(Po, nv, Or),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(Yi, bo, de),
    e.registerCommand(sr, bo, de),
    e.registerCommand(jt, bo, de),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Yp, bo, de)
  ), [e]), z(() => Re(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(Bt, () => (iv(), !1), Ne),
    e.registerNodeTransform(Wt, sv)
  ), [e]), null;
}
function av(e) {
  return Re(e.registerCommand(Li, cv, _t), e.registerCommand(Li, (t) => (lv(t), !1), Hn));
}
function cv(e) {
  return uv(e.target), !1;
}
function lv(e) {
  const t = e.target;
  if (Es(t) && Qr(Yr(t)))
    return;
  const r = N();
  w(r) && dv(r);
}
function Ma(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (bt(t))
      r++, t = t.getNextSibling(), M(t) && t.getTextContent() === D && (r++, t = t.getNextSibling());
    else if (ye(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r;
}
function tr(e) {
  const t = Ma(e);
  return t === 0 ? !1 : (Lt(e, t), !0);
}
function Ss(e) {
  tr(e) || e.selectStart();
}
function uv(e) {
  if (!Es(e))
    return !1;
  const t = Yr(e);
  if (!Qr(t))
    return !1;
  const r = t.getParent();
  return r ? (Fe(r) && tr(r) || Lt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function Si() {
  if (qr().dispatchCommand(pm, void 0))
    return w(N());
  const e = _n(N());
  return e ? (Ss(e), !0) : !1;
}
const pm = Fl("REPAIR_PARA_MARKER_SELECTION_COMMAND");
function hm(e) {
  const t = _n(e);
  if (!t)
    return;
  const r = Ma(t), n = t.getChildAtIndex(r - 1);
  return t.getChildAtIndex(r) ?? (Qr(n) ? void 0 : n) ?? t;
}
function dv(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!Ge(r))
    return !1;
  const n = r.getFirstChild();
  return !_r(n) && !ui(n) ? !1 : tr(r);
}
function fv() {
  const [e] = fe();
  return z(() => {
    const t = (r) => r instanceof KeyboardEvent && !gm(r) || !Ea() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Re(
      e.registerCommand(Cr, t, Ne),
      e.registerCommand(Yi, t, Ne),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(sr, t, de),
      e.registerCommand(jt, t, de),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(la, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Yr(r.target);
        return !n || !vn(n) ? !1 : (r.preventDefault(), !0);
      }, Ne),
      e.registerCommand(Ji, t, Ne),
      e.registerCommand(Kl, t, Ne),
      e.registerCommand(Po, t, Ne)
    );
  }, [e]), null;
}
function gm(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function vn(e) {
  return Ae(e, Fu) ?? void 0;
}
function Fu(e) {
  return je(e) || Ag(e);
}
function Ea() {
  const e = N();
  return w(e) ? vn(e.anchor.getNode()) !== void 0 || vn(e.focus.getNode()) !== void 0 : !1;
}
function pv(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function hv(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), pv(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function gv(e, t, r, n) {
  if (!Pv(t) || hv(e, r))
    return !1;
  const i = r === "up" ? u_(t) : l_(t);
  return i && n.preventDefault(), i;
}
function mv({ viewOptions: e }) {
  const [t] = fe();
  return yv(t, e), null;
}
function yv(e, t) {
  z(() => {
    if (!e.hasNodes([zr, Dt, $e]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!w(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Ef(o), d = Sv(i, Af(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return gv(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Ef(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Af(a, n.key) ? l = !c && wf(i, "next") || !c && kv(i) || Ev(i) || !c && s && Nf(i, "next") : bv(a, n.key) && (l = !c && wf(i, "previous") || !c && xv(i) || Av(i, t) || !c && s && Nf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Cr, r, Ne);
  }, [e, t]);
}
function Ef(e) {
  return e.dir || "ltr";
}
function Af(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function bv(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function tl(e) {
  if (!K(e) || e.getMarker() !== "fp")
    return;
  const t = Ht(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function kv(e) {
  const t = tl(nu(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Lt(t, 0), !0);
}
function xv(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = tl(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Pf(n);
  }
  if (t.offset === 0) {
    const n = tl(r);
    return n ? Pf(n) : !1;
  }
  return !1;
}
function Pf(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (M(t))
    return t.select(), !0;
  if (L(t)) {
    const i = t.getLastDescendant();
    return M(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Vo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function Tv(e) {
  if (Vo)
    for (const { segment: r } of Vo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function Cv(e) {
  if (Vo) {
    let n = 0;
    for (const { index: i } of Vo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function mm(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function ym(e) {
  return !!e && $(e) && vn(e) !== void 0;
}
function ji(e) {
  return M(e) && !e.isToken() && !ym(e) && e.getTextContentSize() > 0;
}
function bm(e) {
  return oi(e) ? !0 : B(e) ? e.getIsCollapsed() === !0 : M(e) ? (e.isToken() || ym(e)) && e.getTextContentSize() > 0 : Nn(e) ? !it(e) : !1;
}
function Vi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Aa(e, t, r) {
  for (let n = e; n; ) {
    if (bm(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Vi(n, t, r);
      continue;
    }
    if (ji(n))
      return n;
    n = Vi(n, t, r);
  }
}
function zu(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Vi(e, n, i) : r === "text" && bm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Vi(e, n, i);
}
function uc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = zu(e.node, e.offset, e.kind, "previous", t), n = Aa(r, "previous", t);
  if (!n)
    return e;
  if (ji(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function _v(e, t) {
  const r = e.getNode(), n = mm(r);
  if (!n)
    return;
  if (e.type === "text" && ji(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return uc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = zu(r, e.offset, e.type, t, n), s = Aa(i, t, n);
  if (!s)
    return;
  if (ji(s)) {
    const c = s.getTextContent(), l = t === "next" ? Tv(c) : Cv(c);
    return uc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return uc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function km(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = _v(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && L(i.node) ? Nu(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Nf(e, t) {
  return km(e, t, "collapse");
}
function Sv(e, t) {
  return km(e, t, "extend");
}
function vv(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && ji(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = zu(n, e.offset, e.type, t, r);
  return Aa(i, t, r) === void 0;
}
function Mv(e, t) {
  const r = Ye();
  for (let n = e; n; ) {
    const i = Vi(n, t, r), s = i && Aa(i, t, r);
    if (!s)
      return;
    if (n = vn(s), !n)
      return s;
  }
}
function wf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (vn(n))
    return !1;
  const i = mm(n);
  if (!i || !vv(r, t, i))
    return !1;
  const s = Vi(i, t, Ye()), o = s && vn(s);
  if (!o)
    return !1;
  const a = Mv(o, t);
  if (!a)
    return !0;
  if (ji(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Of(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  Nu(t, r);
}
function Ev(e) {
  const t = e.anchor.getNode(), r = nu(e);
  if (B(r) && !$(r.getFirstChild())) {
    if (Ge(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Fe(i) && tr(i)) && i.selectStart(), !0;
      }
    } else return Vt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ge(t) && B(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Of(r), !0;
  }
  const n = r?.getParent();
  if (Vt(r) && B(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Of(n) : n.selectEnd(), !0;
  }
  return !1;
}
function Av(e, t) {
  const r = Xh(e);
  if (Xs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && Bi(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (_e(o) && !r)
    return !0;
  if (B(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!ui(c) && !_e(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const u = r.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (Ge(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = Ae(c, (u) => B(u));
    if (B(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const d = l.getIndexWithinParent();
      return u.select(d, d), !0;
    }
  }
  const a = Ht(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (xt(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function Pv(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ye(t) && Nn(t);
}
function Nv() {
  const [e] = fe();
  return wv(e), null;
}
function wv(e) {
  z(() => {
    if (!e.hasNodes([Ce]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Re(
      e.registerNodeTransform(Ce, $v),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(Ce, qT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(Ce, yg),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(Ce, (t) => Ls(Qn("char"), t)),
      e.registerNodeTransform(et, qv)
    );
  }, [e]);
}
function dc(e) {
  return e.getChildren().some($);
}
function Ov(e, t) {
  const r = t.getFirstChild();
  if (!$(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Qi(n)) {
    const i = n.getTextContent();
    i.startsWith(D) && (i === D ? n.remove() : n.setTextContent(i.slice(D.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function Rv(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  $(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function $v(e) {
  if (!K(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (dc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = le(e, Yn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (K(i) && Xn({ style: t, cid: r }, i) && Zt(n, i.getUnknownAttributes()))
    if (dc(i)) {
      if (Ov(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  K(s) && Xn({ style: t, cid: r }, s) && Zt(n, s.getUnknownAttributes()) && (dc(s) ? Rv(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function qv(e) {
  const t = e.getParent();
  if (!K(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(cr)) {
    const n = N();
    if (w(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function xm(e) {
  return e.replaceAll("	", " ");
}
function Tm() {
  const e = N();
  return !!e && !e.isCollapsed();
}
function Cm(e) {
  const t = () => !Tm();
  return Re(e.registerCommand(xn, t, _t), e.registerCommand(jt, t, _t));
}
const Bu = (e) => {
  e.dispatchCommand(xn, null);
}, ju = (e) => {
  e.dispatchCommand(jt, null);
}, Vu = (e) => {
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
      n.setData(o, xm(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(sr, s);
  });
}, Wu = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", xm(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(sr, i);
  });
};
function Iv() {
  const [e] = fe();
  return z(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Gn ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Bu(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), ju(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Wu(e) : Vu(e)));
    };
    return Re(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Cm(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function Lv({ logger: e }) {
  const [t] = fe();
  return z(() => Re(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Cr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Or),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(sr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Or),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(la, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Or)
  ), [t, e]), null;
}
const Wo = "editor-context-menu";
function rl(e) {
  return `${Wo}-item-${e}`;
}
const Dv = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function Uv({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), E("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: rl(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: E("span", { className: "text", children: i.title }) });
}
function Kv({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return E("div", { className: "typeahead-popover", children: E("ul", { id: Wo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => E(Uv, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let Fv = 0;
class ds {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${Fv++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function zv({ options: e } = {}) {
  const [t] = fe(), [r, n] = me(() => !t.isEditable()), [i, s] = me({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = me(void 0), c = Ze(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new ds("Cut", {
        onSelect: () => {
          ju(t);
        },
        isDisabled: r
      }),
      new ds("Copy", {
        onSelect: () => {
          Bu(t);
        }
      }),
      new ds("Paste", {
        onSelect: () => {
          Vu(t);
        },
        isDisabled: r
      }),
      new ds("Paste as Plain Text", {
        onSelect: () => {
          Wu(t);
        },
        isDisabled: r
      })
    ], h = (e ?? []).map((p) => new ds(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...f, ...h];
  }, [t, r, e]), l = Z(null), u = Z(null), d = ke(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return z(() => Cm(t), [t]), z(() => {
    const f = (h) => {
      const p = h.target;
      t.getRootElement() === p || Bh(p) || (h.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: h.clientX, y: h.clientY }), a(void 0));
    };
    return t.registerRootListener((h, p) => {
      p?.removeEventListener("contextmenu", f), h && h.addEventListener("contextmenu", f);
    });
  }, [t]), z(() => {
    if (!i.isOpen)
      return;
    const f = (h) => {
      const p = h.target;
      p instanceof Node && l.current?.contains(p) || d();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, d]), z(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      d();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, d]), z(() => {
    if (!i.isOpen)
      return;
    const f = (h) => {
      if (h.isComposing || h.keyCode === 229)
        return;
      if (h.key === "Escape") {
        h.preventDefault(), d();
        return;
      }
      const p = document.activeElement;
      if (!(p && p !== document.body && p !== u.current && !t.getRootElement()?.contains(p) && !l.current?.contains(p)))
        if (h.key === "ArrowDown")
          h.preventDefault(), h.stopPropagation(), a((g) => g === void 0 ? 0 : (g + 1) % c.length);
        else if (h.key === "ArrowUp")
          h.preventDefault(), h.stopPropagation(), a((g) => g === void 0 ? c.length - 1 : (g - 1 + c.length) % c.length);
        else if (h.key === "Enter") {
          h.preventDefault(), h.stopPropagation();
          const g = o === void 0 ? void 0 : c[o];
          g && !g.isDisabled && (t.update(() => {
            g.onSelect();
          }), d());
        } else {
          if (Dv.has(h.key))
            return;
          h.preventDefault(), h.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, d, c, o, t]), z(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", Wo), () => {
        f.removeAttribute("aria-controls"), f.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), z(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (!f)
      return;
    if (o === void 0) {
      f.removeAttribute("aria-activedescendant");
      return;
    }
    f.setAttribute("aria-activedescendant", rl(o));
    const h = document.getElementById(Wo), p = document.getElementById(rl(o));
    if (!h || !p)
      return;
    const g = h.getBoundingClientRect(), y = p.getBoundingClientRect(), b = y.top - g.top + h.scrollTop, T = y.bottom - g.top + h.scrollTop;
    b < h.scrollTop ? h.scrollTop = b : T > h.scrollTop + h.clientHeight && (h.scrollTop = T - h.clientHeight);
  }, [t, i.isOpen, o]), z(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), Gs(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: h, height: p } = f.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - h)), y = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    f.style.left = `${g}px`, f.style.top = `${y}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? qk.createPortal(E("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: E(Kv, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), d());
  }, onOptionMouseMove: (f) => {
    a((h) => h === f ? h : f);
  } }) }), document.body) : null;
}
function Bv(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function jv(e) {
  if (!hk(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function Vv(e, t) {
  return t && Qr(e) || xt(e);
}
function fc(e, t, r, n) {
  const i = Yr(t.node);
  if (!Nn(i) || Vv(i, n))
    return;
  const s = e.getElementByKey(i.getKey());
  if (!s || s === t.node || !s.contains(t.node))
    return;
  const o = s.parentNode;
  if (!o)
    return;
  const a = Array.prototype.indexOf.call(o.childNodes, s);
  if (!(a < 0))
    return { node: o, offset: r === "before" ? a : a + 1 };
}
function Wv(e, t) {
  if (N())
    return !1;
  const r = e.getRootElement(), n = Qp(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Zp(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = fc(e, c, jv(c), !0), d = u;
  else {
    const y = Bv(n.getRangeAt(0), c);
    u = fc(e, c, y ? "before" : "after", !1), d = fc(e, l, y ? "after" : "before", !1);
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, h = d ?? l, p = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: h.node,
    focusOffset: h.offset
  }, g = zl(p, e);
  return g ? (zt(g), g.dirty = !t, t) : !1;
}
function Hv() {
  const [e] = fe(), t = Z(!1), r = Z(!1);
  return z(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = N();
        w(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), z(() => e.registerCommand(Bt, () => (Wv(e, t.current) && (r.current = !0), !1), de), [e]), null;
}
function Gv() {
  const [e] = fe();
  return z(() => e.registerCommand(Cr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Gn ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, de), [e]), null;
}
function Jv({ isEditable: e }) {
  const [t] = fe();
  return Gs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function _m(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Jr(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function pc(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = N();
    if (!w(i))
      return !1;
    const s = zl(r, e);
    return !!s && i.is(s);
  }, { editor: e }) || r.removeAllRanges();
}
function Pi(e, t) {
  let r;
  try {
    r = qr();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function Rf(e) {
  return !!e && Zs(se(e));
}
function Hu(e) {
  const [t] = fe(), r = Z(void 0), n = ke((i) => {
    const s = N(), o = w(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Rf(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = ts(u, d), h = Zs(f) ? f : void 0;
      if (h)
        r.current = h.getKey(), l = h.getKey();
      else {
        const p = oT();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Lt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = se(a);
      M(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return z(() => {
    const i = () => {
      const a = e(), c = N(), l = w(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (wt(Rt), Jr(t, Rt), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Qs(c) || !c.includes(Ui))
        return;
      const l = N(), u = w(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (aT(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Ui).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Re(t.registerCommand(Bt, () => (i(), !1), Hn), t.registerCommand(Bl, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Rf(a);
      }), c && t.update(() => {
        const l = se(a);
        M(l) && l.remove();
      }, { tag: Rt }), r.current = void 0, !1;
    }, Hn), t.registerNodeTransform(et, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function Yv() {
  const e = N();
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = B(r) ? r : r.getParent();
  if (!B(n))
    return;
  const i = uS(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && Zs(s); )
    s = s.getPreviousSibling();
  if (!s || M(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (r.is(n))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (r.is(s))
    return M(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = r.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function Xv() {
  return Hu(Yv), null;
}
function Qv() {
  const e = N();
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ye(i) || ts(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ye(s))
    return i;
}
function Zv() {
  return Hu(Qv), null;
}
function eM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = fe();
  return z(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), z(() => {
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
        const u = _m(o);
        o.update(() => {
          u || wt(Wr), o.setEditorState(l), o.dispatchCommand(gk, void 0);
        }, { tag: Hl });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const hc = "caller_highlight", tM = Pn(function(t, r) {
  const [n] = fe(), i = Z(void 0), s = Z(void 0), o = ke(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const u = Nr(a);
      return u ? (u.getChildren().find(xt) ?? en(u))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(hc), l?.classList.add(hc), s.current = l;
  }, [n]);
  return aa(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Pi(n, () => Nr(a)?.getKey()), o();
    }
  }), [n, o]), z(() => Re(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener($e, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const d = l.has(Hl) ? void 0 : c.read(() => vu(u)), f = d === void 0 ? void 0 : n.getEditorState().read(() => Nr(d)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), z(() => () => s.current?.classList.remove(hc), []), null;
});
function rM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = fe();
  return nM(t, n), iM(i, e, r, n), null;
}
function nM(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  z(() => {
    let o = i;
    (!o || o.length <= 0) && (o = Y_), r.current !== o && (r.current = o, $f("note-callers", o, t));
  }, [t, i]), z(() => {
    let o = s;
    (!o || o.length <= 0) && (o = X_), n.current !== o && (n.current = o, $f("cross-ref-callers", o, t));
  }, [t, s]);
}
function iM(e, t, r, n) {
  z(() => {
    if (!e.hasNodes([Ce, $e, mr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => dM(s));
    return Re(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform($e, (s) => sM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(Ce, oM),
      e.registerNodeTransform(et, aM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(mr, cM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(mr, (s, { prevEditorState: o }) => lM(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Bt, () => uM(e, t, r, n), _t),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function sM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => xt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    M(i) && !$(i) && i.getTextContent() !== Gt(e.getCaller()) && e.insertBefore(i);
  }
}
function oM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => xt(s));
  if (!K(e) || !B(t) || !n)
    return;
  const i = iu(r);
  n.getPreviewText() !== i && n.setPreviewText(i), vm(e);
}
function Sm(e) {
  const t = N();
  if (!w(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function vm(e) {
  const t = e.getNextSibling();
  if (M(t) && !$(t)) {
    if (t.getTextContent() === D || Sm(t))
      return;
    if (Sr(t)) {
      t.setTextContent(D);
      return;
    }
  }
  e.insertAfter(to());
}
function aM(e) {
  const t = Ht(e), r = t?.getChildren(), n = r?.find((a) => xt(a));
  if (!M(e) || !B(t) || !n || !r)
    return;
  const i = e.getParent(), s = Sr(e) || Sm(e);
  if (!$(e) && B(i) && s && e.getTextContent() !== D && (e.setTextContent(D), e.selectEnd()), K(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(cr) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = iu(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function cM(e) {
  xt(e) && vm(e);
}
function lM(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return xt(o) && B(a) && a.getCaller() === Ps;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function uM(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = N();
  if (!w(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Ae(o, (c) => B(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = se(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), fs(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (B(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, fs(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (B(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, fs(e, c, n);
    } else if (!a) {
      const c = Ae(o, (l) => B(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      Ge(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, fs(e, l, n);
      }
    }
  }
  if (Fe(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (ui(c) && B(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, fs(e, l, n);
    }
  }
  return !1;
}
function fs(e, t, r) {
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
function dM(e) {
  const t = N();
  if (!w(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (B(i) && M(s)) {
    e.preventDefault();
    const o = kn();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), zt(o);
  }
}
function $f(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (fM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function fM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function $r(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!$(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = en(e);
  return r && t.push(r), t.length > 0 && t.every((n) => M(n) && n.getMode() === "token") ? t : [];
}
function pM(e) {
  const t = e.getParent();
  if (B(t))
    return $r(t).some((r) => r.is(e)) ? t : void 0;
}
function ti(e) {
  const t = $r(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function hM(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function gM(e) {
  const t = yk();
  if (!w(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ti(e);
  const i = hM(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ti(e);
}
function Oi(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = pM(t);
  if (r)
    return Mm(r, t, e.offset) ? void 0 : r;
}
function Mm(e, t, r) {
  const n = $r(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function mM(e) {
  const t = $r(e), r = t[t.length - 1];
  M(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Lt(e, ti(e));
}
function yM(e = !1) {
  const t = N();
  if (!w(t))
    return !1;
  if (!t.isCollapsed())
    return Nm(t);
  const r = Em(t.anchor);
  if (r) {
    const i = Go(r);
    return t.anchor.is(i) ? !1 : (Am(t, i), !0);
  }
  const n = Oi(t.anchor);
  if (!n)
    return !1;
  if (!e && gM(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    Lt(i, n.getIndexWithinParent());
  } else
    mM(n);
  return !0;
}
function Ho(e) {
  const t = $r(e), r = t[t.length - 1];
  return M(r) ? hr(r.getKey(), r.getTextContentSize(), "text") : hr(e.getKey(), ti(e), "element");
}
function Wi(e) {
  const t = e.getLastChild();
  return $(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function gc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === Wi(e) && $(r) && t.offset > 0;
}
function nl(e) {
  const t = Wi(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function Go(e) {
  const t = Wi(e);
  if (t > ti(e)) {
    const r = e.getChildAtIndex(t - 1), n = L(r) ? r.getLastDescendant() : r;
    if (M(n))
      return hr(n.getKey(), n.getTextContentSize(), "text");
  }
  return Ho(e);
}
function Em(e) {
  const t = e.getNode(), r = t.getParent();
  if (B(r) && $r(r).length > 0 && nl(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (B(t) && $r(t).length > 0 && nl(t))
    return e.offset > Wi(t) || e.offset === Wi(t) && e.offset > ti(t) ? t : void 0;
  if (!L(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return B(n) && $r(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function Am(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function Pm(e) {
  const t = Ht(e);
  return t && $r(t).length > 0 ? t : void 0;
}
function bM(e) {
  const t = [], r = (n) => {
    const i = Pm(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function Nm(e) {
  const t = bM(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => hr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const u = hr(l.getKey(), ti(l), "element"), d = hr(l.getKey(), Wi(l), "element"), f = i.type === "text" && Mm(l, i.getNode(), i.offset), h = i.isBefore(u) && !f;
    (Oi(i) || gc(l, i) || h) && (!s.isBefore(u) || Oi(s)) && (i = gc(l, i) ? Go(l) : Ho(l), o = !0), (Oi(s) || gc(l, s) || d.isBefore(s)) && (i.isBefore(d) || i.is(d)) && (s = Oi(s) ? Ho(l) : Go(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function qf(e, t) {
  const r = kn();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function If(e, t) {
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
function Lf(e, t, r) {
  const n = If(e, t), i = If(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function kM(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return L(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function xM(e, t, r, n) {
  const i = t.anchor, s = Em(i);
  if (s)
    return Am(t, Go(s)), !0;
  const o = Pm(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const d = kM(t.focus);
    return B(d) && $r(d).length > 0;
  }
  if (Oi(i))
    return !0;
  const a = Ho(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const d = qf(a, i);
    return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && Lf(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = nl(o);
  if (!c)
    return !1;
  const l = hr(c.getKey(), 0, "text"), u = qf(i, l);
  return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && Lf(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function TM() {
  const [e] = fe(), t = Z(!1);
  return z(() => {
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
  }, [e]), z(() => {
    const r = (o) => () => {
      const a = N();
      return !w(a) || a.isCollapsed() || !Nm(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = N();
      return w(c) ? c.isCollapsed() ? xM(e, c, a, o) : i() : !1;
    };
    return Re(e.registerCommand(Yi, n, de), e.registerCommand(sr, n, de), e.registerCommand(As, n, de), e.registerCommand(mk, n, de), e.registerCommand(Ji, s("character"), de), e.registerCommand(Kl, s("word"), de), e.registerCommand(Po, s("line"), de), e.registerCommand(Yp, i, de), e.registerCommand(jt, i, de));
  }, [e]), z(() => e.registerCommand(Bt, () => (yM(t.current) && (wt(Rt), Jr(e, Rt)), !1), Hn), [e]), null;
}
function CM({ onChange: e }) {
  const [t] = fe();
  return z(() => t.registerCommand(Bt, () => {
    const r = Eu();
    return e?.(r), !1;
  }, _t), [t, e]), null;
}
function wm(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function rn(e) {
  return e ? Ge(e) ? e : Ae(e, (r) => Ge(r)) ?? void 0 : void 0;
}
function Om(e) {
  if (!w(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = rn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Gu(e) {
  return w(e) && e.isCollapsed() && e.anchor.type === "element" || !w(e) && !si(e) ? !1 : e.getNodes().some((t) => ye(t));
}
function Ju(e) {
  if (!w(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = rn(r);
  if (!n || !L(n))
    return !1;
  const i = Qr(n.getFirstChild()) ? 1 : 0;
  if (r.is(n))
    return t.offset <= i;
  if (t.offset !== 0)
    return !1;
  let s = r;
  for (; s && s.getKey() !== n.getKey(); ) {
    const o = s.getPreviousSibling();
    if (o && !(i && o.is(n.getFirstChild())))
      return !1;
    s = s.getParent();
  }
  return !0;
}
function _M(e) {
  if (!e || !Ju(e) || !w(e))
    return;
  const t = rn(e.anchor.getNode());
  return ce(t) && ou(t) ? t : void 0;
}
function Rm(e) {
  if (!w(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = rn(r);
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
function Df(e, t) {
  return !!il(e, t);
}
function il(e, t) {
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && L(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return ye(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return ye(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return ye(i) ? i : void 0;
}
function Jo(e, t) {
  if (!w(e))
    return !1;
  const r = rn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function qi(e) {
  return Gu(e) || Om(e);
}
function sl(e, t) {
  if (Gu(e) || Om(e))
    return !0;
  if (!w(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Ju(e) && Jo(e, "backward") || Df(e, "backward");
    case "deleteForward":
      return Rm(e) && Jo(e, "forward") || Df(e, "forward");
    case "insertText":
      return !1;
  }
}
function SM(e, t) {
  if (!(!w(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = il(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Ju(e) && Jo(e, "backward")) {
        const n = rn(e.anchor.getNode());
        if (Fe(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = il(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Rm(e) && Jo(e, "forward")) {
        const i = rn(e.anchor.getNode())?.getNextSibling();
        if (Fe(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Uf(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return si(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!w(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!w(e) || e.isCollapsed())
    return !1;
  const r = rn(e.anchor.getNode()), n = rn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function $m(e) {
  if (M(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function ol(e) {
  const t = e.getPreviousSibling();
  if (!Ge(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = bt(n), s = e.getChildren().filter((o) => !Sr(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), qm(t, r);
}
function qm(e, t) {
  !t || bt(t) || Sr(t) ? Ss(e) : M(t) ? $m(t) : Lt(e, t.getIndexWithinParent() + 1);
}
function Im(e) {
  return ye(e) || tt(e) ? [] : Fe(e) ? e.getChildren().flatMap(Im) : [e];
}
function vM(e) {
  const t = [];
  for (const r of e) {
    const n = Im(r);
    n.length !== 0 && (Fe(r) && t.length > 0 && t.push(Ee(" ")), t.push(...n));
  }
  return t;
}
const MM = "psc-para-marker-selected", EM = /* @__PURE__ */ new Set(["Process", "Dead"]), AM = /* @__PURE__ */ new Set([
  "insertReplacementText",
  "insertFromDrop",
  "insertFromYank",
  "insertFromPaste",
  "insertFromPasteAsQuotation"
]);
function PM({ onParaMarkerMenuRequest: e, structureProtectionMode: t = "off" }) {
  const [r] = fe(), n = Z(e);
  z(() => {
    n.current = e;
  }, [e]);
  const i = Z(t);
  return z(() => {
    i.current = t;
  }, [t]), z(() => {
    let s, o, a, c = !1, l;
    const u = () => {
      queueMicrotask(() => n.current?.());
    }, d = () => r.isEditable() ? _n(N()) : void 0, f = (j) => {
      i.current !== "protected" && ol(j);
    }, h = (j) => {
      const Y = r.getRootElement(), ie = Qp(Y?.ownerDocument.defaultView ?? null), X = ie?.anchorNode;
      if (!ie || !X || !Y?.contains(X) || r.getElementByKey(j)?.contains(X))
        return !1;
      const P = zl(ie, r);
      return P ? (zt(P), !0) : !1;
    }, p = (j, Y) => {
      const ie = j?.startContainer;
      if (!j || !ie || !r.getRootElement()?.contains(ie) || r.getElementByKey(Y)?.contains(ie))
        return !1;
      const X = kn();
      X.applyDOMRange(j);
      const { anchor: P } = X;
      return P.key === "root" && P.offset === 0 && P.type === "element" ? !1 : (zt(X), !0);
    }, g = (j) => {
      const Y = Es(j.target) ? Yr(j.target) : null;
      if (Qr(Y))
        return xT(Y);
      const ie = mn(N()), X = ie?.getParent();
      if (!ie || !Fe(X) || !Y || h(ie.getKey()) || !Nn(Y))
        return !1;
      const P = Ae(Y, Fe), ee = P ? Ae(Y, (pe) => pe.getParent()?.is(P) ?? !1) : void 0;
      return Fe(P) && ee ? Lt(P, ee.getIndexWithinParent() + 1) : Ss(X), !1;
    }, y = (j) => {
      if (typeof j.key != "string" || Pe())
        return !1;
      const Y = d();
      if (!Y)
        return !1;
      const ie = n.current !== void 0;
      switch (j.key) {
        case "Enter":
          if (!ie || j.shiftKey || j.ctrlKey || j.metaKey || j.altKey)
            break;
          return j.preventDefault(), u(), !0;
        case "ArrowDown":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
          return j.preventDefault(), j.key === "ArrowDown" && j.altKey && ie ? u() : tr(Y), !0;
        case "Backspace":
        case "Delete":
          return j.preventDefault(), f(Y), !0;
        // A virtual keyboard names no key; the `beforeinput` that follows says what it does.
        case "Unidentified":
          return !1;
        default:
          if (!wM(j))
            return !1;
      }
      return tr(Y), !1;
    }, b = (j) => {
      if (!r.isEditable())
        return !1;
      const Y = d();
      if (Y)
        return f(Y), !0;
      if (!j || i.current !== "off")
        return !1;
      const ie = _M(N());
      return ie ? (ol(ie), !0) : !1;
    }, T = (j) => {
      if (Pe())
        return !1;
      const Y = d();
      if (!Y)
        return !1;
      const { inputType: ie } = j;
      if (ie.startsWith("delete"))
        return j.preventDefault(), f(Y), !0;
      if (ie === "insertParagraph" && n.current)
        return j.preventDefault(), u(), !0;
      if (!ie.startsWith("insert"))
        return !1;
      const X = Y.getFirstChildOrThrow().getKey();
      return AM.has(ie) && (p(j.getTargetRanges?.()[0], X) || h(X)) || tr(Y), !1;
    }, k = () => {
      const j = d();
      return j && tr(j), !1;
    }, A = () => {
      const j = d();
      return j && (h(j.getFirstChildOrThrow().getKey()) || tr(j)), !1;
    }, _ = (j) => (Y) => {
      const ie = mn(N());
      return !ie || !r.isEditable() ? !1 : h(ie.getKey()) ? (r.dispatchCommand(j, Y), !0) : (RM(Y) && Y.preventDefault(), !0);
    }, O = (j) => {
      if (!Es(j.target))
        return !1;
      const Y = mn(N());
      if (!Y)
        return !1;
      if (Yr(j.target)?.is(Y))
        return j.preventDefault(), !0;
      const ie = r.getRootElement()?.ownerDocument;
      return p(ie && qM(ie, j.clientX, j.clientY), Y.getKey()), !1;
    }, q = () => {
      const j = d();
      return j ? (tr(j), !0) : !1;
    }, F = () => r.getEditorState().read(() => mn(N()) !== void 0), S = () => {
      if (c || !r.isEditable() || !F())
        return !1;
      const j = r.getRootElement();
      yc(j);
      const Y = j?.ownerDocument.defaultView;
      return l !== void 0 && Y?.clearTimeout(l), l = Y?.setTimeout(() => {
        l = void 0, !c && r.isEditable() && F() && yc(j);
      }), !1;
    }, W = (j) => {
      "button" in j && j.button !== 0 || (c = !0);
    }, G = () => {
      c = !1;
    }, ae = (j) => {
      j.addEventListener("pointerdown", W, !0), j.addEventListener("pointerup", G, !0), j.addEventListener("pointercancel", G, !0);
    }, te = (j) => {
      j.removeEventListener("pointerdown", W, !0), j.removeEventListener("pointerup", G, !0), j.removeEventListener("pointercancel", G, !0);
    }, Pe = () => {
      const j = N();
      if (!a || !Lm(j, a.glyphKey))
        return !1;
      const { paraKey: Y, previousKey: ie, nextKey: X } = a;
      a = void 0;
      const P = se(Y), ee = ie ? se(ie) : null, pe = X ? se(X) : null;
      return Fe(P) && P.isAttached() ? Ss(P) : Fe(ee) && ee.isAttached() ? qm(ee, ee.getLastChild()) : Fe(pe) && pe.isAttached() ? Ss(pe) : zt(null), !0;
    }, xe = (j) => {
      const Y = r.isEditable() ? j : void 0, ie = Y?.paraKey;
      s !== ie && mc(r, s, !1), s = ie, mc(r, ie, !0), o = Kf(r, o, Y?.glyphKey);
    }, Ut = (j = r.getEditorState()) => j.read(() => {
      const Y = mn(N()), ie = Y?.getParent();
      if (!(!Y || !ie))
        return {
          glyphKey: Y.getKey(),
          paraKey: ie.getKey(),
          previousKey: ie.getPreviousSibling()?.getKey(),
          nextKey: ie.getNextSibling()?.getKey()
        };
    }), Ke = Re(bT(r), r.registerEditableListener(() => xe(Ut())), r.registerRootListener((j, Y) => {
      Y && te(Y.ownerDocument), j && ae(j.ownerDocument);
    }), () => {
      const j = r.getRootElement()?.ownerDocument;
      j && te(j), l !== void 0 && j?.defaultView?.clearTimeout(l);
    }, r.registerCommand(Li, g, de), r.registerCommand(Cr, y, de), r.registerCommand(jl, q, de), r.registerCommand(Ji, b, de), r.registerCommand(bk, T, de), r.registerCommand(kk, k, de), r.registerCommand(Yi, k, de), r.registerCommand(sr, A, de), r.registerCommand(jt, _(jt), de), r.registerCommand(xn, _(xn), de), r.registerCommand(Oc, _(Oc), de), r.registerCommand(la, O, de), r.registerCommand(eh, S, de), r.registerCommand(pm, Pe, de), r.registerUpdateListener(({ editorState: j }) => {
      const Y = Ut(j);
      (Y || !NM(j, a?.glyphKey)) && (a = Y), xe(Y), Y && r.isEditable() && yc(r.getRootElement());
    }));
    return () => {
      Ke(), mc(r, s, !1), Kf(r, o, void 0);
    };
  }, [r]), null;
}
function Lm(e, t) {
  return !si(e) || mn(e) ? !1 : e.has(t) || e.getNodes().length === 0;
}
function NM(e, t) {
  return t === void 0 ? !1 : e.read(() => Lm(N(), t));
}
function wM(e) {
  return gm(e) || EM.has(e.key) ? !0 : e.ctrlKey || e.metaKey || e.altKey && !Gn ? !1 : OM(e.key);
}
function OM(e) {
  return [...e].length === 1;
}
function RM(e) {
  return typeof e == "object" && e !== null && typeof e.preventDefault == "function";
}
function mc(e, t, r) {
  if (t === void 0)
    return;
  const n = e.getElementByKey(t);
  n && n.classList.toggle(MM, r);
}
const $M = "psc-para-marker-";
function Kf(e, t, r) {
  const n = e.getRootElement(), i = r === void 0 ? null : e.getElementByKey(r), s = t === void 0 ? null : e.getElementByKey(t);
  if (s && s !== i && (s.removeAttribute("role"), s.removeAttribute("aria-selected")), !!n) {
    if (!i || r === void 0) {
      t !== void 0 && n.removeAttribute("aria-activedescendant");
      return;
    }
    return i.id || (i.id = `${$M}${e.getKey()}-${r}`), i.setAttribute("role", "option"), i.setAttribute("aria-selected", "true"), n.setAttribute("aria-activedescendant", i.id), r;
  }
}
function yc(e) {
  if (!e)
    return;
  const t = e.ownerDocument.defaultView?.getSelection();
  !t || t.rangeCount === 0 || t.anchorNode && e.contains(t.anchorNode) && t.removeAllRanges();
}
function qM(e, t, r) {
  if (typeof e.caretRangeFromPoint == "function")
    return e.caretRangeFromPoint(t, r) ?? void 0;
  if (typeof e.caretPositionFromPoint != "function")
    return;
  const n = e.caretPositionFromPoint(t, r);
  if (!n)
    return;
  const i = e.createRange();
  return i.setStart(n.offsetNode, n.offset), i.collapse(!0), i;
}
function IM() {
  const [e] = fe();
  return LM(e), null;
}
function LM(e) {
  z(() => {
    if (!e.hasNodes([ft]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(ft, (t) => DM(t, e));
  }, [e]);
}
function DM(e, t) {
  Jc(t, e.getKey()) && Fg(e.getFirstChild()), !(!ce(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return ce(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Dm({ onStateChange: e }) {
  const [t] = fe(), [r, n] = me(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = ke(() => {
    const l = N(), u = r.isEditable() ? _n(l) : void 0;
    if (u && r.getElementByKey(u.getKey()) !== null) {
      o.current = u.getMarker(), a.current = u.getMarker(), e?.({
        canUndo: i.current,
        canRedo: s.current,
        blockMarker: o.current,
        contextMarker: a.current
      });
      return;
    }
    let d;
    if (w(l)) {
      const f = l.anchor.getNode(), h = l.focus.getNode();
      let p = f.getKey() === "root" ? f : Ae(f, (T) => {
        const k = T.getParent();
        return k !== null && xk(k);
      });
      p === null && (p = f.getTopLevelElementOrThrow()), Ds(p) && (p = Ae(f, ce) ?? p);
      const g = p.getKey(), y = r.getElementByKey(g), b = fT(f, h);
      if (b && c_(b) && (d = b.getMarker()), y !== null && (ce(p) || _e(p) || Xs(p))) {
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
  return z(() => t.registerCommand(Bt, (l, u) => (c(), n(u), !1), de), [t, c]), z(() => Re(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Tk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), de), r.registerCommand(Ck, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), de)), [c, r, e]), null;
}
function Ff(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function UM(e) {
  if (Array.isArray(e)) return e;
}
function KM(e, t) {
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
function FM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zM(e, t) {
  return UM(e) || KM(e, t) || BM(e, t) || FM();
}
function BM(e, t) {
  if (e) {
    if (typeof e == "string") return Ff(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ff(e, t) : void 0;
  }
}
const Um = Object.entries, zf = Object.setPrototypeOf, jM = Object.isFrozen, VM = Object.getPrototypeOf, WM = Object.getOwnPropertyDescriptor;
let pt = Object.freeze, gt = Object.seal, Ni = Object.create, Km = typeof Reflect < "u" && Reflect, al = Km.apply, cl = Km.construct;
pt || (pt = function(t) {
  return t;
});
gt || (gt = function(t) {
  return t;
});
al || (al = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
cl || (cl = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const vi = ot(Array.prototype.forEach), HM = ot(Array.prototype.lastIndexOf), Bf = ot(Array.prototype.pop), Mi = ot(Array.prototype.push), GM = ot(Array.prototype.splice), yn = Array.isArray, bs = ot(String.prototype.toLowerCase), bc = ot(String.prototype.toString), jf = ot(String.prototype.match), ps = ot(String.prototype.replace), Vf = ot(String.prototype.indexOf), JM = ot(String.prototype.trim), YM = ot(Number.prototype.toString), XM = ot(Boolean.prototype.toString), Wf = typeof BigInt > "u" ? null : ot(BigInt.prototype.toString), Hf = typeof Symbol > "u" ? null : ot(Symbol.prototype.toString), ut = ot(Object.prototype.hasOwnProperty), hs = ot(Object.prototype.toString), lt = ot(RegExp.prototype.test), Fn = QM(TypeError);
function ot(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return al(e, t, n);
  };
}
function QM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return cl(e, r);
  };
}
function be(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : bs;
  if (zf && zf(e, null), !yn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (jM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function ZM(e) {
  for (let t = 0; t < e.length; t++)
    ut(e, t) || (e[t] = null);
  return e;
}
function yt(e) {
  const t = Ni(null);
  for (const n of Um(e)) {
    var r = zM(n, 2);
    const i = r[0], s = r[1];
    ut(e, i) && (yn(s) ? t[i] = ZM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = yt(s) : t[i] = s);
  }
  return t;
}
function eE(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return YM(e);
    case "boolean":
      return XM(e);
    case "bigint":
      return Wf ? Wf(e) : "0";
    case "symbol":
      return Hf ? Hf(e) : "Symbol()";
    case "undefined":
      return hs(e);
    case "function":
    case "object": {
      if (e === null)
        return hs(e);
      const t = e, r = dr(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : hs(n);
      }
      return hs(e);
    }
    default:
      return hs(e);
  }
}
function dr(e, t) {
  for (; e !== null; ) {
    const n = WM(e, t);
    if (n) {
      if (n.get)
        return ot(n.get);
      if (typeof n.value == "function")
        return ot(n.value);
    }
    e = VM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function tE(e) {
  try {
    return lt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Gf = pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), kc = pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), xc = pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), rE = pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Tc = pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), nE = pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Jf = pt(["#text"]), Yf = pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Cc = pt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xf = pt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ko = pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), iE = gt(/{{[\w\W]*|^[\w\W]*}}/g), sE = gt(/<%[\w\W]*|^[\w\W]*%>/g), oE = gt(/\${[\w\W]*/g), aE = gt(/^data-[\-\w.\u00B7-\uFFFF]+$/), cE = gt(/^aria-[\-\w]+$/), Qf = gt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), lE = gt(/^(?:\w+script|data):/i), uE = gt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), dE = gt(/^html$/i), fE = gt(/^[a-z][.\w]*(-[.\w]+)+$/i), Zf = gt(/<[/\w!]/g), ep = gt(/<[/\w]/g), pE = gt(/<\/no(script|embed|frames)/i), hE = gt(/\/>/i), Ft = {
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
}, gE = function() {
  return typeof window > "u" ? null : window;
}, mE = function(t, r) {
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
}, tp = function() {
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
}, hn = function(t, r, n, i) {
  return ut(t, r) && yn(t[r]) ? be(i.base ? yt(i.base) : {}, t[r], i.transform) : n;
};
function Fm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gE();
  const t = (V) => Fm(V);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Ft.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, h = dr(f, "cloneNode"), p = dr(f, "remove"), g = dr(f, "nextSibling"), y = dr(f, "childNodes"), b = dr(f, "parentNode"), T = dr(f, "shadowRoot"), k = dr(f, "attributes"), A = o && o.prototype ? dr(o.prototype, "nodeType") : null, _ = o && o.prototype ? dr(o.prototype, "nodeName") : null, O = o && o.prototype ? dr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const V = r.createElement("template");
    V.content && V.content.ownerDocument && (r = V.content.ownerDocument);
  }
  let q, F = "", S, W = !1, G = 0;
  const ae = function() {
    if (G > 0)
      throw Fn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, te = function(m) {
    ae(), G++;
    try {
      return q.createHTML(m);
    } finally {
      G--;
    }
  }, Pe = function(m) {
    ae(), G++;
    try {
      return q.createScriptURL(m);
    } finally {
      G--;
    }
  }, xe = function() {
    return W || (S = mE(d, i), W = !0), S;
  }, Ut = r, Ke = Ut.implementation, j = Ut.createNodeIterator, Y = Ut.createDocumentFragment, ie = Ut.getElementsByTagName, X = n.importNode;
  let P = tp();
  t.isSupported = typeof Um == "function" && typeof b == "function" && Ke && Ke.createHTMLDocument !== void 0;
  const ee = iE, pe = sE, Se = oE, ct = aE, mt = cE, ne = lE, Xe = uE, Ua = fE;
  let fi = Qf, ve = null;
  const Qe = be({}, [...Gf, ...kc, ...xc, ...Tc, ...Jf]);
  let ge = null;
  const Et = be({}, [...Yf, ...Cc, ...Xf, ...ko]);
  let Ie = Object.seal(Ni(null, {
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
  })), lr = null, oo = null;
  const Xt = Object.seal(Ni(null, {
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
  let is = !0, jr = !0, On = !1, ao = !0, At = !1, Qt = !0, Mr = !1, pi = !1, hi = null, Rn = null, R = !1, I = !1, H = !1, J = !1, Te = !0, qe = !1;
  const Ve = "user-content-";
  let nt = !0, Tt = !1, Vr = {}, Kt = null;
  const gi = be({}, [
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
  let ur = null;
  const co = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let ss = null;
  const $n = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), lo = "http://www.w3.org/1998/Math/MathML", uo = "http://www.w3.org/2000/svg", Er = "http://www.w3.org/1999/xhtml";
  let mi = Er, Ka = !1, Fa = null;
  const Ib = be({}, [lo, uo, Er], bc), xd = pt(["mi", "mo", "mn", "ms", "mtext"]);
  let za = be({}, xd);
  const Td = pt(["annotation-xml"]);
  let Ba = be({}, Td);
  const Lb = be({}, ["title", "style", "font", "a", "script"]);
  let os = null;
  const Db = ["application/xhtml+xml", "text/html"], Ub = "text/html";
  let We = null, yi = null;
  const Kb = r.createElement("form"), Cd = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, ja = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (yi && yi === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = yt(m), os = // eslint-disable-next-line unicorn/prefer-includes
    Db.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? Ub : m.PARSER_MEDIA_TYPE, We = os === "application/xhtml+xml" ? bc : bs, ve = hn(m, "ALLOWED_TAGS", Qe, {
      transform: We
    }), ge = hn(m, "ALLOWED_ATTR", Et, {
      transform: We
    }), Fa = hn(m, "ALLOWED_NAMESPACES", Ib, {
      transform: bc
    }), ss = hn(m, "ADD_URI_SAFE_ATTR", $n, {
      transform: We,
      base: $n
    }), ur = hn(m, "ADD_DATA_URI_TAGS", co, {
      transform: We,
      base: co
    }), Kt = hn(m, "FORBID_CONTENTS", gi, {
      transform: We
    }), lr = hn(m, "FORBID_TAGS", yt({}), {
      transform: We
    }), oo = hn(m, "FORBID_ATTR", yt({}), {
      transform: We
    }), Vr = ut(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? yt(m.USE_PROFILES) : m.USE_PROFILES : !1, is = m.ALLOW_ARIA_ATTR !== !1, jr = m.ALLOW_DATA_ATTR !== !1, On = m.ALLOW_UNKNOWN_PROTOCOLS || !1, ao = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, At = m.SAFE_FOR_TEMPLATES || !1, Qt = m.SAFE_FOR_XML !== !1, Mr = m.WHOLE_DOCUMENT || !1, I = m.RETURN_DOM || !1, H = m.RETURN_DOM_FRAGMENT || !1, J = m.RETURN_TRUSTED_TYPE || !1, R = m.FORCE_BODY || !1, Te = m.SANITIZE_DOM !== !1, qe = m.SANITIZE_NAMED_PROPS || !1, nt = m.KEEP_CONTENT !== !1, Tt = m.IN_PLACE || !1, fi = tE(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Qf, mi = typeof m.NAMESPACE == "string" ? m.NAMESPACE : Er, za = ut(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? yt(m.MATHML_TEXT_INTEGRATION_POINTS) : be({}, xd), Ba = ut(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? yt(m.HTML_INTEGRATION_POINTS) : be({}, Td);
    const v = ut(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? yt(m.CUSTOM_ELEMENT_HANDLING) : Ni(null);
    if (Ie = Ni(null), ut(v, "tagNameCheck") && Cd(v.tagNameCheck) && (Ie.tagNameCheck = v.tagNameCheck), ut(v, "attributeNameCheck") && Cd(v.attributeNameCheck) && (Ie.attributeNameCheck = v.attributeNameCheck), ut(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (Ie.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), gt(Ie), At && (jr = !1), H && (I = !0), Vr && (ve = be({}, Jf), ge = Ni(null), Vr.html === !0 && (be(ve, Gf), be(ge, Yf)), Vr.svg === !0 && (be(ve, kc), be(ge, Cc), be(ge, ko)), Vr.svgFilters === !0 && (be(ve, xc), be(ge, Cc), be(ge, ko)), Vr.mathMl === !0 && (be(ve, Tc), be(ge, Xf), be(ge, ko))), Xt.tagCheck = null, Xt.attributeCheck = null, ut(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Xt.tagCheck = m.ADD_TAGS : yn(m.ADD_TAGS) && (ve === Qe && (ve = yt(ve)), be(ve, m.ADD_TAGS, We))), ut(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Xt.attributeCheck = m.ADD_ATTR : yn(m.ADD_ATTR) && (ge === Et && (ge = yt(ge)), be(ge, m.ADD_ATTR, We))), ut(m, "ADD_URI_SAFE_ATTR") && yn(m.ADD_URI_SAFE_ATTR) && be(ss, m.ADD_URI_SAFE_ATTR, We), ut(m, "FORBID_CONTENTS") && yn(m.FORBID_CONTENTS) && (Kt === gi && (Kt = yt(Kt)), be(Kt, m.FORBID_CONTENTS, We)), ut(m, "ADD_FORBID_CONTENTS") && yn(m.ADD_FORBID_CONTENTS) && (Kt === gi && (Kt = yt(Kt)), be(Kt, m.ADD_FORBID_CONTENTS, We)), nt && (ve["#text"] = !0), Mr && be(ve, ["html", "head", "body"]), ve.table && (be(ve, ["tbody"]), delete lr.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Fn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Fn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = q;
      q = m.TRUSTED_TYPES_POLICY;
      try {
        F = te("");
      } catch (Q) {
        throw q = U, Q;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (q = void 0, F = "") : (q === void 0 && (q = xe()), q && typeof F == "string" && (F = te("")));
    pt && pt(m), yi = m;
  }, _d = be({}, [...kc, ...xc, ...rE]), Sd = be({}, [...Tc, ...nE]), Fb = function(m, v, U) {
    return v.namespaceURI === Er ? m === "svg" : v.namespaceURI === lo ? m === "svg" && (U === "annotation-xml" || za[U]) : !!_d[m];
  }, zb = function(m, v, U) {
    return v.namespaceURI === Er ? m === "math" : v.namespaceURI === uo ? m === "math" && Ba[U] : !!Sd[m];
  }, Bb = function(m, v, U) {
    return v.namespaceURI === uo && !Ba[U] || v.namespaceURI === lo && !za[U] ? !1 : !Sd[m] && (Lb[m] || !_d[m]);
  }, jb = function(m) {
    let v = b(m);
    (!v || !v.tagName) && (v = {
      namespaceURI: mi,
      tagName: "template"
    });
    const U = bs(m.tagName), Q = bs(v.tagName);
    return Fa[m.namespaceURI] ? m.namespaceURI === uo ? Fb(U, v, Q) : m.namespaceURI === lo ? zb(U, v, Q) : m.namespaceURI === Er ? Bb(U, v, Q) : !!(os === "application/xhtml+xml" && Fa[m.namespaceURI]) : !1;
  }, dn = function(m) {
    Mi(t.removed, {
      element: m
    });
    try {
      b(m).removeChild(m);
    } catch {
      if (p(m), !b(m))
        throw Fn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, fo = function(m) {
    as(m);
    const v = y(m);
    if (v) {
      const Q = [];
      vi(v, (re) => {
        Mi(Q, re);
      }), vi(Q, (re) => {
        try {
          p(re);
        } catch {
        }
      });
    }
    const U = k(m);
    if (U)
      for (let Q = U.length - 1; Q >= 0; --Q) {
        const re = U[Q], ue = re && re.name;
        if (typeof ue == "string")
          try {
            m.removeAttribute(ue);
          } catch {
          }
      }
  }, qn = function(m, v) {
    try {
      Mi(t.removed, {
        attribute: v.getAttributeNode(m),
        from: v
      });
    } catch {
      Mi(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(m), m === "is")
      if (I || H)
        try {
          dn(v);
        } catch {
        }
      else
        try {
          v.setAttribute(m, "");
        } catch {
        }
  }, Vb = function(m) {
    const v = k(m);
    if (v)
      for (let U = v.length - 1; U >= 0; --U) {
        const Q = v[U], re = Q && Q.name;
        if (!(typeof re != "string" || ge[We(re)]))
          try {
            m.removeAttribute(re);
          } catch {
          }
      }
  }, as = function(m) {
    const v = [m];
    for (; v.length > 0; ) {
      const U = v.pop();
      (A ? A(U) : U.nodeType) === Ft.element && Vb(U);
      const re = y(U);
      if (re)
        for (let ue = re.length - 1; ue >= 0; --ue)
          v.push(re[ue]);
    }
  }, Wb = function(m) {
    if (!Qt)
      return;
    const v = [m];
    for (; v.length > 0; ) {
      const U = v.pop(), Q = A ? A(U) : U.nodeType;
      if (Q === Ft.processingInstruction || Q === Ft.comment && lt(ep, U.data)) {
        try {
          p(U);
        } catch {
        }
        continue;
      }
      if (Q === Ft.element) {
        const ue = U, we = We(_ ? _(U) : U.nodeName);
        try {
          ue.hasAttribute && ue.hasAttribute("patchsrc") && ue.removeAttribute("patchsrc"), ue.hasAttribute && ue.hasAttribute("for") && we !== "label" && we !== "output" && ue.removeAttribute("for");
        } catch {
        }
      }
      const re = y(U);
      if (re)
        for (let ue = re.length - 1; ue >= 0; --ue)
          v.push(re[ue]);
    }
  }, vd = function(m) {
    let v = null, U = null;
    if (R)
      m = "<remove></remove>" + m;
    else {
      const ue = jf(m, /^[\r\n\t ]+/);
      U = ue && ue[0];
    }
    os === "application/xhtml+xml" && mi === Er && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const Q = q ? te(m) : m;
    if (mi === Er)
      try {
        v = new u().parseFromString(Q, os);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = Ke.createDocument(mi, "template", null);
      try {
        v.documentElement.innerHTML = Ka ? F : Q;
      } catch {
      }
    }
    const re = v.body || v.documentElement;
    return m && U && re.insertBefore(r.createTextNode(U), re.childNodes[0] || null), mi === Er ? ie.call(v, Mr ? "html" : "body")[0] : Mr ? v.documentElement : re;
  }, Md = function(m) {
    const v = O ? O(m) : m.ownerDocument;
    return j.call(
      v || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, po = function(m) {
    return m = ps(m, ee, " "), m = ps(m, pe, " "), m = ps(m, Se, " "), m;
  }, Va = function(m) {
    var v;
    m.normalize();
    const U = O ? O(m) : m.ownerDocument, Q = j.call(
      U || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let re = Q.nextNode();
    for (; re; )
      re.data = po(re.data), re = Q.nextNode();
    const ue = (v = m.querySelectorAll) === null || v === void 0 ? void 0 : v.call(m, "template");
    ue && vi(ue, (we) => {
      bi(we.content) && Va(we.content);
    });
  }, ho = function(m) {
    const v = _ ? _(m) : null;
    return typeof v != "string" || We(v) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    m.attributes !== k(m) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    m.nodeType !== A(m) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, bi = function(m) {
    if (!A || typeof m != "object" || m === null)
      return !1;
    try {
      return A(m) === Ft.documentFragment;
    } catch {
      return !1;
    }
  }, cs = function(m) {
    if (!A || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof A(m) == "number";
    } catch {
      return !1;
    }
  };
  function Ar(V, m, v) {
    V.length !== 0 && vi(V, (U) => {
      U.call(t, m, v, yi);
    });
  }
  const Hb = function(m, v) {
    return !!(Qt && m.hasChildNodes() && !cs(m.firstElementChild) && lt(Zf, m.textContent) && lt(Zf, m.innerHTML) || Qt && m.namespaceURI === Er && v === "style" && cs(m.firstElementChild) || m.nodeType === Ft.processingInstruction || Qt && m.nodeType === Ft.comment && lt(ep, m.data));
  }, Gb = function(m, v, U) {
    if (!lr[v] && Nd(v) && (Ie.tagNameCheck instanceof RegExp && lt(Ie.tagNameCheck, v) || Ie.tagNameCheck instanceof Function && Ie.tagNameCheck(v)))
      return !1;
    if (nt && !Kt[v]) {
      const Q = b(m), re = y(m);
      if (re && Q) {
        const ue = re.length;
        for (let we = ue - 1; we >= 0; --we) {
          const He = m === U ? h(re[we], !0) : re[we];
          Q.insertBefore(He, g(m));
        }
      }
    }
    return dn(m), !0;
  }, Ed = function(m, v, U, Q) {
    return m.length === 0 ? v : v === U || v === Q ? yt(v) : v;
  }, Ad = function(m, v) {
    if (Ar(P.beforeSanitizeElements, m, null), m !== v && b(m) === null)
      return Tt && as(m), !0;
    if (ho(m))
      return dn(m), !0;
    const U = We(_ ? _(m) : m.nodeName);
    if (ve = Ed(P.uponSanitizeElement, ve, Qe, hi), Ar(P.uponSanitizeElement, m, {
      tagName: U,
      allowedTags: ve
    }), m !== v && b(m) === null)
      return Tt && as(m), !0;
    if (Hb(m, U))
      return dn(m), !0;
    if (lr[U] || !(Xt.tagCheck instanceof Function && Xt.tagCheck(U)) && !ve[U]) {
      const re = Gb(m, U, v);
      return re === !1 && Ar(P.afterSanitizeElements, m, null), re;
    }
    if ((A ? A(m) : m.nodeType) === Ft.element && !jb(m) || (U === "noscript" || U === "noembed" || U === "noframes") && lt(pE, m.innerHTML))
      return dn(m), !0;
    if (At && m.nodeType === Ft.text) {
      const re = po(m.textContent);
      m.textContent !== re && (Mi(t.removed, {
        element: m.cloneNode()
      }), m.textContent = re);
    }
    return Ar(P.afterSanitizeElements, m, null), !1;
  }, Pd = function(m, v, U) {
    if (oo[v] || Qt && v === "patchsrc" || Qt && v === "for" && m !== "label" && m !== "output" || Te && (v === "id" || v === "name") && (U in r || U in Kb))
      return !1;
    const Q = ge[v] || Xt.attributeCheck instanceof Function && Xt.attributeCheck(v, m);
    if (!(jr && lt(ct, v))) {
      if (!(is && lt(mt, v))) {
        if (Q) {
          if (!ss[v]) {
            if (!lt(fi, ps(U, Xe, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && m !== "script" && Vf(U, "data:") === 0 && ur[m])) {
                if (!(On && !lt(ne, ps(U, Xe, "")))) {
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
          !(Nd(m) && (Ie.tagNameCheck instanceof RegExp && lt(Ie.tagNameCheck, m) || Ie.tagNameCheck instanceof Function && Ie.tagNameCheck(m)) && (Ie.attributeNameCheck instanceof RegExp && lt(Ie.attributeNameCheck, v) || Ie.attributeNameCheck instanceof Function && Ie.attributeNameCheck(v, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && Ie.allowCustomizedBuiltInElements && (Ie.tagNameCheck instanceof RegExp && lt(Ie.tagNameCheck, U) || Ie.tagNameCheck instanceof Function && Ie.tagNameCheck(U)))
        ) return !1;
      }
    }
    return !0;
  }, Jb = be({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Nd = function(m) {
    return !Jb[bs(m)] && lt(Ua, m);
  }, Yb = function(m, v, U, Q) {
    if (q && typeof d == "object" && typeof d.getAttributeType == "function" && !U)
      switch (d.getAttributeType(m, v)) {
        case "TrustedHTML":
          return te(Q);
        case "TrustedScriptURL":
          return Pe(Q);
      }
    return Q;
  }, Xb = function(m, v, U, Q) {
    try {
      U ? m.setAttributeNS(U, v, Q) : m.setAttribute(v, Q), ho(m) ? dn(m) : Bf(t.removed);
    } catch {
      qn(v, m);
    }
  }, wd = function(m) {
    Ar(P.beforeSanitizeAttributes, m, null);
    const v = m.attributes;
    if (!v || ho(m))
      return;
    ge = Ed(P.uponSanitizeAttribute, ge, Et, Rn);
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ge,
      forceKeepAttr: void 0
    };
    let Q = v.length;
    const re = We(m.nodeName);
    for (; Q--; ) {
      const ue = v[Q], we = ue.name, He = ue.namespaceURI, Pt = ue.value, Nt = We(we), Ha = Pt;
      let Ct = we === "value" ? Ha : JM(Ha);
      if (U.attrName = Nt, U.attrValue = Ct, U.keepAttr = !0, U.forceKeepAttr = void 0, Ar(P.uponSanitizeAttribute, m, U), Ct = U.attrValue, qe && (Nt === "id" || Nt === "name") && Vf(Ct, Ve) !== 0 && (qn(we, m), Ct = Ve + Ct), Qt && lt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ct)) {
        qn(we, m);
        continue;
      }
      if (Nt === "attributename" && jf(Ct, "href")) {
        qn(we, m);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          qn(we, m);
          continue;
        }
        if (!ao && lt(hE, Ct)) {
          qn(we, m);
          continue;
        }
        if (At && (Ct = po(Ct)), !Pd(re, Nt, Ct)) {
          qn(we, m);
          continue;
        }
        Ct = Yb(re, Nt, He, Ct), Ct !== Ha && Xb(m, we, He, Ct);
      }
    }
    Ar(P.afterSanitizeAttributes, m, null);
  }, go = function(m) {
    let v = null;
    const U = Md(m);
    for (Ar(P.beforeSanitizeShadowDOM, m, null); v = U.nextNode(); )
      if (Ar(P.uponSanitizeShadowNode, v, null), Ad(v, m), wd(v), bi(v.content) && go(v.content), (A ? A(v) : v.nodeType) === Ft.element) {
        const re = T(v);
        bi(re) && (Wa(re), go(re));
      }
    Ar(P.afterSanitizeShadowDOM, m, null);
  }, Wa = function(m) {
    const v = [{
      node: m,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const U = v.pop();
      if (U.shadow) {
        go(U.shadow);
        continue;
      }
      const Q = U.node, ue = (A ? A(Q) : Q.nodeType) === Ft.element, we = y(Q);
      if (we)
        for (let He = we.length - 1; He >= 0; --He)
          v.push({
            node: we[He],
            shadow: null
          });
      if (ue) {
        const He = _ ? _(Q) : null;
        if (typeof He == "string" && We(He) === "template") {
          const Pt = Q.content;
          bi(Pt) && v.push({
            node: Pt,
            shadow: null
          });
        }
      }
      if (ue) {
        const He = T(Q);
        bi(He) && v.push({
          node: null,
          shadow: He
        }, {
          node: He,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(V) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, U = null, Q = null, re = null;
    if (Ka = !V, Ka && (V = "<!-->"), typeof V != "string" && !cs(V) && (V = eE(V), typeof V != "string"))
      throw Fn("dirty is not a string, aborting");
    if (!t.isSupported)
      return V;
    pi ? (ve = hi, ge = Rn) : ja(m), (P.uponSanitizeElement.length > 0 || P.uponSanitizeAttribute.length > 0) && (ve = yt(ve)), P.uponSanitizeAttribute.length > 0 && (ge = yt(ge)), t.removed = [];
    const ue = Tt && typeof V != "string" && cs(V);
    if (ue) {
      Wb(V);
      const Pt = _ ? _(V) : V.nodeName;
      if (typeof Pt == "string") {
        const Nt = We(Pt);
        if (!ve[Nt] || lr[Nt])
          throw fo(V), Fn("root node is forbidden and cannot be sanitized in-place");
      }
      if (ho(V))
        throw fo(V), Fn("root node is clobbered and cannot be sanitized in-place");
      try {
        Wa(V);
      } catch (Nt) {
        throw fo(V), Nt;
      }
    } else if (cs(V))
      v = vd("<!---->"), U = v.ownerDocument.importNode(V, !0), U.nodeType === Ft.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? v = U : v.appendChild(U), Wa(U);
    else {
      if (!I && !At && !Mr && // eslint-disable-next-line unicorn/prefer-includes
      V.indexOf("<") === -1)
        return q && J ? te(V) : V;
      if (v = vd(V), !v)
        return I ? null : J ? F : "";
    }
    v && R && dn(v.firstChild);
    const we = ue ? V : v;
    try {
      const Pt = Md(we);
      for (; Q = Pt.nextNode(); )
        Ad(Q, we), wd(Q), bi(Q.content) && go(Q.content);
    } catch (Pt) {
      throw ue && (fo(V), vi(t.removed, (Nt) => {
        Nt.element && as(Nt.element);
      })), Pt;
    }
    if (ue)
      return vi(t.removed, (Pt) => {
        Pt.element && as(Pt.element);
      }), At && Va(V), V;
    if (I) {
      if (At && Va(v), H)
        for (re = Y.call(v.ownerDocument); v.firstChild; )
          re.appendChild(v.firstChild);
      else
        re = v;
      return (ge.shadowroot || ge.shadowrootmode) && (re = X.call(n, re, !0)), re;
    }
    let He = Mr ? v.outerHTML : v.innerHTML;
    return Mr && ve["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && lt(dE, v.ownerDocument.doctype.name) && (He = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + He), At && (He = po(He)), q && J ? te(He) : He;
  }, t.setConfig = function() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ja(V), pi = !0, hi = ve, Rn = ge;
  }, t.clearConfig = function() {
    yi = null, pi = !1, hi = null, Rn = null, q = S, F = "";
  }, t.isValidAttribute = function(V, m, v) {
    yi || ja({});
    const U = We(V), Q = We(m);
    return Pd(U, Q, v);
  }, t.addHook = function(V, m) {
    typeof m == "function" && ut(P, V) && Mi(P[V], m);
  }, t.removeHook = function(V, m) {
    if (ut(P, V)) {
      if (m !== void 0) {
        const v = HM(P[V], m);
        return v === -1 ? void 0 : GM(P[V], v, 1)[0];
      }
      return Bf(P[V]);
    }
  }, t.removeHooks = function(V) {
    ut(P, V) && (P[V] = []);
  }, t.removeAllHooks = function() {
    P = tp();
  }, t;
}
var yE = Fm();
function bE({ structureProtectionMode: e = "off" }) {
  const [t] = fe(), r = Z(void 0), [n, i] = me(void 0), s = ke((o) => {
    r.current = o, i(o);
  }, []);
  return z(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const g = wm(p);
      if (!g)
        return !1;
      const y = N();
      return e === "protected" ? y && sl(y, g) ? (p.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, p);
    }, a = (p, g) => {
      const y = N(), b = r.current;
      if (b && y && Uf(y, b)) {
        if (s(void 0), g?.preventDefault(), p !== b.intent)
          return !0;
        const k = se(b.key) ?? void 0;
        if (b.kind === "verse") {
          if (k) {
            const A = k.getParent(), _ = k.getPreviousSibling(), O = k.getNextSibling();
            k.remove(), _ ? $m(_) : O && M(O) ? O.select(0, 0) : A?.selectStart();
          }
        } else b.kind === "selection" ? w(y) && (Ku(y), y.removeText()) : Fe(k) && ol(k);
        return !0;
      }
      if (!y)
        return !1;
      const T = SM(y, p);
      if (T) {
        if (T.kind === "verse") {
          const k = Ll();
          k.add(T.node.getKey()), zt(k);
        } else {
          const k = kn();
          k.anchor.set(T.node.getKey(), 0, "element"), k.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), zt(k);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: p }), g?.preventDefault(), !0;
      }
      if (w(y) && !y.isCollapsed() && Gu(y)) {
        const k = y.getNodes().filter(ye).map((O) => O.getKey()), { anchor: A, focus: _ } = y;
        return s({
          kind: "selection",
          intent: p,
          key: k[0],
          anchor: { key: A.key, offset: A.offset, type: A.type },
          focus: { key: _.key, offset: _.offset, type: _.type }
        }), g?.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const g = N();
      return !g || !qi(g) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, g) => {
      if (!p)
        return !1;
      const y = yE.sanitize(p), b = new DOMParser().parseFromString(y, "text/html"), T = vM(jk(t, b)), k = N();
      return w(k) && k.insertNodes(T), g.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const g = N();
      return g && qi(g) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const g = N();
      return g && qi(g) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = (p) => {
      if (!t.isEditable())
        return !1;
      const g = p ? "deleteBackward" : "deleteForward";
      if (e === "protected") {
        const y = N();
        return !!y && sl(y, g);
      }
      return a(g, void 0);
    }, h = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Uf(N(), p) || s(void 0);
      });
    };
    return Re(
      t.registerCommand(Cr, o, Ne),
      t.registerCommand(Ji, f, Ne),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(jt, c, de),
      t.registerCommand(sr, u, Ne),
      t.registerCommand(Oc, c, Ne),
      t.registerCommand(la, d, Ne),
      t.registerCommand(Yi, c, Ne),
      t.registerUpdateListener(h)
    );
  }, [t, e, s]), z(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const qw = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function kE({ textDirection: e }) {
  const [t] = fe();
  return xE(t, e), null;
}
function xE(e, t) {
  z(() => (rp(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && rp(e, t);
  })), [e, t]);
}
function rp(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function TE() {
  const [e] = fe();
  return CE(e), null;
}
function CE(e) {
  z(() => {
    if (!e.hasNodes([Ce, Dt, $e, et, St]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Re(
      e.registerNodeTransform(et, _E),
      e.registerNodeTransform(et, (t) => SE(t, e)),
      e.registerNodeTransform(St, np),
      e.registerNodeTransform(Dt, np),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(St, (t) => {
        Ls(Qn("va"), t), Ls(Qn("vp"), t);
      })
    );
  }, [e]);
}
function _E(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || B(r) || K(n) || K(r) || Me(n) || Me(r) || je(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  M(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  je(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  le(e, he) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Be(n))
    return;
  if (ye(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ye(r) && xu(e);
}
function SE(e, t) {
  const r = e.getParent();
  !je(r) || !e.isAttached() || Jc(t, e.getKey()) && !Jc(t, r.getKey()) && r.insertAfter(e);
}
function np(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Me(t); )
    t = t.getLastChild();
  (K(t) || M(t) && Me(t.getParent())) && e.insertBefore(Ee(" "));
}
function Pa(e) {
  if (!B(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !Zs(i)))
      return;
    const n = t.getParent();
    if (!n)
      return;
    if (!L(n) || !n.isInline())
      return e;
    t = n;
  }
}
function vE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function ME() {
  const e = N();
  if (!(!w(e) || !e.isCollapsed()))
    return Pa(vE(e.anchor));
}
function EE(e) {
  const t = N();
  let r;
  return w(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = zm(e.target)), r ? Pa(Ae(r, B)) : void 0;
}
function zm(e) {
  const t = _k(e)?.anchorNode;
  if (Es(t))
    return Yr(t) ?? void 0;
}
function AE(e) {
  if (N())
    return;
  const t = zm(e);
  return t ? Pa(Ae(t, B)) : void 0;
}
function ip(e) {
  const t = Ae(e.getNode(), B);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function PE() {
  const e = N();
  if (!w(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = ip(t), i = ip(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const NE = 500;
function wE(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function OE() {
  const e = N();
  if (!w(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (L(n))
    return Pa(n.getChildAtIndex(t.offset));
}
function RE() {
  const [e] = fe(), t = Hu(ME), r = Z(void 0);
  return z(() => {
    const n = (i) => {
      wt(Rt), Jr(e, Rt), t(i);
    };
    return Re(e.registerCommand(
      Cr,
      (i) => (r.current = wE(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      de
    ), e.registerCommand(Bt, () => {
      if (r.current !== void 0 && performance.now() - r.current < NE) {
        const o = OE();
        if (o)
          return n(o), !1;
      }
      if (PE())
        return wt(Rt), Jr(e, Rt), !1;
      const s = AE(e.getRootElement());
      return s && n(s), !1;
    }, Hn), e.registerCommand(Li, (i) => {
      const s = EE(i);
      return s && n(s), !1;
    }, Hn));
  }, [e, t]), null;
}
function $E({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = PS({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return E(AS, { trigger: e, items: i });
}
function qE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Ze(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? E(DE, { trigger: e, harness: i }) : E($E, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const IE = [" ", "*"];
function LE(e, t) {
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
function DE({ trigger: e, harness: t }) {
  const [r] = fe(), [n, i] = me(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = ke((f, h, p) => {
    const g = h.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = N();
      w(y) && y.insertText(`${e}${f}${p ? " " : ""}`);
    });
  }, [r, t, e]);
  z(() => Re(r.registerCommand(Cr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), th(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = N();
          w(y) && y.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const p = s.current.query;
      if (n.hasTextSelection) {
        const g = n.items.find((y) => y.marker === p);
        return g && t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(p, n.items, !0), !0;
    }
    if (f.key !== e)
      return !1;
    const h = t.getContext();
    return h ? (f.preventDefault(), s.current = { query: "", options: [] }, o.current += 1, i({
      trigger: "backslash",
      hasTextSelection: h.hasTextSelection,
      items: t.getItems(h),
      session: o.current
    }), !0) : !1;
  }, Ne), r.registerCommand(rh, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const h = t.getContext();
    return !h || h.noteMarker || h.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(h),
      session: o.current
    }), !0);
  }, Or)), [r, e, t, n, a]);
  const c = ke(() => i(void 0), []), l = ke((f, h) => {
    s.current = { query: f, options: h };
  }, []), u = ke((f) => {
    const { markerMenuItem: h, applyOpts: p } = f;
    t.apply(h, p);
  }, [t]), d = Ze(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    LE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && E(Qg, { isOpen: !0, children: ({ placement: f }) => E(
    tm,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? IE : void 0 },
    n.session
  ) });
}
function UE(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (r) => D.repeat(r.length));
}
function KE(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
function FE(e) {
  return e.replace(/ {2,}/g, " ");
}
let Yo;
function zE(e) {
  e && (Yo = e);
}
function ll(e) {
  return so(e);
}
function BE(e, t) {
  return e.isEmpty() ? Jp : Bm(e.toJSON(), t);
}
function Bm(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && pa(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Jp;
  if (r.some(BC)) {
    Yo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = jm(r), i = fr(n, t);
  return i ? { type: br, version: yr, content: i } : void 0;
}
function jE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Ue({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function VE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ue({
    type: Yt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function WE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Qh(r, a, c), Ue({
    type: Yt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function HE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Qh(t, o, a), Ue({
    type: St.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function GE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !ll(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(D) && (t[0] = a.slice(1));
  }
  return Ue({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function JE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ue({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function YE(e, t) {
  const { unknownAttributes: r } = e;
  return Ue({ type: Mg, ...r, content: t });
}
function XE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ue({ type: Pg, marker: r, ...n, content: t });
}
function QE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ue({
    type: wg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function ZE(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function eA(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Ue({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function wi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ue({
    type: t,
    marker: r === "" ? void 0 : r,
    ...ag({ sid: n, eid: i, ...s }, o)
  });
}
function tA(e) {
  return e.text;
}
function rA(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ue({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function nA(e) {
  const { marker: t } = e;
  return {
    type: Lo,
    marker: t === "" ? void 0 : t
  };
}
function sp(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function iA(e, t, r, n, i) {
  const s = kr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = wi({
      type: s,
      marker: Ri,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = wi({
      type: s,
      marker: Jn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = wi({
      type: s,
      marker: Jn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = wi({
      type: s,
      marker: Ri
    });
    i.push(l);
  }
  (!n || !Ph(n)) && t.forEach((l) => {
    const u = wi({
      type: s,
      marker: Ri,
      eid: l
    });
    i.push(u);
  });
}
function fr(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, h = a, p = a, g = a, y = a;
    switch (a.type) {
      case Wt.getType():
        i.push(
          jE(
            l,
            fr(l.children, t)
          )
        );
        break;
      case zr.getType():
        i.push(VE(a));
        break;
      case Yt.getType():
        i.push(
          WE(
            u,
            fr(u.children, t)
          )
        );
        break;
      case Dt.getType():
      case St.getType():
        i.push(HE(a));
        break;
      case Ce.getType():
        i.push(
          GE(
            d,
            fr(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case ft.getType():
        i.push(
          JE(
            f,
            fr(f.children, t)
          )
        );
        break;
      case li.getType():
        i.push(
          YE(
            a,
            fr(a.children, t)
          )
        );
        break;
      case Zi.getType():
        i.push(
          XE(
            a,
            fr(a.children, t)
          )
        );
        break;
      case es.getType():
        i.push(
          QE(
            a,
            fr(a.children, t)
          )
        );
        break;
      case $e.getType(): {
        const b = fr(
          h.children,
          t,
          h.caller
        );
        i.push(
          eA(
            h,
            ll(t) && h.category === void 0 ? ZE(b) : b
          )
        );
        break;
      }
      case sn.getType():
      case nn.getType():
      case mr.getType():
      case nh.getType():
      case Br.getType():
        break;
      case dt.getType():
        if (s = fr(
          g.children,
          t,
          r,
          n
        ), s) {
          const b = g.typedIDs[bn];
          if (b)
            iA(s, b, o, e[c + 1], i), o = b;
          else {
            const T = s.shift();
            T && (typeof T == "string" ? sp(i, T) : i.push(T)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case kr.getType():
        i.push(wi(a));
        break;
      case et.getType():
        if (p.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Qs(p.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        p.text !== D && !p.text.startsWith(Wl) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        p[Ys]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || p.text !== Gt(r))) {
          let b = tA(p);
          ll(t) && (n && b.startsWith(D) && (b = b.slice(1)), b = FE(KE(b))), sp(i, b);
        }
        break;
      case ci.getType():
        i.push(
          rA(
            y,
            fr(y.children, t)
          )
        );
        break;
      case cn.getType():
        i.push(nA(a));
        break;
      case rs.getType():
        Yo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Yo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function jm(e) {
  const t = e.findIndex((r) => pa(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = jm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Mo = {
  initialize: zE,
  deserializeEditorState: BE
}, sA = /^sd\d*$/, oA = /* @__PURE__ */ new Set([
  ...Object.entries(Ic).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === x.Paragraph && !sA.test(e)
  ).map(([e]) => e),
  "qa"
]);
function aA(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (eu(i) || Jh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!dT(i)) {
      t && Xo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (ru(i) && oA.has(i.marker) && !Xo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Vm(i.children, t).forEach((s) => {
      const o = cA(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = lA(s.verse), r.push(n), o && n.children.push(o);
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
    if (Ph(i)) {
      const s = Vm(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(op(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [op(i, c.nodes)] });
      });
      return;
    }
    t && Xo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function op(e, t) {
  return { ...e, children: t };
}
function Wm(e) {
  return Ug(e) && e.number !== "";
}
function Xo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Wm(r) || Xo(r)) : !1;
}
function cA(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function lA(e) {
  return {
    type: Do,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Ig
  };
}
const ap = Jm([]), uA = {
  type: nh.getType(),
  version: 1
};
let Yu = [], oe, ri, Hm, It;
function dA(e, t) {
  Yu = [], hA(e), gA(t);
}
function fA(e = 0) {
}
function pA(e, t) {
  oe = t ?? va();
  let r;
  return e ? (e.type !== br && It?.warn(`This USJ type '${e.type}' didn't match the expected type '${br}'.`), e.version !== yr && It?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${yr}'.`
  ), e.content.length > 0 ? (r = pl(Hr(e.content)), Ks(oe) && (r = aA(r, It))) : r = [ap]) : r = [ap], Hm?.(Yu), {
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
function hA(e) {
  e && (ri = e), e?.addMissingComments && (Hm = e.addMissingComments);
}
function gA(e) {
  e && (It = e);
}
function Gm() {
  return so(oe);
}
function mA(e, t) {
  let { marker: r } = e;
  r !== Rs && It?.warn(`Unexpected book marker '${r}'!`), r = r ?? Rs;
  const { code: n } = e;
  (!n || !Wt.isValidBookCode(n)) && It?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  oe?.markerMode === "editable" || oe?.markerMode === "visible" ? i.push(
    $t("marker", De(r) + " " + n + D)
  ) : oe?.hasGutterParaMarkers && i.push($t("marker", De(r) + D, !0)), i.push(...t);
  const s = Je(e, jx);
  return Ue({
    type: Wt.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: $h
  });
}
function yA(e) {
  let { marker: t } = e;
  t !== $o && It?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? $o;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Je(e, Vx);
  let a;
  oe?.markerMode === "visible" && (a = !0);
  const c = [
    Mt(ar(t, r) ?? "")
  ];
  return oe?.markerMode === "editable" && $A(i, s, c), oe?.markerMode === "editable" ? Ue({
    type: Yt.getType(),
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
    version: Ih
  }) : Ue({
    type: zr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Fh
  });
}
function bA(e) {
  let { marker: t } = e;
  t !== qo && It?.warn(`Unexpected verse marker '${t}'!`), t = t ?? qo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (DS(oe) ?? Dt).getType(), c = oe?.markerMode === "editable" ? Wh : Dg;
  let l, u;
  oe?.markerMode === "editable" ? l = ar(t, r) : oe?.markerMode === "visible" && (u = !0);
  const d = Je(e, iT);
  return Ue({
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
function kA(e, t = [], r = !1) {
  let { marker: n } = e;
  Ce.isValidMarker(n, ri?.extraValidMarkers) || It?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (oe?.markerMode === "editable") {
    const [a] = t;
    Ki(a) ? a.text = D + a.text : a && t.unshift(Mt(D));
  }
  t.length === 0 && t.push(Mt(cr)), ul(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Je(e, Gx);
  return s || NA(n, o, i), s || dl(e.marker ?? "", i, !1, r), Ue({
    type: Ce.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Kh
  });
}
function Jm(e) {
  return {
    type: Cn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: jh
  };
}
function xA(e, t = []) {
  let { marker: r } = e;
  ft.isValidMarker(r, ri?.extraValidMarkers) || It?.warn(`Unexpected para marker '${r}'!`), r = r ?? or;
  const n = [];
  if (di(oe) && (oe?.markerMode === "editable" ? n.push(
    vt(r),
    Mt(D, Fr, "token")
  ) : (oe?.markerMode === "visible" || oe?.hasGutterParaMarkers) && n.push(
    $t(
      "marker",
      De(r) + D,
      oe?.hasGutterParaMarkers
    )
  )), n.push(...t), Gm()) {
    const s = n.find(
      (o) => !cu(o) && !(Ki(o) && o.text === D)
    );
    Ki(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = Je(e, rT);
  return Ue({
    type: ft.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Vh
  });
}
function Xu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function TA(e, t = []) {
  const r = Je(e, uC);
  return Ue({
    ...Xu(),
    type: li.getType(),
    unknownAttributes: r,
    children: t,
    version: Eg
  });
}
function CA(e, t = []) {
  const r = Je(e, pC), n = e.marker ?? Vc, i = [];
  return oe?.markerMode === "editable" ? i.push(
    vt(n),
    Mt(D, Fr, "token")
  ) : (oe?.markerMode === "visible" || oe?.hasGutterParaMarkers) && i.push(
    $t(
      "marker",
      De(n) + D,
      oe?.hasGutterParaMarkers
    )
  ), i.push(...t), Ue({
    ...Xu(),
    type: Zi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Ng
  });
}
function _A(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Wc, a = kg(o, i) ?? o;
  oe?.markerMode === "editable" ? s.push(
    vt(a),
    Mt(D, Fr, "token")
  ) : (oe?.markerMode === "visible" || oe?.hasGutterParaMarkers) && s.push(
    $t(
      "marker",
      De(a) + D,
      oe?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Je(
    e,
    gC
  );
  return Ue({
    ...Xu(),
    type: es.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Og
  });
}
function SA(e, t) {
  const r = yT(t);
  let n = () => {
  };
  return ri?.noteCallerOnClick && (n = ri.noteCallerOnClick), Ue({
    type: mr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Vg
  });
}
function vA(e, t) {
  let { marker: r } = e;
  $e.isValidMarker(r, ri?.extraValidMarkers) || It?.warn(`Unexpected note marker '${r}'!`), r = r ?? Jl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Au(oe?.noteMode), a = Je(e, lx), c = oe?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  oe?.markerMode === "editable" ? (l = vt(r, "opening", !1, c), s || (u = vt(r, "closing"))) : oe?.markerMode === "visible" && (l = $t("marker", De(r) + " "), s || (u = $t("marker", at(r))));
  const d = [];
  let f;
  if (l && d.push(l), oe?.markerMode === "editable" && !o)
    f = Mt(Gt(i), void 0, c), d.push(f), RA(n, d), d.push(...t);
  else {
    const h = Mt(D, Fr, "token");
    f = SA(i, t), d.push(f, h, ...t.flatMap(MA(h)));
  }
  return u && d.push(u), Ue({
    type: $e.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: xh
  });
}
function MA(e) {
  return (t) => Eh(t) ? [t] : [t, e];
}
function EA(e) {
  let { marker: t } = e;
  (!t || !kr.isValidMarker(t, ri?.extraValidMarkers)) && It?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Je(e, Gl), s = cg(e);
  return Ue({
    type: kr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: yh
  });
}
function cp(e, t = []) {
  return {
    type: dt.getType(),
    typedIDs: { [bn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function AA(e, t) {
  const { marker: r } = e, n = e.type, i = Je(e, Ux), s = [];
  if (oe?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = xg(
      n,
      r,
      i
    );
    o && s.push($t("marker", o)), a && s.push($t("attribute", a)), s.push(...t), c && s.push($t("attribute", c)), l && s.push($t("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Ki(o) && (o.mode = "token");
  }), Ue({
    type: ci.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: wh
  });
}
function PA(e) {
  return {
    type: cn.getType(),
    marker: e,
    text: Cs(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: oe?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Sg
  };
}
function vt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Br.getType(),
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
    type: et.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Ys] = { textType: t }), n;
}
function $t(e, t, r = !1) {
  const n = {
    type: nn.getType(),
    text: t,
    textType: e,
    version: vh
  };
  return r && (n[Ys] = { [Ql.key]: !0 }), n;
}
function Fs(e, t) {
  return {
    type: sn.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Oh
  };
}
function ul(e, t, r = !1) {
  oe?.markerMode === "editable" ? t.push(vt(e, "opening", r)) : oe?.markerMode === "visible" && t.push($t("marker", De(e, r)));
}
function dl(e, t, r = !1, n = !1) {
  oe?.markerMode === "editable" ? r ? t.push(vt("", "selfClosing")) : t.push(vt(e, "closing", n)) : oe?.markerMode === "visible" && t.push(
    $t(
      "marker",
      r ? at("") : at(e, n)
    )
  );
}
function NA(e, t, r) {
  if (oe?.markerMode !== "editable" || !t) return;
  const n = wr(t, da(e));
  n && r.push(Mt(n, "attribute"));
}
function lp(e, t) {
  if (e.type !== "ms" || oe?.markerMode !== "editable" && oe?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Je(e, Gl), o = lg(
    n,
    i,
    s,
    cg(e)
  ), a = wr(o, fa(r ?? ""));
  if (!a) return;
  const c = D + a;
  oe?.markerMode === "editable" ? t.push(Mt(c, "attribute")) : t.push($t("attribute", c));
}
function wA(e, t) {
  const r = e.marker ?? "";
  if (oe?.markerMode === "editable") {
    const n = [];
    ul(r, n), lp(e, n), dl(r, n, !0), t.push(Fs("milestone", n));
  } else
    ul(r, t), lp(e, t), dl(r, t, !0);
}
function up(e, t, r) {
  t !== void 0 && r.push(
    Fs(e, [
      vt(e, "opening"),
      Mt(D + t, "attribute"),
      vt(e, "closing")
    ])
  );
}
function OA(e, t) {
  oe?.markerMode === "editable" && (up("va", e.altnumber, t), up("vp", e.pubnumber, t));
}
function RA(e, t) {
  e !== void 0 && t.push(
    Fs("cat", [
      vt("cat", "opening"),
      Mt(D + e, "attribute"),
      vt("cat", "closing")
    ])
  );
}
function $A(e, t, r) {
  e !== void 0 && r.push(
    Fs("ca", [
      vt("ca", "opening"),
      Mt(D + e, "attribute"),
      vt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Fs("cp", [
      vt("cp", "opening"),
      Mt(D + t, "attribute")
    ])
  );
}
function dp(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function qA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function fp(e, t) {
  t.marker === Jn && t.sid !== void 0 && e.push(t.sid), t.marker === Ri && t.eid !== void 0 && qA(e, t.eid);
}
function fl(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [cp(o, [...n])] : o, c = e[i];
  fp(n, c);
  const l = fl(
    e.slice(i + 1, s),
    dp(t, i + 1),
    c.marker === Jn,
    n
  ), u = cp(l, [...n]), d = e[s];
  fp(n, d);
  const f = fl(
    e.slice(s + 1),
    dp(t, s + 1),
    d.marker === Jn,
    n
  );
  return [...a, u, ...f];
}
function Hr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(Mt(Gm() ? UE(i) : i));
    else if (!i.type)
      It?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Wt.getType():
          n.push(mA(i, Hr(i.content)));
          break;
        case Yt.getType():
          n.push(yA(i));
          break;
        case St.getType():
          oe?.hasSpacing || n.push(uA), n.push(bA(i)), OA(i, n);
          break;
        case Ce.getType():
          n.push(
            kA(i, Hr(i.content, !0), t)
          );
          break;
        case ft.getType():
          n.push(xA(i, Hr(i.content)));
          break;
        case $e.getType():
          n.push(vA(i, Hr(i.content)));
          break;
        case kr.getType():
          bh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Yu?.push(i.sid)), n.push(EA(i)), wA(i, n);
          break;
        case cn.getType():
          n.push(PA(i.marker ?? ""));
          break;
        case Mg:
          n.push(TA(i, Hr(i.content)));
          break;
        case Pg:
          n.push(CA(i, Hr(i.content)));
          break;
        case wg:
          n.push(_A(i, Hr(i.content)));
          break;
        default:
          It?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(AA(i, Hr(i.content)));
      }
  }), fl(n, r);
}
function pl(e) {
  const t = e.findIndex(
    (n) => eu(n) || Jh(n) || ru(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    fC(n)
  );
  if (t >= 0) {
    const n = pl(e.slice(0, t)), i = e[t], s = pl(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Ug(n)))
    return [Jm(e)];
  return e;
}
const xr = {
  initialize: dA,
  reset: fA,
  serializeEditorState: pA
};
function Ym(e) {
  if (e && !$(e)) {
    if (M(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = Ym(t);
        if (r) return r;
      }
  }
}
function IA() {
  const e = N();
  if (!w(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((M(t) && !$(t) ? ei(t) : void 0) && M(t)) {
      const i = Ee(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Fi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Ym(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(D) ? D : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return M(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Xm(e)) {
    if (!ei(t)) continue;
    Fi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(D) && r.setTextContent(n.slice(D.length));
  }
  return !0;
}
function Xm(e) {
  const [t, r] = Dl(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!M(a) || $(a) || le(a, he) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), h = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    h && o.push(h);
  }), o;
}
function Qm(e) {
  let t = e;
  for (; K(t) || Me(t); ) t = t.getParent();
  return t;
}
function Zm(e) {
  const t = Qm(e.getParent());
  return Fe(t) ? t : void 0;
}
function LA() {
  const e = N();
  if (!w(e)) return !1;
  const t = e.focus.getNode();
  return ei(t) ? !!Zm(t) : !1;
}
function ey(e) {
  const t = Ee(""), r = e.getNode(), n = e.offset;
  if (M(r))
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
    if (K(o)) Fi(t, { renderGlyphs: !0 });
    else if (!Me(o) || !DA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function DA(e, t) {
  const r = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (r.length === 0)
    return t.insertAfter(e), !0;
  const n = N();
  if (!w(n)) return !1;
  const i = t.insertNewAfter(n, !1);
  return i ? (i.append(...r), t.insertAfter(e), !0) : !1;
}
function ty(e) {
  const t = e.anchor.getNode();
  if ($(t) && !yu(t, e.anchor.offset)) {
    const r = t.getParent();
    if (K(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = N();
      return w(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function ry() {
  const e = N();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = ty(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!M(r) || $(r) || !ei(r)) return !1;
  const n = Zm(r);
  if (!n) return !1;
  const { moving: i } = ey(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Me(o); ) o = o.getFirstChild() ?? void 0;
  return K(o) ? ka(o) : s.select(0, 0), !0;
}
const ny = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Yh(Ye().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = ng(e), r = Cu(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = CT(0, o);
        const a = r_(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || _T(c) && au(parseInt(n, 10), c);
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
function hl(e, t) {
  return $e.isValidMarker(e, t) || !!ny[e] || ft.isValidMarker(e, t) || Ce.isValidMarker(e, t);
}
function UA(e, t) {
  return Ce.isNoteContentMarker(e) ? !1 : Ce.isValidMarker(e, t);
}
function iy(e, t, r, n, i, s) {
  const o = Hg(
    e,
    void 0,
    void 0,
    t,
    n ?? va(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function gl(e, t, r, n, i, s, o) {
  if ($e.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = iy(
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
  const a = VA(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = N();
      w(u) && (bu(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), h = df(d, xr, r), p = Ja(h);
      if (w(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), b = ei(g), T = u.anchor.key === u.focus.key;
        if (K(p) && b && T && !_c(p, o))
          zA(
            u,
            p,
            g,
            r?.markerMode === "editable"
          );
        else if (K(p) && !T && !_c(p, o) && BA(u))
          jA(u, p, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          WA(
            u,
            () => Ja(h)
          );
        else if (L(p) && !p.isInline()) {
          const k = u.insertParagraph();
          if (k) {
            const A = k.getChildren();
            p.append(...A), k.replace(p), Fe(p) && tr(p) || p.selectStart();
          }
        } else if (K(p) && M(g) && !$(g) && K(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        _c(p, o)) {
          const k = g.getParent();
          if (K(k)) {
            const A = u.anchor.offset;
            if (A === 0) g.insertBefore(p);
            else if (A >= g.getTextContentSize()) g.insertAfter(p);
            else {
              const [O] = g.splitText(A);
              O.insertAfter(p);
            }
            p.getChildren().forEach((O) => {
              $(O) && O.setNested(!0);
            });
            const _ = p.getChildren().find((O) => M(O) && !$(O));
            _ && M(_) ? _.select(
              _.getTextContentSize(),
              _.getTextContentSize()
            ) : p.selectEnd();
          }
        } else if (M(g) && !$(g) && u.isCollapsed() && (B(y) || K(y) && B(y.getParent()))) {
          const k = K(y) ? y : void 0, A = k ? KA(g, u.anchor.offset) : [];
          let O = (k ?? g).insertAfter(p);
          if (_r(p)) {
            const q = {
              ...r || va(),
              markerMode: "hidden"
            }, F = df(
              d,
              xr,
              q
            ), S = Ja(F);
            O = O.insertAfter(S);
          }
          if (A.length > 0 && k) {
            const q = Qo(k).append(...A);
            O.insertAfter(q), k.isEmpty() && k.remove();
          } else M(O.getNextSibling()) || O.insertAfter(Ee(D));
          L(O) && O.selectEnd();
        } else if (u.insertNodes([p]), rP(p), f) {
          const k = Ll();
          k.add(p.getKey()), zt(k);
        } else if (K(p)) {
          const k = p.getChildren().find((A) => M(A) && !$(A));
          k && M(k) ? k.select(
            k.getTextContentSize(),
            k.getTextContentSize()
          ) : p.selectEnd();
        } else {
          const k = p.getNextSibling();
          k ? k.selectStart() : p.selectStart();
        }
      } else
        i?.warn(
          `Marker action "${e}" needs a range selection to act at; it inserted nothing.`
        );
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function KA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function _c(e, t) {
  return ((t ?? Uo).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function FA(e, t) {
  t && e.getChildren().forEach((i) => {
    $(i) && i.setNested(!0);
  }), e.getChildren().some((i) => $(i) && i.getMarkerSyntax() === "closing") || e.append(kt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function zA(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && K(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !M(r)) {
    const o = e.anchor.offset;
    if (M(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else M(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = Hi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Fi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), M(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => M(a) && !$(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => M(o) && !$(o));
  M(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function BA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if ($(n) || K(n)) continue;
    if (!M(n) || n.getType() !== et.getType() || le(n, he) === "attribute") return !1;
    const i = TC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    ei(n) && (r = !0);
  }
  return r;
}
function jA(e, t, r) {
  const n = Xm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!ei(a)) return;
    Fi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(D) && c.setTextContent(l.slice(D.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(D) || i.setTextContent(D + i.getTextContent());
  const s = t.getChildren().find((a) => M(a) && !$(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function VA(e, t) {
  let r = ny[e];
  return r || (ft.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: ft.getType(), marker: e, content: [] }] })
  } : Ce.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: Ce.getType(), marker: e };
      return (Ce.isValidFootnoteMarker(e) || Ce.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function WA(e, t) {
  const r = e.getNodes(), [n, i] = Hi(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = sy(
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
    s || (s = t(), c.insertBefore(s), l = !0, K(s) && s.getChildren().some((d) => $(d) && d.getMarkerSyntax() === "opening") && FA(s, K(s.getParent()))), GA(c, s, l);
  }), (M(s) || L(s)) && s.selectEnd();
}
function Hi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Qu(e) {
  return Me(e) || B(e) || B(e.getParent());
}
function sy(e, t, r, n, i) {
  if (!Qu(e)) {
    if (M(e))
      return HA(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function HA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function GA(e, t, r) {
  if (M(t)) {
    const n = ml(e, t);
    t.setTextContent(n), e.remove();
  } else if (L(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => $(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !$(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    ml(e, t), r && K(t) && t.getChildren().some((s) => $(s)) && M(e) && !$(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function ml(e, t) {
  let r = e.getTextContent();
  if (M(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    xu(n), M(n) || t.insertBefore(Ee(" "));
  }
  return r;
}
function oy(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = ni(u, t);
    if (!f) return !1;
    const h = M(u) ? u.getTextContentSize() : 0;
    if (pp(f, r), M(u) && u.isAttached()) {
      const p = u.getTextContentSize(), g = Math.max(h - p, 0), y = Math.max(0, Math.min(d - g, p)), b = N();
      w(b) && b.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Hi(e);
  if (!ed(n, t, s, o)) return !1;
  const a = Zu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = ni(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = uy(d, a);
    f && (pp(f, r), l = !0);
  }), dy(a, i), l;
}
function pp(e, t) {
  e.getChildren().forEach((n) => {
    bt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === cr) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    M(n) && i.startsWith(D) && n.setTextContent(i.slice(D.length));
  }), Rc(e);
}
function Zu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = sy(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    M(o) && n.push(o);
  }), n;
}
function ni(e, t) {
  let r = e, n;
  for (; r && !Fe(r); ) {
    if (B(r)) return;
    !n && K(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function ay(e) {
  const t = Ae(
    e,
    (r) => B(r) || Fe(r)
  );
  return B(t);
}
function cy(e) {
  return e.filter(
    (t) => !Qu(t) && (M(t) || L(t) && t.isInline())
  );
}
function JA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!M(i) || Qu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function YA(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !ly(n, r)
  );
}
function ed(e, t, r, n, i) {
  const s = cy(e), o = JA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ni(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !YA(l, s, o);
  });
}
function ly(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || bt(r));
}
function uy(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (L(u) && t.some((d) => u.isParentOf(d))) {
      if (!ly(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && bt(n[s - 1]) && (s -= 1), o < n.length - 1 && bt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Qo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Qo(e).append(...c)), e;
}
function Qo(e) {
  return Sk(e);
}
function dy(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!w(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function XA(e, t, r) {
  if (e.isCollapsed()) {
    const l = ni(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Jd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Hi(e);
  if (!ed(n, r, i, s, t)) return !1;
  const o = Zu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = ni(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = uy(u, o);
    d && (Jd(d, t), c = !0);
  }), c;
}
function QA(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = Hi(e);
  if (!!!i?.some(
    (y) => ed(s, y, o, a)
  ) && !ZA(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const b = N();
    w(b) && oy(b, y, n) && (l = !0);
  });
  const u = N();
  if (!w(u)) return l;
  const d = u.isBackward(), [f, h] = Hi(u), p = Zu(
    u.getNodes(),
    f,
    h
  );
  if (p.length === 0) return l;
  const g = p.filter(
    (y) => !ay(y) && !ni(y, t)
  );
  return g.length > 0 && (eP(g).forEach((y) => tP(y, t)), l = !0), dy(p, d), l;
}
function ZA(e, t) {
  return cy(e).some(
    (r) => !ay(r) && !ni(r, t)
  );
}
function eP(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function tP(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => K(a) && a.getMarker() === t
  ), s = i ? Qo(i) : Zr(t);
  e[0].insertBefore(s), s.append(...e), i === r || ml(e[0], s);
}
function rP(e) {
  ye(e) && (xu(e.getPreviousSibling()), Fg(e.getNextSibling()));
}
const fy = {
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
}, hp = "psc-active-text", xo = "psc-empty-text";
function nP({ viewOptions: e }) {
  const [t] = fe(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return z(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(hp), r.current = o, o && t.getElementByKey(o)?.classList.add(hp);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Li,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${xo}`);
          if (!c) return !1;
          const l = Yr(c);
          if (!ye(l)) return !1;
          const u = l.getParent();
          if (!L(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        _t
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Sc(), f = iP(), h = [], p = [];
          return Ye().getChildren().forEach((g) => {
            if (!L(g)) return;
            const { emptyKeys: y, nonEmptyKeys: b } = oP(g);
            h.push(...y), p.push(...b);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: h, nonEmptyKeys: p };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(xo) : t.getElementByKey(d)?.classList.add(xo);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(xo));
      }),
      t.registerCommand(
        Bl,
        () => (i(void 0), !1),
        _t
      ),
      t.registerCommand(
        eh,
        () => {
          const o = t.getEditorState().read(Sc);
          return o !== r.current && i(o), !1;
        },
        _t
      )
    ];
    return i(t.getEditorState().read(Sc)), Re(...s);
  }, [t, n]), null;
}
function Sc() {
  return sP(N() ?? void 0)?.getKey();
}
function iP() {
  const e = N(), t = _n(e);
  if (t)
    return t.getChildren().slice(0, Ma(t)).findLast(ye)?.getKey();
  if (!w(e)) return;
  const r = e.anchor, n = r.getNode(), i = n.getTopLevelElement();
  if (!L(i)) return;
  let s;
  if (n.is(i))
    s = r.offset;
  else {
    let c = n;
    for (; c && !c.getParent()?.is(i); )
      c = c.getParent() ?? void 0;
    if (!c) return;
    s = c.getIndexWithinParent() + 1;
  }
  const o = i.getChildren();
  let a;
  for (let c = 0; c < s && c < o.length; c++)
    ye(o[c]) && (a = o[c].getKey());
  return a;
}
function sP(e) {
  const t = _n(e);
  if (t) return t.getTopLevelElement() ?? t;
  if (w(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function oP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ye(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ye(c)) break;
      if (!(Vt(c) || $(c)) && c.getTextContent().replaceAll(No, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function yl(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function py(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !Zp(e, n, i);
}
function hy(e, t) {
  return e.length <= t ? e : e.slice(0, td(e, t));
}
function td(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of wk(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const aP = 16;
function cP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (T) => t ? rd(T, t).length : T.getTextContent().length;
  r ??= n;
  const i = N();
  if (!w(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Zo(s), l = Zo(o), u = i.getNodes(), d = new Map(u.map((T) => [T.getKey(), dP(T)])), f = u.length > 0 ? d.get(u[0].getKey()) : void 0, h = f && lP(s, f) ? f : void 0, p = (T) => {
    const k = T > 0 ? uP(u, d, h, c, l, T, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), k ? i.focus.set(k.node.getKey(), k.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!k;
  };
  let g = Math.min(e, n(i));
  if (p(g) && r(i) <= e) return !0;
  let y = 0, b = 0;
  g -= 1;
  for (let T = 0; T < aP && y <= g; T++) {
    const k = Math.floor((y + g) / 2);
    p(k) && r(i) <= e ? (b = k, y = k + 1) : g = k - 1;
  }
  return p(b), !0;
}
function bl(e) {
  return e.isToken() || io(e) || Le(e.getParent());
}
function lP(e, t) {
  const r = L(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && hr(r.getKey(), 0, "text").isBefore(e);
}
function uP(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, d;
  const f = /* @__PURE__ */ new Map(), h = (g) => {
    const y = t.get(g.getKey());
    return y && r?.is(y) ? void 0 : y;
  }, p = (g) => {
    let y = d ? d.endBefore : g;
    for (; ; ) {
      const b = fP(y, e, n);
      if (!b || !y || b.node.is(y.node)) return b;
      const T = h(b.node);
      if (!T || T.is(h(y.node))) return b;
      y = f.get(T.getKey());
    }
  };
  for (let g = 0; g <= a; g++) {
    const y = e[g], b = h(y);
    if (d && !d.node.is(b) && (u && d.node.isParentOf(u.node) && (u = d.endBefore), d = void 0), b && !d && (d = { node: b, endBefore: u }, f.set(b.getKey(), u)), !o?.(y)) {
      if (L(y) && !y.isInline()) {
        if (!l) {
          if (c + 1 > s) return p(u);
          c += 1;
        }
        l = !y.isEmpty();
        continue;
      }
      if (l = !1, M(y)) {
        const T = g === 0 ? n : 0, k = g === a ? i : y.getTextContentSize(), A = k - T, _ = bl(y);
        if (_ && c + A > s) return p(u);
        if (!_ && c + A >= s) {
          const O = td(y.getTextContent(), T + (s - c));
          return p({ node: y, offset: Math.max(T, O) });
        }
        c += A, u = { node: y, offset: k };
      } else if (Nn(y) || oi(y)) {
        const T = y.getTextContentSize();
        if (c + T > s) return p(u);
        c += T;
      }
    }
  }
  return p(u);
}
function dP(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (B(r) || Fu(r)) && (t = r);
  return t;
}
function fP(e, t, r) {
  if (!e) return e;
  const n = Ae(e.node, (y) => L(y) && !y.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((y) => y.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let y = o; y <= a; y++)
    l.push(c.length), c += i[y].getTextContent();
  const u = l[s - o], d = u + e.offset, f = td(c, d);
  if (f === d) return e;
  const h = (y) => t[0]?.is(y) ?? !1;
  if (bl(e.node)) return { ...e, offset: h(e.node) ? r : 0 };
  if (f >= u) {
    const y = f - u;
    return y >= (h(e.node) ? r : 0) ? { ...e, offset: y } : void 0;
  }
  const p = s > o ? i[s - 1] : void 0;
  if (!p || !t.some((y) => y.is(p))) return;
  if (bl(p))
    return { node: p, offset: h(p) ? r : 0 };
  const g = f - l[0];
  return g >= (h(p) ? r : 0) ? { node: p, offset: g } : void 0;
}
function rd(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, u) => {
    if (!t(l)) {
      if (L(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, M(l)) {
        const d = l.getTextContent();
        o ? a += d : a += d.slice(
          u === 0 ? Zo(i) : 0,
          u === n ? Zo(s) : d.length
        );
      } else (Nn(l) || oi(l)) && (u !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function kl(e) {
  const t = e.getParent();
  return !!t && Ae(t, (r) => B(r) && !!r.getIsCollapsed()) !== null;
}
function gy(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    xt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), L(i)) for (const { node: s } of ai(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function pP(e) {
  return e.getNodes().some(
    (t) => Nn(t) || B(t) || ye(t) || tt(t) || Fu(t)
  );
}
function Zo(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const vr = String.raw`\w-`, my = "a-z0-9", hP = `[a-z][${my}]*`, gP = new RegExp(
  String.raw`^\\(\+?[${vr}]+)[ \u00A0]$`
), yy = new RegExp(String.raw`^\\(\+?[${vr}]+)$`), mP = new RegExp(String.raw`^\\\+?[${vr}]*\*$`), yP = new RegExp(
  String.raw`^\\(\+?[${vr}]+)(?:[ \u00A0]|$)`
), bP = new RegExp(
  String.raw`^\\(\+?)([${vr}]+)`
), kP = new RegExp(
  String.raw`\\\+?[${vr}]+(?:\\?\*|[ \u00A0])`
), xP = new RegExp(
  String.raw`\\\+?[${vr}]*$`
), TP = new RegExp(
  String.raw`^\\(${hP})( |$)`
), CP = new RegExp(
  String.raw`\\[${my}+*]*$`,
  "i"
);
function by(e) {
  const t = e.getParent();
  if (!B(t) || t.getIsCollapsed() !== !1 || !ph(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!$(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const ea = "usfm:", ky = "usfmopen", xy = "usfmclosed";
function _P(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const SP = new RegExp(
  [ea, ky, xy].map(_P).join("|")
), vP = "\uFEFF", MP = /^usfm_(.+)$/;
function EP(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function AP(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function PP(e) {
  return e.startsWith(ea) ? AP(e.slice(ea.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Ty(e) {
  for (const t of e.classList) {
    const r = MP.exec(t);
    if (r) return r[1];
  }
}
function NP(e) {
  const t = Ty(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function wP(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(ea)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(ky) && !n.contains(xy)) && Ty(r) !== void 0)
      return !0;
  }
  return !1;
}
function Cy(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(PP(e.nodeValue ?? ""));
    return;
  }
  if (!EP(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => Cy(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? NP(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function OP(e) {
  if (!SP.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !wP(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => Cy(n, !1, r)), r.join("").replaceAll(vP, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function RP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = le(e, he);
  if (r === "attribute" || r === Fr || by(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Le(o) || je(o)) return;
  const n = t.startsWith(D) && K(e.getParent()), i = n ? t.slice(1) : t, s = (n ? D : "") + i.replace(/ (?=[ \u00A0])/g, D).replace(new RegExp("(?<=\\u00A0) ", "g"), D);
  s !== t && e.setTextContent(s);
}
function $P(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function qP(e, t) {
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
function xl(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? OP(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n($P(s)) : ""),
    isInternal: qP(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const gp = String.raw`\\(?:\+?[${vr}]+\*?|\*)`, IP = new RegExp(
  String.raw`(?<=${gp})\u00A0|\u00A0(?=${gp})`,
  "g"
);
function nd(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(IP, " ").replaceAll(D, "~");
}
const _y = new RegExp(
  String.raw`\\c(?![${vr}])[ \u00A0]*[^\s\\]*`,
  "g"
), Sy = new RegExp(String.raw`\\id(?![${vr}])[^\n\\]*`, "g"), LP = new RegExp(
  String.raw`^(?:${_y.source}|${Sy.source})`
);
function id(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(_y, "").replace(Sy, "");
    return LP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function Tl(e) {
  if (M(e) && le(e, he) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Be(t)) return !0;
  return !1;
}
function DP(e) {
  return Tl(e.anchor.getNode()) || Tl(e.focus.getNode());
}
function UP(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && Tl(t.getNode());
}
function KP(e, t) {
  const n = UP(e) ? t : nd(id(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function FP(e, t = !1, r = () => {
}) {
  const n = xl(e, qr()._config.namespace);
  if (!n) return !1;
  const i = N(), s = w(i) && DP(i);
  if (!s && n.isInternal || t && w(i) && qi(i))
    return !1;
  const { text: o } = n;
  if (!o || !w(i)) return !1;
  if (e?.preventDefault(), s)
    return KP(i, o), !0;
  const a = nd(id(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = qr();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(As, void 0), u === "") return;
    const f = N();
    w(f) && f.insertText(u);
  }), !0;
}
function zP(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return B(t) ? !xt(e.getPreviousSibling()) : !1;
}
function BP(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const r = e.getParent();
  if (!B(r) || !xt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function jP(e) {
  const t = e.getParent();
  return (B(t) ? t.getCaller() : void 0) || Ps;
}
function VP(e) {
  const t = e.getParent();
  return !t || vn(t) === void 0;
}
function sd(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Dl(e);
  let l = "", u = !0;
  for (const d of t) {
    if (L(d) && !d.isInline()) {
      !u && VP(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, xt(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + jP(d));
    else if (M(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += zP(d) ? "" : f.replaceAll(D, " ") + BP(d, d === n);
    } else (Nn(d) || oi(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function vy(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function WP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => _e(r) || Le(r)
    )
  );
}
function HP(e) {
  const t = N();
  if (!w(t) || t.isCollapsed()) return;
  const r = sd(t), n = {
    "text/plain": r,
    "text/html": vy(r)
  };
  if (Ea() || WP(t)) return n;
  const i = Rk(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function mp(e, t, r, n) {
  const i = N();
  if (!w(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Tm();
  const s = HP(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], My(e, t, i, s, r, n)) : !1;
}
function My(e, t, r, n, i, s) {
  const o = yl(s);
  if (o !== void 0 && py(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), Cl(e, t, { "text/plain": hy(a, o) })) : Cl(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function Cl(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || Ok(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function _l(e, t) {
  const r = Eu();
  if (!r?.end) return;
  const n = GP(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = Sa(r);
        return i ? sd(i) : void 0;
      },
      { editor: n.editor }
    );
}
const vc = /* @__PURE__ */ new WeakMap();
function GP(e, t) {
  const r = e.getEditorState();
  if (vc.has(r)) {
    const i = vc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = JP(r, t);
  return vc.set(r, n), n;
}
function JP(e, t) {
  const r = Du(qu);
  if (!r) return;
  const n = Mo.deserializeEditorState(e, t);
  if (!n) return;
  const i = vk({
    namespace: "markers-view-copy",
    nodes: [dt, ...Ou],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    xr.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function YP({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = fe();
  return z(() => {
    const n = (i, s) => {
      const o = N();
      if (!w(o) || o.isCollapsed()) return !1;
      const a = _l(r, e);
      return a === void 0 ? !1 : My(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": vy(a) },
        s,
        t
      );
    };
    return Re(
      r.registerCommand(xn, (i) => n(i, !1), Ne),
      r.registerCommand(jt, (i) => n(i, !0), Ne)
    );
  }, [r, e, t]), null;
}
const yp = /* @__PURE__ */ new WeakMap();
function XP({
  limit: e,
  viewOptions: t
}) {
  const [r] = fe(), n = Z(yl(e)), i = Z(t), s = Z(!1), o = Z(void 0);
  return z(() => {
    n.current = yl(e), i.current = t, o.current?.();
  }, [e, t]), z(() => {
    let a, c;
    const l = (b) => {
      const T = n.current;
      if (T === void 0) return;
      const k = yp.get(b);
      if (b.defaultPrevented && k === void 0) return;
      const A = r.getRootElement();
      if (!A) return;
      const _ = A.ownerDocument.getSelection();
      if (!_ || !e1(_, A)) return;
      b.preventDefault();
      const O = hy(
        k ?? _.toString().replaceAll(D, " "),
        T
      );
      yp.set(b, O);
      const q = b.clipboardData;
      if (q) {
        if (!O) {
          k !== void 0 && q.clearData();
          return;
        }
        q.setData("text/plain", O);
      }
    }, u = (b) => {
      n.current !== void 0 && Ek(b, "a", { ctrlKey: !Gn, metaKey: Gn }) && (r1(c?.activeElement, r.getRootElement()) || b.preventDefault());
    }, d = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, f = () => {
      const b = n.current === void 0 ? void 0 : a;
      b !== c && (d(), c = b, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = f;
    const h = (b) => (b?.preventDefault(), !0), p = (b) => {
      const T = n.current;
      if (T === void 0 || (s.current = !1, py(r, b))) return !1;
      if (T <= 0) return h(b);
      const k = N();
      if (si(k))
        return k.getTextContent().length + gy(k.getNodes()) <= T ? !1 : h(b);
      if (!w(k) || k.isCollapsed()) return !1;
      const A = QP(r, i.current);
      return A.$size(k) <= T ? !1 : (cP(T, A.options), k.isCollapsed() ? h(b) : (r.isEditable() || th(() => ZP(r)), s.current = !0, !1));
    }, g = (b, T) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const k = N();
      if (!w(k) || k.isCollapsed()) return !1;
      const A = T && r.isEditable() && !pP(k);
      return Cl(
        b && typeof b == "object" && "clipboardData" in b ? b : null,
        r,
        { "text/plain": rd(k, kl) },
        A ? () => k.removeText() : void 0
      );
    }, y = Re(
      r.registerCommand(xn, p, de),
      r.registerCommand(jt, p, de),
      r.registerCommand(
        xn,
        (b) => g(b, !1),
        Or
      ),
      r.registerCommand(
        jt,
        (b) => g(b, !0),
        Or
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        Mk,
        (b) => n.current === void 0 ? !1 : (b?.preventDefault(), !0),
        de
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
function QP(e, t) {
  if (so(t)) {
    const n = (i) => sd(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && _l(e, r) !== void 0) {
    const n = (i) => _l(e, r)?.length ?? rd(i, kl).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + gy(n.getNodes()),
    options: { $isHidden: kl }
  };
}
function ZP(e) {
  e.getEditorState().read(() => {
    const t = N(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!w(t) || !r) return;
    const n = bp(e, t.anchor), i = bp(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function bp(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = Ak(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = L(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function e1(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const t1 = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function r1(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? t1.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const n1 = /^\+/;
function od(e, t) {
  const r = t.replace(n1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Ey(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Ay(e, t) {
  return Ey(e, t) !== void 0;
}
function Sl(e, t) {
  const r = Ey(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ta(e, t, r) {
  const n = L(e) ? e.getChildren().filter($) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function i1(e, t, r, n, i) {
  const s = od(n, t);
  if (!s) {
    ta(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ta(e, "invalid", i);
}
function Ii(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (K(s)) {
      const o = s.getMarker();
      i || i1(s, o, t, r, n), Ii(s, t, r, n, i || o === "xq");
    } else if (ye(s)) {
      if (i) continue;
      const o = od(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else B(s) ? Ii(s, s.getMarker(), r, n, i) : je(s) || L(s) && Ii(s, t, r, n, i);
}
function s1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = od(e, a);
    if (!c) {
      ta(o, "unknown", r), Sl(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Sl(n, l) || ta(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ye().getChildren())
    je(o) || (_e(o) ? (i(o, o.getMarker()), s(o) && Ii(o, void 0, e, r, !1)) : tt(o) ? i(o, o.getMarker()) : ce(o) ? (i(o, o.getMarker()), s(o) && Ii(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && Ii(o, "p", e, r, !1));
  return r;
}
function o1(e) {
  return !!e?.includes("(basic)");
}
function a1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Py(e, t) {
  return !e.startsWith("zpa") && e !== "c" && hl(e, t);
}
function ad(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Ny(e, t) {
  const r = [];
  for (const n of t) {
    const i = ad(e, n);
    i && Sl(r, i);
  }
  return r;
}
function Eo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: a1(e.description),
    isBasic: o1(e.description)
  };
}
function c1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function vl(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : c1(e.marker, t.marker);
}
function Ml(e, t, r) {
  if (t.noteMarker) return [];
  const n = Ny(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Py(i.marker, r)
  ).filter((i) => {
    const s = ad(e, i.marker);
    return s !== void 0 && Ay(n, s);
  }).map((i) => Eo(i, "paragraph")).sort(vl);
}
function l1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Py(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Eo(c, "character")).sort(vl);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Eo(c, "character")),
    ...a.map((c) => Eo(c, "note"))
  ].sort(vl);
}
function u1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function d1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function f1(e, t, r) {
  return [
    ...u1(e, t.openCharMarkers),
    ...l1(e, t, r)
  ].sort(d1);
}
function p1(e, t, r) {
  if (t.source === "paragraph") return Ml(e, t, r);
  const n = f1(e, t, r);
  return n.length > 0 ? n : Ml(e, t, r);
}
function h1(e, t, r) {
  const n = Ml(e, t, r), i = Ny(e, t.previousParaMarkers), s = ad(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Ay(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const ht = "￼";
function wy(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== ht ? e.slice(1) : e;
}
function kp(e) {
  return cu(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Oy(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = xr.serializeEditorState(
    {
      type: br,
      version: yr,
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
  for (; kp(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Gt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && kp(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Ry(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function $y(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([u]) => u !== "closed")
  ), o = xr.serializeEditorState(
    {
      type: br,
      version: yr,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === $e.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function qy(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = xr.serializeEditorState(
    { type: br, version: yr, content: [s, ...r] },
    n
  ).root.children;
  if (!eu(o)) return { failure: "shape" };
  const c = tg(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function To(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function gs(e, t) {
  xP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += ht;
}
function ir(e) {
  return e.replaceAll(D, " ");
}
function g1(e, t, r = !1) {
  if (so(t)) return ir(e);
  if (e === D) return " ";
  const n = r && e.startsWith(D), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(D, "~");
}
function vs(e) {
  const t = e.getTextContent();
  return Sr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function cd(e, t) {
  const r = e[t];
  if (!it(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ma(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!$(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Iy(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function ld(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = $s(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function ud(e) {
  return !!e.getUnknownAttributes();
}
function Na(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && Xl(e);
}
function dd(e, t) {
  return it(e) ? !Na(e.getMarker(), t) : B(e) || je(e) ? !0 : ze(e) ? ud(e) : K(e) ? Ly(e, t) : !1;
}
function Ly(e, t) {
  if (RT(e)) return !0;
  const r = e.getMarker();
  return kx(r) || t(r) !== void 0 || m1(e) && !y1(e) ? !1 : !b1(e);
}
function m1(e) {
  const t = e.getParent();
  return t !== null && Ht(t) !== void 0;
}
function y1(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function b1(e) {
  const t = e.getChildren().filter((i) => $(i) && i.getMarker() === e.getMarker()).filter($);
  if (t.some((i) => !on(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const rr = "", nr = "";
function xp(e) {
  return e.flatMap((t) => Be(t) ? t.getChildren() : [t]);
}
function ks(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (it(s)) {
      const o = cd(e, i);
      Na(s.getMarker(), r) && Iy(o) ? (t.push(
        rr,
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
      ), ks(xp(o), t, r), t.push(nr)) : t.push(ht), i += o.length;
    } else if (ze(s)) {
      const o = ld(e, i);
      ud(s) ? t.push(ht) : (t.push(
        rr,
        "verse",
        ir(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ks(xp(o), t, r), t.push(nr)), i += o.length;
    } else $(s) ? t.push(rr, "marker", ir(s.getTextContent()), nr) : ln(s) ? t.push(rr, "unmatched", ir(s.getTextContent()), nr) : dd(s, r) ? t.push(ht) : oi(s) ? t.push(" ") : M(s) ? t.push(
      ir(
        n ? wy(vs(s)) : vs(s)
      )
    ) : K(s) ? (t.push(rr, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ks(s.getChildren(), t, r, !0), t.push(nr)) : L(s) ? (t.push(rr, s.getType()), ks(s.getChildren(), t, r), t.push(nr)) : t.push(ht);
  }
}
function Lr(e, t) {
  const r = [];
  return ks(e, r, t), r.join("");
}
function Dr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Gi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function fd(e) {
  return e.type ?? "";
}
function Dy(e, t, r) {
  return t === "closing" ? at(e, r) : t === "selfClosing" ? at("") : De(e, r);
}
function Mc(e, t) {
  const r = e[t];
  if (!(!r || fd(r) !== "attribute-run"))
    return Dr(r) ?? [];
}
function Ur(e, t) {
  const r = [];
  return xs(e, r, t), r.join("");
}
function xs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = fd(s);
    if (o === "ms") {
      const l = s, u = Mc(e, i + 1);
      u && Na(l.marker ?? "", r) ? (t.push(
        rr,
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
      ), xs(u, t, r), t.push(nr), i += 1) : t.push(ht);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(ht);
        continue;
      }
      t.push(
        rr,
        "verse",
        ir(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Mc(e, i + 1 + u);
      for (; d; )
        xs(d, t, r), u++, d = Mc(e, i + 1 + u);
      t.push(nr), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        rr,
        "marker",
        ir(
          Dy(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        nr
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(rr, "char", JSON.stringify(l.unknownAttributes ?? null)), xs(Dr(s) ?? [], t, r, !0), t.push(nr);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(ht);
      continue;
    }
    if (o === "unmatched") {
      t.push(rr, "unmatched", ir(Gi(s) ?? "")), t.push(nr);
      continue;
    }
    const a = Gi(s);
    if (a !== void 0) {
      t.push(ir(n ? wy(a) : a));
      continue;
    }
    const c = Dr(s);
    c ? (t.push(rr, o), xs(c, t, r), t.push(nr)) : t.push(ht);
  }
}
function Mn(e) {
  let t = 0;
  for (const r of e) {
    const n = Dr(r);
    if (n) {
      t += Mn(n);
      continue;
    }
    const i = Gi(r);
    if (i !== void 0)
      for (const s of i) s === ht && t++;
  }
  return t;
}
function zs(e, t, r, n, i) {
  En(e.getChildren(), t, r, n, i);
}
function En(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if ($(a))
      To(t, a, ir(a.getTextContent()));
    else if (it(a)) {
      s();
      const c = cd(e, o);
      Na(a.getMarker(), r) && Iy(c) ? En(c, t, r, n) : gs(t, [a, ...c]), o += c.length;
    } else if (B(a) || je(a))
      s(), gs(t, [a]);
    else if (ze(a)) {
      s();
      const c = ld(e, o);
      ud(a) ? gs(t, [a, ...c]) : (To(t, a, ir(vs(a))), En(c, t, r, n)), o += c.length;
    } else if (K(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && Ly(a, r) ? gs(t, [a]) : zs(a, t, r, n, { pending: !0 });
    else if (oi(a))
      s(), To(t, a, " ");
    else if (M(a)) {
      const c = Sr(a) || le(a, he) === "attribute", l = s() && !c;
      To(
        t,
        a,
        c ? ir(vs(a)) : g1(vs(a), n, l)
      );
    } else L(a) ? zs(a, t, r, n, i) : (s(), gs(t, [a]));
  }
}
function Uy(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (je(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return zs(e, i, t, r), i;
}
function wa(e, t, r, n) {
  for (const i of t) {
    const s = Uy(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Oa(e, t) {
  let r = 0;
  const n = (i) => {
    if (M(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(ht);
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
    } else L(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function Bs(e, t = []) {
  for (const r of e)
    ze(r) ? t.push(r) : L(r) && Bs(r.getChildren(), t);
  return t;
}
function Ra(e) {
  let t = 0;
  const r = (n) => {
    if (M(n))
      for (const i of n.getTextContent()) i === ht && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function un(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === ht && t++;
    else r.content && (t += un(r.content));
  return t;
}
function k1(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), L(s) && zs(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const js = /\s/;
function Ky(e) {
  return e.filter($a).length;
}
function $a(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return M(t) && !$(t) && le(t, he) === "attribute";
}
function x1(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return $(t) || $a(e);
}
function Tp(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && $a(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      js.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function T1(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !L(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = se(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function qa(e, t, r, n) {
  const { key: i, offset: s } = T1(
    e,
    t,
    r,
    n
  ), o = Tp(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !x1(a) ? Tp(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: Ky(t.spans) };
}
function Ec(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return $(t) && t.getMarkerSyntax() !== "opening";
}
function C1(e) {
  const t = se(e.key);
  if (!$(t)) return !1;
  const r = t.getParent();
  return K(r) ? (r.selectNext(0, 0), !0) : !1;
}
function _1(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = ze(t) ? ld(r, n) : it(t) ? cd(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Fy(e, t, r) {
  const { text: n, spans: i } = e, s = Ky(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, h = !d.isSentinel && !Ec(d);
    if (!(o && $a(d))) {
      if (u) {
        if (!h) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let p = 0; p < f; p++) {
        const g = n[d.start + p];
        if (c === 0 && (l === 0 || !js.test(g))) {
          if (h) {
            a = { key: d.key, offset: p };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? js.test(g) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (h) {
          a = { key: d.key, offset: f };
          break;
        }
        u = !0;
      }
    }
  }
  if (!a) {
    const d = i[i.length - 1];
    if (d && Ec(d) && C1(d) || d?.isSentinel && _1(d)) return;
    const f = [...i].reverse().find((h) => !h.isSentinel && !Ec(h));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = se(a.key);
    if (d && M(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function zy(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    Fy(
      k1(e, n, i, s),
      t,
      e
    );
  }
}
function By(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    S1(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  En(e, o, n, i), Fy({ text: o.text, spans: o.spans }, t, e);
}
function S1(e, t) {
  const r = e.find(L);
  if (r && dd(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function jy(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!wa(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (w(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = qa(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = Kr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (un(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = xr.serializeEditorState(
    { type: br, version: yr, content: l },
    r
  );
  if (Ur(u.root.children, n) === Lr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => Wn(g));
  if (Ra(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Bs(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), h = e[0];
  d.forEach((g) => h.insertBefore(g)), Oa(d, s.sentinels), e.forEach((g) => g.remove());
  const p = Bs(d);
  for (let g = 0; g < f.length && g < p.length; g++)
    p[g].getNumber() === f[g].number && p[g].setSid(f[g].sid);
  return zy(
    d,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((g) => g.getKey()))
  ), !0;
}
function Vy(e) {
  if (e.getIsCollapsed() !== !1 || !$e.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!$(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(xt(n) || M(n) && n.getTextContent() === Gt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!$(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function Wy(e, t, r) {
  const n = Vy(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return En(n, i, t, r), { out: i, contentNodes: n };
}
function Hy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(ht)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function v1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Wy(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = N();
  if (w(u)) {
    for (let O = u.anchor.getNode(); O; O = O.getParent())
      if (e.is(O)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = qa(
      [e],
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const d = Kr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (un(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = f.content ?? [], p = Hy(h), g = Ry(e, h);
  if (g)
    return M1(
      e,
      g,
      p,
      o.sentinels,
      t,
      l
    );
  const y = Oy(e, h, p, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Mn(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== p;
  if (b && e.setCategory(p), Ur(y.children, n) === Lr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const T = y.children.map((O) => Wn(O));
  if (Ra(T) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const k = a[0];
  if (k)
    T.forEach((O) => k.insertBefore(O));
  else {
    const O = e.getChildren().find((q) => $(q) && q.getMarkerSyntax() === "closing");
    T.forEach((q) => O ? O.insertBefore(q) : e.append(q));
  }
  Oa(T, o.sentinels);
  const A = new Set(o.sentinels.flat().map((O) => O.getKey()));
  a.forEach((O) => {
    A.has(O.getKey()) || O.remove();
  });
  const _ = Vy(e) ?? T;
  return By(
    _,
    c,
    l,
    n,
    r,
    A
  ), !0;
}
function M1(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = $y(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || Mn(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((p) => Wn(p)), [d] = u;
  if (!B(d) || Ra(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const p of u)
    f.insertAfter(p), f = p;
  Oa(u, i);
  const h = e.getChildren();
  return e.append(...d.getChildren()), h.forEach((p) => p.remove()), e.setCaller(d.getCaller()).setCategory(d.getCategory()).setUnknownAttributes(d.getUnknownAttributes()).setIsCollapsed(d.getIsCollapsed()), d.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Qc(e, a) : Jg(e, { isContentChange: !0 })), !0;
}
function Gy(e) {
  const t = e.getChildren();
  return su(t[0]) ? t.slice(1) : t;
}
function pd(e, t, r) {
  const n = Gy(e), i = { text: "", spans: [], sentinels: [] };
  return En(n, i, t, r), { out: i, contentNodes: n };
}
const E1 = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${or}(?=[\\s\\u200B\\\\|]|$)`
);
function Jy(e, t) {
  const r = Kr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === or && !E1.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function Yy(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = pd(e, i, n);
  if (!wa(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, u = !1;
  const d = N();
  if (w(d)) {
    for (let q = d.anchor.getNode(); q; q = q.getParent())
      if (c.some((F) => F.is(q))) {
        u = !0;
        break;
      }
    d.isCollapsed() && (l = qa(
      c,
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const f = Jy(o.text, i);
  if (un(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const h = qy(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (h.failure !== void 0)
    return h.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const p = [...h.children, ...h.followingBlocks];
  if (Mn(p) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (h.followingBlocks.length === r.length && Ur(h.followingBlocks, i) === Lr(r, i) && Ur(h.children, i) === Lr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = h.children.map((q) => Wn(q)), y = h.followingBlocks.map((q) => Wn(q)), b = [...g, ...y];
  if (Ra(b) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const T = Bs([...a, ...r]).map((q) => ({
    number: q.getNumber(),
    sid: q.getSid()
  })), k = a[0];
  k ? g.forEach((q) => k.insertBefore(q)) : g.forEach((q) => e.append(q)), y.reduce((q, F) => q.insertAfter(F), e), Oa(b, o.sentinels);
  const A = new Set(o.sentinels.flat().map((q) => q.getKey()));
  a.forEach((q) => {
    A.has(q.getKey()) || q.remove();
  }), r.forEach((q) => q.remove());
  const _ = [...Gy(e), ...y], O = Bs(_);
  for (let q = 0; q < T.length && q < O.length; q++)
    O[q].getNumber() === T[q].number && O[q].setSid(T[q].sid);
  return By(
    _,
    l,
    u,
    i,
    n,
    A
  ), !0;
}
const Xy = /* @__PURE__ */ new Set(["ca", "cp"]), hd = "cp";
function Qy(e) {
  if (!Ir(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (zs(e, t, Rr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Kr(r, { getMarker: Rr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === hd)
  );
}
function Ia(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (K(r) && Xy.has(r.getMarker()) || Qy(r)) {
      t.push(r);
      continue;
    }
    ce(r) && r.getMarker() === hd && t.push(r);
    break;
  }
  return t;
}
function A1(e) {
  const t = (n) => K(n) && Xy.has(n.getMarker()) || Qy(n);
  if (t(e) || ce(e) && e.getMarker() === hd)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Le(n)) return n;
      if (!t(n)) return;
    }
}
function Zy(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ia(e);
  if (n.some((s) => ce(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (En(e.getChildren(), i, t, r), En(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function P1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ia(e)], o = Zy(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = N();
  if (w(l)) {
    for (let p = l.anchor.getNode(); p; p = p.getParent())
      if (s.some((g) => g.is(p))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = qa(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const u = Kr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (un(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = xr.serializeEditorState(
    { type: br, version: yr, content: u },
    r
  );
  if (Ur(f.root.children, n) === Lr(s, n)) {
    let p = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), p = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), p = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), p = !0), p || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), p;
  }
  const h = f.root.children.map((p) => Wn(p));
  return Le(h[0]) ? (h.forEach((p) => e.insertBefore(p)), s.forEach((p) => p.remove()), zy(h, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Vs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (je(n)) return;
    !t && (B(n) || ce(n) || Le(n) || _e(n)) && (t = n), Xp(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? A1(r) : void 0) ?? t;
}
function pr(e, t) {
  const r = Vs(e);
  return r ? B(r) ? v1(r, t) : Le(r) ? P1(r, t) : _e(r) ? Yy(r, t) : jy([r], t) : !1;
}
const N1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Cp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !N1.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Ao(e, t) {
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
          t.push(`\\${n}`), Cp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Ao(r.content, t), Cp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Ao(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Ao(r.content, t);
      }
    }
}
function _p(e, t, r) {
  const n = Vs(e);
  if (!Ge(n)) return !1;
  const i = N();
  if (!w(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = _e(n) ? pd(n, t, r).out : Uy(n, t, r);
  if (!o) return !1;
  const a = Kr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    js.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Ao(a, l);
  for (const u of l.join("").replaceAll(D, "~")) {
    if (js.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function gd(e, t) {
  return eb(e, t, x.Paragraph);
}
function w1(e, t) {
  return eb(e, t, x.Character);
}
function eb(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !($e.isValidMarker(n) || Xl(n));
}
function O1(e) {
  return [kt(e), to()];
}
function md(e) {
  Lt(e, 2);
}
function R1(e) {
  const t = N();
  if (!w(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function La(e) {
  const t = R1(e);
  e.splice(0, 0, O1(e.getMarker())), t && md(e);
}
function ra(e, t) {
  e.setMarker(t), La(e), md(e);
}
function $1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Sr(n)) {
    if (M(n) && !$(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(D), Ot(n, he, Fr), n.setMode("token");
      return;
    }
    if (sg(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(to());
  }
}
function Sp(e, t, r) {
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
function Ms(e) {
  for (let t = e; t; t = t.getParent())
    if (ce(t)) return t;
}
function q1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Ms(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Ms(r.getNode())?.is(s) ?? !1, a = Ms(n.getNode())?.is(s) ?? !1;
    return !(o && !Sp(r, s, "start") || a && !Sp(n, s, "end"));
  });
}
function El(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!w(r) || r.isCollapsed()))
    for (const n of q1(r)) t.add(n.getKey());
}
function I1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!w(r) || !r.isCollapsed()) return;
  const n = Ms(r.focus.getNode());
  n && t.add(n.getKey());
}
function L1(e) {
  const t = N();
  !w(t) || t.isCollapsed() || t.getNodes().some((r) => $(r)) && (El(e), t.removeText());
}
const D1 = new RegExp(
  String.raw`^\\\+?([${vr}]+)(?:[ \u00A0]|$)`
);
function U1(e, t) {
  const r = D1.exec(e.getTextContent());
  return !!r && gd(r[1], t);
}
function K1(e, t) {
  if (!di(t.viewOptions)) return;
  if (bt(e.getFirstChild())) {
    $1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (U1(e, t.getMarker)) return;
    La(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ce(o) && !o.is(e))) {
      ra(e, or), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (Ge(r)) {
    const n = e.getChildren().filter((a) => !Sr(a)), i = N();
    let s = !1;
    if (w(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Ms(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Lt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  ra(e, or);
}
function F1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = wr(t, da(e.getMarker()));
  return r === "" ? void 0 : r;
}
function tb(e) {
  const t = e.getChildren().filter((s) => !$(s) && le(s, he) !== "attribute"), r = t[0];
  r && M(r) && r.getTextContent().startsWith(D) && r.setTextContent(r.getTextContent().slice(1));
  const n = F1(e);
  n && t.push(Ee(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function z1(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && L(t) ? r = t.getChildAtIndex(e.offset) : $(t) && e.offset === 0 ? r = t : M(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), K(r) && (r = r.getFirstChild()), !$(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!K(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function B1() {
  const e = N();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = z1(e.anchor), r = t?.getParent();
  if (!t || !K(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), Qi(n) && n.getTextContent().startsWith(D) && n.setTextContent(` ${n.getTextContent().slice(D.length)}`), tb(r), M(n) && n.isAttached() && n.select(0, 0), !0;
}
function j1(e, t) {
  const r = e.getChildren(), n = r.some((s) => $(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => M(c) && !$(c) && c.getTextContent() === Gt(s)
    ), a = ai(e).some(({ node: c }) => $(c));
    if (!o && !a) return;
    r.forEach((c) => {
      $(c) || (M(c) && c.getTextContent() === Gt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => $(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function V1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!($(r) && r.getMarkerSyntax() === "opening")) {
    tb(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => $(o) && o.getMarkerSyntax() === "closing");
  i && !s && pr(e, t);
}
function yd(e, t, r) {
  if (!$(e.getFirstChild()) && r?.markerMode === "editable" && di(r)) {
    ra(e, t);
    return;
  }
  sm(e, t);
}
function rb() {
  const e = N();
  if (!w(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = nb(e);
    return t !== "removed" ? t : (Al(), "handled");
  }
  return Al() ? "handled" : "declined";
}
function W1(e, t) {
  if (!t) return e;
  const r = TP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function vp(e, t) {
  const r = N();
  if (!w(r)) return "declined";
  if (r.isCollapsed()) {
    if (!ib())
      return "declined";
  } else {
    const s = nb(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => W1(s, t)
  );
  Mp(n ?? "");
  for (const s of i)
    Al(), Mp(s);
  return "handled";
}
function H1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Yr(n);
  if (!i) return !1;
  const s = Ht(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !M(i) || $(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function nb(e) {
  const t = Ht(e.anchor.getNode()), r = Ht(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), G1() ? "removed" : "needs-plain-split");
}
function Mp(e) {
  if (e === "") return;
  const t = N();
  w(t) && t.insertText(e);
}
function G1() {
  const e = N();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = Ht(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => $(r) && r.getMarkerSyntax() === "opening");
}
function ib() {
  const e = N();
  if (!w(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Ht(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Al() {
  const e = N();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = ib();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Zr("fp", { closed: "false" });
  i.append(kt("fp"));
  const s = M(t) && !$(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Fi(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (ST(u), i.append(u));
  }
  return i.getChildren().every($) && i.append(Ee(cr)), sb(i), !0;
}
function sb(e) {
  const t = e.getChildren().find((r) => !$(r));
  if (M(t)) {
    const r = ya(t);
    t.select(r, r);
    return;
  }
  if (L(t)) {
    sb(t);
    return;
  }
  e.selectEnd();
}
function J1(e) {
  const t = [];
  let r = e;
  for (; r; )
    K(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function Y1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ye().getChildren()) {
    if (t && n.is(t)) {
      _e(n) && r.push(n.getMarker());
      break;
    }
    (_e(n) || tt(n) || ce(n)) && r.push(n.getMarker());
  }
  return r;
}
function X1(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function Q1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (bt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Sr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(X1(i)) && r === 0 : !1;
}
function Z1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !bt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Sr(i) && t.is(i) && r === 0;
}
function eN() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function tN(e) {
  const t = hm(e);
  if (t) return { node: t, offset: 0, hasTextSelection: !1 };
  if (!w(e)) return;
  const { focus: r } = e;
  return {
    node: r.getNode(),
    offset: r.offset,
    hasTextSelection: !e.isCollapsed()
  };
}
function rN(e) {
  const t = N(), r = tN(t);
  if (!r) return;
  const { node: n, offset: i, hasTextSelection: s } = r, o = Ae(n, ce), a = o ? void 0 : Ae(n, _e), c = !s && !a && (!o || Z1(o, n, i)) ? "paragraph" : "character", l = Ht(n);
  return {
    source: c,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: o?.getMarker() ?? a?.getMarker(),
    previousParaMarkers: Y1(n),
    openCharMarkers: J1(n),
    noteMarker: l?.getMarker(),
    hasTextSelection: s,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: yu(n, i),
    anchorRect: nN(e, mn(t)) ?? eN()
  };
}
function nN(e, t) {
  const r = t && e?.getElementByKey(t.getKey());
  if (!r) return;
  const { x: n, y: i, width: s, height: o } = r.getBoundingClientRect();
  return { x: n, y: i, width: s, height: o };
}
function iN() {
  const e = N();
  if (!w(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!M(t) || $(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = CP.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function sN(e, t, r) {
  yd(e, t, r), md(e);
}
function oN(e, t, r) {
  const n = N();
  if (!w(n)) return;
  const i = n.focus.getNode(), s = Ae(i, ce);
  if (t === "backslash" && s && Q1(s, i, n.focus.offset)) {
    sN(s, e, r);
    return;
  }
  Pl(e, r);
}
function ob(e, t) {
  const r = e.getNode(), n = Qm(L(r) ? r : r.getParent());
  return t.is(n);
}
function aN(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !ob(e, t);
}
function na(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function cN(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!$(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!K(r)) return e;
  const n = r.getParent();
  return n ? hr(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function lN(e, t, r) {
  const n = N();
  if (!w(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!ob(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && aN(s, e)) return !1;
  const o = su(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (na(n.anchor, e, o), na(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = N();
  if (!w(a) || !a.isCollapsed()) return !1;
  const c = ty(a);
  if (!c) return !1;
  const { parent: l, moving: u } = ey(
    cN(c.anchor)
  );
  if (!e.is(l)) return !1;
  const d = u.filter((p) => !p.is(o)), f = Di(t);
  e.insertAfter(f), f.append(...d);
  const [h] = d;
  return K(h) ? ka(h) : f.select(0, 0), di(r) && La(f), !0;
}
function uN(e, t) {
  const r = N();
  return !w(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function ab(e) {
  const t = N();
  return w(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function dN(e) {
  const t = Ae(e.anchor.getNode(), _e);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !su(r) || (na(e.anchor, t, r), na(e.focus, t, r));
}
function fN(e, t, r, n) {
  const i = N();
  if (w(i) ? dN(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && iN(), e.kind === "closeTag") {
    ab(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && rb() !== "declined") return;
  if (e.kind === "paragraph" && ft.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    oN(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if ($e.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return iy(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  gl(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: qr(), reference: r });
}
function Pl(e, t) {
  const r = N();
  if (!w(r)) return !1;
  bu(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!Ae(n, ce)) {
    const o = Ae(n, _e);
    if (o) return lN(o, e, t);
  }
  const i = di(t);
  if (ry()) {
    const o = N();
    if (!w(o)) return !1;
    const a = Ae(o.anchor.getNode(), ce);
    return a ? (a.setMarker(e), i && La(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return ce(s) ? (i ? ra(s, e) : s.setMarker(e), !0) : !1;
}
function pN() {
  const [e] = fe();
  return z(() => e.registerCommand(jl, () => !0, _t), [e]), null;
}
function hN(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = yP.exec(e)?.[1];
  return r === void 0 ? !1 : !gd(r, t);
}
function cb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !hN(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ce(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!ce(i) && !_e(i)))
    return [i, r];
}
function lb(e, t) {
  const r = cb(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return _e(n) ? Yy(n, t, [i]) : jy([n, i], t);
}
function gN(e, t) {
  const r = N();
  w(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function ub(e) {
  const t = bP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function mN(e) {
  const t = N();
  if (!w(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = ub(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function yN(e) {
  const t = N();
  if (!w(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (B(e.getParent()) && M(r)) {
    const n = r.getNextSibling();
    if (K(n)) {
      ka(n);
      return;
    }
  }
  M(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Ep(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = ub(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  yN(e);
}
function Ap(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function db(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return pr(e, r);
  const n = mN(e), i = e.getParent();
  if (ce(i)) {
    if (!gd(t, r.getMarker))
      return lb(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : pr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Ap(s, t) && Ep(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (K(i) || B(i)) {
    const s = t.replace(/^\+/, "");
    if (!(K(i) ? w1(t, r.getMarker) : $e.isValidMarker(s)))
      return pr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return pr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter($).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (gN(c, at(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Ap(a, s) && Ep(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return pr(e, r);
}
function bN(e) {
  const t = N();
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
function kN(e, t) {
  const r = e.getTextContent();
  if (on(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Be(e.getParent()) && lu(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !bN(e)) {
    wT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = gP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), db(e, n[1], t);
      return;
    }
    if (mP.test(r)) {
      t.pendingKeys.delete(e.getKey()), pr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = at(e.getMarker(), e.getNested());
    if ((K(n) || B(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = N(), o = w(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Ee(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function xN(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (vg(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function fb(e) {
  if (!ph(e)?.length)
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
const ms = fb("v"), TN = fb("c"), Pp = /^[ \u00A0]*$/;
function Nl(e, t, r) {
  const n = e.getNextSibling();
  if (M(n) && n.getType() === et.getType() && n.getMode() === "normal" && le(n, he) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = Ee(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function CN(e, t) {
  const r = e.getTextContent(), n = ar("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (ms.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = ms.valueAndRest.exec(c);
    if (l && Pp.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (ms.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = ms.valueAndRest.exec(r);
  if (!s) {
    const c = ms.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = N(), h = w(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(ar("v", u));
      const p = h !== void 0 && h >= l.length ? Math.min(h - l.length, d.length) : void 0;
      Nl(e, d, p);
      return;
    }
    t.pendingKeys.delete(e.getKey()), pr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Pp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(ar("v", o)), a && Nl(e, a, a.length);
}
const _N = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function SN(e, t) {
  if (!by(e)) return !1;
  const r = e.getParent();
  if (!B(r)) return !1;
  const n = e.getTextContent();
  if (n === Gt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = _N.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = N(), c = w(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Gt(s)), o) {
    const l = n.length - o.length, u = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const d = Nl(e, o, u);
    d.isUnmergeable() || d.toggleUnmergeable();
  }
  return !0;
}
function vN(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!M(t)) return;
  const r = ar("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = TN.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function pb(e) {
  if (it(e)) {
    const { wrapper: t } = ma(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (B(e)) {
    const { wrapper: t } = uu(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Le(e)) {
    const t = [], r = dg(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = pg(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (ze(e)) {
    const t = [], r = $s(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = $s(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function MN(e) {
  const t = N();
  if (!w(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return pb(e).some((n) => r.is(n));
}
function EN(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ce(e) && sg(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of qs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && no(l, e) && (i || MN(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of pb(e))
    l.remove(), n = !0;
  let s = !1;
  if (K(e)) {
    const l = IT(e);
    l !== void 0 && gx(l) && (yg(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of qs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (wC(l, e)) {
        Ls(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && $g(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      xa(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Np(e) {
  return M(e) && e.getType() === et.getType() && e.getMode() === "normal" && le(e, he) !== "attribute";
}
function AN(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Np(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Np(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Co(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = AN(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if ($(c)) {
      e.pendingKeys.delete(a);
      const h = c.getTextContent();
      if (on(c)) continue;
      const p = yy.exec(h);
      c.getMarkerSyntax() === "opening" && p ? n = db(c, p[1], e) || n : r === "idle" && _p(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : lb(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = pr(c, e) || n;
      continue;
    }
    const l = Zn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = EN(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && _p(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = pr(u, e) || n;
    }
  }
  return n;
}
function hb(e) {
  if (ln(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (K(t)) return Ts(t) !== void 0;
  return !1;
}
function PN(e) {
  const t = Zn(e);
  if (!t) return !1;
  const r = Qn(t.kind);
  return !xa(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function wp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (je(t) || Ag(t)) return !0;
  return !1;
}
function NN(e, t) {
  const r = e.getTextContent(), n = le(e, he), i = e.getParent();
  if (n !== "attribute" && Le(i)) {
    r.replace(/^[ \u00A0]+/, "") === ar("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (SN(e, t)) return;
  if (n === "attribute") {
    PN(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && hb(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !wp(e))
      t.pendingKeys.add(e.getKey());
    else if (hg(e)) t.pendingKeys.add(e.getKey());
    else if (Le(Vs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      K(a) && bg(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (wp(e)) return;
  const s = N(), o = w(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (kP.test(o)) {
    if (Sx(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), pr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function wN(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : $g(e, t);
}
function ON(e) {
  const t = (r) => {
    if ($(r)) {
      on(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (ln(r)) {
      vg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of qs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (no(n, r) || wN(n, r)) && e.pendingKeys.add(r.getKey());
    if (ze(r)) {
      r.getTextContent() !== ar("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (M(r)) {
      if (r.getType() !== et.getType() || le(r, he) === "attribute") return;
      const n = r.getParent();
      if (Le(n)) {
        r.getTextContent() !== ar("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && hb(r) || i.includes("//") || hg(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (K(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!je(r)) {
      if (Be(r) && r.getChildrenSize() === 0) {
        const n = Zn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Ye().getChildren().forEach(t);
}
const gb = Fl(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ac(e) {
  const t = e();
  return wt(Ul), wt(mh), t;
}
const Op = 8, RN = 1e3;
function Ei(e, t) {
  const r = ze(e) ? ["va", "vp"] : it(e) ? ["milestone"] : B(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    IC(Qn(n), e, t.pendingKeys);
}
function $N(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Vl) || i.updateTags.has(Ns)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = se(o);
        if (!c) continue;
        const l = Zn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = se(o.getKey());
        c?.isAttached() && Qn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Re(
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
    e.registerMutationListener(Br, r),
    e.registerMutationListener(nn, r),
    e.registerMutationListener(sn, r)
  );
}
function wl(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = N();
  return r ? t ? sl(r, t) : w(r) && qi(r) : !1;
}
function qN(e, t, r) {
  return Re(
    e.registerCommand(
      sr,
      (n) => {
        if (Ea() || wl(t)) return !1;
        const i = xl(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? nd(id(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = vp(o, t.getMarker);
          if (a === "declined" && H1(e) && (a = vp(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      de
    ),
    e.registerCommand(
      sr,
      (n) => {
        const i = xl(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !LA()) return !1;
        const o = N();
        return t.structureProtectionMode === "protected" && w(o) && qi(o) ? !1 : (n?.preventDefault(), w(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(As, void 0), a === "") return;
          const l = N();
          w(l) && l.insertText(a);
        }), !0);
      },
      Ne
    ),
    e.registerCommand(
      sr,
      () => (t.splitExpected.current = !0, !1),
      _t
    )
  );
}
function IN({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = fe(), a = e?.markerMode === "editable", c = !!e && so(e), l = Z(void 0), u = Z(n), d = Z(s);
  return z(() => {
    u.current = n, d.current = s;
    const f = l.current;
    f && (e && (f.viewOptions = e), f.getMarker = t ?? Rr, f.logger = r, f.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), z(() => {
    if (!a || !e) return;
    const f = {
      viewOptions: e,
      getMarker: t ?? Rr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = f;
    const h = EC(o, f.pendingKeys);
    let p, g = !1, y, b = !1, T = !1, k = 0;
    const A = () => k < Op ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Op} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), _ = (S, W = "departure") => {
      o.update(() => {
        k = Ac(
          () => Co(f, S, W)
        ) ? k + 1 : 0;
      });
    };
    let O;
    const q = () => {
      if (O !== void 0 && clearTimeout(O), O = void 0, T || f.pendingKeys.size === 0) return;
      const S = u.current ?? RN;
      S < 0 || (O = setTimeout(() => {
        O = void 0, !(T || f.pendingKeys.size === 0) && (g || A() || _(void 0, "idle"));
      }, S));
    }, F = Re(
      o.registerNodeTransform(Br, (S) => {
        if (o.isComposing()) return;
        kN(S, f);
        const W = Zn(S);
        W && (ze(W.owner) || B(W.owner) || Le(W.owner) || it(W.owner) && ma(W.owner).wrapper === void 0) && Ei(W.owner, f);
      }),
      o.registerNodeTransform(St, (S) => {
        o.isComposing() || (CN(S, f), Ei(S, f));
      }),
      o.registerNodeTransform(Yt, (S) => {
        o.isComposing() || (vN(S), S.isAttached() && Ei(S, f));
      }),
      o.registerNodeTransform(ft, (S) => {
        o.isComposing() || K1(S, f);
      }),
      o.registerNodeTransform(Ce, (S) => {
        if (!o.isComposing()) {
          V1(S, f);
          for (const W of ["separator", "char"])
            S.isAttached() && no(Qn(W), S) && f.pendingKeys.add(S.getKey());
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
      o.registerNodeTransform(kr, (S) => {
        o.isComposing() || Ei(S, f);
      }),
      o.registerNodeTransform(sn, (S) => {
        if (o.isComposing()) return;
        const W = Zn(S);
        W && (it(W.owner) || ze(W.owner) || B(W.owner) || Le(W.owner)) && Ei(W.owner, f);
      }),
      o.registerNodeTransform($e, (S) => {
        o.isComposing() || (j1(S, f), Ei(S, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(cn, (S) => {
        o.isComposing() || xN(S, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(et, (S) => {
        o.isComposing() || NN(S, f);
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
        (S) => {
          o.getEditorState().read(() => {
            for (const [W, G] of S) {
              if (G === "destroyed") continue;
              const ae = se(W);
              !ae || le(ae, he) !== "attribute" || Be(ae.getParent()) || o.getElementByKey(W)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      $N(o, f),
      ...c ? [
        o.registerNodeTransform(et, (S) => {
          o.isComposing() || RP(S);
        }),
        o.registerCommand(
          xn,
          (S) => mp(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            S && typeof S == "object" && "clipboardData" in S ? S : null,
            o,
            !1,
            d.current
          ),
          Ne
        ),
        o.registerCommand(
          jt,
          (S) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            mp(
              S && typeof S == "object" && "clipboardData" in S ? S : null,
              o,
              !0,
              d.current
            )
          ),
          Ne
        ),
        o.registerCommand(
          sr,
          (S) => FP(
            // Same jsdom-safe duck-check as COPY above.
            S && typeof S == "object" && "clipboardData" in S ? S : null,
            f.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              f.splitExpected.current = !0;
            }
          ),
          Ne
        )
      ] : [],
      o.registerCommand(
        jt,
        () => (!wl(f) && !Ea() && El(f), !1),
        de
      ),
      o.registerCommand(
        Yi,
        () => (o.isComposing() || L1(f), !1),
        Or
      ),
      o.registerCommand(
        Ji,
        (S) => S || o.isComposing() ? !1 : B1(),
        Or
      ),
      o.registerCommand(
        Li,
        () => (g = !1, k = 0, q(), !1),
        _t
      ),
      o.registerCommand(
        Cr,
        (S) => (g = !1, k = 0, q(), (S.key === "Backspace" || S.key === "Delete") && !wl(f, wm(S)) && (El(f), I1(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !S.ctrlKey || S.altKey || S.shiftKey || S.metaKey || S.key !== " " && S.code !== "Space" || !IA() ? !1 : (S.preventDefault(), !0)),
        Ne
      ),
      o.registerCommand(
        rh,
        (S) => {
          const W = rb();
          W === "needs-plain-split" && o.dispatchCommand(As, void 0);
          const G = W !== "declined" || LC();
          return G && S?.preventDefault(), Co(f), G;
        },
        Ne
      ),
      o.registerCommand(
        As,
        () => (f.splitExpected.current = !0, ry()),
        Ne
      ),
      qN(o, f, c),
      o.registerCommand(
        gb,
        () => {
          if (g) return !0;
          const S = o.getRootElement(), W = S?.ownerDocument, G = !!S && !!W && W.hasFocus() && S.contains(W.activeElement);
          let ae;
          if (G) {
            const te = N();
            ae = w(te) ? te.focus.key : p;
          }
          return Ac(() => Co(f, ae)), !0;
        },
        _t
      ),
      o.registerCommand(
        Bl,
        () => {
          if (g) return !1;
          const S = N(), W = w(S) ? S.focus.key : p;
          return Ac(() => Co(f, W)), !1;
        },
        _t
      ),
      o.registerUpdateListener(({ editorState: S, tags: W }) => {
        f.splitExpected.current = !1, f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear(), f.rebuildAttempted.clear();
        const G = S.read(() => {
          const te = N();
          return w(te) ? te.focus.key : void 0;
        }), ae = y;
        if (G !== void 0 && (y = G), W.has(Vl)) {
          f.pendingKeys.clear(), S.read(() => ON(f)), g = !0, G !== void 0 && (p = G);
          return;
        }
        if (W.has(Rt)) {
          G !== void 0 && G !== ae && (g = !0);
          return;
        }
        g || (G !== void 0 && (p = G), q(), !(b || G === void 0) && [...f.pendingKeys].some((te) => te !== G) && (b = !0, queueMicrotask(() => {
          b = !1, !T && (A() || _(p));
        })));
      })
    );
    return () => {
      T = !0, O !== void 0 && clearTimeout(O), O = void 0, h(), F(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const LN = ["status_unknown", "status_invalid"], mb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, DN = Object.values(mb);
function UN(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = mb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Rp(e) {
  e.classList.remove(...LN), e.removeAttribute("aria-description"), DN.includes(e.title) && e.removeAttribute("title");
}
function KN(e, t, r, n) {
  const i = (a) => a.read(() => Ye().getChildrenKeys()), s = i(t), o = i(e);
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
function FN(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : $(t) && t.getParent()?.getKey() === r.getKey();
}
function zN({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = fe(), i = e?.markerMode === "editable";
  return z(() => {
    if (!i) return;
    const s = t ?? Uo;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = s1(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, h] of o) {
            if (d.has(f) || FN(f)) continue;
            const p = se(f)?.getTopLevelElement();
            !p || l.has(p.getKey()) || d.set(f, h);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const h = n.getElementByKey(f);
          h && Rp(h);
        }
        for (const [f, h] of d) {
          const p = n.getElementByKey(f);
          p && UN(p, h);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          KN(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Rp(u);
      }
    };
  }, [n, i, t, r]), null;
}
function yb(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Dr(o);
    a && L(s) && yb(s.getChildren(), a, r);
  }
}
function Ws(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = Dr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Gi(a);
      if (l === void 0 || !l.includes(ht)) continue;
      const u = l.split(ht), d = [];
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (f > 0 && d.push(...t[n++] ?? []), h.length > 0) {
          const p = {
            ...a,
            text: h
          };
          d.push(p);
        }
      }
      s.splice(o, 1, ...d), o += d.length - 1;
    }
  };
  return i(e), n;
}
function ia(e, t, r) {
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
function bb(e, t) {
  const r = [];
  for (const n of e)
    dd(n, t) || ((ce(n) || K(n)) && r.push(n.getMarker()), L(n) && r.push(...bb(n.getChildren(), t)));
  return r;
}
function kb(e) {
  const t = [];
  for (const r of e) {
    const n = fd(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Dr(r);
    i && t.push(...kb(i));
  }
  return t;
}
function Hs(e, t, r) {
  const n = bb(e, r), i = kb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function BN(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = N();
  let n, i;
  if (w(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = se(t.key), i = t.offset;
  else
    return;
  if (!(!M(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Da(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function jN(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!wa(c, e, o, s)) return;
  const l = i ? Da(c, i) : c.text, u = Kr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (un(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = xr.serializeEditorState(
    { type: br, version: yr, content: u },
    s
  ).root.children;
  if (Mn(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = ia(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ur(d, o) === Lr(e, o) && Hs(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Ws(d, f);
  const p = xb(e), g = bd(d);
  for (let y = 0; y < p.length && y < g.length; y++)
    p[y].sid !== void 0 && g[y].number === p[y].number && (g[y].sid = p[y].sid);
  return d;
}
function xb(e) {
  const t = [], r = (n) => {
    ze(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function bd(e) {
  const t = [];
  for (const r of e) {
    Gh(r) && t.push(r);
    const n = Dr(r);
    n && t.push(...bd(n));
  }
  return t;
}
function VN(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Wy(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Da(l, i) : l.text, f = Kr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (un(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [h] = f;
  if (f.length !== 1 || typeof h != "object" || h.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const p = h.content ?? [], g = Hy(p), y = e.getCategory() !== g, b = Ry(e, p);
  if (b) {
    const _ = $y(
      e,
      b.before,
      b.after,
      g,
      s
    );
    if (!_ || Mn(_) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const O = ia(l, t, n);
    return O ? (Ws(_, O), {
      rebuilt: void 0,
      contentNodes: u,
      category: g,
      categoryChanged: !1,
      closedAs: _
    }) : void 0;
  }
  const T = Oy(e, p, g, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const k = T.children;
  if (Mn(k) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const A = ia(l, t, n);
  if (!A) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ur(k, o) === Lr(u, o) && Hs(u, k, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Ws(k, A), { rebuilt: k, contentNodes: u, category: g, categoryChanged: y };
}
function $p(e) {
  return e.$?.textType;
}
function WN(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && $p(e) === $p(t);
}
function HN(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && je(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function GN(e) {
  if (!$(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!B(t)) return;
  const r = e.getTextContent();
  if (on(e)) return;
  const n = yy.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function qp(e, t) {
  const r = e;
  r.marker = t, r.text = Dy(t, r.markerSyntax, r.nested);
}
function JN(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!$e.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && qp(a.node, s);
  const c = n.getChildren().filter($).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && qp(l.node, s);
}
function YN(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: u } = pd(e, a, o);
  if (u.length === 0 && s.length === 0 || !wa(l, s, a, o)) return;
  const d = i ? Da(l, i) : l.text, f = Jy(d, a);
  if (un(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const h = qy(
    e,
    f.lineContent,
    f.followingBlocks,
    o
  );
  if (h.failure !== void 0) {
    h.failure === "shape" && c?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: p, followingBlocks: g } = h;
  if (Mn([...p, ...g]) !== l.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const y = ia(l, t, n);
  if (!y) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (g.length === s.length && Ur(g, a) === Lr(s, a) && Hs(s, g, a) && Ur(p, a) === Lr(u, a) && Hs(u, p, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const b = Ws(p, y);
  Ws(g, y, b);
  const T = xb([...u, ...s]), k = bd([...p, ...g]);
  for (let A = 0; A < T.length && A < k.length; A++)
    T[A].sid !== void 0 && k[A].number === T[A].number && (k[A].sid = T[A].sid);
  return { rebuilt: p, contentNodes: u, followingBlocks: g };
}
function XN(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Zy(e, i, n);
  if (!o) return;
  const a = r ? Da(o, r) : o.text, c = Kr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (un(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = xr.serializeEditorState(
    { type: br, version: yr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Ia(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ur(u, i) === Lr(d, i) && Hs(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function QN(e, t, r, n, i) {
  const s = BN(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = (T) => {
    B(T) ? c.set(T.getKey(), T) : Le(T) ? l.set(T.getKey(), T) : _e(T) ? u.set(T.getKey(), T) : o.set(T.getKey(), [T]);
  };
  for (const T of t) {
    const k = se(T);
    if (!k?.isAttached()) continue;
    const A = Vs(k);
    if (A) {
      if (h(A), $(k)) {
        const _ = cb(k, r.getMarker);
        _ && a.push(_);
      }
      if (B(A)) {
        const _ = GN(k);
        _ && f.set(A.getKey(), _);
      }
    }
  }
  const p = /* @__PURE__ */ new Set();
  for (const [T, k] of a)
    p.has(T.getKey()) || p.has(k.getKey()) || ([T, k].forEach((A) => {
      p.add(A.getKey()), o.delete(A.getKey());
    }), _e(T) ? (u.set(T.getKey(), T), d.set(T.getKey(), [k])) : o.set(T.getKey(), [T, k]));
  if (s) {
    const T = Vs(s.node);
    T && !p.has(T.getKey()) && h(T);
  }
  const g = HN(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && u.size === 0 && g.length === 0)
    return;
  const y = new Set(g.map((T) => T.getKey())), b = /* @__PURE__ */ new Map();
  yb(Ye().getChildren(), e.root.children, b);
  for (const T of f.values()) JN(T, b);
  for (const T of c.values()) {
    const k = b.get(T.getKey()), A = k ? Dr(k.node) : void 0;
    if (!k || !A) continue;
    const _ = VN(T, b, r, y, s);
    if (!_) continue;
    if (_.closedAs) {
      const F = k.siblings.indexOf(k.node);
      if (F < 0) continue;
      const [S, ...W] = _.closedAs, G = k.node;
      for (const ae of Object.keys(G)) Reflect.deleteProperty(G, ae);
      Object.assign(G, S), k.siblings.splice(F + 1, 0, ...W);
      continue;
    }
    if (_.categoryChanged) {
      const F = k.node;
      _.category === void 0 ? delete F.category : F.category = _.category;
    }
    if (!_.rebuilt) continue;
    const O = b.get(_.contentNodes[0].getKey());
    if (!O) continue;
    const q = A.indexOf(O.node);
    q < 0 || A.splice(q, _.contentNodes.length, ..._.rebuilt);
  }
  for (const T of o.values()) {
    const k = b.get(T[0].getKey());
    if (!k) continue;
    const A = jN(T, b, r, y, s);
    if (!A) continue;
    const _ = k.siblings.indexOf(k.node);
    _ < 0 || k.siblings.splice(_, T.length, ...A);
  }
  for (const T of u.values()) {
    const k = b.get(T.getKey()), A = k ? Dr(k.node) : void 0;
    if (!k || !A) continue;
    const _ = d.get(T.getKey()) ?? [], O = YN(T, b, r, y, s, _);
    if (!O) continue;
    const q = O.contentNodes.at(0), F = q ? b.get(q.getKey()) : void 0;
    if (q && !F) continue;
    const S = F ? A.indexOf(F.node) : A.length, W = k.siblings.indexOf(k.node);
    S < 0 || W < 0 || (A.splice(S, O.contentNodes.length, ...O.rebuilt), k.siblings.splice(W + 1, _.length, ...O.followingBlocks));
  }
  for (const T of l.values()) {
    const k = b.get(T.getKey());
    if (!k) continue;
    const A = 1 + Ia(T).length, _ = XN(T, r, s);
    if (!_) continue;
    const O = k.siblings.indexOf(k.node);
    O < 0 || k.siblings.splice(O, A, ..._);
  }
  for (const T of g) {
    const k = b.get(T.getKey());
    if (!k) continue;
    const A = k.siblings.indexOf(k.node);
    if (A < 0) continue;
    k.siblings.splice(A, 1);
    const _ = k.siblings[A - 1], O = k.siblings[A], q = _ && Gi(_), F = O && Gi(O);
    _ && O && q !== void 0 && F !== void 0 && WN(_, O) && (_.text = q + F, k.siblings.splice(A, 1));
  }
  return Bm(e, r.viewOptions);
}
function ZN({
  viewOptions: e,
  logger: t
}) {
  const [r] = fe(), n = di(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1)), i = e?.hasGutterParaMarkers ?? !1;
  return z(() => {
    if (n)
      return r.registerNodeTransform(
        ft,
        (s) => i ? t0(s) : e0(s, t)
      );
  }, [r, n, i, t]), null;
}
function e0(e, t) {
  e.getMarker() !== or && (e.isEmpty() || bt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${or}" (key ${e.getKey()})`
  ), e.setMarker(or)));
}
function t0(e) {
  const t = e.getFirstChild();
  if (bt(t) && !Qr(t)) return;
  const r = De(e.getMarker()) + D, [n = Mh(r), ...i] = e.getChildren().filter(Qr).sort((c, l) => Number(l.is(t)) - Number(c.is(t)));
  for (const c of i) c.remove();
  if (n.getTextContent() !== r && n.setTextContent(r), n.is(t)) return;
  t ? t.insertBefore(n) : e.append(n);
  const s = N();
  if (!w(s)) return;
  const o = Ma(e), a = ts(e, o);
  for (const c of [s.anchor, s.focus])
    c.type === "element" && c.key === e.getKey() && c.offset < o && (a ? c.set(a.getKey(), 0, "text") : c.set(e.getKey(), o, "element"));
}
function r0({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = fe(), n = Z({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return z(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, sa(s, e) || n0(i, r, e);
  }, [r, e, t]), z(
    () => r.registerMutationListener(
      Wt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Ol(r);
        Ip(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: _o(s) === _o(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), z(() => {
    const i = (a) => a.read(
      () => new Set(
        Ye().getChildren().filter(tt).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((h) => !u.has(h));
      f && (Ol(r) || Ip(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((h) => !d.has(h)),
        isSameDocumentReload: _o(a) === _o(c)
      }));
    };
    return Re(
      ...[Yt, zr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), z(
    () => r.registerCommand(
      Bt,
      () => {
        const i = n.current;
        return i.phase === "idle" && c0(i, Tb()), !1;
      },
      _t
    ),
    [r]
  ), z(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Bt, void 0));
    };
    return Re(
      r.registerMutationListener(Dt, i),
      r.registerMutationListener(St, i)
    );
  }, [r]), z(() => {
    const i = () => f0(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function n0(e, t, r) {
  if (i0(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Ol(t);
  (!n || n === r.book) && t.update(() => Cb(t, r.chapterNum, r.verseNum), {
    tag: Rt
  });
}
function i0(e, t) {
  const r = e.pendingEchoes.findIndex((n) => sa(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function s0(e) {
  return hm(e) ?? ng(e);
}
function Tb() {
  const e = N(), t = s0(e);
  if (!t) return;
  const r = kd(), n = lT(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Tu(t, e), { verseNum: o, verse: a } = a_(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Ol(e) {
  return e.getEditorState().read(() => kd()?.getCode() || void 0);
}
function kd() {
  return Ye().getChildren().find(_e);
}
function Ip(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Pc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Pc(e, t), e.phase = "navigating") : i && Pc(e, t), r && r !== e.scrRef.book && vb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Pc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Cb(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Rt }
    );
  });
}
function Cb(e, t, r) {
  const n = N()?.clone();
  o0(t, r);
  const i = N();
  i && !(n && i.is(n)) && Jr(e, Rt);
}
function o0(e, t) {
  const r = Tb();
  if (r?.chapterNum === e && (r.verse ? Sb(t, r.verse) : r.verseNum === t))
    return;
  const n = Ye().getChildren(), i = Yh(n, e);
  if (!i) return;
  const s = gT(n, i), o = cT(s, !0);
  hT(s, o);
  let a;
  try {
    a = t_(s, t);
  } catch {
    return;
  }
  a && (ce(a) ? !M(a.getFirstChild()) && tr(a) || Lt(a, 0) : a0(a));
}
function a0(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ye(n)) {
    M(e) ? e.selectEnd() : Lt(t, r);
    return;
  }
  const i = ts(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (M(e)) {
    e.selectEnd();
    return;
  }
  const s = L(n) && !B(n) ? _b(n) : void 0;
  s ? s.select(0, 0) : Lt(t, r);
}
function _b(e) {
  const t = e.getFirstChild();
  if (M(t)) return t;
  if (L(t) && !B(t)) return _b(t);
}
function _o(e) {
  return e.read(() => {
    const t = Ye().getChildren().find(tt);
    return `${kd()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function c0(e, t) {
  e.phase !== "navigating" && t && (l0(t, e.scrRef) || vb(e, u0(t, e.scrRef)));
}
function l0(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Sb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Sb(e, t) {
  try {
    return au(e, t);
  } catch {
    return !1;
  }
}
function u0(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const d0 = 8;
function vb(e, t) {
  return sa(t, e.scrRef) || e.pendingEchoes.some((r) => sa(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > d0 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function sa(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function f0(e) {
  e.phase = "idle";
}
function p0(e) {
  return _e(e) ? `${e.__code}` : Le(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker}` : Xs(e) ? `${e.__marker} "${e.__number}"` : xt(e) ? `${e.__caller}` : ui(e) ? `${e.__marker} "${e.__number}"` : B(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ce(e) ? `${e.__marker}` : M(e) ? `"${e.__text}"${h0(e)}` : Me(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : ze(e) ? `${e.__marker} "${e.__number}"` : "";
}
function h0(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ys]) : "";
}
function g0() {
  const [e] = fe();
  return /* @__PURE__ */ E(
    $k,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: p0,
      editor: e
    }
  );
}
const Mb = Wp(null), Lp = 4;
function m0({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = Hp(Mb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return z(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ E("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function y0({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = me(), [s, o] = me(), a = ke(
    (u) => {
      i((d) => d ? [...d, u] : [u]);
    },
    [i]
  ), c = (u) => {
    if (!n) return;
    const d = u.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(d) && u.preventDefault(), d === "Escape" || d === "Tab" ? r() : d === "ArrowUp" ? o((f) => {
      if (!f) return n[0];
      const h = n.indexOf(f) - 1;
      return n[h === -1 ? n.length - 1 : h];
    }) : d === "ArrowDown" && o((f) => f ? n[n.indexOf(f) + 1] : n[0]);
  }, l = Ze(() => ({ registerItem: a }), [a]);
  return z(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ E(Mb.Provider, { value: l, children: /* @__PURE__ */ E("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function b0({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Z(null), c = Z(null), [l, u] = me(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return z(() => {
    const f = c.current, h = a.current;
    if (l && f !== null && h !== null) {
      const { top: p, left: g } = f.getBoundingClientRect();
      h.style.top = `${p + f.offsetHeight + Lp}px`, h.style.left = `${Math.min(g, window.innerWidth - h.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), z(() => {
    const f = c.current;
    if (f !== null && l) {
      const h = (p) => {
        const g = p.target;
        o && a.current && a.current.contains(g) || f.contains(g) || u(!1);
      };
      return document.addEventListener("click", h), () => {
        document.removeEventListener("click", h);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), z(() => {
    const f = () => {
      if (l) {
        const h = c.current, p = a.current;
        if (h !== null && p !== null) {
          const { top: g } = h.getBoundingClientRect(), y = g + h.offsetHeight + Lp;
          y !== p.getBoundingClientRect().top && (p.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Oe(Vn, { children: [
    /* @__PURE__ */ Oe(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ E("span", { className: i }),
          t && /* @__PURE__ */ E("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ E("i", { className: "chevron-down" })
        ]
      }
    ),
    l && jn(
      /* @__PURE__ */ E(y0, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const Rl = {
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
}, $l = {
  ...Rl,
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
function k0({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ E(
    b0,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + x0(t),
      buttonLabel: T0(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Rl).map((n) => /* @__PURE__ */ Oe(
        m0,
        {
          className: "item block-marker " + C0(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ E("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ E("span", { className: "text usfm_" + n, children: Rl[n] })
          ]
        },
        n
      ))
    }
  );
}
function x0(e) {
  return e && e in $l ? e : "ban";
}
function T0(e) {
  return e && e in $l ? $l[e] : "No Style";
}
function C0(e) {
  return e ? "active dropdown-item-active" : "";
}
function Dp() {
  return /* @__PURE__ */ E("div", { className: "divider" });
}
const _0 = Pn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = fe(), [o, a] = me(s), [c, l] = me(), [u, d] = me(!1), [f, h] = me(!1), p = ke(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: b,
      contextMarker: T
    }) => {
      d(g), h(y), l(b), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: b,
        contextMarker: T
      });
    },
    [n]
  );
  return z(() => s.registerCommand(
    Bt,
    (g, y) => (a(y), !1),
    de
  ), [s]), /* @__PURE__ */ Oe(Vn, { children: [
    /* @__PURE__ */ E(Dm, { onStateChange: p }),
    /* @__PURE__ */ Oe("div", { className: "toolbar", children: [
      /* @__PURE__ */ E(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(ih, void 0);
          },
          title: Gn ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ E("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ E(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(sh, void 0);
          },
          title: Gn ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ E("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ E(Dp, {}),
      o === s && /* @__PURE__ */ Oe(Vn, { children: [
        /* @__PURE__ */ E(
          k0,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ E(Dp, {})
      ] }),
      /* @__PURE__ */ E("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), S0 = va(), v0 = {}, M0 = {};
function E0() {
  return /* @__PURE__ */ E("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Nc(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function Up(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = L(n) ? n.getLastDescendant() ?? n : n;
  return Ca(r, i);
}
function Kp(e, t, r) {
  Lk(e, () => Di(t));
  const n = N();
  if (!w(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    ce(o) && i.add(o);
  }), i.forEach((s) => yd(s, t, r));
}
const Eb = Pn(function({
  defaultUsj: t,
  scrRef: r,
  onScrRefChange: n,
  onSelectionChange: i,
  onUsjChange: s,
  onStateChange: o,
  onParaMarkerMenuRequest: a,
  options: c,
  logger: l,
  children: u
}, d) {
  const f = Z(null), h = Z(null), p = Z(null), g = Z(null), y = Z(t), b = Z(void 0), T = Z(void 0), k = Z(void 0), A = Z(void 0), _ = Z(!1), [O, q] = me(t), [F, S] = me(0), [W, G] = me(), {
    isReadonly: ae = !1,
    structureProtectionMode: te = "off",
    hasExternalUI: Pe = !1,
    hasSpellCheck: xe = !1,
    textDirection: Ut = "ltr",
    markerMenuTrigger: Ke = "\\",
    view: j,
    nodes: Y,
    debug: ie = !1,
    contextMenu: X,
    styleInfo: P,
    markerSettleDelayMs: ee,
    copyLimit: pe
  } = c ?? M0, Se = j ?? S0, ct = Ks(Se) && (Se.markerMode !== "hidden" || !Se.hasSpacing || Se.hasGutterParaMarkers || Se.hasActiveTextFocusBox) ? {
    ...Se,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : Se, mt = Z(ct);
  Zt(mt.current, ct) || (mt.current = ct);
  const ne = mt.current, Xe = Ze(() => Y ?? v0, [Y]), Ua = Ze(() => X, [X]), fi = Ze(
    () => WC(P ?? Uo),
    [P]
  ), ve = Z(l);
  Zt(ve.current, l) || (ve.current = l);
  const Qe = ve.current, ge = Ks(ne), Et = ae || ge, Ie = ct !== Se;
  z(() => {
    ge && !ae && Qe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Ie && Qe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ne?.markerMode === "visible" && !ae && Qe?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ge, ae, Ie, Qe, ne?.markerMode]);
  const lr = Z(null), oo = Ze(() => {
    if (ne.markerMode !== "editable") return;
    const R = P ?? Uo;
    return {
      getContext: () => lr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (I) => p1(
        R,
        I,
        Xe.extraValidMarkers
      ),
      getEnterItems: (I) => h1(
        R,
        I,
        Xe.extraValidMarkers
      ),
      apply: (I, H) => {
        const J = lr.current;
        J && (H.trigger === "enter" ? J.splitParagraphWithMarker(I.marker) : J.applyMarkerMenuSelection(I, H));
      },
      commitTypedCloser: (I) => {
        lr.current?.commitTypedCloser(I);
      }
    };
  }, [ne, P, Xe.extraValidMarkers]), Xt = (R) => {
    _.current || (_.current = !0, ve.current?.warn(
      `Editor: cannot ${R} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, is = (R) => {
    if (ge)
      throw new Error(
        `Cannot ${R} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, jr = (R) => {
    if (is(R), Et) throw new Error(`Cannot ${R} in readonly mode`);
  }, On = () => !!f.current && _m(f.current), ao = Ze(
    () => ({
      namespace: "platformEditor",
      theme: { ...fy, showCharMarkerTitles: ne.showCharMarkerTitles },
      editable: !Et,
      editorState: void 0,
      // Handling of errors during update
      onError(R) {
        throw R;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [dt, ...ge ? pS : Ou]
    }),
    [Et, ge, ne.showCharMarkerTitles]
  );
  Mo.initialize(Qe);
  function At(R) {
    if (R !== void 0 && !UA(R, Xe.extraValidMarkers))
      throw new Error(`Unsupported character marker '${R}'`);
  }
  const Qt = ke(() => {
    const R = f.current;
    if (!R) return y.current;
    const I = rf(R), H = T.current;
    if ((!I || I.size === 0) && !H) return y.current;
    const J = R.getEditorState(), Te = J.toJSON();
    return J.read(
      () => QN(
        Te,
        I ?? /* @__PURE__ */ new Set(),
        { viewOptions: ne, getMarker: fi, logger: Qe },
        H,
        k.current
      )
    ) ?? y.current;
  }, [ne, fi, Qe]);
  function Mr(R, I, H) {
    if (ge && I === "remote") {
      ve.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    is("apply an update");
    const J = On(), Te = !J && f.current ? Jr(f.current, Wr) : void 0;
    f.current?.update(
      () => {
        I === "remote" && wt(Ns), J || wt(Wr), H && wt(H), KS(R, ne, Xe, Qe);
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
          Te?.(), !J && f.current && pc(f.current);
          const qe = f.current?.getEditorState();
          if (!qe) return;
          const Ve = Mo.deserializeEditorState(qe, ne);
          if (Ve) {
            const nt = !Zt(y.current, Ve);
            if (nt && (y.current = Ve), nt || !Zt(O, Ve)) {
              const Tt = hf(R, qe, "apply");
              A.current = Ve, s?.(Ve, R, I, Tt);
            }
          }
        }
      }
    );
  }
  const pi = {
    focus() {
      const R = f.current;
      if (!R) return;
      R.focus(), R.getEditorState().read(() => si(N())) && R.getRootElement()?.focus({ preventScroll: !0 });
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return On();
    },
    undo() {
      f.current?.dispatchCommand(ih, void 0);
    },
    redo() {
      f.current?.dispatchCommand(sh, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      jr("cut"), f.current && ju(f.current);
    },
    copy() {
      f.current && Bu(f.current);
    },
    paste() {
      jr("paste"), f.current && Vu(f.current);
    },
    pastePlainText() {
      jr("paste as plain text"), f.current && Wu(f.current);
    },
    getUsj() {
      return Qt();
    },
    commitPendingMarkerEdits() {
      const R = f.current;
      if (!R) return;
      const I = !On(), H = I ? Jr(R, Wr) : void 0;
      R.update(
        () => {
          I && wt(Wr), R.dispatchCommand(gb, void 0);
        },
        { discrete: !0 }
      ), H?.(), I && pc(R);
    },
    setTransientInput(R) {
      if (!R) {
        T.current = void 0;
        return;
      }
      const I = f.current?.getEditorState().read(() => {
        const H = N();
        return w(H) && H.isCollapsed() ? H.focus.key : void 0;
      });
      T.current = { input: R, nodeKey: I ?? k.current?.key };
    },
    setUsj(R) {
      if (!Zt(y.current, R)) {
        y.current = R, T.current = void 0;
        const I = Zt(O, R);
        q(R), I && S((H) => H + 1);
      }
    },
    applyUpdate(R, I = "remote") {
      Mr(R, I);
    },
    replaceEmbedUpdate(R, I) {
      const H = f.current?.read(() => k_(R, I));
      H ? this.applyUpdate(H) : l?.warn(
        `replaceEmbedUpdate: no embed found for key "${R}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ge) {
        Xt("get the selection");
        return;
      }
      return f.current?.read(Eu);
    },
    getSelectedParaMarker() {
      const R = f.current;
      if (R?.isEditable())
        return R.getEditorState().read(() => _n(N())?.getMarker());
    },
    setSelection(R) {
      if (ge) {
        Xt("set the selection");
        return;
      }
      f.current?.update(() => {
        const I = Sa(R);
        I !== void 0 && (zt(I), wt(gh));
      });
    },
    setAnnotation(R, I, H, J, Te) {
      if (ge) {
        Xt("set an annotation");
        return;
      }
      let qe, Ve, nt, Tt;
      typeof J == "function" || J === void 0 ? (qe = J, Ve = Te) : (qe = J.onClick, Ve = J.onRemove, nt = J.onMouseEnter, Tt = J.onMouseLeave), h.current?.setAnnotation(
        R,
        Vd(I),
        H,
        qe,
        Ve,
        nt,
        Tt
      );
    },
    removeAnnotation(R, I) {
      h.current?.removeAnnotation(Vd(R), I);
    },
    formatPara(R) {
      jr("format a paragraph"), f.current?.update(
        () => {
          const I = N(), H = _n(I);
          if (H) {
            yd(H, R, ne);
            return;
          }
          if (!w(I)) {
            l?.warn(
              `formatPara refused: no range selection or selected paragraph marker to retag with "${R}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const J = I.isBackward() ? I.focus : I.anchor, Te = Ae(J.getNode(), _e);
          if (Te) {
            const qe = I.isBackward() ? I.anchor : I.focus, nt = !I.isCollapsed() && !Te.is(qe.getNode()) && !Te.isParentOf(qe.getNode()) ? { key: qe.key, offset: qe.offset, type: qe.type } : void 0, Tt = kn();
            if (Tt.anchor.set(J.key, J.offset, J.type), Tt.focus.set(J.key, J.offset, J.type), zt(Tt), !Pl(R, ne)) {
              l?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${R}"`
              );
              return;
            }
            if (!nt) return;
            const Vr = se(nt.key);
            if (!Vr?.isAttached()) return;
            const Kt = Vr.getTopLevelElement();
            if (!Kt) return;
            const gi = Te.getNextSibling();
            if (!ce(gi)) return;
            let ur = gi.getNextSibling();
            for (; ur; ) {
              const co = ur.is(Kt), ss = ur.getNextSibling();
              if (ce(ur)) {
                const $n = kn();
                $n.anchor.set(ur.getKey(), 0, "element"), $n.focus.set(ur.getKey(), ur.getChildrenSize(), "element"), zt($n), Kp($n, R, ne);
              }
              if (co) break;
              ur = ss;
            }
            return;
          }
          Kp(I, R, ne);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(R) {
      return f.current?.read(
        () => f.current?.getElementByKey(R) ?? void 0
      );
    },
    removeCharacterMarker(R) {
      if (Et) throw new Error("Cannot remove character marker in readonly mode");
      At(R);
      let I = !1;
      return f.current?.update(
        () => {
          const H = N();
          w(H) && (I = oy(H, R, ne));
        },
        { discrete: !0 }
      ), I;
    },
    replaceCharacterMarker(R, I) {
      if (Et) throw new Error("Cannot replace character marker in readonly mode");
      At(R), At(I);
      let H = !1;
      return f.current?.update(
        () => {
          const J = N();
          w(J) && (H = XA(J, R, I));
        },
        { discrete: !0 }
      ), H;
    },
    extendCharacterMarker(R, I) {
      if (Et) throw new Error("Cannot extend character marker in readonly mode");
      At(R), I?.forEach(
        (J) => At(J)
      );
      let H = !1;
      return f.current?.update(
        () => {
          const J = N();
          w(J) && (H = QA(
            J,
            R,
            I,
            ne
          ));
        },
        { discrete: !0 }
      ), H;
    },
    insertMarker(R) {
      if (Et) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!hl(R, Xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${R}'`);
      f.current.update(Si, { discrete: !0 });
      const I = gl(
        R,
        b,
        ne,
        Xe,
        Qe,
        void 0,
        P
      );
      return I.action({ editor: f.current, reference: r }), I.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (ae) return;
      const R = f.current;
      return R?.getEditorState().read(() => rN(R));
    },
    applyMarkerMenuSelection(R, I) {
      if (ae) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (R.kind !== "closeTag" && !hl(R.marker, Xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${R.marker}'`);
      let H;
      return f.current.update(() => {
        Si(), H = fN(R, I, r, {
          expandedNoteKeyRef: b,
          viewOptions: ne,
          nodeOptions: Xe,
          logger: l,
          styleInfo: P
        });
      }), H;
    },
    splitParagraphWithMarker(R) {
      if (ae) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        Si(), Pl(R, ne);
      });
    },
    commitTypedMarker(R, I) {
      if (ae) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let H = !1;
      return f.current.update(() => {
        Si(), H = uN(R, I), H || l?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), H;
    },
    commitTypedCloser(R) {
      if (ae) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let I = !1;
      return f.current.update(() => {
        Si(), I = ab(R), I || l?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), I;
    },
    insertNote(R, I, H) {
      jr("insert a note"), f.current?.update(
        () => {
          Si();
          const J = Hg(
            R,
            I,
            H,
            r,
            ne,
            Xe,
            Qe
          );
          Nc(J, b);
        },
        { discrete: !0 }
      );
    },
    selectNote(R) {
      f.current?.update(() => {
        const I = Nr(R);
        I && (Qc(I, ne), Nc(I, b));
      });
    },
    selectAfterNote(R) {
      const I = f.current;
      if (!I) return;
      const H = !On(), J = H ? Jr(I, Wr) : void 0;
      if (I.update(
        () => {
          H && wt(Wr);
          const Te = Nr(R);
          Te && Jg(Te);
        },
        { discrete: !0 }
      ), J?.(), H) {
        pc(I);
        const Te = Jr(
          I,
          Wr
        );
        I.update(
          () => {
            wt(Wr), I.dispatchCommand(Bt, void 0);
          },
          { discrete: !0 }
        ), Te();
      }
    },
    selectNoteTextOffset(R, I, H) {
      f.current?.update(() => {
        const J = Nr(R);
        if (!J) return;
        const Te = H?.glyph;
        (H?.field === "category" ? cS(J, I, Te) || xf(J, 0) : xf(J, I, Te)) || Qc(J, ne), Nc(J, b);
      });
    },
    getNoteOps(R) {
      const I = f.current;
      return I ? Pi(I, () => {
        const H = Nr(R);
        if (H)
          return Ca(H);
      }) : void 0;
    },
    getOpsAfterNote(R) {
      const I = f.current;
      return I ? Pi(I, () => {
        const H = Nr(R);
        return H ? Up(H) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(R) {
      const I = f.current, H = I ? Pi(I, () => {
        const Ve = Nr(R);
        if (!Ve) return;
        const nt = _u(Ve, "apply");
        return { ops: Up(Ve), notePosition: nt };
      }) : void 0;
      if (!H) return;
      const { ops: J, notePosition: Te } = H;
      if (J.length === 0 || Te === void 0) return J;
      const qe = J.reduce(
        (Ve, nt) => Ve + (typeof nt.insert == "string" ? nt.insert.length : 1),
        0
      );
      return Mr([{ retain: Te + 1 }, { delete: qe }], "remote", Ul), J;
    },
    getNoteIndex(R) {
      const I = f.current;
      return I ? Pi(I, () => vu(R)) : void 0;
    },
    getNoteKey(R) {
      const I = f.current;
      return I ? Pi(I, () => Nr(R)?.getKey()) : void 0;
    },
    highlightNote(R) {
      p.current?.setHighlightedNote(R);
    },
    get toolbarEndRef() {
      return g;
    }
  };
  lr.current = pi, aa(d, () => pi), z(() => {
    const R = f.current;
    if (R)
      return R.registerUpdateListener(({ editorState: I }) => {
        I.read(() => {
          const H = N();
          if (!w(H) || !H.isCollapsed()) return;
          const J = H.focus.getNode();
          M(J) && (k.current = { key: J.getKey(), offset: H.focus.offset });
        });
      });
  }, []);
  const hi = ke(
    (R, I, H, J, Te) => {
      if (ge) return;
      const qe = Mo.deserializeEditorState(R, ne);
      if (qe) {
        const Ve = !Zt(y.current, qe);
        if (Ve && (y.current = qe), Ve || !Zt(O, qe)) {
          const nt = hf(J, R), Tt = nt && !Te.read(() => se(nt)) ? nt : void 0;
          A.current = qe, s?.(qe, J, "local", Tt);
        }
      }
    },
    [O, s, ne, ge]
  );
  z(() => {
    const R = f.current;
    if (!(!R || !s))
      return R.registerUpdateListener(({ tags: I, dirtyElements: H, dirtyLeaves: J }) => {
        !I.has(Vl) && (H.size === 0 && J.size === 0 || I.has(Ns) || !rf(R)?.size) || queueMicrotask(() => {
          const Te = Qt();
          !Te || Zt(A.current, Te) || (A.current = Te, s(Te, void 0, "local", void 0));
        });
      });
  }, [s, Qt]);
  const Rn = ke(
    (R) => {
      G(R.contextMarker), o?.(R);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Oe(ah, { initialConfig: ao, children: [
      /* @__PURE__ */ E(Jv, { isEditable: !Et }),
      /* @__PURE__ */ Oe("div", { className: "editor-container", children: [
        Pe ? /* @__PURE__ */ E(Dm, { onStateChange: Rn }) : /* @__PURE__ */ E(
          "div",
          {
            className: "editor-toolbar-container" + (Et ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ E(
              _0,
              {
                ref: g,
                editorRef: lr,
                isReadonly: Et,
                onStateChange: Rn
              }
            )
          }
        ),
        /* @__PURE__ */ Oe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ E(lh, { editorRef: f }),
          /* @__PURE__ */ E(
            Ik,
            {
              contentEditable: /* @__PURE__ */ E(
                ch,
                {
                  className: `editor-input usfm ${US(ne).join(" ")}${ne.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ne.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: xe
                }
              ),
              placeholder: /* @__PURE__ */ E(E0, {}),
              ErrorBoundary: uh
            }
          ),
          Pe && /* @__PURE__ */ E(Gv, {}),
          /* @__PURE__ */ E(dh, {}),
          r && n && /* @__PURE__ */ E(r0, { scrRef: r, onScrRefChange: n }),
          r && !Pe && /* @__PURE__ */ E(
            qE,
            {
              trigger: Ke,
              scrRef: r,
              contextMarker: W,
              getMarkerAction: (R) => gl(
                R,
                b,
                ne,
                Xe,
                Qe,
                void 0,
                P
              ),
              editableHarness: oo
            }
          ),
          /* @__PURE__ */ E(
            eM,
            {
              scripture: O,
              scriptureRef: y,
              nodeOptions: Xe,
              editorAdaptor: xr,
              viewOptions: ne,
              logger: Qe
            },
            F
          ),
          /* @__PURE__ */ E(CM, { onChange: i }),
          /* @__PURE__ */ E(
            RS,
            {
              onChange: hi,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: ix
            }
          ),
          /* @__PURE__ */ E(nP, { viewOptions: ne }),
          /* @__PURE__ */ E(wS, { ref: h, logger: Qe }),
          /* @__PURE__ */ E(mv, { viewOptions: ne }),
          /* @__PURE__ */ E(Nv, {}),
          /* @__PURE__ */ E(Iv, {}),
          ne?.markerMode !== "editable" && /* @__PURE__ */ E(Lv, { logger: Qe }),
          /* @__PURE__ */ E(zv, { options: Ua }),
          /* @__PURE__ */ E(XP, { limit: pe, viewOptions: ne }),
          /* @__PURE__ */ E(Hv, {}),
          /* @__PURE__ */ E(Xv, {}),
          /* @__PURE__ */ E(Zv, {}),
          /* @__PURE__ */ E(pN, {}),
          /* @__PURE__ */ E(
            IN,
            {
              viewOptions: ne,
              getMarker: fi,
              logger: Qe,
              markerSettleDelayMs: ee,
              structureProtectionMode: te,
              copyLimit: pe
            }
          ),
          ne?.markerMode === "visible" && /* @__PURE__ */ E(YP, { viewOptions: ne, copyLimit: pe }),
          /* @__PURE__ */ E(
            zN,
            {
              styleInfo: P,
              viewOptions: ne,
              logger: Qe
            }
          ),
          /* @__PURE__ */ E(tM, { ref: p }),
          /* @__PURE__ */ E(
            rM,
            {
              expandedNoteKeyRef: b,
              nodeOptions: Xe,
              viewOptions: ne,
              logger: Qe
            }
          ),
          /* @__PURE__ */ E(TM, {}),
          /* @__PURE__ */ E(fv, {}),
          /* @__PURE__ */ E(ov, {}),
          /* @__PURE__ */ E(ZN, { viewOptions: ne, logger: Qe }),
          /* @__PURE__ */ E(
            PM,
            {
              onParaMarkerMenuRequest: a,
              structureProtectionMode: te
            }
          ),
          /* @__PURE__ */ E(IM, {}),
          /* @__PURE__ */ E(bE, { structureProtectionMode: te }),
          /* @__PURE__ */ E(kE, { textDirection: Ut }),
          /* @__PURE__ */ E(TE, {}),
          /* @__PURE__ */ E(RE, {}),
          u
        ] }),
        ie && /* @__PURE__ */ E(g0, {})
      ] })
    ] }, ne.verseLayout ?? "inline")
  );
}), Iw = Pn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ E(Eb, { ref: r, ...i });
});
function Ab() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function oa(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Ab() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Pb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Ab() : r,
    quote: e,
    type: "thread"
  };
}
function Fp(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function A0(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function wc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class P0 {
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
    this._comments = t, wc(this);
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
          const c = Fp(a);
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
    this._comments = i, wc(this);
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
          const c = Fp(a);
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
    return this._comments = n, wc(this), t.type === "comment" ? {
      index: s,
      markedComment: A0(t)
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
    return t !== null ? t.doc.get("comments", Od) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Rd(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Od();
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
      Qk,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      _t
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Zk) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const h of d) {
              const p = h.insert, g = h.retain, y = h.delete, b = u.parent, T = u === r ? void 0 : b instanceof Rd && this._comments.find((k) => k.id === b.get("id"));
              if (Array.isArray(p)) {
                const k = f;
                p.slice().reverse().forEach((A) => {
                  const _ = A.get("id"), q = A.get("type") === "thread" ? Pb(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (F) => oa(
                        F.get("content"),
                        F.get("author"),
                        F.get("id"),
                        F.get("timeStamp"),
                        F.get("deleted")
                      )
                    ),
                    _
                  ) : oa(
                    A.get("content"),
                    A.get("author"),
                    _,
                    A.get("timeStamp"),
                    A.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(q, T, k);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let k = 0; k < y; k++) {
                  const A = T === void 0 || T === !1 ? this._comments[f] : T.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(A, T);
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
function N0(e) {
  const [t, r] = me(e.getComments());
  return z(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function w0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Z(null);
  return z(() => {
    i.current !== null && i.current.focus();
  }, []), z(() => {
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
  }, [n, e]), /* @__PURE__ */ E("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Oe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ E("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ E(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ E("div", { className: "Modal__content", children: t })
  ] }) });
}
function O0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return jn(
    /* @__PURE__ */ E(w0, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Nb() {
  const [e, t] = me(null), r = ke(() => {
    t(null);
  }, []), n = Ze(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ E(O0, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = ke(
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
const R0 = {
  ...fy,
  paragraph: "CommentEditorTheme__paragraph"
};
function $0(...e) {
  return e.filter(Boolean).join(" ");
}
function An({
  "data-test-id": e,
  children: t,
  className: r,
  onClick: n,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ E(
    "button",
    {
      disabled: i,
      className: $0(
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
function q0({
  className: e
}) {
  return /* @__PURE__ */ E(ch, { className: e || "ContentEditable__root" });
}
function I0({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ E("div", { className: t || "Placeholder__root", children: e });
}
const zp = Fl("INSERT_INLINE_COMMAND");
function L0({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = ke(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return z(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Gs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ E("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ E("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ E("i", { className: "icon add-comment" }) }) });
}
function D0({ onEscape: e }) {
  const [t] = fe();
  return z(() => t.registerCommand(
    jl,
    (r) => e(r),
    Or
  ), [t, e]), null;
}
function wb({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ E(ah, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: R0
  }, children: /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ E(
      Jk,
      {
        contentEditable: /* @__PURE__ */ E(q0, { className: e }),
        placeholder: /* @__PURE__ */ E(I0, { children: s }),
        ErrorBoundary: uh
      }
    ),
    /* @__PURE__ */ E(Gk, { onChange: n }),
    /* @__PURE__ */ E(dh, {}),
    t !== !1 && /* @__PURE__ */ E(Vk, {}),
    /* @__PURE__ */ E(D0, { onEscape: r }),
    /* @__PURE__ */ E(Wk, {}),
    i !== void 0 && /* @__PURE__ */ E(lh, { editorRef: i })
  ] }) });
}
function Ob(e, t) {
  return ke(
    (r, n) => {
      r.read(() => {
        e(Yk()), t(!Xk(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function U0({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = me(""), [s, o] = me(!1), a = Z(null), c = Ze(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), u = $b(), d = ke(() => {
    e.getEditorState().read(() => {
      const g = N();
      if (w(g)) {
        l.current = g.clone();
        const y = g.anchor, b = g.focus, T = Dk(
          e,
          y.getNode(),
          y.offset,
          b.getNode(),
          b.offset
        ), k = a.current;
        if (T !== null && k !== null) {
          const { left: A, bottom: _, width: O } = T.getBoundingClientRect(), q = Uk(e, T);
          let F = q.length === 1 ? A + O / 2 - 125 : A - 125;
          F < 10 && (F = 10), k.style.left = `${F}px`, k.style.top = `${_ + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const S = q.length, { container: W } = c, G = c.elements, ae = G.length;
          for (let te = 0; te < S; te++) {
            const Pe = q[te];
            let xe = G[te];
            xe === void 0 && (xe = document.createElement("span"), G[te] = xe, W.appendChild(xe));
            const Ke = `position:absolute;top:${Pe.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Pe.left}px;height:${Pe.height}px;width:${Pe.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            xe.style.cssText = Ke;
          }
          for (let te = ae - 1; te >= S; te--) {
            const Pe = G[te];
            W.removeChild(Pe), G.pop();
          }
        }
      }
    });
  }, [e, c]);
  Gs(() => {
    d();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), z(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), h = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        Pb(g, [oa(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, p = Ob(i, o);
  return /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ E(
      wb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: p
      }
    ),
    /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ E(An, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ E(
        An,
        {
          onClick: h,
          disabled: !s,
          className: "CommentPlugin_CommentInputBox_Button primary",
          children: "Comment"
        }
      )
    ] })
  ] });
}
function K0({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = me(""), [s, o] = me(!1), a = Z(null), c = $b(), l = Ob(i, o);
  return /* @__PURE__ */ Oe(Vn, { children: [
    /* @__PURE__ */ E(
      wb,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ E(
      An,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(oa(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(Pk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ E("i", { className: "send" })
      }
    )
  ] });
}
function Rb({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Oe(Vn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Oe("div", { className: "Modal__content", children: [
      /* @__PURE__ */ E(
        An,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ E(
        An,
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
  const [i, s] = me(0);
  z(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const d = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(d);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Nb();
  return /* @__PURE__ */ Oe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ E("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Oe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ E("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Oe(Vn, { children: [
      /* @__PURE__ */ E(
        An,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ E(
              Rb,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ E("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function F0({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = fe(), [a, c] = me(0), [l, u] = Nb(), d = Ze(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return z(() => {
    const f = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(f);
    };
  }, [a]), /* @__PURE__ */ E("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const h = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Oe(
      "li",
      {
        onClick: () => {
          const g = s.get(h);
          if (g !== void 0 && (e === null || e.indexOf(h) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const b = Array.from(g)[0], T = se(b);
                Me(T) && T.selectStart();
              },
              {
                onUpdate() {
                  y !== null && y.focus();
                }
              }
            );
          }
        },
        className: `CommentPlugin_CommentsPanel_List_Thread ${s.has(h) ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
        children: [
          /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Oe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ E("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ E(
              An,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ E(
                    Rb,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: g
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ E("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ E("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((g) => /* @__PURE__ */ E(
            Bp,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ E("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ E(
            K0,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      h
    ) : /* @__PURE__ */ E(
      Bp,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      h
    );
  }) });
}
function z0({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ E("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ E("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ E(
      F0,
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
function $b() {
  const e = fh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function B0({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = fh(), [a] = fe(), c = Ze(() => {
    const F = new P0(a, s);
    return r && F.registerOnChange(r), t?.(F), F;
  }, [a, s, r, t]), l = N0(c), u = Ze(() => /* @__PURE__ */ new Map(), []), [d, f] = me(), [h, p] = me([]), [g, y] = me(!1), [b, T] = me(!1), { yjsDocMap: k } = o;
  z(() => {
    if (e) {
      const F = e("comments", k);
      return c.registerCollaboration(F);
    }
    return () => {
    };
  }, [c, e, k]);
  const A = ke(() => {
    a.update(() => {
      const F = N();
      F !== null && (F.dirty = !0);
    }), y(!1);
  }, [a]), _ = ke(
    (F, S) => {
      if (F.type === "comment") {
        const W = c.deleteCommentOrThread(F, S);
        if (!W)
          return;
        const { markedComment: G, index: ae } = W;
        c.addComment(G, S, ae);
      } else {
        c.deleteCommentOrThread(F);
        const W = S !== void 0 ? S.id : F.id, G = u.get(W);
        G !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ae of G) {
              const te = se(ae);
              Me(te) && (te.deleteID(bn, W), te.hasNoIDsForEveryType() && Ro(te));
            }
          });
        });
      }
    },
    [c, a, u]
  ), O = ke(
    (F, S, W, G) => {
      c.addComment(F, W), S && (a.update(() => {
        w(G) && Nh(G, bn, F.id);
      }), y(!1));
    },
    [c, a]
  );
  z(() => {
    const F = [];
    let S;
    for (const W of h) {
      const G = u.get(W);
      if (G !== void 0)
        for (const ae of G) {
          const te = a.getElementByKey(ae);
          te !== null && (te.classList.add("selected"), F.push(te), S = window.setTimeout(() => {
            T(!0);
          }, 0));
        }
    }
    return () => {
      S !== void 0 && window.clearTimeout(S);
      for (const W of F)
        W.classList.remove("selected");
    };
  }, [h, a, u]), z(() => {
    if (!a.hasNodes([dt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const F = /* @__PURE__ */ new Map();
    return Re(
      oh(
        a,
        dt,
        (S) => Os(S.getTypedIDs()),
        (S, W) => {
          for (const [G, ae] of Object.entries(S.getTypedIDs()))
            ae.forEach((te) => {
              W.addID(G, te);
            });
        }
      ),
      a.registerMutationListener(
        dt,
        (S) => {
          a.getEditorState().read(() => {
            for (const [W, G] of S) {
              const ae = se(W);
              let te = [];
              G === "destroyed" ? te = F.get(W) ?? [] : Me(ae) && (te = ae.getTypedIDs()[bn] ?? []);
              for (const Pe of te) {
                let xe = u.get(Pe);
                F.set(W, te), G === "destroyed" ? xe !== void 0 && (xe.delete(W), xe.size === 0 && u.delete(Pe)) : (xe === void 0 && (xe = /* @__PURE__ */ new Set(), u.set(Pe, xe)), xe.has(W) || xe.add(W));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: S, tags: W }) => {
        S.read(() => {
          const G = N();
          let ae = !1, te = !1;
          if (w(G)) {
            const Pe = G.anchor.getNode();
            if (M(Pe)) {
              const xe = Dx(Pe, bn, G.anchor.offset) ?? [];
              xe !== null && (p(xe), ae = !0), G.isCollapsed() || (f(Pe.getKey()), te = !0);
            }
          }
          ae || p((Pe) => Pe.length === 0 ? Pe : []), te || f(null), !W.has("collaboration") && w(G) && y(!1);
        });
      }),
      a.registerCommand(
        zp,
        () => {
          const S = window.getSelection();
          return S !== null && S.removeAllRanges(), y(!0), !0;
        },
        Hn
      )
    );
  }, [a, u]);
  const q = () => {
    a.dispatchCommand(zp, void 0);
  };
  return /* @__PURE__ */ Oe(Vn, { children: [
    g && jn(
      /* @__PURE__ */ E(
        U0,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: O
        }
      ),
      document.body
    ),
    d != null && !g && jn(
      /* @__PURE__ */ E(
        L0,
        {
          anchorKey: d,
          editor: a,
          showComments: b,
          onAddComment: q
        }
      ),
      document.body
    ),
    n !== null && jn(
      /* @__PURE__ */ E(
        An,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => T(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ E("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && jn(
      /* @__PURE__ */ E(
        z0,
        {
          comments: l,
          submitAddComment: O,
          deleteCommentOrThread: _,
          activeIDs: h,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function j0() {
  const e = Z(void 0), t = ke((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function V0(e, t) {
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
function W0(e, t) {
  z(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      V0(r, t);
    };
  }, [t, e]);
}
const Lw = Pn(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = me(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: h, options: { isReadonly: p, view: g } = {} } = t, y = (p ?? !1) || Ks(g), [b, T] = j0();
  W0(f, b), z(() => {
    if (process.env.NODE_ENV !== "production") {
      const _ = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      h?.warn(_), h || console.warn(_);
    }
  }, [h]), aa(r, () => ({
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
    setTransientInput(_) {
      n.current?.setTransientInput(_);
    },
    setUsj(_) {
      n.current?.setUsj(_);
    },
    applyUpdate(_, O) {
      n.current?.applyUpdate(_, O);
    },
    replaceEmbedUpdate(_, O) {
      return n.current?.replaceEmbedUpdate(_, O);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    getSelectedParaMarker() {
      return n.current?.getSelectedParaMarker();
    },
    setSelection(_) {
      n.current?.setSelection(_);
    },
    setAnnotation(_, O, q, F, S) {
      typeof F == "function" || F === void 0 ? n.current?.setAnnotation(_, O, q, F, S) : n.current?.setAnnotation(_, O, q, F);
    },
    removeAnnotation(_, O) {
      n.current?.removeAnnotation(_, O);
    },
    formatPara(_) {
      n.current?.formatPara(_);
    },
    getElementByKey(_) {
      return n.current?.getElementByKey(_);
    },
    removeCharacterMarker(_) {
      return n.current?.removeCharacterMarker(_) ?? !1;
    },
    replaceCharacterMarker(_, O) {
      return n.current?.replaceCharacterMarker(_, O) ?? !1;
    },
    extendCharacterMarker(_, O) {
      return n.current?.extendCharacterMarker(_, O) ?? !1;
    },
    insertMarker(_) {
      return n.current?.insertMarker(_);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(_, O) {
      return n.current?.applyMarkerMenuSelection(_, O);
    },
    splitParagraphWithMarker(_) {
      n.current?.splitParagraphWithMarker(_);
    },
    commitTypedMarker(_, O) {
      return n.current?.commitTypedMarker(_, O) ?? !1;
    },
    commitTypedCloser(_) {
      return n.current?.commitTypedCloser(_) ?? !1;
    },
    insertNote(_, O, q) {
      n.current?.insertNote(_, O, q);
    },
    selectNote(_) {
      n.current?.selectNote(_);
    },
    selectAfterNote(_) {
      n.current?.selectAfterNote(_);
    },
    selectNoteTextOffset(_, O, q) {
      n.current?.selectNoteTextOffset(_, O, q);
    },
    getNoteOps(_) {
      return n.current?.getNoteOps(_);
    },
    getOpsAfterNote(_) {
      return n.current?.getOpsAfterNote(_);
    },
    takeOpsAfterNote(_) {
      return n.current?.takeOpsAfterNote(_);
    },
    getNoteIndex(_) {
      return n.current?.getNoteIndex(_);
    },
    getNoteKey(_) {
      return n.current?.getNoteKey(_);
    },
    highlightNote(_) {
      n.current?.highlightNote(_);
    },
    setComments(_) {
      b.current?.setComments(_), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const k = ke(
    (_, O, q, F) => {
      if (!u) return;
      const S = b.current?.getComments();
      u(_, S, O, q, F);
    },
    [b, u]
  ), A = ke(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const _ = b.current?.getComments();
    l(_);
  }, [b, i, l]);
  return z(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ E(Hk, { children: /* @__PURE__ */ Oe(Eb, { ref: n, onUsjChange: k, ...f, children: [
    /* @__PURE__ */ E(
      B0,
      {
        setCommentStore: T,
        onChange: A,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ E("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Bn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function H0(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function G0(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const J0 = /^[#\w().,%/\s-]+$/;
function Gr(e) {
  return e != null;
}
const Y0 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, X0 = {
  left: "right",
  right: "left"
}, Q0 = "var(--usj-font-fallback, serif)";
function qb(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${H0(i)}"`).join(", ")}, ${Q0}`;
}
const ql = ".editor-input.usfm", Z0 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function ew(e) {
  return Z0.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${ql}".`
  ), ql);
}
function tw(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(qb(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (J0.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Gr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Gr(t.firstLineIndent) && s.push(`text-indent: ${Bn(t.firstLineIndent * 20 * r)}vw`), Gr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Bn(t.leftMargin * 20 * r)}vw`), Gr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Bn(t.rightMargin * 20 * r)}vw`
  ), Gr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Bn(t.spaceBefore * r)}pt`), Gr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Bn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = Y0[n ? X0[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const jp = { c: 150, ca: 133, cp: 150 };
function Vp(e, t) {
  return e && Gr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function rw(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Gr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Vp(e.markers.c, jp.c);
  return ["ca", "cp"].map((i) => {
    const s = Vp(
      e.markers[i],
      jp[i]
    ), o = Bn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function Dw(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = ql } = t, s = ew(i), o = [], a = [];
  e.defaultFont && a.push(qb(e.defaultFont)), Gr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Bn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = tw(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${G0(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...rw(e, s)), o.join(`
`);
}
export {
  im as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  Iw as Editorial,
  Ps as GENERATOR_NOTE_CALLER,
  hh as HIDDEN_NOTE_CALLER,
  Lw as Marginal,
  x as MarkerType,
  nm as PARAGRAPH_STRUCTURE_VIEW_MODE,
  qu as STANDARD_VIEW_MODE,
  Uo as defaultStyleInfo,
  qw as directionToNames,
  CS as filterAndRankItems,
  Dw as generateUsjCss,
  Rw as getDefaultViewMode,
  va as getDefaultViewOptions,
  h1 as getEnterMenuItems,
  p1 as getMarkerMenuItems,
  $w as getViewMode,
  Du as getViewOptions,
  Ks as isBlockVerseLayout,
  gn as isInsertEmbedOpOfType,
  qS as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
