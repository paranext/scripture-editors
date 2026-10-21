import { jsx as M, jsxs as $e, Fragment as Vn } from "react/jsx-runtime";
import { forwardRef as Pn, useState as xe, useRef as ee, useCallback as Se, useEffect as j, useMemo as et, memo as ek, createContext as Jp, useContext as Yp, Children as tk, isValidElement as rk, cloneElement as nk, useImperativeHandle as aa, useLayoutEffect as Gs } from "react";
import { assertSafeKey as ot, isValidBookCode as ik, MARKER_OBJECT_PROPS as sk, USJ_VERSION as br, USJ_TYPE as kr, isUsjTextContentLocation as ok, indexesFromUsjJsonPath as Xp, isUsjAttributeKeyLocation as ak, isUsjAttributeMarkerLocation as ck, isUsjClosingAttributeMarkerLocation as lk, isUsjMarkerLocation as uk, isUsjClosingMarkerLocation as dk, isUsjPropertyValueLocation as fk, getUsjDocumentLocationTypeName as pk, usjJsonPathFromIndexes as In, EMPTY_USJ as Qp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as nt, $parseSerializedNode as Wn, DecoratorNode as Js, ElementNode as Cr, isHTMLElement as ii, createState as ca, $getState as ue, $setState as Rt, $isRangeSelection as N, $isElementNode as L, $isTextNode as v, $getSelection as P, $isNodeSelection as si, ParagraphNode as Ll, TextNode as tt, $createTextNode as Ne, $getCommonAncestor as hk, $createNodeSelection as Dl, $setSelection as zt, $isLineBreakNode as oi, $getEditor as Lr, NODE_STATE_KEY as Ys, $hasUpdateTag as gk, $getNodeByKey as oe, $getRoot as Xe, $createRangeSelection as kn, $createPoint as gr, SELECTION_CHANGE_COMMAND as Bt, $getCharacterOffsets as Ul, KEY_DOWN_COMMAND as Sr, COMMAND_PRIORITY_HIGH as Oe, HISTORY_MERGE_TAG as Kl, DELETE_CHARACTER_COMMAND as Ji, DELETE_WORD_COMMAND as Fl, DELETE_LINE_COMMAND as Po, COMMAND_PRIORITY_NORMAL as $r, CONTROLLED_TEXT_INSERTION_COMMAND as Yi, COMMAND_PRIORITY_CRITICAL as fe, PASTE_COMMAND as sr, CUT_COMMAND as jt, REMOVE_TEXT_COMMAND as Zp, CLICK_COMMAND as Li, COMMAND_PRIORITY_LOW as ht, COMMAND_PRIORITY_EDITOR as Hn, createCommand as la, isDOMNode as Es, $getNearestNodeFromDOMNode as Yr, $isRootNode as eh, DROP_COMMAND as ua, $isDecoratorNode as Nn, COPY_COMMAND as xn, getDOMSelection as th, isSelectionWithinEditor as rh, $createRangeSelectionFromDom as zl, isDOMTextNode as mk, BLUR_COMMAND as Bl, $addUpdateTag as vt, SKIP_DOM_SELECTION_TAG as pr, CLEAR_HISTORY_COMMAND as yk, INSERT_PARAGRAPH_COMMAND as As, INSERT_LINE_BREAK_COMMAND as bk, $getPreviousSelection as kk, KEY_ESCAPE_COMMAND as jl, BEFORE_INPUT_COMMAND as xk, COMPOSITION_START_COMMAND as Tk, DRAGSTART_COMMAND as Rc, FOCUS_COMMAND as Vl, $isRootOrShadowRoot as Ck, CAN_UNDO_COMMAND as Sk, CAN_REDO_COMMAND as _k, getDOMSelectionFromTarget as vk, $onUpdate as nh, KEY_ENTER_COMMAND as ih, LineBreakNode as sh, $copyNode as Mk, createEditor as Ek, SELECT_ALL_COMMAND as Ak, isExactShortcutMatch as Pk, getDOMTextNode as Nk, HISTORIC_TAG as Wl, UNDO_COMMAND as oh, REDO_COMMAND as ah, CLEAR_EDITOR_COMMAND as wk } from "lexical";
import { addClassNamesToElement as ki, removeClassNamesFromElement as Ja, $findMatchingParent as we, $dfsIterator as da, $dfs as ai, mergeRegister as qe, registerNestedElementResolver as ch, $unwrapNode as $c, IS_APPLE as Gn } from "@lexical/utils";
import { useLexicalNodeSelection as Ok } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Zt } from "fast-equals";
import ys from "quill-delta";
import { useLexicalComposerContext as pe } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as Rk } from "unicode-segmenter/grapheme";
import { copyToClipboard as $k, $getLexicalContent as qk } from "@lexical/clipboard";
import { TreeView as Ik } from "@lexical/react/LexicalTreeView";
import * as Lk from "react-dom";
import { createPortal as jn } from "react-dom";
import { LexicalComposer as lh } from "@lexical/react/LexicalComposer";
import { ContentEditable as uh } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as dh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as fh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as ph } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Dk } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Uk, createDOMRange as Kk, createRectsFromDOMRange as Fk } from "@lexical/selection";
import { autoUpdate as zk, computePosition as Bk, shift as jk, flip as Vk } from "@floating-ui/dom";
import { $generateNodesFromDOM as Wk } from "@lexical/html";
import { AutoFocusPlugin as Hk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Gk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as hh, LexicalCollaboration as Jk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Yk } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Xk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Qk, $isRootTextContentEmpty as Zk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as ex } from "@lexical/yjs";
import { Array as $d, Map as qd, YArrayEvent as tx } from "yjs";
const Ya = (e) => nt(Wn(e)), rx = {
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
  return rx[e];
}
const D = " ", No = "​", cr = D, Hl = `${D}|`, or = "p", Ps = "+", mh = "-", wo = "chapter", qc = "verse", Id = "invalid", nx = "text-spacing", ix = "formatted-font", sx = "marker-", Gl = "external-usj-mutation", yh = "selection-change", $t = "cursor-change", Ic = "annotation-change", Ns = "delta-change", bh = "marker-settle", ox = [
  Gl,
  yh,
  $t,
  Ic,
  Ns
], Jn = "zmsc-s", Ri = "zmsc-e", ax = [Jn, Ri], cx = [
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
], kh = 1, Jl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], lx = Jl.filter((e) => e !== "sid" && e !== "eid");
class xr extends Js {
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
    return new xr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Th().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (cx.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: kh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function xh(e) {
  return ax.includes(e);
}
function Th(e, t, r, n, i) {
  return nt(new xr(e, t, r, n, void 0, i));
}
function st(e) {
  return e instanceof xr;
}
const Yl = "f", ux = [
  // Footnote
  Yl,
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
const dx = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Ch = 1;
class Ie extends Cr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Yl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (mo(t) === "crossref" ? mh : Ps), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Ie(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => px(t) ? {
        conversion: fx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Xl().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (ux.includes(t) || (r?.includes(t) ?? !1));
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
      version: Ch
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
function fx(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Xl(t, r, n) };
}
function Xl(e, t, r, n, i) {
  return nt(new Ie(e, t, r, n, i));
}
function px(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ie.isValidMarker(t) && e.classList.contains(Ie.getType());
}
function V(e) {
  return e instanceof Ie;
}
var C;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(C || (C = {}));
var x;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(x || (x = {}));
const Lc = {
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
}, Ld = {
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
function qr(e) {
  const t = Object.hasOwn(Lc, e) ? Lc[e] : void 0, r = Object.hasOwn(Ld, e) ? Ld[e] : void 0;
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
const Sh = "v", _h = "c", Dn = "fig", Dd = "tr", Dc = "esb", vh = "esbe", Ud = "periph", Kd = "alt", Fd = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, hx = {
  "": "start",
  c: "center",
  r: "end"
};
function zd(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Bd(e) {
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
const gx = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function mx(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === No && s + 1 < e.length && Bd(e[s + 1]) || (Bd(o) ? (r || (i = t.length, t += o), r = !0) : gx.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function yx(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function bx(e, t) {
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
const kx = /^(?:qt[1-5]?|ts)-[se]$/;
function Ql(e) {
  return kx.test(e) || xh(e);
}
function Xa(e, t) {
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
function xx(e, t, r) {
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
      a(mx(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = bx(e, i + 1);
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
    if (l === Sh) {
      const { word: g, next: y } = Xa(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === _h) {
      const { word: g, next: y } = Xa(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === x.Note || h === void 0 && Ie.isValidMarker(l)) {
      const { word: g, next: y } = Xa(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === x.Milestone || h === void 0 && Ql(l)) {
      const g = Ax(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), b = y === -1 ? e.length : y;
        o(e.slice(c, b)), i = b;
      }
      continue;
    }
    h === x.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : h === x.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Oo(p) ? (d(), Oo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Dc || l === vh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const jd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Oo(e) {
  return Object.hasOwn(jd, e) ? jd[e] : void 0;
}
function Tx(e) {
  return Oo(e) !== void 0;
}
const Cx = /([-\w]+)\s*=\s*"(.*?)"/g, Sx = /[\s\u200B]*[\n\r][\s\u200B]*/g, Mh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function fa(e) {
  return Mh[e];
}
const _x = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function vx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ws(e, t, r = Mh[t]) {
  const n = e.replace(Sx, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Cx)];
  if (s.length > 0) {
    if (!vx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      _x.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function pa(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Mx(e) {
  const t = zr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Ex(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ws(e.slice(n + 1, i), r, pa(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Ax(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ws(s.slice(o + 1), r, pa(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Ex(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Nr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", D);
}
function fn(e) {
  return e.content || (e.content = []), e.content;
}
function zr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? fn(u) : d ? fn(d) : r;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? fn(o[o.length - 1].object) : fn(s);
    if (o.length > 0)
      return fn(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: or, content: [] }, f().push(i);
    }
    return fn(i);
  }, g = (X) => {
    const A = h();
    typeof X == "string" && typeof A[A.length - 1] == "string" ? A[A.length - 1] = A[A.length - 1] + X : A.push(X);
  }, y = (X) => {
    for (let A = X; A < o.length; A += 1) {
      const te = o[A].object;
      te.closed = "false";
    }
  }, b = () => {
    y(0), o.length = 0;
  }, T = (X) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, X || (s.closed = "false"), s = void 0);
  }, k = () => {
    c = void 0, l = void 0;
  }, E = (X, A, te) => {
    b();
    const [, he, Ee, lt] = te, bt = {
      type: "table:cell",
      marker: lt ? A.slice(0, A.indexOf("-")) : A,
      align: hx[he],
      content: []
    };
    lt && (bt.colspan = String(Number(lt) + 1 - Number(Ee))), fn(X).push(bt), i = bt;
  }, S = (X) => {
    u && (X || (u.closed = "false"), u = void 0);
  }, O = () => {
    d = void 0;
  };
  let q, F = "", B;
  const ae = () => {
    F && g(Nr(F)), F = "";
  }, Q = (X = !1) => {
    q?.type === "sidebar" ? F = "" : X && F.endsWith(`
`) && (F = F.slice(0, -1)), q = void 0, ae();
  }, ge = () => {
    if (!B)
      return;
    const X = { type: "char", marker: B.marker, content: [] };
    B.value && (X.content = [Nr(B.value)]), h().push(X), o.push({ object: X }), B = void 0;
  }, ne = (X, A) => {
    p = !1, k(), b(), T(!1), i = { type: "para", marker: X, content: [] }, A && (i.content = [Nr(A)]), f().push(i);
  }, $ = () => {
    B && (ne(B.marker, B.value), B = void 0);
  };
  let G;
  const ye = (X) => {
    if (!G)
      return;
    let { value: A } = G;
    G = void 0, X && A.endsWith(`
`) && (A = A.slice(0, -1));
    const te = A.indexOf("|"), he = te >= 0 ? ws(A.slice(te + 1), Ud) : void 0, Ee = te >= 0 ? A.slice(0, te) : A, lt = te >= 0 && (!he || !!Ee && !!he[Kd]), bt = lt ? void 0 : he, ie = lt ? A : Ee, Qe = {
      type: "periph",
      ...ie ? { [Kd]: Nr(ie) } : {},
      ...bt
    };
    Qe.content = [], f().push(Qe), d = Qe, i = void 0;
  };
  let be;
  const z = () => {
    if (be) {
      if (be.shape === "para")
        ne(Dn, be.value);
      else {
        const X = { type: "char", marker: Dn, content: [] };
        be.value && (X.content = [Nr(be.value)]), h().push(X), o.push({ object: X });
      }
      be = void 0;
    }
  }, Y = xx(e, t?.getMarker ?? qr, n);
  for (let X = 0; X < Y.length; X++) {
    const A = Y[X];
    if (B) {
      if (A.kind === "text") {
        B.value += A.text;
        continue;
      }
      if (B.shape === "char" && A.kind === "end" && A.marker.replace(/^\+/, "") === B.marker) {
        if (B.value.trim() === "") {
          h().push({ type: "char", marker: B.marker, content: [] }), B = void 0, Q();
          continue;
        }
        Object.assign(B.target, {
          [B.attrName]: Nr(B.value.trim())
        });
        const te = B.marker;
        if (B = void 0, te === "ca") {
          const he = Y[X + 1];
          he?.kind === "text" && /^[\s\u200B]*$/.test(he.text) && X++;
        }
        continue;
      }
      if (B.shape === "para" && (A.kind === "para" || A.kind === "chapter")) {
        const te = B.value.replace(/[\s\u200B]+$/, "");
        te === "" ? (ne(B.marker), B = void 0) : (Object.assign(B.target, { [B.attrName]: Nr(te) }), B = void 0);
      } else {
        q = void 0, (A.kind === "para" || A.kind === "chapter") && B.value.endsWith(`
`) && (B.value = B.value.slice(0, -1)), B.shape === "para" ? $() : ge(), X--;
        continue;
      }
    }
    if (G) {
      if (A.kind === "text" || A.kind === "optbreak") {
        G.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      ye(A.kind === "para" || A.kind === "chapter"), X--;
      continue;
    }
    if (be) {
      if (A.kind === "text" || A.kind === "optbreak") {
        be.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      if (A.kind === "end" && A.marker.replace(/^\+/, "") === Dn) {
        const te = be.value.indexOf("|"), he = te >= 0 ? ws(be.value.slice(te + 1), Dn) : void 0;
        if (he) {
          const Ee = {};
          for (const [ie, Qe] of Object.entries(he))
            Ee[ie === "src" ? "file" : ie] = Qe;
          const lt = {
            type: "figure",
            marker: Dn,
            ...Ee
          }, bt = be.value.slice(0, te);
          bt && (lt.content = [Nr(bt)]), g(lt), be = void 0;
          continue;
        }
      }
      z(), X--;
      continue;
    }
    if (q)
      if (A.kind === "text") {
        if (A.text.includes(`
`) && /^[\s\u200B]*$/.test(A.text)) {
          F += A.text;
          continue;
        }
        Q();
      } else if (A.kind === "charOpen" || A.kind === "para") {
        const te = A.kind === "para" || !A.isNested ? Oo(A.marker) : void 0;
        if (te && te.targetTypes.includes(q.type)) {
          F = "", B = {
            target: q,
            attrName: te.attrName,
            marker: A.marker,
            shape: te.shape,
            value: ""
          };
          continue;
        }
        Q(A.kind === "para");
      } else
        Q(A.kind === "chapter");
    if (!s && !n && (A.kind === "charOpen" && !A.isNested && A.marker === Dn || A.kind === "para" && A.marker === Dn)) {
      b(), be = { shape: A.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (A.kind) {
      case "text": {
        let te = A.text;
        if (!s && te.endsWith(`
`)) {
          const he = Y[X + 1];
          (he === void 0 || he.kind === "para" || he.kind === "chapter") && (te = te.slice(0, -1));
        }
        te && g(Nr(te));
        break;
      }
      case "para": {
        const te = !s && !n;
        if (te && A.marker === Dd) {
          b(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Dd, content: [] }, fn(c).push(l), i = l, p = !1;
          break;
        }
        if (te && l) {
          const he = Fd.exec(A.marker);
          if (he && zd(he)) {
            E(l, A.marker, he);
            break;
          }
        }
        if (k(), !n && A.marker === Dc) {
          b(), T(!1), S(!1);
          const he = {
            type: "sidebar",
            marker: Dc,
            content: []
          };
          f().push(he), u = he, i = void 0, q = u, p = !1;
          break;
        }
        if (A.marker === vh && u) {
          b(), T(!1), S(!0), i = void 0;
          break;
        }
        if (!n && A.marker === Ud) {
          b(), T(!1), S(!1), O(), G = { value: "" }, i = void 0, p = !1;
          break;
        }
        ne(A.marker);
        break;
      }
      case "verse": {
        T(!1);
        const te = { type: "verse", marker: Sh, number: A.number };
        g(te), q = te;
        break;
      }
      case "chapter": {
        b(), T(!1), k(), S(!1), O(), i = void 0;
        const te = {
          type: "chapter",
          marker: _h,
          number: A.number
        };
        r.push(te), q = te, p = !0;
        break;
      }
      case "note": {
        T(!1);
        const te = h();
        s = { type: "note", marker: A.marker, caller: A.caller, content: [] }, a = o.length, te.push(s), q = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !A.isNested) {
          const Ee = Fd.exec(A.marker);
          if (Ee && zd(Ee)) {
            E(l, A.marker, Ee);
            break;
          }
        }
        if (!A.isNested) {
          const Ee = s ? a : 0;
          y(Ee), o.length = Ee;
        }
        const te = h(), he = { type: "char", marker: A.marker, content: [] };
        te.push(he), o.push({ object: he });
        break;
      }
      case "end": {
        const te = A.marker.replace(/^\+/, ""), he = s ? a : 0, Ee = o.findLastIndex((lt, bt) => bt >= he && lt.object.marker === te);
        Ee >= 0 ? (Px(o[Ee].object), y(Ee + 1), o.length = Ee) : s && s.marker === te ? T(!0) : (y(he), o.length = he, g({ type: "unmatched", marker: `${A.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: A.marker, ...A.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (G && ye(!0), be && z(), B)
    if (B.shape === "para") {
      const X = B.value.replace(/[\s\u200B]+$/, "");
      X === "" ? ne(B.marker) : Object.assign(B.target, { [B.attrName]: Nr(X) }), B = void 0;
    } else
      B.value.endsWith(`
`) && (B.value = B.value.slice(0, -1)), ge();
  b(), T(!1), S(!1);
  const se = (X) => {
    for (const A of X)
      typeof A != "string" && A.content && (se(A.content), A.content.length === 0 && delete A.content);
  };
  return se(r), r;
}
function Px(e) {
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
}), me = ca("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Br = "marker-trailing-space", Eh = 1, Nx = "marker", Zl = ca("isGutterMarker", {
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
      span: (t) => Ox(t) ? {
        conversion: wx,
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
      version: Eh
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
function wx(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Xr(t, r) };
}
function Xr(e, t) {
  return nt(new nn(e, t));
}
function Ah(e) {
  return Rt(Xr(Nx, e), Zl, !0);
}
function Qr(e) {
  return Vt(e) && ue(e, Zl);
}
function Ox(e) {
  return e?.tagName === "span";
}
function Vt(e) {
  return e instanceof nn;
}
function Ph(e) {
  return e?.type === nn.getType();
}
const bn = "internal-comment", Rx = [bn], Nh = Object.freeze({}), Uc = Object.freeze({}), Kc = Object.freeze({}), Fc = Object.freeze({}), zc = Object.freeze({}), $x = 1, xi = /* @__PURE__ */ new Map(), ls = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map();
class ft extends Cr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Nh, r, n, i, s, o) {
    super(o), this.__typedIDs = yo(t), this.__typedOnClicks = Qa(r), this.__typedOnRemoves = Za(n), this.__typedOnMouseEnters = ec(i), this.__typedOnMouseLeaves = tc(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = yo(t.__typedIDs), n = Qa(t.__typedOnClicks), i = Za(t.__typedOnRemoves), s = ec(t.__typedOnMouseEnters), o = tc(t.__typedOnMouseLeaves);
    return new ft(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Rx.includes(t);
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
      version: $x
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
      c !== l && (c === 0 ? l === 1 && ki(r, u) : l === 0 && Ja(r, u), c === 1 ? l === 2 && ki(r, d) : l === 1 && Ja(r, d));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ja(r, Un("annotationId", h));
      for (const h of a)
        f.has(h) || ki(r, Un("annotationId", h));
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
    const r = this.getWritable(), n = yo(r.__typedIDs);
    r.__typedIDs = yo(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ro(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Qa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Pe(t) ? xi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Za(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Pe(t) ? ls.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = ec(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Pe(t) ? Ti.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = tc(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Pe(t) ? Ci.get(t.getKey()) ?? {} : {};
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Uc) {
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
    if (!this.__typedOnClicks || this.__typedOnClicks === Uc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Kc) {
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Kc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Fc) {
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Fc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === zc) {
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === zc) {
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
    const i = qx(t, r);
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
    for (; Pe(t) && Wd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Pe(r) && Wd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Ix(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Lx(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Dx(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ux(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function yo(e = Nh) {
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
function Qa(e) {
  if (!e || e === Uc)
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
function Za(e) {
  if (!e || e === Kc)
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
function ec(e) {
  if (!e || e === Fc)
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
function tc(e) {
  if (!e || e === zc)
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
function pn(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Vd(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function qx(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Wd(e, t) {
  const r = Vd(e), n = Vd(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Dx(e, t) {
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
function Ux(e, t) {
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
function Hd(e) {
  return `external-${e}`;
}
function Os(e, t, r, n, i) {
  return nt(new ft(e, t, r, n, i));
}
function Pe(e) {
  return e instanceof ft;
}
function wh(e) {
  return e?.type === ft.getType();
}
function Ro(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Oh(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let h, g;
  for (let y = 0; y < u; y++) {
    const b = a[y];
    if (L(g) && g.isParentOf(b))
      continue;
    const T = y === 0, k = y === u - 1;
    let E = null;
    if (v(b)) {
      const S = b.getTextContentSize(), O = T ? f : 0, q = k ? p : S;
      if (O === 0 && q === 0)
        continue;
      const F = b.splitText(O, q);
      E = F.length > 1 && (F.length === 3 || T && !k || q === S) ? F[1] : F[0];
    } else {
      if (Pe(b))
        continue;
      L(b) && b.isInline() && (E = b);
    }
    if (E !== null) {
      if (E && E.is(h))
        continue;
      const S = E.getParent();
      (S == null || !S.is(h)) && (g = void 0), h = S, g === void 0 && (g = Os(), g.addID(t, r, n, i, s, o), E.insertBefore(g)), g.append(E);
    } else
      h = void 0, g = void 0;
  }
  t === bn && L(g) && (d ? g.selectStart() : g.selectEnd());
}
function Kx(e, t, r) {
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
const Fx = ["type", "marker", "content"], Bc = "unknown", Rh = 1, zx = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ci extends Cr {
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
      [Bc]: (t) => jx(t) ? {
        conversion: Bx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return eu().updateFromJSON(t);
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
    return zx.has(this.getTag());
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
    const t = document.createElement(Bc);
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
      version: Rh
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
    const r = t ?? P();
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
function Bx(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: eu(t, r) };
}
function eu(e, t, r) {
  return nt(new ci(e, t, r));
}
function jx(e) {
  return e?.tagName.toLowerCase() === Bc;
}
function Ve(e) {
  return e instanceof ci;
}
const $h = 1, Vx = "attribute-run";
function rc(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class sn extends Cr {
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
    return qh(t.runKind).updateFromJSON(t);
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
    t.classList.add(Vx);
    const r = rc(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = rc(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = rc(this.__runKind);
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
      version: $h
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
function qh(e) {
  return nt(new sn(e));
}
function je(e) {
  return e instanceof sn;
}
const Rs = "id", Ih = 1, Wx = [
  "type",
  "marker",
  "code",
  "content"
];
class Wt extends Cr {
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
    return Lh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return ik(t);
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
      version: Ih
    };
  }
}
function Lh(e, t) {
  return nt(new Wt(e, t));
}
function Me(e) {
  return e instanceof Wt;
}
function tu(e) {
  return e?.type === Wt.getType();
}
const $o = "c", Dh = 1, Hx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Yt extends Cr {
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
    return Uh().updateFromJSON(t);
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
      version: Dh
    };
  }
}
function Uh(e, t, r, n, i) {
  return nt(new Yt(e, t, r, n, i));
}
function Ue(e) {
  return e instanceof Yt;
}
function Gx(e) {
  return e?.type === Yt.getType();
}
const Kh = [
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
], Fh = [
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
], Jx = [
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
  ...Kh,
  ...Fh
], zh = 1, Yx = ["type", "marker", "content"];
class ve extends Cr {
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
    return new ve(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Jx.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Kh.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Fh.includes(t);
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
    return ve.isValidFootnoteMarker(t) || ve.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Qx(t) ? {
        conversion: Xx,
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
    return Gd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Gd(r, this.__marker, n)), !1;
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
      version: zh
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
function Gd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Xx(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Zr(t) };
}
function Zr(e, t) {
  return nt(new ve(e, t));
}
function Qx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ve.isValidMarker(t) && e.classList.contains(ve.getType());
}
function K(e) {
  return e instanceof ve;
}
function Zx(e) {
  return e?.type === ve.getType();
}
const Bh = 1, eT = "c", jh = "span";
class jr extends Js {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = eT, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new jr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Vh(t) ? {
        conversion: tT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ru().updateFromJSON(t);
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
    const t = document.createElement(jh);
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
      version: Bh
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
function tT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: ru(t) };
}
function ru(e, t, r, n, i, s) {
  return nt(new jr(e, t, r, n, i, s));
}
function Vh(e) {
  return e ? e.classList.contains(wo) && e.tagName.toLowerCase() === jh : !1;
}
function Xs(e) {
  return e instanceof jr;
}
function rT(e) {
  return e?.type === jr.getType();
}
const Wh = 1;
class Cn extends Ll {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Cn(t.__key);
  }
  static importJSON(t) {
    return mr().updateFromJSON(t);
  }
  getMarker() {
    return or;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Wh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = mr();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function mr() {
  return nt(new Cn());
}
function Dr(e) {
  return e instanceof Cn;
}
function ha(e) {
  return e?.type === Cn.getType();
}
const nT = [
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
], Hh = 1, iT = ["type", "marker", "content"];
class pt extends Ll {
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
    return new pt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (nT.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: sT,
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
      version: Hh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Di(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function sT(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Di(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Di(e, t) {
  return nt(new pt(e, t));
}
function le(e) {
  return e instanceof pt;
}
function nu(e) {
  return e?.type === pt.getType();
}
const qo = "v", Gh = 1, oT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Mt extends tt {
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
    return new Mt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Jh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(qc, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Gh
    };
  }
}
function Jh(e, t, r, n, i, s) {
  return nt(new Mt(e, t, r, n, i, s));
}
function Be(e) {
  return e instanceof Mt;
}
function Yh(e) {
  return e?.type === Mt.getType();
}
const aT = "​", Ui = aT;
var Jd;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Jd || (Jd = {}));
var Yd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Yd || (Yd = {}));
function cT() {
  return Ne(Ui);
}
function lT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Ui, ""));
}
function Qs(e) {
  return e.length > 0 && e.includes(Ui) && e.replaceAll(Ui, "") === "";
}
function Zs(e) {
  return v(e) && Qs(e.getTextContent());
}
function Xh(e) {
  return Gx(e) || rT(e);
}
function rt(e) {
  return Ue(e) || Xs(e);
}
function Qh(e, t) {
  return e.find((r) => rt(r) && r.getNumber() === t.toString());
}
function uT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && rt(r));
}
function jc(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function dT(e) {
  if (!e)
    return;
  if (rt(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !rt(t); )
    t = t.getPreviousSibling();
  if (t && rt(t))
    return t;
}
function Ht(e) {
  return we(e, V) ?? void 0;
}
function fT(e) {
  return Me(e) || Ue(e) || K(e) || Xs(e) || Dr(e) || st(e) || le(e) || V(e) || Be(e) || Ve(e);
}
function iu(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Zh(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Je(e) {
  return ze(e) || Me(e);
}
function ze(e) {
  return le(e) || Dr(e);
}
function pT(e) {
  return nu(e) || ha(e);
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
  const r = ue(t, Yn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function hT(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? hk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function gT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Ki(e) {
  return e?.type === tt.getType();
}
function mT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function yT(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Ke(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ct(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function eg(e, t, r) {
  const n = Ke(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function ar(e, t) {
  let r = Ke(e);
  return t && (r += `${D}${t}`), r += " ", r;
}
function bT(e) {
  const t = e[Ys];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function tg(e) {
  return ng(e) || Ki(e) && bT(e) === "attribute" ? "" : Ki(e) && e.text !== D ? e.text : Zx(e) ? e.children.map((t) => tg(t)).join("") : "";
}
function kT(e) {
  return e.map((r) => tg(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Gt(e) {
  return " " + e + D;
}
function su(e) {
  const t = [];
  for (const r of e) {
    if (!K(r))
      continue;
    const n = rg(r);
    n !== cr && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function rg(e) {
  return R(e) || _r(e) || v(e) && ue(e, me) === "attribute" ? "" : v(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => rg(t)).join("") : "";
}
function _r(e) {
  return Vt(e) && e.getTextType() === "marker";
}
function xt(e) {
  return R(e) || _r(e);
}
function ou(e) {
  if (!e || !xt(e))
    return !1;
  const t = e.getParent();
  return Me(t) && e.is(t.getFirstChild());
}
function ng(e) {
  return lu(e) || Ph(e) && e.textType === "marker";
}
function mn(e) {
  if (!si(e))
    return;
  const t = e.getNodes();
  if (t.length !== 1)
    return;
  const [r] = t, n = au(r.getParent());
  return n?.is(r) ? n : void 0;
}
function Sn(e) {
  const t = mn(e)?.getParent();
  return le(t) ? t : void 0;
}
function au(e) {
  if (!le(e))
    return;
  const t = e.getFirstChild();
  if (Qr(t))
    return we(e, Ve) ? void 0 : t;
}
const Ai = /* @__PURE__ */ new WeakMap();
function xT(e) {
  return Ai.set(e, (Ai.get(e) ?? 0) + 1), () => {
    const t = (Ai.get(e) ?? 1) - 1;
    t > 0 ? Ai.set(e, t) : Ai.delete(e);
  };
}
function TT() {
  const e = Lr();
  return e.isEditable() && (Ai.get(e) ?? 0) > 0;
}
function CT(e) {
  if (!au(e.getParent())?.is(e) || !TT())
    return !1;
  const t = Dl();
  return t.add(e.getKey()), zt(t), !0;
}
function Xd(e, t) {
  ST(e, t), e.setMarker(t);
}
function ST(e, t) {
  const r = e.getMarker(), n = Ke(r), i = Ke(r, !0), s = ct(r), o = ct(r, !0), a = ve.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!xt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (R(c))
        c.setMarker(t);
      else if (_r(c)) {
        const f = l.startsWith(Ke("", !0));
        c.setTextContent(u ? Ke(t, f) : ct(t, f));
      }
    }
  });
}
function Ye(e, t = sk) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Fe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function ig(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function sg(e) {
  if (!N(e))
    return Qd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return Qd(e) ?? t ?? void 0;
  } catch (n) {
    if (ig(n))
      return t ?? void 0;
    throw n;
  }
}
function _T(e, t) {
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
function cu(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function vT(e) {
  return !!e && e.includes("-");
}
function og(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Qd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function eo(e) {
  if (!e)
    return !1;
  if (oi(e) || R(e) || _r(e) || je(e) || Vt(e) && e.getTextType() === "attribute")
    return !0;
  if (v(e)) {
    const t = ue(e, me);
    if (t === Br || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === D || Qs(r))
      return !0;
  }
  return !1;
}
function to() {
  const e = Ne(D);
  return Rt(e, me, Br), e.setMode("token"), e;
}
function MT(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function vr(e) {
  return v(e) && ue(e, me) === Br;
}
function ag(e) {
  const t = e.getFirstChild();
  if (!xt(t) || t === null || vr(t.getNextSibling()))
    return !1;
  const r = P();
  if (!N(r) || !r.isCollapsed())
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
      if (Pe(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === tt.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function ga(e) {
  let t = e.getParent();
  for (; t && Pe(t); )
    t = t.getParent();
  return t;
}
function ET(e, t) {
  return Xi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function AT(e, t) {
  const r = ga(e);
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
function PT(e, t) {
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
function cg(e, t) {
  const r = Xi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (eo(n))
    return cg(e, t + 1);
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
function NT(e, t) {
  if (t <= 0)
    return 0;
  const r = Xi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? wT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function wT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const OT = 1;
class Vr extends tt {
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
    return new Vr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      version: OT
    };
  }
}
function Tt(e, t, r) {
  return nt(new Vr(e, t, void 0, r));
}
function R(e) {
  return e instanceof Vr;
}
function lu(e) {
  return e?.type === Vr.getType();
}
function on(e) {
  return e.getTextContent() === zn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function RT(e) {
  e.setTextContent(zn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function zn(e, t, r = !1) {
  return t === "closing" ? ct(e, r) : t === "selfClosing" ? ct("") : Ke(e, r);
}
const $T = /* @__PURE__ */ new Set(["closed"]);
function Or(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !$T.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function lg(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function ug(e) {
  const t = Object.keys(e).filter((n) => !lx.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function dg(e, t, r, n) {
  return lg(
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
  return e.getChildren().find((t) => R(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function qT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Ts(e) === void 0 && fg(e) === void 0;
}
function fg(e) {
  return e.getChildren().find((t) => v(t) && ue(t, me) === "attribute");
}
function $s(e, t) {
  return ro(e.getNextSibling(), t);
}
const IT = /^[ \u00A0]+$/;
function uu(e) {
  if (on(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ke(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && IT.test(r.slice(t.length));
}
function ro(e, t) {
  let r, n, i, s;
  return je(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), R(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  uu(e) && (r = e, e = e.getNextSibling()), v(e) && ue(e, me) === "attribute" && (n = e, e = e.getNextSibling()), R(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && on(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function en(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!R(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (v(n) && n.getTextContent() === Gt(e.getCaller()))
    return n;
}
function du(e) {
  const t = en(e);
  return t ? ro(t.getNextSibling(), "cat") : {};
}
function ma(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || R(t)) && ue(t, me) !== "attribute")
    return t;
}
function pg(e) {
  const t = ma(e);
  return t ? ro(t.getNextSibling(), "ca") : {};
}
function hg(e) {
  const t = ma(e);
  if (!t)
    return;
  const r = ro(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function gg(e) {
  const t = hg(e);
  return t ? ro(t.getNextSibling(), "cp") : {};
}
function mg(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Be(n))
        return n;
      if (!(R(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && ue(n, me) === "attribute" || K(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || je(n)))
        return;
    }
}
function ya(e) {
  let t, r, n, i, s = e.getNextSibling();
  return je(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), R(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  uu(s) && (t = s, s = s.getNextSibling()), v(s) && ue(s, me) === "attribute" && (r = s, s = s.getNextSibling()), R(s) && s.getMarkerSyntax() === "selfClosing" && on(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function fu(e) {
  return K(ga(e));
}
function pu(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? fu(t) : t.getChildren().some((i) => K(i) && i.getMarker() === r) ? !0 : void 0;
}
function LT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!R(t))
      return;
    const r = pu(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Qi(e) {
  return v(e) && e.getType() === tt.getType() && ue(e, me) !== "attribute";
}
function ba(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !R(t) || !K(r) || !yg(t, r) || !Qi(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function yg(e, t) {
  return e.getMarkerSyntax() === "opening" && pu(e, t) !== void 0;
}
function hu(e, t) {
  if (!yg(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return R(r) ? pu(r, t) === !0 ? "spacer" : void 0 : Qi(r) ? r.getTextContent().startsWith(D) ? void 0 : "prefix" : "spacer";
}
function DT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (R(t) && hu(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function bg(e, t) {
  const r = P();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function kg(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!R(t))
      return;
    const r = hu(t, e);
    if (r !== void 0 && !bg(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        v(n) && n.setTextContent(D + n.getTextContent());
      } else
        t.insertAfter(Ne(D));
  });
}
function xg(e) {
  return e.isAttached() ? e.getChildren().some((t) => R(t) && hu(t, e) !== void 0 && bg(t, e)) : !1;
}
const UT = "file", KT = "src", FT = "colspan", zT = "category", BT = "alt", jT = "closed", VT = "false";
function WT(e) {
  return e[jT] !== VT;
}
function HT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === UT ? KT : t,
    r
  ]));
}
function Tg(e, t) {
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
function Cg(e, t, r) {
  const n = r ?? {}, i = WT(n);
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
        opening: `\\${Tg(t, n[FT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Or(HT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [zT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Or(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [BT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Or(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Or(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const It = { wantsRun: !1, valueText: void 0 }, an = {};
function nc(e, t) {
  if (t === "va")
    return e;
  const r = $s(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function gu(e) {
  const t = P();
  if (!N(t) || !t.isCollapsed())
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
function ka(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = P();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function GT(e) {
  return je(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : R(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && ue(e, me) === "attribute";
}
function JT(e) {
  if (R(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!v(e) || ue(e, me) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!R(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function ic(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Be(t))
      return t;
    if (!GT(t))
      return;
  }
}
function Zd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Be(t),
    ownerOf: (t) => {
      if (je(t))
        return t.getRunKind() === e ? ic(t) : void 0;
      const r = t.getParent();
      return je(r) ? r.getRunKind() === e ? ic(r) : void 0 : JT(t) === e ? ic(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Be(t))
        return It;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? It : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (t) => Be(t) ? $s(nc(t, e), e) : an,
    graceSite: (t, r) => Be(t) ? !r.opener && !r.closer ? gu(nc(t, e)) : ka(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Be(t) ? nc(t, e) : void 0
    }
  };
}
const YT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => K(e),
  ownerOf: () => {
  },
  expectedPieces: () => It,
  scanPieces: () => an,
  graceSite: (e) => K(e) && xg(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, XT = {
  kind: "char",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (!v(e) || ue(e, me) !== "attribute")
      return;
    const t = e.getParent();
    return K(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || Ts(e) === void 0)
      return It;
    const t = Or(e.getUnknownAttributes() ?? {}, fa(e.getMarker()));
    return t === "" ? It : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => K(e) ? { value: fg(e) } : an,
  graceSite: (e, t) => {
    if (!K(e) || t.value)
      return !1;
    const r = Ts(e);
    if (!r)
      return !1;
    const n = P();
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
    insertRunBefore: (e) => K(e) ? Ts(e) : void 0
  }
};
function Sg(e) {
  if (R(e))
    return e.getMarker() === "cat";
  if (!v(e) || ue(e, me) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return R(t) && t.getMarker() === "cat";
}
function QT(e) {
  const t = e.getParent();
  if (!V(t))
    return;
  const r = en(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Sg(n))
        return;
    }
}
const ZT = {
  kind: "cat",
  ownerPredicate: (e) => V(e),
  ownerOf: (e) => {
    if (je(e))
      return e.getRunKind() === "cat" && V(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return je(t) ? t.getRunKind() === "cat" && V(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Sg(e) ? QT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!V(e) || e.getIsCollapsed() !== !1)
      return It;
    const t = e.getCategory();
    return t === void 0 ? It : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => V(e) ? du(e) : an,
  graceSite: (e, t) => {
    if (!V(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = en(e);
      return r !== void 0 && gu(r);
    }
    return ka(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => V(e) ? en(e) : void 0
  }
};
function eC(e) {
  return je(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : R(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && ue(e, me) === "attribute";
}
function tC(e) {
  if (R(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!v(e) || ue(e, me) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!R(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function rC(e) {
  const t = e.getParent();
  if (!Ue(t))
    return;
  const r = ma(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!eC(n))
        return;
    }
}
function ef(e) {
  const t = (r) => Ue(r) ? e === "ca" ? ma(r) : hg(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ue(r),
    ownerOf: (r) => {
      if (je(r))
        return r.getRunKind() === e && Ue(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return je(n) ? n.getRunKind() === e && Ue(n.getParent()) ? n.getParent() ?? void 0 : void 0 : tC(r) === e ? rC(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ue(r))
        return It;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? It : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (r) => Ue(r) ? e === "ca" ? pg(r) : gg(r) : an,
    graceSite: (r, n) => {
      if (!Ue(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && gu(i);
      }
      return ka(n);
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
function _g(e) {
  if (R(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && ue(e, me) === "attribute";
}
function nC(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (st(t)) {
      const r = R(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!_g(t))
      return;
  }
}
const iC = {
  kind: "milestone",
  ownerPredicate: (e) => st(e),
  ownerOf: (e) => {
    const t = je(e) ? e.getRunKind() === "milestone" ? e : void 0 : je(e.getParent()) ? e.getParent() : _g(e) ? e : void 0;
    if (!t || je(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return je(t) ? st(r) ? r : void 0 : nC(t);
  },
  expectedPieces: (e) => {
    if (!st(e))
      return It;
    const t = dg(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Or(t, pa(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : D + r };
  },
  scanPieces: (e) => {
    if (!st(e))
      return an;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ya(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!st(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = P();
      if (!N(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return ka(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => st(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, sC = Cg("optbreak", void 0, void 0).opening, oC = {
  kind: "optbreak",
  ownerPredicate: (e) => Ve(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ve(t) || t.getTag() !== "optbreak"))
      return v(e) || Vt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: sC }),
  scanPieces: (e) => Ve(e) ? { value: e.getFirstChild() ?? void 0 } : an,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, aC = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Ve(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => It,
  scanPieces: () => an,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, cC = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => K(e),
  ownerOf: () => {
  },
  expectedPieces: () => It,
  scanPieces: () => an,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, qs = [
  YT,
  XT,
  Zd("va"),
  Zd("vp"),
  ZT,
  ef("ca"),
  ef("cp"),
  iC,
  oC,
  aC,
  cC
], lC = new Map(qs.map((e) => [e.kind, e]));
function Qn(e) {
  const t = lC.get(e);
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
function vg(e) {
  return Zn(e) !== void 0;
}
const Lo = "unmatched", Mg = 2;
function Cs(e) {
  return `\\${e}`;
}
class cn extends tt {
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
      [Lo]: (t) => dC(t) ? {
        conversion: uC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return mu().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Id), r.title = tf(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = tf(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Lo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Id), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Mg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Eg(e) {
  return e.getTextContent() === Cs(e.getMarker());
}
function tf(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function uC(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: mu(t) };
}
function mu(e) {
  return nt(new cn(e));
}
function dC(e) {
  return e?.tagName.toLowerCase() === Lo;
}
function ln(e) {
  return e instanceof cn;
}
const Ag = "table", Vc = "immutable-table", Pg = 1, fC = ["type", "marker", "content"];
class li extends Cr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Vc;
  }
  static clone(t) {
    return new li(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return pC().updateFromJSON(t);
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
      type: Vc,
      ...t !== void 0 && { unknownAttributes: t },
      version: Pg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function pC(e) {
  return nt(new li(e));
}
function Ng(e) {
  return e instanceof li;
}
function hC(e) {
  return e?.type === Vc;
}
const wg = "table:row", rf = "immutable-table-row", Og = 1, Wc = "tr", gC = ["type", "marker", "content"];
class Zi extends Cr {
  __marker;
  __unknownAttributes;
  constructor(t = Wc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return rf;
  }
  static clone(t) {
    return new Zi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return mC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Wc).setUnknownAttributes(t.unknownAttributes);
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
      type: rf,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Og
    };
  }
}
function mC(e, t) {
  return nt(new Zi(e, t));
}
const Rg = "table:cell", nf = "immutable-table-cell", $g = 1, Hc = "tc1", yC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function bC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class es extends Cr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Hc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return nf;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new es(r, n, i, s, o);
  }
  static importJSON(t) {
    return kC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Hc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = bC(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: nf,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: $g
    };
  }
}
function kC(e, t, r, n) {
  return nt(new es(e, t, r, n));
}
function ts(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function Dt(e, t) {
  const r = ts(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Is(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function xC(e) {
  return e.getChildren().some((t) => R(t) && t.getMarkerSyntax() === "closing");
}
function TC(e) {
  return Is(e) ? void 0 : { closed: "false" };
}
function CC(e, t, r, n) {
  const i = t.getMarker(), s = fu(t), o = xC(t);
  if (n) {
    e.append(Tt(i, "opening", s));
    const [a] = r;
    Qi(a) && !a.getTextContent().startsWith(D) && a.setTextContent(D + a.getTextContent());
  }
  e.append(...r), o && e.append(Tt(i, "closing", s));
}
function ei(e) {
  return we(e, K) ?? void 0;
}
function SC(e) {
  let t = e.getParent();
  for (; K(t); )
    t = t.getParent();
  return t;
}
function Gc(e) {
  const t = qg(e);
  return e.getChildren().every((r) => R(r) || t && ue(r, me) === "attribute" || v(r) && r.getTextContent().replaceAll(D, "") === "");
}
function qg(e) {
  return Is(e);
}
function _C(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Or(r, fa(e.getMarker())) : "";
  n !== "" && t.insertAfter(Ne(n)), e.remove();
}
function vC(e, t) {
  if (Is(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(Tt(e.getMarker(), "closing", fu(e)));
}
function MC(e, t) {
  return K(e) && !Is(e) && !Is(t);
}
function EC(e, t, r) {
  Gc(e) && e.getChildren().forEach((i) => {
    R(i) || i.remove();
  });
  const [n] = t;
  r && Qi(n) && !n.getTextContent().startsWith(D) && n.setTextContent(D + n.getTextContent()), e.append(...t);
}
function AC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = qg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = R(l) && l.getMarkerSyntax() === "closing", f = s && ue(l, me) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = MC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      EC(e, o, n);
    else {
      const l = Zr(t.getMarker(), TC(t));
      CC(l, t, o, n), e.insertAfter(l), Gc(l) ? l.remove() : c = l;
    }
  i && !a && vC(t, n), Gc(t) && _C(t, c);
}
function Fi(e, t) {
  let r = e.getParent();
  for (; K(r); )
    AC(e, r, t), r = e.getParent();
}
function xa(e) {
  if (v(e) && !R(e)) {
    const t = ba(e);
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !R(r));
    if (t) {
      xa(t);
      return;
    }
    e.selectEnd();
  }
}
const $i = /* @__PURE__ */ new WeakMap();
function PC(e, t) {
  return $i.set(e, t), () => {
    $i.get(e) === t && $i.delete(e);
  };
}
function sf(e) {
  return $i.get(e);
}
function NC(e) {
  return $i.get(Lr())?.has(e.getKey()) ?? !1;
}
function wC(e) {
  $i.get(Lr())?.add(e.getKey());
}
function OC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Jc(e) {
  return !!(e.opener || e.value || e.closer);
}
function of(e) {
  return /^\s/.test(e);
}
function yu(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !of(t) || !of(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Ta(e, t, r) {
  return r.wantsRun ? yu(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : OC(t);
}
function RC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return yu(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Ig(e, t) {
  return !Jc(e.scanPieces(t));
}
function no(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Ta(e, n, r))
    return !1;
  const i = P();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Io(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function $C(e, t, r, n) {
  return !r.wantsRun || Jc(n) || gk(Ns) ? !1 : Lr().getEditorState().read(() => {
    const i = oe(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Jc(e.scanPieces(i));
  });
}
function qC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function af(e) {
  const t = Ne(e);
  return Rt(t, me, "attribute"), t;
}
function IC(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = qh(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function LC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    v(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(af(n.valueText));
    return;
  }
  const l = IC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = Tt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : v(d) ? yu(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = af(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(Tt(a === "selfClosing" ? "" : o(t), a));
}
function Ls(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Ta(e, i, n) && !NC(t)) {
    if ($C(e, t, n, i)) {
      wC(t);
      return;
    }
    if (!no(e, t)) {
      if (!n.wantsRun) {
        qC(i);
        return;
      }
      LC(e, t, i, n);
    }
  }
}
function DC(e, t, r) {
  Ls(e, t), t.isAttached() && no(e, t) && r.add(t.getKey());
}
function io(e) {
  if (!v(e))
    return !1;
  if (R(e) || Be(e) || ln(e))
    return !0;
  const t = ue(e, me);
  return t === "attribute" || t === Br;
}
function bu(e, t) {
  return R(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && on(e) && K(e.getParent())) : !1;
}
function UC() {
  const e = P();
  return N(e) ? bu(e.focus.getNode(), e.focus.offset) : !1;
}
function Lg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && io(t) ? t : void 0;
}
function KC(e) {
  const t = Lg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function FC(e) {
  const t = Lg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function cf(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function lf(e, t) {
  e.set(t.key, t.offset, t.type);
}
function zC(e, t) {
  let r = FC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!v(n))
      return;
    if (!io(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function uf(e, t) {
  const r = zC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function ku(e) {
  if (e.isCollapsed()) {
    const a = KC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [cf(r), cf(n)], s = uf(r, "next"), o = uf(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (lf(r, i[0]), lf(n, i[1]), !1) : !0;
}
const Do = "verse-block", Dg = 1, BC = "verse-block";
class rs extends Cr {
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
    return jC().updateFromJSON(t);
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
    return og(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(BC), df(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && df(r, this.__number), !1;
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
      version: Dg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function df(e, t) {
  const { start: r, end: n } = og(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), ff(e, "data-verse-start", i ? r : NaN), ff(e, "data-verse-end", i ? n : NaN);
}
function ff(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function jC(e) {
  return nt(new rs(e));
}
function Ds(e) {
  return e instanceof rs;
}
function VC(e) {
  return e?.type === Do;
}
const WC = [
  Wt,
  jr,
  Yt,
  Mt,
  ve,
  Ie,
  xr,
  Vr,
  ci,
  nn,
  cn,
  pt,
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
    replace: Ll,
    with: () => mr(),
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
}, HC = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function GC(e) {
  if (!e)
    return qr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: qr(r)?.category ?? C.Uncategorized,
      type: HC[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: qr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function pf(e, t, r) {
  const n = {
    type: kr,
    version: br,
    content: e
  }, i = t.serializeEditorState(n, r);
  return ha(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Ug = "v", Kg = 1, JC = "verse-selected";
class Ut extends Js {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Ug, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Ut(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => QC(t) ? {
        conversion: XC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return xu().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(qc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(qc, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? ar(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      No + this.getNumber() + No
    );
    return M(YC, { nodeKey: this.getKey(), text: t });
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
      version: Kg
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (ig(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function YC({ nodeKey: e, text: t }) {
  const [r] = Ok(e);
  return M("span", { className: r ? JC : void 0, children: t });
}
function XC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: xu(t) };
}
function xu(e, t, r, n, i, s) {
  return nt(new Ut(e, t, r, n, i, s));
}
function QC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Ug;
}
function ui(e) {
  return e instanceof Ut;
}
function ZC(e) {
  return e?.type === Ut.getType();
}
function Te(e) {
  return Be(e) || ui(e);
}
function Fg(e) {
  return Yh(e) || ZC(e);
}
function eS(e) {
  return tS(e).find((t) => le(t));
}
function tS(e) {
  return e.some(Ds) ? e.flatMap((t) => Ds(t) ? t.getChildren() : t) : e;
}
function Ca(e) {
  return L(e) ? Ds(e) ? e.getChildren().flatMap(Ca) : e.getChildren() : [];
}
function rS(e, t) {
  return Ca(e).find((i) => Te(i) && cu(t, i.getNumber()));
}
function nS(e, t) {
  return t === 0 ? eS(e) : e.map((r) => rS(r, t)).filter((r) => r)[0];
}
function Ko(e) {
  return Ca(e).find((r) => Te(r));
}
function zg(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (Te(i))
      return i;
  }
}
function iS(e) {
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
  for (; r && !rt(r); ) {
    const n = Ko(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Fo(e) {
  return Ca(e).findLast((t) => Te(t));
}
function sS(e) {
  if (!Be(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function oS(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function aS(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return oS(t, e, r);
  if (v(e)) {
    const n = sS(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function sc(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function cS(e) {
  const t = jc(e);
  if (!(!t || rt(t)))
    return Te(t) ? t : Fo(t) ?? Su(t);
}
function lS(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return sc(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (aS(e, t)) {
    const i = cS(e);
    return i ? sc(i) : { verseNum: n };
  }
  return sc(e);
}
function uS(e) {
  return fT(e) || ui(e);
}
function Tu(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(D) && e.setTextContent(`${t} `);
  }
}
function Bg(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Yc(e, t) {
  return e.getEditorState().read(() => !oe(t));
}
function dS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Cu(t, e);
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
      let s = hf(i);
      for (; s && !rt(s); ) {
        const o = Ko(s);
        if (o) {
          n = o;
          break;
        }
        s = hf(s);
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
      if (s = s.getNextSibling(), s && rt(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function fS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Cu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = zg(i, r.getIndexWithinParent())), !n && i) {
      let o = gf(i);
      for (; o && !rt(o); ) {
        const a = Fo(o);
        if (a) {
          n = a;
          break;
        }
        o = gf(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !rt(s); ) {
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
function hf(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function gf(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Cu(e, t) {
  if (L(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && Te(n))
      return n;
    const i = zg(e, t.anchor.offset);
    if (i)
      return i;
    const s = Ko(e);
    if (s)
      return s;
  }
  return Su(e);
}
function Su(e) {
  if (!e || rt(e))
    return;
  if (Te(e))
    return e;
  let t = jc(e);
  for (; t; ) {
    if (rt(t))
      return;
    if (Te(t))
      return t;
    const r = Fo(t);
    if (r)
      return r;
    t = jc(t);
  }
}
const pS = ["style"], hS = ["style", "code"], zo = ["style", "cid"], gS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], mS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], yS = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], bS = ["style", "caller", "category", "contents"], kS = ["tag", "marker", "contents"], xS = [
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
function TS(e, t) {
  const r = oe(e);
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
  const r = da();
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
      Je(l) && (a = l);
    }
    if (Je(l) && (i.includes(l) || i.push(l)), jg(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += vu(l, t);
  }
  if (a)
    return n;
}
function mf(e, t, r = "delta-doc") {
  if (e.length < 2 || !_S(e[0]) || !SS(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => CS(n, r)?.getKey());
}
function CS(e, t = "delta-doc") {
  const r = da();
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
    if (Je(a) && (i.includes(a) || i.push(a)), jg(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = vu(a, t);
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
  return v(e) && !Jt(e);
}
function Jt(e) {
  return rt(e) || Te(e) || st(e) || V(e) || Ve(e) || ln(e);
}
function gn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function SS(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && xS.includes(t);
}
function _S(e) {
  return e.retain != null && typeof e.retain == "number";
}
function jg(e, t) {
  return V(e) || Ve(e) ? !0 : t === "apply" && L(e) && Jt(e);
}
function Vg(e) {
  const t = e.getParent();
  return xt(e) && le(t) && t.getFirstChild() === e;
}
function Xc(e) {
  const t = e.getParent();
  return t !== null && we(t, je) !== null;
}
function vS(e) {
  const t = e.getParent();
  return K(t) && e.getTextContent() === cr && t.getChildrenSize() === 1;
}
function MS(e) {
  const t = e.getParent();
  if (!V(t))
    return !1;
  const r = e.getPreviousSibling();
  return R(r) && r === t.getFirstChild() && e.getTextContent() === Gt(t.getCaller());
}
function ES(e) {
  return !vg(e) && vu(e, "delta-doc") === e.getTextContentSize();
}
function vu(e, t) {
  if (Jt(e))
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
    (Zs(e) || Vg(e) || ue(e, me) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ue(e, me) === "attribute" || Xc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Hl) || vS(e) || MS(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Qc(e, t) {
  const r = { insert: e.__text }, n = ue(e, Tn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Wg(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function yf(e) {
  const t = new ys();
  return e.isEmpty() || e.read(() => {
    const r = Xe();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Dr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = AS();
    for (const s of i)
      t.push(s);
  }), t;
}
function Sa(e, t) {
  const r = [], n = ai(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...bf(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...bf(c, n.length, n, i, s, o, a));
  return r;
}
function AS() {
  return Sa();
}
function bf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return PS(e, a, n), NS(e, a, i, s, o), wS(e, t, r, i, o, s, a), rt(e) && a.push(qS(e)), Te(e) && a.push(LS(e)), st(e) && a.push(DS(e)), ln(e) && a.push(US(e)), RS(e, a, s), OS(e, a, s), BS(c, s), a;
}
function PS(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Me(n) ? t.push($S(n)) : le(n) ? t.push(IS(n)) : Dr(n) && t.push({ insert: Us });
  }
  Je(e) && (r.includes(e) || r.push(e));
}
function NS(e, t, r, n, i) {
  if (!v(e) || Be(e) || ln(e))
    return;
  const s = e.getParent();
  if (V(s) && s.getFirstChild() === e)
    return;
  const o = Ht(e) !== void 0;
  if (R(e) && (o || Vg(e) || Xc(e) || vg(e)) || ue(e, me) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Qs(a))
    return;
  const c = e.getPreviousSibling();
  if (V(s) && R(c) && c === s.getFirstChild() && a === Gt(s.getCaller()))
    return;
  const l = K(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(ba(e)));
  const u = a.startsWith(Hl) || ue(e, me) === "attribute" || Xc(e), d = !!l && a === cr && l.getChildrenSize() === 1, f = _a(e, n), p = f ? r.filter((y) => f.children.includes(y)) : r, h = Qc(e, p);
  if (h.insert = a, f) {
    if (!a || a === D || u)
      return;
    f.contentsOps?.push(h);
  } else
    d || u || t.push(h);
  const g = a !== "" && !d && !(u && l);
  if (r.length > 0 && g)
    for (const y of r)
      i.add(y);
}
function wS(e, t, r, n, i, s, o) {
  K(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (zi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = FS(c), u = _a(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function OS(e, t, r) {
  if (!V(e))
    return;
  const n = KS(e), i = _a(e, r), s = {
    node: e,
    children: ai(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function RS(e, t, r) {
  if (!Ve(e))
    return;
  const n = zS(e), i = _a(e, r), s = {
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
function $S(e) {
  const t = { style: Rs, code: e.__code };
  return wn(t, e), { insert: Us, attributes: { book: t } };
}
function qS(e) {
  const t = { style: $o, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), wn(t, e), { insert: { chapter: t } };
}
function IS(e) {
  const t = { style: e.__marker };
  return wn(t, e), { insert: Us, attributes: { para: t } };
}
function LS(e) {
  const t = { style: qo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), wn(t, e), { insert: { verse: t } };
}
function DS(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), wn(t, e), { insert: { milestone: t } };
}
function US(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function KS(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), wn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ue(e, Tn);
  return n && (r.attributes = { segment: n }), r;
}
function FS(e) {
  const t = { insert: "" }, r = Wg([e]);
  return r && (t.attributes = { char: r }), t;
}
function zS(e) {
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
function BS(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    zi(t[r].node, e) && t.splice(r, 1);
}
function Wg(e) {
  if (e.length === 0)
    return;
  const t = e.map(jS);
  return t.length === 1 ? t[0] : t;
}
function jS(e) {
  const t = { style: e.__marker }, r = ue(e, Yn);
  return r && (t.cid = r), wn(t, e), t;
}
function Mu(e) {
  let t = 0;
  for (const { node: r } of da())
    if (V(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function VS(e) {
  let t = 0;
  for (const { node: r } of da())
    if (V(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const Hg = 1;
class yr extends Js {
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
    return new yr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => HS(t) ? {
        conversion: WS,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Eu().updateFromJSON(t);
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => GS(t, n), (l) => JS(t, n, s, l), () => YS(t, n), () => XS(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return M("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Ps && i ? (
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
      version: Hg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function WS(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Eu(t, r) };
}
function Eu(e, t, r) {
  return nt(new yr(e, t, r));
}
function HS(e) {
  return e ? e.classList.contains(yr.getType()) : !1;
}
function Ct(e) {
  return e instanceof yr;
}
function GS(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!V(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function JS(e, t, r, n) {
  e.update(() => {
    const i = oe(t);
    if (!V(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = oe(r);
    if (!Ct(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function YS(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!V(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Sa(r);
  });
}
function XS(e, t) {
  return e.getEditorState().read(() => Mu(t));
}
const QS = [
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
], ZS = ["†"];
function va(e) {
  if (Gg())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = kf(t), [s, o] = kf(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = xf(n, i), [s, o] = xf(s, o);
  const a = kn();
  return a.anchor = gr(n.getKey(), i, Tf(n)), a.focus = gr(s.getKey(), o, Tf(s)), a;
}
function Au() {
  if (Gg())
    return;
  const e = P();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Bo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Bo(i, s);
  return { start: n, end: o };
}
function kf(e) {
  if (ok(e)) {
    const t = Xp(e.jsonPath);
    let r = Xe();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = Xi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : PT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, NT(r, e.offset)] : [void 0, void 0];
  }
  if (ak(e) || ck(e)) {
    const t = us(e.jsonPath);
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
  if (lk(e)) {
    const t = us(e.jsonPath);
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
  if (uk(e)) {
    const t = us(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = oc(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && v(n) ? [n, 0] : [void 0, void 0];
  }
  if (dk(e)) {
    const t = us(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = oc(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && v(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (fk(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = us(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = oc(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && v(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${pk(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function xf(e, t) {
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
function Tf(e) {
  return L(e) ? "element" : "text";
}
function oc(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (R(n) && n.getMarkerSyntax() === t || t === "closing" && R(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (_r(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function us(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Xp(r);
  let i = Xe();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = Xi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Bo(e, t) {
  if (R(e)) {
    const r = e.getMarkerSyntax(), n = e_(e), i = n ? In(Kn(n)) : In(Kn(e));
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
      return Bo(n, s);
    }
    const i = ga(e);
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
    const n = cg(e, t);
    return n.type === "text" ? {
      jsonPath: In([...Kn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: In(Kn(e)),
      offset: n.index
    };
  }
  if (v(e)) {
    const r = AT(e, t);
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
function e_(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = t_(e);
  return r && !Je(r) && !v(r) && !Pe(r) ? r : t;
}
function t_(e) {
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
    const n = ga(r);
    if (!n)
      break;
    const i = ET(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Gg() {
  for (let e = Xe().getFirstChild(); e; e = e.getNextSibling())
    if (Ds(e))
      return !0;
  return !1;
}
function r_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Jg(e, t, r, n, i, s, o) {
  if (!Ie.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? va(r) : P();
  if (!N(a))
    return;
  const c = s_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? r_(e, s), u = Yg(e, l, c, i, s, void 0, void 0);
  return i_(u, a, i), u;
}
function Pu(e) {
  return e !== "expanded";
}
function n_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!v(r) || !K(r.getParent()))
    return;
  if (R(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return R(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function i_(e, t, r) {
  const n = Pu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || gT(t), ku(t);
  const i = n_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(K)?.selectEnd();
}
function Si(e, t, r) {
  const n = Zr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(Tt(e)) : r?.markerMode === "visible" && n.append(Xr("marker", Ke(e)));
  const s = t === "" ? cr : i ? D + t : t;
  return n.append(Ne(s)), n;
}
function s_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Si("fr", f, n)), !e.isCollapsed()) {
        const p = Sf(e);
        p.length > 0 && o.push(Si("fq", p, n));
      }
      o.push(Si("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Si("xo", f, n)), !e.isCollapsed()) {
        const p = Sf(e);
        p.length > 0 && o.push(Si("xq", p, n));
      }
      o.push(Si("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Yg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Pu(n?.noteMode), l = Xl(e, t, c);
  s && Rt(l, Tn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = Tt(e), u && d.setMode("token"), a || (f = Tt(e, "closing"))) : n?.markerMode === "visible" && (d = Xr("marker", Ke(e) + " "), a || (f = Xr("marker", ct(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    p = Ne(Gt(l.__caller)), u && p.setMode("token"), l.append(p, ...r);
  else {
    const h = () => to(), g = r.flatMap(p_(h));
    if (t === "")
      l.append(...g);
    else {
      const y = su(r);
      let b = () => {
      };
      i?.noteCallerOnClick && (b = i.noteCallerOnClick), p = Eu(l.__caller, y, b), l.append(p, h(), ...g);
    }
  }
  return f && l.append(f), l;
}
function wr(e) {
  if (typeof e == "string") {
    const t = oe(e);
    return V(t) ? t : void 0;
  }
  return VS(e);
}
function Zc(e, t) {
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
      o_(i);
    else {
      const s = Nu(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function Nu(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return R(r) && r.getMarkerSyntax() === "closing" || _r(r) && r.getTextContent() === ct(e.getMarker()) ? t : -1;
}
function o_(e) {
  const t = Nu(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  v(r) && !eo(r) ? r.selectEnd() : e.select(t, t);
}
function Xg(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (v(r) && !io(r)) {
    r.select(0, 0);
    return;
  }
  const n = e.getParent();
  if (!n)
    return;
  const i = e.getIndexWithinParent() + 1;
  n.canBeEmpty() ? n.select(i, i) : wu(n, i, { announce: !t });
}
function wu(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!V(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = kn();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), zt(i), r && Lr().dispatchCommand(Bt, void 0);
}
function Cf(e, t, r) {
  const n = en(e), i = a_(e, n);
  if (r && Zg(i, t, r, Qg(e, n)))
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
function a_(e, t) {
  const r = [];
  for (const { node: n } of ai(e))
    !v(n) || we(n, je) || (Ou(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: ba(n) }) : c_(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function c_(e, t) {
  return ln(e) ? !0 : R(e) && !t.is(e.getParent());
}
function Qg(e, t) {
  return (r) => {
    let n = r;
    for (; !n.getPreviousSibling(); ) {
      const o = n.getParent();
      if (!o || o.is(e))
        return;
      n = o;
    }
    const i = n.getPreviousSibling(), s = L(i) ? i.getLastDescendant() : i;
    if (v(s) && (t?.is(s) || Ou(s, t)))
      return s;
  };
}
function Zg(e, t, r, n) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === r.index)
      return l_(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function l_(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function u_(e, t, r) {
  const { opener: n, value: i, closer: s } = du(e);
  if (!i)
    return !1;
  const o = d_(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = en(e);
    if (Zg(c, t, r, Qg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function d_(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function Ou(e, t) {
  return !v(e) || eo(e) || io(e) ? !1 : !t || !e.is(t);
}
function f_(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(K))
    return;
  const t = en(e);
  for (const { node: n } of ai(e))
    if (Ou(n, t))
      return;
  const r = Nu(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function p_(e) {
  return (t) => Vt(t) ? [t] : [t, e()];
}
function h_(e) {
  const t = e.getParent();
  return t !== null && we(t, V) !== null;
}
function Sf(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Ul(e);
  let a = "";
  for (const c of t)
    if (!(V(c) || Ct(c) || h_(c)) && !R(c) && !ln(c) && ue(c, me) !== "attribute") {
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
const Ru = [
  yr,
  Ut,
  ...WC
], g_ = [
  rs,
  ...Ru
], m_ = Pn((e, t) => {
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
function y_() {
  const [e, t] = xe(void 0), [r, n] = xe(), i = ee(null), s = Se((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = zk(l, c, () => {
      Bk(l, c, {
        placement: "bottom-start",
        middleware: [jk(), Vk()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = Se(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function b_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = y_();
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
const k_ = ek(m_);
function em({ isOpen: e = !1, children: t }) {
  const r = ee(null), { coords: n, placement: i } = b_({ isOpen: e, floatingBoxRef: r }), s = et(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return jn(
    M(k_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const tm = Jp(void 0);
function $u() {
  const e = Yp(tm);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function x_(e, t) {
  const [r, n] = xe(0), [i, s] = xe(-1), o = et(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = Se(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = Se(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = Se(() => {
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
function T_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = x_(t, r);
  return M(tm.Provider, { value: i, children: M("div", { ...n, children: e }) });
}
const rm = Pn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = $u(), u = Se((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = Se((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return M("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function C_({ children: e, autoIndex: t = !0, ...r }) {
  const n = ee(null), { state: { activeIndex: i, menuItems: s } } = $u(), o = et(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = et(() => {
    const c = o(s);
    return t ? tk.map(c, (l, u) => rk(l) && l.type === rm && l.props.index === void 0 ? nk(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return j(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), M("div", { ref: n, role: "menu", ...r, children: a });
}
const S_ = (e, t, r) => _o(e, r).toLowerCase().includes(t.toLowerCase()), _f = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", _o = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function __(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? _f(r[0]) : "") : (u = n || (r.length > 0 ? _f(r[0]) : ""), d = (h, g) => S_(h, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return d(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const y = (k) => (p.has(k) || p.set(k, _o(k, f).toLowerCase()), p.get(k) ?? ""), b = a ? _o(h, f) : y(h), T = a ? _o(g, f) : y(g);
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
          const E = b.indexOf(l), S = T.indexOf(l);
          if (E !== -1 && S === -1)
            return -1;
          if (S !== -1 && E === -1)
            return 1;
          if (E !== -1 && S !== -1)
            return E - S;
          break;
        }
      }
    return b.localeCompare(T);
  });
}
const ac = {
  Root: T_,
  Options: C_,
  Option: rm
};
function v_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return et(() => __({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function M_() {
  const { moveUp: e, moveDown: t, select: r } = $u();
  return et(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const E_ = () => {
  const e = M_(), [t] = pe();
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
    return t.registerCommand(Sr, r, Oe);
  }, [t, e]);
};
function A_() {
  return E_(), null;
}
const P_ = ["Shift", "Control", "Alt", "Meta"];
function nm(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = pe(), u = s !== void 0, [d, f] = xe(""), p = u ? s ?? "" : d, h = v_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(Sr, (y) => {
    if (u || c?.includes(y.key) || P_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const T = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((k) => k.slice(0, -1));
      }
    }[y.key];
    return T ? (y.stopPropagation(), y.preventDefault(), T(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((k) => k + y.key), !0) : !1;
  }, Oe), [l, u, p, o, n, c]), $e(ac.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => g(y), children: [!u && M("input", { value: p, type: "text", disabled: !0 }), M(A_, {}), M(ac.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((T, k) => $e(ac.Option, { index: k, children: [M("span", { className: "label", children: T.label ?? T.name }), M("span", { className: "description", children: T.description })] }, T.name)) })] });
}
function N_({ trigger: e, items: t }) {
  const [r] = pe(), [n, i] = xe(!1), s = Se((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = P();
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = P();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && M(em, { isOpen: n, children: ({ placement: o }) => M(nm, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function w_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: et(() => {
    if (!t || !e)
      return;
    const i = qr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = qr(o), { action: c } = r(o, a);
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
function Ss(e, t) {
  return `${e}:${t}`;
}
function O_(e, t) {
  j(() => {
    if (!e.hasNodes([ft]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return qe(ch(e, ft, (n) => Os(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], h = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, h, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(ft, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = oe(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Pe(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!ft.isReservedType(c))
              for (const u of l) {
                let d = t.get(Ss(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Ss(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Ss(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const R_ = Pn(function({ logger: t }, r) {
  const [n] = pe(), i = et(() => /* @__PURE__ */ new Map(), []);
  O_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Ss(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = oe(u);
        Pe(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Ro(d));
      }
  };
  return aa(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (ft.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = va(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Oh(p, a, c, l, u, d, f);
      }, { tag: Ic });
    },
    removeAnnotation(o, a) {
      if (ft.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Ss(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ic });
    }
  })), null;
}), $_ = [];
function q_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = $_, onChange: n }) {
  const [i] = pe();
  return Gs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Kl) && !u.has(bh) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = I_(i, s);
        d.length !== 0 && n(o, i, u, d, l);
      });
  }, [i, e, t, r, n]), null;
}
function I_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new ys();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = oe(i), o = s !== null && Ht(s) !== void 0;
    if (t.size === 1 && v(s) && !o && ES(s)) {
      const a = _u(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = oe(i);
          return new ys([v(d) ? Qc(d) : { insert: "" }]);
        }), l = new ys([Qc(s)]), u = new ys(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = yf(r), c = yf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const qu = "formatted", im = "unformatted", sm = "paragraph-structure", Iu = "standard", om = "block-verse", L_ = {
  [qu]: "Formatted",
  [im]: "Unformatted",
  [sm]: "Paragraph Structure",
  [Iu]: "Standard",
  [om]: "Block Verse"
};
function di(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Lu, Du;
function D_(e) {
  const t = Uu(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Lu = e, Du = t;
}
D_(qu);
const qw = () => Lu, Ma = () => Du;
function Uu(e) {
  let t;
  switch (e ?? Lu) {
    case qu:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case im:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case sm:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Iu:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case om:
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
function Iw(e) {
  if (!e)
    return;
  const t = vf(e);
  return Object.keys(L_).find((r) => Zt(vf(Uu(r)), t));
}
const U_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function vf(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...U_, ...t };
}
function so(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function K_(e) {
  if (e)
    return Ks(e) ? Ut : e.markerMode === "editable" ? Mt : Ut;
}
function Ks(e) {
  return e?.verseLayout === "block";
}
function F_(e) {
  const t = [], r = e ?? Du;
  return r && (t.push(`${sx}${r.markerMode}`), r.hasSpacing && t.push(nx), r.isFormattedFont && t.push(ix)), t;
}
function z_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += B_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), V_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += W_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), G_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function B_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), j_(t, e.retain, e.attributes, r, n)), e.retain);
}
function j_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Xe();
  function l(u) {
    if (s <= 0)
      return !0;
    if (tn(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, h = Math.min(s, p);
        if (h > 0) {
          let g = u;
          const y = f > 0, b = h < d - f;
          if (y && b) {
            const [, T] = u.splitText(f);
            [g] = T.splitText(h);
          } else y ? [, g] = u.splitText(f) : b && ([g] = u.splitText(h));
          if (_n(r)) {
            const T = g.getParent();
            if (K(T)) {
              const k = r.char;
              let E;
              Array.isArray(k) ? a >= 0 && a <= k.length - 1 && (E = k[a]) : a === 0 && (E = k);
              const S = E ? Xn(E, T) : !1;
              if (S && Array.isArray(k) && k.length > 1) {
                const O = Ne("");
                g.replace(O);
                const q = typeof r.segment == "string" ? r.segment : void 0, F = ns(k.slice(1), n, g, q);
                let B = O;
                for (const ae of F)
                  B.insertAfter(ae), B = ae;
                O.remove(), er(r, g);
              } else if (S)
                er(r, g);
              else {
                g.remove();
                const O = Mf(g, r, n, i);
                if (O && O.length > 0) {
                  let q = T;
                  for (const F of O)
                    q.insertAfter(F), q = F;
                }
              }
            } else {
              const k = Ne("");
              g.replace(k);
              const E = Mf(g, r, n, i);
              if (E && E.length > 0) {
                let S = k;
                for (const O of E)
                  S.insertAfter(O), S = O;
                k.remove();
              } else
                k.replace(g);
            }
          } else
            er(r, g);
          s -= h;
        }
      }
      o += d;
    } else if (Jt(u))
      e <= o && o < e + t && s > 0 && (Ef(u, r), s -= 1), o += 1;
    else if (K(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (_n(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            el(u, p.style), typeof p.cid == "string" && Rt(u, Yn, () => p.cid);
            const h = Ye(p, zo);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || nv(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && $c(u), !0;
        }
      }
      d && $c(u), a -= 1;
    } else if (Je(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Dr(u))
          Ef(u, r);
        else if (Ku(r)) {
          const p = lm(r.para, n);
          p && u.replace(p, !0);
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
function Mf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = ns(t.char, r, e, i), o = s.find(K);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), er(t, e);
    return;
  }
  const a = {};
  pm.forEach((u) => {
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
function am(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  R(r) ? (r.setMarker(t), r.setTextContent(Ke(t))) : Vt(r) && r.getTextType() === "marker" && r.setTextContent(Ke(t) + D);
}
function el(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    R(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = K(e.getParent()), i = e.getFirstChild();
  Vt(i) && i.getTextType() === "marker" && i.getTextContent() === Ke(r, n) && i.setTextContent(Ke(t, n));
  const s = e.getLastChild();
  Vt(s) && s.getTextType() === "marker" && s.getTextContent() === ct(r, n) && s.setTextContent(ct(t, n));
}
function Ef(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && K(e) && _n(t)) {
      const i = tl(n);
      if (el(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Rt(e, Yn, () => o);
      }
      const s = Ye(i, zo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (rt(e) || Te(e) || st(e) || V(e) || Ve(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Me(e) || le(e) || K(e)) && (r === "style" && le(e) ? am(e, n) : r === "style" && K(e) ? el(e, n) : r === "code" && Me(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Rt(e, Tn, () => n));
  }
}
function V_(e, t, r) {
  if (t <= 0)
    return;
  const n = Xe();
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
    else if (Je(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Je(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(mr(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && ze(p)) {
            let h = i + 1;
            const g = p.getChildren();
            for (const b of g) {
              if (s <= 0)
                break;
              const T = i;
              if (i = h, o(b)) {
                i = T;
                break;
              }
              tn(b) ? h += b.getTextContentSize() : Jt(b) && (h += 1), i = T;
            }
            const y = p.getChildren();
            for (const b of y)
              b.remove(), a.append(b);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(mr(), !0);
        } else le(a) ? a.replace(mr(), !0) : a.remove();
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
function W_(e, t, r, n, i) {
  if (t === Us)
    return Af(e, r, n, i);
  if (t.endsWith(Us) && !Ku(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (_n(r))
        throw new Error("Text + LF should not have char attributes");
      o += jo(e, s, r, i);
    }
    return o += Af(e + o, r, n, i), o;
  } else return _n(r) ? H_(e, t, r, n, i) : jo(e, t, r, i);
}
function H_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Ne(t === "" ? cr : t);
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
        Je(b) && (g += 1);
      }
      return !1;
    };
    const h = Xe();
    let g = 0;
    y(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Xn(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Xn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = ns(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(K);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), jo(e, t, void 0, i);
  const f = {};
  for (const [h, g] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof g == "string" && (f[h] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const h of u)
    if (!cm(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), jo(e, t, void 0, i));
}
function jo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Xe();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (tn(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = Ne(t);
        if (er(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          K(f) && !_n(r) ? f.insertAfter(d) : c.insertAfter(d);
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
        const d = Ne(t);
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
        const d = Ne(t);
        return er(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Je(c)) {
      if (!o && e === s) {
        const d = Ne(t);
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
        const d = Ne(t);
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
    const c = Ne(t);
    er(r, c);
    const l = mr().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function cm(e, t, r) {
  const n = Xe();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(mr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (ze(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(mr().append(t));
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
      } else if (Je(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (Dr(u) && Je(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(mr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      ze(a) ? Dr(a) && le(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ze(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (K(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ze(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function G_(e, t, r, n, i) {
  let s;
  return gn("chapter", t) ? s = Y_(t.insert.chapter, r) : gn("verse", t) ? s = X_(t.insert.verse, r) : gn("ms", t) ? s = Q_(t.insert.ms) : gn("note", t) ? s = um(t, r, n) : gn("unknown", t) ? s = dm(t, r, n, i) : gn("unmatched", t) && (s = ev(t.insert.unmatched, r)), s ? cm(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Af(e, t, r, n) {
  let i;
  Ku(t) ? i = lm(t.para, r) : rv(t) && (i = J_(t.book)), i ??= mr();
  const s = i, o = le(s), a = Dr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (tn(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (le(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? d.splitText(h) : [void 0];
          let y, b = g?.getPreviousSibling();
          for (; b; ) {
            const T = b;
            b = b.getPreviousSibling(), y ? y.insertBefore(T) : s.append(T), y = T;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Jt(d))
      c += 1;
    else if (Je(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Dr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (le(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && le(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (L(d)) {
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
  return u(Xe()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function J_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Rs || !r || !Wt.isValidBookCode(r))
    return;
  const n = Ye(e, hS);
  return Lh(r, n);
}
function lm(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ye(e, pS), i = Di(r, n);
  if (!di(t))
    return i;
  if (t.markerMode === "editable")
    i.append(Tt(r), to());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ke(r) + D;
    i.append(t.hasGutterParaMarkers ? Ah(s) : Xr("marker", s));
  }
  return i;
}
function Y_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ye(e, gS);
  let a;
  if (t.markerMode === "editable")
    a = Uh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = ru(r, c, n, i, s, o);
  }
  return a;
}
function X_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ye(e, mS);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = ar(r, n);
    c = Jh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = xu(n, l, i, s, o, a);
  }
  return c;
}
function Q_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ye(e, yS);
  return Th(t, r, n, s, i);
}
function um(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = Ye(n.note, bS), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let d;
  u && typeof u == "string" && (d = u);
  const f = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (_n(h.attributes)) {
        const g = ns(h.attributes.char, t, Ne(h.insert), void 0, fm(h.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...g);
      } else
        f.push(Ne(h.insert));
  return Yg(i, s, f, t, r, d, l).setCategory(o).setUnknownAttributes(c);
}
function dm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ye(i, kS), l = eu(s, o, c), u = a?.ops ?? [];
  u.length > 0 && Z_(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Rt(l, Tn, () => d), l;
}
function Z_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (_n(s.attributes)) {
        const o = Ne(s.insert), a = ns(s.attributes.char, t, o, void 0, fm(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Ne(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (gn("unknown", s)) {
        const o = dm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (gn("note", s)) {
        const o = um(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function ev(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = mu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function fm(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function tl(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function ns(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(cr);
  const a = () => {
    o && v(r) && r.getTextContent() !== cr && r.setTextContent(D + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(tl), l = c[0], u = i?.[i.length - 1];
    if (K(u) && Xn(l, u)) {
      if (c.length > 1) {
        const f = ns(c.slice(1), t, r, void 0, void 0, !0, o);
        cc(u, f);
      } else
        r && cc(u, [r]);
      return [];
    }
    a();
    const d = c.reduceRight((f, p, h) => {
      const g = Zr(p.style, Ye(p, zo));
      return typeof p.cid == "string" && Rt(g, Yn, () => p.cid), n && h === c.length - 1 && Rt(g, Tn, () => n), f && (K(f) && (uc(f.getMarker(), f, t, !0), lc(f, f, t, !0)), g.append(f)), g;
    }, r);
    return uc(l.style, d, t, s), lc(d, d, t, s), [d];
  } else {
    const c = tl(e), l = i?.[i.length - 1];
    if (K(l) && Xn(c, l))
      return r && cc(l, [r]), [];
    a();
    const u = Zr(c.style, Ye(c, zo));
    return typeof c.cid == "string" && Rt(u, Yn, () => c.cid), n && Rt(u, Tn, () => n), r && u.append(r), uc(c.style, u, t, s), lc(u, u, t, s), [u];
  }
}
function cc(e, t) {
  const r = e.getLastChild();
  R(r) && r.getMarkerSyntax() === "closing" || Vt(r) && r.getTextType() === "marker" && r.getTextContent() === ct(e.getMarker(), K(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function lc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && tv(e.getMarker(), t, r, !1, n);
}
function uc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = Tt(e, "opening", n) : r?.markerMode === "visible" && (i = Xr("marker", Ke(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function tv(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = Tt("", "selfClosing") : s = Tt(e, "closing", i) : r?.markerMode === "visible" && (s = Xr("marker", n ? ct("") : ct(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function rv(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Ku(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function _n(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function nv(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function er(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Rt(t, Tn, () => n);
        continue;
      }
      if (iv(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const pm = [
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
function iv(e) {
  return pm.includes(e);
}
function Bi(e) {
  return Vt(e) && Me(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function hm(e) {
  const t = ts(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function Fu(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(eh(r) && t.offset === 0 || Me(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Bi);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Me(s))
    return !1;
  const o = hm(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function vo(e) {
  const t = P();
  if (!N(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : v(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? Zh(t) : iu(t);
    return Bi(n);
  }
  return Fu(t) && t.isCollapsed();
}
function sv(e) {
  const t = P();
  if (!N(t) || !t.isCollapsed())
    return !1;
  const r = we(t.anchor.getNode(), Me);
  if (!r || !Bi(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return vo(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Bi)) {
    const n = hm(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function bo() {
  const e = P();
  return N(e) && Fu(e), !1;
}
function ov() {
  const e = P();
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !Me(r) || !Bi(r.getFirstChild()) ? !1 : (Dt(r, 1), !0);
}
function av(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => _r(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function cv() {
  const [e] = pe();
  return j(() => lv(e), [e]), j(() => qe(
    e.registerCommand(Ji, vo, Oe),
    e.registerCommand(Fl, vo, Oe),
    e.registerCommand(Po, vo, Oe),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(Po, sv, $r),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(Yi, bo, fe),
    e.registerCommand(sr, bo, fe),
    e.registerCommand(jt, bo, fe),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Zp, bo, fe)
  ), [e]), j(() => qe(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(Bt, () => (ov(), !1), Oe),
    e.registerNodeTransform(Wt, av)
  ), [e]), null;
}
function lv(e) {
  return qe(e.registerCommand(Li, uv, ht), e.registerCommand(Li, (t) => (dv(t), !1), Hn));
}
function uv(e) {
  return fv(e.target), !1;
}
function dv(e) {
  const t = e.target;
  if (Es(t) && Qr(Yr(t)))
    return;
  const r = P();
  N(r) && pv(r);
}
function Ea(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (xt(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === D && (r++, t = t.getNextSibling());
    else if (Te(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r;
}
function tr(e) {
  const t = Ea(e);
  return t === 0 ? !1 : (Dt(e, t), !0);
}
function _s(e) {
  tr(e) || e.selectStart();
}
function fv(e) {
  if (!Es(e))
    return !1;
  const t = Yr(e);
  if (!Qr(t))
    return !1;
  const r = t.getParent();
  return r ? (ze(r) && tr(r) || Dt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function _i() {
  if (Lr().dispatchCommand(gm, void 0))
    return N(P());
  const e = Sn(P());
  return e ? (_s(e), !0) : !1;
}
const gm = la("REPAIR_PARA_MARKER_SELECTION_COMMAND");
function mm(e) {
  const t = Sn(e);
  if (!t)
    return;
  const r = Ea(t), n = t.getChildAtIndex(r - 1);
  return t.getChildAtIndex(r) ?? (Qr(n) ? void 0 : n) ?? t;
}
function pv(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = oe(t.key);
  if (!Je(r))
    return !1;
  const n = r.getFirstChild();
  return !_r(n) && !ui(n) ? !1 : tr(r);
}
function hv() {
  const [e] = pe();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !ym(r) || !Aa() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return qe(
      e.registerCommand(Sr, t, Oe),
      e.registerCommand(Yi, t, Oe),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(sr, t, fe),
      e.registerCommand(jt, t, fe),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(ua, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Yr(r.target);
        return !n || !vn(n) ? !1 : (r.preventDefault(), !0);
      }, Oe),
      e.registerCommand(Ji, t, Oe),
      e.registerCommand(Fl, t, Oe),
      e.registerCommand(Po, t, Oe)
    );
  }, [e]), null;
}
function ym(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function vn(e) {
  return we(e, zu) ?? void 0;
}
function zu(e) {
  return Ve(e) || Ng(e);
}
function Aa() {
  const e = P();
  return N(e) ? vn(e.anchor.getNode()) !== void 0 || vn(e.focus.getNode()) !== void 0 : !1;
}
function gv(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function mv(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), gv(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function yv(e, t, r, n) {
  if (!wv(t) || mv(e, r))
    return !1;
  const i = r === "up" ? fS(t) : dS(t);
  return i && n.preventDefault(), i;
}
function bv({ viewOptions: e }) {
  const [t] = pe();
  return kv(t, e), null;
}
function kv(e, t) {
  j(() => {
    if (!e.hasNodes([jr, Ut, Ie]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = P();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Pf(o), d = Mv(i, Nf(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return yv(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Pf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Nf(a, n.key) ? l = !c && Rf(i, "next") || !c && Tv(i) || Pv(i) || !c && s && Of(i, "next") : xv(a, n.key) && (l = !c && Rf(i, "previous") || !c && Cv(i) || Nv(i, t) || !c && s && Of(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Sr, r, Oe);
  }, [e, t]);
}
function Pf(e) {
  return e.dir || "ltr";
}
function Nf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function xv(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function rl(e) {
  if (!K(e) || e.getMarker() !== "fp")
    return;
  const t = Ht(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function Tv(e) {
  const t = rl(iu(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Dt(t, 0), !0);
}
function Cv(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = rl(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : wf(n);
  }
  if (t.offset === 0) {
    const n = rl(r);
    return n ? wf(n) : !1;
  }
  return !1;
}
function wf(e) {
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
const Vo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function Sv(e) {
  if (Vo)
    for (const { segment: r } of Vo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function _v(e) {
  if (Vo) {
    let n = 0;
    for (const { index: i } of Vo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function bm(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function km(e) {
  return !!e && R(e) && vn(e) !== void 0;
}
function ji(e) {
  return v(e) && !e.isToken() && !km(e) && e.getTextContentSize() > 0;
}
function xm(e) {
  return oi(e) ? !0 : V(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || km(e)) && e.getTextContentSize() > 0 : Nn(e) ? !st(e) : !1;
}
function Vi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Pa(e, t, r) {
  for (let n = e; n; ) {
    if (xm(n))
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
function Bu(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Vi(e, n, i) : r === "text" && xm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Vi(e, n, i);
}
function dc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Bu(e.node, e.offset, e.kind, "previous", t), n = Pa(r, "previous", t);
  if (!n)
    return e;
  if (ji(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function vv(e, t) {
  const r = e.getNode(), n = bm(r);
  if (!n)
    return;
  if (e.type === "text" && ji(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return dc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Bu(r, e.offset, e.type, t, n), s = Pa(i, t, n);
  if (!s)
    return;
  if (ji(s)) {
    const c = s.getTextContent(), l = t === "next" ? Sv(c) : _v(c);
    return dc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return dc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Tm(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = vv(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && L(i.node) ? wu(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Of(e, t) {
  return Tm(e, t, "collapse");
}
function Mv(e, t) {
  return Tm(e, t, "extend");
}
function Ev(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && ji(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Bu(n, e.offset, e.type, t, r);
  return Pa(i, t, r) === void 0;
}
function Av(e, t) {
  const r = Xe();
  for (let n = e; n; ) {
    const i = Vi(n, t, r), s = i && Pa(i, t, r);
    if (!s)
      return;
    if (n = vn(s), !n)
      return s;
  }
}
function Rf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (vn(n))
    return !1;
  const i = bm(n);
  if (!i || !Ev(r, t, i))
    return !1;
  const s = Vi(i, t, Xe()), o = s && vn(s);
  if (!o)
    return !1;
  const a = Av(o, t);
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
function $f(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  wu(t, r);
}
function Pv(e) {
  const t = e.anchor.getNode(), r = iu(e);
  if (V(r) && !R(r.getFirstChild())) {
    if (Je(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(ze(i) && tr(i)) && i.selectStart(), !0;
      }
    } else return Vt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Je(t) && V(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : $f(r), !0;
  }
  const n = r?.getParent();
  if (Vt(r) && V(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? $f(n) : n.selectEnd(), !0;
  }
  return !1;
}
function Nv(e, t) {
  const r = Zh(e);
  if (Xs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && Bi(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Me(o) && !r)
    return !0;
  if (V(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!ui(c) && !Me(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const u = r.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (Je(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = we(c, (u) => V(u));
    if (V(l) && l.getIsCollapsed()) {
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
  if (Ct(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function wv(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Te(t) && Nn(t);
}
function Ov() {
  const [e] = pe();
  return Rv(e), null;
}
function Rv(e) {
  j(() => {
    if (!e.hasNodes([ve]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return qe(
      e.registerNodeTransform(ve, Iv),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ve, LT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ve, kg),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ve, (t) => Ls(Qn("char"), t)),
      e.registerNodeTransform(tt, Lv)
    );
  }, [e]);
}
function fc(e) {
  return e.getChildren().some(R);
}
function $v(e, t) {
  const r = t.getFirstChild();
  if (!R(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Qi(n)) {
    const i = n.getTextContent();
    i.startsWith(D) && (i === D ? n.remove() : n.setTextContent(i.slice(D.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function qv(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  R(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function Iv(e) {
  if (!K(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (fc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ue(e, Yn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (K(i) && Xn({ style: t, cid: r }, i) && Zt(n, i.getUnknownAttributes()))
    if (fc(i)) {
      if ($v(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  K(s) && Xn({ style: t, cid: r }, s) && Zt(n, s.getUnknownAttributes()) && (fc(s) ? qv(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function Lv(e) {
  const t = e.getParent();
  if (!K(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(cr)) {
    const n = P();
    if (N(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function Cm(e) {
  return e.replaceAll("	", " ");
}
function Sm() {
  const e = P();
  return !!e && !e.isCollapsed();
}
function _m(e) {
  const t = () => !Sm();
  return qe(e.registerCommand(xn, t, ht), e.registerCommand(jt, t, ht));
}
const ju = (e) => {
  e.dispatchCommand(xn, null);
}, Vu = (e) => {
  e.dispatchCommand(jt, null);
}, Wu = (e) => {
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
      n.setData(o, Cm(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(sr, s);
  });
}, Hu = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Cm(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(sr, i);
  });
};
function Dv() {
  const [e] = pe();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Gn ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), ju(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Vu(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Hu(e) : Wu(e)));
    };
    return qe(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      _m(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function Uv({ logger: e }) {
  const [t] = pe();
  return j(() => qe(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Sr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), $r),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(sr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, $r),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(ua, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, $r)
  ), [t, e]), null;
}
const Wo = "editor-context-menu";
function nl(e) {
  return `${Wo}-item-${e}`;
}
const Kv = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function Fv({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), M("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: nl(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: M("span", { className: "text", children: i.title }) });
}
function zv({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return M("div", { className: "typeahead-popover", children: M("ul", { id: Wo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => M(Fv, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let Bv = 0;
class ds {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${Bv++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function jv({ options: e } = {}) {
  const [t] = pe(), [r, n] = xe(() => !t.isEditable()), [i, s] = xe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = xe(void 0), c = et(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new ds("Cut", {
        onSelect: () => {
          Vu(t);
        },
        isDisabled: r
      }),
      new ds("Copy", {
        onSelect: () => {
          ju(t);
        }
      }),
      new ds("Paste", {
        onSelect: () => {
          Wu(t);
        },
        isDisabled: r
      }),
      new ds("Paste as Plain Text", {
        onSelect: () => {
          Hu(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((h) => new ds(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = ee(null), u = ee(null), d = Se(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return j(() => _m(t), [t]), j(() => {
    const f = (p) => {
      const h = p.target;
      t.getRootElement() === h || Vh(h) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, h) => {
      h?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), j(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const h = p.target;
      h instanceof Node && l.current?.contains(h) || d();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, d]), j(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      d();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, d]), j(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      if (p.isComposing || p.keyCode === 229)
        return;
      if (p.key === "Escape") {
        p.preventDefault(), d();
        return;
      }
      const h = document.activeElement;
      if (!(h && h !== document.body && h !== u.current && !t.getRootElement()?.contains(h) && !l.current?.contains(h)))
        if (p.key === "ArrowDown")
          p.preventDefault(), p.stopPropagation(), a((g) => g === void 0 ? 0 : (g + 1) % c.length);
        else if (p.key === "ArrowUp")
          p.preventDefault(), p.stopPropagation(), a((g) => g === void 0 ? c.length - 1 : (g - 1 + c.length) % c.length);
        else if (p.key === "Enter") {
          p.preventDefault(), p.stopPropagation();
          const g = o === void 0 ? void 0 : c[o];
          g && !g.isDisabled && (t.update(() => {
            g.onSelect();
          }), d());
        } else {
          if (Kv.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, d, c, o, t]), j(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", Wo), () => {
        f.removeAttribute("aria-controls"), f.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), j(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (!f)
      return;
    if (o === void 0) {
      f.removeAttribute("aria-activedescendant");
      return;
    }
    f.setAttribute("aria-activedescendant", nl(o));
    const p = document.getElementById(Wo), h = document.getElementById(nl(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), y = h.getBoundingClientRect(), b = y.top - g.top + p.scrollTop, T = y.bottom - g.top + p.scrollTop;
    b < p.scrollTop ? p.scrollTop = b : T > p.scrollTop + p.clientHeight && (p.scrollTop = T - p.clientHeight);
  }, [t, i.isOpen, o]), j(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), Gs(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: h } = f.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), y = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    f.style.left = `${g}px`, f.style.top = `${y}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Lk.createPortal(M("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: M(zv, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), d());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function Vv(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function Wv(e) {
  if (!mk(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function Hv(e, t) {
  return t && Qr(e) || Ct(e);
}
function pc(e, t, r, n) {
  const i = Yr(t.node);
  if (!Nn(i) || Hv(i, n))
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
function Gv(e, t) {
  if (P())
    return !1;
  const r = e.getRootElement(), n = th(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !rh(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = pc(e, c, Wv(c), !0), d = u;
  else {
    const y = Vv(n.getRangeAt(0), c);
    u = pc(e, c, y ? "before" : "after", !1), d = pc(e, l, y ? "after" : "before", !1);
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, h = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = zl(h, e);
  return g ? (zt(g), g.dirty = !t, t) : !1;
}
function Jv() {
  const [e] = pe(), t = ee(!1), r = ee(!1);
  return j(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = P();
        N(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), j(() => e.registerCommand(Bt, () => (Gv(e, t.current) && (r.current = !0), !1), fe), [e]), null;
}
function Yv() {
  const [e] = pe();
  return j(() => e.registerCommand(Sr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Gn ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, fe), [e]), null;
}
function Xv({ isEditable: e }) {
  const [t] = pe();
  return Gs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Gu(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Rr(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function hc(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = P();
    if (!N(i))
      return !1;
    const s = zl(r, e);
    return !!s && i.is(s);
  }, { editor: e }) || r.removeAllRanges();
}
function Pi(e, t) {
  let r;
  try {
    r = Lr();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function qf(e) {
  return !!e && Zs(oe(e));
}
function Ju(e) {
  const [t] = pe(), r = ee(void 0), n = Se((i) => {
    const s = P(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = qf(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = ts(u, d), p = Zs(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const h = cT();
        i.insertAfter(h), r.current = h.getKey(), l = h.getKey();
      }
      Dt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = oe(a);
      v(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = P(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (vt($t), Rr(t, $t), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Qs(c) || !c.includes(Ui))
        return;
      const l = P(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (lT(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Ui).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = qe(t.registerCommand(Bt, () => (i(), !1), Hn), t.registerCommand(Bl, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = qf(a);
      }), c && t.update(() => {
        const l = oe(a);
        v(l) && l.remove();
      }, { tag: $t }), r.current = void 0, !1;
    }, Hn), t.registerNodeTransform(tt, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function Qv() {
  const e = P();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = V(r) ? r : r.getParent();
  if (!V(n))
    return;
  const i = f_(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && Zs(s); )
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
function Zv() {
  return Ju(Qv), null;
}
function eM() {
  const e = P();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!Te(i) || ts(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || Te(s))
    return i;
}
function tM() {
  return Ju(eM), null;
}
function rM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = pe();
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
        const u = Gu(o);
        o.update(() => {
          u || vt(pr), o.setEditorState(l), o.dispatchCommand(yk, void 0);
        }, { tag: Gl });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const gc = "caller_highlight", nM = Pn(function(t, r) {
  const [n] = pe(), i = ee(void 0), s = ee(void 0), o = Se(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const u = wr(a);
      return u ? (u.getChildren().find(Ct) ?? en(u))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(gc), l?.classList.add(gc), s.current = l;
  }, [n]);
  return aa(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Pi(n, () => wr(a)?.getKey()), o();
    }
  }), [n, o]), j(() => qe(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Ie, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const d = l.has(Gl) ? void 0 : c.read(() => Mu(u)), f = d === void 0 ? void 0 : n.getEditorState().read(() => wr(d)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), j(() => () => s.current?.classList.remove(gc), []), null;
});
function iM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = pe();
  return sM(t, n), oM(i, e, r, n), null;
}
function sM(e, t) {
  const r = ee(void 0), n = ee(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = QS), r.current !== o && (r.current = o, If("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = ZS), n.current !== o && (n.current = o, If("cross-ref-callers", o, t));
  }, [t, s]);
}
function oM(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([ve, Ie, yr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => pM(s));
    return qe(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ie, (s) => aM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ve, cM),
      e.registerNodeTransform(tt, lM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(yr, uM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(yr, (s, { prevEditorState: o }) => dM(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Bt, () => fM(e, t, r, n), ht),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function aM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Ct(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !R(i) && i.getTextContent() !== Gt(e.getCaller()) && e.insertBefore(i);
  }
}
function cM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => Ct(s));
  if (!K(e) || !V(t) || !n)
    return;
  const i = su(r);
  n.getPreviewText() !== i && n.setPreviewText(i), Mm(e);
}
function vm(e) {
  const t = P();
  if (!N(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function Mm(e) {
  const t = e.getNextSibling();
  if (v(t) && !R(t)) {
    if (t.getTextContent() === D || vm(t))
      return;
    if (vr(t)) {
      t.setTextContent(D);
      return;
    }
  }
  e.insertAfter(to());
}
function lM(e) {
  const t = Ht(e), r = t?.getChildren(), n = r?.find((a) => Ct(a));
  if (!v(e) || !V(t) || !n || !r)
    return;
  const i = e.getParent(), s = vr(e) || vm(e);
  if (!R(e) && V(i) && s && e.getTextContent() !== D && (e.setTextContent(D), e.selectEnd()), K(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(cr) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = su(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function uM(e) {
  Ct(e) && Mm(e);
}
function dM(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = oe(r), a = o?.getParent();
      return Ct(o) && V(a) && a.getCaller() === Ps;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function fM(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = P();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = we(o, (c) => V(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = oe(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), fs(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (V(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, fs(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (V(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, fs(e, c, n);
    } else if (!a) {
      const c = we(o, (l) => V(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      Je(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, fs(e, l, n);
      }
    }
  }
  if (ze(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (ui(c) && V(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, fs(e, l, n);
    }
  }
  return !1;
}
function fs(e, t, r) {
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
function pM(e) {
  const t = P();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (V(i) && v(s)) {
    e.preventDefault();
    const o = kn();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), zt(o);
  }
}
function If(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (hM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function hM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Ir(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!R(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = en(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function gM(e) {
  const t = e.getParent();
  if (V(t))
    return Ir(t).some((r) => r.is(e)) ? t : void 0;
}
function ti(e) {
  const t = Ir(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function mM(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function yM(e) {
  const t = kk();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ti(e);
  const i = mM(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ti(e);
}
function Oi(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = gM(t);
  if (r)
    return Em(r, t, e.offset) ? void 0 : r;
}
function Em(e, t, r) {
  const n = Ir(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function bM(e) {
  const t = Ir(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Dt(e, ti(e));
}
function kM(e = !1) {
  const t = P();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return wm(t);
  const r = Am(t.anchor);
  if (r) {
    const i = Go(r);
    return t.anchor.is(i) ? !1 : (Pm(t, i), !0);
  }
  const n = Oi(t.anchor);
  if (!n)
    return !1;
  if (!e && yM(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    Dt(i, n.getIndexWithinParent());
  } else
    bM(n);
  return !0;
}
function Ho(e) {
  const t = Ir(e), r = t[t.length - 1];
  return v(r) ? gr(r.getKey(), r.getTextContentSize(), "text") : gr(e.getKey(), ti(e), "element");
}
function Wi(e) {
  const t = e.getLastChild();
  return R(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function mc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === Wi(e) && R(r) && t.offset > 0;
}
function il(e) {
  const t = Wi(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function Go(e) {
  const t = Wi(e);
  if (t > ti(e)) {
    const r = e.getChildAtIndex(t - 1), n = L(r) ? r.getLastDescendant() : r;
    if (v(n))
      return gr(n.getKey(), n.getTextContentSize(), "text");
  }
  return Ho(e);
}
function Am(e) {
  const t = e.getNode(), r = t.getParent();
  if (V(r) && Ir(r).length > 0 && il(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (V(t) && Ir(t).length > 0 && il(t))
    return e.offset > Wi(t) || e.offset === Wi(t) && e.offset > ti(t) ? t : void 0;
  if (!L(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return V(n) && Ir(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function Pm(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function Nm(e) {
  const t = Ht(e);
  return t && Ir(t).length > 0 ? t : void 0;
}
function xM(e) {
  const t = [], r = (n) => {
    const i = Nm(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function wm(e) {
  const t = xM(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => gr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const u = gr(l.getKey(), ti(l), "element"), d = gr(l.getKey(), Wi(l), "element"), f = i.type === "text" && Em(l, i.getNode(), i.offset), p = i.isBefore(u) && !f;
    (Oi(i) || mc(l, i) || p) && (!s.isBefore(u) || Oi(s)) && (i = mc(l, i) ? Go(l) : Ho(l), o = !0), (Oi(s) || mc(l, s) || d.isBefore(s)) && (i.isBefore(d) || i.is(d)) && (s = Oi(s) ? Ho(l) : Go(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function Lf(e, t) {
  const r = kn();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function Df(e, t) {
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
function Uf(e, t, r) {
  const n = Df(e, t), i = Df(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function TM(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return L(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function CM(e, t, r, n) {
  const i = t.anchor, s = Am(i);
  if (s)
    return Pm(t, Go(s)), !0;
  const o = Nm(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const d = TM(t.focus);
    return V(d) && Ir(d).length > 0;
  }
  if (Oi(i))
    return !0;
  const a = Ho(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const d = Lf(a, i);
    return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && Uf(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = il(o);
  if (!c)
    return !1;
  const l = gr(c.getKey(), 0, "text"), u = Lf(i, l);
  return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && Uf(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function SM() {
  const [e] = pe(), t = ee(!1);
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
  }, [e]), j(() => {
    const r = (o) => () => {
      const a = P();
      return !N(a) || a.isCollapsed() || !wm(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = P();
      return N(c) ? c.isCollapsed() ? CM(e, c, a, o) : i() : !1;
    };
    return qe(e.registerCommand(Yi, n, fe), e.registerCommand(sr, n, fe), e.registerCommand(As, n, fe), e.registerCommand(bk, n, fe), e.registerCommand(Ji, s("character"), fe), e.registerCommand(Fl, s("word"), fe), e.registerCommand(Po, s("line"), fe), e.registerCommand(Zp, i, fe), e.registerCommand(jt, i, fe));
  }, [e]), j(() => e.registerCommand(Bt, () => (kM(t.current) && (vt($t), Rr(e, $t)), !1), Hn), [e]), null;
}
function _M({ onChange: e }) {
  const [t] = pe();
  return j(() => t.registerCommand(Bt, () => {
    const r = Au();
    return e?.(r), !1;
  }, ht), [t, e]), null;
}
function Om(e) {
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
  return e ? Je(e) ? e : we(e, (r) => Je(r)) ?? void 0 : void 0;
}
function Rm(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = rn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Yu(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !si(e) ? !1 : e.getNodes().some((t) => Te(t));
}
function Xu(e) {
  if (!N(e) || !e.isCollapsed())
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
function vM(e) {
  if (!e || !Xu(e) || !N(e))
    return;
  const t = rn(e.anchor.getNode());
  return le(t) && au(t) ? t : void 0;
}
function $m(e) {
  if (!N(e) || !e.isCollapsed())
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
function Kf(e, t) {
  return !!sl(e, t);
}
function sl(e, t) {
  if (!N(e) || !e.isCollapsed())
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
function Jo(e, t) {
  if (!N(e))
    return !1;
  const r = rn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function qi(e) {
  return Yu(e) || Rm(e);
}
function ol(e, t) {
  if (Yu(e) || Rm(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Xu(e) && Jo(e, "backward") || Kf(e, "backward");
    case "deleteForward":
      return $m(e) && Jo(e, "forward") || Kf(e, "forward");
    case "insertText":
      return !1;
  }
}
function MM(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = sl(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Xu(e) && Jo(e, "backward")) {
        const n = rn(e.anchor.getNode());
        if (ze(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = sl(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if ($m(e) && Jo(e, "forward")) {
        const i = rn(e.anchor.getNode())?.getNextSibling();
        if (ze(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Ff(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return si(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = rn(e.anchor.getNode()), n = rn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function qm(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function al(e) {
  const t = e.getPreviousSibling();
  if (!Je(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = xt(n), s = e.getChildren().filter((o) => !vr(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), Im(t, r);
}
function Im(e, t) {
  !t || xt(t) || vr(t) ? _s(e) : v(t) ? qm(t) : Dt(e, t.getIndexWithinParent() + 1);
}
function Lm(e) {
  return Te(e) || rt(e) ? [] : ze(e) ? e.getChildren().flatMap(Lm) : [e];
}
function EM(e) {
  const t = [];
  for (const r of e) {
    const n = Lm(r);
    n.length !== 0 && (ze(r) && t.length > 0 && t.push(Ne(" ")), t.push(...n));
  }
  return t;
}
const AM = "psc-para-marker-selected", PM = /* @__PURE__ */ new Set(["Process", "Dead"]), NM = /* @__PURE__ */ new Set([
  "insertReplacementText",
  "insertFromDrop",
  "insertFromYank",
  "insertFromPaste",
  "insertFromPasteAsQuotation"
]);
function wM({ onParaMarkerMenuRequest: e, structureProtectionMode: t = "off" }) {
  const [r] = pe(), n = ee(e);
  j(() => {
    n.current = e;
  }, [e]);
  const i = ee(t);
  return j(() => {
    i.current = t;
  }, [t]), j(() => {
    let s, o, a, c = !1, l;
    const u = () => {
      queueMicrotask(() => n.current?.());
    }, d = () => r.isEditable() ? Sn(P()) : void 0, f = (z) => {
      i.current !== "protected" && al(z);
    }, p = (z) => {
      const Y = r.getRootElement(), se = th(Y?.ownerDocument.defaultView ?? null), X = se?.anchorNode;
      if (!se || !X || !Y?.contains(X) || r.getElementByKey(z)?.contains(X))
        return !1;
      const A = zl(se, r);
      return A ? (zt(A), !0) : !1;
    }, h = (z, Y) => {
      const se = z?.startContainer;
      if (!z || !se || !r.getRootElement()?.contains(se) || r.getElementByKey(Y)?.contains(se))
        return !1;
      const X = kn();
      X.applyDOMRange(z);
      const { anchor: A } = X;
      return A.key === "root" && A.offset === 0 && A.type === "element" ? !1 : (zt(X), !0);
    }, g = (z) => {
      const Y = Es(z.target) ? Yr(z.target) : null;
      if (Qr(Y))
        return CT(Y);
      const se = mn(P()), X = se?.getParent();
      if (!se || !ze(X) || !Y || p(se.getKey()) || !Nn(Y))
        return !1;
      const A = we(Y, ze), te = A ? we(Y, (he) => he.getParent()?.is(A) ?? !1) : void 0;
      return ze(A) && te ? Dt(A, te.getIndexWithinParent() + 1) : _s(X), !1;
    }, y = (z) => {
      if (typeof z.key != "string" || $())
        return !1;
      const Y = d();
      if (!Y)
        return !1;
      const se = n.current !== void 0;
      switch (z.key) {
        case "Enter":
          if (!se || z.shiftKey || z.ctrlKey || z.metaKey || z.altKey)
            break;
          return z.preventDefault(), u(), !0;
        case "ArrowDown":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
          return z.preventDefault(), z.key === "ArrowDown" && z.altKey && se ? u() : tr(Y), !0;
        case "Backspace":
        case "Delete":
          return z.preventDefault(), f(Y), !0;
        // A virtual keyboard names no key; the `beforeinput` that follows says what it does.
        case "Unidentified":
          return !1;
        default:
          if (!RM(z))
            return !1;
      }
      return tr(Y), !1;
    }, b = (z) => {
      if (!r.isEditable())
        return !1;
      const Y = d();
      if (Y)
        return f(Y), !0;
      if (!z || i.current !== "off")
        return !1;
      const se = vM(P());
      return se ? (al(se), !0) : !1;
    }, T = (z) => {
      if ($())
        return !1;
      const Y = d();
      if (!Y)
        return !1;
      const { inputType: se } = z;
      if (se.startsWith("delete"))
        return z.preventDefault(), f(Y), !0;
      if (se === "insertParagraph" && n.current)
        return z.preventDefault(), u(), !0;
      if (!se.startsWith("insert"))
        return !1;
      const X = Y.getFirstChildOrThrow().getKey();
      return NM.has(se) && (h(z.getTargetRanges?.()[0], X) || p(X)) || tr(Y), !1;
    }, k = () => {
      const z = d();
      return z && tr(z), !1;
    }, E = () => {
      const z = d();
      return z && (p(z.getFirstChildOrThrow().getKey()) || tr(z)), !1;
    }, S = (z) => (Y) => {
      const se = mn(P());
      return !se || !r.isEditable() ? !1 : p(se.getKey()) ? (r.dispatchCommand(z, Y), !0) : (qM(Y) && Y.preventDefault(), !0);
    }, O = (z) => {
      if (!Es(z.target))
        return !1;
      const Y = mn(P());
      if (!Y)
        return !1;
      if (Yr(z.target)?.is(Y))
        return z.preventDefault(), !0;
      const se = r.getRootElement()?.ownerDocument;
      return h(se && LM(se, z.clientX, z.clientY), Y.getKey()), !1;
    }, q = () => {
      const z = d();
      return z ? (tr(z), !0) : !1;
    }, F = () => r.getEditorState().read(() => mn(P()) !== void 0), B = () => {
      if (c || !r.isEditable() || !F())
        return !1;
      const z = r.getRootElement();
      bc(z);
      const Y = z?.ownerDocument.defaultView;
      return l !== void 0 && Y?.clearTimeout(l), l = Y?.setTimeout(() => {
        l = void 0, !c && r.isEditable() && F() && bc(z);
      }), !1;
    }, ae = (z) => {
      "button" in z && z.button !== 0 || (c = !0);
    }, Q = () => {
      c = !1;
    }, ge = (z) => {
      z.addEventListener("pointerdown", ae, !0), z.addEventListener("pointerup", Q, !0), z.addEventListener("pointercancel", Q, !0);
    }, ne = (z) => {
      z.removeEventListener("pointerdown", ae, !0), z.removeEventListener("pointerup", Q, !0), z.removeEventListener("pointercancel", Q, !0);
    }, $ = () => {
      const z = P();
      if (!a || !Dm(z, a.glyphKey))
        return !1;
      const { paraKey: Y, previousKey: se, nextKey: X } = a;
      a = void 0;
      const A = oe(Y), te = se ? oe(se) : null, he = X ? oe(X) : null;
      return ze(A) && A.isAttached() ? _s(A) : ze(te) && te.isAttached() ? Im(te, te.getLastChild()) : ze(he) && he.isAttached() ? _s(he) : zt(null), !0;
    }, G = (z) => {
      const Y = r.isEditable() ? z : void 0, se = Y?.paraKey;
      s !== se && yc(r, s, !1), s = se, yc(r, se, !0), o = zf(r, o, Y?.glyphKey);
    }, ye = (z = r.getEditorState()) => z.read(() => {
      const Y = mn(P()), se = Y?.getParent();
      if (!(!Y || !se))
        return {
          glyphKey: Y.getKey(),
          paraKey: se.getKey(),
          previousKey: se.getPreviousSibling()?.getKey(),
          nextKey: se.getNextSibling()?.getKey()
        };
    }), be = qe(xT(r), r.registerEditableListener(() => G(ye())), r.registerRootListener((z, Y) => {
      Y && ne(Y.ownerDocument), z && ge(z.ownerDocument);
    }), () => {
      const z = r.getRootElement()?.ownerDocument;
      z && ne(z), l !== void 0 && z?.defaultView?.clearTimeout(l);
    }, r.registerCommand(Li, g, fe), r.registerCommand(Sr, y, fe), r.registerCommand(jl, q, fe), r.registerCommand(Ji, b, fe), r.registerCommand(xk, T, fe), r.registerCommand(Tk, k, fe), r.registerCommand(Yi, k, fe), r.registerCommand(sr, E, fe), r.registerCommand(jt, S(jt), fe), r.registerCommand(xn, S(xn), fe), r.registerCommand(Rc, S(Rc), fe), r.registerCommand(ua, O, fe), r.registerCommand(Vl, B, fe), r.registerCommand(gm, $, fe), r.registerUpdateListener(({ editorState: z }) => {
      const Y = ye(z);
      (Y || !OM(z, a?.glyphKey)) && (a = Y), G(Y), Y && r.isEditable() && bc(r.getRootElement());
    }));
    return () => {
      be(), yc(r, s, !1), zf(r, o, void 0);
    };
  }, [r]), null;
}
function Dm(e, t) {
  return !si(e) || mn(e) ? !1 : e.has(t) || e.getNodes().length === 0;
}
function OM(e, t) {
  return t === void 0 ? !1 : e.read(() => Dm(P(), t));
}
function RM(e) {
  return ym(e) || PM.has(e.key) ? !0 : e.ctrlKey || e.metaKey || e.altKey && !Gn ? !1 : $M(e.key);
}
function $M(e) {
  return [...e].length === 1;
}
function qM(e) {
  return typeof e == "object" && e !== null && typeof e.preventDefault == "function";
}
function yc(e, t, r) {
  if (t === void 0)
    return;
  const n = e.getElementByKey(t);
  n && n.classList.toggle(AM, r);
}
const IM = "psc-para-marker-";
function zf(e, t, r) {
  const n = e.getRootElement(), i = r === void 0 ? null : e.getElementByKey(r), s = t === void 0 ? null : e.getElementByKey(t);
  if (s && s !== i && (s.removeAttribute("role"), s.removeAttribute("aria-selected")), !!n) {
    if (!i || r === void 0) {
      t !== void 0 && n.removeAttribute("aria-activedescendant");
      return;
    }
    return i.id || (i.id = `${IM}${e.getKey()}-${r}`), i.setAttribute("role", "option"), i.setAttribute("aria-selected", "true"), n.setAttribute("aria-activedescendant", i.id), r;
  }
}
function bc(e) {
  if (!e)
    return;
  const t = e.ownerDocument.defaultView?.getSelection();
  !t || t.rangeCount === 0 || t.anchorNode && e.contains(t.anchorNode) && t.removeAllRanges();
}
function LM(e, t, r) {
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
function DM() {
  const [e] = pe();
  return UM(e), null;
}
function UM(e) {
  j(() => {
    if (!e.hasNodes([pt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(pt, (t) => KM(t, e));
  }, [e]);
}
function KM(e, t) {
  Yc(t, e.getKey()) && Bg(e.getFirstChild()), !(!le(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = oe(e.getKey());
    return le(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Um({ onStateChange: e }) {
  const [t] = pe(), [r, n] = xe(t), i = ee(!1), s = ee(!1), o = ee(void 0), a = ee(void 0), c = Se(() => {
    const l = P(), u = r.isEditable() ? Sn(l) : void 0;
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
    if (N(l)) {
      const f = l.anchor.getNode(), p = l.focus.getNode();
      let h = f.getKey() === "root" ? f : we(f, (T) => {
        const k = T.getParent();
        return k !== null && Ck(k);
      });
      h === null && (h = f.getTopLevelElementOrThrow()), Ds(h) && (h = we(f, le) ?? h);
      const g = h.getKey(), y = r.getElementByKey(g), b = hT(f, p);
      if (b && uS(b) && (d = b.getMarker()), y !== null && (le(h) || Me(h) || Xs(h))) {
        o.current = h.getMarker(), a.current = d, e?.({
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
  return j(() => t.registerCommand(Bt, (l, u) => (c(), n(u), !1), fe), [t, c]), j(() => qe(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Sk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), fe), r.registerCommand(_k, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), fe)), [c, r, e]), null;
}
function Bf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function FM(e) {
  if (Array.isArray(e)) return e;
}
function zM(e, t) {
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
function BM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jM(e, t) {
  return FM(e) || zM(e, t) || VM(e, t) || BM();
}
function VM(e, t) {
  if (e) {
    if (typeof e == "string") return Bf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Bf(e, t) : void 0;
  }
}
const Km = Object.entries, jf = Object.setPrototypeOf, WM = Object.isFrozen, HM = Object.getPrototypeOf, GM = Object.getOwnPropertyDescriptor;
let gt = Object.freeze, yt = Object.seal, Ni = Object.create, Fm = typeof Reflect < "u" && Reflect, cl = Fm.apply, ll = Fm.construct;
gt || (gt = function(t) {
  return t;
});
yt || (yt = function(t) {
  return t;
});
cl || (cl = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
ll || (ll = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const vi = at(Array.prototype.forEach), JM = at(Array.prototype.lastIndexOf), Vf = at(Array.prototype.pop), Mi = at(Array.prototype.push), YM = at(Array.prototype.splice), yn = Array.isArray, bs = at(String.prototype.toLowerCase), kc = at(String.prototype.toString), Wf = at(String.prototype.match), ps = at(String.prototype.replace), Hf = at(String.prototype.indexOf), XM = at(String.prototype.trim), QM = at(Number.prototype.toString), ZM = at(Boolean.prototype.toString), Gf = typeof BigInt > "u" ? null : at(BigInt.prototype.toString), Jf = typeof Symbol > "u" ? null : at(Symbol.prototype.toString), dt = at(Object.prototype.hasOwnProperty), hs = at(Object.prototype.toString), ut = at(RegExp.prototype.test), Fn = eE(TypeError);
function at(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return cl(e, t, n);
  };
}
function eE(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ll(e, r);
  };
}
function Ce(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : bs;
  if (jf && jf(e, null), !yn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (WM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function tE(e) {
  for (let t = 0; t < e.length; t++)
    dt(e, t) || (e[t] = null);
  return e;
}
function kt(e) {
  const t = Ni(null);
  for (const n of Km(e)) {
    var r = jM(n, 2);
    const i = r[0], s = r[1];
    dt(e, i) && (yn(s) ? t[i] = tE(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = kt(s) : t[i] = s);
  }
  return t;
}
function rE(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return QM(e);
    case "boolean":
      return ZM(e);
    case "bigint":
      return Gf ? Gf(e) : "0";
    case "symbol":
      return Jf ? Jf(e) : "Symbol()";
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
    const n = GM(e, t);
    if (n) {
      if (n.get)
        return at(n.get);
      if (typeof n.value == "function")
        return at(n.value);
    }
    e = HM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function nE(e) {
  try {
    return ut(e, ""), !0;
  } catch {
    return !1;
  }
}
const Yf = gt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xc = gt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Tc = gt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), iE = gt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Cc = gt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), sE = gt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xf = gt(["#text"]), Qf = gt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Sc = gt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Zf = gt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ko = gt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), oE = yt(/{{[\w\W]*|^[\w\W]*}}/g), aE = yt(/<%[\w\W]*|^[\w\W]*%>/g), cE = yt(/\${[\w\W]*/g), lE = yt(/^data-[\-\w.\u00B7-\uFFFF]+$/), uE = yt(/^aria-[\-\w]+$/), ep = yt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dE = yt(/^(?:\w+script|data):/i), fE = yt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), pE = yt(/^html$/i), hE = yt(/^[a-z][.\w]*(-[.\w]+)+$/i), tp = yt(/<[/\w!]/g), rp = yt(/<[/\w]/g), gE = yt(/<\/no(script|embed|frames)/i), mE = yt(/\/>/i), Ft = {
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
}, yE = function() {
  return typeof window > "u" ? null : window;
}, bE = function(t, r) {
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
}, np = function() {
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
  return dt(t, r) && yn(t[r]) ? Ce(i.base ? kt(i.base) : {}, t[r], i.transform) : n;
};
function zm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yE();
  const t = (W) => zm(W);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Ft.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = dr(f, "cloneNode"), h = dr(f, "remove"), g = dr(f, "nextSibling"), y = dr(f, "childNodes"), b = dr(f, "parentNode"), T = dr(f, "shadowRoot"), k = dr(f, "attributes"), E = o && o.prototype ? dr(o.prototype, "nodeType") : null, S = o && o.prototype ? dr(o.prototype, "nodeName") : null, O = o && o.prototype ? dr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const W = r.createElement("template");
    W.content && W.content.ownerDocument && (r = W.content.ownerDocument);
  }
  let q, F = "", B, ae = !1, Q = 0;
  const ge = function() {
    if (Q > 0)
      throw Fn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ne = function(m) {
    ge(), Q++;
    try {
      return q.createHTML(m);
    } finally {
      Q--;
    }
  }, $ = function(m) {
    ge(), Q++;
    try {
      return q.createScriptURL(m);
    } finally {
      Q--;
    }
  }, G = function() {
    return ae || (B = bE(d, i), ae = !0), B;
  }, ye = r, be = ye.implementation, z = ye.createNodeIterator, Y = ye.createDocumentFragment, se = ye.getElementsByTagName, X = n.importNode;
  let A = np();
  t.isSupported = typeof Km == "function" && typeof b == "function" && be && be.createHTMLDocument !== void 0;
  const te = oE, he = aE, Ee = cE, lt = lE, bt = uE, ie = dE, Qe = fE, Ka = hE;
  let fi = ep, Ae = null;
  const Ze = Ce({}, [...Yf, ...xc, ...Tc, ...Cc, ...Xf]);
  let ke = null;
  const Pt = Ce({}, [...Qf, ...Sc, ...Zf, ...ko]);
  let De = Object.seal(Ni(null, {
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
  let is = !0, Wr = !0, On = !1, ao = !0, Nt = !1, Qt = !0, Er = !1, pi = !1, hi = null, Rn = null, w = !1, I = !1, H = !1, J = !1, _e = !0, Le = !1;
  const We = "user-content-";
  let it = !0, St = !1, Hr = {}, Kt = null;
  const gi = Ce({}, [
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
  const co = Ce({}, ["audio", "video", "img", "source", "image", "track"]);
  let ss = null;
  const $n = Ce({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), lo = "http://www.w3.org/1998/Math/MathML", uo = "http://www.w3.org/2000/svg", Ar = "http://www.w3.org/1999/xhtml";
  let mi = Ar, Fa = !1, za = null;
  const Db = Ce({}, [lo, uo, Ar], kc), Cd = gt(["mi", "mo", "mn", "ms", "mtext"]);
  let Ba = Ce({}, Cd);
  const Sd = gt(["annotation-xml"]);
  let ja = Ce({}, Sd);
  const Ub = Ce({}, ["title", "style", "font", "a", "script"]);
  let os = null;
  const Kb = ["application/xhtml+xml", "text/html"], Fb = "text/html";
  let He = null, yi = null;
  const zb = r.createElement("form"), _d = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Va = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (yi && yi === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = kt(m), os = // eslint-disable-next-line unicorn/prefer-includes
    Kb.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? Fb : m.PARSER_MEDIA_TYPE, He = os === "application/xhtml+xml" ? kc : bs, Ae = hn(m, "ALLOWED_TAGS", Ze, {
      transform: He
    }), ke = hn(m, "ALLOWED_ATTR", Pt, {
      transform: He
    }), za = hn(m, "ALLOWED_NAMESPACES", Db, {
      transform: kc
    }), ss = hn(m, "ADD_URI_SAFE_ATTR", $n, {
      transform: He,
      base: $n
    }), ur = hn(m, "ADD_DATA_URI_TAGS", co, {
      transform: He,
      base: co
    }), Kt = hn(m, "FORBID_CONTENTS", gi, {
      transform: He
    }), lr = hn(m, "FORBID_TAGS", kt({}), {
      transform: He
    }), oo = hn(m, "FORBID_ATTR", kt({}), {
      transform: He
    }), Hr = dt(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? kt(m.USE_PROFILES) : m.USE_PROFILES : !1, is = m.ALLOW_ARIA_ATTR !== !1, Wr = m.ALLOW_DATA_ATTR !== !1, On = m.ALLOW_UNKNOWN_PROTOCOLS || !1, ao = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Nt = m.SAFE_FOR_TEMPLATES || !1, Qt = m.SAFE_FOR_XML !== !1, Er = m.WHOLE_DOCUMENT || !1, I = m.RETURN_DOM || !1, H = m.RETURN_DOM_FRAGMENT || !1, J = m.RETURN_TRUSTED_TYPE || !1, w = m.FORCE_BODY || !1, _e = m.SANITIZE_DOM !== !1, Le = m.SANITIZE_NAMED_PROPS || !1, it = m.KEEP_CONTENT !== !1, St = m.IN_PLACE || !1, fi = nE(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : ep, mi = typeof m.NAMESPACE == "string" ? m.NAMESPACE : Ar, Ba = dt(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? kt(m.MATHML_TEXT_INTEGRATION_POINTS) : Ce({}, Cd), ja = dt(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? kt(m.HTML_INTEGRATION_POINTS) : Ce({}, Sd);
    const _ = dt(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? kt(m.CUSTOM_ELEMENT_HANDLING) : Ni(null);
    if (De = Ni(null), dt(_, "tagNameCheck") && _d(_.tagNameCheck) && (De.tagNameCheck = _.tagNameCheck), dt(_, "attributeNameCheck") && _d(_.attributeNameCheck) && (De.attributeNameCheck = _.attributeNameCheck), dt(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (De.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), yt(De), Nt && (Wr = !1), H && (I = !0), Hr && (Ae = Ce({}, Xf), ke = Ni(null), Hr.html === !0 && (Ce(Ae, Yf), Ce(ke, Qf)), Hr.svg === !0 && (Ce(Ae, xc), Ce(ke, Sc), Ce(ke, ko)), Hr.svgFilters === !0 && (Ce(Ae, Tc), Ce(ke, Sc), Ce(ke, ko)), Hr.mathMl === !0 && (Ce(Ae, Cc), Ce(ke, Zf), Ce(ke, ko))), Xt.tagCheck = null, Xt.attributeCheck = null, dt(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Xt.tagCheck = m.ADD_TAGS : yn(m.ADD_TAGS) && (Ae === Ze && (Ae = kt(Ae)), Ce(Ae, m.ADD_TAGS, He))), dt(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Xt.attributeCheck = m.ADD_ATTR : yn(m.ADD_ATTR) && (ke === Pt && (ke = kt(ke)), Ce(ke, m.ADD_ATTR, He))), dt(m, "ADD_URI_SAFE_ATTR") && yn(m.ADD_URI_SAFE_ATTR) && Ce(ss, m.ADD_URI_SAFE_ATTR, He), dt(m, "FORBID_CONTENTS") && yn(m.FORBID_CONTENTS) && (Kt === gi && (Kt = kt(Kt)), Ce(Kt, m.FORBID_CONTENTS, He)), dt(m, "ADD_FORBID_CONTENTS") && yn(m.ADD_FORBID_CONTENTS) && (Kt === gi && (Kt = kt(Kt)), Ce(Kt, m.ADD_FORBID_CONTENTS, He)), it && (Ae["#text"] = !0), Er && Ce(Ae, ["html", "head", "body"]), Ae.table && (Ce(Ae, ["tbody"]), delete lr.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Fn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Fn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = q;
      q = m.TRUSTED_TYPES_POLICY;
      try {
        F = ne("");
      } catch (Z) {
        throw q = U, Z;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (q = void 0, F = "") : (q === void 0 && (q = G()), q && typeof F == "string" && (F = ne("")));
    gt && gt(m), yi = m;
  }, vd = Ce({}, [...xc, ...Tc, ...iE]), Md = Ce({}, [...Cc, ...sE]), Bb = function(m, _, U) {
    return _.namespaceURI === Ar ? m === "svg" : _.namespaceURI === lo ? m === "svg" && (U === "annotation-xml" || Ba[U]) : !!vd[m];
  }, jb = function(m, _, U) {
    return _.namespaceURI === Ar ? m === "math" : _.namespaceURI === uo ? m === "math" && ja[U] : !!Md[m];
  }, Vb = function(m, _, U) {
    return _.namespaceURI === uo && !ja[U] || _.namespaceURI === lo && !Ba[U] ? !1 : !Md[m] && (Ub[m] || !vd[m]);
  }, Wb = function(m) {
    let _ = b(m);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: mi,
      tagName: "template"
    });
    const U = bs(m.tagName), Z = bs(_.tagName);
    return za[m.namespaceURI] ? m.namespaceURI === uo ? Bb(U, _, Z) : m.namespaceURI === lo ? jb(U, _, Z) : m.namespaceURI === Ar ? Vb(U, _, Z) : !!(os === "application/xhtml+xml" && za[m.namespaceURI]) : !1;
  }, dn = function(m) {
    Mi(t.removed, {
      element: m
    });
    try {
      b(m).removeChild(m);
    } catch {
      if (h(m), !b(m))
        throw Fn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, fo = function(m) {
    as(m);
    const _ = y(m);
    if (_) {
      const Z = [];
      vi(_, (re) => {
        Mi(Z, re);
      }), vi(Z, (re) => {
        try {
          h(re);
        } catch {
        }
      });
    }
    const U = k(m);
    if (U)
      for (let Z = U.length - 1; Z >= 0; --Z) {
        const re = U[Z], de = re && re.name;
        if (typeof de == "string")
          try {
            m.removeAttribute(de);
          } catch {
          }
      }
  }, qn = function(m, _) {
    try {
      Mi(t.removed, {
        attribute: _.getAttributeNode(m),
        from: _
      });
    } catch {
      Mi(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(m), m === "is")
      if (I || H)
        try {
          dn(_);
        } catch {
        }
      else
        try {
          _.setAttribute(m, "");
        } catch {
        }
  }, Hb = function(m) {
    const _ = k(m);
    if (_)
      for (let U = _.length - 1; U >= 0; --U) {
        const Z = _[U], re = Z && Z.name;
        if (!(typeof re != "string" || ke[He(re)]))
          try {
            m.removeAttribute(re);
          } catch {
          }
      }
  }, as = function(m) {
    const _ = [m];
    for (; _.length > 0; ) {
      const U = _.pop();
      (E ? E(U) : U.nodeType) === Ft.element && Hb(U);
      const re = y(U);
      if (re)
        for (let de = re.length - 1; de >= 0; --de)
          _.push(re[de]);
    }
  }, Gb = function(m) {
    if (!Qt)
      return;
    const _ = [m];
    for (; _.length > 0; ) {
      const U = _.pop(), Z = E ? E(U) : U.nodeType;
      if (Z === Ft.processingInstruction || Z === Ft.comment && ut(rp, U.data)) {
        try {
          h(U);
        } catch {
        }
        continue;
      }
      if (Z === Ft.element) {
        const de = U, Re = He(S ? S(U) : U.nodeName);
        try {
          de.hasAttribute && de.hasAttribute("patchsrc") && de.removeAttribute("patchsrc"), de.hasAttribute && de.hasAttribute("for") && Re !== "label" && Re !== "output" && de.removeAttribute("for");
        } catch {
        }
      }
      const re = y(U);
      if (re)
        for (let de = re.length - 1; de >= 0; --de)
          _.push(re[de]);
    }
  }, Ed = function(m) {
    let _ = null, U = null;
    if (w)
      m = "<remove></remove>" + m;
    else {
      const de = Wf(m, /^[\r\n\t ]+/);
      U = de && de[0];
    }
    os === "application/xhtml+xml" && mi === Ar && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const Z = q ? ne(m) : m;
    if (mi === Ar)
      try {
        _ = new u().parseFromString(Z, os);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = be.createDocument(mi, "template", null);
      try {
        _.documentElement.innerHTML = Fa ? F : Z;
      } catch {
      }
    }
    const re = _.body || _.documentElement;
    return m && U && re.insertBefore(r.createTextNode(U), re.childNodes[0] || null), mi === Ar ? se.call(_, Er ? "html" : "body")[0] : Er ? _.documentElement : re;
  }, Ad = function(m) {
    const _ = O ? O(m) : m.ownerDocument;
    return z.call(
      _ || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, po = function(m) {
    return m = ps(m, te, " "), m = ps(m, he, " "), m = ps(m, Ee, " "), m;
  }, Wa = function(m) {
    var _;
    m.normalize();
    const U = O ? O(m) : m.ownerDocument, Z = z.call(
      U || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let re = Z.nextNode();
    for (; re; )
      re.data = po(re.data), re = Z.nextNode();
    const de = (_ = m.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(m, "template");
    de && vi(de, (Re) => {
      bi(Re.content) && Wa(Re.content);
    });
  }, ho = function(m) {
    const _ = S ? S(m) : null;
    return typeof _ != "string" || He(_) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, bi = function(m) {
    if (!E || typeof m != "object" || m === null)
      return !1;
    try {
      return E(m) === Ft.documentFragment;
    } catch {
      return !1;
    }
  }, cs = function(m) {
    if (!E || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof E(m) == "number";
    } catch {
      return !1;
    }
  };
  function Pr(W, m, _) {
    W.length !== 0 && vi(W, (U) => {
      U.call(t, m, _, yi);
    });
  }
  const Jb = function(m, _) {
    return !!(Qt && m.hasChildNodes() && !cs(m.firstElementChild) && ut(tp, m.textContent) && ut(tp, m.innerHTML) || Qt && m.namespaceURI === Ar && _ === "style" && cs(m.firstElementChild) || m.nodeType === Ft.processingInstruction || Qt && m.nodeType === Ft.comment && ut(rp, m.data));
  }, Yb = function(m, _, U) {
    if (!lr[_] && Od(_) && (De.tagNameCheck instanceof RegExp && ut(De.tagNameCheck, _) || De.tagNameCheck instanceof Function && De.tagNameCheck(_)))
      return !1;
    if (it && !Kt[_]) {
      const Z = b(m), re = y(m);
      if (re && Z) {
        const de = re.length;
        for (let Re = de - 1; Re >= 0; --Re) {
          const Ge = m === U ? p(re[Re], !0) : re[Re];
          Z.insertBefore(Ge, g(m));
        }
      }
    }
    return dn(m), !0;
  }, Pd = function(m, _, U, Z) {
    return m.length === 0 ? _ : _ === U || _ === Z ? kt(_) : _;
  }, Nd = function(m, _) {
    if (Pr(A.beforeSanitizeElements, m, null), m !== _ && b(m) === null)
      return St && as(m), !0;
    if (ho(m))
      return dn(m), !0;
    const U = He(S ? S(m) : m.nodeName);
    if (Ae = Pd(A.uponSanitizeElement, Ae, Ze, hi), Pr(A.uponSanitizeElement, m, {
      tagName: U,
      allowedTags: Ae
    }), m !== _ && b(m) === null)
      return St && as(m), !0;
    if (Jb(m, U))
      return dn(m), !0;
    if (lr[U] || !(Xt.tagCheck instanceof Function && Xt.tagCheck(U)) && !Ae[U]) {
      const re = Yb(m, U, _);
      return re === !1 && Pr(A.afterSanitizeElements, m, null), re;
    }
    if ((E ? E(m) : m.nodeType) === Ft.element && !Wb(m) || (U === "noscript" || U === "noembed" || U === "noframes") && ut(gE, m.innerHTML))
      return dn(m), !0;
    if (Nt && m.nodeType === Ft.text) {
      const re = po(m.textContent);
      m.textContent !== re && (Mi(t.removed, {
        element: m.cloneNode()
      }), m.textContent = re);
    }
    return Pr(A.afterSanitizeElements, m, null), !1;
  }, wd = function(m, _, U) {
    if (oo[_] || Qt && _ === "patchsrc" || Qt && _ === "for" && m !== "label" && m !== "output" || _e && (_ === "id" || _ === "name") && (U in r || U in zb))
      return !1;
    const Z = ke[_] || Xt.attributeCheck instanceof Function && Xt.attributeCheck(_, m);
    if (!(Wr && ut(lt, _))) {
      if (!(is && ut(bt, _))) {
        if (Z) {
          if (!ss[_]) {
            if (!ut(fi, ps(U, Qe, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && m !== "script" && Hf(U, "data:") === 0 && ur[m])) {
                if (!(On && !ut(ie, ps(U, Qe, "")))) {
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
          !(Od(m) && (De.tagNameCheck instanceof RegExp && ut(De.tagNameCheck, m) || De.tagNameCheck instanceof Function && De.tagNameCheck(m)) && (De.attributeNameCheck instanceof RegExp && ut(De.attributeNameCheck, _) || De.attributeNameCheck instanceof Function && De.attributeNameCheck(_, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && De.allowCustomizedBuiltInElements && (De.tagNameCheck instanceof RegExp && ut(De.tagNameCheck, U) || De.tagNameCheck instanceof Function && De.tagNameCheck(U)))
        ) return !1;
      }
    }
    return !0;
  }, Xb = Ce({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Od = function(m) {
    return !Xb[bs(m)] && ut(Ka, m);
  }, Qb = function(m, _, U, Z) {
    if (q && typeof d == "object" && typeof d.getAttributeType == "function" && !U)
      switch (d.getAttributeType(m, _)) {
        case "TrustedHTML":
          return ne(Z);
        case "TrustedScriptURL":
          return $(Z);
      }
    return Z;
  }, Zb = function(m, _, U, Z) {
    try {
      U ? m.setAttributeNS(U, _, Z) : m.setAttribute(_, Z), ho(m) ? dn(m) : Vf(t.removed);
    } catch {
      qn(_, m);
    }
  }, Rd = function(m) {
    Pr(A.beforeSanitizeAttributes, m, null);
    const _ = m.attributes;
    if (!_ || ho(m))
      return;
    ke = Pd(A.uponSanitizeAttribute, ke, Pt, Rn);
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ke,
      forceKeepAttr: void 0
    };
    let Z = _.length;
    const re = He(m.nodeName);
    for (; Z--; ) {
      const de = _[Z], Re = de.name, Ge = de.namespaceURI, wt = de.value, Ot = He(Re), Ga = wt;
      let _t = Re === "value" ? Ga : XM(Ga);
      if (U.attrName = Ot, U.attrValue = _t, U.keepAttr = !0, U.forceKeepAttr = void 0, Pr(A.uponSanitizeAttribute, m, U), _t = U.attrValue, Le && (Ot === "id" || Ot === "name") && Hf(_t, We) !== 0 && (qn(Re, m), _t = We + _t), Qt && ut(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, _t)) {
        qn(Re, m);
        continue;
      }
      if (Ot === "attributename" && Wf(_t, "href")) {
        qn(Re, m);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          qn(Re, m);
          continue;
        }
        if (!ao && ut(mE, _t)) {
          qn(Re, m);
          continue;
        }
        if (Nt && (_t = po(_t)), !wd(re, Ot, _t)) {
          qn(Re, m);
          continue;
        }
        _t = Qb(re, Ot, Ge, _t), _t !== Ga && Zb(m, Re, Ge, _t);
      }
    }
    Pr(A.afterSanitizeAttributes, m, null);
  }, go = function(m) {
    let _ = null;
    const U = Ad(m);
    for (Pr(A.beforeSanitizeShadowDOM, m, null); _ = U.nextNode(); )
      if (Pr(A.uponSanitizeShadowNode, _, null), Nd(_, m), Rd(_), bi(_.content) && go(_.content), (E ? E(_) : _.nodeType) === Ft.element) {
        const re = T(_);
        bi(re) && (Ha(re), go(re));
      }
    Pr(A.afterSanitizeShadowDOM, m, null);
  }, Ha = function(m) {
    const _ = [{
      node: m,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const U = _.pop();
      if (U.shadow) {
        go(U.shadow);
        continue;
      }
      const Z = U.node, de = (E ? E(Z) : Z.nodeType) === Ft.element, Re = y(Z);
      if (Re)
        for (let Ge = Re.length - 1; Ge >= 0; --Ge)
          _.push({
            node: Re[Ge],
            shadow: null
          });
      if (de) {
        const Ge = S ? S(Z) : null;
        if (typeof Ge == "string" && He(Ge) === "template") {
          const wt = Z.content;
          bi(wt) && _.push({
            node: wt,
            shadow: null
          });
        }
      }
      if (de) {
        const Ge = T(Z);
        bi(Ge) && _.push({
          node: null,
          shadow: Ge
        }, {
          node: Ge,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(W) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, U = null, Z = null, re = null;
    if (Fa = !W, Fa && (W = "<!-->"), typeof W != "string" && !cs(W) && (W = rE(W), typeof W != "string"))
      throw Fn("dirty is not a string, aborting");
    if (!t.isSupported)
      return W;
    pi ? (Ae = hi, ke = Rn) : Va(m), (A.uponSanitizeElement.length > 0 || A.uponSanitizeAttribute.length > 0) && (Ae = kt(Ae)), A.uponSanitizeAttribute.length > 0 && (ke = kt(ke)), t.removed = [];
    const de = St && typeof W != "string" && cs(W);
    if (de) {
      Gb(W);
      const wt = S ? S(W) : W.nodeName;
      if (typeof wt == "string") {
        const Ot = He(wt);
        if (!Ae[Ot] || lr[Ot])
          throw fo(W), Fn("root node is forbidden and cannot be sanitized in-place");
      }
      if (ho(W))
        throw fo(W), Fn("root node is clobbered and cannot be sanitized in-place");
      try {
        Ha(W);
      } catch (Ot) {
        throw fo(W), Ot;
      }
    } else if (cs(W))
      _ = Ed("<!---->"), U = _.ownerDocument.importNode(W, !0), U.nodeType === Ft.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? _ = U : _.appendChild(U), Ha(U);
    else {
      if (!I && !Nt && !Er && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return q && J ? ne(W) : W;
      if (_ = Ed(W), !_)
        return I ? null : J ? F : "";
    }
    _ && w && dn(_.firstChild);
    const Re = de ? W : _;
    try {
      const wt = Ad(Re);
      for (; Z = wt.nextNode(); )
        Nd(Z, Re), Rd(Z), bi(Z.content) && go(Z.content);
    } catch (wt) {
      throw de && (fo(W), vi(t.removed, (Ot) => {
        Ot.element && as(Ot.element);
      })), wt;
    }
    if (de)
      return vi(t.removed, (wt) => {
        wt.element && as(wt.element);
      }), Nt && Wa(W), W;
    if (I) {
      if (Nt && Wa(_), H)
        for (re = Y.call(_.ownerDocument); _.firstChild; )
          re.appendChild(_.firstChild);
      else
        re = _;
      return (ke.shadowroot || ke.shadowrootmode) && (re = X.call(n, re, !0)), re;
    }
    let Ge = Er ? _.outerHTML : _.innerHTML;
    return Er && Ae["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && ut(pE, _.ownerDocument.doctype.name) && (Ge = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + Ge), Nt && (Ge = po(Ge)), q && J ? ne(Ge) : Ge;
  }, t.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Va(W), pi = !0, hi = Ae, Rn = ke;
  }, t.clearConfig = function() {
    yi = null, pi = !1, hi = null, Rn = null, q = B, F = "";
  }, t.isValidAttribute = function(W, m, _) {
    yi || Va({});
    const U = He(W), Z = He(m);
    return wd(U, Z, _);
  }, t.addHook = function(W, m) {
    typeof m == "function" && dt(A, W) && Mi(A[W], m);
  }, t.removeHook = function(W, m) {
    if (dt(A, W)) {
      if (m !== void 0) {
        const _ = JM(A[W], m);
        return _ === -1 ? void 0 : YM(A[W], _, 1)[0];
      }
      return Vf(A[W]);
    }
  }, t.removeHooks = function(W) {
    dt(A, W) && (A[W] = []);
  }, t.removeAllHooks = function() {
    A = np();
  }, t;
}
var kE = zm();
function xE({ structureProtectionMode: e = "off" }) {
  const [t] = pe(), r = ee(void 0), [n, i] = xe(void 0), s = Se((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (h) => {
      const g = Om(h);
      if (!g)
        return !1;
      const y = P();
      return e === "protected" ? y && ol(y, g) ? (h.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, h);
    }, a = (h, g) => {
      const y = P(), b = r.current;
      if (b && y && Ff(y, b)) {
        if (s(void 0), g?.preventDefault(), h !== b.intent)
          return !0;
        const k = oe(b.key) ?? void 0;
        if (b.kind === "verse") {
          if (k) {
            const E = k.getParent(), S = k.getPreviousSibling(), O = k.getNextSibling();
            k.remove(), S ? qm(S) : O && v(O) ? O.select(0, 0) : E?.selectStart();
          }
        } else b.kind === "selection" ? N(y) && (Fu(y), y.removeText()) : ze(k) && al(k);
        return !0;
      }
      if (!y)
        return !1;
      const T = MM(y, h);
      if (T) {
        if (T.kind === "verse") {
          const k = Dl();
          k.add(T.node.getKey()), zt(k);
        } else {
          const k = kn();
          k.anchor.set(T.node.getKey(), 0, "element"), k.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), zt(k);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: h }), g?.preventDefault(), !0;
      }
      if (N(y) && !y.isCollapsed() && Yu(y)) {
        const k = y.getNodes().filter(Te).map((O) => O.getKey()), { anchor: E, focus: S } = y;
        return s({
          kind: "selection",
          intent: h,
          key: k[0],
          anchor: { key: E.key, offset: E.offset, type: E.type },
          focus: { key: S.key, offset: S.offset, type: S.type }
        }), g?.preventDefault(), !0;
      }
      return !1;
    }, c = (h) => {
      if (e !== "protected")
        return !1;
      const g = P();
      return !g || !qi(g) ? !1 : (h instanceof Event && h.preventDefault(), !0);
    }, l = (h, g) => {
      if (!h)
        return !1;
      const y = kE.sanitize(h), b = new DOMParser().parseFromString(y, "text/html"), T = EM(Wk(t, b)), k = P();
      return N(k) && k.insertNodes(T), g.preventDefault(), !0;
    }, u = (h) => {
      if (e !== "protected")
        return !1;
      const g = P();
      return g && qi(g) ? (h.preventDefault(), !0) : l(h.clipboardData?.getData("text/html"), h);
    }, d = (h) => {
      if (e !== "protected")
        return !1;
      const g = P();
      return g && qi(g) ? (h.preventDefault(), !0) : l(h.dataTransfer?.getData("text/html"), h);
    }, f = (h) => {
      if (!t.isEditable())
        return !1;
      const g = h ? "deleteBackward" : "deleteForward";
      if (e === "protected") {
        const y = P();
        return !!y && ol(y, g);
      }
      return a(g, void 0);
    }, p = () => {
      const h = r.current;
      h && t.getEditorState().read(() => {
        Ff(P(), h) || s(void 0);
      });
    };
    return qe(
      t.registerCommand(Sr, o, Oe),
      t.registerCommand(Ji, f, Oe),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(jt, c, fe),
      t.registerCommand(sr, u, Oe),
      t.registerCommand(Rc, c, Oe),
      t.registerCommand(ua, d, Oe),
      t.registerCommand(Yi, c, Oe),
      t.registerUpdateListener(p)
    );
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
const Lw = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function TE({ textDirection: e }) {
  const [t] = pe();
  return CE(t, e), null;
}
function CE(e, t) {
  j(() => (ip(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && ip(e, t);
  })), [e, t]);
}
function ip(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function SE() {
  const [e] = pe();
  return _E(e), null;
}
function _E(e) {
  j(() => {
    if (!e.hasNodes([ve, Ut, Ie, tt, Mt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return qe(
      e.registerNodeTransform(tt, vE),
      e.registerNodeTransform(tt, (t) => ME(t, e)),
      e.registerNodeTransform(Mt, sp),
      e.registerNodeTransform(Ut, sp),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(Mt, (t) => {
        Ls(Qn("va"), t), Ls(Qn("vp"), t);
      })
    );
  }, [e]);
}
function vE(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || V(r) || K(n) || K(r) || Pe(n) || Pe(r) || Ve(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Ve(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ue(e, me) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
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
  Te(r) && Tu(e);
}
function ME(e, t) {
  const r = e.getParent();
  !Ve(r) || !e.isAttached() || Yc(t, e.getKey()) && !Yc(t, r.getKey()) && r.insertAfter(e);
}
function sp(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Pe(t); )
    t = t.getLastChild();
  (K(t) || v(t) && Pe(t.getParent())) && e.insertBefore(Ne(" "));
}
function Na(e) {
  if (!V(e) || e.getIsCollapsed() !== !0)
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
function EE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function AE() {
  const e = P();
  if (!(!N(e) || !e.isCollapsed()))
    return Na(EE(e.anchor));
}
function PE(e) {
  const t = P();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Bm(e.target)), r ? Na(we(r, V)) : void 0;
}
function Bm(e) {
  const t = vk(e)?.anchorNode;
  if (Es(t))
    return Yr(t) ?? void 0;
}
function NE(e) {
  if (P())
    return;
  const t = Bm(e);
  return t ? Na(we(t, V)) : void 0;
}
function op(e) {
  const t = we(e.getNode(), V);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function wE() {
  const e = P();
  if (!N(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = op(t), i = op(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const OE = 500;
function RE(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function $E() {
  const e = P();
  if (!N(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (L(n))
    return Na(n.getChildAtIndex(t.offset));
}
function qE() {
  const [e] = pe(), t = Ju(AE), r = ee(void 0);
  return j(() => {
    const n = (i) => {
      vt($t), Rr(e, $t), t(i);
    };
    return qe(e.registerCommand(
      Sr,
      (i) => (r.current = RE(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      fe
    ), e.registerCommand(Bt, () => {
      if (r.current !== void 0 && performance.now() - r.current < OE) {
        const o = $E();
        if (o)
          return n(o), !1;
      }
      if (wE())
        return vt($t), Rr(e, $t), !1;
      const s = NE(e.getRootElement());
      return s && n(s), !1;
    }, Hn), e.registerCommand(Li, (i) => {
      const s = PE(i);
      return s && n(s), !1;
    }, Hn));
  }, [e, t]), null;
}
function IE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = w_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return M(N_, { trigger: e, items: i });
}
function LE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = et(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? M(KE, { trigger: e, harness: i }) : M(IE, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const DE = [" ", "*"];
function UE(e, t) {
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
function KE({ trigger: e, harness: t }) {
  const [r] = pe(), [n, i] = xe(void 0), s = ee({ query: "", options: [] }), o = ee(0), a = Se((f, p, h) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = P();
      N(y) && y.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => qe(r.registerCommand(Sr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), nh(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = P();
          N(y) && y.insertText(e);
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
  }, Oe), r.registerCommand(ih, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, $r)), [r, e, t, n, a]);
  const c = Se(() => i(void 0), []), l = Se((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = Se((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), d = et(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    UE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && M(em, { isOpen: !0, children: ({ placement: f }) => M(
    nm,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? DE : void 0 },
    n.session
  ) });
}
function FE(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (r) => D.repeat(r.length));
}
function zE(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
function BE(e) {
  return e.replace(/ {2,}/g, " ");
}
let Yo;
function jE(e) {
  e && (Yo = e);
}
function ul(e) {
  return so(e);
}
function VE(e, t) {
  return e.isEmpty() ? Qp : jm(e.toJSON(), t);
}
function jm(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && ha(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Qp;
  if (r.some(VC)) {
    Yo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Vm(r), i = fr(n, t);
  return i ? { type: kr, version: br, content: i } : void 0;
}
function WE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Fe({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function HE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Fe({
    type: Yt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function GE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = eg(r, a, c), Fe({
    type: Yt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function JE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = eg(t, o, a), Fe({
    type: Mt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function YE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !ul(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(D) && (t[0] = a.slice(1));
  }
  return Fe({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function XE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Fe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function QE(e, t) {
  const { unknownAttributes: r } = e;
  return Fe({ type: Ag, ...r, content: t });
}
function ZE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Fe({ type: wg, marker: r, ...n, content: t });
}
function eA(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Fe({
    type: Rg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function tA(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function rA(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Fe({
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
  return Fe({
    type: t,
    marker: r === "" ? void 0 : r,
    ...lg({ sid: n, eid: i, ...s }, o)
  });
}
function nA(e) {
  return e.text;
}
function iA(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Fe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function sA(e) {
  const { marker: t } = e;
  return {
    type: Lo,
    marker: t === "" ? void 0 : t
  };
}
function ap(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function oA(e, t, r, n, i) {
  const s = xr.getType(), o = t.filter((l) => !r.includes(l));
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
  (!n || !wh(n)) && t.forEach((l) => {
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
    const l = a, u = a, d = a, f = a, p = a, h = a, g = a, y = a;
    switch (a.type) {
      case Wt.getType():
        i.push(
          WE(
            l,
            fr(l.children, t)
          )
        );
        break;
      case jr.getType():
        i.push(HE(a));
        break;
      case Yt.getType():
        i.push(
          GE(
            u,
            fr(u.children, t)
          )
        );
        break;
      case Ut.getType():
      case Mt.getType():
        i.push(JE(a));
        break;
      case ve.getType():
        i.push(
          YE(
            d,
            fr(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case pt.getType():
        i.push(
          XE(
            f,
            fr(f.children, t)
          )
        );
        break;
      case li.getType():
        i.push(
          QE(
            a,
            fr(a.children, t)
          )
        );
        break;
      case Zi.getType():
        i.push(
          ZE(
            a,
            fr(a.children, t)
          )
        );
        break;
      case es.getType():
        i.push(
          eA(
            a,
            fr(a.children, t)
          )
        );
        break;
      case Ie.getType(): {
        const b = fr(
          p.children,
          t,
          p.caller
        );
        i.push(
          rA(
            p,
            ul(t) && p.category === void 0 ? tA(b) : b
          )
        );
        break;
      }
      case sn.getType():
      case nn.getType():
      case yr.getType():
      case sh.getType():
      case Vr.getType():
        break;
      case ft.getType():
        if (s = fr(
          g.children,
          t,
          r,
          n
        ), s) {
          const b = g.typedIDs[bn];
          if (b)
            oA(s, b, o, e[c + 1], i), o = b;
          else {
            const T = s.shift();
            T && (typeof T == "string" ? ap(i, T) : i.push(T)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case xr.getType():
        i.push(wi(a));
        break;
      case tt.getType():
        if (h.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Qs(h.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        h.text !== D && !h.text.startsWith(Hl) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        h[Ys]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || h.text !== Gt(r))) {
          let b = nA(h);
          ul(t) && (n && b.startsWith(D) && (b = b.slice(1)), b = BE(zE(b))), ap(i, b);
        }
        break;
      case ci.getType():
        i.push(
          iA(
            y,
            fr(y.children, t)
          )
        );
        break;
      case cn.getType():
        i.push(sA(a));
        break;
      case rs.getType():
        Yo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Yo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Vm(e) {
  const t = e.findIndex((r) => ha(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Vm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Mo = {
  initialize: jE,
  deserializeEditorState: VE
}, aA = /^sd\d*$/, cA = /* @__PURE__ */ new Set([
  ...Object.entries(Lc).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === x.Paragraph && !aA.test(e)
  ).map(([e]) => e),
  "qa"
]);
function lA(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (tu(i) || Xh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!pT(i)) {
      t && Xo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (nu(i) && cA.has(i.marker) && !Xo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Wm(i.children, t).forEach((s) => {
      const o = uA(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = dA(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Wm(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Hm(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (wh(i)) {
      const s = Wm(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(cp(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [cp(i, c.nodes)] });
      });
      return;
    }
    t && Xo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function cp(e, t) {
  return { ...e, children: t };
}
function Hm(e) {
  return Fg(e) && e.number !== "";
}
function Xo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Hm(r) || Xo(r)) : !1;
}
function uA(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function dA(e) {
  return {
    type: Do,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Dg
  };
}
const lp = Ym([]), fA = {
  type: sh.getType(),
  version: 1
};
let Qu = [], ce, ri, Gm, Lt;
function pA(e, t) {
  Qu = [], mA(e), yA(t);
}
function hA(e = 0) {
}
function gA(e, t) {
  ce = t ?? Ma();
  let r;
  return e ? (e.type !== kr && Lt?.warn(`This USJ type '${e.type}' didn't match the expected type '${kr}'.`), e.version !== br && Lt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${br}'.`
  ), e.content.length > 0 ? (r = hl(Gr(e.content)), Ks(ce) && (r = lA(r, Lt))) : r = [lp]) : r = [lp], Gm?.(Qu), {
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
function mA(e) {
  e && (ri = e), e?.addMissingComments && (Gm = e.addMissingComments);
}
function yA(e) {
  e && (Lt = e);
}
function Jm() {
  return so(ce);
}
function bA(e, t) {
  let { marker: r } = e;
  r !== Rs && Lt?.warn(`Unexpected book marker '${r}'!`), r = r ?? Rs;
  const { code: n } = e;
  (!n || !Wt.isValidBookCode(n)) && Lt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  ce?.markerMode === "editable" || ce?.markerMode === "visible" ? i.push(
    qt("marker", Ke(r) + " " + n + D)
  ) : ce?.hasGutterParaMarkers && i.push(qt("marker", Ke(r) + D, !0)), i.push(...t);
  const s = Ye(e, Wx);
  return Fe({
    type: Wt.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Ih
  });
}
function kA(e) {
  let { marker: t } = e;
  t !== $o && Lt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? $o;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ye(e, Hx);
  let a;
  ce?.markerMode === "visible" && (a = !0);
  const c = [
    At(ar(t, r) ?? "")
  ];
  return ce?.markerMode === "editable" && IA(i, s, c), ce?.markerMode === "editable" ? Fe({
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
    version: Dh
  }) : Fe({
    type: jr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Bh
  });
}
function xA(e) {
  let { marker: t } = e;
  t !== qo && Lt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? qo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (K_(ce) ?? Ut).getType(), c = ce?.markerMode === "editable" ? Gh : Kg;
  let l, u;
  ce?.markerMode === "editable" ? l = ar(t, r) : ce?.markerMode === "visible" && (u = !0);
  const d = Ye(e, oT);
  return Fe({
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
function TA(e, t = [], r = !1) {
  let { marker: n } = e;
  ve.isValidMarker(n, ri?.extraValidMarkers) || Lt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ce?.markerMode === "editable") {
    const [a] = t;
    Ki(a) ? a.text = D + a.text : a && t.unshift(At(D));
  }
  t.length === 0 && t.push(At(cr)), dl(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ye(e, Yx);
  return s || OA(n, o, i), s || fl(e.marker ?? "", i, !1, r), Fe({
    type: ve.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: zh
  });
}
function Ym(e) {
  return {
    type: Cn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Wh
  };
}
function CA(e, t = []) {
  let { marker: r } = e;
  pt.isValidMarker(r, ri?.extraValidMarkers) || Lt?.warn(`Unexpected para marker '${r}'!`), r = r ?? or;
  const n = [];
  if (di(ce) && (ce?.markerMode === "editable" ? n.push(
    Et(r),
    At(D, Br, "token")
  ) : (ce?.markerMode === "visible" || ce?.hasGutterParaMarkers) && n.push(
    qt(
      "marker",
      Ke(r) + D,
      ce?.hasGutterParaMarkers
    )
  )), n.push(...t), Jm()) {
    const s = n.find(
      (o) => !lu(o) && !(Ki(o) && o.text === D)
    );
    Ki(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = Ye(e, iT);
  return Fe({
    type: pt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Hh
  });
}
function Zu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function SA(e, t = []) {
  const r = Ye(e, fC);
  return Fe({
    ...Zu(),
    type: li.getType(),
    unknownAttributes: r,
    children: t,
    version: Pg
  });
}
function _A(e, t = []) {
  const r = Ye(e, gC), n = e.marker ?? Wc, i = [];
  return ce?.markerMode === "editable" ? i.push(
    Et(n),
    At(D, Br, "token")
  ) : (ce?.markerMode === "visible" || ce?.hasGutterParaMarkers) && i.push(
    qt(
      "marker",
      Ke(n) + D,
      ce?.hasGutterParaMarkers
    )
  ), i.push(...t), Fe({
    ...Zu(),
    type: Zi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Og
  });
}
function vA(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Hc, a = Tg(o, i) ?? o;
  ce?.markerMode === "editable" ? s.push(
    Et(a),
    At(D, Br, "token")
  ) : (ce?.markerMode === "visible" || ce?.hasGutterParaMarkers) && s.push(
    qt(
      "marker",
      Ke(a) + D,
      ce?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Ye(
    e,
    yC
  );
  return Fe({
    ...Zu(),
    type: es.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: $g
  });
}
function MA(e, t) {
  const r = kT(t);
  let n = () => {
  };
  return ri?.noteCallerOnClick && (n = ri.noteCallerOnClick), Fe({
    type: yr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Hg
  });
}
function EA(e, t) {
  let { marker: r } = e;
  Ie.isValidMarker(r, ri?.extraValidMarkers) || Lt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Yl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Pu(ce?.noteMode), a = Ye(e, dx), c = ce?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ce?.markerMode === "editable" ? (l = Et(r, "opening", !1, c), s || (u = Et(r, "closing"))) : ce?.markerMode === "visible" && (l = qt("marker", Ke(r) + " "), s || (u = qt("marker", ct(r))));
  const d = [];
  let f;
  if (l && d.push(l), ce?.markerMode === "editable" && !o)
    f = At(Gt(i), void 0, c), d.push(f), qA(n, d), d.push(...t);
  else {
    const p = At(D, Br, "token");
    f = MA(i, t), d.push(f, p, ...t.flatMap(AA(p)));
  }
  return u && d.push(u), Fe({
    type: Ie.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: Ch
  });
}
function AA(e) {
  return (t) => Ph(t) ? [t] : [t, e];
}
function PA(e) {
  let { marker: t } = e;
  (!t || !xr.isValidMarker(t, ri?.extraValidMarkers)) && Lt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ye(e, Jl), s = ug(e);
  return Fe({
    type: xr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: kh
  });
}
function up(e, t = []) {
  return {
    type: ft.getType(),
    typedIDs: { [bn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function NA(e, t) {
  const { marker: r } = e, n = e.type, i = Ye(e, Fx), s = [];
  if (ce?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Cg(
      n,
      r,
      i
    );
    o && s.push(qt("marker", o)), a && s.push(qt("attribute", a)), s.push(...t), c && s.push(qt("attribute", c)), l && s.push(qt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Ki(o) && (o.mode = "token");
  }), Fe({
    type: ci.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Rh
  });
}
function wA(e) {
  return {
    type: cn.getType(),
    marker: e,
    text: Cs(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ce?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Mg
  };
}
function Et(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Vr.getType(),
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
function At(e, t = void 0, r = "normal") {
  const n = {
    type: tt.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Ys] = { textType: t }), n;
}
function qt(e, t, r = !1) {
  const n = {
    type: nn.getType(),
    text: t,
    textType: e,
    version: Eh
  };
  return r && (n[Ys] = { [Zl.key]: !0 }), n;
}
function Fs(e, t) {
  return {
    type: sn.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: $h
  };
}
function dl(e, t, r = !1) {
  ce?.markerMode === "editable" ? t.push(Et(e, "opening", r)) : ce?.markerMode === "visible" && t.push(qt("marker", Ke(e, r)));
}
function fl(e, t, r = !1, n = !1) {
  ce?.markerMode === "editable" ? r ? t.push(Et("", "selfClosing")) : t.push(Et(e, "closing", n)) : ce?.markerMode === "visible" && t.push(
    qt(
      "marker",
      r ? ct("") : ct(e, n)
    )
  );
}
function OA(e, t, r) {
  if (ce?.markerMode !== "editable" || !t) return;
  const n = Or(t, fa(e));
  n && r.push(At(n, "attribute"));
}
function dp(e, t) {
  if (e.type !== "ms" || ce?.markerMode !== "editable" && ce?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ye(e, Jl), o = dg(
    n,
    i,
    s,
    ug(e)
  ), a = Or(o, pa(r ?? ""));
  if (!a) return;
  const c = D + a;
  ce?.markerMode === "editable" ? t.push(At(c, "attribute")) : t.push(qt("attribute", c));
}
function RA(e, t) {
  const r = e.marker ?? "";
  if (ce?.markerMode === "editable") {
    const n = [];
    dl(r, n), dp(e, n), fl(r, n, !0), t.push(Fs("milestone", n));
  } else
    dl(r, t), dp(e, t), fl(r, t, !0);
}
function fp(e, t, r) {
  t !== void 0 && r.push(
    Fs(e, [
      Et(e, "opening"),
      At(D + t, "attribute"),
      Et(e, "closing")
    ])
  );
}
function $A(e, t) {
  ce?.markerMode === "editable" && (fp("va", e.altnumber, t), fp("vp", e.pubnumber, t));
}
function qA(e, t) {
  e !== void 0 && t.push(
    Fs("cat", [
      Et("cat", "opening"),
      At(D + e, "attribute"),
      Et("cat", "closing")
    ])
  );
}
function IA(e, t, r) {
  e !== void 0 && r.push(
    Fs("ca", [
      Et("ca", "opening"),
      At(D + e, "attribute"),
      Et("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Fs("cp", [
      Et("cp", "opening"),
      At(D + t, "attribute")
    ])
  );
}
function pp(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function LA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function hp(e, t) {
  t.marker === Jn && t.sid !== void 0 && e.push(t.sid), t.marker === Ri && t.eid !== void 0 && LA(e, t.eid);
}
function pl(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [up(o, [...n])] : o, c = e[i];
  hp(n, c);
  const l = pl(
    e.slice(i + 1, s),
    pp(t, i + 1),
    c.marker === Jn,
    n
  ), u = up(l, [...n]), d = e[s];
  hp(n, d);
  const f = pl(
    e.slice(s + 1),
    pp(t, s + 1),
    d.marker === Jn,
    n
  );
  return [...a, u, ...f];
}
function Gr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(At(Jm() ? FE(i) : i));
    else if (!i.type)
      Lt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Wt.getType():
          n.push(bA(i, Gr(i.content)));
          break;
        case Yt.getType():
          n.push(kA(i));
          break;
        case Mt.getType():
          ce?.hasSpacing || n.push(fA), n.push(xA(i)), $A(i, n);
          break;
        case ve.getType():
          n.push(
            TA(i, Gr(i.content, !0), t)
          );
          break;
        case pt.getType():
          n.push(CA(i, Gr(i.content)));
          break;
        case Ie.getType():
          n.push(EA(i, Gr(i.content)));
          break;
        case xr.getType():
          xh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Qu?.push(i.sid)), n.push(PA(i)), RA(i, n);
          break;
        case cn.getType():
          n.push(wA(i.marker ?? ""));
          break;
        case Ag:
          n.push(SA(i, Gr(i.content)));
          break;
        case wg:
          n.push(_A(i, Gr(i.content)));
          break;
        case Rg:
          n.push(vA(i, Gr(i.content)));
          break;
        default:
          Lt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(NA(i, Gr(i.content)));
      }
  }), pl(n, r);
}
function hl(e) {
  const t = e.findIndex(
    (n) => tu(n) || Xh(n) || nu(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    hC(n)
  );
  if (t >= 0) {
    const n = hl(e.slice(0, t)), i = e[t], s = hl(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Fg(n)))
    return [Ym(e)];
  return e;
}
const Tr = {
  initialize: pA,
  reset: hA,
  serializeEditorState: gA
};
function Xm(e) {
  if (e && !R(e)) {
    if (v(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = Xm(t);
        if (r) return r;
      }
  }
}
function DA() {
  const e = P();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((v(t) && !R(t) ? ei(t) : void 0) && v(t)) {
      const i = Ne(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Fi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Xm(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(D) ? D : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Qm(e)) {
    if (!ei(t)) continue;
    Fi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(D) && r.setTextContent(n.slice(D.length));
  }
  return !0;
}
function Qm(e) {
  const [t, r] = Ul(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || R(a) || ue(a, me) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Zm(e) {
  let t = e;
  for (; K(t) || Pe(t); ) t = t.getParent();
  return t;
}
function ey(e) {
  const t = Zm(e.getParent());
  return ze(t) ? t : void 0;
}
function UA() {
  const e = P();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return ei(t) ? !!ey(t) : !1;
}
function ty(e) {
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
    if (K(o)) Fi(t, { renderGlyphs: !0 });
    else if (!Pe(o) || !KA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function KA(e, t) {
  const r = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (r.length === 0)
    return t.insertAfter(e), !0;
  const n = P();
  if (!N(n)) return !1;
  const i = t.insertNewAfter(n, !1);
  return i ? (i.append(...r), t.insertAfter(e), !0) : !1;
}
function ry(e) {
  const t = e.anchor.getNode();
  if (R(t) && !bu(t, e.anchor.offset)) {
    const r = t.getParent();
    if (K(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = P();
      return N(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function ny() {
  const e = P();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = ry(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!v(r) || R(r) || !ei(r)) return !1;
  const n = ey(r);
  if (!n) return !1;
  const { moving: i } = ty(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Pe(o); ) o = o.getFirstChild() ?? void 0;
  return K(o) ? xa(o) : s.select(0, 0), !0;
}
const iy = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Qh(Xe().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = P(), t = sg(e), r = Su(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = _T(0, o);
        const a = iS(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || vT(c) && cu(parseInt(n, 10), c);
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
function gl(e, t) {
  return Ie.isValidMarker(e, t) || !!iy[e] || pt.isValidMarker(e, t) || ve.isValidMarker(e, t);
}
function FA(e, t) {
  return ve.isNoteContentMarker(e) ? !1 : ve.isValidMarker(e, t);
}
function sy(e, t, r, n, i, s) {
  const o = Jg(
    e,
    void 0,
    void 0,
    t,
    n ?? Ma(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function ml(e, t, r, n, i, s, o) {
  if (Ie.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = sy(
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
  const a = HA(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = P();
      N(u) && (ku(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = pf(d, Tr, r), h = Ya(p);
      if (N(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), b = ei(g), T = u.anchor.key === u.focus.key;
        if (K(h) && b && T && !_c(h, o))
          jA(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (K(h) && !T && !_c(h, o) && VA(u))
          WA(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          GA(
            u,
            () => Ya(p)
          );
        else if (L(h) && !h.isInline()) {
          const k = u.insertParagraph();
          if (k) {
            const E = k.getChildren();
            h.append(...E), k.replace(h), ze(h) && tr(h) || h.selectStart();
          }
        } else if (K(h) && v(g) && !R(g) && K(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        _c(h, o)) {
          const k = g.getParent();
          if (K(k)) {
            const E = u.anchor.offset;
            if (E === 0) g.insertBefore(h);
            else if (E >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [O] = g.splitText(E);
              O.insertAfter(h);
            }
            h.getChildren().forEach((O) => {
              R(O) && O.setNested(!0);
            });
            const S = h.getChildren().find((O) => v(O) && !R(O));
            S && v(S) ? S.select(
              S.getTextContentSize(),
              S.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (v(g) && !R(g) && u.isCollapsed() && (V(y) || K(y) && V(y.getParent()))) {
          const k = K(y) ? y : void 0, E = k ? zA(g, u.anchor.offset) : [];
          let O = (k ?? g).insertAfter(h);
          if (_r(h)) {
            const q = {
              ...r || Ma(),
              markerMode: "hidden"
            }, F = pf(
              d,
              Tr,
              q
            ), B = Ya(F);
            O = O.insertAfter(B);
          }
          if (E.length > 0 && k) {
            const q = Qo(k).append(...E);
            O.insertAfter(q), k.isEmpty() && k.remove();
          } else v(O.getNextSibling()) || O.insertAfter(Ne(D));
          L(O) && O.selectEnd();
        } else if (u.insertNodes([h]), iP(h), f) {
          const k = Dl();
          k.add(h.getKey()), zt(k);
        } else if (K(h)) {
          const k = h.getChildren().find((E) => v(E) && !R(E));
          k && v(k) ? k.select(
            k.getTextContentSize(),
            k.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const k = h.getNextSibling();
          k ? k.selectStart() : h.selectStart();
        }
      } else
        i?.warn(
          `Marker action "${e}" needs a range selection to act at; it inserted nothing.`
        );
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function zA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function _c(e, t) {
  return ((t ?? Uo).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function BA(e, t) {
  t && e.getChildren().forEach((i) => {
    R(i) && i.setNested(!0);
  }), e.getChildren().some((i) => R(i) && i.getMarkerSyntax() === "closing") || e.append(Tt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function jA(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && K(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !v(r)) {
    const o = e.anchor.offset;
    if (v(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else v(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
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
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !R(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !R(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function VA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (R(n) || K(n)) continue;
    if (!v(n) || n.getType() !== tt.getType() || ue(n, me) === "attribute") return !1;
    const i = SC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    ei(n) && (r = !0);
  }
  return r;
}
function WA(e, t, r) {
  const n = Qm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!ei(a)) return;
    Fi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(D) && c.setTextContent(l.slice(D.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(D) || i.setTextContent(D + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !R(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function HA(e, t) {
  let r = iy[e];
  return r || (pt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: pt.getType(), marker: e, content: [] }] })
  } : ve.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ve.getType(), marker: e };
      return (ve.isValidFootnoteMarker(e) || ve.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function GA(e, t) {
  const r = e.getNodes(), [n, i] = Hi(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = oy(
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
    s || (s = t(), c.insertBefore(s), l = !0, K(s) && s.getChildren().some((d) => R(d) && d.getMarkerSyntax() === "opening") && BA(s, K(s.getParent()))), YA(c, s, l);
  }), (v(s) || L(s)) && s.selectEnd();
}
function Hi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function ed(e) {
  return Pe(e) || V(e) || V(e.getParent());
}
function oy(e, t, r, n, i) {
  if (!ed(e)) {
    if (v(e))
      return JA(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function JA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function YA(e, t, r) {
  if (v(t)) {
    const n = yl(e, t);
    t.setTextContent(n), e.remove();
  } else if (L(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => R(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !R(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    yl(e, t), r && K(t) && t.getChildren().some((s) => R(s)) && v(e) && !R(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function yl(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Tu(n), v(n) || t.insertBefore(Ne(" "));
  }
  return r;
}
function ay(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = ni(u, t);
    if (!f) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (gp(f, r), v(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), y = Math.max(0, Math.min(d - g, h)), b = P();
      N(b) && b.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Hi(e);
  if (!rd(n, t, s, o)) return !1;
  const a = td(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = ni(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = dy(d, a);
    f && (gp(f, r), l = !0);
  }), fy(a, i), l;
}
function gp(e, t) {
  e.getChildren().forEach((n) => {
    xt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === cr) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    v(n) && i.startsWith(D) && n.setTextContent(i.slice(D.length));
  }), $c(e);
}
function td(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = oy(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    v(o) && n.push(o);
  }), n;
}
function ni(e, t) {
  let r = e, n;
  for (; r && !ze(r); ) {
    if (V(r)) return;
    !n && K(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function cy(e) {
  const t = we(
    e,
    (r) => V(r) || ze(r)
  );
  return V(t);
}
function ly(e) {
  return e.filter(
    (t) => !ed(t) && (v(t) || L(t) && t.isInline())
  );
}
function XA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || ed(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function QA(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !uy(n, r)
  );
}
function rd(e, t, r, n, i) {
  const s = ly(e), o = XA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ni(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !QA(l, s, o);
  });
}
function uy(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || xt(r));
}
function dy(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (L(u) && t.some((d) => u.isParentOf(d))) {
      if (!uy(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && xt(n[s - 1]) && (s -= 1), o < n.length - 1 && xt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Qo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Qo(e).append(...c)), e;
}
function Qo(e) {
  return Mk(e);
}
function fy(e, t) {
  const r = P(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function ZA(e, t, r) {
  if (e.isCollapsed()) {
    const l = ni(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Xd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Hi(e);
  if (!rd(n, r, i, s, t)) return !1;
  const o = td(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = ni(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = dy(u, o);
    d && (Xd(d, t), c = !0);
  }), c;
}
function eP(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = Hi(e);
  if (!!!i?.some(
    (y) => rd(s, y, o, a)
  ) && !tP(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const b = P();
    N(b) && ay(b, y, n) && (l = !0);
  });
  const u = P();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = Hi(u), h = td(
    u.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (y) => !cy(y) && !ni(y, t)
  );
  return g.length > 0 && (rP(g).forEach((y) => nP(y, t)), l = !0), fy(h, d), l;
}
function tP(e, t) {
  return ly(e).some(
    (r) => !cy(r) && !ni(r, t)
  );
}
function rP(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function nP(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => K(a) && a.getMarker() === t
  ), s = i ? Qo(i) : Zr(t);
  e[0].insertBefore(s), s.append(...e), i === r || yl(e[0], s);
}
function iP(e) {
  Te(e) && (Tu(e.getPreviousSibling()), Bg(e.getNextSibling()));
}
const py = {
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
}, mp = "psc-active-text", xo = "psc-empty-text";
function sP({ viewOptions: e }) {
  const [t] = pe(), r = ee(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(mp), r.current = o, o && t.getElementByKey(o)?.classList.add(mp);
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
          if (!Te(l)) return !1;
          const u = l.getParent();
          if (!L(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        ht
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = vc(), f = oP(), p = [], h = [];
          return Xe().getChildren().forEach((g) => {
            if (!L(g)) return;
            const { emptyKeys: y, nonEmptyKeys: b } = cP(g);
            p.push(...y), h.push(...b);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(xo) : t.getElementByKey(d)?.classList.add(xo);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(xo));
      }),
      t.registerCommand(
        Bl,
        () => (i(void 0), !1),
        ht
      ),
      t.registerCommand(
        Vl,
        () => {
          const o = t.getEditorState().read(vc);
          return o !== r.current && i(o), !1;
        },
        ht
      )
    ];
    return i(t.getEditorState().read(vc)), qe(...s);
  }, [t, n]), null;
}
function vc() {
  return aP(P() ?? void 0)?.getKey();
}
function oP() {
  const e = P(), t = Sn(e);
  if (t)
    return t.getChildren().slice(0, Ea(t)).findLast(Te)?.getKey();
  if (!N(e)) return;
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
    Te(o[c]) && (a = o[c].getKey());
  return a;
}
function aP(e) {
  const t = Sn(e);
  if (t) return t.getTopLevelElement() ?? t;
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function cP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Te(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Te(c)) break;
      if (!(Vt(c) || R(c)) && c.getTextContent().replaceAll(No, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function bl(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function hy(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !rh(e, n, i);
}
function gy(e, t) {
  return e.length <= t ? e : e.slice(0, nd(e, t));
}
function nd(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of Rk(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const lP = 16;
function uP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (T) => t ? id(T, t).length : T.getTextContent().length;
  r ??= n;
  const i = P();
  if (!N(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Zo(s), l = Zo(o), u = i.getNodes(), d = new Map(u.map((T) => [T.getKey(), pP(T)])), f = u.length > 0 ? d.get(u[0].getKey()) : void 0, p = f && dP(s, f) ? f : void 0, h = (T) => {
    const k = T > 0 ? fP(u, d, p, c, l, T, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), k ? i.focus.set(k.node.getKey(), k.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!k;
  };
  let g = Math.min(e, n(i));
  if (h(g) && r(i) <= e) return !0;
  let y = 0, b = 0;
  g -= 1;
  for (let T = 0; T < lP && y <= g; T++) {
    const k = Math.floor((y + g) / 2);
    h(k) && r(i) <= e ? (b = k, y = k + 1) : g = k - 1;
  }
  return h(b), !0;
}
function kl(e) {
  return e.isToken() || io(e) || Ue(e.getParent());
}
function dP(e, t) {
  const r = L(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && gr(r.getKey(), 0, "text").isBefore(e);
}
function fP(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, d;
  const f = /* @__PURE__ */ new Map(), p = (g) => {
    const y = t.get(g.getKey());
    return y && r?.is(y) ? void 0 : y;
  }, h = (g) => {
    let y = d ? d.endBefore : g;
    for (; ; ) {
      const b = hP(y, e, n);
      if (!b || !y || b.node.is(y.node)) return b;
      const T = p(b.node);
      if (!T || T.is(p(y.node))) return b;
      y = f.get(T.getKey());
    }
  };
  for (let g = 0; g <= a; g++) {
    const y = e[g], b = p(y);
    if (d && !d.node.is(b) && (u && d.node.isParentOf(u.node) && (u = d.endBefore), d = void 0), b && !d && (d = { node: b, endBefore: u }, f.set(b.getKey(), u)), !o?.(y)) {
      if (L(y) && !y.isInline()) {
        if (!l) {
          if (c + 1 > s) return h(u);
          c += 1;
        }
        l = !y.isEmpty();
        continue;
      }
      if (l = !1, v(y)) {
        const T = g === 0 ? n : 0, k = g === a ? i : y.getTextContentSize(), E = k - T, S = kl(y);
        if (S && c + E > s) return h(u);
        if (!S && c + E >= s) {
          const O = nd(y.getTextContent(), T + (s - c));
          return h({ node: y, offset: Math.max(T, O) });
        }
        c += E, u = { node: y, offset: k };
      } else if (Nn(y) || oi(y)) {
        const T = y.getTextContentSize();
        if (c + T > s) return h(u);
        c += T;
      }
    }
  }
  return h(u);
}
function pP(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (V(r) || zu(r)) && (t = r);
  return t;
}
function hP(e, t, r) {
  if (!e) return e;
  const n = we(e.node, (y) => L(y) && !y.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((y) => y.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let y = o; y <= a; y++)
    l.push(c.length), c += i[y].getTextContent();
  const u = l[s - o], d = u + e.offset, f = nd(c, d);
  if (f === d) return e;
  const p = (y) => t[0]?.is(y) ?? !1;
  if (kl(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= u) {
    const y = f - u;
    return y >= (p(e.node) ? r : 0) ? { ...e, offset: y } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((y) => y.is(h))) return;
  if (kl(h))
    return { node: h, offset: p(h) ? r : 0 };
  const g = f - l[0];
  return g >= (p(h) ? r : 0) ? { node: h, offset: g } : void 0;
}
function id(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, u) => {
    if (!t(l)) {
      if (L(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, v(l)) {
        const d = l.getTextContent();
        o ? a += d : a += d.slice(
          u === 0 ? Zo(i) : 0,
          u === n ? Zo(s) : d.length
        );
      } else (Nn(l) || oi(l)) && (u !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function xl(e) {
  const t = e.getParent();
  return !!t && we(t, (r) => V(r) && !!r.getIsCollapsed()) !== null;
}
function my(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    Ct(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), L(i)) for (const { node: s } of ai(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function gP(e) {
  return e.getNodes().some(
    (t) => Nn(t) || V(t) || Te(t) || rt(t) || zu(t)
  );
}
function Zo(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Mr = String.raw`\w-`, yy = "a-z0-9", mP = `[a-z][${yy}]*`, yP = new RegExp(
  String.raw`^\\(\+?[${Mr}]+)[ \u00A0]$`
), by = new RegExp(String.raw`^\\(\+?[${Mr}]+)$`), bP = new RegExp(String.raw`^\\\+?[${Mr}]*\*$`), kP = new RegExp(
  String.raw`^\\(\+?[${Mr}]+)(?:[ \u00A0]|$)`
), xP = new RegExp(
  String.raw`^\\(\+?)([${Mr}]+)`
), TP = new RegExp(
  String.raw`\\\+?[${Mr}]+(?:\\?\*|[ \u00A0])`
), CP = new RegExp(
  String.raw`\\\+?[${Mr}]*$`
), SP = new RegExp(
  String.raw`^\\(${mP})( |$)`
), _P = new RegExp(
  String.raw`\\[${yy}+*]*$`,
  "i"
);
function ky(e) {
  const t = e.getParent();
  if (!V(t) || t.getIsCollapsed() !== !1 || !gh(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!R(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const ea = "usfm:", xy = "usfmopen", Ty = "usfmclosed";
function vP(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const MP = new RegExp(
  [ea, xy, Ty].map(vP).join("|")
), EP = "\uFEFF", AP = /^usfm_(.+)$/;
function PP(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function NP(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function wP(e) {
  return e.startsWith(ea) ? NP(e.slice(ea.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Cy(e) {
  for (const t of e.classList) {
    const r = AP.exec(t);
    if (r) return r[1];
  }
}
function OP(e) {
  const t = Cy(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function RP(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(ea)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(xy) && !n.contains(Ty)) && Cy(r) !== void 0)
      return !0;
  }
  return !1;
}
function Sy(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(wP(e.nodeValue ?? ""));
    return;
  }
  if (!PP(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => Sy(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? OP(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function $P(e) {
  if (!MP.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !RP(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => Sy(n, !1, r)), r.join("").replaceAll(EP, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function qP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ue(e, me);
  if (r === "attribute" || r === Br || ky(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Ue(o) || Ve(o)) return;
  const n = t.startsWith(D) && K(e.getParent()), i = n ? t.slice(1) : t, s = (n ? D : "") + i.replace(/ (?=[ \u00A0])/g, D).replace(new RegExp("(?<=\\u00A0) ", "g"), D);
  s !== t && e.setTextContent(s);
}
function IP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function LP(e, t) {
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
function Tl(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? $P(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(IP(s)) : ""),
    isInternal: LP(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const yp = String.raw`\\(?:\+?[${Mr}]+\*?|\*)`, DP = new RegExp(
  String.raw`(?<=${yp})\u00A0|\u00A0(?=${yp})`,
  "g"
);
function sd(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(DP, " ").replaceAll(D, "~");
}
const _y = new RegExp(
  String.raw`\\c(?![${Mr}])[ \u00A0]*[^\s\\]*`,
  "g"
), vy = new RegExp(String.raw`\\id(?![${Mr}])[^\n\\]*`, "g"), UP = new RegExp(
  String.raw`^(?:${_y.source}|${vy.source})`
);
function od(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(_y, "").replace(vy, "");
    return UP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function Cl(e) {
  if (v(e) && ue(e, me) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (je(t)) return !0;
  return !1;
}
function KP(e) {
  return Cl(e.anchor.getNode()) || Cl(e.focus.getNode());
}
function FP(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && Cl(t.getNode());
}
function zP(e, t) {
  const n = FP(e) ? t : sd(od(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function BP(e, t = !1, r = () => {
}) {
  const n = Tl(e, Lr()._config.namespace);
  if (!n) return !1;
  const i = P(), s = N(i) && KP(i);
  if (!s && n.isInternal || t && N(i) && qi(i))
    return !1;
  const { text: o } = n;
  if (!o || !N(i)) return !1;
  if (e?.preventDefault(), s)
    return zP(i, o), !0;
  const a = sd(od(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = Lr();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(As, void 0), u === "") return;
    const f = P();
    N(f) && f.insertText(u);
  }), !0;
}
function jP(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return V(t) ? !Ct(e.getPreviousSibling()) : !1;
}
function VP(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const r = e.getParent();
  if (!V(r) || !Ct(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function WP(e) {
  const t = e.getParent();
  return (V(t) ? t.getCaller() : void 0) || Ps;
}
function HP(e) {
  const t = e.getParent();
  return !t || vn(t) === void 0;
}
function ad(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Ul(e);
  let l = "", u = !0;
  for (const d of t) {
    if (L(d) && !d.isInline()) {
      !u && HP(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, Ct(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + WP(d));
    else if (v(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += jP(d) ? "" : f.replaceAll(D, " ") + VP(d, d === n);
    } else (Nn(d) || oi(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function My(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function GP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => Me(r) || Ue(r)
    )
  );
}
function JP(e) {
  const t = P();
  if (!N(t) || t.isCollapsed()) return;
  const r = ad(t), n = {
    "text/plain": r,
    "text/html": My(r)
  };
  if (Aa() || GP(t)) return n;
  const i = qk(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function bp(e, t, r, n) {
  const i = P();
  if (!N(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Sm();
  const s = JP(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], Ey(e, t, i, s, r, n)) : !1;
}
function Ey(e, t, r, n, i, s) {
  const o = bl(s);
  if (o !== void 0 && hy(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), Sl(e, t, { "text/plain": gy(a, o) })) : Sl(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function Sl(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || $k(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function _l(e, t) {
  const r = Au();
  if (!r?.end) return;
  const n = YP(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = va(r);
        return i ? ad(i) : void 0;
      },
      { editor: n.editor }
    );
}
const Mc = /* @__PURE__ */ new WeakMap();
function YP(e, t) {
  const r = e.getEditorState();
  if (Mc.has(r)) {
    const i = Mc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = XP(r, t);
  return Mc.set(r, n), n;
}
function XP(e, t) {
  const r = Uu(Iu);
  if (!r) return;
  const n = Mo.deserializeEditorState(e, t);
  if (!n) return;
  const i = Ek({
    namespace: "markers-view-copy",
    nodes: [ft, ...Ru],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    Tr.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function QP({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = pe();
  return j(() => {
    const n = (i, s) => {
      const o = P();
      if (!N(o) || o.isCollapsed()) return !1;
      const a = _l(r, e);
      return a === void 0 ? !1 : Ey(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": My(a) },
        s,
        t
      );
    };
    return qe(
      r.registerCommand(xn, (i) => n(i, !1), Oe),
      r.registerCommand(jt, (i) => n(i, !0), Oe)
    );
  }, [r, e, t]), null;
}
const kp = /* @__PURE__ */ new WeakMap();
function ZP({
  limit: e,
  viewOptions: t
}) {
  const [r] = pe(), n = ee(bl(e)), i = ee(t), s = ee(!1), o = ee(void 0);
  return j(() => {
    n.current = bl(e), i.current = t, o.current?.();
  }, [e, t]), j(() => {
    let a, c;
    const l = (b) => {
      const T = n.current;
      if (T === void 0) return;
      const k = kp.get(b);
      if (b.defaultPrevented && k === void 0) return;
      const E = r.getRootElement();
      if (!E) return;
      const S = E.ownerDocument.getSelection();
      if (!S || !r1(S, E)) return;
      b.preventDefault();
      const O = gy(
        k ?? S.toString().replaceAll(D, " "),
        T
      );
      kp.set(b, O);
      const q = b.clipboardData;
      if (q) {
        if (!O) {
          k !== void 0 && q.clearData();
          return;
        }
        q.setData("text/plain", O);
      }
    }, u = (b) => {
      n.current !== void 0 && Pk(b, "a", { ctrlKey: !Gn, metaKey: Gn }) && (i1(c?.activeElement, r.getRootElement()) || b.preventDefault());
    }, d = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, f = () => {
      const b = n.current === void 0 ? void 0 : a;
      b !== c && (d(), c = b, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = f;
    const p = (b) => (b?.preventDefault(), !0), h = (b) => {
      const T = n.current;
      if (T === void 0 || (s.current = !1, hy(r, b))) return !1;
      if (T <= 0) return p(b);
      const k = P();
      if (si(k))
        return k.getTextContent().length + my(k.getNodes()) <= T ? !1 : p(b);
      if (!N(k) || k.isCollapsed()) return !1;
      const E = e1(r, i.current);
      return E.$size(k) <= T ? !1 : (uP(T, E.options), k.isCollapsed() ? p(b) : (r.isEditable() || nh(() => t1(r)), s.current = !0, !1));
    }, g = (b, T) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const k = P();
      if (!N(k) || k.isCollapsed()) return !1;
      const E = T && r.isEditable() && !gP(k);
      return Sl(
        b && typeof b == "object" && "clipboardData" in b ? b : null,
        r,
        { "text/plain": id(k, xl) },
        E ? () => k.removeText() : void 0
      );
    }, y = qe(
      r.registerCommand(xn, h, fe),
      r.registerCommand(jt, h, fe),
      r.registerCommand(
        xn,
        (b) => g(b, !1),
        $r
      ),
      r.registerCommand(
        jt,
        (b) => g(b, !0),
        $r
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        Ak,
        (b) => n.current === void 0 ? !1 : (b?.preventDefault(), !0),
        fe
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
function e1(e, t) {
  if (so(t)) {
    const n = (i) => ad(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && _l(e, r) !== void 0) {
    const n = (i) => _l(e, r)?.length ?? id(i, xl).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + my(n.getNodes()),
    options: { $isHidden: xl }
  };
}
function t1(e) {
  e.getEditorState().read(() => {
    const t = P(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!N(t) || !r) return;
    const n = xp(e, t.anchor), i = xp(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function xp(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = Nk(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = L(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function r1(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const n1 = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function i1(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? n1.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const s1 = /^\+/;
function cd(e, t) {
  const r = t.replace(s1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Ay(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Py(e, t) {
  return Ay(e, t) !== void 0;
}
function vl(e, t) {
  const r = Ay(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ta(e, t, r) {
  const n = L(e) ? e.getChildren().filter(R) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function o1(e, t, r, n, i) {
  const s = cd(n, t);
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
      i || o1(s, o, t, r, n), Ii(s, t, r, n, i || o === "xq");
    } else if (Te(s)) {
      if (i) continue;
      const o = cd(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else V(s) ? Ii(s, s.getMarker(), r, n, i) : Ve(s) || L(s) && Ii(s, t, r, n, i);
}
function a1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = cd(e, a);
    if (!c) {
      ta(o, "unknown", r), vl(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    vl(n, l) || ta(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Xe().getChildren())
    Ve(o) || (Me(o) ? (i(o, o.getMarker()), s(o) && Ii(o, void 0, e, r, !1)) : rt(o) ? i(o, o.getMarker()) : le(o) ? (i(o, o.getMarker()), s(o) && Ii(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && Ii(o, "p", e, r, !1));
  return r;
}
function c1(e) {
  return !!e?.includes("(basic)");
}
function l1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Ny(e, t) {
  return !e.startsWith("zpa") && e !== "c" && gl(e, t);
}
function ld(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function wy(e, t) {
  const r = [];
  for (const n of t) {
    const i = ld(e, n);
    i && vl(r, i);
  }
  return r;
}
function Eo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: l1(e.description),
    isBasic: c1(e.description)
  };
}
function u1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Ml(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : u1(e.marker, t.marker);
}
function El(e, t, r) {
  if (t.noteMarker) return [];
  const n = wy(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Ny(i.marker, r)
  ).filter((i) => {
    const s = ld(e, i.marker);
    return s !== void 0 && Py(n, s);
  }).map((i) => Eo(i, "paragraph")).sort(Ml);
}
function d1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Ny(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Eo(c, "character")).sort(Ml);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Eo(c, "character")),
    ...a.map((c) => Eo(c, "note"))
  ].sort(Ml);
}
function f1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function p1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function h1(e, t, r) {
  return [
    ...f1(e, t.openCharMarkers),
    ...d1(e, t, r)
  ].sort(p1);
}
function g1(e, t, r) {
  if (t.source === "paragraph") return El(e, t, r);
  const n = h1(e, t, r);
  return n.length > 0 ? n : El(e, t, r);
}
function m1(e, t, r) {
  const n = El(e, t, r), i = wy(e, t.previousParaMarkers), s = ld(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Py(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const mt = "￼";
function Oy(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== mt ? e.slice(1) : e;
}
function Tp(e) {
  return lu(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Ry(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Tr.serializeEditorState(
    {
      type: kr,
      version: br,
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
  for (; Tp(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Gt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Tp(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function $y(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function qy(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([u]) => u !== "closed")
  ), o = Tr.serializeEditorState(
    {
      type: kr,
      version: br,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === Ie.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function Iy(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = Tr.serializeEditorState(
    { type: kr, version: br, content: [s, ...r] },
    n
  ).root.children;
  if (!tu(o)) return { failure: "shape" };
  const c = ng(o.children[0]) ? o.children.slice(1) : o.children;
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
  CP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += mt;
}
function ir(e) {
  return e.replaceAll(D, " ");
}
function y1(e, t, r = !1) {
  if (so(t)) return ir(e);
  if (e === D) return " ";
  const n = r && e.startsWith(D), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(D, "~");
}
function vs(e) {
  const t = e.getTextContent();
  return vr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function ud(e, t) {
  const r = e[t];
  if (!st(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ya(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!R(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Ly(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function dd(e, t) {
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
function fd(e) {
  return !!e.getUnknownAttributes();
}
function wa(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && Ql(e);
}
function pd(e, t) {
  return st(e) ? !wa(e.getMarker(), t) : V(e) || Ve(e) ? !0 : Be(e) ? fd(e) : K(e) ? Dy(e, t) : !1;
}
function Dy(e, t) {
  if (qT(e)) return !0;
  const r = e.getMarker();
  return Tx(r) || t(r) !== void 0 || b1(e) && !k1(e) ? !1 : !x1(e);
}
function b1(e) {
  const t = e.getParent();
  return t !== null && Ht(t) !== void 0;
}
function k1(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function x1(e) {
  const t = e.getChildren().filter((i) => R(i) && i.getMarker() === e.getMarker()).filter(R);
  if (t.some((i) => !on(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const rr = "", nr = "";
function Cp(e) {
  return e.flatMap((t) => je(t) ? t.getChildren() : [t]);
}
function ks(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (st(s)) {
      const o = ud(e, i);
      wa(s.getMarker(), r) && Ly(o) ? (t.push(
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
      ), ks(Cp(o), t, r), t.push(nr)) : t.push(mt), i += o.length;
    } else if (Be(s)) {
      const o = dd(e, i);
      fd(s) ? t.push(mt) : (t.push(
        rr,
        "verse",
        ir(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ks(Cp(o), t, r), t.push(nr)), i += o.length;
    } else R(s) ? t.push(rr, "marker", ir(s.getTextContent()), nr) : ln(s) ? t.push(rr, "unmatched", ir(s.getTextContent()), nr) : pd(s, r) ? t.push(mt) : oi(s) ? t.push(" ") : v(s) ? t.push(
      ir(
        n ? Oy(vs(s)) : vs(s)
      )
    ) : K(s) ? (t.push(rr, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ks(s.getChildren(), t, r, !0), t.push(nr)) : L(s) ? (t.push(rr, s.getType()), ks(s.getChildren(), t, r), t.push(nr)) : t.push(mt);
  }
}
function Ur(e, t) {
  const r = [];
  return ks(e, r, t), r.join("");
}
function Kr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Gi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function hd(e) {
  return e.type ?? "";
}
function Uy(e, t, r) {
  return t === "closing" ? ct(e, r) : t === "selfClosing" ? ct("") : Ke(e, r);
}
function Ec(e, t) {
  const r = e[t];
  if (!(!r || hd(r) !== "attribute-run"))
    return Kr(r) ?? [];
}
function Fr(e, t) {
  const r = [];
  return xs(e, r, t), r.join("");
}
function xs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = hd(s);
    if (o === "ms") {
      const l = s, u = Ec(e, i + 1);
      u && wa(l.marker ?? "", r) ? (t.push(
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
      ), xs(u, t, r), t.push(nr), i += 1) : t.push(mt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(mt);
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
      let u = 0, d = Ec(e, i + 1 + u);
      for (; d; )
        xs(d, t, r), u++, d = Ec(e, i + 1 + u);
      t.push(nr), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        rr,
        "marker",
        ir(
          Uy(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(rr, "char", JSON.stringify(l.unknownAttributes ?? null)), xs(Kr(s) ?? [], t, r, !0), t.push(nr);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(mt);
      continue;
    }
    if (o === "unmatched") {
      t.push(rr, "unmatched", ir(Gi(s) ?? "")), t.push(nr);
      continue;
    }
    const a = Gi(s);
    if (a !== void 0) {
      t.push(ir(n ? Oy(a) : a));
      continue;
    }
    const c = Kr(s);
    c ? (t.push(rr, o), xs(c, t, r), t.push(nr)) : t.push(mt);
  }
}
function Mn(e) {
  let t = 0;
  for (const r of e) {
    const n = Kr(r);
    if (n) {
      t += Mn(n);
      continue;
    }
    const i = Gi(r);
    if (i !== void 0)
      for (const s of i) s === mt && t++;
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
    if (R(a))
      To(t, a, ir(a.getTextContent()));
    else if (st(a)) {
      s();
      const c = ud(e, o);
      wa(a.getMarker(), r) && Ly(c) ? En(c, t, r, n) : gs(t, [a, ...c]), o += c.length;
    } else if (V(a) || Ve(a))
      s(), gs(t, [a]);
    else if (Be(a)) {
      s();
      const c = dd(e, o);
      fd(a) ? gs(t, [a, ...c]) : (To(t, a, ir(vs(a))), En(c, t, r, n)), o += c.length;
    } else if (K(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && Dy(a, r) ? gs(t, [a]) : zs(a, t, r, n, { pending: !0 });
    else if (oi(a))
      s(), To(t, a, " ");
    else if (v(a)) {
      const c = vr(a) || ue(a, me) === "attribute", l = s() && !c;
      To(
        t,
        a,
        c ? ir(vs(a)) : y1(vs(a), n, l)
      );
    } else L(a) ? zs(a, t, r, n, i) : (s(), gs(t, [a]));
  }
}
function Ky(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ve(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return zs(e, i, t, r), i;
}
function Oa(e, t, r, n) {
  for (const i of t) {
    const s = Ky(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Ra(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(mt);
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
    Be(r) ? t.push(r) : L(r) && Bs(r.getChildren(), t);
  return t;
}
function $a(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === mt && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function un(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === mt && t++;
    else r.content && (t += un(r.content));
  return t;
}
function T1(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), L(s) && zs(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const js = /\s/;
function Fy(e) {
  return e.filter(qa).length;
}
function qa(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return v(t) && !R(t) && ue(t, me) === "attribute";
}
function C1(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return R(t) || qa(e);
}
function Sp(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && qa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      js.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function S1(e, t, r, n) {
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
function Ia(e, t, r, n) {
  const { key: i, offset: s } = S1(
    e,
    t,
    r,
    n
  ), o = Sp(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !C1(a) ? Sp(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: Fy(t.spans) };
}
function Ac(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return R(t) && t.getMarkerSyntax() !== "opening";
}
function _1(e) {
  const t = oe(e.key);
  if (!R(t)) return !1;
  const r = t.getParent();
  return K(r) ? (r.selectNext(0, 0), !0) : !1;
}
function v1(e) {
  const t = oe(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Be(t) ? dd(r, n) : st(t) ? ud(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function zy(e, t, r) {
  const { text: n, spans: i } = e, s = Fy(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !Ac(d);
    if (!(o && qa(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let h = 0; h < f; h++) {
        const g = n[d.start + h];
        if (c === 0 && (l === 0 || !js.test(g))) {
          if (p) {
            a = { key: d.key, offset: h };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? js.test(g) || c-- : l--;
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
    if (d && Ac(d) && _1(d) || d?.isSentinel && v1(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Ac(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = oe(a.key);
    if (d && v(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function By(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    zy(
      T1(e, n, i, s),
      t,
      e
    );
  }
}
function jy(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    M1(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  En(e, o, n, i), zy({ text: o.text, spans: o.spans }, t, e);
}
function M1(e, t) {
  const r = e.find(L);
  if (r && pd(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function Vy(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Oa(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = P();
  if (N(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Ia(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = zr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (un(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Tr.serializeEditorState(
    { type: kr, version: br, content: l },
    r
  );
  if (Fr(u.root.children, n) === Ur(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => Wn(g));
  if ($a(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Bs(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), Ra(d, s.sentinels), e.forEach((g) => g.remove());
  const h = Bs(d);
  for (let g = 0; g < f.length && g < h.length; g++)
    h[g].getNumber() === f[g].number && h[g].setSid(f[g].sid);
  return By(
    d,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((g) => g.getKey()))
  ), !0;
}
function Wy(e) {
  if (e.getIsCollapsed() !== !1 || !Ie.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!R(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(Ct(n) || v(n) && n.getTextContent() === Gt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!R(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function Hy(e, t, r) {
  const n = Wy(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return En(n, i, t, r), { out: i, contentNodes: n };
}
function Gy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(mt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function E1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Hy(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = P();
  if (N(u)) {
    for (let O = u.anchor.getNode(); O; O = O.getParent())
      if (e.is(O)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Ia(
      [e],
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const d = zr(o.text, {
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
  const p = f.content ?? [], h = Gy(p), g = $y(e, p);
  if (g)
    return A1(
      e,
      g,
      h,
      o.sentinels,
      t,
      l
    );
  const y = Ry(e, p, h, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Mn(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== h;
  if (b && e.setCategory(h), Fr(y.children, n) === Ur(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const T = y.children.map((O) => Wn(O));
  if ($a(T) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const k = a[0];
  if (k)
    T.forEach((O) => k.insertBefore(O));
  else {
    const O = e.getChildren().find((q) => R(q) && q.getMarkerSyntax() === "closing");
    T.forEach((q) => O ? O.insertBefore(q) : e.append(q));
  }
  Ra(T, o.sentinels);
  const E = new Set(o.sentinels.flat().map((O) => O.getKey()));
  a.forEach((O) => {
    E.has(O.getKey()) || O.remove();
  });
  const S = Wy(e) ?? T;
  return jy(
    S,
    c,
    l,
    n,
    r,
    E
  ), !0;
}
function A1(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = qy(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || Mn(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => Wn(h)), [d] = u;
  if (!V(d) || $a(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const h of u)
    f.insertAfter(h), f = h;
  Ra(u, i);
  const p = e.getChildren();
  return e.append(...d.getChildren()), p.forEach((h) => h.remove()), e.setCaller(d.getCaller()).setCategory(d.getCategory()).setUnknownAttributes(d.getUnknownAttributes()).setIsCollapsed(d.getIsCollapsed()), d.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Zc(e, a) : Xg(e, { isContentChange: !0 })), !0;
}
function Jy(e) {
  const t = e.getChildren();
  return ou(t[0]) ? t.slice(1) : t;
}
function gd(e, t, r) {
  const n = Jy(e), i = { text: "", spans: [], sentinels: [] };
  return En(n, i, t, r), { out: i, contentNodes: n };
}
const P1 = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${or}(?=[\\s\\u200B\\\\|]|$)`
);
function Yy(e, t) {
  const r = zr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === or && !P1.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function Xy(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = gd(e, i, n);
  if (!Oa(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, u = !1;
  const d = P();
  if (N(d)) {
    for (let q = d.anchor.getNode(); q; q = q.getParent())
      if (c.some((F) => F.is(q))) {
        u = !0;
        break;
      }
    d.isCollapsed() && (l = Ia(
      c,
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const f = Yy(o.text, i);
  if (un(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = Iy(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const h = [...p.children, ...p.followingBlocks];
  if (Mn(h) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && Fr(p.followingBlocks, i) === Ur(r, i) && Fr(p.children, i) === Ur(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map((q) => Wn(q)), y = p.followingBlocks.map((q) => Wn(q)), b = [...g, ...y];
  if ($a(b) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const T = Bs([...a, ...r]).map((q) => ({
    number: q.getNumber(),
    sid: q.getSid()
  })), k = a[0];
  k ? g.forEach((q) => k.insertBefore(q)) : g.forEach((q) => e.append(q)), y.reduce((q, F) => q.insertAfter(F), e), Ra(b, o.sentinels);
  const E = new Set(o.sentinels.flat().map((q) => q.getKey()));
  a.forEach((q) => {
    E.has(q.getKey()) || q.remove();
  }), r.forEach((q) => q.remove());
  const S = [...Jy(e), ...y], O = Bs(S);
  for (let q = 0; q < T.length && q < O.length; q++)
    O[q].getNumber() === T[q].number && O[q].setSid(T[q].sid);
  return jy(
    S,
    l,
    u,
    i,
    n,
    E
  ), !0;
}
const Qy = /* @__PURE__ */ new Set(["ca", "cp"]), md = "cp";
function Zy(e) {
  if (!Dr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (zs(e, t, qr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = zr(r, { getMarker: qr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === md)
  );
}
function La(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (K(r) && Qy.has(r.getMarker()) || Zy(r)) {
      t.push(r);
      continue;
    }
    le(r) && r.getMarker() === md && t.push(r);
    break;
  }
  return t;
}
function N1(e) {
  const t = (n) => K(n) && Qy.has(n.getMarker()) || Zy(n);
  if (t(e) || le(e) && e.getMarker() === md)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ue(n)) return n;
      if (!t(n)) return;
    }
}
function eb(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = La(e);
  if (n.some((s) => le(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (En(e.getChildren(), i, t, r), En(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function w1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...La(e)], o = eb(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = P();
  if (N(l)) {
    for (let h = l.anchor.getNode(); h; h = h.getParent())
      if (s.some((g) => g.is(h))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Ia(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const u = zr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (un(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Tr.serializeEditorState(
    { type: kr, version: br, content: u },
    r
  );
  if (Fr(f.root.children, n) === Ur(s, n)) {
    let h = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), h = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), h = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => Wn(h));
  return Ue(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), By(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Vs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ve(n)) return;
    !t && (V(n) || le(n) || Ue(n) || Me(n)) && (t = n), eh(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? N1(r) : void 0) ?? t;
}
function hr(e, t) {
  const r = Vs(e);
  return r ? V(r) ? E1(r, t) : Ue(r) ? w1(r, t) : Me(r) ? Xy(r, t) : Vy([r], t) : !1;
}
const O1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function _p(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !O1.has(n[0])
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
          t.push(`\\${n}`), _p(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Ao(r.content, t), _p(r, t), i !== "false" && t.push(`\\${n}*`);
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
function vp(e, t, r) {
  const n = Vs(e);
  if (!Je(n)) return !1;
  const i = P();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Me(n) ? gd(n, t, r).out : Ky(n, t, r);
  if (!o) return !1;
  const a = zr(o.text, { getMarker: t });
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
function yd(e, t) {
  return tb(e, t, x.Paragraph);
}
function R1(e, t) {
  return tb(e, t, x.Character);
}
function tb(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !(Ie.isValidMarker(n) || Ql(n));
}
function $1(e) {
  return [Tt(e), to()];
}
function bd(e) {
  Dt(e, 2);
}
function q1(e) {
  const t = P();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Da(e) {
  const t = q1(e);
  e.splice(0, 0, $1(e.getMarker())), t && bd(e);
}
function ra(e, t) {
  e.setMarker(t), Da(e), bd(e);
}
function I1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!vr(n)) {
    if (v(n) && !R(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(D), Rt(n, me, Br), n.setMode("token");
      return;
    }
    if (ag(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(to());
  }
}
function Mp(e, t, r) {
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
    if (le(t)) return t;
}
function L1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Ms(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Ms(r.getNode())?.is(s) ?? !1, a = Ms(n.getNode())?.is(s) ?? !1;
    return !(o && !Mp(r, s, "start") || a && !Mp(n, s, "end"));
  });
}
function Al(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = P();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of L1(r)) t.add(n.getKey());
}
function D1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = P();
  if (!N(r) || !r.isCollapsed()) return;
  const n = Ms(r.focus.getNode());
  n && t.add(n.getKey());
}
function U1(e) {
  const t = P();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => R(r)) && (Al(e), t.removeText());
}
const K1 = new RegExp(
  String.raw`^\\\+?([${Mr}]+)(?:[ \u00A0]|$)`
);
function F1(e, t) {
  const r = K1.exec(e.getTextContent());
  return !!r && yd(r[1], t);
}
function z1(e, t) {
  if (!di(t.viewOptions)) return;
  if (xt(e.getFirstChild())) {
    I1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (F1(e, t.getMarker)) return;
    Da(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => le(o) && !o.is(e))) {
      ra(e, or), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (Je(r)) {
    const n = e.getChildren().filter((a) => !vr(a)), i = P();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Ms(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Dt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  ra(e, or);
}
function B1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Or(t, fa(e.getMarker()));
  return r === "" ? void 0 : r;
}
function rb(e) {
  const t = e.getChildren().filter((s) => !R(s) && ue(s, me) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith(D) && r.setTextContent(r.getTextContent().slice(1));
  const n = B1(e);
  n && t.push(Ne(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function j1(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && L(t) ? r = t.getChildAtIndex(e.offset) : R(t) && e.offset === 0 ? r = t : v(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), K(r) && (r = r.getFirstChild()), !R(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!K(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function V1() {
  const e = P();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = j1(e.anchor), r = t?.getParent();
  if (!t || !K(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), Qi(n) && n.getTextContent().startsWith(D) && n.setTextContent(` ${n.getTextContent().slice(D.length)}`), rb(r), v(n) && n.isAttached() && n.select(0, 0), !0;
}
function W1(e, t) {
  const r = e.getChildren(), n = r.some((s) => R(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => v(c) && !R(c) && c.getTextContent() === Gt(s)
    ), a = ai(e).some(({ node: c }) => R(c));
    if (!o && !a) return;
    r.forEach((c) => {
      R(c) || (v(c) && c.getTextContent() === Gt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => R(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function H1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(R(r) && r.getMarkerSyntax() === "opening")) {
    rb(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => R(o) && o.getMarkerSyntax() === "closing");
  i && !s && hr(e, t);
}
function kd(e, t, r) {
  if (!R(e.getFirstChild()) && r?.markerMode === "editable" && di(r)) {
    ra(e, t);
    return;
  }
  am(e, t);
}
function nb() {
  const e = P();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = ib(e);
    return t !== "removed" ? t : (Pl(), "handled");
  }
  return Pl() ? "handled" : "declined";
}
function G1(e, t) {
  if (!t) return e;
  const r = SP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function Ep(e, t) {
  const r = P();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!sb())
      return "declined";
  } else {
    const s = ib(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => G1(s, t)
  );
  Ap(n ?? "");
  for (const s of i)
    Pl(), Ap(s);
  return "handled";
}
function J1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Yr(n);
  if (!i) return !1;
  const s = Ht(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || R(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function ib(e) {
  const t = Ht(e.anchor.getNode()), r = Ht(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), Y1() ? "removed" : "needs-plain-split");
}
function Ap(e) {
  if (e === "") return;
  const t = P();
  N(t) && t.insertText(e);
}
function Y1() {
  const e = P();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Ht(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => R(r) && r.getMarkerSyntax() === "opening");
}
function sb() {
  const e = P();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Ht(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Pl() {
  const e = P();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = sb();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Zr("fp", { closed: "false" });
  i.append(Tt("fp"));
  const s = v(t) && !R(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
    u && (MT(u), i.append(u));
  }
  return i.getChildren().every(R) && i.append(Ne(cr)), ob(i), !0;
}
function ob(e) {
  const t = e.getChildren().find((r) => !R(r));
  if (v(t)) {
    const r = ba(t);
    t.select(r, r);
    return;
  }
  if (L(t)) {
    ob(t);
    return;
  }
  e.selectEnd();
}
function X1(e) {
  const t = [];
  let r = e;
  for (; r; )
    K(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function Q1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Xe().getChildren()) {
    if (t && n.is(t)) {
      Me(n) && r.push(n.getMarker());
      break;
    }
    (Me(n) || rt(n) || le(n)) && r.push(n.getMarker());
  }
  return r;
}
function Z1(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function eN(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (xt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && vr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(Z1(i)) && r === 0 : !1;
}
function tN(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !xt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && vr(i) && t.is(i) && r === 0;
}
function rN() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function nN(e) {
  const t = mm(e);
  if (t) return { node: t, offset: 0, hasTextSelection: !1 };
  if (!N(e)) return;
  const { focus: r } = e;
  return {
    node: r.getNode(),
    offset: r.offset,
    hasTextSelection: !e.isCollapsed()
  };
}
function iN(e) {
  const t = P(), r = nN(t);
  if (!r) return;
  const { node: n, offset: i, hasTextSelection: s } = r, o = we(n, le), a = o ? void 0 : we(n, Me), c = !s && !a && (!o || tN(o, n, i)) ? "paragraph" : "character", l = Ht(n);
  return {
    source: c,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: o?.getMarker() ?? a?.getMarker(),
    previousParaMarkers: Q1(n),
    openCharMarkers: X1(n),
    noteMarker: l?.getMarker(),
    hasTextSelection: s,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: bu(n, i),
    anchorRect: sN(e, mn(t)) ?? rN()
  };
}
function sN(e, t) {
  const r = t && e?.getElementByKey(t.getKey());
  if (!r) return;
  const { x: n, y: i, width: s, height: o } = r.getBoundingClientRect();
  return { x: n, y: i, width: s, height: o };
}
function oN() {
  const e = P();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || R(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = _P.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function aN(e, t, r) {
  kd(e, t, r), bd(e);
}
function cN(e, t, r) {
  const n = P();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = we(i, le);
  if (t === "backslash" && s && eN(s, i, n.focus.offset)) {
    aN(s, e, r);
    return;
  }
  Nl(e, r);
}
function ab(e, t) {
  const r = e.getNode(), n = Zm(L(r) ? r : r.getParent());
  return t.is(n);
}
function lN(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !ab(e, t);
}
function na(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function uN(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!R(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!K(r)) return e;
  const n = r.getParent();
  return n ? gr(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function dN(e, t, r) {
  const n = P();
  if (!N(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!ab(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && lN(s, e)) return !1;
  const o = ou(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (na(n.anchor, e, o), na(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = P();
  if (!N(a) || !a.isCollapsed()) return !1;
  const c = ry(a);
  if (!c) return !1;
  const { parent: l, moving: u } = ty(
    uN(c.anchor)
  );
  if (!e.is(l)) return !1;
  const d = u.filter((h) => !h.is(o)), f = Di(t);
  e.insertAfter(f), f.append(...d);
  const [p] = d;
  return K(p) ? xa(p) : f.select(0, 0), di(r) && Da(f), !0;
}
function fN(e, t) {
  const r = P();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function cb(e) {
  const t = P();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function pN(e) {
  const t = we(e.anchor.getNode(), Me);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !ou(r) || (na(e.anchor, t, r), na(e.focus, t, r));
}
function hN(e, t, r, n) {
  const i = P();
  if (N(i) ? pN(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && oN(), e.kind === "closeTag") {
    cb(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && nb() !== "declined") return;
  if (e.kind === "paragraph" && pt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    cN(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ie.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return sy(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  ml(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Lr(), reference: r });
}
function Nl(e, t) {
  const r = P();
  if (!N(r)) return !1;
  ku(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!we(n, le)) {
    const o = we(n, Me);
    if (o) return dN(o, e, t);
  }
  const i = di(t);
  if (ny()) {
    const o = P();
    if (!N(o)) return !1;
    const a = we(o.anchor.getNode(), le);
    return a ? (a.setMarker(e), i && Da(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return le(s) ? (i ? ra(s, e) : s.setMarker(e), !0) : !1;
}
function gN() {
  const [e] = pe();
  return j(() => e.registerCommand(jl, () => !0, ht), [e]), null;
}
function mN(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = kP.exec(e)?.[1];
  return r === void 0 ? !1 : !yd(r, t);
}
function lb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !mN(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!le(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!le(i) && !Me(i)))
    return [i, r];
}
function ub(e, t) {
  const r = lb(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return Me(n) ? Xy(n, t, [i]) : Vy([n, i], t);
}
function yN(e, t) {
  const r = P();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function db(e) {
  const t = xP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function bN(e) {
  const t = P();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = db(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function kN(e) {
  const t = P();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (V(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (K(n)) {
      xa(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Pp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = db(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  kN(e);
}
function Np(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function fb(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return hr(e, r);
  const n = bN(e), i = e.getParent();
  if (le(i)) {
    if (!yd(t, r.getMarker))
      return ub(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : hr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Np(s, t) && Pp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (K(i) || V(i)) {
    const s = t.replace(/^\+/, "");
    if (!(K(i) ? R1(t, r.getMarker) : Ie.isValidMarker(s)))
      return hr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return hr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(R).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (yN(c, ct(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Np(a, s) && Pp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return hr(e, r);
}
function xN(e) {
  const t = P();
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
function TN(e, t) {
  const r = e.getTextContent();
  if (on(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (je(e.getParent()) && uu(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !xN(e)) {
    RT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = yP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), fb(e, n[1], t);
      return;
    }
    if (bP.test(r)) {
      t.pendingKeys.delete(e.getKey()), hr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ct(e.getMarker(), e.getNested());
    if ((K(n) || V(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = P(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Ne(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function CN(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Eg(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function pb(e) {
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
const ms = pb("v"), SN = pb("c"), wp = /^[ \u00A0]*$/;
function wl(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === tt.getType() && n.getMode() === "normal" && ue(n, me) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = Ne(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function _N(e, t) {
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
    if (l && wp.test(l[2] ?? "")) {
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
      const [, l, u, d] = c, f = P(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(ar("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      wl(e, d, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), hr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), wp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(ar("v", o)), a && wl(e, a, a.length);
}
const vN = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function MN(e, t) {
  if (!ky(e)) return !1;
  const r = e.getParent();
  if (!V(r)) return !1;
  const n = e.getTextContent();
  if (n === Gt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = vN.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = P(), c = N(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Gt(s)), o) {
    const l = n.length - o.length, u = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const d = wl(e, o, u);
    d.isUnmergeable() || d.toggleUnmergeable();
  }
  return !0;
}
function EN(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const r = ar("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = SN.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function hb(e) {
  if (st(e)) {
    const { wrapper: t } = ya(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (V(e)) {
    const { wrapper: t } = du(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ue(e)) {
    const t = [], r = pg(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = gg(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Be(e)) {
    const t = [], r = $s(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = $s(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function AN(e) {
  const t = P();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return hb(e).some((n) => r.is(n));
}
function PN(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && le(e) && ag(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of qs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && no(l, e) && (i || AN(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of hb(e))
    l.remove(), n = !0;
  let s = !1;
  if (K(e)) {
    const l = DT(e);
    l !== void 0 && yx(l) && (kg(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of qs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (RC(l, e)) {
        Ls(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Ig(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Ta(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Op(e) {
  return v(e) && e.getType() === tt.getType() && e.getMode() === "normal" && ue(e, me) !== "attribute";
}
function NN(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = oe(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Op(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Op(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Co(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = NN(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = oe(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (R(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (on(c)) continue;
      const h = by.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = fb(c, h[1], e) || n : r === "idle" && vp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : ub(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = hr(c, e) || n;
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
    const f = PN(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && vp(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = hr(u, e) || n;
    }
  }
  return n;
}
function gb(e) {
  if (ln(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (K(t)) return Ts(t) !== void 0;
  return !1;
}
function wN(e) {
  const t = Zn(e);
  if (!t) return !1;
  const r = Qn(t.kind);
  return !Ta(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Rp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Ve(t) || Ng(t)) return !0;
  return !1;
}
function ON(e, t) {
  const r = e.getTextContent(), n = ue(e, me), i = e.getParent();
  if (n !== "attribute" && Ue(i)) {
    r.replace(/^[ \u00A0]+/, "") === ar("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (MN(e, t)) return;
  if (n === "attribute") {
    wN(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && gb(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Rp(e))
      t.pendingKeys.add(e.getKey());
    else if (mg(e)) t.pendingKeys.add(e.getKey());
    else if (Ue(Vs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      K(a) && xg(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Rp(e)) return;
  const s = P(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (TP.test(o)) {
    if (Mx(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), hr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function RN(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Ig(e, t);
}
function $N(e) {
  const t = (r) => {
    if (R(r)) {
      on(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (ln(r)) {
      Eg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of qs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (no(n, r) || RN(n, r)) && e.pendingKeys.add(r.getKey());
    if (Be(r)) {
      r.getTextContent() !== ar("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== tt.getType() || ue(r, me) === "attribute") return;
      const n = r.getParent();
      if (Ue(n)) {
        r.getTextContent() !== ar("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && gb(r) || i.includes("//") || mg(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (K(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ve(r)) {
      if (je(r) && r.getChildrenSize() === 0) {
        const n = Zn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Xe().getChildren().forEach(t);
}
const mb = la(
  "COMMIT_PENDING_MARKERS_COMMAND"
), yb = la(
  "SET_MARKER_SETTLE_SUSPENDED_COMMAND"
);
function Pc(e) {
  const t = e();
  return vt(Kl), vt(bh), t;
}
const $p = 8, qp = 1e3, qN = 1e3;
function Ei(e, t) {
  const r = Be(e) ? ["va", "vp"] : st(e) ? ["milestone"] : V(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    DC(Qn(n), e, t.pendingKeys);
}
function IN(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Wl) || i.updateTags.has(Ns)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = oe(o);
        if (!c) continue;
        const l = Zn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = oe(o.getKey());
        c?.isAttached() && Qn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return qe(
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
    e.registerMutationListener(tt, r),
    e.registerMutationListener(Vr, r),
    e.registerMutationListener(nn, r),
    e.registerMutationListener(sn, r)
  );
}
function Ol(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = P();
  return r ? t ? ol(r, t) : N(r) && qi(r) : !1;
}
function LN(e, t, r) {
  return qe(
    e.registerCommand(
      sr,
      (n) => {
        if (Aa() || Ol(t)) return !1;
        const i = Tl(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? sd(od(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Ep(o, t.getMarker);
          if (a === "declined" && J1(e) && (a = Ep(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      fe
    ),
    e.registerCommand(
      sr,
      (n) => {
        const i = Tl(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !UA()) return !1;
        const o = P();
        return t.structureProtectionMode === "protected" && N(o) && qi(o) ? !1 : (n?.preventDefault(), N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(As, void 0), a === "") return;
          const l = P();
          N(l) && l.insertText(a);
        }), !0);
      },
      Oe
    ),
    e.registerCommand(
      sr,
      () => (t.splitExpected.current = !0, !1),
      ht
    )
  );
}
function DN({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = pe(), a = e?.markerMode === "editable", c = !!e && so(e), l = ee(void 0), u = ee(n), d = ee(!1), f = ee(s);
  return j(() => {
    u.current = n, f.current = s;
    const p = l.current;
    p && (e && (p.viewOptions = e), p.getMarker = t ?? qr, p.logger = r, p.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), j(() => {
    if (!a || !e) return;
    const p = {
      viewOptions: e,
      getMarker: t ?? qr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = p;
    const h = PC(o, p.pendingKeys);
    let g, y = !1, b, T = !1, k = !1, E = 0;
    const S = () => E < $p ? !1 : (p.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${$p} consecutive mutating passes; leaving ${p.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...p.pendingKeys].join(", ")}`
    ), !0), O = ($, G = "departure", ye = !1) => {
      const be = ye && !Gu(o), z = be ? Rr(o, pr) : void 0;
      o.update(
        () => {
          be && vt(pr), E = Pc(
            () => Co(p, $, G)
          ) ? E + 1 : 0;
        },
        // DISCRETE whenever the tag is in play, the way `commitPendingMarkerEdits` does it:
        // Lexical commits inside the call only for a discrete update (`_flushSync`) and otherwise
        // schedules the commit on a microtask, so the release below would disarm before the commit
        // it exists to catch. A settle that only moves the selection — which an update running
        // outside an event can produce on its own, by re-reading the DOM selection — would then
        // leave the tag pending to ride onto the next commit, where it stops a later `focus()`
        // from focusing the editor.
        be ? { discrete: !0 } : void 0
      ), z?.();
    };
    let q = !1, F;
    const B = () => {
      F !== void 0 && clearTimeout(F), F = void 0;
    }, ae = ($) => {
      d.current !== $ && (d.current = $, q = !1, B(), $ ? (Q !== void 0 && clearTimeout(Q), Q = void 0) : queueMicrotask(() => {
        k || d.current || (!y && !S() && O(g, "departure", !0), ge());
      }));
    };
    let Q;
    const ge = () => {
      if (Q !== void 0 && clearTimeout(Q), Q = void 0, k || p.pendingKeys.size === 0 || d.current) return;
      const $ = u.current ?? qN;
      $ < 0 || (Q = setTimeout(() => {
        Q = void 0, !(k || p.pendingKeys.size === 0) && (y || S() || O(void 0, "idle"));
      }, $));
    }, ne = qe(
      o.registerNodeTransform(Vr, ($) => {
        if (o.isComposing()) return;
        TN($, p);
        const G = Zn($);
        G && (Be(G.owner) || V(G.owner) || Ue(G.owner) || st(G.owner) && ya(G.owner).wrapper === void 0) && Ei(G.owner, p);
      }),
      o.registerNodeTransform(Mt, ($) => {
        o.isComposing() || (_N($, p), Ei($, p));
      }),
      o.registerNodeTransform(Yt, ($) => {
        o.isComposing() || (EN($), $.isAttached() && Ei($, p));
      }),
      o.registerNodeTransform(pt, ($) => {
        o.isComposing() || z1($, p);
      }),
      o.registerNodeTransform(ve, ($) => {
        if (!o.isComposing()) {
          H1($, p);
          for (const G of ["separator", "char"])
            $.isAttached() && no(Qn(G), $) && p.pendingKeys.add($.getKey());
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
      o.registerNodeTransform(xr, ($) => {
        o.isComposing() || Ei($, p);
      }),
      o.registerNodeTransform(sn, ($) => {
        if (o.isComposing()) return;
        const G = Zn($);
        G && (st(G.owner) || Be(G.owner) || V(G.owner) || Ue(G.owner)) && Ei(G.owner, p);
      }),
      o.registerNodeTransform(Ie, ($) => {
        o.isComposing() || (W1($, p), Ei($, p));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(cn, ($) => {
        o.isComposing() || CN($, p);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(tt, ($) => {
        o.isComposing() || ON($, p);
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
        tt,
        ($) => {
          o.getEditorState().read(() => {
            for (const [G, ye] of $) {
              if (ye === "destroyed") continue;
              const be = oe(G);
              !be || ue(be, me) !== "attribute" || je(be.getParent()) || o.getElementByKey(G)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      IN(o, p),
      ...c ? [
        o.registerNodeTransform(tt, ($) => {
          o.isComposing() || qP($);
        }),
        o.registerCommand(
          xn,
          ($) => bp(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
            o,
            !1,
            f.current
          ),
          Oe
        ),
        o.registerCommand(
          jt,
          ($) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            bp(
              $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
              o,
              !0,
              f.current
            )
          ),
          Oe
        ),
        o.registerCommand(
          sr,
          ($) => BP(
            // Same jsdom-safe duck-check as COPY above.
            $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
            p.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              p.splitExpected.current = !0;
            }
          ),
          Oe
        )
      ] : [],
      o.registerCommand(
        jt,
        () => (!Ol(p) && !Aa() && Al(p), !1),
        fe
      ),
      o.registerCommand(
        Yi,
        () => (o.isComposing() || U1(p), !1),
        $r
      ),
      o.registerCommand(
        Ji,
        ($) => $ || o.isComposing() ? !1 : V1(),
        $r
      ),
      o.registerCommand(
        Li,
        () => (y = !1, E = 0, ge(), !1),
        ht
      ),
      o.registerCommand(
        Sr,
        ($) => (y = !1, E = 0, ge(), ($.key === "Backspace" || $.key === "Delete") && !Ol(p, Om($)) && (Al(p), D1(p), queueMicrotask(() => {
          p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !$.ctrlKey || $.altKey || $.shiftKey || $.metaKey || $.key !== " " && $.code !== "Space" || !DA() ? !1 : ($.preventDefault(), !0)),
        Oe
      ),
      o.registerCommand(
        ih,
        ($) => {
          const G = nb();
          G === "needs-plain-split" && o.dispatchCommand(As, void 0);
          const ye = G !== "declined" || UC();
          return ye && $?.preventDefault(), Co(p), ye;
        },
        Oe
      ),
      o.registerCommand(
        As,
        () => (p.splitExpected.current = !0, ny()),
        Oe
      ),
      LN(o, p, c),
      o.registerCommand(
        yb,
        ($) => (ae($), !0),
        // LOW, matching the sibling host-dispatched `COMMIT_PENDING_MARKERS_COMMAND` below. This
        // command has exactly one handler, so priority decides nothing; CRITICAL is reserved in
        // this file for handlers that must beat Lexical's built-ins on NATIVE commands, and using
        // it here would imply a priority contest that does not exist.
        ht
      ),
      o.registerCommand(
        Vl,
        () => (d.current && q && (B(), F = setTimeout(() => {
          if (F = void 0, k || !d.current) return;
          const $ = o.getRootElement(), G = $?.ownerDocument, ye = G?.activeElement;
          !$ || !G?.hasFocus() || !ye || !($ === ye || $.contains(ye)) || (p.logger?.warn(
            `[MarkerEdit] marker settling has been suspended while the editor held focus for ${qp}ms, so the suspension was lifted and held edits settled. The host did not resume on one of its close paths.`
          ), ae(!1));
        }, qp)), !1),
        ht
      ),
      o.registerCommand(
        mb,
        () => {
          if (y) return !0;
          const $ = o.getRootElement(), G = $?.ownerDocument, ye = !!$ && !!G && G.hasFocus() && $.contains(G.activeElement);
          let be;
          if (ye) {
            const z = P();
            be = N(z) ? z.focus.key : g;
          }
          return Pc(() => Co(p, be)), !0;
        },
        ht
      ),
      o.registerCommand(
        Bl,
        () => {
          if (d.current)
            return q = !0, B(), !1;
          if (y) return !1;
          const $ = P(), G = N($) ? $.focus.key : g;
          return Pc(() => Co(p, G)), !1;
        },
        ht
      ),
      o.registerUpdateListener(({ editorState: $, tags: G }) => {
        p.splitExpected.current = !1, p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear(), p.rebuildAttempted.clear();
        const ye = $.read(() => {
          const z = P();
          return N(z) ? z.focus.key : void 0;
        }), be = b;
        if (ye !== void 0 && (b = ye), G.has(Wl)) {
          p.pendingKeys.clear(), $.read(() => $N(p)), y = !0, ye !== void 0 && (g = ye);
          return;
        }
        if (G.has($t)) {
          ye !== void 0 && ye !== be && (y = !0);
          return;
        }
        y || (ye !== void 0 && (g = ye), ge(), !(T || ye === void 0) && [...p.pendingKeys].some((z) => z !== ye) && (T = !0, queueMicrotask(() => {
          T = !1, !k && (d.current || S() || O(g));
        })));
      })
    );
    return () => {
      k = !0, Q !== void 0 && clearTimeout(Q), Q = void 0, B(), h(), ne(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const UN = ["status_unknown", "status_invalid"], bb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, KN = Object.values(bb);
function FN(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = bb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Ip(e) {
  e.classList.remove(...UN), e.removeAttribute("aria-description"), KN.includes(e.title) && e.removeAttribute("title");
}
function zN(e, t, r, n) {
  const i = (a) => a.read(() => Xe().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = oe(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function BN(e) {
  const t = oe(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : R(t) && t.getParent()?.getKey() === r.getKey();
}
function jN({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = pe(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? Uo;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = a1(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || BN(f)) continue;
            const h = oe(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Ip(p);
        }
        for (const [f, p] of d) {
          const h = n.getElementByKey(f);
          h && FN(h, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          zN(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Ip(u);
      }
    };
  }, [n, i, t, r]), null;
}
function kb(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Kr(o);
    a && L(s) && kb(s.getChildren(), a, r);
  }
}
function Ws(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = Kr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Gi(a);
      if (l === void 0 || !l.includes(mt)) continue;
      const u = l.split(mt), d = [];
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (f > 0 && d.push(...t[n++] ?? []), p.length > 0) {
          const h = {
            ...a,
            text: p
          };
          d.push(h);
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
function xb(e, t) {
  const r = [];
  for (const n of e)
    pd(n, t) || ((le(n) || K(n)) && r.push(n.getMarker()), L(n) && r.push(...xb(n.getChildren(), t)));
  return r;
}
function Tb(e) {
  const t = [];
  for (const r of e) {
    const n = hd(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Kr(r);
    i && t.push(...Tb(i));
  }
  return t;
}
function Hs(e, t, r) {
  const n = xb(e, r), i = Tb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function VN(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = P();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = oe(t.key), i = t.offset;
  else
    return;
  if (!(!v(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Ua(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function WN(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Oa(c, e, o, s)) return;
  const l = i ? Ua(c, i) : c.text, u = zr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (un(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Tr.serializeEditorState(
    { type: kr, version: br, content: u },
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
  if (Fr(d, o) === Ur(e, o) && Hs(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Ws(d, f);
  const h = Cb(e), g = xd(d);
  for (let y = 0; y < h.length && y < g.length; y++)
    h[y].sid !== void 0 && g[y].number === h[y].number && (g[y].sid = h[y].sid);
  return d;
}
function Cb(e) {
  const t = [], r = (n) => {
    Be(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function xd(e) {
  const t = [];
  for (const r of e) {
    Yh(r) && t.push(r);
    const n = Kr(r);
    n && t.push(...xd(n));
  }
  return t;
}
function HN(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Hy(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Ua(l, i) : l.text, f = zr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (un(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], g = Gy(h), y = e.getCategory() !== g, b = $y(e, h);
  if (b) {
    const S = qy(
      e,
      b.before,
      b.after,
      g,
      s
    );
    if (!S || Mn(S) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const O = ia(l, t, n);
    return O ? (Ws(S, O), {
      rebuilt: void 0,
      contentNodes: u,
      category: g,
      categoryChanged: !1,
      closedAs: S
    }) : void 0;
  }
  const T = Ry(e, h, g, s);
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
  const E = ia(l, t, n);
  if (!E) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Fr(k, o) === Ur(u, o) && Hs(u, k, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Ws(k, E), { rebuilt: k, contentNodes: u, category: g, categoryChanged: y };
}
function Lp(e) {
  return e.$?.textType;
}
function GN(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Lp(e) === Lp(t);
}
function JN(e) {
  const t = [];
  for (const r of e) {
    const n = oe(r);
    n?.isAttached() && Ve(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function YN(e) {
  if (!R(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!V(t)) return;
  const r = e.getTextContent();
  if (on(e)) return;
  const n = by.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Dp(e, t) {
  const r = e;
  r.marker = t, r.text = Uy(t, r.markerSyntax, r.nested);
}
function XN(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ie.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Dp(a.node, s);
  const c = n.getChildren().filter(R).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Dp(l.node, s);
}
function QN(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: u } = gd(e, a, o);
  if (u.length === 0 && s.length === 0 || !Oa(l, s, a, o)) return;
  const d = i ? Ua(l, i) : l.text, f = Yy(d, a);
  if (un(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = Iy(
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
  if (Mn([...h, ...g]) !== l.sentinels.length) {
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
  if (g.length === s.length && Fr(g, a) === Ur(s, a) && Hs(s, g, a) && Fr(h, a) === Ur(u, a) && Hs(u, h, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const b = Ws(h, y);
  Ws(g, y, b);
  const T = Cb([...u, ...s]), k = xd([...h, ...g]);
  for (let E = 0; E < T.length && E < k.length; E++)
    T[E].sid !== void 0 && k[E].number === T[E].number && (k[E].sid = T[E].sid);
  return { rebuilt: h, contentNodes: u, followingBlocks: g };
}
function ZN(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = eb(e, i, n);
  if (!o) return;
  const a = r ? Ua(o, r) : o.text, c = zr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (un(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Tr.serializeEditorState(
    { type: kr, version: br, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...La(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Fr(u, i) === Ur(d, i) && Hs(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function e0(e, t, r, n, i) {
  const s = VN(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (T) => {
    V(T) ? c.set(T.getKey(), T) : Ue(T) ? l.set(T.getKey(), T) : Me(T) ? u.set(T.getKey(), T) : o.set(T.getKey(), [T]);
  };
  for (const T of t) {
    const k = oe(T);
    if (!k?.isAttached()) continue;
    const E = Vs(k);
    if (E) {
      if (p(E), R(k)) {
        const S = lb(k, r.getMarker);
        S && a.push(S);
      }
      if (V(E)) {
        const S = YN(k);
        S && f.set(E.getKey(), S);
      }
    }
  }
  const h = /* @__PURE__ */ new Set();
  for (const [T, k] of a)
    h.has(T.getKey()) || h.has(k.getKey()) || ([T, k].forEach((E) => {
      h.add(E.getKey()), o.delete(E.getKey());
    }), Me(T) ? (u.set(T.getKey(), T), d.set(T.getKey(), [k])) : o.set(T.getKey(), [T, k]));
  if (s) {
    const T = Vs(s.node);
    T && !h.has(T.getKey()) && p(T);
  }
  const g = JN(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && u.size === 0 && g.length === 0)
    return;
  const y = new Set(g.map((T) => T.getKey())), b = /* @__PURE__ */ new Map();
  kb(Xe().getChildren(), e.root.children, b);
  for (const T of f.values()) XN(T, b);
  for (const T of c.values()) {
    const k = b.get(T.getKey()), E = k ? Kr(k.node) : void 0;
    if (!k || !E) continue;
    const S = HN(T, b, r, y, s);
    if (!S) continue;
    if (S.closedAs) {
      const F = k.siblings.indexOf(k.node);
      if (F < 0) continue;
      const [B, ...ae] = S.closedAs, Q = k.node;
      for (const ge of Object.keys(Q)) Reflect.deleteProperty(Q, ge);
      Object.assign(Q, B), k.siblings.splice(F + 1, 0, ...ae);
      continue;
    }
    if (S.categoryChanged) {
      const F = k.node;
      S.category === void 0 ? delete F.category : F.category = S.category;
    }
    if (!S.rebuilt) continue;
    const O = b.get(S.contentNodes[0].getKey());
    if (!O) continue;
    const q = E.indexOf(O.node);
    q < 0 || E.splice(q, S.contentNodes.length, ...S.rebuilt);
  }
  for (const T of o.values()) {
    const k = b.get(T[0].getKey());
    if (!k) continue;
    const E = WN(T, b, r, y, s);
    if (!E) continue;
    const S = k.siblings.indexOf(k.node);
    S < 0 || k.siblings.splice(S, T.length, ...E);
  }
  for (const T of u.values()) {
    const k = b.get(T.getKey()), E = k ? Kr(k.node) : void 0;
    if (!k || !E) continue;
    const S = d.get(T.getKey()) ?? [], O = QN(T, b, r, y, s, S);
    if (!O) continue;
    const q = O.contentNodes.at(0), F = q ? b.get(q.getKey()) : void 0;
    if (q && !F) continue;
    const B = F ? E.indexOf(F.node) : E.length, ae = k.siblings.indexOf(k.node);
    B < 0 || ae < 0 || (E.splice(B, O.contentNodes.length, ...O.rebuilt), k.siblings.splice(ae + 1, S.length, ...O.followingBlocks));
  }
  for (const T of l.values()) {
    const k = b.get(T.getKey());
    if (!k) continue;
    const E = 1 + La(T).length, S = ZN(T, r, s);
    if (!S) continue;
    const O = k.siblings.indexOf(k.node);
    O < 0 || k.siblings.splice(O, E, ...S);
  }
  for (const T of g) {
    const k = b.get(T.getKey());
    if (!k) continue;
    const E = k.siblings.indexOf(k.node);
    if (E < 0) continue;
    k.siblings.splice(E, 1);
    const S = k.siblings[E - 1], O = k.siblings[E], q = S && Gi(S), F = O && Gi(O);
    S && O && q !== void 0 && F !== void 0 && GN(S, O) && (S.text = q + F, k.siblings.splice(E, 1));
  }
  return jm(e, r.viewOptions);
}
function t0({
  viewOptions: e,
  logger: t
}) {
  const [r] = pe(), n = di(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1)), i = e?.hasGutterParaMarkers ?? !1;
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        pt,
        (s) => i ? n0(s) : r0(s, t)
      );
  }, [r, n, i, t]), null;
}
function r0(e, t) {
  e.getMarker() !== or && (e.isEmpty() || xt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${or}" (key ${e.getKey()})`
  ), e.setMarker(or)));
}
function n0(e) {
  const t = e.getFirstChild();
  if (xt(t) && !Qr(t)) return;
  const r = Ke(e.getMarker()) + D, [n = Ah(r), ...i] = e.getChildren().filter(Qr).sort((c, l) => Number(l.is(t)) - Number(c.is(t)));
  for (const c of i) c.remove();
  if (n.getTextContent() !== r && n.setTextContent(r), n.is(t)) return;
  t ? t.insertBefore(n) : e.append(n);
  const s = P();
  if (!N(s)) return;
  const o = Ea(e), a = ts(e, o);
  for (const c of [s.anchor, s.focus])
    c.type === "element" && c.key === e.getKey() && c.offset < o && (a ? c.set(a.getKey(), 0, "text") : c.set(e.getKey(), o, "element"));
}
function i0({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = pe(), n = ee({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, sa(s, e) || s0(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Wt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Rl(r);
        Up(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: So(s) === So(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        Xe().getChildren().filter(rt).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Rl(r) || Up(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: So(a) === So(c)
      }));
    };
    return qe(
      ...[Yt, jr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      Bt,
      () => {
        const i = n.current;
        return i.phase === "idle" && u0(i, Sb()), !1;
      },
      ht
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Bt, void 0));
    };
    return qe(
      r.registerMutationListener(Ut, i),
      r.registerMutationListener(Mt, i)
    );
  }, [r]), j(() => {
    const i = () => h0(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function s0(e, t, r) {
  if (o0(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Rl(t);
  (!n || n === r.book) && t.update(() => _b(t, r.chapterNum, r.verseNum), {
    tag: $t
  });
}
function o0(e, t) {
  const r = e.pendingEchoes.findIndex((n) => sa(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function a0(e) {
  return mm(e) ?? sg(e);
}
function Sb() {
  const e = P(), t = a0(e);
  if (!t) return;
  const r = Td(), n = dT(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Cu(t, e), { verseNum: o, verse: a } = lS(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Rl(e) {
  return e.getEditorState().read(() => Td()?.getCode() || void 0);
}
function Td() {
  return Xe().getChildren().find(Me);
}
function Up(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Nc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Nc(e, t), e.phase = "navigating") : i && Nc(e, t), r && r !== e.scrRef.book && Eb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Nc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => _b(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: $t }
    );
  });
}
function _b(e, t, r) {
  const n = P()?.clone();
  c0(t, r);
  const i = P();
  i && !(n && i.is(n)) && Rr(e, $t);
}
function c0(e, t) {
  const r = Sb();
  if (r?.chapterNum === e && (r.verse ? Mb(t, r.verse) : r.verseNum === t))
    return;
  const n = Xe().getChildren(), i = Qh(n, e);
  if (!i) return;
  const s = yT(n, i), o = uT(s, !0);
  mT(s, o);
  let a;
  try {
    a = nS(s, t);
  } catch {
    return;
  }
  a && (le(a) ? !v(a.getFirstChild()) && tr(a) || Dt(a, 0) : l0(a));
}
function l0(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || Te(n)) {
    v(e) ? e.selectEnd() : Dt(t, r);
    return;
  }
  const i = ts(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    e.selectEnd();
    return;
  }
  const s = L(n) && !V(n) ? vb(n) : void 0;
  s ? s.select(0, 0) : Dt(t, r);
}
function vb(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (L(t) && !V(t)) return vb(t);
}
function So(e) {
  return e.read(() => {
    const t = Xe().getChildren().find(rt);
    return `${Td()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function u0(e, t) {
  e.phase !== "navigating" && t && (d0(t, e.scrRef) || Eb(e, f0(t, e.scrRef)));
}
function d0(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Mb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Mb(e, t) {
  try {
    return cu(e, t);
  } catch {
    return !1;
  }
}
function f0(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const p0 = 8;
function Eb(e, t) {
  return sa(t, e.scrRef) || e.pendingEchoes.some((r) => sa(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > p0 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function sa(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function h0(e) {
  e.phase = "idle";
}
function g0(e) {
  return Me(e) ? `${e.__code}` : Ue(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker}` : Xs(e) ? `${e.__marker} "${e.__number}"` : Ct(e) ? `${e.__caller}` : ui(e) ? `${e.__marker} "${e.__number}"` : V(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : le(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${m0(e)}` : Pe(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Be(e) ? `${e.__marker} "${e.__number}"` : "";
}
function m0(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ys]) : "";
}
function y0() {
  const [e] = pe();
  return /* @__PURE__ */ M(
    Ik,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: g0,
      editor: e
    }
  );
}
const Ab = Jp(null), Kp = 4;
function b0({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = ee(null), s = Yp(Ab);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ M("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function k0({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = xe(), [s, o] = xe(), a = Se(
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
  }, l = et(() => ({ registerItem: a }), [a]);
  return j(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ M(Ab.Provider, { value: l, children: /* @__PURE__ */ M("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function x0({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = ee(null), c = ee(null), [l, u] = xe(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: g } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Kp}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (h) => {
        const g = h.target;
        o && a.current && a.current.contains(g) || f.contains(g) || u(!1);
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
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Kp;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ $e(Vn, { children: [
    /* @__PURE__ */ $e(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ M("span", { className: i }),
          t && /* @__PURE__ */ M("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ M("i", { className: "chevron-down" })
        ]
      }
    ),
    l && jn(
      /* @__PURE__ */ M(k0, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const $l = {
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
}, ql = {
  ...$l,
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
function T0({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ M(
    x0,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + C0(t),
      buttonLabel: S0(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys($l).map((n) => /* @__PURE__ */ $e(
        b0,
        {
          className: "item block-marker " + _0(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ M("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ M("span", { className: "text usfm_" + n, children: $l[n] })
          ]
        },
        n
      ))
    }
  );
}
function C0(e) {
  return e && e in ql ? e : "ban";
}
function S0(e) {
  return e && e in ql ? ql[e] : "No Style";
}
function _0(e) {
  return e ? "active dropdown-item-active" : "";
}
function Fp() {
  return /* @__PURE__ */ M("div", { className: "divider" });
}
const v0 = Pn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = pe(), [o, a] = xe(s), [c, l] = xe(), [u, d] = xe(!1), [f, p] = xe(!1), h = Se(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: b,
      contextMarker: T
    }) => {
      d(g), p(y), l(b), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: b,
        contextMarker: T
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    Bt,
    (g, y) => (a(y), !1),
    fe
  ), [s]), /* @__PURE__ */ $e(Vn, { children: [
    /* @__PURE__ */ M(Um, { onStateChange: h }),
    /* @__PURE__ */ $e("div", { className: "toolbar", children: [
      /* @__PURE__ */ M(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(oh, void 0);
          },
          title: Gn ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(ah, void 0);
          },
          title: Gn ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ M("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ M(Fp, {}),
      o === s && /* @__PURE__ */ $e(Vn, { children: [
        /* @__PURE__ */ M(
          T0,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ M(Fp, {})
      ] }),
      /* @__PURE__ */ M("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), M0 = Ma(), E0 = {}, A0 = {};
function P0() {
  return /* @__PURE__ */ M("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function wc(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function zp(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = L(n) ? n.getLastDescendant() ?? n : n;
  return Sa(r, i);
}
function Bp(e, t, r) {
  Uk(e, () => Di(t));
  const n = P();
  if (!N(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    le(o) && i.add(o);
  }), i.forEach((s) => kd(s, t, r));
}
const Pb = Pn(function({
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
  const f = ee(null), p = ee(null), h = ee(null), g = ee(null), y = ee(t), b = ee(void 0), T = ee(void 0), k = ee(void 0), E = ee(void 0), S = ee(!1), [O, q] = xe(t), [F, B] = xe(0), [ae, Q] = xe(), {
    isReadonly: ge = !1,
    structureProtectionMode: ne = "off",
    hasExternalUI: $ = !1,
    hasSpellCheck: G = !1,
    textDirection: ye = "ltr",
    markerMenuTrigger: be = "\\",
    view: z,
    nodes: Y,
    debug: se = !1,
    contextMenu: X,
    styleInfo: A,
    markerSettleDelayMs: te,
    copyLimit: he
  } = c ?? A0, Ee = z ?? M0, lt = Ks(Ee) && (Ee.markerMode !== "hidden" || !Ee.hasSpacing || Ee.hasGutterParaMarkers || Ee.hasActiveTextFocusBox) ? {
    ...Ee,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : Ee, bt = ee(lt);
  Zt(bt.current, lt) || (bt.current = lt);
  const ie = bt.current, Qe = et(() => Y ?? E0, [Y]), Ka = et(() => X, [X]), fi = et(
    () => GC(A ?? Uo),
    [A]
  ), Ae = ee(l);
  Zt(Ae.current, l) || (Ae.current = l);
  const Ze = Ae.current, ke = Ks(ie), Pt = ge || ke, De = lt !== Ee;
  j(() => {
    ke && !ge && Ze?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), De && Ze?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ie?.markerMode === "visible" && !ge && Ze?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ke, ge, De, Ze, ie?.markerMode]);
  const lr = ee(null), oo = et(() => {
    if (ie.markerMode !== "editable") return;
    const w = A ?? Uo;
    return {
      getContext: () => lr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (I) => g1(
        w,
        I,
        Qe.extraValidMarkers
      ),
      getEnterItems: (I) => m1(
        w,
        I,
        Qe.extraValidMarkers
      ),
      apply: (I, H) => {
        const J = lr.current;
        J && (H.trigger === "enter" ? J.splitParagraphWithMarker(I.marker) : J.applyMarkerMenuSelection(I, H));
      },
      commitTypedCloser: (I) => {
        lr.current?.commitTypedCloser(I);
      }
    };
  }, [ie, A, Qe.extraValidMarkers]), Xt = (w) => {
    S.current || (S.current = !0, Ae.current?.warn(
      `Editor: cannot ${w} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, is = (w) => {
    if (ke)
      throw new Error(
        `Cannot ${w} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Wr = (w) => {
    if (is(w), Pt) throw new Error(`Cannot ${w} in readonly mode`);
  }, On = () => !!f.current && Gu(f.current), ao = et(
    () => ({
      namespace: "platformEditor",
      theme: { ...py, showCharMarkerTitles: ie.showCharMarkerTitles },
      editable: !Pt,
      editorState: void 0,
      // Handling of errors during update
      onError(w) {
        throw w;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [ft, ...ke ? g_ : Ru]
    }),
    [Pt, ke, ie.showCharMarkerTitles]
  );
  Mo.initialize(Ze);
  function Nt(w) {
    if (w !== void 0 && !FA(w, Qe.extraValidMarkers))
      throw new Error(`Unsupported character marker '${w}'`);
  }
  const Qt = Se(() => {
    const w = f.current;
    if (!w) return y.current;
    const I = sf(w), H = T.current;
    if ((!I || I.size === 0) && !H) return y.current;
    const J = w.getEditorState(), _e = J.toJSON();
    return J.read(
      () => e0(
        _e,
        I ?? /* @__PURE__ */ new Set(),
        { viewOptions: ie, getMarker: fi, logger: Ze },
        H,
        k.current
      )
    ) ?? y.current;
  }, [ie, fi, Ze]);
  function Er(w, I, H) {
    if (ke && I === "remote") {
      Ae.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    is("apply an update");
    const J = On(), _e = !J && f.current ? Rr(f.current, pr) : void 0;
    f.current?.update(
      () => {
        I === "remote" && vt(Ns), J || vt(pr), H && vt(H), z_(w, ie, Qe, Ze);
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
          _e?.(), !J && f.current && hc(f.current);
          const Le = f.current?.getEditorState();
          if (!Le) return;
          const We = Mo.deserializeEditorState(Le, ie);
          if (We) {
            const it = !Zt(y.current, We);
            if (it && (y.current = We), it || !Zt(O, We)) {
              const St = mf(w, Le, "apply");
              E.current = We, s?.(We, w, I, St);
            }
          }
        }
      }
    );
  }
  const pi = {
    focus() {
      const w = f.current;
      if (!w) return;
      w.focus(), w.getEditorState().read(() => si(P())) && w.getRootElement()?.focus({ preventScroll: !0 });
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
      f.current?.dispatchCommand(oh, void 0);
    },
    redo() {
      f.current?.dispatchCommand(ah, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      Wr("cut"), f.current && Vu(f.current);
    },
    copy() {
      f.current && ju(f.current);
    },
    paste() {
      Wr("paste"), f.current && Wu(f.current);
    },
    pastePlainText() {
      Wr("paste as plain text"), f.current && Hu(f.current);
    },
    getUsj() {
      return Qt();
    },
    commitPendingMarkerEdits() {
      const w = f.current;
      if (!w) return;
      const I = !On(), H = I ? Rr(w, pr) : void 0;
      w.update(
        () => {
          I && vt(pr), w.dispatchCommand(mb, void 0);
        },
        { discrete: !0 }
      ), H?.(), I && hc(w);
    },
    setMarkerSettleSuspended(w) {
      f.current?.dispatchCommand(yb, w);
    },
    setTransientInput(w) {
      if (!w) {
        T.current = void 0;
        return;
      }
      const I = f.current?.getEditorState().read(() => {
        const H = P();
        return N(H) && H.isCollapsed() ? H.focus.key : void 0;
      });
      T.current = { input: w, nodeKey: I ?? k.current?.key };
    },
    setUsj(w) {
      if (!Zt(y.current, w)) {
        y.current = w, T.current = void 0;
        const I = Zt(O, w);
        q(w), I && B((H) => H + 1);
      }
    },
    applyUpdate(w, I = "remote") {
      Er(w, I);
    },
    replaceEmbedUpdate(w, I) {
      const H = f.current?.read(() => TS(w, I));
      H ? this.applyUpdate(H) : l?.warn(
        `replaceEmbedUpdate: no embed found for key "${w}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ke) {
        Xt("get the selection");
        return;
      }
      return f.current?.read(Au);
    },
    getSelectedParaMarker() {
      const w = f.current;
      if (w?.isEditable())
        return w.getEditorState().read(() => Sn(P())?.getMarker());
    },
    setSelection(w) {
      if (ke) {
        Xt("set the selection");
        return;
      }
      f.current?.update(() => {
        const I = va(w);
        I !== void 0 && (zt(I), vt(yh));
      });
    },
    setAnnotation(w, I, H, J, _e) {
      if (ke) {
        Xt("set an annotation");
        return;
      }
      let Le, We, it, St;
      typeof J == "function" || J === void 0 ? (Le = J, We = _e) : (Le = J.onClick, We = J.onRemove, it = J.onMouseEnter, St = J.onMouseLeave), p.current?.setAnnotation(
        w,
        Hd(I),
        H,
        Le,
        We,
        it,
        St
      );
    },
    removeAnnotation(w, I) {
      p.current?.removeAnnotation(Hd(w), I);
    },
    formatPara(w) {
      Wr("format a paragraph"), f.current?.update(
        () => {
          const I = P(), H = Sn(I);
          if (H) {
            kd(H, w, ie);
            return;
          }
          if (!N(I)) {
            l?.warn(
              `formatPara refused: no range selection or selected paragraph marker to retag with "${w}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const J = I.isBackward() ? I.focus : I.anchor, _e = we(J.getNode(), Me);
          if (_e) {
            const Le = I.isBackward() ? I.anchor : I.focus, it = !I.isCollapsed() && !_e.is(Le.getNode()) && !_e.isParentOf(Le.getNode()) ? { key: Le.key, offset: Le.offset, type: Le.type } : void 0, St = kn();
            if (St.anchor.set(J.key, J.offset, J.type), St.focus.set(J.key, J.offset, J.type), zt(St), !Nl(w, ie)) {
              l?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${w}"`
              );
              return;
            }
            if (!it) return;
            const Hr = oe(it.key);
            if (!Hr?.isAttached()) return;
            const Kt = Hr.getTopLevelElement();
            if (!Kt) return;
            const gi = _e.getNextSibling();
            if (!le(gi)) return;
            let ur = gi.getNextSibling();
            for (; ur; ) {
              const co = ur.is(Kt), ss = ur.getNextSibling();
              if (le(ur)) {
                const $n = kn();
                $n.anchor.set(ur.getKey(), 0, "element"), $n.focus.set(ur.getKey(), ur.getChildrenSize(), "element"), zt($n), Bp($n, w, ie);
              }
              if (co) break;
              ur = ss;
            }
            return;
          }
          Bp(I, w, ie);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(w) {
      return f.current?.read(
        () => f.current?.getElementByKey(w) ?? void 0
      );
    },
    removeCharacterMarker(w) {
      if (Pt) throw new Error("Cannot remove character marker in readonly mode");
      Nt(w);
      let I = !1;
      return f.current?.update(
        () => {
          const H = P();
          N(H) && (I = ay(H, w, ie));
        },
        { discrete: !0 }
      ), I;
    },
    replaceCharacterMarker(w, I) {
      if (Pt) throw new Error("Cannot replace character marker in readonly mode");
      Nt(w), Nt(I);
      let H = !1;
      return f.current?.update(
        () => {
          const J = P();
          N(J) && (H = ZA(J, w, I));
        },
        { discrete: !0 }
      ), H;
    },
    extendCharacterMarker(w, I) {
      if (Pt) throw new Error("Cannot extend character marker in readonly mode");
      Nt(w), I?.forEach(
        (J) => Nt(J)
      );
      let H = !1;
      return f.current?.update(
        () => {
          const J = P();
          N(J) && (H = eP(
            J,
            w,
            I,
            ie
          ));
        },
        { discrete: !0 }
      ), H;
    },
    insertMarker(w) {
      if (Pt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!gl(w, Qe.extraValidMarkers))
        throw new Error(`Unsupported marker '${w}'`);
      f.current.update(_i, { discrete: !0 });
      const I = ml(
        w,
        b,
        ie,
        Qe,
        Ze,
        void 0,
        A
      );
      return I.action({ editor: f.current, reference: r }), I.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (ge) return;
      const w = f.current;
      return w?.getEditorState().read(() => iN(w));
    },
    applyMarkerMenuSelection(w, I) {
      if (ge) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (w.kind !== "closeTag" && !gl(w.marker, Qe.extraValidMarkers))
        throw new Error(`Unsupported marker '${w.marker}'`);
      let H;
      return f.current.update(() => {
        _i(), H = hN(w, I, r, {
          expandedNoteKeyRef: b,
          viewOptions: ie,
          nodeOptions: Qe,
          logger: l,
          styleInfo: A
        });
      }), H;
    },
    splitParagraphWithMarker(w) {
      if (ge) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        _i(), Nl(w, ie);
      });
    },
    commitTypedMarker(w, I) {
      if (ge) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let H = !1;
      return f.current.update(() => {
        _i(), H = fN(w, I), H || l?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), H;
    },
    commitTypedCloser(w) {
      if (ge) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let I = !1;
      return f.current.update(() => {
        _i(), I = cb(w), I || l?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), I;
    },
    insertNote(w, I, H) {
      Wr("insert a note"), f.current?.update(
        () => {
          _i();
          const J = Jg(
            w,
            I,
            H,
            r,
            ie,
            Qe,
            Ze
          );
          wc(J, b);
        },
        { discrete: !0 }
      );
    },
    selectNote(w) {
      f.current?.update(() => {
        const I = wr(w);
        I && (Zc(I, ie), wc(I, b));
      });
    },
    selectAfterNote(w) {
      const I = f.current;
      if (!I) return;
      const H = !On(), J = H ? Rr(I, pr) : void 0;
      if (I.update(
        () => {
          H && vt(pr);
          const _e = wr(w);
          _e && Xg(_e);
        },
        { discrete: !0 }
      ), J?.(), H) {
        hc(I);
        const _e = Rr(
          I,
          pr
        );
        I.update(
          () => {
            vt(pr), I.dispatchCommand(Bt, void 0);
          },
          { discrete: !0 }
        ), _e();
      }
    },
    selectNoteTextOffset(w, I, H) {
      f.current?.update(() => {
        const J = wr(w);
        if (!J) return;
        const _e = H?.glyph;
        (H?.field === "category" ? u_(J, I, _e) || Cf(J, 0) : Cf(J, I, _e)) || Zc(J, ie), wc(J, b);
      });
    },
    getNoteOps(w) {
      const I = f.current;
      return I ? Pi(I, () => {
        const H = wr(w);
        if (H)
          return Sa(H);
      }) : void 0;
    },
    getOpsAfterNote(w) {
      const I = f.current;
      return I ? Pi(I, () => {
        const H = wr(w);
        return H ? zp(H) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(w) {
      const I = f.current, H = I ? Pi(I, () => {
        const We = wr(w);
        if (!We) return;
        const it = _u(We, "apply");
        return { ops: zp(We), notePosition: it };
      }) : void 0;
      if (!H) return;
      const { ops: J, notePosition: _e } = H;
      if (J.length === 0 || _e === void 0) return J;
      const Le = J.reduce(
        (We, it) => We + (typeof it.insert == "string" ? it.insert.length : 1),
        0
      );
      return Er([{ retain: _e + 1 }, { delete: Le }], "remote", Kl), J;
    },
    getNoteIndex(w) {
      const I = f.current;
      return I ? Pi(I, () => Mu(w)) : void 0;
    },
    getNoteKey(w) {
      const I = f.current;
      return I ? Pi(I, () => wr(w)?.getKey()) : void 0;
    },
    highlightNote(w) {
      h.current?.setHighlightedNote(w);
    },
    get toolbarEndRef() {
      return g;
    }
  };
  lr.current = pi, aa(d, () => pi), j(() => {
    const w = f.current;
    if (w)
      return w.registerUpdateListener(({ editorState: I }) => {
        I.read(() => {
          const H = P();
          if (!N(H) || !H.isCollapsed()) return;
          const J = H.focus.getNode();
          v(J) && (k.current = { key: J.getKey(), offset: H.focus.offset });
        });
      });
  }, []);
  const hi = Se(
    (w, I, H, J, _e) => {
      if (ke) return;
      const Le = Mo.deserializeEditorState(w, ie);
      if (Le) {
        const We = !Zt(y.current, Le);
        if (We && (y.current = Le), We || !Zt(O, Le)) {
          const it = mf(J, w), St = it && !_e.read(() => oe(it)) ? it : void 0;
          E.current = Le, s?.(Le, J, "local", St);
        }
      }
    },
    [O, s, ie, ke]
  );
  j(() => {
    const w = f.current;
    if (!(!w || !s))
      return w.registerUpdateListener(({ tags: I, dirtyElements: H, dirtyLeaves: J }) => {
        !I.has(Wl) && (H.size === 0 && J.size === 0 || I.has(Ns) || !sf(w)?.size) || queueMicrotask(() => {
          const _e = Qt();
          !_e || Zt(E.current, _e) || (E.current = _e, s(_e, void 0, "local", void 0));
        });
      });
  }, [s, Qt]);
  const Rn = Se(
    (w) => {
      Q(w.contextMarker), o?.(w);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ $e(lh, { initialConfig: ao, children: [
      /* @__PURE__ */ M(Xv, { isEditable: !Pt }),
      /* @__PURE__ */ $e("div", { className: "editor-container", children: [
        $ ? /* @__PURE__ */ M(Um, { onStateChange: Rn }) : /* @__PURE__ */ M(
          "div",
          {
            className: "editor-toolbar-container" + (Pt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ M(
              v0,
              {
                ref: g,
                editorRef: lr,
                isReadonly: Pt,
                onStateChange: Rn
              }
            )
          }
        ),
        /* @__PURE__ */ $e("div", { className: "editor-inner", children: [
          /* @__PURE__ */ M(dh, { editorRef: f }),
          /* @__PURE__ */ M(
            Dk,
            {
              contentEditable: /* @__PURE__ */ M(
                uh,
                {
                  className: `editor-input usfm ${F_(ie).join(" ")}${ie.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ie.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: G
                }
              ),
              placeholder: /* @__PURE__ */ M(P0, {}),
              ErrorBoundary: fh
            }
          ),
          $ && /* @__PURE__ */ M(Yv, {}),
          /* @__PURE__ */ M(ph, {}),
          r && n && /* @__PURE__ */ M(i0, { scrRef: r, onScrRefChange: n }),
          r && !$ && /* @__PURE__ */ M(
            LE,
            {
              trigger: be,
              scrRef: r,
              contextMarker: ae,
              getMarkerAction: (w) => ml(
                w,
                b,
                ie,
                Qe,
                Ze,
                void 0,
                A
              ),
              editableHarness: oo
            }
          ),
          /* @__PURE__ */ M(
            rM,
            {
              scripture: O,
              scriptureRef: y,
              nodeOptions: Qe,
              editorAdaptor: Tr,
              viewOptions: ie,
              logger: Ze
            },
            F
          ),
          /* @__PURE__ */ M(_M, { onChange: i }),
          /* @__PURE__ */ M(
            q_,
            {
              onChange: hi,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: ox
            }
          ),
          /* @__PURE__ */ M(sP, { viewOptions: ie }),
          /* @__PURE__ */ M(R_, { ref: p, logger: Ze }),
          /* @__PURE__ */ M(bv, { viewOptions: ie }),
          /* @__PURE__ */ M(Ov, {}),
          /* @__PURE__ */ M(Dv, {}),
          ie?.markerMode !== "editable" && /* @__PURE__ */ M(Uv, { logger: Ze }),
          /* @__PURE__ */ M(jv, { options: Ka }),
          /* @__PURE__ */ M(ZP, { limit: he, viewOptions: ie }),
          /* @__PURE__ */ M(Jv, {}),
          /* @__PURE__ */ M(Zv, {}),
          /* @__PURE__ */ M(tM, {}),
          /* @__PURE__ */ M(gN, {}),
          /* @__PURE__ */ M(
            DN,
            {
              viewOptions: ie,
              getMarker: fi,
              logger: Ze,
              markerSettleDelayMs: te,
              structureProtectionMode: ne,
              copyLimit: he
            }
          ),
          ie?.markerMode === "visible" && /* @__PURE__ */ M(QP, { viewOptions: ie, copyLimit: he }),
          /* @__PURE__ */ M(
            jN,
            {
              styleInfo: A,
              viewOptions: ie,
              logger: Ze
            }
          ),
          /* @__PURE__ */ M(nM, { ref: h }),
          /* @__PURE__ */ M(
            iM,
            {
              expandedNoteKeyRef: b,
              nodeOptions: Qe,
              viewOptions: ie,
              logger: Ze
            }
          ),
          /* @__PURE__ */ M(SM, {}),
          /* @__PURE__ */ M(hv, {}),
          /* @__PURE__ */ M(cv, {}),
          /* @__PURE__ */ M(t0, { viewOptions: ie, logger: Ze }),
          /* @__PURE__ */ M(
            wM,
            {
              onParaMarkerMenuRequest: a,
              structureProtectionMode: ne
            }
          ),
          /* @__PURE__ */ M(DM, {}),
          /* @__PURE__ */ M(xE, { structureProtectionMode: ne }),
          /* @__PURE__ */ M(TE, { textDirection: ye }),
          /* @__PURE__ */ M(SE, {}),
          /* @__PURE__ */ M(qE, {}),
          u
        ] }),
        se && /* @__PURE__ */ M(y0, {})
      ] })
    ] }, ie.verseLayout ?? "inline")
  );
}), Dw = Pn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ M(Pb, { ref: r, ...i });
});
function Nb() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function oa(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Nb() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function wb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Nb() : r,
    quote: e,
    type: "thread"
  };
}
function jp(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function N0(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Oc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class w0 {
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
    this._comments = t, Oc(this);
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
          const c = jp(a);
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
    this._comments = i, Oc(this);
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
          const c = jp(a);
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
    return this._comments = n, Oc(this), t.type === "comment" ? {
      index: s,
      markedComment: N0(t)
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
    return t !== null ? t.doc.get("comments", $d) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new qd(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new $d();
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
      ex,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      ht
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof tx) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const h = p.insert, g = p.retain, y = p.delete, b = u.parent, T = u === r ? void 0 : b instanceof qd && this._comments.find((k) => k.id === b.get("id"));
              if (Array.isArray(h)) {
                const k = f;
                h.slice().reverse().forEach((E) => {
                  const S = E.get("id"), q = E.get("type") === "thread" ? wb(
                    E.get("quote"),
                    E.get("comments").toArray().map(
                      (F) => oa(
                        F.get("content"),
                        F.get("author"),
                        F.get("id"),
                        F.get("timeStamp"),
                        F.get("deleted")
                      )
                    ),
                    S
                  ) : oa(
                    E.get("content"),
                    E.get("author"),
                    S,
                    E.get("timeStamp"),
                    E.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(q, T, k);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let k = 0; k < y; k++) {
                  const E = T === void 0 || T === !1 ? this._comments[f] : T.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(E, T);
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
function O0(e) {
  const [t, r] = xe(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function R0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = ee(null);
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
function $0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return jn(
    /* @__PURE__ */ M(R0, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Ob() {
  const [e, t] = xe(null), r = Se(() => {
    t(null);
  }, []), n = et(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ M($0, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = Se(
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
const q0 = {
  ...py,
  paragraph: "CommentEditorTheme__paragraph"
};
function I0(...e) {
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
  return /* @__PURE__ */ M(
    "button",
    {
      disabled: i,
      className: I0(
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
function L0({
  className: e
}) {
  return /* @__PURE__ */ M(uh, { className: e || "ContentEditable__root" });
}
function D0({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ M("div", { className: t || "Placeholder__root", children: e });
}
const Vp = la("INSERT_INLINE_COMMAND");
function U0({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = ee(null), s = Se(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Gs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ M("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ M("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ M("i", { className: "icon add-comment" }) }) });
}
function K0({ onEscape: e }) {
  const [t] = pe();
  return j(() => t.registerCommand(
    jl,
    (r) => e(r),
    $r
  ), [t, e]), null;
}
function Rb({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ M(lh, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: q0
  }, children: /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ M(
      Xk,
      {
        contentEditable: /* @__PURE__ */ M(L0, { className: e }),
        placeholder: /* @__PURE__ */ M(D0, { children: s }),
        ErrorBoundary: fh
      }
    ),
    /* @__PURE__ */ M(Yk, { onChange: n }),
    /* @__PURE__ */ M(ph, {}),
    t !== !1 && /* @__PURE__ */ M(Hk, {}),
    /* @__PURE__ */ M(K0, { onEscape: r }),
    /* @__PURE__ */ M(Gk, {}),
    i !== void 0 && /* @__PURE__ */ M(dh, { editorRef: i })
  ] }) });
}
function $b(e, t) {
  return Se(
    (r, n) => {
      r.read(() => {
        e(Qk()), t(!Zk(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function F0({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = xe(""), [s, o] = xe(!1), a = ee(null), c = et(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = ee(null), u = Ib(), d = Se(() => {
    e.getEditorState().read(() => {
      const g = P();
      if (N(g)) {
        l.current = g.clone();
        const y = g.anchor, b = g.focus, T = Kk(
          e,
          y.getNode(),
          y.offset,
          b.getNode(),
          b.offset
        ), k = a.current;
        if (T !== null && k !== null) {
          const { left: E, bottom: S, width: O } = T.getBoundingClientRect(), q = Fk(e, T);
          let F = q.length === 1 ? E + O / 2 - 125 : E - 125;
          F < 10 && (F = 10), k.style.left = `${F}px`, k.style.top = `${S + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const B = q.length, { container: ae } = c, Q = c.elements, ge = Q.length;
          for (let ne = 0; ne < B; ne++) {
            const $ = q[ne];
            let G = Q[ne];
            G === void 0 && (G = document.createElement("span"), Q[ne] = G, ae.appendChild(G));
            const be = `position:absolute;top:${$.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${$.left}px;height:${$.height}px;width:${$.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            G.style.cssText = be;
          }
          for (let ne = ge - 1; ne >= B; ne--) {
            const $ = Q[ne];
            ae.removeChild($), Q.pop();
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
  }, [c.container, d]), j(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        wb(g, [oa(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = $b(i, o);
  return /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ M(
      Rb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ M(An, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ M(
        An,
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
function z0({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = xe(""), [s, o] = xe(!1), a = ee(null), c = Ib(), l = $b(i, o);
  return /* @__PURE__ */ $e(Vn, { children: [
    /* @__PURE__ */ M(
      Rb,
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
      An,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(oa(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(wk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ M("i", { className: "send" })
      }
    )
  ] });
}
function qb({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ $e(Vn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ $e("div", { className: "Modal__content", children: [
      /* @__PURE__ */ M(
        An,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ M(
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
function Wp({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = xe(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Ob();
  return /* @__PURE__ */ $e("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ M("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ $e("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ M("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ $e(Vn, { children: [
      /* @__PURE__ */ M(
        An,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ M(
              qb,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
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
function B0({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = pe(), [a, c] = xe(0), [l, u] = Ob(), d = et(
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
                const b = Array.from(g)[0], T = oe(b);
                Pe(T) && T.selectStart();
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
              An,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ M(
                    qb,
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
            Wp,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ M(
            z0,
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
      Wp,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function j0({
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
      B0,
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
function Ib() {
  const e = hh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function V0({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = hh(), [a] = pe(), c = et(() => {
    const F = new w0(a, s);
    return r && F.registerOnChange(r), t?.(F), F;
  }, [a, s, r, t]), l = O0(c), u = et(() => /* @__PURE__ */ new Map(), []), [d, f] = xe(), [p, h] = xe([]), [g, y] = xe(!1), [b, T] = xe(!1), { yjsDocMap: k } = o;
  j(() => {
    if (e) {
      const F = e("comments", k);
      return c.registerCollaboration(F);
    }
    return () => {
    };
  }, [c, e, k]);
  const E = Se(() => {
    a.update(() => {
      const F = P();
      F !== null && (F.dirty = !0);
    }), y(!1);
  }, [a]), S = Se(
    (F, B) => {
      if (F.type === "comment") {
        const ae = c.deleteCommentOrThread(F, B);
        if (!ae)
          return;
        const { markedComment: Q, index: ge } = ae;
        c.addComment(Q, B, ge);
      } else {
        c.deleteCommentOrThread(F);
        const ae = B !== void 0 ? B.id : F.id, Q = u.get(ae);
        Q !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ge of Q) {
              const ne = oe(ge);
              Pe(ne) && (ne.deleteID(bn, ae), ne.hasNoIDsForEveryType() && Ro(ne));
            }
          });
        });
      }
    },
    [c, a, u]
  ), O = Se(
    (F, B, ae, Q) => {
      c.addComment(F, ae), B && (a.update(() => {
        N(Q) && Oh(Q, bn, F.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const F = [];
    let B;
    for (const ae of p) {
      const Q = u.get(ae);
      if (Q !== void 0)
        for (const ge of Q) {
          const ne = a.getElementByKey(ge);
          ne !== null && (ne.classList.add("selected"), F.push(ne), B = window.setTimeout(() => {
            T(!0);
          }, 0));
        }
    }
    return () => {
      B !== void 0 && window.clearTimeout(B);
      for (const ae of F)
        ae.classList.remove("selected");
    };
  }, [p, a, u]), j(() => {
    if (!a.hasNodes([ft]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const F = /* @__PURE__ */ new Map();
    return qe(
      ch(
        a,
        ft,
        (B) => Os(B.getTypedIDs()),
        (B, ae) => {
          for (const [Q, ge] of Object.entries(B.getTypedIDs()))
            ge.forEach((ne) => {
              ae.addID(Q, ne);
            });
        }
      ),
      a.registerMutationListener(
        ft,
        (B) => {
          a.getEditorState().read(() => {
            for (const [ae, Q] of B) {
              const ge = oe(ae);
              let ne = [];
              Q === "destroyed" ? ne = F.get(ae) ?? [] : Pe(ge) && (ne = ge.getTypedIDs()[bn] ?? []);
              for (const $ of ne) {
                let G = u.get($);
                F.set(ae, ne), Q === "destroyed" ? G !== void 0 && (G.delete(ae), G.size === 0 && u.delete($)) : (G === void 0 && (G = /* @__PURE__ */ new Set(), u.set($, G)), G.has(ae) || G.add(ae));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: B, tags: ae }) => {
        B.read(() => {
          const Q = P();
          let ge = !1, ne = !1;
          if (N(Q)) {
            const $ = Q.anchor.getNode();
            if (v($)) {
              const G = Kx($, bn, Q.anchor.offset) ?? [];
              G !== null && (h(G), ge = !0), Q.isCollapsed() || (f($.getKey()), ne = !0);
            }
          }
          ge || h(($) => $.length === 0 ? $ : []), ne || f(null), !ae.has("collaboration") && N(Q) && y(!1);
        });
      }),
      a.registerCommand(
        Vp,
        () => {
          const B = window.getSelection();
          return B !== null && B.removeAllRanges(), y(!0), !0;
        },
        Hn
      )
    );
  }, [a, u]);
  const q = () => {
    a.dispatchCommand(Vp, void 0);
  };
  return /* @__PURE__ */ $e(Vn, { children: [
    g && jn(
      /* @__PURE__ */ M(
        F0,
        {
          editor: a,
          cancelAddComment: E,
          submitAddComment: O
        }
      ),
      document.body
    ),
    d != null && !g && jn(
      /* @__PURE__ */ M(
        U0,
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
      /* @__PURE__ */ M(
        An,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => T(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ M("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && jn(
      /* @__PURE__ */ M(
        j0,
        {
          comments: l,
          submitAddComment: O,
          deleteCommentOrThread: S,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function W0() {
  const e = ee(void 0), t = Se((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function H0(e, t) {
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
function G0(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      H0(r, t);
    };
  }, [t, e]);
}
const Uw = Pn(function(t, r) {
  const n = ee(null), i = ee(!0), s = ee(null), [o, a] = xe(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, y = (h ?? !1) || Ks(g), [b, T] = W0();
  G0(f, b), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const S = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(S), p || console.warn(S);
    }
  }, [p]), aa(r, () => ({
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
    applyUpdate(S, O) {
      n.current?.applyUpdate(S, O);
    },
    replaceEmbedUpdate(S, O) {
      return n.current?.replaceEmbedUpdate(S, O);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    getSelectedParaMarker() {
      return n.current?.getSelectedParaMarker();
    },
    setSelection(S) {
      n.current?.setSelection(S);
    },
    setAnnotation(S, O, q, F, B) {
      typeof F == "function" || F === void 0 ? n.current?.setAnnotation(S, O, q, F, B) : n.current?.setAnnotation(S, O, q, F);
    },
    removeAnnotation(S, O) {
      n.current?.removeAnnotation(S, O);
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
    replaceCharacterMarker(S, O) {
      return n.current?.replaceCharacterMarker(S, O) ?? !1;
    },
    extendCharacterMarker(S, O) {
      return n.current?.extendCharacterMarker(S, O) ?? !1;
    },
    insertMarker(S) {
      return n.current?.insertMarker(S);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(S, O) {
      return n.current?.applyMarkerMenuSelection(S, O);
    },
    splitParagraphWithMarker(S) {
      n.current?.splitParagraphWithMarker(S);
    },
    commitTypedMarker(S, O) {
      return n.current?.commitTypedMarker(S, O) ?? !1;
    },
    commitTypedCloser(S) {
      return n.current?.commitTypedCloser(S) ?? !1;
    },
    insertNote(S, O, q) {
      n.current?.insertNote(S, O, q);
    },
    selectNote(S) {
      n.current?.selectNote(S);
    },
    selectAfterNote(S) {
      n.current?.selectAfterNote(S);
    },
    selectNoteTextOffset(S, O, q) {
      n.current?.selectNoteTextOffset(S, O, q);
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
      b.current?.setComments(S), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const k = Se(
    (S, O, q, F) => {
      if (!u) return;
      const B = b.current?.getComments();
      u(S, B, O, q, F);
    },
    [b, u]
  ), E = Se(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const S = b.current?.getComments();
    l(S);
  }, [b, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ M(Jk, { children: /* @__PURE__ */ $e(Pb, { ref: n, onUsjChange: k, ...f, children: [
    /* @__PURE__ */ M(
      V0,
      {
        setCommentStore: T,
        onChange: E,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ M("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Bn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function J0(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function Y0(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const X0 = /^[#\w().,%/\s-]+$/;
function Jr(e) {
  return e != null;
}
const Q0 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, Z0 = {
  left: "right",
  right: "left"
}, ew = "var(--usj-font-fallback, serif)";
function Lb(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${J0(i)}"`).join(", ")}, ${ew}`;
}
const Il = ".editor-input.usfm", tw = /^[\w.#[\]="':()>+~*,\s-]+$/;
function rw(e) {
  return tw.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Il}".`
  ), Il);
}
function nw(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Lb(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (X0.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Jr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Jr(t.firstLineIndent) && s.push(`text-indent: ${Bn(t.firstLineIndent * 20 * r)}vw`), Jr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Bn(t.leftMargin * 20 * r)}vw`), Jr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Bn(t.rightMargin * 20 * r)}vw`
  ), Jr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Bn(t.spaceBefore * r)}pt`), Jr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Bn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = Q0[n ? Z0[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Hp = { c: 150, ca: 133, cp: 150 };
function Gp(e, t) {
  return e && Jr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function iw(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Jr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Gp(e.markers.c, Hp.c);
  return ["ca", "cp"].map((i) => {
    const s = Gp(
      e.markers[i],
      Hp[i]
    ), o = Bn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function Kw(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Il } = t, s = rw(i), o = [], a = [];
  e.defaultFont && a.push(Lb(e.defaultFont)), Jr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Bn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = nw(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${Y0(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...iw(e, s)), o.join(`
`);
}
export {
  om as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  Dw as Editorial,
  Ps as GENERATOR_NOTE_CALLER,
  mh as HIDDEN_NOTE_CALLER,
  Uw as Marginal,
  x as MarkerType,
  sm as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Iu as STANDARD_VIEW_MODE,
  Uo as defaultStyleInfo,
  Lw as directionToNames,
  __ as filterAndRankItems,
  Kw as generateUsjCss,
  qw as getDefaultViewMode,
  Ma as getDefaultViewOptions,
  m1 as getEnterMenuItems,
  g1 as getMarkerMenuItems,
  Iw as getViewMode,
  Uu as getViewOptions,
  Ks as isBlockVerseLayout,
  gn as isInsertEmbedOpOfType,
  L_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
